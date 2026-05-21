---
id: _SOivkLUtlut2X1I8bIx9
slug: creating-sequential-conversation-flows-interviews-_SOivk
type: qa
title: Creating Sequential Conversation Flows (Interviews)
topics:
  - configuration
  - scripting
  - llm
keywords:
  - sequential flow
  - interview
  - state machine
  - flags
  - enum flags
  - context
  - actions
  - buttons
confidence: 0.9
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T22:38:25.073Z
updated: 2025-12-22T22:38:25.073Z
---

# Creating Sequential Conversation Flows (Interviews)

> How to use Flags and Actions to create a linear conversation flow where the AI advances topics based on user input.

## Answer

To create a structured, stage-based conversation (like an interview or guided scenario), you can combine **Contexts**, **Flags**, and **Actions**.

### Implementation Steps
1. **Define Contexts:** Create a separate Context entry for each topic (e.g., "Ask about work experience", "Ask for diploma").
2. **Gate with Flags:** Assign a unique flag condition to each Context so only the relevant one is active (e.g., `topic.experience`, `topic.diploma`).
3. **Create the Trigger:** Create an **Action** (which appears as a button) labeled "Next".
4. **Manage State:** Configure the Action's **Effects** or **Script** to update the flags.
   - **Tip:** Use **Enum Flags** (dot-separated syntax like `topic.experience`, `topic.diploma`) to automatically unset the previous topic when setting the new one.
5. **Execution:** When the user clicks "Next", the flags update, the old context is disabled, the new context becomes active, and the AI generates a response based on the new instructions.

For a practical example, the character 'Catherine' demonstrates similar logic.

---

*Extracted from Discord. Primary contributor: sraura*