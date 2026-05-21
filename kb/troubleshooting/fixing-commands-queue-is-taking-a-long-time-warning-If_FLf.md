---
id: If_FLfK9Xy-9ygb8nvwKQ
slug: fixing-commands-queue-is-taking-a-long-time-warning-If_FLf
type: troubleshooting
title: Troubleshooting Command Queue Warnings and Coqui TTS Issues
topics:
  - troubleshooting
  - performance
  - integrations
  - configuration
keywords:
  - commands queue
  - latency
  - coqui
  - deepspeed
  - stt
  - tts
  - hang
  - freeze
  - F2
  - crash
  - interruption
  - audio pauses
  - Voice Playground
  - chat start
confidence: 0.8
authority: 0.2
contributor: sraura
sources:
  - messageId: "1350928397785628723"
    author: sraura
    timestamp: 2025-12-22T21:33:42.389Z
    url: ""
created: 2025-12-22T21:33:42.389Z
updated: 2025-12-23T13:59:50.166Z
---

# Troubleshooting Command Queue Warnings and Coqui TTS Issues

> Resolves 'Commands queue is taking a long time' warnings by addressing Coqui TTS issues like DeepSpeed incompatibility and crashes. Includes steps for isolating services and using diagnostic tools.

## Answer

The "Commands queue is taking a long time" warning typically indicates that an audio service (TTS or STT) is stalling or processing too slowly. This is often related to specific configurations within Coqui TTS.

## Coqui TTS Known Issues

- **DeepSpeed Incompatibility**: DeepSpeed cannot be used with Coqui TTS currently. It may cause playback issues or prevent the chat from starting entirely. Ensure the **DeepSpeed** toggle is disabled in the Coqui service settings.
- **Interrupting Replies**: Interrupting a character's reply may crash the TTS or chat service. If this occurs, a restart of Voxta is usually required to fix the issue.
- **Audio Pauses**: If audio plays with silent pauses (as if waiting for missing words), the issue is likely with the specific voice sample being used.

## Troubleshooting Steps

1.  **Isolate the Issue**: Temporarily disable STT or TTS individually in the settings (cog wheel) to determine which service is triggering the warning.
2.  **Test Voices**: Use the **Voice Playground** to test specific voices and isolate issues related to audio pauses or quality.
3.  **Review Logs**: Press **F2** to open the diagnostic terminal. Check for specific error messages related to the stalled service or to see exactly when audio cuts occur.
4.  **Report Bugs**: If reporting a bug, include your GPU model and available VRAM to assist with diagnosis.

---

*Extracted from Discord. Primary contributor: sraura*