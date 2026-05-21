---
id: FRaMKRGI2P5t-PkLQn7k7
slug: enabling-or-disabling-scenario-roles-via-script-FRaMKR
type: qa
title: Managing Dynamic Characters and Personalities in Scenarios
topics:
  - scripting
  - scenarios
  - configuration
keywords:
  - setRoleEnabled
  - character presence
  - personality switching
  - flags
  - conditional logic
  - multi-room
  - event buttons
confidence: 1
authority: 0.2
contributor: sraura
sources:
  - messageId: "1387096669178564648"
    author: sraura
    timestamp: 2025-12-22T23:04:55.724Z
    url: ""
created: 2025-12-22T23:04:55.724Z
updated: 2025-12-23T13:41:11.637Z
---

# Managing Dynamic Characters and Personalities in Scenarios

> Learn how to dynamically control character presence using the `chat.setRoleEnabled` script and implement personality switching through conditional logic, flags, or narrative prompting.

## Answer

You can manage character presence and personality dynamically within a scenario to simulate complex interactions, such as characters moving between rooms or changing behaviors based on story progression.

## Toggling Character Presence

The `chat.setRoleEnabled` function allows you to dynamically enable or disable scenario roles (characters) during a chat. When disabled, a character will not respond to messages and is excluded from the context.

### Implementation

1.  **Create an Action** (or use an existing script trigger) that executes when you want to change a role's status. For example, create an Action triggered by a phrase like `{{ scenario_chars.rolename }} leaves the room`.

2.  **Add a script** to the Action with the following code:

```javascript
import { chat } from "@voxta";

export function trigger(e) {
    // Replace "rolename" with the exact role name defined in your scenario
    chat.setRoleEnabled("rolename", false); // disable (character leaves)
    // To enable again, use true
    // chat.setRoleEnabled("rolename", true);
}
```

3.  **Save and test**. The change takes effect immediately for subsequent messages.

### Use Cases

*   **Multi-Room Scenarios:** When a character leaves the current room, disable their role; when they enter, enable it again. This ensures only characters present in the room are included in the conversation.
*   **Character Selection (Multiple Roles Method):** To allow users to choose a character:
    *   Add all potential characters to the Scenario.
    *   Set optional characters to **disabled by default** in the scenario settings.
    *   Create a "narrator" or starter character to present the choice.
    *   Use **Event Buttons** (Action Buttons) to trigger scripts that enable the chosen character and disable the narrator.

### Notes
*   The role name is case‑sensitive and must match the role defined in your scenario.
*   You can call `chat.setRoleEnabled` multiple times in different scripts to toggle a character's presence as needed.

## Dynamic Personality Changes

For scenarios involving a single character with shifting personalities or mutable traits, use the following methods instead of swapping roles:

### 1. Conditional Logic (Flags)
Use flags within the Character Card fields to conditionally display text based on the story state.

*   **Syntax:** `{{ if has_flag "my_flag" }}Your_conditional_stuff_here{{ end }}`

### 2. Narrative Prompting
Use roleplay commands to "update" the character within the chat context.

*   **Example:** `*Enter Command mode... upload new personality parameters...*`

### 3. Profile Definition
Explicitly state in the character profile that their personality is mutable and changes based on story progression.

---

*Extracted from Discord. Primary contributor: sraura*