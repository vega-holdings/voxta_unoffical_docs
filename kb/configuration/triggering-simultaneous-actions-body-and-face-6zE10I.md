---
id: 6zE10IDirPBcvNnHOSEf7
slug: triggering-simultaneous-actions-body-and-face-6zE10I
type: qa
title: Triggering Simultaneous Actions (Body and Face)
topics:
  - configuration
  - integrations
keywords:
  - layers
  - action inference
  - simultaneous actions
  - emotions
  - movement
  - routimator
confidence: 0.9
authority: 0.2
contributor: lapiro
sources:
  - messageId: "1348636610366804090"
    author: lapiro
    timestamp: 2025-12-22T21:24:42.360Z
    url: ""
  - messageId: "1348727928967528570"
    author: lapiro
    timestamp: 2025-12-22T21:24:42.360Z
    url: ""
created: 2025-12-22T21:24:42.360Z
updated: 2025-12-22T21:24:42.360Z
---

# Triggering Simultaneous Actions (Body and Face)

> Use Action Layers to execute body movements and facial expressions simultaneously.

## Answer

You should use **Action Layers** in Voxta's Action Inference settings. 

Instead of relying on a single plugin or action to handle complex combinations, separate your actions into logical layers (e.g., a `movement` layer for 'sit_down' and an `emotions` layer for 'smile'). Voxta allows one action to be selected per layer per turn, and they will be executed together.

---

*Extracted from Discord. Primary contributor: lapiro*