---
id: PzdmJh78zLmpzNT74uYCp
slug: koboldcpp-model-download-location-PzdmJh
type: qa
title: KoboldCpp Model Download Location
topics:
  - configuration
  - integrations
keywords:
  - koboldcpp
  - download location
  - hugging face
  - folder
  - path
confidence: 0.6
authority: 0.2
contributor: sounderstanding
sources: []
created: 2025-12-23T00:03:41.187Z
updated: 2025-12-23T00:03:41.187Z
---

# KoboldCpp Model Download Location

> KoboldCpp models download to the executable's directory.

## Answer

When using the KoboldCpp service, models downloaded via the Hugging Face downloader are stored in the directory where the `koboldcpp.exe` executable is located (which is user-set for autolaunch). This behavior may differ from other services like Llama.cpp or ExLlamaV2, which typically default to `Data/HuggingFace`.

---

*Extracted from Discord. Primary contributor: sounderstanding*