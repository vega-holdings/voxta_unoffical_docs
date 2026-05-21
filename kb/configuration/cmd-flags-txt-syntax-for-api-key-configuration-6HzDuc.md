---
id: 6HzDuc6TaQHKcmTMs3Uyj
slug: cmd-flags-txt-syntax-for-api-key-configuration-6HzDuc
type: tip
title: CMD_FLAGS.txt Syntax for API Key Configuration
topics:
  - configuration
  - llm
keywords:
  - CMD_FLAGS.txt
  - api key
  - syntax
  - flags
  - oobabooga
  - arguments
confidence: 0.5
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T23:38:17.449Z
updated: 2025-12-22T23:38:17.449Z
---

# CMD_FLAGS.txt Syntax for API Key Configuration

> Confirms valid syntax formats for the API key flag in CMD_FLAGS.txt.

## Answer

When configuring `CMD_FLAGS.txt` (typically used for local LLM backends like Oobabooga/Text-Generation-WebUI to enable API access for Voxta), the API key flag supports both space-separated and equals-separated syntax.

**Examples:**
* `--listen --api --api-key my_api_key`
* `--api-key=my_api_key`

---

*Extracted from Discord. Primary contributor: sraura*