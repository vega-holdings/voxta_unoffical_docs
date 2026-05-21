---
id: Xu9kJki4bv-QypLRAiG97
slug: offloading-tts-to-cpu-to-save-vram-Xu9kJk
type: tip
title: Offloading TTS to CPU to Save VRAM
topics:
  - performance
  - configuration
keywords:
  - TTS
  - CPU
  - VRAM
  - optimization
  - bpw
  - memory
confidence: 0.7
authority: 0.2
contributor: euphobie
sources: []
created: 2025-12-22T22:03:28.093Z
updated: 2025-12-22T22:03:28.093Z
---

# Offloading TTS to CPU to Save VRAM

> Run TTS on CPU to free up VRAM for LLMs, trading generation speed for available memory.

## Answer

If you are experiencing VRAM limitations (such as when trying to run higher bitrate LLMs like 6bpw), you can configure the TTS service to run on the CPU. This frees up GPU memory for the LLM, though it may result in slower speech generation speeds compared to running TTS on the GPU.

---

*Extracted from Discord. Primary contributor: euphobie*