---
id: fH-kDhtcJHXGshjnn7M4l
slug: using-loras-for-image-generation-fH-kDh
type: tip
title: Using LoRAs for Image Generation
topics:
  - configuration
  - integrations
keywords:
  - LoRA
  - image generation
  - weights
  - CFG scale
  - samplers
  - workflow
confidence: 0.5
authority: 0.2
contributor: .starmoose
sources: []
created: 2025-12-22T23:42:33.227Z
updated: 2025-12-22T23:42:33.227Z
---

# Using LoRAs for Image Generation

> Best practices for using LoRAs in image generation, including advice on weights, CFG scale, and samplers.

## Answer

When using LoRAs for image generation (typically via ComfyUI workflows in Voxta), consider the following best practices:

*   **Mix and Match**: You can use multiple LoRAs simultaneously to achieve unique results.
*   **Weights**: Pay close attention to LoRA weights, particularly regarding faces and fine details. Refer to the specific LoRA's README for recommended weight settings.
*   **CFG Scale**: Adjust the CFG scale as needed based on the model or LoRA requirements.
*   **Samplers**: The default sampler provided in the workflow is generally a good starting point, though experimenting with others can yield different styles.

---

*Extracted from Discord. Primary contributor: .starmoose*