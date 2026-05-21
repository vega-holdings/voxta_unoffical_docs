---
id: YTJD9dwTGGlZ5yIYKCmQ9
slug: fix-access-denied-error-during-service-installation-YTJD9d
type: troubleshooting
title: Fix Access Denied Error During Service Installation
topics:
  - troubleshooting
  - setup
keywords:
  - WinError 5
  - Access is denied
  - ChromaDB
  - onnxruntime
  - dll locked
  - installation error
confidence: 0.9
authority: 0.2
contributor: acidbubbles
sources:
  - messageId: "1338996997696520287"
    author: acidbubbles
    timestamp: 2025-12-22T20:35:46.413Z
    url: ""
  - messageId: "1339078993626009693"
    author: acidbubbles
    timestamp: 2025-12-22T20:35:46.413Z
    url: ""
created: 2025-12-22T20:35:46.413Z
updated: 2025-12-22T20:35:46.413Z
---

# Fix Access Denied Error During Service Installation

> Fixes WinError 5 Access Denied during service installation by closing Voxta or using manual pip install.

## Answer

### Cause
This error typically occurs because a DLL file (e.g., `onnxruntime_providers_shared.dll`) is locked or in use by a running instance of Voxta.

### Solution
1. **Close Voxta:** Ensure all Voxta instances (Desktop App and Server) are completely closed.
2. **Retry Install:** Attempt to install the service again.

### Alternative Workaround
If the standard solution fails, you can manually install the dependencies:
1. Attempt the install in Voxta and let it fail.
2. Copy the `pip install` command shown in the console output.
3. Navigate to your Voxta installation: `Voxta\Data\Python\python-3.x.x-amd64`.
4. Run `voxta-python.bat` to open the Python environment.
5. Paste the copied command and add the `--user` flag (e.g., `python -m pip install ... --user`).
6. Restart Voxta Server.

---

*Extracted from Discord. Primary contributor: acidbubbles*