---
id: vnFhzL8whplcKeXG1Ogbg
slug: fix-llama-cpp-python-not-detecting-gpu-vnFhzL
type: troubleshooting
title: Fix llama-cpp-python not detecting GPU
topics:
  - troubleshooting
  - llm
  - configuration
keywords:
  - llama-cpp-python
  - gpu
  - cuda
  - main_gpu
  - cmake
  - install
  - nvidia
confidence: 0.85
authority: 0.2
contributor: mrdragonfox
sources: []
created: 2025-12-22T23:15:16.370Z
updated: 2025-12-22T23:15:16.370Z
---

# Fix llama-cpp-python not detecting GPU

> Reinstall llama-cpp-python with CMAKE_ARGS="-DGGML_CUDA=on" to enable GPU detection.

## Answer

This error indicates that `llama-cpp-python` was installed without CUDA support and cannot see the NVIDIA GPU. To fix this, reinstall the package with the correct CMake arguments:

```bash
CMAKE_ARGS="-DGGML_CUDA=on" pip install -U llama-cpp-python
```

If the upgrade flag (`-U`) does not work, uninstall the package first (`pip uninstall llama-cpp-python`) and then run the install command.

---

*Extracted from Discord. Primary contributor: mrdragonfox*