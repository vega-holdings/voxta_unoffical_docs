---
id: bDSTl-qlS8XrWqx8c7kcB
slug: controlling-temperature-via-prompts-bDSTl-
type: tip
title: Controlling Temperature via Prompts
topics:
  - llm
  - configuration
keywords:
  - temperature
  - prompt engineering
  - parameters
  - settings
confidence: 0.6
authority: 0.2
contributor: yvonc
sources: []
created: 2025-12-19T03:17:29.550Z
updated: 2025-12-19T03:17:29.550Z
---

# Controlling Temperature via Prompts

> Clarification that temperature is a configuration setting, not a prompt instruction.

## Answer

Temperature is a model generation setting (hyperparameter) that cannot be controlled or modified through the text prompt itself. It must be adjusted in the model configuration or backend settings, as LLMs do not interpret prompt text as functional overrides for generation parameters.

---

*Extracted from Discord. Primary contributor: yvonc*