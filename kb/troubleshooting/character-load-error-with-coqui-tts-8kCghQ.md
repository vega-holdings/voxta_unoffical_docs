---
id: 8kCghQ-QPA0jw72mBW3-I
slug: character-load-error-with-coqui-tts-8kCghQ
type: troubleshooting
title: Character Load Error with Coqui TTS
topics:
  - troubleshooting
  - configuration
keywords:
  - Coqui
  - voice file
  - character card
  - load error
  - missing file
confidence: 0.8
authority: 0.2
contributor: _kinkyk9
sources:
  - messageId: "1439327105794969681"
    author: _kinkyk9
    timestamp: 2025-12-22T23:53:35.438Z
    url: ""
created: 2025-12-22T23:53:35.438Z
updated: 2025-12-22T23:53:35.438Z
---

# Character Load Error with Coqui TTS

> Missing voice files referenced in Character Cards cause load errors in Voxta when using Coqui.

## Answer

This error often occurs if the Character Card has a specific voice file specified in its metadata (set at the time of creation) that is missing from your local files. If the specific voice file is not found, Voxta will fail to load the character.

---

*Extracted from Discord. Primary contributor: _kinkyk9*