---
id: vtcA-aCwE2rSW3LOR5q1q
slug: fix-comfyui-no-history-found-for-prompt-id-error-vtcA-a
type: troubleshooting
title: Fix ComfyUI 'No history found for prompt ID' Error
topics:
  - troubleshooting
  - integrations
keywords:
  - ComfyUI
  - image generation
  - port
  - No history found
  - error
confidence: 0.9
authority: 0.2
contributor: devwulf
sources: []
created: 2025-12-23T00:05:30.044Z
updated: 2025-12-23T00:05:30.044Z
---

# Fix ComfyUI 'No history found for prompt ID' Error

> Resolve the 'No history found' error by ensuring the ComfyUI port in Voxta settings matches the running instance.

## Answer

This error can occur if the ComfyUI instance is running on a different port than what is configured in Voxta.

**Solution:**
1. Verify the port number your ComfyUI instance is currently using (check the ComfyUI console output).
2. Open the **ComfyUI service settings** in Voxta.
3. Update the port configuration to match the active ComfyUI port.

---

*Extracted from Discord. Primary contributor: devwulf*