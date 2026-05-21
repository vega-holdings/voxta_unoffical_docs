---
id: Mpx-zzjh5zD9FiqsWmQoD
slug: comfyui-image-distortion-fix-Mpx-zz
type: troubleshooting
title: ComfyUI Image Distortion Fix
topics:
  - integrations
  - troubleshooting
keywords:
  - ComfyUI
  - SD 1.5
  - SDXL
  - resolution
  - checkpoint
  - image generation
  - artifacts
confidence: 0.8
authority: 0.2
contributor: cinnabrad
sources: []
created: 2025-12-22T23:33:44.126Z
updated: 2025-12-22T23:33:44.126Z
---

# ComfyUI Image Distortion Fix

> Fix image distortion in ComfyUI by matching resolution to model type (512x512 for SD 1.5, higher for SDXL).

## Answer

This issue typically occurs when using a Stable Diffusion 1.5 checkpoint at a resolution higher than it supports.

**Solutions:**
*   **For SD 1.5 models:** Set the generation resolution to **512x512**.
*   **For higher resolutions:** Switch to an **SDXL** model checkpoint.

---

*Extracted from Discord. Primary contributor: cinnabrad*