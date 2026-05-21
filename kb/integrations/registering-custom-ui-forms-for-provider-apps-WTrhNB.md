---
id: WTrhNBKprhdpyC9-nryRm
slug: registering-custom-ui-forms-for-provider-apps-WTrhNB
type: qa
title: Registering Custom UI Forms for Provider Apps
topics:
  - integrations
keywords:
  - provider app
  - UI options
  - ClientRegisterAppMessage
  - forms
  - api
  - development
  - register app
confidence: 1
authority: 0.2
contributor: acidbubbles
sources:
  - messageId: "1443981993892253716"
    author: acidbubbles
    timestamp: 2025-12-22T23:56:39.743Z
    url: ""
created: 2025-12-22T23:56:39.743Z
updated: 2025-12-22T23:56:39.743Z
---

# Registering Custom UI Forms for Provider Apps

> Explains how to register a provider app and define UI forms using ClientRegisterAppMessage.

## Answer

To expose UI options for a provider app, you must register the application with the Voxta server. When connecting, pass a client ID. Upon receiving the `welcome` message, check the `registeredClientVersion`. If it does not match your app's version, send a registration message.

The registration message should include the form definitions:

```csharp
public class ClientRegisterAppMessage : ClientMessage
{
    public string? ClientVersion { get; init; }
    public string? IconBase64Url { get; init;  }
    public string? Label { get; init; }
    public Form? ConfigurationForm { get; init; }
    public Form? CharacterForm { get; init; }
    public Form? ScenarioForm { get; init; }
    public ScriptSnippet[]? ScriptSnippets { get; init; }
}
```

The `ConfigurationForm`, `CharacterForm`, and `ScenarioForm` properties allow you to define the UI elements displayed in Voxta.

---

*Extracted from Discord. Primary contributor: acidbubbles*