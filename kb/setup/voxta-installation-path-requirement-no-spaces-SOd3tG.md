---
id: SOd3tGYgFE3yjC01f7nxs
slug: voxta-installation-path-requirement-no-spaces-SOd3tG
type: troubleshooting
title: Voxta Requires Installation Path Without Spaces
topics:
  - setup
  - troubleshooting
keywords:
  - installation
  - path
  - spaces
  - directory
  - InvalidOperationException
  - folder name
  - winrar
  - zip
  - exe not opening
  - antivirus
  - permissions
confidence: 1
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T23:37:11.225Z
updated: 2025-12-23T03:05:32.303Z
---

# Voxta Requires Installation Path Without Spaces

> Voxta cannot run from a folder path that contains spaces, causing startup errors or the app only launching from archive tools. Move the installation to a simple path without spaces and check antivirus exclusions.

## Answer

# Problem

Voxta may fail to start, throw an `InvalidOperationException`, or only run when launched from WinRAR (or other archive tools) but not from File Explorer.

# Cause

Voxta cannot run from a folder path that contains spaces. This limitation affects service startup and hosting initialization. When running from WinRAR, files are extracted to a temporary directory (like `%TEMP%`) which often has no spaces, temporarily bypassing the issue.

# Solution

1. **Check the installation path** – Ensure the full path to the Voxta folder contains no spaces.
2. **Move or rename folders** – Either rename folders to remove spaces (e.g., change `Voxta desktop` to `VoxtaDesktop`) or move the entire Voxta installation to a simple path like `C:\Voxta` or `D:\Apps\Voxta`.
3. **Antivirus and permissions** – Some antivirus software may block Voxta from running in certain folders. Add an exclusion for the Voxta installation folder in your antivirus settings. Also ensure you have appropriate write permissions.

After making changes, restart Voxta.

# Additional Notes

- The error message may include `InvalidOperationException` or mention issues with service startup.
- If you continue to experience problems, verify that the folder path is short and contains no special characters besides letters, numbers, underscores, or hyphens.

---

*Extracted from Discord. Primary contributor: sraura*