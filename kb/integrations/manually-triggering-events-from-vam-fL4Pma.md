---
id: fL4PmaLjfjuhJUHm7j5S1
slug: manually-triggering-events-from-vam-fL4Pma
type: qa
title: Manually Triggering Events from VAM
topics:
  - integrations
  - scripting
  - troubleshooting
keywords:
  - VAM
  - manual trigger
  - bypass LLM
  - C# provider
  - event
  - /event
confidence: 0.9
authority: 0.2
contributor: acidbubbles
sources:
  - messageId: "1368590843623112815"
    author: acidbubbles
    timestamp: 2025-12-22T22:40:44.794Z
    url: ""
created: 2025-12-22T22:40:44.794Z
updated: 2025-12-22T22:40:44.794Z
---

# Manually Triggering Events from VAM

> Use the /event command in VAM to manually trigger Voxta events and bypass LLM inference.

## Answer

Yes, you can bypass the LLM inference by creating an **Event** in Voxta and manually triggering it from VAM. To do this, send the command `/event event_name` (where `event_name` matches your created event) as a message from the VAM client. This ensures the associated script or behavior runs deterministically.

---

*Extracted from Discord. Primary contributor: acidbubbles*