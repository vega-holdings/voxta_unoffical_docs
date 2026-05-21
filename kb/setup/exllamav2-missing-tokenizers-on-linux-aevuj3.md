---
id: aevuj3keAZXYJxyHdB_D-
slug: exllamav2-missing-tokenizers-on-linux-aevuj3
type: troubleshooting
title: ExLlamaV2 Missing Tokenizers on Linux
topics:
  - setup
  - troubleshooting
  - llm
keywords:
  - linux
  - exllamav2
  - tokenizers
  - install
  - pip
  - requirements
confidence: 0.8
authority: 0.2
contributor: awwalker.
sources: []
created: 2025-12-19T05:56:57.363Z
updated: 2025-12-19T05:56:57.363Z
---

# ExLlamaV2 Missing Tokenizers on Linux

> Fix for missing tokenizers when installing ExLlamaV2 on Linux.

## Answer

When installing ExLlamaV2 on Linux, the `tokenizers` package may not install automatically even when following the documentation.

To resolve this:
1. Activate the virtual environment (venv).
2. Manually install the `tokenizers` package.
3. Run `pip install -r requirements.txt` (and apply constraints if necessary) to ensure all dependencies are correctly installed.

---

*Extracted from Discord. Primary contributor: awwalker.*