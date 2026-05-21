---
id: PxBNBZoVAC_vA-rSRi6_t
slug: running-voxta-server-vs-desktop-app-PxBNBZ
type: troubleshooting
title: "Voxta Desktop App vs. Server Executable: Differences, Usage, and
  Troubleshooting"
topics:
  - setup
  - configuration
  - troubleshooting
keywords:
  - Voxta.DesktopApp.exe
  - Voxta.Server.exe
  - desktop app
  - server
  - headless
  - UI
  - interface
  - browser
  - port conflict
  - port 5384
  - multiple instances
  - console
  - terminal
  - F2
  - logs
  - WebView2
confidence: 1
authority: 0.2
contributor: .frond
sources:
  - messageId: "1350006733246042122"
    author: .frond
    timestamp: 2025-12-22T21:30:49.221Z
    url: ""
  - messageId: "1350008137087975536"
    author: .frond
    timestamp: 2025-12-22T21:30:49.221Z
    url: ""
created: 2025-12-22T21:30:49.221Z
updated: 2025-12-23T13:52:30.170Z
---

# Voxta Desktop App vs. Server Executable: Differences, Usage, and Troubleshooting

> Voxta provides two executables—`Voxta.DesktopApp.exe` (with a standalone UI) and `Voxta.Server.exe` (headless)—which are functionally identical but differ in console access. Do not run both simultaneously to avoid port conflicts.

## Answer

# Voxta Desktop App vs. Server Executable

Voxta comes with two different launchers that start the same server instance. While functionally identical, they offer different user experiences and methods for accessing diagnostics.

## Executable Options

*   **Voxta.DesktopApp.exe** – Launches the Voxta server and automatically opens the user interface in a standalone window using a WebView2 container.
*   **Voxta.Server.exe** – Runs the Voxta server as a background process without a UI (headless). After starting, you can access the interface via a web browser at `http://127.0.0.1:5384/`.

## Accessing the Console and Logs

The main difference between the two executables lies in how you view the diagnostic console and system logs:

*   **Desktop App:** The console is hidden behind the interface. You must press `F2` or use the **Advanced** menu to access the Voxta terminal/diagnostic console.
*   **Server Window:** The server window itself acts as the console, displaying logs and system operations directly.

## Important Usage Warnings

**Do not run both executables simultaneously** (or multiple instances of either). Doing so will cause a port conflict (typically port 5384) and prevent Voxta from functioning correctly.

### Troubleshooting Port Conflicts

If you encounter a port conflict or unexpected behavior:

1.  Close all Voxta processes.
2.  Launch **only** the executable you prefer (Desktop App or Server).
3.  Wait for it to fully start and idle before launching Virt-A-Mate (VaM) or other integrations.

*Note: The Desktop App already includes the server; there is no need to run Voxta.Server.exe separately.*

---

*Extracted from Discord. Primary contributor: .frond*