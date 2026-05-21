---
id: UptucUyahQsuUHv3XKhTZ
slug: free-local-tts-recommendations-UptucU
type: tip
title: "Local Text-to-Speech (TTS) Options: Free and Self-Hosted"
topics:
  - configuration
  - integrations
  - troubleshooting
keywords:
  - Kokoro
  - F5
  - F5-TTS
  - XTTS
  - Coqui
  - Silero
  - TTS
  - local
  - free
  - self-hosted
  - local inference
  - Orpheus
  - external server
confidence: 0.9
authority: 0.2
contributor: lapiro
sources: []
created: 2025-12-22T22:43:17.765Z
updated: 2025-12-23T04:34:20.343Z
---

# Local Text-to-Speech (TTS) Options: Free and Self-Hosted

> Voxta supports several free, self-hosted TTS engines that run locally, including XTTS, F5-TTS, Kokoro, Silero, and Orpheus. Cloud-based alternatives are available for users who prefer not to manage local inference.

## Answer

# Local Text-to-Speech (TTS) Options

Voxta supports several **free, self-hosted** Text-to-Speech solutions that run locally on your hardware, avoiding per-usage fees associated with cloud services. Running these services locally requires sufficient hardware, particularly a GPU, for acceptable performance.

## Supported Local TTS Engines

The following local TTS engines are currently supported in Voxta:

- **XTTS (Coqui)**: Available as a built-in service within Voxta or as a separate installable service (`xtts-api-server`). If the built-in XTTS service is difficult to configure or fails to cooperate, you can install an external XTTS server and connect Voxta to it via the API.
- **F5-TTS**: Open source, good at voice reproduction, with community feedback indicating quality comparable to Coqui XTTS.
- **Kokoro**: A free local TTS option.
- **Silero**: Another free local TTS engine.
- **Orpheus**: A recommended high-quality TTS alternative.

Among these, **Kokoro** and **F5-TTS** are particularly recommended as free local TTS solutions. **Orpheus** is also noted for its high quality.

## Cloud Alternatives

If you prefer not to run local inference, Voxta also integrates with cloud-based TTS services such as Voxta Cloud/11Labs and Azure. These services typically involve usage-based fees.

---

*Extracted from Discord. Primary contributor: lapiro*