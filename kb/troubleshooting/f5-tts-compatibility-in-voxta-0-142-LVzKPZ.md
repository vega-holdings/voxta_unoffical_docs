---
id: LVzKPZT-ltQ5QcHRt4fjR
slug: f5-tts-compatibility-in-voxta-0-142-LVzKPZ
type: troubleshooting
title: F5-TTS Compatibility in Voxta 0.142
topics:
  - troubleshooting
  - configuration
keywords:
  - F5-TTS
  - "0.142"
  - German
  - compatibility
  - safetensors
  - downgrade
confidence: 0.8
authority: 0.2
contributor: rotter425
sources: []
created: 2025-12-22T21:31:59.938Z
updated: 2025-12-22T21:31:59.938Z
---

# F5-TTS Compatibility in Voxta 0.142

> Voxta 0.142 breaks compatibility with older F5-TTS models; users may need to stay on 0.141.

## Answer

No, the Voxta 0.142 update introduced a new F5-TTS implementation (v1) that breaks compatibility with older F5 models (specifically those using older structures like `model_420000.safetensors,vocab.txt`).

**Workarounds:**
*   Stay on Voxta version 0.141 until updated finetunes are available.
*   Wait for new v1-compatible finetunes to be released on HuggingFace.
*   Use alternative TTS providers (e.g., ElevenLabs) if immediate support is needed.

---

*Extracted from Discord. Primary contributor: rotter425*