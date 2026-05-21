---
id: MFYncHGCakjh8CgYu69sE
slug: multi-gpu-configuration-strategy-MFYncH
type: troubleshooting
title: Multi-GPU Configuration Strategy
topics:
  - configuration
  - performance
  - troubleshooting
keywords:
  - multi-gpu
  - dual gpu
  - 1660 super
  - "3060"
  - VAM
confidence: 0.7
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T22:45:00.718Z
updated: 2025-12-22T22:45:00.718Z
---

# Multi-GPU Configuration Strategy

> Assign the stronger GPU to Voxta AI services and the weaker one to VAM rendering.

## Answer

In a multi-GPU setup, prioritize the stronger card for AI processing:

1.  **Voxta Server**: Ensure it utilizes the more powerful GPU (e.g., RTX 3060) for LLM and TTS generation.
2.  **Virt-A-Mate (VAM)**: Can be run on the secondary GPU (e.g., GTX 1660 Super), which should be sufficient for Desktop mode (VR may struggle).

Verify which GPU Voxta is using during startup or via service logs.

---

*Extracted from Discord. Primary contributor: sraura*