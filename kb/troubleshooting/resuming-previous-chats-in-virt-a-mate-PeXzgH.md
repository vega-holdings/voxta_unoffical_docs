---
id: PeXzgH5H5eebH6xZjPh5g
slug: resuming-previous-chats-in-virt-a-mate-PeXzgH
type: troubleshooting
title: Managing Chat Sessions and Resolving Stuck or Corrupted Chats
topics:
  - troubleshooting
  - configuration
  - integrations
keywords:
  - Virt-A-Mate
  - VAM
  - Voxta
  - plugin
  - chat
  - new
  - resume
  - history
  - dropdown
  - select chat
  - crash
  - startup
  - stuck chat
  - in progress
  - Voxta.db
  - database
  - restart
  - hang
  - browser
  - persistence
  - dispose
  - home
  - close chat
confidence: 0.8
authority: 0.2
contributor: .vaan20
sources: []
created: 2025-12-22T20:24:19.337Z
updated: 2025-12-23T04:27:38.123Z
---

# Managing Chat Sessions and Resolving Stuck or Corrupted Chats

> Learn how to start new chats, resume previous conversations, and troubleshoot issues like stuck sessions or crash loops by restarting the server, application, or resetting the database.

## Answer

# Managing Chat Sessions and Resolving Stuck or Corrupted Chats

Voxta allows you to manage ongoing chat sessions, start new conversations, and resume previous ones. Occasionally, sessions may become stuck or corrupted, causing issues like unresponsiveness or crash loops. This guide covers how to handle these situations.

## Starting a New Chat vs. Resuming a Previous One

You can choose to begin a fresh conversation or continue an earlier one. The exact method depends on the client you are using (e.g., Virt-A-Mate plugin, web browser).

### In Virt-A-Mate

The Voxta plugin for Virt-A-Mate provides a dropdown menu for chat management:

1. Open the Voxta plugin interface inside Virt-A-Mate.
2. Locate the **Select Chat** dropdown field.
3. To start a new chat:
   - Choose the **New** option.
   - This creates a clean session with a new chat ID and ensures no old chat history is loaded.
4. To resume a previous chat:
   - Select the specific chat session you wish to continue from the dropdown.
   - Activate the chat (the method may vary by plugin version; usually selecting it is enough).

## Resolving Stuck Chat Sessions

If a chat becomes unresponsive or seems stuck, you can often fix it by restarting either the Voxta Server or the Voxta application.

### Restart Voxta Server (Resume Conversation)

- Stop the Voxta Server process and start it again.
- **Browser users:** After the server restarts, the chat session will automatically resume in your web browser.
- **Integrations (e.g., Virt-A-Mate):** The same behavior generally applies; you can continue the conversation where you left off.

This method preserves the current chat state, allowing you to pick up the conversation without losing context.

### Restart Voxta Application (Dispose and Start Fresh)

If you prefer to clear the stuck state and dispose of any open chats:

1. Restart the Voxta application (client).
2. In the application UI, navigate to the **Home** screen (usually by clicking the Home button or selecting Home from the menu).

Returning to the Home screen ensures that any active chat sessions are properly disposed, giving you a clean slate.

> **Note:** These steps may vary slightly depending on your specific setup and version. If issues persist, consult the official documentation or seek support.

## Fixing Crash Loop Caused by a Corrupted Chat

Voxta attempts to resume the last active chat upon startup. If that chat is corrupted or causes errors, Voxta may enter a crash loop, preventing access to the UI. To resolve this, you need to reset the database.

1. Close Voxta completely.
2. Navigate to your Voxta installation folder.
3. **Backup** the `Data` folder to a safe location (this contains all your settings, characters, and chat data).
4. Delete or rename the `Data/Voxta.db` file.  
   *Deleting this file will reset your Voxta installation to a clean state. All custom settings, characters, and chat histories will be lost, so ensure you have a backup if you wish to preserve any data.*
5. Restart Voxta.

After this, Voxta will start with a fresh database, and you can set up your preferences again or restore from backup if needed.

---

By following these instructions, you can effectively manage your chat sessions and recover from common issues.

---

*Extracted from Discord. Primary contributor: .vaan20*