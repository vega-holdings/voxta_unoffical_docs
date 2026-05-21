---
id: 5s8Jsc6dQHtz-1poETqtl
slug: enabling-verbose-logging-for-python-services-5s8Jsc
type: tip
title: Enabling Verbose Logging in Voxta
topics:
  - configuration
  - troubleshooting
keywords:
  - appsettings.json
  - logging
  - debug
  - verbose
  - pythonnet
confidence: 0.9
authority: 0.2
contributor: sraura
sources:
  - messageId: "1364365242469191700"
    author: sraura
    timestamp: 2025-12-22T22:38:50.876Z
    url: ""
created: 2025-12-22T22:38:50.876Z
updated: 2025-12-23T04:31:33.170Z
---

# Enabling Verbose Logging in Voxta

> Edit appsettings.json to enable verbose logging for deeper debugging, with an example for Python services.

## Answer

To debug complex issues where standard logs are insufficient, you can enable verbose logging by editing the `appsettings.json` file located in the Voxta root directory.

For example, to get more detailed logs when troubleshooting Python service issues (e.g., "python not found" errors):

1. Open `appsettings.json` in the Voxta root directory.
2. Change or add the following setting:
   ```json
   "Voxta.Shared.PythonNet.ChildProcesses": "Verbose"
   ```
3. Restart Voxta.

This will provide better hints about what is going wrong during service startup.

---

*Extracted from Discord. Primary contributor: sraura*