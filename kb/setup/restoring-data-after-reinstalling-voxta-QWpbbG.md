---
id: QWpbbG1VDUsE5klNEX3cp
slug: restoring-data-after-reinstalling-voxta-QWpbbG
type: troubleshooting
title: Restoring Data After Reinstalling Voxta
topics:
  - setup
  - troubleshooting
keywords:
  - reinstall
  - backup
  - restore
  - data folder
  - python dependencies
  - migration
confidence: 0.9
authority: 0.2
contributor: sraura
sources:
  - messageId: "1368194654964809829"
    author: sraura
    timestamp: 2025-12-22T22:39:56.589Z
    url: ""
created: 2025-12-22T22:39:56.589Z
updated: 2025-12-22T22:39:56.589Z
---

# Restoring Data After Reinstalling Voxta

> Recover data by copying the Data folder and running service installers.

## Answer

To recover your data after a reinstall:

1. Copy the contents of the `Data` folder from your old installation to the new installation folder. This preserves `Voxta.db` (containing characters and chats).
2. Start Voxta.
3. Go to **Manage Services** and click **Run All Installers** (or "Install all services dependencies").

**Note regarding Python:** You can choose to copy the existing Python folder (inside `Data`) or leave it behind. If you leave it behind, the dependency installer will recreate it. If you copy it and encounter issues, you can delete it and run the installer again.

---

*Extracted from Discord. Primary contributor: sraura*