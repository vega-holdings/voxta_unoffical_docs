---
id: TAX2J-dbmUe-Apqn7gLSr
slug: auto-loading-models-with-lm-studio-integration-TAX2J-
type: tip
title: Auto-loading Models with LM Studio Integration
topics:
  - integrations
  - configuration
  - troubleshooting
keywords:
  - LM Studio
  - OpenAI compatibility
  - auto-load
  - model loading
  - GPU memory
confidence: 0.6
authority: 0.2
contributor: sounderstanding
sources: []
created: 2025-12-22T23:13:32.577Z
updated: 2025-12-22T23:13:32.577Z
---

# Auto-loading Models with LM Studio Integration

> Configure Voxta to auto-load specific LM Studio models via the OpenAI Comp Default Model field.

## Answer

To ensure LM Studio automatically loads the correct model when Voxta connects (preventing errors if no model is loaded):

1. In LM Studio, copy the **Default Identifier** of your desired model.
2. In Voxta's settings, paste this identifier into the **OpenAI Comp Default Model** field.

**Warning:** If you manually load a different model in LM Studio while this setting is active, Voxta may attempt to force-reload the default model specified in settings during the next inference call. This can result in the system attempting to load two models simultaneously, potentially causing GPU memory crashes.

---

*Extracted from Discord. Primary contributor: sounderstanding*