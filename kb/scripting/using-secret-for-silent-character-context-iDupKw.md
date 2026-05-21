---
id: iDupKwdY9KvlUJOoSrMRi
slug: using-secret-for-silent-character-context-iDupKw
type: tip
title: Guiding Character Behavior with /secret and Context
topics:
  - scripting
  - prompting
  - llm
  - scenarios
keywords:
  - /secret
  - context
  - hidden message
  - event
  - instruction
  - behavior
  - guide
  - silent
confidence: 0.9
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T22:50:03.624Z
updated: 2025-12-23T13:50:38.960Z
---

# Guiding Character Behavior with /secret and Context

> Use the `/secret` command or the Context field to silently guide character behavior, influence reactions to events, and restrict topics without breaking immersion.

## Answer

To guide a character's behavior, influence their reactions, or restrict topics without breaking immersion, you can use the `/secret` command or the **Context** field.

### The `/secret` Command
The `/secret` command (or `{{ secret }}`) allows you to send instant messages to the character (`{{ char }}`) that are visible only to them. These messages do not appear in the user's chat interface.

Unlike the **Context** field, which provides continuous background information, a secret is treated as a single, instant instruction. This makes it ideal for immediate guidance.

**Common Use Cases:**

*   **General Guidance:** Direct the AI's behavior or tone silently.
*   **Reacting to Events:** To control how a character responds to an `{{ event }}` (or `/event`), send a `/secret` message alongside it. This acts as a hidden instruction to direct their reaction.
*   **Restricting Topics:** Temporarily prevent the character from discussing specific subjects.

### Using the Context Field
Alternatively, you can add temporary instructions directly to the **Context** field. While this method is continuous rather than instant, it serves the same purpose of influencing the character's behavior and output.

---

*Extracted from Discord. Primary contributor: sraura*