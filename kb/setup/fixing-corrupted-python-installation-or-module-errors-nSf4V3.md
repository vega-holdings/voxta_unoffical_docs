---
id: nSf4V3g4aBiRNxsNkHbFh
slug: fixing-corrupted-python-installation-or-module-errors-nSf4V3
type: troubleshooting
title: Managing Python Dependencies and Virtual Environment in Voxta
topics:
  - setup
  - troubleshooting
  - scripting
keywords:
  - python
  - dependencies
  - virtual environment
  - venv
  - manage services
  - install all
  - troubleshooting
  - linux
  - corrupted
  - reinstall
  - tokenizers
  - module not found
  - voxta-python.bat
  - antivirus
confidence: 1
authority: 0.2
contributor: acidbubbles
sources: []
created: 2025-12-22T20:06:01.421Z
updated: 2025-12-23T13:39:58.902Z
---

# Managing Python Dependencies and Virtual Environment in Voxta

> Comprehensive guide to managing Voxta's internal Python environment, including installing dependencies, performing clean reinstalls, manual Linux setup, and troubleshooting common errors like missing modules or corrupted environments.

## Answer

# Managing Python Dependencies and Virtual Environment in Voxta

Voxta uses an isolated Python virtual environment to manage dependencies, ensuring compatibility and preventing conflicts with your system's Python installation. This guide covers standard installation procedures, manual setup for Linux, and troubleshooting steps for resolving dependency issues.

## Virtual Environment Location

Voxta stores its Python environment and dependencies within the `Data` folder of your installation directory.

- **Windows:** `Voxta\Data\Python\python-3.12.9-amd64` (The exact folder name may vary depending on the Python version included).
- **Linux:** `Data/Python/python-3.12-venv` (Standard path when created manually).

## Standard Installation and Updates

For most users, dependency management is handled automatically through the Voxta interface.

### When to Install or Update Dependencies

You should install or update dependencies in the following scenarios:
- After moving the `Data` folder to a new installation.
- After a server upgrade or update.
- When adding new modules or services.
- When troubleshooting errors (e.g., `ModuleNotFoundError`, crashes).
- To ensure overall stability after manual configuration changes.

### Steps to Install/Update

1.  Launch Voxta and navigate to the **Manage Services** (or **Manage Modules**) screen.
2.  Click the button labeled **Run All Installers**, **Install All**, or **Upgrade all services Dependencies**.
3.  Wait for the process to complete. Look for green success messages in the log output.
4.  **Note:** If adding a specific new module, you can click **Save & Install Service** for that module, but running the global installer afterwards is recommended to ensure all dependencies are synchronized.

## Manual Setup on Linux

On Linux, the virtual environment must be created manually before Voxta can install service dependencies.

### 1. Install System Dependencies

Install Python 3.12 and required system libraries using the following commands:

```bash
sudo add-apt-repository ppa:deadsnakes/ppa -y
sudo apt update
sudo apt upgrade -y
sudo apt install python3.12 python3.12-dev python3.12-venv python3-pip -y
sudo apt install ffmpeg libopenal-dev -y
# Optional: CUDA support for NVIDIA GPU
sudo apt-get install cudnn9-cuda-12
```

### 2. Create the Virtual Environment

1.  Navigate to the root directory of your Voxta Server installation.
2.  Create the virtual environment in the location expected by Voxta:

```bash
python3.12 -m venv Data/Python/python-3.12-venv
```

*Note: You may use Conda for isolation, but the Voxta web interface expects the environment at the path above. Configuration adjustments may be needed if using Conda.*

### 3. Install Services

Once the environment is created, return to the Voxta web interface and click **Install all service dependencies**.

## Troubleshooting

### Resolving Missing Modules or Corrupted Environment

If you encounter errors like `ModuleNotFoundError` (e.g., `tokenizers`, `exllamav2`), dependency mismatches, or crashes after an upgrade:

#### Quick Fix
1.  Close and restart Voxta.
2.  Go to **Manage Services** and click **Run All Installers**.
3.  If the error persists, proceed to the Full Clean Reinstall.

#### Full Clean Reinstall
1.  Exit Voxta and ensure all processes (Web UI, backends) are closed.
2.  Navigate to your Voxta installation directory and delete the `Data\Python` folder.
    -   **Warning:** This deletes downloaded dependencies only. Your settings and characters are safe.
3.  Launch Voxta.
4.  Go to **Manage Services** and click **Run All Installers**.
5.  Restart Voxta after installation completes.

### Common Issues and Solutions

#### Spaces in Installation Path

Spaces in the file path (e.g., `C:\Program Files\Voxta` or `C:\Users\John Doe\Voxta`) can cause installers to fail. Move the installation folder to a path without spaces.

#### Antivirus Interference

Third-party antivirus software may block installation processes. Temporarily disable your antivirus or add an exception for the Voxta directory if installations fail unexpectedly.

#### Linux Installation Failures

On Linux, the global installer may occasionally skip packages (especially for Whisper/Coqui or CUDA). If modules are missing after running the global installer:
- Try clicking the install button next to each specific service individually on the management page.
- Ensure the virtual environment exists at `Data/Python/python-3.12-venv`.

#### Service Not Enabled

Ensure the problematic service is selected/enabled in the top-right cogwheel menu or the service management page.

#### Viewing Logs for Diagnostics

- **Desktop App:** Press `F2` to open the terminal window and view server output.
- **Direct Execution:** Run `Voxta.Server.exe` directly to keep a console window open and view crash messages.

#### Upgrading from Very Old Versions

If upgrading from a version several releases old, large dependency changes might cause a direct upgrade to fail:
1.  Download an intermediate version from the [Voxta portal](https://portal.voxta.ai/).
2.  Install and run that version first (using your existing `Data` folder).
3.  Upgrade to the latest version.

## Manual Access to the Virtual Environment

For advanced users who need to manually manage packages:

### Windows
1.  Navigate to the Python directory (e.g., `Voxta\Data\Python\python-3.12.9-amd64`).
2.  Run `voxta-python.bat`. This opens a terminal with the environment activated.

### Linux

Run the following command in the Voxta root directory:

```bash
source Data/Python/python-3.12-venv/bin/activate
```

**Warning:** Manually updating or installing packages can break Voxta. Proceed with caution.

---

*Extracted from Discord. Primary contributor: acidbubbles*