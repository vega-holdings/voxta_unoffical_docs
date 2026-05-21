---
id: kLJTLGe-qTqkDEUXepDO-
slug: slow-performance-with-llama-cpp-backend-kLJTLG
type: troubleshooting
title: Slow Performance with llama.cpp Backend
topics:
  - performance
  - llm
  - integrations
keywords:
  - llama.cpp
  - KoboldCPP
  - slow
  - lag
  - gpu offload
confidence: 0.8
authority: 0.2
contributor: aaron_eggsy
sources: []
created: 2025-12-22T22:41:15.172Z
updated: 2025-12-22T22:41:15.172Z
---

# Slow Performance with llama.cpp Backend

> Switching from llama.cpp to KoboldCPP may resolve speed issues.

## Answer

A user reported experiencing slow speeds with the direct `llama.cpp` integration. Switching to **KoboldCPP** (which also supports GGUF models and integrates with Voxta) resolved the performance issue for them.

*Note: Since KoboldCPP is built on top of llama.cpp, performance issues are often related to configuration, specifically GPU layer offloading. Ensure your backend is configured to offload layers to the GPU.*

---

*Extracted from Discord. Primary contributor: aaron_eggsy*