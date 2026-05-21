---
id: tgYbsJq6Qanex-nFGi93B
slug: voxta-searching-for-missing-gptq-model-tgYbsJ
type: troubleshooting
title: Voxta searching for missing GPTQ model
topics:
  - troubleshooting
  - llm
  - setup
keywords:
  - GPTQ
  - GGUF
  - database
  - migration
  - python folder
  - dependencies
confidence: 0.6
authority: 0.2
contributor: futurestorm
sources: []
created: 2025-12-22T23:18:05.174Z
updated: 2025-12-22T23:18:05.174Z
---

# Voxta searching for missing GPTQ model

> Fix for errors where Voxta looks for legacy GPTQ models due to old database files.

## Answer

This usually indicates a conflict in the `Data/Voxta.db` file, often caused by copying the `Data` folder from a much older version of Voxta to a newer one. Modern Voxta versions typically default to GGUF models (via llama.cpp).

**Solutions:**
1. **Refresh Dependencies:** Delete the `Python` folder within the Voxta installation and restart Voxta to force a re-download of dependencies.
2. **Clean Install:** Perform a full clean install in a new folder. If the database is corrupted due to version disparities, you may need to reconfigure settings rather than copying the old database file.

---

*Extracted from Discord. Primary contributor: futurestorm*