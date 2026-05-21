---
id: qn-wvRQNibWrzBTmLyp8Z
slug: network-security-for-koboldcpp-local-offloading-qn-wvR
type: qa
title: Network Security for KoboldCpp Local Offloading
topics:
  - setup
  - configuration
  - llm
keywords:
  - koboldcpp
  - network
  - security
  - firewall
  - port 5001
  - offloading
  - dual pc
  - NAT
  - LAN
confidence: 0.8
authority: 0.2
contributor: sraura
sources:
  - messageId: "1354297013906444319"
    author: sraura
    timestamp: 2025-12-22T21:43:11.530Z
    url: ""
  - messageId: "1354297638975176796"
    author: sraura
    timestamp: 2025-12-22T21:43:11.530Z
    url: ""
created: 2025-12-22T21:43:11.530Z
updated: 2025-12-22T21:43:11.530Z
---

# Network Security for KoboldCpp Local Offloading

> Opening port 5001 for KoboldCpp is generally safe on a local network behind NAT.

## Answer

Yes, generally speaking, if your local network is behind a NAT (Network Address Translation) router—indicated by local IP addresses starting with `192.168.x.x` or `10.0.x.x`—external traffic from the internet cannot access the port. The port is only accessible to other devices on your local network (LAN). Ensure your Wi-Fi is secured if using a wireless connection.

---

*Extracted from Discord. Primary contributor: sraura*