---
id: JmsDIuf_2QVxyRH71P62f
slug: fixing-hugging-face-connection-errors-in-offline-mode-JmsDIu
type: troubleshooting
title: Fixing Hugging Face Connection Errors in Offline Mode
topics:
  - troubleshooting
  - configuration
keywords:
  - offline
  - hugging face
  - memory
  - kernel
  - connection error
  - internet
confidence: 0.8
authority: 0.2
contributor: try4ce
sources: []
created: 2025-12-22T22:47:16.960Z
updated: 2025-12-22T22:47:16.960Z
---

# Fixing Hugging Face Connection Errors in Offline Mode

> Manually select a downloaded model in Memory Settings to prevent Hugging Face connection errors when offline.

## Answer

If you experience connection errors related to Hugging Face when using Voxta without an internet connection, it is likely because the Memory Kernel is trying to fetch or verify a model online.

**Solution:**
1. Navigate to **Memory Settings**.
2. Manually set the model for the **Memory Kernel** to a specific locally downloaded model.

This prevents the system from attempting to connect to Hugging Face to resolve the default model configuration.

---

*Extracted from Discord. Primary contributor: try4ce*