---
id: WypCzwFHLzcDfzJvmxt20
slug: verifying-quest-3-pc-connection-for-virt-a-mate-WypCzw
type: troubleshooting
title: "Ensuring Virt-A-Mate Launches in VR on Quest 3: Connection Verification
  and Steps"
topics:
  - troubleshooting
  - setup
  - integrations
keywords:
  - Quest 3
  - VR
  - Virt-A-Mate
  - VAM
  - Oculus Link
  - Meta Quest Link
  - Steam Link
  - SteamVR
  - PC connection
  - bat file
  - launch
  - troubleshooting
confidence: 0.8
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T23:15:30.286Z
updated: 2025-12-23T04:40:34.309Z
---

# Ensuring Virt-A-Mate Launches in VR on Quest 3: Connection Verification and Steps

> Learn how to confirm your Quest 3 is connected to your PC via Oculus Link or Steam Link before launching Virt-A-Mate, and follow the steps to ensure VAM starts in VR mode.

## Answer

# Ensuring Virt-A-Mate Launches in VR on Quest 3

To successfully launch Virt-A-Mate (VAM) in VR mode using a Quest 3 headset, you must first establish a PC connection via Oculus Link or Steam Link. This guide explains how to verify your connection and the steps to take before launching VAM.

## Verifying Your Quest 3 PC Connection

Put on your headset and look at the environment. The visual cues indicate your current connection state:

- **Default Environment** (e.g., your Quest home): You are in standalone mode and **not** connected to a PC.
- **Steam Menu**: Steam Link is active and your headset is connected to your PC via SteamVR.
- **Oculus PC Link Menu**: Oculus Link (or Meta Quest Link) is active and your headset is connected to your PC via the Oculus software.

You should see either the Steam or Oculus PC Link menu before attempting to start VAM. If you see the default environment, you need to activate Link first.

## Steps to Launch VAM in VR

1. **Prepare your PC**: Open the "Meta Quest Link" application on your PC (if using Oculus Link) or ensure SteamVR is ready (if using Steam Link).
2. **Locate the launch file**: Ensure the `.bat` file you use to start VAM is placed in the Virt-A-Mate root directory (where `VirtAMate.exe` is located).
3. **Activate Link**: Inside your headset, activate **Quest Link** (for Oculus) or **Steam Link** (for Steam) to establish the PC connection. Wait until you see the corresponding PC menu.
4. **Launch VAM**: While still in the PC-linked environment, run the `.bat` file from your PC. VAM should start in VR mode.

## Troubleshooting Tips

- If VAM launches in desktop mode instead of VR, you likely launched it before activating Link. Close VAM, ensure Link is active, then launch again.
- Make sure your headset is properly connected via a high-quality USB cable (for Oculus Link) or on the same network (for Steam Link wireless).
- For Oculus Link, the Oculus PC app must be running and the headset must be recognized.
- For Steam Link, SteamVR must be installed and running.

Following these steps will ensure Virt-A-Mate launches correctly in VR on your Quest 3.

---

*Extracted from Discord. Primary contributor: sraura*