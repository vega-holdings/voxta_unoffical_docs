---
id: AWkJNLR36cgX1FOmWbD9C
slug: audio-playback-cutting-off-on-long-sentences-AWkJNL
type: troubleshooting
title: Audio Playback Cutting Off or Skipping on Long Sentences
topics:
  - troubleshooting
  - llm
  - configuration
  - integrations
keywords:
  - audio cut off
  - overflow
  - long sentences
  - punctuation
  - max_new_tokens
  - system prompt
  - TTS
  - Azure
  - skipping
  - formatting
confidence: 0.8
authority: 0.2
contributor: sraura
sources:
  - messageId: "1348024821841137807"
    author: sraura
    timestamp: 2025-12-22T21:21:36.816Z
    url: ""
created: 2025-12-22T21:21:36.816Z
updated: 2025-12-23T13:59:26.990Z
---

# Audio Playback Cutting Off or Skipping on Long Sentences

> Fix audio cutting off or skipping by adjusting system prompts for shorter sentences or lowering generation limits. This issue often arises when the LLM generates long, unbroken text that exceeds TTS engine capabilities.

## Answer

This issue typically occurs when the LLM generates very long sentences without punctuation or extensive narration. This behavior can cause the TTS engine to overflow, cut off playback, or skip generation entirely. This has been specifically observed with Azure TTS (noted around Voxta v140) when responses contain very long lines without breaks.

### Potential Solutions

1. **System Prompting:**
   Add instructions to your system prompt guiding the LLM to keep sentences shorter, use more frequent punctuation, or break long lines into shorter segments.
   *   *Note:* Higher-capability models (e.g., Gemini Pro) generally follow this formatting instruction more reliably than smaller models (e.g., Gemini Flash).

2. **Adjust Generation Settings:**
   Decrease the `max_new_tokens` parameter in your text generation preset. While this limits the maximum length of the response, it prevents the model from generating excessively long blocks of text that might trigger the issue.

### Important Note
Hard limits on the text sent to the TTS engine generally do not solve the problem, as they simply result in truncated audio.

---

*Extracted from Discord. Primary contributor: sraura*