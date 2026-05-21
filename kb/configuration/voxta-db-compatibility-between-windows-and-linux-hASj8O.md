---
id: hASj8OpUwMiUb2sVw6eEw
slug: voxta-db-compatibility-between-windows-and-linux-hASj8O
type: troubleshooting
title: Voxta.db Incompatibility Between Windows and Linux
topics:
  - configuration
  - troubleshooting
  - setup
keywords:
  - linux
  - windows
  - database
  - migration
  - segfault
  - naudio
  - ffmpeg
  - voxta.db
  - sqlite
confidence: 0.8
authority: 0.2
contributor: _elkay_
sources:
  - messageId: "1430045655497445478"
    author: _elkay_
    timestamp: 2025-12-22T23:51:02.280Z
    url: ""
  - messageId: "1430157112406966292"
    author: _elkay_
    timestamp: 2025-12-22T23:51:02.280Z
    url: ""
created: 2025-12-22T23:51:02.280Z
updated: 2025-12-23T02:35:41.801Z
---

# Voxta.db Incompatibility Between Windows and Linux

> The Voxta database file (Voxta.db or Voxta.sqlite.db) is not compatible between Windows and Linux due to OS-specific module configurations, such as audio libraries (NAudio on Windows, ffmpeg on Linux). Transferring the file can cause crashes, segmentation faults, or missing module errors, requiring a fresh setup.

## Answer

# Voxta.db Incompatibility Between Windows and Linux

The Voxta database file (`Voxta.db` or `Voxta.sqlite.db`) is **not cross‑platform compatible**. Configuration data stored in the database includes hardcoded references to operating‑system‑specific modules, particularly audio handling libraries:

- **Windows** uses **NAudio**
- **Linux** uses **ffmpeg**

If you transfer a database created on one OS to the other, Voxta may attempt to load the wrong driver, leading to:

- Crashes or segmentation faults
- Errors about missing modules
- Audio section lock‑ups

Such errors often require a fresh setup rather than attempting to repair the database. To avoid problems, always create a new database when switching between Windows and Linux.

---

*Extracted from Discord. Primary contributor: _elkay_*