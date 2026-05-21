---
id: qysv2Rmr4slfJMH6q9SbM
slug: troubleshooting-fresh-install-failures-qysv2R
type: troubleshooting
title: Troubleshooting Fresh Install Failures
topics:
  - troubleshooting
  - setup
keywords:
  - fresh install
  - vc redist
  - appdata
  - cache
  - dependencies
  - visual c++
confidence: 0.8
authority: 0.2
contributor: sraura
sources:
  - messageId: "1350995943859818536"
    author: sraura
    timestamp: 2025-12-22T21:34:40.940Z
    url: ""
  - messageId: "1351004519441367137"
    author: sraura
    timestamp: 2025-12-22T21:34:40.940Z
    url: ""
created: 2025-12-22T21:34:40.940Z
updated: 2025-12-22T21:34:40.940Z
---

# Troubleshooting Fresh Install Failures

> Check for VC++ Redistributables and clear AppData cache if fresh installs fail.

## Answer

If a fresh installation fails or throws errors, check the following:

1. **Missing Dependencies**: Ensure [Microsoft Visual C++ Redistributable](https://learn.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist?view=msvc-170) is installed. This is a required dependency and is often missing on new Windows installations.
2. **AppData Cache**: Residual or conflicting files in `%appdata%` can prevent installation completion. Try manually deleting temp/cache folders related to the application in `%appdata%`.
3. **Disk Space**: Verify that the drive has sufficient free space.

---

*Extracted from Discord. Primary contributor: sraura*