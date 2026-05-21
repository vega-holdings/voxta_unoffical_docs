---
id: iA_w36ATe1bhsW7P7SniV
slug: verifying-voxy-connection-to-voxta-server-iA_w36
type: troubleshooting
title: Verifying Voxy Connection to Voxta Server
topics:
  - troubleshooting
  - integrations
keywords:
  - voxy
  - connection
  - debug
  - console
  - F2
  - logs
confidence: 0.7
authority: 0.2
contributor: daisukearamaki
sources: []
created: 2025-12-19T06:00:15.360Z
updated: 2025-12-19T06:00:15.360Z
---

# Verifying Voxy Connection to Voxta Server

> Use the F2 debug console in Voxta to verify Voxy connection logs.

## Answer

To check the connection status between Voxy and Voxta:

1. Close Voxy.
2. Focus the main Voxta application window.
3. Press **F2** to open the command line/debug console.
4. Re-open Voxy.
5. Observe the Voxta console for connection logs. A successful connection looks similar to:

```text
[DBG] New connection [ID] created.
[DBG] Sending negotiation response.
[DBG] Establishing new connection.
[DBG] Socket opened using Sub-Protocol: 'null'.
[INF] Client Voxta.Voxy version 1.0 authenticated
```

---

*Extracted from Discord. Primary contributor: daisukearamaki*