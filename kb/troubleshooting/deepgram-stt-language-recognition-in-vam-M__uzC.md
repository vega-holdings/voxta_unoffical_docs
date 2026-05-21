---
id: M__uzCrbo9O1y5eCf4s9j
slug: deepgram-stt-language-recognition-in-vam-M__uzC
type: troubleshooting
title: Deepgram STT Language Recognition in VAM
topics:
  - troubleshooting
  - configuration
  - integrations
keywords:
  - Deepgram
  - Chinese
  - VAM
  - STT
  - voice recognition
  - locale
  - Culture
confidence: 0.8
authority: 0.2
contributor: sraura
sources:
  - messageId: "1343845987575267409"
    author: sraura
    timestamp: 2025-12-22T21:01:28.778Z
    url: ""
created: 2025-12-22T21:01:28.778Z
updated: 2025-12-22T21:01:28.778Z
---

# Deepgram STT Language Recognition in VAM

> Fixing Deepgram language recognition issues in VAM by adjusting character locale settings.

## Answer

If Deepgram works in the Playground but not in VAM, the character's specific locale settings are likely defaulting to English. To fix this:

1. Open the Voxta app.
2. Edit the character configuration for the specific character used in VAM.
3. Change the **Culture (Language)** setting to the target language.
4. Ensure the **Language** setting in the **Voice** menu is also updated.

This ensures the system processes audio input expecting the correct language for that character.

---

*Extracted from Discord. Primary contributor: sraura*