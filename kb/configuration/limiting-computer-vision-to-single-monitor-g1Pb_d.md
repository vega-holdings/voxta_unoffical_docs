---
id: g1Pb_dstq6Kx2P3BbJ7Wo
slug: limiting-computer-vision-to-single-monitor-g1Pb_d
type: troubleshooting
title: Limiting Computer Vision to Single Monitor
topics:
  - configuration
  - integrations
keywords:
  - computer vision
  - screen capture
  - multi-monitor
  - windows sdk
  - monitordisplay
confidence: 0.8
authority: 0.2
contributor: alvar89alvar89
sources:
  - messageId: "1331680976811724892"
    author: alvar89alvar89
    timestamp: 2025-12-19T05:29:20.783Z
    url: ""
  - messageId: "1331682023529779323"
    author: alvar89alvar89
    timestamp: 2025-12-19T05:29:20.783Z
    url: ""
created: 2025-12-19T05:29:20.783Z
updated: 2025-12-19T05:29:20.783Z
---

# Limiting Computer Vision to Single Monitor

> Configure the Windows SDK Computer Vision settings to select a specific monitor.

## Answer

You can configure the screen capture settings within the **Windows SDK** service configuration.

1. Go to the **Windows SDK** settings.
2. Look under the **Computer Vision** section.
3. Adjust the `monitordisplay` option to select the desired screen.

---

*Extracted from Discord. Primary contributor: alvar89alvar89*