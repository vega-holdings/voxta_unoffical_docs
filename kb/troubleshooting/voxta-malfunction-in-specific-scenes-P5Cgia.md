---
id: P5CgiaUTkOQPjSlL26_rV
slug: voxta-malfunction-in-specific-scenes-P5Cgia
type: troubleshooting
title: Voxta Malfunction in Specific Scenes
topics:
  - troubleshooting
  - configuration
keywords:
  - scene
  - audio source
  - person atom
  - plugins
  - broken scene
confidence: 0.6
authority: 0.2
contributor: futurestorm
sources: []
created: 2025-12-22T23:25:34.576Z
updated: 2025-12-22T23:25:34.576Z
---

# Voxta Malfunction in Specific Scenes

> Solutions for scene-specific Voxta failures involving plugin reduction and audio source reassignment.

## Answer

This behavior often indicates scene corruption or a conflict within the scene settings.

**Suggested Fixes:**
1. **Reduce Plugins:** Strip the scene down to minimal plugins to identify if a specific plugin is causing the conflict.
2. **Change Audio Source:** Add a new, separate Audio Source atom to the scene. Then, configure Voxta to use that new source instead of the default Person Atom audio source.

---

*Extracted from Discord. Primary contributor: futurestorm*