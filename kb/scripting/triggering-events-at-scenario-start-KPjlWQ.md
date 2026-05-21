---
id: KPjlWQnoOWkqx8wH29kNL
slug: triggering-events-at-scenario-start-KPjlWQ
type: qa
title: Triggering Events at Scenario Start
topics:
  - scripting
  - configuration
keywords:
  - scenario
  - start event
  - bootstrap messages
  - introduction
  - trigger
  - init
confidence: 0.9
authority: 0.2
contributor: .frond
sources:
  - messageId: "1327674505564389467"
    author: .frond
    timestamp: 2025-12-19T05:13:07.870Z
    url: ""
  - messageId: "1327690291934920868"
    author: .frond
    timestamp: 2025-12-19T05:13:07.870Z
    url: ""
created: 2025-12-19T05:13:07.870Z
updated: 2025-12-19T05:13:07.870Z
---

# Triggering Events at Scenario Start

> Events can be triggered at scenario start using Bootstrap Messages or the 'start' event listener in scripts.

## Answer

Yes, there are two primary ways to trigger events at the start of a scenario:

1. **Bootstrap Messages**: You can use the **Bootstrap Messages** field in the scenario configuration to set an initial event or override the greeting. Use the `{{ event }}` tag.
   *   Example: `{{ event }}: The character enters the room.`

2. **Scripting**: You can use the `start` event listener in a script to execute code immediately when the chat begins.

```javascript
import { chat } from "@voxta";
chat.addEventListener('start', (e) => {
    // Your code here
    console.log("Chat started!");
});
```

---

*Extracted from Discord. Primary contributor: .frond*