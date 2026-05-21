---
id: KoIjaDFwM2B-JlMwXDk2s
slug: updating-cuda-dependencies-after-gpu-upgrade-KoIjaD
type: troubleshooting
title: Updating CUDA dependencies after GPU upgrade
topics:
  - setup
  - troubleshooting
keywords:
  - RTX 5090
  - CUDA
  - PyTorch
  - upgrade
  - gpu
  - dependencies
  - XTTS
confidence: 0.9
authority: 0.2
contributor: storyline7673
sources:
  - messageId: "1448114940442312846"
    author: storyline7673
    timestamp: 2025-12-22T23:59:00.453Z
    url: ""
created: 2025-12-22T23:59:00.453Z
updated: 2025-12-22T23:59:00.453Z
---

# Updating CUDA dependencies after GPU upgrade

> Reinstalling services or running installers in Voxta updates CUDA/PyTorch dependencies for new GPUs.

## Answer

Yes, Voxta can detect new hardware requirements during service installation. To force this update:

1. Go to **Manage Services** in the Voxta interface.
2. Reinstall the specific service (e.g., XTTS/Coqui) or use the **Run All Installers** button (recommended by official docs).
3. The system should detect the new CUDA version (e.g., `cu128`) and automatically remove old dependencies and install the correct ones.

External tools like Kobold.cpp generally handle these updates automatically if they have the relevant profiles included.

---

*Extracted from Discord. Primary contributor: storyline7673*