---
id: 5xbo0bzIxp55YcVaDdUN-
slug: character-profile-impact-on-context-window-5xbo0b
type: tip
title: Character Profile Impact on Context Window
topics:
  - llm
  - performance
  - configuration
keywords:
  - tokens
  - context window
  - character profile
  - optimization
confidence: 0.8
authority: 0.2
contributor: storyline7673
sources: []
created: 2025-12-22T23:43:00.171Z
updated: 2025-12-22T23:43:00.171Z
---

# Character Profile Impact on Context Window

> Long character profiles consume significant tokens, limiting conversation memory.

## Answer

When configuring a character, keep in mind that the character's profile information is included in the prompt context. A lengthy profile (e.g., 5 paragraphs) can consume hundreds of tokens at the start of a conversation, reducing the available context window for chat history.

---

*Extracted from Discord. Primary contributor: storyline7673*