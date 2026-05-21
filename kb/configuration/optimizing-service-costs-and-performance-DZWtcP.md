---
id: DZWtcP_ieHbCpDYFdgLMU
slug: optimizing-service-costs-and-performance-DZWtcP
type: tip
title: Optimizing Service Costs and Performance
topics:
  - configuration
  - performance
keywords:
  - Whisper
  - Kokoro
  - TTS
  - STT
  - VRAM
  - cost
confidence: 0.7
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T23:37:41.208Z
updated: 2025-12-22T23:37:41.208Z
---

# Optimizing Service Costs and Performance

> Overview of service costs and lightweight local alternatives like Whisper and Kokoro.

## Answer

When configuring Voxta services:
* **Text Generation:** Generally cheap on cloud services.
* **Text-to-Speech (TTS):** High-end services can be expensive. **Kokoro** is recommended as a lightweight and fast alternative.
* **Speech-to-Text (STT):** Optional if not using a microphone. **Whisper** (small model) can run locally with low VRAM usage.

---

*Extracted from Discord. Primary contributor: sraura*