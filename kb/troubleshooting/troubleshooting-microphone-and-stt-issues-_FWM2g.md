---
id: _FWM2gkyom2CqCSrfZTN5
slug: troubleshooting-microphone-and-stt-issues-_FWM2g
type: troubleshooting
title: Troubleshooting Microphone and STT Issues
topics:
  - troubleshooting
  - configuration
  - performance
keywords:
  - microphone
  - stt
  - quiet
  - gpu load
  - playground
confidence: 0.9
authority: 0.2
contributor: sraura
sources:
  - messageId: "1351055609385979935"
    author: sraura
    timestamp: 2025-12-22T21:35:24.907Z
    url: ""
  - messageId: "1351175768306090094"
    author: sraura
    timestamp: 2025-12-22T21:35:24.907Z
    url: ""
created: 2025-12-22T21:35:24.907Z
updated: 2025-12-22T21:35:24.907Z
---

# Troubleshooting Microphone and STT Issues

> Steps to troubleshoot microphone levels, STT module configuration, and GPU load issues.

## Answer

To troubleshoot audio input issues:

1. **Check Module Settings:** Verify your active STT module in "Manage Modules" or the top-right cog wheel menu.
2. **Test Input:** Use `Playground -> Speech to Text` to verify if the microphone is too quiet or not detected.
3. **Profile Settings:** Check the "Prevent Speech Interruptions" (Pause recording during char speech) setting in your profile.
4. **GPU Load:** If running STT locally (e.g., Whisper), check your GPU load. High usage (especially when running heavy apps like VAM simultaneously) can cause STT failures.

---

*Extracted from Discord. Primary contributor: sraura*