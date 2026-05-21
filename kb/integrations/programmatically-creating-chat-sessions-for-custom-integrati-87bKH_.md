---
id: 87bKH_QtbJQiiuUvYCeuf
slug: programmatically-creating-chat-sessions-for-custom-integrati-87bKH_
type: qa
title: Programmatically creating chat sessions for custom integrations
topics:
  - integrations
  - scripting
keywords:
  - IChatSession
  - IChatSessionFactory
  - custom client
  - SDK
  - Discord bot
  - module
  - Voxta.Abstractions
confidence: 0.9
authority: 0.2
contributor: acidbubbles
sources:
  - messageId: "1441311271617171467"
    author: acidbubbles
    timestamp: 2025-12-22T23:55:23.541Z
    url: ""
  - messageId: "1441861287251415040"
    author: acidbubbles
    timestamp: 2025-12-22T23:55:23.541Z
    url: ""
  - messageId: "1441865159873265674"
    author: acidbubbles
    timestamp: 2025-12-22T23:55:23.541Z
    url: ""
created: 2025-12-22T23:55:23.541Z
updated: 2025-12-22T23:55:23.541Z
---

# Programmatically creating chat sessions for custom integrations

> Use a custom client to manage chat sessions rather than internal SDK interfaces.

## Answer

The Voxta Module SDK available on NuGet does not expose internal session management interfaces like `IChatSessionFactory` or `IChatSessionManager`. While these interfaces exist in `Voxta.Abstractions`, relying on them directly is unstable as internal APIs may change without warning.

Instead of instantiating sessions directly within a server-side module, the recommended approach is to implement a **custom client** that connects to the Voxta server to initiate and manage chat sessions.

---

*Extracted from Discord. Primary contributor: acidbubbles*