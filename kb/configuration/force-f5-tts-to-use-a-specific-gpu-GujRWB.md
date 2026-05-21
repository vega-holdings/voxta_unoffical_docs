---
id: GujRWBil9oe6xQkJx6t2z
slug: force-f5-tts-to-use-a-specific-gpu-GujRWB
type: tip
title: Force F5-TTS to use a specific GPU
topics:
  - configuration
  - performance
keywords:
  - F5-TTS
  - GPU
  - CUDA_VISIBLE_DEVICES
  - utils_infer.py
  - multi-gpu
confidence: 0.8
authority: 0.2
contributor: daisukearamaki
sources: []
created: 2025-12-22T22:47:42.568Z
updated: 2025-12-22T22:47:42.568Z
---

# Force F5-TTS to use a specific GPU

> Instructions for assigning a specific GPU to F5-TTS by editing utils_infer.py.

## Answer

To configure F5-TTS to use a specific GPU (e.g., a secondary GPU), you need to modify the `utils_infer.py` file found in the F5 virtual environment directory.

Add the following code near the top of the file:
```python
os.environ["CUDA_VISIBLE_DEVICES"] = "1"
```
*Note: Replace `"1"` with the index of the GPU you wish to use (e.g., `"0"` for the first GPU, `"1"` for the second).* Ensure `import os` is present if not already imported.

---

*Extracted from Discord. Primary contributor: daisukearamaki*