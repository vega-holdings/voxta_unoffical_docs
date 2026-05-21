---
id: 4FordupdoN3VGjuE_oi1i
slug: fixing-vam-character-lip-sync-and-connection-issues-4Fordu
type: troubleshooting
title: Troubleshooting Virt-A-Mate Lip Sync and Connection Issues
topics:
  - troubleshooting
  - integrations
keywords:
  - VAM
  - Virt-A-Mate
  - lip sync
  - mouth movement
  - plugin
  - addonpackages
  - update
  - F2
  - debug
  - connection
  - morph set
  - purple bars
  - audio
  - physics
confidence: 0.9
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T22:59:54.919Z
updated: 2025-12-23T01:55:39.244Z
---

# Troubleshooting Virt-A-Mate Lip Sync and Connection Issues

> Steps to diagnose and fix lip sync and connection problems in Virt-A-Mate with Voxta, including verifying connection, updating plugins, and checking morph settings.

## Answer

# Troubleshooting Virt-A-Mate Lip Sync and Connection Issues

If you're experiencing problems with lip sync or connection between Voxta and Virt-A-Mate (VaM), follow these steps to diagnose and resolve the issue.

## 1. Verify Connection Using the Debug Terminal

- Press `F2` in the Voxta application to open the [Terminal](https://doc.voxta.ai/docs/terminal/) (debug console).
- Check the logs for any errors related to Virt-A-Mate. If VaM is reported as connected without errors, the connection is working.

**Note:** If audio plays correctly in Virt-A-Mate but the avatar's lips do not move, the connection is likely fine. This usually indicates a configuration issue within the Virt-A-Mate scene or avatar rather than a Voxta connection failure.

## 2. Ensure Plugin and Server Are Up to Date

- Download the latest Voxta VaM plugin from the official source.
- Place the plugin file in your `vam/addonpackages` folder.
- **Important:** Delete any older versions of the Voxta plugin from that folder to prevent conflicts.
- Make sure your Voxta Server is also updated to the latest version. Version mismatches between the server and the plugin can cause sync failures.

## 3. Check Morph Settings and Audio Signal

- In the Voxta plugin menu inside Virt-A-Mate:
  - Verify that the **Morph Set** is configured correctly (e.g., set to **Physics** or **Normal**).
  - Enable the **Advanced** option.
- While the character is speaking, look for purple bars bouncing on the right panel. These bars indicate that the plugin is receiving and processing audio.
- If the bars do not move:
  - Try moving unrelated `.var` files out of your `AddonPackages` folder to rule out conflicts.
  - Consider performing a clean install of the Voxta plugin if issues persist.

## Additional Tips

- If you continue to experience problems, ensure that your Virt-A-Mate scene is set up correctly for lip sync (e.g., appropriate morphs are enabled).
- A clean installation of the Voxta plugin (removing all previous versions and reinstalling) often resolves stubborn issues.

---

*Extracted from Discord. Primary contributor: sraura*