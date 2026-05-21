---
id: Xr_WZIOGYDcHNu6NjE8gW
slug: vision-service-hallucinations-due-to-incorrect-backend-Xr_WZI
type: troubleshooting
title: Vision service hallucinations due to incorrect backend
topics:
  - troubleshooting
  - configuration
keywords:
  - vision
  - hallucination
  - images
  - text generation webui
  - borked
confidence: 0.8
authority: 0.2
contributor: orpheus_reup
sources: []
created: 2025-12-19T06:12:09.620Z
updated: 2025-12-19T06:12:09.620Z
---

# Vision service hallucinations due to incorrect backend

> Fix Vision hallucinations by ensuring the Vision service isn't incorrectly set to Text Generation WebUI.

## Answer

This issue can occur if the Vision service is configured to use an incompatible backend. 

One user reported that having the Vision setting pointed to **Text Generation WebUI** caused wild hallucinations. Ensure that your Vision provider is correctly set to a service that supports image analysis (e.g., OpenAI Vision or a specifically configured local multimodal model) and not a standard text generation endpoint.

---

*Extracted from Discord. Primary contributor: orpheus_reup*