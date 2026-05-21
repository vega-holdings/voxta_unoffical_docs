---
id: 4uSZeNxGvVo8G4s7zn-mt
slug: database-migration-error-memorybooks-name-not-null-constrain-4uSZeN
type: troubleshooting
title: "Database Migration Error: MemoryBooks.Name NOT NULL constraint"
topics:
  - troubleshooting
  - setup
keywords:
  - upgrade
  - database
  - migration
  - sqlite
  - error 19
  - memorybooks
  - crash
  - v140
  - v142
confidence: 0.9
authority: 0.2
contributor: acidbubbles
sources:
  - messageId: "1351077365467582464"
    author: acidbubbles
    timestamp: 2025-12-22T21:35:42.046Z
    url: ""
  - messageId: "1351208645328769167"
    author: acidbubbles
    timestamp: 2025-12-22T21:35:42.046Z
    url: ""
created: 2025-12-22T21:35:42.046Z
updated: 2025-12-22T21:35:42.046Z
---

# Database Migration Error: MemoryBooks.Name NOT NULL constraint

> Fix for SQLite Error 19 regarding MemoryBooks.Name during upgrades by ensuring all memory books are named in the previous version.

## Answer

This error occurs during database migration if your database contains a Memory Book with a `null` name. This is typically found in very old databases where such constraints were not enforced.

### Solution
1. Revert to the previous working version of Voxta.
2. Open the application and inspect your **Memory Books**.
3. Ensure every Memory Book has a valid name.
4. Save your changes and attempt the upgrade again.

---

*Extracted from Discord. Primary contributor: acidbubbles*