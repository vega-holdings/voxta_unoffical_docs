---
id: ky-aD6DDdb6ZycJnhlXRI
slug: installer-issues-after-manual-deletion-ky-aD6
type: troubleshooting
title: Installer issues after manual deletion
topics:
  - setup
  - troubleshooting
keywords:
  - installer
  - uninstaller
  - reinstall
  - overwrite
  - update
confidence: 0.7
authority: 0.2
contributor: lapiro
sources: []
created: 2025-12-22T23:35:38.091Z
updated: 2025-12-22T23:35:38.091Z
---

# Installer issues after manual deletion

> Installer glitches caused by manual folder deletion; proper uninstallation and update procedures.

## Answer

This issue typically occurs if Voxta was previously removed by manually deleting the installation folder rather than running the proper uninstaller. The system registry may still consider Voxta installed.

**Solution:**
1. Always uninstall Voxta using `uninstaller.exe` or via `Add or Remove Programs` in Windows to ensure a clean state.
2. When reinstalling or updating, official documentation recommends installing into a **new empty folder** (do not overwrite existing installations) and copying the `Data` folder from the old version to preserve settings.

---

*Extracted from Discord. Primary contributor: lapiro*