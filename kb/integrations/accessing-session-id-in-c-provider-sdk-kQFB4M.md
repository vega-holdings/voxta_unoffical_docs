---
id: kQFB4M6UXkm9_sunMbvSc
slug: accessing-session-id-in-c-provider-sdk-kQFB4M
type: qa
title: Accessing Session ID in C# Provider SDK
topics:
  - integrations
keywords:
  - C#
  - ProviderBase
  - SessionId
  - ContextProvider
  - SDK
confidence: 0.9
authority: 0.2
contributor: yeti_86
sources: []
created: 2025-12-19T06:02:20.156Z
updated: 2025-12-19T06:02:20.156Z
---

# Accessing Session ID in C# Provider SDK

> Access the active session ID using ProviderBase.SessionId in the C# SDK.

## Answer

You can access the session ID directly via the `ProviderBase.SessionId` property.

The `ProviderBase` class manages the state of the current session. This is particularly important for Context Providers, which require a valid `sessionId` to inject context, unlike Action Providers which may not strictly require it for all operations.

---

*Extracted from Discord. Primary contributor: yeti_86*