---
id: xbkwqDrZOwR0q-9Ffag5Y
slug: secondary-character-stuck-as-main-role-xbkwqD
type: troubleshooting
title: Secondary Character Stuck as Main Role
topics:
  - troubleshooting
  - configuration
keywords:
  - secondary character
  - main character
  - greyed out
  - remove character
  - scenario roles
  - load order
  - bug
confidence: 0.9
authority: 0.2
contributor: sraura
sources:
  - messageId: "1368314703213887600"
    author: sraura
    timestamp: 2025-12-22T22:40:14.179Z
    url: ""
created: 2025-12-22T22:40:14.179Z
updated: 2025-12-22T22:40:14.179Z
---

# Secondary Character Stuck as Main Role

> Explanation for why secondary characters sometimes become unremovable main characters due to load order bugs.

## Answer

This is a known issue where scenario characters may not load in the correct order, causing a secondary character to be recognized as the "main" character (which cannot be removed). This behavior is addressed in a patch fix: `Fix scenario characters not loaded in order, resulting in the "main" character not always being the first`.

---

*Extracted from Discord. Primary contributor: sraura*