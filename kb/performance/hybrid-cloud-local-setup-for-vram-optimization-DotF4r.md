---
id: DotF4rt7XkWsqMXWXRPfH
slug: hybrid-cloud-local-setup-for-vram-optimization-DotF4r
type: tip
title: Hybrid Cloud/Local Setup for VRAM Optimization
topics:
  - performance
  - configuration
keywords:
  - hybrid
  - optimization
  - VRAM
  - cloud
  - local
confidence: 0.85
authority: 0.2
contributor: sraura
sources:
  - messageId: "1356230492478767245"
    author: sraura
    timestamp: 2025-12-22T21:50:36.712Z
    url: ""
created: 2025-12-22T21:50:36.712Z
updated: 2025-12-22T21:50:36.712Z
---

# Hybrid Cloud/Local Setup for VRAM Optimization

> Run LLM on cloud and STT/TTS locally to save VRAM.

## Answer

To optimize VRAM usage (especially when running heavy applications like Virt-A-Mate), you can mix local and cloud services. Offloading the LLM (Text Generation) to Voxta Cloud frees up significant VRAM, while lighter services like STT (Speech-to-Text) and TTS (Text-to-Speech) can remain running locally.

---

*Extracted from Discord. Primary contributor: sraura*