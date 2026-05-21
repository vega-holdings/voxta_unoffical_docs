---
id: 17AwsftdYQhDFlOiDWzSY
slug: manually-triggering-character-speech-in-vam-17Awsf
type: qa
title: Manually Triggering Character Speech in VAM
topics:
  - integrations
  - configuration
keywords:
  - VAM
  - TTS
  - speak
  - manual input
  - command
  - /char
  - /message
confidence: 0.9
authority: 0.2
contributor: a1os353
sources:
  - messageId: "1334841661854842891"
    author: a1os353
    timestamp: 2025-12-22T20:07:18.451Z
    url: ""
  - messageId: "1334842124587237439"
    author: a1os353
    timestamp: 2025-12-22T20:07:18.451Z
    url: ""
  - messageId: "1334842580986236929"
    author: a1os353
    timestamp: 2025-12-22T20:07:18.451Z
    url: ""
created: 2025-12-22T20:07:18.451Z
updated: 2025-12-22T20:07:18.451Z
---

# Manually Triggering Character Speech in VAM

> Use /char or /message commands to make the VAM model speak user-typed text.

## Answer

Yes, you can force the character to speak specific text by sending a message *as* that character using the command system in the chat bar. This triggers the associated TTS and lip-sync in VAM.

**Methods:**
*   **Shorthand:** `/char [Text you want the character to say]`
*   **Official Syntax:** `/message --character "[Character Name]" -- [Text]`

---

*Extracted from Discord. Primary contributor: a1os353*