---
id: UloNEzeESOfR6XTXnZ7xE
slug: fixing-premature-stt-cut-off-UloNEz
type: troubleshooting
title: Fixing Premature STT Cut-off
topics:
  - troubleshooting
  - configuration
keywords:
  - STT
  - speech-to-text
  - delay
  - cut off
  - interruption
  - silence detection
confidence: 0.8
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-19T05:22:27.675Z
updated: 2025-12-19T05:22:27.675Z
---

# Fixing Premature STT Cut-off

> Increase the delay setting in the STT service configuration to prevent the AI from interrupting during pauses.

## Answer

This issue typically occurs when the Speech-to-Text (STT) service interprets a short pause as the end of your input. 

To resolve this:
1. Go to your **STT service configuration**.
2. Look for a **delay** or **silence detection** setting.
3. Increase this value to make the system wait longer before assuming you are done speaking.

---

*Extracted from Discord. Primary contributor: sraura*