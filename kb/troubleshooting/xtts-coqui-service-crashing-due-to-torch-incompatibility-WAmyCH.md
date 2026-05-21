---
id: WAmyCHZjakbQ_mjHRI975
slug: xtts-coqui-service-crashing-due-to-torch-incompatibility-WAmyCH
type: troubleshooting
title: XTTS/Coqui Service Crashing due to Torch Incompatibility
topics:
  - troubleshooting
  - integrations
keywords:
  - xtts
  - coqui
  - torch
  - crash
  - venv
  - python child process
confidence: 0.6
authority: 0.2
contributor: mrdragonfox
sources: []
created: 2025-12-22T23:12:51.816Z
updated: 2025-12-22T23:12:51.816Z
---

# XTTS/Coqui Service Crashing due to Torch Incompatibility

> Fix for XTTS service crashing immediately by using a separate venv.

## Answer

If the built-in XTTS (Coqui) service dies immediately after the `Started Python child process` log appears, it may be due to a PyTorch version incompatibility.

**Solution:**
Run XTTS in a separate virtual environment (venv). This usually involves setting up the standalone `xtts-api-server` rather than using the built-in Voxta module, ensuring dependencies do not conflict.

---

*Extracted from Discord. Primary contributor: mrdragonfox*