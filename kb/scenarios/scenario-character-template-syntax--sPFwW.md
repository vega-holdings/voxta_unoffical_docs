---
id: -sPFwWt0Ad7FQ_EHcWjuM
slug: scenario-character-template-syntax--sPFwW
type: qa
title: Referencing Characters in Scenarios and 1-on-1 Chats
topics:
  - scenarios
  - scripting
  - configuration
keywords:
  - scenario_chars
  - template variables
  - scriban
  - roles
  - dialogue
  - bootstrap messages
  - syntax
  - referencing
confidence: 0.9
authority: 0.2
contributor: .vaan20
sources:
  - messageId: "1365642311375126569"
    author: .vaan20
    timestamp: 2025-12-22T22:39:00.186Z
    url: ""
created: 2025-12-22T22:39:00.186Z
updated: 2025-12-23T13:55:49.512Z
---

# Referencing Characters in Scenarios and 1-on-1 Chats

> Explains the template syntax for referencing characters in standard chats versus scenarios, including how to format dialogue attribution using colons.

## Answer

When writing scripts or templates, the syntax for referencing a character depends on whether you are in a standard 1-on-1 chat or a multi-character Scenario.

### Standard 1-on-1 Chats
In standard chats, the character is referenced using the `char` variable:

*   **`{{ char }}`**: Resolves to the name of the character you are currently chatting with.

### Scenarios
In Scenarios, where multiple characters may be assigned to specific roles, you must use the `scenario_chars` object with the specific role name.

*   **Syntax**: `{{ scenario_chars.role_name }}`
*   **Example**: If you have a character assigned to the role "main", use `{{ scenario_chars.main }}`.

### Formatting Dialogue
To format a line as dialogue (commonly used in **Bootstrap Messages**), you append a colon (`:`) after the template variable. Note that the colon is treated as standard text, not part of the variable logic itself.

*   **Variable**: `{{ scenario_chars.main }}` 
    *   *Output*: `Alice`
*   **Dialogue Format**: `{{ scenario_chars.main }}:`
    *   *Output*: `Alice:`

---

*Extracted from Discord. Primary contributor: .vaan20*