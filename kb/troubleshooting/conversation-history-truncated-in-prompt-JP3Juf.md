---
id: JP3JufT-i3wmgCsDJlBF3
slug: conversation-history-truncated-in-prompt-JP3Juf
type: troubleshooting
title: Conversation History Truncated in Prompt
topics:
  - troubleshooting
  - configuration
  - llm
keywords:
  - context size
  - token limit
  - truncated history
  - not enough tokens
  - memory
  - conversation missing
confidence: 0.95
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T19:55:10.593Z
updated: 2025-12-22T19:55:10.593Z
---

# Conversation History Truncated in Prompt

> Fix conversation history disappearing from prompts by increasing the Context Size in Text Generation presets.

## Answer

This issue occurs when the LLM's context window is exhausted by the character card, system prompts, and other templates, leaving insufficient space for the chat history.

### Symptoms
- The `##Conversation` section in the raw prompt shows only the most recent message despite a long chat history.
- The Voxta server logs display a warning: `[WRN] After all prompt templates have been applied, there are not enough tokens left for messages... Remaining Available Tokens: -XXX`.

### Solution
1. Navigate to the **Text Generation** menu.
2. Open the settings for your current **Preset** (cogwheel icon).
3. Increase the **Context Size** (e.g., to `8192` or higher), ensuring your loaded LLM supports the larger window.
4. Alternatively, reduce the token count of your character card, system prompts, or the `max_new_tokens` setting to free up space.

---

*Extracted from Discord. Primary contributor: sraura*