---
id: QzkewN47TUUEprlju9SAO
slug: openrouter-memory-extraction-error-QzkewN
type: troubleshooting
title: OpenRouter Memory Extraction Error
topics:
  - troubleshooting
  - integrations
  - llm
keywords:
  - OpenRouter
  - memory extraction
  - summarization
  - Expected at least once completion choice
  - "Finish reason: stop"
confidence: 0.8
authority: 0.2
contributor: .o.k.a.y.
sources: []
created: 2025-12-22T23:42:57.846Z
updated: 2025-12-22T23:42:57.846Z
---

# OpenRouter Memory Extraction Error

> Fix OpenRouter memory extraction errors by changing the summarization model.

## Answer

This error typically occurs when the LLM selected for the **Summarization** task fails to generate a valid response or returns an empty completion. 

**Solution:**
Change the model selected for summarization in your Memory service settings. Switching to a different, more robust model (e.g., a standard GPT or Llama variant) usually resolves the issue.

---

*Extracted from Discord. Primary contributor: .o.k.a.y.*