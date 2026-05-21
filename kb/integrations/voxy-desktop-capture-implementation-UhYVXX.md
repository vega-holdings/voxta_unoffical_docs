---
id: UhYVXXl34rj2G-J6i0Km_
slug: voxy-desktop-capture-implementation-UhYVXX
type: reference
title: Voxy Desktop Capture Implementation
topics:
  - integrations
  - configuration
keywords:
  - Voxy
  - Unity
  - screenshot
  - vision
  - desktop capture
confidence: 0.9
authority: 0.2
contributor: djsoapyknuckles
sources: []
created: 2025-12-22T23:41:26.129Z
updated: 2025-12-22T23:41:26.129Z
---

# Voxy Desktop Capture Implementation

> Voxta server handles screenshots for Voxy, not the Unity client directly.

## Answer

In the Voxy client (Unity), the actual desktop capture (screenshot) for Vision capabilities is handled by the Voxta server, not the Unity application itself. Voxy is notified when the "capture screenshot" action is invoked. The application typically runs in a transparent full-screen mode.

---

*Extracted from Discord. Primary contributor: djsoapyknuckles*