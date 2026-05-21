---
id: sBvUWwbRFOlRcs3d1yiSM
slug: continuous-vision-differences-vam-vs-voxta-desktop-sBvUWw
type: qa
title: "Continuous Vision Differences: VAM vs Voxta Desktop"
topics:
  - troubleshooting
  - configuration
keywords:
  - vision
  - camera
  - browser source
  - VAM
  - continuous inference
  - flashcap
  - windows sdk
confidence: 0.7
authority: 0.2
contributor: ap0calyps377
sources:
  - messageId: "1404156088886235259"
    author: ap0calyps377
    timestamp: 2025-12-22T23:26:19.143Z
    url: ""
created: 2025-12-22T23:26:19.143Z
updated: 2025-12-22T23:26:19.143Z
---

# Continuous Vision Differences: VAM vs Voxta Desktop

> Explains why continuous vision updates in VAM but may stall in Voxta Desktop due to browser vs native service differences.

## Answer

Continuous vision behaves differently between platforms due to the underlying access methods:

* **Virt-A-Mate (VAM):** Uses native modules (such as `flashcap` or Windows SDK services) which support continuous streaming and inference updates.
* **Voxta Desktop (Browser Source):** Relies on browser permissions and protocols, which may not support continuous streaming in the same way, often requiring specific events or reconnections for each image capture.

This results in the browser source sometimes only showing the initial inference without updating continuously.

---

*Extracted from Discord. Primary contributor: ap0calyps377*