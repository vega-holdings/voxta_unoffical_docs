---
id: g0o3xQbgo_uBpFnc7aON5
slug: using-hf-prefix-in-model-paths-g0o3xQ
type: tip
title: Using 'hf:' Prefix in Model Paths
topics:
  - configuration
  - setup
keywords:
  - hugging face
  - hf prefix
  - model path
  - local model
  - download
confidence: 0.9
authority: 0.2
contributor: mrdragonfox
sources: []
created: 2025-12-22T23:16:35.078Z
updated: 2025-12-22T23:16:35.078Z
---

# Using 'hf:' Prefix in Model Paths

> The 'hf:' prefix is only needed for downloading models from Hugging Face, not for local files.

## Answer

When configuring model paths (such as for Florence-2), the `hf:` prefix is used specifically to trigger a download from Hugging Face (e.g., `hf:microsoft/Florence-2-large`). 

If the model files are already present in the correct local directory (e.g., `Data/Models/Florence-2`), you do not need to use the `hf:` prefix.

---

*Extracted from Discord. Primary contributor: mrdragonfox*