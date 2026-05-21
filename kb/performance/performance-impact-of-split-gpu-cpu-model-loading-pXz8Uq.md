---
id: pXz8UqTgA0jvW_DD4MkuP
slug: performance-impact-of-split-gpu-cpu-model-loading-pXz8Uq
type: tip
title: Performance Impact of Split GPU/CPU Model Loading
topics:
  - performance
  - llm
keywords:
  - split
  - gpu
  - cpu
  - offloading
  - vram
  - 33B
  - 14B
  - optimization
confidence: 0.8
authority: 0.2
contributor: euphobie
sources:
  - messageId: "1332317334484025344"
    author: euphobie
    timestamp: 2025-12-19T05:35:29.664Z
    url: ""
created: 2025-12-19T05:35:29.664Z
updated: 2025-12-19T05:35:29.664Z
---

# Performance Impact of Split GPU/CPU Model Loading

> Splitting models between GPU and CPU reduces performance; fitting models in VRAM is preferred.

## Answer

Running large models (e.g., 33B) by splitting layers between GPU and CPU often results in poor performance compared to running smaller models fully on the GPU. For cards like the RTX 4080 (16GB), using a 14B model (like Qwen 2.5 14B EXL2) that fits entirely in VRAM is recommended over splitting a larger model.

---

*Extracted from Discord. Primary contributor: euphobie*