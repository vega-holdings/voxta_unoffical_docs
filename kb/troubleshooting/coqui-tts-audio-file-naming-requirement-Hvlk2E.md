---
id: Hvlk2Eh4YCierNvTdJZd2
slug: coqui-tts-audio-file-naming-requirement-Hvlk2E
type: troubleshooting
title: Coqui TTS Audio File Naming Requirement
topics:
  - troubleshooting
  - configuration
keywords:
  - coqui
  - tts
  - audio files
  - filenames
  - spaces
  - error
confidence: 0.9
authority: 0.2
contributor: lapiro
sources:
  - messageId: "1420708837173891132"
    author: lapiro
    timestamp: 2025-12-22T23:32:25.592Z
    url: ""
  - messageId: "1420807387970801797"
    author: lapiro
    timestamp: 2025-12-22T23:32:25.592Z
    url: ""
created: 2025-12-22T23:32:25.592Z
updated: 2025-12-22T23:32:25.592Z
---

# Coqui TTS Audio File Naming Requirement

> Coqui TTS voices may fail if audio filenames contain spaces; renaming them resolves the issue.

## Answer

This issue can occur if the audio files used for the voices contain spaces in their filenames. 

**Solution:**
Rename the audio files to remove any spaces (e.g., change `my voice.wav` to `my_voice.wav`).

---

*Extracted from Discord. Primary contributor: lapiro*