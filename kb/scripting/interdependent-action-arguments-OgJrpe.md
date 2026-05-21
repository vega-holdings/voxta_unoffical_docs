---
id: OgJrpeuKqyBAH1kjWzT2E
slug: interdependent-action-arguments-OgJrpe
type: troubleshooting
title: Interdependent Action Arguments
topics:
  - scripting
  - integrations
  - llm
keywords:
  - FunctionArgumentDefinition
  - ClientUpdateContextMessage
  - actions
  - arguments
  - constraints
confidence: 0.9
authority: 0.2
contributor: acidbubbles
sources:
  - messageId: "1359959369298608178"
    author: acidbubbles
    timestamp: 2025-12-22T22:38:28.315Z
    url: ""
  - messageId: "1364260755385356429"
    author: acidbubbles
    timestamp: 2025-12-22T22:38:28.315Z
    url: ""
created: 2025-12-22T22:38:28.315Z
updated: 2025-12-22T22:38:28.315Z
---

# Interdependent Action Arguments

> Action arguments cannot reference each other; describe constraints in the main action description instead.

## Answer

No, the current implementation of arguments does not support dynamic referencing between arguments. 

**Workaround:**
Describe the arguments and their constraints (e.g. "min must be less than max") in the main action `description` field. Do not rely solely on the individual argument descriptions, as the LLM may not utilize them effectively during generation.

---

*Extracted from Discord. Primary contributor: acidbubbles*