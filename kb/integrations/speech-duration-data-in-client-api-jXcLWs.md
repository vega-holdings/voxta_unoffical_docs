---
id: jXcLWsXmZjG54tWzsP8UJ
slug: speech-duration-data-in-client-api-jXcLWs
type: reference
title: Speech Duration Data in Client API
topics:
  - integrations
  - scripting
keywords:
  - ServerSpeechPlaybackStartMessage
  - duration
  - speech
  - client api
  - c#
confidence: 0.9
authority: 0.2
contributor: djsoapyknuckles
sources:
  - messageId: "1343222980091707483"
    author: djsoapyknuckles
    timestamp: 2025-12-22T20:56:56.038Z
    url: ""
  - messageId: "1342821827587735584"
    author: djsoapyknuckles
    timestamp: 2025-12-22T20:56:56.038Z
    url: ""
created: 2025-12-22T20:56:56.038Z
updated: 2025-12-22T20:56:56.038Z
---

# Speech Duration Data in Client API

> External clients can retrieve speech duration via the ServerSpeechPlaybackStartMessage event.

## Answer

When developing external clients (e.g., C# integrations) for Voxta, you can access the duration of a character's speech sequence in advance by listening for the `ServerSpeechPlaybackStartMessage`. This message includes a `Duration` property.

```csharp
public class ServerSpeechPlaybackStartMessage : ServerChatSessionMessage
{
    public required Guid MessageId { get; set; }
    public int StartIndex { get; set; }
    public double Duration { get; init; }
}
```

**Note:** This data is available to client connections, not necessarily within the internal scenario JavaScript environment.

---

*Extracted from Discord. Primary contributor: djsoapyknuckles*