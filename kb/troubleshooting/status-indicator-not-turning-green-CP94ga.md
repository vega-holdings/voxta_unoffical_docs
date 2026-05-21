---
id: CP94gaUKRLXpx86iSlTHV
slug: status-indicator-not-turning-green-CP94ga
type: troubleshooting
title: Status indicator not turning green
topics:
  - troubleshooting
  - llm
keywords:
  - status
  - green light
  - load model
  - backend
  - connection
confidence: 0.6
authority: 0.2
contributor: alvar89alvar89
sources:
  - messageId: "1332484554040279180"
    author: alvar89alvar89
    timestamp: 2025-12-19T05:40:32.264Z
    url: ""
created: 2025-12-19T05:40:32.264Z
updated: 2025-12-19T05:40:32.264Z
---

# Status indicator not turning green

> If the status light doesn't turn green, ensure a model is loaded in the backend.

## Answer

The status indicator may not turn green if a model is not currently loaded in the backend, even if the software is running. 

**Solution:**
Ensure you have explicitly loaded a model in your LLM backend (e.g., Oobabooga/Text Generation WebUI, KoboldAI). The system requires a loaded model to function, and the indicator often reflects this readiness state.

---

*Extracted from Discord. Primary contributor: alvar89alvar89*