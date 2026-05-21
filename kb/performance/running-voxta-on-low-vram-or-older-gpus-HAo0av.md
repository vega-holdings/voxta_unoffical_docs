---
id: HAo0avWfTr2xhaFpdYrUD
slug: running-voxta-on-low-vram-or-older-gpus-HAo0av
type: tip
title: Running Voxta on Low VRAM or Older GPUs
topics:
  - performance
  - llm
  - configuration
keywords:
  - low vram
  - nvidia 10 series
  - llama 3.2
  - 3B model
  - GGUF
  - Kokoro
  - optimization
confidence: 0.7
authority: 0.2
contributor: alvar89alvar89
sources: []
created: 2025-12-19T06:10:37.362Z
updated: 2025-12-19T06:10:37.362Z
---

# Running Voxta on Low VRAM or Older GPUs

> Strategies for running Voxta on older GPUs, including using cloud LLMs, Kokoro TTS, and Llama 3.2 3B models.

## Answer

For users with older hardware (e.g., Nvidia 10 series) or limited VRAM, the following configurations are recommended to maintain performance:

*   **Hybrid Setup:** Run TTS and STT locally, but offload the LLM to a cloud provider to save local resources.
*   **Lightweight TTS:** Use efficient models like Kokoro (referred to as "konkoro" in chat) to reduce memory footprint.
*   **Small Local LLMs:** If running the LLM locally is required, use small GGUF models.
    *   **Recommendation:** [Hermes-3-Llama-3.2-3B-GGUF](https://huggingface.co/NousResearch/Hermes-3-Llama-3.2-3B-GGUF/blob/main/Hermes-3-Llama-3.2-3B.Q6_K.gguf)
    *   **Specs:** The Q6_K quantization of this 3B model requires approximately 3GB of VRAM.
    *   **Alternative:** 7B or 8B models at 4bpw (bits per weight).

---

*Extracted from Discord. Primary contributor: alvar89alvar89*