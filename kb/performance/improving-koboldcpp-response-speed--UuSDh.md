---
id: -UuSDhu3znRI38n1Guvvr
slug: improving-koboldcpp-response-speed--UuSDh
type: troubleshooting
title: Improving KoboldCpp Response Speed
topics:
  - performance
  - llm
  - troubleshooting
keywords:
  - KoboldCpp
  - slow response
  - tokens per second
  - context size
  - GPU layers
  - VRAM
confidence: 0.8
authority: 0.2
contributor: sraura
sources:
  - messageId: "1360022183891570770"
    author: sraura
    timestamp: 2025-12-22T22:34:54.801Z
    url: ""
created: 2025-12-22T22:34:54.801Z
updated: 2025-12-22T22:34:54.801Z
---

# Improving KoboldCpp Response Speed

> Optimization tips for slow KoboldCpp responses, focusing on GPU offloading and context size.

## Answer

There is currently no known method to skip prompt reprocessing for specific intervals (e.g., every 10th message). To improve response times, consider the following optimizations:

*   **GPU Offloading:** Ensure all model layers are loaded onto the GPU. Speeds below 5 t/s often indicate the model is spilling into system RAM.
*   **Model Size:** If VRAM is insufficient, use a smaller model or higher quantization.
*   **Context Size:** Lower the context size (common range: 4096-8192). Larger contexts increase VRAM usage and slow down generation as the context fills, particularly during summarization.
*   **Target Speed:** Aim for ~25 tokens/second (t/s). 10-15 t/s is considered the minimum for fluid chat.

---

*Extracted from Discord. Primary contributor: sraura*