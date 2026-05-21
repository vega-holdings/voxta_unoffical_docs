---
id: ecucQuAJaKt6ZbHCt6wmC
slug: fix-no-extractions-of-type-text-error-on-character-import-ecucQu
type: troubleshooting
title: Fix 'No extractions of type tEXt' Error on Character Import
topics:
  - troubleshooting
  - characters
keywords:
  - import
  - error
  - tEXt
  - metadata
  - thumbnail
  - png
  - discord
confidence: 0.9
authority: 0.2
contributor: sraura
sources:
  - messageId: "1361101076819873892"
    author: sraura
    timestamp: 2025-12-22T22:36:42.129Z
    url: ""
created: 2025-12-22T22:36:42.129Z
updated: 2025-12-22T22:36:42.129Z
---

# Fix 'No extractions of type tEXt' Error on Character Import

> Ensure you download the full original image file, not the thumbnail, to preserve character metadata.

## Answer

This error indicates that the image file you are trying to import does not contain the necessary metadata (embedded JSON) for a Voxta character.

This commonly happens when downloading character cards from Discord if you save the **thumbnail** or preview image instead of the original file. Filenames containing `THUMBNAIL` (e.g., `VOXTA_Content-THUMBNAIL...`) confirm this issue.

**Solution:**
When downloading from Discord, ensure you open the image fully and save the original file, rather than right-clicking the preview in the chat stream.

---

*Extracted from Discord. Primary contributor: sraura*