---
id: dQRZcm5kmaNriolWXoJkI
slug: enabling-file-logging-for-startup-crashes-dQRZcm
type: tip
title: Enabling File Logging for Startup Crashes
topics:
  - troubleshooting
  - configuration
keywords:
  - logs
  - appsettings.json
  - crash
  - debug
confidence: 0.85
authority: 0.2
contributor: sraura
sources:
  - messageId: "1348551377386868808"
    author: sraura
    timestamp: 2025-12-22T21:23:07.974Z
    url: ""
created: 2025-12-22T21:23:07.974Z
updated: 2025-12-22T21:23:07.974Z
---

# Enabling File Logging for Startup Crashes

> How to enable file logging in appsettings.json to debug instant crashes.

## Answer

If `Voxta.Server.exe` crashes immediately upon startup before you can read the console errors, you can enable file logging.

1. Open `appsettings.json` in the Voxta root folder using a text editor (like Notepad).
2. Look for the logging configuration settings and enable logging to a file.

This is particularly useful for debugging database migration issues or critical startup failures.

---

*Extracted from Discord. Primary contributor: sraura*