---
id: PH8mojVqzLyDZ9txpSNRJ
slug: best-practices-for-preparing-voice-samples-PH8moj
type: tip
title: Best Practices for Preparing Voice Samples for Cloning and TTS
topics:
  - configuration
  - integrations
  - setup
keywords:
  - voice sample
  - audio sample
  - voice cloning
  - cloning
  - tts
  - silence
  - volume
  - clipping
  - background noise
  - transcript
  - audacity
  - recording
  - wav
confidence: 0.8
authority: 0.2
contributor: futurestorm
sources: []
created: 2025-12-22T22:42:40.438Z
updated: 2025-12-23T02:18:16.100Z
---

# Best Practices for Preparing Voice Samples for Cloning and TTS

> Guidelines for recording and formatting voice samples, including silence padding, volume control, clarity, transcription, and editing tools.

## Answer

# Best Practices for Preparing Voice Samples for Cloning and TTS

When preparing voice samples for voice cloning or text-to-speech (TTS) integration in Voxta, follow these guidelines to ensure optimal results.

## Audio Quality
- **Clarity**: Record in a quiet environment to avoid background noise. The audio should be crisp and clean.
- **Volume**: Ensure the sample is not too loud to avoid clipping or distortion. Normalize if necessary.

## Silence Padding
Add approximately **2 seconds of silence** at the beginning and end of the audio file. This helps the model process the sample correctly.

## Transcription
For voice cloning, create a text file with the exact same filename as the audio file (e.g., `sample.wav` and `sample.txt`). The text file should contain the verbatim transcript of what is spoken, including correct punctuation (periods, commas) to capture the natural flow.

## Editing Tools
You can use free audio editing software like **Audacity** to:
- Trim unwanted parts
- Add silence at the beginning and end
- Adjust volume levels
- Apply noise reduction (if needed)
- Export as `.wav` format (recommended)

By following these best practices, you'll improve the quality and reliability of your voice clones and TTS outputs.

---

*Extracted from Discord. Primary contributor: futurestorm*