---
id: aRLIsvicVu1xFFHHh-6zR
slug: reducing-vram-usage-via-context-window-aRLIsv
type: troubleshooting
title: Reducing VRAM Usage via Context Window
topics:
  - performance
  - configuration
  - llm
keywords:
  - vram
  - memory
  - context window
  - "8192"
  - optimization
confidence: 0.9
authority: 0.2
contributor: minipasila
sources:
  - messageId: "1416403950638338070"
    author: minipasila
    timestamp: 2025-12-22T23:30:59.969Z
    url: ""
  - messageId: "1416407123188776981"
    author: minipasila
    timestamp: 2025-12-22T23:30:59.969Z
    url: ""
  - messageId: "1416408199199854722"
    author: minipasila
    timestamp: 2025-12-22T23:30:59.969Z
    url: ""
created: 2025-12-22T23:30:59.969Z
updated: 2025-12-22T23:30:59.969Z
---

# Reducing VRAM Usage via Context Window

> Lower the context window (e.g., to 8192) in your text generation module to save VRAM.

## Answer

You can significantly reduce VRAM usage by lowering the **context window** size (e.g., to `8192` tokens). This setting is typically adjusted within the configuration of the specific text generation module you are using (such as Oobabooga or KoboldCPP).

---

*Extracted from Discord. Primary contributor: minipasila*