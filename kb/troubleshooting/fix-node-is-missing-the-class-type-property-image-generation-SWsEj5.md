---
id: SWsEj5XfsYyhpFQqgQK95
slug: fix-node-is-missing-the-class-type-property-image-generation-SWsEj5
type: troubleshooting
title: Fix 'node is missing the class_type property' Image Generation Error
topics:
  - troubleshooting
  - integrations
keywords:
  - image generation
  - workflow
  - comfyui
  - class_type
  - node missing
  - autofill
  - mapping
confidence: 0.9
authority: 0.2
contributor: seablacklord
sources: []
created: 2025-12-22T23:51:25.587Z
updated: 2025-12-22T23:51:25.587Z
---

# Fix 'node is missing the class_type property' Image Generation Error

> Resolve the 'missing class_type property' error by using the autofill feature to map workflow nodes.

## Answer

This error occurs when the image generation workflow (e.g., ComfyUI) is not properly mapped in Voxta. 

To fix this:
1. Go to your image generation service settings in Voxta.
2. Ensure the workflow nodes are correctly mapped (Positive Prompt, Negative Prompt, Width, Height, etc.).
3. Use the **Autofill** tab/feature to automatically detect and map the nodes rather than entering them manually.

---

*Extracted from Discord. Primary contributor: seablacklord*