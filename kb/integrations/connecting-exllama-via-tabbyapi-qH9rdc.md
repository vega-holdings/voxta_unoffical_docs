---
id: qH9rdc08JQQwLCBo4h5ut
slug: connecting-exllama-via-tabbyapi-qH9rdc
type: tip
title: Connecting External LLMs to Voxta via OpenAI-Compatible Endpoints
topics:
  - integrations
  - configuration
  - llm
  - troubleshooting
keywords:
  - openai compatible
  - ollama
  - exllama
  - tabbyapi
  - external llm
  - presets
  - api
confidence: 0.8
authority: 0.2
contributor: mrdragonfox
sources: []
created: 2025-12-22T23:12:02.910Z
updated: 2025-12-23T13:51:38.443Z
---

# Connecting External LLMs to Voxta via OpenAI-Compatible Endpoints

> Configure Voxta to use external inference engines like Ollama or ExLlama (via TabbyAPI) by utilizing the OpenAI Compatible service provider.

## Answer

# Connecting External LLMs to Voxta via OpenAI-Compatible Endpoints

Voxta supports connecting to external Large Language Model (LLM) inference systems using the **OpenAI Compatible** service. This allows you to run models locally or on remote servers (e.g., using Ollama or ExLlama via TabbyAPI) while managing the connection through a standardized interface.

## General Configuration

To connect an external inference system:

1.  In Voxta, select **OpenAI Compatible** as the service provider (e.g., for the LLM service).
2.  Enter the **Base URL** or host address of your external server.
3.  If required, provide the API Key.

## Specific Integrations

### Ollama
Ollama provides a built-in OpenAI-compatible API, making integration with Voxta straightforward.

*   **Model Name Requirement:** In the Voxta **Presets** configuration, you must enter the exact model name as it appears in Ollama (e.g., `llama3`). Failing to do so will result in a `400 BadRequest` error with the message `"model is required"`.
*   **Endpoint:** Ensure you are using the correct OpenAI-compatible endpoint. Using the native Ollama endpoint (e.g., `http://localhost:11434/api/generate`) with the OpenAI Compatible service may result in a `404` error.
*   **Performance:** Users have reported very low latency (approximately 0.25 seconds) with this setup.

### ExLlama (via TabbyAPI)
To run ExLlama models externally, a popular method is to use **TabbyAPI**, which exposes an OpenAI-compatible API.

*   **Setup:** Start TabbyAPI with your desired model. The endpoint is typically `http://localhost:5000/v1`.
*   **Configuration:** Configure Voxta's OpenAI Compatible service to point to this URL.
*   **Benefits:** This approach allows you to offload inference to a dedicated environment or a different machine (such as a Linux server) for better resource management and performance.

## Troubleshooting

*   **"model is required" Error:** Verify that the exact model name is specified in the Voxta **Presets**.
*   **404 Error:** Check that the Base URL points to the OpenAI-compatible route (e.g., `/v1`), not the native API route of the specific tool.
*   **Connection Issues:** For remote connections, ensure the host machine is accessible over the network and that firewall or security settings allow traffic on the specified port.

---

*Extracted from Discord. Primary contributor: mrdragonfox*