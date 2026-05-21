---
id: u47ef7E3lk-nfZ3SN4_Gk
slug: llm-performance-on-older-gpus-gtx-1070-1080-ti-u47ef7
type: tip
title: LLM Performance on Older GPUs (GTX 1070/1080 Ti)
topics:
  - llm
  - performance
keywords:
  - Llama 3
  - 3B
  - 8B
  - GTX 1070
  - GTX 1080 Ti
  - VRAM
  - benchmark
  - Kokoro
confidence: 0.6
authority: 0.2
contributor: alvar89alvar89
sources: []
created: 2025-12-19T06:11:22.530Z
updated: 2025-12-19T06:11:22.530Z
---

# LLM Performance on Older GPUs (GTX 1070/1080 Ti)

> Recommendations and anecdotal benchmarks for running Llama 3 models on GTX 10-series cards.

## Answer

For users with limited VRAM (such as a GTX 1070), **Llama 3.2 3B** is recommended for fast inference speeds.

**User-Reported Benchmark:**
*   **Hardware:** GTX 1080 Ti
*   **Model:** Llama 3 8B
*   **Speed:** ~30 tokens/second (considered sufficient for real-time chat)

A suggested combination for low-resource setups is using **Kokoro** (TTS) alongside **Llama 3.2 3B**.

---

*Extracted from Discord. Primary contributor: alvar89alvar89*