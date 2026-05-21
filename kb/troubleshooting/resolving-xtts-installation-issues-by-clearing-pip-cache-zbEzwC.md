---
id: zbEzwClnGnD_tvXMKUqK-
slug: resolving-xtts-installation-issues-by-clearing-pip-cache-zbEzwC
type: troubleshooting
title: Resolving XTTS Installation Issues by Clearing Pip Cache
topics:
  - troubleshooting
  - integrations
keywords:
  - pip
  - cache
  - XTTS
  - python
  - install
  - dependencies
confidence: 0.8
authority: 0.2
contributor: lapiro
sources: []
created: 2025-12-23T00:22:07.156Z
updated: 2025-12-23T00:22:07.156Z
---

# Resolving XTTS Installation Issues by Clearing Pip Cache

> Instructions to clear the pip cache and reinstall Python dependencies to fix XTTS installation errors.

## Answer

If XTTS packages are not installing correctly, your local pip cache may be corrupted. 

**Steps to resolve:**
1. **Clear Pip Cache**:
   - Press `Win + R`.
   - Paste `%LocalAppData%\pip\cache` and press Enter.
   - Delete all contents of this folder.
2. **Reset Python**:
   - Delete the `Python` folder in your Voxta directory (usually under `Data/`).
3. **Reinstall**:
   - Run the installer/updater again to fetch fresh files.

---

*Extracted from Discord. Primary contributor: lapiro*