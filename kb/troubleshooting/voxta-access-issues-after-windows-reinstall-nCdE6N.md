---
id: nCdE6NdDrisPh9sPBDwX-
slug: voxta-access-issues-after-windows-reinstall-nCdE6N
type: troubleshooting
title: Voxta Access Issues After Windows Reinstall
topics:
  - troubleshooting
  - setup
keywords:
  - permissions
  - windows reinstall
  - secondary drive
  - SID
  - access denied
confidence: 0.8
authority: 0.2
contributor: futurestorm
sources: []
created: 2025-12-22T22:53:14.002Z
updated: 2025-12-22T22:53:14.002Z
---

# Voxta Access Issues After Windows Reinstall

> Fix permission issues caused by old User SIDs when running Voxta on a secondary drive after an OS reinstall.

## Answer

If you are running Voxta from a secondary drive after a Windows reinstall, the folder permissions may still be associated with the User SIDs from the old Windows installation.

**Solution:**
1. Navigate to your Voxta installation folder.
2. Right-click and select **Properties** > **Security**.
3. Check the permissions and ensure your current Windows user account has full ownership and control over the folder.

---

*Extracted from Discord. Primary contributor: futurestorm*