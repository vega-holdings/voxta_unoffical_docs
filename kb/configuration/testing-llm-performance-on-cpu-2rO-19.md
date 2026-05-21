---
id: 2rO-196ulamza9YoE13kZ
slug: testing-llm-performance-on-cpu-2rO-19
type: tip
title: Configuring GPU Layers for LLM Performance
topics:
  - configuration
  - performance
  - llm
keywords:
  - gpu layers
  - cuda
  - cpu
  - optimization
  - vram
  - latency
  - llama.cpp
  - presets
confidence: 0.9
authority: 0.2
contributor: gwen.wall
sources: []
created: 2025-12-22T23:41:04.471Z
updated: 2025-12-23T13:58:02.877Z
---

# Configuring GPU Layers for LLM Performance

> Use the GPU Layers setting to control model offloading between the CPU and GPU, optimizing for either maximum performance or hardware compatibility.

## Answer

The **GPU Layers** setting in your LLM service configuration (e.g., `llama.cpp`) determines how much of the model is offloaded to the graphics card versus the CPU. Adjusting this value allows you to optimize for speed or manage hardware constraints.

### Optimizing for GPU Performance
To achieve the best inference speed, ensure **CUDA** is enabled and set **GPU Layers** to a high value (typically `-1` or `99`). This offloads the entire model to the GPU, provided you have sufficient VRAM.

### Testing or Running on CPU
If you are experiencing VRAM limitations or need to test CPU-only latency, set **GPU Layers** to `0`. This forces the application to run the model entirely on the CPU.

---

*Extracted from Discord. Primary contributor: gwen.wall*