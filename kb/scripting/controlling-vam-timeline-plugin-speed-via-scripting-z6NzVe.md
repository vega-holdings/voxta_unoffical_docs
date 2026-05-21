---
id: z6NzVeuJiwIf_408y8w82
slug: controlling-vam-timeline-plugin-speed-via-scripting-z6NzVe
type: qa
title: Controlling VaM Timeline Plugin Speed via Scripting
topics:
  - scripting
  - integrations
keywords:
  - VaM
  - Virt-a-Mate
  - Timeline
  - Speed
  - appTrigger
  - plugin
confidence: 0.9
authority: 0.2
contributor: jaysver_1
sources:
  - messageId: "1382978388058312725"
    author: jaysver_1
    timestamp: 2025-12-22T23:03:28.031Z
    url: ""
  - messageId: "1384086491310854154"
    author: jaysver_1
    timestamp: 2025-12-22T23:03:28.031Z
    url: ""
created: 2025-12-22T23:03:28.031Z
updated: 2025-12-22T23:03:28.031Z
---

# Controlling VaM Timeline Plugin Speed via Scripting

> Use chat.appTrigger to set the speed of the VaM Timeline plugin.

## Answer

To control the speed of the VaM Timeline plugin, use `chat.appTrigger` to target the specific float parameter on the plugin atom. Direct assignment (e.g., `timeline.storable.Speed`) is read-only and will fail.

**Example:**
```javascript
chat.appTrigger("Float", "Person", "plugin#8_VamTimeline.AtomPlugin", "Speed", newSpeedVal);
```

*Note: Ensure the plugin ID (e.g., `plugin#8_...`) matches the specific instance ID in your VaM scene.*

---

*Extracted from Discord. Primary contributor: jaysver_1*