---
id: vpFVWvGXB_7uo1ANV3FKN
slug: fixing-short-or-low-quality-responses-in-voxta-vpFVWv
type: troubleshooting
title: Fixing Short or Low-Quality Responses in Voxta
topics:
  - troubleshooting
  - configuration
  - llm
keywords:
  - response length
  - short answers
  - sillytavern
  - koboldai
  - intro.scriban
  - max tokens
  - chat style
confidence: 0.9
authority: 0.2
sources:
  - messageId: "1334040279036199034"
    author: ""
    timestamp: 2025-12-23T00:34:47.545Z
    url: ""
  - messageId: "1334092330898030634"
    author: ""
    timestamp: 2025-12-23T00:34:47.545Z
    url: ""
created: 2025-12-22T20:03:24.043Z
updated: 2025-12-22T20:03:24.043Z
---

# Fixing Short or Low-Quality Responses in Voxta

> Steps to fix short AI responses by adjusting presets, chat styles, and character examples.

## Answer

To improve response length and roleplay quality, check the following settings:

1. **Generation Preset:** Verify that `max tokens` and `sentences` are set high enough to allow longer outputs.
2. **Chat Style:** In Character settings, change the **Chat Style** to `Storytelling` or `Roleplay`. This adjusts the underlying prompt template.
3. **Character Examples:** Ensure the character has **Message Examples** and a **First Message** that demonstrate the desired length and style. The model mimics the style found in these fields.
4. **Advanced Prompting:** For granular control over the system prompt, you can modify `Resources\Prompts\Default\en\TextGen\Includes\intro.scriban`. *Note: This file is overwritten during application updates.*

---

*Extracted from Discord. Primary contributor: *