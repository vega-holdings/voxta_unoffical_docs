---
id: AhRU1ClPcx9DSdRlErlE9
slug: f5-tts-hanging-on-fresh-install-AhRU1C
type: troubleshooting
title: Resolving F5-TTS Hanging and FFmpeg Errors on Windows
topics:
  - troubleshooting
  - setup
  - integrations
keywords:
  - F5-TTS
  - ffmpeg
  - windows
  - winget
  - hangs
  - installation
  - error
  - dependencies
confidence: 0.9
authority: 0.2
contributor: alvar89alvar89
sources:
  - messageId: "1331899170344276060"
    author: alvar89alvar89
    timestamp: 2025-12-19T05:32:50.708Z
    url: ""
  - messageId: "1331903853410652190"
    author: alvar89alvar89
    timestamp: 2025-12-19T05:32:50.708Z
    url: ""
created: 2025-12-19T05:32:50.708Z
updated: 2025-12-23T13:55:13.292Z
---

# Resolving F5-TTS Hanging and FFmpeg Errors on Windows

> Fix F5-TTS hanging issues and general FFmpeg errors on Windows by installing the missing FFmpeg dependency via winget.

## Answer

If you encounter errors related to FFmpeg or experience F5-TTS hanging on a fresh install, this is typically caused by a missing FFmpeg installation on the system.

### Resolution

To resolve this issue, follow these steps:

1. Navigate to the Voxta Python directory (e.g., `Voxta/Data/Python/python-3.12.8-amd64`).
2. Run `voxta-python.bat` to open the command terminal.
3. Execute the command: `winget install ffmpeg`.
4. Restart Voxta to apply changes.

---

*Extracted from Discord. Primary contributor: alvar89alvar89*