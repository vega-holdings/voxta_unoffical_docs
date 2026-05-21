---
id: 3OajFFp9XcqOCqvhlCfu6
slug: changing-background-image-via-script-3OajFF
type: qa
title: Changing Background Image via Script
topics:
  - scripting
  - configuration
keywords:
  - background
  - image
  - SetBackgroundFromScenario
  - appTrigger
  - assets
  - scene
confidence: 0.9
authority: 0.2
contributor: .frond
sources:
  - messageId: "1336929790728474644"
    author: .frond
    timestamp: 2025-12-22T20:25:26.916Z
    url: ""
  - messageId: "1336945288698400768"
    author: .frond
    timestamp: 2025-12-22T20:25:26.916Z
    url: ""
created: 2025-12-22T20:25:26.916Z
updated: 2025-12-22T20:25:26.916Z
---

# Changing Background Image via Script

> Use `chat.appTrigger('SetBackgroundFromScenario', 'path')` to change the background.

## Answer

To change the background image dynamically, use `chat.appTrigger` with the `'SetBackgroundFromScenario'` command. 

Ensure your image files are placed within the scenario's assets directory (e.g., inside a folder named `Backgrounds`).

```javascript
import { chat } from "@voxta";

export function trigger(e) {
  // path relative to the scenario assets folder
  chat.appTrigger('SetBackgroundFromScenario', 'Backgrounds/couch1.png');
}
```

---

*Extracted from Discord. Primary contributor: .frond*