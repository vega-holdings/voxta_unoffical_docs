---
id: S5vdmVGFNYtupk5lEauJl
slug: unexpected-service-logs-bing-azure-in-disabled-state-S5vdmV
type: troubleshooting
title: Unexpected Service Logs (Bing/Azure) in Disabled State
topics:
  - troubleshooting
  - integrations
keywords:
  - Bing
  - Azure
  - logs
  - action history
  - new chat
  - residual data
  - debug
confidence: 0.6
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T23:07:31.380Z
updated: 2025-12-22T23:07:31.380Z
---

# Unexpected Service Logs (Bing/Azure) in Disabled State

> Residual action history in existing chats can trigger logs for disabled services; test with a new chat.

## Answer

If a service (such as Bing Search) was enabled previously within a specific chat session, the action history may be stored in that chat's logs. This can cause related log entries to appear even after the module is turned off. To confirm if this is the cause, start a completely new chat; if the logs do not appear in the new session, the issue is likely due to residual history in the previous conversation.

---

*Extracted from Discord. Primary contributor: sraura*