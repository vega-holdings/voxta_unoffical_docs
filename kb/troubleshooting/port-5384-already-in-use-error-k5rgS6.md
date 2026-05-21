---
id: k5rgS6dDZE-_3rbHtEtXD
slug: port-5384-already-in-use-error-k5rgS6
type: troubleshooting
title: Port 5384 Already in Use Error
topics:
  - troubleshooting
  - setup
keywords:
  - port 5384
  - bind address
  - already in use
  - startup error
confidence: 0.9
authority: 0.2
contributor: djsoapyknuckles
sources:
  - messageId: "1435003938112933909"
    author: djsoapyknuckles
    timestamp: 2025-12-22T23:52:05.809Z
    url: ""
created: 2025-12-22T23:52:05.809Z
updated: 2025-12-22T23:52:05.809Z
---

# Port 5384 Already in Use Error

> Fix for 'address already in use' error on port 5384.

## Answer

This error indicates that port **5384** is currently occupied by another application or process. This most commonly occurs if a previous instance of Voxta Server is still running in the background. 

**Solution:**
1. Check for and close any running instances of Voxta.
2. Ensure no other application is configured to use port 5384.
3. Restart the server.

---

*Extracted from Discord. Primary contributor: djsoapyknuckles*