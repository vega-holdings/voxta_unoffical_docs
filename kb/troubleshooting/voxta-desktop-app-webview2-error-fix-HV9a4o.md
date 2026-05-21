---
id: HV9a4o06qc_R43Vzavt6d
slug: voxta-desktop-app-webview2-error-fix-HV9a4o
type: troubleshooting
title: Troubleshoot WebView2 Issues in Voxta Desktop App
topics:
  - troubleshooting
  - setup
keywords:
  - WebView2
  - Desktop App
  - "0x8007139F"
  - COM Exception
  - registry
  - dependency
  - Evergreen Runtime
  - msedgewebview2.exe
  - AppCompatFlags
  - startup crash
  - launch error
confidence: 1
authority: 0.2
contributor: sraura
sources:
  - messageId: "1356271327501090949"
    author: sraura
    timestamp: 2025-12-22T21:55:06.405Z
    url: ""
  - messageId: "1356362683535851782"
    author: sraura
    timestamp: 2025-12-22T21:55:06.405Z
    url: ""
created: 2025-12-22T21:55:06.405Z
updated: 2025-12-23T13:52:27.535Z
---

# Troubleshoot WebView2 Issues in Voxta Desktop App

> Resolve Voxta Desktop App startup crashes, COM Exception 0x8007139F, or missing dependency errors by reinstalling the WebView2 Runtime, editing the registry, or using the web interface.

## Answer

# Troubleshoot WebView2 Issues in Voxta Desktop App

The Voxta Desktop App relies on the Microsoft Edge WebView2 component to function. If the app fails to launch, displays a COM Exception (0x8007139F), or indicates a missing dependency, follow the solutions below in order.

## Solution 1: Reinstall the WebView2 Runtime

If the app fails to open or indicates a missing component, the runtime may be corrupt or outdated.

1. Download the **WebView2 Evergreen Bootstrapper** (x86 or x64) from the official Microsoft website.
2. Close all running instances of Voxta.
3. Run the installer.
4. Restart your computer to ensure the changes take effect.
5. Launch Voxta again.

## Solution 2: Fix COM Exception 0x8007139F (Registry Edit)

This specific error often occurs after a Windows update that affects the `msedgewebview2.exe` compatibility settings.

1. Open **Registry Editor**:
   - Press `Win + R`, type `regedit`, and press Enter.
2. Navigate to the following path:
   ```
   HKEY_CURRENT_USER\Software\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Layers
   ```
3. Look for a String value entry containing **msedgewebview2.exe** (e.g., `C:\Program Files (x86)\Microsoft\EdgeWebView\Application\<version>\msedgewebview2.exe`).
4. Right-click the entry and select **Delete**.
5. Restart the Voxta Desktop App.

**Note:** Editing the registry can be risky; ensure you delete only the specific entry related to `msedgewebview2.exe`.

## Solution 3: Use the Web Browser Interface

If you prefer not to edit the registry or the issue persists, you can bypass the Desktop App entirely by accessing the server via your browser.

1. Ensure the Voxta Server is running (start it manually if necessary).
2. Open your preferred web browser and navigate to `http://localhost:5384` (or `http://127.0.0.1:5384`).
3. This provides the full Voxta user interface without relying on the local WebView2 component.

---

*Extracted from Discord. Primary contributor: sraura*