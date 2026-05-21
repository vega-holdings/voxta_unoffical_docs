---
id: REdTmqbTkHM1o1ILeNXgD
slug: forcing-python-service-re-installation-REdTmq
type: troubleshooting
title: Forcing Python Service Re-installation
topics:
  - troubleshooting
  - setup
keywords:
  - install.lock
  - python
  - reinstall
  - dependencies
  - stuck
confidence: 0.8
authority: 0.2
contributor: mrdragonfox
sources: []
created: 2025-12-23T00:05:11.209Z
updated: 2025-12-23T00:05:11.209Z
---

# Forcing Python Service Re-installation

> Delete Data/Python/install.lock to force a re-run of the Python service installation scripts.

## Answer

You can force the system to re-evaluate the installation by deleting the lock file.

1. Navigate to `Data/Python/` in your Voxta installation folder.
2. Delete the file named `install.lock`.
3. Run the installers again (e.g., via 'Run All Installers' in the Manage Services tab).

---

*Extracted from Discord. Primary contributor: mrdragonfox*