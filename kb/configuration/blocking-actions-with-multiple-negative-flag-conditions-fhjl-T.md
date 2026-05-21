---
id: fhjl-TvY3NE39cU5dLzIU
slug: blocking-actions-with-multiple-negative-flag-conditions-fhjl-T
type: troubleshooting
title: Blocking Actions with Multiple Negative Flag Conditions
topics:
  - configuration
  - scripting
keywords:
  - flags
  - logic
  - conditions
  - cooldowns
  - boolean
  - filtering
confidence: 0.9
authority: 0.2
contributor: gerryf.
sources:
  - messageId: "1328921733436014634"
    author: gerryf.
    timestamp: 2025-12-19T05:17:40.829Z
    url: ""
created: 2025-12-19T05:17:40.829Z
updated: 2025-12-19T05:17:40.829Z
---

# Blocking Actions with Multiple Negative Flag Conditions

> Use `!flagA && !flagB` to block actions until all specified flags are cleared.

## Answer

To ensure an action only runs when multiple specific flags are **not** set, use the `&&` (AND) operator combined with the `!` (NOT) operator.

**Example:**
`!dancingp1 && !kiss_cooldown_p1`

This condition requires **both** flags to be unset for the action to proceed. If you use `||` (OR) with negations (e.g., `!flagA || !flagB`), the action would trigger if just one of the flags was missing, which is incorrect for scenarios where you want to block execution if *any* of the flags are present.

---

*Extracted from Discord. Primary contributor: gerryf.*