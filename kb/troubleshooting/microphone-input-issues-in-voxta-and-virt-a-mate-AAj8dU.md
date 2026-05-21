---
id: AAj8dUURTc68Z-xCYG6t2
slug: microphone-input-issues-in-voxta-and-virt-a-mate-AAj8dU
type: troubleshooting
title: Configuring and Troubleshooting NAudio for Voxta and Virt-a-Mate
topics:
  - troubleshooting
  - configuration
  - integrations
  - setup
  - vam
keywords:
  - microphone
  - naudio
  - input device
  - output device
  - virtual desktop
  - background
  - minimized
  - Virt-A-Mate
  - VaM
  - VR
  - USB headset
  - drivers
  - compatibility
confidence: 0.9
authority: 0.2
contributor: sraura
sources:
  - messageId: "1325244608535461972"
    author: sraura
    timestamp: 2025-12-19T05:04:08.998Z
    url: ""
  - messageId: "1325265348873682985"
    author: sraura
    timestamp: 2025-12-19T05:04:08.998Z
    url: ""
created: 2025-12-19T05:04:08.998Z
updated: 2025-12-23T13:50:08.063Z
---

# Configuring and Troubleshooting NAudio for Voxta and Virt-a-Mate

> NAudio enables reliable microphone input for Voxta in the background and is required for Virt-a-Mate integration. This guide covers configuration, USB headset troubleshooting, and resolving driver incompatibilities.

## Answer

# Using NAudio for Reliable Microphone Input in Voxta

## Overview

Voxta can capture microphone audio using two primary methods:

- **Edge (WebView2)**: The default method used by the main Voxta app. It supports real-time detection of input/output device changes but may require the Voxta window to have focus for audio capture.
- **NAudio**: A dedicated service that allows you to select a specific microphone device and capture audio regardless of window focus. This is essential when using Voxta with Virt-a-Mate (VaM) or when the app is minimized or in the background (e.g., in VR).

**Important:** The VaM integration **always** uses NAudio for microphone input, overriding the selection in Voxta's main audio settings. Therefore, configuring NAudio correctly is crucial for a seamless VaM experience.

## Configuring NAudio

1. Open the Voxta app sidebar.
2. Navigate to **Manage Services** (or **Manage Modules** in some versions) and select the **NAudio** service.
3. Under **Input Device**, choose your microphone from the dropdown.
4. (Optional) Under **Output Device**, select a specific playback device if needed.
5. Save the configuration.

### Configuration for USB Headsets

If you are experiencing issues with USB audio devices (e.g., Astro A-40), try setting the **NAudio** speakers and microphone settings to `Auto`. Then, select your specific USB headset as the **Default Device** in your Windows Sound Settings. This allows Voxta to use the Windows default handling rather than interfacing directly with potentially complex third-party drivers.

## Testing Your Microphone

Before launching Virt-a-Mate or entering VR, test your microphone in Voxta's Transcription Playground:

1. Open the **Transcription Playground** from the Voxta app.
2. Speak into your microphone and observe the sound meter. If it moves, audio is being captured.
3. If no movement, double-check your NAudio configuration and Windows permissions.

## Troubleshooting Common Issues

### Microphone Works in Voxta App but Not in VaM

If the microphone functions correctly in the main Voxta App (using Edge) but fails in VaM (while other features like text chat work), it is likely due to **microphone driver incompatibility** with VAM/Unity. This is occasionally observed with non-standard microphone setups.

- **Solution:** Try the USB headset configuration method above (setting NAudio to 'Auto' and using Windows Default), or try a different microphone to see if the issue is specific to the driver.

### Microphone Not Detected at All

- **Windows permissions:** Ensure that Windows microphone privacy settings allow desktop apps to access your microphone.
- **Clean plugin installation (VaM):** If using Virt-a-Mate, ensure you have only the latest version of the Voxta plugin in your `AddonPackages` folder. Delete any older versions.
- **Select the correct device:** In NAudio, explicitly choose your microphone rather than "Auto" (unless troubleshooting USB issues as described above).

### Voice Input Stops When Voxta is Minimized or in Background

This is typically because you are not using NAudio, or NAudio is misconfigured. Switch to NAudio and select a specific microphone device. NAudio captures audio independently of window focus.

### No Audio in VR or with Virtual Desktop

- **Virtual Desktop users:** If you are using Virtual Desktop to stream VR, try launching Virt-a-Mate without SteamVR using a `.bat` file to prevent audio conflicts. Example `.bat` content: `start "" "C:\Path\To\VirtAMate.exe" --no-steamvr`.
- **Ensure the correct microphone is selected:** In VR, your headset's microphone may have a different name (e.g., "Oculus Microphone"). Select that device in NAudio.

### Microphone Device Changes Not Recognized

NAudio does **not** support real-time detection of input/output device changes. If you connect or switch microphones while Voxta is running (e.g., putting on a VR headset), NAudio may continue using the previously selected device. To resolve:

- Manually update the NAudio settings to the new device and save.
- If the new device does not appear, restart Voxta to refresh the device list.

### Still Not Working?

- Restart Voxta after changing NAudio settings.
- Check that no other application is exclusively using the microphone.
- Update your audio drivers.

---

*Extracted from Discord. Primary contributor: sraura*