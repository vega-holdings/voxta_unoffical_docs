---
id: CPHWHKLdKHxhwSR9Wpd7O
slug: poor-generation-with-old-gptq-models-CPHWHK
type: troubleshooting
title: Poor generation with old GPTQ models
topics:
  - llm
  - troubleshooting
keywords:
  - exl2
  - GPTQ
  - quantization
  - model format
  - Hugging Face
confidence: 0.8
authority: 0.2
contributor: lapiro
sources: []
created: 2025-12-22T23:28:22.485Z
updated: 2025-12-22T23:28:22.485Z
---

# Poor generation with old GPTQ models

> Use modern exl2 models instead of old GPTQ versions for better results.

## Answer

The model might be an older version using an outdated quantization method (such as older GPTQ formats). It is recommended to use modern models in the **exl2** format (compatible with ExLlamaV2) available on Hugging Face.

---

*Extracted from Discord. Primary contributor: lapiro*