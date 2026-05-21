---
id: jW-iwGScm3nMi0sxRIqo6
slug: system-typeinitializationexception-with-chromadb-jW-iwG
type: troubleshooting
title: System.TypeInitializationException with ChromaDB
topics:
  - troubleshooting
  - configuration
keywords:
  - System.TypeInitializationException
  - Delegates
  - ChromaDB
  - Florence 2
  - Vision
  - MSK
confidence: 0.6
authority: 0.2
contributor: sraura
sources:
  - messageId: "1361966467314225212"
    author: sraura
    timestamp: 2025-12-22T22:37:28.428Z
    url: ""
  - messageId: "1362485888596054100"
    author: sraura
    timestamp: 2025-12-22T22:37:28.428Z
    url: ""
  - messageId: "1362491546221416729"
    author: sraura
    timestamp: 2025-12-22T22:37:28.428Z
    url: ""
created: 2025-12-22T22:37:28.428Z
updated: 2025-12-22T22:37:28.428Z
---

# System.TypeInitializationException with ChromaDB

> Switch to MSK memory provider to fix Delegates exception in ChromaDB.

## Answer

This error is often related to ChromaDB in recent updates. A recommended workaround is to switch the memory provider to **MSK** instead of ChromaDB.

---

*Extracted from Discord. Primary contributor: sraura*