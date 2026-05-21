---
id: f0mbLCCBQsEkfbcy5jYew
slug: making-http-requests-from-scripts-f0mbLC
type: qa
title: Handling HTTP Requests and Webhooks in Scripts
topics:
  - scripting
  - integrations
keywords:
  - http request
  - fetch
  - webhook
  - sample provider
  - c#
  - javascript
  - limitations
  - network
confidence: 0.9
authority: 0.2
contributor: acidbubbles
sources:
  - messageId: "1376872183019606097"
    author: acidbubbles
    timestamp: 2025-12-22T22:59:19.245Z
    url: ""
  - messageId: "1377127400726462495"
    author: acidbubbles
    timestamp: 2025-12-22T22:59:19.245Z
    url: ""
created: 2025-12-22T22:59:19.245Z
updated: 2025-12-23T13:55:52.850Z
---

# Handling HTTP Requests and Webhooks in Scripts

> Voxta scenario scripts do not support direct HTTP requests or network calls. To handle webhooks and external HTTP requests, use the recommended Sample Provider App.

## Answer

### Limitations of Scenario Scripts
The JavaScript environment used for Voxta scenario scripts does not support making direct HTTP requests. This means standard network calls, such as using the `fetch` API, are not available within the script context.

### Recommended Solution: Sample Provider App
To handle HTTP requests and webhooks, it is recommended to use the **Sample Provider App** (C#).

Routing external calls through a provider app ensures:
*   Proper functionality of network requests.
*   Correct integration with the context window.
*   A more robust connection compared to attempting direct script calls.

---

*Extracted from Discord. Primary contributor: acidbubbles*