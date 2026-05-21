---
id: mAwKXx0NKSpG8Zxg5RhX_
slug: fixing-text-cutoff-after-newlines-with-koboldcpp-mAwKXx
type: troubleshooting
title: Fixing Text Cutoff After Newlines with KoboldCpp
topics:
  - troubleshooting
  - integrations
  - llm
keywords:
  - KoboldCpp
  - newline
  - jumpline
  - cutoff
  - TTS
  - Orpheus
  - XTTS
  - multiline
confidence: 0.9
authority: 0.2
contributor: satelite9641
sources: []
created: 2025-12-22T23:13:13.727Z
updated: 2025-12-22T23:13:13.727Z
---

# Fixing Text Cutoff After Newlines with KoboldCpp

> Enable 'Allow Multilines' to prevent TTS and UI from cutting off text after line breaks when using KoboldCpp.

## Answer

This issue occurs when the system treats line breaks as the end of the generation or fails to capture subsequent text. 

**Solution:**
Enable the **Allow Multilines** setting in your configuration. This ensures that text generated after a newline is properly captured and processed by the TTS and UI.

---

*Extracted from Discord. Primary contributor: satelite9641*