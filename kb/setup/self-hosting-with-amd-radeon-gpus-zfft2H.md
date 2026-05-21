---
id: zfft2HNB8q53XqclHoOec
slug: self-hosting-with-amd-radeon-gpus-zfft2H
type: troubleshooting
title: "Using AMD GPUs with Voxta: ROCm and Cloud Options"
topics:
  - setup
  - llm
  - troubleshooting
  - configuration
keywords:
  - AMD
  - Radeon
  - ROCm
  - KoboldCPP
  - GPU
  - self-hosting
  - accelerator device
  - Voxta Cloud
confidence: 0.85
authority: 0.2
contributor: sraura
sources:
  - messageId: "1335760227835842590"
    author: sraura
    timestamp: 2025-12-22T20:15:12.825Z
    url: ""
created: 2025-12-22T20:15:12.825Z
updated: 2025-12-23T04:39:00.027Z
---

# Using AMD GPUs with Voxta: ROCm and Cloud Options

> For AMD GPU users, Voxta supports local LLM inference via the KoboldCPP ROCm fork, or offloading to Voxta Cloud for LLM, STT, and TTS services when local hardware is insufficient.

## Answer

# Using AMD GPUs with Voxta

## ROCm Support for Local LLMs

Self-hosting Voxta on AMD Radeon GPUs requires using backend services compiled for AMD's ROCm instead of Nvidia's CUDA. The standard Voxta installers default to Nvidia/CUDA configurations, which can cause a "Cannot access accelerator device" error on AMD hardware.

For local LLM inference, you can use a fork of KoboldCPP that supports ROCm, such as [YellowRoseCx/koboldcpp-rocm](https://github.com/YellowRoseCx/koboldcpp-rocm/).

## Offloading to Voxta Cloud

If your local GPU is insufficient for running LLMs, STT, or TTS services, you can offload these tasks to **Voxta Cloud**. This provides a convenient alternative when local hardware lacks the necessary performance or memory.

## Troubleshooting

- Ensure you are using the ROCm-compatible version of KoboldCPP.
- If you encounter the "Cannot access accelerator device" error, check that your service configuration points to the correct ROCm-enabled backend.

---

*Extracted from Discord. Primary contributor: sraura*