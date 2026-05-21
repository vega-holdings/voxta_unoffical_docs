---
id: QCEhnEFrbMgSAH_kqJLlI
slug: fixing-coqui-tts-installation-errors-by-disabling-deepspeed-QCEhnE
type: troubleshooting
title: Resolving Coqui TTS DeepSpeed Installation Errors
topics:
  - troubleshooting
  - integrations
keywords:
  - Coqui
  - DeepSpeed
  - XTTS
  - installation
  - error
  - config
  - installer
  - reinstall
  - model files
  - vram
  - F2
  - logs
confidence: 0.9
authority: 0.2
contributor: sraura
sources:
  - messageId: "1351286849192329256"
    author: sraura
    timestamp: 2025-12-22T21:37:10.308Z
    url: ""
  - messageId: "1351287214893563976"
    author: sraura
    timestamp: 2025-12-22T21:37:10.308Z
    url: ""
created: 2025-12-22T21:37:10.308Z
updated: 2025-12-23T03:14:26.735Z
---

# Resolving Coqui TTS DeepSpeed Installation Errors

> Steps to fix DeepSpeed-related errors when installing or updating Coqui TTS (XTTS), including disabling DeepSpeed, cleaning model files, and checking logs via installer output or F2 terminal.

## Answer

# Resolving Coqui TTS DeepSpeed Installation Errors

If you encounter errors during a fresh install or update of Coqui TTS (XTTS), it is often related to DeepSpeed dependencies failing to build or initialize. This guide provides troubleshooting steps.

## Steps to resolve

### 1. Check installation logs

To diagnose the issue, you need to view the detailed error messages. You can do this in two ways:

- **Run the Coqui installer individually**: In Voxta, go to **Manage Modules** or open the XTTS Coqui configuration page (scroll to the bottom to find the installer button). Running the installer will display the installation output, which may contain specific error details.
- **Use the Voxta Terminal**: Press `F2` to open the Voxta Terminal and review the logs. Look for messages related to the Coqui installation or DeepSpeed.

These logs will help determine if the problem is with DeepSpeed or something else.

### 2. Disable DeepSpeed (temporary workaround)

If the logs indicate a DeepSpeed-related failure, you can temporarily disable DeepSpeed to bypass the issue:

1. Open the **Coqui** configuration settings in Voxta.
2. Uncheck the **DeepSpeed** option.
3. Click **Save**.
4. Run the installer again (or use **Run All Installers** in Manage Services).

**Note:** Disabling DeepSpeed may result in slower generation speeds, but it avoids the dependency issues.

### 3. Clean reinstall (if needed)

If the above steps do not resolve the problem, the model files might be corrupted. To perform a clean reinstall:

1. Delete the existing model files located at `data\models\xtts-v2`.
2. Reinstall the Coqui module (run the installer again).

This will download fresh model files and may fix the issue.

After performing these steps, Coqui TTS should install and run without DeepSpeed errors.

---

*Extracted from Discord. Primary contributor: sraura*