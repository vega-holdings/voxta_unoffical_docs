---
id: UZHSuzIT6accSRpvMmW3z
slug: f5-tts-inserting-sample-text-words-UZHSuz
type: troubleshooting
title: F5-TTS Inserting Sample Text Words
topics:
  - troubleshooting
  - configuration
keywords:
  - F5-TTS
  - hallucination
  - sample text
  - artifacts
  - change
  - exchange
confidence: 0.9
authority: 0.2
contributor: acidbubbles
sources: []
created: 2025-12-22T23:28:38.233Z
updated: 2025-12-22T23:28:38.233Z
---

# F5-TTS Inserting Sample Text Words

> F5-TTS artifacts like 'change' or 'exchange' are caused by sample text leakage.

## Answer

This issue occurs because the model is inadvertently reading or generating the sample text associated with the voice profile. It is a known issue, and a fix involving a rollback to native F5-TTS behavior is expected in the next build.

---

*Extracted from Discord. Primary contributor: acidbubbles*