---
id: kKDtdNF6bVAObySC7E9DR
slug: error-no-such-table-collections-after-update-kKDtdN
type: troubleshooting
title: ChromaDB 'no such table' Error in Voxta v139
topics:
  - troubleshooting
  - configuration
keywords:
  - chromadb
  - no such table
  - error
  - v139
  - v140
  - memory
  - long-term memory
  - database
  - update
confidence: 0.9
authority: 0.2
contributor: acidbubbles
sources:
  - messageId: "1331054512651370569"
    author: acidbubbles
    timestamp: 2025-12-19T05:24:29.608Z
    url: ""
created: 2025-12-19T05:24:29.608Z
updated: 2025-12-23T13:55:06.739Z
---

# ChromaDB 'no such table' Error in Voxta v139

> This error affects Voxta v139 due to issues with the ChromaDB vector database. It is permanently resolved in v140 and later.

## Answer

This error is a known issue specific to **Voxta v139**. It is caused by **ChromaDB**, the vector database used for long-term memory storage, which may randomly report that database tables are missing or corrupted.

### Workarounds
If you are unable to update immediately, you can try the following temporary solutions:

1. **Restart Voxta:** Simply restarting the application and resuming the chat often clears the error.
2. **Disable Long-term Memory:** Navigate to the settings and disable ChromaDB and long-term memory features to prevent the error from occurring.

### Diagnostics
To investigate the specific cause or verify the error, you can check the server logs:
*   Press **`F2`** to open the Terminal.

### Permanent Fix
This issue has been resolved in **Voxta v140** and later versions. The memory system was updated, and ChromaDB was replaced to prevent these database errors.

It is highly recommended to [update Voxta](https://doc.voxta.ai/docs/update-server/) to the latest version to permanently fix this issue.

---

*Extracted from Discord. Primary contributor: acidbubbles*