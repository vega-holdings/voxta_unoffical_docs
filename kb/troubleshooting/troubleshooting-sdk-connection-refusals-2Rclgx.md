---
id: 2RclgxBbhIMhyILCvXQYw
slug: troubleshooting-sdk-connection-refusals-2Rclgx
type: troubleshooting
title: Troubleshooting SDK Connection Refusals
topics:
  - troubleshooting
  - scripting
keywords:
  - SDK
  - connection refused
  - providerapp
  - version mismatch
  - debug
confidence: 0.6
authority: 0.2
contributor: yeti_86
sources: []
created: 2025-12-22T22:42:21.849Z
updated: 2025-12-22T22:42:21.849Z
---

# Troubleshooting SDK Connection Refusals

> Resolve SDK connection refusals by checking version matching, restart order, and credential settings.

## Answer

If you encounter connection refusals when connecting a debug instance or SDK to Voxta:

1. **Version Compatibility**: Ensure the version of the `providerapp` (SDK) corresponds with the Voxta Server version you are currently using.
2. **Restart Order**: Close all running instances. Start Voxta Server first, wait for it to initialize, and then execute the debug instance.
3. **Credentials**: If you have not set a password or API key in the server settings, the connection should be open; ensure the client is not incorrectly attempting to authenticate.

---

*Extracted from Discord. Primary contributor: yeti_86*