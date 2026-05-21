---
id: mwU2hIr-kG17WCqJ9Xv8e
slug: openrouter-error-400-temperature-out-of-range-mwU2hI
type: troubleshooting
title: "OpenRouter Error 400: Temperature out of range"
topics:
  - troubleshooting
  - llm
  - integrations
keywords:
  - OpenRouter
  - 400 BadRequest
  - temperature
  - received 8
  - LLM settings
confidence: 0.8
authority: 0.2
contributor: aprisma
sources: []
created: 2025-12-22T23:40:28.289Z
updated: 2025-12-22T23:40:28.289Z
---

# OpenRouter Error 400: Temperature out of range

> Fix for OpenRouter 400 error regarding temperature being too high (received 8).

## Answer

This error indicates that the Temperature parameter sent to the LLM provider is outside the valid range (usually 0.0 to 2.0). Even if the UI seems to show a default of 0, you should explicitly set the **Temperature** value in the LLM configuration to a valid number (e.g., 1.0) to ensure the correct value is sent.

---

*Extracted from Discord. Primary contributor: aprisma*