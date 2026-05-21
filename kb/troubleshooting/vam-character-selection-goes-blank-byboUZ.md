---
id: byboUZHjwpwuvtS12qdOV
slug: vam-character-selection-goes-blank-byboUZ
type: troubleshooting
title: Troubleshooting Voxta Plugin Activation and Character Selection in Virt-A-Mate
topics:
  - troubleshooting
  - integrations
  - setup
keywords:
  - VAM
  - VaM
  - Virt-A-Mate
  - Voxta
  - plugin
  - addonpackages
  - character selection
  - blank
  - activate
  - nothing happens
  - character
  - silent failure
  - duplicate versions
  - outdated
confidence: 0.95
authority: 0.2
contributor: sraura
sources:
  - messageId: "1338981689074122914"
    author: sraura
    timestamp: 2025-12-22T20:35:24.477Z
    url: ""
created: 2025-12-22T20:35:24.477Z
updated: 2025-12-23T04:29:40.705Z
---

# Troubleshooting Voxta Plugin Activation and Character Selection in Virt-A-Mate

> If the Voxta plugin in Virt-A-Mate fails to activate or character selection goes blank, common causes include duplicate plugin versions or no character loaded in the Voxta Desktop App. This guide explains how to resolve both issues.

## Answer

# Troubleshooting Voxta Plugin Activation and Character Selection in Virt-A-Mate

Users of the Voxta plugin for Virt-A-Mate (VaM) may encounter issues where the character selection screen goes blank immediately or the plugin activation fails silently (nothing happens). These problems are often caused by one of two common issues.

## Duplicate or Outdated Plugin Versions

Having multiple versions of the Voxta plugin installed, or an outdated version, can cause the character selection to instantly go blank.

**Solution:**
1. Navigate to your VaM `addonpackages` folder.
2. Delete any old or duplicate versions of the Voxta plugin.
3. Ensure only the latest version of the plugin is present.
4. Restart VaM and try again.

## No Character Loaded in Voxta Desktop App

If the Voxta Desktop App does not have an active character, the VaM plugin may fail to activate without any error message.

**Solution:**
1. Open the Voxta Desktop App (the server interface).
2. Import a character if necessary, and ensure a character is selected and active.
3. Return to VaM and attempt to activate the plugin again.

---

*Extracted from Discord. Primary contributor: sraura*