---
id: BwrDB3GGlu77bUOlUnwfv
slug: llm-temperature-settings-and-creativity-BwrDB3
type: qa
title: LLM Temperature Settings and Creativity
topics:
  - llm
  - configuration
keywords:
  - temperature
  - creativity
  - hallucinations
  - parameters
  - huggingface
confidence: 0.8
authority: 0.2
contributor: sraura
sources:
  - messageId: "1360585151272189952"
    author: sraura
    timestamp: 2025-12-22T22:36:20.596Z
    url: ""
  - messageId: "1360587151489634446"
    author: sraura
    timestamp: 2025-12-22T22:36:20.596Z
    url: ""
created: 2025-12-22T22:36:20.596Z
updated: 2025-12-22T22:36:20.596Z
---

# LLM Temperature Settings and Creativity

> Explanation of how Temperature affects LLM creativity and recommended values.

## Answer

Temperature is model-dependent, but generally controls the randomness of responses:

* **Low Temperature (near 0):** Deterministic and predictable. The model chooses the most likely words, which can seem "boring" or repetitive.
* **High Temperature (above 1.0):** Increases creativity and randomness. However, setting it too high (e.g., 1.5+) can lead to hallucinations or nonsensical output.
* **Optimal Values:** While 1.0 is a common default in some interfaces, official documentation suggests values around **0.7** for a reasonable balance. Some specific models may perform better with higher values (e.g., 1.2), so checking the model's HuggingFace page for recommended settings is often best.

---

*Extracted from Discord. Primary contributor: sraura*