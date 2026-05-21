---
id: Q0259xySyrAPAgybYTL1-
slug: adding-custom-voices-for-coqui-tts-Q0259x
type: tip
title: Adding Custom Voices for Coqui TTS and XTTS
topics:
  - configuration
  - integrations
keywords:
  - Coqui
  - TTS
  - XTTS
  - custom voices
  - voice samples
  - audio
  - folder path
  - character card
confidence: 0.8
authority: 0.2
contributor: _kinkyk9
sources: []
created: 2025-12-23T00:05:48.201Z
updated: 2025-12-23T02:33:36.609Z
---

# Adding Custom Voices for Coqui TTS and XTTS

> Learn how to add custom voices to Coqui TTS and XTTS by downloading pre-trained voice models or providing reference audio samples. Custom voices can be set globally or assigned to specific characters.

## Answer

# Adding Custom Voices for Coqui TTS and XTTS

Voxta supports custom voices with Coqui TTS and Coqui XTTS. You can either add pre-trained voice models (for Coqui TTS) or provide reference audio samples (for Coqui XTTS).

## Adding Pre-trained Voice Models (Coqui TTS)

1. Download custom voice model files from community resources (see below).
2. Place the downloaded files directly into the Coqui TTS folder (the installation directory where Coqui TTS model files are stored).
3. After restarting Voxta, the new voices should be available in the Coqui TTS settings.

### Community Resources for Voices

- [Voices List](https://kinkyk9.notion.site/Voices-135be973ffa780118c57d5061757bd7b?pvs=74)
- [Gallery](https://kinkyk9.notion.site/Gallery-136be973ffa780a3b1b2c7f01512d34b)

## Adding Reference Audio Samples (Coqui XTTS)

For the built-in Coqui XTTS service, you can use custom voices by providing short audio samples:

1. Place your audio sample files (e.g., WAV, MP3) in the `\voxta\Data\Audio\VoiceSamples` folder.
2. These voices will then appear in the Coqui XTTS settings. You can select a default voice globally or assign a specific voice to a character card.

## Using Custom Voices

Once added, custom voices can be selected in the Coqui TTS/XTTS settings. For character-specific voices, edit the character card and assign the desired voice.

---

*Extracted from Discord. Primary contributor: _kinkyk9*