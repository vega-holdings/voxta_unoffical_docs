---
id: dDbVUIeBvpQUyJ5Et_e9O
slug: character-voice-sample-missing-dDbVUI
type: troubleshooting
title: Resolving Missing Voice Sample Errors and Managing F5-TTS Voices
topics:
  - troubleshooting
  - configuration
  - characters
  - integrations
keywords:
  - voice sample
  - missing file
  - character card
  - voice settings
  - audio
  - configuration
  - missing voice
  - F5-TTS
  - voice samples
  - custom voice
  - missing voices
  - transcription
  - audio files
  - VoiceSamples
  - F5TTS
  - TTS
  - character settings
confidence: 0.9
authority: 0.2
contributor: .vaan20
sources:
  - messageId: "1325460415614029899"
    author: .vaan20
    timestamp: 2025-12-19T05:05:52.656Z
    url: ""
created: 2025-12-19T05:05:52.656Z
updated: 2025-12-23T13:33:09.053Z
---

# Resolving Missing Voice Sample Errors and Managing F5-TTS Voices

> Learn how to fix errors caused by missing voice samples, including updating character cards, restoring default F5-TTS voices, and adding custom voice samples.

## Answer

# Resolving Missing Voice Sample Errors

When a character references a voice sample that is missing or not installed, you may encounter errors or silence. This guide covers general resolution steps and specific instructions for the F5-TTS provider.

## General Solution: Update Character Card

1. Open the **Character Card** for the affected character.
2. Navigate to the voice settings (usually under "Voice" or "Audio").
3. Change the voice sample to a valid file that exists in your assets, or select a different voice from your available list.
4. Save the character card.

After updating, the character should no longer produce errors related to missing voice samples.

## Managing F5-TTS Voice Samples

F5-TTS is a text-to-speech service that uses voice samples to generate speech. Voxta includes default voice samples, but you can also add your own custom voices.

### Prerequisites

- Install the F5TTS module via **Manage Modules** in Voxta.
- Ensure you are using the local F5 provider (not Voxta Cloud) for TTS, as custom voices are not supported via the cloud service.

### Restoring Missing Default Voice Samples

If the default F5-TTS voices are missing or appear but do not work, you can manually restore them:

1. Download the default voice samples package: [VoiceSamples-v1.0.0.zip](https://public.voxta.ai/voxta-voice-samples/VoiceSamples-v1.0.0.zip).
2. Extract the contents into the `Data/Audio/VoiceSamples` folder within your Voxta installation directory.

Normally, this process occurs automatically during installation. If the automatic installation failed, these steps will restore the default voices.

### Adding Custom Voice Samples

You can add your own voice samples to use with F5-TTS. Each voice requires an audio file and a corresponding transcription text file.

1. Navigate to the `Data/Audio/VoiceSamples` directory in your Voxta installation.
2. Place your audio sample file (e.g., `my_voice.wav`) in this folder.
3. Create a text file with the **exact same filename** as the audio file, but with a `.txt` extension (e.g., `my_voice.txt`).
4. Inside the text file, write the exact transcription of the spoken content in the audio sample.

After adding the files, restart Voxta. The new voice should appear in the character's voice configuration dropdown under the F5 provider.

### Notes

- Custom voices are only available when using the local F5 TTS provider. They are not supported via Voxta Cloud.
- Ensure the audio file format is compatible (WAV recommended). Check the F5-TTS documentation for supported formats.
- If you encounter issues, verify that the transcription matches the audio exactly and that there are no extra spaces or line breaks.

## Additional Tips

- If you cannot locate the missing voice sample, consider switching the character to a different TTS provider or a different voice that is correctly installed.
- For other TTS providers, refer to their respective documentation for managing voice samples.

---

*Extracted from Discord. Primary contributor: .vaan20*