---
id: Qwj97eAtG9KwcK71oQciP
slug: voxta-component-architecture-providers-modules-and-clients-Qwj97e
type: reference
title: "Voxta Component Architecture: Providers, Modules, and Clients"
topics:
  - scripting
  - integrations
keywords:
  - architecture
  - sdk
  - provider
  - module
  - client
  - app
confidence: 0.9
authority: 0.2
contributor: acidbubbles
sources:
  - messageId: "1442030985003929753"
    author: acidbubbles
    timestamp: 2025-12-22T23:55:31.142Z
    url: ""
created: 2025-12-22T23:55:31.142Z
updated: 2025-12-22T23:55:31.142Z
---

# Voxta Component Architecture: Providers, Modules, and Clients

> Definitions of Provider, Module, and Client components in the Voxta architecture.

## Answer

When developing for Voxta, it is important to distinguish between the three main component types:

*   **Provider**: Provides augmentations by attaching to an existing chat started by a client (e.g., Voxy, Voxta UI, VaM). Uses the **Provider SDK**.
*   **Module**: Provides specific functions such as LLMs, TTS, or chat augmentations. Uses the **Modules SDK**.
*   **Client (or App)**: Acts as the front-end to Voxta (e.g., Voxta UI, Voxy, VaM). The client "owns" the chat session.

---

*Extracted from Discord. Primary contributor: acidbubbles*