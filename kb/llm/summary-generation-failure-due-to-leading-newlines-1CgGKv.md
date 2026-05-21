---
id: 1CgGKvEX05x-5AhHhGJWC
slug: summary-generation-failure-due-to-leading-newlines-1CgGKv
type: troubleshooting
title: Summary Generation Failure Due to Leading Newlines
topics:
  - llm
  - troubleshooting
keywords:
  - summary
  - newlines
  - formatting
  - prompt engineering
  - generation failure
confidence: 0.5
authority: 0.2
contributor: minipasila
sources: []
created: 2025-12-22T23:09:12.632Z
updated: 2025-12-22T23:09:12.632Z
---

# Summary Generation Failure Due to Leading Newlines

> Leading newlines in LLM output can cause summary generation failures; instruct the model to use single-line output.

## Answer

Summary generation can fail if the LLM generates output starting with multiple newlines (e.g., two new lines at the start). 

**Solution:**
Modify the prompt instructions to explicitly tell the model not to create new lines and to keep the entire output on a single line.

---

*Extracted from Discord. Primary contributor: minipasila*