---
id: H5G4NAr_mlwuf422sVlag
slug: filtering-actions-by-flags-in-javascript-api-H5G4NA
type: qa
title: Filtering Actions by Flags in JavaScript API
topics:
  - scripting
  - integrations
keywords:
  - setActions
  - flagsFilter
  - flags
  - filtering
  - javascript
  - api
confidence: 1
authority: 0.2
contributor: lapiro
sources: []
created: 2025-12-22T23:33:47.093Z
updated: 2025-12-22T23:33:47.093Z
---

# Filtering Actions by Flags in JavaScript API

> Use the `flagsFilter` property in `chat.setActions()` to condition actions on specific flags.

## Answer

To filter actions based on flags in the JavaScript API, use the `flagsFilter` property within the action object definition. Other variations like `flags` or `conditionFlags` do not work in this context.

**Example:**
```javascript
import { chat } from "@voxta";

chat.addEventListener("start", (e) => {
  chat.setActions('context', [{
    name: 'my_action',
    layer: 'my_layer',
    timing: 'AfterAssistantMessage',
    // Use flagsFilter to apply conditions
    flagsFilter: 'my_flag.on && !my_flag.off',
    description: 'Description of action',
    arguments: []
  }]);
});
```

---

*Extracted from Discord. Primary contributor: lapiro*