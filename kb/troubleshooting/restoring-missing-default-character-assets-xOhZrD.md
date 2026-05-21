---
id: xOhZrD-7JUIpVodxxyoaY
slug: restoring-missing-default-character-assets-xOhZrD
type: troubleshooting
title: Managing, Restoring, and Troubleshooting Characters in Voxta
topics:
  - troubleshooting
  - configuration
  - setup
keywords:
  - default characters
  - restore
  - update
  - bugged characters
  - delete
  - persistent
  - file path
  - resources
  - migration
  - clean install
confidence: 0.9
authority: 0.2
contributor: acidbubbles
sources: []
created: 2025-12-22T22:40:20.343Z
updated: 2025-12-23T13:49:28.391Z
---

# Managing, Restoring, and Troubleshooting Characters in Voxta

> Voxta automatically restores default characters on startup if they are missing. This guide explains how to restore or update default characters, locate their source files, and fix persistent or bugged characters using a clean installation method.

## Answer

# Managing, Restoring, and Troubleshooting Characters

Voxta includes default characters and scenarios that are treated as core content. The application automatically manages these assets, but you may need to intervene to update them or resolve database inconsistencies.

## Restoring or Updating Default Characters

Default characters (such as Catherine) and their associated assets (face animations, voice, scenario data) are automatically re-imported when the Voxta server starts if they are missing from the database.

**To restore a missing default character or update it to the latest version:**

1.  **Delete the character** from the Voxta character list.
2.  **Exit Voxta** completely.
3.  **Restart Voxta**.

Upon startup, Voxta detects the missing default character and regenerates it with the most recent definitions available in the installation files. This is the recommended method for ensuring default characters are current after a Voxta update.

*Note: This behavior is intentional. Default characters will always be restored if missing. To permanently remove a default character, you would need to modify the installation files, which is not recommended.*

## Troubleshooting Bugged or Persistent Characters

If a character persists even after deletion, appears with a blank image, or behaves erratically, you may be experiencing database inconsistencies. This often occurs after upgrading from significantly older versions.

**To resolve persistent bugged characters:**

1.  Download a fresh instance of Voxta (ensure it is the latest version).
2.  Copy the `Data` folder from your old installation to the new one. This preserves your settings and chat history while resetting the application logic.
3.  Launch the new instance.
4.  Identify the bugged characters (often indicated by blank images) and delete them manually.

## Default Character File Location

Default character definitions are stored locally within the Voxta installation directory at:

`\voxta\Resources\Characters`

Voxta checks this directory during startup. If a character listed in this directory is not found in your active character list, it is automatically imported. You can use this location to verify which characters are considered defaults or to manually inspect character files.

---

*Extracted from Discord. Primary contributor: acidbubbles*