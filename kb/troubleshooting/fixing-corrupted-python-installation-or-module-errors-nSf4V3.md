---
id: nSf4V3g4aBiRNxsNkHbFh
slug: fixing-corrupted-python-installation-or-module-errors-nSf4V3
type: troubleshooting
title: Fixing Corrupted Python Installation or Module Errors
topics:
  - troubleshooting
  - setup
keywords:
  - python
  - corrupted
  - install
  - tokenizer
  - modules
  - stack trace
confidence: 1
authority: 0.2
sources: []
created: 2025-12-22T20:06:01.421Z
updated: 2025-12-22T20:06:01.421Z
---

# Fixing Corrupted Python Installation or Module Errors

> Steps to reinstall the internal Python environment if corrupted.

## Answer

If logs indicate a corrupted Python install (e.g., due to closing the application during installation) or missing modules like `tokenizer`:

1. Exit Voxta.
2. Delete the `Data/Python` folder in your Voxta directory.
3. Launch Voxta again.
4. Navigate to **Modules** on the left sidebar.
5. Click **Install All** to cleanly reinstall the necessary components.

---

*Extracted from Discord. Primary contributor: *