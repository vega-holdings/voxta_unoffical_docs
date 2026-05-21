---
id: jHEgDb1s5siRPk7evbOWr
slug: hardware-performance-rtx-3060-jHEgDb
type: reference
title: "Hardware Performance: RTX 3060"
topics:
  - performance
  - llm
keywords:
  - RTX 3060
  - VRAM
  - Silicon Maid
  - Coqui
  - Whisper
  - requirements
confidence: 0.8
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T22:45:00.718Z
updated: 2025-12-22T22:45:00.718Z
---

# Hardware Performance: RTX 3060

> An RTX 3060 can handle small LLMs, Whisper, and Coqui TTS simultaneously.

## Answer

An NVIDIA RTX 3060 is generally sufficient to run the following stack simultaneously:
*   **LLM**: Small models (e.g., Silicon Maid 7B) via ExLlamaV2.
*   **STT**: Whisper.
*   **TTS**: Coqui (using `small.en` models).

Users should monitor dedicated GPU memory in Task Manager to determine if there is headroom for larger models.

---

*Extracted from Discord. Primary contributor: sraura*