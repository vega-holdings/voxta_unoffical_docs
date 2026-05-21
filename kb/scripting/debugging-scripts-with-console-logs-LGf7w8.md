---
id: LGf7w8v8y5hLOcZQahK7Y
slug: debugging-scripts-with-console-logs-LGf7w8
type: tip
title: Debugging Scripts with Console Logs
topics:
  - scripting
  - troubleshooting
keywords:
  - debug
  - console
  - log
  - F2
confidence: 0.9
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T22:50:42.921Z
updated: 2025-12-22T22:50:42.921Z
---

# Debugging Scripts with Console Logs

> Use console.log and press F2 to view script logs for debugging.

## Answer

To debug scripts, you can insert `console.log()` statements. You can view these logs within the Voxta application by pressing **F2**.

```javascript
import { chat } from "@voxta";

export function trigger(e) {
  chat.setFlag('cooldown_1_mins', { seconds: 1 * 60 });
  console.log('cooldown_set_for_1_mins');
}
```

---

*Extracted from Discord. Primary contributor: sraura*