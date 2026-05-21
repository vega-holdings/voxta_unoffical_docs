---
id: qzpOzLRj9umpHo0Kk-sHU
slug: interfacing-external-servers-with-virt-a-mate-qzpOzL
type: troubleshooting
title: Interfacing External Servers with Virt-a-Mate
topics:
  - integrations
  - troubleshooting
keywords:
  - Virt-a-Mate
  - VAM
  - external server
  - REST API
  - multiplayer plugin
  - unity
  - web requests
confidence: 0.8
authority: 0.2
contributor: kapi_tanos
sources:
  - messageId: "1422624125545086976"
    author: kapi_tanos
    timestamp: 2025-12-22T23:32:44.970Z
    url: ""
  - messageId: "1422782900864290889"
    author: kapi_tanos
    timestamp: 2025-12-22T23:32:44.970Z
    url: ""
  - messageId: "1423404416828178513"
    author: kapi_tanos
    timestamp: 2025-12-22T23:32:44.970Z
    url: ""
created: 2025-12-22T23:32:44.970Z
updated: 2025-12-22T23:32:44.970Z
---

# Interfacing External Servers with Virt-a-Mate

> Explains restrictions on VaM web requests and suggests using the Multiplayer Plugin as a bridge for external data.

## Answer

Directly calling REST APIs from a Virt-a-Mate plugin is often restricted because VaM (Unity-based) blacklists high-level web request classes for security. 

To interface an external server with VaM:
1. You need a VaM plugin that acts as a client to an intermediary local server.
2. A user reported success using the **VaM Multiplayer Plugin**, which contains local server files that can bridge the connection for bidirectional data transfer.

---

*Extracted from Discord. Primary contributor: kapi_tanos*