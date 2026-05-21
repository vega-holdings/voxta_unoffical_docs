---
id: DSfDUo1pNPQZwz0_k58WT
slug: service-reverting-to-cpu-with-deepspeed-DSfDUo
type: troubleshooting
title: Service Reverting to CPU with DeepSpeed
topics:
  - troubleshooting
  - performance
  - setup
keywords:
  - deepspeed
  - cpu
  - gpu
  - nvidia
  - reinstall
confidence: 0.8
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T22:46:48.670Z
updated: 2025-12-22T22:46:48.670Z
---

# Service Reverting to CPU with DeepSpeed

> Disable DeepSpeed and reinstall to fix GPU detection issues.

## Answer

Disable DeepSpeed and reinstall the service. If an Nvidia GPU is present, the installer should automatically detect it and configure the service to use the GPU even without DeepSpeed.

---

*Extracted from Discord. Primary contributor: sraura*