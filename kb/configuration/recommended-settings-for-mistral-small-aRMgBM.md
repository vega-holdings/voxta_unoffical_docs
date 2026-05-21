---
id: aRMgBMoq6VVFZRp6N8yEr
slug: recommended-settings-for-mistral-small-aRMgBM
type: tip
title: Recommended Configuration for Mistral Small 3.1 24B (GGUF) in Voxta
topics:
  - configuration
  - llm
keywords:
  - Mistral Small
  - Mistral Small 3.1 24B
  - Mistral-Small
  - GGUF
  - tensor split
  - context size
  - "8192"
  - quantization
  - q4_K_M
  - NeMo
  - prompt template
  - mmproj
  - configuration
confidence: 0.8
authority: 0.2
contributor: futurestorm
sources: []
created: 2025-12-22T22:46:06.090Z
updated: 2025-12-23T04:39:59.226Z
---

# Recommended Configuration for Mistral Small 3.1 24B (GGUF) in Voxta

> Suggested settings for running Mistral Small 3.1 24B GGUF in Voxta, including tensor split, context size, quantization, prompt template, and multimodal setup.

## Answer

# Recommended Configuration for Mistral Small 3.1 24B (GGUF)

When using the Mistral Small 3.1 24B model (GGUF format) in Voxta, the following settings are recommended as a starting point:

- **Model Source**: `mistralai_Mistral-Small-3.1-24B-Instruct-2503-GGUF`
- **Quantization**: `q4_K_M` provides a good balance between model size and performance.
- **Prompt Template**: Select the **NeMo** formatting template in Voxta.
- **Tensor Split**: Set to `-1` (allows automatic distribution across GPUs if available).
- **Context Size**: Set to `8192`. Mistral models generally support larger context windows than the default 4096.
- **Multimodal Support**: To enable vision capabilities, ensure the `mmproj` file (f16 or q8) is present in the LLM folder.

These settings have been tested and provide stable operation. Adjust based on your hardware constraints.

---

*Extracted from Discord. Primary contributor: futurestorm*