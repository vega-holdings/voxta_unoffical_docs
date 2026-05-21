---
id: 2xsNJRBqZymc5L2FpF4tS
slug: offloading-llm-inference-to-a-separate-machine-2xsNJR
type: tip
title: Offloading LLM inference to a separate machine
topics:
  - configuration
  - llm
  - performance
keywords:
  - remote LLM
  - Oobabooga
  - KoboldCPP
  - offloading
  - listen argument
confidence: 0.9
authority: 0.2
contributor: .frond
sources:
  - messageId: "1322955741669228626"
    author: .frond
    timestamp: 2025-12-19T03:30:39.935Z
    url: ""
created: 2025-12-19T03:30:39.935Z
updated: 2025-12-19T03:30:39.935Z
---

# Offloading LLM inference to a separate machine

> Instructions for running LLMs on a secondary PC using Oobabooga or KoboldCPP.

## Answer

To reduce load on the machine running VAM and Voxta, you can run the LLM on a second computer:

1. On the second machine, run a compatible backend like **Oobabooga (Text Generation WebUI)** (for ExLlama models) or **KoboldCPP** (for GGUF models).
2. Launch the backend with the `--listen` argument to allow network connections.
3. In Voxta (on the main machine), configure the LLM service to connect to the API of the second machine.

---

*Extracted from Discord. Primary contributor: .frond*