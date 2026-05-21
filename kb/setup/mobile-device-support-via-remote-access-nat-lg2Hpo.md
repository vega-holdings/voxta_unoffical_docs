---
id: lg2HpoyQnTKnMQdYbuEFI
slug: mobile-device-support-via-remote-access-nat-lg2Hpo
type: qa
title: Mobile Device Support via Remote Access (NAT)
topics:
  - setup
  - troubleshooting
keywords:
  - mobile
  - android
  - iphone
  - ios
  - remote access
  - nat
  - wan
  - microphone
confidence: 0.5
authority: 0.2
contributor: sraura
sources:
  - messageId: "1385043021678247978"
    author: sraura
    timestamp: 2025-12-22T23:04:04.197Z
    url: ""
created: 2025-12-22T23:04:04.197Z
updated: 2025-12-22T23:04:04.197Z
---

# Mobile Device Support via Remote Access (NAT)

> Android devices may work for remote Voxta access, while iPhones typically fail due to microphone/browser restrictions.

## Answer

According to community discussions, using Voxta on mobile devices via remote access (NAT/WAN) has mixed results:

*   **Android:** Likely works based on older tests.
*   **iOS (iPhone):** Generally does not work.

This limitation is often related to microphone permissions and browser security policies when accessing the interface from a separate device or over a non-secure connection. There are also significant security risks associated with exposing the Voxta port to the WAN.

---

*Extracted from Discord. Primary contributor: sraura*