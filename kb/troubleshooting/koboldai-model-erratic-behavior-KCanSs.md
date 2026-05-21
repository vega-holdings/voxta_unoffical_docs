---
id: KCanSs-qj_XCyWV7lhBqE
slug: koboldai-model-erratic-behavior-KCanSs
type: troubleshooting
title: KoboldAI Model Erratic Behavior
topics:
  - troubleshooting
  - llm
  - configuration
keywords:
  - KoboldAI
  - context size
  - formatting presets
  - sampler settings
  - "8192"
confidence: 0.8
authority: 0.2
contributor: sraura
sources:
  - messageId: "1358199409334161479"
    author: sraura
    timestamp: 2025-12-22T22:33:55.847Z
    url: ""
created: 2025-12-22T22:33:55.847Z
updated: 2025-12-22T22:33:55.847Z
---

# KoboldAI Model Erratic Behavior

> Check formatting presets and sampler settings if KoboldAI models behave erratically.

## Answer

If your context size is within reasonable limits (e.g., 4096, as most recent models support at least 8192), the issue is likely due to incorrect **formatting presets** or **sampler settings**. KoboldAI requires specific formatting templates matching the LLM to function correctly. Verify that your prompt formatting and sampler configurations are set up for the specific model you are running.

---

*Extracted from Discord. Primary contributor: sraura*