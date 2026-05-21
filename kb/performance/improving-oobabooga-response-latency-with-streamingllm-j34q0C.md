---
id: j34q0CZzcX5hYdnivsSKK
slug: improving-oobabooga-response-latency-with-streamingllm-j34q0C
type: tip
title: Improving Oobabooga Response Latency with StreamingLLM
topics:
  - performance
  - integrations
  - llm
keywords:
  - oobabooga
  - streaming-llm
  - latency
  - cache-reuse
  - context processing
confidence: 0.7
authority: 0.2
contributor: burnie964
sources: []
created: 2025-12-22T22:39:19.452Z
updated: 2025-12-22T22:39:19.452Z
---

# Improving Oobabooga Response Latency with StreamingLLM

> Enable --streaming-llm in Oobabooga to prevent prompt reprocessing and improve latency.

## Answer

To significantly reduce the time to first token (e.g., from 15+ seconds to under 3 seconds) when using Oobabooga (Text Generation WebUI) as a backend, enable the `--streaming-llm` option. 

This feature:
*   Prevents complete prompt reprocessing when the context length is filled.
*   Corresponds to the `--cache-reuse` functionality in `llama.cpp`.
*   Is particularly useful for long role-playing sessions where context fills up.

---

*Extracted from Discord. Primary contributor: burnie964*