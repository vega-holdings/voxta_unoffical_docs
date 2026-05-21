---
id: X9eM0QqrzzJRI1ys2Pw5T
slug: fixing-audio-cut-offs-and-hanging-in-voxy-with-kokoro-tts-X9eM0Q
type: troubleshooting
title: Fixing Audio Cut-offs and Hanging in Voxy with Kokoro TTS
topics:
  - troubleshooting
  - configuration
  - performance
keywords:
  - Voxy
  - Kokoro
  - TTS
  - audio cut off
  - hanging
  - streaming
  - appsettings.json
  - VRAM
confidence: 0.9
authority: 0.2
contributor: djsoapyknuckles
sources: []
created: 2025-12-22T23:25:17.888Z
updated: 2025-12-22T23:25:17.888Z
---

# Fixing Audio Cut-offs and Hanging in Voxy with Kokoro TTS

> Disable streaming in Voxy appsettings.json to fix audio cut-offs with Kokoro TTS.

## Answer

This issue is often related to GPU resource constraints (VRAM) or audio streaming synchronization. Voxy adds approximately 1GB of VRAM usage, which can cause bottlenecks if running local LLMs and TTS simultaneously.

**Solution:**
Disable audio streaming in the Voxy configuration.
1. Locate the `appsettings.json` file in your Voxy installation folder.
2. Find the setting related to streaming and disable it (set to `false`).
3. Restart Voxy.

If the issue persists, check your VRAM usage or try a different TTS model like F5 or Orpheus to rule out model-specific issues.

---

*Extracted from Discord. Primary contributor: djsoapyknuckles*