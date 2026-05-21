---
id: F665Y12DZySx3rjQ_LU8O
slug: fixing-gibberish-output-via-regional-settings-F665Y1
type: troubleshooting
title: Fixing Gibberish Output via Regional Settings
topics:
  - troubleshooting
  - llm
keywords:
  - gibberish
  - region
  - locale
  - US
  - llamacpp
  - reinstall
  - garbage output
confidence: 0.6
authority: 0.2
contributor: gmouser26
sources: []
created: 2025-12-23T00:05:07.505Z
updated: 2025-12-23T00:05:07.505Z
---

# Fixing Gibberish Output via Regional Settings

> Resolving LLM gibberish output by switching Windows region to US and reinstalling llamacpp.

## Answer

If you are experiencing gibberish output on the latest version of Voxta, it may be related to non-US regional settings (likely affecting number formatting or encoding).

**User-Reported Fix:**
1. Change your Windows regional settings to **English (United States)**.
2. Reboot your computer.
3. Reinstall the `llamacpp` service within Voxta (or the specific LLM backend you are using).

---

*Extracted from Discord. Primary contributor: gmouser26*