---
id: uY1udkbvMJd62Wse8ekRz
slug: communication-protocols-whisper-vs-comfyui-uY1udk
type: reference
title: "Communication Protocols: Whisper vs ComfyUI"
topics:
  - integrations
  - configuration
keywords:
  - whisper
  - comfyui
  - websocket
  - rest
  - architecture
  - interference
confidence: 0.6
authority: 0.2
contributor: mrdragonfox
sources: []
created: 2025-12-23T00:05:24.061Z
updated: 2025-12-23T00:05:24.061Z
---

# Communication Protocols: Whisper vs ComfyUI

> Whisper uses WebSockets while ComfyUI uses REST calls, preventing interference.

## Answer

In Voxta's architecture, **Whisper** (Speech-to-Text) operates over a dedicated WebSocket (`ws`) connection to handle real-time streaming. In contrast, **ComfyUI** integrations typically utilize standard REST API calls. This architectural difference means the two services should not technically interfere with one another.

---

*Extracted from Discord. Primary contributor: mrdragonfox*