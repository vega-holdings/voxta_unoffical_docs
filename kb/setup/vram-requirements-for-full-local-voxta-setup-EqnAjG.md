---
id: EqnAjGCcGavkOghxfEpRF
slug: vram-requirements-for-full-local-voxta-setup-EqnAjG
type: qa
title: "Voxta Local Setup: VRAM Requirements, Configurations, and Performance
  Optimization"
topics:
  - setup
  - performance
  - hardware
  - llm
  - configuration
  - troubleshooting
keywords:
  - VRAM
  - GPU
  - NVIDIA
  - RTX 3090
  - RTX 4080
  - local setup
  - hardware requirements
  - Voxta Cloud
  - LLM
  - 3070 Ti
  - 8GB VRAM
  - local hosting
  - Whisper
  - Coqui
  - ExLlamaV2
  - Loyal-Macaroni-Maid
  - 4060 Ti
  - 4070 Ti
  - local performance
  - cloud services
  - streaming
  - slowdown
  - Task Manager
  - multi-GPU
  - separate machine
  - VAM
  - STT
  - TTS
  - Vision
  - configuration
  - performance optimization
confidence: 0.9
authority: 0.2
contributor: sraura
sources:
  - messageId: "1382726562511720518"
    author: sraura
    timestamp: 2025-12-22T23:02:00.737Z
    url: ""
  - messageId: "1382730084116336801"
    author: sraura
    timestamp: 2025-12-22T23:02:00.737Z
    url: ""
  - messageId: "1382732602581979168"
    author: sraura
    timestamp: 2025-12-22T23:02:00.737Z
    url: ""
created: 2025-12-22T23:02:00.737Z
updated: 2025-12-23T03:20:58.597Z
---

# Voxta Local Setup: VRAM Requirements, Configurations, and Performance Optimization

> Running Voxta locally requires careful GPU VRAM management. This guide provides VRAM requirements per component, recommended configurations for 8GB, 12-16GB, and 24GB+ GPUs, how to check VRAM usage, consequences of insufficient VRAM, and solutions including multi-GPU setups, separate machines, and cloud services.

## Answer

# Voxta Local Setup: VRAM Requirements, Configurations, and Performance Optimization

Voxta is a powerful AI companion that can run locally with various components. Running the full stack alongside Virt-A-Mate (VAM) demands significant GPU VRAM. This guide outlines hardware recommendations, configuration strategies, and performance considerations for different VRAM capacities.

## GPU Recommendation

Voxta's AI ecosystem is heavily optimized for NVIDIA's CUDA architecture. Using an AMD GPU may lead to compatibility issues or suboptimal performance; therefore, **NVIDIA GPUs are strongly recommended** for local setups.

## VRAM Requirements by Component

- **VAM + STT + TTS:** Requires at least 16GB VRAM (e.g., RTX 4080) for smooth operation.
- **Adding a Local LLM:** High-quality local LLMs often consume nearly the entire 24GB VRAM on their own. Running the full stack (VAM + STT + TTS + LLM + Vision) typically exceeds 24GB, making a single GPU insufficient.
- **Vision:** Additional VRAM needed; not recommended on limited VRAM.

## Checking VRAM Usage

To determine if VRAM is a bottleneck:

1. Launch your typical workload (e.g., Voxta services, games, streaming software).
2. Open **Windows Task Manager** (Ctrl+Shift+Esc).
3. Navigate to the **Performance** tab.
4. Select your GPU and observe the **GPU Memory** usage.

If the committed VRAM is near or at your GPU's maximum, you will likely experience performance degradation when adding Voxta's models.

## Consequences of Insufficient VRAM

- **Severe slowdown:** Response generation times increase dramatically as processing is offloaded to the CPU and system memory, which are orders of magnitude slower.
- **Stuttering in games/streams:** Offloading can cause system-wide performance degradation.
- **Potential crashes:** Some models may fail to load entirely if memory cannot be allocated.

## Configurations Based on Available VRAM

### 8GB VRAM (e.g., RTX 3070 Ti)

- Feasible to run Speech-to-Text (e.g., Whisper) and Text-to-Speech (e.g., Coqui) locally.
- Running Vision or a local Large Language Model (LLM) simultaneously will likely exceed available memory.
- **Recommended:** Run STT and TTS locally, and offload Text Generation to a cloud service (Voxta Cloud or third-party providers).

### 12-16GB VRAM (e.g., RTX 4060 Ti 16GB, RTX 4070 Ti 12GB)

- Can run a full local stack with a smaller LLM model.
- An optimized configuration reported to deliver ~3 second response times:
  - **STT:** Whisper
  - **LLM Backend:** ExLlamaV2
  - **Model:** 7B GPTQ quantized model (e.g., `Loyal-Macaroni-Maid-7B-GPTQ`)
  - **TTS:** Coqui v2.0
- This setup leaves enough VRAM for VAM and other components.

### 24GB+ VRAM (e.g., RTX 3090, RTX 4090)

- A single 24GB GPU may still be insufficient for the full stack (VAM + STT + TTS + LLM + Vision) if using a large LLM.
- Consider offloading the LLM to a second GPU or a separate machine (see below).
- If using a single GPU, you may need to reduce LLM size or disable Vision.

## Solutions for Exceeding VRAM

### Multi-GPU Setup

- Dedicate a second GPU for the LLM. Popular choices:
  - RTX 3090 (24GB) offers excellent cost/performance, especially on the used market.
  - Lower-tier cards like RTX 4060 or 3060 can be sufficient if they have enough VRAM for the chosen LLM.
- The primary GPU handles VAM, STT, TTS, and Vision (if used).

### Separate Machine

- Run the LLM on a completely separate computer connected via network. This allows using a dedicated GPU without affecting VAM performance.

### Cloud Services

- **Voxta Cloud:** Provides a cost-effective way to offload the LLM (and possibly other components) while keeping STT/TTS local. Ideal for users who do not require 24/7 uptime or wish to avoid investing in high-end hardware.
- Other cloud providers (e.g., OpenAI) can also be used to eliminate local VRAM constraints.

## Summary of GPU Choices

- **Primary GPU for VAM/Graphics:** Aim for at least 16GB VRAM (e.g., RTX 4080) or higher if you also want to run some AI components.
- **LLM GPU (if running locally):** A dedicated GPU with at least 12-24GB VRAM is recommended; the RTX 3090 is a popular choice due to its 24GB VRAM and favorable used pricing.
- **Budget Option:** Use Voxta Cloud for the LLM and keep STT/TTS local on a single GPU.

## Conclusion

Before investing time in a local Voxta setup, verify that your system has enough VRAM headroom. For most users combining Voxta with gaming and streaming, cloud services provide a reliable and performant alternative. If local execution is desired, follow the configuration guidelines above to ensure smooth performance.

---

*Extracted from Discord. Primary contributor: sraura*