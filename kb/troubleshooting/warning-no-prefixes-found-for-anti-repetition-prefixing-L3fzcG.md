---
id: L3fzcG9Fc9Psi5AMc6WVO
slug: warning-no-prefixes-found-for-anti-repetition-prefixing-L3fzcG
type: troubleshooting
title: "Warning: No prefixes found for anti-repetition prefixing"
topics:
  - troubleshooting
  - configuration
keywords:
  - zh-Hans
  - prefixes.csv
  - anti-repetition
  - reply prefixing
  - warning
  - Voxta utilities
confidence: 0.9
authority: 0.2
contributor: sraura
sources:
  - messageId: "1361627581002285176"
    author: sraura
    timestamp: 2025-12-22T22:36:48.546Z
    url: ""
  - messageId: "1361656174746800188"
    author: sraura
    timestamp: 2025-12-22T22:36:48.546Z
    url: ""
created: 2025-12-22T22:36:48.546Z
updated: 2025-12-22T22:36:48.546Z
---

# Warning: No prefixes found for anti-repetition prefixing

> Fixes the missing prefixes warning for unsupported languages by disabling the reply prefixing utility.

## Answer

This log is a warning, not an error, indicating that the **Voxta utilities: reply prefixing** module lacks definitions for the specific language (e.g., `zh-Hans`). By default, it may only contain definitions for English (`en`) and French (`fr`).

To remove the warning:
1. Go to **Manage Modules**.
2. Locate **Voxta utilities: reply prefixing**.
3. Set **prefixing mode** to `disabled`.

This module is an anti-repetition feature; disabling it prevents the warning.

---

*Extracted from Discord. Primary contributor: sraura*