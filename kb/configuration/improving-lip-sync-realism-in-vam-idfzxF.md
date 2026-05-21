---
id: idfzxFVsOD0GjXlP4p9jV
slug: improving-lip-sync-realism-in-vam-idfzxF
type: troubleshooting
title: Configuring and Troubleshooting Voxta Lip Sync in Virt-A-Mate
topics:
  - configuration
  - troubleshooting
  - integrations
keywords:
  - lip sync
  - VaM
  - Virt-A-Mate
  - jaw physics
  - VamMoan
  - audio routing
  - Voxta
  - Auto Behaviors
confidence: 0.8
authority: 0.2
contributor: tyrotio
sources:
  - messageId: "1379942769891741828"
    author: tyrotio
    timestamp: 2025-12-22T23:00:22.054Z
    url: ""
created: 2025-12-22T23:00:22.054Z
updated: 2025-12-23T13:49:23.980Z
---

# Configuring and Troubleshooting Voxta Lip Sync in Virt-A-Mate

> Comprehensive guide to setting up Voxta lip sync in VaM, including audio routing requirements, jaw physics adjustments, and resolving conflicts with other plugins.

## Answer

# Configuring and Troubleshooting Voxta Lip Sync in Virt-A-Mate

Voxta provides lip sync functionality for Virt-A-Mate (VaM) by analyzing audio to animate a character's mouth. To achieve realistic results, you must ensure audio is routed correctly and configure specific settings within both Voxta and VaM.

## 1. Audio Routing Requirements

For lip sync to function, the audio stream must be processed by Voxta to generate animation data.

*   **Set Audio Output to 'App'**: In the Voxta application settings, ensure **Audio Output** is set to **App**. 
    *   *Reasoning*: The Text-to-Speech (TTS) audio must pass through the Voxta application rather than going directly to an output device. This allows the system to analyze the audio and drive the avatar's lips.

## 2. Voxta Plugin Configuration

Once audio routing is confirmed, configure the plugin within VaM:

1.  **Enable Lip Sync**: Ensure the Lip Sync feature is toggled on in the Voxta plugin settings.
2.  **Select Head Audio Source**: In the Voxta plugin, ensure the option to drive jaw movement from **Head Audio** is selected. This directs the audio data to the correct parameter for processing.

## 3. Adjusting Jaw Physics in VaM

To make the lip movements look natural, fine-tune the physics settings on your character.

*   Navigate to the **Jaw Physics and Triggers** tab in the **Person atom's** settings.
*   Adjust the following parameters:
    *   **Mouth Open Amount**: Controls how wide the mouth opens.
    *   **Mouth Close Amount**: Controls how much the mouth closes.
    *   **Hold Duration**: Determines how long the mouth holds a position before moving to the next.
*   Tweak these values until the animation feels believable and matches the speech rhythm.

## 4. Troubleshooting Conflicts

If lip sync is enabled but the mouth is not moving, other VaM features may be overriding Voxta's control.

*   **VamMoan Plugin**: If active, deactivate the lip sync feature within the VamMoan plugin. It can conflict with Voxta's jaw control.
*   **Auto Jaw Mouth Morphs**: In the Person atom, go to **Auto Behaviors** and disable **Auto Jaw Mouth Morphs**. This native VaM setting can interfere with Voxta's external animation data.

---

*Extracted from Discord. Primary contributor: tyrotio*