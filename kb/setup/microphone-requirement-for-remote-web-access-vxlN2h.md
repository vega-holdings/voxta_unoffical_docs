---
id: vxlN2hG2PUOARLfwweo5A
slug: microphone-requirement-for-remote-web-access-vxlN2h
type: troubleshooting
title: Enabling Remote Access and Microphone Support
topics:
  - setup
  - configuration
  - troubleshooting
  - security
keywords:
  - microphone
  - https
  - remote access
  - reverse proxy
  - nginx
  - cloudflared
  - security
  - localhost
confidence: 0.9
authority: 0.2
contributor: mrdragonfox
sources: []
created: 2025-12-23T00:07:39.593Z
updated: 2025-12-23T13:40:25.185Z
---

# Enabling Remote Access and Microphone Support

> Modern browsers require HTTPS for microphone access on remote connections. Use a reverse proxy (like Nginx or cloudflared) or open ports to access Voxta remotely, ensuring you set a password for security.

## Answer

### Browser Security Requirements
Modern browsers restrict microphone access to secure connections (HTTPS) or `localhost`. If you access the Voxta web interface via a remote IP address over HTTP (e.g., `http://<ip>:5384`), the browser will block the microphone.

To use the microphone remotely, you must establish a secure connection.

### Solutions for Remote Access

#### Option 1: Use a Reverse Proxy (Recommended)
Using a reverse proxy allows you to serve the Voxta interface over HTTPS, satisfying browser security requirements.

*   **Nginx:** Configure Nginx to proxy connections to the Voxta service. You will need to create self-signed certificates and ensure the client device trusts them to avoid security warnings.
*   **Tunneling Services:** Tools like **cloudflared**, **devtunnel**, or **localtunnel** can securely expose your local server to the internet or local network without complex firewall configuration.

#### Option 2: Open Local Ports
You can configure your local network firewall to open the specific ports used by Voxta (e.g., port 5384). Note that without setting up HTTPS, microphone access will remain blocked by browser security policies.

### Security Note
If you expose the server to the local network or the internet (via tunnels or open ports), ensure you **set a password** to prevent unauthorized access.

---

*Extracted from Discord. Primary contributor: mrdragonfox*