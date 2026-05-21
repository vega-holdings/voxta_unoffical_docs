---
id: NXoGVm0D7IBupx7w5auSI
slug: connection-issues-with-listen-flag-on-localhost-NXoGVm
type: troubleshooting
title: Connection issues with --listen flag on localhost
topics:
  - configuration
  - troubleshooting
keywords:
  - --listen
  - localhost
  - LAN
  - connection
confidence: 0.6
authority: 0.2
contributor: minipasila
sources: []
created: 2025-12-22T23:16:20.311Z
updated: 2025-12-22T23:16:20.311Z
---

# Connection issues with --listen flag on localhost

> Remove the --listen flag if connecting locally to avoid connection issues.

## Answer

If you are running Voxta on the same machine you are connecting from (localhost), you generally do not need the `--listen` flag. This flag is intended for allowing connections from different devices on your local LAN. Try removing the flag if you are not connecting remotely.

---

*Extracted from Discord. Primary contributor: minipasila*