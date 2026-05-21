---
id: rHajwV_M0gHI8_jX43jEn
slug: voxta-application-roles-and-concurrency-rHajwV
type: reference
title: Voxta Application Roles and Concurrency
topics:
  - integrations
  - configuration
keywords:
  - roles
  - concurrency
  - provider
  - inspector
  - admin
  - app
  - active chat
confidence: 0.8
authority: 0.2
contributor: a1os353
sources:
  - messageId: "1321442198994161685"
    author: a1os353
    timestamp: 2025-12-19T03:21:31.161Z
    url: ""
created: 2025-12-19T03:21:31.161Z
updated: 2025-12-19T03:21:31.161Z
---

# Voxta Application Roles and Concurrency

> List of available application roles and explanation of chat concurrency limits versus background providers.

## Answer

Voxta distinguishes between clients and apps/providers regarding connection concurrency:

*   **Active Chat:** There can be only one active chat at a time (e.g., Voxy).
*   **Enhancements/Listeners:** There can be an unlimited number of apps or providers enhancing or listening to active chats (e.g., providers, browser extensions).

**Available Roles:**
*   `role:app`
*   `role:admin`
*   `role:user`
*   `role:provider`
*   `role:inspector`

---

*Extracted from Discord. Primary contributor: a1os353*