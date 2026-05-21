---
id: ZPvC9sgjs-RrAsW1ot-3M
slug: windows-defender-blocking-service-installation-ZPvC9s
type: troubleshooting
title: Windows Defender Blocking Service Installation
topics:
  - troubleshooting
  - setup
keywords:
  - windows defender
  - hugging face
  - red errors
  - installation
  - antivirus
  - blocked
confidence: 0.8
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T23:16:31.577Z
updated: 2025-12-22T23:16:31.577Z
---

# Windows Defender Blocking Service Installation

> Windows Defender may block Hugging Face downloads causing red errors during service install.

## Answer

Windows Defender (or other antivirus software) may aggressively block connections to Hugging Face, preventing necessary model or script downloads. This often results in red error messages appearing in the console during the installation of services.

**Potential Solution:**
Check your Windows Defender protection history or antivirus logs to see if connections were blocked, and consider adding an exclusion for the Voxta folder or temporarily pausing protection during installation.

---

*Extracted from Discord. Primary contributor: sraura*