---
id: avJvY_Tz4JnH89KOdJGrO
slug: troubleshooting-llm-prompt-templates-avJvY_
type: troubleshooting
title: Troubleshooting LLM Prompt Templates
topics:
  - configuration
  - llm
  - troubleshooting
keywords:
  - chattemplate
  - autoguess
  - KoboldCpp
  - backend
confidence: 0.6
authority: 0.2
contributor: spain_resplendent
sources:
  - messageId: "1373723045600034887"
    author: spain_resplendent
    timestamp: 2025-12-22T22:57:28.403Z
    url: ""
created: 2025-12-22T22:57:28.403Z
updated: 2025-12-22T22:57:28.403Z
---

# Troubleshooting LLM Prompt Templates

> Advice to use 'autoguess' for templates and switch to KoboldCpp if issues persist.

## Answer

If you are experiencing issues with prompt templates:

1. **Use Autoguess**: Ensure the `chattemplate` setting is left on "autoguess" rather than manually selecting a specific template.
2. **Test Multiple LLMs**: Try different models to verify if the issue is specific to one model.
3. **Switch to KoboldCpp**: If issues persist, consider switching to [KoboldCpp](https://github.com/LostRuins/koboldcpp). It is often more user-friendly. You can install it via the Voxta setup menu, switch the backend settings to Kobold, and load your model there.

---

*Extracted from Discord. Primary contributor: spain_resplendent*