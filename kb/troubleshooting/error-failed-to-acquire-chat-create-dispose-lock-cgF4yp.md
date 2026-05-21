---
id: cgF4yp0lsYYqV2y8Vf16_
slug: error-failed-to-acquire-chat-create-dispose-lock-cgF4yp
type: troubleshooting
title: "Error: Failed to acquire chat create/dispose lock"
topics:
  - troubleshooting
  - setup
keywords:
  - InvalidOperationException
  - lock
  - create/dispose lock
  - multiple instances
  - VAM
confidence: 0.8
authority: 0.2
contributor: sraura
sources:
  - messageId: "1361702006321971263"
    author: sraura
    timestamp: 2025-12-22T22:36:47.248Z
    url: ""
  - messageId: "1361709376477593795"
    author: sraura
    timestamp: 2025-12-22T22:36:47.248Z
    url: ""
created: 2025-12-22T22:36:47.248Z
updated: 2025-12-22T22:36:47.248Z
---

# Error: Failed to acquire chat create/dispose lock

> Fix for InvalidOperationException regarding chat locks by ensuring single active chat instances.

## Answer

This error typically indicates that multiple chat sessions or connections are being attempted simultaneously, or a session is stuck in a transition state.

**Common Causes:**
* Running multiple instances of the Voxta app.
* Running the Voxta app and Voxta server simultaneously.
* Having a chat open in the Voxta app while trying to connect via an external integration (e.g., Virt-A-Mate/VAM).

**Solution:**
Ensure only one active chat exists at any given time. If the error occurs during an ongoing session or persists, restart the Voxta app to clear the lock.

---

*Extracted from Discord. Primary contributor: sraura*