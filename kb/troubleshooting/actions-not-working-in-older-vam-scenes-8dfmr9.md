---
id: 8dfmr93uMOHY8gslk1Zjn
slug: actions-not-working-in-older-vam-scenes-8dfmr9
type: troubleshooting
title: Troubleshooting Voxta Actions Not Working in Virt-A-Mate (VAM)
topics:
  - troubleshooting
  - integrations
keywords:
  - VAM
  - Virt-A-Mate
  - Voxta
  - actions
  - scenarios
  - plugin conflict
  - addonpackages
  - merge load
  - storable not found
  - Timeline
  - Scripter
  - Voxta Desktop
  - troubleshooting
confidence: 0.9
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T22:40:56.234Z
updated: 2025-12-23T13:34:18.377Z
---

# Troubleshooting Voxta Actions Not Working in Virt-A-Mate (VAM)

> Common issues and solutions for Voxta actions failing in VAM scenes, including missing scenarios, duplicate plugins, merge-load preset conflicts, and ensuring Voxta Desktop is running.

## Answer

# Troubleshooting Voxta Actions Not Working in Virt-A-Mate (VAM)

Voxta integrates with Virt-A-Mate (VAM) via a plugin that communicates with Voxta Desktop. Several issues can prevent actions from executing correctly in VAM scenes. This guide covers common causes and solutions.

## Prerequisites

- **Voxta Desktop must be running** while VAM is active. It acts as the server for the VAM plugin.
- Ensure you have the latest Voxta plugin installed in VAM. The plugin is located in `vam/addonpackages`. Only one version should be present to avoid conflicts.

## Common Issues and Solutions

### 1. Missing Scenarios in Older Scenes

Older VAM scenes were created before the Voxta "Scenarios" feature. In these scenes, action logic is baked directly into the scene (typically within Scripter atoms inside the VAR file) rather than using a separate Scenario file.

- **Symptoms:** Actions do not trigger, and the scenario may be missing.
- **Solution:** 
  - For newer scenes, clicking "Start Voxta" in the Voxta plugin UI will automatically download the required scenario.
  - For older scenes, you may need to manually download the scenario from the scene's source (e.g., the creator's page) and place it in the appropriate Voxta scenarios folder.

### 2. Duplicate or Outdated Voxta Plugins

Having multiple versions of the Voxta plugin in your `vam/addonpackages` folder can cause conflicts, leading to actions not registering or executing.

- **Symptoms:** Actions appear in the Voxta app chat inspector but are not performed in VAM, or the plugin fails to load correctly.
- **Solution:**
  - Manually check the `addonpackages` folder and delete any old Voxta plugin files. Keep only the newest version.
  - Do not rely solely on VAM's dependency browser; it may not accurately reflect file conflicts.

### 3. Merge-Loaded Presets Causing "Storable Not Found" Errors

When you merge-load a VAM plugin preset that contains hardcoded references to a specific Voxta plugin instance ID, you may encounter errors if the referenced plugin does not exist or has a different ID.

- **Symptoms:**
  - Voxta server logs show that actions are triggered, but the VAM character does not perform them via Timeline.
  - VAM error log contains: `Scripter: Could not find a storable named or ending with 'plugin#3_Voxta' in atom 'Person'.`
- **Solution:**
  - Disable or remove the conflicting plugin preset.
  - Avoid merge-loading presets that contain hardcoded references to specific Voxta plugin instances unless you are certain the IDs match.

### 4. Checking the Chat Inspector

If actions are not triggering, the Voxta app's chat inspector can help diagnose whether actions are being registered and triggered by the AI.

- Open the Voxta app and navigate to the chat inspector while the scene is running.
- Look for registered actions and any triggering events. This can confirm whether the issue lies with Voxta or VAM.

## Additional Tips

- Always ensure you are using the latest version of Voxta Desktop and the VAM plugin.
- If problems persist, consult the Voxta Discord community or the official documentation for further assistance.

---

*Extracted from Discord. Primary contributor: sraura*