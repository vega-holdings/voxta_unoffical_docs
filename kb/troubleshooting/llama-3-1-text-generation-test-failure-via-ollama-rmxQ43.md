---
id: rmxQ43jNtM3WGUqY7jFz9
slug: llama-3-1-text-generation-test-failure-via-ollama-rmxQ43
type: troubleshooting
title: Llama 3.1 Text Generation Test Failure via Ollama
topics:
  - troubleshooting
  - llm
  - integrations
keywords:
  - llama3.1
  - ollama
  - openai compatible
  - text generation
  - test failure
  - qwen2.5
confidence: 0.9
authority: 0.2
contributor: .vaan20
sources:
  - messageId: "1332826873725583485"
    author: .vaan20
    timestamp: 2025-12-22T19:52:54.031Z
    url: ""
  - messageId: "1332851503160885299"
    author: .vaan20
    timestamp: 2025-12-22T19:52:54.031Z
    url: ""
created: 2025-12-22T19:52:54.031Z
updated: 2025-12-22T19:52:54.031Z
---

# Llama 3.1 Text Generation Test Failure via Ollama

> Llama 3.1 may fail Voxta's Text Generation test via Ollama; switching to Qwen 2.5 resolves the issue.

## Answer

When using Llama 3.1 via Ollama (configured as an OpenAI compatible service), the Text Generation test in Voxta may fail. The model might return a meta-response (e.g., `Response: What is the specific task or function you would like me to perform?`) instead of the expected text generation output, causing the test to be marked as a failure.

**Solution:**
This appears to be a model-specific behavior or prompt sensitivity with Llama 3.1 in this context. Switching to a different model, such as `qwen2.5`, has been observed to pass all tests (Text Gen, Summary, and Instruction) successfully.

---

*Extracted from Discord. Primary contributor: .vaan20*