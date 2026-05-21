---
id: Z-6ECB43nbEbu4wa9eAJ7
slug: remote-service-connection-issues-dynamic-ip-Z-6ECB
type: troubleshooting
title: Remote Service Connection Issues (Dynamic IP)
topics:
  - troubleshooting
  - setup
  - integrations
keywords:
  - static ip
  - dhcp
  - network
  - remote services
  - xtts
  - connection denied
  - multi-pc
confidence: 0.9
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T23:06:36.232Z
updated: 2025-12-22T23:06:36.232Z
---

# Remote Service Connection Issues (Dynamic IP)

> Prevent remote service disconnections in multi-PC setups by assigning a Static IP to the hosting machine.

## Answer

This issue is often caused by the remote PC using a Dynamic IP (DHCP). When the router reassigns IP addresses (e.g., changing from `.60` to `.59` after a reboot), Voxta may lose connection or attempt to use cached connection details.

**Solution: Assign a Static IP**
1. On the PC hosting the remote services, open Windows **Network & Internet** settings.
2. Find your current network adapter properties and edit **IP assignment** from **DHCP** to **Manual**.
3. Enter a fixed **IPv4 address** (e.g., `192.168.1.100`), **Subnet mask** (usually `255.255.255.0`), and **Gateway** (your router's IP).
4. Update the service URL in Voxta one last time to match this new static IP.

This prevents the IP address from changing in the future, ensuring stable connectivity for multi-PC setups.

---

*Extracted from Discord. Primary contributor: sraura*