---
id: kR1qlXnO93ooLShOJwA7c
slug: interrupting-generation-via-actions-kR1qlX
type: qa
title: Interrupting Generation via Actions
topics:
  - scripting
  - llm
keywords:
  - interruption
  - actions
  - triggers
  - generation
  - events
confidence: 0.6
authority: 0.2
contributor: mrdragonfox
sources: []
created: 2025-12-22T23:17:04.556Z
updated: 2025-12-22T23:17:04.556Z
---

# Interrupting Generation via Actions

> Actions trigger pre/post generation, limiting mid-generation interruption.

## Answer

Standard Actions are typically triggered pre or post generation (e.g., once generation is complete). Consequently, interrupting the generation process itself via standard action triggers is not usually possible, as the hooks fire after the generation phase.

---

*Extracted from Discord. Primary contributor: mrdragonfox*