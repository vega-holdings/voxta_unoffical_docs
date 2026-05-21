---
id: NgDGMYhIknuiC1X41GKCa
slug: integrating-custom-tts-services-via-remote-tts-NgDGMY
type: tip
title: Integrating Custom TTS Services via Remote TTS (HTTP API)
topics:
  - integrations
  - configuration
keywords:
  - remote tts
  - http api
  - custom tts
  - container
  - json request
  - openai compatible
confidence: 0.9
authority: 0.2
contributor: mrdragonfox
sources: []
created: 2025-12-22T23:11:59.563Z
updated: 2025-12-23T02:26:59.861Z
---

# Integrating Custom TTS Services via Remote TTS (HTTP API)

> Voxta supports integration of external text-to-speech services using the Remote TTS/HTTP API feature. You can connect to any TTS service that exposes an OpenAI-compatible or generic HTTP API by configuring the appropriate JSON request.

## Answer

If you are running a Text-to-Speech (TTS) service independently (e.g., in a Docker container) that isn't natively supported by Voxta, you can integrate it using the **Text To Speech HTTP API** (Remote TTS) service.

To use this feature, your external TTS service must expose an HTTP API. Voxta supports two common patterns:

- **OpenAI‑compatible TTS API** – If your service follows the OpenAI TTS endpoint format, Voxta can communicate with it directly.
- **Generic HTTP API** – For other services, you can define a custom JSON request body that matches the API requirements of your service.

In both cases, you will need to configure the endpoint URL and, for generic APIs, the exact JSON structure expected by the service. Voxta will then send HTTP requests to that endpoint and play the returned audio.

To set up a custom TTS service:

1. In Voxta, go to **Services** → **Text To Speech** and select **Remote TTS/HTTP API**.
2. Provide the base URL of your TTS service.
3. If using a generic API, define the request body (JSON) and any required headers.
4. Test the connection and save.

Once configured, Voxta will use your custom TTS service for speech generation.

---

*Extracted from Discord. Primary contributor: mrdragonfox*