# Voxta SDK Development Guide

## Complete Reference for Building Voxta Integrations

**Version:** 2.0
**Last Updated:** 2025-12-13
**SDK Version:** Voxta.Sdk.Modules 1.1.4

> **SDK 1.1.4 Notes (Modules):**
> - Available NuGet packages: `Voxta.Sdk.Modules` (meta-package), `Voxta.Abstractions`, `Voxta.Common`, `Voxta.Model`
> - No `Voxta.Shared.HuggingFaceUtils` or `Voxta.Shared.LLMUtils` are published—those are bundled with the server only
> - Modules do not have a supported hook to the server's configured LLM/TextGen/Summarization services
> - Prompt overrides for summarization/memory are file-based (server resources), not configurable via module APIs

### SDK 1.1.4 Package Map (Verified via Decompilation)

- **`Voxta.Abstractions.dll`** (net10.0): Module wiring (`IVoxtaModule`, `IVoxtaModuleBuilder`), registration (`ModuleDefinition`, `ModuleConfigurationProviderBase`), all service interfaces (`ITextGenService`, `ISummarizationService`, `ITextToSpeechService`, `ISpeechToTextService`, `IImageGenService`, `IActionInferenceService`, `IMemoryProviderService`, `IWakeWordService`, `IVisionCaptureService`, `IComputerVisionService`, `IAudioInputService`, `IAudioOutputService`, `IChatAugmentationsService`), chat augmentation interfaces, scripting/action hooks, diagnostics interfaces
- **`Voxta.Common.dll`** (net10.0): Shared helpers only (async locks, keyed semaphores, retry/debouncer, Base64Url, WAV utils, culture/encoding helpers, extension methods)
- **`Voxta.Model.dll`** (net10.0): DTOs/protocol surface — WebSocket client/server message types, API models, `ServiceTypes` enum, `ScenarioActionDefinition`, `FunctionArgumentDefinition`, form fields, serialization helpers

---

## Table of Contents

1. [Architecture Overview](#1-architecture-overview)
2. [SDK Types Explained](#2-sdk-types-explained)
3. [Provider SDK (Augmenting Existing Chats)](#3-provider-sdk)
4. [Modules SDK (Providing Services)](#4-modules-sdk)
5. [Client/App SDK (Owning the Chat)](#5-clientapp-sdk)
6. [WebSocket Protocol Reference](#6-websocket-protocol-reference)
7. [Authentication & Authorization](#7-authentication--authorization)
8. [Configuration Patterns](#8-configuration-patterns)
9. [Action System Deep Dive](#9-action-system-deep-dive)
10. [Audio Handling](#10-audio-handling)
11. [Common Patterns & Best Practices](#11-common-patterns--best-practices)
12. [Troubleshooting](#12-troubleshooting)

---

## 1. Architecture Overview

Voxta is a modular AI conversation platform. The ecosystem consists of:

```
┌─────────────────────────────────────────────────────────────────┐
│                        VOXTA SERVER                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐        │
│  │ TextGen  │  │   TTS    │  │   STT    │  │  Action  │        │
│  │ Service  │  │ Service  │  │ Service  │  │Inference │        │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘        │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    MODULES (Plugins)                     │   │
│  │  ImageGen │ ChatAugmentations │ Memory │ Vision │ etc.   │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                   WebSocket Hub (/hub)                   │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
          │                    │                    │
          ▼                    ▼                    ▼
   ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
   │   CLIENT    │     │  PROVIDER   │     │   MODULE    │
   │  (App SDK)  │     │(Provider SDK)│    │(Modules SDK)│
   │             │     │             │     │             │
   │ Owns chat   │     │ Augments    │     │ Provides    │
   │ session     │     │ existing    │     │ services    │
   │             │     │ chats       │     │             │
   └─────────────┘     └─────────────┘     └─────────────┘
```

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Session** | A chat instance with a unique `SessionId` (GUID) |
| **Chat** | Persistent conversation with history, identified by `ChatId` |
| **Character** | AI persona with personality, voice, and behavior settings |
| **Context** | Dynamic information injected into AI's knowledge |
| **Actions** | Functions the AI can invoke (character or user-triggered) |
| **Layers** | Namespaces for grouping related actions |

---

## 2. SDK Types Explained

### When to Use Each SDK

| SDK | Use Case | Owns Chat? | Example Projects |
|-----|----------|------------|------------------|
| **Provider SDK** | Add behavior to chats started by other apps | No | Smart home, gamepad feedback, auto-reply |
| **Modules SDK** | Provide services (TextGen, TTS, ImageGen, Augmentations) | No | ChutesAi, Discord Bot, OpenWeather |
| **Client/App SDK** | Create front-end applications that start chats | Yes | ConsoleChat, VaM Plugin, Custom UI |

### Decision Tree

```
Do you want to CREATE and OWN chat sessions?
├── YES → Use Client/App SDK
│         (You're building a front-end like VaM, Voxy, etc.)
│
└── NO → Do you want to PROVIDE services to Voxta?
         ├── YES → Use Modules SDK
         │         (TextGen, TTS, STT, ImageGen, ChatAugmentations, Memory, etc.)
         │
         └── NO → Use Provider SDK
                  (You want to REACT to chats started elsewhere)
```

---

## 3. Provider SDK

### Overview

Providers **attach to existing chats** started by other applications (Voxy, Voxta UI, VaM, etc.) to add behavior without owning the chat session.

### Project Setup

**Target Framework:** `net8.0`

**Project File (.csproj):**
```xml
<Project Sdk="Microsoft.NET.Sdk">
    <PropertyGroup>
        <OutputType>Exe</OutputType>
        <TargetFramework>net8.0</TargetFramework>
        <ImplicitUsings>enable</ImplicitUsings>
        <Nullable>enable</Nullable>
    </PropertyGroup>

    <ItemGroup>
        <!-- Local DLL references (from Voxta installation) -->
        <Reference Include="lib/Voxta.Model.dll"/>
        <Reference Include="lib/Voxta.Client.dll"/>
        <Reference Include="lib/Voxta.Providers.Host.dll"/>
    </ItemGroup>

    <ItemGroup>
        <PackageReference Include="Microsoft.AspNetCore.SignalR.Client" Version="9.0.0" />
        <PackageReference Include="Microsoft.Extensions.Configuration" Version="9.0.0" />
        <PackageReference Include="Microsoft.Extensions.Configuration.Json" Version="9.0.0" />
        <PackageReference Include="Microsoft.Extensions.DependencyInjection" Version="9.0.0" />
        <PackageReference Include="Microsoft.Extensions.Http" Version="9.0.0" />
        <PackageReference Include="Microsoft.Extensions.Options.ConfigurationExtensions" Version="9.0.0" />
        <PackageReference Include="Serilog" Version="4.2.0" />
        <PackageReference Include="Serilog.Extensions.Logging" Version="8.0.0" />
        <PackageReference Include="Serilog.Settings.Configuration" Version="8.0.4" />
        <PackageReference Include="Serilog.Sinks.Console" Version="6.0.0" />
    </ItemGroup>

    <ItemGroup>
        <None Update="appsettings.json">
            <CopyToOutputDirectory>Always</CopyToOutputDirectory>
        </None>
    </ItemGroup>
</Project>
```

**Configuration (appsettings.json):**
```json
{
  "Voxta.Client": {
    "Url": "http://127.0.0.1:5384",
    "ApiKey": ""
  },
  "Voxta.Provider": {
    "Name": "MyProviderApp"
  },
  "Serilog": {
    "Using": ["Serilog.Sinks.Console"],
    "WriteTo": [
      {
        "Name": "Console",
        "Args": {
          "outputTemplate": "[{Timestamp:HH:mm:ss} {Level:u3}] {Message:l}{NewLine}{Exception}"
        }
      }
    ],
    "MinimumLevel": {
      "Default": "Information",
      "Override": {
        "Microsoft": "Warning",
        "Voxta": "Information"
      }
    }
  }
}
```

### Entry Point (Program.cs)

```csharp
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Serilog;
using Voxta.Client;
using Voxta.Providers.Host;

var configuration = new ConfigurationBuilder()
    .AddJsonFile("appsettings.json")
    .AddJsonFile("appsettings.Development.json", optional: true)
    .Build();

var services = new ServiceCollection();
services.AddSingleton<IConfiguration>(configuration);

services.AddOptions<VoxtaClientOptions>()
    .Bind(configuration.GetSection("Voxta.Client"))
    .ValidateDataAnnotations();

await using var log = new LoggerConfiguration()
    .ReadFrom.Configuration(configuration)
    .CreateLogger();
services.AddLogging(builder => builder.AddSerilog(log));
services.AddHttpClient();

services.AddVoxtaProvider(builder =>
{
    builder.AddProvider<MyProvider>();
});

var sp = services.BuildServiceProvider();
var runtime = sp.GetRequiredService<IProviderAppHandler>();

var cts = new CancellationTokenSource();
Console.CancelKeyPress += (_, e) => { e.Cancel = true; cts.Cancel(); };

await runtime.RunAsync(cts.Token);
```

### Base Class: ProviderBase

```csharp
public class MyProvider : ProviderBase
{
    public MyProvider(IRemoteChatSession session, ILogger<MyProvider> logger)
        : base(session, logger)
    {
    }

    protected override async Task OnStartAsync()
    {
        await base.OnStartAsync();
        // Initialize: register actions, subscribe to messages, setup background tasks
    }
}
```

### Available Properties and Methods

| Member | Type | Description |
|--------|------|-------------|
| `SessionId` | `Guid` | Current chat session identifier |
| `Logger` | `ILogger` | Structured logger instance |
| `IsBusy` | `bool` | True if AI is currently generating/speaking |
| `Send(message)` | Method | Send message immediately |
| `SendWhenFree(message)` | Method | Queue message until AI is free |
| `HandleMessage<T>(action)` | Method | Subscribe to specific message type |
| `HandleMessage(role, timing, action)` | Method | Subscribe to chat messages |
| `StartBackgroundLoop(interval, action)` | Method | Start periodic background task |
| `ConfigureAutoReply(delay, action)` | Method | Auto-trigger after user inactivity |

### Provider Examples

#### Example 1: Register and Handle Actions

```csharp
public class ActionProvider : ProviderBase
{
    public ActionProvider(IRemoteChatSession session, ILogger<ActionProvider> logger)
        : base(session, logger) { }

    protected override async Task OnStartAsync()
    {
        await base.OnStartAsync();

        Send(new ClientUpdateContextMessage
        {
            SessionId = SessionId,
            ContextKey = "MyActions",
            Actions =
            [
                new ScenarioActionDefinition
                {
                    Name = "vibrate_gamepad",
                    Layer = "gamepad",
                    Description = "When {{ char }} wants to physically interact with {{ user }}.",
                    Effect = new ActionEffect
                    {
                        Secret = "{{ char }} made {{ user }}'s gamepad vibrate."
                    },
                    Arguments =
                    [
                        new FunctionArgumentDefinition
                        {
                            Name = "strength",
                            Type = FunctionArgumentType.String,
                            Required = true,
                            Description = "Vibration strength: 'low', 'medium', or 'high'."
                        }
                    ]
                }
            ]
        });

        HandleMessage<ServerActionMessage>(OnActionTriggered);
    }

    private void OnActionTriggered(ServerActionMessage message)
    {
        if (message.Layer != "gamepad") return;

        switch (message.Value)
        {
            case "vibrate_gamepad":
                var strength = message.Arguments?
                    .FirstOrDefault(a => a.Name == "strength")?.Value ?? "medium";
                Logger.LogInformation("Vibrating gamepad: {Strength}", strength);
                break;
        }
    }
}
```

#### Example 2: Background Context Updates

```csharp
public class BackgroundContextProvider : ProviderBase
{
    private double _lastTemperature;

    public BackgroundContextProvider(IRemoteChatSession session, ILogger<BackgroundContextProvider> logger)
        : base(session, logger) { }

    protected override async Task OnStartAsync()
    {
        await base.OnStartAsync();

        _lastTemperature = await GetTemperatureAsync();
        UpdateTemperatureContext(_lastTemperature);

        StartBackgroundLoop(TimeSpan.FromSeconds(10), CheckTemperature);
    }

    private async Task CheckTemperature()
    {
        var temp = await GetTemperatureAsync();
        var diff = Math.Abs(temp - _lastTemperature);

        if (diff <= 0.5) return;

        UpdateTemperatureContext(temp);

        if (diff > 2)
        {
            Send(new ClientSendMessage
            {
                SessionId = SessionId,
                Text = $"[URGENT: Temperature changed to {temp}°C]"
            });
        }
        else if (diff > 1)
        {
            SendWhenFree(new ClientSendMessage
            {
                SessionId = SessionId,
                Text = $"[Temperature is now {temp}°C]"
            });
        }

        _lastTemperature = temp;
    }

    private void UpdateTemperatureContext(double temp)
    {
        Send(new ClientUpdateContextMessage
        {
            SessionId = SessionId,
            ContextKey = "Environment/Temperature",
            Contexts = [new() { Text = $"Room temperature is {temp}°C" }]
        });
    }

    private Task<double> GetTemperatureAsync() =>
        Task.FromResult(22.5 + Random.Shared.NextDouble() * 2);
}
```

---

## 4. Modules SDK

### Overview

Modules provide **services** to the Voxta ecosystem. SDK 1.1.4 ships interfaces only; implementations must be provided by your module.

### Project Setup

**Target Framework:** `net9.0` or `net10.0`

```xml
<Project Sdk="Microsoft.NET.Sdk">
    <PropertyGroup>
        <TargetFramework>net10.0</TargetFramework>
        <ImplicitUsings>enable</ImplicitUsings>
        <Nullable>enable</Nullable>
    </PropertyGroup>

    <ItemGroup>
        <PackageReference Include="Voxta.Sdk.Modules" Version="1.1.4" />
    </ItemGroup>
</Project>
```

### ServiceTypes Enum (SDK 1.1.4)

```csharp
public enum ServiceTypes
{
    TextGen,              // Text/chat generation (ITextGenService)
    ActionInference,      // Action selection (IActionInferenceService)
    Summarization,        // Chat summarization (ISummarizationService)
    TextToSpeech,         // Voice synthesis (ITextToSpeechService)
    SpeechToText,         // Audio transcription (ISpeechToTextService)
    AudioInput,           // Microphone input (IAudioInputService)
    AudioOutput,          // Speaker output (IAudioOutputService)
    AudioPipeline,        // Audio processing (IAudioInputPipelineService)
    WakeWord,             // Wake word detection (IWakeWordService)
    VisionCapture,        // Image capture (IVisionCaptureService)
    ComputerVision,       // Image description (IComputerVisionService)
    ChatAugmentations,    // Chat modifications (IChatAugmentationsService)
    Memory,               // Memory provider (IMemoryProviderService)
    ImageGen,             // Image generation (IImageGenService)
    None                  // No service type
}
```

### IVoxtaModuleBuilder Methods (SDK 1.1.4)

```csharp
public interface IVoxtaModuleBuilder
{
    IServiceCollection Services { get; }
    VoxtaGlobalOptions Options { get; }

    void Register(ModuleDefinition moduleDefinition);

    // Service registration methods
    void AddTextGenService<TService>(string serviceKey);
    void AddSummarizationService<TService>(string serviceKey);
    void AddActionInferenceService<TService>(string serviceKey);
    void AddTextToSpeechService<TService>(string serviceKey);
    void AddSpeechToTextService<TService>(string serviceKey);
    void AddAudioInputService<TService>(string serviceKey);
    void AddAudioOutputService<TService>(string serviceKey);
    void AddAudioPipelineService<TService>(string serviceKey);
    void AddWakeWordService<TService>(string serviceKey);
    void AddVisionCaptureService<TService>(string serviceKey);
    void AddComputerVisionService<TService>(string serviceKey);
    void AddChatAugmentationsService<TService>(string serviceKey);
    void AddMemoryProviderService<TService>(string serviceKey);
    void AddImageGenService<TService>(string serviceKey);
    void AddModuleRuntimeInstance<TService, TImplementation>();
}
```

### Module Entry Point

```csharp
using Voxta.Abstractions.Modules;
using Voxta.Abstractions.Registration;
using Voxta.Model.Shared;

[UsedImplicitly]
public class VoxtaModule : IVoxtaModule
{
    public const string ServiceName = "MyModule";

    public void Configure(IVoxtaModuleBuilder builder)
    {
        builder.Register(new ModuleDefinition
        {
            // Required
            ServiceName = ServiceName,
            Label = "My Module",
            Supports = new()
            {
                { ServiceTypes.ImageGen, ServiceDefinitionCategoryScore.High },
            },
            Pricing = ServiceDefinitionPricing.Free,
            Hosting = ServiceDefinitionHosting.Remote,
            ModuleConfigurationProviderType = typeof(ModuleConfigurationProvider),

            // Optional
            Notes = "Description of what this module does.",
            HelpLink = "https://example.com/docs",
            Pros = "Fast, reliable",
            Cons = "Requires API key",
            Experimental = false,
            Deprecated = false,
            Recommended = true,
            CanBeInstalledByAdminsOnly = false,
            SupportsExplicitContent = true,
            UsePython = false,

            // Advanced
            Augmentations = ["my_augmentation"],
            ModuleConfigurationFieldsRequiringReload = ["ApiKey"],
            PresetsProviderType = null,
            ModuleInstallationProviderType = null,
            VoicesProviderType = null,
            AuthProviderType = null,
            ModuleTestingProviderType = null,
            FeatureFlags = null,
            SupportedVisionSources = null,
            Logo = null,
        });

        builder.AddImageGenService<MyImageGenService>(ServiceName);
        builder.Services.AddHttpClient();
    }
}
```

### Service Interfaces (SDK 1.1.4)

#### IImageGenService

```csharp
public interface IImageGenService : IService, IAsyncDisposable
{
    string? PromptingInstructions { get; }

    (int Width, int Height) GetDefaultImageSize(int? requestedWidth = null, int? requestedHeight = null);

    Task WarmupAsync(CancellationToken cancellationToken);

    ValueTask<IImage> GenerateAsync(
        GenerateImageRequest request,
        IInferenceLogger observer,
        CancellationToken cancellationToken = default);
}
```

#### ITextGenService

```csharp
public interface ITextGenService : ILLMService, IService, IAsyncDisposable
{
    TextProcessingOptions TextProcessing { get; }
    int MaxWindowTokens { get; }
    int MaxTokens { get; }
    int MaxMemoryTokens { get; }
    SystemPromptOverrideTypes SystemPromptOverrideType { get; }
    string? SystemPromptAddon { get; }
    string? ContextPromptAddon { get; }
    string? ReplyPrefix { get; }

    TextGenPreprocessingSettings CreateTextGenPreprocessingSettings(int maxSentences = 0, bool? allowMultipleLines = null);
    bool CanProcessAttachments();

    IAsyncEnumerable<LLMOutputToken> GenerateReplyAsync(...);
    IAsyncEnumerable<LLMOutputToken> GenerateStoryAsync(...);
    ValueTask<GenerateReplyConstraints> GetConstraintsAsync(...);
}
```

#### ITextToSpeechService

```csharp
public interface ITextToSpeechService : IService, IAsyncDisposable
{
    string ContentType { get; }
    PcmStreamingConfig? PcmStreaming { get; }

    IReadOnlyList<string>? GetThinkingSpeech();
    ValueTask<TextToSpeechAudioSettings> GetAudioSettings(VoiceInfo? voice, CancellationToken cancellationToken);
    Task WarmupAsync(VoiceInfo? ttsVoice, Guid userId, Guid? characterId, string culture, CancellationToken cancellationToken);
    Task GenerateSpeechAsync(SpeechRequest request, ISpeechTunnel tunnel, CancellationToken cancellationToken);
}
```

#### ISpeechToTextService

```csharp
public interface ISpeechToTextService : IService, IAsyncDisposable
{
    string? ActiveCulture { get; }

    event EventHandler? SpeechRecognitionStarted;
    event EventHandler<string>? SpeechRecognitionPartial;
    event EventHandler<SpeechToTextTranscriptionCompleteEventArgs>? SpeechRecognitionFinished;

    Task InitializeTranscriptionAsync(AudioInputSpecifications specs, string culture, CancellationToken ct);
    Task StartTranscriptionAsync(IAudioInputPipeline audioInput, CancellationToken ct);
    Task StopTranscriptionAsync();
}
```

#### ISummarizationService

```csharp
public interface ISummarizationService : ILLMService, IService, IAsyncDisposable
{
    double SummarizationDigestRatio { get; }
    double SummarizationTriggerMessagesBuffer { get; }
    int TokenWindow { get; }
    int MaxSummaryLength { get; }
    int KeepLastMessages { get; }

    ValueTask<string> SummarizeAsync(IChatInferenceData chat, IPromptBuilder promptBuilder,
        IReadOnlyList<ChatMessageData> messages, CancellationToken ct);
    ValueTask<string> SummarizeAsync(string prompt, CancellationToken ct);
    Task<string> ImagineAsync(IChatInferenceData chat, string? userPrompt, string? instructions,
        IPromptBuilder promptBuilder, CancellationToken ct);
    Task<IReadOnlyList<MemoryExtractResult>> ExtractMemoriesAsync(...);
    Task<MemoryMergeResult> MergeMemoriesAsync(...);
}
```

#### IActionInferenceService

```csharp
public interface IActionInferenceService : ILLMService, IService, IAsyncDisposable
{
    ValueTask<ActionInvocation?> InferActionAsync(IChatInferenceData chat, IPromptBuilder promptBuilder,
        ChatMessageData message, ActionInferenceType type, IReadOnlyList<IScenarioActionInstance> functions,
        CancellationToken ct);
    ValueTask<ActionInvocation?> InferChatFlowAsync(IChatInferenceData chat, IPromptBuilder promptBuilder,
        ChatMessageData message, IReadOnlyList<ICharacterOrUserData> nextCharacters, CancellationToken ct);
}
```

#### IMemoryProviderService

```csharp
public interface IMemoryProviderService : IService, IAsyncDisposable
{
    Task WarmupAsync(CancellationToken cancellationToken);
    Task<IMemoryProviderInstance> CreateAsync(CancellationToken cancellationToken);
}
```

#### IVisionCaptureService

```csharp
public interface IVisionCaptureService : IService, IAsyncDisposable
{
    ComputerVisionSource[] SupportedSources { get; }
    Task<IImage?> CaptureImageAsync(ComputerVisionSource source, CancellationToken ct);
}
```

#### IComputerVisionService

```csharp
public interface IComputerVisionService : ILLMService, IService, IAsyncDisposable
{
    ValueTask<string> DescribeAsync(IChatInferenceData chat, ICharacterInferenceData character,
        IPromptBuilder promptBuilder, IImage image, CancellationToken ct);
    ValueTask<string> DescribeAsync(IPromptBuilder promptBuilder, IImage image, CancellationToken ct);
}
```

#### IAudioInputService

```csharp
public interface IAudioInputService : IService, IAsyncDisposable
{
    event EventHandler<AudioInputFrame>? DataAvailable;
    AudioInputSpecifications GetSpecifications();
    void StartRecording();
    void StopRecording();
}
```

#### IAudioOutputService

```csharp
public interface IAudioOutputService : IService, IAsyncDisposable
{
    Task<IAudioClipPlayer> Load(Stream stream, string contentType, CancellationToken ct);
}
```

#### IWakeWordService

```csharp
public interface IWakeWordService : IService, IAsyncDisposable
{
    Task<IWakeWordAudioInputPipelineMiddleware> CreateWakeWordAudioInputMiddlewareAsync(
        IUserConnectionTunnel tunnel, Guid sessionId);
}
```

### ServiceBase

```csharp
public abstract class ServiceBase : IService, IAsyncDisposable
{
    public ServiceTypes ServiceType { get; }
    public IServiceInstanceSettings InstanceSettings { get; }
    protected IAuthenticationContext Auth { get; }
    protected ISettingsSource ModuleConfiguration { get; }
    protected ISettingsSource ServiceSettings { get; }

    protected ServiceBase(ILogger logger) { }

    public Task InitializeAsync(IAuthenticationContext auth, IServiceInstanceSettings settings, CancellationToken ct);
    protected virtual Task InitializeAsync(CancellationToken ct) => Task.CompletedTask;
    public virtual ValueTask DisposeAsync();
}
```

### Chat Augmentations (SDK 1.1.4)

#### Available Interfaces

| Interface | Purpose |
|-----------|---------|
| `IActionInferenceAugmentation` | Handle action inference |
| `IChatScriptEventsAugmentation` | React to chat lifecycle events |
| `IChatPreProcessAugmentation` | Modify text before processing |
| `IChatPostProcessAugmentation` | Modify text after processing |
| `IChatSpeechReplacementsAugmentation` | Process speech text |
| `IPrefixContributionsAugmentation` | Contribute generation prefixes |

#### IChatAugmentationsService

```csharp
public interface IChatAugmentationsService : IService, IAsyncDisposable
{
    Task<IChatAugmentationServiceInstanceBase[]> CreateInstanceAsync(
        IChatSessionChatAugmentationApi session,
        IAuthenticationContext auth,
        CancellationToken cancellationToken);
}
```

#### IChatAugmentationServiceInstanceBase

```csharp
public interface IChatAugmentationServiceInstanceBase : IAsyncDisposable
{
    ServiceTypes[] GetRequiredServiceTypes();
    string[] GetAugmentationNames();
}
```

#### IActionInferenceAugmentation

```csharp
public interface IActionInferenceAugmentation : IChatAugmentationServiceInstanceBase, IAsyncDisposable
{
    IEnumerable<ClientUpdateContextMessage> RegisterChatContext();
    ValueTask<bool> TryHandleActionInference(
        ChatMessageData? message,
        ServerActionMessage serverActionMessage,
        CancellationToken cancellationToken);
}
```

#### IChatScriptEventsAugmentation

```csharp
public interface IChatScriptEventsAugmentation : IChatAugmentationServiceInstanceBase, IAsyncDisposable
{
    Task OnChatScriptEvent(
        IActionScriptEvent e,
        ChatMessageData? message,
        ICharacterOrUserData? character,
        CancellationToken cancellationToken);
}
```

#### IChatPreProcessAugmentation

```csharp
public interface IChatPreProcessAugmentation : IChatAugmentationServiceInstanceBase, IAsyncDisposable
{
    ValueTask<string> PreProcessTextAsync(ChatMessageRole role, string text, CancellationToken ct);
}
```

#### IChatPostProcessAugmentation

```csharp
public interface IChatPostProcessAugmentation : IChatAugmentationServiceInstanceBase, IAsyncDisposable
{
    ValueTask<string> PostProcessTextAsync(ChatMessageRole role, string text, CancellationToken ct);
}
```

#### IChatSpeechReplacementsAugmentation

```csharp
public interface IChatSpeechReplacementsAugmentation : IChatAugmentationServiceInstanceBase, IAsyncDisposable
{
    string SpeechProcessText(string text);
}
```

#### IPrefixContributionsAugmentation

```csharp
public interface IPrefixContributionsAugmentation : IChatAugmentationServiceInstanceBase, IAsyncDisposable
{
    Task<bool> ShouldRetryGeneratedChunkAsync(string chunkText, CancellationToken ct);
    ValueTask<string?> ContributePrefix(ICharacterInferenceData character, ChatMessageRole role,
        string? prefix, bool force, CancellationToken ct);
}
```

### IChatSessionChatAugmentationApi (SDK 1.1.4)

```csharp
public interface IChatSessionChatAugmentationApi
{
    // Properties
    IAuthenticationContext Auth { get; }
    Guid SessionId { get; }
    ICharacterInferenceData MainCharacter { get; }
    ICharacterOrUserData User { get; }
    IChatInferenceData Chat { get; }
    ChatStyles ChatStyle { get; }
    CancellationToken Abort { get; }

    // Query methods
    bool IsAugmentationEnabled(string key, bool includeInCatchAll = true);
    bool HasService(ServiceTypes serviceType);
    bool CheckService(ServiceTypes serviceType, string serviceName);
    T GetService<T>() where T : IService;

    // Message methods
    Task SendSecretAsync(string text, CancellationToken ct = default);
    Task SendNoteAsync(string text, CancellationToken ct = default);
    Task SendInstructionsAsync(string text, CancellationToken ct = default);
    Task SendUserMessageAsync(string text, CancellationToken ct = default);
    Task SendCharacterMessageAsync(string text, CancellationToken ct = default);
    Task SendNoteAttachmentAsync(string text, IImage image, CancellationToken ct);
    Task SendUserAttachmentAsync(string text, IImage image, CancellationToken ct);

    // Context methods
    Task SetContexts(string key, ContextDefinition[] contexts, CancellationToken ct = default);
    Task SetActions(string key, ScenarioActionDefinition[] functions, CancellationToken ct = default);
    Task SetEvents(string key, ScenarioEventDefinition[] events, CancellationToken ct = default);
    Task SetFlags(SetFlagRequest[] flags, CancellationToken ct);

    // Control methods
    Task TriggerReplyAsync(CancellationToken ct = default);
    Task<IUserInteractionRequestToken> RequestUserAction(UserInteractionRequestInput input, CancellationToken ct);

    // Utility methods
    string ProcessSimpleTemplate(string text);
    Task<string> GenerateAsync(ServiceTypes serviceType, TextGenGenerateRequest request, CancellationToken ct);
}
```

### Script Events (SDK 1.1.4)

Available `IActionScriptEvent` types:

- `InitActionScriptEvent` - Chat initialized
- `StartActionScriptEvent` - Chat started (has `HasBootstrapMessages` property)
- `ResumeActionScriptEvent` - Chat resumed
- `UserMessageReceivedActionScriptEvent` - User sent message (has `Message`, `RewriteUserMessage`)
- `GeneratingActionScriptEvent` - AI generating (has `Character`)
- `GeneratingCompleteActionScriptEvent` - Generation complete
- `SpeechStartActionScriptEvent` - Speech started (has `Character`)
- `SpeechCompleteActionScriptEvent` - Speech complete (has `Character`)
- `BeforeSelectActionInferenceActionScriptEvent` - Before action selection (has `Layer`, `Actions`)
- `ActionInferenceSelectedActionScriptEvent` - Action selected (has `Action`)
- `TranscriptionStartedScriptEvent` - STT started
- `TranscriptionFinishedScriptEvent` - STT finished (has `Text`)
- `TypingStartScriptEvent` - User started typing
- `TypingEndScriptEvent` - User stopped typing
- `AppScriptEvent` - Custom app event

### Image Generation Example

```csharp
public class MyImageGenService : ServiceBase, IImageGenService
{
    private readonly IHttpClientFactory _httpClientFactory;

    public MyImageGenService(
        IHttpClientFactory httpClientFactory,
        ILogger<MyImageGenService> logger)
        : base(logger)
    {
        _httpClientFactory = httpClientFactory;
    }

    public string? PromptingInstructions => "Generate detailed image descriptions.";

    public (int Width, int Height) GetDefaultImageSize(int? requestedWidth = null, int? requestedHeight = null)
        => (requestedWidth ?? 1024, requestedHeight ?? 1024);

    public Task WarmupAsync(CancellationToken cancellationToken) => Task.CompletedTask;

    public async ValueTask<IImage> GenerateAsync(
        GenerateImageRequest request,
        IInferenceLogger inferenceLogger,
        CancellationToken cancellationToken)
    {
        var apiKey = ModuleConfiguration.Get("ApiKey");
        if (string.IsNullOrWhiteSpace(apiKey))
            throw new InvalidOperationException("API key not configured.");

        inferenceLogger.AppendLog($"Prompt: {request.Prompt}");

        var client = _httpClientFactory.CreateClient();
        // Make API call and return IImage implementation
        // ...
    }
}
```

### Augmentation Example

```csharp
public class MyActionAugmentation : IActionInferenceAugmentation
{
    private readonly IChatSessionChatAugmentationApi _session;
    private readonly ILogger _logger;

    public MyActionAugmentation(IChatSessionChatAugmentationApi session, ILogger<MyActionAugmentation> logger)
    {
        _session = session;
        _logger = logger;
    }

    public ServiceTypes[] GetRequiredServiceTypes() => [ServiceTypes.ActionInference];
    public string[] GetAugmentationNames() => ["my_augmentation"];

    public IEnumerable<ClientUpdateContextMessage> RegisterChatContext()
    {
        return
        [
            new ClientUpdateContextMessage
            {
                ContextKey = "MyAugmentation",
                SessionId = _session.SessionId,
                Actions =
                [
                    new ScenarioActionDefinition
                    {
                        Name = "get_time",
                        ShortDescription = "get current time",
                        Description = "When the user asks for the current time.",
                        MatchFilter = ["time", "clock", "hour"],
                        Timing = FunctionTiming.AfterUserMessage,
                        CancelReply = true,
                    }
                ]
            }
        ];
    }

    public async ValueTask<bool> TryHandleActionInference(
        ChatMessageData? message,
        ServerActionMessage action,
        CancellationToken cancellationToken)
    {
        if (action.ContextKey != "MyAugmentation")
            return false;

        switch (action.Value)
        {
            case "get_time":
                _logger.LogInformation("Time requested");
                await _session.SendSecretAsync($"Current time: {DateTime.Now:HH:mm:ss}", cancellationToken);
                await _session.TriggerReplyAsync(cancellationToken);
                return true;
            default:
                return false;
        }
    }

    public ValueTask DisposeAsync() => ValueTask.CompletedTask;
}
```

---

## 5. Client/App SDK

### Overview

Clients **own chat sessions**. They create chats, manage the connection, handle audio I/O, and coordinate the conversation flow.

### Project Setup

**Target Framework:** `net10.0` (or `net10.0-windows` for Windows-specific features)

```xml
<Project Sdk="Microsoft.NET.Sdk">
    <PropertyGroup>
        <OutputType>Exe</OutputType>
        <TargetFramework>net10.0-windows</TargetFramework>
        <ImplicitUsings>enable</ImplicitUsings>
        <Nullable>enable</Nullable>
    </PropertyGroup>

    <ItemGroup>
        <Reference Include="Voxta.Client">
            <HintPath>libs\Voxta.Client.dll</HintPath>
        </Reference>
    </ItemGroup>

    <ItemGroup>
        <PackageReference Include="Microsoft.Extensions.Configuration.Json" Version="10.0.0" />
        <PackageReference Include="Microsoft.Extensions.DependencyInjection" Version="10.0.0" />
        <PackageReference Include="Microsoft.Extensions.Http" Version="10.0.0" />
        <PackageReference Include="NAudio.Wasapi" Version="2.2.1"/>
    </ItemGroup>
</Project>
```

### Message Handling

```csharp
private void OnMessage(object? sender, ServerMessage e)
{
    switch (e)
    {
        case ServerWelcomeMessage welcome:
            _client.Send(new ClientStartChatMessage { CharacterId = welcome.Assistant.Id });
            break;
        case ServerChatStartingMessage:
            Console.WriteLine("Loading chat...");
            break;
        case ServerChatStartedMessage started:
            _sessionId = started.SessionId;
            break;
        case ServerReplyGeneratingMessage:
            Console.WriteLine("Thinking...");
            break;
        case ServerReplyThinkingMessage thinking:
            // Optional thinking speech URL available
            break;
        case ServerReplyStartMessage start:
            _currentMessageId = start.MessageId;
            break;
        case ServerReplyChunkMessage chunk:
            Console.Write(chunk.Text);
            break;
        case ServerReplyEndMessage end:
            Console.WriteLine();
            break;
        case ServerReplyCancelledMessage:
            Console.WriteLine("[Cancelled]");
            break;
        case ServerSpeechRecognitionStartMessage:
            Console.WriteLine("Listening...");
            break;
        case ServerSpeechRecognitionPartialMessage partial:
            Console.WriteLine($"  (heard: {partial.Text})");
            break;
        case ServerSpeechRecognitionEndMessage final:
            Console.WriteLine($"You said: {final.Text}");
            break;
        case ServerActionMessage action:
            HandleAction(action);
            break;
        case ServerActionAppTriggerMessage appTrigger:
            HandleAppTrigger(appTrigger);
            break;
        case ServerErrorMessage error:
            Console.Error.WriteLine($"Error: {error.Message}");
            break;
        case ServerChatSessionErrorMessage sessionError:
            Console.Error.WriteLine($"Session error: {sessionError.Message}");
            break;
        case ServerRecordingRequestMessage recording:
            if (recording.Enabled) StartMicRecording();
            else StopMicRecording();
            break;
        case ServerInterruptSpeechMessage:
            StopPlayback();
            break;
        case ServerChatFlowMessage flow:
            Console.WriteLine($"Chat flow: {flow.State}");
            break;
        case ServerChatPausedMessage:
            Console.WriteLine("Chat paused");
            break;
        case ServerMemoryUpdatedMessage:
            Console.WriteLine("Memory updated");
            break;
        case ServerContextUpdatedMessage context:
            Console.WriteLine($"Flags: {string.Join(", ", context.Flags ?? [])}");
            break;
        case ServerSuggestionsMessage suggestions:
            // Handle UI suggestions
            break;
        case ServerUserInteractionRequestMessage interaction:
            // Handle user interaction request
            break;
        case ServerVisionCaptureRequestMessage vision:
            // Handle vision capture request
            break;
        case ServerWakeWordStatusMessage wakeWord:
            Console.WriteLine($"Wake word: {wakeWord.Enabled}");
            break;
    }
}
```

---

## 6. WebSocket Protocol Reference

### Connection

- **Endpoint:** `ws://{host}:{port}/hub` (SignalR)
- **Default:** `ws://127.0.0.1:5384/hub`

### Client Messages (SDK 1.1.4)

| Type | Class | Key Fields |
|------|-------|------------|
| `authenticate` | `ClientAuthenticateMessage` | `Client`, `ClientVersion`, `Scope`, `Capabilities` |
| `startChat` | `ClientStartChatMessage` | `CharacterId`, `ScenarioId?`, `Contexts?`, `Actions?` |
| `resumeChat` | `ClientResumeChatMessage` | `ChatId` |
| `stopChat` | `ClientStopChatMessage` | - |
| `send` | `ClientSendMessage` | `SessionId`, `Text`, `DoReply`, `DoUserActionInference`, `DoCharacterActionInference` |
| `updateContext` | `ClientUpdateContextMessage` | `SessionId`, `ContextKey`, `Contexts?`, `Actions?`, `Events?`, `SetFlags?`, `EnableRoles?` |
| `speechPlaybackStart` | `ClientSpeechPlaybackStartMessage` | `SessionId`, `MessageId`, `StartIndex`, `EndIndex`, `Duration` |
| `speechPlaybackComplete` | `ClientSpeechPlaybackCompleteMessage` | `SessionId`, `MessageId` |
| `revert` | `ClientRevertMessage` | `SessionId` |
| `retry` | `ClientRetryMessage` | `SessionId` |
| `interrupt` | `ClientInterruptMessage` | `SessionId` |
| `pause` | `ClientPauseMessage` | `SessionId` |
| `typingStart` | `ClientTypingStartMessage` | `SessionId` |
| `typingEnd` | `ClientTypingEndMessage` | `SessionId` |
| `speak` | `ClientSpeakMessage` | `SessionId`, `Text` |
| `triggerAction` | `ClientTriggerActionMessage` | `SessionId`, `Action` |
| `loadCharactersList` | `ClientLoadCharactersListMessage` | - |
| `loadScenariosList` | `ClientLoadScenariosListMessage` | - |
| `loadChatsList` | `ClientLoadChatsListMessage` | `CharacterId`, `ScenarioId?` |
| `deleteChat` | `ClientDeleteChatMessage` | `ChatId` |
| `deleteMessage` | `ClientDeleteMessageMessage` | `SessionId`, `MessageId` |
| `updateMessage` | `ClientUpdateMessage` | `SessionId`, `MessageId`, `Text` |
| `updateChat` | `ClientUpdateChatMessage` | `ChatId`, fields... |
| `updateDocument` | `ClientUpdateDocumentMessage` | `SessionId`, `DocumentId`, `Content` |
| `registerApp` | `ClientRegisterAppMessage` | `ClientVersion`, `Label`, `ScriptSnippets?` |
| `subscribeTo` | `ClientSubscribeToChatMessage` | `ChatId` |
| `unsubscribeFrom` | `ClientUnsubscribeFromChatMessage` | `ChatId` |
| `addChatParticipant` | `ClientAddChatParticipantMessage` | `SessionId`, `CharacterId` |
| `removeChatParticipant` | `ClientRemoveChatParticipantMessage` | `SessionId`, `CharacterId` |
| `requestSuggestions` | `ClientRequestSuggestionsMessage` | `SessionId` |
| `fulfillUserInteraction` | `ClientFulfillUserInteractionRequestMessage` | `SessionId`, `RequestId`, `Value` |
| `characterSpeechRequest` | `ClientCharacterSpeechRequestMessage` | `SessionId`, `CharacterId` |
| `runScript` | `ClientRunScriptMessage` | `SessionId`, `Script` |
| `triggerScriptEvent` | `ClientTriggerScriptEventMessage` | `SessionId`, `EventName` |
| `inspect` | `ClientInspectMessage` | `SessionId`, `Enabled` |
| `inspectAudioInput` | `ClientInspectAudioInputMessage` | `SessionId`, `Enabled` |
| `listResources` | `ClientListResourcesMessage` | `Type` |
| `deployResource` | `ClientDeployResourceMessage` | various |
| `appTriggerComplete` | `ClientAppTriggerCompleteMessage` | `SessionId`, `Name` |

### Server Messages (SDK 1.1.4)

| Type | Class | Key Fields |
|------|-------|------------|
| `welcome` | `ServerWelcomeMessage` | `User`, `Assistant?`, `VoxtaServerVersion`, `ApiVersion` |
| `authenticationRequired` | `ServerAuthenticationRequiredMessage` | - |
| `error` | `ServerErrorMessage` | `Message`, `Code?`, `Details?` |
| `chatSessionError` | `ServerChatSessionErrorMessage` | `Message`, `Code?`, `ServiceName?` |
| `charactersListLoaded` | `ServerCharactersListLoadedMessage` | `Characters[]` |
| `scenariosListLoaded` | `ServerScenariosListLoadedMessage` | `Scenarios[]` |
| `chatsListLoaded` | `ServerChatsListLoadedMessage` | `Chats[]` |
| `chatStarting` | `ServerChatStartingMessage` | - |
| `chatLoading` | `ServerChatLoadingMessage` | - |
| `chatStarted` | `ServerChatStartedMessage` | `SessionId`, `ChatId`, `Characters[]`, `Services`, `Context` |
| `chatClosed` | `ServerChatClosedMessage` | `ChatId` |
| `chatUpdated` | `ServerChatUpdatedMessage` | `ChatId`, fields... |
| `chatPaused` | `ServerChatPausedMessage` | `SessionId` |
| `chatFlow` | `ServerChatFlowMessage` | `State` |
| `chatParticipantsUpdated` | `ServerChatParticipantsUpdatedMessage` | `SessionId` |
| `chatSessionsUpdated` | `ServerChatSessionsUpdatedMessage` | - |
| `replyGenerating` | `ServerReplyGeneratingMessage` | `SessionId`, `MessageId`, `SenderId`, `ThinkingSpeechUrl?` |
| `replyThinking` | `ServerReplyThinkingMessage` | `SessionId`, `AudioUrl?` |
| `replyStart` | `ServerReplyStartMessage` | `SessionId`, `MessageId`, `SenderId` |
| `replyChunk` | `ServerReplyChunkMessage` | `SessionId`, `MessageId`, `Text`, `AudioUrl?`, `StartIndex`, `EndIndex`, `SenderId`, `IsNarration`, `AudioGapMs?` |
| `replyEnd` | `ServerReplyEndMessage` | `SessionId`, `MessageId`, `SenderId` |
| `replyCancelled` | `ServerReplyCancelledMessage` | `SessionId`, `MessageId` |
| `speechRecognitionStart` | `ServerSpeechRecognitionStartMessage` | - |
| `speechRecognitionPartial` | `ServerSpeechRecognitionPartialMessage` | `Text` |
| `speechRecognitionEnd` | `ServerSpeechRecognitionEndMessage` | `Text` |
| `speechPlaybackStart` | `ServerSpeechPlaybackStartMessage` | `SessionId`, `MessageId` |
| `speechPlaybackComplete` | `ServerSpeechPlaybackCompleteMessage` | `SessionId`, `MessageId` |
| `action` | `ServerActionMessage` | `Value`, `Layer?`, `Role`, `ContextKey?`, `SenderId`, `ScenarioRole?`, `Arguments[]?` |
| `appTrigger` | `ServerActionAppTriggerMessage` | `Name`, `Arguments[]` |
| `contextUpdated` | `ServerContextUpdatedMessage` | `Flags[]` |
| `recordingRequest` | `ServerRecordingRequestMessage` | `Enabled` |
| `recordingStatus` | `ServerRecordingStatusMessage` | `Enabled` |
| `updated` | `ServerUpdatedMessage` | `Text`, `Role` |
| `interruptSpeech` | `ServerInterruptSpeechMessage` | - |
| `memoryUpdated` | `ServerMemoryUpdatedMessage` | - |
| `documentUpdated` | `ServerDocumentUpdatedMessage` | `DocumentId` |
| `moduleRuntimeInstances` | `ServerModuleRuntimeInstancesMessage` | `Instances[]` |
| `configuration` | `ServerConfigurationMessage` | `Configurations[]` |
| `chatConfiguration` | `ServerChatConfigurationMessage` | fields... |
| `suggestions` | `ServerSuggestionsMessage` | `Suggestions[]` |
| `userInteractionRequest` | `ServerUserInteractionRequestMessage` | `RequestId`, `Input` |
| `closeUserInteractionRequest` | `ServerCloseUserInteractionRequestMessage` | `RequestId` |
| `visionCaptureRequest` | `ServerVisionCaptureRequestMessage` | `Source` |
| `wakeWordStatus` | `ServerWakeWordStatusMessage` | `Enabled` |
| `downloadProgress` | `ServerDownloadProgressMessage` | `Progress` |
| `inspector` | `ServerInspectorMessage` | `Log` |
| `inspectorEnabled` | `ServerInspectorEnabledMessage` | `Enabled` |
| `inspectorActionExecuted` | `ServerInspectorActionExecutedMessage` | `Action` |
| `inspectorScriptExecuted` | `ServerInspectorScriptExecutedMessage` | `Script` |
| `inspectorScenarioEventExecuted` | `ServerInspectorScenarioEventExecutedMessage` | `Event` |
| `listResourcesResult` | `ServerListResourcesResultMessage` | `Resources[]` |
| `deployResourceResult` | `ServerDeployResourceResultMessage` | `Success`, `Error?` |
| `missingResourcesError` | `ServerMissingResourcesErrorMessage` | `Resources[]` |
| `audioFrame` | `ServerAudioFrameMessage` | `Data` |

### Audio WebSocket

- **Endpoint:** `ws://{host}:{port}/ws/audio/input/stream`
- **First Message:** JSON specifications
- **Subsequent:** Binary PCM audio data

```json
{
  "sampleRate": 16000,
  "channels": 1,
  "bitsPerSample": 16,
  "bufferMilliseconds": 30
}
```

---

## 7. Authentication & Authorization

### Scopes

| Scope | Description |
|-------|-------------|
| `role:app` | Full application access (start chats, etc.) |
| `role:provider` | Provider access (attach to chats) |

### Device Code Flow

1. Request device code: `GET /api/auth/device?client={name}`
2. Display code to user
3. User visits verification URL and enters code
4. Poll for token: `GET /api/auth/device/token?deviceCode={code}`
5. Use token in `Authorization: Bearer {token}` header

---

## 8. Configuration Patterns

### ModuleDefinition Properties (SDK 1.1.4)

```csharp
public class ModuleDefinition
{
    // Required
    public required string ServiceName { get; init; }
    public required string Label { get; init; }
    public required Dictionary<ServiceTypes, ServiceDefinitionCategoryScore> Supports { get; init; }
    public required ServiceDefinitionPricing Pricing { get; init; }
    public required ServiceDefinitionHosting Hosting { get; init; }
    public required Type ModuleConfigurationProviderType { get; init; }

    // Optional metadata
    public string Notes { get; init; } = "";
    public string Pros { get; init; } = "";
    public string Cons { get; init; } = "";
    public string? HelpLink { get; init; }
    public ModuleLogo? Logo { get; init; }

    // Flags
    public bool Required { get; init; }
    public bool Single { get; init; }
    public bool CanBeInstalledByAdminsOnly { get; init; } = true;
    public bool UsePython { get; init; }
    public bool SupportsExplicitContent { get; init; }
    public bool Experimental { get; init; }
    public bool Recommended { get; init; }
    public bool Deprecated { get; init; }
    public bool Missing { get; init; }

    // Configuration
    public string[] ModuleConfigurationFieldsRequiringReload { get; init; } = [];
    public Type? PresetsProviderType { get; init; }
    public string[] PresetsFieldsRequiringReload { get; init; } = [];
    public Type? ModuleInstallationProviderType { get; init; }
    public Type? VoicesProviderType { get; init; }
    public Type? AuthProviderType { get; init; }
    public Type? ModuleTestingProviderType { get; init; }

    // Features
    public string[]? FeatureFlags { get; init; }
    public string[]? Augmentations { get; init; }
    public ComputerVisionSource[]? SupportedVisionSources { get; init; }
}
```

### Form Field Types (SDK 1.1.4)

```csharp
// Text inputs
FormTextField             // Single-line text
FormMultilineField        // Multi-line text
FormPasswordField         // Password (masked)

// Numbers
FormIntField              // Integer
FormDoubleField           // Decimal
FormIntSliderField        // Integer slider
FormDoubleSliderField     // Decimal slider
ForLongField              // Long integer
ForLongSliderField        // Long slider

// Booleans
FormBooleanField          // Checkbox

// Selection
FormChoicesField          // Single select dropdown
FormMultipleChoicesField  // Multi-select
FormEnumField             // Enum dropdown
FormMultipleEnumField     // Multi-select enum

// Lists
FormStringListField       // List of strings
FormIntListField          // List of integers

// Special
FormTitleField            // Section header
FormHiddenField           // Hidden value
FormAssetField            // Asset picker
FormAuthorizeField        // OAuth authorization
FormModelField            // Model selector
FormPromptTemplatesField  // Prompt template selector
FormPromptFormattingTemplatesField
FormDocumentationField    // Documentation link
FormInvokeActionField     // Action button
```

### Configuration Provider Example

```csharp
public class ModuleConfigurationProvider : ModuleConfigurationProviderBase, IModuleConfigurationProvider
{
    public static string[] FieldsRequiringReload => [ApiKey.Name];

    public static readonly FormTextField ApiKey = new()
    {
        Name = "ApiKey",
        Label = "API Key",
        Text = "Your API key for the service.",
        IsRequired = true,
        Type = FormTextFieldType.Secret
    };

    public static readonly FormIntSliderField MaxTokens = new()
    {
        Name = "MaxTokens",
        Label = "Max Tokens",
        Text = "Maximum tokens to generate.",
        DefaultValue = 1024,
        MinValue = 1,
        MaxValue = 4096
    };

    public static readonly FormChoicesField Model = new()
    {
        Name = "Model",
        Label = "Model",
        Choices = [
            new FormChoice { Value = "gpt-4", Label = "GPT-4" },
            new FormChoice { Value = "gpt-3.5", Label = "GPT-3.5" }
        ],
        DefaultValue = "gpt-4"
    };

    public Task<FormField[]> GetModuleConfigurationFieldsAsync(
        IAuthenticationContext auth,
        ISettingsSource settings,
        CancellationToken cancellationToken)
    {
        var fields = FormBuilder.Build(
            FormTitleField.Create("API Settings"),
            ApiKey,
            FormTitleField.Create("Model Settings"),
            Model,
            MaxTokens
        );
        return Task.FromResult(fields);
    }
}
```

---

## 9. Action System Deep Dive

### ServerActionMessage Properties (SDK 1.1.4)

```csharp
public class ServerActionMessage
{
    public string? ContextKey { get; set; }
    public string? Layer { get; set; }
    public required string Value { get; set; }
    public ChatMessageRole Role { get; set; }
    public Guid SenderId { get; set; }
    public string? ScenarioRole { get; set; }
    public ActionInvocationArgument[]? Arguments { get; init; }

    public bool TryGetArgument(string name, out string? value);
}
```

### ClientUpdateContextMessage Properties (SDK 1.1.4)

```csharp
public class ClientUpdateContextMessage
{
    public Guid SessionId { get; init; }
    public string? ContextKey { get; init; }
    public ContextDefinition[]? Contexts { get; init; }
    public ScenarioActionDefinition[]? Actions { get; init; }
    public ScenarioEventDefinition[]? Events { get; init; }
    public string[]? SetFlags { get; set; }
    public Dictionary<string, bool>? EnableRoles { get; init; }
}
```

---

## 10. Audio Handling

### Supported Formats

| Format | MIME Type |
|--------|-----------|
| WAV | `audio/x-wav` |
| MP3 | `audio/mpeg` |

### Audio Output Capabilities

| Capability | Description |
|------------|-------------|
| `None` | No audio output |
| `Url` | Server provides URL to download |
| `LocalFile` | Server writes to local path |

### Audio Input Capabilities

| Capability | Description |
|------------|-------------|
| `None` | No audio input |
| `WebSocketStream` | Stream PCM via WebSocket |

---

## 11. Common Patterns & Best Practices

### Structured Logging

```csharp
// Good - structured
_logger.LogInformation("Action {ActionName} triggered with {Strength}", name, strength);

// Bad - string interpolation
_logger.LogInformation($"Action {name} triggered with {strength}");
```

### Avoiding Action Loops

```csharp
Send(new ClientSendMessage
{
    SessionId = SessionId,
    DoUserActionInference = false,      // IMPORTANT!
    DoCharacterActionInference = false,
    Text = "Response text"
});
```

---

## 12. Troubleshooting

### Common Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| "Authentication required" | No profile in Voxta | Create profile in Voxta UI first |
| Actions not triggering | Missing ActionInference service | Enable in Voxta settings |
| Module not loading | Wrong target framework | Use `net9.0` or `net10.0` |

### Debug Logging

```json
{
  "Serilog": {
    "MinimumLevel": {
      "Default": "Debug",
      "Override": {
        "Voxta": "Debug",
        "Microsoft.AspNetCore.SignalR": "Debug"
      }
    }
  }
}
```

---

## Quick Reference Card

### ServiceTypes Enum

```csharp
TextGen, ActionInference, Summarization, TextToSpeech, SpeechToText,
AudioInput, AudioOutput, AudioPipeline, WakeWord, VisionCapture,
ComputerVision, ChatAugmentations, Memory, ImageGen, None
```

### IVoxtaModuleBuilder Registration Methods

```csharp
AddTextGenService<T>()
AddSummarizationService<T>()
AddActionInferenceService<T>()
AddTextToSpeechService<T>()
AddSpeechToTextService<T>()
AddAudioInputService<T>()
AddAudioOutputService<T>()
AddAudioPipelineService<T>()
AddWakeWordService<T>()
AddVisionCaptureService<T>()
AddComputerVisionService<T>()
AddChatAugmentationsService<T>()
AddMemoryProviderService<T>()
AddImageGenService<T>()
AddModuleRuntimeInstance<TService, TImpl>()
```

### Augmentation Interfaces

```csharp
IActionInferenceAugmentation
IChatScriptEventsAugmentation
IChatPreProcessAugmentation
IChatPostProcessAugmentation
IChatSpeechReplacementsAugmentation
IPrefixContributionsAugmentation
```

### IChatSessionChatAugmentationApi Key Methods

```csharp
SendSecretAsync(), SendNoteAsync(), SendInstructionsAsync()
SendUserMessageAsync(), SendCharacterMessageAsync()
SetContexts(), SetActions(), SetEvents(), SetFlags()
TriggerReplyAsync(), RequestUserAction()
HasService(), GetService<T>(), GenerateAsync()
```

---

*Generated from Voxta SDK 1.1.4 decompilation analysis. Last verified: 2025-12-13*
