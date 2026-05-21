---
id: V4StW5DVzSTKzoq6D49xY
slug: voxta-missing-from-audio-settings-V4StW5
type: troubleshooting
title: Voxta Appears in Audio Mixer Only When Recording Service is Active
topics:
  - troubleshooting
  - setup
keywords:
  - audio settings
  - whisper
  - recording service
  - invisible
  - mixer
  - windows sound mixer
  - volume control
  - visibility
confidence: 0.8
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T22:02:13.898Z
updated: 2025-12-23T04:39:04.416Z
---

# Voxta Appears in Audio Mixer Only When Recording Service is Active

> Voxta becomes visible in the system audio settings and Windows Sound Mixer only after a recording service (e.g., Whisper) is started. Playback services alone do not trigger this visibility.

## Answer

Voxta (Server or Desktop App) typically only appears in the system audio settings (including the Windows Sound Mixer) after a recording service (Speech-to-Text, such as Whisper) has been started.

Note that starting a playback service alone (Text-to-Speech, such as Coqui) does not cause Voxta to become visible in the audio mixer.

---

*Extracted from Discord. Primary contributor: sraura*