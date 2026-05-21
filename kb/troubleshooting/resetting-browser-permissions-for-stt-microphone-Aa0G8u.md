---
id: Aa0G8u9jKCXoPULr1U_n1
slug: resetting-browser-permissions-for-stt-microphone-Aa0G8u
type: troubleshooting
title: Verifying and Resetting Microphone Permissions in Chrome/Edge for Voxta
topics:
  - troubleshooting
  - configuration
  - setup
keywords:
  - browser
  - permissions
  - microphone
  - stt
  - privacy
  - site settings
  - chrome
  - edge
confidence: 0.8
authority: 0.2
contributor: robotslovewater
sources: []
created: 2025-12-22T23:11:48.275Z
updated: 2025-12-23T04:40:29.943Z
---

# Verifying and Resetting Microphone Permissions in Chrome/Edge for Voxta

> Learn how to check and reset microphone permissions in Google Chrome or Microsoft Edge to resolve speech-to-text (STT) issues with Voxta.

## Answer

# Verifying and Resetting Microphone Permissions in Chrome/Edge

If Voxta's speech-to-text (STT) is not working, your browser may have denied microphone access. This guide explains how to verify and reset microphone permissions in Chromium-based browsers like Google Chrome and Microsoft Edge.

## Steps for Chrome/Edge

### 1. Open Browser Settings
- Click the three dots menu (Chrome) or three horizontal dots (Edge) in the top-right corner.
- Select **Settings**.

### 2. Navigate to Microphone Settings
- In the left sidebar, click **Privacy and security**.
- Then click **Site settings**.
- Scroll down and click **Microphone**.

Here you'll see a list of sites that have requested microphone access. Look for your Voxta server URL (e.g., `localhost`, `127.0.0.1`, or your server's IP address). The permission status is shown as **Allowed** or **Blocked**.

- To **verify**: Ensure the site is listed and set to **Allowed**.
- To **reset**: You can toggle the permission by clicking the trash can icon (or the three dots menu) next to the entry and selecting **Remove**, then reload the Voxta page to be prompted again. Alternatively, you can directly switch between Allow/Block using the toggle if available.

### 3. If the Site Doesn't Appear in the Microphone List
If the Voxta URL isn't listed (e.g., because it never requested permission or was cleared), you can manage its permissions via the advanced site list:

- From **Site settings**, click **View permissions and data stored across sites** (near the top).
- In the search box, type your Voxta URL.
- Click on the site when it appears.
- Under **Permissions**, find **Microphone** and set it to **Allow**.
- Optionally, you can click **Clear data** to remove all stored data and permissions for that site, then reload Voxta to start fresh.

### 4. Reload Voxta
After adjusting permissions, reload the Voxta web interface. The browser should ask for microphone access. Click **Allow** to grant permission.

## Additional Tips
- If you're using a self-signed certificate or localhost, ensure your browser trusts the site; otherwise, permissions may not persist.
- For Edge, the steps are identical as both browsers share the same Chromium base.
- If problems persist, check your operating system's microphone permissions as well.

---

*Extracted from Discord. Primary contributor: robotslovewater*