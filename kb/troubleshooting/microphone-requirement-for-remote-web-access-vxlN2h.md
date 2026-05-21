---
id: vxlN2hG2PUOARLfwweo5A
slug: microphone-requirement-for-remote-web-access-vxlN2h
type: troubleshooting
title: Microphone Requirement for Remote Web Access
topics:
  - troubleshooting
  - setup
keywords:
  - microphone
  - remote access
  - https
  - browser
  - "5384"
  - http
confidence: 0.9
authority: 0.2
sources: []
created: 2025-12-23T00:07:39.593Z
updated: 2025-12-23T00:07:39.593Z
---

# Microphone Requirement for Remote Web Access

> HTTPS is required for microphone access when using the web interface from a remote IP.

## Answer

When accessing the Voxta web interface via a remote IP address (e.g., `http://<ip>:5384`), modern browsers typically block microphone access because the connection is not secure (HTTP). 

To use the microphone remotely, you must access the interface via **HTTPS**. Browsers generally only allow microphone access over HTTP when the origin is `localhost`.

---

*Extracted from Discord. Primary contributor: *