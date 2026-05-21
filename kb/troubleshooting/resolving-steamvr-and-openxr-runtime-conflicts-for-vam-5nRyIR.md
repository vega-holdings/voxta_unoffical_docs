---
id: 5nRyIRff1mnkZUcB0tCLd
slug: resolving-steamvr-and-openxr-runtime-conflicts-for-vam-5nRyIR
type: troubleshooting
title: Resolving SteamVR and OpenXR Runtime Conflicts for VAM
topics:
  - troubleshooting
  - integrations
keywords:
  - Steam
  - OpenXR
  - Runtime
  - Oculus
  - VAM
  - VR
  - Launch
confidence: 0.8
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T23:15:30.530Z
updated: 2025-12-22T23:15:30.530Z
---

# Resolving SteamVR and OpenXR Runtime Conflicts for VAM

> Close Steam to prevent OpenXR runtime conflicts when launching VAM in VR.

## Answer

Ensure your desired OpenXR runtime is set as active. SteamVR often attempts to override this setting ('steal' the runtime). It is recommended to close Steam completely (including from the system tray) before launching VAM to prevent interference.

Once VAM has launched successfully once using the correct runtime, it should appear in the Oculus PC Link library in the headset, allowing you to launch it directly from there in the future.

---

*Extracted from Discord. Primary contributor: sraura*