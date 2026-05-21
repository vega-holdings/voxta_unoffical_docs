---
id: tq_GPjuSMLLcc1Y3OjPVL
slug: gemini-3-openrouter-no-tokens-generated-error-tq_GPj
type: troubleshooting
title: Gemini 3 OpenRouter 'No Tokens Generated' Error
topics:
  - troubleshooting
  - llm
  - integrations
keywords:
  - Gemini 3
  - OpenRouter
  - No tokens generated
  - thinking model
  - max tokens
  - reasoning
confidence: 0.9
authority: 0.2
contributor: .frond
sources:
  - messageId: "1441649311011176468"
    author: .frond
    timestamp: 2025-12-22T23:55:31.675Z
    url: ""
  - messageId: "1441676692392382464"
    author: .frond
    timestamp: 2025-12-22T23:55:31.675Z
    url: ""
created: 2025-12-22T23:55:31.675Z
updated: 2025-12-22T23:55:31.675Z
---

# Gemini 3 OpenRouter 'No Tokens Generated' Error

> Resolve Gemini 3 generation errors by increasing max generation or thinking token limits.

## Answer

This error often occurs with reasoning or 'thinking' models (like Gemini 3 Pro Preview) when token limits prevent the model from completing its thought process or output.

**Solutions:**
* **Increase Max Tokens To Generate:** Raise the generation length to accommodate both the reasoning steps and the final response.
* **Adjust Thinking Tokens:** Users have reported success by raising the 'max thinking tokens'. Alternatively, try lowering the thinking budget or disabling the thinking feature if the model is stalling.

---

*Extracted from Discord. Primary contributor: .frond*