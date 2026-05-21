---
id: T9p1PDkOKzvBlHizozwHX
slug: ai-unresponsive-with-chain-of-thought-and-continuations-T9p1PD
type: troubleshooting
title: AI Unresponsive with Chain of Thought and Continuations
topics:
  - troubleshooting
  - configuration
  - performance
keywords:
  - ChainOfThought
  - ThinkPassBeforeReply
  - ReviewPassBeforeReply
  - Continuations
  - Auto Continue
  - unresponsive
  - slow
  - stand still
confidence: 0.8
authority: 0.2
contributor: nova8888
sources:
  - messageId: "1423098510210760807"
    author: nova8888
    timestamp: 2025-12-22T23:32:58.408Z
    url: ""
  - messageId: "1423099215902670858"
    author: nova8888
    timestamp: 2025-12-22T23:32:58.408Z
    url: ""
created: 2025-12-22T23:32:58.408Z
updated: 2025-12-22T23:32:58.408Z
---

# AI Unresponsive with Chain of Thought and Continuations

> Disabling Chain of Thought and Continuations fixes AI unresponsiveness.

## Answer

Enabling multiple processing-intensive augmentations simultaneously can cause the AI to become unresponsive or extremely slow due to the heavy inference load. 

Specifically, the combination of the following settings was reported to cause the AI to "stand still":
- `ChainOfThought: ThinkPassBeforeReply`
- `ChainOfThought: ReviewPassBeforeReply`
- `Continuations: Idle Follow-Up`
- `Continuations: Auto Continue`

**Solution:** Disable these augmentations (particularly Chain of Thought or Auto Continue) to restore responsiveness.

---

*Extracted from Discord. Primary contributor: nova8888*