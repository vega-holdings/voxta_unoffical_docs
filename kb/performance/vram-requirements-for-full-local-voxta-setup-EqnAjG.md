---
id: EqnAjGCcGavkOghxfEpRF
slug: vram-requirements-for-full-local-voxta-setup-EqnAjG
type: qa
title: VRAM Requirements for Full Local Voxta Setup
topics:
  - performance
  - setup
  - llm
keywords:
  - VRAM
  - "3090"
  - local setup
  - hardware
  - GPU
  - optimization
confidence: 0.9
authority: 0.2
sources:
  - messageId: "1382726562511720518"
    author: ""
    timestamp: 2025-12-23T00:34:47.547Z
    url: ""
  - messageId: "1382730084116336801"
    author: ""
    timestamp: 2025-12-23T00:34:47.547Z
    url: ""
  - messageId: "1382732602581979168"
    author: ""
    timestamp: 2025-12-23T00:34:47.547Z
    url: ""
created: 2025-12-22T23:02:00.737Z
updated: 2025-12-22T23:02:00.737Z
---

# VRAM Requirements for Full Local Voxta Setup

> A single 24GB GPU is usually insufficient for a full local Voxta + VAM stack; a second GPU or rig is recommended.

## Answer

Running a full local stack (Voxta, STT, TTS, LLM, Vision) alongside VAM or Voxy typically exceeds 24GB of VRAM. 

**Key Insights:**
*   **LLM Consumption:** High-quality local LLMs often consume nearly the entire 24GB buffer on their own.
*   **Hardware Recommendation:** For users wanting a fully local setup, it is recommended to run the LLM on a separate rig or a second GPU.
*   **GPU Choice:** The RTX 3090 is often cited as the best cost/performance option because it offers 24GB VRAM (8GB more than a 4080) at a lower price point on the used market.

---

*Extracted from Discord. Primary contributor: *