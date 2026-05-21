---
id: ejsohSYNm5I4McKeBUQ0W
slug: exllama-issues-on-nvidia-blackwell-ada-gpus-ejsohS
type: troubleshooting
title: ExLlama Issues on NVIDIA Blackwell/Ada GPUs
topics:
  - troubleshooting
  - llm
  - performance
keywords:
  - exllama
  - blackwell
  - ada
  - nvidia
  - llama.cpp
  - koboldcpp
  - gpu offload
confidence: 0.8
authority: 0.2
contributor: mrdragonfox
sources: []
created: 2025-12-22T22:54:45.662Z
updated: 2025-12-22T22:54:45.662Z
---

# ExLlama Issues on NVIDIA Blackwell/Ada GPUs

> Workaround for ExLlama issues on newer NVIDIA cards by switching to llama.cpp or KoboldCpp.

## Answer

Users have reported issues with ExLlama on NVIDIA Blackwell and Ada architecture cards. As a temporary workaround until a hotpatch is released, it is recommended to switch to **llama.cpp** or **KoboldCpp**. When using llama.cpp, ensure you offload as many layers as possible to the GPU to achieve speeds comparable to ExLlama.

---

*Extracted from Discord. Primary contributor: mrdragonfox*