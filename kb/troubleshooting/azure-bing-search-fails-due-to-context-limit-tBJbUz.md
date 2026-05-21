---
id: tBJbUzcBL-_kheEnVk3p1
slug: azure-bing-search-fails-due-to-context-limit-tBJbUz
type: troubleshooting
title: Azure Bing Search Fails Due to Context Limit
topics:
  - troubleshooting
  - integrations
  - llm
keywords:
  - Azure Bing Search
  - context size
  - token limit
  - internet access
  - augmentation
  - 32k
confidence: 0.9
authority: 0.2
contributor: futurestorm
sources:
  - messageId: "1333896457685569710"
    author: futurestorm
    timestamp: 2025-12-22T20:01:14.468Z
    url: ""
  - messageId: "1334153444239347795"
    author: futurestorm
    timestamp: 2025-12-22T20:01:14.468Z
    url: ""
created: 2025-12-22T20:01:14.468Z
updated: 2025-12-22T20:01:14.468Z
---

# Azure Bing Search Fails Due to Context Limit

> Fix Azure Bing Search failures by increasing the LLM context size to handle search result data.

## Answer

If the Azure Bing Search module and augmentation are correctly configured but the feature fails, check the server terminal logs. An error indicating that the model does not have a big enough token size means the search results are exceeding the model's current context window.

**Solution:**
Increase the model's **Context Size** (e.g., to `32768` or 32k) in the model settings to accommodate the additional data from search results.

---

*Extracted from Discord. Primary contributor: futurestorm*