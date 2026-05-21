---
id: r8JuJE65nNCy7uz800zQl
slug: recommended-gguf-quantization-for-multi-service-setups-r8JuJE
type: qa
title: Recommended GGUF Quantization for Multi-Service Setups
topics:
  - llm
  - performance
keywords:
  - quantization
  - q5_K_M
  - VRAM
  - dolphin venice
  - GGUF
  - optimization
confidence: 0.8
authority: 0.2
contributor: storyline7673
sources: []
created: 2025-12-22T23:36:08.227Z
updated: 2025-12-22T23:36:08.227Z
---

# Recommended GGUF Quantization for Multi-Service Setups

> Use q5_K_M quantization to save VRAM for TTS and Image Gen.

## Answer

The `q5_K_M` quantization is recommended as a balanced choice. Higher quantization levels consume significantly more VRAM, which can prevent running other resource-intensive services like TTS and Image Generation simultaneously.

---

*Extracted from Discord. Primary contributor: storyline7673*