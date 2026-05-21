---
id: XEatwaGtGXOQa8Lwi_P9P
slug: comfyui-custom-scripts-string-node-compatibility-XEatwa
type: troubleshooting
title: ComfyUI-Custom-Scripts String Node Compatibility
topics:
  - integrations
  - troubleshooting
keywords:
  - ComfyUI
  - ComfyUI-Custom-Scripts
  - string node
  - LoRA
  - workflow
confidence: 0.6
authority: 0.2
contributor: south.wind
sources: []
created: 2025-12-22T23:39:57.598Z
updated: 2025-12-22T23:39:57.598Z
---

# ComfyUI-Custom-Scripts String Node Compatibility

> The string node from ComfyUI-Custom-Scripts causes issues in Voxta workflows.

## Answer

Yes, the string node from `ComfyUI-Custom-Scripts` (specifically the variant with three separate multi-line inputs that get concatenated) has been reported to cause issues within Voxta workflows. Removing this node resolves the issue. Some LoRA loaders have also been reported as potentially problematic.

---

*Extracted from Discord. Primary contributor: south.wind*