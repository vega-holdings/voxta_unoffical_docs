---
id: IKRx9BqBuhO3FCvB0AYXz
slug: voxta-server-installation-guide-for-debian-13-linux-IKRx9B
type: reference
title: Voxta Server Installation Guide for Debian 13 (Linux)
topics:
  - setup
  - configuration
keywords:
  - linux
  - debian
  - install
  - systemd
  - pyenv
  - pythonnet
  - appsettings
confidence: 0.8
authority: 0.2
contributor: andor_xor
sources: []
created: 2025-12-22T23:52:39.948Z
updated: 2025-12-22T23:52:39.948Z
---

# Voxta Server Installation Guide for Debian 13 (Linux)

> Guide for installing and configuring Voxta Server on Debian 13 using pyenv and systemd.

## Answer

A user-contributed guide for installing Voxta Server v1.1.0 on Debian 13.

### Prerequisites
Install dependencies and Python 3.12.9 via pyenv:
```bash
apt install -y pyenv python3-venv
pyenv install 3.12.9
```

### Installation Steps
1. Extract the Voxta Server Linux zip (e.g., to `/opt/Voxta.Server.Linux.v1.1.0`).
2. Create a virtual environment in the Data folder:
   ```bash
   ~/.pyenv/versions/3.12.9/bin/python3.12 -m venv /opt/Voxta.Server.Linux.v1.1.0/Data/Python/python-3.12-venv
   ```

### Configuration (`appsettings.json`)
Edit `appsettings.json` to point to the correct Python shared library. 
* **Important:** Use full paths (e.g., `/home/user/...`). Do not use `~/`.
* **Remote Access:** Change URLs from `localhost` to `0.0.0.0` if accessing remotely.

**PythonNet Settings:**
```json
"PythonNet": {
  "Dll": "/home/<user>/.pyenv/versions/3.12.9/lib/libpython3.12.so"
}
```
*(Note: Ensure the DLL path matches your specific python version location)*

### Systemd Service
Create `/etc/systemd/system/voxta.service`:
```ini
[Unit]
Description=Voxta Service
After=network.target

[Service]
Type=simple
User=<your_username>
WorkingDirectory=/opt/Voxta.Server.Linux.v1.1.0/
ExecStart=/opt/Voxta.Server.Linux.v1.1.0/Voxta.Server 

[Install]
WantedBy=multi-user.target
```

### Start Service
```bash
systemctl enable voxta
systemctl start voxta
```

---

*Extracted from Discord. Primary contributor: andor_xor*