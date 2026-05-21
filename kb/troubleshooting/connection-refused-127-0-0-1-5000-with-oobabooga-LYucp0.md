---
id: LYucp0-9V7g0J0c967EjF
slug: connection-refused-127-0-0-1-5000-with-oobabooga-LYucp0
type: troubleshooting
title: Fix Connection Refused Errors When Connecting Voxta to Local LLMs
  (Oobabooga/Kobold)
topics:
  - troubleshooting
  - llm
  - configuration
keywords:
  - connection refused
  - 127.0.0.1:5000
  - 127.0.0.1:5001
  - "10061"
  - oobabooga
  - kobold
  - exllamav2
  - openai api
  - local llm
  - voxta
  - port
  - troubleshooting
confidence: 0.9
authority: 0.2
contributor: .vaan20
sources:
  - messageId: "1325414450194284564"
    author: .vaan20
    timestamp: 2025-12-19T05:04:47.499Z
    url: ""
  - messageId: "1325416855158001685"
    author: .vaan20
    timestamp: 2025-12-19T05:04:47.499Z
    url: ""
  - messageId: "1325420351680680049"
    author: .vaan20
    timestamp: 2025-12-19T05:04:47.499Z
    url: ""
created: 2025-12-19T05:04:47.499Z
updated: 2025-12-23T02:21:50.435Z
---

# Fix Connection Refused Errors When Connecting Voxta to Local LLMs (Oobabooga/Kobold)

> Resolve connection refused errors (e.g., 127.0.0.1:5000 or 5001) by ensuring your local LLM service is running, the correct IP and port are configured, and OpenAI compatibility is enabled. Alternatively, switch to the internal Exllamav2 provider.

## Answer

## Overview

When Voxta cannot connect to your selected local LLM provider (such as Oobabooga Text Generation WebUI or KoboldCPP), you may see a connection refused error referencing `127.0.0.1:5000`, `127.0.0.1:5001`, or a socket exception (error 10061). This indicates that Voxta is unable to reach the service on the specified port.

## Common Causes

- The LLM provider software is not running.
- The IP address or port in Voxta's settings does not match the one the provider is listening on.
- The provider is not configured to expose an OpenAI‑compatible API, which Voxta requires.

## Troubleshooting Steps

### 1. Ensure the LLM Provider Is Running

- **Oobabooga:** Launch the Text Generation WebUI. If you normally start it via command line, include the `--api` flag to enable the API.
- **KoboldCPP:** Start KoboldCPP and make sure the OpenAI API option is enabled (usually a checkbox or command‑line flag).

### 2. Verify Connection Details in Voxta

- In Voxta, open the service settings for your LLM provider.
- Confirm the **IP address** (typically `127.0.0.1` for localhost) and **port** match what your provider is using.
  - Oobabooga often uses port `5000`.
  - KoboldCPP often uses port `5001`.
- Check the provider's console or web interface to see the exact address it is listening on.

### 3. Enable OpenAI Compatibility

- **Oobabooga:** Start with the `--api` flag, or if already running, ensure the API extension is active.
- **KoboldCPP:** Enable the **OpenAI** option (e.g., `--useopenai` flag or the corresponding checkbox in the UI).

Voxta communicates using the OpenAI API format, so this step is essential.

## Alternative Solution: Use Exllamav2

If you prefer not to manage an external LLM server, you can switch to Voxta's internal Exllamav2 provider:

1. In Voxta, go to **Manage Services**.
2. Install **Exllamav2** (if not already installed).
3. Select Exllamav2 as the active provider in the slide‑out menu on the right.

This provider runs entirely within Voxta and eliminates the need for a separate LLM service.

## Additional Checks

- **Firewall/Antivirus:** Temporarily disable any software that might block local connections.
- **Port Conflicts:** Ensure no other application is using the same port (e.g., another instance of the LLM provider).
- **Restart Services:** After making changes, restart both the LLM provider and Voxta.

If the problem persists, consult the Voxta or provider documentation for more detailed guidance.

---

*Extracted from Discord. Primary contributor: .vaan20*