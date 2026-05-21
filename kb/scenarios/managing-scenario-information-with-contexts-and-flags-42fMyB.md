---
id: 42fMyBUQi7jt997bdUjkA
slug: managing-scenario-information-with-contexts-and-flags-42fMyB
type: tip
title: Managing Contexts, Flags, and Persistent Information
topics:
  - scenarios
  - configuration
  - scripting
  - llm
  - memory management
keywords:
  - context
  - flags
  - actions
  - role filters
  - enum flags
  - memory book
  - user profile
  - chat.setContext
  - placeholders
  - scenario logic
confidence: 0.9
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T22:48:52.648Z
updated: 2025-12-23T13:51:50.222Z
---

# Managing Contexts, Flags, and Persistent Information

> Use Context entries controlled by Flags, Actions, and scripts to manage dynamic scenario states and conditional information. Store persistent user preferences and details in Scenarios, Memory Books, or User Profiles depending on the required scope.

## Answer

# Managing Contexts, Flags, and Persistent Information

Context entries are the primary way to store persistent information that should be conditionally available during a scenario. By combining Contexts with Flags, Role Filters, and Actions, you can create dynamic narratives that respond to user choices, character movements, or changing states—all without writing complex scripts.

## Dynamic Context Configuration

Contexts can be configured dynamically to adapt to the scenario state using three primary methods:

*   **Flag-based:** Context entries can be conditional, applying only when specific flags are set (or unset).
*   **Role-based:** Contexts can be scoped to apply only to specific character roles using Role Filters.
*   **Script-driven:** Contexts can be added or modified during a scenario using scripts (e.g., via `chat.setContext` within actions or events).

## Using Flags to Control Contexts

Flags are simple on/off switches that can be set or dropped by Actions. To make a context depend on a flag:

1.  Create a Context entry (e.g., "Kitchen Description").
2.  In its **Flag Filter** field, enter a flag name like `room.kitchen`.
3.  The context will only be active when that flag is present.

You can then create an Action (e.g., "Move to Kitchen") that **sets** the `room.kitchen` flag. When the Action is triggered, the flag becomes active and the corresponding context is injected.

### Enum Flags for Mutually Exclusive States

For states that are mutually exclusive—like a character's location—use dot‑separated enum flags (e.g., `location.kitchen`, `location.bedroom`). When you set a new enum flag, the system automatically unsets any previous flag with the same prefix, ensuring only one location is active at a time.

## Practical Examples

### Multi‑Room Scenario

1.  **Create Contexts for each room**
    *   Kitchen: Flag Filter `location.kitchen`
    *   Bedroom: Flag Filter `location.bedroom`
    Each context contains the description and any room‑specific rules.

2.  **Create Actions to move between rooms**
    *   "Go to kitchen": sets `location.kitchen`
    *   "Go to bedroom": sets `location.bedroom`
    These can be *After User* or *After Char* actions, or attached to buttons.

3.  **Set an initial flag** (e.g., in the Scenario Start action) to define the starting location.

Now, when a movement action is triggered, the active location flag changes and the appropriate room description is automatically injected.

### Character States and Time Progression

AI models often struggle with precise time tracking. Instead of relying on the LLM to remember elapsed time, use Contexts and Flags to explicitly manage states like pregnancy stages, injury recovery, or relationship changes.

1.  **Create a Context** that describes the current state in detail. Use placeholders like `{{ user }}` and `{{ scenario_chars.rolename }}` to refer to characters dynamically.
2.  **Add a Flag Filter** (e.g., `pregnancy.second_trimester`) to the context.
3.  **When the narrative advances to that stage**, use an Action to set the corresponding flag.

This approach gives you full control over state changes and ensures the AI always has the correct information.

## Where to Store Persistent Information

To ensure the AI understands specific user preferences, fetishes, or complex behaviors, it is often better to provide detailed explanations (feelings, reasoning) rather than simple commands. Choose the storage location based on the scope of the information:

*   **Scenario Context:** Ideal when creating a specific scenario for a character. Add the information as a permanent item in the scenario context.
*   **Memory Book:** Best used if you want a character to retain information across multiple different scenarios without needing to edit each scenario individually.
*   **User Profile:** Use the `{{user_description}}` field for general information that applies to the user in all interactions.
*   **Chat Context Inspector:** For immediate or session-specific context, you can insert context directly into the chat via the **Cog Wheel** menu > **Inspector** in the chat tab.

## Best Practices

*   **Prefer Flags over complex scripting** – Flags are easier to manage and less error‑prone than custom JavaScript in most scenario logic.
*   **Use dot‑separated enum flags** for mutually exclusive categories (location, mood, etc.).
*   **Leverage placeholders** (`{{ user }}`, `{{ scenario_chars.rolename }}`, `{{ scenario_chars.rolename.pronouns...}}`) to make contexts reusable and dynamic.
*   **Keep contexts focused** – Each context should contain information relevant to a single situation or state.
*   **Combine Actions with Flags** to create clear narrative branches without overwhelming the LLM.
*   **Provide detailed explanations** – When storing user preferences, explain the *why* and *how* (feelings, reasoning) rather than just stating a rule.

---

*Extracted from Discord. Primary contributor: sraura*