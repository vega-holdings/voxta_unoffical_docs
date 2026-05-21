---
id: SYtr51R-cEeXcHOkE0v1U
slug: general-installation-troubleshooting-steps-SYtr51
type: troubleshooting
title: General Installation Troubleshooting Steps
topics:
  - setup
  - troubleshooting
keywords:
  - installer
  - antivirus
  - temp folder
  - network drive
  - quarantine
confidence: 0.7
authority: 0.2
contributor: futurestorm
sources: []
created: 2025-12-23T00:06:09.167Z
updated: 2025-12-23T00:06:09.167Z
---

# General Installation Troubleshooting Steps

> Standard troubleshooting steps for installation failures involving temp files, antivirus, and drive location.

## Answer

If you encounter issues during installation, consider the following troubleshooting steps:

1. **Clear Temp Folder**: Completely empty your temporary files folder. If some files are in use and cannot be deleted, it is safe to skip them.
2. **Antivirus Settings**: Try running the installer with your Antivirus (AV) switched off. Additionally, check your AV quarantine to ensure it hasn't blocked or removed required installer files.
3. **Installation Location**: 
   - Do not install from a remote or network drive.
   - Ensure the installation path is on a local drive.
   - Verify the path does not contain spaces (e.g., use `C:\Voxta` instead of `C:\Program Files\Voxta`).

---

*Extracted from Discord. Primary contributor: futurestorm*