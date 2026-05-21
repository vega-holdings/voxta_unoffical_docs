---
id: IwqF4AnI3DR4CKD87Eh6x
slug: scenario-events-fail-to-activate-characters-if-chat-starts-e-IwqF4A
type: troubleshooting
title: Scenario events fail to activate characters if chat starts empty
topics:
  - troubleshooting
  - configuration
  - scripting
keywords:
  - scenario
  - roles
  - activate character
  - empty chat
  - edge case
  - events
confidence: 0.7
authority: 0.2
contributor: lapiro
sources: []
created: 2025-12-22T23:38:43.184Z
updated: 2025-12-22T23:38:43.184Z
---

# Scenario events fail to activate characters if chat starts empty

> Events may fail to activate characters if the chat session begins with zero active characters.

## Answer

If a scenario is configured such that no characters are present at the beginning of the chat (an empty start), events designed to activate characters later may fail to trigger. This appears to be an edge case where the initial absence of characters prevents the activation logic from functioning correctly. 

**Workaround:** Ensure at least one character is active/present at the start of the chat to ensure subsequent events can trigger correctly.

---

*Extracted from Discord. Primary contributor: lapiro*