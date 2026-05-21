---
id: bqbVUgQDdsPTYoSqQQyF_
slug: nvidia-rtx-5090-50xx-series-compatibility-bqbVUg
type: troubleshooting
title: NVIDIA RTX 50-Series (Blackwell) GPU Compatibility
topics:
  - troubleshooting
  - setup
  - configuration
  - hardware
keywords:
  - RTX 5090
  - RTX 50-series
  - Blackwell
  - PyTorch
  - CUDA
  - sm_120
  - compatibility
  - GPU
  - llama.cpp
  - ExLlamaV2
  - update
confidence: 0.9
authority: 0.2
contributor: sraura
sources:
  - messageId: "1357390764094787788"
    author: sraura
    timestamp: 2025-12-22T22:02:42.278Z
    url: ""
created: 2025-12-22T22:02:42.278Z
updated: 2025-12-23T13:41:34.967Z
---

# NVIDIA RTX 50-Series (Blackwell) GPU Compatibility

> RTX 50-series GPUs require updated PyTorch dependencies to function with Voxta. Older versions are incompatible, but updating to the latest release and running all installers resolves the issue.

## Answer

# NVIDIA RTX 50-Series (Blackwell) GPU Compatibility

If you are using an NVIDIA RTX 50-series GPU (such as the RTX 5090 or 5080) and encountering errors, it is likely due to a version mismatch between your Voxta installation and the required PyTorch dependencies.

## The Issue

The RTX 50-series (Blackwell architecture) introduces the `sm_120` CUDA compute capability. Older versions of Voxta bundle a version of PyTorch that does not include support for this architecture.

You may encounter an error similar to:

```
NVIDIA GeForce RTX 5090 with CUDA capability sm_120 is not compatible with the current PyTorch installation
```

### Affected Services

In incompatible versions, the following services typically fail:
*   **ExLlamaV2:** Fails with CUDA error.
*   **XTTS / Orpheus:** Fails to initialize.

## Workaround

While waiting for a full update, users have reported that **llama.cpp** works for text generation on RTX 50-series GPUs, even when other backends fail.

## Solution

To resolve compatibility issues with RTX 50-series cards, you must update Voxta to the latest version.

1.  **Upgrade the Voxta Server** to the latest release.
2.  Navigate to the **Manage Services** tab.
3.  Click **Run All Installers**.

This ensures that Python dependencies, including PyTorch, are updated to versions (specifically PyTorch 2.7 or newer) that support the new hardware architecture.

*Note: If you are on a version prior to the update that includes PyTorch 2.7, there is no other workaround for services like F5-TTS or Whisper other than using llama.cpp for text generation.*

---

*Extracted from Discord. Primary contributor: sraura*