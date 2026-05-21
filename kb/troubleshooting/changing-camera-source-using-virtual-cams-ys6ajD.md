---
id: ys6ajDoUEMDwq7z8J1QPT
slug: changing-camera-source-using-virtual-cams-ys6ajD
type: troubleshooting
title: Changing Camera Source and Optimizing Vision Input
topics:
  - troubleshooting
  - configuration
  - integrations
keywords:
  - camera
  - webcam
  - virtual cam
  - video source
  - browser
  - localhost
  - vision
  - resolution
  - flashcap
  - windows sdk
confidence: 0.8
authority: 0.2
contributor: sounderstanding
sources: []
created: 2025-12-22T23:13:26.962Z
updated: 2025-12-23T04:40:48.512Z
---

# Changing Camera Source and Optimizing Vision Input

> Use a standard web browser to access Voxta and select specific camera inputs, including virtual cameras. For better image resolution with Vision features, consider using the Windows SDK addon with FlashCap.

## Answer

The Voxta Desktop App runs in its own browser instance which may restrict changing video sources. To use a specific camera or virtual cam:

1. Open a standard web browser (like Edge, Chrome, etc.).
2. Navigate to the Voxta server address (default: `http://localhost:5384` or `http://127.0.0.1:5384/`).
3. Use the browser's settings to select the desired video input.

Alternatively, you can install the page as a web app from the browser to maintain a standalone feel while using the browser's device settings.

For better image resolution (16:9 vs 4:3) when using Vision features, using the Windows SDK addon for vision with FlashCap is recommended over the default 'use browser' method.

---

*Extracted from Discord. Primary contributor: sounderstanding*