---
id: uc6wIN_ANOLwRR2JHTrXs
slug: preventing-simultaneous-event-triggers-uc6wIN
type: qa
title: Preventing Simultaneous Event Triggers
topics:
  - scripting
  - configuration
keywords:
  - events
  - flags
  - conditions
  - triggers
  - mutual exclusion
  - logic
  - evaluateNextEvent
confidence: 0.9
authority: 0.2
contributor: a1os353
sources:
  - messageId: "1327660118757740554"
    author: a1os353
    timestamp: 2025-12-19T05:12:36.661Z
    url: ""
created: 2025-12-19T05:12:36.661Z
updated: 2025-12-19T05:12:36.661Z
---

# Preventing Simultaneous Event Triggers

> Use flags as negative conditions or enum flags to prevent multiple events from triggering simultaneously.

## Answer

Yes, you can use **Flags** to manage event exclusivity.

1. **Negative Conditions:** Set a flag when the primary event triggers (e.g., `event_active`). Add this flag as a negative condition (e.g., `!event_active`) to the other events you wish to block.
2. **Enum Flags:** For mutually exclusive states (like `pose.standing` vs `pose.sitting`), use dot-separated enum flags. Setting one automatically unsets the others in that group.

**Note:** By default, Voxta stops evaluating events after the first match. Unless you explicitly call `e.evaluateNextEvent()` in a script, only the first valid event usually runs.

---

*Extracted from Discord. Primary contributor: a1os353*