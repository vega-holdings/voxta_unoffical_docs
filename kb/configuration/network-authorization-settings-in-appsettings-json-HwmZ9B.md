---
id: HwmZ9BAuvIo_hjc1Mlcjy
slug: network-authorization-settings-in-appsettings-json-HwmZ9B
type: reference
title: Network Authorization Settings in appsettings.json
topics:
  - configuration
  - troubleshooting
keywords:
  - appsettings.json
  - PreauthorizedHosts
  - PreauthorizedIpAddresses
  - localhost
  - 127.0.0.1
  - authorization
confidence: 0.8
authority: 0.2
contributor: daisukearamaki
sources: []
created: 2025-12-19T06:00:33.051Z
updated: 2025-12-19T06:00:33.051Z
---

# Network Authorization Settings in appsettings.json

> Configuration keys for pre-authorizing hosts and IPs in appsettings.json.

## Answer

To configure network access authorization, check the `appsettings.json` file in the Voxta installation directory.

Relevant keys:
- `PreauthorizedHosts`
- `PreauthorizedIpAddresses`

By default, `localhost` and `127.0.0.1` are pre-authorized to allow local connections.

---

*Extracted from Discord. Primary contributor: daisukearamaki*