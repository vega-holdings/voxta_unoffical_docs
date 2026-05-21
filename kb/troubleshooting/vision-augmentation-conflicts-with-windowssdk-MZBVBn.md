---
id: MZBVBnXl2wPRA3-cMSK1w
slug: vision-augmentation-conflicts-with-windowssdk-MZBVBn
type: troubleshooting
title: Vision Augmentation Conflicts with WindowsSDK
topics:
  - troubleshooting
  - configuration
keywords:
  - Vision.Continuous
  - Vision.Prompted
  - WindowsSDK
  - augmentations
  - conflict
confidence: 0.8
authority: 0.2
contributor: v0lv
sources: []
created: 2025-12-19T05:59:04.386Z
updated: 2025-12-19T05:59:04.386Z
---

# Vision Augmentation Conflicts with WindowsSDK

> Removing WindowsSDK augmentation resolves errors when using Vision.Continuous or Vision.Prompted.

## Answer

Errors may occur if the `WindowsSDK` augmentation is assigned to the character alongside Vision augmentations. Removing `WindowsSDK` from the character's augmentations has been reported to resolve these issues, even if it appears in some recommended configuration screenshots.

---

*Extracted from Discord. Primary contributor: v0lv*