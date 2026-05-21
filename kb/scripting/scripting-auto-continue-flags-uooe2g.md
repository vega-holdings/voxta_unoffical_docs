---
id: uooe2g81Eid4Txl1Qz2Ut
slug: scripting-auto-continue-flags-uooe2g
type: qa
title: Scripting Auto-Continue Flags
topics:
  - scripting
keywords:
  - auto_continue
  - setFlag
  - unsetFlag
  - continuations
  - flags
confidence: 0.9
authority: 0.2
contributor: sraura
sources:
  - messageId: "1347284578708099156"
    author: sraura
    timestamp: 2025-12-22T21:16:32.197Z
    url: ""
created: 2025-12-22T21:16:32.197Z
updated: 2025-12-22T21:16:32.197Z
---

# Scripting Auto-Continue Flags

> Code snippets for enabling and disabling the auto_continue flag in Voxta scripts.

## Answer

To enable or disable the `auto_continue` feature via script, use the `chat.setFlag` and `chat.unsetFlag` methods.

```javascript
// Enable auto-continue
chat.setFlag('auto_continue');

// Disable auto-continue
chat.unsetFlag('auto_continue');
// Alternatively:
chat.setFlag('!auto_continue');
```

---

*Extracted from Discord. Primary contributor: sraura*