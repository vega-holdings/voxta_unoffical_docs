---
id: vn3DM4uXufq1WuDXLMsOO
slug: f5-tts-and-kokoro-updates-build-136-vn3DM4
type: reference
title: F5-TTS and Kokoro Updates (Build 136+)
topics:
  - integrations
  - setup
keywords:
  - F5-TTS
  - Kokoro
  - kokoro-onnx
  - git
  - ffmpeg
  - update
confidence: 0.95
authority: 0.2
contributor: acidbubbles
sources:
  - messageId: "1331676354856357930"
    author: acidbubbles
    timestamp: 2025-12-19T05:30:08.530Z
    url: ""
created: 2025-12-19T05:30:08.530Z
updated: 2025-12-19T05:30:08.530Z
---

# F5-TTS and Kokoro Updates (Build 136+)

> Overview of changes to F5-TTS and Kokoro TTS in Voxta build 136.

## Answer

As of Voxta build 136, the following changes apply to TTS services:

*   **Kokoro TTS:** Updated to use `kokoro-onnx`.
*   **F5-TTS:** Now installed via a Python package, removing the requirement for `git` to be installed on the host system for source downloading.
*   **Dependencies:** F5-TTS explicitly requires `ffmpeg` for full functionality (voice cloning).

---

*Extracted from Discord. Primary contributor: acidbubbles*