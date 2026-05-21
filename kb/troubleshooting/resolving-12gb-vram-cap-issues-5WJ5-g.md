---
id: 5WJ5-g5w8M2itMUtlj3Bm
slug: resolving-12gb-vram-cap-issues-5WJ5-g
type: troubleshooting
title: Resolving 12GB VRAM Cap Issues
topics:
  - troubleshooting
  - performance
  - configuration
keywords:
  - 12GB
  - VRAM
  - Vision
  - ExLlama
  - Silicone Maid
  - memory
confidence: 0.8
authority: 0.2
contributor: sraura
sources:
  - messageId: "1356229853493592076"
    author: sraura
    timestamp: 2025-12-22T21:51:08.793Z
    url: ""
created: 2025-12-22T21:51:08.793Z
updated: 2025-12-22T21:51:08.793Z
---

# Resolving 12GB VRAM Cap Issues

> Disable Vision and switch LLM in ExLlama config to save VRAM.

## Answer

To free up VRAM:
1. Disable the **Vision** service toggle.
2. If the issue persists, switch to a more efficient LLM (e.g., Silicone Maid) in the **ExLlama** configuration under **Manage Modules**.

---

*Extracted from Discord. Primary contributor: sraura*