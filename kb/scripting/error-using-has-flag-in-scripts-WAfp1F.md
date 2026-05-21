---
id: WAfp1FYJrKfrsEHmd5chL
slug: error-using-has-flag-in-scripts-WAfp1F
type: troubleshooting
title: Error using has_flag in scripts
topics:
  - scripting
  - configuration
  - troubleshooting
keywords:
  - has_flag
  - conditional
  - template
  - error
  - character card
confidence: 0.9
authority: 0.2
contributor: flurol
sources:
  - messageId: "1388487146809196574"
    author: flurol
    timestamp: 2025-12-22T23:05:07.459Z
    url: ""
  - messageId: "1388489535117201518"
    author: flurol
    timestamp: 2025-12-22T23:05:07.459Z
    url: ""
  - messageId: "1388591477764132916"
    author: flurol
    timestamp: 2025-12-22T23:05:07.459Z
    url: ""
created: 2025-12-22T23:05:07.459Z
updated: 2025-12-22T23:05:07.459Z
---

# Error using has_flag in scripts

> Fix for 'Unexpected identifier has_flag' error caused by placing template syntax in scripts.

## Answer

This error occurs when Handlebars template syntax (like `{{ if has_flag ... }}`) is placed inside a JavaScript module or script file. This syntax is designed to be used directly in **Character Card** fields (such as the Description or Scenario), not in the scripting engine.

---

*Extracted from Discord. Primary contributor: flurol*