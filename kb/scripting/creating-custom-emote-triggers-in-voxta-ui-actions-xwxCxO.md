---
id: xwxCxOph63g36dQGhT-vA
slug: creating-custom-emote-triggers-in-voxta-ui-actions-xwxCxO
type: tip
title: Creating Custom Emote Triggers in Voxta UI Actions
topics:
  - scripting
  - configuration
keywords:
  - createEmoteTrigger
  - actions tab
  - custom emote
  - expression
  - UI extension
confidence: 0.8
authority: 0.2
contributor: bopdobop
sources: []
created: 2025-12-22T22:52:49.109Z
updated: 2025-12-22T22:52:49.109Z
---

# Creating Custom Emote Triggers in Voxta UI Actions

> Code snippet for adding custom emote triggers to the Voxta UI Actions tab.

## Answer

To extend emotes in the Voxta UI (v1.1) Actions tab, you can use the `createEmoteTrigger` function. Here is an example configuration for a custom expression:

```javascript
import { createEmoteTrigger } from './triggers';
export const trigger = createEmoteTrigger({
  emojis: ['💩','🪭'],
  color: 'rgb(118, 129, 189)',
  expression: 'Farty'
});
```

This allows defining specific emojis, UI colors, and the associated expression string.

---

*Extracted from Discord. Primary contributor: bopdobop*