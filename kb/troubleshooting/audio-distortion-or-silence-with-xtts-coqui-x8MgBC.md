---
id: x8MgBCrPwjjCev2aGGNw9
slug: audio-distortion-or-silence-with-xtts-coqui-x8MgBC
type: troubleshooting
title: Resolving XTTS/Coqui Audio Distortion, Silence, and Quality Issues
topics:
  - troubleshooting
  - integrations
keywords:
  - xtts
  - coqui
  - tts
  - no sound
  - distortion
  - deformed sound
  - lips moving
  - voice file
  - reference audio
  - voice sample
  - artifacts
confidence: 0.8
authority: 0.2
contributor: sraura
sources:
  - messageId: "1325215553014468759"
    author: sraura
    timestamp: 2025-12-19T05:03:36.582Z
    url: ""
  - messageId: "1325228800644222987"
    author: sraura
    timestamp: 2025-12-19T05:03:36.582Z
    url: ""
created: 2025-12-19T05:03:36.582Z
updated: 2025-12-23T04:38:27.478Z
---

# Resolving XTTS/Coqui Audio Distortion, Silence, and Quality Issues

> Poor quality reference audio files can cause distortion, silence, or artifacts in XTTS/Coqui text-to-speech generations. Replacing the character's voice sample with a clean, high-quality audio file typically resolves these issues.

## Answer

## Issue

When using XTTS (Coqui) for text-to-speech, you may encounter distorted audio, silence (no sound), or other artifacts in the generated speech.

## Cause

The most common cause is a poor-quality character voice reference file (the sample audio used to define the voice). Issues with the reference file include:

- Background noise
- Audio clipping (distortion from too high volume)
- Low overall audio quality

Even if the sample sounds acceptable during editing, it may contain subtle characteristics that degrade TTS output.

## Solution

Replace the character's voice reference file with a cleaner, higher-quality audio sample. Ensure the new file is recorded in a quiet environment, has no clipping, and uses a lossless or high-bitrate format (WAV recommended). After updating, regenerate the TTS audio to see if the issue is resolved.

---

*Extracted from Discord. Primary contributor: sraura*