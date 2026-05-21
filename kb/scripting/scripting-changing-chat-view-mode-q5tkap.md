---
id: q5tkapWQadMowO_oRs1pQ
slug: scripting-changing-chat-view-mode-q5tkap
type: reference
title: "Scripting: Changing Chat View Mode"
topics:
  - scripting
keywords:
  - SelectView
  - view mode
  - portrait
  - talk
  - chat
confidence: 1
authority: 0.2
contributor: .frond
sources: []
created: 2025-12-22T22:40:12.605Z
updated: 2025-12-22T22:40:12.605Z
---

# Scripting: Changing Chat View Mode

> Use `chat.appTrigger('SelectView', mode)` to switch between chat, talk, and portrait views.

## Answer

You can change the application's view mode (e.g., to `talk`, `portrait`, or `chat`) using the `SelectView` app trigger.

```javascript
import { chat } from "@voxta";

export function trigger(e) {
  chat.appTrigger("SelectView", "portrait");
}
```

---

*Extracted from Discord. Primary contributor: .frond*