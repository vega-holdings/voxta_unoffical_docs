---
id: GbO7gLxM6VLLJVnZjSH2_
slug: f5-tts-installation-error-cannot-find-command-git-GbO7gL
type: troubleshooting
title: "F5-TTS Installation Error: Cannot find command 'git'"
topics:
  - troubleshooting
  - integrations
keywords:
  - f5-tts
  - git
  - WinError 2
  - installation
  - path
  - dependency
confidence: 0.9
authority: 0.2
contributor: doctortim
sources:
  - messageId: "1331686140218183850"
    author: doctortim
    timestamp: 2025-12-19T05:30:25.862Z
    url: ""
  - messageId: "1331687046896685057"
    author: doctortim
    timestamp: 2025-12-19T05:30:25.862Z
    url: ""
created: 2025-12-19T05:30:25.862Z
updated: 2025-12-19T05:30:25.862Z
---

# F5-TTS Installation Error: Cannot find command 'git'

> Fix for missing git error during F5-TTS installation.

## Answer

This error indicates that Git is missing or not found in the system PATH during the F5-TTS installation.

**Status:**
This is a known issue with the current installer. A fixed re-release is in progress.

**Solutions:**
1. **Wait for Update (Recommended):** The developer is releasing a fix to handle this dependency automatically.
2. **Manual Workaround:** Install [Git for Windows](https://git-scm.com/download/win) manually and ensure it is added to your system PATH. Note that this might lead to subsequent configuration errors that require manual troubleshooting.

---

*Extracted from Discord. Primary contributor: doctortim*