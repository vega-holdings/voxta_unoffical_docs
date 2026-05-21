---
id: B2KS1Ee0gXJc5Rp0YTFOP
slug: duplicate-modules-after-update-B2KS1E
type: troubleshooting
title: Duplicate Modules After Update
topics:
  - setup
  - troubleshooting
keywords:
  - update
  - upgrade
  - duplicate modules
  - double entries
  - data folder
  - v140
confidence: 0.9
authority: 0.2
contributor: caz2727
sources:
  - messageId: "1343252479315546306"
    author: caz2727
    timestamp: 2025-12-22T20:58:02.835Z
    url: ""
created: 2025-12-22T20:58:02.835Z
updated: 2025-12-22T20:58:02.835Z
---

# Duplicate Modules After Update

> Duplicate modules are caused by installing services before migrating the Data folder during an update.

## Answer

Duplicate modules typically appear if the new version of Voxta is launched and services are installed **before** copying the `Data` folder from the previous installation.

**Solution:**
1. Ensure you follow the correct upgrade order: Extract files -> Copy `Data` folder -> Launch Voxta -> Update Services.
2. If duplicates exist, you may need to perform a clean install following the correct order.

---

*Extracted from Discord. Primary contributor: caz2727*