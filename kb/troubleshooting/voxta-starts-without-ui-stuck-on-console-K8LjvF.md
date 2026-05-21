---
id: K8LjvFugM5Ki4geWWVf25
slug: voxta-starts-without-ui-stuck-on-console-K8LjvF
type: troubleshooting
title: "Troubleshooting: Voxta Interface Not Showing (Black Window, Console
  Only, or Shortcut Issues)"
topics:
  - troubleshooting
  - setup
keywords:
  - stuck
  - no UI
  - browser
  - localhost
  - "5384"
  - Voxta.Server.exe
  - Voxta.DesktopApp.exe
  - black window
  - launch
  - server running
  - UI missing
  - desktop app
  - shortcut
  - error
  - command prompt
  - console
confidence: 1
authority: 0.2
contributor: _kinkyk9
sources:
  - messageId: "1442252661217956002"
    author: _kinkyk9
    timestamp: 2025-12-22T23:55:40.528Z
    url: ""
created: 2025-12-22T23:55:40.528Z
updated: 2025-12-23T04:27:28.740Z
---

# Troubleshooting: Voxta Interface Not Showing (Black Window, Console Only, or Shortcut Issues)

> If Voxta appears stuck, shows a black window, or only a console, you likely launched Voxta.Server.exe instead of Voxta.DesktopApp.exe. You can either run the correct executable or access the UI via your browser at http://127.0.0.1:5384/.

## Answer

# Troubleshooting: Voxta Interface Not Showing (Black Window, Console Only, or Shortcut Issues)

If you start Voxta and see only a console window, a black window, or no interface at all, this guide will help you resolve the issue.

## Problem

- Voxta appears stuck with no graphical interface.
- You see a black window or a command prompt window.
- The desktop shortcut might not open the UI.

## Cause

This usually happens because you launched `Voxta.Server.exe` directly instead of `Voxta.DesktopApp.exe`. The server executable runs only the backend service without a windowed UI. In some cases, the desktop app may fail to start correctly, leaving you with only the server console.

## Solutions

### 1. Standard Launch (Recommended)

Always run **Voxta.DesktopApp.exe** (the executable with the Voxta logo). This launches both the server and the user interface automatically.

1. Close any running Voxta processes (check Task Manager for `Voxta.Server.exe` and `Voxta.DesktopApp.exe`).
2. Navigate to your Voxta installation folder.
3. Double-click `Voxta.DesktopApp.exe`.

You should see the Voxta UI window appear.

### 2. If You Already Launched Voxta.Server.exe

If you accidentally started `Voxta.Server.exe`, you can still access Voxta without restarting:

1. Look at the console window that opened. It should display a message like:
   ```
   Now listening on: http://127.0.0.1:5384
   ```
2. Open your web browser and go to `http://127.0.0.1:5384/`.  
   - **Tip:** In most terminals, you can `Ctrl + Left Click` the link to open it directly.

The Voxta interface will load in your browser.

### 3. Workaround When Desktop App Fails

If the desktop app shortcut or `Voxta.DesktopApp.exe` fails to launch the UI (e.g., due to a temporary error), you can manually start the server and use the browser interface:

1. Close all Voxta processes.
2. Run `Voxta.Server.exe` (either by double-clicking or from a command prompt).
3. Once the server is running, note the URL printed in the console (typically `http://127.0.0.1:5384/`).
4. Open that URL in your browser.

This gives you full access to Voxta’s features even if the desktop app UI doesn’t start.

## Additional Notes

- The default port is `5384`. If you have changed it in settings, use the appropriate port.
- If you prefer to always use the browser interface, you can bookmark the URL after starting the server.
- Ensure that only one instance of Voxta is running at a time to avoid port conflicts.

---

*Extracted from Discord. Primary contributor: _kinkyk9*