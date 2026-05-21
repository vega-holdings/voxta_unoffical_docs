---
id: nLqfnHdy_4pbeIO9FJ8E_
slug: chromadb-memory-deletion-during-summarization-nLqfnH
type: troubleshooting
title: ChromaDB Memory Deletion During Summarization
topics:
  - troubleshooting
  - configuration
  - llm
keywords:
  - ChromaDB
  - memory
  - summarization
  - deletion
  - duplicates
  - diagnostics
  - maintenance
confidence: 0.9
authority: 0.2
contributor: acidbubbles
sources:
  - messageId: "1331214721575292969"
    author: acidbubbles
    timestamp: 2025-12-19T05:23:25.301Z
    url: ""
created: 2025-12-19T05:23:25.301Z
updated: 2025-12-19T05:23:25.301Z
---

# ChromaDB Memory Deletion During Summarization

> Explanation of ChromaDB memory maintenance service deleting duplicates and how to debug it via Diagnostics.

## Answer

This behavior is part of the **memory maintenance service** designed to merge related memories and remove duplicates to prevent the database from becoming cluttered.

To investigate if the deletions are appropriate:
1. Navigate to the **Diagnostics** page in the Voxta interface (left menu).
2. Review the **Memory Extraction** and **Memory Merge** logs.
3. Ensure your summarization model is capable enough to handle these tasks correctly.

If the output seems incorrect despite a good model, it may be useful to share the diagnostics with developers, as the memory system is a work-in-progress.

---

*Extracted from Discord. Primary contributor: acidbubbles*