---
id: v4PMoRrwtJsWmMQ9cCi_X
slug: debugging-text-generation-service-failures-v4PMoR
type: tip
title: Debugging Text Generation Service Failures
topics:
  - troubleshooting
  - llm
keywords:
  - debugging
  - terminal
  - diagnostics
  - backend testing
confidence: 0.85
authority: 0.2
contributor: a1os353
sources:
  - messageId: "1415080116358352896"
    author: a1os353
    timestamp: 2025-12-22T23:30:05.379Z
    url: ""
  - messageId: "1415083052039929867"
    author: a1os353
    timestamp: 2025-12-22T23:30:05.379Z
    url: ""
  - messageId: "1415084053496856648"
    author: a1os353
    timestamp: 2025-12-22T23:30:05.379Z
    url: ""
  - messageId: "1415085519947169832"
    author: a1os353
    timestamp: 2025-12-22T23:30:05.379Z
    url: ""
created: 2025-12-22T23:30:05.379Z
updated: 2025-12-22T23:30:05.379Z
---

# Debugging Text Generation Service Failures

> Steps to diagnose and isolate text generation failures.

## Answer

If a text generation service (like ExLlamaV2) fails the diagnostic test or behaves inconsistently:

1. **Check Terminal Output:** Open the service's terminal window to view the actual error or generation output, as the UI may only show a generic failure message.
2. **Test Consistency:** If tests pass intermittently (e.g., 1 out of 5 times), it may indicate issues with prompt formatting, model parameters, or a bug in the specific service integration.
3. **Isolate the Service:** Try switching to a different backend (e.g., KoboldCPP or LlamaSharp) with the same model/prompt. If the new backend works, the issue likely lies with the original service implementation rather than the model itself.

---

*Extracted from Discord. Primary contributor: a1os353*