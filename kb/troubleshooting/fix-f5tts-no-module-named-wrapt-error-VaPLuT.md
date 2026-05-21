---
id: VaPLuTBWAwL3RVns4Z3lc
slug: fix-f5tts-no-module-named-wrapt-error-VaPLuT
type: troubleshooting
title: Fix F5TTS 'No module named wrapt' Error
topics:
  - troubleshooting
  - integrations
  - scripting
keywords:
  - f5tts
  - wrapt
  - ModuleNotFoundError
  - tensorflow
  - pip install
  - python
  - dependencies
  - conflict
confidence: 0.9
authority: 0.2
contributor: mrdragonfox
sources: []
created: 2025-12-22T23:39:57.856Z
updated: 2025-12-23T04:38:07.604Z
---

# Fix F5TTS 'No module named wrapt' Error

> Install the missing 'wrapt' package in the Voxta Python virtual environment to fix F5TTS startup errors. Dependency conflict warnings may appear but the installation typically succeeds.

## Answer

## Error Description

When starting F5TTS, you may encounter an error similar to `ModuleNotFoundError: No module named 'wrapt'`. This indicates a missing Python dependency required by TensorFlow/F5TTS.

## Solution

Install the `wrapt` package in the Voxta Python virtual environment.

1. **Activate the virtual environment**:
   - **Linux/macOS**:
     ```bash
     source /path/to/Voxta/Data/Python/python-3.12-venv/bin/activate
     ```
   - **Windows**:
     ```cmd
     C:\path\to\Voxta\Data\Python\python-3.12.x-amd64\Scripts\activate
     ```
   Adjust the path according to your actual Voxta installation location.

2. **Install the missing package**:
   ```bash
   pip install wrapt
   ```

   You may see warnings about dependency conflicts (e.g., with `pygithub` or `tensorflow`), but the installation of `wrapt` typically succeeds and resolves the issue.

After installation, restart the F5TTS service or Voxta to apply the change.

---

*Extracted from Discord. Primary contributor: mrdragonfox*