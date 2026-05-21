---
id: aTQstFpbmQR9G8vSQ7_E3
slug: displaying-subtitles-in-virt-a-mate-scenes-aTQstF
type: qa
title: Managing Subtitles in Virt-A-Mate with Voxta
topics:
  - integrations
  - scripting
  - configuration
keywords:
  - VAM
  - Virt-A-Mate
  - subtitles
  - overlay
  - VAM Overlays
  - plugin
  - scripts
  - atom
confidence: 0.8
authority: 0.2
contributor: .frond
sources:
  - messageId: "1349987547836846111"
    author: .frond
    timestamp: 2025-12-22T21:30:16.843Z
    url: ""
  - messageId: "1349990901526564874"
    author: .frond
    timestamp: 2025-12-22T21:30:16.843Z
    url: ""
created: 2025-12-22T21:30:16.843Z
updated: 2025-12-23T04:38:55.520Z
---

# Managing Subtitles in Virt-A-Mate with Voxta

> Use the VAM Overlays plugin to display subtitles in Virt-A-Mate scenes. Enable by copying scripts from the Voxta demo scene or manually adding the plugin; disable by removing the plugin from the Overlay atom.

## Answer

# Managing Subtitles in Virt-A-Mate with Voxta

Subtitles in Virt-A-Mate (VAM) scenes can be displayed using the **VAM Overlays** plugin. This guide covers both enabling and disabling subtitles.

## Enabling Subtitles

1. Ensure the **VAM Overlays** plugin is installed and available.
2. Open the built-in **VAM Demo Scene** (provided with Voxta) to examine how subtitles are triggered.
3. Copy the relevant scripts from the demo scenario to your own scenario. This typically involves:
   - Locating the Overlay atom in the demo scene.
   - Accessing its plugin configuration.
   - Replicating the setup in your scene.
4. Alternatively, you can manually add the plugin to an Overlay atom:
   - Add an Overlay atom to your scene if not present.
   - In the Overlay atom's **Plugins** tab, load the VAM Overlays plugin.
   - Configure the plugin to display subtitles (refer to demo scripts for details).

## Disabling Subtitles

To remove the subtitle overlay from a VAM scene:

1. Open the **Atoms** list in the scene.
2. Search for and select the **Overlay** atom that contains the subtitle plugin.
3. Navigate to the **Plugins** tab for the Overlay atom.
4. Remove the plugin loaded there (usually named something like "VAM Overlays" or "Subtitles").

After removing the plugin, subtitles will no longer appear.

> **Note:** The exact naming may vary; look for plugins related to overlays or subtitles.

---

*Extracted from Discord. Primary contributor: .frond*