---
id: lvy4JG2rv-GkQzeztDWso
slug: pytorch-deepspeed-version-mismatch-error-lvy4JG
type: troubleshooting
title: Resolve PyTorch/DeepSpeed Version Mismatch for XTTS (Coqui) in Voxta
topics:
  - troubleshooting
  - configuration
keywords:
  - PyTorch
  - DeepSpeed
  - version mismatch
  - XTTS
  - Coqui
  - error 500
  - torch
  - v140
  - Voxta
confidence: 0.8
authority: 0.2
contributor: caz2727
sources: []
created: 2025-12-22T20:45:06.586Z
updated: 2025-12-23T02:33:33.879Z
---

# Resolve PyTorch/DeepSpeed Version Mismatch for XTTS (Coqui) in Voxta

> After updating Voxta (e.g., to v140), you may encounter a version mismatch error between PyTorch and DeepSpeed when using XTTS (Coqui). Disabling DeepSpeed in the service settings resolves the issue with negligible impact on generation speed.

## Answer

## Description

After updating Voxta to version v140 (or later), you might encounter an error when using XTTS (Coqui) that mentions a mismatch between installed and runtime PyTorch versions (e.g., `Install torch version=2.3, Runtime torch version=2.5`). This can also manifest as an HTTP 500 error from the service.

## Cause

The error is caused by a version conflict between the DeepSpeed library (compiled for a specific PyTorch version) and the PyTorch version currently installed. Voxta's update may change the underlying PyTorch version, leading to this incompatibility.

## Solution

Disable DeepSpeed in the XTTS (Coqui) service settings:

1. Open Voxta and navigate to the **XTTS (Coqui)** service settings.
2. Locate the **DeepSpeed** option and disable it (toggle off).
3. Click the **Install** (or **Reinstall**) button to apply the change.
4. **Save** the configuration.

After disabling DeepSpeed, the service should start without the version mismatch error.

## Additional Notes

- Disabling DeepSpeed has a negligible impact on generation speed for most users.
- This workaround is recommended if you encounter the specific PyTorch/DeepSpeed version mismatch error. If the issue persists, ensure you have the latest Voxta updates or check the logs for further details.

---

*Extracted from Discord. Primary contributor: caz2727*