---
id: fh_KyN_UrCKptS-gjg44s
slug: enabling-continuous-character-conversation-auto-chat-fh_KyN
type: qa
title: Enabling Continuous Character Conversation (Auto-Chat)
topics:
  - configuration
  - integrations
keywords:
  - continuations
  - auto-chat
  - auto_continue
  - augmentations
  - voxta utilities
  - character loop
confidence: 0.8
authority: 0.2
contributor: sraura
sources:
  - messageId: "1335314730784391258"
    author: sraura
    timestamp: 2025-12-22T20:12:07.715Z
    url: ""
  - messageId: "1335325256017252404"
    author: sraura
    timestamp: 2025-12-22T20:12:07.715Z
    url: ""
  - messageId: "1335325652273860701"
    author: sraura
    timestamp: 2025-12-22T20:12:07.715Z
    url: ""
created: 2025-12-22T20:12:07.715Z
updated: 2025-12-22T20:12:07.715Z
---

# Enabling Continuous Character Conversation (Auto-Chat)

> Use the Voxta Utilities: Continuations module and the auto_continue flag to enable continuous character-to-character chat.

## Answer

You can achieve this using the **Voxta Utilities: Continuations** module.

**Steps:**
1. Ensure the chat and character are in a mode that supports augmentations.
2. Enable `continuations_auto_continue` in the character card augmentations.
3. Toggle the functionality on. This can be done by:
   - Using the "Automatically create" button (creates a pushable button).
   - Using Actions in the action inference list.
   - Manually toggling the `auto_continue` flag.

Once active, characters will keep chatting until the user inputs a message.

---

*Extracted from Discord. Primary contributor: sraura*