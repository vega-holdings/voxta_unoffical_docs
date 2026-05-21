---
id: DEH9Sbbu4wH8gcvbKMe08
slug: voxy-integration-connection-issue-with-password-DEH9Sb
type: troubleshooting
title: Voxy Integration Connection Issue with Password
topics:
  - troubleshooting
  - integrations
keywords:
  - Voxy
  - password
  - join chat
  - permissions
  - authentication
  - connection error
confidence: 0.9
authority: 0.2
contributor: djsoapyknuckles
sources:
  - messageId: "1401010789028204564"
    author: djsoapyknuckles
    timestamp: 2025-12-22T23:25:28.226Z
    url: ""
  - messageId: "1401313046219194399"
    author: djsoapyknuckles
    timestamp: 2025-12-22T23:25:28.226Z
    url: ""
created: 2025-12-22T23:25:28.226Z
updated: 2025-12-22T23:25:28.226Z
---

# Voxy Integration Connection Issue with Password

> Voxy fails to join chats if a password is set due to missing permissions; removing the password is a temporary workaround.

## Answer

This is a known issue related to permissions for the 'join chat' feature in Voxy when Voxta Server authentication is enabled. The integration may lack the necessary admin role or permissions to join the session securely.

**Workaround:**
If you are not sharing your server with other users, you can temporarily remove the password from your Voxta Server settings to restore functionality while a fix is developed.

---

*Extracted from Discord. Primary contributor: djsoapyknuckles*