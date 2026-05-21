---
id: Dm2nGIPO_gnPTYJhK5ypy
slug: scripting-avatar-touch-and-hover-events-Dm2nGI
type: reference
title: Scripting Avatar Touch and Hover Events
topics:
  - scripting
keywords:
  - touch
  - click
  - hover
  - avatar
  - body part
  - event listener
  - javascript
  - interaction
confidence: 0.8
authority: 0.2
contributor: sraura
sources:
  - messageId: "1333965532336095305"
    author: sraura
    timestamp: 2025-12-22T20:02:53.559Z
    url: ""
created: 2025-12-22T20:02:53.559Z
updated: 2025-12-22T20:02:53.559Z
---

# Scripting Avatar Touch and Hover Events

> Code snippet for detecting mouse hover and click events on avatar body parts using the Voxta scripting API.

## Answer

To handle mouse interactions with the avatar (touch/click features), you can use the `app:hover` and `app:click` event listeners in your scripts. This allows you to detect which body part is being interacted with.

```javascript
import { chat } from "@voxta";

chat.addEventListener('app:hover', (e) => {
    console.log(`mouse over: ${e.arguments.avatar_body_part}`);
});

chat.addEventListener('app:click', (e) => {
    console.log(`mouse clicked on: ${e.arguments.avatar_body_part}`);
});
```

---

*Extracted from Discord. Primary contributor: sraura*