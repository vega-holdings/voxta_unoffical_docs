---
id: JIbcZ4c9wtPSWINkyZEPz
slug: reducing-vram-usage-on-older-gpus-gtx-1070-JIbcZ4
type: troubleshooting
title: Reduce VRAM Usage by Switching from Coqui XTTS to Kokoro TTS
topics:
  - performance
  - troubleshooting
  - configuration
keywords:
  - GTX 1070
  - VRAM
  - Coqui XTTS
  - Kokoro TTS
  - CUDA
  - audio quality
  - memory usage
confidence: 0.8
authority: 0.2
contributor: alvar89alvar89
sources: []
created: 2025-12-22T23:08:46.034Z
updated: 2025-12-23T04:41:16.729Z
---

# Reduce VRAM Usage by Switching from Coqui XTTS to Kokoro TTS

> For users with limited VRAM (e.g., GTX 1070), switching from Coqui XTTS to Kokoro TTS significantly reduces memory consumption, freeing resources for the LLM. While Coqui offers higher audio quality, Kokoro is a lightweight alternative that works well when VRAM is constrained.

## Answer

# Reducing VRAM Usage by Switching from Coqui XTTS to Kokoro TTS

When running a full local AI stack—including a large language model (LLM) and a text-to-speech (TTS) system—on GPUs with limited VRAM (such as the NVIDIA GTX 1070 with 8 GB), you may encounter memory constraints. Coqui XTTS is a high-quality TTS model but consumes significant VRAM, which can leave insufficient memory for the LLM.

**Solution:** Switch to **Kokoro TTS**, a lightweight alternative that uses far less VRAM while still providing acceptable audio quality. This frees up headroom for the LLM and improves overall stability.

## Comparison

- **Coqui XTTS**  
  - Preferred for its superior audio quality in chat applications.  
  - Requires more VRAM, which can be problematic on older or lower‑VRAM GPUs.

- **Kokoro TTS**  
  - Less resource‑intensive, making it ideal when VRAM is limited.  
  - May have slightly lower audio quality compared to Coqui, but is a reliable fallback.

## Configuration Tips

- Ensure **CUDA** is enabled for optimal performance on NVIDIA GPUs.  
- If you experience out‑of‑memory errors with Coqui XTTS, switching to Kokoro TTS often resolves the issue.

This adjustment is particularly beneficial for users with GPUs like the GTX 1070, but applies to any system where VRAM is a limiting factor.

---

*Extracted from Discord. Primary contributor: alvar89alvar89*