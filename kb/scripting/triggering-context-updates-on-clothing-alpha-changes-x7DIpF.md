---
id: x7DIpFD0NUBQstz9vdcHi
slug: triggering-context-updates-on-clothing-alpha-changes-x7DIpF
type: qa
title: Triggering Context Updates on Clothing Alpha Changes
topics:
  - scripting
  - integrations
keywords:
  - alpha channel
  - callback
  - JSONStorable
  - context
  - clothing
  - Virt-a-Mate
  - VaM
confidence: 0.8
authority: 0.2
contributor: djsoapyknuckles
sources:
  - messageId: "1347722699153342504"
    author: djsoapyknuckles
    timestamp: 2025-12-22T21:26:03.658Z
    url: ""
created: 2025-12-22T21:26:03.658Z
updated: 2025-12-22T21:26:03.658Z
---

# Triggering Context Updates on Clothing Alpha Changes

> Use JSONStorable callbacks to detect alpha changes for context updates instead of FixedUpdate.

## Answer

If the alpha channel is controlled by a `JSONStorable` float (typical for UI sliders in Virt-a-Mate), you can register a callback on the slider change event. When the callback triggers, check if the value is less than or equal to your threshold, and then update the Voxta context.

---

*Extracted from Discord. Primary contributor: djsoapyknuckles*