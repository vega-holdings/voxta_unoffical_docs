---
id: 7Vn3PRkCSD_Txt4n8NIhI
slug: connection-error-port-5001-on-chat-start-7Vn3PR
type: troubleshooting
title: Connection Error (Port 5001) on Chat Start
topics:
  - troubleshooting
  - configuration
  - llm
keywords:
  - port 5001
  - connection refused
  - text generation
  - external service
  - cogwheel
  - active services
confidence: 0.9
authority: 0.2
contributor: sraura
sources:
  - messageId: "1343495887816622141"
    author: sraura
    timestamp: 2025-12-22T21:00:16.571Z
    url: ""
  - messageId: "1343500357443260486"
    author: sraura
    timestamp: 2025-12-22T21:00:16.571Z
    url: ""
created: 2025-12-22T21:00:16.571Z
updated: 2025-12-22T21:00:16.571Z
---

# Connection Error (Port 5001) on Chat Start

> Fixes connection errors caused by selecting a non-running external text generation service in the active settings.

## Answer

This error typically indicates that your **Text Generation** service is configured to use an external local provider (which often defaults to port 5001) that is not currently running.

To resolve this:
1. Click the **Settings** icon (cogwheel) in the top right corner.
2. Review the selected services for **Text Gen**, **Voice**, **Action Inference**, **Summarization**, and **Speech**.
3. Change them to **Voxta Cloud** (if you are a subscriber) or to a valid local internal service that is installed and running.

**Note:** The *Manage Services* menu is used to install and configure modules, but the *Settings* (cogwheel) menu determines which services are actively used when a chat starts.

---

*Extracted from Discord. Primary contributor: sraura*