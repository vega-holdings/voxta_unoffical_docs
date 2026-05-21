---
id: vg15067IFboYCAxOpeiOX
slug: koboldai-websearch-augmentation-fails-with-specific-prompt-t-vg1506
type: troubleshooting
title: KoboldAI Websearch Augmentation Fails with Specific Prompt Templates
topics:
  - configuration
  - integrations
  - troubleshooting
keywords:
  - KoboldAI
  - websearch
  - augmentation
  - prompt formatting
  - Mistral
  - template
confidence: 0.8
authority: 0.2
contributor: doctortim
sources: []
created: 2025-12-22T23:40:22.757Z
updated: 2025-12-22T23:40:22.757Z
---

# KoboldAI Websearch Augmentation Fails with Specific Prompt Templates

> Switching Prompt Formatting to 'None (Generic)' may fix KoboldAI websearch issues.

## Answer

The selected **Prompt Formatting template** within the LLM configuration settings can affect whether the `KoboldAI_websearch` augmentation functions correctly.

In some cases, specific templates (like Mistral V3-Tekken) may prevent it from working. Switching the Prompt Formatting template to **"None (Generic)"** has been observed to resolve this issue.

---

*Extracted from Discord. Primary contributor: doctortim*