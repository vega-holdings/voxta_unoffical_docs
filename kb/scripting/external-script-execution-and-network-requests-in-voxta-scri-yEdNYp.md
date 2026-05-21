---
id: yEdNYp8Y6TmrSmdjXb54R
slug: external-script-execution-and-network-requests-in-voxta-scri-yEdNYp
type: qa
title: Voxta Scripting Limitations and External Integration
topics:
  - scripting
  - integrations
keywords:
  - sandbox
  - security
  - websockets
  - http
  - external scripts
  - provider
  - authentication
  - limitations
confidence: 1
authority: 0.2
contributor: acidbubbles
sources: []
created: 2025-12-22T22:57:25.484Z
updated: 2025-12-23T13:52:59.495Z
---

# Voxta Scripting Limitations and External Integration

> Voxta scripts are sandboxed and cannot directly execute external code or make network requests. To communicate with external applications, you must use an authenticated client connected via WebSockets or HTTP.

## Answer

### Scripting Limitations
Voxta scenario scripting is tightly sandboxed by design to ensure the security of shared content. Consequently, scripts have the following restrictions:

*   **No Direct External Execution:** You cannot directly call external scripts (such as Python) from within a Voxta script.
*   **No Direct Network Requests:** Scripts cannot make direct network requests, including REST or HTTP calls.

### External Integration Methods
While direct calls from within the script are blocked, you can integrate external applications by connecting them to the Voxta server as clients.

**Sending Messages to Voxta**
To send messages or data *to* Voxta from an external source, you cannot simply forward text. Instead, you must:

1.  Utilize an **authenticated client** acting as a provider.
2.  Connect via **WebSockets** or **HTTP**.
3.  Handle authentication and connection protocols. It is recommended to use existing provider templates to simplify this process.

**Listening for Voxta Events**
To allow an external application to react to Voxta events, you can connect the application via **WebSockets**. This allows the external app to listen for custom actions or events triggered by the Voxta script. Note that this is considered a complex implementation.

---

*Extracted from Discord. Primary contributor: acidbubbles*