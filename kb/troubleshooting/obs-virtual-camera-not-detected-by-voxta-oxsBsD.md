---
id: oxsBsDAwEVb82px8CGiYs
slug: obs-virtual-camera-not-detected-by-voxta-oxsBsD
type: troubleshooting
title: OBS Virtual Camera Not Detected by Voxta
topics:
  - troubleshooting
  - integrations
keywords:
  - OBS
  - virtual camera
  - vision
  - FlashCap
  - video source
  - NDI
confidence: 0.8
authority: 0.2
contributor: blinkey999
sources: []
created: 2025-12-22T23:27:13.564Z
updated: 2025-12-22T23:27:13.564Z
---

# OBS Virtual Camera Not Detected by Voxta

> Voxta cannot use OBS Virtual Camera due to FlashCap library limitations.

## Answer

Voxta currently cannot detect the OBS Virtual Camera. This is a known limitation attributed to the underlying camera capture library (FlashCap) and the fact that the OBS virtual camera does not present itself as a standard camera device to the application. Some users suggest trying the NDI plugin for OBS as a potential workaround, though this is not guaranteed.

---

*Extracted from Discord. Primary contributor: blinkey999*