---
id: oxAvyweH0uQjrPHJi3z69
slug: connecting-to-virt-a-mate-on-network-drive-oxAvyw
type: troubleshooting
title: Connecting to Virt-A-Mate on Network Drive
topics:
  - troubleshooting
  - integrations
keywords:
  - Virt-A-Mate
  - VaM
  - network drive
  - UNC path
  - mounting
  - connection
confidence: 0.8
authority: 0.2
contributor: big_guy_for_thee
sources: []
created: 2025-12-22T21:05:07.763Z
updated: 2025-12-22T21:05:07.763Z
---

# Connecting to Virt-A-Mate on Network Drive

> Mount network locations as mapped drives to resolve UNC path issues with Virt-A-Mate integration.

## Answer

If Voxta fails to resolve the path to Virt-A-Mate using a UNC network path (e.g., `//Server/Share`) or adds extra slashes, try mounting the network location as a mapped network drive in Windows Explorer. Point Voxta to the assigned drive letter instead of the direct network address.

---

*Extracted from Discord. Primary contributor: big_guy_for_thee*