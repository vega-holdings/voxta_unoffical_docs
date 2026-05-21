---
id: KHmdzAF06_ZiUaSwUa36E
slug: web-interface-ui-corruption-KHmdzA
type: troubleshooting
title: Web Interface UI Corruption
topics:
  - troubleshooting
  - configuration
keywords:
  - browser
  - firefox
  - cache
  - cookies
  - UI
confidence: 0.9
authority: 0.2
contributor: sraura
sources:
  - messageId: "1348551377386868808"
    author: sraura
    timestamp: 2025-12-22T21:23:07.975Z
    url: ""
created: 2025-12-22T21:23:07.975Z
updated: 2025-12-22T21:23:07.975Z
---

# Web Interface UI Corruption

> Fixing UI glitches in the web interface by clearing cache and allowing cookies.

## Answer

If you access Voxta via a web browser (e.g., Firefox at `http://127.0.0.1:5384/`) and experience UI corruption:

1. **Clear Browser Cache:** Clear the cache for the Voxta address.
2. **Allow Cookies:** Ensure that your browser allows cookies for `127.0.0.1`.

This is common when using the server directly via a browser instead of the `Voxta.DesktopApp.exe` wrapper.

---

*Extracted from Discord. Primary contributor: sraura*