---
id: F6hmgetJ9po-pzxtcQmtL
slug: diagnosing-stuck-loading-or-character-initialization-issues-F6hmge
type: troubleshooting
title: Diagnosing stuck loading or character initialization issues
topics:
  - troubleshooting
  - performance
keywords:
  - stuck
  - loading
  - VRAM
  - GPU
  - F2
  - terminal
  - debug
confidence: 0.9
authority: 0.2
contributor: _kinkyk9
sources: []
created: 2025-12-22T23:58:30.042Z
updated: 2025-12-22T23:58:30.042Z
---

# Diagnosing stuck loading or character initialization issues

> Diagnose loading hangs by checking VRAM saturation and using the F2 debug terminal.

## Answer

Common causes for loading hangs include GPU VRAM saturation or missing assets.

**Steps to Diagnose:**
1. **Check VRAM Usage:** Local services (LLM, TTS, STT) consume VRAM. If your GPU memory is maxed out, the process may hang. Use Windows Task Manager > Performance > GPU to check 'Dedicated GPU memory usage'.
2. **Voxta Terminal:** Press **F2** inside Voxta to open the debug Terminal. This displays real-time logs and can highlight specific errors (e.g., missing audio files or service timeouts).
3. **Workload:** Ensure you aren't running other heavy GPU tasks (like VR games or 3D rendering) simultaneously unless you have significant VRAM headroom (e.g., 24GB+).

---

*Extracted from Discord. Primary contributor: _kinkyk9*