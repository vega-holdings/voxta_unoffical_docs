---
id: o779segsvYadPkVuulVBH
slug: event-action-buttons-not-visible-o779se
type: troubleshooting
title: Event Action Buttons Not Visible
topics:
  - troubleshooting
  - scripting
keywords:
  - continue button
  - action button
  - chatFlow
  - user turn
  - hidden interface
  - UI
confidence: 0.9
authority: 0.2
contributor: sraura
sources:
  - messageId: "1335367495447482428"
    author: sraura
    timestamp: 2025-12-22T20:13:05.142Z
    url: ""
created: 2025-12-22T20:13:05.142Z
updated: 2025-12-22T20:13:05.142Z
---

# Event Action Buttons Not Visible

> Action buttons only show during the user's turn; use e.chatFlow(chat.user) to force the turn if needed.

## Answer

Action buttons in Voxta typically only appear when it is the user's turn to reply. If the system considers it the character's turn, the button will remain hidden.

You can force the chat flow to return to the user using the `chatFlow` method in a script:

```javascript
import { chat } from "@voxta";
export function trigger(e) {
  e.chatFlow(chat.user);
}
```

*Note: Users have reported that this method can sometimes cause side effects, such as requiring a double-enter to proceed or causing duplicate Storywriter outputs.*

---

*Extracted from Discord. Primary contributor: sraura*