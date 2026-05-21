---
id: QWiYCKEFz34ONBatWe77_
slug: fix-for-xtts-llvm-error-symbol-not-found-svml-cosf8-ha-QWiYCK
type: troubleshooting
title: "Fix for XTTS LLVM Error: Symbol not found __svml_cosf8_ha"
topics:
  - troubleshooting
  - configuration
keywords:
  - XTTS
  - Coqui
  - LLVM ERROR
  - __svml_cosf8_ha
  - Numba
  - AMD
  - Intel
  - environment variable
confidence: 1
authority: 0.2
contributor: storyline7673
sources: []
created: 2025-12-22T23:39:22.095Z
updated: 2025-12-22T23:39:22.095Z
---

# Fix for XTTS LLVM Error: Symbol not found __svml_cosf8_ha

> Resolves the LLVM symbol not found error in XTTS by disabling Intel SVML via environment variable.

## Answer

This error is caused by Numba attempting to use Intel's SVML (Short Vector Math Library) and failing, which can occur even on AMD CPUs.

**Solution:**
Create a system environment variable to disable this feature:
1. Open your system's Environment Variables settings.
2. Create a new variable:
   - **Variable Name:** `NUMBA_DISABLE_INTEL_SVML`
   - **Value:** `1`
3. Restart Voxta.

---

*Extracted from Discord. Primary contributor: storyline7673*