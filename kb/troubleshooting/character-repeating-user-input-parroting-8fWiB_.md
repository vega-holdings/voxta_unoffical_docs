---
id: 8fWiB_9COD67CNui82Ytw
slug: character-repeating-user-input-parroting-8fWiB_
type: troubleshooting
title: Troubleshooting AI Repetition and Parroting
topics:
  - troubleshooting
  - llm
  - configuration
  - integrations
keywords:
  - parroting
  - repeating
  - repetition penalty
  - voxta cloud
  - context size
  - VAM
  - temperature
  - looping
  - model selection
confidence: 0.9
authority: 0.2
contributor: _kinkyk9
sources:
  - messageId: "1439716963545780335"
    author: _kinkyk9
    timestamp: 2025-12-22T23:54:07.924Z
    url: ""
  - messageId: "1439917559246880838"
    author: _kinkyk9
    timestamp: 2025-12-22T23:54:07.924Z
    url: ""
created: 2025-12-22T23:54:07.924Z
updated: 2025-12-23T13:40:27.380Z
---

# Troubleshooting AI Repetition and Parroting

> AI repetition or 'parroting' is typically caused by LLM model limitations or generation settings rather than plugin conflicts. This issue can usually be resolved by adjusting repetition penalties, context size, temperature, or switching to a different model.

## Answer

Parroting occurs when an AI character starts repeating the user's input or enters a loop of repetitive phrases. This behavior is generally caused by the specific LLM model being used, suboptimal parameter settings, or biases in the model's training data. It is rarely caused by plugin conflicts (e.g., in VAM) or timeline commands.

## Common Causes

*   **Model Limitations:** Some models are inherently more prone to repetition or looping than others.
*   **Parameter Settings:** Insufficient repetition penalties, incorrect context sizes, or temperature settings can lead to repetitive outputs.
*   **Training Data:** Specific repetitive phrases often stem from biases present in the model's original training data.

## Solutions

### 1. Adjust Repetition Penalty
Increase the `Repetition_penalty` setting (values greater than `1.00` discourage repetition). You can also adjust the `Repetition_penalty_range` to control how far back the model looks for repetitions.

### 2. Adjust Context Size
The context size determines how much conversation history the model considers.
*   If the context size is set very high, try reducing it.
*   If it is very low, try increasing it.

### 3. Adjust Temperature
Modifying the `temperature` setting can help. Voxta passes this setting to the connected LLM to influence the randomness of the output.

### 4. Change the Model
If settings adjustments do not work, the model itself may be the issue. Switching to a different LLM model often resolves repetition problems. There is no exact science to these settings; experimentation is often required to find the optimal configuration for a specific model.

## Applying Changes in Voxta Cloud

If you are using Voxta Cloud as your Text Generation service, follow these steps to modify settings or switch models:

1.  Go to **Manage Modules** (or Manage Services).
2.  Select **Voxta Cloud** in the **Text Gen** section.
3.  Click on **Presets**.
4.  **Clone** the currently active preset to create a copy.
5.  **Edit** the new preset:
    *   To adjust repetition penalty, change the `Repetition_penalty` and optionally `Repetition_penalty_range`.
    *   To change the model, select a different model from the list.
6.  Activate the new preset.

After making adjustments, test the character to see if the behavior improves.

## Note for VAM Users

If you are experiencing repetition loops in Virt-A-Mate (VAM), this is typically tied to the **Text Gen** service (LLM) and the specific model selected. Ensure the Voxta integration is set up correctly using the [official guide](https://doc.voxta.ai/vam/adding-voxta-to-a-scene/), but prioritize adjusting the LLM settings mentioned above.

---

*Extracted from Discord. Primary contributor: _kinkyk9*