---
id: fNCRHSrouOYGm01nhplBQ
slug: optimizing-local-performance-with-multiple-gpus-fNCRHS
type: tip
title: Optimizing GPU Performance for Voxta with Virt-A-Mate (VAM) – Single and
  Multi-GPU Strategies
topics:
  - performance
  - configuration
  - setup
  - llm
keywords:
  - GPU
  - multi-GPU
  - "3090"
  - "4080"
  - VAM
  - Virt-A-Mate
  - ExLlamaV2
  - llama.cpp
  - resource isolation
  - VRAM
  - local LLM
confidence: 0.8
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T21:43:36.302Z
updated: 2025-12-23T04:44:42.222Z
---

# Optimizing GPU Performance for Voxta with Virt-A-Mate (VAM) – Single and Multi-GPU Strategies

> Learn how to manage VRAM and GPU resources when running Voxta alongside Virt-A-Mate. This guide covers using smaller models on a single GPU and configuring multi-GPU setups to isolate workloads and run larger models.

## Answer

# Optimizing GPU Performance for Voxta with Virt-A-Mate (VAM)

Running Voxta alongside Virt-A-Mate (VAM) can be demanding on your GPU resources, especially when using local LLMs. This guide explains how to optimize performance for both single-GPU and multi-GPU setups.

## Single GPU Setup

If you have only one GPU (even high-end cards like an RTX 4080), VRAM limits can be quickly reached when VAM and a local LLM are both active. To maintain smooth performance:

- Use smaller LLM sizes, such as 7B or 8B parameter models.
- Prefer quantized versions (e.g., 4-bit or 5-bit quants) to reduce VRAM usage.
- Close other GPU-intensive applications to free up resources.

## Multi-GPU Setup

For systems with multiple GPUs (e.g., dual RTX 3090s), you have additional options:

- **Run Larger Models:** Combine the VRAM of multiple cards to load models that exceed the capacity of a single GPU.
- **Isolate Workloads:** Assign Voxta's LLM inference to a secondary GPU while running VAM on the primary GPU. This prevents competition for resources and can significantly improve performance.

### Configuring GPU Assignment

Voxta's local loaders (ExLlamaV2 and llama.cpp) allow you to specify which GPU(s) to use:

- In the loader settings, look for the `gpu_id` or `device` parameter.
- Set it to the index of the GPU you want to use for LLM inference (e.g., `1` for the second GPU).
- Ensure VAM is configured to use the primary GPU (usually index `0`).

By isolating workloads, you can avoid slowdowns and maintain high frame rates in VAM while the LLM runs in the background.

## General Tips

- Monitor VRAM usage with tools like GPU-Z or Task Manager to identify bottlenecks.
- Keep your GPU drivers up to date for optimal performance.
- Experiment with different model sizes and quantization levels to find the best balance between quality and performance for your hardware.

---

*Extracted from Discord. Primary contributor: sraura*