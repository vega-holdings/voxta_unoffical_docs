---
id: ElFBCGiGNUhAAV6Gqh_As
slug: coqui-tts-startup-error-coqpit-conflict-ElFBCG
type: troubleshooting
title: Coqui TTS Startup Error (Coqpit Conflict)
topics:
  - troubleshooting
  - integrations
keywords:
  - Coqui
  - TTS
  - coqpit
  - coqpit-config
  - ImportError
  - PythonChildProcessException
confidence: 0.8
authority: 0.2
contributor: jorgedlrg6498
sources:
  - messageId: "1357100589414088824"
    author: jorgedlrg6498
    timestamp: 2025-12-22T22:02:29.807Z
    url: ""
created: 2025-12-22T22:02:29.807Z
updated: 2025-12-22T22:02:29.807Z
---

# Coqui TTS Startup Error (Coqpit Conflict)

> Resolving Coqui TTS startup failures caused by coqpit package version conflicts.

## Answer

This error indicates a conflict between the `coqpit` and `coqpit-config` packages in the Python environment.

### Solution
A user reported resolving this by clearing cached configuration files and reinstalling:
1. Navigate to `%AppData%\Roaming`.
2. Locate and delete the `coqpit` and `coqpit-config` folders found in the cache.
3. Reinstall the Coqui service.

*Note: The error log explicitly suggests running `pip uninstall coqpit` followed by `pip install coqpit-config`, which may be necessary if the folder deletion method does not work.*

---

*Extracted from Discord. Primary contributor: jorgedlrg6498*