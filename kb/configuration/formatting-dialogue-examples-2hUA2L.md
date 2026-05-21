---
id: 2hUA2L6YvoymUgd6L5N30
slug: formatting-dialogue-examples-2hUA2L
type: tip
title: Formatting Dialogue Examples to Exclude Narration, Actions, and Internal
  Thoughts
topics:
  - configuration
  - llm
keywords:
  - dialogue examples
  - character creation
  - narration
  - actions
  - character card
  - internal thoughts
  - descriptive text
confidence: 0.8
authority: 0.2
contributor: reignmocap
sources: []
created: 2025-12-19T04:25:55.352Z
updated: 2025-12-23T02:30:01.543Z
---

# Formatting Dialogue Examples to Exclude Narration, Actions, and Internal Thoughts

> When creating dialogue examples for a character, include only spoken lines; remove any descriptive text, narration, actions, or internal thoughts. This ensures the LLM generates appropriate dialogue and avoids unwanted narration, especially when using models that follow formatting constraints strictly.

## Answer

# Formatting Dialogue Examples to Exclude Narration, Actions, and Internal Thoughts

When creating dialogue examples for a character, it's important to restrict the content to spoken lines only. Avoid including descriptive actions, narration, physical descriptions, or internal thoughts (often indicated with asterisks, e.g., `*looks away*`). Including such narrative text can negatively impact the LLM's generation style, causing it to produce excessive or incorrect narration.

## Steps to ensure dialogue-only examples

1. **Edit existing dialogue examples**: Review the character's dialogue examples and remove any text that is not a spoken line. This includes actions, descriptions, and internal thoughts, which are often enclosed in asterisks or parentheses.
2. **Model selection**: Use a model that is capable of strictly following formatting constraints. Some models are more prone to generating narration regardless of examples; choosing an appropriate model can help enforce the desired behavior.

## Additional tips

- When writing new dialogue examples, write only the character's spoken words, as if they were lines in a script.
- If you need to convey actions or narration, consider using the system prompt or author's note instead of embedding them in dialogue examples.

By following these guidelines, you can prevent unwanted narration and keep the character's responses focused on dialogue.

---

*Extracted from Discord. Primary contributor: reignmocap*