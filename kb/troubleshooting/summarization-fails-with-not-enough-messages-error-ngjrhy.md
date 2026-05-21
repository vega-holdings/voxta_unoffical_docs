---
id: ngjrhySx8yNXT7foWseux
slug: summarization-fails-with-not-enough-messages-error-ngjrhy
type: troubleshooting
title: Summarization fails with 'Not enough messages' error
topics:
  - troubleshooting
  - llm
keywords:
  - summarization
  - context window
  - not enough messages
  - character card
  - memory book
  - migration
  - kindroid
confidence: 0.8
authority: 0.2
contributor: doctortim
sources: []
created: 2025-12-19T05:57:15.582Z
updated: 2025-12-19T05:57:15.582Z
---

# Summarization fails with 'Not enough messages' error

> Fix for summarization failing due to corrupted character cards by recreating the card and migrating data.

## Answer

This issue can occur if a character card is corrupted or contains problematic metadata (sometimes seen with cards converted from other platforms like Kindroid). The system fails to recognize the message count correctly.

**Solution:**
1. Create a new, blank character card in Voxta.
2. Manually copy the main fields (Name, Description, Scenario, etc.) from the problematic card to the new one.
3. **To migrate history:** Manually summarize the previous chat content and enter it into the new chat (e.g., inside parentheses or as a Note).
4. Use the **Memory Book merge tool** to transfer the memory book to the new character card.

---

*Extracted from Discord. Primary contributor: doctortim*