---
id: avciRzHDAs05JIpVDlqJ2
slug: fixing-failed-model-downloads-during-installation-avciRz
type: troubleshooting
title: Fixing Failed Model Downloads During Installation
topics:
  - setup
  - troubleshooting
  - llm
keywords:
  - install dependencies
  - silicon maid
  - antivirus
  - manual download
  - fresh install
  - GGUF
confidence: 0.8
authority: 0.2
contributor: futurestorm
sources: []
created: 2025-12-22T23:18:08.687Z
updated: 2025-12-22T23:18:08.687Z
---

# Fixing Failed Model Downloads During Installation

> Steps to resolve failed model downloads during installation by manually downloading the default model.

## Answer

If the automatic download (typically for the **Silicon Maid** model) fails or hangs:

1. **Check Security Software:** Ensure Microsoft Security or Antivirus is not blocking the file download.
2. **Manual Download Workaround:**
   - Manually create the Hugging Face folder in your Voxta directory (default is `Data/HuggingFace`).
   - Download the model manually (e.g., [Silicon-Maid-7B-GGUF](https://huggingface.co/TheBloke/Silicon-Maid-7B-GGUF)).
   - Place the downloaded model files into the created folder.
   - Run **Install Dependencies** again to finalize the setup.

---

*Extracted from Discord. Primary contributor: futurestorm*