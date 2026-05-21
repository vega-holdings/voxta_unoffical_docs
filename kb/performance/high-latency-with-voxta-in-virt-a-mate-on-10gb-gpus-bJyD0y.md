---
id: bJyD0yOM5v9SU_LFN9Fts
slug: high-latency-with-voxta-in-virt-a-mate-on-10gb-gpus-bJyD0y
type: troubleshooting
title: High Latency with Voxta in Virt-A-Mate on 10GB GPUs
topics:
  - performance
  - troubleshooting
  - setup
keywords:
  - RTX 3080
  - RTX 3090
  - VRAM
  - latency
  - lag
  - Virt-A-Mate
  - hardware
confidence: 0.8
authority: 0.2
contributor: futurestorm
sources: []
created: 2025-12-22T23:06:46.256Z
updated: 2025-12-22T23:06:46.256Z
---

# High Latency with Voxta in Virt-A-Mate on 10GB GPUs

> Explains that 10GB VRAM GPUs may cause latency when running Voxta and VaM together due to memory constraints.

## Answer

Running Voxta and Virt-A-Mate simultaneously places a heavy demand on VRAM. A 10GB GPU (like the standard RTX 3080) often reaches its limits when trying to run both, resulting in significant latency.

**Community Advice:**
* A 10GB card may struggle even if offloading some services.
* Upgrading to a card with higher VRAM, such as an RTX 3090 (24GB), is recommended for running the full stack locally.

---

*Extracted from Discord. Primary contributor: futurestorm*