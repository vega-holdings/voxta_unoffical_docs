---
id: v-vMYR0WjJrvXs8Gcfx2N
slug: running-multiple-voxta-installations-vs-configurations-v-vMYR
type: qa
title: Managing Multiple Instances, Configurations, and Startup Errors
topics:
  - setup
  - troubleshooting
  - configuration
keywords:
  - multiple instances
  - configurations
  - startup error
  - port binding
  - command prompt
  - troubleshooting
  - zip release
  - voxta.server.exe
  - port 5384
confidence: 0.9
authority: 0.2
contributor: lapiro
sources:
  - messageId: "1411447804014100561"
    author: lapiro
    timestamp: 2025-12-22T23:28:44.451Z
    url: ""
created: 2025-12-22T23:28:44.451Z
updated: 2025-12-23T13:39:47.050Z
---

# Managing Multiple Instances, Configurations, and Startup Errors

> Voxta recommends using the built-in configurations feature to switch use cases rather than maintaining multiple installations. If you encounter startup errors due to multiple instances or port conflicts, follow these troubleshooting steps to resolve the issue.

## Answer

# Managing Multiple Instances, Configurations, and Startup Errors

This guide covers how to manage different Voxta setups and how to resolve common startup errors caused by running multiple instances or improper restarts.

## Recommended Approach: Configurations vs. Multiple Installations

While it is possible to maintain multiple separate installations by downloading the `.zip` release (instead of the `.exe` installer) and extracting it to different folders, this is generally not recommended.

Voxta includes a **configurations** feature designed specifically to let you switch between different use cases (such as work or roleplay) within a single installation. Using this feature is the recommended approach to avoid conflicts and simplify management.

## Troubleshooting Startup Errors

If Voxta fails to start, closes immediately, or displays a port binding error, it is likely due to multiple instances running or a lingering process.

### Symptoms

*   Voxta server fails to start or closes immediately upon launch.
*   The server command window appears and disappears instantly.
*   Error messages indicating the port is already in use or another instance is running.

### Causes

*   **Multiple Instances:** `Voxta.Server.exe` and `Voxta.DesktopApp.exe` run the same underlying server. Launching both simultaneously causes a conflict as they attempt to bind to the same network port (default 5384).
*   **Rapid Restart:** Restarting Voxta immediately after closing it may result in an error if the previous process has not yet released the port.
*   **Improper Shutdown:** Background processes may remain active if the application was not closed correctly.

### Resolution Steps

1.  **Close all Voxta windows:** Ensure both the Server and Desktop App are fully exited.
2.  **Check for lingering processes:** Open Task Manager (Windows) or Activity Monitor (macOS) and terminate any `voxta` processes (e.g., `Voxta.Server.exe`, `Voxta.DesktopApp.exe`).
3.  **Wait:** Allow 3-5 seconds for the operating system to release the port and resources.
4.  **Restart if necessary:** If the error persists, restart your computer to ensure a clean state.
5.  **Relaunch:** Start either the Server or Desktop App (only one at a time).

### Advanced Troubleshooting via Command Prompt

If the standard launcher fails without a clear error message, you can isolate the issue by running the server executable directly:

1.  Open **Command Prompt**.
2.  Switch to the drive where Voxta is installed (e.g., type `P:` and press Enter).
3.  Navigate to the Voxta folder: `cd path\to\voxta`.
4.  Run the executable: `voxta.server.exe`.

This method bypasses potential launcher issues and displays detailed error logs in the console window.

## Additional Information

*   **Accessing the Web UI:** If the server is already running in the background, you can access the interface directly at [http://127.0.0.1:5384](http://127.0.0.1:5384).
*   **Default Port:** The default port is 5384. If you have modified this in your settings, ensure you use the correct port number.

---

*Extracted from Discord. Primary contributor: lapiro*