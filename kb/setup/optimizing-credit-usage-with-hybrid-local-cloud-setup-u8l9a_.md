---
id: u8l9a_wkk4vcInE0G1sKz
slug: optimizing-credit-usage-with-hybrid-local-cloud-setup-u8l9a_
type: tip
title: Optimizing Credit Usage with Hybrid Local/Cloud Setup
topics:
  - setup
  - performance
  - integrations
keywords:
  - credits
  - cost
  - local tts
  - cloud llm
  - gemini
  - hybrid setup
  - context window
confidence: 0.8
authority: 0.2
contributor: daisukearamaki
sources: []
created: 2025-12-19T05:36:30.181Z
updated: 2025-12-19T05:36:30.181Z
---

# Optimizing Credit Usage with Hybrid Local/Cloud Setup

> Run TTS locally and LLM in the cloud to save credits during long sessions.

## Answer

Voice generation (TTS) is a significant consumer of Voxta Cloud credits and API budgets. To optimize costs for long sessions (e.g., extended roleplay), it is recommended to run TTS locally (using supported local providers) while using a cloud LLM (like Gemini) to handle large context windows. 

**Note:** Extensive context usage on cloud LLMs can still be costly unless context caching is utilized.

---

*Extracted from Discord. Primary contributor: daisukearamaki*