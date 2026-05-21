---
id: yWbmw9TEhypWcR4sCGVFN
slug: fixing-comfyui-connection-refused-error-yWbmw9
type: troubleshooting
title: Fixing ComfyUI Connection Refused Error
topics:
  - troubleshooting
  - integrations
keywords:
  - ComfyUI
  - imagine
  - connection refused
  - port 8188
  - image generation
confidence: 0.85
authority: 0.2
contributor: jamtarts_
sources: []
created: 2025-12-22T23:36:14.538Z
updated: 2025-12-22T23:36:14.538Z
---

# Fixing ComfyUI Connection Refused Error

> Resolve connection refused errors with ComfyUI by verifying the port is set to 8188.

## Answer

This error typically indicates that Voxta cannot connect to the ComfyUI instance, often due to a port mismatch.

**Resolution:**
Ensure that ComfyUI is running and configured to listen on port `8188`. Voxta defaults to looking for ComfyUI on this port. Check the "Port: The port to listen on" setting in your ComfyUI Server-Config.

---

*Extracted from Discord. Primary contributor: jamtarts_*