---
id: Ogiuq7sjZt1VKlaAaWyDO
slug: ai-breaks-character-to-mention-voxta-vam-Ogiuq7
type: troubleshooting
title: AI Breaks Character to Mention Voxta/VAM
topics:
  - troubleshooting
  - configuration
  - llm
keywords:
  - break character
  - scenario
  - character card
  - VAM
  - system prompt
  - meta
confidence: 0.85
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T23:06:48.195Z
updated: 2025-12-22T23:06:48.195Z
---

# AI Breaks Character to Mention Voxta/VAM

> Fix for AI breaking character to advertise Voxta/VAM by checking Scenario and Character Card fields.

## Answer

This behavior is typically caused by text present in the **Character Card** or the active **Scenario**. 

If you are using the basic example scenario or a character cloned from a default template, it may contain introductory text or meta-references to the software. 

**Solution:**
1. Check your **Scenario** settings for any text mentioning Voxta or VAM.
2. Review the **Character Card** definitions (Description, Personality, etc.) to ensure no residual text from the original clone remains.

---

*Extracted from Discord. Primary contributor: sraura*