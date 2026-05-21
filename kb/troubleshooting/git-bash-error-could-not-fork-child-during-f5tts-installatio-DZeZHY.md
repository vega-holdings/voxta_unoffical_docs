---
id: DZeZHY3CZuOaeoK6egEUa
slug: git-bash-error-could-not-fork-child-during-f5tts-installatio-DZeZHY
type: troubleshooting
title: Resolving Git Bash 'Could not fork child' Error During F5TTS Installation
  on Windows 11
topics:
  - troubleshooting
  - setup
keywords:
  - Git Bash
  - fork child
  - error
  - F5TTS
  - ASLR
  - Windows 11
  - security
  - Exploit Protection
  - installation
  - could not fork child
confidence: 0.9
authority: 0.2
contributor: doctortim
sources: []
created: 2025-12-19T05:28:50.799Z
updated: 2025-12-23T02:22:26.421Z
---

# Resolving Git Bash 'Could not fork child' Error During F5TTS Installation on Windows 11

> Disable Address Space Layout Randomization (ASLR) in Windows 11's Exploit Protection settings to fix Git Bash fork errors that occur when installing F5TTS.

## Answer

# Git Bash "Could not fork child" Error

When attempting to install F5TTS on Windows 11 using Git Bash, you may encounter an error similar to `could not fork child`. This error indicates that Git Bash is unable to create a new process, often due to Windows security features interfering.

# Solution: Disable ASLR

A confirmed fix is to disable **Address Space Layout Randomization (ASLR)** in Windows 11's Exploit Protection settings. ASLR is a security feature that randomizes memory addresses; temporarily disabling it can resolve the fork error.

## Steps to Disable ASLR

1. Open **Windows Settings** (Win + I).
2. Navigate to **Privacy & Security** → **Windows Security** → **App & Browser Control**.
3. Click on **Exploit Protection** (under "Exploit Protection").
4. Switch to the **System settings** tab (or "Program settings" if you need to target a specific executable, but system-wide is simpler).
5. Locate the ASLR settings. There are typically two options:
   - **Randomize memory allocations (ASLR)**
   - **Force randomization for images (Mandatory ASLR)**
6. Set each ASLR setting to **Off by default**.
7. Click **Apply** and then **OK**.
8. Restart your computer for the changes to take effect.

After restarting, try running the F5TTS installation again. The fork error should no longer occur.

## Important Security Note

Disabling ASLR reduces your system's protection against certain types of exploits. It is recommended to re-enable ASLR after completing the installation. To re-enable, repeat the steps above and set the ASLR settings back to **On by default**.

If you prefer not to disable ASLR system-wide, you can create a custom exploit protection profile for the specific executable (e.g., `git-bash.exe`) and disable ASLR only for that program. However, the system-wide method is simpler and can be reverted easily.

---

*Extracted from Discord. Primary contributor: doctortim*