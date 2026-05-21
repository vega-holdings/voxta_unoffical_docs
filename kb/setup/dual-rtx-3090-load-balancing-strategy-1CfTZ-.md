---
id: 1CfTZ-n1aNc3mYhL3crbK
slug: dual-rtx-3090-load-balancing-strategy-1CfTZ-
type: tip
title: Dual RTX 3090 Load Balancing Strategy
topics:
  - setup
  - performance
  - llm
keywords:
  - dual gpu
  - "3090"
  - hardware
  - psu
  - llama.cpp
  - mistral
  - load balancing
confidence: 0.7
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T23:18:12.317Z
updated: 2025-12-22T23:18:12.317Z
---

# Dual RTX 3090 Load Balancing Strategy

> Strategy for distributing Voxta workloads across two RTX 3090 GPUs.

## Answer

When running Voxta with dual RTX 3090 GPUs, a recommended configuration is to dedicate the second GPU entirely to the LLM (e.g., running a 24B Mistral GGUF model via llama.cpp) and place all other services on the primary GPU.

**Hardware Note:** Ensure your Power Supply Unit (PSU) is rated high enough to handle both GPUs running at 100% load simultaneously.

---

*Extracted from Discord. Primary contributor: sraura*