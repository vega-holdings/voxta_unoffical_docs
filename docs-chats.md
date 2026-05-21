---
title: "Chats"
url: "https://doc.voxta.ai/docs/chats/"
scraped_at: "2025-12-22T00:00:00.000Z"
status: "draft"
---

# Chats

The Chats page displays all your chat sessions, allowing you to resume previous conversations or start new ones. Access via **Chat > Chats** in the sidebar.

## Overview

Every conversation you have in Voxta creates a chat session. The Chats page lets you:

- **View all past sessions** - See your conversation history
- **Resume conversations** - Continue where you left off
- **Filter and search** - Find specific chats
- **Manage sessions** - Delete or organize chats

## Interface Elements

### Create New Chat

Button at the top to start a fresh conversation:
- Opens character/scenario selection
- Creates a new session with no history

### Filters

#### Filter by Scenario

Dropdown to show only chats from specific scenarios:
- **All Scenarios** - Show everything
- Specific scenario names

#### Filter by Character

Dropdown to show only chats with specific characters:
- **All Characters** - Show everything
- Specific character names

### Chat Session Cards

Each session displays:

- **Character avatar** - Visual identifier
- **Character name** - Who you were chatting with
- **Session info** - "last session X ago, created Y ago"
- **App indicator** - Which app was used (Voxta UI, VAM, etc.)
- **Resume button** - Continue this conversation
- **Summary** - AI-generated summary of the conversation
- **Event marker** - If scenario events occurred

## Starting a New Chat

### From Chats Page

1. Click **Create New Chat**
2. Select a character
3. Optionally select a scenario
4. Begin the conversation

### From Characters Page

1. Go to **Creator Studio > Characters**
2. Click on a character card
3. Click the chat button
4. A new session starts (or resumes recent)

### From Home Page

1. Go to **Chat > Home**
2. Click on your favorite character
3. Or use the quick action buttons

## Resuming a Chat

### Full Resume

1. Go to **Chat > Chats**
2. Find the session you want
3. Click **Resume**
4. The conversation continues with full history

### What Gets Restored

- Complete message history
- Character context and memory
- Scenario state and variables
- Any active events or flags

## Chat Session Information

### Summary

Voxta generates summaries of your conversations:
- Created by the Summarization module
- Helps identify chats at a glance
- Updates as conversations progress

### Timestamps

- **Last session** - When you last interacted
- **Created** - When the chat started

### App Source

Shows which application was used:
- **Voxta UI** - Web interface
- **Virt-A-Mate** - VAM plugin
- **Custom app name** - Third-party integrations

### Events

If a scenario has events, you may see:
- Event markers in the session card
- Current event state
- Progress indicators

## Managing Chats

### Deleting Sessions

To remove a chat session:
1. Find the session
2. Look for delete option (may be in menu)
3. Confirm deletion

Note: Deleted chats cannot be recovered.

### Organizing Chats

Use filters to find chats:
- Filter by the character you want
- Filter by scenario type
- Use search if available

### Chat History Limits

Depending on settings:
- Very old chats may be archived
- Summaries preserve key information
- Memory modules retain important facts

## Multi-Character Chats

Some scenarios support multiple characters:
- Session shows participating characters
- Filter can show these sessions
- Resume continues with all characters

## Chat vs Chat History

| Chats Page | Chat History Page |
|------------|-------------------|
| Session management | Message-level view |
| Resume/delete sessions | Export/review messages |
| High-level overview | Detailed transcript |
| Session cards | Message list |

See [Chat History](chat-history.md) for detailed message viewing.

## Best Practices

### Naming/Identification

- Use distinctive character names
- Create scenarios with clear purposes
- Session summaries help identify chats

### Regular Cleanup

- Delete test sessions
- Remove abandoned chats
- Keep meaningful conversations

### Before Important Chats

- Check which session you're resuming
- Review the summary
- Verify correct character/scenario

## Troubleshooting

### Can't Find a Chat

- Try clearing filters
- Check both Character and Scenario filters
- Session may have been deleted
- Check Chat History page

### Resume Not Working

- Check services are available
- Verify configuration is valid
- Try starting a new chat

### Wrong Context After Resume

- Summary may have compressed details
- Try starting fresh if context is lost
- Check memory module settings

### Slow Loading

- Many sessions can slow the page
- Try filtering to reduce list
- Consider archiving old sessions

## Related Pages

- [Chat](chat.md) - The chat interface
- [Chat History](chat-history.md) - Message-level history
- [Characters](characters.md) - Character management
- [Scenarios](scenarios.md) - Scenario management
- [Memory Books](memory-books.md) - Long-term memory

---

## Related KB Articles

- [Fixing issues with long-running conversations](kb/troubleshooting/fixing-issues-with-long-running-conversations-ae6hzr.md)
- [Support for Multiple User Personas](kb/configuration/support-for-multiple-user-personas-nGXHn1.md)
- [Testing Dynamic Avatars in Normal Chat](kb/configuration/testing-dynamic-avatars-in-normal-chat-RrJ35m.md)
- [Image Generation Limitation in Ephemeral Chats](kb/integrations/image-generation-limitation-in-ephemeral-chats-I7KXeh.md)
