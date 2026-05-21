---
id: T_znRDrJi9vJRFPDmMLr_
slug: external-database-access-for-ai-context-T_znRD
type: qa
title: External Database Access for AI Context
topics:
  - integrations
  - scripting
  - configuration
keywords:
  - database
  - context
  - node-red
  - external memory
  - actions
confidence: 0.8
authority: 0.2
contributor: yeti_86
sources:
  - messageId: "1336823773168406549"
    author: yeti_86
    timestamp: 2025-12-22T20:24:50.440Z
    url: ""
  - messageId: "1336830383043510314"
    author: yeti_86
    timestamp: 2025-12-22T20:24:50.440Z
    url: ""
created: 2025-12-22T20:24:50.440Z
updated: 2025-12-22T20:24:50.440Z
---

# External Database Access for AI Context

> Explains that direct DB access is not supported but context can be injected via Actions or Stages.

## Answer

Direct access where the AI autonomously searches a database is currently out of scope. However, you can implement a workaround by retrieving data externally (e.g., via Node-RED) and injecting it into the AI's context. This can be triggered via an **Action**, a **Stage**, or when a chat session starts.

---

*Extracted from Discord. Primary contributor: yeti_86*