---
id: vz6jz0g8pkIxT0141SEGV
slug: isolating-custom-tts-dependencies-vz6jz0
type: tip
title: Isolating Custom TTS Dependencies
topics:
  - integrations
  - configuration
  - troubleshooting
keywords:
  - venv
  - dependencies
  - remote tts
  - isolation
  - python
  - external service
confidence: 0.8
authority: 0.2
contributor: mrdragonfox
sources: []
created: 2025-12-22T23:12:45.929Z
updated: 2025-12-22T23:12:45.929Z
---

# Isolating Custom TTS Dependencies

> Run custom TTS services in a separate venv and connect via Remote TTS to avoid dependency conflicts.

## Answer

To prevent unexpected dependency issues when using custom Text-to-Speech (TTS) solutions, it is recommended to run the service externally in a dedicated virtual environment (venv) and connect it to Voxta via the Remote TTS interface. This ensures that the custom service's libraries do not conflict with Voxta's internal Python environment.

---

*Extracted from Discord. Primary contributor: mrdragonfox*