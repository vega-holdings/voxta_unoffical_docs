---
id: D-De4H3-fT4vzpRTbkyli
slug: recommended-local-llm-services-D-De4H
type: tip
title: "Choosing Local LLM Services: ExLlamaV2 and llama.cpp (GGUF)"
topics:
  - llm
  - configuration
  - performance
  - setup
keywords:
  - exllamav2
  - llama.cpp
  - gguf
  - exl2
  - oobabooga
  - local services
  - stability
  - local hosting
confidence: 0.8
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T22:45:00.717Z
updated: 2025-12-23T04:39:39.395Z
---

# Choosing Local LLM Services: ExLlamaV2 and llama.cpp (GGUF)

> Voxta provides built-in services for local LLMs: ExLlamaV2 for EXL2 models and llama.cpp for GGUF models. The community often recommends llama.cpp for better stability, but both are supported and can be installed via Voxta.

## Answer

For running local LLMs in Voxta, it is recommended to use the built-in services rather than external software like Oobabooga/Text Generation WebUI.

Voxta provides two primary built-in services:

- **ExLlamaV2**: Best for running EXL2 quantized models.
- **llama.cpp** (often referred to as the Llama service): Best for running GGUF models.

These services can be installed directly via the Voxta interface.

While both services are supported, community members often recommend using the **llama.cpp** service (GGUF models) over ExLlamaV2 for better stability in local setups. However, if you have EXL2 models, ExLlamaV2 remains the appropriate choice.

---

*Extracted from Discord. Primary contributor: sraura*