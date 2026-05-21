---
id: CbjWBbWebLqgplfKg3Tox
slug: prompt-tags-leaking-into-chat-history-CbjWBb
type: troubleshooting
title: Prompt Tags Leaking into Chat History
topics:
  - troubleshooting
  - llm
keywords:
  - prompt tags
  - leak
  - chat history
  - image generation
  - bug
confidence: 0.8
authority: 0.2
contributor: lapiro
sources:
  - messageId: "1424305350827311227"
    author: lapiro
    timestamp: 2025-12-22T23:51:45.058Z
    url: ""
created: 2025-12-22T23:51:45.058Z
updated: 2025-12-22T23:51:45.058Z
---

# Prompt Tags Leaking into Chat History

> Prompt tags leaking into chat history can cause the AI to output internal prompts.

## Answer

A known bug causes prompt tags to leak into the chat history, which confuses the text generation model. This can result in the model outputting internal instructions, such as image generation prompts, at the end of its response. This issue degrades response quality and is expected to be addressed in a future update.

---

*Extracted from Discord. Primary contributor: lapiro*