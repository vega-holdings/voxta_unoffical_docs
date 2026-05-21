---
id: FuTyoe8nhUUBi1UDmMPWE
slug: managing-model-generation-presets-FuTyoe
type: tip
title: "Customizing LLM Presets: Clone Defaults Instead of Editing"
topics:
  - configuration
  - llm
keywords:
  - presets
  - cloning
  - parameters
  - defaults
  - config
  - mistral
  - custom config
confidence: 0.6
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T22:51:39.418Z
updated: 2025-12-23T04:41:19.440Z
---

# Customizing LLM Presets: Clone Defaults Instead of Editing

> Presets are configuration files that define LLM parameters such as Temperature. To create custom configurations, clone the default preset and edit the copy, leaving the original intact. You can rename the new preset as needed.

## Answer

Presets are configuration files that store settings for Large Language Model (LLM) parameters, such as Temperature, Top P, and Max Tokens. They allow you to quickly apply consistent configurations across different interactions.

**Do Not Edit Default Presets**  
It is strongly recommended to leave the default presets unchanged. Editing the original defaults can lead to loss of baseline settings and make it difficult to revert to a known-good configuration.

**Create a Custom Preset by Cloning**  
To customize parameters for a specific LLM (e.g., Mistral), clone one of the default presets. This creates an independent copy that you can safely modify. After cloning, you can:

- Rename the new preset to something descriptive (e.g., "Mistral-Creative").
- Adjust any parameter values to suit your needs.
- Save the preset; it will appear alongside the defaults for future use.

This approach preserves the original defaults and gives you the flexibility to create multiple tailored configurations.

---

*Extracted from Discord. Primary contributor: sraura*