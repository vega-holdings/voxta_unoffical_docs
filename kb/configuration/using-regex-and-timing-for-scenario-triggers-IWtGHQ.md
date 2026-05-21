---
id: IWtGHQwmrSfw8_hYZ_xV3
slug: using-regex-and-timing-for-scenario-triggers-IWtGHQ
type: tip
title: Configuring Reliable Regex Triggers with Events
topics:
  - configuration
  - scripting
  - troubleshooting
keywords:
  - regex
  - events
  - timing
  - after user
  - action inference
  - match
  - triggers
confidence: 0.9
authority: 0.2
contributor: sraura
sources:
  - messageId: "1341135016108888166"
    author: sraura
    timestamp: 2025-12-22T20:43:51.176Z
    url: ""
created: 2025-12-22T20:43:51.176Z
updated: 2025-12-23T13:55:51.399Z
---

# Configuring Reliable Regex Triggers with Events

> Use Events with 'After User' timing and regex matching to create deterministic triggers that bypass LLM action inference.

## Answer

To ensure commands or scenarios trigger reliably based on user input, use **Events** rather than Actions. Actions rely on "Action Inference" (where the LLM decides if an action fits), which can lead to inconsistent results for strict commands. Events provide deterministic execution by bypassing this inference layer.

### Configuration Steps

1. **Use an Event**
   Create an Event instead of an Action. This ensures the trigger executes based purely on logic rather than LLM context interpretation.

2. **Set Timing to 'After User'**
   Select **After User** (instead of "After Char") in the timing settings. This ensures the event triggers immediately after the user sends a message, before the character generates a reply. This is crucial for reactive events.

3. **Use Regex Matching**
   Input your regex pattern in the **Match** field. Regex matching allows for more flexible pattern detection compared to simple string matching, enabling complex command structures.

---

*Extracted from Discord. Primary contributor: sraura*