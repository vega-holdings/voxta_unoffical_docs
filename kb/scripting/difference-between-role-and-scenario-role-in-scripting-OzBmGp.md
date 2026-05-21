---
id: OzBmGpQ6-VKSgUYSSBv_9
slug: difference-between-role-and-scenario-role-in-scripting-OzBmGp
type: qa
title: Difference between Role and Scenario Role in Scripting
topics:
  - scripting
  - scenarios
keywords:
  - e.message.role
  - scenarioRole
  - Assistant
  - User
  - System
  - api
confidence: 0.9
authority: 0.2
contributor: acidbubbles
sources: []
created: 2025-12-22T22:38:17.873Z
updated: 2025-12-22T22:38:17.873Z
---

# Difference between Role and Scenario Role in Scripting

> Clarifies that `role` refers to LLM types (Assistant/User) while `scenarioRole` refers to custom scenario slots.

## Answer

There is a distinction between the generic `role` and the specific `scenarioRole` in Voxta's architecture:

*   **Role (`role`)**: Refers to the standard LLM message types, such as `Assistant`, `User`, or `System`.
*   **Scenario Role (`scenarioRole`)**: Refers to the specific custom role identifier defined in the Scenario settings (e.g., `role1`, `main`).

When inspecting `e.message.role` in scripts, it returns the LLM role (e.g., "Assistant"). To identify a specific character slot, you should look for the `scenarioRole` property.

---

*Extracted from Discord. Primary contributor: acidbubbles*