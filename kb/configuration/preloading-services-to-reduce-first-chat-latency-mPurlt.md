---
id: mPurltqeAK8q8oT8ZmHRn
slug: preloading-services-to-reduce-first-chat-latency-mPurlt
type: qa
title: Preloading services to reduce first-chat latency
topics:
  - configuration
  - performance
keywords:
  - appsettings.json
  - preload
  - latency
  - startup
  - gpu
  - coqui
confidence: 0.8
authority: 0.2
contributor: sraura
sources:
  - messageId: "1342776778321825865"
    author: sraura
    timestamp: 2025-12-22T20:56:02.868Z
    url: ""
created: 2025-12-22T20:56:02.868Z
updated: 2025-12-22T20:56:02.868Z
---

# Preloading services to reduce first-chat latency

> Edit appsettings.json to preload services on startup instead of first chat.

## Answer

Yes, you can configure Voxta to load models (such as LLMs and Coqui TTS) to the GPU upon application startup rather than waiting for the first chat interaction.

This is done by editing the `appsettings.json` file in the Voxta root directory and setting the preloading option to `true`. 

**Note:** This shifts the loading time to the initial Voxta Server startup and keeps resources occupied. It is primarily recommended for Virt-A-Mate (VAM) users to ensure smooth initial interactions, but may not be preferred for general desktop use.

---

*Extracted from Discord. Primary contributor: sraura*