---
id: uHHjw4vMNz7G4Sq5Zh_dU
slug: running-virt-a-mate-in-oculus-native-mode-uHHjw4
type: tip
title: Running Virt-A-Mate in VR Mode (Windows & Linux)
topics:
  - configuration
  - troubleshooting
  - setup
  - integrations
keywords:
  - VaM
  - Virt-A-Mate
  - Oculus
  - Meta Quest
  - SteamVR
  - VR
  - batch file
  - audio
  - microphone
  - linux
  - proton
  - steam
  - envision
confidence: 0.8
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T23:15:26.973Z
updated: 2025-12-23T14:00:51.296Z
---

# Running Virt-A-Mate in VR Mode (Windows & Linux)

> Instructions for launching Virt-A-Mate in VR mode on Windows using Oculus native mode to bypass SteamVR, and on Linux using Proton or Envision.

## Answer

This guide covers how to launch Virt-A-Mate (VaM) in VR mode on different operating systems.

## Windows: Oculus Native Mode

Running VaM in Oculus native mode bypasses SteamVR, which can improve performance and ensure correct Windows audio/microphone routing (essential for applications like Voxta).

**Prerequisites:**
*   Meta Quest Link software installed.

**Steps:**
1.  Fully close Steam and ensure SteamVR services are not running.
2.  Navigate to your VaM root directory.
3.  Create a new text file and name it `VaM (Oculus).bat`.
4.  Open the file with a text editor and add the following content:
    ```bat
    START "VaM" VaM.exe -vrmode oculus
    ```
5.  Save the file and double-click it to launch VaM.

**Troubleshooting:**
If SteamVR was running previously, it may interfere. Open Task Manager and manually end any processes containing "vr". Note that Oculus processes typically contain "OVR".

## Linux: Proton and FOSS VR

VaM VR mode can be run on Linux using compatibility layers like Proton or open-source VR stacks.

**Methods:**

1.  **Steam/Proton:** Add VaM as a non-Steam game within your Steam Library and run it using Proton.
2.  **Launch Script:** Create a `.sh` script to launch the executable with the necessary Proton environment variables.
3.  **Envision (FOSS VR):** Use the Envision open-source VR stack. For more details, see the [Envision documentation](https://lvra.gitlab.io/docs/fossvr/envision/).

---

*Extracted from Discord. Primary contributor: sraura*