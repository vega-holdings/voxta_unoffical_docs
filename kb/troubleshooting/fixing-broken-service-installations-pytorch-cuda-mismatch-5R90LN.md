---
id: 5R90LNU03gI_z9vsjBtmv
slug: fixing-broken-service-installations-pytorch-cuda-mismatch-5R90LN
type: troubleshooting
title: Fixing Broken Service Installations (PyTorch/CUDA Mismatch)
topics:
  - troubleshooting
  - setup
keywords:
  - pytorch
  - cuda
  - florence
  - f5
  - python not found
  - venv
confidence: 0.8
authority: 0.2
contributor: sraura
sources:
  - messageId: "1364365242469191700"
    author: sraura
    timestamp: 2025-12-22T22:38:50.875Z
    url: ""
created: 2025-12-22T22:38:50.875Z
updated: 2025-12-22T22:38:50.875Z
---

# Fixing Broken Service Installations (PyTorch/CUDA Mismatch)

> Troubleshoot service installation failures by checking antivirus interference and manually fixing PyTorch/CUDA dependencies in the venv.

## Answer

If standard installation fails, follow these steps:

1. **Check Antivirus:** Ensure AV software hasn't deleted files from the `Data/Python` directory.
2. **Manual Repair:**
   - Navigate to the `Python` folder in your Voxta installation.
   - Run the `.bat` file to enter the Voxta virtual environment (venv).
   - Manually install missing dependencies.
3. **Verify PyTorch:** A common culprit is a PyTorch version mismatch or lack of CUDA connection. Ensure the installed PyTorch version supports your GPU setup.

---

*Extracted from Discord. Primary contributor: sraura*