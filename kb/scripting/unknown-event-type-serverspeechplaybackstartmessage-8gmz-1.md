---
id: 8gmz-1bTAN3sjSVbCDkf7
slug: unknown-event-type-serverspeechplaybackstartmessage-8gmz-1
type: troubleshooting
title: "Unknown event type: ServerSpeechPlaybackStartMessage"
topics:
  - scripting
  - troubleshooting
keywords:
  - ServerSpeechPlaybackStartMessage
  - addEventListener
  - unknown event type
  - javascript
confidence: 0.95
authority: 0.2
contributor: oneandonlytf
sources:
  - messageId: "1343893659938193469"
    author: oneandonlytf
    timestamp: 2025-12-22T20:56:56.039Z
    url: ""
  - messageId: "1343222980091707483"
    author: oneandonlytf
    timestamp: 2025-12-22T20:56:56.039Z
    url: ""
created: 2025-12-22T20:56:56.039Z
updated: 2025-12-22T20:56:56.039Z
---

# Unknown event type: ServerSpeechPlaybackStartMessage

> ServerSpeechPlaybackStartMessage is for external clients, not internal JS scripts.

## Answer

This error occurs because `ServerSpeechPlaybackStartMessage` is a message type used in the external Client API (for apps connecting to Voxta), not an event name exposed to the internal `@voxta` JavaScript scripting engine.

Scenario scripts use specific event names (like `generatingComplete`, `userMessageReceived`, etc.). You cannot listen to raw server protocol messages directly inside a scenario script.

---

*Extracted from Discord. Primary contributor: oneandonlytf*