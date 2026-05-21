---
id: Y1mU-38WfAWzjTIntH481
slug: file-system-access-in-scripts-Y1mU-3
type: troubleshooting
title: File System Access in Scripts
topics:
  - scripting
keywords:
  - fs
  - file system
  - path
  - import
  - lorebooks
  - sandbox
  - read file
confidence: 0.8
authority: 0.2
contributor: djsoapyknuckles
sources:
  - messageId: "1346890134074691728"
    author: djsoapyknuckles
    timestamp: 2025-12-22T21:15:35.590Z
    url: ""
  - messageId: "1347001442103459921"
    author: djsoapyknuckles
    timestamp: 2025-12-22T21:15:35.590Z
    url: ""
created: 2025-12-22T21:15:35.590Z
updated: 2025-12-22T21:15:35.590Z
---

# File System Access in Scripts

> Voxta scripts cannot use the 'fs' module to access local files.

## Answer

No, Voxta's scripting environment does not support direct file system access via the `fs` module. Scripts are sandboxed and cannot read local files or directories using Node.js standard libraries like `fs` or `path`.

---

*Extracted from Discord. Primary contributor: djsoapyknuckles*