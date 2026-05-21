---
id: Bpp9QWOj-fCEQqUMN1gJX
slug: fix-for-short-model-responses-Bpp9QW
type: troubleshooting
title: Fix for Short Model Responses
topics:
  - configuration
  - llm
keywords:
  - max_new_tokens
  - multiline
  - response length
  - short answers
  - cutoff
confidence: 0.9
authority: 0.2
contributor: mrdragonfox
sources:
  - messageId: "1369318746703003743"
    author: mrdragonfox
    timestamp: 2025-12-22T22:40:24.794Z
    url: ""
created: 2025-12-22T22:40:24.794Z
updated: 2025-12-22T22:40:24.794Z
---

# Fix for Short Model Responses

> Increase max_new_tokens and enable Allow Multiline to fix short responses.

## Answer

To encourage longer responses, increase the `max_new_tokens` parameter and ensure **Allow Multiline** is enabled in the generation settings. This prevents the model from stopping generation prematurely at newline characters.

---

*Extracted from Discord. Primary contributor: mrdragonfox*