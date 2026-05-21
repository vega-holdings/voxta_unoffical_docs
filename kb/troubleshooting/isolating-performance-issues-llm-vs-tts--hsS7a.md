---
id: -hsS7aP8GGULmdnXhwT_R
slug: isolating-performance-issues-llm-vs-tts--hsS7a
type: troubleshooting
title: Isolating Performance Issues (LLM vs TTS)
topics:
  - troubleshooting
  - performance
keywords:
  - latency
  - lag
  - slow
  - tts
  - debug
  - parasail
  - nebius
confidence: 0.8
authority: 0.2
contributor: mrdragonfox
sources: []
created: 2025-12-22T23:13:03.014Z
updated: 2025-12-22T23:13:03.014Z
---

# Isolating Performance Issues (LLM vs TTS)

> Disable voice input/output to determine if slowness is caused by TTS or the LLM.

## Answer

Slowness can be caused by either the LLM generation or the Text-to-Speech (TTS) processing. To isolate the cause, disable voice input and output in Voxta. If the system becomes fast, the bottleneck is likely the TTS service. If it remains slow, the issue is likely with the LLM provider or connection.

---

*Extracted from Discord. Primary contributor: mrdragonfox*