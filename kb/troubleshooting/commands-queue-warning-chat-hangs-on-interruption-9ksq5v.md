---
id: 9ksq5vH3cdCl5-dEHz_9G
slug: commands-queue-warning-chat-hangs-on-interruption-9ksq5v
type: troubleshooting
title: Voxta hangs when interrupting character reply (commands queue bug)
topics:
  - troubleshooting
  - performance
  - integrations
keywords:
  - commands queue
  - hang
  - freeze
  - interrupt
  - coqui
  - stt
  - restart
  - bug
confidence: 0.9
authority: 0.2
contributor: sraura
sources:
  - messageId: "1354103453030416469"
    author: sraura
    timestamp: 2025-12-22T21:42:50.315Z
    url: ""
  - messageId: "1357922694859067402"
    author: sraura
    timestamp: 2025-12-22T21:42:50.315Z
    url: ""
  - messageId: "1354150492883652719"
    author: sraura
    timestamp: 2025-12-22T21:42:50.315Z
    url: ""
created: 2025-12-22T21:42:50.315Z
updated: 2025-12-23T04:29:35.207Z
---

# Voxta hangs when interrupting character reply (commands queue bug)

> Interrupting a character's speech can cause Voxta to hang, often due to a bug in the STT engine (e.g., Coqui) or command queue. A restart of Voxta is required to resume chat; this bug is expected to be fixed in version 143.

## Answer

# Voxta hangs when interrupting character reply

**Issue:** Interrupting a character's speech during a reply can cause Voxta to hang. This is a known bug that affects the STT (Speech-to-Text) engine or the command queue, particularly when using Coqui STT, but may also occur with other STT services.

**Symptoms:** After interrupting, Voxta becomes unresponsive; the chat does not progress, and commands are not processed.

**Resolution:** To recover, restart Voxta. This will clear the hung state and allow chat to continue.

**Expected fix:** This bug is expected to be resolved in Voxta version 143.

**Note:** If you encounter this issue frequently, consider avoiding interrupting character replies until the fix is applied.

---

*Extracted from Discord. Primary contributor: sraura*