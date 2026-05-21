---
id: zCfqqJdDItbUInz6krH-M
slug: koboldai-koboldcpp-error-5001-zCfqqJ
type: troubleshooting
title: KoboldAI/KoboldCpp Error 5001
topics:
  - troubleshooting
  - llm
  - integrations
keywords:
  - kobold
  - koboldcpp
  - "5001"
  - connection error
  - offline
confidence: 0.8
authority: 0.2
contributor: lemonas6731
sources: []
created: 2025-12-22T23:38:25.260Z
updated: 2025-12-22T23:38:25.260Z
---

# KoboldAI/KoboldCpp Error 5001

> Error 5001 occurs if the Kobold executable is not running locally.

## Answer

This error often occurs when the Kobold executable (e.g., KoboldCpp) is not running locally, but Voxta is configured to use it as the LLM service. 

**Solution:**
Ensure that you have launched the Kobold executable and that it is listening on the correct port (default 5001) before Voxta attempts to connect.

---

*Extracted from Discord. Primary contributor: lemonas6731*