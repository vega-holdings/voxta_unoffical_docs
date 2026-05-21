---
id: mXzlw4dSgDWNzSsEYy7Nf
slug: installer-data-folder-preservation-mechanism-mXzlw4
type: reference
title: Installer Data Folder Preservation Mechanism
topics:
  - setup
  - configuration
keywords:
  - installer
  - update
  - data folder
  - Voxta.sqlite.db
  - overwrite
  - preservation
confidence: 0.8
authority: 0.2
contributor: lapiro
sources: []
created: 2025-12-22T23:29:35.946Z
updated: 2025-12-22T23:29:35.946Z
---

# Installer Data Folder Preservation Mechanism

> The Voxta installer preserves user data by temporarily renaming the Data folder during installation.

## Answer

The Voxta installer is designed to preserve the `Data` folder (which includes `Voxta.sqlite.db`) when running over an existing installation. It operates by temporarily renaming the `Data` folder to `_data` during the installation process and renaming it back to `data` afterwards. Other loose files in the directory are typically overwritten.

---

*Extracted from Discord. Primary contributor: lapiro*