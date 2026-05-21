---
id: y1ZanJXFEFdD-Vh9rzO7P
slug: clean-installation-directory-for-voxta-updates-y1ZanJ
type: troubleshooting
title: Voxta Installation, Updates, and Data Migration Guide
topics:
  - setup
  - configuration
  - troubleshooting
keywords:
  - install
  - update
  - upgrade
  - migration
  - clean install
  - move
  - directory
  - path
  - dependencies
  - troubleshooting
  - database
  - voxta.db
  - python
  - dll conflict
  - run all installers
confidence: 1
authority: 0.2
contributor: aprisma
sources: []
created: 2025-12-22T22:48:11.858Z
updated: 2025-12-23T13:41:03.238Z
---

# Voxta Installation, Updates, and Data Migration Guide

> Comprehensive guide for installing, updating, and moving Voxta. Covers clean installation procedures to prevent DLL conflicts, locating installation directories, data migration methods, and troubleshooting database errors.

## Answer

# Voxta Installation, Updates, and Data Migration Guide

Overwriting an existing Voxta installation during an update can cause DLL conflicts and leave obsolete files, leading to instability. To avoid these issues, always install updates in a **new, empty folder** and migrate your data. This guide covers locating your installation, standard updates, moving to a new drive, alternative migration methods, deep cleaning, and troubleshooting.

## Why a Clean Install?

- **Prevents DLL conflicts** between old and new versions.
- **Ensures no outdated files** remain that could cause errors.
- **Preserves your settings**, characters, and chat data by copying the `Data` folder.

## Locating the Installation Directory

Before updating or moving Voxta, you must identify the correct folder path. If you have multiple versions installed, ensure you are targeting the one you actively use.

### Method 1: Using a Shortcut (Recommended for Multiple Installations)

If you have multiple Voxta installations, Windows Search may return results from old versions. To find the active one:

1. Find the shortcut you use to launch Voxta (Desktop, Taskbar, or Start menu).
2. Right-click the shortcut and select **Open file location**.
3. This opens the folder containing the executable (e.g., `Voxta.DesktopApp.exe`).

### Method 2: Using File Properties

1. Locate the executable file (`Voxta.DesktopApp.exe` or `Voxta.Server.exe`).
2. Right-click the file and select **Properties**.
3. Check the **Location** field for the directory path.

### Method 3: Using File Explorer

1. Navigate to the folder containing Voxta.
2. Left-click the address bar at the top to see and copy the full path.

## Standard Update Procedure

1. **Download the latest release** from the [Voxta Portal](https://portal.voxta.ai).
2. **Close** all running instances of Voxta.
3. **Extract the files** into a **new, empty folder** (do not overwrite the existing installation).
4. **Copy the `Data` folder** from your previous installation to the new folder.
   - This folder contains `Voxta.db` (settings, characters, chat history), `users`, custom audio files, and LLM models.
5. **Launch the new version** of Voxta.
6. Go to `Manage Services` and click **Run All Installers** to update Python dependencies. (In older versions, this may be under `Manage Modules` as **Install All Services Dependencies**.)
7. **Verify** that Voxta works correctly.
8. Once confirmed, you can delete the old installation folder.

**Tip:** If you cannot locate your old installation, search your disk for `Voxta.Server.exe` or `Voxta.DesktopApp.exe`.

**Note for Virt-A-Mate users:** Remember to also [update the Voxta plugin](https://doc.voxta.ai/vam/installing-the-plugin/) in VaM.

**Best Practice:** Keep a backup of the old folder until you are sure the new version works without issues.

## Moving Voxta to Another Drive

If you need to move your installation (e.g., due to disk space):

1. Copy or move the entire Voxta folder to the new drive.
2. **Important:** Ensure the new installation path **does not contain spaces** (e.g., use `D:\Voxta`, not `D:\My Apps\Voxta`).
3. Launch Voxta from the new location.
4. Go to **Manage Services** and click **Run All Installers**. This ensures dependencies are correctly re-configured for the new path.

## Alternative Data Migration Methods

If you want to ensure a completely clean Python environment or prefer selective migration, use one of these methods.

### Method A: Copy Entire Data Folder and Delete Python Environment

1. Extract new Voxta to a new folder.
2. Copy the `Data` folder from the old installation.
3. Paste into the new folder, overwriting if prompted.
4. Open the new `Data` folder and **delete** the `Python` folder (removes old virtual environments).
5. Start Voxta.
6. Run **Run All Installers** from Manage Services to rebuild the Python environment.

### Method B: Selective File Migration

Copy only essential files to avoid transferring potentially problematic files.

**Files to copy:**
- `Voxta.db` (contains settings, characters, chat data)
- `users` folder
- Custom audio files
- LLM models

**Steps:**
1. Extract new Voxta to a new folder.
2. Copy the above files/folders into the corresponding locations in the new `Data` folder.
3. Start Voxta.
4. Run **Run All Installers**.

## Deep Clean Install (Reset All Data)

If standard update or migration methods fail, the problem may lie within the `Data` folder itself. Perform a clean install without any old data:

1. **Export important content** (characters, settings) using Voxta's **Packages** feature.
2. Extract the latest version into a new, empty folder.
3. Do **not** copy the old `Data` folder; a fresh one will be created.
4. Launch Voxta and re-import your exported packages.
5. Run **Run All Installers**.

> **Note:** This resets all local settings and data. Only use if other methods don't resolve issues.

## Troubleshooting Database Migration Errors

When updating, Voxta automatically migrates your `Voxta.db` to the new schema. If migration fails and Voxta crashes, follow these steps:

### 1. Restore a Clean Database Backup

- Close Voxta.
- Navigate to the `Data` folder.
- Remove any existing database files (`Voxta.db`, `Voxta.db-shm`, `Voxta.db-wal` if present).
- Copy a known-good backup of `Voxta.db` into the folder.

### 2. Enable File Logging

- Locate `appsettings.json` in the Voxta root directory.
- Open it in a text editor.
- Change `"EnableFileLogging": false` to `"EnableFileLogging": true`.
- Save.

### 3. Attempt to Start Voxta

Launch Voxta again. If it crashes, proceed.

### 4. Check Log Files

After a crash, a log file is generated in `Data/logs`. Open the most recent log and look for error messages or stack traces.

### 5. Use the In-App Terminal (F2)

- While Voxta is running (or immediately after a crash), press `F2` to open the Terminal window.
- Examine the output for errors related to database migration.

### 6. Clear Existing Logs (Optional)

Deleting the existing log file (`voxta-log` in `Data/logs`) and restarting Voxta has resolved startup errors in some cases.

> **Note:** Always back up your `Voxta.db` before updating.

---

*Extracted from Discord. Primary contributor: aprisma*