---
id: 5nDCM72RZTrMQGTp1TmF4
slug: exllamav2-stuck-loading-8gb-vram-5nDCM7
type: troubleshooting
title: ExLlamaV2 Stuck Loading (8GB VRAM)
topics:
  - troubleshooting
  - llm
  - performance
keywords:
  - ExLlamaV2
  - stuck
  - loading
  - 8GB
  - VRAM
  - 3060 Ti
  - GPU memory
  - llama.cpp
confidence: 0.9
authority: 0.2
contributor: _kinkyk9
sources:
  - messageId: "1439121029350953050"
    author: _kinkyk9
    timestamp: 2025-12-22T23:53:23.368Z
    url: ""
  - messageId: "1439278725484122192"
    author: _kinkyk9
    timestamp: 2025-12-22T23:53:23.368Z
    url: ""
  - messageId: "1439284522918088724"
    author: _kinkyk9
    timestamp: 2025-12-22T23:53:23.368Z
    url: ""
  - messageId: "1439288734045704203"
    author: _kinkyk9
    timestamp: 2025-12-22T23:53:23.368Z
    url: ""
created: 2025-12-22T23:53:23.368Z
updated: 2025-12-22T23:53:23.368Z
---

# ExLlamaV2 Stuck Loading (8GB VRAM)

> ExLlamaV2 hanging on load usually indicates insufficient VRAM; 8GB is often too low for typical setups, suggesting a switch to llama.cpp/GGUF.

## Answer

This issue is typically caused by insufficient VRAM (Video RAM) to load the selected model using ExLlamaV2.

**Diagnosis:**
*   ExLlamaV2 runs models entirely on the GPU. 8GB VRAM is often not enough for standard 13B models or even 7B models at high quantization/context sizes.
*   Check the **GPU** tab in Windows Task Manager (specifically 'Dedicated GPU memory') during load. CPU usage is not a relevant metric for this.

**Solutions:**
1.  **Verify with Cloud:** Switch the LLM service to **Voxta Cloud** temporarily to confirm the rest of the setup works.
2.  **Use GGUF/llama.cpp:** If you have limited VRAM, switch to the **llama.cpp** service and use **GGUF** models. GGUF allows offloading layers to system RAM (CPU), whereas ExLlamaV2 requires the model to fit in VRAM.
3.  **Smaller Models:** If sticking with ExLlamaV2, ensure you are using a model small enough to fit in 8GB (e.g., a highly quantized 7B model with low context).

---

*Extracted from Discord. Primary contributor: _kinkyk9*