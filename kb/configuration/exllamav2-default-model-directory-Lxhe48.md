---
id: Lxhe48pOHquv0IgOxHOSf
slug: exllamav2-default-model-directory-Lxhe48
type: qa
title: Configuring Model Directories and Downloads
topics:
  - configuration
  - llm
  - setup
keywords:
  - model directory
  - custom path
  - HuggingFace
  - download
  - installer
  - storage
  - ExLlamaV2
  - llama.cpp
confidence: 0.9
authority: 0.2
contributor: sraura
sources:
  - messageId: "1324538507737432196"
    author: sraura
    timestamp: 2025-12-19T04:59:49.544Z
    url: ""
created: 2025-12-19T04:59:49.544Z
updated: 2025-12-23T13:49:50.081Z
---

# Configuring Model Directories and Downloads

> Voxta defaults to storing models in `Data/HuggingFace`, but allows custom directory configuration for easier management. Models can be acquired via Hugging Face or the Voxta installer.

## Answer

### Default Model Location
By default, Voxta stores models in the `Data/HuggingFace` directory relative to the installation folder.

### Configuring a Custom Directory
You can specify a custom path (e.g., `C:\Models`) in the **Models Directory** setting. This setting is available within specific service configurations, such as ExLlamaV2 or llama.cpp.

**Best Practice:** Using a custom directory outside the main Voxta folder is recommended. This prevents the need to move large model files when upgrading the server.

### Acquiring Models
To populate your model directory, you can:
*   **Download from Hugging Face:** Manually download models and place them in your configured directory.
*   **Use the Installer:** If a model was not set up during the initial installation, running the Voxta installer again allows you to select and download a model.

---

*Extracted from Discord. Primary contributor: sraura*