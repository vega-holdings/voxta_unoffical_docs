---
id: I0WOA1tpgZIJMNaW9895x
slug: android-chrome-security-workaround-for-local-connection-I0WOA1
type: troubleshooting
title: Android Chrome Security Workaround for Local Connection
topics:
  - troubleshooting
  - configuration
keywords:
  - android
  - chrome
  - mobile
  - flags
  - security
  - http
confidence: 0.8
authority: 0.2
contributor: eritainment
sources: []
created: 2025-12-23T00:08:17.592Z
updated: 2025-12-23T00:08:17.592Z
---

# Android Chrome Security Workaround for Local Connection

> Instructions for enabling the 'unsafely-treat-insecure-origin-as-secure' flag in Android Chrome to facilitate local Voxta connections.

## Answer

To allow Chrome on Android to treat the local Voxta connection as secure (which is often required for features like microphone access), follow these steps:

1. Open Chrome on your Android device.
2. Navigate to `chrome://flags/#unsafely-treat-insecure-origin-as-secure`.
3. Change the dropdown setting from **Disabled** to **Enabled**.
4. Enter your Voxta server address (e.g., `http://xx.xxx.xxx.xxx:xxxx`) in the text box that appears.
5. Tap the blue **Relaunch** button at the bottom.

---

*Extracted from Discord. Primary contributor: eritainment*