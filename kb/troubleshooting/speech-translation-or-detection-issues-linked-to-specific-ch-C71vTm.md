---
id: C71vTmZyYEc8Hgt87w_7B
slug: speech-translation-or-detection-issues-linked-to-specific-ch-C71vTm
type: troubleshooting
title: Speech Translation or Detection Issues Linked to Specific Characters
topics:
  - troubleshooting
  - characters
keywords:
  - japanese
  - translation
  - speech detection
  - custom character
  - broken character
  - scene testing
confidence: 0.8
authority: 0.2
contributor: tyrotio
sources:
  - messageId: "1439404213988757625"
    author: tyrotio
    timestamp: 2025-12-22T23:53:50.701Z
    url: ""
created: 2025-12-22T23:53:50.701Z
updated: 2025-12-22T23:53:50.701Z
---

# Speech Translation or Detection Issues Linked to Specific Characters

> Unexpected speech translation or detection failures can be caused by a specific corrupted custom character definition.

## Answer

If Voxta unexpectedly translates user speech (e.g., into Japanese) or fails to detect speech after the first turn, the issue may be isolated to a specific **custom character definition** rather than the scene or global settings.

**Troubleshooting Steps:**
1. Switch to a different scene to verify global settings are correct.
2. Replace the character in the problematic scene with a known working character.
3. If the issue resolves with a different character, the original character card is likely corrupted or contains prompt instructions causing the behavior. Try recreating the character or using a different one.

---

*Extracted from Discord. Primary contributor: tyrotio*