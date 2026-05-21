---
id: TC-VBcNyhejlPc-7kcHcn
slug: built-in-vs-external-llm-loaders-TC-VBc
type: reference
title: Built-in vs External LLM Loaders
topics:
  - llm
  - configuration
keywords:
  - llama.cpp
  - ExLlamaV2
  - loaders
  - external llm
confidence: 0.9
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T22:49:32.684Z
updated: 2025-12-22T22:49:32.684Z
---

# Built-in vs External LLM Loaders

> Explanation of when to use Voxta's built-in loaders versus external loaders.

## Answer

Voxta supports both built-in and external model loaders:

*   **Built-in (`llama.cpp`, `ExLlamaV2`):** Integrated directly into Voxta for local text generation. Requires an NVIDIA GPU with sufficient VRAM.
*   **External Loaders:** Used when running the LLM on a separate computer (networked) or when the user requires more granular control over model loading parameters than the built-in options provide.

---

*Extracted from Discord. Primary contributor: sraura*