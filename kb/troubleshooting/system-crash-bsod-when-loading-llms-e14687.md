---
id: e14687IaIxyc0geoo01zt
slug: system-crash-bsod-when-loading-llms-e14687
type: troubleshooting
title: System Crash (BSOD) when loading LLMs
topics:
  - troubleshooting
  - llm
  - performance
keywords:
  - BSOD
  - crash
  - blue screen
  - memory
  - swap
  - OOM
  - RAM
confidence: 0.8
authority: 0.2
contributor: sraura
sources:
  - messageId: "1342130836790841465"
    author: sraura
    timestamp: 2025-12-22T20:52:21.488Z
    url: ""
created: 2025-12-22T20:52:21.488Z
updated: 2025-12-22T20:52:21.488Z
---

# System Crash (BSOD) when loading LLMs

> BSODs during LLM loading are often due to memory exhaustion or swap file issues.

## Answer

This issue is typically caused by running out of system memory (RAM/VRAM) and potentially filling the Windows swap/page file (or having swap disabled). 

Common triggers include:
- Attempting to load two or more LLMs simultaneously.
- Loading a model that exceeds available hardware resources.

Ensure you have sufficient memory and that your system page file (swap) is managed correctly by Windows.

---

*Extracted from Discord. Primary contributor: sraura*