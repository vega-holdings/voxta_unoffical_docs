---
id: 255Fobn-sWyVnSXcK73MP
slug: configuring-custom-services-and-integrations-255Fob
type: qa
title: Configuring Custom Services and Integrations
topics:
  - configuration
  - integrations
keywords:
  - custom service
  - STT
  - LLM
  - TTS
  - Oobabooga
  - XTTS
  - OpenAI Compatible
confidence: 0.8
authority: 0.2
contributor: .frond
sources:
  - messageId: "1333109315376255068"
    author: .frond
    timestamp: 2025-12-22T19:53:49.230Z
    url: ""
created: 2025-12-22T19:53:49.230Z
updated: 2025-12-22T19:53:49.230Z
---

# Configuring Custom Services and Integrations

> Clarifies that while STT is limited to built-ins, LLM and TTS services can connect to custom local/network clients.

## Answer

Direct custom configuration depends on the service type:

*   **STT (Speech-to-Text):** Generally limited to the built-in providers provided by Voxta.
*   **LLM (Text Generation):** Flexible. You can use the **OpenAI Compatible** service to connect to local or network clients (such as Oobabooga/Text Generation WebUI) or other APIs.
*   **TTS (Text-to-Speech):** Flexible. You can connect to external servers, such as the **XTTS server**, or use built-in options.

---

*Extracted from Discord. Primary contributor: .frond*