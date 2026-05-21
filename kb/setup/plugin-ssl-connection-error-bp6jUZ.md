---
id: bp6jUZrnubwBXGf-L_bEI
slug: plugin-ssl-connection-error-bp6jUZ
type: troubleshooting
title: Plugin SSL Connection Error
topics:
  - setup
  - troubleshooting
keywords:
  - ssl
  - https
  - certificate
  - plugin
  - connection error
  - reverse proxy
  - nginx
confidence: 0.9
authority: 0.2
contributor: acidbubbles
sources:
  - messageId: "1359647319322267881"
    author: acidbubbles
    timestamp: 2025-12-22T22:34:51.800Z
    url: ""
  - messageId: "1359938113941667920"
    author: acidbubbles
    timestamp: 2025-12-22T22:34:51.800Z
    url: ""
created: 2025-12-22T22:34:51.800Z
updated: 2025-12-22T22:34:51.800Z
---

# Plugin SSL Connection Error

> Use a reverse proxy or tunnel for HTTPS connections to Voxta Server instead of direct app configuration.

## Answer

This error indicates an issue with the HTTPS certificate setup. Configuring TLS directly within the self-hosted Voxta application is not the standard method for local services.

**Recommended Solution:**
Use a reverse proxy or tunneling tool to handle HTTPS/TLS termination instead of configuring it directly in the app. Common tools include:
*   Nginx (Reverse Proxy)
*   Cloudflared
*   Localtunnel
*   Devtunnel

---

*Extracted from Discord. Primary contributor: acidbubbles*