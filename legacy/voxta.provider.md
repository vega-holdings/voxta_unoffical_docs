Okay, let's break down the Voxta Provider documentation, combining information from all the sources you provided. This will be a comprehensive guide.

```markdown
# Voxta Provider Documentation

Voxta is a platform for creating and interacting with AI-powered companions.  Providers extend Voxta's functionality, allowing developers to integrate custom logic, actions, and data sources. This document details how to create and use Voxta Providers.

## Core Concepts

*   **Chat Sessions:** Voxta interactions happen within chat sessions.  A session connects a user with one or more AI characters. Providers operate within the context of a chat session.
*   **Messages:** Communication within a chat session is done via messages. Messages have roles (User, Assistant, System, Summary, Event, Instructions, Note, Secret), text content, and potentially attachments.
*   **Actions:** Actions are behaviors the AI character can perform, often triggered by "action inference."  Examples: `smile`, `sit_down`, `vibrate_gamepad`.  Action names are *crucially* important.
*   **Events:** Similar to actions, but triggered automatically based on conditions (time, message count, flags) rather than inference. Useful for scripted roleplay or story sequences.
*   **Contexts:** Sentences added to the chat prompt to provide ongoing context to the AI. Useful for things that are *always* true (e.g., room temperature, character appearance).
*   **Flags:** Boolean variables that can be set and checked to control the flow of actions, events, and contexts. They act like persistent state variables within a chat session.
*   **Layers:** Groups of actions. Only one action per layer can be active at a time. Used to prevent conflicting actions (e.g., "sitting" and "standing").  Minimize layer use where possible as they increase processing load.
*   **Timing:** Specifies when an action or event occurs (e.g., "After User," "Before Char," "After Char," "Manually").
*   **Dependency Injection:** Providers use dependency injection.  You can inject services like `IRemoteChatSession` and loggers.

## Creating a Provider

1.  **Project Setup:** Create a .NET class library project. Reference the necessary Voxta assemblies (you'll need to obtain these - the documentation doesn't specify the exact package names, but they'll likely be something like `Voxta.Client`, `Voxta.Model`, and `Voxta.Providers.Host`).

2.  **Provider Class:** Create a class that inherits from `ProviderBase`.

    ```csharp
    public class MyCustomProvider : ProviderBase
    {
        public MyCustomProvider(IRemoteChatSession session, ILogger<MyCustomProvider> logger)
            : base(session, logger)
        {
        }

        protected override async Task OnStartAsync()
        {
            await base.OnStartAsync();
            // Initialization and event registration go here.
        }
    }
    ```

3.  **Dependency Injection:** Use constructor injection to access Voxta services.  Commonly injected services:
    *   `IRemoteChatSession session`:  Provides access to the current chat session.  Essential.
    *   `ILogger<T> logger`:  For logging.  Essential.
    *   `IOptions<TOptions> options`:  For accessing configuration from `appsettings.json`.  See the `AutoReplyProvider` example.
    *   Custom services (e.g., `ISimpleCommandsParser` in `CommandsParserProvider`).

4.  **`OnStartAsync()`:** Override this method to perform initialization, register actions, and subscribe to events. This is where most of your provider's setup will occur.

5.  **Registering the Provider:** In your `Program.cs`, add your provider to the service collection:

    ```csharp
    services.AddVoxtaProvider(builder =>
    {
        builder.AddProvider<MyCustomProvider>();
    });
    ```

## Key Provider Methods and Events

### `ProviderBase` Methods

*   **`Send(ClientChatSessionMessage message)`:** Sends a message to the Voxta server.  This is your primary way to interact with Voxta. The examples demonstrate various `Client...Message` types.
*   **`SendWhenFree(ClientSendMessage message)`:** Sends a message *only* when the AI is not currently generating or speaking. Useful for non-urgent updates.
*   **`HandleMessage<T>(Action<T> callback)`:** Registers a callback to be executed when a specific server message type (`T`) is received.  See `ActionProvider` and `UserFunctionProvider` examples.
*   **`HandleMessage(ChatMessageRole role, RemoteChatMessageTiming timing, Action<RemoteChatMessage> callback)`** Registers a callback for specific chat message roles and timings.
*   **`StartBackgroundLoop(TimeSpan delay, Func<Task> callback)`:** Starts a background task that runs repeatedly with the specified delay. See `BackgroundContextUpdaterProvider`.
*   **`ConfigureAutoReply(TimeSpan delay, Action onAutoReply)`:** Sets up an automatic reply if the user is inactive for a certain duration.  See `AutoReplyProvider`.
*    **`IsBusy`**: property, returns if the system IsGenerating or IsCharacterSpeaking.

### `IRemoteChatSession` Properties

*   **`CancellationToken`:**  A cancellation token that is triggered when the chat session ends.  Use this to stop background tasks.
*   **`SessionId`:**  The unique ID of the current chat session.
*   **`ChatId`:** The ID of the chat within the session.
*   **`User`:** Information about the user in the chat.
*   **`Character`:** Information about the primary AI character.
*   **`Characters`:** Information about all participating AI characters.
*   **`IsGenerating`:**  `true` if the AI is currently generating a response.
*   **`IsCharacterSpeaking`:** `true` if the AI character is currently speaking (text-to-speech is active).

## Message Types (Client -> Server)

These are messages you send *to* Voxta using `Send()` or `SendWhenFree()`.

*   **`ClientAuthenticateMessage`:** Sent automatically by the `VoxtaWebsocketsClientFactory`.  Handles authentication.
*   **`ClientUpdateContextMessage`:**  Used to:
    *   Register actions (character and user action inference).
    *   Update context entries.
    *   Set flags.
*   **`ClientSendMessage`:** Sends a text message to the chat.  Can be used to send messages on behalf of the user, trigger events (using `/trigger event_name`), or provide character responses.
*   **`ClientInterruptMessage`:** Interrupts the current AI action (e.g., text generation or speech).
*   **`ClientTriggerActionMessage`:** Manually triggers an action.
*   **`ClientRunScriptMessage`:** Executes a script (the scripting language is not documented here, but examples exist).
*   **`ClientCaptureImageMessage`:** Sends a captured image to Voxta (e.g., from a camera).  Requires client capabilities to be enabled.
*   **`ClientCharacterSpeechRequestMessage`:** Request for synthesized speech for a specific character and text.
*   **`Client...` (many others):**  See the full dump of `ClientMessages` for a complete list.

## Message Types (Server -> Client)

These are messages you receive *from* Voxta, typically handled with `HandleMessage<T>`.

*   **`ServerWelcomeMessage`:**  Sent when the connection is established.
*   **`ServerActionMessage`:**  Indicates that an action has been selected by action inference.  Includes the action name, layer, and arguments.  See `ActionProvider` and `UserFunctionProvider` for handling.
*   **`ServerReplyGeneratingMessage`:** Indicates that the AI is starting to generate a reply.
*   **`ServerReplyStartMessage`:** Indicates the start of a reply message.
*   **`ServerReplyChunkMessage`:**  Contains a chunk of the generated text reply.  Text is streamed in chunks.
*   **`ServerReplyEndMessage`:**  Indicates the end of a reply message.
*   **`ServerSpeechPlaybackStartMessage`:** Text-to-speech has started for a message.
*   **`ServerSpeechPlaybackCompleteMessage`:** Text-to-speech has finished for a message.
*   **`ServerContextUpdatedMessage`:**  Notifies the provider of changes to contexts, actions, flags, and characters.
*   **`Server...` (many others):**  See the full dump of `ServerMessages` for a complete list.

## Detailed Examples

### Action Provider (`ActionProvider.cs`)

This provider demonstrates character action inference.

```csharp
// ... (usings)

public class ActionProvider(
    IRemoteChatSession session,
    ILogger<ActionProvider> logger
) : ProviderBase(session, logger)
{
    protected override async Task OnStartAsync()
    {
        await base.OnStartAsync();

        // Register the "vibrate_gamepad" action.
        Send(new ClientUpdateContextMessage
        {
            SessionId = SessionId,
            ContextKey = "SampleActions", // Unique key for your actions.
            Actions =
            [
                new()
                {
                    Name = "vibrate_gamepad",  // LLM uses this name.
                    Layer = "gamepad",       // Group actions into layers.
                    Description = "When {{ char }} wants to physically interact with {{ user }}.",
                    Effect = new ActionEffect
                    {
                        Secret = "{{ char }} made {{ user }}'s gamepad vibrate." // Adds a secret message.
                    },
                    Arguments =
                    [
                        new FunctionArgumentDefinition
                        {
                            Name = "strength",
                            Type = FunctionArgumentType.String,
                            Required = true,
                            Description = "The strength of the vibration. Can be 'low', 'medium', or 'high'."
                        }
                    ]
                }
            ]
        });

        // Handle the ServerActionMessage.
        HandleMessage<ServerActionMessage>(message =>
        {
            if (message.Layer != "gamepad") return;  // Only handle our layer.

            switch (message.Value)
            {
                case "vibrate_gamepad":
                    var strength = message.Arguments?.FirstOrDefault(a => a.Name == "strength")?.Value ?? "undefined";
                    // TODO:  Implement the actual gamepad vibration here!
                    Logger.LogInformation("Running vibrate_gamepad command with strength {Strength}", strength);
                    break;
            }
        });
    }
}
```

*   **Action Registration:** The `ClientUpdateContextMessage` registers the `vibrate_gamepad` action.  The `Description` is crucial for the LLM to understand when to use the action.  The `Effect.Secret` adds a hidden message to the chat log. The arguments is how you would parameterize the calls, such as intensity.
*   **Action Handling:** The `HandleMessage<ServerActionMessage>` callback is triggered when the LLM selects an action.  The code checks the `Layer` and `Value` (action name) to determine what to do.
*   **Placeholders:** `{{ char }}` and `{{ user }}` are placeholders that are replaced with the character's and user's names, respectively.

### Auto Reply Provider (`AutoReplyProvider.cs`)

This provider shows how to automatically send a message if the user is inactive.

```csharp
// ... (usings)

public class AutoReplyProvider(
    IRemoteChatSession session,
    ILogger<AutoReplyProvider> logger,
    IOptions<SampleProviderAppOptions> options // Access appsettings.json
)
    : ProviderBase(session, logger)
{
    protected override async Task OnStartAsync()
    {
        await base.OnStartAsync();

        // Configure the auto-reply.
        ConfigureAutoReply(TimeSpan.FromMilliseconds(options.Value.AutoReplyDelay), OnAutoReply);
    }

    private void OnAutoReply()
    {
        Logger.LogInformation("Auto-replying after delay of {Delay}ms of inactivity", options.Value.AutoReplyDelay);
        Send(new ClientSendMessage
        {
            SessionId = SessionId,
            Text = "[{{ char }} continues talking to {{ user }}]"
        });
    }
}
```

*   **`IOptions<SampleProviderAppOptions>`:**  This demonstrates how to read configuration from `appsettings.json`.  You'd define a `SampleProviderAppOptions` class with an `AutoReplyDelay` property.
*   **`ConfigureAutoReply()`:**  Sets up the auto-reply behavior.

### Background Context Updater Provider (`BackgroundContextUpdaterProvider.cs`)

This provider demonstrates updating the context periodically.

```csharp
// ... (usings)

public class BackgroundContextUpdaterProvider : ProviderBase
{
    private double _lastTemperature;

    public BackgroundContextUpdaterProvider(
        IRemoteChatSession session,
        ILogger<BackgroundContextUpdaterProvider> logger
        )
        : base(session, logger)
    {
    }

    protected override async Task OnStartAsync()
    {
        await base.OnStartAsync();
        _lastTemperature = await GetTemperatureAsync();
        // Initial context update.
        Send(new ClientUpdateContextMessage
        {
            SessionId = SessionId,
            ContextKey = "Home/Temperature", // Unique key for this context.
            Contexts = [new() { Text = "{{ user }}'s home temperature is " + _lastTemperature + " degrees" }],
        });

        // Start the background loop.
        StartBackgroundLoop(TimeSpan.FromSeconds(10), UpdateTemperature);
    }

    private async Task UpdateTemperature()
    {
        // ... (get temperature, check for significant change) ...

        // Update the context.
        Send(new ClientUpdateContextMessage
        {
            SessionId = SessionId,
            ContextKey = "Home/Temperature",
            Contexts = [new() { Text = "{{ user }}'s home temperature is " + temperature + " degrees" }],
        });

        // Examples of sending messages based on temperature change.
        if (temperatureDifference > 2)
        {
            // Immediate interruption.
            Send(new ClientSendMessage { /* ... */ });
        }
        else if (temperatureDifference > 1)
        {
            // Send when the AI is finished speaking.
            SendWhenFree(new ClientSendMessage { /* ... */ });
        }
        else if (!IsBusy)
        {
            // Send only if not busy.
            Send(new ClientSendMessage { /* ... */ });
        }

        // ...
    }

    private Task<double> GetTemperatureAsync()
    {
        // TODO:  Implement your temperature reading logic here.
        return Task.FromResult(24.5);
    }
}
```

*   **`StartBackgroundLoop()`:**  Runs `UpdateTemperature()` every 10 seconds.
*   **`ClientUpdateContextMessage` (Context):**  Updates the `Home/Temperature` context.  The AI will use this information in its responses.
*   **`SendWhenFree()`:** Demonstrates sending a message only when the AI isn't busy.
*   **`IsBusy`:**  Checks if the AI is generating or speaking.

### Commands Parser Provider (`CommandsParserProvider.cs`)

This provider shows how to parse commands embedded within the AI's responses.

```csharp
// ... (usings)

public class CommandsParserProvider(
    IRemoteChatSession session,
    ILogger<CommandsParserProvider> logger,
    ISimpleCommandsParser commandsParser // Injected custom service.
)
    : ProviderBase(session, logger)
{
    protected override async Task OnStartAsync()
    {
        await base.OnStartAsync();
        // Listen for Assistant messages.
        HandleMessage(ChatMessageRole.Assistant, RemoteChatMessageTiming.Spoken, OnAssistantChatMessage);
    }

    private void OnAssistantChatMessage(RemoteChatMessage message)
    {
        if (!commandsParser.TryParse(message.Text, out var command))
            return; // No command found.

        switch (command.Name)
        {
            case "device":
                OnDeviceCommand(command);
                break;
            default:
                Logger.LogWarning("Unknown or invalid command received: {Command}", command.RawString);
                break;
        }
    }

    private void OnDeviceCommand(SimpleCommand command)
    {
        // ... (parse arguments, e.g., "speed") ...

        // TODO:  Send the command to your hardware device.
        Logger.LogInformation("Device speed set to: {Speed}", speed);
        //Update the AI context
         Send(new ClientUpdateContextMessage
        {
            SessionId = SessionId,
            ContextKey = "DeviceExample/Speed",
            Contexts = [new() { Text = "{{ user }}'s device speed is set to " + speed + "/10." }],
        });
    }
}
```

*   **`HandleMessage(ChatMessageRole.Assistant, ...)`:**  Listens for messages from the AI (Assistant role).
*   **`ISimpleCommandsParser`:**  A custom service (you'd need to implement this) to parse commands from the text.  The example uses a format like `[device speed=5]`.
* **Context Updates:** This shows setting context for specific commands, such as device state, to further inform the AI on the results of its actions.

### User Function Provider (`UserFunctionProvider.cs`)

This provider demonstrates "user action inference" – actions triggered by the user's messages.

```csharp
// ... (usings)

public class UserFunctionProvider(
    IRemoteChatSession session,
    ILogger<UserFunctionProvider> logger
) : ProviderBase(session, logger)
{
    protected override async Task OnStartAsync()
    {
        await base.OnStartAsync();

        // Register user actions.
        Send(new ClientUpdateContextMessage
        {
            SessionId = SessionId,
            ContextKey =