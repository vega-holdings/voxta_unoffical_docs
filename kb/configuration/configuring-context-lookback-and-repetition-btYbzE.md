---
id: btYbzEEYOgP8WBhAOil10
slug: configuring-context-lookback-and-repetition-btYbzE
type: qa
title: Configuring Text Generation Presets, Context Size, and Repetition
topics:
  - configuration
  - llm
keywords:
  - context size
  - text gen preset
  - repetition penalty
  - model loader
  - summarization
  - formatting
  - "8192"
confidence: 0.9
authority: 0.2
contributor: sraura
sources:
  - messageId: "1344510294231351309"
    author: sraura
    timestamp: 2025-12-22T21:05:49.860Z
    url: ""
created: 2025-12-22T21:05:49.860Z
updated: 2025-12-23T13:50:02.957Z
---

# Configuring Text Generation Presets, Context Size, and Repetition

> Adjust Text Generation Presets to control context size, formatting, and repetition. Note that context size must be configured in both the Model Loader and the preset to match.

## Answer

You can adjust generation behaviors, including history lookback and formatting, via the **Generation Presets** (or **Text Gen Preset**) accessed through the top-right cog wheel menu.

You can clone existing presets to create custom configurations tailored to specific models or preferences.

## Key Parameters

### Context Size
This setting determines how much conversation history is sent to the model for referencing.

*   **Recommended Value:** While defaults are often 4096, a value of **8192** is commonly supported by modern models, with some supporting even higher limits. This parameter may sometimes be labeled as `seq size`.
*   **Configuration Requirement:** To change the context size effectively, you must update settings in **two places**:
    1.  **Model Loader Config:** Go to **Manage Modules** (or Services), select your model loader (e.g., ExLlama, llama.cpp), and adjust the context size parameter.
    2.  **Text Gen Preset:** Open the preset menu and update the context limit there to match the loader exactly.

### Repetition Penalty Range
This parameter defines how far back (in tokens) the model looks to apply penalties for repeated text. Adjusting this helps prevent the model from looping or repeating phrases.

### Formatting Constraints
Presets also control formatting rules, such as:
*   How many words are allowed inside asterisks (actions).
*   Whether line breaks are permitted.

## Summarization
For conversation history extending beyond the immediate context window, Voxta utilizes summarization features to maintain continuity. Ensure your Summarization service settings are configured correctly if you rely on smaller context windows.

---

*Extracted from Discord. Primary contributor: sraura*