---
id: 8pjskRH2nn9UcBa5nZQMi
slug: enabling-vision-and-desktop-capture-8pjskR
type: tip
title: Enabling Vision and Desktop Capture
topics:
  - setup
  - configuration
keywords:
  - Vision
  - Desktop Capture
  - Windows SDK
  - Webcam
  - appsettings.json
confidence: 0.9
authority: 0.2
sources:
  - messageId: "1321022842443272244"
    author: ""
    timestamp: 2025-12-23T00:34:47.545Z
    url: ""
created: 2025-12-19T03:04:46.637Z
updated: 2025-12-19T03:04:46.637Z
---

# Enabling Vision and Desktop Capture

> Steps to enable the Vision service via appsettings.json and configure Desktop Capture using the Windows SDK module.

To set up Vision and Desktop Capture in Voxta:

1. **Enable Vision**:
   - Navigate to your Voxta folder, open `appsettings.json`, and set `"EnableVision": true`.
   - Reload Voxta to see Vision in the Services menu.

2. **Set Up Desktop Capture**:
   - Go to **Manage Modules** -> **Add Service**.
   - Find and install **Windows SDK**.
   - Configure your desired monitor.

3. **Switch Between Webcam and Desktop Capture**:
   - Open the **Vision Capture** dropdown in the Services menu.
   - Toggle the **Use Browser Webcam** checkbox:
     - **Checked**: Enables Webcam capture.
     - **Unchecked**: Enables Desktop capture via Windows SDK.

---

*Extracted from Discord. Primary contributor: *