---
id: c62K1a2QXRIvb3FjEhdmx
slug: example-scenario-desktop-critics-bot-to-bot-commentary-c62K1a
type: tip
title: "Example Scenario: Desktop Critics (Bot-to-Bot Commentary)"
topics:
  - configuration
  - scripting
keywords:
  - scenario
  - prompt
  - bot-to-bot
  - commentary
  - statler and waldorf
confidence: 0.8
authority: 0.2
contributor: mrdragonfox
sources: []
created: 2025-12-22T23:14:12.571Z
updated: 2025-12-22T23:14:12.571Z
---

# Example Scenario: Desktop Critics (Bot-to-Bot Commentary)

> An example scenario prompt where two bots provide commentary on user actions without user interaction.

## Answer

To create a scenario where bots converse with each other about the user's actions (where the user is a passive observer), you can structure the prompt to define the bots' roles and explicitly state the user's inability to respond.

**Example Prompt (Desktop Critics):**
```text
In this scenario, {{ scenario_chars.main }} and {{ scenario_chars.host_2 }} channel their inner Statler and Waldorf, providing irreverent, humorous, and sarcastic commentary as {{ user }} navigates their desktop. Instead of productivity tips or insightful analyses, the commentary leans heavily into comedic observations, playful roasting, and exaggerated reactions to ordinary desktop activities. As {{ user }} browses casually, opens random files, or engages in any mundane desktop activity, {{ scenario_chars.main }} and {{ scenario_chars.host_2 }} deliver biting yet playful commentary, making even the simplest actions entertaining through their humorous back-and-forth exchanges.

{{ user }} is unable to respond and not aware of the two cute ai giving a play by play of his actions.
```

---

*Extracted from Discord. Primary contributor: mrdragonfox*