---
id: yzS3tZZ64hbNYF1PV1QKF
slug: novelai-textgen-error-requested-length-exceeds-model-s-maxim-yzS3tZ
type: troubleshooting
title: "NovelAI TextGen Error: Requested length exceeds model's maximum"
topics:
  - troubleshooting
  - llm
  - configuration
keywords:
  - NovelAI
  - TextGen
  - max tokens
  - generation length
  - error 400
  - Erato
confidence: 0.9
authority: 0.2
contributor: acidbubbles
sources: []
created: 2025-12-22T20:24:37.941Z
updated: 2025-12-22T20:24:37.941Z
---

# NovelAI TextGen Error: Requested length exceeds model's maximum

> Fix the NovelAI max tokens error by adjusting the preset configuration to match the model's generation limit.

## Answer

This error indicates that the **Max Tokens** setting in your NovelAI preset is set higher than what the selected model supports.

To resolve this:
1. Go to the NovelAI preset configuration screen in Voxta (where you created or edited your preset, e.g., "Copy of Erato").
2. Lower the **Max Tokens** setting to be within the model's limit (e.g., 250 tokens or less).

*Note: NovelAI is a supported TextGen option in Voxta and is noted for having a unique flavor for character interactions (e.g., non-verbal sounds).* 

---

*Extracted from Discord. Primary contributor: acidbubbles*