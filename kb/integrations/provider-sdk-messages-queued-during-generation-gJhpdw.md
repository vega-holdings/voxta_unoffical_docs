---
id: gJhpdw93tYurltQe1mjnB
slug: provider-sdk-messages-queued-during-generation-gJhpdw
type: troubleshooting
title: Provider SDK messages queued during generation
topics:
  - integrations
  - troubleshooting
keywords:
  - provider sdk
  - interruption
  - message queue
  - latency
  - generation
confidence: 0.6
authority: 0.2
contributor: djsoapyknuckles
sources: []
created: 2025-12-22T23:03:32.159Z
updated: 2025-12-22T23:03:32.159Z
---

# Provider SDK messages queued during generation

> Provider SDK messages are queued and processed only after the current character generation finishes.

## Answer

Messages sent from a provider (acting on behalf of a user) are typically queued into the command queue. The Voxta server generally waits to process the next chat message until the current reply is finished generating. Unlike a full client, a provider might not have the native ability to send an 'interrupt' signal to stop the current generation immediately.

---

*Extracted from Discord. Primary contributor: djsoapyknuckles*