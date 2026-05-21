---
id: gEiLcm7rhNtlX3n42Qcd1
slug: troubleshooting-with-limited-gpu-resources-gEiLcm
type: tip
title: Troubleshooting with Limited GPU Resources
topics:
  - troubleshooting
  - performance
keywords:
  - GPU
  - VRAM
  - testing
  - Coqui
  - ExLlama
confidence: 0.8
authority: 0.2
contributor: _kinkyk9
sources: []
created: 2025-12-23T00:21:44.862Z
updated: 2025-12-23T00:21:44.862Z
---

# Troubleshooting with Limited GPU Resources

> Advice for testing Voxta services on limited hardware by isolating components.

## Answer

If you are running on hardware with limited VRAM, try testing services individually (e.g., running only Coqui TTS or only ExLlama V2) without running heavy frontends like Virt-A-Mate simultaneously. 

**Best Practice:** Change only one configuration or service at a time when troubleshooting to identify the specific cause of instability.

---

*Extracted from Discord. Primary contributor: _kinkyk9*