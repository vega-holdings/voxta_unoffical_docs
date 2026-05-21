# DKM MVP Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a working Discord Knowledge Miner that extracts Q&A, troubleshooting, reference, and tip knowledge from Voxta's help channel with 12-month backfill and live monitoring.

**Architecture:** Plugin-based system with pluggable interfaces (IMessageStore, ILLMProvider, IOutputAdapter). SQLite + Drizzle for storage, OpenRouter for multi-model LLM (cheap filter + quality extract), filesystem output to markdown. Discord.js for both REST backfill and gateway live mode.

**Tech Stack:** TypeScript (strict), Discord.js 14, Drizzle ORM + better-sqlite3, OpenAI SDK (OpenRouter-compatible), Zod validation, Pino logging, Commander CLI, p-queue for rate limiting.

---

## Phase 1: Project Foundation

### Task 1: Project Structure Setup

**Files:**

- Create: `src/index.ts`
- Create: `src/types/index.ts`
- Create: `src/config/schema.ts`
- Create: `src/config/loader.ts`
- Create: `src/config/index.ts`
- Create: `src/utils/logger.ts`
- Move: `index.ts` → `src/types/index.ts` (types already defined there)
- Move: `ILLMProvider.ts` → `src/llm/interfaces/ILLMProvider.ts`
- Move: `IMessageStore.ts` → `src/storage/interfaces/IMessageStore.ts`
- Move: `IOutputAdapter.ts` → `src/output/interfaces/IOutputAdapter.ts`
- Create: `config/default.yaml`

**Step 1: Create directory structure**

```bash
mkdir -p src/{bot,storage/{interfaces,adapters},processor/{extractor/prompts},authority,llm/{interfaces,providers},output/{interfaces,adapters,formatters},config,cli/commands,types,utils}
mkdir -p data tests/{unit,integration,fixtures}
```

**Step 2: Move existing interface files**

```bash
mv index.ts src/types/index.ts
mv ILLMProvider.ts src/llm/interfaces/ILLMProvider.ts
mv IMessageStore.ts src/storage/interfaces/IMessageStore.ts
mv IOutputAdapter.ts src/output/interfaces/IOutputAdapter.ts
```

**Step 3: Create logger utility**

Create `src/utils/logger.ts`:

```typescript
import pino from "pino";

const isDev = process.env.NODE_ENV !== "production";

export const logger = pino({
  level: process.env.LOG_LEVEL || "info",
  transport: isDev
    ? {
        target: "pino-pretty",
        options: {
          colorize: true,
          translateTime: "SYS:standard",
          ignore: "pid,hostname",
        },
      }
    : undefined,
});

export type Logger = typeof logger;
```

**Step 4: Create config schema with Zod**

Create `src/config/schema.ts`:

```typescript
import { z } from "zod";

const ChannelConfigSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.enum(["help", "faq", "announcements", "general"]),
  priority: z.enum(["high", "medium", "low"]),
});

const RoleWeightSchema = z.object({
  roleId: z.string(),
  name: z.string(),
  weight: z.number().min(0).max(1),
});

const TopicSchema = z.object({
  slug: z.string(),
  name: z.string(),
  description: z.string(),
});

const LLMModelConfigSchema = z.object({
  model: z.string(),
  maxTokens: z.number().optional().default(4096),
  temperature: z.number().optional().default(0),
});

export const ConfigSchema = z.object({
  discord: z.object({
    token: z.string(),
    guildId: z.string(),
    channels: z.array(ChannelConfigSchema),
    roleWeights: z.array(RoleWeightSchema),
    defaultRoleWeight: z.number().min(0).max(1).default(0.2),
  }),

  processing: z.object({
    schedule: z.string().default("0 6 * * *"),
    batchSize: z.number().default(100),
    lookbackHours: z.number().default(24),
    threadDetection: z.object({
      replyChainMax: z.number().default(10),
      timeGapMinutes: z.number().default(30),
      minMessagesForThread: z.number().default(2),
    }),
    extraction: z.object({
      minConfidence: z.number().default(0.6),
      minAuthority: z.number().default(0.3),
      minCombinedScore: z.number().default(0.5),
    }),
  }),

  llm: z.object({
    provider: z
      .enum(["openrouter", "anthropic", "openai", "ollama"])
      .default("openrouter"),
    baseUrl: z.string().optional(),
    apiKey: z.string(),
    models: z.object({
      filter: LLMModelConfigSchema,
      extract: LLMModelConfigSchema,
    }),
    rateLimiting: z.object({
      requestsPerMinute: z.number().default(50),
      tokensPerMinute: z.number().default(100000),
    }),
  }),

  output: z.object({
    adapter: z.enum(["filesystem", "github-pr"]).default("filesystem"),
    filesystem: z.object({
      path: z.string().default("./kb"),
    }),
  }),

  knowledgeBase: z.object({
    topics: z.array(TopicSchema),
  }),

  logging: z.object({
    level: z.enum(["debug", "info", "warn", "error"]).default("info"),
  }),
});

export type Config = z.infer<typeof ConfigSchema>;
export type ChannelConfig = z.infer<typeof ChannelConfigSchema>;
export type RoleWeightConfig = z.infer<typeof RoleWeightSchema>;
export type TopicConfig = z.infer<typeof TopicSchema>;
```

**Step 5: Create config loader**

Create `src/config/loader.ts`:

```typescript
import { readFileSync, existsSync } from "fs";
import { parse } from "yaml";
import { ConfigSchema, type Config } from "./schema.js";
import { logger } from "../utils/logger.js";

function resolveEnvVars(obj: unknown): unknown {
  if (typeof obj === "string") {
    // Match ${VAR_NAME} pattern
    const match = obj.match(/^\$\{([^}]+)\}$/);
    if (match) {
      const envVar = match[1];
      const value = process.env[envVar];
      if (!value) {
        logger.warn({ envVar }, "Environment variable not set");
      }
      return value || "";
    }
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(resolveEnvVars);
  }

  if (obj !== null && typeof obj === "object") {
    const result: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(obj)) {
      result[key] = resolveEnvVars(value);
    }
    return result;
  }

  return obj;
}

export function loadConfig(configPath?: string): Config {
  const paths = [
    configPath,
    "config/config.yaml",
    "config/default.yaml",
  ].filter(Boolean) as string[];

  let rawConfig: Record<string, unknown> = {};

  for (const path of paths) {
    if (existsSync(path)) {
      logger.debug({ path }, "Loading config file");
      const content = readFileSync(path, "utf-8");
      const parsed = parse(content) as Record<string, unknown>;
      rawConfig = deepMerge(rawConfig, parsed);
    }
  }

  // Resolve environment variables
  const resolved = resolveEnvVars(rawConfig);

  // Validate with Zod
  const result = ConfigSchema.safeParse(resolved);

  if (!result.success) {
    logger.error(
      { errors: result.error.flatten() },
      "Config validation failed",
    );
    throw new Error(`Config validation failed: ${result.error.message}`);
  }

  return result.data;
}

function deepMerge(
  target: Record<string, unknown>,
  source: Record<string, unknown>,
): Record<string, unknown> {
  const result = { ...target };

  for (const key of Object.keys(source)) {
    const sourceValue = source[key];
    const targetValue = target[key];

    if (isObject(sourceValue) && isObject(targetValue)) {
      result[key] = deepMerge(
        targetValue as Record<string, unknown>,
        sourceValue as Record<string, unknown>,
      );
    } else {
      result[key] = sourceValue;
    }
  }

  return result;
}

function isObject(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
```

**Step 6: Create config index**

Create `src/config/index.ts`:

```typescript
export { loadConfig } from "./loader.js";
export { ConfigSchema } from "./schema.js";
export type {
  Config,
  ChannelConfig,
  RoleWeightConfig,
  TopicConfig,
} from "./schema.js";
```

**Step 7: Create default config**

Create `config/default.yaml`:

```yaml
discord:
  token: ${DISCORD_TOKEN}
  guildId: ${DISCORD_GUILD_ID}
  channels: []
  roleWeights: []
  defaultRoleWeight: 0.2

processing:
  schedule: "0 6 * * *"
  batchSize: 100
  lookbackHours: 24
  threadDetection:
    replyChainMax: 10
    timeGapMinutes: 30
    minMessagesForThread: 2
  extraction:
    minConfidence: 0.6
    minAuthority: 0.3
    minCombinedScore: 0.5

llm:
  provider: "openrouter"
  baseUrl: "https://openrouter.ai/api/v1"
  apiKey: ${OPENROUTER_API_KEY}
  models:
    filter:
      model: "anthropic/claude-3-haiku"
      maxTokens: 1024
      temperature: 0
    extract:
      model: "anthropic/claude-sonnet-4-20250514"
      maxTokens: 4096
      temperature: 0
  rateLimiting:
    requestsPerMinute: 50
    tokensPerMinute: 100000

output:
  adapter: "filesystem"
  filesystem:
    path: "./kb"

knowledgeBase:
  topics:
    - slug: "setup"
      name: "Setup & Installation"
      description: "Getting Voxta running"
    - slug: "configuration"
      name: "Configuration"
      description: "Settings, options, config files"
    - slug: "llm"
      name: "LLM & Models"
      description: "Model setup, providers, parameters"
    - slug: "scripting"
      name: "Scripting & Plugins"
      description: "Custom scripts, extensions"
    - slug: "integrations"
      name: "Integrations"
      description: "Third-party connections"
    - slug: "troubleshooting"
      name: "Troubleshooting"
      description: "Common errors, fixes"
    - slug: "performance"
      name: "Performance"
      description: "Optimization, hardware"

logging:
  level: "info"
```

**Step 8: Update .env.example**

Update `.env.example` to include OpenRouter:

```bash
# Discord
DISCORD_TOKEN=your-bot-token
DISCORD_GUILD_ID=123456789012345678

# LLM - OpenRouter (recommended for multi-model)
OPENROUTER_API_KEY=sk-or-...

# Optional: Direct provider keys
ANTHROPIC_API_KEY=sk-ant-...
OPENAI_API_KEY=sk-...

# GitHub (future - not MVP)
GITHUB_TOKEN=ghp_...

# Logging
LOG_LEVEL=info
NODE_ENV=development
```

**Step 9: Commit foundation**

```bash
git add -A
git commit -m "feat: project structure and config system"
```

---

### Task 2: Database Schema with Drizzle

**Files:**

- Create: `src/storage/schema.ts`
- Create: `src/storage/db.ts`
- Create: `scripts/migrate.ts`

**Step 1: Create Drizzle schema**

Create `src/storage/schema.ts`:

```typescript
import {
  sqliteTable,
  text,
  integer,
  real,
  blob,
} from "drizzle-orm/sqlite-core";

export const messages = sqliteTable("messages", {
  id: text("id").primaryKey(), // Discord message ID
  channelId: text("channel_id").notNull(),
  threadId: text("thread_id"),
  guildId: text("guild_id").notNull(),
  authorId: text("author_id").notNull(),
  authorUsername: text("author_username").notNull(),
  authorRoles: text("author_roles", { mode: "json" })
    .$type<string[]>()
    .notNull()
    .default([]),
  content: text("content").notNull(),
  referencedMessageId: text("referenced_message_id"),
  attachments: text("attachments", { mode: "json" })
    .$type<
      Array<{
        id: string;
        filename: string;
        url: string;
        contentType?: string;
      }>
    >()
    .notNull()
    .default([]),
  reactions: text("reactions", { mode: "json" })
    .$type<
      Array<{
        emoji: string;
        count: number;
      }>
    >()
    .notNull()
    .default([]),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
  editedAt: integer("edited_at", { mode: "timestamp_ms" }),
  deletedAt: integer("deleted_at", { mode: "timestamp_ms" }),
  processed: integer("processed", { mode: "boolean" }).notNull().default(false),
  processedAt: integer("processed_at", { mode: "timestamp_ms" }),
});

export const cursors = sqliteTable("cursors", {
  key: text("key").primaryKey(),
  value: text("value").notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).notNull(),
});

export const contributors = sqliteTable("contributors", {
  userId: text("user_id").primaryKey(),
  username: text("username").notNull(),
  displayName: text("display_name"),
  roles: text("roles", { mode: "json" })
    .$type<string[]>()
    .notNull()
    .default([]),
  authorityScore: real("authority_score").notNull().default(0.2),
  messageCount: integer("message_count").notNull().default(0),
  firstSeen: integer("first_seen", { mode: "timestamp_ms" }).notNull(),
  lastSeen: integer("last_seen", { mode: "timestamp_ms" }).notNull(),
});

export const knowledge = sqliteTable("knowledge", {
  id: text("id").primaryKey(), // UUID
  slug: text("slug").notNull().unique(),
  type: text("type").notNull(), // qa, troubleshooting, reference, tip
  title: text("title").notNull(),
  content: text("content").notNull(),
  summary: text("summary").notNull(),
  topics: text("topics", { mode: "json" })
    .$type<string[]>()
    .notNull()
    .default([]),
  keywords: text("keywords", { mode: "json" })
    .$type<string[]>()
    .notNull()
    .default([]),
  sourceMessageIds: text("source_message_ids", { mode: "json" })
    .$type<string[]>()
    .notNull()
    .default([]),
  primaryContributorId: text("primary_contributor_id").notNull(),
  confidenceScore: real("confidence_score").notNull(),
  authorityScore: real("authority_score").notNull(),
  combinedScore: real("combined_score").notNull(),
  status: text("status").notNull().default("draft"), // draft, published
  filePath: text("file_path"),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).notNull(),
});

// Future: embeddings table for semantic dedup
export const embeddings = sqliteTable("embeddings", {
  entryId: text("entry_id")
    .primaryKey()
    .references(() => knowledge.id),
  vector: blob("vector"), // Store as binary for efficiency
  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
});
```

**Step 2: Create database connection**

Create `src/storage/db.ts`:

```typescript
import Database from "better-sqlite3";
import {
  drizzle,
  type BetterSQLite3Database,
} from "drizzle-orm/better-sqlite3";
import * as schema from "./schema.js";
import { logger } from "../utils/logger.js";

let db: BetterSQLite3Database<typeof schema> | null = null;
let sqlite: Database.Database | null = null;

export function getDb(): BetterSQLite3Database<typeof schema> {
  if (!db) {
    throw new Error("Database not initialized. Call initDb() first.");
  }
  return db;
}

export function initDb(
  dbPath: string = "data/dkm.db",
): BetterSQLite3Database<typeof schema> {
  if (db) {
    return db;
  }

  logger.info({ dbPath }, "Initializing database");

  sqlite = new Database(dbPath);
  sqlite.pragma("journal_mode = WAL");
  sqlite.pragma("foreign_keys = ON");

  db = drizzle(sqlite, { schema });

  return db;
}

export function closeDb(): void {
  if (sqlite) {
    sqlite.close();
    sqlite = null;
    db = null;
    logger.info("Database connection closed");
  }
}

export { schema };
```

**Step 3: Create migration script**

Create `scripts/migrate.ts`:

```typescript
import { existsSync, mkdirSync } from "fs";
import Database from "better-sqlite3";
import { logger } from "../src/utils/logger.js";

const DB_PATH = process.env.DB_PATH || "data/dkm.db";

// Ensure data directory exists
const dataDir = DB_PATH.split("/").slice(0, -1).join("/");
if (dataDir && !existsSync(dataDir)) {
  mkdirSync(dataDir, { recursive: true });
}

const db = new Database(DB_PATH);
db.pragma("journal_mode = WAL");

logger.info({ dbPath: DB_PATH }, "Running migrations");

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS messages (
    id TEXT PRIMARY KEY,
    channel_id TEXT NOT NULL,
    thread_id TEXT,
    guild_id TEXT NOT NULL,
    author_id TEXT NOT NULL,
    author_username TEXT NOT NULL,
    author_roles TEXT NOT NULL DEFAULT '[]',
    content TEXT NOT NULL,
    referenced_message_id TEXT,
    attachments TEXT NOT NULL DEFAULT '[]',
    reactions TEXT NOT NULL DEFAULT '[]',
    created_at INTEGER NOT NULL,
    edited_at INTEGER,
    deleted_at INTEGER,
    processed INTEGER NOT NULL DEFAULT 0,
    processed_at INTEGER
  );

  CREATE INDEX IF NOT EXISTS idx_messages_channel ON messages(channel_id);
  CREATE INDEX IF NOT EXISTS idx_messages_processed ON messages(processed);
  CREATE INDEX IF NOT EXISTS idx_messages_created_at ON messages(created_at);
  CREATE INDEX IF NOT EXISTS idx_messages_author ON messages(author_id);
  CREATE INDEX IF NOT EXISTS idx_messages_referenced ON messages(referenced_message_id);

  CREATE TABLE IF NOT EXISTS cursors (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    updated_at INTEGER NOT NULL
  );

  CREATE TABLE IF NOT EXISTS contributors (
    user_id TEXT PRIMARY KEY,
    username TEXT NOT NULL,
    display_name TEXT,
    roles TEXT NOT NULL DEFAULT '[]',
    authority_score REAL NOT NULL DEFAULT 0.2,
    message_count INTEGER NOT NULL DEFAULT 0,
    first_seen INTEGER NOT NULL,
    last_seen INTEGER NOT NULL
  );

  CREATE TABLE IF NOT EXISTS knowledge (
    id TEXT PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    type TEXT NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    summary TEXT NOT NULL,
    topics TEXT NOT NULL DEFAULT '[]',
    keywords TEXT NOT NULL DEFAULT '[]',
    source_message_ids TEXT NOT NULL DEFAULT '[]',
    primary_contributor_id TEXT NOT NULL,
    confidence_score REAL NOT NULL,
    authority_score REAL NOT NULL,
    combined_score REAL NOT NULL,
    status TEXT NOT NULL DEFAULT 'draft',
    file_path TEXT,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
  );

  CREATE INDEX IF NOT EXISTS idx_knowledge_slug ON knowledge(slug);
  CREATE INDEX IF NOT EXISTS idx_knowledge_type ON knowledge(type);
  CREATE INDEX IF NOT EXISTS idx_knowledge_status ON knowledge(status);

  CREATE TABLE IF NOT EXISTS embeddings (
    entry_id TEXT PRIMARY KEY REFERENCES knowledge(id),
    vector BLOB,
    created_at INTEGER NOT NULL
  );
`);

logger.info("Migrations complete");

db.close();
```

**Step 4: Create drizzle config**

Create `drizzle.config.ts`:

```typescript
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/storage/schema.ts",
  out: "./drizzle",
  driver: "better-sqlite3",
  dbCredentials: {
    url: "./data/dkm.db",
  },
} satisfies Config;
```

**Step 5: Test migration**

```bash
pnpm db:migrate
```

Expected: Tables created in `data/dkm.db`

**Step 6: Commit database schema**

```bash
git add -A
git commit -m "feat: database schema with Drizzle ORM"
```

---

### Task 3: SQLite Storage Adapter

**Files:**

- Create: `src/storage/adapters/sqlite.ts`
- Create: `src/storage/index.ts`
- Test: `src/storage/adapters/sqlite.test.ts`

**Step 1: Write failing tests**

Create `src/storage/adapters/sqlite.test.ts`:

```typescript
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { SQLiteStore } from "./sqlite.js";
import { unlinkSync, existsSync } from "fs";

const TEST_DB = "data/test.db";

describe("SQLiteStore", () => {
  let store: SQLiteStore;

  beforeEach(async () => {
    store = new SQLiteStore(TEST_DB);
    await store.initialize();
  });

  afterEach(async () => {
    await store.close();
    if (existsSync(TEST_DB)) {
      unlinkSync(TEST_DB);
    }
  });

  describe("messages", () => {
    it("should save and retrieve a message", async () => {
      const message = {
        id: "123",
        channelId: "channel-1",
        guildId: "guild-1",
        authorId: "user-1",
        authorUsername: "testuser",
        authorRoles: ["role-1"],
        content: "Hello world",
        attachments: [],
        reactions: [],
        createdAt: new Date(),
        processed: false,
      };

      await store.saveMessage(message);
      const retrieved = await store.getMessage("123");

      expect(retrieved).toBeDefined();
      expect(retrieved?.id).toBe("123");
      expect(retrieved?.content).toBe("Hello world");
    });

    it("should get unprocessed messages", async () => {
      await store.saveMessage({
        id: "1",
        channelId: "ch-1",
        guildId: "g-1",
        authorId: "u-1",
        authorUsername: "user1",
        authorRoles: [],
        content: "msg 1",
        attachments: [],
        reactions: [],
        createdAt: new Date(),
        processed: false,
      });

      await store.saveMessage({
        id: "2",
        channelId: "ch-1",
        guildId: "g-1",
        authorId: "u-1",
        authorUsername: "user1",
        authorRoles: [],
        content: "msg 2",
        attachments: [],
        reactions: [],
        createdAt: new Date(),
        processed: true,
      });

      const unprocessed = await store.getUnprocessedMessages({ limit: 10 });
      expect(unprocessed).toHaveLength(1);
      expect(unprocessed[0]?.id).toBe("1");
    });

    it("should mark messages as processed", async () => {
      await store.saveMessage({
        id: "1",
        channelId: "ch-1",
        guildId: "g-1",
        authorId: "u-1",
        authorUsername: "user1",
        authorRoles: [],
        content: "msg 1",
        attachments: [],
        reactions: [],
        createdAt: new Date(),
        processed: false,
      });

      await store.markProcessed(["1"]);
      const msg = await store.getMessage("1");

      expect(msg?.processed).toBe(true);
      expect(msg?.processedAt).toBeDefined();
    });
  });

  describe("cursors", () => {
    it("should save and get cursor", async () => {
      await store.setCursor("test-key", "test-value");
      const value = await store.getCursor("test-key");
      expect(value).toBe("test-value");
    });

    it("should return null for missing cursor", async () => {
      const value = await store.getCursor("nonexistent");
      expect(value).toBeNull();
    });
  });

  describe("contributors", () => {
    it("should create and retrieve contributor", async () => {
      const contributor = await store.getOrCreateContributor(
        "user-1",
        "testuser",
      );

      expect(contributor.userId).toBe("user-1");
      expect(contributor.username).toBe("testuser");
      expect(contributor.authorityScore).toBe(0.2);
    });

    it("should get authority scores in bulk", async () => {
      await store.getOrCreateContributor("user-1", "user1");
      await store.updateContributor("user-1", { authorityScore: 0.8 });
      await store.getOrCreateContributor("user-2", "user2");

      const scores = await store.getAuthorityScores([
        "user-1",
        "user-2",
        "user-3",
      ]);

      expect(scores.get("user-1")).toBe(0.8);
      expect(scores.get("user-2")).toBe(0.2);
      expect(scores.has("user-3")).toBe(false);
    });
  });

  describe("stats", () => {
    it("should return storage stats", async () => {
      const stats = await store.getStats();

      expect(stats).toHaveProperty("messageCount");
      expect(stats).toHaveProperty("contributorCount");
      expect(stats).toHaveProperty("entryCount");
    });
  });
});
```

**Step 2: Run tests to verify they fail**

```bash
pnpm test src/storage/adapters/sqlite.test.ts
```

Expected: FAIL (SQLiteStore not found)

**Step 3: Implement SQLiteStore**

Create `src/storage/adapters/sqlite.ts`:

```typescript
import Database from "better-sqlite3";
import {
  drizzle,
  type BetterSQLite3Database,
} from "drizzle-orm/better-sqlite3";
import { eq, and, inArray, isNull, desc, sql } from "drizzle-orm";
import { existsSync, mkdirSync } from "fs";
import * as schema from "../schema.js";
import { messages, cursors, contributors, knowledge } from "../schema.js";
import type { IMessageStore } from "../interfaces/IMessageStore.js";
import type {
  StoredMessage,
  Contributor,
  KnowledgeEntry,
  BatchJob,
  ConversationThread,
} from "../../types/index.js";
import { logger } from "../../utils/logger.js";

export class SQLiteStore implements IMessageStore {
  private db: BetterSQLite3Database<typeof schema> | null = null;
  private sqlite: Database.Database | null = null;
  private dbPath: string;

  constructor(dbPath: string = "data/dkm.db") {
    this.dbPath = dbPath;
  }

  async initialize(): Promise<void> {
    // Ensure directory exists
    const dir = this.dbPath.split("/").slice(0, -1).join("/");
    if (dir && !existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }

    this.sqlite = new Database(this.dbPath);
    this.sqlite.pragma("journal_mode = WAL");
    this.sqlite.pragma("foreign_keys = ON");
    this.db = drizzle(this.sqlite, { schema });

    // Run inline migrations for test DBs
    this.sqlite.exec(`
      CREATE TABLE IF NOT EXISTS messages (
        id TEXT PRIMARY KEY,
        channel_id TEXT NOT NULL,
        thread_id TEXT,
        guild_id TEXT NOT NULL,
        author_id TEXT NOT NULL,
        author_username TEXT NOT NULL,
        author_roles TEXT NOT NULL DEFAULT '[]',
        content TEXT NOT NULL,
        referenced_message_id TEXT,
        attachments TEXT NOT NULL DEFAULT '[]',
        reactions TEXT NOT NULL DEFAULT '[]',
        created_at INTEGER NOT NULL,
        edited_at INTEGER,
        deleted_at INTEGER,
        processed INTEGER NOT NULL DEFAULT 0,
        processed_at INTEGER
      );

      CREATE TABLE IF NOT EXISTS cursors (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL,
        updated_at INTEGER NOT NULL
      );

      CREATE TABLE IF NOT EXISTS contributors (
        user_id TEXT PRIMARY KEY,
        username TEXT NOT NULL,
        display_name TEXT,
        roles TEXT NOT NULL DEFAULT '[]',
        authority_score REAL NOT NULL DEFAULT 0.2,
        message_count INTEGER NOT NULL DEFAULT 0,
        first_seen INTEGER NOT NULL,
        last_seen INTEGER NOT NULL
      );

      CREATE TABLE IF NOT EXISTS knowledge (
        id TEXT PRIMARY KEY,
        slug TEXT NOT NULL UNIQUE,
        type TEXT NOT NULL,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        summary TEXT NOT NULL,
        topics TEXT NOT NULL DEFAULT '[]',
        keywords TEXT NOT NULL DEFAULT '[]',
        source_message_ids TEXT NOT NULL DEFAULT '[]',
        primary_contributor_id TEXT NOT NULL,
        confidence_score REAL NOT NULL,
        authority_score REAL NOT NULL,
        combined_score REAL NOT NULL,
        status TEXT NOT NULL DEFAULT 'draft',
        file_path TEXT,
        created_at INTEGER NOT NULL,
        updated_at INTEGER NOT NULL
      );
    `);

    logger.debug({ dbPath: this.dbPath }, "SQLite store initialized");
  }

  async close(): Promise<void> {
    if (this.sqlite) {
      this.sqlite.close();
      this.sqlite = null;
      this.db = null;
    }
  }

  private getDb(): BetterSQLite3Database<typeof schema> {
    if (!this.db) {
      throw new Error("Database not initialized");
    }
    return this.db;
  }

  // Message operations
  async saveMessage(message: StoredMessage): Promise<void> {
    const db = this.getDb();
    await db
      .insert(messages)
      .values({
        id: message.id,
        channelId: message.channelId,
        threadId: message.threadId,
        guildId: message.guildId,
        authorId: message.authorId,
        authorUsername: message.authorUsername,
        authorRoles: message.authorRoles,
        content: message.content,
        referencedMessageId: message.referencedMessageId,
        attachments: message.attachments,
        reactions: message.reactions.map((r) => ({
          emoji: r.emoji,
          count: r.count,
        })),
        createdAt: message.createdAt,
        editedAt: message.editedAt,
        deletedAt: message.deletedAt,
        processed: message.processed,
        processedAt: message.processedAt,
      })
      .onConflictDoUpdate({
        target: messages.id,
        set: {
          content: message.content,
          editedAt: message.editedAt,
          deletedAt: message.deletedAt,
          reactions: message.reactions.map((r) => ({
            emoji: r.emoji,
            count: r.count,
          })),
        },
      });
  }

  async saveMessages(msgs: StoredMessage[]): Promise<void> {
    for (const msg of msgs) {
      await this.saveMessage(msg);
    }
  }

  async getMessage(messageId: string): Promise<StoredMessage | null> {
    const db = this.getDb();
    const result = await db
      .select()
      .from(messages)
      .where(eq(messages.id, messageId))
      .limit(1);
    const row = result[0];
    if (!row) return null;
    return this.rowToMessage(row);
  }

  async getUnprocessedMessages(options: {
    limit: number;
    channelIds?: string[];
    after?: Date;
  }): Promise<StoredMessage[]> {
    const db = this.getDb();
    const conditions = [eq(messages.processed, false)];

    if (options.channelIds?.length) {
      conditions.push(inArray(messages.channelId, options.channelIds));
    }

    if (options.after) {
      conditions.push(sql`${messages.createdAt} > ${options.after.getTime()}`);
    }

    const result = await db
      .select()
      .from(messages)
      .where(and(...conditions))
      .orderBy(messages.createdAt)
      .limit(options.limit);

    return result.map((row) => this.rowToMessage(row));
  }

  async markProcessed(messageIds: string[], processedAt?: Date): Promise<void> {
    const db = this.getDb();
    const now = processedAt || new Date();

    await db
      .update(messages)
      .set({ processed: true, processedAt: now })
      .where(inArray(messages.id, messageIds));
  }

  async getMessagesByChannel(options: {
    channelId: string;
    after?: Date;
    before?: Date;
    limit?: number;
  }): Promise<StoredMessage[]> {
    const db = this.getDb();
    const conditions = [eq(messages.channelId, options.channelId)];

    if (options.after) {
      conditions.push(sql`${messages.createdAt} > ${options.after.getTime()}`);
    }
    if (options.before) {
      conditions.push(sql`${messages.createdAt} < ${options.before.getTime()}`);
    }

    const result = await db
      .select()
      .from(messages)
      .where(and(...conditions))
      .orderBy(messages.createdAt)
      .limit(options.limit || 1000);

    return result.map((row) => this.rowToMessage(row));
  }

  async getReplies(messageId: string): Promise<StoredMessage[]> {
    const db = this.getDb();
    const result = await db
      .select()
      .from(messages)
      .where(eq(messages.referencedMessageId, messageId))
      .orderBy(messages.createdAt);

    return result.map((row) => this.rowToMessage(row));
  }

  async updateMessage(
    messageId: string,
    updates: Partial<StoredMessage>,
  ): Promise<void> {
    const db = this.getDb();
    await db.update(messages).set(updates).where(eq(messages.id, messageId));
  }

  async markDeleted(messageId: string, deletedAt?: Date): Promise<void> {
    const db = this.getDb();
    await db
      .update(messages)
      .set({ deletedAt: deletedAt || new Date() })
      .where(eq(messages.id, messageId));
  }

  // Cursor operations
  async setCursor(key: string, value: string): Promise<void> {
    const db = this.getDb();
    await db
      .insert(cursors)
      .values({
        key,
        value,
        updatedAt: new Date(),
      })
      .onConflictDoUpdate({
        target: cursors.key,
        set: { value, updatedAt: new Date() },
      });
  }

  async getCursor(key: string): Promise<string | null> {
    const db = this.getDb();
    const result = await db
      .select()
      .from(cursors)
      .where(eq(cursors.key, key))
      .limit(1);
    return result[0]?.value || null;
  }

  // Contributor operations
  async getOrCreateContributor(
    userId: string,
    username: string,
  ): Promise<Contributor> {
    const db = this.getDb();
    const existing = await db
      .select()
      .from(contributors)
      .where(eq(contributors.userId, userId))
      .limit(1);

    if (existing[0]) {
      return this.rowToContributor(existing[0]);
    }

    const now = new Date();
    await db.insert(contributors).values({
      userId,
      username,
      roles: [],
      authorityScore: 0.2,
      messageCount: 0,
      firstSeen: now,
      lastSeen: now,
    });

    return {
      userId,
      username,
      roles: [],
      baseAuthorityScore: 0.2,
      helpfulAnswers: 0,
      confirmedCorrect: 0,
      correctionsMade: 0,
      correctionsReceived: 0,
      learnedAuthorityScore: 0,
      combinedAuthorityScore: 0.2,
      firstSeen: now,
      lastSeen: now,
      messageCount: 0,
      channelsActive: [],
    };
  }

  async updateContributor(
    userId: string,
    updates: Partial<Contributor>,
  ): Promise<void> {
    const db = this.getDb();
    const dbUpdates: Record<string, unknown> = {};

    if (updates.username) dbUpdates.username = updates.username;
    if (updates.displayName) dbUpdates.displayName = updates.displayName;
    if (updates.roles) dbUpdates.roles = updates.roles.map((r) => r.roleId);
    if (updates.baseAuthorityScore !== undefined)
      dbUpdates.authorityScore = updates.baseAuthorityScore;
    if (updates.combinedAuthorityScore !== undefined)
      dbUpdates.authorityScore = updates.combinedAuthorityScore;
    if ("authorityScore" in updates)
      dbUpdates.authorityScore = updates.authorityScore;
    if (updates.messageCount !== undefined)
      dbUpdates.messageCount = updates.messageCount;
    if (updates.lastSeen) dbUpdates.lastSeen = updates.lastSeen;

    if (Object.keys(dbUpdates).length > 0) {
      await db
        .update(contributors)
        .set(dbUpdates)
        .where(eq(contributors.userId, userId));
    }
  }

  async getContributor(userId: string): Promise<Contributor | null> {
    const db = this.getDb();
    const result = await db
      .select()
      .from(contributors)
      .where(eq(contributors.userId, userId))
      .limit(1);
    if (!result[0]) return null;
    return this.rowToContributor(result[0]);
  }

  async getAuthorityScore(userId: string): Promise<number> {
    const contributor = await this.getContributor(userId);
    return contributor?.combinedAuthorityScore || 0.2;
  }

  async getAuthorityScores(userIds: string[]): Promise<Map<string, number>> {
    const db = this.getDb();
    const result = await db
      .select({
        userId: contributors.userId,
        authorityScore: contributors.authorityScore,
      })
      .from(contributors)
      .where(inArray(contributors.userId, userIds));

    const scores = new Map<string, number>();
    for (const row of result) {
      scores.set(row.userId, row.authorityScore);
    }
    return scores;
  }

  // Knowledge operations
  async saveKnowledgeEntry(entry: KnowledgeEntry): Promise<void> {
    const db = this.getDb();
    await db
      .insert(knowledge)
      .values({
        id: entry.id,
        slug: entry.slug,
        type: entry.type,
        title: entry.title,
        content: entry.content,
        summary: entry.summary,
        topics: entry.topics,
        keywords: entry.keywords,
        sourceMessageIds: entry.sourceMessages.map((s) => s.messageId),
        primaryContributorId: entry.primaryContributor.userId,
        confidenceScore: entry.confidenceScore,
        authorityScore: entry.authorityScore,
        combinedScore: entry.combinedScore,
        status: entry.status,
        createdAt: entry.createdAt,
        updatedAt: entry.updatedAt,
      })
      .onConflictDoUpdate({
        target: knowledge.id,
        set: {
          content: entry.content,
          summary: entry.summary,
          updatedAt: entry.updatedAt,
        },
      });
  }

  async getKnowledgeEntry(entryId: string): Promise<KnowledgeEntry | null> {
    const db = this.getDb();
    const result = await db
      .select()
      .from(knowledge)
      .where(eq(knowledge.id, entryId))
      .limit(1);
    if (!result[0]) return null;
    return this.rowToKnowledge(result[0]);
  }

  async getKnowledgeEntryBySlug(slug: string): Promise<KnowledgeEntry | null> {
    const db = this.getDb();
    const result = await db
      .select()
      .from(knowledge)
      .where(eq(knowledge.slug, slug))
      .limit(1);
    if (!result[0]) return null;
    return this.rowToKnowledge(result[0]);
  }

  async searchKnowledgeEntries(options: {
    query?: string;
    topics?: string[];
    status?: string[];
    limit?: number;
  }): Promise<KnowledgeEntry[]> {
    const db = this.getDb();
    // Simple implementation - full-text search is future enhancement
    const result = await db
      .select()
      .from(knowledge)
      .limit(options.limit || 100);

    return result.map((row) => this.rowToKnowledge(row));
  }

  async getPublishedEntries(): Promise<KnowledgeEntry[]> {
    const db = this.getDb();
    const result = await db
      .select()
      .from(knowledge)
      .where(eq(knowledge.status, "published"));

    return result.map((row) => this.rowToKnowledge(row));
  }

  async updateKnowledgeEntry(
    entryId: string,
    updates: Partial<KnowledgeEntry>,
  ): Promise<void> {
    const db = this.getDb();
    const dbUpdates: Record<string, unknown> = { updatedAt: new Date() };

    if (updates.content) dbUpdates.content = updates.content;
    if (updates.summary) dbUpdates.summary = updates.summary;
    if (updates.status) dbUpdates.status = updates.status;
    if (updates.topics) dbUpdates.topics = updates.topics;
    if (updates.keywords) dbUpdates.keywords = updates.keywords;

    await db.update(knowledge).set(dbUpdates).where(eq(knowledge.id, entryId));
  }

  // Stub methods for interface compliance
  async saveThread(_thread: ConversationThread): Promise<void> {
    // Threads are computed on-the-fly, not stored
  }

  async getThread(_threadId: string): Promise<ConversationThread | null> {
    return null;
  }

  async getUnprocessedThreads(_limit: number): Promise<ConversationThread[]> {
    return [];
  }

  async saveEmbedding(_entryId: string, _embedding: number[]): Promise<void> {
    // Future: semantic dedup
  }

  async findSimilarEntries(
    _embedding: number[],
    _threshold: number,
    _limit: number,
  ): Promise<Array<{ entryId: string; similarity: number }>> {
    return [];
  }

  async createBatchJob(_job: BatchJob): Promise<void> {
    // Future: job tracking
  }

  async updateBatchJob(
    _jobId: string,
    _updates: Partial<BatchJob>,
  ): Promise<void> {
    // Future: job tracking
  }

  async getLastBatchJob(): Promise<BatchJob | null> {
    return null;
  }

  async getStats(): Promise<{
    messageCount: number;
    threadCount: number;
    entryCount: number;
    contributorCount: number;
  }> {
    const db = this.getDb();

    const msgCount = await db
      .select({ count: sql<number>`count(*)` })
      .from(messages);
    const contribCount = await db
      .select({ count: sql<number>`count(*)` })
      .from(contributors);
    const entryCount = await db
      .select({ count: sql<number>`count(*)` })
      .from(knowledge);

    return {
      messageCount: msgCount[0]?.count || 0,
      threadCount: 0, // Computed on-the-fly
      entryCount: entryCount[0]?.count || 0,
      contributorCount: contribCount[0]?.count || 0,
    };
  }

  async migrate(): Promise<void> {
    // Migrations run in initialize()
  }

  async healthCheck(): Promise<boolean> {
    try {
      const db = this.getDb();
      await db
        .select({ one: sql`1` })
        .from(messages)
        .limit(1);
      return true;
    } catch {
      return false;
    }
  }

  // Helper methods
  private rowToMessage(row: typeof messages.$inferSelect): StoredMessage {
    return {
      id: row.id,
      channelId: row.channelId,
      threadId: row.threadId || undefined,
      guildId: row.guildId,
      authorId: row.authorId,
      authorUsername: row.authorUsername,
      authorRoles: row.authorRoles,
      content: row.content,
      referencedMessageId: row.referencedMessageId || undefined,
      attachments: row.attachments,
      embeds: [],
      reactions: row.reactions.map((r) => ({ ...r, users: [] })),
      createdAt: row.createdAt,
      editedAt: row.editedAt || undefined,
      deletedAt: row.deletedAt || undefined,
      processed: row.processed,
      processedAt: row.processedAt || undefined,
    };
  }

  private rowToContributor(row: typeof contributors.$inferSelect): Contributor {
    return {
      userId: row.userId,
      username: row.username,
      displayName: row.displayName || undefined,
      roles: (row.roles as string[]).map((roleId) => ({
        roleId,
        roleName: "",
        weight: 0,
      })),
      baseAuthorityScore: row.authorityScore,
      helpfulAnswers: 0,
      confirmedCorrect: 0,
      correctionsMade: 0,
      correctionsReceived: 0,
      learnedAuthorityScore: 0,
      combinedAuthorityScore: row.authorityScore,
      firstSeen: row.firstSeen,
      lastSeen: row.lastSeen,
      messageCount: row.messageCount,
      channelsActive: [],
    };
  }

  private rowToKnowledge(row: typeof knowledge.$inferSelect): KnowledgeEntry {
    return {
      id: row.id,
      slug: row.slug,
      type: row.type as KnowledgeEntry["type"],
      title: row.title,
      content: row.content,
      summary: row.summary,
      topics: row.topics,
      keywords: row.keywords,
      relatedEntries: [],
      sourceMessages: row.sourceMessageIds.map((id) => ({
        messageId: id,
        channelId: "",
        authorId: "",
        timestamp: new Date(),
        contentSnippet: "",
        discordUrl: "",
      })),
      primaryContributor: {
        userId: row.primaryContributorId,
        username: "",
        authorityScore: row.authorityScore,
        role: "author",
      },
      contributors: [],
      confidenceScore: row.confidenceScore,
      authorityScore: row.authorityScore,
      combinedScore: row.combinedScore,
      status: row.status as KnowledgeEntry["status"],
      createdAt: row.createdAt,
      updatedAt: row.updatedAt,
      metadata: {},
    };
  }
}
```

**Step 4: Create storage index**

Create `src/storage/index.ts`:

```typescript
export { SQLiteStore } from "./adapters/sqlite.js";
export * from "./schema.js";
export type { IMessageStore } from "./interfaces/IMessageStore.js";
```

**Step 5: Run tests to verify they pass**

```bash
pnpm test src/storage/adapters/sqlite.test.ts
```

Expected: All tests PASS

**Step 6: Commit**

```bash
git add -A
git commit -m "feat: SQLite storage adapter with Drizzle ORM"
```

---

## Phase 2: Discord Integration

### Task 4: Discord Client Setup

**Files:**

- Create: `src/bot/client.ts`
- Create: `src/bot/index.ts`

**Step 1: Create Discord client wrapper**

Create `src/bot/client.ts`:

```typescript
import {
  Client,
  GatewayIntentBits,
  Partials,
  type Message,
  type TextChannel,
} from "discord.js";
import type { Config } from "../config/index.js";
import { logger } from "../utils/logger.js";

export class DiscordClient {
  private client: Client;
  private config: Config;
  private ready = false;

  constructor(config: Config) {
    this.config = config;
    this.client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
      ],
      partials: [Partials.Message, Partials.Channel],
    });
  }

  async connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.client.once("ready", () => {
        this.ready = true;
        logger.info(
          { user: this.client.user?.tag },
          "Discord client connected",
        );
        resolve();
      });

      this.client.once("error", reject);

      this.client.login(this.config.discord.token).catch(reject);
    });
  }

  async disconnect(): Promise<void> {
    if (this.client) {
      await this.client.destroy();
      this.ready = false;
      logger.info("Discord client disconnected");
    }
  }

  isReady(): boolean {
    return this.ready;
  }

  getClient(): Client {
    return this.client;
  }

  async getGuild() {
    const guild = await this.client.guilds.fetch(this.config.discord.guildId);
    return guild;
  }

  async getChannel(channelId: string): Promise<TextChannel | null> {
    try {
      const channel = await this.client.channels.fetch(channelId);
      if (channel?.isTextBased()) {
        return channel as TextChannel;
      }
      return null;
    } catch (error) {
      logger.error({ channelId, error }, "Failed to fetch channel");
      return null;
    }
  }

  onMessage(handler: (message: Message) => void): void {
    this.client.on("messageCreate", handler);
  }

  onMessageUpdate(
    handler: (oldMessage: Message, newMessage: Message) => void,
  ): void {
    this.client.on("messageUpdate", (old, updated) => {
      if (old.partial || updated.partial) return;
      handler(old as Message, updated as Message);
    });
  }

  onMessageDelete(handler: (message: Message) => void): void {
    this.client.on("messageDelete", (message) => {
      if (message.partial) return;
      handler(message as Message);
    });
  }
}
```

**Step 2: Create bot index**

Create `src/bot/index.ts`:

```typescript
export { DiscordClient } from "./client.js";
```

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: Discord client wrapper"
```

---

### Task 5: Message Fetcher (Backfill)

**Files:**

- Create: `src/bot/fetcher.ts`
- Test: `src/bot/fetcher.test.ts`

**Step 1: Create message fetcher**

Create `src/bot/fetcher.ts`:

```typescript
import {
  type Message,
  type TextChannel,
  type Collection,
  SnowflakeUtil,
} from "discord.js";
import type { DiscordClient } from "./client.js";
import type { IMessageStore } from "../storage/interfaces/IMessageStore.js";
import type { StoredMessage } from "../types/index.js";
import type { Config } from "../config/index.js";
import { logger } from "../utils/logger.js";
import PQueue from "p-queue";

const DISCORD_EPOCH = 1420070400000n;
const BATCH_SIZE = 100;
const RATE_LIMIT_DELAY = 1000; // 1 second between batches

export function dateToSnowflake(date: Date): string {
  const timestamp = BigInt(date.getTime());
  const discordTimestamp = timestamp - DISCORD_EPOCH;
  return (discordTimestamp << 22n).toString();
}

export function snowflakeToDate(snowflake: string): Date {
  const timestamp = (BigInt(snowflake) >> 22n) + DISCORD_EPOCH;
  return new Date(Number(timestamp));
}

export class MessageFetcher {
  private discord: DiscordClient;
  private store: IMessageStore;
  private config: Config;
  private queue: PQueue;

  constructor(discord: DiscordClient, store: IMessageStore, config: Config) {
    this.discord = discord;
    this.store = store;
    this.config = config;
    this.queue = new PQueue({
      concurrency: 1,
      interval: RATE_LIMIT_DELAY,
      intervalCap: 1,
    });
  }

  async backfill(
    days: number,
  ): Promise<{ messagesFound: number; messagesSaved: number }> {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);

    logger.info({ days, cutoffDate }, "Starting backfill");

    let totalFound = 0;
    let totalSaved = 0;

    for (const channelConfig of this.config.discord.channels) {
      const channel = await this.discord.getChannel(channelConfig.id);
      if (!channel) {
        logger.warn(
          { channelId: channelConfig.id },
          "Channel not found, skipping",
        );
        continue;
      }

      logger.info(
        { channel: channelConfig.name, channelId: channelConfig.id },
        "Fetching channel",
      );

      const result = await this.fetchChannel(channel, cutoffDate);
      totalFound += result.found;
      totalSaved += result.saved;

      logger.info(
        {
          channel: channelConfig.name,
          found: result.found,
          saved: result.saved,
        },
        "Channel complete",
      );
    }

    logger.info({ totalFound, totalSaved }, "Backfill complete");
    return { messagesFound: totalFound, messagesSaved: totalSaved };
  }

  private async fetchChannel(
    channel: TextChannel,
    cutoffDate: Date,
  ): Promise<{ found: number; saved: number }> {
    const cursorKey = `backfill-${channel.id}`;
    let lastMessageId = await this.store.getCursor(cursorKey);

    let found = 0;
    let saved = 0;
    let hasMore = true;

    while (hasMore) {
      const messages = await this.queue.add(async () => {
        const options: { limit: number; before?: string } = {
          limit: BATCH_SIZE,
        };
        if (lastMessageId) {
          options.before = lastMessageId;
        }
        return channel.messages.fetch(options);
      });

      if (!messages || messages.size === 0) {
        hasMore = false;
        break;
      }

      found += messages.size;

      // Filter by cutoff date
      const validMessages = messages.filter(
        (msg) => msg.createdAt >= cutoffDate,
      );

      if (validMessages.size === 0) {
        hasMore = false;
        break;
      }

      // Save messages
      for (const msg of validMessages.values()) {
        const stored = await this.messageToStored(msg);
        await this.store.saveMessage(stored);
        saved++;
      }

      // Update cursor (oldest message in batch)
      const oldestMessage = messages
        .sort((a, b) => a.createdTimestamp - b.createdTimestamp)
        .first();
      if (oldestMessage) {
        lastMessageId = oldestMessage.id;
        await this.store.setCursor(cursorKey, lastMessageId);
      }

      // Check if oldest message is before cutoff
      if (oldestMessage && oldestMessage.createdAt < cutoffDate) {
        hasMore = false;
      }

      logger.debug(
        { channelId: channel.id, batchSize: messages.size, totalFound: found },
        "Fetched batch",
      );
    }

    return { found, saved };
  }

  async fetchLive(message: Message): Promise<void> {
    // Check if message is in a monitored channel
    const channelConfig = this.config.discord.channels.find(
      (c) => c.id === message.channelId,
    );
    if (!channelConfig) {
      return; // Not a monitored channel
    }

    const stored = await this.messageToStored(message);
    await this.store.saveMessage(stored);

    // Update contributor
    const roles = message.member?.roles.cache.map((r) => r.id) || [];
    await this.store.getOrCreateContributor(
      message.author.id,
      message.author.username,
    );
    await this.store.updateContributor(message.author.id, {
      lastSeen: new Date(),
    });

    logger.debug(
      { messageId: message.id, channel: channelConfig.name },
      "Saved live message",
    );
  }

  private async messageToStored(message: Message): Promise<StoredMessage> {
    const roles = message.member?.roles.cache.map((r) => r.id) || [];

    return {
      id: message.id,
      channelId: message.channelId,
      threadId: message.channel.isThread() ? message.channelId : undefined,
      guildId: message.guildId || this.config.discord.guildId,
      authorId: message.author.id,
      authorUsername: message.author.username,
      authorRoles: roles,
      content: message.content,
      referencedMessageId: message.reference?.messageId,
      attachments: message.attachments.map((a) => ({
        id: a.id,
        filename: a.name,
        url: a.url,
        contentType: a.contentType || undefined,
      })),
      embeds: message.embeds.map((e) => ({
        title: e.title || undefined,
        description: e.description || undefined,
        url: e.url || undefined,
        type: e.data.type || "rich",
      })),
      reactions: message.reactions.cache.map((r) => ({
        emoji: r.emoji.name || r.emoji.id || "?",
        count: r.count,
        users: [],
      })),
      createdAt: message.createdAt,
      editedAt: message.editedAt || undefined,
      processed: false,
    };
  }
}
```

**Step 2: Commit**

```bash
git add -A
git commit -m "feat: message fetcher for backfill and live capture"
```

---

## Phase 3: LLM Integration

### Task 6: OpenRouter Provider

**Files:**

- Create: `src/llm/providers/openrouter.ts`
- Create: `src/llm/index.ts`
- Test: `src/llm/providers/openrouter.test.ts`

**Step 1: Create OpenRouter provider**

Create `src/llm/providers/openrouter.ts`:

````typescript
import OpenAI from "openai";
import type { z } from "zod";
import type {
  ILLMProvider,
  CompletionOptions,
  CompletionResult,
  JSONCompletionOptions,
  JSONCompletionResult,
  RateLimitStatus,
  LLMError,
} from "../interfaces/ILLMProvider.js";
import { logger } from "../../utils/logger.js";
import pRetry from "p-retry";

export interface OpenRouterConfig {
  apiKey: string;
  baseUrl?: string;
  model: string;
  maxTokens?: number;
  temperature?: number;
}

export class OpenRouterProvider implements ILLMProvider {
  readonly name = "openrouter";
  readonly model: string;

  private client: OpenAI;
  private maxTokens: number;
  private temperature: number;
  private requestsRemaining = 1000;
  private tokensRemaining = 100000;
  private resetsAt = new Date();

  constructor(config: OpenRouterConfig) {
    this.model = config.model;
    this.maxTokens = config.maxTokens || 4096;
    this.temperature = config.temperature || 0;

    this.client = new OpenAI({
      apiKey: config.apiKey,
      baseURL: config.baseUrl || "https://openrouter.ai/api/v1",
      defaultHeaders: {
        "HTTP-Referer": "https://github.com/discord-knowledge-miner",
        "X-Title": "Discord Knowledge Miner",
      },
    });
  }

  async initialize(): Promise<void> {
    logger.info({ model: this.model }, "OpenRouter provider initialized");
  }

  async complete(options: CompletionOptions): Promise<CompletionResult> {
    const startTime = Date.now();

    const response = await pRetry(
      async () => {
        return this.client.chat.completions.create({
          model: this.model,
          messages: [
            { role: "system", content: options.systemPrompt },
            { role: "user", content: options.userPrompt },
          ],
          max_tokens: options.maxTokens || this.maxTokens,
          temperature: options.temperature ?? this.temperature,
          stop: options.stopSequences,
        });
      },
      {
        retries: 3,
        onFailedAttempt: (error) => {
          logger.warn(
            { error: error.message, attempt: error.attemptNumber },
            "LLM request failed, retrying",
          );
        },
      },
    );

    const content = response.choices[0]?.message?.content || "";
    const latencyMs = Date.now() - startTime;

    // Update rate limit tracking
    this.requestsRemaining = Math.max(0, this.requestsRemaining - 1);
    this.tokensRemaining = Math.max(
      0,
      this.tokensRemaining - (response.usage?.total_tokens || 0),
    );

    return {
      content,
      usage: {
        promptTokens: response.usage?.prompt_tokens || 0,
        completionTokens: response.usage?.completion_tokens || 0,
        totalTokens: response.usage?.total_tokens || 0,
      },
      model: response.model,
      stopReason:
        response.choices[0]?.finish_reason === "stop"
          ? "end_turn"
          : "max_tokens",
      latencyMs,
    };
  }

  async completeJSON<T>(
    options: JSONCompletionOptions<T>,
  ): Promise<JSONCompletionResult<T>> {
    const jsonPrompt = `${options.userPrompt}\n\nRespond with valid JSON only. No markdown, no explanation, just the JSON object/array.`;

    const result = await pRetry(
      async () => {
        const completion = await this.complete({
          ...options,
          userPrompt: jsonPrompt,
        });

        // Extract JSON from response
        let jsonStr = completion.content.trim();

        // Remove markdown code blocks if present
        if (jsonStr.startsWith("```json")) {
          jsonStr = jsonStr.slice(7);
        } else if (jsonStr.startsWith("```")) {
          jsonStr = jsonStr.slice(3);
        }
        if (jsonStr.endsWith("```")) {
          jsonStr = jsonStr.slice(0, -3);
        }
        jsonStr = jsonStr.trim();

        // Parse JSON
        const parsed = JSON.parse(jsonStr);

        // Validate with Zod
        const validated = options.schema.parse(parsed);

        return {
          data: validated,
          rawContent: completion.content,
          usage: completion.usage,
          latencyMs: completion.latencyMs,
        };
      },
      {
        retries: options.retries || 2,
        onFailedAttempt: (error) => {
          logger.warn(
            { error: error.message, attempt: error.attemptNumber },
            "JSON completion failed, retrying",
          );
        },
      },
    );

    return result;
  }

  async embed(_text: string): Promise<number[]> {
    // OpenRouter doesn't have native embeddings
    // Future: use a dedicated embedding provider
    throw new Error("Embeddings not implemented for OpenRouter");
  }

  async embedBatch(_texts: string[]): Promise<number[][]> {
    throw new Error("Embeddings not implemented for OpenRouter");
  }

  async healthCheck(): Promise<boolean> {
    try {
      await this.complete({
        systemPrompt: "You are a test assistant.",
        userPrompt: 'Say "ok"',
        maxTokens: 10,
      });
      return true;
    } catch {
      return false;
    }
  }

  getRateLimitStatus(): RateLimitStatus {
    return {
      requestsRemaining: this.requestsRemaining,
      tokensRemaining: this.tokensRemaining,
      resetsAt: this.resetsAt,
      isLimited: this.requestsRemaining <= 0 || this.tokensRemaining <= 0,
    };
  }
}
````

**Step 2: Create LLM index with factory**

Create `src/llm/index.ts`:

```typescript
import type { Config } from "../config/index.js";
import type { ILLMProvider } from "./interfaces/ILLMProvider.js";
import { OpenRouterProvider } from "./providers/openrouter.js";

export function createLLMProvider(
  config: Config,
  modelType: "filter" | "extract",
): ILLMProvider {
  const modelConfig = config.llm.models[modelType];

  switch (config.llm.provider) {
    case "openrouter":
      return new OpenRouterProvider({
        apiKey: config.llm.apiKey,
        baseUrl: config.llm.baseUrl,
        model: modelConfig.model,
        maxTokens: modelConfig.maxTokens,
        temperature: modelConfig.temperature,
      });

    default:
      throw new Error(`Unknown LLM provider: ${config.llm.provider}`);
  }
}

export { OpenRouterProvider } from "./providers/openrouter.js";
export type { ILLMProvider } from "./interfaces/ILLMProvider.js";
```

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: OpenRouter LLM provider"
```

---

### Task 7: Extraction Prompts

**Files:**

- Create: `src/processor/extractor/prompts/filter.ts`
- Create: `src/processor/extractor/prompts/extract.ts`
- Create: `src/processor/extractor/prompts/index.ts`

**Step 1: Create filter prompt**

Create `src/processor/extractor/prompts/filter.ts`:

```typescript
import { z } from "zod";

export const FilterResultSchema = z.object({
  hasKnowledge: z.boolean(),
  types: z.array(z.enum(["qa", "troubleshooting", "reference", "tip"])),
  confidence: z.number().min(0).max(1),
  reason: z.string().optional(),
});

export type FilterResult = z.infer<typeof FilterResultSchema>;

export const FILTER_SYSTEM_PROMPT = `You are a knowledge filter for a Discord help channel. Your job is to determine if a conversation contains extractable knowledge worth saving to a knowledge base.

EXTRACT if the conversation contains:
- A clear question with a helpful answer (qa)
- A problem with a solution (troubleshooting)
- Useful reference information dropped by developers (reference)
- A best practice or pro tip (tip)

DO NOT EXTRACT:
- Casual chat, jokes, or off-topic discussion
- Incomplete conversations with no resolution
- Questions that went unanswered
- Simple greetings or acknowledgments
- Discussions that are too vague or context-dependent

Be conservative - only return hasKnowledge: true if there's genuinely useful information that would help future users.`;

export function buildFilterPrompt(conversation: string): string {
  return `Analyze this Discord conversation and determine if it contains extractable knowledge.

CONVERSATION:
---
${conversation}
---

Return JSON:
{
  "hasKnowledge": boolean,
  "types": ["qa" | "troubleshooting" | "reference" | "tip"],
  "confidence": 0-1,
  "reason": "brief explanation"
}`;
}
```

**Step 2: Create extraction prompt**

Create `src/processor/extractor/prompts/extract.ts`:

```typescript
import { z } from "zod";

export const ExtractedEntrySchema = z.object({
  type: z.enum(["qa", "troubleshooting", "reference", "tip"]),
  title: z.string(),
  question: z.string().optional(),
  answer: z.string().optional(),
  content: z.string(),
  summary: z.string(),
  topics: z.array(z.string()),
  keywords: z.array(z.string()),
  confidence: z.number().min(0).max(1),
  sourceMessageIds: z.array(z.string()),
  primaryContributorId: z.string(),
});

export const ExtractionResultSchema = z.array(ExtractedEntrySchema);

export type ExtractedEntry = z.infer<typeof ExtractedEntrySchema>;
export type ExtractionResult = z.infer<typeof ExtractionResultSchema>;

export const EXTRACT_SYSTEM_PROMPT = `You are a knowledge extraction specialist for a Discord community about Voxta (an AI chat interface). Extract structured knowledge from conversations.

Guidelines:
- Focus on actionable, reusable information
- Prioritize answers from users with higher authority scores
- Preserve technical accuracy - don't paraphrase incorrectly
- Use markdown formatting in content
- Include relevant context but remove unnecessary chat noise
- One entry per distinct piece of knowledge (a conversation may yield 0-3 entries)

Knowledge types:
- qa: Question and answer exchange
- troubleshooting: Problem and solution
- reference: Developer information, API details, configuration options
- tip: Best practice or pro tip

Available topics: setup, configuration, llm, scripting, integrations, troubleshooting, performance`;

export function buildExtractionPrompt(
  conversation: string,
  authorityScores: Map<string, number>,
): string {
  const scoresText = Array.from(authorityScores.entries())
    .map(([id, score]) => `  ${id}: ${score.toFixed(2)}`)
    .join("\n");

  return `Extract knowledge from this Discord conversation.

AUTHORITY SCORES (0-1, higher = more trusted):
${scoresText}

CONVERSATION:
---
${conversation}
---

Return a JSON array of extracted knowledge entries. Each entry:
{
  "type": "qa" | "troubleshooting" | "reference" | "tip",
  "title": "Short descriptive title",
  "question": "The question (for qa/troubleshooting)",
  "answer": "The answer in markdown",
  "content": "Full content in markdown (for reference/tip)",
  "summary": "One-line summary",
  "topics": ["topic-slugs"],
  "keywords": ["search", "terms"],
  "confidence": 0-1,
  "sourceMessageIds": ["message-ids-used"],
  "primaryContributorId": "user-id-of-main-answerer"
}

Return empty array [] if no valuable knowledge can be extracted.`;
}
```

**Step 3: Create prompts index**

Create `src/processor/extractor/prompts/index.ts`:

```typescript
export * from "./filter.js";
export * from "./extract.js";
```

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: extraction prompts for filter and extract phases"
```

---

### Task 8: Knowledge Extractor

**Files:**

- Create: `src/processor/extractor/index.ts`
- Create: `src/processor/threadBuilder.ts`
- Create: `src/processor/index.ts`

**Step 1: Create thread builder**

Create `src/processor/threadBuilder.ts`:

```typescript
import type { StoredMessage, ConversationThread } from "../types/index.js";
import { nanoid } from "nanoid";

interface ThreadBuilderConfig {
  timeGapMinutes: number;
  minMessagesForThread: number;
  replyChainMax: number;
}

export class ThreadBuilder {
  private config: ThreadBuilderConfig;

  constructor(config: ThreadBuilderConfig) {
    this.config = config;
  }

  buildThreads(messages: StoredMessage[]): ConversationThread[] {
    // Sort by creation time
    const sorted = [...messages].sort(
      (a, b) => a.createdAt.getTime() - b.createdAt.getTime(),
    );

    // Group by Discord thread first
    const discordThreads = new Map<string, StoredMessage[]>();
    const channelMessages: StoredMessage[] = [];

    for (const msg of sorted) {
      if (msg.threadId) {
        const existing = discordThreads.get(msg.threadId) || [];
        existing.push(msg);
        discordThreads.set(msg.threadId, existing);
      } else {
        channelMessages.push(msg);
      }
    }

    const threads: ConversationThread[] = [];

    // Convert Discord threads
    for (const [threadId, msgs] of discordThreads) {
      if (msgs.length >= this.config.minMessagesForThread) {
        threads.push(this.createThread(msgs, threadId));
      }
    }

    // Build reply chains from channel messages
    const replyChains = this.buildReplyChains(channelMessages);
    for (const chain of replyChains) {
      if (chain.length >= this.config.minMessagesForThread) {
        threads.push(this.createThread(chain));
      }
    }

    // Time-based grouping for remaining messages
    const unthreaded = channelMessages.filter((msg) => {
      return !replyChains.some((chain) => chain.includes(msg));
    });

    const timeGroups = this.buildTimeGroups(unthreaded);
    for (const group of timeGroups) {
      if (group.length >= this.config.minMessagesForThread) {
        threads.push(this.createThread(group));
      }
    }

    return threads;
  }

  private buildReplyChains(messages: StoredMessage[]): StoredMessage[][] {
    const chains: StoredMessage[][] = [];
    const messageMap = new Map<string, StoredMessage>();
    const usedInChain = new Set<string>();

    // Index messages by ID
    for (const msg of messages) {
      messageMap.set(msg.id, msg);
    }

    // Find chain roots (messages that are replied to)
    for (const msg of messages) {
      if (msg.referencedMessageId && !usedInChain.has(msg.id)) {
        const chain = this.traceReplyChain(msg, messageMap, usedInChain);
        if (chain.length > 1) {
          chains.push(chain);
          chain.forEach((m) => usedInChain.add(m.id));
        }
      }
    }

    return chains;
  }

  private traceReplyChain(
    start: StoredMessage,
    messageMap: Map<string, StoredMessage>,
    usedInChain: Set<string>,
  ): StoredMessage[] {
    const chain: StoredMessage[] = [];
    let current: StoredMessage | undefined = start;
    let depth = 0;

    // Trace back to root
    const backTrace: StoredMessage[] = [];
    while (current && depth < this.config.replyChainMax) {
      backTrace.unshift(current);
      if (current.referencedMessageId) {
        current = messageMap.get(current.referencedMessageId);
      } else {
        current = undefined;
      }
      depth++;
    }

    // Now trace forward from root to get all replies
    const visited = new Set<string>();
    const toProcess = [...backTrace];

    while (toProcess.length > 0) {
      const msg = toProcess.shift()!;
      if (visited.has(msg.id)) continue;
      visited.add(msg.id);
      chain.push(msg);

      // Find all messages that reply to this one
      for (const [, m] of messageMap) {
        if (
          m.referencedMessageId === msg.id &&
          !visited.has(m.id) &&
          !usedInChain.has(m.id)
        ) {
          toProcess.push(m);
        }
      }
    }

    return chain.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
  }

  private buildTimeGroups(messages: StoredMessage[]): StoredMessage[][] {
    if (messages.length === 0) return [];

    const groups: StoredMessage[][] = [];
    let currentGroup: StoredMessage[] = [];
    const gapMs = this.config.timeGapMinutes * 60 * 1000;

    for (const msg of messages) {
      if (currentGroup.length === 0) {
        currentGroup.push(msg);
        continue;
      }

      const lastMsg = currentGroup[currentGroup.length - 1]!;
      const timeDiff = msg.createdAt.getTime() - lastMsg.createdAt.getTime();

      // Check if this message continues the conversation
      const sameParticipants = currentGroup.some(
        (m) => m.authorId === msg.authorId,
      );
      const withinTimeGap = timeDiff <= gapMs;

      if (withinTimeGap && sameParticipants) {
        currentGroup.push(msg);
      } else {
        if (currentGroup.length > 0) {
          groups.push(currentGroup);
        }
        currentGroup = [msg];
      }
    }

    if (currentGroup.length > 0) {
      groups.push(currentGroup);
    }

    return groups;
  }

  private createThread(
    messages: StoredMessage[],
    discordThreadId?: string,
  ): ConversationThread {
    const participants = [...new Set(messages.map((m) => m.authorId))];
    const sorted = messages.sort(
      (a, b) => a.createdAt.getTime() - b.createdAt.getTime(),
    );

    // Heuristic: has question if first message ends with ? or contains question words
    const firstContent = sorted[0]?.content.toLowerCase() || "";
    const hasQuestion =
      firstContent.includes("?") ||
      /\b(how|what|why|where|when|can|does|is|are|should|could|would)\b/.test(
        firstContent,
      );

    // Heuristic: has resolution if multiple participants and later messages have positive signals
    const lastMessages = sorted.slice(-3).map((m) => m.content.toLowerCase());
    const hasResolution =
      participants.length > 1 &&
      lastMessages.some((content) =>
        /\b(thanks|thank|solved|fixed|works|working|got it|figured)\b/.test(
          content,
        ),
      );

    return {
      id: discordThreadId || nanoid(),
      channelId: sorted[0]?.channelId || "",
      discordThreadId,
      messages: sorted,
      participants,
      startedAt: sorted[0]?.createdAt || new Date(),
      endedAt: sorted[sorted.length - 1]?.createdAt || new Date(),
      messageCount: messages.length,
      hasQuestion,
      hasResolution,
    };
  }

  formatThreadForLLM(thread: ConversationThread): string {
    return thread.messages
      .map((msg) => {
        const timestamp = msg.createdAt.toISOString();
        const reply = msg.referencedMessageId
          ? ` (replying to ${msg.referencedMessageId})`
          : "";
        return `[${timestamp}] ${msg.authorUsername} (${msg.authorId})${reply}:\n${msg.content}`;
      })
      .join("\n\n");
  }
}
```

**Step 2: Create knowledge extractor**

Create `src/processor/extractor/index.ts`:

```typescript
import type { ILLMProvider } from "../../llm/interfaces/ILLMProvider.js";
import type { IMessageStore } from "../../storage/interfaces/IMessageStore.js";
import type { ConversationThread, KnowledgeEntry } from "../../types/index.js";
import type { Config } from "../../config/index.js";
import {
  FILTER_SYSTEM_PROMPT,
  buildFilterPrompt,
  FilterResultSchema,
  type FilterResult,
} from "./prompts/filter.js";
import {
  EXTRACT_SYSTEM_PROMPT,
  buildExtractionPrompt,
  ExtractionResultSchema,
  type ExtractedEntry,
} from "./prompts/extract.js";
import { ThreadBuilder } from "../threadBuilder.js";
import { nanoid } from "nanoid";
import { logger } from "../../utils/logger.js";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

export class KnowledgeExtractor {
  private filterProvider: ILLMProvider;
  private extractProvider: ILLMProvider;
  private store: IMessageStore;
  private config: Config;
  private threadBuilder: ThreadBuilder;

  constructor(
    filterProvider: ILLMProvider,
    extractProvider: ILLMProvider,
    store: IMessageStore,
    config: Config,
  ) {
    this.filterProvider = filterProvider;
    this.extractProvider = extractProvider;
    this.store = store;
    this.config = config;
    this.threadBuilder = new ThreadBuilder(config.processing.threadDetection);
  }

  async processUnprocessedMessages(): Promise<{
    threadsProcessed: number;
    entriesExtracted: number;
  }> {
    const channelIds = this.config.discord.channels.map((c) => c.id);

    const messages = await this.store.getUnprocessedMessages({
      limit: this.config.processing.batchSize,
      channelIds,
    });

    if (messages.length === 0) {
      logger.info("No unprocessed messages");
      return { threadsProcessed: 0, entriesExtracted: 0 };
    }

    logger.info({ messageCount: messages.length }, "Processing messages");

    // Build threads
    const threads = this.threadBuilder.buildThreads(messages);
    logger.info({ threadCount: threads.length }, "Built threads");

    let entriesExtracted = 0;

    for (const thread of threads) {
      try {
        const entries = await this.processThread(thread);
        entriesExtracted += entries.length;

        // Mark messages as processed
        await this.store.markProcessed(thread.messages.map((m) => m.id));

        logger.debug(
          {
            threadId: thread.id,
            messageCount: thread.messageCount,
            entriesFound: entries.length,
          },
          "Processed thread",
        );
      } catch (error) {
        logger.error(
          { threadId: thread.id, error },
          "Failed to process thread",
        );
        // Continue with next thread
      }
    }

    logger.info(
      {
        threadsProcessed: threads.length,
        entriesExtracted,
      },
      "Processing complete",
    );

    return { threadsProcessed: threads.length, entriesExtracted };
  }

  async processThread(thread: ConversationThread): Promise<KnowledgeEntry[]> {
    const conversationText = this.threadBuilder.formatThreadForLLM(thread);

    // Step 1: Filter
    const filterResult = await this.filter(conversationText);

    if (!filterResult.hasKnowledge) {
      logger.debug(
        { threadId: thread.id, reason: filterResult.reason },
        "Thread filtered out",
      );
      return [];
    }

    // Step 2: Get authority scores
    const authorityScores = await this.store.getAuthorityScores(
      thread.participants,
    );

    // Apply default for unknown users
    for (const participant of thread.participants) {
      if (!authorityScores.has(participant)) {
        authorityScores.set(participant, this.config.discord.defaultRoleWeight);
      }
    }

    // Step 3: Extract
    const extracted = await this.extract(conversationText, authorityScores);

    // Step 4: Convert to KnowledgeEntry and save
    const entries: KnowledgeEntry[] = [];

    for (const item of extracted) {
      // Check thresholds
      if (item.confidence < this.config.processing.extraction.minConfidence) {
        continue;
      }

      const primaryAuthorityScore =
        authorityScores.get(item.primaryContributorId) ||
        this.config.discord.defaultRoleWeight;
      if (
        primaryAuthorityScore < this.config.processing.extraction.minAuthority
      ) {
        continue;
      }

      const combinedScore = item.confidence * 0.6 + primaryAuthorityScore * 0.4;
      if (combinedScore < this.config.processing.extraction.minCombinedScore) {
        continue;
      }

      const entry = this.createKnowledgeEntry(
        item,
        thread,
        primaryAuthorityScore,
        combinedScore,
      );
      await this.store.saveKnowledgeEntry(entry);
      entries.push(entry);
    }

    return entries;
  }

  private async filter(conversation: string): Promise<FilterResult> {
    const result = await this.filterProvider.completeJSON({
      systemPrompt: FILTER_SYSTEM_PROMPT,
      userPrompt: buildFilterPrompt(conversation),
      schema: FilterResultSchema,
      maxTokens: 256,
    });

    return result.data;
  }

  private async extract(
    conversation: string,
    authorityScores: Map<string, number>,
  ): Promise<ExtractedEntry[]> {
    const result = await this.extractProvider.completeJSON({
      systemPrompt: EXTRACT_SYSTEM_PROMPT,
      userPrompt: buildExtractionPrompt(conversation, authorityScores),
      schema: ExtractionResultSchema,
      maxTokens: 4096,
    });

    return result.data;
  }

  private createKnowledgeEntry(
    extracted: ExtractedEntry,
    thread: ConversationThread,
    authorityScore: number,
    combinedScore: number,
  ): KnowledgeEntry {
    const now = new Date();
    const id = nanoid();
    const slug = `${slugify(extracted.title)}-${id.slice(0, 6)}`;

    // Build source references
    const sourceMessages = extracted.sourceMessageIds
      .map((msgId) => {
        const msg = thread.messages.find((m) => m.id === msgId);
        if (!msg) return null;
        return {
          messageId: msg.id,
          channelId: msg.channelId,
          threadId: msg.threadId,
          authorId: msg.authorId,
          timestamp: msg.createdAt,
          contentSnippet: msg.content.slice(0, 200),
          discordUrl: `https://discord.com/channels/${msg.guildId}/${msg.channelId}/${msg.id}`,
        };
      })
      .filter((s): s is NonNullable<typeof s> => s !== null);

    // Find primary contributor
    const primaryMsg = thread.messages.find(
      (m) => m.authorId === extracted.primaryContributorId,
    );

    return {
      id,
      slug,
      type: extracted.type,
      title: extracted.title,
      content: extracted.content || extracted.answer || "",
      summary: extracted.summary,
      topics: extracted.topics,
      keywords: extracted.keywords,
      relatedEntries: [],
      sourceMessages,
      primaryContributor: {
        userId: extracted.primaryContributorId,
        username: primaryMsg?.authorUsername || "unknown",
        authorityScore,
        role: "author",
      },
      contributors: [],
      confidenceScore: extracted.confidence,
      authorityScore,
      combinedScore,
      status: "draft",
      createdAt: now,
      updatedAt: now,
      metadata: {
        question: extracted.question,
      },
    };
  }
}
```

**Step 3: Create processor index**

Create `src/processor/index.ts`:

```typescript
export { KnowledgeExtractor } from "./extractor/index.js";
export { ThreadBuilder } from "./threadBuilder.js";
```

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: knowledge extraction pipeline with thread detection"
```

---

## Phase 4: Output & CLI

### Task 9: Filesystem Output Adapter

**Files:**

- Create: `src/output/adapters/filesystem.ts`
- Create: `src/output/formatters/markdown.ts`
- Create: `src/output/index.ts`

**Step 1: Create markdown formatter**

Create `src/output/formatters/markdown.ts`:

```typescript
import type { KnowledgeEntry } from "../../types/index.js";
import { stringify } from "yaml";

export function formatKnowledgeEntry(entry: KnowledgeEntry): string {
  const frontmatter = {
    id: entry.id,
    slug: entry.slug,
    type: entry.type,
    title: entry.title,
    topics: entry.topics,
    keywords: entry.keywords,
    confidence: Math.round(entry.confidenceScore * 100) / 100,
    authority: Math.round(entry.authorityScore * 100) / 100,
    sources: entry.sourceMessages.map((s) => ({
      messageId: s.messageId,
      author: s.authorId,
      timestamp: s.timestamp.toISOString(),
      url: s.discordUrl,
    })),
    created: entry.createdAt.toISOString(),
    updated: entry.updatedAt.toISOString(),
  };

  const parts: string[] = [
    "---",
    stringify(frontmatter).trim(),
    "---",
    "",
    `# ${entry.title}`,
    "",
    `> ${entry.summary}`,
    "",
  ];

  // Add type-specific content
  if (entry.type === "qa" || entry.type === "troubleshooting") {
    const question = entry.metadata?.question as string | undefined;
    if (question) {
      parts.push("## Question", "", question, "");
    }
    parts.push("## Answer", "", entry.content, "");
  } else {
    parts.push(entry.content, "");
  }

  // Add footer
  parts.push(
    "---",
    "",
    `*Extracted from Discord. Primary contributor: ${entry.primaryContributor.username}*`,
  );

  return parts.join("\n");
}

export function getFilePath(entry: KnowledgeEntry): string {
  const topic = entry.topics[0] || "uncategorized";
  return `${topic}/${entry.slug}.md`;
}
```

**Step 2: Create filesystem adapter**

Create `src/output/adapters/filesystem.ts`:

```typescript
import {
  existsSync,
  mkdirSync,
  writeFileSync,
  readFileSync,
  readdirSync,
} from "fs";
import { join, dirname } from "path";
import type {
  IOutputAdapter,
  FilesystemOptions,
} from "../interfaces/IOutputAdapter.js";
import type {
  KnowledgeEntry,
  WriteResult,
  DuplicateCheck,
} from "../../types/index.js";
import { formatKnowledgeEntry, getFilePath } from "../formatters/markdown.js";
import { logger } from "../../utils/logger.js";

export class FilesystemAdapter implements IOutputAdapter {
  readonly name = "filesystem";
  private basePath: string;
  private createDirs: boolean;

  constructor(options: FilesystemOptions) {
    this.basePath = options.basePath;
    this.createDirs = options.createDirs ?? true;
  }

  async initialize(): Promise<void> {
    if (this.createDirs && !existsSync(this.basePath)) {
      mkdirSync(this.basePath, { recursive: true });
    }
    logger.info({ basePath: this.basePath }, "Filesystem adapter initialized");
  }

  async write(entries: KnowledgeEntry[]): Promise<WriteResult> {
    const result: WriteResult = {
      success: true,
      entriesWritten: 0,
      entriesUpdated: 0,
      entriesSkipped: 0,
      errors: [],
    };

    for (const entry of entries) {
      try {
        const relativePath = getFilePath(entry);
        const fullPath = join(this.basePath, relativePath);
        const dir = dirname(fullPath);

        // Ensure directory exists
        if (!existsSync(dir)) {
          mkdirSync(dir, { recursive: true });
        }

        const content = formatKnowledgeEntry(entry);
        const existed = existsSync(fullPath);

        writeFileSync(fullPath, content, "utf-8");

        if (existed) {
          result.entriesUpdated++;
        } else {
          result.entriesWritten++;
        }

        logger.debug({ path: relativePath, entry: entry.slug }, "Wrote entry");
      } catch (error) {
        result.errors.push({
          entryId: entry.id,
          error: error instanceof Error ? error.message : String(error),
          recoverable: false,
        });
        result.success = false;
      }
    }

    return result;
  }

  async checkDuplicates(_entries: KnowledgeEntry[]): Promise<DuplicateCheck[]> {
    // No deduplication in MVP - just return 'create' for all
    return _entries.map((entry) => ({
      entryId: entry.id,
      isDuplicate: false,
      suggestedAction: "create" as const,
    }));
  }

  async getExisting(slug: string): Promise<KnowledgeEntry | null> {
    // Would need to parse markdown back to entry
    // Skip for MVP
    return null;
  }

  async listExisting(): Promise<string[]> {
    const slugs: string[] = [];

    const scanDir = (dir: string) => {
      if (!existsSync(dir)) return;

      const entries = readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.isDirectory()) {
          scanDir(join(dir, entry.name));
        } else if (entry.name.endsWith(".md")) {
          // Extract slug from filename
          const slug = entry.name.replace(".md", "");
          slugs.push(slug);
        }
      }
    };

    scanDir(this.basePath);
    return slugs;
  }

  async update(entry: KnowledgeEntry): Promise<WriteResult> {
    return this.write([entry]);
  }

  async archive(_slug: string): Promise<void> {
    // Could move to archived/ folder
    // Skip for MVP
  }

  async healthCheck(): Promise<boolean> {
    try {
      if (!existsSync(this.basePath)) {
        mkdirSync(this.basePath, { recursive: true });
      }
      return true;
    } catch {
      return false;
    }
  }
}
```

**Step 3: Create output index**

Create `src/output/index.ts`:

```typescript
import type { Config } from "../config/index.js";
import type { IOutputAdapter } from "./interfaces/IOutputAdapter.js";
import { FilesystemAdapter } from "./adapters/filesystem.js";

export function createOutputAdapter(config: Config): IOutputAdapter {
  switch (config.output.adapter) {
    case "filesystem":
      return new FilesystemAdapter({
        basePath: config.output.filesystem.path,
        createDirs: true,
      });

    default:
      throw new Error(`Unknown output adapter: ${config.output.adapter}`);
  }
}

export { FilesystemAdapter } from "./adapters/filesystem.js";
export type { IOutputAdapter } from "./interfaces/IOutputAdapter.js";
```

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: filesystem output adapter with markdown formatting"
```

---

### Task 10: CLI Commands

**Files:**

- Create: `src/cli/commands/backfill.ts`
- Create: `src/cli/commands/process.ts`
- Create: `src/cli/commands/start.ts`
- Create: `src/cli/commands/validate.ts`
- Create: `src/cli/commands/stats.ts`
- Create: `src/cli/index.ts`

**Step 1: Create CLI entry point**

Create `src/cli/index.ts`:

```typescript
#!/usr/bin/env node

import { Command } from "commander";
import { config as loadEnv } from "dotenv";
import { backfillCommand } from "./commands/backfill.js";
import { processCommand } from "./commands/process.js";
import { startCommand } from "./commands/start.js";
import { validateCommand } from "./commands/validate.js";
import { statsCommand } from "./commands/stats.js";

// Load environment variables
loadEnv();

const program = new Command();

program
  .name("dkm")
  .description(
    "Discord Knowledge Miner - Extract knowledge from Discord conversations",
  )
  .version("0.1.0");

program.addCommand(backfillCommand);
program.addCommand(processCommand);
program.addCommand(startCommand);
program.addCommand(validateCommand);
program.addCommand(statsCommand);

program.parse();
```

**Step 2: Create backfill command**

Create `src/cli/commands/backfill.ts`:

```typescript
import { Command } from "commander";
import ora from "ora";
import { loadConfig } from "../../config/index.js";
import { SQLiteStore } from "../../storage/index.js";
import { DiscordClient } from "../../bot/index.js";
import { MessageFetcher } from "../../bot/fetcher.js";
import { logger } from "../../utils/logger.js";

export const backfillCommand = new Command("backfill")
  .description("Fetch historical messages from Discord")
  .option("-d, --days <number>", "Number of days to fetch", "365")
  .option("-c, --config <path>", "Path to config file")
  .action(async (options) => {
    const spinner = ora("Loading configuration...").start();

    try {
      const config = loadConfig(options.config);
      spinner.succeed("Configuration loaded");

      // Initialize storage
      spinner.start("Initializing database...");
      const store = new SQLiteStore();
      await store.initialize();
      spinner.succeed("Database initialized");

      // Connect to Discord
      spinner.start("Connecting to Discord...");
      const discord = new DiscordClient(config);
      await discord.connect();
      spinner.succeed("Connected to Discord");

      // Run backfill
      const days = parseInt(options.days, 10);
      spinner.start(`Fetching ${days} days of messages...`);

      const fetcher = new MessageFetcher(discord, store, config);
      const result = await fetcher.backfill(days);

      spinner.succeed(
        `Backfill complete: ${result.messagesSaved} messages saved`,
      );

      // Cleanup
      await discord.disconnect();
      await store.close();

      console.log("\nBackfill Summary:");
      console.log(`  Messages found: ${result.messagesFound}`);
      console.log(`  Messages saved: ${result.messagesSaved}`);
      console.log('\nRun "dkm process" to extract knowledge.');
    } catch (error) {
      spinner.fail("Backfill failed");
      logger.error({ error }, "Backfill error");
      process.exit(1);
    }
  });
```

**Step 3: Create process command**

Create `src/cli/commands/process.ts`:

```typescript
import { Command } from "commander";
import ora from "ora";
import { loadConfig } from "../../config/index.js";
import { SQLiteStore } from "../../storage/index.js";
import { createLLMProvider } from "../../llm/index.js";
import { createOutputAdapter } from "../../output/index.js";
import { KnowledgeExtractor } from "../../processor/index.js";
import { logger } from "../../utils/logger.js";

export const processCommand = new Command("process")
  .description("Extract knowledge from unprocessed messages")
  .option("-c, --config <path>", "Path to config file")
  .action(async (options) => {
    const spinner = ora("Loading configuration...").start();

    try {
      const config = loadConfig(options.config);
      spinner.succeed("Configuration loaded");

      // Initialize storage
      spinner.start("Initializing database...");
      const store = new SQLiteStore();
      await store.initialize();
      spinner.succeed("Database initialized");

      // Initialize LLM providers
      spinner.start("Initializing LLM providers...");
      const filterProvider = createLLMProvider(config, "filter");
      const extractProvider = createLLMProvider(config, "extract");
      await filterProvider.initialize();
      await extractProvider.initialize();
      spinner.succeed("LLM providers initialized");

      // Initialize output adapter
      spinner.start("Initializing output adapter...");
      const output = createOutputAdapter(config);
      await output.initialize();
      spinner.succeed("Output adapter initialized");

      // Run extraction
      spinner.start("Extracting knowledge...");
      const extractor = new KnowledgeExtractor(
        filterProvider,
        extractProvider,
        store,
        config,
      );
      const result = await extractor.processUnprocessedMessages();
      spinner.succeed("Extraction complete");

      // Write to output
      if (result.entriesExtracted > 0) {
        spinner.start("Writing knowledge entries...");
        const entries = await store.searchKnowledgeEntries({
          status: ["draft"],
          limit: 1000,
        });
        const writeResult = await output.write(entries);
        spinner.succeed(`Wrote ${writeResult.entriesWritten} entries`);
      }

      // Cleanup
      await store.close();

      console.log("\nProcessing Summary:");
      console.log(`  Threads processed: ${result.threadsProcessed}`);
      console.log(`  Entries extracted: ${result.entriesExtracted}`);
    } catch (error) {
      spinner.fail("Processing failed");
      logger.error({ error }, "Process error");
      process.exit(1);
    }
  });
```

**Step 4: Create start command (live watcher)**

Create `src/cli/commands/start.ts`:

```typescript
import { Command } from "commander";
import ora from "ora";
import { loadConfig } from "../../config/index.js";
import { SQLiteStore } from "../../storage/index.js";
import { DiscordClient } from "../../bot/index.js";
import { MessageFetcher } from "../../bot/fetcher.js";
import { createLLMProvider } from "../../llm/index.js";
import { createOutputAdapter } from "../../output/index.js";
import { KnowledgeExtractor } from "../../processor/index.js";
import { logger } from "../../utils/logger.js";

export const startCommand = new Command("start")
  .description("Start live watcher daemon")
  .option("-c, --config <path>", "Path to config file")
  .action(async (options) => {
    const spinner = ora("Loading configuration...").start();

    try {
      const config = loadConfig(options.config);
      spinner.succeed("Configuration loaded");

      // Initialize storage
      spinner.start("Initializing database...");
      const store = new SQLiteStore();
      await store.initialize();
      spinner.succeed("Database initialized");

      // Connect to Discord
      spinner.start("Connecting to Discord...");
      const discord = new DiscordClient(config);
      await discord.connect();
      spinner.succeed("Connected to Discord");

      // Initialize LLM providers
      spinner.start("Initializing LLM providers...");
      const filterProvider = createLLMProvider(config, "filter");
      const extractProvider = createLLMProvider(config, "extract");
      await filterProvider.initialize();
      await extractProvider.initialize();
      spinner.succeed("LLM providers initialized");

      // Initialize output adapter
      spinner.start("Initializing output adapter...");
      const output = createOutputAdapter(config);
      await output.initialize();
      spinner.succeed("Output adapter initialized");

      // Set up message handler
      const fetcher = new MessageFetcher(discord, store, config);
      const extractor = new KnowledgeExtractor(
        filterProvider,
        extractProvider,
        store,
        config,
      );

      discord.onMessage(async (message) => {
        if (message.author.bot) return;
        await fetcher.fetchLive(message);
      });

      discord.onMessageUpdate(async (_old, updated) => {
        if (updated.author.bot) return;
        await fetcher.fetchLive(updated);
      });

      console.log("\n✓ Live watcher running. Press Ctrl+C to stop.\n");
      console.log("Monitoring channels:");
      for (const ch of config.discord.channels) {
        console.log(`  - #${ch.name} (${ch.id})`);
      }
      console.log(`\nScheduled processing: ${config.processing.schedule}`);

      // TODO: Add cron scheduler for periodic processing
      // For MVP, run manually with `dkm process`

      // Handle shutdown
      const shutdown = async () => {
        console.log("\nShutting down...");
        await discord.disconnect();
        await store.close();
        process.exit(0);
      };

      process.on("SIGINT", shutdown);
      process.on("SIGTERM", shutdown);
    } catch (error) {
      spinner.fail("Start failed");
      logger.error({ error }, "Start error");
      process.exit(1);
    }
  });
```

**Step 5: Create validate command**

Create `src/cli/commands/validate.ts`:

```typescript
import { Command } from "commander";
import ora from "ora";
import { loadConfig } from "../../config/index.js";
import { logger } from "../../utils/logger.js";

export const validateCommand = new Command("validate")
  .description("Validate configuration")
  .option("-c, --config <path>", "Path to config file")
  .action(async (options) => {
    const spinner = ora("Validating configuration...").start();

    try {
      const config = loadConfig(options.config);
      spinner.succeed("Configuration is valid");

      console.log("\nConfiguration Summary:");
      console.log(`  Guild ID: ${config.discord.guildId}`);
      console.log(`  Channels: ${config.discord.channels.length}`);
      for (const ch of config.discord.channels) {
        console.log(`    - #${ch.name} (${ch.type}, ${ch.priority})`);
      }
      console.log(`  Role weights: ${config.discord.roleWeights.length}`);
      console.log(`  LLM provider: ${config.llm.provider}`);
      console.log(`    Filter model: ${config.llm.models.filter.model}`);
      console.log(`    Extract model: ${config.llm.models.extract.model}`);
      console.log(`  Output: ${config.output.adapter}`);
      console.log(`  Topics: ${config.knowledgeBase.topics.length}`);
    } catch (error) {
      spinner.fail("Configuration is invalid");
      if (error instanceof Error) {
        console.error("\nError:", error.message);
      }
      process.exit(1);
    }
  });
```

**Step 6: Create stats command**

Create `src/cli/commands/stats.ts`:

```typescript
import { Command } from "commander";
import ora from "ora";
import { SQLiteStore } from "../../storage/index.js";
import { logger } from "../../utils/logger.js";

export const statsCommand = new Command("stats")
  .description("Show database statistics")
  .action(async () => {
    const spinner = ora("Loading statistics...").start();

    try {
      const store = new SQLiteStore();
      await store.initialize();

      const stats = await store.getStats();
      spinner.succeed("Statistics loaded");

      console.log("\nDatabase Statistics:");
      console.log(`  Messages: ${stats.messageCount}`);
      console.log(`  Contributors: ${stats.contributorCount}`);
      console.log(`  Knowledge entries: ${stats.entryCount}`);

      await store.close();
    } catch (error) {
      spinner.fail("Failed to load statistics");
      logger.error({ error }, "Stats error");
      process.exit(1);
    }
  });
```

**Step 7: Commit**

```bash
git add -A
git commit -m "feat: CLI commands (backfill, process, start, validate, stats)"
```

---

### Task 11: Authority Scorer

**Files:**

- Create: `src/authority/scorer.ts`
- Create: `src/authority/index.ts`

**Step 1: Create authority scorer**

Create `src/authority/scorer.ts`:

```typescript
import type { Config, RoleWeightConfig } from "../config/index.js";
import type { IMessageStore } from "../storage/interfaces/IMessageStore.js";
import { logger } from "../utils/logger.js";

export class AuthorityScorer {
  private roleWeights: Map<string, number>;
  private defaultWeight: number;
  private store: IMessageStore;

  constructor(config: Config, store: IMessageStore) {
    this.roleWeights = new Map();
    this.defaultWeight = config.discord.defaultRoleWeight;
    this.store = store;

    for (const rw of config.discord.roleWeights) {
      this.roleWeights.set(rw.roleId, rw.weight);
    }
  }

  calculateScore(userRoles: string[]): number {
    if (userRoles.length === 0) {
      return this.defaultWeight;
    }

    // Take the highest weight from user's roles
    let maxWeight = this.defaultWeight;

    for (const roleId of userRoles) {
      const weight = this.roleWeights.get(roleId);
      if (weight !== undefined && weight > maxWeight) {
        maxWeight = weight;
      }
    }

    return maxWeight;
  }

  async updateContributorScore(
    userId: string,
    roles: string[],
  ): Promise<number> {
    const score = this.calculateScore(roles);

    await this.store.updateContributor(userId, {
      baseAuthorityScore: score,
      combinedAuthorityScore: score, // In MVP, combined = base (no learned component)
    });

    return score;
  }

  async getScore(userId: string): Promise<number> {
    return this.store.getAuthorityScore(userId);
  }

  async getScores(userIds: string[]): Promise<Map<string, number>> {
    return this.store.getAuthorityScores(userIds);
  }
}
```

**Step 2: Create authority index**

Create `src/authority/index.ts`:

```typescript
export { AuthorityScorer } from "./scorer.js";
```

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: role-based authority scorer"
```

---

### Task 12: Main Entry Point & Final Wiring

**Files:**

- Create: `src/index.ts`

**Step 1: Create main entry point**

Create `src/index.ts`:

```typescript
// Discord Knowledge Miner
// Main entry point - exports all public APIs

export * from "./types/index.js";
export * from "./config/index.js";
export * from "./storage/index.js";
export * from "./llm/index.js";
export * from "./processor/index.js";
export * from "./output/index.js";
export * from "./authority/index.js";
export * from "./bot/index.js";
export { logger } from "./utils/logger.js";
```

**Step 2: Update package.json paths**

The `package.json` already has correct paths. Verify by running:

```bash
pnpm typecheck
```

**Step 3: Final commit**

```bash
git add -A
git commit -m "feat: main entry point and module exports"
```

---

## Phase 5: Testing & Documentation

### Task 13: Integration Test

**Files:**

- Create: `tests/integration/extraction.test.ts`

**Step 1: Create integration test**

Create `tests/integration/extraction.test.ts`:

```typescript
import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { SQLiteStore } from "../../src/storage/index.js";
import { ThreadBuilder } from "../../src/processor/threadBuilder.js";
import type { StoredMessage } from "../../src/types/index.js";
import { unlinkSync, existsSync } from "fs";

const TEST_DB = "data/integration-test.db";

describe("Extraction Pipeline Integration", () => {
  let store: SQLiteStore;

  beforeAll(async () => {
    store = new SQLiteStore(TEST_DB);
    await store.initialize();
  });

  afterAll(async () => {
    await store.close();
    if (existsSync(TEST_DB)) {
      unlinkSync(TEST_DB);
    }
  });

  describe("ThreadBuilder", () => {
    it("should group messages by reply chain", () => {
      const messages: StoredMessage[] = [
        createMessage("1", "How do I configure API keys?", "user1"),
        createMessage(
          "2",
          "You need to set OPENAI_API_KEY in .env",
          "user2",
          "1",
        ),
        createMessage("3", "Thanks, that worked!", "user1", "2"),
      ];

      const builder = new ThreadBuilder({
        timeGapMinutes: 30,
        minMessagesForThread: 2,
        replyChainMax: 10,
      });

      const threads = builder.buildThreads(messages);

      expect(threads).toHaveLength(1);
      expect(threads[0]?.messages).toHaveLength(3);
      expect(threads[0]?.hasQuestion).toBe(true);
      expect(threads[0]?.hasResolution).toBe(true);
    });

    it("should group messages by time proximity", () => {
      const now = Date.now();
      const messages: StoredMessage[] = [
        createMessage(
          "1",
          "Question about performance",
          "user1",
          undefined,
          now,
        ),
        createMessage(
          "2",
          "Try reducing batch size",
          "user2",
          undefined,
          now + 60000,
        ), // 1 min later
        createMessage(
          "3",
          "That helped, thanks!",
          "user1",
          undefined,
          now + 120000,
        ), // 2 min later
      ];

      const builder = new ThreadBuilder({
        timeGapMinutes: 30,
        minMessagesForThread: 2,
        replyChainMax: 10,
      });

      const threads = builder.buildThreads(messages);

      expect(threads).toHaveLength(1);
    });

    it("should format thread for LLM", () => {
      const messages: StoredMessage[] = [
        createMessage("1", "Hello world", "testuser"),
      ];

      const builder = new ThreadBuilder({
        timeGapMinutes: 30,
        minMessagesForThread: 1,
        replyChainMax: 10,
      });

      const threads = builder.buildThreads(messages);
      const formatted = builder.formatThreadForLLM(threads[0]!);

      expect(formatted).toContain("testuser");
      expect(formatted).toContain("Hello world");
    });
  });

  describe("Storage", () => {
    it("should round-trip messages", async () => {
      const message = createMessage("test-1", "Test content", "testuser");
      await store.saveMessage(message);

      const retrieved = await store.getMessage("test-1");
      expect(retrieved?.content).toBe("Test content");
    });

    it("should track contributors", async () => {
      const contrib = await store.getOrCreateContributor(
        "contrib-1",
        "contributor",
      );
      expect(contrib.authorityScore).toBe(0.2);

      await store.updateContributor("contrib-1", {
        authorityScore: 0.8,
      } as any);
      const updated = await store.getContributor("contrib-1");
      expect(updated?.combinedAuthorityScore).toBe(0.8);
    });
  });
});

function createMessage(
  id: string,
  content: string,
  authorUsername: string,
  referencedMessageId?: string,
  timestamp?: number,
): StoredMessage {
  return {
    id,
    channelId: "test-channel",
    guildId: "test-guild",
    authorId: `${authorUsername}-id`,
    authorUsername,
    authorRoles: [],
    content,
    referencedMessageId,
    attachments: [],
    embeds: [],
    reactions: [],
    createdAt: new Date(timestamp || Date.now()),
    processed: false,
  };
}
```

**Step 2: Run tests**

```bash
pnpm test
```

Expected: All tests pass

**Step 3: Commit**

```bash
git add -A
git commit -m "test: integration tests for extraction pipeline"
```

---

### Task 14: Update Documentation

**Files:**

- Update: `README.md`
- Update: `.env.example`

**Step 1: Update .env.example**

Already done in Task 1, verify it has OpenRouter config.

**Step 2: Verify README is accurate**

The existing README.md is already comprehensive. No changes needed.

**Step 3: Final commit**

```bash
git add -A
git commit -m "docs: finalize documentation"
```

---

## Execution Checklist

After completing all tasks:

1. **Verify build**

   ```bash
   pnpm build
   ```

2. **Run all tests**

   ```bash
   pnpm test
   ```

3. **Test CLI commands**

   ```bash
   # Validate config
   pnpm cli validate

   # Check stats (should show 0s for fresh DB)
   pnpm cli stats
   ```

4. **Set up real config**
   - Copy `config/default.yaml` to `config/config.yaml`
   - Add Voxta Discord server ID and channel IDs
   - Add role weights for Voxta team
   - Set `DISCORD_TOKEN` and `OPENROUTER_API_KEY` in `.env`

5. **Run backfill**

   ```bash
   pnpm cli backfill --days 365
   ```

6. **Run extraction**

   ```bash
   pnpm cli process
   ```

7. **Review output in `./kb/`**

---

## Summary

| Phase           | Tasks                                                | Est. Time |
| --------------- | ---------------------------------------------------- | --------- |
| 1. Foundation   | Project structure, config, DB schema, SQLite adapter | 2-3 hours |
| 2. Discord      | Client wrapper, message fetcher                      | 1-2 hours |
| 3. LLM          | OpenRouter provider, prompts, extractor              | 2-3 hours |
| 4. Output & CLI | Filesystem adapter, all CLI commands                 | 2-3 hours |
| 5. Testing      | Integration tests, documentation                     | 1 hour    |

**Total estimated time: 8-12 hours**
