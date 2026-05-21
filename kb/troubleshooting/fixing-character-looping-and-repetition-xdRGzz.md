---
id: xdRGzzd9zBmGJESzPXsBJ
slug: fixing-character-looping-and-repetition-xdRGzz
type: troubleshooting
title: Fixing Character Looping and Repetition
topics:
  - troubleshooting
  - llm
  - configuration
keywords:
  - looping
  - repetition
  - temperature
  - model size
  - scripter
  - scenario
  - repetition_penalty
confidence: 0.9
authority: 0.2
contributor: sraura
sources:
  - messageId: "1392565922987905167"
    author: sraura
    timestamp: 2025-12-22T23:07:02.645Z
    url: ""
  - messageId: "1392573150499438722"
    author: sraura
    timestamp: 2025-12-22T23:07:02.645Z
    url: ""
created: 2025-12-22T23:07:02.645Z
updated: 2025-12-22T23:07:02.645Z
---

# Fixing Character Looping and Repetition

> Resolve character looping by increasing temperature, switching to larger models, or adjusting repetition penalties.

## Answer

To prevent characters from looping or repeating themselves, consider the following adjustments:

*   **Increase Temperature:** Raising the **Temperature** (e.g., towards `0.7` or higher) increases randomness, making the model less deterministic and less likely to get stuck in a loop.
*   **Switch Models:** Larger models (e.g., 24B parameters) are generally more versatile and less prone to repetition than smaller models (e.g., 7B).
*   **Adjust Repetition Penalty:** Ensure the **Repetition_penalty** is set greater than `1.00`. This explicitly penalizes the model for repeating tokens.
*   **Check Scene Type:** Older VAM scenes using 'scripter' logic may be inherently less varied than newer scenes using the 'scenario' system. In these cases, tuning the Character Card is the primary way to influence variety.

---

*Extracted from Discord. Primary contributor: sraura*