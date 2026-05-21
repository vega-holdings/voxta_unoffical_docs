---
id: 9zWAQZneZanriUOMv-A9y
slug: tts-errors-and-generation-latency-9zWAQZ
type: troubleshooting
title: TTS Errors and Generation Latency
topics:
  - troubleshooting
  - performance
keywords:
  - TTS
  - timeout
  - circuit breaker
  - latency
  - retry strategy
confidence: 0.85
authority: 0.2
contributor: acidbubbles
sources: []
created: 2025-12-22T23:43:21.456Z
updated: 2025-12-22T23:43:21.456Z
---

# TTS Errors and Generation Latency

> TTS generation can take over 10 seconds; aggressive timeouts may cause errors.

## Answer

TTS generation can take 10 seconds or more, which is not abnormal. Errors may occur if the internal circuit breaker or retry strategy is too aggressive for this latency. Adjustments to these timeouts are often addressed in updates to ensure stability.

---

*Extracted from Discord. Primary contributor: acidbubbles*