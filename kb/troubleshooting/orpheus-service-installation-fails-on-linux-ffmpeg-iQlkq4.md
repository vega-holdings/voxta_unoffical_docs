---
id: iQlkq4i4G9zZk5tuSqR_1
slug: orpheus-service-installation-fails-on-linux-ffmpeg-iQlkq4
type: troubleshooting
title: Orpheus Service Installation Fails on Linux (FFmpeg)
topics:
  - troubleshooting
  - setup
keywords:
  - linux
  - ffmpeg
  - orpheus
  - installation
  - error
  - NotSupportedException
confidence: 0.9
authority: 0.2
contributor: skitter_
sources: []
created: 2025-12-22T23:15:21.184Z
updated: 2025-12-22T23:15:21.184Z
---

# Orpheus Service Installation Fails on Linux (FFmpeg)

> Manual installation steps for FFmpeg when installing the Orpheus service on Linux.

## Answer

The Orpheus service installer cannot automatically download FFmpeg on Linux. You must manually download the Linux build and place it in the specific folder requested by the installer.

1. Download the FFmpeg Linux build (e.g., `ffmpeg-n7.1-latest-linux64-lgpl-7.1.tar.xz`) from [FFmpeg Builds](https://github.com/BtbN/FFmpeg-Builds/releases).
2. Extract the archive.
3. Place the `ffmpeg` binary/files into `Data/Tools/ffmpeg/ffmpeg` within your Voxta installation directory as indicated by the error log.

---

*Extracted from Discord. Primary contributor: skitter_*