---
id: YOhYXwslFWf1tc8-XTRtG
slug: handling-numeric-accumulation-with-buttons-and-events-YOhYXw
type: tip
title: Handling Numeric Accumulation with Buttons and Events
topics:
  - scripting
  - configuration
keywords:
  - buttons
  - variables
  - negotiation
  - flags
  - arithmetic
  - events
confidence: 0.8
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T23:17:02.201Z
updated: 2025-12-22T23:17:02.201Z
---

# Handling Numeric Accumulation with Buttons and Events

> Use buttons with static increments and event scripts to handle numeric accumulation instead of creating many individual actions.

## Answer

To handle numeric negotiations or accumulation (e.g., offering money) without creating excessive actions for every possible amount:

1. **Use Buttons:** Create buttons for static increments (e.g., "+100", "+1000", "-100").
2. **Use Flags:** Configure each button to set a specific flag indicating which value was selected.
3. **Event Scripting:** Create an event that triggers when these flags are active. The event script can handle the arithmetic (adding/subtracting from a total variable) and check conditions (e.g., if the total exceeds a target value).
4. **Reset:** Ensure the event resets the flags or temporary values after execution.

This approach reduces reliance on complex Action Inference for simple arithmetic tasks.

---

*Extracted from Discord. Primary contributor: sraura*