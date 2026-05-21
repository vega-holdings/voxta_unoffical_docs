---
id: mv9-OXh2w8qdcU8wjITdY
slug: hardware-configuration-for-rtx-3060-ti-mv9-OX
type: tip
title: "Voxta on RTX 3060 and 3060 Ti: Local and Hybrid Setup Recommendations"
topics:
  - setup
  - configuration
  - performance
  - llm
  - hardware
keywords:
  - RTX 3060
  - RTX 3060 Ti
  - 8GB VRAM
  - 12GB VRAM
  - GPU
  - local
  - cloud
  - ExLlama V2
  - 7B
  - 8B
  - hybrid
  - performance
  - tokens per second
  - VAM
  - Virt-A-Mate
  - Voxta Cloud
  - OpenAI
  - OpenRouter
confidence: 0.85
authority: 0.2
contributor: _kinkyk9
sources:
  - messageId: "1439297975909351556"
    author: _kinkyk9
    timestamp: 2025-12-22T23:53:47.952Z
    url: ""
created: 2025-12-22T23:53:47.952Z
updated: 2025-12-23T03:32:40.478Z
---

# Voxta on RTX 3060 and 3060 Ti: Local and Hybrid Setup Recommendations

> For users with RTX 3060 series GPUs (8GB or 12GB VRAM), running all Voxta services locally alongside VR applications like Virt-A-Mate is challenging. Use smaller LLM models locally (7B/8B via ExLlama V2) or offload LLM generation to cloud services for better performance. The 12GB variant can handle LLMs well in isolation but still struggles with the full stack.

## Answer

# Using Voxta with RTX 3060 Series GPUs

The RTX 3060 and 3060 Ti are mid-range GPUs with 12GB and 8GB of VRAM respectively. While capable, running all Voxta services (STT, LLM, TTS) locally while also using VR applications like Virt-A-Mate (VAM) can be performance-prohibitive.

## RTX 3060 Ti (8GB VRAM)

- 8GB VRAM is generally insufficient for a high-quality full local stack.
- Running everything locally may cause slowdowns or instability, especially when combined with VR.

### Recommendations for 3060 Ti

- **Local LLM:** If you prefer to run the LLM locally, use smaller models (7B or 8B parameters) via the **ExLlama V2** service to reduce VRAM usage.
- **Cloud Offloading:** For better performance, consider offloading the LLM generation to online services such as Voxta Cloud, OpenAI, or OpenRouter. This frees GPU resources for rendering and VR.
- **Hybrid Approach:** A combination of local and cloud services is often the best balance. For example, keep STT and TTS local while using a cloud LLM, or vice versa.

To achieve full functionality with good output quality on an RTX 3060 Ti, subscribing to external online services for some components (like the LLM or TTS) is recommended.

## RTX 3060 (12GB VRAM)

- The 12GB VRAM model provides more memory, but performance still depends on the VAM scene complexity.
- **LLM Only:** When running the LLM on a dedicated machine or in isolation (without VAM), you can achieve around 25 tokens per second with decent models.
- **Full Stack (VAM + LLM + STT + TTS):** Performance will likely be slow due to resource contention. Heavier VAM scenes leave less VRAM for larger LLMs.

### Recommendations for 3060 12GB

- Similar to the Ti variant, consider using smaller LLM models if running locally alongside VAM.
- Offloading the LLM to cloud services can significantly improve responsiveness.
- If you have a secondary PC, you can run Voxta services there to distribute the load.

## General Advice for Mid‑Range GPUs

- Use **ExLlama V2** for efficient local LLM inference; it offers good speed and lower VRAM consumption.
- Prioritize cloud‑based LLMs if you need high‑quality responses without compromising VR performance.
- For TTS and STT, lightweight local models (e.g., Silero, Piper) are less demanding and can often run alongside VAM.
- Monitor your VRAM usage with tools like GPU‑Z to understand how much headroom you have for larger models.

By adopting a hybrid setup, you can enjoy Voxta’s features even on hardware with limited VRAM.

---

*Extracted from Discord. Primary contributor: _kinkyk9*