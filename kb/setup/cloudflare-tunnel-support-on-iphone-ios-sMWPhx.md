---
id: sMWPhxnjhv1G6zahSqpM5
slug: cloudflare-tunnel-support-on-iphone-ios-sMWPhx
type: troubleshooting
title: Cloudflare Tunnel Support on iPhone (iOS)
topics:
  - setup
  - troubleshooting
keywords:
  - Cloudflare
  - iPhone
  - iOS
  - HTTPS
  - audio
  - microphone
  - remote access
confidence: 0.6
authority: 0.2
contributor: 9binh
sources: []
created: 2025-12-22T23:04:03.935Z
updated: 2025-12-22T23:04:03.935Z
---

# Cloudflare Tunnel Support on iPhone (iOS)

> iPhone audio output works via Cloudflare if using HTTPS, though microphone input may fail.

## Answer

Users have reported partial success using Cloudflare Tunnels on iPhone (specifically tested on iPhone 13 mini).

**Details:**
*   **Audio Output:** Works, but **requires HTTPS**. Audio output generally fails when using HTTP.
*   **Microphone:** May not function correctly in this configuration.

---

*Extracted from Discord. Primary contributor: 9binh*