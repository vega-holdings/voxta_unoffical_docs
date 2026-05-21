---
id: dW35E8ilkTXCXFAtv3pFQ
slug: docker-support-for-voxta-server-dW35E8
type: qa
title: Community Docker Container for Voxta Server
topics:
  - setup
  - configuration
keywords:
  - docker
  - container
  - server
  - headless
  - linux
  - deployment
confidence: 0.8
authority: 0.2
contributor: a1os353
sources:
  - messageId: "1412862917509910659"
    author: a1os353
    timestamp: 2025-12-22T23:29:20.897Z
    url: ""
  - messageId: "1412895805420998747"
    author: a1os353
    timestamp: 2025-12-22T23:29:20.897Z
    url: ""
  - messageId: "1413108461012652054"
    author: a1os353
    timestamp: 2025-12-22T23:29:20.897Z
    url: ""
created: 2025-12-22T23:29:20.897Z
updated: 2025-12-23T03:27:05.997Z
---

# Community Docker Container for Voxta Server

> There is no official Docker support, but a community-maintained container is available. Provides links and notes.

## Answer

Voxta is primarily designed as a desktop application, but the server component can be run independently of the UI. While there is no official Docker support, community members have experimented with containerization.

A community-maintained Docker container is available, created by user Yvon:

- **GitHub repository:** [dockerized-voxta](https://github.com/yvon/dockerized-voxta)
- **Discord discussion:** [Docker thread](https://discord.com/channels/1125594592180445284/1312160433142108220)

Refer to the repository's README (especially the "Local Building and Running" section) for setup instructions. Note that the container may use an older Python version and might require modifications for your environment.

This container is not officially supported by the Voxta team; use at your own discretion.

---

*Extracted from Discord. Primary contributor: a1os353*