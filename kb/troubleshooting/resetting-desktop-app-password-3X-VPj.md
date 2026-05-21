---
id: 3X-VPjEoWrr8BTpk03R9h
slug: resetting-desktop-app-password-3X-VPj
type: troubleshooting
title: Resetting Desktop App Password
topics:
  - troubleshooting
  - configuration
keywords:
  - password reset
  - forgot password
  - sqlite
  - database
  - voxta.sqlite.db
confidence: 0.8
authority: 0.2
contributor: acidbubbles
sources: []
created: 2025-12-22T22:40:39.358Z
updated: 2025-12-22T22:40:39.358Z
---

# Resetting Desktop App Password

> Workaround for resetting a lost password by clearing the password field in the SQLite database.

## Answer

There is currently no built-in password reset feature in the Desktop App. However, you can manually clear the password by editing the database file.

### Steps:
1. Download and install [DB Browser for SQLite](https://sqlitebrowser.org/).
2. Locate your Voxta database file (typically named `voxta.sqlite.db` or `Voxta.db` inside the `Data` folder).
3. Open the file with DB Browser.
4. Browse the data and find the user table.
5. Clear the content of the password field for your user.
6. Save the changes.

> **Note:** This method relies on the database being unencrypted. If full encryption is implemented in future updates, this workaround may no longer function.

---

*Extracted from Discord. Primary contributor: acidbubbles*