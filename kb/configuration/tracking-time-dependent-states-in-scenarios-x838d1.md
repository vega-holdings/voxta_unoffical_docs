---
id: x838d1MooeJJ8ANSnixtn
slug: tracking-time-dependent-states-in-scenarios-x838d1
type: tip
title: Tracking Time-Dependent States in Scenarios
topics:
  - configuration
  - scripting
keywords:
  - time awareness
  - memory book
  - context
  - pregnancy
  - progression
  - scenario_chars
confidence: 0.8
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T22:48:38.006Z
updated: 2025-12-22T22:48:38.006Z
---

# Tracking Time-Dependent States in Scenarios

> Methods for tracking time or progressive states using Time Awareness, Memory Books, or manual Context updates.

## Answer

To track time-dependent states (such as pregnancy progression or specific dates) in a scenario, there are two main approaches:

1. **Time Awareness & Memory Book**: Ensure the character's time awareness setting is enabled. You can also add specific dates to the **Memory Book** to help anchor the timeline, though this may still be experimental in reliability.
2. **Manual Context Injection**: For precise control, add a sentence to a **Context** field explicitly stating the current status, such as `{{ scenario_chars.rolename }}'s pregnancy is on week xx`. While this requires manual updates, it ensures the model is aware of the exact state during generation.

---

*Extracted from Discord. Primary contributor: sraura*