---
id: JqxDEA5CePV77sfgsDICU
slug: controlling-event-timing-and-frequency-in-scenarios-JqxDEA
type: troubleshooting
title: Controlling Event Timing and Frequency in Scenarios
topics:
  - configuration
  - scripting
keywords:
  - events
  - triggers
  - Once
  - flags
  - scenario
  - setRoleEnabled
  - timing
confidence: 0.85
authority: 0.2
contributor: futurestorm
sources:
  - messageId: "1399467206760202403"
    author: futurestorm
    timestamp: 2025-12-22T23:24:49.756Z
    url: ""
created: 2025-12-22T23:24:49.756Z
updated: 2025-12-22T23:24:49.756Z
---

# Controlling Event Timing and Frequency in Scenarios

> Use the 'Once' event setting combined with Flags to reliably control when scenario actions trigger.

## Answer

To prevent events from triggering prematurely and ensure they only happen when intended:

1. **Use the 'Once' setting**: Enable the 'Once' option in the Event configuration. This ensures the action (like enabling a role) only executes a single time per session.
2. **Use Flags**: Combine the event with **Flags** to track specific states or conditions. This allows you to gate the event behind specific progress markers rather than relying solely on the LLM's interpretation of the scenario prompt.

---

*Extracted from Discord. Primary contributor: futurestorm*