---
id: esYVZuDzGE5adJucmKj_v
slug: generating-memories-from-past-chat-logs-esYVZu
type: tip
title: Generating Memories from Past Chat Logs
topics:
  - configuration
  - llm
keywords:
  - extract memories
  - import
  - chat history
  - json
  - raw text
confidence: 0.8
authority: 0.2
contributor: sraura
sources:
  - messageId: "1343294963462574110"
    author: sraura
    timestamp: 2025-12-22T20:58:55.252Z
    url: ""
  - messageId: "1343299530090614866"
    author: sraura
    timestamp: 2025-12-22T20:58:55.252Z
    url: ""
created: 2025-12-22T20:58:55.252Z
updated: 2025-12-22T20:58:55.252Z
---

# Generating Memories from Past Chat Logs

> Workflow for importing past chat history into the Extract Memories tool by converting to raw text.

## Answer

You can use the "Extract Memories from Document" feature to generate memories from past chat history or external logs. Since direct JSON chat exports may not process correctly, follow this workflow:

1. **Format the Data:** Convert your chat logs (e.g., JSON) into a simple raw text format (e.g., `User: Hello \n Character: Hi`) removing code syntax. You can ask an LLM to reformat the document for you.
2. **Import:** In Voxta, open the **Extract** dialog.
3. **Configure:** Select the target character and set the input type to "raw".
4. **Process:** Paste the formatted text into the text field and click **Import**.

Alternatively, you can use `/summarize all` in chat to generate a summary text to feed into the extractor, though this may result in less detailed memories than using raw logs.

---

*Extracted from Discord. Primary contributor: sraura*