---
id: IIJfWprWf7huwV4sR9ZOM
slug: enabling-continuous-vision-in-voxta-v142-IIJfWp
type: qa
title: Enabling Continuous Vision in Voxta (v142+)
topics:
  - configuration
  - setup
keywords:
  - continuous vision
  - v142
  - augmentations
  - character card
  - prompted vision
  - configuration
confidence: 0.9
authority: 0.2
contributor: sraura
sources:
  - messageId: "1358033820888334468"
    author: sraura
    timestamp: 2025-12-22T22:33:28.891Z
    url: ""
  - messageId: "1358034170479120416"
    author: sraura
    timestamp: 2025-12-22T22:33:28.891Z
    url: ""
  - messageId: "1358034492853325941"
    author: sraura
    timestamp: 2025-12-22T22:33:28.891Z
    url: ""
  - messageId: "1358034626010022092"
    author: sraura
    timestamp: 2025-12-22T22:33:28.891Z
    url: ""
created: 2025-12-22T22:33:28.891Z
updated: 2025-12-23T02:24:40.714Z
---

# Enabling Continuous Vision in Voxta (v142+)

> As of Voxta v142, continuous vision is enabled by adding augmentations to the character card; the experimental toggle has been removed. This guide explains the steps to configure continuous vision and ensure it works correctly.

## Answer

# Enabling Continuous Vision in Voxta (v142+)

In Voxta v142, the experimental toggle for continuous vision has been removed. Continuous vision is now controlled solely by **augmentations** (tags) added to the character card.

## Steps to Enable Continuous Vision

1. Navigate to the **Configurations** tab.
2. Select the specific character you want to configure.
3. In the **Augmentation** section, add the appropriate tags for continuous vision (the exact tags depend on your setup; refer to the documentation or character card examples).
4. If your version still includes a **Prompted Vision** option, ensure it is turned off to avoid conflicts.
5. Save the changes.

If the augmentations do not seem to work after applying them, try clearing the field and adding them again in a different order.

## Note for Older Versions

Prior to v142, continuous vision could be enabled via a dedicated toggle in the character settings. This toggle has been removed; users should update to the latest version and follow the augmentation-based method.

---

*Extracted from Discord. Primary contributor: sraura*