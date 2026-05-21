---
id: 9jJNIYzT_BVvSX-r6wY-H
slug: exllamav2-error-job-requires-x-pages-only-y-available-9jJNIY
type: troubleshooting
title: "ExLlamaV2 Error: Job requires X pages (only Y available)"
topics:
  - troubleshooting
  - configuration
  - llm
keywords:
  - exllamav2
  - cache allocated
  - pages
  - 4096 tokens
  - text gen preset
  - context size
confidence: 0.9
authority: 0.2
contributor: sraura
sources:
  - messageId: "1388859555144007722"
    author: sraura
    timestamp: 2025-12-22T23:05:23.446Z
    url: ""
created: 2025-12-22T23:05:23.446Z
updated: 2025-12-22T23:05:23.446Z
---

# ExLlamaV2 Error: Job requires X pages (only Y available)

> Fix ExLlamaV2 cache allocation errors by increasing context size in Text Gen Preset.

## Answer

This error indicates that the conversation context has exceeded the allocated cache size (often defaulting to 4096 tokens). To fix this, you need to increase the context size limit.

1. Open the **Text Gen Preset** menu (click the cog wheel icon in the top right).
2. Locate the context size or token limit setting.
3. Increase the value (e.g., from 4096 to 8192) to accommodate longer conversations.

---

*Extracted from Discord. Primary contributor: sraura*