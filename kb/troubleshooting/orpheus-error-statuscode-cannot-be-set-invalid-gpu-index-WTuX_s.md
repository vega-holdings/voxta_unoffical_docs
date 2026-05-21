---
id: WTuX_sdw24vWojvUXIdJZ
slug: orpheus-error-statuscode-cannot-be-set-invalid-gpu-index-WTuX_s
type: troubleshooting
title: "Orpheus Error: StatusCode cannot be set (Invalid GPU Index)"
topics:
  - troubleshooting
  - configuration
keywords:
  - Orpheus
  - GPU
  - InvalidOperationException
  - StatusCode cannot be set
  - crash
confidence: 0.9
authority: 0.2
contributor: lebofly
sources: []
created: 2025-12-22T22:53:59.174Z
updated: 2025-12-22T22:53:59.174Z
---

# Orpheus Error: StatusCode cannot be set (Invalid GPU Index)

> Fixes an InvalidOperationException in Orpheus caused by setting an invalid GPU index.

## Answer

This error can occur due to an invalid GPU index configuration in the Orpheus settings.

**Resolution:**
* Ensure the GPU index is set correctly for your hardware (e.g., set to `0` for the primary GPU).
* **Note:** Users have reported that the UI caption may incorrectly state "0 means CPU". In practice, setting the value to `0` often selects the first GPU (GPU 0), while setting it to `1` (when only one GPU exists) causes the crash.

---

*Extracted from Discord. Primary contributor: lebofly*