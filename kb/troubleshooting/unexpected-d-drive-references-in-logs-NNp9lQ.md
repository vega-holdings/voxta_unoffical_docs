---
id: NNp9lQvbdB_Ze5putf0-n
slug: unexpected-d-drive-references-in-logs-NNp9lQ
type: troubleshooting
title: "Unexpected D: Drive References in Logs"
topics:
  - troubleshooting
keywords:
  - logs
  - D drive
  - path
  - error
  - build artifact
confidence: 0.9
authority: 0.2
contributor: sraura
sources:
  - messageId: "1379639970016268338"
    author: sraura
    timestamp: 2025-12-22T23:00:27.420Z
    url: ""
created: 2025-12-22T23:00:27.420Z
updated: 2025-12-22T23:00:27.420Z
---

# Unexpected D: Drive References in Logs

> D: drive paths in logs are build artifacts and can be ignored.

## Answer

References to a `D:` drive in the logs are typically artifacts from the developer's build environment (showing the path where the code was compiled on the developer's machine). These paths can be safely ignored and do not indicate an error with your local installation or drive configuration.

---

*Extracted from Discord. Primary contributor: sraura*