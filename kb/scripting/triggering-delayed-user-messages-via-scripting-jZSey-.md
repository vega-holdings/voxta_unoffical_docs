---
id: jZSey-WOtgq6y6KTaVueE
slug: triggering-delayed-user-messages-via-scripting-jZSey-
type: tip
title: Triggering Delayed User Messages via Scripting
topics:
  - scripting
keywords:
  - setTimeout
  - chat.userMessage
  - delay
  - timer
  - automation
confidence: 0.8
authority: 0.2
contributor: Deleted User
sources: []
created: 2025-12-22T22:48:16.823Z
updated: 2025-12-22T22:48:16.823Z
---

# Triggering Delayed User Messages via Scripting

> Use setTimeout to send a user message after a delay.

## Answer

To trigger a user message after a specific delay in a script, you can use the standard JavaScript `setTimeout` function combined with `chat.userMessage`.

```javascript
import { chat } from "@voxta";

// Trigger a message after x milliseconds
setTimeout(() => chat.userMessage('Message text'), x);
```

---

*Extracted from Discord. Primary contributor: Deleted User*