---
id: 6n3uSlfUSmvOHBSpW41UN
slug: voice-samples-not-loading-6n3uSl
type: troubleshooting
title: Voice Samples Not Loading
topics:
  - troubleshooting
  - setup
keywords:
  - voices
  - samples
  - ffmpeg
  - missing files
  - update
confidence: 0.8
authority: 0.2
contributor: ravenholme990
sources:
  - messageId: "1335300689467019364"
    author: ravenholme990
    timestamp: 2025-12-22T20:10:51.269Z
    url: ""
created: 2025-12-22T20:10:51.269Z
updated: 2025-12-22T20:10:51.269Z
---

# Voice Samples Not Loading

> Voice samples may fail to load in the UI if ffmpeg is missing, even if the files exist in the Data folder.

## Answer

If voice samples are missing from the interface, they may still be present on the disk but failing to load due to missing dependencies like `ffmpeg`.

**Steps to verify:**
1. Check the directory `Data\Audio\VoiceSamples` to see if the files are physically there.
2. If the files exist, ensure `ffmpeg` is correctly installed and configured, as it is required to load and process audio files.

---

*Extracted from Discord. Primary contributor: ravenholme990*