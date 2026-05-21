---
id: llTExZKhMMV8L5vfIEdLX
slug: manual-pip-commands-and-dependency-reversion-llTExZ
type: troubleshooting
title: Manual Pip Commands and Dependency Reversion
topics:
  - troubleshooting
  - scripting
keywords:
  - pip
  - python
  - dependencies
  - reinstall
  - transformers
  - Florence-2
  - Coqui
confidence: 0.9
authority: 0.2
contributor: caz2727
sources:
  - messageId: "1405233897226113066"
    author: caz2727
    timestamp: 2025-12-22T23:26:20.284Z
    url: ""
created: 2025-12-22T23:26:20.284Z
updated: 2025-12-22T23:26:20.284Z
---

# Manual Pip Commands and Dependency Reversion

> Instructions for accessing the Voxta Python environment to run manual pip commands and how to revert changes.

## Answer

To manually run pip commands (e.g. to apply a specific fix or update a package):

1. Open a command prompt in the Voxta installation directory.
2. Run the Python environment batch file. The path may vary by version, for example: `Data\Python\python-3.12.9-amd64\voxta-python.bat`.
3. Enter your `pip` command.
4. Restart Voxta.

**Warning:** Modifying shared packages (like `transformers`) to fix one service (e.g. Florence-2) may break other services (e.g. Coqui).

**To Revert Changes:**
Go to **Manage Services** (or Manage Modules) in the Voxta interface and click **Reinstall All Service Dependencies**.

---

*Extracted from Discord. Primary contributor: caz2727*