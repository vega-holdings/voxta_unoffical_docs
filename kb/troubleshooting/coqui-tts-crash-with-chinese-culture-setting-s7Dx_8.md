---
id: s7Dx_8qlE-glJ497Xv8GR
slug: coqui-tts-crash-with-chinese-culture-setting-s7Dx_8
type: troubleshooting
title: Coqui TTS Crash with Chinese Culture Setting
topics:
  - troubleshooting
  - configuration
keywords:
  - Coqui
  - AccessViolationException
  - pypinyin
  - Chinese
  - accent
  - crash
  - v135
confidence: 0.8
authority: 0.2
contributor: blakecasimir
sources: []
created: 2025-12-19T05:50:24.137Z
updated: 2025-12-19T05:50:24.137Z
---

# Coqui TTS Crash with Chinese Culture Setting

> Fix for System.AccessViolationException in Coqui TTS by changing character culture from Chinese to English.

## Answer

This error can occur if the character's culture is set to Chinese (sometimes used to influence accent), which triggers a dependency on `pypinyin` that may be missing or causing conflicts.

**Resolution:**
Change the character's culture setting to an English derivative to resolve the crash.

---

*Extracted from Discord. Primary contributor: blakecasimir*