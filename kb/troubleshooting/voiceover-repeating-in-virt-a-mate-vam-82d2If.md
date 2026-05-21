---
id: 82d2IfPuLNTKAOtqM9wpl
slug: voiceover-repeating-in-virt-a-mate-vam-82d2If
type: troubleshooting
title: Voiceover Repeating in Virt-A-Mate (VaM)
topics:
  - troubleshooting
  - integrations
keywords:
  - VaM
  - Virt-A-Mate
  - voiceover
  - repeating
  - loop
  - headaudio
  - audio source
confidence: 1
authority: 0.2
contributor: futurestorm
sources: []
created: 2025-12-22T23:57:52.014Z
updated: 2025-12-22T23:57:52.014Z
---

# Voiceover Repeating in Virt-A-Mate (VaM)

> Fix for voiceover audio repeating in VaM caused by the headaudio source loop setting.

## Answer

This issue is often caused by the `headaudio` source in Virt-A-Mate (VaM) being set to **Loop**. 

**Solution:**
1. Inspect the `headaudio` source on the character (Person atom).
2. Ensure the **Loop** setting is disabled.
3. Check for other plugins that might be utilizing or conflicting with the `headaudio` source.

---

*Extracted from Discord. Primary contributor: futurestorm*