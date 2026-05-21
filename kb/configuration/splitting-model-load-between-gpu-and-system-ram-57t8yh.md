---
id: 57t8yhaXcwI4619uPah5H
slug: splitting-model-load-between-gpu-and-system-ram-57t8yh
type: qa
title: Splitting Model Load Between GPU and System RAM
topics:
  - configuration
  - llm
  - performance
keywords:
  - GPU layers
  - VRAM
  - system RAM
  - llama.cpp
  - offloading
  - split model
  - memory
confidence: 0.95
authority: 0.2
contributor: sraura
sources:
  - messageId: "1332080355108454501"
    author: sraura
    timestamp: 2025-12-19T05:34:32.465Z
    url: ""
  - messageId: "1332082161804644457"
    author: sraura
    timestamp: 2025-12-19T05:34:32.465Z
    url: ""
created: 2025-12-19T05:34:32.465Z
updated: 2025-12-19T05:34:32.465Z
---

# Splitting Model Load Between GPU and System RAM

> Use the GPU Layers setting in llama.cpp to offload parts of the model to system RAM.

## Answer

To split a model between GPU and System RAM, you need to adjust the **GPU Layers** setting within the `llama.cpp` service configuration.

*   **GPU Layers:** This setting determines how many layers of the model are loaded onto the GPU. By setting this value lower than the total number of layers in the model, the remaining layers will automatically be processed by the CPU using system RAM.

This allows you to run models that exceed your dedicated VRAM capacity, though inference speed will be slower compared to running fully on the GPU.

---

*Extracted from Discord. Primary contributor: sraura*