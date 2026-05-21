---
id: Po3Ro_0Ki72ADPrqjfZho
slug: running-orpheus-and-local-llm-on-limited-hardware-Po3Ro_
type: qa
title: Running Orpheus and Local LLM on Limited Hardware
topics:
  - llm
  - performance
  - setup
keywords:
  - Orpheus
  - GGUF
  - VRAM
  - RTX 2080
  - quantization
  - 8B
confidence: 0.8
authority: 0.2
contributor: futurestorm
sources:
  - messageId: "1364174013655552021"
    author: futurestorm
    timestamp: 2025-12-22T22:38:02.465Z
    url: ""
created: 2025-12-22T22:38:02.465Z
updated: 2025-12-22T22:38:02.465Z
---

# Running Orpheus and Local LLM on Limited Hardware

> Advice on model selection and quantization for running Orpheus alongside an LLM on older GPUs.

## Answer

Yes, but it requires careful resource management. To fit both Orpheus and an LLM on a single GPU with limited VRAM (like an RTX 2080):

1. Use **GGUF** format models (downloadable from Hugging Face).
2. Select smaller models (**8B parameters or below**).
3. Choose lower quantization sizes (quants) to reduce VRAM usage.

Running both services simultaneously is resource-intensive.

---

*Extracted from Discord. Primary contributor: futurestorm*