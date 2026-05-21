# DKM MVP Design - Voxta Knowledge Base

**Date**: 2025-12-18  
**Status**: Approved  
**Target**: Voxta Discord community help channel

---

## Overview

Build an MVP that extracts knowledge from Voxta's Discord help channel (12mo backfill) and maintains a living knowledge base through continuous monitoring.

## Scope

### In Scope (MVP)

- Backfill mode: Fetch 12 months of historical messages
- Live mode: Discord gateway for real-time message capture
- Multi-model LLM: Cheap model for filtering, quality model for extraction
- Smart thread detection: Discord threads + replies + time-based grouping
- Role-based authority scoring
- Knowledge types: `qa`, `troubleshooting`, `reference`, `tip`
- Filesystem output: Markdown files to `./kb/`
- CLI: `backfill`, `process`, `start`, `validate`, `stats`

### Out of Scope (Post-MVP)

- GitHub PR adapter
- Semantic deduplication (hooks ready)
- Static site generation (VitePress)
- Learned reputation scoring
- Reaction-based authority signals
- Knowledge types: `howto`, `correction`, `concept`, `announcement`

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                              CLI Layer                                   │
│  backfill | process | start | validate | stats                          │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
┌─────────────────────────────────────────────────────────────────────────┐
│                           Core Pipeline                                  │
│                                                                          │
│  ┌──────────────┐   ┌──────────────┐   ┌──────────────┐                │
│  │   Discord    │   │   Thread     │   │   Filter     │                │
│  │   Fetcher    │──▶│   Builder    │──▶│   (cheap)    │                │
│  │              │   │              │   │              │                │
│  └──────────────┘   └──────────────┘   └──────────────┘                │
│                                              │                           │
│                                              ▼                           │
│  ┌──────────────┐   ┌──────────────┐   ┌──────────────┐                │
│  │  Filesystem  │   │  Formatter   │   │  Extractor   │                │
│  │   Output     │◀──│  (Markdown)  │◀──│  (quality)   │                │
│  │              │   │              │   │              │                │
│  └──────────────┘   └──────────────┘   └──────────────┘                │
│                                              │                           │
│                                              ▼                           │
│                                      ┌──────────────┐                   │
│                                      │  Authority   │                   │
│                                      │   Scorer     │                   │
│                                      └──────────────┘                   │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
┌─────────────────────────────────────────────────────────────────────────┐
│                          Storage Layer                                   │
│                                                                          │
│  SQLite + Drizzle ORM                                                   │
│  Tables: messages, threads, contributors, knowledge, cursors            │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
┌─────────────────────────────────────────────────────────────────────────┐
│                         Pluggable Interfaces                             │
│                                                                          │
│  IMessageStore │ ILLMProvider │ IOutputAdapter                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Data Flow

### Backfill Mode

1. CLI triggers `backfill --days 365`
2. Discord Fetcher uses REST API to paginate historical messages
3. Messages stored in SQLite with `processed: false`
4. Cursor saved per channel for resumable fetches
5. Run `process` to extract knowledge

### Live Mode

1. CLI triggers `start` (daemon)
2. Discord.js gateway connects, listens for messages
3. New messages stored immediately with `processed: false`
4. Scheduler triggers `process` on cron (default: daily 6 AM)

### Processing Pipeline

1. Fetch unprocessed messages from storage
2. Thread Builder groups into conversations (replies + time-based)
3. Filter model (cheap) classifies: "has extractable knowledge?" → yes/no
4. Extraction model (quality) extracts structured knowledge from passing threads
5. Authority Scorer weights by author roles
6. Formatter converts to markdown with frontmatter
7. Filesystem Output writes to `./kb/{topic}/{slug}.md`
8. Mark source messages as processed

---

## Data Models

### Storage (SQLite + Drizzle)

```typescript
// messages table
{
  id: string,              // Discord message ID
  channelId: string,
  threadId: string | null, // Discord thread ID if in thread
  guildId: string,
  authorId: string,
  authorUsername: string,
  authorRoles: string[],   // JSON array
  content: string,
  referencedMessageId: string | null,
  attachments: JSON,
  reactions: JSON,
  createdAt: Date,
  editedAt: Date | null,
  deletedAt: Date | null,
  processed: boolean,
  processedAt: Date | null,
}

// cursors table (for resumable fetches)
{
  key: string,             // e.g., "channel-123456"
  value: string,           // last message ID
  updatedAt: Date,
}

// contributors table
{
  userId: string,
  username: string,
  displayName: string | null,
  roles: JSON,             // cached role IDs
  authorityScore: number,  // computed from roles
  messageCount: number,
  firstSeen: Date,
  lastSeen: Date,
}

// knowledge table
{
  id: string,              // UUID
  slug: string,
  type: string,            // qa, troubleshooting, reference, tip
  title: string,
  content: string,
  summary: string,
  topics: JSON,
  keywords: JSON,
  sourceMessageIds: JSON,
  primaryContributorId: string,
  confidenceScore: number,
  authorityScore: number,
  combinedScore: number,
  status: string,          // draft, published
  createdAt: Date,
  updatedAt: Date,
  filePath: string,        // where it was written
}
```

---

## LLM Configuration

### Multi-Model Setup (OpenRouter)

```yaml
llm:
  provider: "openrouter"
  baseUrl: "https://openrouter.ai/api/v1"
  apiKey: ${OPENROUTER_API_KEY}

  models:
    filter:
      model: "anthropic/claude-3-haiku" # or "openai/gpt-4o-mini"
      maxTokens: 1024
      temperature: 0

    extract:
      model: "anthropic/claude-sonnet-4-20250514" # or "openai/gpt-4o"
      maxTokens: 4096
      temperature: 0
```

### Filter Prompt (Cheap Model)

```
Analyze this Discord conversation and determine if it contains extractable knowledge.

Return JSON: { "hasKnowledge": boolean, "types": ["qa"|"troubleshooting"|"reference"|"tip"], "confidence": 0-1 }

Only return hasKnowledge: true if there's a clear question with answer, problem with solution, reference information, or useful tip.
```

### Extraction Prompt (Quality Model)

```
Extract knowledge from this Discord conversation.

Authority scores (0-1, higher = more trusted):
{authorityScores}

Conversation:
{messages}

Return JSON array of knowledge entries:
[{
  "type": "qa" | "troubleshooting" | "reference" | "tip",
  "title": "Short descriptive title",
  "question": "The question asked (if qa/troubleshooting)",
  "answer": "The answer in markdown",
  "content": "Full content in markdown",
  "summary": "One-line summary",
  "topics": ["topic-slugs"],
  "keywords": ["search", "terms"],
  "confidence": 0-1,
  "sourceMessageIds": ["123", "456"],
  "primaryContributorId": "user-who-gave-answer"
}]
```

---

## Topic Taxonomy

| Slug              | Name                 | Description                        |
| ----------------- | -------------------- | ---------------------------------- |
| `setup`           | Setup & Installation | Getting Voxta running              |
| `configuration`   | Configuration        | Settings, options, config files    |
| `llm`             | LLM & Models         | Model setup, providers, parameters |
| `scripting`       | Scripting & Plugins  | Custom scripts, extensions         |
| `integrations`    | Integrations         | Third-party connections            |
| `troubleshooting` | Troubleshooting      | Common errors, fixes               |
| `performance`     | Performance          | Optimization, hardware             |

---

## Authority Scoring

Role-based only for MVP:

```yaml
discord:
  roleWeights:
    - roleId: "CORE_TEAM_ROLE_ID"
      name: "Core Team"
      weight: 1.0
    - roleId: "MODERATOR_ROLE_ID"
      name: "Moderator"
      weight: 0.9
    - roleId: "CONTRIBUTOR_ROLE_ID"
      name: "Contributor"
      weight: 0.7
    default: 0.2
```

Combined score: `confidenceScore * 0.6 + authorityScore * 0.4`

---

## Thread Detection Algorithm

```typescript
function buildThreads(messages: Message[]): Thread[] {
  // 1. Group by Discord thread ID (native threads)
  // 2. Group by reply chain (referencedMessageId)
  // 3. Time-based grouping:
  //    - Same channel, within 30 min gap
  //    - Same participants continuing conversation
  //    - No intervening unrelated messages
  // 4. Merge overlapping groups
  // 5. Filter: min 2 messages per thread
}
```

---

## Output Format

### File Structure

```
kb/
├── setup/
│   └── how-to-install-voxta.md
├── configuration/
│   └── api-key-setup.md
├── llm/
│   └── recommended-models.md
├── troubleshooting/
│   └── connection-refused-error.md
└── _index.json  # KB index for future search
```

### Markdown Format

```markdown
---
id: abc123
slug: how-to-install-voxta
type: qa
title: How to Install Voxta
topics:
  - setup
keywords:
  - install
  - setup
  - getting started
confidence: 0.92
authority: 0.85
sources:
  - messageId: "123456789"
    author: "dev_user"
    timestamp: "2025-01-15T10:00:00Z"
    url: "https://discord.com/channels/..."
created: 2025-12-18T12:00:00Z
---

# How to Install Voxta

> One-line summary of the installation process.

## Question

How do I install Voxta on Windows?

## Answer

To install Voxta on Windows:

1. Download the latest release...
2. Extract to a folder...
3. Run `voxta.exe`...

---

_Extracted from Discord. Primary contributor: dev_user_
```

---

## CLI Commands

| Command                 | Description                            |
| ----------------------- | -------------------------------------- |
| `dkm backfill --days N` | Fetch N days of historical messages    |
| `dkm process`           | Run extraction on unprocessed messages |
| `dkm start`             | Start live watcher daemon              |
| `dkm validate`          | Validate configuration                 |
| `dkm stats`             | Show database statistics               |

---

## Configuration

See `config.example.yaml` - key additions for MVP:

```yaml
llm:
  provider: "openrouter"
  models:
    filter:
      model: "anthropic/claude-3-haiku"
    extract:
      model: "anthropic/claude-sonnet-4-20250514"

output:
  adapter: "filesystem"
  filesystem:
    path: "./kb"

# Deduplication hooks (not implemented, but config ready)
deduplication:
  enabled: false
  # Future: similarityThreshold, embeddings config
```

---

## Future Hooks (Not MVP)

### Semantic Deduplication

- `IEmbeddingProvider` interface ready
- `embeddings` table schema defined
- `findSimilar(embedding, threshold)` method stubbed

### GitHub PR Adapter

- `IOutputAdapter` interface already defined
- Config structure ready in `output.github`

### Site Generation

- VitePress config exists
- Just needs `site:build` to work

---

## Success Criteria

1. **Backfill works**: Can fetch 12mo of messages from Voxta help channel
2. **Extraction quality**: Manual review shows >70% of extractions are useful
3. **Live mode works**: New messages captured and processed on schedule
4. **Output readable**: Markdown files are well-formatted and discoverable
