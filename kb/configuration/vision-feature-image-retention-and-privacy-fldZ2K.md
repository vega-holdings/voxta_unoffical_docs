---
id: fldZ2KQGStNAV_BLwiv4S
slug: vision-feature-image-retention-and-privacy-fldZ2K
type: qa
title: Vision Feature Image Retention and Privacy
topics:
  - configuration
  - llm
keywords:
  - vision
  - security
  - privacy
  - images
  - Florence-2
  - inspector
  - memory
confidence: 0.9
authority: 0.2
contributor: acidbubbles
sources: []
created: 2025-12-19T03:16:04.671Z
updated: 2025-12-19T03:16:04.671Z
---

# Vision Feature Image Retention and Privacy

> Clarifies that Vision does not save images to disk but retains text descriptions in chat history.

## Answer

No, the image files themselves are not saved. When using vision models (e.g., Florence-2), the image is loaded into memory, analyzed to generate a text description, and then the image data is dropped.

However, the **text description** of what was seen is kept in the conversation history. You can view these hidden description messages by opening the **Inspector** in the **Chat** tab.

---

*Extracted from Discord. Primary contributor: acidbubbles*