---
id: ewg3uRetoTS9cZyIhteIP
slug: enabling-non-english-languages-in-whisper-stt-ewg3uR
type: troubleshooting
title: Enabling non-English languages in Whisper STT
topics:
  - configuration
  - integrations
keywords:
  - Whisper
  - STT
  - German
  - language
  - multilingual
  - .en
confidence: 1
authority: 0.2
contributor: Deleted User
sources:
  - messageId: "1324562546488901694"
    author: Deleted User
    timestamp: 2025-12-19T04:59:08.942Z
    url: ""
  - messageId: "1324564812658901003"
    author: Deleted User
    timestamp: 2025-12-19T04:59:08.942Z
    url: ""
created: 2025-12-19T04:59:08.942Z
updated: 2025-12-19T04:59:08.942Z
---

# Enabling non-English languages in Whisper STT

> Select Whisper models without the .en suffix to enable multilingual support.

## Answer

To use non-English languages with Whisper in Voxta, you must ensure you are using a multilingual model.

1. Check your Whisper service configuration.
2. Select a model that **does not** end in `.en` (e.g., use `base` or `small` instead of `base.en`).
3. Models with the `.en` suffix are optimized for English only and will not function correctly for other languages.

---

*Extracted from Discord. Primary contributor: Deleted User*