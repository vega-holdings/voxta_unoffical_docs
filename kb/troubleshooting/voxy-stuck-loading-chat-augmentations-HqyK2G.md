---
id: HqyK2GIfdnnF0tfzd1IBv
slug: voxy-stuck-loading-chat-augmentations-HqyK2G
type: troubleshooting
title: Voxy Stuck Loading Chat Augmentations
topics:
  - troubleshooting
  - configuration
keywords:
  - voxy
  - loading
  - augmentations
  - vision
  - flashcap
  - winsdk
  - stuck
confidence: 0.8
authority: 0.2
contributor: gmouser26
sources:
  - messageId: "1333404180198723604"
    author: gmouser26
    timestamp: 2025-12-22T19:54:53.364Z
    url: ""
  - messageId: "1333405849091178580"
    author: gmouser26
    timestamp: 2025-12-22T19:54:53.364Z
    url: ""
created: 2025-12-22T19:54:53.364Z
updated: 2025-12-22T19:54:53.364Z
---

# Voxy Stuck Loading Chat Augmentations

> Disable vision-related plugins (Flashcap, WinSDK, Vision Utilities) if Voxy hangs on loading augmentations.

## Answer

If Voxy hangs while loading chat augmentations, it may be due to broken vision dependencies or conflicting plugins. 

One user resolved this by disabling the following services:
- Flashcap
- WinSDK
- Vision Utilities

This was specifically helpful when the user had a broken vision installation (v137).

---

*Extracted from Discord. Primary contributor: gmouser26*