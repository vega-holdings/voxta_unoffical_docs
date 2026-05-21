---
id: Q4d1tfrQ-EToCIdK0ifP6
slug: increasing-volume-of-voxta-cloud-voices-Q4d1tf
type: troubleshooting
title: Increasing Volume of Voxta Cloud Voices
topics:
  - troubleshooting
  - configuration
  - integrations
keywords:
  - volume
  - gain
  - quiet voice
  - ElevenLabs
  - cloud voice
  - VaM
  - audio
confidence: 0.9
authority: 0.2
contributor: _kinkyk9
sources:
  - messageId: "1443014345154891981"
    author: _kinkyk9
    timestamp: 2025-12-22T23:55:54.041Z
    url: ""
  - messageId: "1443018493841903718"
    author: _kinkyk9
    timestamp: 2025-12-22T23:55:54.041Z
    url: ""
  - messageId: "1443020699597017271"
    author: _kinkyk9
    timestamp: 2025-12-22T23:55:54.041Z
    url: ""
  - messageId: "1442280699317981368"
    author: _kinkyk9
    timestamp: 2025-12-22T23:55:54.041Z
    url: ""
created: 2025-12-22T23:55:54.041Z
updated: 2025-12-22T23:55:54.041Z
---

# Increasing Volume of Voxta Cloud Voices

> Voxta Cloud voices lack direct volume controls; users must clone the voice with louder samples or switch voices.

## Answer

Currently, there is no direct gain or volume control for specific Voxta Cloud voices within the Voxta application settings.

**Workarounds:**
1. **Clone the Voice:** Use a TTS service (like an ElevenLabs subscription or a local TTS like F5/Chatterbox) to clone the desired voice using a louder source sample. You can then use this custom cloned voice in Voxta.
2. **Change the Voice:** Select a different voice model that has a naturally higher volume.
3. **Host App Audio Settings:** In applications like VaM, increasing the "Head Audio" source volume will increase the voice volume, but this also increases all other sounds attached to that source (e.g., breathing or moans), so it may not change the relative mix.

---

*Extracted from Discord. Primary contributor: _kinkyk9*