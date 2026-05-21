---
id: VQ4LcE9eUXxc34lIEFBW-
slug: linux-server-error-could-not-find-libpython3-12-so-VQ4LcE
type: troubleshooting
title: "Linux Server Error: Could not find libpython3.12.so"
topics:
  - troubleshooting
  - setup
  - linux
keywords:
  - libpython3.12.so
  - Arch Linux
  - InvalidOperationException
  - Failed to start chat
  - python venv
confidence: 0.9
authority: 0.2
contributor: jamiebul
sources: []
created: 2025-12-22T22:57:48.111Z
updated: 2025-12-22T22:57:48.111Z
---

# Linux Server Error: Could not find libpython3.12.so

> Fix the libpython3.12.so missing error on Linux by running the service installers via the web UI.

## Answer

This error indicates that Voxta cannot locate the required Python shared library, which often happens if the environment isn't fully set up or if paths differ (like on Arch Linux vs Ubuntu).

**Solution:**
1. Ensure you have manually created the Python virtual environment as required by the Linux installation guide: `python3.12 -m venv Data/Python/python-3.12-venv`.
2. Although the console logs "Failed to start chat", the Voxta Server web interface usually starts successfully. Open `http://127.0.0.1:5384` in your browser.
3. Go to the **Manage Services** tab.
4. Click **Run All Installers** (or "Install all service dependencies").

This process configures the necessary dependencies and allows Voxta to correctly interface with the Python runtime.

---

*Extracted from Discord. Primary contributor: jamiebul*