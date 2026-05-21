---
id: 2gp_aOc43TECezoii2ATM
slug: slow-performance-on-nvidia-10-series-gpus-2gp_aO
type: troubleshooting
title: Slow Performance on NVIDIA 10-Series GPUs
topics:
  - performance
  - setup
keywords:
  - nvidia
  - 10 series
  - gtx
  - tensor cores
  - vram
  - ram
  - slow
  - rtx
confidence: 0.8
authority: 0.2
contributor: alvar89alvar89
sources: []
created: 2025-12-19T06:10:11.937Z
updated: 2025-12-19T06:10:11.937Z
---

# Slow Performance on NVIDIA 10-Series GPUs

> 10-series GPUs lack Tensor cores and VRAM overflow to system RAM causes slowness.

## Answer

NVIDIA 10-series cards (Pascal architecture) lack Tensor cores, which are found in newer RTX cards and significantly accelerate AI inference. Additionally, slowness often indicates that the model size exceeds the available VRAM, causing the system to offload processing to system RAM, which is much slower.

---

*Extracted from Discord. Primary contributor: alvar89alvar89*