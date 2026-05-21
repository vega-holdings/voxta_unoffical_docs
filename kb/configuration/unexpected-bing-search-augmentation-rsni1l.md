---
id: rsni1lf3olECfqFWZjLSB
slug: unexpected-bing-search-augmentation-rsni1l
type: troubleshooting
title: Unexpected Bing Search Augmentation
topics:
  - configuration
  - integrations
  - troubleshooting
keywords:
  - Bing Web Search
  - Voxta Cloud
  - Azure
  - augmentation
  - logs
confidence: 0.9
authority: 0.2
contributor: acidbubbles
sources:
  - messageId: "1393092353363021945"
    author: acidbubbles
    timestamp: 2025-12-22T23:07:17.846Z
    url: ""
created: 2025-12-22T23:07:17.846Z
updated: 2025-12-22T23:07:17.846Z
---

# Unexpected Bing Search Augmentation

> Bing search augmentation may persist via Voxta Cloud settings even if the local Azure module is removed.

## Answer

This can occur because **Voxta Cloud** integrations also provide search functionality via Bing. Even if the local Azure module is removed, the cloud setting may still be active.

To resolve this:
1. Go to your **Voxta Cloud settings**.
2. Disable the search/Bing integration there.

---

*Extracted from Discord. Primary contributor: acidbubbles*