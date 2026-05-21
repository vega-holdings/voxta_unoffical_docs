---
id: RQJ_99shgIXdLbmGmesIx
slug: missing-buttons-in-vam-scene-RQJ_99
type: troubleshooting
title: Missing Buttons in VAM Scene
topics:
  - troubleshooting
  - integrations
keywords:
  - VAM
  - Virt-a-Mate
  - buttons
  - MacGruber
  - clist
  - addonpackages
confidence: 0.8
authority: 0.2
contributor: futurestorm
sources: []
created: 2025-12-22T23:39:44.345Z
updated: 2025-12-22T23:39:44.345Z
---

# Missing Buttons in VAM Scene

> Fix for missing buttons in VAM scenes involving dependencies and package corruption.

## Answer

This issue is often caused by missing dependencies (commonly MacGruber plugins) or a corrupt package list (`clist`).

**Potential Solutions:**
1. Delete the scene file from your `addonpackages` folder and download it again to resolve potential corruption.
2. Ensure you have all required dependencies installed.
3. Remove old versions of VAM plugins, as they can cause bloat and conflicts.

---

*Extracted from Discord. Primary contributor: futurestorm*