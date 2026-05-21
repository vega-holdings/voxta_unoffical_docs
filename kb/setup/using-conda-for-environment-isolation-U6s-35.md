---
id: U6s-35nxHZMHuyBx-Egrf
slug: using-conda-for-environment-isolation-U6s-35
type: tip
title: Using Conda with Voxta for Environment Isolation
topics:
  - setup
  - configuration
  - troubleshooting
keywords:
  - conda
  - venv
  - python 3.12
  - cuda
  - torch
  - dependencies
  - environment
  - anaconda
confidence: 0.7
authority: 0.2
contributor: mrdragonfox
sources: []
created: 2025-12-23T00:03:51.858Z
updated: 2025-12-23T04:42:00.184Z
---

# Using Conda with Voxta for Environment Isolation

> Use Conda to manage Python and CUDA dependencies when venv causes issues, but still create the standard venv folder inside the Conda environment to match Voxta's expected directory structure.

## Answer

# Using Conda with Voxta

Voxta typically uses a standard Python virtual environment (`venv`) for isolation. However, if you encounter issues with system CUDA configurations or dependency conflicts, using Conda can provide better control over the environment.

## When to Use Conda

- System CUDA version mismatches with PyTorch requirements.
- Conflicts between system packages and Voxta dependencies.
- Need for a clean Python 3.12 environment with specific Torch builds.

## Setting Up Conda

1. Install Conda (Miniconda or Anaconda) if not already present.
2. Create a new Conda environment with Python 3.12:
   ```bash
   conda create -n voxta python=3.12
   conda activate voxta
   ```
3. Install PyTorch with CUDA support as needed. For example:
   ```bash
   conda install pytorch torchvision torchaudio pytorch-cuda=12.1 -c pytorch -c nvidia
   ```
   Adjust the CUDA version to match your system.

## Creating the Required venv Folder

Voxta expects a virtual environment at a specific path (typically `Data/Python/python-3.12-venv`). To maintain compatibility, you must create the standard `venv` folder **inside** the activated Conda environment.

Run the following command from the Voxta server root directory:

```bash
python -m venv Data/Python/python-3.12-venv
```

This creates the directory structure Voxta looks for, while the actual Python interpreter and packages are managed by Conda. Ensure the Conda environment is active when you run this command, so the `python` used is the Conda Python.

## Verifying the Setup

After creation, you can verify that Voxta uses the correct environment by checking the Python path in the server logs or by running:

```bash
source Data/Python/python-3.12-venv/bin/activate  # On Linux/macOS
# or .\\Data\\Python\\python-3.12-venv\\Scripts\\activate on Windows
which python
```

It should point to the Conda environment's Python binary.

## Troubleshooting

- If you still encounter CUDA errors, ensure the Conda environment has the correct CUDA toolkit and PyTorch version.
- The `venv` folder is only a placeholder; all packages should be installed via Conda, not into the `venv` folder.
- If Voxta fails to start, check that the `venv` folder exists and that the Conda environment is active when launching the server.

---

*Extracted from Discord. Primary contributor: mrdragonfox*