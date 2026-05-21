---
id: jR7J6CHd4TGl_pwTRD-OR
slug: multi-gpu-vram-split-in-exllama-jR7J6C
type: tip
title: Multi-GPU VRAM Split in ExLlama
topics:
  - configuration
  - llm
keywords:
  - exllama
  - multi-gpu
  - vram
  - gpu split
  - dual gpu
confidence: 0.5
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T23:10:46.273Z
updated: 2025-12-22T23:10:46.273Z
---

# Multi-GPU VRAM Split in ExLlama

> Voxta's ExLlama loader allows defining VRAM usage per GPU for multi-GPU setups.

## Answer

For users with multiple GPUs, Voxta's built-in ExLlama loader provides a GPU split setting to define VRAM usage per GPU. This functionality allows for distributing the model across available hardware, similar to implementations in other loaders like Oobabooga.

---

*Extracted from Discord. Primary contributor: sraura*