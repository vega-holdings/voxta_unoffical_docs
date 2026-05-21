---
id: 2q7nx5l8O9NJQ2l6qiKSD
slug: whisper-stt-cutting-off-speech-in-voxta-v141-v142-2q7nx5
type: troubleshooting
title: Whisper STT cutting off speech in Voxta v141/v142
topics:
  - troubleshooting
  - integrations
keywords:
  - Whisper
  - STT
  - cutoff
  - Voxy Desktop
  - v141
  - v142
  - beta.18
  - faster-whisper
confidence: 0.8
authority: 0.2
contributor: caz2727
sources: []
created: 2025-12-22T21:38:04.856Z
updated: 2025-12-22T21:38:04.856Z
---

# Whisper STT cutting off speech in Voxta v141/v142

> Updating Voxy Desktop App resolves Whisper STT cutoff issues in Voxta v141/v142.

## Answer

This issue has been observed when using Voxta Server v141 or v142 with an outdated version of the Voxy Desktop App. Updating the Voxy Desktop App to version `v1.0.0-beta.18` or later resolves the issue where Whisper cuts off speech prematurely or fails to recognize input reliably. The user reported this behavior while using the `faster-whisper-large-v3-turbo-ct2` model.

---

*Extracted from Discord. Primary contributor: caz2727*