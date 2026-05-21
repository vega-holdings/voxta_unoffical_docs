---
id: YN4kZvOf-gZVW-RS-UkpI
slug: prevent-avatar-updates-on-every-sentence-YN4kZv
type: troubleshooting
title: Prevent Avatar Updates on Every Sentence
topics:
  - scripting
  - configuration
keywords:
  - avatar
  - profile picture
  - speechStart
  - scripting
  - SetAvatar
  - conditional trigger
confidence: 0.8
authority: 0.2
contributor: sraura
sources:
  - messageId: "1345495463301873809"
    author: sraura
    timestamp: 2025-12-22T21:08:18.544Z
    url: ""
  - messageId: "1345595160364318730"
    author: sraura
    timestamp: 2025-12-22T21:08:18.544Z
    url: ""
created: 2025-12-22T21:08:18.544Z
updated: 2025-12-22T21:08:18.544Z
---

# Prevent Avatar Updates on Every Sentence

> Use a state flag to limit avatar updates to once per generation cycle.

## Answer

To prevent the avatar from changing with every sentence (which triggers `speechStart` multiple times per response), use a conditional flag in your script.

**Suggested Logic:**
1. Create a flag variable (e.g., `isAvatarUpdated`).
2. Inside the `speechStart` event listener, check if the flag is `false`.
3. If `false`, execute `updatePic()` and set the flag to `true`.
4. Reset the flag to `false` on a completion event (such as `afterSpeech` or when the user replies) to prepare for the next turn.

This ensures the visual only changes once per generation block.

---

*Extracted from Discord. Primary contributor: sraura*