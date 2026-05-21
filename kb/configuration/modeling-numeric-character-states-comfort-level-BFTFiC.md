---
id: BFTFiCFnI7sWL3x8Z-oxB
slug: modeling-numeric-character-states-comfort-level-BFTFiC
type: qa
title: Modeling Numeric Character States (Comfort Level)
topics:
  - configuration
  - scripting
keywords:
  - comfort level
  - numeric state
  - flags
  - enum flags
  - variables
  - scripting
  - actions
confidence: 0.8
authority: 0.2
contributor: pro_kun_vita
sources: []
created: 2025-12-22T22:34:50.682Z
updated: 2025-12-22T22:34:50.682Z
---

# Modeling Numeric Character States (Comfort Level)

> Use enum flags for discrete states or scripting with variables for dynamic numeric values.

## Answer

There are two primary approaches to modeling character states like comfort levels:

1. **Enum Flags:** Use dot-separated flags (e.g., `comfort.one`, `comfort.two`) and set conditional contexts based on these flags. This is useful for a small number of discrete states and is natively supported by Voxta's flag system.
2. **Scripting & Variables:** For more dynamic control, create actions for the LLM to select (e.g., `comfort_level_up`, `comfort_level_down`) and use Voxta's scripting capabilities to maintain a numeric variable that increments or decrements based on these actions.

---

*Extracted from Discord. Primary contributor: pro_kun_vita*