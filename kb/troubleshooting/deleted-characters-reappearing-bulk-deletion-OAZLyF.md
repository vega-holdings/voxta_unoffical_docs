---
id: OAZLyFd7LU8UJwRw3yw3K
slug: deleted-characters-reappearing-bulk-deletion-OAZLyF
type: troubleshooting
title: Deleted Characters Reappearing & Bulk Deletion
topics:
  - troubleshooting
  - configuration
keywords:
  - deleted characters
  - ghost characters
  - database
  - voxta.db
  - packages
  - bulk delete
confidence: 0.8
authority: 0.2
contributor: exorius84
sources:
  - messageId: "1348723831015084093"
    author: exorius84
    timestamp: 2025-12-22T21:24:17.498Z
    url: ""
  - messageId: "1348727660791988245"
    author: exorius84
    timestamp: 2025-12-22T21:24:17.498Z
    url: ""
created: 2025-12-22T21:24:17.498Z
updated: 2025-12-22T21:24:17.498Z
---

# Deleted Characters Reappearing & Bulk Deletion

> Explains that manual folder deletion fails due to database persistence and outlines the Package method for bulk deletion.

## Answer

### Cause of Reappearing Characters
Manually deleting character folders from the disk does not fully remove them because character definitions and settings are stored in the `Data/Voxta.db` database file. Deleting only the folders leaves "ghost" entries (often with blank avatars) in the database.

### Bulk Deletion Method
The recommended way to bulk delete characters or resources is via **Packages**:
1. Create a new Package in the Studio menu.
2. Assign the characters you wish to remove to that package.
3. Delete the package.

*Note: While official documentation states deleting a package deletes its contents, some users have reported issues where characters persist even after this step, indicating a potential bug in specific versions.*

---

*Extracted from Discord. Primary contributor: exorius84*