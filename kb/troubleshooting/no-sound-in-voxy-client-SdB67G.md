---
id: SdB67GA1h19WyT3LgrOOr
slug: no-sound-in-voxy-client-SdB67G
type: troubleshooting
title: Troubleshooting No Audio in Voxy Integration
topics:
  - troubleshooting
  - configuration
  - integrations
keywords:
  - voxy
  - audio
  - sound
  - no audio
  - client app playback
  - audio routing
  - version check
  - F2
  - troubleshooting
confidence: 0.9
authority: 0.2
contributor: djsoapyknuckles
sources:
  - messageId: "1439256328890745015"
    author: djsoapyknuckles
    timestamp: 2025-12-22T23:53:47.952Z
    url: ""
  - messageId: "1439270997839843340"
    author: djsoapyknuckles
    timestamp: 2025-12-22T23:53:47.952Z
    url: ""
  - messageId: "1439289408598577303"
    author: djsoapyknuckles
    timestamp: 2025-12-22T23:53:47.952Z
    url: ""
created: 2025-12-22T23:53:47.952Z
updated: 2025-12-23T13:58:07.098Z
---

# Troubleshooting No Audio in Voxy Integration

> Resolves issues where Voxy connects but produces no sound by checking Client App Playback settings, audio routing, and version compatibility.

## Answer

If Voxy connects successfully but produces no audio, follow these troubleshooting steps:

### 1. Check Client App Playback Setting
Ensure that **Client App Playback** is enabled in the Voxta settings. If this setting is disabled, Voxy will remain silent even if the connection is active.

### 2. Verify Audio Routing
Inspect the **Audio** section in the top-right panel of the Voxta UI. Observe if the audio output device changes or is incorrectly set when Voxy connects. Ensure the correct output device is selected for your system.

### 3. Check Version Compatibility
Version mismatches between Voxta and Voxy can lead to audio failures. Ensure both applications are updated to their latest releases.
*   **Voxta:** Check the version under `Help` (bottom left).
*   **Voxy:** Right-click the Voxy icon > `Main Menu` > `Settings`.

### 4. Diagnostics
Press **F2** in Voxta to open the Terminal/Logs.
*   Verify that Voxta is generating text responses (indicating the core logic is working).
*   Check the logs for specific error messages related to audio playback or the connection.

---

*Extracted from Discord. Primary contributor: djsoapyknuckles*