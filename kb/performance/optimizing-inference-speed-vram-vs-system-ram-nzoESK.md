---
id: nzoESKvEkDbQ-Xz0lVg8b
slug: optimizing-inference-speed-vram-vs-system-ram-nzoESK
type: tip
title: "Optimizing Inference Speed: VRAM vs System RAM"
topics:
  - performance
  - llm
keywords:
  - VRAM
  - DDR4
  - DDR5
  - bandwidth
  - inference speed
  - GPU
  - offloading
confidence: 0.85
authority: 0.2
contributor: daisukearamaki
sources:
  - messageId: "1332084855176957992"
    author: daisukearamaki
    timestamp: 2025-12-19T05:35:51.967Z
    url: ""
created: 2025-12-19T05:35:51.967Z
updated: 2025-12-19T05:35:51.967Z
---

# Optimizing Inference Speed: VRAM vs System RAM

> Run smaller models that fit entirely in VRAM to avoid performance bottlenecks caused by slower system RAM.

## Answer

System RAM (DDR4/DDR5) is significantly slower than GPU VRAM (GDDR6) and is not physically located on the same device, which creates bandwidth bottlenecks when running Large Language Models.

To maximize inference speed, it is recommended to run a smaller model (or a more compressed quantization) that fits comfortably entirely within your GPU's VRAM rather than offloading layers to system RAM.

---

*Extracted from Discord. Primary contributor: daisukearamaki*