---
id: 6pBDk9Ts59aErfwtfVvoR
slug: offloading-tts-to-secondary-gpu-6pBDk9
type: tip
title: Offloading TTS to Secondary GPU
topics:
  - performance
  - configuration
keywords:
  - gpu
  - multi-gpu
  - tts
  - hardware
  - offload
confidence: 0.6
authority: 0.2
contributor: futurestorm
sources: []
created: 2025-12-22T23:36:26.396Z
updated: 2025-12-22T23:36:26.396Z
---

# Offloading TTS to Secondary GPU

> TTS workloads can be assigned to a secondary GPU in the same machine.

## Answer

You can offload Text-to-Speech (TTS) processing to a different GPU within the same machine to distribute hardware load. For example, using a secondary card like an RTX A2000 specifically for TTS tasks while the primary GPU handles other operations.

---

*Extracted from Discord. Primary contributor: futurestorm*