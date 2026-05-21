---
id: YRPRTAa8jw2Ag4AvVdyqz
slug: resetting-expiring-flags-YRPRTA
type: tip
title: Resetting Expiring Flags
topics:
  - flags
  - scripting
keywords:
  - expiring flags
  - timer
  - counter
  - reset
  - cooldown
confidence: 0.9
authority: 0.2
contributor: sraura
sources:
  - messageId: "1351286273884688405"
    author: sraura
    timestamp: 2025-12-22T21:37:28.236Z
    url: ""
created: 2025-12-22T21:37:28.236Z
updated: 2025-12-22T21:37:28.236Z
---

# Resetting Expiring Flags

> Re-setting an active expiring flag resets its expiration timer.

## Answer

When using expiring flags in Voxta (flags that automatically unset after a certain time or number of messages), setting the flag again while it is currently active will reset its expiration timer or counter. This is useful for refreshing cooldowns or extending state durations dynamically.

---

*Extracted from Discord. Primary contributor: sraura*