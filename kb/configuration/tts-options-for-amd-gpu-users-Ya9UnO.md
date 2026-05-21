---
id: Ya9UnOwrPc-lQx0ekMzCa
slug: tts-options-for-amd-gpu-users-Ya9UnO
type: qa
title: TTS Options for AMD GPU Users
topics:
  - configuration
  - performance
keywords:
  - TTS
  - AMD
  - Nvidia
  - XTTS
  - Coqui
  - F5-TTS
  - Local Hosting
  - Azure
  - NovelAI
confidence: 0.8
authority: 0.2
contributor: sraura
sources:
  - messageId: "1347978811764904077"
    author: sraura
    timestamp: 2025-12-22T21:20:45.490Z
    url: ""
  - messageId: "1347980752163438815"
    author: sraura
    timestamp: 2025-12-22T21:20:45.490Z
    url: ""
created: 2025-12-22T21:20:45.490Z
updated: 2025-12-22T21:20:45.490Z
---

# TTS Options for AMD GPU Users

> AMD GPUs struggle with local TTS; suggests networked Nvidia hosting or cloud alternatives like Azure/NovelAI.

## Answer

Local hosting of popular TTS models like **XTTS (Coqui)** or **F5-TTS** generally requires an Nvidia GPU and is not viable on AMD hardware.

**Alternatives:**
1. **Networked Hosting:** If you have a secondary computer with an Nvidia GPU on the same local network, you can host the TTS service there and connect it to Voxta remotely.
2. **Cloud Services:**
   - **Azure Speech Service:** Recommended in documentation for high quality.
   - **NovelAI:** Recommended as a balanced, reasonably priced option.
   - **Voxta Cloud:** Includes Unreal Speech (though community feedback varies).

---

*Extracted from Discord. Primary contributor: sraura*