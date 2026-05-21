---
id: mWf3hTj4gPZwetdgI47HQ
slug: fix-unknown-message-type-moduleruntimeinstances-in-virt-a-ma-mWf3hT
type: troubleshooting
title: "Fix 'Unknown message type: moduleRuntimeInstances' in Virt-A-Mate"
topics:
  - troubleshooting
  - integrations
keywords:
  - moduleRuntimeInstances
  - VaM
  - Virt-A-Mate
  - plugin version
  - Acidbubbles
  - var files
confidence: 0.95
authority: 0.2
contributor: acidbubbles
sources: []
created: 2025-12-22T23:08:24.960Z
updated: 2025-12-22T23:08:24.960Z
---

# Fix 'Unknown message type: moduleRuntimeInstances' in Virt-A-Mate

> Resolve the 'moduleRuntimeInstances' error by removing duplicate or old Voxta .var files from the AddonPackages folder.

## Answer

This error usually indicates that an older version of the Voxta plugin is still being loaded by Virt-A-Mate, causing a version mismatch with the server.

**Solution:**
1. Navigate to your Virt-A-Mate `AddonPackages` folder.
2. Search for files named `Acidbubbles.Voxta.*.var`.
3. Delete any older versions of the `.var` file, ensuring only the single, latest version remains.

---

*Extracted from Discord. Primary contributor: acidbubbles*