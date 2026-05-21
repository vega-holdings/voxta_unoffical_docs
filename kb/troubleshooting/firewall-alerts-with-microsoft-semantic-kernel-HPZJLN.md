---
id: HPZJLN2Wi3-oIlHowqUNn
slug: firewall-alerts-with-microsoft-semantic-kernel-HPZJLN
type: troubleshooting
title: Firewall alerts with Microsoft Semantic Kernel
topics:
  - troubleshooting
  - configuration
keywords:
  - firewall
  - microsoft semantic kernel
  - long term memory
  - huggingface
  - connection
  - ping
  - privacy
  - network
confidence: 0.9
authority: 0.2
contributor: sraura
sources:
  - messageId: "1349054056357953617"
    author: sraura
    timestamp: 2025-12-22T21:25:40.551Z
    url: ""
created: 2025-12-22T21:25:40.551Z
updated: 2025-12-22T21:25:40.551Z
---

# Firewall alerts with Microsoft Semantic Kernel

> Explains why Voxta connects to HuggingFace on chat start when using Semantic Kernel and Long Term Memory.

## Answer

When using the **Microsoft Semantic Kernel** module with **Long Term Memory** enabled, Voxta attempts to connect to `huggingface.co` (specifically port 443) when a chat starts.

This is a routine check for model updates or availability and does not transmit user data. If a firewall blocks this connection, error logs may appear. This network check is expected to be removed in future versions.

---

*Extracted from Discord. Primary contributor: sraura*