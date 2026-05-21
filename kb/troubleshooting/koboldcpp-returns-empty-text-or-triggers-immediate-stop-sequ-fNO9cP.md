---
id: fNO9cPjjOJFIV5YEvCHY6
slug: koboldcpp-returns-empty-text-or-triggers-immediate-stop-sequ-fNO9cP
type: troubleshooting
title: KoboldCpp Returns Empty Text or Triggers Immediate Stop Sequence
topics:
  - troubleshooting
  - configuration
  - llm
keywords:
  - KoboldCpp
  - empty text
  - stop sequence
  - prompt formatting
  - invalid operation exception
confidence: 0.9
authority: 0.2
contributor: alvar89alvar89
sources: []
created: 2025-12-22T23:06:01.480Z
updated: 2025-12-22T23:06:01.480Z
---

# KoboldCpp Returns Empty Text or Triggers Immediate Stop Sequence

> Fix empty responses from KoboldCpp by ensuring the correct Prompt Formatting template is selected in Voxta.

## Answer

This issue often occurs when the **Prompt Formatting** in Voxta is set to "Generic" (None) or does not match the specific model being used. 

Even if a model works in the KoboldCpp WebUI (which handles formatting internally), Voxta requires the correct template to structure the chat history properly for the API. 

**Solution:**
1. Identify the correct prompt format for your model (e.g., ChatML, Alpaca, Llama-3, Vicuna).
2. Select that specific template in Voxta's **Prompt Formatting** settings.
3. Ensure your **Context Size** in Voxta matches the model's capabilities.

---

*Extracted from Discord. Primary contributor: alvar89alvar89*