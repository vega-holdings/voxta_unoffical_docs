---
id: 0xphJdD7-e-PByGp6HJks
slug: enabling-multi-gpu-support-in-voxta-0xphJd
type: qa
title: Enabling Multi-GPU Support in Voxta
topics:
  - configuration
  - performance
  - llm
keywords:
  - multi-gpu
  - split mode
  - koboldcpp
  - oobabooga
  - rtx 3090
  - dual gpu
confidence: 0.8
authority: 0.2
contributor: sraura
sources:
  - messageId: "1358663357996994654"
    author: sraura
    timestamp: 2025-12-22T22:34:25.544Z
    url: ""
created: 2025-12-22T22:34:25.544Z
updated: 2025-12-22T22:34:25.544Z
---

# Enabling Multi-GPU Support in Voxta

> Enable split mode in the internal Llama loader or use external backends like KoboldCPP/Oobabooga for multi-GPU setups.

## Answer

To utilize multiple GPUs with Voxta, you have two primary options:

1. **Internal Llama Loader:** Check the configuration for **split mode**.
2. **External Backends:** Use external programs like **KoboldCPP** or **Oobabooga** (Text Generation WebUI), which handle multi-GPU splitting natively, and connect them to Voxta.

---

*Extracted from Discord. Primary contributor: sraura*