---
id: 7YZLTJfoxwPilznW7FHEC
slug: pattern-for-one-time-event-triggers-7YZLTJ
type: tip
title: Pattern for One-Time Event Triggers
topics:
  - scripting
keywords:
  - flags
  - events
  - trigger
  - variables
  - once
  - afterchar
confidence: 0.8
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T23:17:07.986Z
updated: 2025-12-22T23:17:07.986Z
---

# Pattern for One-Time Event Triggers

> Use flags to control one-time event execution by unsetting the flag within the triggered script.

## Answer

To execute a script only once when a specific condition is met, use a flag-based pattern:

1. Create an event (e.g., `afterchar`) configured to trigger only when a specific flag is present.
2. Inside the event's script, immediately unset the flag using `chat.unsetFlag('your_flag')`.
3. Perform the desired operations (such as setting `chat.variables`).

This ensures the event does not trigger repeatedly unless the flag is set again later.

---

*Extracted from Discord. Primary contributor: sraura*