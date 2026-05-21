---
id: 1hyszP7hFmi-4mbrNhcV4
slug: choosing-between-character-reply-and-speech-replacements-1hyszP
type: troubleshooting
title: Choosing Between Character Reply and Speech Replacements
topics:
  - configuration
  - troubleshooting
keywords:
  - replacements
  - tags
  - speech
  - tts
  - character reply
  - filtering
confidence: 0.8
authority: 0.2
contributor: a1os353
sources: []
created: 2025-12-22T23:29:44.056Z
updated: 2025-12-22T23:29:44.056Z
---

# Choosing Between Character Reply and Speech Replacements

> Verify if the text exists in the raw character output to decide between reply or speech replacements.

## Answer

Check the raw character output (text logs). 

*   If the unwanted tag or text appears in the character's generated text, use **Character Reply Replacements**.
*   If the text does not appear in the character output but is still being heard (indicating it may be a TTS artifact or inserted during synthesis), use **Speech Replacements**.

---

*Extracted from Discord. Primary contributor: a1os353*