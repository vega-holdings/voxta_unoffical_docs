---
id: 3m1Ro1Q1bxbjKaFt1rwxH
slug: accessing-interface-when-running-voxta-server-directly-3m1Ro1
type: troubleshooting
title: Accessing the Voxta Web Interface (Local and Remote)
topics:
  - setup
  - troubleshooting
  - configuration
  - networking
keywords:
  - Voxta Server
  - web interface
  - browser
  - localhost
  - remote access
  - port 5384
  - headless
  - Edge WebView
  - split setup
confidence: 1
authority: 0.2
contributor: sraura
sources:
  - messageId: "1362500493275828365"
    author: sraura
    timestamp: 2025-12-22T22:37:29.938Z
    url: ""
created: 2025-12-22T22:37:29.938Z
updated: 2025-12-23T13:52:40.615Z
---

# Accessing the Voxta Web Interface (Local and Remote)

> Voxta Server provides a web interface accessible via any browser on port 5384. You can connect locally for troubleshooting or headless operation, or access the server remotely from another device on your network.

## Answer

# Accessing the Voxta Web Interface

Voxta Server runs a local web server on port 5384. While the Desktop App includes an embedded browser (Edge WebView) to display the interface, you can also use any external web browser to connect. This allows for local troubleshooting, headless operation, or remote access from another machine.

## Local Access

To access the interface on the same machine running the server:

1. Ensure Voxta Server is running. You can start it either by:
   - Running `Voxta.DesktopApp.exe` (which launches the server and opens the interface automatically in the embedded browser).
   - Running `Voxta.Server.exe` directly (headless mode, no GUI).
2. Open your preferred web browser (e.g., Firefox, Chrome, Edge, Librewolf).
3. Navigate to `http://127.0.0.1:5384/` or `http://localhost:5384/`.
4. The Voxta web interface should load.

## Remote Access

You can host Voxta Server on one machine (Machine A) and access the interface via a web browser on a second machine (Machine B).

1. Run the server on the host machine (Machine A) using either the Desktop App or the standalone server executable.
2. On the client machine (Machine B), open a web browser.
3. Navigate to the host machine's local IP address on port 5384 (e.g., `http://192.168.1.X:5384`).

## Why Use an External Browser?

- **Headless Operation**: When running `Voxta.Server.exe` directly without the Desktop App, there is no built-in UI; using a browser is the only way to interact.
- **Troubleshooting UI Issues**: The Desktop App's embedded browser may encounter problems due to Microsoft Edge/WebView components. Accessing via an external browser (such as Firefox or Librewolf) isolates the interface and often resolves display or functionality issues.
- **Remote Access**: Allows you to control the server from a different device on your network.

## Notes

- The server must be running before you attempt to connect; otherwise, the browser will show a connection error.
- The default address is `http://127.0.0.1:5384`. If you have changed the server port in the configuration, use the appropriate port.

---

*Extracted from Discord. Primary contributor: sraura*