# Voxta.Core source dump

## --y__InlineArray3.cs
```csharp
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;

[StructLayout(LayoutKind.Auto)]
[InlineArray(3)]
internal struct _003C_003Ey__InlineArray3<T>
{
}

```

## --y__InlineArray5.cs
```csharp
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;

[StructLayout(LayoutKind.Auto)]
[InlineArray(5)]
internal struct _003C_003Ey__InlineArray5<T>
{
}

```

## --z__ReadOnlyArray.cs
```csharp
using System;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.CompilerServices;

[CompilerGenerated]
internal sealed class _003C_003Ez__ReadOnlyArray<T> : IEnumerable, ICollection, IList, IEnumerable<T>, IReadOnlyCollection<T>, IReadOnlyList<T>, ICollection<T>, IList<T>
{
	int ICollection.Count => _items.Length;

	bool ICollection.IsSynchronized => false;

	object ICollection.SyncRoot => this;

	object? IList.this[int index]
	{
		get
		{
			return _items[index];
		}
		set
		{
			throw new NotSupportedException();
		}
	}

	bool IList.IsFixedSize => true;

	bool IList.IsReadOnly => true;

	int IReadOnlyCollection<T>.Count => _items.Length;

	T IReadOnlyList<T>.this[int index] => _items[index];

	int ICollection<T>.Count => _items.Length;

	bool ICollection<T>.IsReadOnly => true;

	T IList<T>.this[int index]
	{
		get
		{
			return _items[index];
		}
		set
		{
			throw new NotSupportedException();
		}
	}

	public _003C_003Ez__ReadOnlyArray(T[] items)
	{
		_items = items;
	}

	IEnumerator IEnumerable.GetEnumerator()
	{
		return ((IEnumerable)_items).GetEnumerator();
	}

	void ICollection.CopyTo(Array array, int index)
	{
		((ICollection)_items).CopyTo(array, index);
	}

	int IList.Add(object? value)
	{
		throw new NotSupportedException();
	}

	void IList.Clear()
	{
		throw new NotSupportedException();
	}

	bool IList.Contains(object? value)
	{
		return ((IList)_items).Contains(value);
	}

	int IList.IndexOf(object? value)
	{
		return ((IList)_items).IndexOf(value);
	}

	void IList.Insert(int index, object? value)
	{
		throw new NotSupportedException();
	}

	void IList.Remove(object? value)
	{
		throw new NotSupportedException();
	}

	void IList.RemoveAt(int index)
	{
		throw new NotSupportedException();
	}

	IEnumerator<T> IEnumerable<T>.GetEnumerator()
	{
		return ((IEnumerable<T>)_items).GetEnumerator();
	}

	void ICollection<T>.Add(T item)
	{
		throw new NotSupportedException();
	}

	void ICollection<T>.Clear()
	{
		throw new NotSupportedException();
	}

	bool ICollection<T>.Contains(T item)
	{
		return ((ICollection<T>)_items).Contains(item);
	}

	void ICollection<T>.CopyTo(T[] array, int arrayIndex)
	{
		((ICollection<T>)_items).CopyTo(array, arrayIndex);
	}

	bool ICollection<T>.Remove(T item)
	{
		throw new NotSupportedException();
	}

	int IList<T>.IndexOf(T item)
	{
		return ((IList<T>)_items).IndexOf(item);
	}

	void IList<T>.Insert(int index, T item)
	{
		throw new NotSupportedException();
	}

	void IList<T>.RemoveAt(int index)
	{
		throw new NotSupportedException();
	}
}

```

## --z__ReadOnlySingleElementList.cs
```csharp
using System;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.CompilerServices;

[CompilerGenerated]
internal sealed class _003C_003Ez__ReadOnlySingleElementList<T> : IEnumerable, ICollection, IList, IEnumerable<T>, IReadOnlyCollection<T>, IReadOnlyList<T>, ICollection<T>, IList<T>
{
	private sealed class Enumerator : IDisposable, IEnumerator, IEnumerator<T>
	{
		object IEnumerator.Current => _item;

		T IEnumerator<T>.Current => _item;

		public Enumerator(T item)
		{
			_item = item;
		}

		bool IEnumerator.MoveNext()
		{
			if (!_moveNextCalled)
			{
				return _moveNextCalled = true;
			}
			return false;
		}

		void IEnumerator.Reset()
		{
			_moveNextCalled = false;
		}

		void IDisposable.Dispose()
		{
		}
	}

	int ICollection.Count => 1;

	bool ICollection.IsSynchronized => false;

	object ICollection.SyncRoot => this;

	object? IList.this[int index]
	{
		get
		{
			if (index != 0)
			{
				throw new IndexOutOfRangeException();
			}
			return _item;
		}
		set
		{
			throw new NotSupportedException();
		}
	}

	bool IList.IsFixedSize => true;

	bool IList.IsReadOnly => true;

	int IReadOnlyCollection<T>.Count => 1;

	T IReadOnlyList<T>.this[int index]
	{
		get
		{
			if (index != 0)
			{
				throw new IndexOutOfRangeException();
			}
			return _item;
		}
	}

	int ICollection<T>.Count => 1;

	bool ICollection<T>.IsReadOnly => true;

	T IList<T>.this[int index]
	{
		get
		{
			if (index != 0)
			{
				throw new IndexOutOfRangeException();
			}
			return _item;
		}
		set
		{
			throw new NotSupportedException();
		}
	}

	public _003C_003Ez__ReadOnlySingleElementList(T item)
	{
		_item = item;
	}

	IEnumerator IEnumerable.GetEnumerator()
	{
		return new Enumerator(_item);
	}

	void ICollection.CopyTo(Array array, int index)
	{
		array.SetValue(_item, index);
	}

	int IList.Add(object? value)
	{
		throw new NotSupportedException();
	}

	void IList.Clear()
	{
		throw new NotSupportedException();
	}

	bool IList.Contains(object? value)
	{
		return EqualityComparer<T>.Default.Equals(_item, (T)value);
	}

	int IList.IndexOf(object? value)
	{
		if (!EqualityComparer<T>.Default.Equals(_item, (T)value))
		{
			return -1;
		}
		return 0;
	}

	void IList.Insert(int index, object? value)
	{
		throw new NotSupportedException();
	}

	void IList.Remove(object? value)
	{
		throw new NotSupportedException();
	}

	void IList.RemoveAt(int index)
	{
		throw new NotSupportedException();
	}

	IEnumerator<T> IEnumerable<T>.GetEnumerator()
	{
		return new Enumerator(_item);
	}

	void ICollection<T>.Add(T item)
	{
		throw new NotSupportedException();
	}

	void ICollection<T>.Clear()
	{
		throw new NotSupportedException();
	}

	bool ICollection<T>.Contains(T item)
	{
		return EqualityComparer<T>.Default.Equals(_item, item);
	}

	void ICollection<T>.CopyTo(T[] array, int arrayIndex)
	{
		array[arrayIndex] = _item;
	}

	bool ICollection<T>.Remove(T item)
	{
		throw new NotSupportedException();
	}

	int IList<T>.IndexOf(T item)
	{
		if (!EqualityComparer<T>.Default.Equals(_item, item))
		{
			return -1;
		}
		return 0;
	}

	void IList<T>.Insert(int index, T item)
	{
		throw new NotSupportedException();
	}

	void IList<T>.RemoveAt(int index)
	{
		throw new NotSupportedException();
	}
}

```

## -PrivateImplementationDetails-.cs
```csharp

```

## Microsoft.Extensions.DependencyInjection\ServiceCollectionExtensions.cs
```csharp
using System;
using Voxta.Abstractions;
using Voxta.Abstractions.Assets;
using Voxta.Abstractions.Cache;
using Voxta.Abstractions.Chats.Creation;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Configuration;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.DependencyInjection;
using Voxta.Abstractions.Diagnostics;
using Voxta.Abstractions.Downloading;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.ModuleRuntimeInstances;
using Voxta.Abstractions.Modules;
using Voxta.Abstractions.Prompting;
using Voxta.Abstractions.Runtime;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Abstractions.Services.AudioInput.Pipeline;
using Voxta.Abstractions.Services.AudioOutput.Pipeline;
using Voxta.Abstractions.Services.ChatAugmentations;
using Voxta.Abstractions.Services.TextGen;
using Voxta.Abstractions.Services.VisionCapture;
using Voxta.Abstractions.TextGenerationStreaming;
using Voxta.Abstractions.Tokenizers;
using Voxta.Abstractions.Utils;
using Voxta.Core;
using Voxta.Core.Assets;
using Voxta.Core.Chats.Commands;
using Voxta.Core.Chats.Creation;
using Voxta.Core.Chats.DetachedChat;
using Voxta.Core.Chats.Objects;
using Voxta.Core.Chats.Objects.Characters;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.Objects.Scenarios;
using Voxta.Core.Chats.ScopedServices;
using Voxta.Core.Chats.Sessions;
using Voxta.Core.CommandsProcessing;
using Voxta.Core.Configuration;
using Voxta.Core.Connections;
using Voxta.Core.Connections.Sessions;
using Voxta.Core.DependencyInjection;
using Voxta.Core.Downloading;
using Voxta.Core.ModuleRuntimeInstances;
using Voxta.Core.Runtime;
using Voxta.Core.Services.AudioInput;
using Voxta.Core.Services.AudioOutput;
using Voxta.Core.Services.Memory;
using Voxta.Core.Services.VisionCapture;
using Voxta.Core.Speech;
using Voxta.Core.Speech.Cache;
using Voxta.Core.TextGenerationStreaming;
using Voxta.Core.Utils;

namespace Microsoft.Extensions.DependencyInjection;

public static class ServiceCollectionExtensions
{
	public static void AddVoxta(this IServiceCollection services, Action<IVoxtaModuleBuilder> configure, VoxtaGlobalOptions options)
	{
		services.AddSingleton<IVoxtaVersion, VoxtaVersion>();
		services.AddSingleton<UserConnectionFactory>();
		services.AddSingleton<IChatSessionManager, ChatSessionManager>();
		services.AddSingleton<IChatSessionFactory, ChatSessionFactory>();
		services.AddSingleton<IModuleRuntimeInstancesManager, ModuleRuntimeInstancesManager>();
		services.AddSingleton<IServicesConfigurationChangeDispatcher, ServicesConfigurationChangeDispatcher>();
		services.AddSingleton<ISanitizer, Sanitizer>();
		services.AddSingleton((IServiceProvider _) => TimeProvider.System);
		services.AddSingleton<IDomainRateLimiter, DomainRateLimiter>();
		services.AddSingleton<IProgressDownloader, ProgressDownloader>();
		services.AddSingleton<IChatFactory, ChatFactory>();
		services.AddSingleton<IServiceInstallLock, FileBasedServiceInstallLock>();
		services.AddSingleton<ISpeechGeneratorFactory, SpeechGeneratorFactory>();
		services.AddSingleton<IPendingSpeechManager, PendingSpeechManager>();
		services.AddSingleton<IPersistentCache, FileSystemPersistentCache>();
		services.AddSingleton<ICacheFolder, CacheFolder>();
		services.AddSingleton<IThinkingSpeechManager, ThinkingSpeechManager>();
		services.AddSingleton<IAudioStreamingGlobalListener, AudioStreamingGlobalListener>();
		services.AddSingleton<ISpeechToTextManagerFactory, SpeechToTextManagerFactory>();
		services.AddSingleton<IAudioInputPipelineState, AudioInputPipelineState>();
		services.AddSingleton<IAudioInputPipelineFactory, AudioInputPipelineFactory>();
		services.AddSingleton<IAudioInputPipelineComponentFactory, AudioInputPipelineComponentFactory>();
		services.AddSingleton<ITextToSpeechManagerFactory, TextToSpeechManagerFactory>();
		services.AddSingleton<IAudioOutputPipelineFactory, AudioOutputPipelineFactory>();
		services.AddSingleton<IVisionManagerFactory, VisionManagerFactory>();
		services.AddSingleton<IVisionCaptureServiceFactory, VisionCaptureServiceFactory>();
		services.AddSingleton<IRemoteVisionCaptureGlobalListener, RemoteVisionCaptureGlobalListener>();
		services.AddSingleton<ICharacterInstanceFactory, CharacterInstanceFactory>();
		services.AddSingleton<IScenarioInstanceFactory, ScenarioInstanceFactory>();
		services.AddSingleton<IBootstrappedMessagesFactory, BootstrappedMessagesFactory>();
		services.AddSingleton<IActionEffectInstanceFactory, ActionEffectInstanceFactory>();
		services.AddSingleton<IScenarioActionInstanceFactory, ScenarioActionInstanceFactory>();
		services.AddSingleton<IContextDefinitionInstanceFactory, ContextDefinitionInstanceFactory>();
		services.AddSingleton<IChatObjectInstanceFactory, ChatObjectInstanceFactory>();
		services.AddSingleton<IDetachedChatFactory, DetachedChatFactory>();
		services.AddSingleton<IChatMemoryExtractionHelper, ChatMemoryExtractionHelper>();
		services.AddSingleton<IEphemeralChatRepository, InMemoryEphemeralChatRepository>();
		services.AddSingleton<ITranscriptionSessionFactory, TranscriptionSessionFactory>();
		services.AddSingleton<IDiagnosticsContext, DiagnosticsContext>();
		services.AddSingleton<IDownloadsManager, DownloadsManager>();
		services.AddSingleton<IResourceAssetsManager, ResourceAssetsManager>();
		services.AddSingleton<IServicesConfigurationsSetResolver, ServicesConfigurationsSetResolver>();
		services.AddSingleton<IUserInteractionRequestsManager, UserInteractionRequestsManager>();
		services.AddSingleton((Func<IServiceProvider, IAudioInputPipelineStateReader>)((IServiceProvider sp) => sp.GetRequiredService<IAudioInputPipelineState>()));
		services.AddSingleton((Func<IServiceProvider, IAudioInputPipelineListener>)((IServiceProvider sp) => sp.GetRequiredService<IAudioInputPipeline>()));
		services.AddScopedServiceAccessor<IUserConnectionTunnel>();
		services.AddScopedServiceAccessor<ProfileSettings>();
		services.AddScopedServiceAccessor<ISpecialMessageFormatter>();
		services.AddScopedServiceAccessor<IChatTextProcessor>();
		services.AddScopedServiceAccessor<IChatAugmentationsServiceInstance>();
		services.AddScopedServiceAccessor<ChatInstance>();
		services.AddScopedServiceAccessor<IPromptBuilder>();
		services.AddScopedServiceAccessor<IChatSessionServices>();
		services.AddScopedServiceAccessor<IChatCommandsManager>();
		services.AddScopedServiceAccessor<IServiceItemReference<ITokenizer>>();
		services.AddScoped<ICommandsQueueErrorHandler, CommandsQueueErrorHandler>();
		services.AddScoped<IChatCommandsProcessor, ChatCommandsProcessor>();
		services.AddScoped<IChatTimer, ChatTimer>();
		services.AddScoped<IChatSessionGeneratingState, ChatSessionGeneratingState>();
		services.AddScoped<IChatMessageFactory, ChatMessageFactory>();
		services.AddScoped<ITextGenerationStreamingPipe, TextGenerationStreamingPipe>();
		services.AddScoped<ISentencePreprocessorFactory, SentencePreprocessorFactory>();
		services.AddScoped((IServiceProvider sp) => sp.GetRequiredService<IActionScriptEngineFactory>().Create());
		services.AddScoped((Func<IServiceProvider, IChatPreProcessAugmentation>)((IServiceProvider sp) => sp.GetRequiredService<IChatAugmentationsServiceInstance>()));
		services.AddScoped((Func<IServiceProvider, IChatPostProcessAugmentation>)((IServiceProvider sp) => sp.GetRequiredService<IChatAugmentationsServiceInstance>()));
		services.AddScoped((Func<IServiceProvider, IChatInferenceData>)((IServiceProvider sp) => sp.GetRequiredService<ChatInstance>()));
		services.AddScoped((Func<IServiceProvider, IChatSessionData>)((IServiceProvider sp) => sp.GetRequiredService<ChatInstance>()));
		services.AddScoped((Func<IServiceProvider, IChatCommandsReceiver>)((IServiceProvider sp) => sp.GetRequiredService<IChatCommandsProcessor>()));
		services.AddScoped((Func<IServiceProvider, IVisionCaptureServicesAccessor>)((IServiceProvider sp) => new VisionCaptureServicesAccessor(sp.GetRequiredService<IChatSessionServices>())));
		services.AddDynamicServiceAccessor((IChatSessionServices s) => s.TextGen);
		services.AddDynamicServiceAccessor((IChatSessionServices s) => s.ActionInference);
		services.AddDynamicServiceAccessor((IChatSessionServices s) => s.Summarization);
		services.AddDynamicServiceAccessor((IChatSessionServices s) => s.ComputerVision);
		services.AddDynamicServiceAccessor((IChatSessionServices s) => s.SpeechGenerator);
		services.AddDynamicServiceAccessor((IChatSessionServices s) => s.ImageGen);
		services.AddDynamicServiceAccessor((IDynamicServiceAccessor<ITextGenService> s) => s.GetCurrent().Tokenizer);
		services.AddChatScopedServices();
		services.AddChatCommands();
		VoxtaModuleBuilder voxtaModuleBuilder = new VoxtaModuleBuilder(services, options);
		configure(voxtaModuleBuilder);
		voxtaModuleBuilder.Validate();
	}
}

```

## Microsoft.Extensions.DependencyInjection\VoxtaModuleBuilder.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using Voxta.Abstractions.Configuration;
using Voxta.Abstractions.Modules;
using Voxta.Abstractions.Registration;
using Voxta.Abstractions.Services;
using Voxta.Abstractions.Services.ActionInference;
using Voxta.Abstractions.Services.AudioInput;
using Voxta.Abstractions.Services.AudioOutput;
using Voxta.Abstractions.Services.ChatAugmentations;
using Voxta.Abstractions.Services.ComputerVision;
using Voxta.Abstractions.Services.ImageGen;
using Voxta.Abstractions.Services.Memory;
using Voxta.Abstractions.Services.SpeechToText;
using Voxta.Abstractions.Services.Summarization;
using Voxta.Abstractions.Services.TextGen;
using Voxta.Abstractions.Services.TextToSpeech;
using Voxta.Abstractions.Services.VisionCapture;
using Voxta.Abstractions.Services.WakeWord;
using Voxta.Core.Services;
using Voxta.Core.Services.Registration;

namespace Microsoft.Extensions.DependencyInjection;

public class VoxtaModuleBuilder : IVoxtaModuleBuilder
{
	private readonly ModuleDefinitionsRegistry _moduleDefinitionRegistry;

	private readonly ServiceRegistry<ISpeechToTextService> _speechToTextRegistry;

	private readonly ServiceRegistry<ITextGenService> _textGenRegistry;

	private readonly ServiceRegistry<ITextToSpeechService> _textToSpeechRegistry;

	private readonly ServiceRegistry<IActionInferenceService> _actionInferenceRegistry;

	private readonly ServiceRegistry<ISummarizationService> _summarizationRegistry;

	private readonly ServiceRegistry<IAudioInputService> _audioInputRegistry;

	private readonly ServiceRegistry<IAudioOutputService> _audioOutputRegistry;

	private readonly ServiceRegistry<IAudioInputPipelineService> _audioPipelineRegistry;

	private readonly ServiceRegistry<IWakeWordService> _wakeWordRegistry;

	private readonly ServiceRegistry<IVisionCaptureService> _visionCaptureRegistry;

	private readonly ServiceRegistry<IComputerVisionService> _computerVisionRegistry;

	private readonly ServiceRegistry<IChatAugmentationsService> _chatAugmentationsRegistry;

	private readonly ServiceRegistry<IMemoryProviderService> _memoryProviderRegistry;

	private readonly ServiceRegistry<IImageGenService> _imageGenRegistry;

	public IServiceCollection Services { get; }

	public VoxtaGlobalOptions Options { get; }

	public VoxtaModuleBuilder(IServiceCollection services, VoxtaGlobalOptions options)
	{
		Services = services;
		Options = options;
		_moduleDefinitionRegistry = new ModuleDefinitionsRegistry();
		services.AddSingleton((IModuleDefinitionsRegistry)_moduleDefinitionRegistry);
		_speechToTextRegistry = new ServiceRegistry<ISpeechToTextService>();
		services.AddSingleton((Func<IServiceProvider, IServiceFactory<ISpeechToTextService>>)((IServiceProvider sp) => new ServiceFactory<ISpeechToTextService>(_speechToTextRegistry, sp)));
		_textGenRegistry = new ServiceRegistry<ITextGenService>();
		services.AddSingleton((Func<IServiceProvider, IServiceFactory<ITextGenService>>)((IServiceProvider sp) => new ServiceFactory<ITextGenService>(_textGenRegistry, sp)));
		_textToSpeechRegistry = new ServiceRegistry<ITextToSpeechService>();
		services.AddSingleton((Func<IServiceProvider, IServiceFactory<ITextToSpeechService>>)((IServiceProvider sp) => new ServiceFactory<ITextToSpeechService>(_textToSpeechRegistry, sp)));
		_actionInferenceRegistry = new ServiceRegistry<IActionInferenceService>();
		services.AddSingleton((Func<IServiceProvider, IServiceFactory<IActionInferenceService>>)((IServiceProvider sp) => new ServiceFactory<IActionInferenceService>(_actionInferenceRegistry, sp)));
		_summarizationRegistry = new ServiceRegistry<ISummarizationService>();
		services.AddSingleton((Func<IServiceProvider, IServiceFactory<ISummarizationService>>)((IServiceProvider sp) => new ServiceFactory<ISummarizationService>(_summarizationRegistry, sp)));
		_audioInputRegistry = new ServiceRegistry<IAudioInputService>();
		services.AddSingleton((Func<IServiceProvider, IServiceFactory<IAudioInputService>>)((IServiceProvider sp) => new ServiceFactory<IAudioInputService>(_audioInputRegistry, sp)));
		_audioOutputRegistry = new ServiceRegistry<IAudioOutputService>();
		services.AddSingleton((Func<IServiceProvider, IServiceFactory<IAudioOutputService>>)((IServiceProvider sp) => new ServiceFactory<IAudioOutputService>(_audioOutputRegistry, sp)));
		_audioPipelineRegistry = new ServiceRegistry<IAudioInputPipelineService>();
		services.AddSingleton((Func<IServiceProvider, IServiceFactory<IAudioInputPipelineService>>)((IServiceProvider sp) => new ServiceFactory<IAudioInputPipelineService>(_audioPipelineRegistry, sp)));
		_wakeWordRegistry = new ServiceRegistry<IWakeWordService>();
		services.AddSingleton((Func<IServiceProvider, IServiceFactory<IWakeWordService>>)((IServiceProvider sp) => new ServiceFactory<IWakeWordService>(_wakeWordRegistry, sp)));
		_visionCaptureRegistry = new ServiceRegistry<IVisionCaptureService>();
		services.AddSingleton((Func<IServiceProvider, IServiceFactory<IVisionCaptureService>>)((IServiceProvider sp) => new ServiceFactory<IVisionCaptureService>(_visionCaptureRegistry, sp)));
		_computerVisionRegistry = new ServiceRegistry<IComputerVisionService>();
		services.AddSingleton((Func<IServiceProvider, IServiceFactory<IComputerVisionService>>)((IServiceProvider sp) => new ServiceFactory<IComputerVisionService>(_computerVisionRegistry, sp)));
		_chatAugmentationsRegistry = new ServiceRegistry<IChatAugmentationsService>();
		services.AddScoped((Func<IServiceProvider, IServiceFactory<IChatAugmentationsService>>)((IServiceProvider sp) => new ServiceFactory<IChatAugmentationsService>(_chatAugmentationsRegistry, sp)));
		_memoryProviderRegistry = new ServiceRegistry<IMemoryProviderService>();
		services.AddSingleton((Func<IServiceProvider, IServiceFactory<IMemoryProviderService>>)((IServiceProvider sp) => new ServiceFactory<IMemoryProviderService>(_memoryProviderRegistry, sp)));
		_imageGenRegistry = new ServiceRegistry<IImageGenService>();
		services.AddSingleton((Func<IServiceProvider, IServiceFactory<IImageGenService>>)((IServiceProvider sp) => new ServiceFactory<IImageGenService>(_imageGenRegistry, sp)));
		services.AddSingleton<IServiceFactory, ServiceFactory>();
	}

	public void Register(ModuleDefinition moduleDefinition)
	{
		_moduleDefinitionRegistry.Add(moduleDefinition);
		AddServiceDefinitionTypes(moduleDefinition.ModuleConfigurationProviderType);
		AddServiceDefinitionTypes(moduleDefinition.ModuleInstallationProviderType);
		AddServiceDefinitionTypes(moduleDefinition.PresetsProviderType);
		AddServiceDefinitionTypes(moduleDefinition.VoicesProviderType);
		AddServiceDefinitionTypes(moduleDefinition.ModuleTestingProviderType);
	}

	public void AddModuleRuntimeInstance<TService, TImplementation>() where TService : class, IModuleRuntimeInstance where TImplementation : class, TService
	{
		Services.AddTransient<TService, TImplementation>();
	}

	private void AddServiceDefinitionTypes(Type? type)
	{
		if (type != null)
		{
			Services.AddTransient(type);
		}
	}

	public void AddSummarizationService<TService>(string serviceKey) where TService : class, ISummarizationService
	{
		Services.AddTransient<TService>();
		_summarizationRegistry.Add<TService>(serviceKey);
	}

	public void AddActionInferenceService<TService>(string serviceKey) where TService : class, IActionInferenceService
	{
		Services.AddTransient<TService>();
		_actionInferenceRegistry.Add<TService>(serviceKey);
	}

	public void AddTextToSpeechService<TService>(string serviceKey) where TService : class, ITextToSpeechService
	{
		Services.AddTransient<TService>();
		_textToSpeechRegistry.Add<TService>(serviceKey);
	}

	public void AddTextGenService<TService>(string serviceKey) where TService : class, ITextGenService
	{
		Services.AddTransient<TService>();
		_textGenRegistry.Add<TService>(serviceKey);
	}

	public void AddSpeechToTextService<TService>(string serviceKey) where TService : class, ISpeechToTextService
	{
		Services.AddTransient<TService>();
		_speechToTextRegistry.Add<TService>(serviceKey);
	}

	public void AddAudioInputService<TService>(string serviceKey) where TService : class, IAudioInputService
	{
		Services.AddTransient<TService>();
		_audioInputRegistry.Add<TService>(serviceKey);
	}

	public void AddAudioOutputService<TService>(string serviceKey) where TService : class, IAudioOutputService
	{
		Services.AddTransient<TService>();
		_audioOutputRegistry.Add<TService>(serviceKey);
	}

	public void AddAudioPipelineService<TService>(string serviceKey) where TService : class, IAudioInputPipelineService
	{
		Services.AddTransient<TService>();
		_audioPipelineRegistry.Add<TService>(serviceKey);
	}

	public void AddWakeWordService<TService>(string serviceKey) where TService : class, IWakeWordService
	{
		Services.AddTransient<TService>();
		_wakeWordRegistry.Add<TService>(serviceKey);
	}

	public void AddVisionCaptureService<TService>(string serviceKey) where TService : class, IVisionCaptureService
	{
		Services.AddTransient<TService>();
		_visionCaptureRegistry.Add<TService>(serviceKey);
	}

	public void AddComputerVisionService<TService>(string serviceKey) where TService : class, IComputerVisionService
	{
		Services.AddTransient<TService>();
		_computerVisionRegistry.Add<TService>(serviceKey);
	}

	public void AddChatAugmentationsService<TService>(string serviceKey) where TService : class, IChatAugmentationsService
	{
		Services.AddScoped<TService>();
		_chatAugmentationsRegistry.Add<TService>(serviceKey);
	}

	public void AddMemoryProviderService<TService>(string serviceKey) where TService : class, IMemoryProviderService
	{
		Services.AddTransient<TService>();
		_memoryProviderRegistry.Add<TService>(serviceKey);
	}

	public void AddImageGenService<TService>(string serviceKey) where TService : class, IImageGenService
	{
		Services.AddTransient<TService>();
		_imageGenRegistry.Add<TService>(serviceKey);
	}

	public void Validate()
	{
		IEnumerable<string> enumerable = from x in _moduleDefinitionRegistry.List()
			select x.ServiceName;
		HashSet<string> hashSet = new HashSet<string>();
		foreach (string item in enumerable)
		{
			if (!hashSet.Add(item))
			{
				throw new InvalidOperationException("Service '" + item + "' has been registered twice.");
			}
		}
	}
}

```

## Properties\AssemblyInfo.cs
```csharp
using System.Diagnostics;
using System.Reflection;
using System.Runtime.CompilerServices;
using System.Runtime.Versioning;

[assembly: AssemblyCompany("Voxta LLC")]
[assembly: AssemblyConfiguration("Release")]
[assembly: AssemblyCopyright("Copyright © Voxta LLC 2025")]
[assembly: AssemblyFileVersion("1.0.0.0")]
[assembly: AssemblyInformationalVersion("1.0.0-beta.152+14016b9400a6e3b0b388b9eb76afc6f3bfb18bd8")]
[assembly: AssemblyProduct("Voxta Server")]
[assembly: AssemblyTitle("Voxta.Core")]
[assembly: AssemblyMetadata("RepositoryUrl", "https://github.com/voxta-ai/voxta-server")]
[assembly: AssemblyVersion("1.0.0.0")]
[module: RefSafetyRules(11)]

```

## System.Text.RegularExpressions.Generated\-RegexGenerator_g-F5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__InvalidNameCharsRegex_1.cs
```csharp
using System.CodeDom.Compiler;

namespace System.Text.RegularExpressions.Generated;

[GeneratedCode("System.Text.RegularExpressions.Generator", "9.0.12.41916")]
internal sealed class _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__InvalidNameCharsRegex_1 : Regex
{
	private sealed class RunnerFactory : RegexRunnerFactory
	{
		private sealed class Runner : RegexRunner
		{
			protected override void Scan(ReadOnlySpan<char> inputSpan)
			{
				if (TryFindNextPossibleStartingPosition(inputSpan))
				{
					int num = runtextpos;
					Capture(0, num, runtextpos = num + 1);
				}
			}

			private bool TryFindNextPossibleStartingPosition(ReadOnlySpan<char> inputSpan)
			{
				int num = runtextpos;
				if ((uint)num < (uint)inputSpan.Length)
				{
					int num2 = inputSpan.Slice(num).IndexOfAnyExcept(_003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_nonAscii_9FA52D3BAECB644578472387D5284CC6F36F408FEB88A04BA674CE14F24D2386);
					if (num2 >= 0)
					{
						runtextpos = num + num2;
						return true;
					}
				}
				runtextpos = inputSpan.Length;
				return false;
			}
		}

		protected override RegexRunner CreateInstance()
		{
			return new Runner();
		}
	}

	internal static readonly _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__InvalidNameCharsRegex_1 Instance = new _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__InvalidNameCharsRegex_1();

	private _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__InvalidNameCharsRegex_1()
	{
		pattern = "[^a-z0-9_]";
		roptions = RegexOptions.IgnoreCase | RegexOptions.CultureInvariant;
		Regex.ValidateMatchTimeout(_003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_defaultTimeout);
		internalMatchTimeout = _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_defaultTimeout;
		factory = new RunnerFactory();
		capsize = 1;
	}
}

```

## System.Text.RegularExpressions.Generated\-RegexGenerator_g-F5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__RemoveEmojis_9.cs
```csharp
using System.CodeDom.Compiler;
using System.Runtime.CompilerServices;

namespace System.Text.RegularExpressions.Generated;

[GeneratedCode("System.Text.RegularExpressions.Generator", "9.0.12.41916")]
internal sealed class _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__RemoveEmojis_9 : Regex
{
	private sealed class RunnerFactory : RegexRunnerFactory
	{
		private sealed class Runner : RegexRunner
		{
			protected override void Scan(ReadOnlySpan<char> inputSpan)
			{
				while (TryFindNextPossibleStartingPosition(inputSpan) && !TryMatchAtCurrentPosition(inputSpan) && runtextpos != inputSpan.Length)
				{
					runtextpos++;
					if (_003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_hasTimeout)
					{
						CheckTimeout();
					}
				}
			}

			private bool TryFindNextPossibleStartingPosition(ReadOnlySpan<char> inputSpan)
			{
				int num = runtextpos;
				if ((uint)num < (uint)inputSpan.Length)
				{
					int num2 = inputSpan.Slice(num).IndexOfAny("©®\ud83c\ud83d\ud83e");
					if (num2 >= 0)
					{
						runtextpos = num + num2;
						return true;
					}
				}
				runtextpos = inputSpan.Length;
				return false;
			}

			private bool TryMatchAtCurrentPosition(ReadOnlySpan<char> inputSpan)
			{
				int num = runtextpos;
				int start = num;
				int num2 = 0;
				ReadOnlySpan<char> readOnlySpan = inputSpan.Slice(num);
				num2 = num;
				if (readOnlySpan.IsEmpty)
				{
					UncaptureUntil(0);
					return false;
				}
				switch (readOnlySpan[0])
				{
				case '©':
				case '®':
					num++;
					readOnlySpan = inputSpan.Slice(num);
					break;
				case '\ud83c':
					if ((uint)readOnlySpan.Length < 2u || !char.IsBetween(readOnlySpan[1], '퀀', '\udfff'))
					{
						UncaptureUntil(0);
						return false;
					}
					num += 2;
					readOnlySpan = inputSpan.Slice(num);
					break;
				case '\ud83d':
					if ((uint)readOnlySpan.Length < 2u || !char.IsBetween(readOnlySpan[1], '퀀', '\udfff'))
					{
						UncaptureUntil(0);
						return false;
					}
					num += 2;
					readOnlySpan = inputSpan.Slice(num);
					break;
				case '\ud83e':
					if ((uint)readOnlySpan.Length < 2u || !char.IsBetween(readOnlySpan[1], '퀀', '\udfff'))
					{
						UncaptureUntil(0);
						return false;
					}
					num += 2;
					readOnlySpan = inputSpan.Slice(num);
					break;
				default:
					UncaptureUntil(0);
					return false;
				}
				Capture(1, num2, num);
				runtextpos = num;
				Capture(0, start, num);
				return true;
				[MethodImpl(MethodImplOptions.AggressiveInlining)]
				void UncaptureUntil(int capturePosition)
				{
					while (Crawlpos() > capturePosition)
					{
						Uncapture();
					}
				}
			}
		}

		protected override RegexRunner CreateInstance()
		{
			return new Runner();
		}
	}

	internal static readonly _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__RemoveEmojis_9 Instance = new _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__RemoveEmojis_9();

	private _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__RemoveEmojis_9()
	{
		pattern = "(\\u00a9|\\u00ae|\\ud83c[\\ud000-\\udfff]|\\ud83d[\\ud000-\\udfff]|\\ud83e[\\ud000-\\udfff])";
		roptions = RegexOptions.CultureInvariant;
		Regex.ValidateMatchTimeout(_003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_defaultTimeout);
		internalMatchTimeout = _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_defaultTimeout;
		factory = new RunnerFactory();
		capsize = 2;
	}
}

```

## System.Text.RegularExpressions.Generated\-RegexGenerator_g-F5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__RemoveNamePrefix_6.cs
```csharp
using System.CodeDom.Compiler;

namespace System.Text.RegularExpressions.Generated;

[GeneratedCode("System.Text.RegularExpressions.Generator", "9.0.12.41916")]
internal sealed class _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__RemoveNamePrefix_6 : Regex
{
	private sealed class RunnerFactory : RegexRunnerFactory
	{
		private sealed class Runner : RegexRunner
		{
			protected override void Scan(ReadOnlySpan<char> inputSpan)
			{
				if (TryFindNextPossibleStartingPosition(inputSpan) && !TryMatchAtCurrentPosition(inputSpan))
				{
					runtextpos = inputSpan.Length;
				}
			}

			private bool TryFindNextPossibleStartingPosition(ReadOnlySpan<char> inputSpan)
			{
				int num = runtextpos;
				if (num <= inputSpan.Length - 3 && num == 0)
				{
					return true;
				}
				runtextpos = inputSpan.Length;
				return false;
			}

			private bool TryMatchAtCurrentPosition(ReadOnlySpan<char> inputSpan)
			{
				int num = runtextpos;
				int start = num;
				ReadOnlySpan<char> span = inputSpan.Slice(num);
				if (num != 0)
				{
					return false;
				}
				int num2 = span.IndexOfAnyExcept(_003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_nonAscii_326E1FD0AD567A84CAD13F2BE521A57789829F59D59ABE37F9E111D0182B6601);
				if (num2 < 0)
				{
					num2 = span.Length;
				}
				if (num2 == 0)
				{
					return false;
				}
				span = span.Slice(num2);
				num += num2;
				if (!span.StartsWith(": "))
				{
					return false;
				}
				Capture(0, start, runtextpos = num + 2);
				return true;
			}
		}

		protected override RegexRunner CreateInstance()
		{
			return new Runner();
		}
	}

	internal static readonly _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__RemoveNamePrefix_6 Instance = new _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__RemoveNamePrefix_6();

	private _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__RemoveNamePrefix_6()
	{
		pattern = "^[a-z]+: ";
		roptions = RegexOptions.IgnoreCase;
		Regex.ValidateMatchTimeout(_003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_defaultTimeout);
		internalMatchTimeout = _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_defaultTimeout;
		factory = new RunnerFactory();
		capsize = 1;
	}
}

```

## System.Text.RegularExpressions.Generated\-RegexGenerator_g-F5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__RemoveProbableEmotes_7.cs
```csharp
using System.CodeDom.Compiler;

namespace System.Text.RegularExpressions.Generated;

[GeneratedCode("System.Text.RegularExpressions.Generator", "9.0.12.41916")]
internal sealed class _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__RemoveProbableEmotes_7 : Regex
{
	private sealed class RunnerFactory : RegexRunnerFactory
	{
		private sealed class Runner : RegexRunner
		{
			protected override void Scan(ReadOnlySpan<char> inputSpan)
			{
				while (TryFindNextPossibleStartingPosition(inputSpan) && !TryMatchAtCurrentPosition(inputSpan) && runtextpos != inputSpan.Length)
				{
					runtextpos++;
					if (_003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_hasTimeout)
					{
						CheckTimeout();
					}
				}
			}

			private bool TryFindNextPossibleStartingPosition(ReadOnlySpan<char> inputSpan)
			{
				int num = runtextpos;
				if (num <= inputSpan.Length - 3)
				{
					int num2 = inputSpan.Slice(num).IndexOf('(');
					if (num2 >= 0)
					{
						runtextpos = num + num2;
						return true;
					}
				}
				runtextpos = inputSpan.Length;
				return false;
			}

			private bool TryMatchAtCurrentPosition(ReadOnlySpan<char> inputSpan)
			{
				int num = runtextpos;
				int start = num;
				ReadOnlySpan<char> readOnlySpan = inputSpan.Slice(num);
				if (readOnlySpan.IsEmpty || readOnlySpan[0] != '(')
				{
					return false;
				}
				int num2 = readOnlySpan.Slice(1).IndexOf(')');
				if (num2 < 0)
				{
					num2 = readOnlySpan.Length - 1;
				}
				if (num2 == 0)
				{
					return false;
				}
				readOnlySpan = readOnlySpan.Slice(num2);
				num += num2;
				if ((uint)readOnlySpan.Length < 2u || readOnlySpan[1] != ')')
				{
					return false;
				}
				Capture(0, start, runtextpos = num + 2);
				return true;
			}
		}

		protected override RegexRunner CreateInstance()
		{
			return new Runner();
		}
	}

	internal static readonly _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__RemoveProbableEmotes_7 Instance = new _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__RemoveProbableEmotes_7();

	private _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__RemoveProbableEmotes_7()
	{
		pattern = "\\([^)]+\\)";
		roptions = RegexOptions.CultureInvariant;
		Regex.ValidateMatchTimeout(_003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_defaultTimeout);
		internalMatchTimeout = _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_defaultTimeout;
		factory = new RunnerFactory();
		capsize = 1;
	}
}

```

## System.Text.RegularExpressions.Generated\-RegexGenerator_g-F5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__RemoveTextInAsterisksWithUnderscore_5.cs
```csharp
using System.CodeDom.Compiler;

namespace System.Text.RegularExpressions.Generated;

[GeneratedCode("System.Text.RegularExpressions.Generator", "9.0.12.41916")]
internal sealed class _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__RemoveTextInAsterisksWithUnderscore_5 : Regex
{
	private sealed class RunnerFactory : RegexRunnerFactory
	{
		private sealed class Runner : RegexRunner
		{
			protected override void Scan(ReadOnlySpan<char> inputSpan)
			{
				while (TryFindNextPossibleStartingPosition(inputSpan) && !TryMatchAtCurrentPosition(inputSpan) && runtextpos != inputSpan.Length)
				{
					runtextpos++;
					if (_003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_hasTimeout)
					{
						CheckTimeout();
					}
				}
			}

			private bool TryFindNextPossibleStartingPosition(ReadOnlySpan<char> inputSpan)
			{
				int num = runtextpos;
				if (num <= inputSpan.Length - 5)
				{
					int num2 = inputSpan.Slice(num).IndexOf('*');
					if (num2 >= 0)
					{
						runtextpos = num + num2;
						return true;
					}
				}
				runtextpos = inputSpan.Length;
				return false;
			}

			private bool TryMatchAtCurrentPosition(ReadOnlySpan<char> inputSpan)
			{
				int num = runtextpos;
				int start = num;
				int num2 = 0;
				int num3 = 0;
				int num4 = 0;
				int num5 = 0;
				ReadOnlySpan<char> span = inputSpan.Slice(num);
				if (span.IsEmpty || span[0] != '*')
				{
					return false;
				}
				num++;
				span = inputSpan.Slice(num);
				num2 = num;
				int num6 = span.IndexOf('\n');
				if (num6 < 0)
				{
					num6 = span.Length;
				}
				if (num6 == 0)
				{
					return false;
				}
				span = span.Slice(num6);
				num += num6;
				num3 = num;
				num2++;
				while (true)
				{
					if (!span.IsEmpty && span[0] == '_')
					{
						num++;
						span = inputSpan.Slice(num);
						num4 = num;
						int num7 = span.IndexOf('\n');
						if (num7 < 0)
						{
							num7 = span.Length;
						}
						if (num7 != 0)
						{
							span = span.Slice(num7);
							num += num7;
							num5 = num;
							num4++;
							while (true)
							{
								if (span.IsEmpty || span[0] != '*')
								{
									if (_003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_hasTimeout)
									{
										CheckTimeout();
									}
									if (num4 >= num5 || (num5 = inputSpan.Slice(num4, num5 - num4).LastIndexOf('*')) < 0)
									{
										break;
									}
									num5 += num4;
									num = num5;
									span = inputSpan.Slice(num);
									continue;
								}
								Capture(0, start, runtextpos = num + 1);
								return true;
							}
						}
					}
					if (_003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_hasTimeout)
					{
						CheckTimeout();
					}
					if (num2 >= num3 || (num3 = inputSpan.Slice(num2, num3 - num2).LastIndexOf('_')) < 0)
					{
						break;
					}
					num3 += num2;
					num = num3;
					span = inputSpan.Slice(num);
				}
				return false;
			}
		}

		protected override RegexRunner CreateInstance()
		{
			return new Runner();
		}
	}

	internal static readonly _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__RemoveTextInAsterisksWithUnderscore_5 Instance = new _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__RemoveTextInAsterisksWithUnderscore_5();

	private _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__RemoveTextInAsterisksWithUnderscore_5()
	{
		pattern = "\\*.+_.+\\*";
		roptions = RegexOptions.CultureInvariant;
		Regex.ValidateMatchTimeout(_003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_defaultTimeout);
		internalMatchTimeout = _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_defaultTimeout;
		factory = new RunnerFactory();
		capsize = 1;
	}
}

```

## System.Text.RegularExpressions.Generated\-RegexGenerator_g-F5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__RemoveUnfinishedNotes_8.cs
```csharp
using System.CodeDom.Compiler;

namespace System.Text.RegularExpressions.Generated;

[GeneratedCode("System.Text.RegularExpressions.Generator", "9.0.12.41916")]
internal sealed class _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__RemoveUnfinishedNotes_8 : Regex
{
	private sealed class RunnerFactory : RegexRunnerFactory
	{
		private sealed class Runner : RegexRunner
		{
			protected override void Scan(ReadOnlySpan<char> inputSpan)
			{
				while (TryFindNextPossibleStartingPosition(inputSpan) && !TryMatchAtCurrentPosition(inputSpan) && runtextpos != inputSpan.Length)
				{
					runtextpos++;
					if (_003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_hasTimeout)
					{
						CheckTimeout();
					}
				}
			}

			private bool TryFindNextPossibleStartingPosition(ReadOnlySpan<char> inputSpan)
			{
				int num = runtextpos;
				if (num <= inputSpan.Length - 2)
				{
					int num2 = inputSpan.Slice(num).IndexOf('[');
					if (num2 >= 0)
					{
						runtextpos = num + num2;
						return true;
					}
				}
				runtextpos = inputSpan.Length;
				return false;
			}

			private bool TryMatchAtCurrentPosition(ReadOnlySpan<char> inputSpan)
			{
				int num = runtextpos;
				int start = num;
				int num2 = 0;
				int num3 = 0;
				ReadOnlySpan<char> span = inputSpan.Slice(num);
				if (span.IsEmpty || span[0] != '[')
				{
					return false;
				}
				num++;
				span = inputSpan.Slice(num);
				num2 = num;
				int num4 = span.IndexOf(']');
				if (num4 < 0)
				{
					num4 = span.Length;
				}
				if (num4 == 0)
				{
					return false;
				}
				span = span.Slice(num4);
				num += num4;
				num3 = num;
				num2++;
				while (num < inputSpan.Length - 1 || ((uint)num < (uint)inputSpan.Length && inputSpan[num] != '\n'))
				{
					if (_003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_hasTimeout)
					{
						CheckTimeout();
					}
					if (num2 >= num3)
					{
						return false;
					}
					num = --num3;
					span = inputSpan.Slice(num);
				}
				runtextpos = num;
				Capture(0, start, num);
				return true;
			}
		}

		protected override RegexRunner CreateInstance()
		{
			return new Runner();
		}
	}

	internal static readonly _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__RemoveUnfinishedNotes_8 Instance = new _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__RemoveUnfinishedNotes_8();

	private _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__RemoveUnfinishedNotes_8()
	{
		pattern = "\\[[^\\]]+$";
		roptions = RegexOptions.CultureInvariant;
		Regex.ValidateMatchTimeout(_003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_defaultTimeout);
		internalMatchTimeout = _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_defaultTimeout;
		factory = new RunnerFactory();
		capsize = 1;
	}
}

```

## System.Text.RegularExpressions.Generated\-RegexGenerator_g-F5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__RemoveUnprintableCharacters_4.cs
```csharp
using System.CodeDom.Compiler;

namespace System.Text.RegularExpressions.Generated;

[GeneratedCode("System.Text.RegularExpressions.Generator", "9.0.12.41916")]
internal sealed class _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__RemoveUnprintableCharacters_4 : Regex
{
	private sealed class RunnerFactory : RegexRunnerFactory
	{
		private sealed class Runner : RegexRunner
		{
			protected override void Scan(ReadOnlySpan<char> inputSpan)
			{
				while (TryFindNextPossibleStartingPosition(inputSpan) && !TryMatchAtCurrentPosition(inputSpan) && runtextpos != inputSpan.Length)
				{
					runtextpos++;
					if (_003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_hasTimeout)
					{
						CheckTimeout();
					}
				}
			}

			private bool TryFindNextPossibleStartingPosition(ReadOnlySpan<char> inputSpan)
			{
				int num = runtextpos;
				if ((uint)num < (uint)inputSpan.Length)
				{
					int num2 = inputSpan.Slice(num).IndexOfAny(_003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_ascii_FFDBFFFF000000000000000000000000);
					if (num2 >= 0)
					{
						runtextpos = num + num2;
						return true;
					}
				}
				runtextpos = inputSpan.Length;
				return false;
			}

			private bool TryMatchAtCurrentPosition(ReadOnlySpan<char> inputSpan)
			{
				int num = runtextpos;
				int start = num;
				ReadOnlySpan<char> span = inputSpan.Slice(num);
				int num2 = span.IndexOfAnyExcept(_003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_ascii_FFDBFFFF000000000000000000000000);
				if (num2 < 0)
				{
					num2 = span.Length;
				}
				if (num2 == 0)
				{
					return false;
				}
				span = span.Slice(num2);
				Capture(0, start, runtextpos = num + num2);
				return true;
			}
		}

		protected override RegexRunner CreateInstance()
		{
			return new Runner();
		}
	}

	internal static readonly _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__RemoveUnprintableCharacters_4 Instance = new _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__RemoveUnprintableCharacters_4();

	private _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__RemoveUnprintableCharacters_4()
	{
		pattern = "[\\x00-\\x09\\x0B-\\x0C\\x0E-\\x1F]+";
		roptions = RegexOptions.CultureInvariant;
		Regex.ValidateMatchTimeout(_003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_defaultTimeout);
		internalMatchTimeout = _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_defaultTimeout;
		factory = new RunnerFactory();
		capsize = 1;
	}
}

```

## System.Text.RegularExpressions.Generated\-RegexGenerator_g-F5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__TagsRegex_2.cs
```csharp
using System.CodeDom.Compiler;
using System.Collections;
using System.Runtime.CompilerServices;

namespace System.Text.RegularExpressions.Generated;

[GeneratedCode("System.Text.RegularExpressions.Generator", "9.0.12.41916")]
internal sealed class _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__TagsRegex_2 : Regex
{
	private sealed class RunnerFactory : RegexRunnerFactory
	{
		private sealed class Runner : RegexRunner
		{
			protected override void Scan(ReadOnlySpan<char> inputSpan)
			{
				while (TryFindNextPossibleStartingPosition(inputSpan) && !TryMatchAtCurrentPosition(inputSpan) && runtextpos != inputSpan.Length)
				{
					runtextpos++;
					if (_003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_hasTimeout)
					{
						CheckTimeout();
					}
				}
			}

			private bool TryFindNextPossibleStartingPosition(ReadOnlySpan<char> inputSpan)
			{
				int num = runtextpos;
				if (num <= inputSpan.Length - 5)
				{
					int num2 = inputSpan.Slice(num).IndexOfAny(_003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_indexOfString_BB1C8D594CD963F65D3EAF61D3D969FEE92730B1764726818716F84676CA8389);
					if (num2 >= 0)
					{
						runtextpos = num + num2;
						return true;
					}
				}
				runtextpos = inputSpan.Length;
				return false;
			}

			private bool TryMatchAtCurrentPosition(ReadOnlySpan<char> inputSpan)
			{
				int num = runtextpos;
				int start = num;
				int num2 = 0;
				ReadOnlySpan<char> span = inputSpan.Slice(num);
				if (!span.StartsWith("{{"))
				{
					UncaptureUntil(0);
					return false;
				}
				int i;
				for (i = 2; (uint)i < (uint)span.Length && char.IsWhiteSpace(span[i]); i++)
				{
				}
				span = span.Slice(i);
				num += i;
				num2 = num;
				int num3 = span.IndexOfAnyExcept(_003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_nonAscii_8FA913B57D533FCAEB44498E8686C7AF59A4BCB1BFAF748507BC9FAE5D109CD2);
				if (num3 < 0)
				{
					num3 = span.Length;
				}
				if (num3 == 0)
				{
					UncaptureUntil(0);
					return false;
				}
				span = span.Slice(num3);
				num += num3;
				Capture(1, num2, num);
				int j;
				for (j = 0; (uint)j < (uint)span.Length && char.IsWhiteSpace(span[j]); j++)
				{
				}
				span = span.Slice(j);
				num += j;
				if (!span.StartsWith("}}"))
				{
					UncaptureUntil(0);
					return false;
				}
				Capture(0, start, runtextpos = num + 2);
				return true;
				[MethodImpl(MethodImplOptions.AggressiveInlining)]
				void UncaptureUntil(int capturePosition)
				{
					while (Crawlpos() > capturePosition)
					{
						Uncapture();
					}
				}
			}
		}

		protected override RegexRunner CreateInstance()
		{
			return new Runner();
		}
	}

	internal static readonly _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__TagsRegex_2 Instance = new _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__TagsRegex_2();

	private _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__TagsRegex_2()
	{
		pattern = "{{\\s*(?<key>[a-z_.]+)\\s*}}";
		roptions = RegexOptions.IgnoreCase;
		Regex.ValidateMatchTimeout(_003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_defaultTimeout);
		internalMatchTimeout = _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_defaultTimeout;
		factory = new RunnerFactory();
		base.CapNames = new Hashtable
		{
			{ "0", 0 },
			{ "key", 1 }
		};
		capslist = new string[2] { "0", "key" };
		capsize = 2;
	}
}

```

## System.Text.RegularExpressions.Generated\-RegexGenerator_g-F5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.cs
```csharp
using System.Buffers;
using System.CodeDom.Compiler;
using System.Runtime.CompilerServices;

namespace System.Text.RegularExpressions.Generated;

[GeneratedCode("System.Text.RegularExpressions.Generator", "9.0.12.41916")]
internal static class _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities
{
	internal static readonly TimeSpan s_defaultTimeout = ((AppContext.GetData("REGEX_DEFAULT_MATCH_TIMEOUT") is TimeSpan timeSpan) ? timeSpan : Regex.InfiniteMatchTimeout);

	internal static readonly bool s_hasTimeout = s_defaultTimeout != Regex.InfiniteMatchTimeout;

	internal static readonly SearchValues<char> s_ascii_FFDBFFFF000000000000000000000000 = SearchValues.Create("\0\u0001\u0002\u0003\u0004\u0005\u0006\a\b\t\v\f\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f");

	internal static readonly SearchValues<string> s_indexOfString_BB1C8D594CD963F65D3EAF61D3D969FEE92730B1764726818716F84676CA8389;

	internal static readonly SearchValues<char> s_nonAscii_326E1FD0AD567A84CAD13F2BE521A57789829F59D59ABE37F9E111D0182B6601;

	internal static readonly SearchValues<char> s_nonAscii_8FA913B57D533FCAEB44498E8686C7AF59A4BCB1BFAF748507BC9FAE5D109CD2;

	internal static readonly SearchValues<char> s_nonAscii_9FA52D3BAECB644578472387D5284CC6F36F408FEB88A04BA674CE14F24D2386;

	internal static readonly SearchValues<char> s_nonAscii_D41BEF0BEAFBA32A45D2356E3F1579596F35B7C67CAA9CF7C4B3F2A5422DCA51;

	[MethodImpl(MethodImplOptions.AggressiveInlining)]
	internal static void StackPush(ref int[] stack, ref int pos, int arg0, int arg1)
	{
		int[] array = stack;
		int num = pos;
		if ((uint)(num + 1) < (uint)array.Length)
		{
			array[num] = arg0;
			array[num + 1] = arg1;
			pos += 2;
		}
		else
		{
			WithResize(ref stack, ref pos, arg0, arg1);
		}
		[MethodImpl(MethodImplOptions.NoInlining)]
		static void WithResize(ref int[] reference, ref int reference2, int arg2, int arg3)
		{
			Array.Resize(ref reference, (reference2 + 1) * 2);
			StackPush(ref reference, ref reference2, arg2, arg3);
		}
	}

	static _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities()
	{
		string reference = "{{";
		s_indexOfString_BB1C8D594CD963F65D3EAF61D3D969FEE92730B1764726818716F84676CA8389 = SearchValues.Create(new ReadOnlySpan<string>(in reference), StringComparison.Ordinal);
		s_nonAscii_326E1FD0AD567A84CAD13F2BE521A57789829F59D59ABE37F9E111D0182B6601 = SearchValues.Create("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzK");
		s_nonAscii_8FA913B57D533FCAEB44498E8686C7AF59A4BCB1BFAF748507BC9FAE5D109CD2 = SearchValues.Create(".ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyzİK");
		s_nonAscii_9FA52D3BAECB644578472387D5284CC6F36F408FEB88A04BA674CE14F24D2386 = SearchValues.Create("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyzK");
		s_nonAscii_D41BEF0BEAFBA32A45D2356E3F1579596F35B7C67CAA9CF7C4B3F2A5422DCA51 = SearchValues.Create("-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyzK");
	}
}

```

## System.Text.RegularExpressions.Generated\-RegexGenerator_g-F5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__ValidResourcePath_0.cs
```csharp
using System.CodeDom.Compiler;
using System.Runtime.CompilerServices;

namespace System.Text.RegularExpressions.Generated;

[GeneratedCode("System.Text.RegularExpressions.Generator", "9.0.12.41916")]
internal sealed class _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__ValidResourcePath_0 : Regex
{
	private sealed class RunnerFactory : RegexRunnerFactory
	{
		private sealed class Runner : RegexRunner
		{
			protected override void Scan(ReadOnlySpan<char> inputSpan)
			{
				if (TryFindNextPossibleStartingPosition(inputSpan) && !TryMatchAtCurrentPosition(inputSpan))
				{
					runtextpos = inputSpan.Length;
				}
			}

			private bool TryFindNextPossibleStartingPosition(ReadOnlySpan<char> inputSpan)
			{
				int num = runtextpos;
				if (num <= inputSpan.Length - 5 && num == 0)
				{
					return true;
				}
				runtextpos = inputSpan.Length;
				return false;
			}

			private bool TryMatchAtCurrentPosition(ReadOnlySpan<char> inputSpan)
			{
				int num = runtextpos;
				int start = num;
				int num2 = 0;
				int pos = 0;
				ReadOnlySpan<char> span = inputSpan.Slice(num);
				if (num != 0)
				{
					UncaptureUntil(0);
					return false;
				}
				num2 = 0;
				while (true)
				{
					_003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.StackPush(ref runstack, ref pos, Crawlpos(), num);
					num2++;
					int start2 = num;
					int num3 = span.IndexOfAnyExcept(_003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_nonAscii_D41BEF0BEAFBA32A45D2356E3F1579596F35B7C67CAA9CF7C4B3F2A5422DCA51);
					if (num3 < 0)
					{
						num3 = span.Length;
					}
					if (num3 == 0)
					{
						break;
					}
					span = span.Slice(num3);
					num += num3;
					if (span.IsEmpty || span[0] != '/')
					{
						break;
					}
					num++;
					span = inputSpan.Slice(num);
					Capture(1, start2, num);
				}
				while (true)
				{
					if (--num2 < 0)
					{
						UncaptureUntil(0);
						return false;
					}
					num = runstack[--pos];
					UncaptureUntil(runstack[--pos]);
					span = inputSpan.Slice(num);
					int num4 = span.IndexOfAnyExcept(_003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_nonAscii_D41BEF0BEAFBA32A45D2356E3F1579596F35B7C67CAA9CF7C4B3F2A5422DCA51);
					if (num4 < 0)
					{
						num4 = span.Length;
					}
					if (num4 == 0)
					{
						continue;
					}
					span = span.Slice(num4);
					num += num4;
					if (span.IsEmpty || span[0] != '.')
					{
						continue;
					}
					num++;
					span = inputSpan.Slice(num);
					int i;
					for (i = 0; i < 4 && (uint)i < (uint)span.Length; i++)
					{
						char c;
						if (!(((c = span[i]) < '\u0080') ? char.IsAsciiLetterOrDigit(c) : RegexRunner.CharInClass(c, "\0\b\00:A[a{KÅ")))
						{
							break;
						}
					}
					if (i >= 3)
					{
						span = span.Slice(i);
						num += i;
						if (num >= inputSpan.Length - 1 && ((uint)num >= (uint)inputSpan.Length || inputSpan[num] == '\n'))
						{
							break;
						}
					}
				}
				runtextpos = num;
				Capture(0, start, num);
				return true;
				[MethodImpl(MethodImplOptions.AggressiveInlining)]
				void UncaptureUntil(int capturePosition)
				{
					while (Crawlpos() > capturePosition)
					{
						Uncapture();
					}
				}
			}
		}

		protected override RegexRunner CreateInstance()
		{
			return new Runner();
		}
	}

	internal static readonly _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__ValidResourcePath_0 Instance = new _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__ValidResourcePath_0();

	private _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__ValidResourcePath_0()
	{
		pattern = "^([a-z0-9_\\-]+/)*[a-z0-9_\\-]+\\.[a-z0-9]{3,4}$";
		roptions = RegexOptions.IgnoreCase | RegexOptions.CultureInvariant;
		Regex.ValidateMatchTimeout(_003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_defaultTimeout);
		internalMatchTimeout = _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_defaultTimeout;
		factory = new RunnerFactory();
		capsize = 2;
	}
}

```

## System.Text.RegularExpressions.Generated\-RegexGenerator_g-F5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__ValidSpeechIdRegex_3.cs
```csharp
using System.CodeDom.Compiler;

namespace System.Text.RegularExpressions.Generated;

[GeneratedCode("System.Text.RegularExpressions.Generator", "9.0.12.41916")]
internal sealed class _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__ValidSpeechIdRegex_3 : Regex
{
	private sealed class RunnerFactory : RegexRunnerFactory
	{
		private sealed class Runner : RegexRunner
		{
			protected override void Scan(ReadOnlySpan<char> inputSpan)
			{
				if (TryFindNextPossibleStartingPosition(inputSpan) && !TryMatchAtCurrentPosition(inputSpan))
				{
					runtextpos = inputSpan.Length;
				}
			}

			private bool TryFindNextPossibleStartingPosition(ReadOnlySpan<char> inputSpan)
			{
				int num = runtextpos;
				if ((uint)num < (uint)inputSpan.Length && num == 0)
				{
					return true;
				}
				runtextpos = inputSpan.Length;
				return false;
			}

			private bool TryMatchAtCurrentPosition(ReadOnlySpan<char> inputSpan)
			{
				int num = runtextpos;
				int start = num;
				ReadOnlySpan<char> span = inputSpan.Slice(num);
				if (num != 0)
				{
					return false;
				}
				int num2 = span.IndexOfAnyExcept(_003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_nonAscii_D41BEF0BEAFBA32A45D2356E3F1579596F35B7C67CAA9CF7C4B3F2A5422DCA51);
				if (num2 < 0)
				{
					num2 = span.Length;
				}
				if (num2 == 0)
				{
					return false;
				}
				span = span.Slice(num2);
				num += num2;
				if (num < inputSpan.Length - 1 || ((uint)num < (uint)inputSpan.Length && inputSpan[num] != '\n'))
				{
					return false;
				}
				runtextpos = num;
				Capture(0, start, num);
				return true;
			}
		}

		protected override RegexRunner CreateInstance()
		{
			return new Runner();
		}
	}

	internal static readonly _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__ValidSpeechIdRegex_3 Instance = new _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__ValidSpeechIdRegex_3();

	private _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__ValidSpeechIdRegex_3()
	{
		pattern = "^[a-z0-9_-]+$";
		roptions = RegexOptions.IgnoreCase | RegexOptions.CultureInvariant;
		Regex.ValidateMatchTimeout(_003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_defaultTimeout);
		internalMatchTimeout = _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__Utilities.s_defaultTimeout;
		factory = new RunnerFactory();
		capsize = 1;
	}
}

```

## Voxta.Core.Assets\ResourceAssetsContainer.cs
```csharp
using System;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Assets;
using Voxta.Abstractions.Imaging;
using Voxta.Common;
using Voxta.Model.Shared;

namespace Voxta.Core.Assets;

public class ResourceAssetsContainer(ILogger logger, string containerPath) : IResourceAssetsContainer
{
	private const string AssetsFolder = "Assets";

	public IResourceUserAssetsContainer ManageAssets()
	{
		return new ResourceUserAssetsContainer(logger, Path.Combine(containerPath, "Assets"));
	}

	public string GetThumbnailPath(ImageInfo image)
	{
		return GetThumbnailPath(containerPath, image.ContentType);
	}

	public string GetThumbnailPath(int width, int height, ResizeMode mode, string contentType)
	{
		return Path.Combine(containerPath, ".cache", $"thumbnail.{width}x{height}-{mode.ToString().ToLowerInvariant()}{ContentTypes.GetExtensionFromContentType(contentType)}");
	}

	private static string GetThumbnailPath(string containerPath, string contentType)
	{
		return Path.Combine(containerPath, "thumbnail" + ContentTypes.GetExtensionFromContentType(contentType));
	}

	public async Task<ImageInfo> SaveThumbnail(Stream stream, string contentType, CancellationToken cancellationToken)
	{
		cancellationToken.ThrowIfCancellationRequested();
		DeleteThumbnail();
		Directory.CreateDirectory(containerPath);
		string thumbnailPath = GetThumbnailPath(containerPath, contentType);
		ImageInfo result;
		await using (FileStream fileStream = new FileStream(thumbnailPath, FileMode.Create))
		{
			await stream.CopyToAsync(fileStream, cancellationToken);
			ImageInfo imageInfo = new ImageInfo
			{
				ContentType = contentType,
				RandomizedETag = ImageInfo.CreateETag()
			};
			result = imageInfo;
		}
		return result;
	}

	public void DeleteThumbnail()
	{
		if (!Directory.Exists(containerPath))
		{
			return;
		}
		string[] array = (from x in Directory.GetFiles(containerPath)
			where Path.GetFileName(x).StartsWith("thumbnail")
			select x).ToArray();
		for (int num = 0; num < array.Length; num++)
		{
			File.Delete(array[num]);
		}
		string path = Path.Combine(containerPath, ".cache");
		if (Directory.Exists(path))
		{
			array = (from x in Directory.GetFiles(path)
				where Path.GetFileName(x).StartsWith("thumbnail")
				select x).ToArray();
			for (int num = 0; num < array.Length; num++)
			{
				File.Delete(array[num]);
			}
		}
	}

	public ImageInfo? CopyThumbnailTo(ImageInfo? sourceImage, IResourceAssetsContainer target)
	{
		if (sourceImage == null)
		{
			return null;
		}
		string thumbnailPath = GetThumbnailPath(sourceImage);
		if (!File.Exists(thumbnailPath))
		{
			return null;
		}
		string thumbnailPath2 = target.GetThumbnailPath(sourceImage);
		if (File.Exists(thumbnailPath2))
		{
			throw new InvalidOperationException("File already exists: " + thumbnailPath2);
		}
		Directory.CreateDirectory(Path.GetDirectoryName(thumbnailPath2) ?? throw new InvalidOperationException("Invalid path: " + thumbnailPath2));
		target.DeleteThumbnail();
		File.Copy(thumbnailPath, thumbnailPath2);
		return new ImageInfo
		{
			ContentType = sourceImage.ContentType,
			RandomizedETag = ImageInfo.CreateETag()
		};
	}
}

```

## Voxta.Core.Assets\ResourceAssetsManager.cs
```csharp
using System;
using System.IO;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Assets;
using Voxta.Abstractions.Utils;

namespace Voxta.Core.Assets;

public class ResourceAssetsManager(ICommonFolders folders, ILogger<ResourceAssetsManager> logger) : IResourceAssetsManager
{
	public IResourceAssetsContainer ManageContainer<T>(Guid userId, Guid id)
	{
		if (userId == Guid.Empty || id == Guid.Empty)
		{
			throw new ArgumentException("User ID and ID cannot be empty");
		}
		string containerPath = GetContainerPath<T>(userId, id);
		if (!Directory.Exists(containerPath))
		{
			Directory.CreateDirectory(containerPath);
		}
		return new ResourceAssetsContainer(logger, containerPath);
	}

	private string GetContainerPath<T>(Guid userId, Guid id)
	{
		string name = typeof(T).Name;
		string path = name switch
		{
			"Character" => "Characters", 
			"ProfileSettings" => "Profiles", 
			"Scenario" => "Scenarios", 
			"MemoryBook" => "Books", 
			"Collection" => "Collections", 
			"ContentPackage" => "Packages", 
			"Folder" => "Folders", 
			"Chat" => "Chats", 
			_ => throw new NotSupportedException("Type " + name + " is not supported"), 
		};
		return Path.GetFullPath(Path.Combine(folders.GetUserFolder(userId), path, id.ToString("D")));
	}

	public void DeleteUser(Guid userId)
	{
		string fullPath = Path.GetFullPath(folders.GetUserFolder(userId));
		if (Directory.Exists(fullPath))
		{
			Directory.Delete(fullPath, recursive: true);
		}
	}

	public void DeleteContainer<T>(Guid userId, Guid id)
	{
		string containerPath = GetContainerPath<T>(userId, id);
		if (Directory.Exists(containerPath))
		{
			Directory.Delete(containerPath, recursive: true);
		}
	}
}

```

## Voxta.Core.Assets\ResourceUserAssetsContainer.cs
```csharp
using System;
using System.CodeDom.Compiler;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Text.RegularExpressions.Generated;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Assets;

namespace Voxta.Core.Assets;

public class ResourceUserAssetsContainer(ILogger logger, string assetsBasePath) : IResourceUserAssetsContainer
{
	private static readonly string[] _supportedExtensions = new string[16]
	{
		".png", ".jpg", ".jpeg", ".avif", ".mp3", ".wav", ".ogg", ".webp", ".webm", ".mp4",
		".vrm", ".vmd", ".fbx", ".json", ".txt", ".csv"
	};

	public string AssetsBasePath => assetsBasePath;

	[GeneratedRegex("^([a-z0-9_\\-]+/)*[a-z0-9_\\-]+\\.[a-z0-9]{3,4}$", RegexOptions.IgnoreCase | RegexOptions.CultureInvariant)]
	[GeneratedCode("System.Text.RegularExpressions.Generator", "9.0.12.41916")]
	private static Regex ValidResourcePath()
	{
		return _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__ValidResourcePath_0.Instance;
	}

	public string[] ListAssets()
	{
		if (!Directory.Exists(assetsBasePath))
		{
			return Array.Empty<string>();
		}
		string[] array = (from p in Directory.GetFiles(assetsBasePath, "*.*", SearchOption.AllDirectories).Select(delegate(string p)
			{
				int num = assetsBasePath.Length + 1;
				return p.Substring(num, p.Length - num);
			})
			select p.Replace('\\', '/')).ToArray();
		string[] array2 = (from p in array
			where _supportedExtensions.Contains<string>(Path.GetExtension(p), StringComparer.InvariantCultureIgnoreCase)
			where ValidResourcePath().IsMatch(p)
			select p).ToArray();
		if (array.Length != array2.Length)
		{
			logger.LogWarning("Some files in {BasePath} are not supported (invalid extension or invalid name characters) and will not be listed: {InvalidFiles}", assetsBasePath, array.Except(array2));
		}
		return array2;
	}

	public string GetAssetFullPath(string resourcePath)
	{
		if (resourcePath.StartsWith('/'))
		{
			string text = resourcePath;
			resourcePath = text.Substring(1, text.Length - 1);
		}
		if (!ValidResourcePath().IsMatch(resourcePath))
		{
			throw new UnauthorizedAccessException("Unauthorized path " + resourcePath);
		}
		if (_supportedExtensions.All((string ext) => !resourcePath.EndsWith(ext)))
		{
			throw new NotSupportedException("Resource extension " + Path.GetExtension(resourcePath) + " is not supported, supported extensions: " + string.Join(", ", _supportedExtensions));
		}
		if (resourcePath.StartsWith("Assets/"))
		{
			string text = resourcePath;
			resourcePath = text.Substring(7, text.Length - 7);
		}
		return Path.GetFullPath(Path.Combine(assetsBasePath, resourcePath));
	}

	public async Task WriteAsset(string assetPath, byte[] data, CancellationToken cancellationToken)
	{
		cancellationToken.ThrowIfCancellationRequested();
		if (assetPath.StartsWith('/'))
		{
			string text = assetPath;
			assetPath = text.Substring(1, text.Length - 1);
		}
		if (assetPath.StartsWith("Assets/"))
		{
			string text = assetPath;
			assetPath = text.Substring(7, text.Length - 7);
		}
		if (!ValidResourcePath().IsMatch(assetPath))
		{
			throw new UnauthorizedAccessException("Unauthorized path " + assetPath);
		}
		string fullPath = Path.GetFullPath(Path.Combine(assetsBasePath, assetPath));
		Directory.CreateDirectory(Path.GetDirectoryName(fullPath) ?? throw new InvalidOperationException("Invalid path: " + fullPath));
		await using FileStream fileStream = new FileStream(fullPath, FileMode.Create);
		await fileStream.WriteAsync(data, cancellationToken);
	}

	public void DeleteAsset(string assetPath, CancellationToken cancellationToken)
	{
		cancellationToken.ThrowIfCancellationRequested();
		if (assetPath.StartsWith('/'))
		{
			string text = assetPath;
			assetPath = text.Substring(1, text.Length - 1);
		}
		if (assetPath.StartsWith("Assets/"))
		{
			string text = assetPath;
			assetPath = text.Substring(7, text.Length - 7);
		}
		if (!ValidResourcePath().IsMatch(assetPath))
		{
			throw new UnauthorizedAccessException("Unauthorized path " + assetPath);
		}
		string fullPath = Path.GetFullPath(Path.Combine(assetsBasePath, assetPath));
		if (File.Exists(fullPath))
		{
			File.Delete(fullPath);
		}
		string path = Path.GetDirectoryName(fullPath) ?? throw new InvalidOperationException("Invalid path: " + fullPath);
		if (Directory.Exists(path) && Directory.GetFiles(path).Length == 0)
		{
			Directory.Delete(path);
		}
	}

	public void CopyAssets(IResourceUserAssetsContainer target)
	{
		if (!Directory.Exists(assetsBasePath))
		{
			return;
		}
		string[] files = Directory.GetFiles(assetsBasePath, "*.*", SearchOption.AllDirectories);
		if (files.Length == 0)
		{
			return;
		}
		string assetsBasePath = target.AssetsBasePath;
		Directory.CreateDirectory(assetsBasePath);
		string[] array = files;
		foreach (string text in array)
		{
			if (_supportedExtensions.Contains<string>(Path.GetExtension(text), StringComparer.InvariantCultureIgnoreCase))
			{
				string text2 = text;
				int num = assetsBasePath.Length + 1;
				string path = text2.Substring(num, text2.Length - num);
				string text3 = Path.Combine(assetsBasePath, path);
				Directory.CreateDirectory(Path.GetDirectoryName(text3) ?? throw new InvalidOperationException("Invalid path: " + text3));
				File.Copy(text, text3);
			}
		}
	}
}

```

## Voxta.Core.Chats.Commands.Chat\IUpdateChatCommand.cs
```csharp
using Voxta.Core.CommandsProcessing;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Commands.Chat;

public interface IUpdateChatCommand : IChatInputCommand<ClientUpdateChatMessage>, IChatCommand<ClientUpdateChatMessage>, IChatCommand
{
}

```

## Voxta.Core.Chats.Commands.Chat\UpdateChatCommand.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Repositories;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.CommandsProcessing;
using Voxta.Model.WebsocketMessages.ClientMessages;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.Commands.Chat;

public class UpdateChatCommand(ChatInstance chatInstance, IUserConnectionTunnel tunnel, IUnitOfWorkFactory unitOfWorkFactory, ILogger<UpdateChatCommand> logger) : IUpdateChatCommand, IChatInputCommand<ClientUpdateChatMessage>, IChatCommand<ClientUpdateChatMessage>, IChatCommand
{
	public async ValueTask ExecuteAsync(ClientUpdateChatMessage request, CancellationToken cancellationToken)
	{
		logger.LogDebug("Executing command: {Name}", "UpdateChatCommand");
		Voxta.Abstractions.Model.Chat chat = chatInstance.Chat;
		if (request.Title != null)
		{
			chat.Title = ((request.Title == "") ? null : request.Title);
		}
		if (!chatInstance.Ephemeral)
		{
			await unitOfWorkFactory.ApplyAndSaveChangesAsync((IUnitOfWork x) => x.Chats.UpdateAsync(chat), cancellationToken);
		}
		tunnel.Send(new ServerChatUpdatedMessage
		{
			SessionId = chatInstance.SessionId,
			ChatId = chat.LocalId,
			Title = (chat.Title ?? "")
		});
	}
}

```

## Voxta.Core.Chats.Commands.ChatFlow\ContinueConversationCommand.cs
```csharp
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Model;
using Voxta.Core.Chats.Commands.Reply;
using Voxta.Core.Chats.Objects.Characters;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.ScopedServices;
using Voxta.Core.Chats.Sessions;
using Voxta.Core.CommandsProcessing;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.Commands.ChatFlow;

public class ContinueConversationCommand(ChatInstance chatInstance, IUserConnectionTunnel tunnel, IChatCommandsManager commandsManager, IChatSessionGeneratingState chatSessionGeneratingState, ITranscriptionService transcriptionService, IContinuationService continuationService, IChatFlowService chatFlowService, ILogger<ContinueConversationCommand> logger) : IContinueConversationCommand, IChatForegroundCommand<ContinueConversationRequest>, IChatCommand<ContinueConversationRequest>, IChatCommand
{
	public async ValueTask ExecuteAsync(ContinueConversationRequest request, CancellationToken cancellationToken)
	{
		logger.LogDebug("Executing command: {Name} (initiated by message {MessageId})", "ContinueConversationCommand", request.Message?.LocalId);
		if (!cancellationToken.IsCancellationRequested)
		{
			if (continuationService.ContinuationCounter > request.ContinuationCounter)
			{
				logger.LogDebug("Continuation: Skipping because the requested continuation counter is {Request} but the current counter is {ContinuationCounter}", request.ContinuationCounter, continuationService.ContinuationCounter);
			}
			else if (chatSessionGeneratingState.SpeechInProgress())
			{
				logger.LogDebug("Continuation: Skipping because speech is in progress");
			}
			else if (ShouldContinue(await chatInstance.GetOneMessageAsync((IReadOnlyList<ChatMessageData> msgs) => msgs.LastOrDefault((ChatMessageData m) => m.Role.IsTriggering()), cancellationToken)))
			{
				commandsManager.EnqueueForeground<IGenerateReplyCommand, GenerateReplyRequest>(new GenerateReplyRequest
				{
					CharacterId = null,
					AllowUser = request.AllowUser
				});
			}
			else
			{
				await transcriptionService.StartTranscriptionAsync("Speech complete", cancellationToken);
				tunnel.Send(new ServerChatFlowMessage
				{
					SessionId = chatInstance.SessionId,
					State = ChatFlowStates.WaitingForUserInput
				});
			}
		}
	}

	private bool ShouldContinue(ChatMessageData? lastMessage)
	{
		if (chatSessionGeneratingState.Paused)
		{
			logger.LogDebug("Continuation: Skipping because the session is paused");
			return false;
		}
		if (chatFlowService.DequeueForcedUserAsync())
		{
			logger.LogDebug("Continuation: Skipping because the user is forced to reply");
			return false;
		}
		ChatInstance chatInstance = chatInstance;
		if (chatInstance != null && chatInstance.ChatFlow == ChatFlowModes.Story)
		{
			logger.LogDebug("Continuation: Skipping because the chat is in story mode");
			return true;
		}
		if (lastMessage != null && lastMessage.Role == ChatMessageRole.Event)
		{
			logger.LogDebug("Continuation: Skipping because the last message was an event");
			return true;
		}
		if (chatInstance.Characters.Count((CharacterInstance c) => c.Enabled) <= 1)
		{
			logger.LogDebug("Continuation: Skipping because there is only one character");
			if (lastMessage != null)
			{
				return lastMessage.Role == ChatMessageRole.User;
			}
			return false;
		}
		return true;
	}
}

```

## Voxta.Core.Chats.Commands.ChatFlow\ContinueConversationRequest.cs
```csharp
using Voxta.Abstractions.Model;

namespace Voxta.Core.Chats.Commands.ChatFlow;

public class ContinueConversationRequest
{
	public required ChatMessageData? Message { get; init; }

	public int ContinuationCounter { get; init; }

	public bool AllowUser { get; init; }
}

```

## Voxta.Core.Chats.Commands.ChatFlow\IContinueConversationCommand.cs
```csharp
using Voxta.Core.CommandsProcessing;

namespace Voxta.Core.Chats.Commands.ChatFlow;

public interface IContinueConversationCommand : IChatForegroundCommand<ContinueConversationRequest>, IChatCommand<ContinueConversationRequest>, IChatCommand
{
}

```

## Voxta.Core.Chats.Commands.ChatFlow\IPauseCommand.cs
```csharp
using Voxta.Core.CommandsProcessing;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Commands.ChatFlow;

public interface IPauseCommand : IChatInputCommand<ClientPauseMessage>, IChatCommand<ClientPauseMessage>, IChatCommand
{
}

```

## Voxta.Core.Chats.Commands.ChatFlow\PauseCommand.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Utils;
using Voxta.Core.Chats.Commands.Reply;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.ScopedServices;
using Voxta.Core.Chats.Sessions;
using Voxta.Core.CommandsProcessing;
using Voxta.Model.WebsocketMessages.ClientMessages;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.Commands.ChatFlow;

public class PauseCommand(ChatInstance chatInstance, IUserConnectionTunnel tunnel, IChatSessionGeneratingState chatSessionGeneratingState, IContinuationService continuationService, IChatCommandsManager commandsManager, IChatTimer chatTimer, ILogger<PauseCommand> logger) : IPauseCommand, IChatInputCommand<ClientPauseMessage>, IChatCommand<ClientPauseMessage>, IChatCommand
{
	public ValueTask ExecuteAsync(ClientPauseMessage request, CancellationToken cancellationToken)
	{
		logger.LogDebug("Executing command: {Name}", "PauseCommand");
		chatSessionGeneratingState.Paused = request.Pause;
		tunnel.Send(new ServerChatPausedMessage
		{
			SessionId = chatInstance.SessionId,
			Paused = chatSessionGeneratingState.Paused
		});
		if (chatSessionGeneratingState.Paused)
		{
			continuationService.CancelContinuation();
			chatTimer.Pause();
		}
		else
		{
			chatTimer.Resume();
			commandsManager.EnqueueForeground<IGenerateReplyCommand, GenerateReplyRequest>(new GenerateReplyRequest());
		}
		return ValueTask.CompletedTask;
	}
}

```

## Voxta.Core.Chats.Commands.ClientMessage\IProcessClientSendMessageCommand.cs
```csharp
using Voxta.Core.CommandsProcessing;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Commands.ClientMessage;

public interface IProcessClientSendMessageCommand : IChatInputCommand<ClientSendMessage>, IChatCommand<ClientSendMessage>, IChatCommand
{
}

```

## Voxta.Core.Chats.Commands.ClientMessage\ProcessClientSendMessageCommand.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Abstractions.Services.ChatAugmentations;
using Voxta.Core.Chats.Commands.Context;
using Voxta.Core.Chats.Commands.Images;
using Voxta.Core.Chats.Commands.Messages;
using Voxta.Core.Chats.Commands.Reply;
using Voxta.Core.Chats.Commands.Speech;
using Voxta.Core.Chats.Commands.Triggers;
using Voxta.Core.Chats.Commands.Vision;
using Voxta.Core.Chats.Objects.Characters;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.ScopedServices;
using Voxta.Core.Chats.Sessions;
using Voxta.Core.Chats.Utils;
using Voxta.Core.CommandsProcessing;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ClientMessages;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.Commands.ClientMessage;

public class ProcessClientSendMessageCommand(ChatInstance chatInstance, IUserConnectionTunnel tunnel, IChatAugmentationsServiceInstance augmentations, IChatContextService chatContextService, IChatTextProcessor chatTextProcessor, IChatCommandsManager commandsManager, ICommandModeService commandModeService, IMessageDispatcherService messageDispatcher, IChatSessionGeneratingState generatingState, IChatContinuousStorageService continuousStorageService, ICustomMessageService customMessageService, ILogger<ProcessClientSendMessageCommand> logger) : IProcessClientSendMessageCommand, IChatInputCommand<ClientSendMessage>, IChatCommand<ClientSendMessage>, IChatCommand
{
	public async ValueTask ExecuteAsync(ClientSendMessage request, CancellationToken cancellationToken)
	{
		logger.LogDebug("Executing command: {Name}", "ProcessClientSendMessageCommand");
		await using (continuousStorageService.Begin())
		{
			await chatContextService.ExpireFlagsAsync(cancellationToken);
		}
		try
		{
			if (await TryHandleCommand(request, cancellationToken))
			{
				return;
			}
		}
		catch (Exception exc)
		{
			tunnel.Send(new ServerChatSessionErrorMessage(chatInstance.SessionId, exc)
			{
				Retry = false
			});
			return;
		}
		if (await commandModeService.TryHandle(request, cancellationToken))
		{
			return;
		}
		CharacterInstance obj = (request.CharacterId.HasValue ? (chatInstance.Characters.FirstOrDefault((CharacterInstance c) => c.Id == request.CharacterId.Value) ?? chatInstance.Characters[0]) : chatInstance.Characters[0]);
		obj.CanReply = request.DoReply;
		obj.CanDoActionInference = request.DoCharacterActionInference;
		if (!string.IsNullOrEmpty(request.Text))
		{
			string text = await augmentations.PreProcessTextAsync(request.Role, request.Text, cancellationToken);
			if (request.Text != text)
			{
				request.Text = text;
				logger.LogInformation("Text was preprocessed: {Text}", text);
				if (await TryHandleCommand(request, cancellationToken))
				{
					return;
				}
			}
		}
		if (generatingState.Paused)
		{
			generatingState.Paused = false;
			tunnel.Send(new ServerChatPausedMessage
			{
				SessionId = chatInstance.SessionId,
				Paused = false
			});
		}
		if (request.Role == ChatMessageRole.User)
		{
			if (!(request.Text == "*"))
			{
				if (string.IsNullOrEmpty(request.Text))
				{
					ClientSendMessageAttachment[] attachments = request.Attachments;
					if (attachments == null || attachments.Length <= 0)
					{
						goto IL_056f;
					}
				}
				await AbortCurrentReplyAsync();
				commandsManager.EnqueueForeground<IReceiveUserMessageCommand, ReceiveUserMessageRequest>(new ReceiveUserMessageRequest
				{
					Text = request.Text,
					CharacterResponsePrefix = request.CharacterResponsePrefix,
					Attachments = request.Attachments,
					AllowUserActionInference = request.DoUserActionInference,
					DoContinue = request.DoContinue
				});
				return;
			}
			goto IL_056f;
		}
		if (request.Role == ChatMessageRole.Event || request.UseStoryWriter)
		{
			await AbortCurrentReplyAsync();
			commandsManager.EnqueueForeground<IGenerateStoryCommand, GenerateStoryRequest>(new GenerateStoryRequest
			{
				Role = request.Role,
				Text = request.Text,
				UseStoryWriter = request.UseStoryWriter,
				GenerateConstraintRequest = (request.GenerateConstraintRequest ?? GenerateConstraintRequest.Empty)
			});
			return;
		}
		if (request != null && request.Role == ChatMessageRole.Undefined && request.TriggerEvent != null)
		{
			commandsManager.EnqueueInput<ITriggerEventCommand, TriggerEventRequest>(new TriggerEventRequest
			{
				Id = request.TriggerEvent
			});
			return;
		}
		throw new NotSupportedException($"Unsupported enqueued reply logic role: {request.Role}");
		IL_056f:
		if (generatingState.SpeechInProgress() || generatingState.ReplyInProgress())
		{
			logger.LogWarning("Dropped request to generate a reply because a reply is already in progress");
			return;
		}
		if (!request.DoContinue)
		{
			throw new InvalidOperationException("Cannot request a reply and specify DoContinue false");
		}
		commandsManager.EnqueueForeground<IGenerateReplyCommand, GenerateReplyRequest>(new GenerateReplyRequest
		{
			CharacterResponsePrefix = request.CharacterResponsePrefix,
			CharacterId = request.CharacterId,
			AllowUser = false
		});
	}

	private async Task<bool> TryHandleCommand(ClientSendMessage clientSendMessage, CancellationToken cancellationToken)
	{
		string text = clientSendMessage.Text;
		if (text == null || !CommandsUtil.TryGetCommand(text, out ChatCommands? command, out string commandText))
		{
			return false;
		}
		switch (command)
		{
		case ChatCommands.NoReply:
			clientSendMessage.Text = commandText;
			clientSendMessage.DoContinue = false;
			return false;
		case ChatCommands.Trigger:
			if (string.IsNullOrEmpty(commandText))
			{
				logger.LogWarning("Trigger did not specify an event ID: {Command}", commandText);
			}
			else
			{
				commandsManager.EnqueueInput<ITriggerEventCommand, TriggerEventRequest>(new TriggerEventRequest
				{
					Id = commandText
				});
			}
			break;
		case ChatCommands.Capture:
		{
			ComputerVisionSource value = (string.IsNullOrEmpty(commandText) ? ComputerVisionSource.Eyes : Enum.Parse<ComputerVisionSource>(commandText, ignoreCase: true));
			commandsManager.EnqueueInput<IVisionCaptureCommand, VisionCaptureRequest>(new VisionCaptureRequest
			{
				SessionId = chatInstance.SessionId,
				Source = value
			});
			break;
		}
		case ChatCommands.Context:
		{
			ContextDefinition contextDefinition = new ContextDefinition
			{
				Text = commandText.Trim()
			};
			ClientUpdateContextMessage clientUpdateContextMessage = new ClientUpdateContextMessage();
			clientUpdateContextMessage.SessionId = chatInstance.SessionId;
			clientUpdateContextMessage.ContextKey = "__command";
			clientUpdateContextMessage.Contexts = ((contextDefinition.Text.Length <= 0) ? Array.Empty<ContextDefinition>() : new ContextDefinition[1] { contextDefinition });
			ClientUpdateContextMessage parameter = clientUpdateContextMessage;
			commandsManager.EnqueueInput<IUpdateContextCommand, ClientUpdateContextMessage>(parameter);
			break;
		}
		case ChatCommands.Summarize:
			commandsManager.EnqueueForeground<ISummarizeCommand, SummarizeRequest>(new SummarizeRequest
			{
				All = (commandText == "all")
			});
			break;
		case ChatCommands.Repeat:
		{
			if (!Guid.TryParse(commandText, out var result))
			{
				result = Guid.Empty;
			}
			commandsManager.EnqueueForeground<ISpeakCommand, ClientSpeakMessage>(new ClientSpeakMessage
			{
				SessionId = chatInstance.SessionId,
				MessageId = ((result == Guid.Empty) ? ((Guid?)null) : new Guid?(result))
			});
			break;
		}
		case ChatCommands.Char:
			await messageDispatcher.SendScriptedMessageAsync(ChatMessageRole.Assistant, chatTextProcessor.ProcessText(commandText), null, null, cancellationToken);
			break;
		case ChatCommands.SetFlags:
			await using (continuousStorageService.Begin())
			{
				SetFlagRequest[] flags = SetFlagRequest.ParseFlags(commandText.Split(" ", StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries));
				chatContextService.ApplyFlags(null, flags);
			}
			break;
		case ChatCommands.Note:
			await messageDispatcher.SendScriptedMessageAsync(ChatMessageRole.Note, chatTextProcessor.ProcessText(commandText), null, false, cancellationToken);
			break;
		case ChatCommands.Instructions:
			await messageDispatcher.SendScriptedMessageAsync(ChatMessageRole.Instructions, chatTextProcessor.ProcessText(commandText), null, false, cancellationToken);
			break;
		case ChatCommands.Secret:
			await messageDispatcher.SendScriptedMessageAsync(ChatMessageRole.Secret, chatTextProcessor.ProcessText(commandText), null, false, cancellationToken);
			break;
		case ChatCommands.Event:
			commandsManager.EnqueueForeground<ICreateForegroundMessageCommand, CreateForegroundMessageRequest>(new CreateForegroundMessageRequest
			{
				Role = ChatMessageRole.Event,
				Text = chatTextProcessor.ProcessText(commandText),
				Character = chatInstance.Narrator,
				Narrate = false
			});
			break;
		case ChatCommands.Story:
			commandsManager.EnqueueForeground<IGenerateStoryCommand, GenerateStoryRequest>(new GenerateStoryRequest
			{
				Role = ChatMessageRole.Event,
				Text = chatTextProcessor.ProcessText(commandText),
				UseStoryWriter = true
			});
			break;
		case ChatCommands.Message:
		{
			ScenarioMessageEffect message = CommandsUtil.ParseCustomMessage(chatInstance, commandText);
			await customMessageService.SendCustomMessageAsync(message, cancellationToken);
			break;
		}
		case ChatCommands.Regenerate:
			commandsManager.EnqueueForeground<IRetryCommand, ClientRetryMessage>(new ClientRetryMessage
			{
				SessionId = chatInstance.SessionId
			});
			break;
		case ChatCommands.Image:
			commandsManager.EnqueueForeground<IGenerateImageCommand, GenerateImageCommandRequest>(new GenerateImageCommandRequest(commandText));
			break;
		case ChatCommands.Rollback:
		{
			ChatMessageData chatMessageData = await chatInstance.GetOneMessageAsync(delegate(IReadOnlyList<ChatMessageData> x)
			{
				bool flag = false;
				for (int num = x.Count - 1; num >= 0; num--)
				{
					if (flag)
					{
						return x[num];
					}
					if (x[num].Role == ChatMessageRole.User)
					{
						flag = true;
					}
				}
				return (ChatMessageData)null;
			}, cancellationToken);
			if (chatMessageData == null)
			{
				logger.LogWarning("Cannot revert last user message: no user message found");
				break;
			}
			Guid localId = chatMessageData.LocalId;
			commandsManager.EnqueueInput<IRevertMessageCommand, ClientRevertMessage>(new ClientRevertMessage
			{
				SessionId = chatInstance.SessionId,
				MessageId = localId
			});
			break;
		}
		default:
			throw new NotSupportedException($"Unsupported command: {command}");
		}
		return true;
	}

	private async ValueTask AbortCurrentReplyAsync()
	{
		if (await generatingState.AbortGeneratingReplyAsync())
		{
			logger.LogInformation("Aborted currently generating reply by received user message");
		}
		SpeechInterruptionInfo speechInterruptionInfo = await generatingState.InterruptSpeech();
		if (speechInterruptionInfo != null)
		{
			tunnel.Send(new ServerInterruptSpeechMessage
			{
				SessionId = chatInstance.SessionId,
				MessageId = speechInterruptionInfo.StartMessage.MessageId
			});
			commandsManager.EnqueueForeground<IProcessInterruptedReplyCommand, ProcessInterruptedReplyRequest>(new ProcessInterruptedReplyRequest
			{
				Interruption = speechInterruptionInfo
			});
		}
	}
}

```

## Voxta.Core.Chats.Commands.Context\IPublishContextCommand.cs
```csharp
using Voxta.Core.CommandsProcessing;

namespace Voxta.Core.Chats.Commands.Context;

public interface IPublishContextCommand : IChatInputCommand<PublishContextRequest>, IChatCommand<PublishContextRequest>, IChatCommand
{
}

```

## Voxta.Core.Chats.Commands.Context\IUpdateContextCommand.cs
```csharp
using Voxta.Core.CommandsProcessing;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Commands.Context;

public interface IUpdateContextCommand : IChatInputCommand<ClientUpdateContextMessage>, IChatCommand<ClientUpdateContextMessage>, IChatCommand
{
}

```

## Voxta.Core.Chats.Commands.Context\PublishContextCommand.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Prompting;
using Voxta.Abstractions.Templating;
using Voxta.Core.Chats.Objects.Characters;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.CommandsProcessing;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.Commands.Context;

public class PublishContextCommand(IUserConnectionTunnel tunnel, ChatInstance chatInstance, IPromptBuilder promptBuilder, ILogger<UpdateContextCommand> logger) : IPublishContextCommand, IChatInputCommand<PublishContextRequest>, IChatCommand<PublishContextRequest>, IChatCommand
{
	public async ValueTask ExecuteAsync(PublishContextRequest request, CancellationToken cancellationToken)
	{
		logger.LogDebug("Executing command: {Name}", "PublishContextCommand");
		ServerContextUpdatedMessage message;
		if (chatInstance.InspectorEnabled)
		{
			ITemplateModel model = await promptBuilder.CreateFullChatModelAsync(chatInstance, chatInstance.GetMainCharacter(), PromptCategories.All, cancellationToken);
			await using IChatInstanceContextReadToken token = await chatInstance.GetContextReadTokenAsync(cancellationToken);
			message = chatInstance.CreateServerContextUpdatedMessageAsync(token);
			ServerContextUpdatedMessage serverContextUpdatedMessage = message;
			if (serverContextUpdatedMessage.Actions == null)
			{
				serverContextUpdatedMessage.Actions = CreateContextUpdateActionsProperty(token, model);
			}
			serverContextUpdatedMessage = message;
			if (serverContextUpdatedMessage.Contexts == null)
			{
				serverContextUpdatedMessage.Contexts = CreateContextUpdatedContextsProperty(token, model);
			}
			foreach (CharacterInstance character in chatInstance.Characters)
			{
				await using ICharacterInstanceReadToken characterToken = await chatInstance.GetCharacter(character.Id).GetReadTokenAsync(cancellationToken);
				ServerMemoryUpdatedMessage message2 = chatInstance.CreateServerMemoryUpdatedMessage(character.Id, characterToken);
				tunnel.Send(message2);
			}
		}
		else
		{
			await using IChatInstanceContextReadToken token2 = await chatInstance.GetContextReadTokenAsync(cancellationToken);
			message = chatInstance.CreateServerContextUpdatedMessageAsync(token2);
			foreach (CharacterInstance character2 in chatInstance.Characters)
			{
				tunnel.Send(new ServerMemoryUpdatedMessage
				{
					SessionId = chatInstance.SessionId,
					Memories = Array.Empty<MemoryItemEntry>(),
					CharacterId = character2.Id
				});
			}
		}
		tunnel.Send(message);
	}

	private ServerContextUpdatedMessage.ContextKeyEntry[] CreateContextUpdatedContextsProperty(IChatInstanceContextReadToken token, ITemplateModel model)
	{
		return token.Contexts.SelectMany<KeyValuePair<string, List<IContextDefinitionInstance>>, ServerContextUpdatedMessage.ContextKeyEntry>((KeyValuePair<string, List<IContextDefinitionInstance>> x) => x.Value.Where((IContextDefinitionInstance c) => c.Conditions.Match(chatInstance, null)).Select(delegate(IContextDefinitionInstance c)
		{
			string text;
			try
			{
				text = c.TextTemplate.Render(model);
			}
			catch (Exception exception)
			{
				logger.LogWarning(exception, "Failed to render text for context {Name}", (c.Name == "") ? c.Source.Text : c.Name);
				text = c.Source.Text;
			}
			return new ServerContextUpdatedMessage.ContextKeyEntry
			{
				ContextKey = x.Key,
				Name = c.Name,
				FlagsFilter = c.Source.FlagsFilter,
				Text = text
			};
		})).ToArray();
	}

	private ServerContextUpdatedMessage.FunctionKeyEntry[] CreateContextUpdateActionsProperty(IChatInstanceContextReadToken token, ITemplateModel model)
	{
		return token.Actions.SelectMany<KeyValuePair<string, List<IScenarioActionInstance>>, ServerContextUpdatedMessage.FunctionKeyEntry>((KeyValuePair<string, List<IScenarioActionInstance>> x) => x.Value.Where((IScenarioActionInstance c) => c.Conditions.Match(chatInstance, null, forDisplay: true)).Select(delegate(IScenarioActionInstance f)
		{
			string description;
			try
			{
				description = f.Description.Render(model);
			}
			catch (Exception exception)
			{
				logger.LogWarning(exception, "Failed to render description for action {Name}", f.Name);
				description = f.Source.Description;
			}
			return new ServerContextUpdatedMessage.FunctionKeyEntry
			{
				ContextKey = x.Key,
				Name = f.Name,
				Description = description,
				Layer = f.Layer,
				FlagsFilter = f.Source.FlagsFilter,
				RoleFilter = f.Source.RoleFilter,
				Once = f.Source.Once,
				Timing = f.Source.Timing
			};
		})).ToArray();
	}
}

```

## Voxta.Core.Chats.Commands.Context\PublishContextRequest.cs
```csharp
namespace Voxta.Core.Chats.Commands.Context;

public record PublishContextRequest;

```

## Voxta.Core.Chats.Commands.Context\UpdateContextCommand.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Core.Chats.ScopedServices;
using Voxta.Core.CommandsProcessing;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Commands.Context;

public class UpdateContextCommand(IUpdateContextService updateContextService, IChatContinuousStorageService chatContinuousStorageService, ILogger<UpdateContextCommand> logger) : IUpdateContextCommand, IChatInputCommand<ClientUpdateContextMessage>, IChatCommand<ClientUpdateContextMessage>, IChatCommand
{
	public async ValueTask ExecuteAsync(ClientUpdateContextMessage request, CancellationToken cancellationToken)
	{
		logger.LogDebug("Executing command: {Name}", "UpdateContextCommand");
		await using (chatContinuousStorageService.Begin())
		{
			await updateContextService.HandleUpdateContextMessageAsync(request, cancellationToken);
		}
	}
}

```

## Voxta.Core.Chats.Commands.Documents\IUpdateDocumentCommand.cs
```csharp
using Voxta.Core.CommandsProcessing;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Commands.Documents;

public interface IUpdateDocumentCommand : IChatInputCommand<ClientUpdateDocumentMessage>, IChatCommand<ClientUpdateDocumentMessage>, IChatCommand
{
}

```

## Voxta.Core.Chats.Commands.Documents\UpdateDocumentCommand.cs
```csharp
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.DependencyInjection;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Repositories;
using Voxta.Abstractions.Tokenizers;
using Voxta.Common;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.CommandsProcessing;
using Voxta.Model.WebsocketMessages.ClientMessages;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.Commands.Documents;

public class UpdateDocumentCommand(ChatInstance chatInstance, IUserConnectionTunnel tunnel, IUnitOfWorkFactory unitOfWorkFactory, IDynamicServiceAccessor<ITokenizer> tokenizerAccessor, ILogger<UpdateDocumentCommand> logger) : IUpdateDocumentCommand, IChatInputCommand<ClientUpdateDocumentMessage>, IChatCommand<ClientUpdateDocumentMessage>, IChatCommand
{
	public async ValueTask ExecuteAsync(ClientUpdateDocumentMessage request, CancellationToken cancellationToken)
	{
		logger.LogDebug("Executing command: {Name}", "UpdateDocumentCommand");
		if (request.Content == null && request.Title == null)
		{
			if (request.DocumentId.HasValue)
			{
				await unitOfWorkFactory.ApplyAndSaveChangesAsync((IUnitOfWork u) => u.ChatDocuments.DeleteDocumentAsync(chatInstance.UserId, request.DocumentId.Value), cancellationToken);
				tunnel.Send(new ServerDocumentUpdatedMessage
				{
					SessionId = chatInstance.SessionId,
					DocumentId = request.DocumentId.Value,
					Title = null,
					TitleTokens = 0,
					Content = null,
					ContentTokens = 0
				});
			}
			return;
		}
		ChatDocument document;
		if (!request.DocumentId.IsNullOrEmpty())
		{
			await using IChatInstanceContextReadToken chatInstanceContextReadToken = await chatInstance.GetContextReadTokenAsync(cancellationToken);
			document = chatInstanceContextReadToken.Documents.FirstOrDefault((ChatDocument d) => d.LocalId == request.DocumentId.Value);
		}
		else
		{
			document = null;
		}
		Guid localId = request.DocumentId ?? Guid.NewGuid();
		bool isNew;
		if (document == null)
		{
			document = new ChatDocument
			{
				UserId = chatInstance.UserId,
				LocalId = localId,
				ChatId = chatInstance.ChatId,
				Title = (request.Title ?? ""),
				Content = (request.Content ?? "")
			};
			await using IChatInstanceContextWriteToken chatInstanceContextWriteToken = await chatInstance.GetContextWriteTokenAsync(cancellationToken);
			chatInstanceContextWriteToken.Documents.Add(document);
			isNew = true;
		}
		else
		{
			document.Title = request.Title ?? "";
			document.Content = request.Content ?? "";
			isNew = false;
		}
		ITokenizer tokenizer = tokenizerAccessor.GetCurrent();
		ChatDocument chatDocument = document;
		chatDocument.TitleTokens = await tokenizer.CountTokensAsync(document.Title, cancellationToken);
		chatDocument = document;
		chatDocument.ContentTokens = await tokenizer.CountTokensAsync(document.Content, cancellationToken);
		await using IUnitOfWork uow = unitOfWorkFactory.CreateUnitOfWork();
		if (!isNew)
		{
			await uow.ChatDocuments.UpdateDocumentAsync(document);
		}
		else
		{
			await uow.ChatDocuments.AddDocumentAsync(document);
		}
		await uow.SaveChangesAsync(cancellationToken);
		tunnel.Send(new ServerDocumentUpdatedMessage
		{
			SessionId = chatInstance.SessionId,
			DocumentId = document.LocalId,
			Title = document.Title,
			TitleTokens = document.TitleTokens,
			Content = document.Content,
			ContentTokens = document.ContentTokens
		});
	}
}

```

## Voxta.Core.Chats.Commands.Images\GenerateImageCommand.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Assets;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.DependencyInjection;
using Voxta.Abstractions.Diagnostics;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Prompting;
using Voxta.Abstractions.Services.ImageGen;
using Voxta.Abstractions.Services.Summarization;
using Voxta.Abstractions.Services.TextGen;
using Voxta.Abstractions.Services.VisionCapture;
using Voxta.Abstractions.Tokenizers;
using Voxta.Abstractions.Utils;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.ScopedServices;
using Voxta.Core.CommandsProcessing;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.Commands.Images;

public class GenerateImageCommand(ChatInstance chatInstance, IUserConnectionTunnel tunnel, IChatMessageFactory chatMessageFactory, IDynamicServiceAccessor<IImageGenService> imageGenServiceAccessor, IResourceAssetsManager resourceAssetsManager, ITunnelMessagesService tunnelMessagesService, IPromptBuilder promptBuilder, IDynamicServiceAccessor<ISummarizationService> summarizationServiceAccessor, IDynamicServiceAccessor<ITokenizer> tokenizerAccessor, IInferenceLoggersManager inferenceLoggersManager, ILogger<GenerateImageCommand> logger) : IGenerateImageCommand, IChatForegroundCommand<GenerateImageCommandRequest>, IChatCommand<GenerateImageCommandRequest>, IChatCommand
{
	public async ValueTask ExecuteAsync(GenerateImageCommandRequest request, CancellationToken cancellationToken)
	{
		logger.LogDebug("Executing command: {Name}", "GenerateImageCommand");
		IImageGenService imageGen = imageGenServiceAccessor.GetCurrent();
		if (!imageGen.Enabled)
		{
			logger.LogWarning("Image generation service is not enabled.");
			return;
		}
		Guid messageId = chatMessageFactory.CreateMessageId();
		ChatMessageData message = await chatMessageFactory.CreateCustomMessageAsync(messageId, ChatMessageRole.Note, "", null, null, null, cancellationToken);
		tunnel.Send(new ServerReplyGeneratingMessage
		{
			SessionId = chatInstance.SessionId,
			MessageId = messageId,
			Role = ChatMessageRole.Note,
			SenderId = Guid.Empty
		});
		try
		{
			string text = request.Prompt?.Trim() ?? "";
			if (text == "")
			{
				ISummarizationService summarizationService = summarizationServiceAccessor.GetCurrent();
				if (!summarizationService.Enabled)
				{
					logger.LogWarning("Summarization service is not enabled, and no prompt was provided for image generation.");
					tunnel.Send(new ServerReplyCancelledMessage
					{
						MessageId = messageId,
						SessionId = chatInstance.SessionId
					});
					return;
				}
				GenerateReplyRequest request2 = await promptBuilder.CreateImagePromptGenRequest(chatInstance, imageGen.PromptingInstructions, cancellationToken);
				InferenceLogger observer = inferenceLoggersManager.Record(ServiceTypes.Summarization, summarizationService.InstanceSettings.ServiceName, "ImagePromptGen");
				text = await summarizationService.GenerateAsync(request2, observer, cancellationToken);
				observer.Done();
			}
			InferenceLogger imageObserver = inferenceLoggersManager.Record(ServiceTypes.ImageGen, imageGen.InstanceSettings.ServiceName, "ImageGen");
			IImage image = await imageGen.GenerateAsync(new GenerateImageRequest
			{
				Prompt = text
			}, imageObserver, cancellationToken);
			imageObserver.Done();
			byte[] bytes = image.ToBytes();
			ChatMessageDataAttachment chatMessageDataAttachment = new ChatMessageDataAttachment
			{
				Image = image,
				Id = Guid.NewGuid(),
				ContentType = image.ContentType,
				Source = image.Source,
				Description = image.Description,
				FileName = image.FileName,
				Label = image.Label
			};
			ChatMessageDataAttachment chatMessageDataAttachment2 = chatMessageDataAttachment;
			int value = ((!string.IsNullOrEmpty(image.Description)) ? (await tokenizerAccessor.GetCurrent().CountTokensAsync(image.Description, cancellationToken)) : 0);
			chatMessageDataAttachment2.DescriptionTokens = value;
			ChatMessageDataAttachment attachment = chatMessageDataAttachment;
			await resourceAssetsManager.ManageContainer<Voxta.Abstractions.Model.Chat>(chatInstance.UserId, chatInstance.ChatId).ManageAssets().WriteAsset(attachment.GetAssetPath(messageId), bytes, cancellationToken);
			message.Attachments = new ChatMessageDataAttachment[1] { attachment };
			await chatMessageFactory.InsertMessageInHistoryAndSaveAsync(message, cancellationToken);
			tunnelMessagesService.SendMessageUpdated(message);
			tunnel.Send(new ServerReplyEndMessage
			{
				ConversationIndex = message.ConversationIndex,
				MessageId = messageId,
				MessageIndex = message.Index,
				SenderId = message.SenderId,
				SessionId = chatInstance.SessionId,
				Tokens = 0
			});
		}
		catch (OperationCanceledException exception)
		{
			logger.LogWarning(exception, "Image generation command was cancelled.");
			tunnel.Send(new ServerReplyCancelledMessage
			{
				MessageId = messageId,
				SessionId = chatInstance.SessionId
			});
		}
	}
}

```

## Voxta.Core.Chats.Commands.Images\GenerateImageCommandRequest.cs
```csharp
namespace Voxta.Core.Chats.Commands.Images;

public record GenerateImageCommandRequest(string? Prompt);

```

## Voxta.Core.Chats.Commands.Images\IGenerateImageCommand.cs
```csharp
using Voxta.Core.CommandsProcessing;

namespace Voxta.Core.Chats.Commands.Images;

public interface IGenerateImageCommand : IChatForegroundCommand<GenerateImageCommandRequest>, IChatCommand<GenerateImageCommandRequest>, IChatCommand
{
}

```

## Voxta.Core.Chats.Commands.Messages\CreateForegroundMessageCommand.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Utils;
using Voxta.Common;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.ScopedServices;
using Voxta.Core.CommandsProcessing;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Commands.Messages;

public class CreateForegroundMessageCommand(ChatInstance chatInstance, IChatTextProcessor chatTextProcessor, IChatMessageFactory chatMessageFactory, IScriptedSpeechService scriptedSpeechService, IContinuationService continuationService, ITunnelMessagesService tunnelMessagesService, IHandleAttachmentsService handleAttachmentsService, ILogger<CreateForegroundMessageCommand> logger) : ICreateForegroundMessageCommand, IChatForegroundCommand<CreateForegroundMessageRequest>, IChatCommand<CreateForegroundMessageRequest>, IChatCommand
{
	public async ValueTask ExecuteAsync(CreateForegroundMessageRequest request, CancellationToken cancellationToken)
	{
		logger.LogDebug("Executing command: {Name}", "CreateForegroundMessageCommand");
		string text = chatTextProcessor.ProcessText(request.Text);
		Guid messageId = chatMessageFactory.CreateMessageId();
		ChatMessageData message;
		if (request.Attachments == null)
		{
			message = ((request.Role != ChatMessageRole.Assistant || request.Narrate == false) ? (await HandleCustomMessageAsync(messageId, request.Role, text, request.Narrate, request.Reusable, cancellationToken)) : (await HandleCharacterMessageAsync(messageId, text, request.Character ?? chatInstance.GetMainCharacter(), request.Reusable, cancellationToken)));
		}
		else
		{
			if (request.Narrate == true || request.TriggerReply == true || request.Character != null)
			{
				throw new NotSupportedException("Attachments are not supported for messages that trigger replies or are narrated, or for character messages.");
			}
			message = await chatMessageFactory.CreateCustomMessageAsync(messageId, request.Role, text, null, null, null, cancellationToken);
			await chatMessageFactory.InsertMessageInHistoryAndSaveAsync(message, cancellationToken);
			await handleAttachmentsService.AttachImagesAsync(message, null, request.Attachments, describe: true, cancellationToken);
		}
		if (request.TriggerReply == true || (!request.TriggerReply.HasValue && message.Role.IsTriggering()))
		{
			continuationService.ScheduleContinuation(message, allowUser: false);
		}
	}

	private async Task<ChatMessageData> HandleCharacterMessageAsync(Guid messageId, string text, ICharacterInferenceData character, string? reusable, CancellationToken cancellationToken)
	{
		logger.LogInformation("{Character} (Requested): {Text}", character.Name, text.Excerpt(chatInstance.Ephemeral));
		ChatMessageData message = await chatMessageFactory.CreateCharacterMessageAsync(messageId, character, text, null, null, cancellationToken);
		await scriptedSpeechService.SendReusableReplyWithSpeechAsync(reusable, character, message);
		await chatMessageFactory.InsertMessageInHistoryAndSaveAsync(message, cancellationToken);
		return message;
	}

	private async Task<ChatMessageData> HandleCustomMessageAsync(Guid messageId, ChatMessageRole role, string text, bool? narrate, string? reusable, CancellationToken cancellationToken)
	{
		logger.LogInformation("{Role} (Requested): {Text}", role, text.Excerpt(chatInstance.Ephemeral));
		ChatMessageData message = await chatMessageFactory.CreateMessageAsync(messageId, role, text, null, null, cancellationToken);
		await chatMessageFactory.InsertMessageInHistoryAndSaveAsync(message, cancellationToken);
		bool flag = chatInstance.Narrator.Enabled;
		if (flag)
		{
			bool flag2 = narrate == true;
			if (!flag2)
			{
				bool flag3 = !narrate.HasValue;
				if (flag3)
				{
					bool flag4 = ((role == ChatMessageRole.Event || role == ChatMessageRole.Note) ? true : false);
					flag3 = flag4;
				}
				flag2 = flag3;
			}
			flag = flag2;
		}
		if (flag)
		{
			await scriptedSpeechService.SendReusableReplyWithSpeechAsync(reusable, chatInstance.GetNarrator(), message);
		}
		else
		{
			tunnelMessagesService.SendMessageUpdated(message);
		}
		return message;
	}
}

```

## Voxta.Core.Chats.Commands.Messages\CreateForegroundMessageRequest.cs
```csharp
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Services.VisionCapture;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Commands.Messages;

public class CreateForegroundMessageRequest
{
	public required string Text { get; init; }

	public required ChatMessageRole Role { get; init; }

	public required ICharacterInferenceData? Character { get; init; }

	public string? Reusable { get; init; }

	public bool? TriggerReply { get; init; }

	public bool? Narrate { get; init; }

	public IImage[]? Attachments { get; init; }
}

```

## Voxta.Core.Chats.Commands.Messages\DeleteMessageCommand.cs
```csharp
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Repositories;
using Voxta.Common;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.ScopedServices;
using Voxta.Core.CommandsProcessing;
using Voxta.Core.Utils;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Commands.Messages;

public class DeleteMessageCommand(ChatInstance chatInstance, IUnitOfWorkFactory unitOfWorkFactory, IDeleteLogicUtil deleteLogicUtil, ITunnelMessagesService tunnelMessagesService, ILogger<DeleteMessageCommand> logger) : IDeleteMessageCommand, IChatInputCommand<ClientDeleteMessageMessage>, IChatCommand<ClientDeleteMessageMessage>, IChatCommand
{
	public async ValueTask ExecuteAsync(ClientDeleteMessageMessage request, CancellationToken cancellationToken)
	{
		logger.LogDebug("Executing command: {Name}", "DeleteMessageCommand");
		await using IChatInstanceMessagesWriteToken token = await chatInstance.GetMessagesWriteTokenAsync(cancellationToken);
		ChatMessageData message = token.Messages.FirstOrDefault((ChatMessageData m) => m.LocalId == request.MessageId);
		if (message == null)
		{
			logger.LogWarning("Could not update message {MessageId} because it was not found in the message history", request.MessageId);
			return;
		}
		if (!chatInstance.Ephemeral)
		{
			await using IUnitOfWork uow = unitOfWorkFactory.CreateUnitOfWork();
			await deleteLogicUtil.DeleteMessage(uow, message);
		}
		token.Messages.Remove(message);
		logger.LogInformation("Deleted message {MessageId} with text '{Text}'", request.MessageId, message.Value.Excerpt(chatInstance.Ephemeral));
		tunnelMessagesService.SendMessageDeleted(message);
	}
}

```

## Voxta.Core.Chats.Commands.Messages\ICreateForegroundMessageCommand.cs
```csharp
using Voxta.Core.CommandsProcessing;

namespace Voxta.Core.Chats.Commands.Messages;

public interface ICreateForegroundMessageCommand : IChatForegroundCommand<CreateForegroundMessageRequest>, IChatCommand<CreateForegroundMessageRequest>, IChatCommand
{
}

```

## Voxta.Core.Chats.Commands.Messages\IDeleteMessageCommand.cs
```csharp
using Voxta.Core.CommandsProcessing;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Commands.Messages;

public interface IDeleteMessageCommand : IChatInputCommand<ClientDeleteMessageMessage>, IChatCommand<ClientDeleteMessageMessage>, IChatCommand
{
}

```

## Voxta.Core.Chats.Commands.Messages\IInterruptCommand.cs
```csharp
using Voxta.Core.CommandsProcessing;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Commands.Messages;

public interface IInterruptCommand : IChatInputCommand<ClientInterruptMessage>, IChatCommand<ClientInterruptMessage>, IChatCommand
{
}

```

## Voxta.Core.Chats.Commands.Messages\InterruptCommand.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Connections;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.ScopedServices;
using Voxta.Core.Chats.Sessions;
using Voxta.Core.CommandsProcessing;
using Voxta.Model.WebsocketMessages.ClientMessages;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.Commands.Messages;

public class InterruptCommand(ChatInstance chatInstance, IUserConnectionTunnel tunnel, IContinuationService continuationService, IChatCommandsManager commandsManager, IChatSessionGeneratingState generatingState, ILogger<InterruptCommand> logger) : IInterruptCommand, IChatInputCommand<ClientInterruptMessage>, IChatCommand<ClientInterruptMessage>, IChatCommand
{
	public async ValueTask ExecuteAsync(ClientInterruptMessage request, CancellationToken cancellationToken)
	{
		logger.LogDebug("Executing command: {Name}", "InterruptCommand");
		continuationService.CancelContinuation();
		SpeechInterruptionInfo speechInterruptionInfo = await AbortCurrentReplyAsync();
		if (speechInterruptionInfo != null)
		{
			commandsManager.EnqueueForeground<IProcessInterruptedReplyCommand, ProcessInterruptedReplyRequest>(new ProcessInterruptedReplyRequest
			{
				Interruption = speechInterruptionInfo
			});
		}
	}

	private async ValueTask<SpeechInterruptionInfo?> AbortCurrentReplyAsync()
	{
		if (await generatingState.AbortGeneratingReplyAsync())
		{
			logger.LogInformation("Aborted currently generating reply by interruption request");
		}
		SpeechInterruptionInfo speechInterruptionInfo = await generatingState.InterruptSpeech();
		if (speechInterruptionInfo != null)
		{
			tunnel.Send(new ServerInterruptSpeechMessage
			{
				SessionId = chatInstance.SessionId,
				MessageId = speechInterruptionInfo.StartMessage.MessageId
			});
		}
		return speechInterruptionInfo;
	}
}

```

## Voxta.Core.Chats.Commands.Messages\IProcessInterruptedReplyCommand.cs
```csharp
using Voxta.Core.CommandsProcessing;

namespace Voxta.Core.Chats.Commands.Messages;

public interface IProcessInterruptedReplyCommand : IChatForegroundCommand<ProcessInterruptedReplyRequest>, IChatCommand<ProcessInterruptedReplyRequest>, IChatCommand
{
}

```

## Voxta.Core.Chats.Commands.Messages\IReceiveUserMessageCommand.cs
```csharp
using Voxta.Core.CommandsProcessing;

namespace Voxta.Core.Chats.Commands.Messages;

public interface IReceiveUserMessageCommand : IChatForegroundCommand<ReceiveUserMessageRequest>, IChatCommand<ReceiveUserMessageRequest>, IChatCommand
{
}

```

## Voxta.Core.Chats.Commands.Messages\IRevertMessageCommand.cs
```csharp
using Voxta.Core.CommandsProcessing;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Commands.Messages;

public interface IRevertMessageCommand : IChatInputCommand<ClientRevertMessage>, IChatCommand<ClientRevertMessage>, IChatCommand
{
}

```

## Voxta.Core.Chats.Commands.Messages\ISpeechOnlyCommand.cs
```csharp
using Voxta.Core.CommandsProcessing;

namespace Voxta.Core.Chats.Commands.Messages;

public interface ISpeechOnlyCommand : IChatForegroundCommand<SpeechOnlyRequest>, IChatCommand<SpeechOnlyRequest>, IChatCommand
{
}

```

## Voxta.Core.Chats.Commands.Messages\ISummarizeCommand.cs
```csharp
using Voxta.Core.CommandsProcessing;

namespace Voxta.Core.Chats.Commands.Messages;

public interface ISummarizeCommand : IChatForegroundCommand<SummarizeRequest>, IChatCommand<SummarizeRequest>, IChatCommand
{
}

```

## Voxta.Core.Chats.Commands.Messages\IUpdateExistingMessageCommand.cs
```csharp
using Voxta.Core.CommandsProcessing;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Commands.Messages;

public interface IUpdateExistingMessageCommand : IChatInputCommand<ClientUpdateMessage>, IChatCommand<ClientUpdateMessage>, IChatCommand
{
}

```

## Voxta.Core.Chats.Commands.Messages\ProcessInterruptedReplyCommand.cs
```csharp
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Utils;
using Voxta.Core.Chats.ScopedServices;
using Voxta.Core.CommandsProcessing;
using Voxta.Core.Utils;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Commands.Messages;

public class ProcessInterruptedReplyCommand(IChatInferenceData chatInstance, ISpecialMessageFormatter specialMessageFormatter, IChatMessageFactory chatMessageFactory, ITunnelMessagesService tunnelMessagesService, ILogger<ProcessInterruptedReplyCommand> logger) : IProcessInterruptedReplyCommand, IChatForegroundCommand<ProcessInterruptedReplyRequest>, IChatCommand<ProcessInterruptedReplyRequest>, IChatCommand
{
	public async ValueTask ExecuteAsync(ProcessInterruptedReplyRequest request, CancellationToken cancellationToken)
	{
		logger.LogDebug("Executing command: {Name}", "ProcessInterruptedReplyCommand");
		ClientSpeechPlaybackStartMessage interruptedSpeechMessage = request.Interruption.StartMessage;
		double speechInterruptionRatio = request.Interruption.Ratio;
		ChatMessageData interruptedCharacterMessage = await chatInstance.GetOneMessageAsync((IReadOnlyList<ChatMessageData> messages) => messages.LastOrDefault((ChatMessageData x) => x.LocalId == interruptedSpeechMessage.MessageId), cancellationToken);
		if (interruptedCharacterMessage == null || interruptedCharacterMessage.Role != ChatMessageRole.Assistant)
		{
			return;
		}
		string text = InterruptionsUtil.GetInterruptedText(interruptedCharacterMessage.Value, interruptedSpeechMessage.StartIndex, interruptedSpeechMessage.EndIndex, speechInterruptionRatio);
		if (!(text == interruptedCharacterMessage.Value) && interruptedCharacterMessage.Value.Length - text.Length > 5)
		{
			if (text.EndsWith("..."))
			{
				ICharacterInferenceData character = chatInstance.GetCharacter(interruptedCharacterMessage.SenderId);
				text = specialMessageFormatter.Interrupt(text, chatInstance.User.Name, character.Name);
			}
			await chatMessageFactory.UpdateMessageTextAndTokensAndSaveAsync(interruptedCharacterMessage, text, cancellationToken);
			tunnelMessagesService.SendMessageUpdated(interruptedCharacterMessage);
			logger.LogInformation("Cutoff last character message to account for the interruption: {Text}", interruptedCharacterMessage.Value);
		}
	}
}

```

## Voxta.Core.Chats.Commands.Messages\ProcessInterruptedReplyRequest.cs
```csharp
using Voxta.Core.Chats.Sessions;

namespace Voxta.Core.Chats.Commands.Messages;

public class ProcessInterruptedReplyRequest
{
	public required SpeechInterruptionInfo Interruption { get; init; }
}

```

## Voxta.Core.Chats.Commands.Messages\ReceiveUserMessageCommand.cs
```csharp
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Diagnostics;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Abstractions.Services.ActionInference;
using Voxta.Abstractions.Utils;
using Voxta.Common;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.ScopedServices;
using Voxta.Core.CommandsProcessing;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ClientMessages;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.Commands.Messages;

public class ReceiveUserMessageCommand(ChatInstance chatInstance, IUserConnectionTunnel tunnel, IContinuationService continuationService, IChatTextProcessor chatTextProcessor, IChatMessageFactory chatMessageFactory, IGenerateActionInferenceService generateActionInferenceService, IProcessScenarioEventService processScenarioEventService, IHandleAttachmentsService handleAttachmentsService, IActionScriptsService actionScriptsService, ITunnelMessagesService tunnelMessagesService, IChatContinuousStorageService chatContinuousStorageService, IChatFlowService chatFlowService, IDiagnosticsContext diagnosticsContext, ILogger<ReceiveUserMessageCommand> logger) : IReceiveUserMessageCommand, IChatForegroundCommand<ReceiveUserMessageRequest>, IChatCommand<ReceiveUserMessageRequest>, IChatCommand
{
	public async ValueTask ExecuteAsync(ReceiveUserMessageRequest request, CancellationToken cancellationToken)
	{
		logger.LogDebug("Executing command: {Name}", "ReceiveUserMessageCommand");
		if (request.Text != null)
		{
			logger.LogInformation("{User} (User): {Text}", chatInstance.User.Name, request.Text.Excerpt(chatInstance.Ephemeral));
		}
		else if (request.CharacterResponsePrefix != null)
		{
			logger.LogInformation("Received prefixed continuation message: {Prefix}", request.CharacterResponsePrefix);
		}
		else
		{
			logger.LogInformation("Received continuation request message");
		}
		ChatMessageData userMessage = await StoreUserMessageAsync(request, cancellationToken);
		if (userMessage == null)
		{
			return;
		}
		await using (chatContinuousStorageService.Begin())
		{
			diagnosticsContext.Augment((DiagnosticsContextValues c) => c with
			{
				MessageId = userMessage.LocalId
			});
			if (!(await ProcessUserMessageAsync(request, userMessage, cancellationToken)))
			{
				chatFlowService.ClearChatFlow();
				continuationService.ScheduleContinuation(userMessage, allowUser: false);
			}
		}
	}

	private async Task<bool> ProcessUserMessageAsync(ReceiveUserMessageRequest request, ChatMessageData userMessage, CancellationToken cancellationToken)
	{
		tunnel.Send(new ServerChatFlowMessage
		{
			SessionId = chatInstance.SessionId,
			State = ChatFlowStates.ProcessingUserMessage
		});
		ClientSendMessageAttachment[] attachments = request.Attachments;
		if (attachments != null && attachments.Length > 0)
		{
			await handleAttachmentsService.AttachAttachmentsAsync(userMessage, chatInstance.GetMainCharacter(), request.Attachments, cancellationToken);
		}
		if (!request.DoContinue)
		{
			continuationService.CancelContinuation();
			tunnel.Send(new ServerChatFlowMessage
			{
				SessionId = chatInstance.SessionId,
				State = ChatFlowStates.WaitingForUserInput
			});
			return true;
		}
		if (actionScriptsService.IsRegistered("userMessageReceived"))
		{
			await actionScriptsService.RunEventAsync(new UserMessageReceivedActionScriptEvent
			{
				Message = userMessage
			}, userMessage, chatInstance.User, cancellationToken);
			if (userMessage.Value == "")
			{
				return false;
			}
		}
		(IScenarioEventInstance, bool) tuple = await processScenarioEventService.ProcessScenarioEvent(userMessage, FunctionTiming.AfterUserMessage, null, cancellationToken);
		var (scenarioEventInstance, _) = tuple;
		if ((scenarioEventInstance != null && scenarioEventInstance.CancelReply) || tuple.Item2)
		{
			continuationService.CancelContinuation();
			return true;
		}
		if (request.AllowUserActionInference)
		{
			IScenarioActionInstance[] functions = await chatInstance.ResolveActionsAsync(userMessage, FunctionTiming.AfterUserMessage, null, cancellationToken);
			if (functions.Length != 0)
			{
				IGenerateActionInferenceService generateActionInferenceService = generateActionInferenceService;
				ICharacterOrUserData user = chatInstance.User;
				IScenarioActionInstance[] actions = functions;
				ActionInvocation result = await generateActionInferenceService.GenerateActionInference(ActionInferenceType.UserFunction, user, userMessage, FunctionTiming.AfterUserMessage, actions, await chatInstance.ResolveActionsAsync(userMessage, FunctionTiming.Manual, null, cancellationToken), cancellationToken);
				IScenarioActionInstance scenarioActionInstance = ((result != null) ? functions.FirstOrDefault((IScenarioActionInstance f) => f.Name == result.Name) : null);
				if (scenarioActionInstance != null && scenarioActionInstance.CancelReply)
				{
					continuationService.CancelContinuation();
					return true;
				}
			}
		}
		return false;
	}

	private async Task<ChatMessageData?> StoreUserMessageAsync(ReceiveUserMessageRequest clientSendMessage, CancellationToken cancellationToken)
	{
		if (string.IsNullOrEmpty(clientSendMessage.Text) && (clientSendMessage.Attachments == null || clientSendMessage.Attachments.Length == 0))
		{
			return null;
		}
		string text = clientSendMessage.Text?.Trim() ?? "";
		ChatMessageData chatMessageData = await chatInstance.GetLastMessageAsync(cancellationToken);
		ChatMessageData pendingUserMessage = ((chatMessageData != null && chatMessageData.Role == ChatMessageRole.User) ? chatMessageData : null);
		if (pendingUserMessage != null)
		{
			string text2 = (string.IsNullOrEmpty(pendingUserMessage.Value) ? text : (" " + text));
			string text3 = pendingUserMessage.Value + text2;
			await chatMessageFactory.UpdateMessageTextAndTokensAndSaveAsync(pendingUserMessage, text3, cancellationToken);
			tunnelMessagesService.SendMessageUpdated(pendingUserMessage);
			return pendingUserMessage;
		}
		string text4 = chatTextProcessor.ProcessText(text);
		Guid messageId = chatMessageFactory.CreateMessageId();
		ChatMessageData userMessageData = await chatMessageFactory.CreateUserMessageAsync(messageId, chatInstance.User, text4, null, cancellationToken);
		await chatMessageFactory.InsertMessageInHistoryAndSaveAsync(userMessageData, cancellationToken);
		tunnelMessagesService.SendMessageUpdated(userMessageData);
		return userMessageData;
	}
}

```

## Voxta.Core.Chats.Commands.Messages\ReceiveUserMessageRequest.cs
```csharp
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Commands.Messages;

public class ReceiveUserMessageRequest
{
	public string? Text { get; init; }

	public string? CharacterResponsePrefix { get; init; }

	public ClientSendMessageAttachment[]? Attachments { get; init; }

	public bool AllowUserActionInference { get; init; }

	public bool DoContinue { get; init; }
}

```

## Voxta.Core.Chats.Commands.Messages\RevertMessageCommand.cs
```csharp
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Repositories;
using Voxta.Common;
using Voxta.Core.Chats.Commands.Reply;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.ScopedServices;
using Voxta.Core.CommandsProcessing;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Commands.Messages;

public class RevertMessageCommand(ChatInstance chatInstance, ITunnelMessagesService tunnelMessagesService, IChatCommandsManager commandsManager, IUnitOfWorkFactory unitOfWorkFactory, ILogger<RevertMessageCommand> logger) : IRevertMessageCommand, IChatInputCommand<ClientRevertMessage>, IChatCommand<ClientRevertMessage>, IChatCommand
{
	public async ValueTask ExecuteAsync(ClientRevertMessage request, CancellationToken cancellationToken)
	{
		logger.LogDebug("Executing command: {Name}", "RevertMessageCommand");
		ChatMessageData lastMessage;
		await using (IChatInstanceMessagesWriteToken token = await chatInstance.GetMessagesWriteTokenAsync(cancellationToken))
		{
			List<ChatMessageData> messagesToDelete = new List<ChatMessageData>();
			int num = (request.MessageId.HasValue ? token.Messages.FindIndex((ChatMessageData m) => m.LocalId == request.MessageId.Value) : (token.Messages.FindLastIndex((ChatMessageData m) => m.Role == ChatMessageRole.User) - 1));
			if (num < 0)
			{
				logger.LogWarning("Could not revert message {MessageId} because it was not found in the message history", request.MessageId?.ToString() ?? "[Last User Message]");
				return;
			}
			for (int num2 = num + 1; num2 < token.Messages.Count; num2++)
			{
				messagesToDelete.Add(token.Messages[num2]);
			}
			token.Messages.RemoveRange(num + 1, token.Messages.Count - num - 1);
			if (messagesToDelete.Count > 0)
			{
				if (!chatInstance.Ephemeral)
				{
					await unitOfWorkFactory.ApplyAndSaveChangesAsync((IUnitOfWork x) => x.ChatMessages.DeleteMessagesAsync(chatInstance.UserId, messagesToDelete.Select((ChatMessageData m) => m.LocalId).ToArray()), cancellationToken);
				}
				foreach (ChatMessageData item in messagesToDelete)
				{
					tunnelMessagesService.SendMessageDeleted(item);
					logger.LogInformation("Deleted message {MessageId} with text '{Text}'", item.LocalId, item.Value.Excerpt(chatInstance.Ephemeral));
				}
			}
			lastMessage = token.Messages.LastOrDefault();
		}
		if (lastMessage != null && lastMessage.Role == ChatMessageRole.User)
		{
			commandsManager.EnqueueForeground<IRetryCommand, ClientRetryMessage>(new ClientRetryMessage
			{
				SessionId = chatInstance.SessionId
			});
		}
	}
}

```

## Voxta.Core.Chats.Commands.Messages\SpeechOnlyCommand.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Common;
using Voxta.Core.Chats.Objects.Characters;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.ScopedServices;
using Voxta.Core.CommandsProcessing;

namespace Voxta.Core.Chats.Commands.Messages;

public class SpeechOnlyCommand(ChatInstance chatInstance, IScriptedSpeechService scriptedSpeechService, ILogger<CreateForegroundMessageCommand> logger) : ISpeechOnlyCommand, IChatForegroundCommand<SpeechOnlyRequest>, IChatCommand<SpeechOnlyRequest>, IChatCommand
{
	public async ValueTask ExecuteAsync(SpeechOnlyRequest request, CancellationToken cancellationToken)
	{
		logger.LogDebug("Executing command: {Name}", "SpeechOnlyCommand");
		CharacterInstance mainCharacter = chatInstance.GetMainCharacter();
		logger.LogInformation("{Character} (Speech Only Request): {Text}", mainCharacter.Name, request.Message.Value.Excerpt(chatInstance.Ephemeral));
		if (request.Reusable == null)
		{
			await scriptedSpeechService.SendReplyWithSpeechAsync(mainCharacter, request.Message);
		}
		else
		{
			await scriptedSpeechService.SendReusableReplyWithSpeechAsync(request.Reusable, mainCharacter, request.Message);
		}
	}
}

```

## Voxta.Core.Chats.Commands.Messages\SpeechOnlyRequest.cs
```csharp
using Voxta.Abstractions.Model;

namespace Voxta.Core.Chats.Commands.Messages;

public class SpeechOnlyRequest
{
	public string? Reusable { get; init; }

	public required ChatMessageData Message { get; init; }
}

```

## Voxta.Core.Chats.Commands.Messages\SummarizeCommand.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Voxta.Core.Chats.ScopedServices;
using Voxta.Core.CommandsProcessing;

namespace Voxta.Core.Chats.Commands.Messages;

public class SummarizeCommand(IChatSummarizationPassService chatSummarizationPassService) : ISummarizeCommand, IChatForegroundCommand<SummarizeRequest>, IChatCommand<SummarizeRequest>, IChatCommand
{
	public async ValueTask ExecuteAsync(SummarizeRequest request, CancellationToken cancellationToken)
	{
		await chatSummarizationPassService.SummarizeNowAsync(force: true, request.All, cancellationToken);
	}
}

```

## Voxta.Core.Chats.Commands.Messages\SummarizeRequest.cs
```csharp
namespace Voxta.Core.Chats.Commands.Messages;

public class SummarizeRequest
{
	public bool All { get; init; }
}

```

## Voxta.Core.Chats.Commands.Messages\UpdateExistingMessageCommand.cs
```csharp
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Utils;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.ScopedServices;
using Voxta.Core.CommandsProcessing;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Commands.Messages;

public class UpdateExistingMessageCommand(ChatInstance chatInstance, IChatMessageFactory chatMessageFactory, ITunnelMessagesService tunnelMessagesService, IChatCommandsManager chatCommandsManager, ILogger<UpdateExistingMessageCommand> logger) : IUpdateExistingMessageCommand, IChatInputCommand<ClientUpdateMessage>, IChatCommand<ClientUpdateMessage>, IChatCommand
{
	public async ValueTask ExecuteAsync(ClientUpdateMessage request, CancellationToken cancellationToken)
	{
		logger.LogDebug("Executing command: {Name}", "UpdateExistingMessageCommand");
		await using IChatInstanceMessagesWriteToken token = await chatInstance.GetMessagesWriteTokenAsync(cancellationToken);
		ChatMessageData message = token.Messages.FirstOrDefault((ChatMessageData m) => m.LocalId == request.MessageId);
		if (message == null)
		{
			logger.LogWarning("Could not update message {MessageId} because it was not found in the message history", request.MessageId);
			return;
		}
		if (string.IsNullOrEmpty(request.Text) && !message.HasAttachments())
		{
			chatCommandsManager.EnqueueInput<IDeleteMessageCommand, ClientDeleteMessageMessage>(new ClientDeleteMessageMessage
			{
				SessionId = request.SessionId,
				MessageId = request.MessageId
			});
			return;
		}
		string original = message.Value;
		await chatMessageFactory.UpdateMessageTextAndTokensAndSaveAsync(message, request.Text ?? message.Value, cancellationToken);
		logger.LogInformation("Updated message {MessageId} from '{From}' to '{To}'", request.MessageId, original, request.Text);
		tunnelMessagesService.SendMessageUpdated(message);
	}
}

```

## Voxta.Core.Chats.Commands.Participants\AddParticipantCommand.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Repositories;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Core.Chats.Objects;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.Sessions;
using Voxta.Core.CommandsProcessing;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Commands.Participants;

public class AddParticipantCommand : ParticipantsCommandBase, IAddParticipantCommand, IChatInputCommand<ClientAddChatParticipantMessage>, IChatCommand<ClientAddChatParticipantMessage>, IChatCommand
{
	public AddParticipantCommand(ChatInstance chatInstance, IUserConnectionTunnel tunnel, IChatCommandsManager commandsManager, IChatObjectInstanceFactory chatObjectInstanceFactory, IChatTextProcessor chatTextProcessor, IChatSessionServices chatSessionServices, IUnitOfWorkFactory unitOfWorkFactory, ISpecialMessageFormatter specialMessageFormatter, IActionScriptEngine scriptEngine, ILogger<AddParticipantCommand> logger)
	{
		_003Clogger_003EP = logger;
		base._002Ector(chatInstance, tunnel, commandsManager, chatObjectInstanceFactory, chatTextProcessor, chatSessionServices, unitOfWorkFactory, specialMessageFormatter, scriptEngine, _003Clogger_003EP);
	}

	public ValueTask ExecuteAsync(ClientAddChatParticipantMessage request, CancellationToken cancellationToken)
	{
		_003Clogger_003EP.LogDebug("Executing command: {Name}", "AddParticipantCommand");
		return AddParticipantAsync(request, cancellationToken);
	}
}

```

## Voxta.Core.Chats.Commands.Participants\IAddParticipantCommand.cs
```csharp
using Voxta.Core.CommandsProcessing;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Commands.Participants;

public interface IAddParticipantCommand : IChatInputCommand<ClientAddChatParticipantMessage>, IChatCommand<ClientAddChatParticipantMessage>, IChatCommand
{
}

```

## Voxta.Core.Chats.Commands.Participants\IRemoveParticipantCommand.cs
```csharp
using Voxta.Core.CommandsProcessing;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Commands.Participants;

public interface IRemoveParticipantCommand : IChatInputCommand<ClientRemoveChatParticipantMessage>, IChatCommand<ClientRemoveChatParticipantMessage>, IChatCommand
{
}

```

## Voxta.Core.Chats.Commands.Participants\ParticipantsCommandBase.cs
```csharp
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Repositories;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Core.Chats.Commands.Context;
using Voxta.Core.Chats.Commands.Messages;
using Voxta.Core.Chats.Objects;
using Voxta.Core.Chats.Objects.Characters;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.Sessions;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ClientMessages;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.Commands.Participants;

public abstract class ParticipantsCommandBase(ChatInstance chatInstance, IUserConnectionTunnel tunnel, IChatCommandsManager commandsManager, IChatObjectInstanceFactory chatObjectInstanceFactory, IChatTextProcessor chatTextProcessor, IChatSessionServices chatSessionServices, IUnitOfWorkFactory unitOfWorkFactory, ISpecialMessageFormatter specialMessageFormatter, IActionScriptEngine scriptEngine, ILogger logger)
{
	protected async ValueTask AddParticipantAsync(ClientAddChatParticipantMessage addChatParticipantMessage, CancellationToken cancellationToken)
	{
		CharacterInstance character = chatInstance.Characters.FirstOrDefault((CharacterInstance c) => c.Id == addChatParticipantMessage.CharacterId);
		Voxta.Abstractions.Model.Chat chat = chatInstance.Chat;
		if (character == null)
		{
			character = await chatObjectInstanceFactory.CreateCharacterAsync(chatInstance.UserId, chatInstance.Chat, addChatParticipantMessage.CharacterId, chatInstance.Scenario.SourceScenario.MemoryBooks, chatTextProcessor, chatSessionServices.TextGenRef, chatSessionServices.MemoryProviderRef, chatInstance.Scenario.SourceScenario.ChatStyle, scriptEngine, cancellationToken);
			chatInstance.Characters.Add(character);
			if (!string.IsNullOrEmpty(character.Context))
			{
				await using (IChatInstanceContextWriteToken chatInstanceContextWriteToken = await chatInstance.GetContextWriteTokenAsync(cancellationToken))
				{
					chatInstanceContextWriteToken.Contexts.Add(character.ContextKey, new List<IContextDefinitionInstance>(1) { chatObjectInstanceFactory.CreateContext(ContextDefinition.Single(character.Context), 0) });
				}
				commandsManager.EnqueueInput<IPublishContextCommand, PublishContextRequest>(new PublishContextRequest());
			}
		}
		if (!string.IsNullOrEmpty(addChatParticipantMessage.Role))
		{
			if (chat.Roles.TryGetValue(addChatParticipantMessage.Role, out ChatScenarioRole role))
			{
				if (role.CharacterId.HasValue && role.CharacterId != character.Id)
				{
					await RemoveParticipant(new ClientRemoveChatParticipantMessage
					{
						SessionId = chatInstance.SessionId,
						CharacterId = role.CharacterId.Value
					}, cancellationToken);
				}
				role.CharacterId = character.Id;
			}
			else
			{
				chat.Roles[addChatParticipantMessage.Role] = new ChatScenarioRole
				{
					CharacterId = character.Id
				};
			}
			character.ScenarioRole = addChatParticipantMessage.Role;
		}
		chatInstance.Scenario.UpdateCharacters(chatInstance.Chat, chatInstance.Characters);
		chat.Characters.Add(character.Id);
		if (!chat.Ephemeral)
		{
			await unitOfWorkFactory.ApplyAndSaveChangesAsync((IUnitOfWork x) => x.Chats.UpdateAsync(chat), cancellationToken);
		}
		DispatchUpdatedParticipantsList();
		logger.LogInformation("Added character {CharacterId} to the chat", addChatParticipantMessage.CharacterId);
		if (character.ScenarioRole == null && chatInstance.ChatFlow == ChatFlowModes.Chat)
		{
			string text = specialMessageFormatter.ChatMemberAdded(chatInstance.User.Name, character.Name);
			commandsManager.EnqueueForeground<ICreateForegroundMessageCommand, CreateForegroundMessageRequest>(new CreateForegroundMessageRequest
			{
				Text = text,
				Role = ChatMessageRole.Event,
				Character = chatInstance.Narrator
			});
		}
	}

	protected async ValueTask RemoveParticipant(ClientRemoveChatParticipantMessage removeChatParticipantMessage, CancellationToken cancellationToken)
	{
		CharacterInstance characterToRemove = chatInstance.Characters.FirstOrDefault((CharacterInstance c) => c.Id == removeChatParticipantMessage.CharacterId);
		if (characterToRemove == null)
		{
			return;
		}
		string message = specialMessageFormatter.ChatMemberRemoved(chatInstance.User.Name, characterToRemove.Name);
		chatInstance.Characters.Remove(characterToRemove);
		Voxta.Abstractions.Model.Chat chat = chatInstance.Chat;
		chat.Characters.Remove(characterToRemove.Id);
		var (text2, chatScenarioRole2) = (KeyValuePair<string, ChatScenarioRole>)(ref chat.Roles.FirstOrDefault<KeyValuePair<string, ChatScenarioRole>>((KeyValuePair<string, ChatScenarioRole> x) => x.Value.CharacterId == characterToRemove.Id));
		if (text2 != null)
		{
			chatScenarioRole2.CharacterId = null;
			chat.Roles[text2] = chatScenarioRole2;
		}
		chatInstance.Scenario.UpdateCharacters(chat, chatInstance.Characters);
		if (!chat.Ephemeral)
		{
			await unitOfWorkFactory.ApplyAndSaveChangesAsync((IUnitOfWork x) => x.Chats.UpdateAsync(chat), cancellationToken);
		}
		if (!string.IsNullOrEmpty(characterToRemove.Context))
		{
			await using (IChatInstanceContextWriteToken chatInstanceContextWriteToken = await chatInstance.GetContextWriteTokenAsync(cancellationToken))
			{
				chatInstanceContextWriteToken.Contexts.Remove(characterToRemove.ContextKey);
			}
			commandsManager.EnqueueInput<IPublishContextCommand, PublishContextRequest>(new PublishContextRequest());
		}
		DispatchUpdatedParticipantsList();
		logger.LogInformation("Removed character {CharacterId} from chat participants", removeChatParticipantMessage.CharacterId);
		if (characterToRemove.ScenarioRole == null && chatInstance.ChatFlow == ChatFlowModes.Chat)
		{
			commandsManager.EnqueueForeground<ICreateForegroundMessageCommand, CreateForegroundMessageRequest>(new CreateForegroundMessageRequest
			{
				Text = message,
				Role = ChatMessageRole.Event,
				Character = chatInstance.Narrator
			});
		}
	}

	private void DispatchUpdatedParticipantsList()
	{
		tunnel.Send(new ServerChatParticipantsUpdatedMessage
		{
			SessionId = chatInstance.SessionId,
			Characters = chatInstance.Characters.Select((CharacterInstance x) => new ChatParticipantInfo
			{
				Id = x.Id,
				Name = x.Name,
				ThumbnailUrl = x.ThumbnailUrl,
				ScenarioRole = chatInstance.Chat.Roles.FirstOrDefault<KeyValuePair<string, ChatScenarioRole>>((KeyValuePair<string, ChatScenarioRole> r) => r.Value.CharacterId == x.Id).Key
			}).ToArray()
		});
	}
}

```

## Voxta.Core.Chats.Commands.Participants\RemoveParticipantCommand.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Repositories;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Core.Chats.Objects;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.Sessions;
using Voxta.Core.CommandsProcessing;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Commands.Participants;

public class RemoveParticipantCommand : ParticipantsCommandBase, IRemoveParticipantCommand, IChatInputCommand<ClientRemoveChatParticipantMessage>, IChatCommand<ClientRemoveChatParticipantMessage>, IChatCommand
{
	public RemoveParticipantCommand(ChatInstance chatInstance, IUserConnectionTunnel tunnel, IChatCommandsManager commandsManager, IChatObjectInstanceFactory chatObjectInstanceFactory, IChatTextProcessor chatTextProcessor, IChatSessionServices chatSessionServices, IUnitOfWorkFactory unitOfWorkFactory, ISpecialMessageFormatter specialMessageFormatter, IActionScriptEngine scriptEngine, ILogger<RemoveParticipantCommand> logger)
	{
		_003Clogger_003EP = logger;
		base._002Ector(chatInstance, tunnel, commandsManager, chatObjectInstanceFactory, chatTextProcessor, chatSessionServices, unitOfWorkFactory, specialMessageFormatter, scriptEngine, _003Clogger_003EP);
	}

	public ValueTask ExecuteAsync(ClientRemoveChatParticipantMessage request, CancellationToken cancellationToken)
	{
		_003Clogger_003EP.LogDebug("Executing command: {Name}", "RemoveParticipantCommand");
		return RemoveParticipant(request, cancellationToken);
	}
}

```

## Voxta.Core.Chats.Commands.Reply\GenerateReplyCommand.cs
```csharp
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Runtime.ExceptionServices;
using System.Threading;
using System.Threading.Tasks;
using System.Threading.Tasks.Sources;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.DependencyInjection;
using Voxta.Abstractions.Diagnostics;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Prompting;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Abstractions.Services.ActionInference;
using Voxta.Abstractions.Services.ChatAugmentations;
using Voxta.Abstractions.Services.Memory;
using Voxta.Abstractions.Services.TextGen;
using Voxta.Abstractions.Templating;
using Voxta.Abstractions.Utils;
using Voxta.Common;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.ScopedServices;
using Voxta.Core.Chats.Sessions;
using Voxta.Core.CommandsProcessing;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.Commands.Reply;

public class GenerateReplyCommand(ChatInstance chatInstance, IUserConnectionTunnel tunnel, IChatMessageFactory chatMessageFactory, IPromptBuilder promptBuilder, IChatSessionGeneratingState generatingState, IContinuationService continuationService, IGenerateReplyWithSpeechService generateReplyWithSpeechService, ITranscriptionService transcriptionService, IGenerateActionInferenceService generateActionInferenceService, IProcessScenarioEventService processScenarioEventService, IChatFlowService chatFlowService, IReplyChunksService replyChunksService, IChatSummarizationPassService chatSummarizationPassService, IChatConfigurationService chatConfigurationService, IDynamicServiceAccessor<ITextGenService> textGenAccessor, IActionScriptsService actionScriptsService, IChatContinuousStorageService chatContinuousStorageService, IChatContextService chatContextService, IChatAugmentationsServiceInstance augmentations, IDiagnosticsContext diagnosticsContext, ITemplateSystem templateSystem, ILogger<GenerateReplyCommand> logger) : IGenerateReplyCommand, IChatForegroundCommand<GenerateReplyRequest>, IChatCommand<GenerateReplyRequest>, IChatCommand
{
	[CompilerGenerated]
	private sealed class _003CGenerateContent_003Ed__32 : IAsyncEnumerable<LLMOutputToken>, IAsyncEnumerator<LLMOutputToken>, IAsyncDisposable, IValueTaskSource<bool>, IValueTaskSource, IAsyncStateMachine
	{
		public int _003C_003E1__state;

		public AsyncIteratorMethodBuilder _003C_003Et__builder;

		public ManualResetValueTaskSourceCore<bool> _003C_003Ev__promiseOfValueOrEnd;

		private LLMOutputToken _003C_003E2__current;

		private bool _003C_003Ew__disposeMode;

		private CancellationTokenSource _003C_003Ex__combinedTokens;

		private int _003C_003El__initialThreadId;

		public GenerateReplyCommand _003C_003E4__this;

		private ICharacterInferenceData character;

		public ICharacterInferenceData _003C_003E3__character;

		private string characterResponsePrefix;

		public string _003C_003E3__characterResponsePrefix;

		private CancellationToken cancellationToken;

		public CancellationToken _003C_003E3__cancellationToken;

		private ValueTaskAwaiter<string?> _003C_003Eu__1;

		private IAsyncEnumerator<LLMOutputToken> _003C_003E7__wrap1;

		private object _003C_003E7__wrap2;

		private int _003C_003E7__wrap3;

		private ValueTaskAwaiter<bool> _003C_003Eu__2;

		private ValueTaskAwaiter _003C_003Eu__3;

		LLMOutputToken IAsyncEnumerator<LLMOutputToken>.Current
		{
			[DebuggerHidden]
			get
			{
				return _003C_003E2__current;
			}
		}

		[DebuggerHidden]
		public _003CGenerateContent_003Ed__32(int _003C_003E1__state)
		{
			_003C_003Et__builder = AsyncIteratorMethodBuilder.Create();
			this._003C_003E1__state = _003C_003E1__state;
			_003C_003El__initialThreadId = Environment.CurrentManagedThreadId;
		}

		private void MoveNext()
		{
			int num = _003C_003E1__state;
			GenerateReplyCommand generateReplyCommand = _003C_003E4__this;
			try
			{
				string prefix;
				ValueTaskAwaiter<string> awaiter2;
				ValueTaskAwaiter awaiter;
				IAsyncEnumerable<LLMOutputToken> asyncEnumerable;
				switch (num)
				{
				default:
					if (!_003C_003Ew__disposeMode)
					{
						num = (_003C_003E1__state = -1);
						ChatStyles chatStyle = generateReplyCommand.chatInstance.GetChatStyle(character.ChatStyle);
						prefix = characterResponsePrefix;
						if (!generateReplyCommand.chatInstance.ReplyPrefix.IsEmpty)
						{
							ITemplateModel model = generateReplyCommand.templateSystem.CreateModel();
							string text = generateReplyCommand.chatInstance.ReplyPrefix.Render(model);
							if (text != "")
							{
								if (!string.IsNullOrEmpty(characterResponsePrefix))
								{
									generateReplyCommand.logger.LogWarning("Dropped character prefix '{CharacterResponsePrefix}' because a chat prefix is configured", characterResponsePrefix);
								}
								prefix = text;
							}
						}
						else
						{
							if (chatStyle != ChatStyles.Assistant)
							{
								_003C_003E2__current = null;
								awaiter2 = generateReplyCommand.augmentations.ContributePrefix(character, ChatMessageRole.Assistant, characterResponsePrefix, force: false, cancellationToken).GetAwaiter();
								if (!awaiter2.IsCompleted)
								{
									num = (_003C_003E1__state = 0);
									_003C_003Eu__1 = awaiter2;
									_003CGenerateContent_003Ed__32 stateMachine = this;
									_003C_003Et__builder.AwaitUnsafeOnCompleted(ref awaiter2, ref stateMachine);
									return;
								}
								goto IL_0195;
							}
							if (!string.IsNullOrEmpty(characterResponsePrefix))
							{
								generateReplyCommand.logger.LogWarning("Dropped character prefix '{CharacterResponsePrefix}' because the chat is for assistants", characterResponsePrefix);
							}
							prefix = null;
						}
						goto IL_019d;
					}
					goto end_IL_000e;
				case 0:
					awaiter2 = _003C_003Eu__1;
					_003C_003Eu__1 = default(ValueTaskAwaiter<string>);
					num = (_003C_003E1__state = -1);
					goto IL_0195;
				case -4:
				case 1:
					try
					{
						ValueTaskAwaiter<bool> awaiter3;
						if (num != -4)
						{
							if (num != 1)
							{
								goto IL_0241;
							}
							awaiter3 = _003C_003Eu__2;
							_003C_003Eu__2 = default(ValueTaskAwaiter<bool>);
							num = (_003C_003E1__state = -1);
							goto IL_02ac;
						}
						num = (_003C_003E1__state = -1);
						if (!_003C_003Ew__disposeMode)
						{
							goto IL_0241;
						}
						goto end_IL_01f9;
						IL_0241:
						_003C_003E2__current = null;
						awaiter3 = _003C_003E7__wrap1.MoveNextAsync().GetAwaiter();
						if (!awaiter3.IsCompleted)
						{
							num = (_003C_003E1__state = 1);
							_003C_003Eu__2 = awaiter3;
							_003CGenerateContent_003Ed__32 stateMachine = this;
							_003C_003Et__builder.AwaitUnsafeOnCompleted(ref awaiter3, ref stateMachine);
							return;
						}
						goto IL_02ac;
						IL_02ac:
						if (awaiter3.GetResult())
						{
							LLMOutputToken current = _003C_003E7__wrap1.Current;
							_003C_003E2__current = current;
							num = (_003C_003E1__state = -4);
							goto IL_0426;
						}
						end_IL_01f9:;
					}
					catch (object obj)
					{
						_003C_003E7__wrap2 = obj;
					}
					if (_003C_003E7__wrap1 == null)
					{
						break;
					}
					_003C_003E2__current = null;
					awaiter = _003C_003E7__wrap1.DisposeAsync().GetAwaiter();
					if (!awaiter.IsCompleted)
					{
						num = (_003C_003E1__state = 2);
						_003C_003Eu__3 = awaiter;
						_003CGenerateContent_003Ed__32 stateMachine = this;
						_003C_003Et__builder.AwaitUnsafeOnCompleted(ref awaiter, ref stateMachine);
						return;
					}
					goto IL_0339;
				case 2:
					{
						awaiter = _003C_003Eu__3;
						_003C_003Eu__3 = default(ValueTaskAwaiter);
						num = (_003C_003E1__state = -1);
						goto IL_0339;
					}
					IL_019d:
					asyncEnumerable = generateReplyCommand.textGenAccessor.GetCurrent().GenerateReplyAsync(generateReplyCommand.chatInstance, character, generateReplyCommand.promptBuilder, prefix, character.GenerateConstraintRequest, cancellationToken);
					_003C_003E7__wrap1 = asyncEnumerable.GetAsyncEnumerator();
					_003C_003E7__wrap2 = null;
					_003C_003E7__wrap3 = 0;
					goto case -4;
					IL_0339:
					awaiter.GetResult();
					break;
					IL_0195:
					prefix = awaiter2.GetResult();
					goto IL_019d;
				}
				object obj2 = _003C_003E7__wrap2;
				if (obj2 != null)
				{
					ExceptionDispatchInfo.Capture((obj2 as Exception) ?? throw obj2).Throw();
				}
				_ = _003C_003E7__wrap3;
				if (!_003C_003Ew__disposeMode)
				{
					_003C_003E7__wrap2 = null;
					_003C_003E7__wrap1 = null;
				}
				end_IL_000e:;
			}
			catch (Exception exception)
			{
				_003C_003E1__state = -2;
				_003C_003E7__wrap1 = null;
				_003C_003E7__wrap2 = null;
				if (_003C_003Ex__combinedTokens != null)
				{
					_003C_003Ex__combinedTokens.Dispose();
					_003C_003Ex__combinedTokens = null;
				}
				_003C_003E2__current = null;
				_003C_003Et__builder.Complete();
				_003C_003Ev__promiseOfValueOrEnd.SetException(exception);
				return;
			}
			_003C_003E1__state = -2;
			_003C_003E7__wrap1 = null;
			_003C_003E7__wrap2 = null;
			if (_003C_003Ex__combinedTokens != null)
			{
				_003C_003Ex__combinedTokens.Dispose();
				_003C_003Ex__combinedTokens = null;
			}
			_003C_003E2__current = null;
			_003C_003Et__builder.Complete();
			_003C_003Ev__promiseOfValueOrEnd.SetResult(result: false);
			return;
			IL_0426:
			_003C_003Ev__promiseOfValueOrEnd.SetResult(result: true);
		}

		void IAsyncStateMachine.MoveNext()
		{
			//ILSpy generated this explicit interface implementation from .override directive in MoveNext
			this.MoveNext();
		}

		[DebuggerHidden]
		private void SetStateMachine(IAsyncStateMachine stateMachine)
		{
		}

		void IAsyncStateMachine.SetStateMachine(IAsyncStateMachine stateMachine)
		{
			//ILSpy generated this explicit interface implementation from .override directive in SetStateMachine
			this.SetStateMachine(stateMachine);
		}

		[DebuggerHidden]
		IAsyncEnumerator<LLMOutputToken> IAsyncEnumerable<LLMOutputToken>.GetAsyncEnumerator(CancellationToken cancellationToken = default(CancellationToken))
		{
			_003CGenerateContent_003Ed__32 _003CGenerateContent_003Ed__;
			if (_003C_003E1__state == -2 && _003C_003El__initialThreadId == Environment.CurrentManagedThreadId)
			{
				_003C_003E1__state = -3;
				_003C_003Et__builder = AsyncIteratorMethodBuilder.Create();
				_003C_003Ew__disposeMode = false;
				_003CGenerateContent_003Ed__ = this;
			}
			else
			{
				_003CGenerateContent_003Ed__ = new _003CGenerateContent_003Ed__32(-3)
				{
					_003C_003E4__this = _003C_003E4__this
				};
			}
			_003CGenerateContent_003Ed__.characterResponsePrefix = _003C_003E3__characterResponsePrefix;
			_003CGenerateContent_003Ed__.character = _003C_003E3__character;
			if (_003C_003E3__cancellationToken.Equals(default(CancellationToken)))
			{
				_003CGenerateContent_003Ed__.cancellationToken = cancellationToken;
			}
			else if (cancellationToken.Equals(_003C_003E3__cancellationToken) || cancellationToken.Equals(default(CancellationToken)))
			{
				_003CGenerateContent_003Ed__.cancellationToken = _003C_003E3__cancellationToken;
			}
			else
			{
				_003C_003Ex__combinedTokens = CancellationTokenSource.CreateLinkedTokenSource(_003C_003E3__cancellationToken, cancellationToken);
				_003CGenerateContent_003Ed__.cancellationToken = _003C_003Ex__combinedTokens.Token;
			}
			return _003CGenerateContent_003Ed__;
		}

		[DebuggerHidden]
		ValueTask<bool> IAsyncEnumerator<LLMOutputToken>.MoveNextAsync()
		{
			if (_003C_003E1__state == -2)
			{
				return default(ValueTask<bool>);
			}
			_003C_003Ev__promiseOfValueOrEnd.Reset();
			_003CGenerateContent_003Ed__32 stateMachine = this;
			_003C_003Et__builder.MoveNext(ref stateMachine);
			short version = _003C_003Ev__promiseOfValueOrEnd.Version;
			if (_003C_003Ev__promiseOfValueOrEnd.GetStatus(version) == ValueTaskSourceStatus.Succeeded)
			{
				return new ValueTask<bool>(_003C_003Ev__promiseOfValueOrEnd.GetResult(version));
			}
			return new ValueTask<bool>(this, version);
		}

		[DebuggerHidden]
		bool IValueTaskSource<bool>.GetResult(short token)
		{
			return _003C_003Ev__promiseOfValueOrEnd.GetResult(token);
		}

		[DebuggerHidden]
		ValueTaskSourceStatus IValueTaskSource<bool>.GetStatus(short token)
		{
			return _003C_003Ev__promiseOfValueOrEnd.GetStatus(token);
		}

		[DebuggerHidden]
		void IValueTaskSource<bool>.OnCompleted(Action<object?> continuation, object? state, short token, ValueTaskSourceOnCompletedFlags flags)
		{
			_003C_003Ev__promiseOfValueOrEnd.OnCompleted(continuation, state, token, flags);
		}

		[DebuggerHidden]
		void IValueTaskSource.GetResult(short token)
		{
			_003C_003Ev__promiseOfValueOrEnd.GetResult(token);
		}

		[DebuggerHidden]
		ValueTaskSourceStatus IValueTaskSource.GetStatus(short token)
		{
			return _003C_003Ev__promiseOfValueOrEnd.GetStatus(token);
		}

		[DebuggerHidden]
		void IValueTaskSource.OnCompleted(Action<object?> continuation, object? state, short token, ValueTaskSourceOnCompletedFlags flags)
		{
			_003C_003Ev__promiseOfValueOrEnd.OnCompleted(continuation, state, token, flags);
		}

		[DebuggerHidden]
		ValueTask IAsyncDisposable.DisposeAsync()
		{
			if (_003C_003E1__state >= -1)
			{
				throw new NotSupportedException();
			}
			if (_003C_003E1__state == -2)
			{
				return default(ValueTask);
			}
			_003C_003Ew__disposeMode = true;
			_003C_003Ev__promiseOfValueOrEnd.Reset();
			_003CGenerateContent_003Ed__32 stateMachine = this;
			_003C_003Et__builder.MoveNext(ref stateMachine);
			return new ValueTask(this, _003C_003Ev__promiseOfValueOrEnd.Version);
		}
	}

	public async ValueTask ExecuteAsync(GenerateReplyRequest request, CancellationToken cancellationToken)
	{
		logger.LogDebug("Executing command: {Name}", "GenerateReplyCommand");
		continuationService.CancelContinuation();
		Guid replyMessageId = chatMessageFactory.CreateMessageId();
		diagnosticsContext.Augment((DiagnosticsContextValues c) => c with
		{
			MessageId = replyMessageId
		});
		MessageGeneratingToken replyToken = generatingState.GenerateReplyBegin(replyMessageId);
		using CancellationTokenSource replyCts = CancellationTokenSource.CreateLinkedTokenSource(cancellationToken, replyToken.Abort);
		CancellationToken replyAbort = replyCts.Token;
		try
		{
			await using (chatContinuousStorageService.Begin())
			{
				await ExecuteInternalAsync(request, replyMessageId, cancellationToken, replyAbort);
			}
		}
		catch (OperationCanceledException exception)
		{
			if (replyAbort.IsCancellationRequested)
			{
				logger.LogWarning("Reply was canceled by user");
			}
			else
			{
				logger.LogWarning(exception, "Reply was canceled");
			}
			if (!cancellationToken.IsCancellationRequested)
			{
				tunnel.Send(new ServerReplyCancelledMessage
				{
					SessionId = chatInstance.SessionId,
					MessageId = replyMessageId
				});
			}
		}
		catch (VoxtaChatSessionException ex)
		{
			logger.LogError(ex, "Failed to process user message");
			tunnel.Send(new ServerChatSessionErrorMessage(chatInstance.SessionId, ex)
			{
				Retry = ex.CanRetry
			});
		}
		catch (Exception ex2)
		{
			logger.LogError(ex2, "Failed to process user message");
			tunnel.Send(new ServerChatSessionErrorMessage(chatInstance.SessionId, ex2));
		}
		finally
		{
			generatingState.GenerateReplyEnd(replyToken);
		}
	}

	private async ValueTask ExecuteInternalAsync(GenerateReplyRequest request, Guid replyMessageId, CancellationToken sessionAbort, CancellationToken replyAbort)
	{
		replyAbort.ThrowIfCancellationRequested();
		ChatMessageData replyTo = await chatInstance.GetOneMessageAsync((IReadOnlyList<ChatMessageData> msgs) => msgs.LastOrDefault(delegate(ChatMessageData x)
		{
			ChatMessageRole role = x.Role;
			return (((uint)(role - 2) <= 1u || role == ChatMessageRole.Event) ? true : false) && !string.IsNullOrEmpty(x.Value);
		}), replyAbort);
		if (replyTo != null)
		{
			chatContextService.ExpireFlagsAsync(replyTo.ConversationIndex);
		}
		ICharacterInstanceEditable o;
		ICharacterInstanceEditable characterInstanceEditable = (request.CharacterId.HasValue ? chatInstance.GetCharacter(request.CharacterId.Value) : (chatFlowService.TryGetForced(out o) ? o : ((request.CharacterResponsePrefix != null) ? chatInstance.GetMainCharacter() : ((replyTo == null) ? chatInstance.GetMainCharacter() : (await chatFlowService.GetNextCharacterAsync(replyTo, request.AllowUser, replyAbort))))));
		if (characterInstanceEditable == null && !request.AllowUser)
		{
			characterInstanceEditable = chatInstance.GetMainCharacter();
		}
		if (characterInstanceEditable == null || !characterInstanceEditable.Enabled)
		{
			continuationService.CancelContinuation();
			if (chatInstance.GetCharacters().Count > 1)
			{
				logger.LogInformation("Waiting for {User}'s reply...", chatInstance.User.Name);
			}
			await transcriptionService.StartTranscriptionAsync("ChatFlow WaitingForUser", sessionAbort);
			tunnel.Send(new ServerChatFlowMessage
			{
				SessionId = chatInstance.SessionId,
				State = ChatFlowStates.WaitingForUserInput
			});
		}
		else
		{
			IReplyChunksHandler replyChunksHandler = (characterInstanceEditable.CanReply ? replyChunksService.CreateReplyChunksHandler(characterInstanceEditable.Id, replyMessageId, characterInstanceEditable.Role) : NullReplyChunksHandler.Instance);
			try
			{
				await HandleReply(request, characterInstanceEditable, replyChunksHandler, replyMessageId, replyTo, sessionAbort, replyAbort);
			}
			catch (OperationCanceledException) when (!replyAbort.IsCancellationRequested)
			{
				replyChunksHandler.Dispose();
			}
			catch
			{
				replyChunksHandler.Dispose();
				throw;
			}
			chatSummarizationPassService.ScheduleSummarize(force: false, sessionAbort);
		}
	}

	private async Task HandleReply(GenerateReplyRequest request, ICharacterInstanceEditable character, IReplyChunksHandler replyChunksHandler, Guid replyMessageId, ChatMessageData? replyTo, CancellationToken sessionAbort, CancellationToken replyAbort)
	{
		NotifyProcessing(replyChunksHandler, character);
		IChatMessageFactory chatMessageFactory = chatMessageFactory;
		CancellationToken cancellationToken = sessionAbort;
		ChatMessageData placeholderMessage = await chatMessageFactory.CreateCharacterMessageAsync(replyMessageId, character, "", null, null, cancellationToken);
		if (replyTo != null)
		{
			chatContextService.ExpireFlagsAsync(placeholderMessage.ConversationIndex);
		}
		if (actionScriptsService.IsRegistered("generating"))
		{
			await actionScriptsService.RunEventAsync(new GeneratingActionScriptEvent
			{
				Character = character,
				Message = placeholderMessage
			}, placeholderMessage, character, replyAbort);
		}
		await UpdateMemoryAsync(character, placeholderMessage, sessionAbort, replyAbort);
		if (replyTo == null || replyTo.Role != ChatMessageRole.Event)
		{
			(IScenarioEventInstance, bool) tuple = await processScenarioEventService.ProcessScenarioEvent(placeholderMessage, FunctionTiming.BeforeAssistantMessage, null, replyAbort);
			if (TryHandleCancelFunction(tuple.Item1, tuple.Item2))
			{
				replyChunksHandler.Cancel();
				return;
			}
		}
		if (character.CanDoActionInference && TryHandleCancelFunction(await TryActionInferenceAsync(character, replyTo, placeholderMessage, character.ScenarioRole, FunctionTiming.BeforeAssistantMessage, replyAbort), shouldCancelReply: false))
		{
			replyChunksHandler.Cancel();
		}
		else if (character.CanReply)
		{
			if (request.Narrate == false)
			{
				throw new NotSupportedException("Character message without narration is not supported");
			}
			ChatMessageData message = await GenerateCharacterReplyWithSpeechAsync(character, replyChunksHandler, replyMessageId, replyTo?.Value, request.CharacterResponsePrefix, sessionAbort, replyAbort);
			if (message != null && actionScriptsService.IsRegistered("generatingComplete"))
			{
				await actionScriptsService.RunEventAsync(new GeneratingCompleteActionScriptEvent
				{
					Character = character,
					Message = message
				}, message, character, replyAbort);
			}
			if (message == null || replyAbort.IsCancellationRequested)
			{
				replyChunksHandler.Cancel();
				return;
			}
			if (TryHandleCancelFunction((await processScenarioEventService.ProcessScenarioEvent(message, FunctionTiming.AfterAssistantMessage, null, replyAbort)).Item1, shouldCancelReply: false))
			{
				replyChunksHandler.Cancel();
				return;
			}
			if (request.TriggerReply != false)
			{
				if (chatInstance.ChatFlow == ChatFlowModes.Story)
				{
					continuationService.ScheduleContinuation(message, allowUser: false);
				}
				else if (chatInstance.Characters.Count > 1)
				{
					continuationService.ScheduleContinuation(message, allowUser: true);
				}
			}
			if (character.CanDoActionInference)
			{
				await TryActionInferenceDeferredAsync(character, message, replyAbort);
			}
		}
		else if (character.CanDoActionInference)
		{
			IChatMessageFactory chatMessageFactory2 = chatMessageFactory;
			cancellationToken = replyAbort;
			ChatMessageData message = await chatMessageFactory2.CreateCharacterMessageAsync(replyMessageId, character, "", null, null, cancellationToken);
			await chatMessageFactory.InsertMessageInHistoryAndSaveAsync(message, sessionAbort);
			await TryActionInferenceAsync(character, replyTo, placeholderMessage, character.ScenarioRole, FunctionTiming.AfterAssistantMessage, replyAbort);
		}
		else
		{
			logger.LogWarning("Reply requested with both CanDoReply false and CanDoActionInference false, nothing will be generated");
		}
	}

	private void NotifyProcessing(IReplyChunksHandler replyChunksHandler, ICharacterInstanceEditable character)
	{
		if (!character.CanReply)
		{
			tunnel.Send(new ServerChatFlowMessage
			{
				SessionId = chatInstance.SessionId,
				State = ChatFlowStates.WaitingForUserInput
			});
		}
		else
		{
			tunnel.Send(new ServerChatFlowMessage
			{
				SessionId = chatInstance.SessionId,
				State = ChatFlowStates.ProcessingAssistantReply
			});
			string thinkingSpeechUrl = ((character.CanReply && chatConfigurationService.SpeechEnabled && character.ThinkingSpeechUrls.Length != 0) ? character.ThinkingSpeechUrls[Random.Shared.Next(character.ThinkingSpeechUrls.Length)] : null);
			replyChunksHandler.Generating(thinkingSpeechUrl);
		}
	}

	private async Task UpdateMemoryAsync(ICharacterInstanceEditable character, ChatMessageData message, CancellationToken sessionAbort, CancellationToken replyAbort)
	{
		await using IChatInstanceMessagesReadToken chatToken = await chatInstance.GetMessagesReadTokenAsync(sessionAbort);
		if (chatToken.Messages.Count == 0)
		{
			return;
		}
		bool memoryUpdated = false;
		await using ICharacterInstanceWriteToken characterToken = await character.GetWriteTokenAsync(sessionAbort);
		if (message.ConversationIndex > 0)
		{
			List<CharacterMemoryEntry> list = characterToken.Memories.Where((CharacterMemoryEntry m) => m.ExpireConversationIndex > 0 && m.ExpireConversationIndex < message.ConversationIndex).ToList();
			int num = 0;
			foreach (CharacterMemoryEntry item in list)
			{
				characterToken.Memories.Remove(item);
				num++;
			}
			if (num > 0)
			{
				memoryUpdated = true;
				logger.LogDebug("Expired {RemovedMemories} memories from character {CharacterId}", num, character.Id);
			}
		}
		bool flag = memoryUpdated;
		memoryUpdated = flag | await character.Memory.MemoryProviderInstance.UpdateMemoryWindowAsync(chatToken.Messages, characterToken.Memories, replyAbort);
		if (memoryUpdated)
		{
			HashSet<string> hashSet = new HashSet<string>();
			List<CharacterMemoryEntry> list2 = new List<CharacterMemoryEntry>();
			foreach (CharacterMemoryEntry memory in characterToken.Memories)
			{
				if (!hashSet.Add(memory.Memory.Text))
				{
					list2.Add(memory);
				}
			}
			foreach (CharacterMemoryEntry item2 in list2)
			{
				characterToken.Memories.Remove(item2);
				logger.LogDebug("Removed duplicate memory from character {CharacterId}: {MemoryText}", character.Id, item2.Memory.Text);
			}
		}
		if (memoryUpdated && chatInstance.InspectorEnabled)
		{
			tunnel.Send(chatInstance.CreateServerMemoryUpdatedMessage(character.Id, characterToken));
		}
	}

	private async Task<IFunctionDefinitionInstance?> TryActionInferenceAsync(ICharacterInstanceEditable character, ChatMessageData? replyTo, ChatMessageData placeholderMessage, string? role, FunctionTiming timing, CancellationToken replyAbort)
	{
		IScenarioActionInstance[] functions = await chatInstance.ResolveActionsAsync(replyTo, timing, role, replyAbort);
		if (functions.Length == 0)
		{
			return null;
		}
		IGenerateActionInferenceService generateActionInferenceService = generateActionInferenceService;
		IScenarioActionInstance[] actions = functions;
		ActionInvocation result = await generateActionInferenceService.GenerateActionInference(ActionInferenceType.CharacterAction, character, placeholderMessage, timing, actions, await chatInstance.ResolveActionsAsync(placeholderMessage, FunctionTiming.Manual, null, replyAbort), replyAbort);
		return (result != null) ? functions.FirstOrDefault((IScenarioActionInstance f) => f.Name == result.Name) : null;
	}

	private async Task TryActionInferenceDeferredAsync(ICharacterInstanceEditable character, ChatMessageData message, CancellationToken replyAbort)
	{
		IScenarioActionInstance[] functions = await chatInstance.ResolveActionsAsync(message, FunctionTiming.AfterAssistantMessage, character.ScenarioRole, replyAbort);
		if (functions.Length == 0)
		{
			return;
		}
		DiagnosticsContextValues diagnosticsContextValues = diagnosticsContext.GetCurrent();
		Task.Run(async delegate
		{
			diagnosticsContext.Restore(diagnosticsContextValues);
			IGenerateActionInferenceService generateActionInferenceService = generateActionInferenceService;
			ICharacterOrUserData owner = character;
			ChatMessageData message2 = message;
			IScenarioActionInstance[] actions = functions;
			ActionInvocation action = await generateActionInferenceService.GenerateActionInference(ActionInferenceType.CharacterAction, owner, message2, FunctionTiming.AfterAssistantMessage, actions, await chatInstance.ResolveActionsAsync(message, FunctionTiming.Manual, null, replyAbort), replyAbort);
			if (action != null)
			{
				IScenarioActionInstance scenarioActionInstance = functions.FirstOrDefault((IScenarioActionInstance f) => f.Name == action.Name);
				if (scenarioActionInstance != null && scenarioActionInstance.CancelReply)
				{
					logger.LogWarning("Cannot use cancel reply on events after assistant message");
				}
			}
		}, replyAbort).Forget(logger);
	}

	private bool TryHandleCancelFunction(IFunctionDefinitionInstance? e, bool shouldCancelReply)
	{
		if (shouldCancelReply || (e != null && e.CancelReply))
		{
			continuationService.CancelContinuation();
			return true;
		}
		return false;
	}

	private async Task<ChatMessageData?> GenerateCharacterReplyWithSpeechAsync(ICharacterInferenceData character, IReplyChunksHandler replyChunksHandler, Guid messageId, string? replyTo, string? characterResponsePrefix, CancellationToken sessionAbort, CancellationToken itemAbort)
	{
		return await generateReplyWithSpeechService.GenerateReplyWithSpeechAsync(character, replyChunksHandler, messageId, replyTo, ChatMessageRole.Assistant, (CancellationToken c) => GenerateContent(characterResponsePrefix, character, c), character.GenerateConstraintRequest.MaxSentences, null, sessionAbort, itemAbort);
	}

	[AsyncIteratorStateMachine(typeof(_003CGenerateContent_003Ed__32))]
	private IAsyncEnumerable<LLMOutputToken> GenerateContent(string? characterResponsePrefix, ICharacterInferenceData character, [EnumeratorCancellation] CancellationToken cancellationToken)
	{
		return new _003CGenerateContent_003Ed__32(-2)
		{
			_003C_003E4__this = this,
			_003C_003E3__characterResponsePrefix = characterResponsePrefix,
			_003C_003E3__character = character,
			_003C_003E3__cancellationToken = cancellationToken
		};
	}
}

```

## Voxta.Core.Chats.Commands.Reply\GenerateReplyRequest.cs
```csharp
using System;

namespace Voxta.Core.Chats.Commands.Reply;

public class GenerateReplyRequest
{
	public Guid? CharacterId { get; init; }

	public string? CharacterResponsePrefix { get; init; }

	public bool AllowUser { get; init; } = true;

	public bool? TriggerReply { get; init; }

	public bool? Narrate { get; init; }
}

```

## Voxta.Core.Chats.Commands.Reply\GenerateStoryCommand.cs
```csharp
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Runtime.CompilerServices;
using System.Runtime.ExceptionServices;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Threading.Tasks.Sources;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.DependencyInjection;
using Voxta.Abstractions.Diagnostics;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Prompting;
using Voxta.Abstractions.Services.ChatAugmentations;
using Voxta.Abstractions.Services.TextGen;
using Voxta.Abstractions.Services.VisionCapture;
using Voxta.Abstractions.Utils;
using Voxta.Common;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.ScopedServices;
using Voxta.Core.CommandsProcessing;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Commands.Reply;

public class GenerateStoryCommand(ChatInstance chatInstance, IContinuationService continuationService, IChatMessageFactory chatMessageFactory, IPromptBuilder promptBuilder, IGenerateReplyWithSpeechService generateReplyWithSpeechService, IScriptedSpeechService scriptedSpeechService, IReplyChunksService replyChunksService, IChatAugmentationsServiceInstance augmentations, IChatContextService chatContextService, ITunnelMessagesService tunnelMessagesService, IDynamicServiceAccessor<ITextGenService> textGenAccessor, IHandleAttachmentsService handleAttachmentsService, IDiagnosticsContext diagnosticsContext, IChatContinuousStorageService chatContinuousStorageService, ILogger<GenerateStoryCommand> logger) : IGenerateStoryCommand, IChatForegroundCommand<GenerateStoryRequest>, IChatCommand<GenerateStoryRequest>, IChatCommand
{
	[CompilerGenerated]
	private sealed class _003CGenerateContent_003Ed__18 : IAsyncEnumerable<LLMOutputToken>, IAsyncEnumerator<LLMOutputToken>, IAsyncDisposable, IValueTaskSource<bool>, IValueTaskSource, IAsyncStateMachine
	{
		public int _003C_003E1__state;

		public AsyncIteratorMethodBuilder _003C_003Et__builder;

		public ManualResetValueTaskSourceCore<bool> _003C_003Ev__promiseOfValueOrEnd;

		private LLMOutputToken _003C_003E2__current;

		private bool _003C_003Ew__disposeMode;

		private CancellationTokenSource _003C_003Ex__combinedTokens;

		private int _003C_003El__initialThreadId;

		public GenerateStoryCommand _003C_003E4__this;

		private ChatMessageRole role;

		public ChatMessageRole _003C_003E3__role;

		private CancellationToken cancellationToken;

		public CancellationToken _003C_003E3__cancellationToken;

		private string storyInstructions;

		public string _003C_003E3__storyInstructions;

		private GenerateConstraintRequest constraintRequest;

		public GenerateConstraintRequest _003C_003E3__constraintRequest;

		private ValueTaskAwaiter<string?> _003C_003Eu__1;

		private IAsyncEnumerator<LLMOutputToken> _003C_003E7__wrap1;

		private object _003C_003E7__wrap2;

		private int _003C_003E7__wrap3;

		private ValueTaskAwaiter<bool> _003C_003Eu__2;

		private ValueTaskAwaiter _003C_003Eu__3;

		LLMOutputToken IAsyncEnumerator<LLMOutputToken>.Current
		{
			[DebuggerHidden]
			get
			{
				return _003C_003E2__current;
			}
		}

		[DebuggerHidden]
		public _003CGenerateContent_003Ed__18(int _003C_003E1__state)
		{
			_003C_003Et__builder = AsyncIteratorMethodBuilder.Create();
			this._003C_003E1__state = _003C_003E1__state;
			_003C_003El__initialThreadId = Environment.CurrentManagedThreadId;
		}

		private void MoveNext()
		{
			int num = _003C_003E1__state;
			GenerateStoryCommand generateStoryCommand = _003C_003E4__this;
			try
			{
				ValueTaskAwaiter<string> awaiter2;
				ValueTaskAwaiter awaiter;
				string text;
				bool flag;
				IAsyncEnumerable<LLMOutputToken> asyncEnumerable;
				switch (num)
				{
				default:
					if (!_003C_003Ew__disposeMode)
					{
						num = (_003C_003E1__state = -1);
						_003C_003E2__current = null;
						awaiter2 = generateStoryCommand.augmentations.ContributePrefix(generateStoryCommand.chatInstance.Narrator, role, null, force: false, cancellationToken).GetAwaiter();
						if (!awaiter2.IsCompleted)
						{
							num = (_003C_003E1__state = 0);
							_003C_003Eu__1 = awaiter2;
							_003CGenerateContent_003Ed__18 stateMachine = this;
							_003C_003Et__builder.AwaitUnsafeOnCompleted(ref awaiter2, ref stateMachine);
							return;
						}
						goto IL_00cd;
					}
					goto end_IL_000e;
				case 0:
					awaiter2 = _003C_003Eu__1;
					_003C_003Eu__1 = default(ValueTaskAwaiter<string>);
					num = (_003C_003E1__state = -1);
					goto IL_00cd;
				case -4:
				case 1:
					try
					{
						ValueTaskAwaiter<bool> awaiter3;
						if (num != -4)
						{
							if (num != 1)
							{
								goto IL_024a;
							}
							awaiter3 = _003C_003Eu__2;
							_003C_003Eu__2 = default(ValueTaskAwaiter<bool>);
							num = (_003C_003E1__state = -1);
							goto IL_02b5;
						}
						num = (_003C_003E1__state = -1);
						if (!_003C_003Ew__disposeMode)
						{
							goto IL_024a;
						}
						goto end_IL_0202;
						IL_024a:
						_003C_003E2__current = null;
						awaiter3 = _003C_003E7__wrap1.MoveNextAsync().GetAwaiter();
						if (!awaiter3.IsCompleted)
						{
							num = (_003C_003E1__state = 1);
							_003C_003Eu__2 = awaiter3;
							_003CGenerateContent_003Ed__18 stateMachine = this;
							_003C_003Et__builder.AwaitUnsafeOnCompleted(ref awaiter3, ref stateMachine);
							return;
						}
						goto IL_02b5;
						IL_02b5:
						if (awaiter3.GetResult())
						{
							LLMOutputToken current = _003C_003E7__wrap1.Current;
							_003C_003E2__current = current;
							num = (_003C_003E1__state = -4);
							goto IL_042f;
						}
						end_IL_0202:;
					}
					catch (object obj)
					{
						_003C_003E7__wrap2 = obj;
					}
					if (_003C_003E7__wrap1 == null)
					{
						break;
					}
					_003C_003E2__current = null;
					awaiter = _003C_003E7__wrap1.DisposeAsync().GetAwaiter();
					if (!awaiter.IsCompleted)
					{
						num = (_003C_003E1__state = 2);
						_003C_003Eu__3 = awaiter;
						_003CGenerateContent_003Ed__18 stateMachine = this;
						_003C_003Et__builder.AwaitUnsafeOnCompleted(ref awaiter, ref stateMachine);
						return;
					}
					goto IL_0342;
				case 2:
					{
						awaiter = _003C_003Eu__3;
						_003C_003Eu__3 = default(ValueTaskAwaiter);
						num = (_003C_003E1__state = -1);
						goto IL_0342;
					}
					IL_0342:
					awaiter.GetResult();
					break;
					IL_00cd:
					text = awaiter2.GetResult();
					switch (text)
					{
					case "My":
					case "Or":
					case "We":
					case "But":
					case "You":
					case "I":
					case "Your":
						flag = true;
						break;
					default:
						flag = false;
						break;
					}
					if (flag)
					{
						text = null;
					}
					asyncEnumerable = generateStoryCommand.textGenAccessor.GetCurrent().GenerateStoryAsync(generateStoryCommand.chatInstance, storyInstructions, generateStoryCommand.promptBuilder, text, constraintRequest, cancellationToken);
					_003C_003E7__wrap1 = asyncEnumerable.GetAsyncEnumerator();
					_003C_003E7__wrap2 = null;
					_003C_003E7__wrap3 = 0;
					goto case -4;
				}
				object obj2 = _003C_003E7__wrap2;
				if (obj2 != null)
				{
					ExceptionDispatchInfo.Capture((obj2 as Exception) ?? throw obj2).Throw();
				}
				_ = _003C_003E7__wrap3;
				if (!_003C_003Ew__disposeMode)
				{
					_003C_003E7__wrap2 = null;
					_003C_003E7__wrap1 = null;
				}
				end_IL_000e:;
			}
			catch (Exception exception)
			{
				_003C_003E1__state = -2;
				_003C_003E7__wrap1 = null;
				_003C_003E7__wrap2 = null;
				if (_003C_003Ex__combinedTokens != null)
				{
					_003C_003Ex__combinedTokens.Dispose();
					_003C_003Ex__combinedTokens = null;
				}
				_003C_003E2__current = null;
				_003C_003Et__builder.Complete();
				_003C_003Ev__promiseOfValueOrEnd.SetException(exception);
				return;
			}
			_003C_003E1__state = -2;
			_003C_003E7__wrap1 = null;
			_003C_003E7__wrap2 = null;
			if (_003C_003Ex__combinedTokens != null)
			{
				_003C_003Ex__combinedTokens.Dispose();
				_003C_003Ex__combinedTokens = null;
			}
			_003C_003E2__current = null;
			_003C_003Et__builder.Complete();
			_003C_003Ev__promiseOfValueOrEnd.SetResult(result: false);
			return;
			IL_042f:
			_003C_003Ev__promiseOfValueOrEnd.SetResult(result: true);
		}

		void IAsyncStateMachine.MoveNext()
		{
			//ILSpy generated this explicit interface implementation from .override directive in MoveNext
			this.MoveNext();
		}

		[DebuggerHidden]
		private void SetStateMachine(IAsyncStateMachine stateMachine)
		{
		}

		void IAsyncStateMachine.SetStateMachine(IAsyncStateMachine stateMachine)
		{
			//ILSpy generated this explicit interface implementation from .override directive in SetStateMachine
			this.SetStateMachine(stateMachine);
		}

		[DebuggerHidden]
		IAsyncEnumerator<LLMOutputToken> IAsyncEnumerable<LLMOutputToken>.GetAsyncEnumerator(CancellationToken cancellationToken = default(CancellationToken))
		{
			_003CGenerateContent_003Ed__18 _003CGenerateContent_003Ed__;
			if (_003C_003E1__state == -2 && _003C_003El__initialThreadId == Environment.CurrentManagedThreadId)
			{
				_003C_003E1__state = -3;
				_003C_003Et__builder = AsyncIteratorMethodBuilder.Create();
				_003C_003Ew__disposeMode = false;
				_003CGenerateContent_003Ed__ = this;
			}
			else
			{
				_003CGenerateContent_003Ed__ = new _003CGenerateContent_003Ed__18(-3)
				{
					_003C_003E4__this = _003C_003E4__this
				};
			}
			_003CGenerateContent_003Ed__.role = _003C_003E3__role;
			_003CGenerateContent_003Ed__.storyInstructions = _003C_003E3__storyInstructions;
			_003CGenerateContent_003Ed__.constraintRequest = _003C_003E3__constraintRequest;
			if (_003C_003E3__cancellationToken.Equals(default(CancellationToken)))
			{
				_003CGenerateContent_003Ed__.cancellationToken = cancellationToken;
			}
			else if (cancellationToken.Equals(_003C_003E3__cancellationToken) || cancellationToken.Equals(default(CancellationToken)))
			{
				_003CGenerateContent_003Ed__.cancellationToken = _003C_003E3__cancellationToken;
			}
			else
			{
				_003C_003Ex__combinedTokens = CancellationTokenSource.CreateLinkedTokenSource(_003C_003E3__cancellationToken, cancellationToken);
				_003CGenerateContent_003Ed__.cancellationToken = _003C_003Ex__combinedTokens.Token;
			}
			return _003CGenerateContent_003Ed__;
		}

		[DebuggerHidden]
		ValueTask<bool> IAsyncEnumerator<LLMOutputToken>.MoveNextAsync()
		{
			if (_003C_003E1__state == -2)
			{
				return default(ValueTask<bool>);
			}
			_003C_003Ev__promiseOfValueOrEnd.Reset();
			_003CGenerateContent_003Ed__18 stateMachine = this;
			_003C_003Et__builder.MoveNext(ref stateMachine);
			short version = _003C_003Ev__promiseOfValueOrEnd.Version;
			if (_003C_003Ev__promiseOfValueOrEnd.GetStatus(version) == ValueTaskSourceStatus.Succeeded)
			{
				return new ValueTask<bool>(_003C_003Ev__promiseOfValueOrEnd.GetResult(version));
			}
			return new ValueTask<bool>(this, version);
		}

		[DebuggerHidden]
		bool IValueTaskSource<bool>.GetResult(short token)
		{
			return _003C_003Ev__promiseOfValueOrEnd.GetResult(token);
		}

		[DebuggerHidden]
		ValueTaskSourceStatus IValueTaskSource<bool>.GetStatus(short token)
		{
			return _003C_003Ev__promiseOfValueOrEnd.GetStatus(token);
		}

		[DebuggerHidden]
		void IValueTaskSource<bool>.OnCompleted(Action<object?> continuation, object? state, short token, ValueTaskSourceOnCompletedFlags flags)
		{
			_003C_003Ev__promiseOfValueOrEnd.OnCompleted(continuation, state, token, flags);
		}

		[DebuggerHidden]
		void IValueTaskSource.GetResult(short token)
		{
			_003C_003Ev__promiseOfValueOrEnd.GetResult(token);
		}

		[DebuggerHidden]
		ValueTaskSourceStatus IValueTaskSource.GetStatus(short token)
		{
			return _003C_003Ev__promiseOfValueOrEnd.GetStatus(token);
		}

		[DebuggerHidden]
		void IValueTaskSource.OnCompleted(Action<object?> continuation, object? state, short token, ValueTaskSourceOnCompletedFlags flags)
		{
			_003C_003Ev__promiseOfValueOrEnd.OnCompleted(continuation, state, token, flags);
		}

		[DebuggerHidden]
		ValueTask IAsyncDisposable.DisposeAsync()
		{
			if (_003C_003E1__state >= -1)
			{
				throw new NotSupportedException();
			}
			if (_003C_003E1__state == -2)
			{
				return default(ValueTask);
			}
			_003C_003Ew__disposeMode = true;
			_003C_003Ev__promiseOfValueOrEnd.Reset();
			_003CGenerateContent_003Ed__18 stateMachine = this;
			_003C_003Et__builder.MoveNext(ref stateMachine);
			return new ValueTask(this, _003C_003Ev__promiseOfValueOrEnd.Version);
		}
	}

	public async ValueTask ExecuteAsync(GenerateStoryRequest request, CancellationToken cancellationToken)
	{
		logger.LogDebug("Executing command: {Name}", "GenerateStoryCommand");
		continuationService.CancelContinuation();
		await using (chatContinuousStorageService.Begin())
		{
			string text = request.Text ?? "";
			ChatMessageRole role = request.Role;
			bool isNarrated = request.Narrate == true || (!request.Narrate.HasValue && role.IsNarrated());
			Guid replyMessageId = chatMessageFactory.CreateMessageId();
			diagnosticsContext.Augment((DiagnosticsContextValues c) => c with
			{
				MessageId = replyMessageId
			});
			ChatMessageData chatMessageData = await chatInstance.GetLastMessageAsync(cancellationToken);
			if (chatMessageData != null)
			{
				chatContextService.ExpireFlagsAsync(chatMessageData.ConversationIndex);
			}
			IReplyChunksHandler replyChunksHandler = replyChunksService.CreateReplyChunksHandler(chatInstance.Narrator.Id, replyMessageId, role);
			try
			{
				ChatMessageData message;
				if (request.UseStoryWriter)
				{
					if (isNarrated)
					{
						replyChunksHandler.Generating(null, isNarration: true);
						GenerateConstraintRequest generateConstraintRequest = request.GenerateConstraintRequest;
						message = await GenerateStoryReplyWithSpeechAsync(replyMessageId, replyChunksHandler, role, text, generateConstraintRequest, cancellationToken, cancellationToken);
					}
					else
					{
						StringBuilder sb = new StringBuilder();
						List<IImage> images = new List<IImage>();
						await foreach (LLMOutputToken item in GenerateContent(role, text, request.GenerateConstraintRequest, cancellationToken))
						{
							if (!item.Thinking)
							{
								if (item.Images != null)
								{
									images.AddRange(item.Images);
									logger.LogWarning("Image generation is not supported in story generation");
								}
								sb.Append(item.Text);
							}
						}
						string text2 = sb.ToString().StripUnfinishedSentence();
						IChatMessageFactory chatMessageFactory = chatMessageFactory;
						Guid messageId = replyMessageId;
						CancellationToken abort = chatInstance.Abort;
						message = await chatMessageFactory.CreateMessageAsync(messageId, role, text2, null, null, abort);
						await chatMessageFactory.InsertMessageInHistoryAndSaveAsync(message, chatInstance.Abort);
						tunnelMessagesService.SendMessageUpdated(message);
						if (images != null && images.Count > 0)
						{
							await handleAttachmentsService.AttachImagesAsync(message, null, images, describe: false, chatInstance.Abort);
							logger.LogInformation("Images ({ImagesCount}) attached to message {MessageId}", images.Count, message.LocalId);
						}
					}
				}
				else
				{
					message = await chatMessageFactory.CreateMessageAsync(replyMessageId, role, text);
					await chatMessageFactory.InsertMessageInHistoryAndSaveAsync(message, default(CancellationToken));
					if (isNarrated)
					{
						replyChunksHandler.Generating(null, isNarration: true);
						replyChunksHandler.MessageSaved(message);
						await scriptedSpeechService.SendReplyWithSpeechPostGeneratedEvent(null, message, chatInstance.Narrator, replyChunksHandler, cancellationToken);
					}
					else
					{
						tunnelMessagesService.SendMessageUpdated(message);
					}
				}
				if (message != null && (request.TriggerReply == true || (!request.TriggerReply.HasValue && message.Role.IsTriggering())))
				{
					continuationService.ScheduleContinuation(message, allowUser: false);
				}
			}
			catch
			{
				replyChunksHandler.Dispose();
				throw;
			}
		}
	}

	private async Task<ChatMessageData?> GenerateStoryReplyWithSpeechAsync(Guid messageId, IReplyChunksHandler replyChunksHandler, ChatMessageRole role, string storyInstructions, GenerateConstraintRequest constraintRequest, CancellationToken sessionAbort, CancellationToken itemAbort)
	{
		ICharacterInferenceData narrator = chatInstance.Narrator;
		return await generateReplyWithSpeechService.GenerateReplyWithSpeechAsync(narrator, replyChunksHandler, messageId, null, role, (CancellationToken c) => GenerateContent(role, storyInstructions, constraintRequest, c), constraintRequest.MaxSentences, true, sessionAbort, itemAbort);
	}

	[AsyncIteratorStateMachine(typeof(_003CGenerateContent_003Ed__18))]
	private IAsyncEnumerable<LLMOutputToken> GenerateContent(ChatMessageRole role, string storyInstructions, GenerateConstraintRequest constraintRequest, [EnumeratorCancellation] CancellationToken cancellationToken)
	{
		return new _003CGenerateContent_003Ed__18(-2)
		{
			_003C_003E4__this = this,
			_003C_003E3__role = role,
			_003C_003E3__storyInstructions = storyInstructions,
			_003C_003E3__constraintRequest = constraintRequest,
			_003C_003E3__cancellationToken = cancellationToken
		};
	}
}

```

## Voxta.Core.Chats.Commands.Reply\GenerateStoryRequest.cs
```csharp
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Commands.Reply;

public class GenerateStoryRequest
{
	public ChatMessageRole Role { get; init; }

	public string? Text { get; init; }

	public bool UseStoryWriter { get; init; }

	public bool? TriggerReply { get; init; }

	public bool? Narrate { get; init; }

	public GenerateConstraintRequest GenerateConstraintRequest { get; init; } = Voxta.Model.Shared.GenerateConstraintRequest.Empty;
}

```

## Voxta.Core.Chats.Commands.Reply\GenerateSuggestionsCommand.cs
```csharp
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Runtime.CompilerServices;
using System.Runtime.ExceptionServices;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Threading.Tasks.Sources;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.DependencyInjection;
using Voxta.Abstractions.Prompting;
using Voxta.Abstractions.Services.ChatAugmentations;
using Voxta.Abstractions.Services.TextGen;
using Voxta.Abstractions.Templating;
using Voxta.Abstractions.Utils;
using Voxta.Common;
using Voxta.Core.Chats.Objects.Characters;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.CommandsProcessing;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ClientMessages;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.Commands.Reply;

public class GenerateSuggestionsCommand(ChatInstance chatInstance, IUserConnectionTunnel tunnel, IDynamicServiceAccessor<ITextGenService> textGenAccessor, IPromptBuilder promptBuilder, IChatAugmentationsServiceInstance augmentations, ISanitizer sanitizer, ILogger<GenerateSuggestionsCommand> logger) : IGenerateSuggestionsCommand, IChatInputCommand<ClientRequestSuggestionsMessage>, IChatCommand<ClientRequestSuggestionsMessage>, IChatCommand
{
	[CompilerGenerated]
	private sealed class _003CGenerateContent_003Ed__9 : IAsyncEnumerable<LLMOutputToken>, IAsyncEnumerator<LLMOutputToken>, IAsyncDisposable, IValueTaskSource<bool>, IValueTaskSource, IAsyncStateMachine
	{
		public int _003C_003E1__state;

		public AsyncIteratorMethodBuilder _003C_003Et__builder;

		public ManualResetValueTaskSourceCore<bool> _003C_003Ev__promiseOfValueOrEnd;

		private LLMOutputToken _003C_003E2__current;

		private bool _003C_003Ew__disposeMode;

		private CancellationTokenSource _003C_003Ex__combinedTokens;

		private int _003C_003El__initialThreadId;

		public GenerateSuggestionsCommand _003C_003E4__this;

		private ICharacterInferenceData character;

		public ICharacterInferenceData _003C_003E3__character;

		private string prefix;

		public string _003C_003E3__prefix;

		private GenerateConstraintRequest constraintRequest;

		public GenerateConstraintRequest _003C_003E3__constraintRequest;

		private CancellationToken cancellationToken;

		public CancellationToken _003C_003E3__cancellationToken;

		private IAsyncEnumerator<LLMOutputToken> _003C_003E7__wrap1;

		private object _003C_003E7__wrap2;

		private int _003C_003E7__wrap3;

		private ValueTaskAwaiter<bool> _003C_003Eu__1;

		private ValueTaskAwaiter _003C_003Eu__2;

		LLMOutputToken IAsyncEnumerator<LLMOutputToken>.Current
		{
			[DebuggerHidden]
			get
			{
				return _003C_003E2__current;
			}
		}

		[DebuggerHidden]
		public _003CGenerateContent_003Ed__9(int _003C_003E1__state)
		{
			_003C_003Et__builder = AsyncIteratorMethodBuilder.Create();
			this._003C_003E1__state = _003C_003E1__state;
			_003C_003El__initialThreadId = Environment.CurrentManagedThreadId;
		}

		private void MoveNext()
		{
			int num = _003C_003E1__state;
			GenerateSuggestionsCommand generateSuggestionsCommand = _003C_003E4__this;
			try
			{
				ValueTaskAwaiter awaiter;
				switch (num)
				{
				default:
					if (!_003C_003Ew__disposeMode)
					{
						num = (_003C_003E1__state = -1);
						IAsyncEnumerable<LLMOutputToken> asyncEnumerable = generateSuggestionsCommand.textGenAccessor.GetCurrent().GenerateReplyAsync(generateSuggestionsCommand.chatInstance, character, generateSuggestionsCommand.promptBuilder, prefix, constraintRequest, cancellationToken);
						_003C_003E7__wrap1 = asyncEnumerable.GetAsyncEnumerator();
						_003C_003E7__wrap2 = null;
						_003C_003E7__wrap3 = 0;
						goto case -4;
					}
					goto end_IL_000e;
				case -4:
				case 0:
					try
					{
						ValueTaskAwaiter<bool> awaiter2;
						if (num != -4)
						{
							if (num != 0)
							{
								goto IL_00e5;
							}
							awaiter2 = _003C_003Eu__1;
							_003C_003Eu__1 = default(ValueTaskAwaiter<bool>);
							num = (_003C_003E1__state = -1);
							goto IL_0150;
						}
						num = (_003C_003E1__state = -1);
						if (!_003C_003Ew__disposeMode)
						{
							goto IL_00e5;
						}
						goto end_IL_009e;
						IL_00e5:
						_003C_003E2__current = null;
						awaiter2 = _003C_003E7__wrap1.MoveNextAsync().GetAwaiter();
						if (!awaiter2.IsCompleted)
						{
							num = (_003C_003E1__state = 0);
							_003C_003Eu__1 = awaiter2;
							_003CGenerateContent_003Ed__9 stateMachine = this;
							_003C_003Et__builder.AwaitUnsafeOnCompleted(ref awaiter2, ref stateMachine);
							return;
						}
						goto IL_0150;
						IL_0150:
						if (awaiter2.GetResult())
						{
							LLMOutputToken current = _003C_003E7__wrap1.Current;
							_003C_003E2__current = current;
							num = (_003C_003E1__state = -4);
							goto IL_02ca;
						}
						end_IL_009e:;
					}
					catch (object obj)
					{
						_003C_003E7__wrap2 = obj;
					}
					if (_003C_003E7__wrap1 == null)
					{
						break;
					}
					_003C_003E2__current = null;
					awaiter = _003C_003E7__wrap1.DisposeAsync().GetAwaiter();
					if (!awaiter.IsCompleted)
					{
						num = (_003C_003E1__state = 1);
						_003C_003Eu__2 = awaiter;
						_003CGenerateContent_003Ed__9 stateMachine = this;
						_003C_003Et__builder.AwaitUnsafeOnCompleted(ref awaiter, ref stateMachine);
						return;
					}
					goto IL_01dd;
				case 1:
					{
						awaiter = _003C_003Eu__2;
						_003C_003Eu__2 = default(ValueTaskAwaiter);
						num = (_003C_003E1__state = -1);
						goto IL_01dd;
					}
					IL_01dd:
					awaiter.GetResult();
					break;
				}
				object obj2 = _003C_003E7__wrap2;
				if (obj2 != null)
				{
					ExceptionDispatchInfo.Capture((obj2 as Exception) ?? throw obj2).Throw();
				}
				_ = _003C_003E7__wrap3;
				if (!_003C_003Ew__disposeMode)
				{
					_003C_003E7__wrap2 = null;
					_003C_003E7__wrap1 = null;
				}
				end_IL_000e:;
			}
			catch (Exception exception)
			{
				_003C_003E1__state = -2;
				_003C_003E7__wrap1 = null;
				_003C_003E7__wrap2 = null;
				if (_003C_003Ex__combinedTokens != null)
				{
					_003C_003Ex__combinedTokens.Dispose();
					_003C_003Ex__combinedTokens = null;
				}
				_003C_003E2__current = null;
				_003C_003Et__builder.Complete();
				_003C_003Ev__promiseOfValueOrEnd.SetException(exception);
				return;
			}
			_003C_003E1__state = -2;
			_003C_003E7__wrap1 = null;
			_003C_003E7__wrap2 = null;
			if (_003C_003Ex__combinedTokens != null)
			{
				_003C_003Ex__combinedTokens.Dispose();
				_003C_003Ex__combinedTokens = null;
			}
			_003C_003E2__current = null;
			_003C_003Et__builder.Complete();
			_003C_003Ev__promiseOfValueOrEnd.SetResult(result: false);
			return;
			IL_02ca:
			_003C_003Ev__promiseOfValueOrEnd.SetResult(result: true);
		}

		void IAsyncStateMachine.MoveNext()
		{
			//ILSpy generated this explicit interface implementation from .override directive in MoveNext
			this.MoveNext();
		}

		[DebuggerHidden]
		private void SetStateMachine(IAsyncStateMachine stateMachine)
		{
		}

		void IAsyncStateMachine.SetStateMachine(IAsyncStateMachine stateMachine)
		{
			//ILSpy generated this explicit interface implementation from .override directive in SetStateMachine
			this.SetStateMachine(stateMachine);
		}

		[DebuggerHidden]
		IAsyncEnumerator<LLMOutputToken> IAsyncEnumerable<LLMOutputToken>.GetAsyncEnumerator(CancellationToken cancellationToken = default(CancellationToken))
		{
			_003CGenerateContent_003Ed__9 _003CGenerateContent_003Ed__;
			if (_003C_003E1__state == -2 && _003C_003El__initialThreadId == Environment.CurrentManagedThreadId)
			{
				_003C_003E1__state = -3;
				_003C_003Et__builder = AsyncIteratorMethodBuilder.Create();
				_003C_003Ew__disposeMode = false;
				_003CGenerateContent_003Ed__ = this;
			}
			else
			{
				_003CGenerateContent_003Ed__ = new _003CGenerateContent_003Ed__9(-3)
				{
					_003C_003E4__this = _003C_003E4__this
				};
			}
			_003CGenerateContent_003Ed__.character = _003C_003E3__character;
			_003CGenerateContent_003Ed__.constraintRequest = _003C_003E3__constraintRequest;
			_003CGenerateContent_003Ed__.prefix = _003C_003E3__prefix;
			if (_003C_003E3__cancellationToken.Equals(default(CancellationToken)))
			{
				_003CGenerateContent_003Ed__.cancellationToken = cancellationToken;
			}
			else if (cancellationToken.Equals(_003C_003E3__cancellationToken) || cancellationToken.Equals(default(CancellationToken)))
			{
				_003CGenerateContent_003Ed__.cancellationToken = _003C_003E3__cancellationToken;
			}
			else
			{
				_003C_003Ex__combinedTokens = CancellationTokenSource.CreateLinkedTokenSource(_003C_003E3__cancellationToken, cancellationToken);
				_003CGenerateContent_003Ed__.cancellationToken = _003C_003Ex__combinedTokens.Token;
			}
			return _003CGenerateContent_003Ed__;
		}

		[DebuggerHidden]
		ValueTask<bool> IAsyncEnumerator<LLMOutputToken>.MoveNextAsync()
		{
			if (_003C_003E1__state == -2)
			{
				return default(ValueTask<bool>);
			}
			_003C_003Ev__promiseOfValueOrEnd.Reset();
			_003CGenerateContent_003Ed__9 stateMachine = this;
			_003C_003Et__builder.MoveNext(ref stateMachine);
			short version = _003C_003Ev__promiseOfValueOrEnd.Version;
			if (_003C_003Ev__promiseOfValueOrEnd.GetStatus(version) == ValueTaskSourceStatus.Succeeded)
			{
				return new ValueTask<bool>(_003C_003Ev__promiseOfValueOrEnd.GetResult(version));
			}
			return new ValueTask<bool>(this, version);
		}

		[DebuggerHidden]
		bool IValueTaskSource<bool>.GetResult(short token)
		{
			return _003C_003Ev__promiseOfValueOrEnd.GetResult(token);
		}

		[DebuggerHidden]
		ValueTaskSourceStatus IValueTaskSource<bool>.GetStatus(short token)
		{
			return _003C_003Ev__promiseOfValueOrEnd.GetStatus(token);
		}

		[DebuggerHidden]
		void IValueTaskSource<bool>.OnCompleted(Action<object?> continuation, object? state, short token, ValueTaskSourceOnCompletedFlags flags)
		{
			_003C_003Ev__promiseOfValueOrEnd.OnCompleted(continuation, state, token, flags);
		}

		[DebuggerHidden]
		void IValueTaskSource.GetResult(short token)
		{
			_003C_003Ev__promiseOfValueOrEnd.GetResult(token);
		}

		[DebuggerHidden]
		ValueTaskSourceStatus IValueTaskSource.GetStatus(short token)
		{
			return _003C_003Ev__promiseOfValueOrEnd.GetStatus(token);
		}

		[DebuggerHidden]
		void IValueTaskSource.OnCompleted(Action<object?> continuation, object? state, short token, ValueTaskSourceOnCompletedFlags flags)
		{
			_003C_003Ev__promiseOfValueOrEnd.OnCompleted(continuation, state, token, flags);
		}

		[DebuggerHidden]
		ValueTask IAsyncDisposable.DisposeAsync()
		{
			if (_003C_003E1__state >= -1)
			{
				throw new NotSupportedException();
			}
			if (_003C_003E1__state == -2)
			{
				return default(ValueTask);
			}
			_003C_003Ew__disposeMode = true;
			_003C_003Ev__promiseOfValueOrEnd.Reset();
			_003CGenerateContent_003Ed__9 stateMachine = this;
			_003C_003Et__builder.MoveNext(ref stateMachine);
			return new ValueTask(this, _003C_003Ev__promiseOfValueOrEnd.Version);
		}
	}

	public async ValueTask ExecuteAsync(ClientRequestSuggestionsMessage request, CancellationToken cancellationToken)
	{
		logger.LogDebug("Executing command: {Name}", "GenerateSuggestionsCommand");
		UserInstance user = chatInstance.User;
		CharacterInstance character = new CharacterInstance
		{
			Id = user.Id,
			Description = StaticTemplate.Empty,
			Name = user.Name,
			Personality = StaticTemplate.Empty,
			Profile = StaticTemplate.Empty
		};
		GenerateConstraintRequest constraints = new GenerateConstraintRequest
		{
			MaxSentences = 3,
			MaxNewTokens = 40
		};
		string charStart = chatInstance.GetMainCharacter().Name + ": ";
		string userStart = chatInstance.User.Name + ": ";
		List<string> suggestions = new List<string>(request.Count);
		for (int i = 0; i < request.Count; i++)
		{
			try
			{
				string prefix = await augmentations.ContributePrefix(character, ChatMessageRole.User, request.Prefix, force: true, cancellationToken);
				StringBuilder sb = new StringBuilder();
				await foreach (LLMOutputToken item in GenerateContent(character, constraints, prefix, cancellationToken))
				{
					if (!item.Thinking)
					{
						if (item.Images != null)
						{
							logger.LogWarning("Image generation is not supported in suggestions generation");
						}
						sb.Append(item.Text);
					}
				}
				string text = sb.ToString();
				if (text.StartsWith(charStart))
				{
					int num = text.IndexOf(userStart, StringComparison.Ordinal);
					object obj;
					if (num < 0)
					{
						obj = "";
					}
					else
					{
						string text2 = text;
						int num2 = num + userStart.Length;
						obj = text2.Substring(num2, text2.Length - num2);
					}
					text = (string)obj;
				}
				text = sanitizer.SanitizeForModel(text, 0);
				text = text.StripUnfinishedSentence();
				text = text.Trim('"');
				if (text != "")
				{
					suggestions.Add(text);
				}
			}
			catch (Exception exception)
			{
				logger.LogWarning(exception, "Failed to generate one of the suggestions");
			}
		}
		if (suggestions.Count == 0)
		{
			suggestions = new List<string>(1) { "..." };
		}
		tunnel.Send(new ServerSuggestionsMessage
		{
			SessionId = chatInstance.SessionId,
			Suggestions = suggestions
		});
	}

	[AsyncIteratorStateMachine(typeof(_003CGenerateContent_003Ed__9))]
	private IAsyncEnumerable<LLMOutputToken> GenerateContent(ICharacterInferenceData character, GenerateConstraintRequest constraintRequest, string? prefix, [EnumeratorCancellation] CancellationToken cancellationToken)
	{
		return new _003CGenerateContent_003Ed__9(-2)
		{
			_003C_003E4__this = this,
			_003C_003E3__character = character,
			_003C_003E3__constraintRequest = constraintRequest,
			_003C_003E3__prefix = prefix,
			_003C_003E3__cancellationToken = cancellationToken
		};
	}
}

```

## Voxta.Core.Chats.Commands.Reply\IGenerateReplyCommand.cs
```csharp
using Voxta.Core.CommandsProcessing;

namespace Voxta.Core.Chats.Commands.Reply;

public interface IGenerateReplyCommand : IChatForegroundCommand<GenerateReplyRequest>, IChatCommand<GenerateReplyRequest>, IChatCommand
{
}

```

## Voxta.Core.Chats.Commands.Reply\IGenerateStoryCommand.cs
```csharp
using Voxta.Core.CommandsProcessing;

namespace Voxta.Core.Chats.Commands.Reply;

public interface IGenerateStoryCommand : IChatForegroundCommand<GenerateStoryRequest>, IChatCommand<GenerateStoryRequest>, IChatCommand
{
}

```

## Voxta.Core.Chats.Commands.Reply\IGenerateSuggestionsCommand.cs
```csharp
using Voxta.Core.CommandsProcessing;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Commands.Reply;

public interface IGenerateSuggestionsCommand : IChatInputCommand<ClientRequestSuggestionsMessage>, IChatCommand<ClientRequestSuggestionsMessage>, IChatCommand
{
}

```

## Voxta.Core.Chats.Commands.Reply\IRetryCommand.cs
```csharp
using Voxta.Core.CommandsProcessing;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Commands.Reply;

public interface IRetryCommand : IChatForegroundCommand<ClientRetryMessage>, IChatCommand<ClientRetryMessage>, IChatCommand
{
}

```

## Voxta.Core.Chats.Commands.Reply\RetryCommand.cs
```csharp
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Repositories;
using Voxta.Abstractions.Services.VisionCapture;
using Voxta.Common;
using Voxta.Core.Chats.Commands.Messages;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.ScopedServices;
using Voxta.Core.CommandsProcessing;
using Voxta.Core.Utils;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Commands.Reply;

public class RetryCommand(ChatInstance chatInstance, IContinuationService continuationService, IUnitOfWorkFactory unitOfWorkFactory, IChatCommandsManager commandsManager, ITunnelMessagesService tunnelMessagesService, IDeleteLogicUtil deleteLogicUtil, ILogger<RetryCommand> logger) : IRetryCommand, IChatForegroundCommand<ClientRetryMessage>, IChatCommand<ClientRetryMessage>, IChatCommand
{
	public async ValueTask ExecuteAsync(ClientRetryMessage request, CancellationToken cancellationToken)
	{
		logger.LogDebug("Executing command: {Name}", "RetryCommand");
		continuationService.CancelContinuation();
		await using IChatInstanceMessagesWriteToken token = await chatInstance.GetMessagesWriteTokenAsync(cancellationToken);
		ChatMessageData lastMessage = token.Messages.LastOrDefault();
		if (lastMessage != null)
		{
			switch (lastMessage.Role)
			{
			case ChatMessageRole.User:
			{
				ClientSendMessageAttachment[] attachments = ((IEnumerable<ClientSendMessageAttachment>)(from a in lastMessage.Attachments?.Select((ChatMessageDataAttachment a) => a.Image).WhereNotNull()
					select new Base64UrlClientSendMessageAttachment
					{
						Source = a.Source,
						Base64Url = a.ToBase64Url(),
						FileName = a.FileName,
						Label = a.Label
					})).ToArray();
				await DeleteMessage(token, lastMessage);
				commandsManager.EnqueueForeground<IReceiveUserMessageCommand, ReceiveUserMessageRequest>(new ReceiveUserMessageRequest
				{
					Text = lastMessage.Value,
					DoContinue = true,
					Attachments = attachments,
					AllowUserActionInference = true
				});
				break;
			}
			case ChatMessageRole.Assistant:
				await DeleteMessage(token, lastMessage);
				continuationService.ScheduleContinuation(token.Messages.LastOrDefault(), allowUser: false);
				break;
			default:
				continuationService.ScheduleContinuation(lastMessage, allowUser: false);
				break;
			}
		}
		else
		{
			logger.LogWarning("No messages to retry");
		}
	}

	private async Task DeleteMessage(IChatInstanceMessagesWriteToken token, ChatMessageData message)
	{
		if (!chatInstance.Ephemeral)
		{
			await using IUnitOfWork uow = unitOfWorkFactory.CreateUnitOfWork();
			await deleteLogicUtil.DeleteMessage(uow, message);
		}
		token.Messages.Remove(message);
		tunnelMessagesService.SendMessageDeleted(message);
	}
}

```

## Voxta.Core.Chats.Commands.Scripts\ITriggerScriptEventCommand.cs
```csharp
using Voxta.Core.CommandsProcessing;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Commands.Scripts;

public interface ITriggerScriptEventCommand : IChatInputCommand<ClientTriggerScriptEventMessage>, IChatCommand<ClientTriggerScriptEventMessage>, IChatCommand
{
}

```

## Voxta.Core.Chats.Commands.Scripts\TriggerScriptEventCommand.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.ScopedServices;
using Voxta.Core.CommandsProcessing;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Commands.Scripts;

public class TriggerScriptEventCommand(ChatInstance chatInstance, IActionScriptsService actionScriptsService, IChatContinuousStorageService chatContinuousStorageService, ILogger<TriggerScriptEventCommand> logger) : ITriggerScriptEventCommand, IChatInputCommand<ClientTriggerScriptEventMessage>, IChatCommand<ClientTriggerScriptEventMessage>, IChatCommand
{
	public async ValueTask ExecuteAsync(ClientTriggerScriptEventMessage request, CancellationToken cancellationToken)
	{
		logger.LogDebug("Executing command: {Name}", "TriggerScriptEventCommand");
		if (!actionScriptsService.IsRegistered("app:" + request.Name))
		{
			return;
		}
		await using (chatContinuousStorageService.Begin())
		{
			await actionScriptsService.RunEventAsync(new AppScriptEvent
			{
				Event = request.Name,
				Arguments = (request.Arguments?.ToDictionary((Func<ActionInvocationArgument, string>)((ActionInvocationArgument x) => x.Name), (Func<ActionInvocationArgument, object>)((ActionInvocationArgument x) => x.Value)) ?? new Dictionary<string, object>())
			}, null, chatInstance.User, cancellationToken);
		}
	}
}

```

## Voxta.Core.Chats.Commands.Speech\ISpeakCommand.cs
```csharp
using Voxta.Core.CommandsProcessing;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Commands.Speech;

public interface ISpeakCommand : IChatForegroundCommand<ClientSpeakMessage>, IChatCommand<ClientSpeakMessage>, IChatCommand
{
}

```

## Voxta.Core.Chats.Commands.Speech\ISpeechPlaybackCompleteCommand.cs
```csharp
using Voxta.Core.CommandsProcessing;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Commands.Speech;

public interface ISpeechPlaybackCompleteCommand : IChatInputCommand<ClientSpeechPlaybackCompleteMessage>, IChatCommand<ClientSpeechPlaybackCompleteMessage>, IChatCommand
{
}

```

## Voxta.Core.Chats.Commands.Speech\ISpeechPlaybackStartCommand.cs
```csharp
using Voxta.Core.CommandsProcessing;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Commands.Speech;

public interface ISpeechPlaybackStartCommand : IChatInputCommand<ClientSpeechPlaybackStartMessage>, IChatCommand<ClientSpeechPlaybackStartMessage>, IChatCommand
{
}

```

## Voxta.Core.Chats.Commands.Speech\SpeakCommand.cs
```csharp
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Model;
using Voxta.Core.Chats.Objects.Characters;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.ScopedServices;
using Voxta.Core.CommandsProcessing;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Commands.Speech;

public class SpeakCommand(ChatInstance chatInstance, IScriptedSpeechService scriptedSpeechService, IReplyChunksService replyChunksService, ILogger<SpeakCommand> logger) : ISpeakCommand, IChatForegroundCommand<ClientSpeakMessage>, IChatCommand<ClientSpeakMessage>, IChatCommand
{
	private static readonly ChatMessageRole[] _roles = new ChatMessageRole[3]
	{
		ChatMessageRole.Assistant,
		ChatMessageRole.Event,
		ChatMessageRole.Note
	};

	public async ValueTask ExecuteAsync(ClientSpeakMessage request, CancellationToken cancellationToken)
	{
		logger.LogDebug("Executing command: {Name}", "SpeakCommand");
		ChatMessageData chatMessageData = ((!request.MessageId.HasValue) ? (await chatInstance.GetLastMessageByRoleAsync(_roles, cancellationToken)) : (await chatInstance.GetMessageByIdAsync(request.MessageId.Value, cancellationToken)));
		ChatMessageData message = chatMessageData;
		if (message == null)
		{
			logger.LogWarning("Cannot speak message, message not found: {MessageId}", request.MessageId);
			return;
		}
		ICharacterInferenceData characterInferenceData = chatInstance.Characters.FirstOrDefault((CharacterInstance c) => c.Id == message.SenderId);
		ICharacterInferenceData characterInferenceData2 = characterInferenceData ?? chatInstance.Narrator;
		if (characterInferenceData2 == chatInstance.Narrator && !characterInferenceData2.Enabled)
		{
			logger.LogWarning("Cannot speak message, narrator is disabled: {MessageId}", request.MessageId);
			return;
		}
		using IReplyChunksHandler replyChunksHandler = replyChunksService.CreateReplyChunksHandler(message);
		await scriptedSpeechService.SendReplyWithSpeechPostGeneratedEvent(null, message, characterInferenceData2, replyChunksHandler, cancellationToken);
	}
}

```

## Voxta.Core.Chats.Commands.Speech\SpeechPlaybackCompleteCommand.cs
```csharp
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.ScopedServices;
using Voxta.Core.Chats.Sessions;
using Voxta.Core.CommandsProcessing;
using Voxta.Model.WebsocketMessages.ClientMessages;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.Commands.Speech;

public class SpeechPlaybackCompleteCommand(ChatInstance chatInstance, IUserConnectionTunnel tunnel, IChatSessionGeneratingState chatSessionGeneratingState, IContinuationService continuationService, IActionScriptsService actionScriptsService, ITranscriptionService transcriptionService, IChatContinuousStorageService chatContinuousStorageService, IChatSessionServices chatSessionServices) : ISpeechPlaybackCompleteCommand, IChatInputCommand<ClientSpeechPlaybackCompleteMessage>, IChatCommand<ClientSpeechPlaybackCompleteMessage>, IChatCommand
{
	public async ValueTask ExecuteAsync(ClientSpeechPlaybackCompleteMessage request, CancellationToken cancellationToken)
	{
		chatSessionGeneratingState.SpeechComplete(request);
		chatSessionServices.SpeechToTextManager.SpeechComplete();
		tunnel.Send(new ServerSpeechPlaybackCompleteMessage
		{
			SessionId = chatInstance.SessionId,
			MessageId = request.MessageId
		});
		if (continuationService.SpeechComplete(request.MessageId, chatInstance.Abort) == ChatFlowStates.WaitingForUserInput)
		{
			await transcriptionService.StartTranscriptionAsync("Speech complete", cancellationToken);
		}
		await DoOnSpeechCompleteEvent(request, cancellationToken);
	}

	private async ValueTask DoOnSpeechCompleteEvent(ClientSpeechPlaybackCompleteMessage request, CancellationToken cancellationToken)
	{
		await using (chatContinuousStorageService.Begin())
		{
			await actionScriptsService.RunAfterSpeechAsync(cancellationToken);
			if (!actionScriptsService.IsRegistered("speechComplete"))
			{
				return;
			}
			ChatMessageData chatMessageData = await chatInstance.GetOneMessageAsync((IReadOnlyList<ChatMessageData> x) => x.LastOrDefault((ChatMessageData m) => m.LocalId == request.MessageId), cancellationToken);
			if (chatMessageData != null)
			{
				ICharacterInferenceData characterWithFallback = chatInstance.GetCharacterWithFallback(chatMessageData.SenderId);
				await actionScriptsService.RunEventAsync(new SpeechCompleteActionScriptEvent
				{
					Character = characterWithFallback,
					Message = chatMessageData
				}, chatMessageData, characterWithFallback, cancellationToken);
			}
		}
	}
}

```

## Voxta.Core.Chats.Commands.Speech\SpeechPlaybackStartCommand.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.ScopedServices;
using Voxta.Core.Chats.Sessions;
using Voxta.Core.CommandsProcessing;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ClientMessages;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.Commands.Speech;

public class SpeechPlaybackStartCommand(ChatInstance chatInstance, IUserConnectionTunnel tunnel, IChatSessionGeneratingState chatSessionGeneratingState, IActionScriptsService actionScriptsService, IChatContinuousStorageService chatContinuousStorageService, IChatSessionServices chatSessionServices) : ISpeechPlaybackStartCommand, IChatInputCommand<ClientSpeechPlaybackStartMessage>, IChatCommand<ClientSpeechPlaybackStartMessage>, IChatCommand
{
	public async ValueTask ExecuteAsync(ClientSpeechPlaybackStartMessage request, CancellationToken cancellationToken)
	{
		chatSessionGeneratingState.SpeechChunkStart(request);
		chatSessionServices.SpeechToTextManager.SpeechChunkStart();
		tunnel.Send(new ServerSpeechPlaybackStartMessage
		{
			SessionId = chatInstance.SessionId,
			MessageId = request.MessageId,
			StartIndex = request.StartIndex,
			Duration = request.Duration
		});
		await DoOnSpeechStartEvent(request, cancellationToken);
	}

	private async ValueTask DoOnSpeechStartEvent(ClientSpeechPlaybackStartMessage request, CancellationToken cancellationToken)
	{
		if (!actionScriptsService.IsRegistered("speechStart"))
		{
			return;
		}
		ServerReplyChunkMessage chunk = chatSessionGeneratingState.GetChunk(request);
		ChatMessageData chatMessageData;
		if (chunk != null)
		{
			chatMessageData = new ChatMessageData
			{
				UserId = chatInstance.UserId,
				LocalId = request.MessageId,
				Role = ChatMessageRole.Assistant,
				Value = chunk.Text,
				SenderId = chunk.SenderId,
				Timestamp = DateTimeOffset.UtcNow,
				Index = -1,
				ConversationIndex = -1,
				ChatTime = -1L,
				ChatId = chatInstance.ChatId,
				Tokens = 0
			};
		}
		else
		{
			ChatMessageData chatMessageData2 = await chatInstance.GetOneMessageAsync((IReadOnlyList<ChatMessageData> x) => x.LastOrDefault((ChatMessageData m) => m.LocalId == request.MessageId), cancellationToken);
			if (chatMessageData2 == null)
			{
				return;
			}
			chatMessageData = chatMessageData2;
		}
		ICharacterInferenceData characterWithFallback = chatInstance.GetCharacterWithFallback(chatMessageData.SenderId);
		await using (chatContinuousStorageService.Begin())
		{
			await actionScriptsService.RunEventAsync(new SpeechStartActionScriptEvent
			{
				Character = characterWithFallback,
				Message = chatMessageData,
				StartIndex = request.StartIndex,
				IsNarrator = request.IsNarration
			}, chatMessageData, characterWithFallback, cancellationToken);
		}
	}
}

```

## Voxta.Core.Chats.Commands.Start\IStartChatCommand.cs
```csharp
using Voxta.Core.CommandsProcessing;

namespace Voxta.Core.Chats.Commands.Start;

public interface IStartChatCommand : IChatInputCommand<StartChatRequest>, IChatCommand<StartChatRequest>, IChatCommand
{
}

```

## Voxta.Core.Chats.Commands.Start\StartChatCommand.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Repositories;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Abstractions.Services.ChatAugmentations;
using Voxta.Abstractions.Utils;
using Voxta.Core.Chats.Commands.ChatFlow;
using Voxta.Core.Chats.Commands.Messages;
using Voxta.Core.Chats.Objects.Characters;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.ScopedServices;
using Voxta.Core.CommandsProcessing;
using Voxta.Core.Utils;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ClientMessages;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.Commands.Start;

public class StartChatCommand(ChatInstance chatInstance, IUserConnectionTunnel tunnel, IChatCommandsManager commandsManager, IMessageDispatcherService messageDispatcher, IChatAugmentationsServiceInstance augmentations, IChatTimer chatTimer, IActionScriptsService actionScriptsService, IChatContinuousStorageService chatContinuousStorageService, IUnitOfWorkFactory unitOfWorkFactory, TimeProvider timeProvider, ISpecialMessageFormatter specialMessageFormatter, IChatStartedMessageBuilderService chatStartedMessageBuilderService, IUpdateContextService updateContextService, ITranscriptionService transcriptionService, IDeleteLogicUtil deleteLogicUtil, IChatFlowService chatFlowService, ILogger<StartChatCommand> logger) : IStartChatCommand, IChatInputCommand<StartChatRequest>, IChatCommand<StartChatRequest>, IChatCommand
{
	public async ValueTask ExecuteAsync(StartChatRequest request, CancellationToken cancellationToken)
	{
		logger.LogDebug("Executing command: {Name}", "StartChatCommand");
		logger.LogInformation("Starting chat with {CharacterName} (Chat ID: {ChatId})", chatInstance.GetMainCharacter().Name, chatInstance.Chat.LocalId);
		bool initial = await chatInstance.GetOneMessageAsync((IReadOnlyList<ChatMessageData> x) => x.Count == 0, cancellationToken);
		IUserConnectionTunnel userConnectionTunnel = tunnel;
		userConnectionTunnel.Send(await chatStartedMessageBuilderService.CreateServerChatStartedMessageAsync(cancellationToken));
		if (actionScriptsService.IsRegistered("init"))
		{
			await using (chatContinuousStorageService.Begin())
			{
				await actionScriptsService.RunEventAsync(new InitActionScriptEvent(), null, chatInstance.User, cancellationToken);
			}
		}
		await updateContextService.HandleUpdateContextMessageAsync(request, cancellationToken);
		foreach (CharacterInstance character in chatInstance.Characters)
		{
			await using ICharacterInstanceWriteToken characterToken = await character.GetWriteTokenAsync(cancellationToken);
			await using IChatInstanceMessagesReadToken chatToken = await chatInstance.GetMessagesReadTokenAsync(cancellationToken);
			bool flag = chatToken.Messages.Count < 3;
			if (flag)
			{
				flag = await character.Memory.MemoryProviderInstance.PrefillAsync(chatToken.Messages, characterToken.Memories, cancellationToken);
			}
			bool memoryUpdated = flag;
			if ((await character.Memory.MemoryProviderInstance.UpdateMemoryWindowAsync(chatToken.Messages, characterToken.Memories, cancellationToken) || memoryUpdated) && chatInstance.InspectorEnabled)
			{
				tunnel.Send(chatInstance.CreateServerMemoryUpdatedMessage(character.Id, characterToken));
			}
		}
		foreach (ClientUpdateContextMessage item in augmentations.RegisterChatContext())
		{
			await updateContextService.HandleUpdateContextMessageAsync(item, cancellationToken);
		}
		await using (IChatInstanceMessagesWriteToken chatInstanceMessagesWriteToken = await chatInstance.GetMessagesWriteTokenAsync(cancellationToken))
		{
			long num;
			if (chatInstanceMessagesWriteToken.Messages.Count <= 0)
			{
				num = 0L;
			}
			else
			{
				List<ChatMessageData> messages = chatInstanceMessagesWriteToken.Messages;
				num = messages[messages.Count - 1].ChatTime;
			}
			long startTime = num;
			chatTimer.SetStartTime(startTime);
		}
		await using (IChatInstanceContextReadToken chatInstanceContextReadToken = await chatInstance.GetContextReadTokenAsync(cancellationToken))
		{
			foreach (ChatDocument document in chatInstanceContextReadToken.Documents)
			{
				tunnel.Send(new ServerDocumentUpdatedMessage
				{
					SessionId = chatInstance.SessionId,
					DocumentId = document.LocalId,
					Title = document.Title,
					TitleTokens = document.TitleTokens,
					Content = document.Content,
					ContentTokens = document.ContentTokens
				});
			}
		}
		logger.LogInformation("Chat ready!");
		ChatStyles chatStyle = chatInstance.GetChatStyle(chatInstance.GetMainCharacter().ChatStyle);
		await SendFirstMessageAsync(chatStyle != ChatStyles.Assistant && request.NotifyUserAwayReturn, initial, cancellationToken);
	}

	private async Task SendFirstMessageAsync(bool notifyUserAwayReturn, bool initial, CancellationToken cancellationToken)
	{
		ChatMessageData messagePlaceholder = new ChatMessageData
		{
			UserId = chatInstance.UserId,
			LocalId = Guid.Empty,
			Index = 0,
			Role = ChatMessageRole.User,
			Timestamp = timeProvider.GetUtcNow(),
			Value = "",
			ChatId = chatInstance.ChatId,
			ChatTime = 0L,
			ConversationIndex = 0,
			SenderId = chatInstance.User.Id
		};
		ChatMessageData lastMessage;
		if (initial)
		{
			await using (chatContinuousStorageService.Begin())
			{
				if (actionScriptsService.IsRegistered("start"))
				{
					bool hasBootstrapMessages = chatInstance.Scenario.BoostrapMessages.Length != 0;
					await actionScriptsService.RunEventAsync(new StartActionScriptEvent
					{
						HasBootstrapMessages = hasBootstrapMessages
					}, messagePlaceholder, chatInstance.User, cancellationToken);
				}
				if (await ProcessInitMessages(cancellationToken) == ChatMessageRole.User)
				{
					await chatFlowService.ForceChatFlowAsync(chatInstance.User);
					return;
				}
				lastMessage = await chatInstance.GetLastMessageAsync(cancellationToken);
			}
		}
		else
		{
			lastMessage = await chatInstance.GetLastMessageAsync(cancellationToken);
			await using (chatContinuousStorageService.Begin())
			{
				if (actionScriptsService.IsRegistered("resume"))
				{
					await actionScriptsService.RunEventAsync(new ResumeActionScriptEvent(), lastMessage ?? messagePlaceholder, chatInstance.User, cancellationToken);
				}
			}
		}
		if (chatInstance.ChatFlow == ChatFlowModes.Story)
		{
			commandsManager.EnqueueForeground<IContinueConversationCommand, ContinueConversationRequest>(new ContinueConversationRequest
			{
				Message = lastMessage
			});
			return;
		}
		if (lastMessage == null)
		{
			await transcriptionService.StartTranscriptionAsync("Starting chat", cancellationToken);
			tunnel.Send(new ServerChatFlowMessage
			{
				SessionId = chatInstance.SessionId,
				State = ChatFlowStates.WaitingForUserInput
			});
			return;
		}
		if (lastMessage.Role == ChatMessageRole.User)
		{
			commandsManager.EnqueueForeground<IContinueConversationCommand, ContinueConversationRequest>(new ContinueConversationRequest
			{
				Message = lastMessage
			});
			return;
		}
		DateTimeOffset utcNow = timeProvider.GetUtcNow();
		TimeSpan awayDuration = utcNow - await GetLastUpdateAsync(cancellationToken);
		if (!notifyUserAwayReturn || awayDuration.TotalMinutes < 10.0)
		{
			await transcriptionService.StartTranscriptionAsync("Starting chat", cancellationToken);
			tunnel.Send(new ServerChatFlowMessage
			{
				SessionId = chatInstance.SessionId,
				State = ChatFlowStates.WaitingForUserInput
			});
		}
		else
		{
			string text = specialMessageFormatter.ReturnFromAway(chatInstance.User.Name, chatInstance.GetMainCharacter().Name, awayDuration, chatInstance.GetMainCharacter().Culture);
			commandsManager.EnqueueForeground<ICreateForegroundMessageCommand, CreateForegroundMessageRequest>(new CreateForegroundMessageRequest
			{
				Role = ChatMessageRole.Event,
				Text = text,
				Character = chatInstance.GetMainCharacter()
			});
		}
	}

	private async Task<ChatMessageRole> ProcessInitMessages(CancellationToken cancellationToken)
	{
		bool endsWithEmptyUserMessage = false;
		SimpleMessageData[] boostrapMessages = chatInstance.Scenario.BoostrapMessages;
		foreach (SimpleMessageData simpleMessageData in boostrapMessages)
		{
			if (simpleMessageData != null && simpleMessageData.Role == ChatMessageRole.User && simpleMessageData.Value == "...")
			{
				endsWithEmptyUserMessage = true;
			}
			if (!endsWithEmptyUserMessage)
			{
				await messageDispatcher.DispatchMessage(simpleMessageData, cancellationToken);
			}
		}
		return endsWithEmptyUserMessage ? ChatMessageRole.User : ChatMessageRole.Assistant;
	}

	private async Task<DateTimeOffset> GetLastUpdateAsync(CancellationToken cancellationToken)
	{
		DateTimeOffset result;
		await using (IChatInstanceMessagesWriteToken token = await chatInstance.GetMessagesWriteTokenAsync(cancellationToken))
		{
			while (true)
			{
				if (token.Messages.Count == 0)
				{
					result = timeProvider.GetUtcNow();
					break;
				}
				List<ChatMessageData> messages = token.Messages;
				ChatMessageData lastMessage = messages[messages.Count - 1];
				if (lastMessage.Special != "ReturnFromAway")
				{
					result = lastMessage.Timestamp;
					break;
				}
				if (!chatInstance.Ephemeral)
				{
					await using IUnitOfWork uow = unitOfWorkFactory.CreateUnitOfWork();
					await deleteLogicUtil.DeleteMessage(uow, lastMessage);
				}
				token.Messages.Remove(lastMessage);
			}
		}
		return result;
	}
}

```

## Voxta.Core.Chats.Commands.Start\StartChatRequest.cs
```csharp
using System.Collections.Generic;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Commands.Start;

public class StartChatRequest : IUpdateContextMessage
{
	public string? ContextKey { get; init; }

	public ContextDefinition[]? Contexts { get; init; }

	public ScenarioActionDefinition[]? Actions { get; init; }

	public ScenarioEventDefinition[]? Events { get; init; }

	public string[]? SetFlags { get; init; }

	public Dictionary<string, bool>? EnableRoles { get; init; }

	public bool NotifyUserAwayReturn { get; init; }
}

```

## Voxta.Core.Chats.Commands.Triggers\AppTriggerCommand.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Connections;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.CommandsProcessing;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.Commands.Triggers;

public class AppTriggerCommand(ChatInstance chatInstance, IUserConnectionTunnel tunnel) : IAppTriggerCommand, IChatForegroundCommand<AppTriggerRequest>, IChatCommand<AppTriggerRequest>, IChatCommand
{
	public ValueTask ExecuteAsync(AppTriggerRequest request, CancellationToken cancellationToken)
	{
		cancellationToken.ThrowIfCancellationRequested();
		tunnel.Send(new ServerActionAppTriggerMessage
		{
			SessionId = chatInstance.SessionId,
			MessageId = request.MessageId,
			Name = request.Effect.Name,
			Arguments = request.Effect.Arguments,
			SenderId = request.Owner.Id,
			ScenarioRole = ((request.Owner is ICharacterInferenceData characterInferenceData) ? characterInferenceData.ScenarioRole : null)
		});
		return ValueTask.CompletedTask;
	}
}

```

## Voxta.Core.Chats.Commands.Triggers\AppTriggerRequest.cs
```csharp
using System;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Scripting.ActionScripts;

namespace Voxta.Core.Chats.Commands.Triggers;

public class AppTriggerRequest
{
	public required ScenarioAppTriggerEffect Effect { get; init; }

	public required ICharacterOrUserData Owner { get; init; }

	public Guid? MessageId { get; init; }
}

```

## Voxta.Core.Chats.Commands.Triggers\FailedToRunScriptException.cs
```csharp
using System;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Commands.Triggers;

public class FailedToRunScriptException : VoxtaChatSessionException
{
	public override bool CanRetry => false;

	public FailedToRunScriptException(string message, Exception innerException)
		: base(message, innerException)
	{
	}
}

```

## Voxta.Core.Chats.Commands.Triggers\IAppTriggerCommand.cs
```csharp
using Voxta.Core.CommandsProcessing;

namespace Voxta.Core.Chats.Commands.Triggers;

public interface IAppTriggerCommand : IChatForegroundCommand<AppTriggerRequest>, IChatCommand<AppTriggerRequest>, IChatCommand
{
}

```

## Voxta.Core.Chats.Commands.Triggers\IRunScriptCommand.cs
```csharp
using Voxta.Core.CommandsProcessing;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Commands.Triggers;

public interface IRunScriptCommand : IChatForegroundCommand<ClientRunScriptMessage>, IChatCommand<ClientRunScriptMessage>, IChatCommand
{
}

```

## Voxta.Core.Chats.Commands.Triggers\ITriggerActionCommand.cs
```csharp
using Voxta.Core.CommandsProcessing;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Commands.Triggers;

public interface ITriggerActionCommand : IChatInputCommand<ClientTriggerActionMessage>, IChatCommand<ClientTriggerActionMessage>, IChatCommand
{
}

```

## Voxta.Core.Chats.Commands.Triggers\ITriggerEventCommand.cs
```csharp
using Voxta.Core.CommandsProcessing;

namespace Voxta.Core.Chats.Commands.Triggers;

public interface ITriggerEventCommand : IChatInputCommand<TriggerEventRequest>, IChatCommand<TriggerEventRequest>, IChatCommand
{
}

```

## Voxta.Core.Chats.Commands.Triggers\RunScriptCommand.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.ScopedServices;
using Voxta.Core.CommandsProcessing;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Commands.Triggers;

public class RunScriptCommand(ChatInstance chat, IActionScriptEngine actionScriptEngine, IActionScriptsService actionScriptsService, IChatContinuousStorageService chatContinuousStorageService) : IRunScriptCommand, IChatForegroundCommand<ClientRunScriptMessage>, IChatCommand<ClientRunScriptMessage>, IChatCommand
{
	public async ValueTask ExecuteAsync(ClientRunScriptMessage request, CancellationToken cancellationToken)
	{
		string name = $"run_{Guid.NewGuid()}";
		try
		{
			IActionScript script = actionScriptEngine.AddAction(name, request.Script);
			ChatMessageData chatMessageData = await chat.GetLastMessageAsync(cancellationToken);
			ICharacterOrUserData characterOrUserData;
			if (chatMessageData != null && !(chatMessageData.SenderId == Guid.Empty))
			{
				if (!(chatMessageData.SenderId == chat.User.Id))
				{
					ICharacterOrUserData character = chat.GetCharacter(chatMessageData.SenderId);
					characterOrUserData = character;
				}
				else
				{
					ICharacterOrUserData character = chat.User;
					characterOrUserData = character;
				}
			}
			else
			{
				ICharacterOrUserData character = chat.GetMainCharacter();
				characterOrUserData = character;
			}
			ICharacterOrUserData owner = characterOrUserData;
			await using (chatContinuousStorageService.Begin())
			{
				await actionScriptsService.RunScriptAsync(script, chatMessageData, owner, null, cancellationToken);
			}
		}
		catch (Exception ex)
		{
			throw new FailedToRunScriptException("Failed to run user script: " + ex.Message, ex);
		}
	}
}

```

## Voxta.Core.Chats.Commands.Triggers\TriggerActionCommand.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Prompting;
using Voxta.Abstractions.Services.ActionInference;
using Voxta.Abstractions.Services.ChatAugmentations;
using Voxta.Abstractions.Templating;
using Voxta.Core.Chats.Objects.Characters;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.ScopedServices;
using Voxta.Core.CommandsProcessing;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ClientMessages;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.Commands.Triggers;

public class TriggerActionCommand(ChatInstance chatInstance, IUserConnectionTunnel tunnel, IPromptBuilder promptBuilder, IChatAugmentationsServiceInstance augmentations, IApplyActionEffectsService applyActionEffectsService, IChatContinuousStorageService chatContinuousStorageService, ILogger<TriggerActionCommand> logger) : ITriggerActionCommand, IChatInputCommand<ClientTriggerActionMessage>, IChatCommand<ClientTriggerActionMessage>, IChatCommand
{
	public async ValueTask ExecuteAsync(ClientTriggerActionMessage request, CancellationToken cancellationToken)
	{
		logger.LogDebug("Executing command: {Name}", "TriggerActionCommand");
		ChatMessageData message = await chatInstance.GetOneMessageAsync((IReadOnlyList<ChatMessageData> msgs) => msgs.LastOrDefault((ChatMessageData m) => m.LocalId == request.MessageId), cancellationToken);
		if (message == null)
		{
			logger.LogWarning("Triggered action was specified on a message that does not exist: {MessageId}", request.MessageId);
			return;
		}
		IScenarioActionInstance[] functions;
		await using (IChatInstanceContextWriteToken chatInstanceContextWriteToken = await chatInstance.GetContextWriteTokenAsync(cancellationToken))
		{
			functions = (from a in chatInstanceContextWriteToken.Actions.SelectMany<KeyValuePair<string, List<IScenarioActionInstance>>, IScenarioActionInstance>((KeyValuePair<string, List<IScenarioActionInstance>> s) => s.Value)
				where a.Name == request.Value
				select a).ToArray();
		}
		IScenarioActionInstance fn;
		if (functions.Length == 1)
		{
			fn = functions[0];
		}
		else
		{
			if (functions.Length <= 1)
			{
				throw new InvalidOperationException("Unexpected triggered function name " + request.Value + ", this function does not exist");
			}
			fn = functions.FirstOrDefault((IScenarioActionInstance f) => f.Conditions.Match(chatInstance, message)) ?? throw new InvalidOperationException("Unexpected triggered function name " + request.Value + ", this function does not exist");
		}
		ITemplateModel model = promptBuilder.CreateChatModel(chatInstance, chatInstance.GetCharacterWithFallback(message.SenderId));
		ActionInvocation action = new ActionInvocation(promptBuilder.RenderFunction(fn, model), fn.Timing.IsUserFunction() ? ChatMessageRole.User : ChatMessageRole.Assistant);
		await using (chatContinuousStorageService.Begin())
		{
			await applyActionEffectsService.ApplyActionEffects(message, fn, action, cancellationToken);
			ServerActionMessage obj = new ServerActionMessage
			{
				SessionId = chatInstance.SessionId,
				ContextKey = fn.ContextKey,
				Layer = ((fn.Layer == "") ? null : fn.Layer),
				Role = message.Role,
				Value = request.Value
			};
			ActionInvocationArgument[]? arguments = request.Arguments;
			obj.Arguments = ((arguments != null && arguments.Length != 0) ? request.Arguments : null);
			obj.SenderId = message.SenderId;
			obj.ScenarioRole = ((message.Role != ChatMessageRole.Assistant || !(message.SenderId != Guid.Empty)) ? null : chatInstance.Characters.FirstOrDefault((CharacterInstance c) => c.Id == message.SenderId)?.ScenarioRole);
			ServerActionMessage serverActionMessage = obj;
			if (!(await augmentations.TryHandleActionInference(message, serverActionMessage, cancellationToken)))
			{
				tunnel.Send(serverActionMessage);
			}
		}
	}
}

```

## Voxta.Core.Chats.Commands.Triggers\TriggerEventCommand.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Services.ChatAugmentations;
using Voxta.Core.Chats.Objects.Characters;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.ScopedServices;
using Voxta.Core.CommandsProcessing;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.Commands.Triggers;

public class TriggerEventCommand(ChatInstance chatInstance, IProcessScenarioEventService processScenarioEventService, IApplyActionEffectsService applyActionEffectsService, IChatContinuousStorageService chatContinuousStorageService, IInspectorService inspectorService, IChatAugmentationsServiceInstance augmentations, ILogger<TriggerEventCommand> logger) : ITriggerEventCommand, IChatInputCommand<TriggerEventRequest>, IChatCommand<TriggerEventRequest>, IChatCommand
{
	public async ValueTask ExecuteAsync(TriggerEventRequest request, CancellationToken cancellationToken)
	{
		logger.LogDebug("Executing command: {Name}", "TriggerEventCommand");
		string eventId = request.Id;
		ChatMessageData previousMessage = await chatInstance.GetOneMessageAsync((IReadOnlyList<ChatMessageData> msgs) => msgs.LastOrDefault((ChatMessageData m) => m.Role.IsConversation()), cancellationToken);
		await using (chatContinuousStorageService.Begin())
		{
			if ((await processScenarioEventService.ProcessScenarioEvent(previousMessage, FunctionTiming.Manual, eventId, cancellationToken)).Item1 != null)
			{
				return;
			}
			ServerActionMessage serverActionMessage = new ServerActionMessage
			{
				Value = eventId,
				SessionId = chatInstance.SessionId,
				SenderId = chatInstance.User.Id,
				Role = ChatMessageRole.User
			};
			inspectorService.ActionExecuted(previousMessage?.LocalId, serverActionMessage, FunctionTiming.Manual);
			if (!(await augmentations.TryHandleActionInference(previousMessage, serverActionMessage, cancellationToken)))
			{
				Guid previousSenderId = previousMessage?.SenderId ?? Guid.Empty;
				CharacterInstance character = ((previousSenderId != Guid.Empty) ? chatInstance.Characters.FirstOrDefault((CharacterInstance c) => c.Id == previousSenderId) : null);
				IScenarioActionInstance scenarioActionInstance = (await chatInstance.ResolveActionsAsync(previousMessage, FunctionTiming.Manual, character?.ScenarioRole, cancellationToken)).FirstOrDefault((IScenarioActionInstance a) => a.Name.Equals(eventId, StringComparison.InvariantCultureIgnoreCase));
				if (scenarioActionInstance == null)
				{
					logger.LogWarning("Triggered event not found: {Event}", eventId);
				}
				else
				{
					logger.LogInformation("Triggered action: {Event}", scenarioActionInstance.Name);
					await applyActionEffectsService.ApplyActionEffects(scenarioActionInstance.EffectInstance, previousMessage, character ?? chatInstance.GetMainCharacter(), null, cancellationToken);
				}
			}
		}
	}
}

```

## Voxta.Core.Chats.Commands.Triggers\TriggerEventRequest.cs
```csharp
namespace Voxta.Core.Chats.Commands.Triggers;

public class TriggerEventRequest
{
	public required string Id { get; init; }
}

```

## Voxta.Core.Chats.Commands.Typing\ITypingEndCommand.cs
```csharp
using Voxta.Core.CommandsProcessing;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Commands.Typing;

public interface ITypingEndCommand : IChatInputCommand<ClientTypingEndMessage>, IChatCommand<ClientTypingEndMessage>, IChatCommand
{
}

```

## Voxta.Core.Chats.Commands.Typing\ITypingStartCommand.cs
```csharp
using Voxta.Core.CommandsProcessing;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Commands.Typing;

public interface ITypingStartCommand : IChatInputCommand<ClientTypingStartMessage>, IChatCommand<ClientTypingStartMessage>, IChatCommand
{
}

```

## Voxta.Core.Chats.Commands.Typing\TypingEndCommand.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.ScopedServices;
using Voxta.Core.CommandsProcessing;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Commands.Typing;

public class TypingEndCommand(ChatInstance chatInstance, IChatContinuousStorageService chatContinuousStorageService, IActionScriptsService actionScriptsService, ILogger<TypingEndCommand> logger) : ITypingEndCommand, IChatInputCommand<ClientTypingEndMessage>, IChatCommand<ClientTypingEndMessage>, IChatCommand
{
	public async ValueTask ExecuteAsync(ClientTypingEndMessage request, CancellationToken cancellationToken)
	{
		logger.LogDebug("Executing command: {Name}", "TypingEndCommand");
		if (actionScriptsService.IsRegistered("typingEnd"))
		{
			await using (chatContinuousStorageService.Begin())
			{
				await actionScriptsService.RunEventAsync(new TypingEndScriptEvent
				{
					Sent = request.Sent
				}, null, chatInstance.User, cancellationToken);
			}
		}
	}
}

```

## Voxta.Core.Chats.Commands.Typing\TypingStartCommand.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.ScopedServices;
using Voxta.Core.CommandsProcessing;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Commands.Typing;

public class TypingStartCommand(ChatInstance chatInstance, IActionScriptsService actionScriptsService, IChatContinuousStorageService chatContinuousStorageService, ILogger<TypingStartCommand> logger) : ITypingStartCommand, IChatInputCommand<ClientTypingStartMessage>, IChatCommand<ClientTypingStartMessage>, IChatCommand
{
	public async ValueTask ExecuteAsync(ClientTypingStartMessage request, CancellationToken cancellationToken)
	{
		logger.LogDebug("Executing command: {Name}", "TypingStartCommand");
		if (actionScriptsService.IsRegistered("typingStart"))
		{
			await using (chatContinuousStorageService.Begin())
			{
				await actionScriptsService.RunEventAsync(new TypingStartScriptEvent(), null, chatInstance.User, cancellationToken);
			}
		}
	}
}

```

## Voxta.Core.Chats.Commands.Vision\IVisionCaptureCommand.cs
```csharp
using Voxta.Core.CommandsProcessing;

namespace Voxta.Core.Chats.Commands.Vision;

public interface IVisionCaptureCommand : IChatInputCommand<VisionCaptureRequest>, IChatCommand<VisionCaptureRequest>, IChatCommand
{
}

```

## Voxta.Core.Chats.Commands.Vision\VisionCaptureCommand.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.DependencyInjection;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Services.VisionCapture;
using Voxta.Abstractions.Utils;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.ScopedServices;
using Voxta.Core.CommandsProcessing;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Commands.Vision;

public class VisionCaptureCommand(ChatInstance chatInstance, IChatMessageFactory chatMessageFactory, ITunnelMessagesService tunnelMessagesService, IHandleAttachmentsService handleAttachmentsService, IVisionCaptureServicesAccessor visionCaptureServicesAccessor, ILogger<VisionCaptureCommand> logger) : IVisionCaptureCommand, IChatInputCommand<VisionCaptureRequest>, IChatCommand<VisionCaptureRequest>, IChatCommand
{
	public async ValueTask ExecuteAsync(VisionCaptureRequest request, CancellationToken cancellationToken)
	{
		logger.LogDebug("Executing command: {Name}", "VisionCaptureCommand");
		ComputerVisionSource requestedSource = request.Source ?? ComputerVisionSource.Eyes;
		IVisionCaptureService visionCaptureService = visionCaptureServicesAccessor.Get(requestedSource);
		if (!visionCaptureService.Enabled)
		{
			logger.LogWarning("Cannot capture image, no vision capture services are available");
			return;
		}
		IImage image = await visionCaptureService.CaptureImageAsync(requestedSource, cancellationToken);
		if (image == null)
		{
			logger.LogWarning("Failed to capture image");
			return;
		}
		if (request.Source.HasValue && image.Source != requestedSource)
		{
			logger.LogWarning("Captured image source does not match the requested source");
			return;
		}
		ChatMessageData message = await chatMessageFactory.CreateUserMessageAsync(chatMessageFactory.CreateMessageId(), chatInstance.User, "", null, cancellationToken);
		await handleAttachmentsService.AttachImagesAsync(message, chatInstance.GetMainCharacter(), new _003C_003Ez__ReadOnlySingleElementList<IImage>(image), describe: true, cancellationToken);
		await chatMessageFactory.InsertMessageInHistoryAndSaveAsync(message, cancellationToken);
		tunnelMessagesService.SendMessageUpdated(message);
	}
}

```

## Voxta.Core.Chats.Commands.Vision\VisionCaptureRequest.cs
```csharp
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Commands.Vision;

public class VisionCaptureRequest : ClientChatSessionMessage
{
	public ComputerVisionSource? Source { get; init; }
}

```

## Voxta.Core.Chats.Commands\ChatCommandsManager.cs
```csharp
using System;
using Microsoft.Extensions.DependencyInjection;
using Voxta.Core.CommandsProcessing;

namespace Voxta.Core.Chats.Commands;

public class ChatCommandsManager(IServiceProvider sp, IChatCommandsReceiver commandsReceiver) : IChatCommandsManager
{
	public void EnqueueInput<TCommand, TParameter>(TParameter parameter) where TCommand : IChatInputCommand<TParameter> where TParameter : class
	{
		TCommand requiredService = sp.GetRequiredService<TCommand>();
		commandsReceiver.EnqueueInputCommand(requiredService, parameter);
	}

	public void EnqueueForeground<TCommand, TParameter>(TParameter parameter) where TCommand : IChatForegroundCommand<TParameter> where TParameter : class
	{
		TCommand requiredService = sp.GetRequiredService<TCommand>();
		commandsReceiver.EnqueueForegroundCommand(requiredService, parameter);
	}
}

```

## Voxta.Core.Chats.Commands\IChatCommandsManager.cs
```csharp
using Voxta.Core.CommandsProcessing;

namespace Voxta.Core.Chats.Commands;

public interface IChatCommandsManager
{
	void EnqueueInput<TCommand, TParameter>(TParameter parameter) where TCommand : IChatInputCommand<TParameter> where TParameter : class;

	void EnqueueForeground<TCommand, TParameter>(TParameter parameter) where TCommand : IChatForegroundCommand<TParameter> where TParameter : class;
}

```

## Voxta.Core.Chats.Commands\ServiceCollectionExtensions.cs
```csharp
using Microsoft.Extensions.DependencyInjection;
using Voxta.Core.Chats.Commands.Chat;
using Voxta.Core.Chats.Commands.ChatFlow;
using Voxta.Core.Chats.Commands.ClientMessage;
using Voxta.Core.Chats.Commands.Context;
using Voxta.Core.Chats.Commands.Documents;
using Voxta.Core.Chats.Commands.Images;
using Voxta.Core.Chats.Commands.Messages;
using Voxta.Core.Chats.Commands.Participants;
using Voxta.Core.Chats.Commands.Reply;
using Voxta.Core.Chats.Commands.Scripts;
using Voxta.Core.Chats.Commands.Speech;
using Voxta.Core.Chats.Commands.Start;
using Voxta.Core.Chats.Commands.Triggers;
using Voxta.Core.Chats.Commands.Typing;
using Voxta.Core.Chats.Commands.Vision;

namespace Voxta.Core.Chats.Commands;

public static class ServiceCollectionExtensions
{
	public static void AddChatCommands(this IServiceCollection services)
	{
		services.AddTransient<IChatCommandsManager, ChatCommandsManager>();
		services.AddTransient<IStartChatCommand, StartChatCommand>();
		services.AddTransient<IAddParticipantCommand, AddParticipantCommand>();
		services.AddTransient<IRemoveParticipantCommand, RemoveParticipantCommand>();
		services.AddTransient<IUpdateExistingMessageCommand, UpdateExistingMessageCommand>();
		services.AddTransient<IDeleteMessageCommand, DeleteMessageCommand>();
		services.AddTransient<IUpdateContextCommand, UpdateContextCommand>();
		services.AddTransient<IPublishContextCommand, PublishContextCommand>();
		services.AddTransient<IVisionCaptureCommand, VisionCaptureCommand>();
		services.AddTransient<IPauseCommand, PauseCommand>();
		services.AddTransient<IProcessClientSendMessageCommand, ProcessClientSendMessageCommand>();
		services.AddTransient<IReceiveUserMessageCommand, ReceiveUserMessageCommand>();
		services.AddTransient<IGenerateStoryCommand, GenerateStoryCommand>();
		services.AddTransient<ITriggerActionCommand, TriggerActionCommand>();
		services.AddTransient<ITriggerEventCommand, TriggerEventCommand>();
		services.AddTransient<IAppTriggerCommand, AppTriggerCommand>();
		services.AddTransient<IRunScriptCommand, RunScriptCommand>();
		services.AddTransient<IGenerateReplyCommand, GenerateReplyCommand>();
		services.AddTransient<IRevertMessageCommand, RevertMessageCommand>();
		services.AddTransient<ICreateForegroundMessageCommand, CreateForegroundMessageCommand>();
		services.AddTransient<IInterruptCommand, InterruptCommand>();
		services.AddTransient<IRetryCommand, RetryCommand>();
		services.AddTransient<ISpeechOnlyCommand, SpeechOnlyCommand>();
		services.AddTransient<ISummarizeCommand, SummarizeCommand>();
		services.AddTransient<IContinueConversationCommand, ContinueConversationCommand>();
		services.AddTransient<IProcessInterruptedReplyCommand, ProcessInterruptedReplyCommand>();
		services.AddTransient<ISpeechPlaybackStartCommand, SpeechPlaybackStartCommand>();
		services.AddTransient<ISpeechPlaybackCompleteCommand, SpeechPlaybackCompleteCommand>();
		services.AddTransient<ISpeakCommand, SpeakCommand>();
		services.AddTransient<ITypingStartCommand, TypingStartCommand>();
		services.AddTransient<ITypingEndCommand, TypingEndCommand>();
		services.AddTransient<ITriggerScriptEventCommand, TriggerScriptEventCommand>();
		services.AddTransient<IGenerateSuggestionsCommand, GenerateSuggestionsCommand>();
		services.AddTransient<IUpdateChatCommand, UpdateChatCommand>();
		services.AddTransient<IGenerateImageCommand, GenerateImageCommand>();
		services.AddTransient<IUpdateDocumentCommand, UpdateDocumentCommand>();
	}
}

```

## Voxta.Core.Chats.Conditions\ChatTimeConditions.cs
```csharp
using System;
using Voxta.Abstractions.Chats.Conditions;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Model;

namespace Voxta.Core.Chats.Conditions;

public class ChatTimeConditions(int minMs, int maxMs, string? sinceFlag) : IChatConditions
{
	public bool Empty => false;

	public bool Match(IChatInferenceData chat, ChatMessageData? message, bool forDisplay = false)
	{
		if (forDisplay)
		{
			return true;
		}
		if (message == null)
		{
			return false;
		}
		long num = message.ChatTime;
		if (sinceFlag != null)
		{
			FlagState flag = chat.State.GetFlag((FlagState f) => f.Name == sinceFlag);
			if (flag == null)
			{
				return false;
			}
			num -= flag.MessageChatTime.GetValueOrDefault();
		}
		if (num < minMs)
		{
			return false;
		}
		if (maxMs <= 0)
		{
			return true;
		}
		if (num >= maxMs)
		{
			return true;
		}
		double num2 = (double)(maxMs - minMs - (num - minMs)) + 1.0;
		double num3 = 1.0 / num2;
		return Random.Shared.NextDouble() <= num3;
	}

	public override string ToString()
	{
		return $"ChatTime [{minMs}..{maxMs}]";
	}
}

```

## Voxta.Core.Chats.Conditions\ChatTimeConditionsFactory.cs
```csharp
using Voxta.Abstractions.Chats.Conditions;

namespace Voxta.Core.Chats.Conditions;

public static class ChatTimeConditionsFactory
{
	public static IChatConditions Parse(int? minSeconds, int? maxSeconds, string? sinceFlag)
	{
		if (!minSeconds.HasValue && !maxSeconds.HasValue)
		{
			return EmptyConditions.Instance;
		}
		if (minSeconds <= 0 && maxSeconds <= 0)
		{
			return EmptyConditions.Instance;
		}
		return new ChatTimeConditions((minSeconds * 1000).GetValueOrDefault(), (maxSeconds * 1000).GetValueOrDefault(), sinceFlag);
	}
}

```

## Voxta.Core.Chats.Conditions\CompositeConditions.cs
```csharp
using System.Linq;
using Voxta.Abstractions.Chats.Conditions;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Model;

namespace Voxta.Core.Chats.Conditions;

public class CompositeConditions : IChatConditions
{
	private readonly IChatConditions[] _conditions = conditions.Where((IChatConditions c) => c != EmptyConditions.Instance).ToArray();

	public bool Empty => _conditions.Length == 0;

	public CompositeConditions(IChatConditions[] conditions)
	{
	}

	public bool Match(IChatInferenceData chat, ChatMessageData? message, bool forDisplay = false)
	{
		if (_conditions.Length == 0)
		{
			return true;
		}
		return _conditions.All((IChatConditions c) => c.Match(chat, message, forDisplay));
	}

	public override string ToString()
	{
		return string.Join(" && ", _conditions.Select((IChatConditions c) => c.ToString()));
	}
}

```

## Voxta.Core.Chats.Conditions\MessageCountConditions.cs
```csharp
using System;
using Voxta.Abstractions.Chats.Conditions;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Model;

namespace Voxta.Core.Chats.Conditions;

public class MessageCountConditions(int min, int max, string? sinceFlag) : IChatConditions
{
	public bool Empty => false;

	public bool Match(IChatInferenceData chat, ChatMessageData? message, bool forDisplay = false)
	{
		if (forDisplay)
		{
			return true;
		}
		if (message == null)
		{
			return false;
		}
		int num = message.ConversationIndex;
		if (sinceFlag != null)
		{
			FlagState flag = chat.State.GetFlag((FlagState f) => f.Name == sinceFlag);
			if (flag == null)
			{
				return false;
			}
			num -= flag.MessageIndex.GetValueOrDefault();
		}
		if (num < min)
		{
			return false;
		}
		if (max <= 0)
		{
			return true;
		}
		if (num >= max)
		{
			return true;
		}
		double num2 = (double)(max - min - (num - min)) + 1.0;
		double num3 = 1.0 / num2;
		return Random.Shared.NextDouble() <= num3;
	}

	public override string ToString()
	{
		return $"Message [{min}..{max}]";
	}
}

```

## Voxta.Core.Chats.Conditions\MessageCountConditionsFactory.cs
```csharp
using Voxta.Abstractions.Chats.Conditions;

namespace Voxta.Core.Chats.Conditions;

public static class MessageCountConditionsFactory
{
	public static IChatConditions Parse(int? min, int? max, string? sinceFlag)
	{
		if (!min.HasValue && !max.HasValue)
		{
			return EmptyConditions.Instance;
		}
		if (min <= 0 && max <= 0)
		{
			return EmptyConditions.Instance;
		}
		return new MessageCountConditions(min.GetValueOrDefault(), max.GetValueOrDefault(), sinceFlag);
	}
}

```

## Voxta.Core.Chats.Conditions\ProbabilityConditions.cs
```csharp
using System;
using Voxta.Abstractions.Chats.Conditions;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Model;

namespace Voxta.Core.Chats.Conditions;

public class ProbabilityConditions(double value) : IChatConditions
{
	public bool Empty => false;

	public bool Match(IChatInferenceData chat, ChatMessageData? message, bool forDisplay = false)
	{
		if (forDisplay)
		{
			return true;
		}
		return Random.Shared.NextDouble() <= value;
	}

	public override string ToString()
	{
		return $"Random <= {value}";
	}
}

```

## Voxta.Core.Chats.Conditions\ProbabilityConditionsFactory.cs
```csharp
using System;
using Voxta.Abstractions.Chats.Conditions;

namespace Voxta.Core.Chats.Conditions;

public static class ProbabilityConditionsFactory
{
	public static IChatConditions Parse(double? value)
	{
		if (!value.HasValue)
		{
			return EmptyConditions.Instance;
		}
		bool flag;
		if (value.HasValue)
		{
			double valueOrDefault = value.GetValueOrDefault();
			if (valueOrDefault < -0.01 || valueOrDefault > 1.01)
			{
				flag = true;
				goto IL_003e;
			}
		}
		flag = false;
		goto IL_003e;
		IL_00a0:
		if (flag)
		{
			return EmptyConditions.Instance;
		}
		return new ProbabilityConditions(Math.Clamp(value.Value, 0.0, 1.0));
		IL_003e:
		if (flag)
		{
			throw new ArgumentOutOfRangeException("value", $"Probability value must be between 0 and 1, was {value}");
		}
		if (value.HasValue)
		{
			double valueOrDefault = value.GetValueOrDefault();
			if (valueOrDefault <= 0.0 || valueOrDefault >= 1.0)
			{
				flag = true;
				goto IL_00a0;
			}
		}
		flag = false;
		goto IL_00a0;
	}
}

```

## Voxta.Core.Chats.Conditions\RegexConditions.cs
```csharp
using System.Linq;
using System.Text.RegularExpressions;
using Voxta.Abstractions.Chats.Conditions;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Model;

namespace Voxta.Core.Chats.Conditions;

public class RegexConditions(Regex[] regexes) : IChatConditions
{
	public bool Empty => regexes.Length == 0;

	public bool Match(IChatInferenceData chat, ChatMessageData? message, bool forDisplay = false)
	{
		if (regexes.Length == 0)
		{
			return true;
		}
		if (forDisplay)
		{
			return true;
		}
		if (message == null || string.IsNullOrEmpty(message.Value))
		{
			return false;
		}
		return regexes.All((Regex r) => r.IsMatch(message.Value));
	}

	public override string ToString()
	{
		return string.Join(" && ", regexes.Select((Regex r) => $"/{r}/"));
	}
}

```

## Voxta.Core.Chats.Conditions\RegexConditionsFactory.cs
```csharp
using System.Linq;
using System.Text.RegularExpressions;
using Voxta.Abstractions.Chats.Conditions;

namespace Voxta.Core.Chats.Conditions;

public static class RegexConditionsFactory
{
	public static IChatConditions Parse(string[] values)
	{
		if (values.Length == 0)
		{
			return EmptyConditions.Instance;
		}
		return new RegexConditions(values.Select((string x) => new Regex(x, RegexOptions.IgnoreCase)).ToArray());
	}
}

```

## Voxta.Core.Chats.Conditions\RoleConditions.cs
```csharp
using Voxta.Abstractions.Chats.Conditions;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Model;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Conditions;

public class RoleConditions(string role) : IChatConditions
{
	public bool Empty => false;

	public bool Match(IChatInferenceData chat, ChatMessageData? message, bool forDisplay = false)
	{
		if (forDisplay)
		{
			return true;
		}
		if (message == null)
		{
			return false;
		}
		if (message.Role != ChatMessageRole.Assistant)
		{
			return false;
		}
		ICharacterInferenceData characterByRole = chat.GetCharacterByRole(role);
		if (characterByRole == null)
		{
			return false;
		}
		return message.SenderId == characterByRole.Id;
	}

	public override string ToString()
	{
		return "Role == " + role;
	}
}

```

## Voxta.Core.Chats.Conditions\RoleConditionsFactory.cs
```csharp
using Voxta.Abstractions.Chats.Conditions;

namespace Voxta.Core.Chats.Conditions;

public static class RoleConditionsFactory
{
	public static IChatConditions Parse(string? value)
	{
		if (string.IsNullOrEmpty(value))
		{
			return EmptyConditions.Instance;
		}
		return new RoleConditions(value);
	}
}

```

## Voxta.Core.Chats.Conditions\SingleFlagCondition.cs
```csharp
using System.Collections.Generic;
using System.Linq;
using Voxta.Abstractions.Chats.Conditions;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Model;

namespace Voxta.Core.Chats.Conditions;

public class SingleFlagCondition(string flag, bool isTrue) : IChatConditions
{
	public bool Empty => false;

	public bool Match(IChatInferenceData chat, ChatMessageData? message, bool forDisplay = false)
	{
		return chat.State.GetFlags((IReadOnlyCollection<FlagState> flags) => flags.Any((FlagState f) => f.Name == flag)) == isTrue;
	}

	public override string ToString()
	{
		return $"Once == {flag} == {isTrue}";
	}
}

```

## Voxta.Core.Chats.Conditions\TrueFalseConditions.cs
```csharp
using Voxta.Abstractions.Chats.Conditions;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Model;

namespace Voxta.Core.Chats.Conditions;

public class TrueFalseConditions(bool value) : IChatConditions
{
	public static readonly TrueFalseConditions True = new TrueFalseConditions(value: true);

	public static readonly TrueFalseConditions False = new TrueFalseConditions(value: false);

	public bool Empty => false;

	public bool Match(IChatInferenceData chat, ChatMessageData? message, bool forDisplay = false)
	{
		return value;
	}

	public override string ToString()
	{
		return $"{value}";
	}
}

```

## Voxta.Core.Chats.Creation\ChatFactory.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Creation;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Repositories;
using Voxta.Abstractions.Runtime;
using Voxta.Common;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Creation;

public class ChatFactory(IUnitOfWorkFactory unitOfWorkFactory, IEphemeralChatRepository ephemeralChatRepository, TimeProvider timeProvider, ILogger<ChatFactory> logger) : IChatFactory
{
	public async Task<ChatResources> LoadChatResourcesAsync(ChatResourcesRequest request, CancellationToken cancellationToken)
	{
		if (request.Characters.Length == 0)
		{
			throw new InvalidOperationException("At least one character is required");
		}
		List<ChatResourceStatusInformation> missingResources = new List<ChatResourceStatusInformation>();
		ChatResources result;
		await using (IUnitOfWork uow = unitOfWorkFactory.CreateUnitOfWork())
		{
			DependencyInfo[] dependencies = request.Dependencies;
			foreach (DependencyInfo dependency in dependencies)
			{
				ChatResourceInformation chatResourceInformation = await uow.GetRepository(dependency.Kind).GetChatResourceInformationAsync(request.UserId, dependency.Id, cancellationToken);
				if (chatResourceInformation.Status != ChatResourceAvailabilityStatus.Exists)
				{
					missingResources.Add(new ChatResourceStatusInformation(chatResourceInformation.Kind, chatResourceInformation.Id, ChatResourceAvailabilityStatus.NotFound));
				}
				else if (!chatResourceInformation.Version.ToSemVerVersion().IsSame(chatResourceInformation.Version.ToSemVerVersion()))
				{
					if (chatResourceInformation.AppControlled)
					{
						missingResources.Add(new ChatResourceStatusInformation(chatResourceInformation.Kind, chatResourceInformation.Id, ChatResourceAvailabilityStatus.VersionMismatch));
						continue;
					}
					logger.LogWarning("Scenario {ScenarioId} expected version {ExpectedVersion} but has {ActualVersion}, because it is not app controlled, it will not be updated", chatResourceInformation.Id, chatResourceInformation.Version, dependency.Version);
				}
			}
			Scenario scenario;
			if (!request.Scenario.IsNullOrEmpty())
			{
				scenario = await uow.Scenarios.GetByIdAsync(request.UserId, request.Scenario.Value, cancellationToken);
				if (scenario == null)
				{
					missingResources.Add(new ChatResourceStatusInformation(ChatResourceKind.Scenario, request.Scenario.Value, ChatResourceAvailabilityStatus.NotFound));
				}
				else if (!scenario.Version.ToSemVerVersion().IsSame(request.Scenario.Value.Version))
				{
					if (scenario.AppControlled)
					{
						missingResources.Add(new ChatResourceStatusInformation(ChatResourceKind.Scenario, request.Scenario.Value, ChatResourceAvailabilityStatus.VersionMismatch));
					}
					else
					{
						logger.LogWarning("Scenario {ScenarioId} expected version {ExpectedVersion} but has {ActualVersion}, because it is not app controlled, it will not be updated", request.Scenario.Value.Guid, request.Scenario.Value.Version, scenario.Version);
					}
				}
			}
			else
			{
				scenario = null;
			}
			Guid? parentScenarioId = scenario?.ParentId;
			Scenario parentScenario;
			if (parentScenarioId.HasValue)
			{
				parentScenario = await uow.Scenarios.GetByIdAsync(request.UserId, parentScenarioId.Value, cancellationToken);
				if (parentScenario == null)
				{
					missingResources.Add(new ChatResourceStatusInformation(ChatResourceKind.Scenario, parentScenarioId.Value, ChatResourceAvailabilityStatus.NotFound));
				}
				else if (parentScenario.ParentId.HasValue)
				{
					throw new InvalidOperationException("Parent scenarios cannot have parent scenarios");
				}
			}
			else
			{
				parentScenario = null;
			}
			List<Guid> characterIds = request.Characters.Select((VersionedGuid c) => c.Guid).ToList();
			Character[] characters = await uow.Characters.GetManyByIdAsync(request.UserId, characterIds, cancellationToken);
			if (characters.Length != characterIds.Count)
			{
				missingResources.AddRange(from x in characterIds.Except(characters.Select((Character c) => c.LocalId))
					select new ChatResourceStatusInformation(ChatResourceKind.Character, x, ChatResourceAvailabilityStatus.NotFound));
			}
			Character[] sortedCharacters = characterIds.Select((Guid x) => characters.FirstOrDefault((Character c) => c.LocalId == x)).WhereNotNull().ToArray();
			Character[] array = sortedCharacters;
			foreach (Character character in array)
			{
				VersionedGuid versionedGuid = request.Characters.FirstOrDefault((VersionedGuid c) => c.Guid == character.LocalId);
				if (versionedGuid.Guid == Guid.Empty || character.Version.ToSemVerVersion().IsSame(versionedGuid.Version))
				{
					continue;
				}
				if (character.AppControlled)
				{
					missingResources.Add(new ChatResourceStatusInformation(ChatResourceKind.Character, character.LocalId, ChatResourceAvailabilityStatus.VersionMismatch));
					continue;
				}
				logger.LogWarning("Character {CharacterId} expected version {ExpectedVersion} but has {ActualVersion}, because it is not app controlled, it will not be updated", character.LocalId, request.Characters.First((VersionedGuid c) => c.Guid == character.LocalId).Version, character.Version);
			}
			Guid? narratorCharacterId = scenario?.NarratorCharacterId ?? parentScenario?.NarratorCharacterId ?? (ShouldUseDefaultNarrator((characters.Length != 0) ? characters[0].ChatStyle : ChatStyles.Undefined, scenario?.ChatStyle ?? ChatStyles.Undefined, parentScenario?.ChatStyle ?? ChatStyles.Undefined) ? request.DefaultNarratorCharacterId : ((Guid?)null));
			Character character3;
			if (narratorCharacterId.HasValue)
			{
				Character character2 = characters.FirstOrDefault((Character c) => c.LocalId == narratorCharacterId.Value);
				if (character2 == null)
				{
					character2 = await uow.Characters.GetByIdAsync(request.UserId, narratorCharacterId.Value, cancellationToken);
				}
				character3 = character2;
			}
			else
			{
				character3 = null;
			}
			Character narrator = character3;
			if (missingResources.Count > 0)
			{
				throw new MissingChatResourcesException(missingResources.ToArray());
			}
			result = new ChatResources
			{
				UserId = request.UserId,
				Characters = sortedCharacters,
				Narrator = narrator,
				ParentScenario = parentScenario,
				Scenario = scenario
			};
		}
		return result;
	}

	private static bool ShouldUseDefaultNarrator(ChatStyles character, ChatStyles scenario, ChatStyles parentScenario)
	{
		ChatStyles chatStyles = ((scenario != ChatStyles.Undefined) ? scenario : ((parentScenario == ChatStyles.Undefined) ? character : parentScenario));
		if ((uint)(chatStyles - 1) <= 1u)
		{
			return true;
		}
		return false;
	}

	public async Task<Chat> CreateChatAsync(ChatResources resources, Dictionary<string, Guid>? rolesMap, string? client, CreateChatOptions options, CancellationToken cancellationToken)
	{
		cancellationToken.ThrowIfCancellationRequested();
		Dictionary<string, ChatScenarioRole> roles = CreateRolesDictionary(resources, rolesMap);
		Chat chat = new Chat
		{
			LocalId = (options.Ephemeral ? Guid.Empty : Crypto.CreateCryptographicallySecureGuid()),
			UserId = resources.UserId,
			Client = client,
			Characters = resources.Characters.Select((Character x) => x.LocalId).ToList(),
			ScenarioId = resources.Scenario?.LocalId,
			Roles = roles,
			CreatedAt = timeProvider.GetUtcNow(),
			LastSessionTimestamp = timeProvider.GetUtcNow(),
			Ephemeral = options.Ephemeral,
			UseChatMemory = options.UseChatMemory
		};
		if (!options.Ephemeral)
		{
			await unitOfWorkFactory.ApplyAndSaveChangesAsync((IUnitOfWork x) => x.Chats.CreateAsync(chat), cancellationToken);
		}
		else
		{
			ephemeralChatRepository.Register(resources.UserId, chat);
		}
		return chat;
	}

	private static Dictionary<string, ChatScenarioRole> CreateRolesDictionary(ChatResources request, Dictionary<string, Guid>? rolesMap)
	{
		Dictionary<string, ChatScenarioRole> dictionary = new Dictionary<string, ChatScenarioRole>();
		List<ChatScenarioRole> list = new List<ChatScenarioRole>();
		if (request.Scenario != null)
		{
			int num = -1;
			ScenarioRole[] roles = request.Scenario.Roles;
			foreach (ScenarioRole role in roles)
			{
				num++;
				Guid? guid = (request.Characters.Any(delegate(Character c)
				{
					Guid localId = c.LocalId;
					Guid? defaultCharacterId = role.DefaultCharacterId;
					return localId == defaultCharacterId;
				}) ? role.DefaultCharacterId : ((Guid?)null));
				Guid value;
				Guid? characterId = ((rolesMap == null) ? ((request.Characters.Length > num) ? new Guid?(request.Characters[num].LocalId) : ((Guid?)null)) : ((!rolesMap.TryGetValue(role.Name, out value)) ? guid : new Guid?(value)));
				ChatScenarioRole chatScenarioRole = new ChatScenarioRole
				{
					CharacterId = characterId,
					Enabled = role.EnabledOnStart
				};
				dictionary[role.Name] = chatScenarioRole;
				if (!characterId.HasValue)
				{
					list.Add(chatScenarioRole);
				}
			}
		}
		if (dictionary.Count == 1 && list.Count == 1 && request.Characters.Length != 0)
		{
			list[0].CharacterId = request.Characters[0].LocalId;
		}
		return dictionary;
	}
}

```

## Voxta.Core.Chats.Creation\ChatLoadingReporter.cs
```csharp
using System;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Connections;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.Creation;

public class ChatLoadingReporter(IUserConnectionTunnel tunnel, Guid chatId, Guid sessionId, ILogger logger, double total) : IChatLoadingReporter
{
	private double _currentOperationCost;

	private double _progress;

	public void Start(ChatStyles style, Guid servicesConfigurationsSetId, string? title)
	{
		tunnel.Send(new ServerChatStartingMessage
		{
			SessionId = sessionId,
			ChatId = chatId,
			Title = title,
			ChatStyle = style,
			ServicesConfigurationsSetId = servicesConfigurationsSetId
		});
	}

	public void Report(string text, double cost)
	{
		_progress += _currentOperationCost;
		_currentOperationCost = cost;
		logger.LogDebug("Loading: {Text}", text);
		tunnel.Send(new ServerChatLoadingMessage
		{
			SessionId = sessionId,
			Text = text,
			Progress = Math.Clamp(Math.Round(_progress / total * 100.0), 0.0, 100.0)
		});
	}

	public void Skip(int cost)
	{
		_progress += cost;
		_currentOperationCost = cost;
	}

	public void Done(string text)
	{
		_progress += _currentOperationCost;
		tunnel.Send(new ServerChatLoadingMessage
		{
			SessionId = sessionId,
			Text = "Chat session ready!",
			Progress = 100.0
		});
	}
}

```

## Voxta.Core.Chats.Creation\ChatSessionFactory.cs
```csharp
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Assets;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Configuration;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Diagnostics;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.ModuleRuntimeInstances;
using Voxta.Abstractions.Prompting;
using Voxta.Abstractions.Registration;
using Voxta.Abstractions.Repositories;
using Voxta.Abstractions.Runtime;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services;
using Voxta.Abstractions.Services.ActionInference;
using Voxta.Abstractions.Services.AudioInput;
using Voxta.Abstractions.Services.AudioOutput;
using Voxta.Abstractions.Services.ChatAugmentations;
using Voxta.Abstractions.Services.ComputerVision;
using Voxta.Abstractions.Services.ImageGen;
using Voxta.Abstractions.Services.Memory;
using Voxta.Abstractions.Services.SpeechToText;
using Voxta.Abstractions.Services.Summarization;
using Voxta.Abstractions.Services.TextGen;
using Voxta.Abstractions.Services.TextToSpeech;
using Voxta.Abstractions.Services.VisionCapture;
using Voxta.Abstractions.Services.WakeWord;
using Voxta.Abstractions.Templating;
using Voxta.Abstractions.Tokenizers;
using Voxta.Abstractions.Utils;
using Voxta.Abstractions.Web;
using Voxta.Common;
using Voxta.Core.Chats.Commands;
using Voxta.Core.Chats.Objects;
using Voxta.Core.Chats.Objects.Characters;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.Objects.Scenarios;
using Voxta.Core.Chats.ScopedServices;
using Voxta.Core.Chats.Sessions;
using Voxta.Core.CommandsProcessing;
using Voxta.Core.Connections;
using Voxta.Core.DependencyInjection;
using Voxta.Core.Runtime;
using Voxta.Core.Services.Memory;
using Voxta.Core.Services.VisionCapture;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Creation;

public class ChatSessionFactory(ILoggerFactory loggerFactory, IPerformanceMetrics performanceMetrics, IUnitOfWorkFactory unitOfWorkFactory, IModuleDefinitionsRegistry moduleDefinitionsRegistry, IServiceFactory serviceFactory, IServicesConfigurationsSetResolver servicesConfigurationsSetResolver, IDiagnosticsContext diagnosticsContext, IServicesConfigurationChangeDispatcher servicesConfigurationChangeDispatcher, ITextToSpeechManagerFactory textToSpeechManagerFactory, ISpeechToTextManagerFactory speechToTextManagerFactory, IVisionManagerFactory visionManagerFactory, ISpecialMessageFormatterFactory specialMessageFormatterFactory, IPromptTemplatesLoaderFactory promptTemplatesLoaderFactory, IPromptBuilderFactory promptBuilderFactory, ITemplateSystem templateSystem, IResourceAssetsManager resourceAssetsManager, IUrlProvider urlProvider, IChatMemoryExtractionHelper chatMemoryExtractionHelper, IServiceProvider sp, ILogger<ChatSessionFactory> logger) : IChatSessionFactory
{
	public async Task<IChatSession> CreateAsync(IUserConnectionTunnel tunnel, IAuthenticationContext auth, ProfileSettings profile, Chat chat, ChatResources data, ConnectionClientSettings clientSettings, Guid sessionId, CancellationToken cancellationToken)
	{
		Guid userId = auth.UserId;
		diagnosticsContext.Initialize(new DiagnosticsContextValues
		{
			UserId = userId,
			ChatId = (chat.Ephemeral ? ((Guid?)null) : new Guid?(chat.LocalId)),
			SessionId = sessionId
		});
		IChatLoadingReporter chatLoadingReporter2;
		if (clientSettings.Capabilities.AudioOutput != AudioOutputClientCapabilities.LocalFile)
		{
			IChatLoadingReporter chatLoadingReporter = new ChatLoadingReporter(tunnel, chat.LocalId, sessionId, logger, 90.0);
			chatLoadingReporter2 = chatLoadingReporter;
		}
		else
		{
			IChatLoadingReporter chatLoadingReporter = new NullChatLoadingReporter(logger);
			chatLoadingReporter2 = chatLoadingReporter;
		}
		IChatLoadingReporter reporter = chatLoadingReporter2;
		Guid servicesConfigurationsSetId = data.Scenario?.ServicesConfigurationsSetId ?? data.ParentScenario?.ServicesConfigurationsSetId ?? data.Characters.FirstOrDefault()?.ServicesConfigurationsSetId ?? profile.ServicesConfigurationsSetId;
		ServicesConfigurationsSet servicesConfigurationsSet = await unitOfWorkFactory.ReadAsync((IUnitOfWork x) => x.ServicesConfigurationsSets.GetByIdAsync(auth.UserId, servicesConfigurationsSetId, cancellationToken));
		if (servicesConfigurationsSet == null)
		{
			Scenario? scenario = data.Scenario;
			object obj;
			if (scenario == null || !(scenario.ServicesConfigurationsSetId == servicesConfigurationsSetId))
			{
				Scenario? parentScenario = data.ParentScenario;
				if (parentScenario == null || !(parentScenario.ServicesConfigurationsSetId == servicesConfigurationsSetId))
				{
					Character? character = data.Characters.FirstOrDefault();
					obj = ((character != null && character.ServicesConfigurationsSetId == servicesConfigurationsSetId) ? $"character: {data.Characters[0].LocalId}" : "profile");
				}
				else
				{
					obj = $"parent scenario: {data.ParentScenario.LocalId}";
				}
			}
			else
			{
				obj = $"scenario: {data.Scenario.LocalId}";
			}
			string value = (string)obj;
			throw new InvalidOperationException($"Services configurations set with ID {servicesConfigurationsSetId} (source: {value}) not found for user {auth.UserId}");
		}
		if (servicesConfigurationsSetId != profile.ServicesConfigurationsSetId)
		{
			logger.LogWarning("Chat session will use services configurations set {SetName} rather than the default due to a scenario or character override.", servicesConfigurationsSet.Name);
		}
		ServicesConfigurations configs = await servicesConfigurationsSetResolver.ResolveAllAsync(servicesConfigurationsSet, cancellationToken);
		ChatStyles style = ((data.Scenario != null && data.Scenario.ChatStyle != ChatStyles.Undefined) ? data.Scenario.ChatStyle : ((data.Characters.Length != 0) ? data.Characters[0].ChatStyle : ChatStyles.Undefined));
		reporter.Start(style, servicesConfigurationsSetId, chat.Title);
		AsyncServiceScope scope = sp.CreateAsyncScope();
		List<IAsyncDisposable> disposables = new List<IAsyncDisposable>();
		try
		{
			scope.ServiceProvider.RegisterScopedServiceAccessor((IUserConnectionTunnel)new UserConnectionTunnelAccessor(tunnel));
			scope.ServiceProvider.RegisterScopedServiceAccessor(profile);
			performanceMetrics.OfUser(auth.UserId).Clear();
			reporter.Report("Loading scenario...", 0.1);
			IActionScriptEngine scriptEngine = scope.ServiceProvider.GetRequiredService<IActionScriptEngine>();
			Scenario scenario2 = data.Scenario;
			Scenario parentScenario2 = data.ParentScenario;
			Character[] characters = data.Characters;
			if (characters.Length == 0)
			{
				throw new ArgumentException("At least one character is required", "characters");
			}
			ChatStyles chatStyle = ChatStylesSelector.Select(data.Scenario?.ChatStyle, characters[0].ChatStyle);
			Character mainCharacter = characters[0];
			if (string.IsNullOrEmpty(scenario2?.Impersonation?.Name) && characters.Length > 1 && characters.Any((Character c) => !string.IsNullOrEmpty(c.UserNameOverride)))
			{
				loggerFactory.CreateLogger<ChatSessionFactory>().LogWarning("Characters with name overrides found, only the override from the main character will be used");
			}
			Scenario scenario3 = scenario2;
			string userName = ((scenario3 != null && scenario3.ChatFlow == ChatFlowModes.Story) ? "User" : (string.IsNullOrEmpty(scenario2?.Impersonation?.Name) ? ((!string.IsNullOrEmpty(mainCharacter.UserNameOverride)) ? mainCharacter.UserNameOverride : profile.Name) : scenario2.Impersonation.Name));
			reporter.Report("Shutting down unused services...", 1.0);
			IModuleRuntimeInstancesManager requiredService = scope.ServiceProvider.GetRequiredService<IModuleRuntimeInstancesManager>();
			ModuleRuntimeCleanupScopeForConfigs scope2 = new ModuleRuntimeCleanupScopeForConfigs
			{
				PreserveWithConfigs = configs
			};
			await requiredService.ShutDownUnusedModulesAsync(scope2);
			ClientCapabilities capabilities = clientSettings.Capabilities;
			reporter.Report("Loading text generation...", 29.0);
			IServiceReference<ITextGenService> textGen = await CreateServiceRef(NullTextGenService.Instance, disposables, auth, configs);
			ServiceItemReference<ITokenizer, ITextGenService> tokenizerRef = new ServiceItemReference<ITokenizer, ITextGenService>(textGen, (ITextGenService x) => x.Tokenizer);
			scope.ServiceProvider.RegisterScopedServiceAccessor((IServiceItemReference<ITokenizer>)tokenizerRef);
			if (!textGen.Current.Enabled)
			{
				throw new InvalidOperationException("Text generation service is required but not available");
			}
			await textGen.Current.WarmupAsync(cancellationToken);
			reporter.Report("Loading summarization...", 5.0);
			IServiceReference<ISummarizationService> summarization = await CreateServiceRef(NullSummarizationService.Instance, disposables, auth, configs);
			if (summarization.Current.Enabled)
			{
				await summarization.Current.WarmupAsync(cancellationToken);
			}
			else
			{
				logger.LogWarning("No summarization services, long term gradient memory will be unavailable, reverting to token cropping instead");
			}
			reporter.Report("Loading action inference...", 6.0);
			IServiceReference<IActionInferenceService> actionInference = await CreateServiceRef(NullActionInferenceService.Instance, disposables, auth, configs);
			if (actionInference.Current.Enabled)
			{
				await actionInference.Current.WarmupAsync(cancellationToken);
			}
			else
			{
				logger.LogWarning("No action inference services, the character's avatar will be unable to carry actions");
			}
			reporter.Report("Loading image generation...", 1.0);
			IServiceReference<IImageGenService> imageGen = await CreateServiceRef(NullImageGenService.Instance, disposables, auth, configs);
			if (imageGen.Current.Enabled)
			{
				await imageGen.Current.WarmupAsync(cancellationToken);
			}
			else
			{
				logger.LogDebug("No image generation services, the character's avatar will be unable to generate images");
			}
			reporter.Report("Loading memory service...", 1.0);
			bool enableMemory = characters.Any((Character c) => c.UseMemory) || characters.Any(delegate(Character c)
			{
				if (c.MemoryBooks.Length == 0)
				{
					Scenario scenario5 = scenario2;
					if (scenario5 == null || scenario5.MemoryBooks.Count <= 0)
					{
						Scenario scenario6 = parentScenario2;
						if (scenario6 == null)
						{
							return false;
						}
						return scenario6.MemoryBooks.Count > 0;
					}
				}
				return true;
			});
			IServiceReference<IMemoryProviderService> memory = await CreateServiceRef(NullMemoryProviderService.Instance, disposables, auth, configs, enableMemory);
			if (enableMemory && !memory.Current.Enabled)
			{
				logger.LogWarning("No memory provider services, the character's memory will be disabled and memory books will be unavailable");
			}
			else if (enableMemory)
			{
				await memory.Current.WarmupAsync(cancellationToken);
			}
			reporter.Report("Loading text to speech...", 1.0);
			IServiceReference<ITextToSpeechService> textToSpeech = await CreateServiceRef(NullTextToSpeechService.Instance, disposables, auth, configs);
			reporter.Report("Loading audio output...", 1.0);
			bool enabled = textToSpeech.Current.Enabled;
			IServiceReference<IAudioOutputService> audioOutput = await CreateServiceRef(NullAudioOutputService.Instance, disposables, auth, configs, enabled);
			reporter.Report("Loading speech to text...", 1.0);
			IServiceReference<ISpeechToTextService> speechToText = await CreateServiceRef(NullSpeechToTextService.Instance, disposables, auth, configs);
			reporter.Report("Loading wake word...", 1.0);
			bool enableAudioInput = speechToText.Current.Enabled;
			IServiceReference<IAudioInputService> audioInput = await CreateServiceRef(NullAudioInputService.Instance, disposables, auth, configs, enableAudioInput);
			IServiceReference<IWakeWordService> wakeWord = await CreateServiceRef(NullWakeWordService.Instance, disposables, auth, configs, enableAudioInput);
			reporter.Report("Loading computer vision...", 1.0);
			IServiceReference<IComputerVisionService> computerVision = await CreateServiceRef(NullComputerVisionService.Instance, disposables, auth, configs);
			if (!computerVision.Current.Enabled)
			{
				logger.LogWarning("No computer vision services, the character will be unable to describe images");
			}
			await computerVision.Current.WarmupAsync(cancellationToken);
			bool enabled2 = computerVision.Current.Enabled;
			reporter.Report("Loading vision capture...", 1.0);
			IVisionCaptureServiceReferences visionCapture = await CreateVisionCaptureRef(reporter, disposables, tunnel, auth, capabilities, configs, sessionId, enabled2);
			reporter.Report("Composing text to speech services...", 0.5);
			ITextToSpeechManager textToSpeechManager = textToSpeechManagerFactory.Create(textToSpeech, audioOutput, auth, configs, capabilities);
			disposables.Add(textToSpeechManager);
			reporter.Report("Composing speech to text services...", 0.5);
			ISpeechToTextManager speechToTextManager = speechToTextManagerFactory.Create(speechToText, audioInput, wakeWord, auth, sessionId, configs, tunnel, capabilities);
			disposables.Add(speechToTextManager);
			IVisionManager visionManager = visionManagerFactory.Create(computerVision, visionCapture);
			disposables.Add(visionManager);
			ChatSessionServices chatServices = new ChatSessionServices(textGen, summarization, actionInference, memory, imageGen, speechToTextManager, textToSpeechManager, visionManager);
			disposables.Add(chatServices);
			chatServices.HealthCheck();
			Dictionary<string, string> scenarioCharacterNames = (from r in chat.Roles
				select (ScenarioRole: r.Key, Character: characters.FirstOrDefault(delegate(Character c)
				{
					Guid localId = c.LocalId;
					Guid? characterId2 = r.Value.CharacterId;
					return localId == characterId2;
				})?.Name ?? "") into x
				where x.Character != ""
				select x).ToDictionary<(string, string), string, string>(((string ScenarioRole, string Character) x) => x.ScenarioRole, ((string ScenarioRole, string Character) x) => x.Character);
			ChatTextProcessor textProcessor = new ChatTextProcessor(userName, mainCharacter.Name, scenarioCharacterNames);
			scope.ServiceProvider.RegisterScopedServiceAccessor((IChatTextProcessor)textProcessor);
			scope.ServiceProvider.RegisterScopedServiceAccessor((IChatSessionServices)chatServices);
			reporter.Report(enableMemory ? "Loading characters and initializing memory..." : "Loading characters...", 0.9);
			IChatObjectInstanceFactory chatObjectInstanceFactory = scope.ServiceProvider.GetRequiredService<IChatObjectInstanceFactory>();
			List<CharacterInstance> characterInstances = new List<CharacterInstance>(characters.Length);
			Character[] array = characters;
			foreach (Character character2 in array)
			{
				Scenario scenario4 = scenario2;
				ChatTextProcessor textProcessor2 = new ChatTextProcessor((scenario4 == null || scenario4.ChatFlow != ChatFlowModes.Story) ? userName : (characters.FirstOrDefault((Character c) => c != character2)?.Name ?? ""), character2.Name, scenarioCharacterNames);
				CharacterInstance characterInstance = await chatObjectInstanceFactory.CreateCharacterAsync(userId, chat, character2, scenario2?.MemoryBooks, textProcessor2, textGen, memory, chatStyle, scriptEngine, cancellationToken);
				KeyValuePair<string, ChatScenarioRole> keyValuePair = chat.Roles.FirstOrDefault<KeyValuePair<string, ChatScenarioRole>>((KeyValuePair<string, ChatScenarioRole> kvp) => kvp.Value.CharacterId == characterInstance.Id);
				if (keyValuePair.Key != null)
				{
					characterInstance.ScenarioRole = keyValuePair.Key;
					characterInstance.Enabled = keyValuePair.Value.Enabled;
				}
				characterInstances.Add(characterInstance);
			}
			ICharacterInferenceData narrator = null;
			if (data.Narrator != null)
			{
				narrator = chatObjectInstanceFactory.CreateNarratorAsync(data.Narrator, textProcessor, cancellationToken);
			}
			if (narrator == null)
			{
				narrator = new NullCharacterInstance();
			}
			ScenarioInstance scenarioInstance = chatObjectInstanceFactory.CreateScenario(userId, parentScenario2, (scenario2 != null) ? ScenarioData.WithCharacter(scenario2, mainCharacter, scenario2.IsMainRoleEnabledOnStart()) : ScenarioData.FromCharacter(mainCharacter), chat, characterInstances, scriptEngine);
			UserInstance user = CreateChatSessionDataUser(profile, mainCharacter, scenario2?.Impersonation, scenarioInstance.ChatFlow);
			List<ExplicitContentLevels?> list = new List<ExplicitContentLevels?>();
			list.Add(scenario2?.ExplicitContent);
			list.Add(parentScenario2?.ExplicitContent);
			foreach (ExplicitContentLevels item in characters.Select((Character c) => c.ExplicitContent))
			{
				list.Add(item);
			}
			ExplicitContentLevels explicitContent = ExplicitContentLevelsUtils.Choose(list.ToArray());
			ChatInstance chatInstance = new ChatInstance(chat);
			chatInstance.UserId = userId;
			chatInstance.SessionId = sessionId;
			chatInstance.User = user;
			chatInstance.Characters = characterInstances;
			chatInstance.Narrator = narrator;
			chatInstance.Scenario = scenarioInstance;
			chatInstance.ExplicitContent = explicitContent;
			ChatInstance chatInstance2 = chatInstance;
			ChatStyles chatStyles = chatStyle;
			bool flag = ((chatStyles == ChatStyles.Companion || chatStyles == ChatStyles.Assistant) ? true : false);
			chatInstance2.RequestedAugmentations = (flag ? mainCharacter.Augmentations : Array.Empty<string>());
			chatInstance.Config = configs;
			ChatInstance chatInstance3 = chatInstance;
			scope.ServiceProvider.RegisterScopedServiceAccessor(chatInstance3);
			await InitializeContextsAsync(chatInstance3, characterInstances, scenarioInstance, chatObjectInstanceFactory, cancellationToken);
			reporter.Report("Loading prompt templates...", 0.5);
			IPromptTemplatesLoader loader = promptTemplatesLoaderFactory.CreatePromptTemplatesLoader(mainCharacter.Culture);
			ISpecialMessageFormatter service = await specialMessageFormatterFactory.CreateAsync(loader, cancellationToken);
			scope.ServiceProvider.RegisterScopedServiceAccessor(service);
			IPromptBuilder promptBuilder = await promptBuilderFactory.CreateAsync(loader, tokenizerRef, cancellationToken);
			scope.ServiceProvider.RegisterScopedServiceAccessor(promptBuilder);
			chatInstance3.SystemPromptOverrideType = textGen.Current.SystemPromptOverrideType;
			if (!string.IsNullOrEmpty(textGen.Current.SystemPromptAddon))
			{
				chatInstance3.SystemPromptAddons.Add(templateSystem.Parse(textGen.Current.InstanceSettings.ServiceName + ".SystemPromptAddon", textGen.Current.SystemPromptAddon));
			}
			if (!string.IsNullOrEmpty(textGen.Current.ContextPromptAddon))
			{
				chatInstance3.ContextPromptAddons.Add(templateSystem.Parse(textGen.Current.InstanceSettings.ServiceName + ".ContextPromptAddon", textGen.Current.ContextPromptAddon));
			}
			if (!string.IsNullOrEmpty(textGen.Current.ReplyPrefix))
			{
				chatInstance3.ReplyPrefix = templateSystem.Parse(textGen.Current.InstanceSettings.ServiceName + ".ReplyPrefix", textGen.Current.ReplyPrefix);
			}
			reporter.Report("Creating chat session...", 0.5);
			ChatCommandsManager commandsManager = new ChatCommandsManager(scope.ServiceProvider, scope.ServiceProvider.GetRequiredService<IChatCommandsProcessor>());
			scope.ServiceProvider.RegisterScopedServiceAccessor((IChatCommandsManager)commandsManager);
			IChatAugmentationsService[] augmentationServices = await scope.ServiceProvider.GetRequiredService<IServiceFactory<IChatAugmentationsService>>().CreateAllAsync(auth, cancellationToken);
			ChatAugmentationsServiceInstanceContainer augmentations = new ChatAugmentationsServiceInstanceContainer();
			scope.ServiceProvider.RegisterScopedServiceAccessor((IChatAugmentationsServiceInstance)augmentations);
			ChatSession session = new ChatSession(scope, auth, chatServices, chatInstance3, tunnel, textProcessor, scope.ServiceProvider.GetRequiredService<IChatSessionGeneratingState>(), scriptEngine, commandsManager, scope.ServiceProvider.GetRequiredService<ITranscriptionService>(), scope.ServiceProvider.GetRequiredService<IInspectorService>(), scope.ServiceProvider.GetRequiredService<IChatCommandsProcessor>(), scope.ServiceProvider.GetRequiredService<IMessageDispatcherService>(), scope.ServiceProvider.GetRequiredService<IChatStartedMessageBuilderService>(), scope.ServiceProvider.GetRequiredService<IChatAugmentationsApiService>(), scope.ServiceProvider.GetRequiredService<IUserInteractionRequestsManager>());
			disposables.Add(session);
			reporter.Report("Initializing text to speech...", 5.0);
			await textToSpeechManager.InitializeAsync(session, cancellationToken);
			if (!textToSpeechManager.Enabled)
			{
				logger.LogWarning("No text to speech service, the Character will not speak");
			}
			else
			{
				ServiceLink ttsLink = chatServices.SpeechGenerator.Link;
				List<(VoiceInfo, CultureInfo, Guid)> list2;
				if (ttsLink != null && ttsLink.ServiceId.HasValue)
				{
					list2 = characterInstances.Select((CharacterInstance c) => (c.GetVoice(ttsLink.ServiceName, ttsLink.ServiceId.Value), Culture: c.Culture, Id: c.Id)).ToList();
					if (narrator.Enabled && !characterInstances.Contains(narrator))
					{
						list2.Add((narrator.GetVoice(ttsLink.ServiceName, ttsLink.ServiceId.Value), narrator.Culture, narrator.Id));
					}
				}
				else
				{
					list2 = new List<(VoiceInfo, CultureInfo, Guid)>();
				}
				if (list2.Count > 0)
				{
					double voiceProgress = 9.0 / (double)list2.Count;
					foreach (var (voiceInfo, cultureInfo, characterId) in list2)
					{
						if (voiceInfo != null)
						{
							reporter.Report("Warming up voice...", voiceProgress);
							await textToSpeechManager.WarmupAsync(userId, voiceInfo, characterId, cultureInfo.Name, cancellationToken);
						}
					}
				}
				else
				{
					reporter.Skip(9);
				}
			}
			reporter.Report("Initializing speech to text...", 4.0);
			await speechToTextManager.InitializeAsync(mainCharacter.Culture, cancellationToken);
			if (!speechToTextManager.Enabled)
			{
				logger.LogWarning("No speech to text services, voice input transcription will be disabled");
			}
			reporter.Report("Creating chat augmentation services...", 1.0);
			try
			{
				IChatAugmentationsService[] array2 = augmentationServices;
				foreach (IChatAugmentationsService augmentationService in array2)
				{
					augmentations.AddRange(augmentationService, await augmentationService.CreateInstanceAsync(session, auth, cancellationToken));
				}
			}
			finally
			{
				IChatAugmentationsService[] array2 = augmentationServices;
				for (int num2 = 0; num2 < array2.Length; num2++)
				{
					await array2[num2].DisposeAsync();
				}
			}
			ServiceTypes[] requiredServiceTypes = augmentations.GetRequiredServiceTypes();
			if (!actionInference.Current.Enabled && requiredServiceTypes.Contains(ServiceTypes.TextGen))
			{
				logger.LogWarning("Text generation service is required by some augmentations but is not available");
			}
			if (!imageGen.Current.Enabled && requiredServiceTypes.Contains(ServiceTypes.ImageGen))
			{
				logger.LogWarning("Image generation service is required by some augmentations but is not available");
			}
			if (!textToSpeechManager.Enabled && requiredServiceTypes.Contains(ServiceTypes.TextToSpeech))
			{
				logger.LogWarning("Text to speech service is required by some augmentations but is not available");
			}
			if (!speechToTextManager.Enabled && requiredServiceTypes.Contains(ServiceTypes.SpeechToText))
			{
				logger.LogWarning("Speech to text service is required by some augmentations but is not available");
			}
			if (!computerVision.Current.Enabled && requiredServiceTypes.Contains(ServiceTypes.ComputerVision))
			{
				logger.LogWarning("Computer vision service is required by some augmentations but is not available");
			}
			if (!memory.Current.Enabled && requiredServiceTypes.Contains(ServiceTypes.Memory))
			{
				logger.LogWarning("Memory service is required by some augmentations but is not available");
			}
			reporter.Report("Health check...", 1.0);
			chatServices.HealthCheck();
			reporter.Report("Loading messages...", 1.0);
			if (!chat.Ephemeral)
			{
				ChatMessageData[] messages = await unitOfWorkFactory.ReadAsync((IUnitOfWork x) => x.ChatMessages.GetChatMessagesAsync(userId, chat.LocalId, includeSummarizedMessages: false, cancellationToken));
				ChatMessageData[] array3 = messages;
				foreach (ChatMessageData message in array3)
				{
					if (message.Attachments == null || message.Attachments.Length == 0)
					{
						continue;
					}
					ChatMessageDataAttachment[] attachments = message.Attachments;
					foreach (ChatMessageDataAttachment attachment in attachments)
					{
						string assetPath = attachment.GetAssetPath(message.LocalId);
						string fullPath = resourceAssetsManager.ManageContainer<Chat>(userId, chat.LocalId).ManageAssets().GetAssetFullPath(assetPath);
						if (!File.Exists(fullPath))
						{
							logger.LogWarning("Attachment {Attachment} not found for message {MessageId}", assetPath, message.LocalId);
						}
						else
						{
							byte[] bytes = await File.ReadAllBytesAsync(fullPath, cancellationToken);
							string contentTypeFromExtension = ContentTypes.GetContentTypeFromExtension(Path.GetExtension(fullPath));
							attachment.Image = new BytesImage(contentTypeFromExtension, bytes, attachment.Source)
							{
								FileName = attachment.FileName,
								Label = attachment.Label
							};
						}
					}
				}
				await using (IChatInstanceMessagesWriteToken chatInstanceMessagesWriteToken = await chatInstance3.GetMessagesWriteTokenAsync(cancellationToken))
				{
					chatInstanceMessagesWriteToken.Messages.AddRange(messages.Where((ChatMessageData m) => !m.IsEmpty()));
				}
				ChatDocument[] documents = await unitOfWorkFactory.ReadAsync((IUnitOfWork x) => x.ChatDocuments.GetChatDocumentsAsync(userId, chat.LocalId, cancellationToken));
				await using IChatInstanceContextWriteToken chatInstanceContextWriteToken = await chatInstance3.GetContextWriteTokenAsync(cancellationToken);
				chatInstanceContextWriteToken.Documents.AddRange(documents);
			}
			reporter.Report("Initializing scripts...");
			scriptEngine.Start(chatInstance3, scope.ServiceProvider.GetRequiredService<IChatTimer>());
			await scope.ServiceProvider.GetRequiredService<ICommandModeService>().ConfigureCommandModeAsync(cancellationToken);
			reporter.Report("Applying previous chat memories...", 10.0);
			IEnumerable<CharacterInstance> enumerable = characterInstances.Where((CharacterInstance c) => c.Memory.PrivateMemoryEnabled);
			foreach (CharacterInstance characterWithMemory in enumerable)
			{
				Character characterData = characters.First((Character c) => c.LocalId == characterWithMemory.Id);
				await chatMemoryExtractionHelper.ProcessPreviousChatMemoriesAsync(chatServices.Summarization, chatServices.TextGen, profile, chat, characterWithMemory, characterData, promptBuilder, cancellationToken);
			}
			reporter.Done("Chat session ready!");
			return session;
		}
		catch
		{
			try
			{
				foreach (IAsyncDisposable item2 in disposables)
				{
					await item2.DisposeAsync();
				}
				await scope.DisposeAsync();
			}
			catch (Exception exception)
			{
				logger.LogWarning(exception, "Failed to dispose chat session");
			}
			throw;
		}
	}

	private async Task<IServiceReference<TService>> CreateServiceRef<TService>(TService nullService, List<IAsyncDisposable> disposables, IAuthenticationContext auth, ServicesConfigurations config, bool initialize = true) where TService : class, IService
	{
		IServiceReference<TService> service = ServiceReference<TService>.Create(serviceFactory, servicesConfigurationChangeDispatcher, moduleDefinitionsRegistry, nullService, loggerFactory.CreateLogger<ServiceReference<TService>>(), auth, config);
		disposables.Add(service);
		if (initialize)
		{
			await service.InitializeAsync();
		}
		return service;
	}

	private async Task<IVisionCaptureServiceReferences> CreateVisionCaptureRef(IChatLoadingReporter reporter, List<IAsyncDisposable> disposables, IUserConnectionTunnel tunnel, IAuthenticationContext auth, ClientCapabilities capabilities, ServicesConfigurations configs, Guid sessionId, bool initialize = true)
	{
		reporter.Report($"Loading service: ({9})...");
		IVisionCaptureServiceReferences service = VisionCaptureServiceReferences.Create(sp.GetRequiredService<IVisionCaptureServiceFactory>(), moduleDefinitionsRegistry, servicesConfigurationChangeDispatcher, sp.GetRequiredService<IRemoteVisionCaptureGlobalListener>(), loggerFactory.CreateLogger<VisionCaptureServiceReferences>(), tunnel, auth, capabilities, configs, sessionId);
		disposables.Add(service);
		if (initialize)
		{
			await service.InitializeAsync();
		}
		return service;
	}

	private static async Task InitializeContextsAsync(ChatInstance chatInstance, List<CharacterInstance> characterInstances, ScenarioInstance scenarioInstance, IChatObjectInstanceFactory chatObjectInstanceFactory, CancellationToken cancellationToken)
	{
		await using IChatInstanceContextWriteToken chatInstanceContextWriteToken = await chatInstance.GetContextWriteTokenAsync(cancellationToken);
		foreach (CharacterInstance characterInstance in characterInstances)
		{
			if (!string.IsNullOrEmpty(characterInstance.Context))
			{
				chatInstanceContextWriteToken.Contexts.Add(characterInstance.ContextKey, new List<IContextDefinitionInstance>(1) { chatObjectInstanceFactory.CreateContext(ContextDefinition.Single(characterInstance.Context), 0) });
			}
		}
		if (scenarioInstance.ScenarioActions.Count > 0)
		{
			chatInstanceContextWriteToken.Actions.Add("_scenario", scenarioInstance.ScenarioActions.ToList());
		}
		if (scenarioInstance.ScenarioEvents.Count > 0)
		{
			chatInstanceContextWriteToken.Events.Add("_scenario", scenarioInstance.ScenarioEvents.ToList());
		}
		if (scenarioInstance.ScenarioContexts.Count > 0)
		{
			chatInstanceContextWriteToken.Contexts.Add("_scenario", scenarioInstance.ScenarioContexts.ToList());
		}
	}

	private UserInstance CreateChatSessionDataUser(ProfileSettings profile, Character character, ScenarioImpersonation? impersonation, ChatFlowModes chatFlowMode)
	{
		string input = ((!string.IsNullOrEmpty(impersonation?.Name)) ? impersonation.Name : (string.IsNullOrEmpty(character.UserNameOverride) ? profile.Name : character.UserNameOverride));
		input = Regex.Replace(input, "{{ ?user ?}}", profile.Name);
		string input2 = ((!string.IsNullOrEmpty(impersonation?.Description)) ? (impersonation.Description ?? "") : (string.IsNullOrEmpty(character.UserDescriptionOverride) ? (profile.Description ?? "") : (character.UserDescriptionOverride ?? "")));
		input2 = Regex.Replace(input2, "{{ ?user_description ?}}", profile.Description ?? "");
		return new UserInstance
		{
			Id = profile.LocalId,
			Name = input,
			Description = templateSystem.Parse("User Description", input2),
			Enabled = (chatFlowMode == ChatFlowModes.Chat),
			ThumbnailUrl = urlProvider.GetThumbnailUrl<ProfileSettings>(profile.LocalId, profile.Thumbnail)
		};
	}
}

```

## Voxta.Core.Chats.Creation\IChatLoadingReporter.cs
```csharp
using System;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Creation;

public interface IChatLoadingReporter
{
	void Start(ChatStyles style, Guid servicesConfigurationsSetId, string? title);

	void Report(string text, double cost = 0.0);

	void Skip(int cost);

	void Done(string text);
}

```

## Voxta.Core.Chats.Creation\IChatSessionFactory.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Security;
using Voxta.Core.Chats.Sessions;
using Voxta.Core.Connections;

namespace Voxta.Core.Chats.Creation;

public interface IChatSessionFactory
{
	Task<IChatSession> CreateAsync(IUserConnectionTunnel tunnel, IAuthenticationContext auth, ProfileSettings profile, Chat chat, ChatResources data, ConnectionClientSettings clientSettings, Guid sessionId, CancellationToken cancellationToken);
}

```

## Voxta.Core.Chats.Creation\NullChatLoadingReporter.cs
```csharp
using System;
using Microsoft.Extensions.Logging;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Creation;

public class NullChatLoadingReporter(ILogger logger) : IChatLoadingReporter
{
	public void Start(ChatStyles style, Guid servicesConfigurationsSetId, string? title)
	{
	}

	public void Report(string text, double cost)
	{
		logger.LogDebug("Loading: {Text}", text);
	}

	public void Skip(int cost)
	{
	}

	public void Done(string text)
	{
	}
}

```

## Voxta.Core.Chats.DetachedChat\DetachedChat.cs
```csharp
using System;
using System.Threading.Tasks;
using Voxta.Abstractions.Prompting;
using Voxta.Abstractions.Services;
using Voxta.Core.Chats.Objects.Chats;

namespace Voxta.Core.Chats.DetachedChat;

public record DetachedChat<TService>(ChatInstance ChatInstance, IPromptBuilder PromptBuilder, TService Service) : IDetachedChat<TService>, IAsyncDisposable where TService : IService
{
	public async ValueTask DisposeAsync()
	{
		await Service.DisposeAsync();
		await ChatInstance.DisposeAsync();
	}
}

```

## Voxta.Core.Chats.DetachedChat\DetachedChatFactory.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Caching;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Configuration;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Prompting;
using Voxta.Abstractions.Repositories;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services;
using Voxta.Abstractions.Services.TextGen;
using Voxta.Abstractions.Templating;
using Voxta.Abstractions.Tokenizers;
using Voxta.Core.Chats.Objects.Characters;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.Objects.Scenarios;
using Voxta.Core.Chats.Sessions;
using Voxta.Core.Services;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.DetachedChat;

public class DetachedChatFactory(IProfileSettingsCache profileSettingsCache, IServicesConfigurationsSetResolver servicesConfigurationsSetResolver, IUnitOfWorkFactory unitOfWorkFactory, IPromptTemplatesLoaderFactory promptTemplatesLoaderFactory, IPromptBuilderFactory promptBuilderFactory, IServiceFactory serviceFactory, TimeProvider timeProvider) : IDetachedChatFactory
{
	public async Task<IDetachedChat<TService>> CreateDetachedChat<TService>(IAuthenticationContext auth, Guid characterId, CancellationToken cancellationToken) where TService : class, IService
	{
		Character character = await unitOfWorkFactory.ReadAsync((IUnitOfWork x) => x.Characters.GetByIdAsync(auth.UserId, characterId, cancellationToken));
		if (character == null)
		{
			throw new InvalidOperationException("Character not found");
		}
		return await CreateDetachedChat<TService>(auth, character, cancellationToken);
	}

	public async Task<IDetachedChat<TService>> CreateDetachedChat<TService>(IAuthenticationContext auth, Character character, CancellationToken cancellationToken) where TService : class, IService
	{
		ProfileSettings profile = await profileSettingsCache.GetRequiredProfileByUserIdAsync(auth.UserId, cancellationToken);
		ServiceTypes serviceType = ServiceTypesHelper.FromType<TService>();
		ServiceConfiguration serviceConfiguration = await servicesConfigurationsSetResolver.ResolveOneWithDefaultConfigAsync(auth.UserId, serviceType, cancellationToken);
		if (serviceConfiguration == null)
		{
			throw new InvalidOperationException("No text generation service configuration found");
		}
		TService service = null;
		try
		{
			service = await serviceFactory.CreateAsync<TService>(auth, serviceConfiguration, cancellationToken);
			IPromptTemplatesLoader loader = promptTemplatesLoaderFactory.CreatePromptTemplatesLoader(character.Culture);
			ITokenizer current = ((service is ITextGenService textGenService) ? textGenService.Tokenizer : NullTokenizer.Instance);
			IPromptBuilder promptBuilder = await promptBuilderFactory.CreateAsync(loader, new StaticServiceItemReference<ITokenizer>(current), cancellationToken);
			ChatTextProcessor textProcessor = new ChatTextProcessor(profile.Name, character.Name);
			UserInstance user = new UserInstance
			{
				Id = profile.LocalId,
				Name = profile.Name,
				Description = new StaticTemplate(textProcessor.ProcessText(profile.Description ?? ""))
			};
			SimpleMessageData message;
			SimpleMessageData[] array = (from x in (character.MessageExamples ?? "").Split('\n', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries)
				select (!SimpleMessageData.TryParse(x, textProcessor.User, new string[1] { textProcessor.Character }, out message)) ? null : message into x
				where x != null
				select x).ToArray();
			SimpleMessageData[] array2 = array;
			foreach (SimpleMessageData simpleMessageData in array2)
			{
				simpleMessageData.Value = textProcessor.ProcessText(simpleMessageData.Value);
			}
			CharacterInstance characterInstance = new CharacterInstance
			{
				Id = character.LocalId,
				Name = textProcessor.ProcessText(character.Name),
				Description = new StaticTemplate(textProcessor.ProcessText(character.Description)),
				Personality = new StaticTemplate(textProcessor.ProcessText(character.Personality)),
				MessageExamples = array,
				SystemPromptOverrideType = character.SystemPromptOverrideType,
				SystemPrompt = new StaticTemplate(textProcessor.ProcessText(character.SystemPrompt)),
				PostHistoryInstructions = textProcessor.ProcessText(character.PostHistoryInstructions),
				Profile = new StaticTemplate(textProcessor.ProcessText(character.Profile)),
				GenerateConstraintRequest = new GenerateConstraintRequest
				{
					MaxNewTokens = character.MaxTokens,
					MaxSentences = character.MaxSentences
				},
				TimeAware = character.TimeAware,
				ExplicitContent = character.ExplicitContent,
				Memory = NullCharacterMemoryInstance.Instance
			};
			Chat chat = new Chat
			{
				LocalId = Guid.Empty,
				Characters = new List<Guid>(1) { character.LocalId },
				UserId = auth.UserId,
				CreatedAt = timeProvider.GetUtcNow(),
				Client = "Diagnostics"
			};
			ChatInstance chatInstance = new ChatInstance(chat)
			{
				UserId = auth.UserId,
				User = user,
				Characters = new List<CharacterInstance>(1) { characterInstance },
				Scenario = new ScenarioInstance
				{
					ScenarioTemplate = new StaticTemplate(textProcessor.ProcessText(character.Scenario)),
					SourceScenario = ScenarioData.FromCharacter(character)
				},
				ExplicitContent = character.ExplicitContent
			};
			if (character.FirstMessage != null)
			{
				await using IChatInstanceMessagesWriteToken chat2 = await chatInstance.GetMessagesWriteTokenAsync(cancellationToken);
				chat2.AddTestMessage(characterInstance, textProcessor.ProcessText(character.FirstMessage), 0, timeProvider.GetUtcNow());
			}
			return new DetachedChat<TService>(chatInstance, promptBuilder, service);
		}
		catch
		{
			if (service != null)
			{
				await service.DisposeAsync();
			}
			throw;
		}
	}
}

```

## Voxta.Core.Chats.DetachedChat\IDetachedChat.cs
```csharp
using System;
using Voxta.Abstractions.Prompting;
using Voxta.Abstractions.Services;
using Voxta.Core.Chats.Objects.Chats;

namespace Voxta.Core.Chats.DetachedChat;

public interface IDetachedChat<out TService> : IAsyncDisposable where TService : IService
{
	ChatInstance ChatInstance { get; }

	IPromptBuilder PromptBuilder { get; }

	TService Service { get; }
}

```

## Voxta.Core.Chats.DetachedChat\IDetachedChatFactory.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services;

namespace Voxta.Core.Chats.DetachedChat;

public interface IDetachedChatFactory
{
	Task<IDetachedChat<TService>> CreateDetachedChat<TService>(IAuthenticationContext auth, Guid characterId, CancellationToken cancellationToken) where TService : class, IService;

	Task<IDetachedChat<TService>> CreateDetachedChat<TService>(IAuthenticationContext auth, Character character, CancellationToken cancellationToken) where TService : class, IService;
}

```

## Voxta.Core.Chats.Objects.Assets\AssetsListInstance.cs
```csharp
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using Voxta.Abstractions.Chats.Objects.Assets;

namespace Voxta.Core.Chats.Objects.Assets;

public class AssetsListInstance(string[] assetFiles) : IAssetsListInstance
{
	private readonly ConcurrentDictionary<string, string[]> _cachedMatches = new ConcurrentDictionary<string, string[]>();

	public IReadOnlyList<string> AssetFiles => assetFiles;

	public string[] MatchFiles(string regexString)
	{
		if (_cachedMatches.TryGetValue(regexString, out string[] value))
		{
			return value;
		}
		if (regexString.StartsWith('/') && regexString.EndsWith('/'))
		{
			string text = regexString;
			regexString = text.Substring(1, text.Length - 1 - 1);
		}
		string[] array = assetFiles.Where((string file) => Regex.IsMatch(file, regexString, RegexOptions.IgnoreCase)).ToArray();
		_cachedMatches[regexString] = array;
		return array;
	}
}

```

## Voxta.Core.Chats.Objects.Characters\CharacterInstance.cs
```csharp
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Cache;
using Voxta.Abstractions.Chats.Objects.Assets;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Services.ActionInference;
using Voxta.Abstractions.Services.Memory;
using Voxta.Abstractions.Templating;
using Voxta.Common;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Objects.Characters;

public class CharacterInstance : ICharacterInstanceUnsafe, ICharacterInstanceEditable, ICharacterInferenceData, ICharacterOrUserData, IAsyncDisposable
{
	private const int LockTimeout = 30000;

	private readonly AsyncReaderWriterLock _accessLock = new AsyncReaderWriterLock();

	public bool Enabled { get; set; } = true;

	public bool CanReply { get; set; } = true;

	public bool CanDoActionInference { get; set; } = true;

	public required Guid Id { get; init; }

	public string ContextKey => Id.ToString("N");

	public required string Name { get; init; }

	public CultureInfo Culture { get; init; } = CultureInfo.CreateSpecificCulture("en-US");

	public required ITemplate Description { get; init; }

	public required ITemplate Personality { get; init; }

	public SimpleMessageData[] MessageExamples { get; init; } = Array.Empty<SimpleMessageData>();

	public SystemPromptOverrideTypes SystemPromptOverrideType { get; init; }

	public ITemplate SystemPrompt { get; init; } = StaticTemplate.Empty;

	public string PostHistoryInstructions { get; init; } = "";

	public required ITemplate Profile { get; init; }

	public string Context { get; init; } = "";

	public bool TimeAware { get; init; }

	public ExplicitContentLevels ExplicitContent { get; init; }

	public bool EnableThinkingSpeech { get; init; }

	public string[] Tags { get; init; } = Array.Empty<string>();

	public IAssetsListInstance Assets { get; init; } = NullAssetsListInstance.Instance;

	public ChatMessageRole Role => ChatMessageRole.Assistant;

	public GenerateConstraintRequest GenerateConstraintRequest { get; init; } = Voxta.Model.Shared.GenerateConstraintRequest.Empty;

	public string? ScenarioRole { get; set; }

	List<CharacterMemoryEntry> ICharacterInstanceEditable.Memories { get; } = new List<CharacterMemoryEntry>();

	public ConcurrentDictionary<string, ActionInvocationRecord> LastInvokedFunction { get; } = new ConcurrentDictionary<string, ActionInvocationRecord>();

	public ICharacterMemoryInstance Memory { get; init; } = NullCharacterMemoryInstance.Instance;

	public VoiceServiceMap[]? TextToSpeech { get; init; }

	public string[] ThinkingSpeechUrls { get; set; } = Array.Empty<string>();

	public IPersistentCacheEntry[] ThinkingSpeechEntries { get; set; } = Array.Empty<IPersistentCacheEntry>();

	public string? ThumbnailUrl { get; init; }

	public ChatStyles ChatStyle { get; init; }

	public VoiceInfo? GetVoice(string serviceName, Guid moduleId)
	{
		if (TextToSpeech == null)
		{
			return null;
		}
		return (TextToSpeech.FirstOrDefault((VoiceServiceMap tts) => tts.Service != null && tts.Service.ServiceId == moduleId) ?? TextToSpeech.FirstOrDefault((VoiceServiceMap tts) => tts.Service != null && tts.Service.ServiceName == serviceName) ?? TextToSpeech.FirstOrDefault((VoiceServiceMap tts) => tts.Service == null))?.Voice;
	}

	public async Task<ICharacterInstanceReadToken> GetReadTokenAsync(CancellationToken cancellationToken = default(CancellationToken))
	{
		await _accessLock.AcquireReaderLock(30000, cancellationToken);
		return new CharacterInstanceReadToken(this, delegate
		{
			_accessLock.ReleaseReaderLock();
			return Task.CompletedTask;
		});
	}

	public async Task<ICharacterInstanceWriteToken> GetWriteTokenAsync(CancellationToken cancellationToken = default(CancellationToken))
	{
		await _accessLock.AcquireWriterLock(30000, cancellationToken);
		return new CharacterInstanceWriteToken(this, delegate
		{
			_accessLock.ReleaseWriterLock();
			return Task.CompletedTask;
		});
	}

	public override string ToString()
	{
		return Name;
	}

	public async ValueTask DisposeAsync()
	{
		await Memory.DisposeAsync();
		_accessLock.Dispose();
	}
}

```

## Voxta.Core.Chats.Objects.Characters\CharacterInstanceFactory.cs
```csharp
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Assets;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Repositories;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Abstractions.Services.Memory;
using Voxta.Abstractions.Services.TextGen;
using Voxta.Abstractions.Templating;
using Voxta.Abstractions.Web;
using Voxta.Common;
using Voxta.Core.Chats.Objects.Assets;
using Voxta.Core.Chats.Sessions;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Objects.Characters;

public class CharacterInstanceFactory(IUnitOfWorkFactory unitOfWorkFactory, IUrlProvider urlProvider, ITemplateSystem templateSystem, IResourceAssetsManager resourceAssetsManager, ILoggerFactory loggerFactory, ILogger<CharacterInstanceFactory> logger) : ICharacterInstanceFactory
{
	public async Task<CharacterInstance> CreateAsync(Guid userId, IChat chat, Guid characterId, IEnumerable<Guid>? additionalMemoryBooks, IChatTextProcessor textProcessor, IServiceReference<ITextGenService> textGen, IServiceReference<IMemoryProviderService> memory, ChatStyles chatStyle, IActionScriptEngine scriptEngine, CancellationToken cancellationToken)
	{
		Character character = await unitOfWorkFactory.ReadAsync((IUnitOfWork x) => x.Characters.GetByIdAsync(userId, characterId, cancellationToken));
		if (character == null)
		{
			throw new NullReferenceException($"Character with id {characterId} not found");
		}
		return await CreateAsync(userId, chat, character, additionalMemoryBooks, textProcessor, textGen, memory, ChatStylesSelector.Select(chatStyle, character.ChatStyle), scriptEngine, cancellationToken);
	}

	public async Task<CharacterInstance> CreateAsync(Guid userId, IChat chat, Character character, IEnumerable<Guid>? additionalMemoryBooks, IChatTextProcessor textProcessor, IServiceReference<ITextGenService> textGen, IServiceReference<IMemoryProviderService> memory, ChatStyles chatStyle, IActionScriptEngine scriptEngine, CancellationToken cancellationToken)
	{
		SimpleMessageData message;
		SimpleMessageData[] messageExamples = (from x in (character.MessageExamples ?? "").Split('\n', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries)
			select (!SimpleMessageData.TryParse(x, textProcessor.User, new string[1] { textProcessor.Character }, out message)) ? null : message into x
			where x != null
			select x).ToArray();
		SimpleMessageData[] array = messageExamples;
		foreach (SimpleMessageData simpleMessageData in array)
		{
			simpleMessageData.Value = textProcessor.ProcessText(simpleMessageData.Value);
		}
		string[] assetFiles = ((character.LocalId != Guid.Empty && character.UserId != Guid.Empty) ? resourceAssetsManager.ManageContainer<Character>(userId, character.LocalId).ManageAssets().ListAssets() : Array.Empty<string>());
		AssetsListInstance assets = new AssetsListInstance(assetFiles);
		if (character.Scripts != null)
		{
			string text = $"character/{character.LocalId:N}";
			ScriptFile scriptFile = character.Scripts.FirstOrDefault((ScriptFile s) => s.Name == "index");
			ScriptFile[] scripts = character.Scripts;
			foreach (ScriptFile scriptFile2 in scripts)
			{
				scriptEngine.AddLibrary(text + "/" + scriptFile2.Name, scriptFile2.Content);
			}
			if (scriptFile != null)
			{
				scriptEngine.SetEntrypoint(text + "/" + scriptFile.Name);
			}
		}
		bool flag = ((chatStyle == ChatStyles.Companion || chatStyle == ChatStyles.Assistant) ? true : false);
		bool allowRealWorld = flag;
		ICharacterMemoryInstance memory2 = await CreateMemoryProviderInstanceAsync(userId, chat, character, additionalMemoryBooks, textProcessor, textGen, memory, cancellationToken);
		return new CharacterInstance
		{
			Memory = memory2,
			Id = character.LocalId,
			Name = character.Name,
			Description = templateSystem.Parse(character.Name + " Description", character.Description),
			Personality = templateSystem.Parse(character.Name + " Personality", character.Personality),
			MessageExamples = messageExamples,
			SystemPromptOverrideType = character.SystemPromptOverrideType,
			SystemPrompt = templateSystem.Parse(character.Name + " System Prompt", character.SystemPrompt),
			PostHistoryInstructions = textProcessor.ProcessText(character.PostHistoryInstructions),
			GenerateConstraintRequest = new GenerateConstraintRequest
			{
				MaxNewTokens = character.MaxTokens,
				MaxSentences = character.MaxSentences
			},
			Profile = templateSystem.Parse(character.Name + " Profile", character.Profile),
			Context = (character.Context ?? ""),
			TimeAware = (character.TimeAware && allowRealWorld),
			ExplicitContent = character.ExplicitContent,
			Tags = (character.Tags ?? Array.Empty<string>()),
			Culture = CultureInfo.GetCultureInfoByIetfLanguageTag(character.Culture),
			ThumbnailUrl = urlProvider.GetThumbnailUrl(character),
			TextToSpeech = character.TextToSpeech,
			EnableThinkingSpeech = character.EnableThinkingSpeech,
			Assets = assets,
			ChatStyle = chatStyle
		};
	}

	private async Task<ICharacterMemoryInstance> CreateMemoryProviderInstanceAsync(Guid userId, IChat chat, Character character, IEnumerable<Guid>? additionalMemoryBooks, IChatTextProcessor textProcessor, IServiceReference<ITextGenService> textGen, IServiceReference<IMemoryProviderService> memory, CancellationToken cancellationToken)
	{
		HashSet<Guid> hashSet = new HashSet<Guid>(character.MemoryBooks);
		if (additionalMemoryBooks != null)
		{
			foreach (Guid additionalMemoryBook in additionalMemoryBooks)
			{
				hashSet.Add(additionalMemoryBook);
			}
		}
		ICharacterMemoryInstance result;
		await using (IUnitOfWork uow = unitOfWorkFactory.CreateUnitOfWork())
		{
			MemoryBook[] memoryBooks = await uow.MemoryBooks.GetManyByIdAsync(userId, hashSet.ToArray(), cancellationToken);
			MemoryBook privateMemory = null;
			if (chat.UseChatMemory)
			{
				if (character.UseMemory)
				{
					logger.LogWarning("Character {Character} is using memory, but chat {Chat} is also using memory. The chat memory will take precedence.", character.Name, chat.LocalId);
				}
				privateMemory = await uow.MemoryBooks.GetByOwner(userId, ChatResourceKind.Chat, chat.LocalId, cancellationToken);
				if (privateMemory == null)
				{
					privateMemory = new MemoryBook
					{
						LocalId = Crypto.CreateCryptographicallySecureGuid(),
						UserId = userId,
						Name = character.Name,
						ExplicitContent = character.ExplicitContent.IsExplicit(),
						Owner = new ChatResourceInformation
						{
							Kind = ChatResourceKind.Chat,
							Id = chat.LocalId
						}
					};
					if (!chat.Ephemeral)
					{
						await uow.MemoryBooks.CreateAsync(privateMemory);
						await uow.SaveChangesAsync(cancellationToken);
					}
					logger.LogInformation("Created memory book for chat: {Id}", privateMemory.LocalId);
				}
				MemoryBook[] array = memoryBooks;
				int num = 0;
				MemoryBook[] array2 = new MemoryBook[1 + array.Length];
				ReadOnlySpan<MemoryBook> readOnlySpan = new ReadOnlySpan<MemoryBook>(array);
				readOnlySpan.CopyTo(new Span<MemoryBook>(array2).Slice(num, readOnlySpan.Length));
				num += readOnlySpan.Length;
				array2[num] = privateMemory;
				memoryBooks = array2;
			}
			if (character.UseMemory)
			{
				privateMemory = await uow.MemoryBooks.GetByOwner(userId, character.GetKind(), character.LocalId, cancellationToken);
				if (privateMemory == null)
				{
					privateMemory = new MemoryBook
					{
						LocalId = Crypto.CreateCryptographicallySecureGuid(),
						UserId = userId,
						Name = character.Name,
						ExplicitContent = character.ExplicitContent.IsExplicit(),
						Owner = new ChatResourceInformation
						{
							Kind = character.GetKind(),
							Id = character.LocalId
						}
					};
					if (!chat.Ephemeral)
					{
						await uow.MemoryBooks.CreateAsync(privateMemory);
						await uow.SaveChangesAsync(cancellationToken);
					}
					logger.LogInformation("Created memory book for character {Character}: {Id}", character.Name, privateMemory.LocalId);
				}
				MemoryBook[] array2 = memoryBooks;
				int num = 0;
				MemoryBook[] array = new MemoryBook[1 + array2.Length];
				ReadOnlySpan<MemoryBook> readOnlySpan = new ReadOnlySpan<MemoryBook>(array2);
				readOnlySpan.CopyTo(new Span<MemoryBook>(array).Slice(num, readOnlySpan.Length));
				num += readOnlySpan.Length;
				array[num] = privateMemory;
				memoryBooks = array;
			}
			CharacterMemoryInstance memoryInstance = new CharacterMemoryInstance(memory, textGen, textProcessor, memoryBooks.ToArray(), privateMemory, loggerFactory.CreateLogger<CharacterMemoryInstance>());
			try
			{
				memoryInstance.RegisterEvents();
				await memoryInstance.InitializeMemoryAsync();
			}
			catch
			{
				await memoryInstance.DisposeAsync();
				throw;
			}
			result = memoryInstance;
		}
		return result;
	}

	public CharacterInstance CreateNarratorAsync(Character character, ChatTextProcessor textProcessor, CancellationToken cancellationToken)
	{
		cancellationToken.ThrowIfCancellationRequested();
		return new CharacterInstance
		{
			Id = character.LocalId,
			Name = textProcessor.ProcessText(character.Name),
			Description = templateSystem.Empty,
			Personality = templateSystem.Empty,
			MessageExamples = Array.Empty<SimpleMessageData>(),
			SystemPrompt = templateSystem.Empty,
			PostHistoryInstructions = "",
			Profile = templateSystem.Parse(character.Name + " Profile", character.Profile),
			TimeAware = false,
			ExplicitContent = character.ExplicitContent,
			Memory = NullCharacterMemoryInstance.Instance,
			Culture = CultureInfo.GetCultureInfoByIetfLanguageTag(character.Culture),
			ThumbnailUrl = urlProvider.GetThumbnailUrl(character),
			TextToSpeech = character.TextToSpeech,
			EnableThinkingSpeech = character.EnableThinkingSpeech,
			ChatStyle = ChatStyles.Storytelling
		};
	}
}

```

## Voxta.Core.Chats.Objects.Characters\CharacterInstanceReadToken.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Services.Memory;

namespace Voxta.Core.Chats.Objects.Characters;

public sealed class CharacterInstanceReadToken : CharacterInstanceTokenBase, ICharacterInstanceReadToken, IAsyncDisposable
{
	public IReadOnlyList<CharacterMemoryEntry> Memories => _003Cdata_003EP.Memories;

	public CharacterInstanceReadToken(ICharacterInstanceUnsafe data, Func<Task> exit)
	{
		_003Cdata_003EP = data;
		base._002Ector(exit);
	}
}

```

## Voxta.Core.Chats.Objects.Characters\CharacterInstanceTokenBase.cs
```csharp
using System;
using System.Threading.Tasks;

namespace Voxta.Core.Chats.Objects.Characters;

public abstract class CharacterInstanceTokenBase(Func<Task> exit) : IAsyncDisposable
{
	public async ValueTask DisposeAsync()
	{
		await exit();
	}
}

```

## Voxta.Core.Chats.Objects.Characters\CharacterInstanceWriteToken.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Services.Memory;

namespace Voxta.Core.Chats.Objects.Characters;

public sealed class CharacterInstanceWriteToken : CharacterInstanceTokenBase, ICharacterInstanceWriteToken, ICharacterInstanceReadToken, IAsyncDisposable
{
	public List<CharacterMemoryEntry> Memories => _003Cdata_003EP.Memories;

	IReadOnlyList<CharacterMemoryEntry> ICharacterInstanceReadToken.Memories => _003Cdata_003EP.Memories;

	public CharacterInstanceWriteToken(ICharacterInstanceUnsafe data, Func<Task> exit)
	{
		_003Cdata_003EP = data;
		base._002Ector(exit);
	}
}

```

## Voxta.Core.Chats.Objects.Characters\CharacterMemoryInstance.cs
```csharp
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Services.Memory;
using Voxta.Abstractions.Services.TextGen;
using Voxta.Common;

namespace Voxta.Core.Chats.Objects.Characters;

public class CharacterMemoryInstance(IServiceReference<IMemoryProviderService> memory, IServiceReference<ITextGenService> textGen, IChatTextProcessor textProcessor, MemoryBook[] memoryBooks, MemoryBook? privateMemoryBook, ILogger<ICharacterMemoryInstance> logger) : ICharacterMemoryInstance, IAsyncDisposable
{
	private readonly CancellationTokenSource _cts = new CancellationTokenSource();

	private readonly SemaphoreSlim _semaphore = new SemaphoreSlim(1, 1);

	private bool _disposed;

	public bool Enabled => MemoryProviderInstance.Enabled;

	public bool PrivateMemoryEnabled
	{
		get
		{
			if (privateMemoryBook != null)
			{
				return Enabled;
			}
			return false;
		}
	}

	public MemoryBook? PrivateMemoryBook => privateMemoryBook;

	public IMemoryProviderInstance MemoryProviderInstance { get; private set; } = NullMemoryProviderInstance.Instance;

	public void RegisterEvents()
	{
		textGen.ServiceChanged += OnTextGenServiceChanged;
		memory.ServiceRemoved += OnMemoryServiceRemoved;
		memory.ServiceChanged += OnMemoryServiceChanged;
	}

	public async Task InitializeMemoryAsync()
	{
		IMemoryProviderService currentMemory = memory.Current;
		if (!currentMemory.Enabled)
		{
			return;
		}
		ITextGenService currentTextGen = textGen.Current;
		if (!currentTextGen.Enabled || currentTextGen.MaxMemoryTokens <= 0)
		{
			return;
		}
		await _semaphore.WaitAsync(_cts.Token);
		try
		{
			IMemoryProviderInstance memoryProviderInstance = MemoryProviderInstance;
			MemoryProviderInstance = NullMemoryProviderInstance.Instance;
			await memoryProviderInstance.DisposeAsync();
			if (!_disposed)
			{
				MemoryRef[] memoryRefs = await Task.WhenAll((from x in memoryBooks.SelectMany((MemoryBook x) => x.Items)
					where x.Deleted != true
					where !string.IsNullOrWhiteSpace(x.Text)
					select x).Select(async delegate(MemoryItem x)
				{
					string text = textProcessor.ProcessText(x.Text);
					MemoryRef memoryRef = new MemoryRef
					{
						Id = x.Id,
						Text = text,
						Keywords = x.Keywords
					};
					MemoryRef memoryRef2 = memoryRef;
					memoryRef2.Tokens = await currentTextGen.Tokenizer.CountTokensAsync(text, _cts.Token);
					memoryRef.Weight = x.Weight;
					memoryRef.CreatedAt = x.CreatedAt;
					return memoryRef;
				}));
				IMemoryProviderInstance memoryProvider = await currentMemory.CreateAsync(_cts.Token);
				try
				{
					memoryProvider.Configure(currentTextGen.MaxMemoryTokens);
					await memoryProvider.RegisterMemoriesAsync(memoryRefs, _cts.Token);
					MemoryProviderInstance = memoryProvider;
				}
				catch
				{
					await memoryProvider.DisposeAsync();
					throw;
				}
			}
		}
		finally
		{
			_semaphore.Release();
		}
	}

	private void OnMemoryServiceChanged(object? sender, EventArgs e)
	{
		if (!_disposed)
		{
			InitializeMemoryAsync().Forget(logger);
		}
	}

	private void OnMemoryServiceRemoved(object? sender, EventArgs e)
	{
		if (!_disposed)
		{
			MemoryProviderInstance = NullMemoryProviderInstance.Instance;
		}
	}

	private void OnTextGenServiceChanged(object? sender, EventArgs e)
	{
		if (!_disposed)
		{
			InitializeMemoryAsync().Forget(logger);
		}
	}

	public async ValueTask DisposeAsync()
	{
		if (!_disposed)
		{
			_disposed = true;
			textGen.ServiceChanged -= OnTextGenServiceChanged;
			memory.ServiceRemoved -= OnMemoryServiceRemoved;
			memory.ServiceChanged -= OnMemoryServiceChanged;
			await _cts.CancelAsync();
			await _semaphore.WaitAsync();
			await MemoryProviderInstance.DisposeAsync();
			_semaphore.Dispose();
			_cts.Dispose();
		}
	}
}

```

## Voxta.Core.Chats.Objects.Characters\ICharacterInstanceFactory.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Abstractions.Services.Memory;
using Voxta.Abstractions.Services.TextGen;
using Voxta.Core.Chats.Sessions;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Objects.Characters;

public interface ICharacterInstanceFactory
{
	Task<CharacterInstance> CreateAsync(Guid userId, IChat chat, Guid characterId, IEnumerable<Guid>? additionalMemoryBooks, IChatTextProcessor textProcessor, IServiceReference<ITextGenService> textGen, IServiceReference<IMemoryProviderService> memory, ChatStyles chatStyle, IActionScriptEngine scriptEngine, CancellationToken cancellationToken);

	Task<CharacterInstance> CreateAsync(Guid userId, IChat chat, Character character, IEnumerable<Guid>? additionalMemoryBooks, IChatTextProcessor textProcessor, IServiceReference<ITextGenService> textGen, IServiceReference<IMemoryProviderService> memory, ChatStyles chatStyle, IActionScriptEngine scriptEngine, CancellationToken cancellationToken);

	CharacterInstance? CreateNarratorAsync(Character character, ChatTextProcessor textProcessor, CancellationToken cancellationToken);
}

```

## Voxta.Core.Chats.Objects.Characters\NullCharacterInstance.cs
```csharp
using System;
using System.Collections.Concurrent;
using System.Globalization;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Cache;
using Voxta.Abstractions.Chats.Objects.Assets;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Services.ActionInference;
using Voxta.Abstractions.Templating;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Objects.Characters;

public class NullCharacterInstance : ICharacterInferenceData, ICharacterOrUserData
{
	public static readonly ICharacterInferenceData Instance = new NullCharacterInstance();

	public bool Enabled => false;

	public Guid Id => Guid.Empty;

	public string Name => "";

	public ITemplate Description => StaticTemplate.Empty;

	public string? ThumbnailUrl => null;

	public ITemplate Personality => StaticTemplate.Empty;

	public SimpleMessageData[] MessageExamples => Array.Empty<SimpleMessageData>();

	public SystemPromptOverrideTypes SystemPromptOverrideType => SystemPromptOverrideTypes.AddOn;

	public ITemplate SystemPrompt => StaticTemplate.Empty;

	public string PostHistoryInstructions => "";

	public ITemplate Profile => StaticTemplate.Empty;

	public bool TimeAware => false;

	public ExplicitContentLevels ExplicitContent => ExplicitContentLevels.NotSpecified;

	public string[] Tags => Array.Empty<string>();

	public GenerateConstraintRequest GenerateConstraintRequest => Voxta.Model.Shared.GenerateConstraintRequest.Empty;

	public ConcurrentDictionary<string, ActionInvocationRecord> LastInvokedFunction => new ConcurrentDictionary<string, ActionInvocationRecord>();

	public CultureInfo Culture => CultureInfo.InvariantCulture;

	public ChatStyles ChatStyle => ChatStyles.Undefined;

	public IAssetsListInstance Assets => NullAssetsListInstance.Instance;

	public ChatMessageRole Role => ChatMessageRole.Undefined;

	public IPersistentCacheEntry[] ThinkingSpeechEntries => Array.Empty<IPersistentCacheEntry>();

	public string? ScenarioRole => null;

	public VoiceInfo? GetVoice(string serviceName, Guid moduleId)
	{
		return null;
	}

	public Task<ICharacterInstanceReadToken> GetReadTokenAsync(CancellationToken cancellationToken = default(CancellationToken))
	{
		throw new NotSupportedException("NullCharacterInstance does not support GetReadTokenAsync");
	}
}

```

## Voxta.Core.Chats.Objects.Chats\ChatInstance.cs
```csharp
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Chats.Objects.Scenarios;
using Voxta.Abstractions.Configuration;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Services.ActionInference;
using Voxta.Abstractions.Templating;
using Voxta.Common;
using Voxta.Core.Chats.Objects.Characters;
using Voxta.Core.Chats.Objects.Scenarios;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Objects.Chats;

public class ChatInstance(Chat chat, bool ownCharacters = true) : IChatInstanceUnsafe, IChatInferenceData, IChatSessionData, IAsyncDisposable
{
	private const int LockTimeout = 30000;

	private readonly CancellationTokenSource _cts = new CancellationTokenSource();

	private readonly AsyncReaderWriterLock _messagesLock = new AsyncReaderWriterLock();

	private readonly AsyncReaderWriterLock _contextLock = new AsyncReaderWriterLock();

	public Guid SessionId { get; init; }

	public Guid ChatId => Chat.LocalId;

	public bool Ephemeral => Chat.Ephemeral;

	public ChatFlowModes ChatFlow => Scenario.ChatFlow;

	public CancellationToken Abort => _cts.Token;

	public Chat Chat => chat;

	public IChatStateInstance State { get; } = new ChatStateInstance(chat.State);

	IChatStateInferenceData IChatInferenceData.State => State;

	public required Guid UserId { get; init; }

	public required UserInstance User { get; init; }

	public required List<CharacterInstance> Characters { get; init; }

	public required ScenarioInstance Scenario { get; init; }

	IScenarioInferenceData IChatInferenceData.ChatSessionScenario => Scenario;

	public ExplicitContentLevels ExplicitContent { get; init; }

	public string[] RequestedAugmentations { get; init; } = Array.Empty<string>();

	Dictionary<string, List<IContextDefinitionInstance>> IChatInstanceUnsafe.Contexts { get; } = new Dictionary<string, List<IContextDefinitionInstance>>();

	Dictionary<string, List<IScenarioActionInstance>> IChatInstanceUnsafe.Actions { get; } = new Dictionary<string, List<IScenarioActionInstance>>();

	Dictionary<string, List<IScenarioEventInstance>> IChatInstanceUnsafe.Events { get; } = new Dictionary<string, List<IScenarioEventInstance>>();

	public ConcurrentDictionary<string, ActionInvocationRecord> LastInvokedUserFunction { get; } = new ConcurrentDictionary<string, ActionInvocationRecord>();

	public GenerationStats? GenerationStats { get; set; }

	public string? Vision { get; set; }

	public SystemPromptOverrideTypes SystemPromptOverrideType { get; set; }

	public List<ITemplate> SystemPromptAddons { get; } = new List<ITemplate>();

	public List<ITemplate> ContextPromptAddons { get; } = new List<ITemplate>();

	public ITemplate ReplyPrefix { get; set; } = StaticTemplate.Empty;

	List<ChatMessageData> IChatInstanceUnsafe.Messages { get; } = new List<ChatMessageData>();

	List<ChatDocument> IChatInstanceUnsafe.Documents { get; } = new List<ChatDocument>();

	public ICharacterInferenceData Narrator { get; init; } = NullCharacterInstance.Instance;

	public bool InspectorEnabled { get; set; }

	public ServicesConfigurations Config { get; init; } = ServicesConfigurations.Empty;

	public ChatStyles GetChatStyle(ChatStyles defaultValue)
	{
		return ChatStylesSelector.Select(Scenario.ChatStyle, defaultValue);
	}

	public async ValueTask<T> GetOneMessageAsync<T>(Func<IReadOnlyList<ChatMessageData>, T> predicate, CancellationToken cancellationToken)
	{
		await _messagesLock.AcquireReaderLock(30000, cancellationToken);
		try
		{
			return predicate(((IChatInstanceUnsafe)this).Messages);
		}
		finally
		{
			_messagesLock.ReleaseReaderLock();
		}
	}

	public async ValueTask<IChatInstanceMessagesReadToken> GetMessagesReadTokenAsync(CancellationToken cancellationToken)
	{
		await _messagesLock.AcquireReaderLock(30000, cancellationToken);
		return new ChatInstanceMessagesReadToken(this, delegate
		{
			_messagesLock.ReleaseReaderLock();
			return Task.CompletedTask;
		});
	}

	public async Task<IChatInstanceMessagesWriteToken> GetMessagesWriteTokenAsync(CancellationToken cancellationToken)
	{
		await _messagesLock.AcquireWriterLock(30000, cancellationToken);
		return new ChatInstanceMessagesWriteToken(this, delegate
		{
			_messagesLock.ReleaseWriterLock();
			return Task.CompletedTask;
		});
	}

	public async ValueTask<IChatInstanceContextReadToken> GetContextReadTokenAsync(CancellationToken cancellationToken)
	{
		await _contextLock.AcquireReaderLock(30000, cancellationToken);
		return new ChatInstanceContextReadToken(this, delegate
		{
			_contextLock.ReleaseReaderLock();
			return Task.CompletedTask;
		});
	}

	public async Task<IChatInstanceContextWriteToken> GetContextWriteTokenAsync(CancellationToken cancellationToken)
	{
		await _contextLock.AcquireWriterLock(30000, cancellationToken);
		return new ChatInstanceContextWriteToken(this, delegate
		{
			_contextLock.ReleaseWriterLock();
			return Task.CompletedTask;
		});
	}

	public async Task<ITemplate[]> ResolveContextsAsync(Func<IContextDefinitionInstance, bool> filter, CancellationToken cancellationToken)
	{
		ITemplate[] result;
		await using (IChatInstanceContextReadToken chatInstanceContextReadToken = await GetContextReadTokenAsync(cancellationToken))
		{
			ITemplate[] array = chatInstanceContextReadToken.ResolveContexts(filter);
			if (ContextPromptAddons.Count > 0)
			{
				ITemplate[] array2 = array;
				List<ITemplate> contextPromptAddons = ContextPromptAddons;
				int num = 0;
				ITemplate[] array3 = new ITemplate[array2.Length + contextPromptAddons.Count];
				ReadOnlySpan<ITemplate> readOnlySpan = new ReadOnlySpan<ITemplate>(array2);
				readOnlySpan.CopyTo(new Span<ITemplate>(array3).Slice(num, readOnlySpan.Length));
				num += readOnlySpan.Length;
				Span<ITemplate> span = CollectionsMarshal.AsSpan(contextPromptAddons);
				span.CopyTo(new Span<ITemplate>(array3).Slice(num, span.Length));
				_ = num + span.Length;
				array = array3;
			}
			result = array;
		}
		return result;
	}

	public async Task<IScenarioActionInstance[]> ResolveActionsAsync(ChatMessageData? message, FunctionTiming timing, string? role, CancellationToken cancellationToken)
	{
		IScenarioActionInstance[] result;
		await using (IChatInstanceContextReadToken chatInstanceContextReadToken = await GetContextReadTokenAsync(cancellationToken))
		{
			result = chatInstanceContextReadToken.ResolveActions(message, timing, role);
		}
		return result;
	}

	public IReadOnlyCollection<string> GetCurrentFlags()
	{
		return State.GetFlags();
	}

	public CharacterInstance GetMainCharacter()
	{
		return Characters[0];
	}

	ICharacterInferenceData IChatInferenceData.GetMainCharacter()
	{
		return GetMainCharacter();
	}

	public CharacterInstance GetCharacter(Guid id)
	{
		return Characters.FirstOrDefault((CharacterInstance c) => c.Id == id) ?? throw new NullReferenceException($"Character with id {id} not found");
	}

	public CharacterInstance? GetCharacterByRole2(string role)
	{
		return Characters.FirstOrDefault((CharacterInstance c) => c.ScenarioRole == role);
	}

	public ICharacterInferenceData? GetCharacterByRole(string role)
	{
		return GetCharacterByRole2(role);
	}

	ICharacterInferenceData IChatInferenceData.GetCharacter(Guid id)
	{
		return GetCharacter(id);
	}

	public ICharacterInferenceData GetCharacterWithFallback(Guid? id)
	{
		if (!id.HasValue)
		{
			return GetMainCharacter();
		}
		return Characters.FirstOrDefault((CharacterInstance c) => c.Id == id.Value) ?? GetMainCharacter();
	}

	public IReadOnlyList<ICharacterInstanceEditable> GetCharacters()
	{
		return Characters.Where((CharacterInstance c) => c.Enabled).ToArray();
	}

	IReadOnlyList<ICharacterInferenceData> IChatInferenceData.GetCharacters()
	{
		return GetCharacters();
	}

	public ICharacterInferenceData GetNarrator()
	{
		return Narrator;
	}

	public bool IsAugmentationEnabled(string key, bool includeInCatchAll)
	{
		if (includeInCatchAll && RequestedAugmentations.Contains("*"))
		{
			return true;
		}
		if (RequestedAugmentations.Contains(key))
		{
			return true;
		}
		return RequestedAugmentations.Any((string x) => key.StartsWith(x + "."));
	}

	public async ValueTask DisposeAsync()
	{
		try
		{
			await _cts.CancelAsync();
		}
		catch (ObjectDisposedException)
		{
		}
		if (ownCharacters)
		{
			foreach (CharacterInstance character in Characters)
			{
				await character.DisposeAsync();
			}
		}
		_messagesLock.Dispose();
		_contextLock.Dispose();
		_cts.Dispose();
	}
}

```

## Voxta.Core.Chats.Objects.Chats\ChatInstanceContextReadToken.cs
```csharp
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Templating;
using Voxta.Common;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Objects.Chats;

public sealed class ChatInstanceContextReadToken(IChatInstanceUnsafe data, Func<Task> exit) : IChatInstanceContextReadToken, IAsyncDisposable
{
	public IReadOnlyList<ChatDocument> Documents => data.Documents;

	public IReadOnlyDictionary<string, List<IContextDefinitionInstance>> Contexts => new ReadOnlyDictionary<string, List<IContextDefinitionInstance>>(data.Contexts);

	public IReadOnlyDictionary<string, List<IScenarioActionInstance>> Actions => new ReadOnlyDictionary<string, List<IScenarioActionInstance>>(data.Actions);

	public IReadOnlyDictionary<string, List<IScenarioEventInstance>> Events => new ReadOnlyDictionary<string, List<IScenarioEventInstance>>(data.Events);

	public IContextDefinitionInstance[] ResolveContextDefinitions()
	{
		return (from x in Contexts.SelectMany<KeyValuePair<string, List<IContextDefinitionInstance>>, IContextDefinitionInstance>((KeyValuePair<string, List<IContextDefinitionInstance>> x) => x.Value)
			where x.Conditions.Match(data, null)
			select x).DistinctByWithPriorityExceptEmpty((IContextDefinitionInstance x) => x.Name, (IContextDefinitionInstance x) => x.Priority).ToArray();
	}

	public ITemplate[] ResolveContexts(Func<IContextDefinitionInstance, bool> filter)
	{
		return (from x in (from x in Contexts.SelectMany<KeyValuePair<string, List<IContextDefinitionInstance>>, IContextDefinitionInstance>((KeyValuePair<string, List<IContextDefinitionInstance>> x) => x.Value)
				where x.Conditions.Match(data, null)
				select x).DistinctByWithPriorityExceptEmpty((IContextDefinitionInstance x) => x.Name, (IContextDefinitionInstance x) => x.Priority).Where(filter)
			select x.TextTemplate).ToArray();
	}

	public IScenarioActionInstance[] ResolveActions(ChatMessageData? message, FunctionTiming timing, string? role)
	{
		return (from x in Actions.SelectMany<KeyValuePair<string, List<IScenarioActionInstance>>, IScenarioActionInstance>((KeyValuePair<string, List<IScenarioActionInstance>> x) => x.Value).Where(delegate(IScenarioActionInstance x)
			{
				bool flag = x.Timing == timing;
				if (!flag)
				{
					bool flag2 = x.Timing == FunctionTiming.AfterAnyMessage;
					if (flag2)
					{
						FunctionTiming functionTiming = timing;
						bool flag3 = ((functionTiming == FunctionTiming.AfterUserMessage || functionTiming == FunctionTiming.AfterAssistantMessage) ? true : false);
						flag2 = flag3;
					}
					flag = flag2;
				}
				return flag;
			})
			where x.RoleFilter == null || x.RoleFilter == role
			where x.Conditions.Match(data, message)
			select x).DistinctByWithPriority((IScenarioActionInstance x) => x.Name, (IScenarioActionInstance x) => x.Priority).ToArray();
	}

	public IScenarioEventInstance[] ResolveEvents(ChatMessageData? message, FunctionTiming timing, string? trigger)
	{
		IEnumerable<IScenarioEventInstance> source = Events.SelectMany<KeyValuePair<string, List<IScenarioEventInstance>>, IScenarioEventInstance>((KeyValuePair<string, List<IScenarioEventInstance>> x) => x.Value);
		return ((trigger != null) ? source.Where((IScenarioEventInstance e) => e.Name.Equals(trigger, StringComparison.InvariantCultureIgnoreCase)) : source.Where(delegate(IScenarioEventInstance e)
		{
			bool flag = e.Timing == timing;
			if (!flag)
			{
				bool flag2 = e.Timing == FunctionTiming.AfterAnyMessage;
				if (flag2)
				{
					FunctionTiming functionTiming = timing;
					bool flag3 = ((functionTiming == FunctionTiming.AfterUserMessage || functionTiming == FunctionTiming.AfterAssistantMessage) ? true : false);
					flag2 = flag3;
				}
				flag = flag2;
			}
			return flag;
		})).Where((IScenarioEventInstance x) => x.Conditions.Match(data, message)).DistinctByWithPriority((IScenarioEventInstance x) => x.Name, (IScenarioEventInstance x) => x.Priority).ToArray();
	}

	public async ValueTask DisposeAsync()
	{
		await exit();
	}
}

```

## Voxta.Core.Chats.Objects.Chats\ChatInstanceContextWriteToken.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Model;

namespace Voxta.Core.Chats.Objects.Chats;

public class ChatInstanceContextWriteToken(IChatInstanceUnsafe data, Func<Task> exit) : IChatInstanceContextWriteToken, IAsyncDisposable
{
	public List<ChatDocument> Documents => data.Documents;

	public Dictionary<string, List<IContextDefinitionInstance>> Contexts => data.Contexts;

	public Dictionary<string, List<IScenarioActionInstance>> Actions => data.Actions;

	public Dictionary<string, List<IScenarioEventInstance>> Events => data.Events;

	public async ValueTask DisposeAsync()
	{
		await exit();
	}
}

```

## Voxta.Core.Chats.Objects.Chats\ChatInstanceExtensions.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Services.Memory;
using Voxta.Core.Chats.Objects.Characters;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.Objects.Chats;

public static class ChatInstanceExtensions
{
	public static async Task<ServerContextUpdatedMessage> CreateServerContextUpdatedMessageWithoutInspectionAsync(this ChatInstance chatInstance, CancellationToken cancellationToken)
	{
		ServerContextUpdatedMessage result;
		await using (IChatInstanceContextReadToken token = await chatInstance.GetContextReadTokenAsync(cancellationToken))
		{
			result = chatInstance.CreateServerContextUpdatedMessageAsync(token);
		}
		return result;
	}

	public static ServerContextUpdatedMessage CreateServerContextUpdatedMessageAsync(this ChatInstance chatInstance, IChatInstanceContextReadToken token)
	{
		return new ServerContextUpdatedMessage
		{
			SessionId = chatInstance.SessionId,
			Flags = chatInstance.State.GetFlags((IReadOnlyCollection<FlagState> flags) => flags.Select((FlagState f) => new FlagInfo
			{
				Name = f.Name,
				MessageIndex = f.MessageIndex,
				MessageChatTime = f.MessageChatTime,
				ExpireIndex = f.ExpireIndex,
				ExpireChatTime = f.ExpireTime
			}).ToArray()),
			Roles = CreateContextUpdatedRolesProperty(chatInstance),
			Buttons = CreateContextUpdateButtonsProperty(chatInstance, token),
			Characters = chatInstance.CreateContextUpdatedCharactersProperty()
		};
	}

	private static Dictionary<string, ServerContextUpdatedMessage.RoleEntry> CreateContextUpdatedRolesProperty(ChatInstance chatInstance)
	{
		return chatInstance.Chat.Roles.ToDictionary<KeyValuePair<string, ChatScenarioRole>, string, ServerContextUpdatedMessage.RoleEntry>((KeyValuePair<string, ChatScenarioRole> kvp) => kvp.Key, (KeyValuePair<string, ChatScenarioRole> kvp) => new ServerContextUpdatedMessage.RoleEntry
		{
			CharacterId = kvp.Value.CharacterId,
			Enabled = kvp.Value.Enabled
		});
	}

	private static ServerContextUpdatedMessage.FunctionKeyEntry[] CreateContextUpdateButtonsProperty(ChatInstance chat, IChatInstanceContextReadToken token)
	{
		return token.Events.SelectMany<KeyValuePair<string, List<IScenarioEventInstance>>, ServerContextUpdatedMessage.FunctionKeyEntry>((KeyValuePair<string, List<IScenarioEventInstance>> x) => from f in x.Value
			where f.Timing == FunctionTiming.Button
			where f.Conditions.Match(chat, null)
			select new ServerContextUpdatedMessage.FunctionKeyEntry
			{
				ContextKey = x.Key,
				Name = f.Name,
				Description = f.Source.Description,
				FlagsFilter = f.Source.FlagsFilter,
				RoleFilter = f.Source.RoleFilter,
				Once = f.Source.Once,
				Timing = f.Source.Timing
			}).ToArray();
	}

	public static ChatParticipantInfo[] CreateContextUpdatedCharactersProperty(this ChatInstance chatInstance)
	{
		return chatInstance.Characters.Select((CharacterInstance x) => chatInstance.CreateChatParticipantInfo(x)).ToArray();
	}

	public static ChatParticipantInfo CreateChatParticipantInfo(this ChatInstance chatInstance, ICharacterInferenceData character)
	{
		return new ChatParticipantInfo
		{
			Id = character.Id,
			Name = character.Name,
			ThumbnailUrl = character.ThumbnailUrl,
			ScenarioRole = chatInstance.Chat.Roles.FirstOrDefault<KeyValuePair<string, ChatScenarioRole>>((KeyValuePair<string, ChatScenarioRole> r) => r.Value.CharacterId == character.Id).Key
		};
	}

	public static ServerMemoryUpdatedMessage CreateServerMemoryUpdatedMessage(this ChatInstance chatInstance, Guid charactedId, ICharacterInstanceReadToken characterToken)
	{
		return new ServerMemoryUpdatedMessage
		{
			SessionId = chatInstance.SessionId,
			CharacterId = charactedId,
			Memories = (from m in characterToken.Memories
				select m.Memory into m
				select new MemoryItemEntry
				{
					Id = m.Id,
					Text = m.Text,
					Keywords = m.Keywords
				}).ToArray()
		};
	}
}

```

## Voxta.Core.Chats.Objects.Chats\ChatInstanceMessagesReadToken.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Model;

namespace Voxta.Core.Chats.Objects.Chats;

public sealed class ChatInstanceMessagesReadToken(IChatInstanceUnsafe data, Func<Task> exit) : IChatInstanceMessagesReadToken, IAsyncDisposable
{
	public IReadOnlyList<ChatMessageData> Messages => data.Messages;

	public async ValueTask DisposeAsync()
	{
		await exit();
	}
}

```

## Voxta.Core.Chats.Objects.Chats\ChatInstanceMessagesWriteToken.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Model;

namespace Voxta.Core.Chats.Objects.Chats;

public class ChatInstanceMessagesWriteToken(IChatInstanceUnsafe data, Func<Task> exit) : IChatInstanceMessagesWriteToken, IAsyncDisposable
{
	public Guid UserId => data.UserId;

	public Guid ChatId => data.ChatId;

	public List<ChatMessageData> Messages => data.Messages;

	public async ValueTask DisposeAsync()
	{
		await exit();
	}
}

```

## Voxta.Core.Chats.Objects.Chats\ChatStateInstance.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Model;

namespace Voxta.Core.Chats.Objects.Chats;

public class ChatStateInstance(ChatState state) : IChatStateInstance, IChatStateInferenceData
{
	private readonly Lock _flagsLock = new Lock();

	public IReadOnlyDictionary<string, object> Variables => state.Variables;

	public IReadOnlyCollection<string> GetFlags()
	{
		using (_flagsLock.EnterScope())
		{
			return (IReadOnlyCollection<string>)(object)state.Flags.Select((FlagState f) => f.Name).ToArray();
		}
	}

	public T GetFlags<T>(Func<IReadOnlyCollection<FlagState>, T> selector)
	{
		using (_flagsLock.EnterScope())
		{
			return selector(state.Flags);
		}
	}

	public FlagState? GetFlag(Func<FlagState, bool> selector)
	{
		using (_flagsLock.EnterScope())
		{
			return state.Flags.FirstOrDefault(selector);
		}
	}

	public bool SetFlags(ChatMessageData? message, SetFlagRequest[] flags)
	{
		bool flag = false;
		using (_flagsLock.EnterScope())
		{
			List<FlagState> list = new List<FlagState>(state.Flags);
			foreach (SetFlagRequest f in flags)
			{
				if (f.Value == "" || ((object)f != null && f.Set && f.ExpireInMessages == 0 && f.ExpiresInChatTime == 0 && list.Any((FlagState x) => x.Name == f.Value && x.MessageIndex == message?.ConversationIndex && x.MessageChatTime == message?.ChatTime)))
				{
					continue;
				}
				string flagPrefix = ((f.EnumKey != null) ? (f.EnumKey + ".") : (f.Value + "."));
				if (list.RemoveAll((FlagState x) => x.Name == f.Value || (f.Set && (x.Name == f.EnumKey || x.Name.StartsWith(flagPrefix)))) > 0)
				{
					flag = true;
					if (!f.Set)
					{
						continue;
					}
				}
				if (f.Set)
				{
					list.Add(new FlagState
					{
						Name = f.Value,
						MessageIndex = message?.ConversationIndex,
						MessageChatTime = message?.ChatTime,
						ExpireIndex = ((f.ExpireInMessages > 0) ? ((message ?? throw new InvalidOperationException("Cannot set a flag expiration outside of the context of a message")).ConversationIndex + f.ExpireInMessages) : 0),
						ExpireTime = ((f.ExpiresInChatTime > 0) ? ((message ?? throw new InvalidOperationException("Cannot set a flag expiration outside of the context of a message")).ChatTime + f.ExpiresInChatTime) : 0)
					});
					flag = true;
				}
				else if (list.RemoveAll((FlagState x) => (f.EnumValue == null) ? (x.Name == f.EnumKey || x.Name.StartsWith(flagPrefix)) : (x.Name == f.Value)) > 0)
				{
					flag = true;
				}
			}
			if (flag)
			{
				state.Flags = list;
			}
		}
		return flag;
	}

	public bool ExpireFlags(int conversationIndex, long chatTime)
	{
		bool result = false;
		using (_flagsLock.EnterScope())
		{
			FlagState[] array = state.Flags.Where((FlagState x) => (x.ExpireIndex > 0 && x.ExpireIndex < conversationIndex) || (x.ExpireTime > 0 && x.ExpireTime < chatTime)).ToArray();
			foreach (FlagState item in array)
			{
				state.Flags.Remove(item);
				result = true;
			}
			return result;
		}
	}

	public bool RemoveVariable(string key)
	{
		object value;
		return state.Variables.TryRemove(key, out value);
	}

	public bool SetVariable(string key, object value)
	{
		object value2;
		bool num = state.Variables.TryGetValue(key, out value2);
		state.Variables[key] = value;
		if (num)
		{
			return value2 != value;
		}
		return true;
	}
}

```

## Voxta.Core.Chats.Objects.Scenarios\BootstrappedMessagesFactory.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Templating;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Objects.Scenarios;

public class BootstrappedMessagesFactory(ITemplateSystem templateSystem) : IBootstrappedMessagesFactory
{
	public SimpleMessageData[] CreateMessagesFromScenario(string? messages, IReadOnlyList<ICharacterInferenceData> characters, ScenarioRole[] roles)
	{
		if (string.IsNullOrWhiteSpace(messages) || messages.Trim() == "-")
		{
			return Array.Empty<SimpleMessageData>();
		}
		string[] characterNames = characters.Select((ICharacterInferenceData c) => c.Name).ToArray();
		ITemplateModel templateModel = templateSystem.CreateModel();
		templateModel["event"] = "{{ event }}";
		templateModel["note"] = "{{ note }}";
		templateModel["secret"] = "{{ secret }}";
		templateModel["instructions"] = "{{ instructions }}";
		templateModel["user"] = "{{ user }}";
		templateModel["char"] = characterNames[0];
		templateModel["chars"] = characterNames;
		templateModel["characters"] = characters;
		templateModel["scenario_chars"] = roles.ToDictionary((ScenarioRole r) => r.Name, (ScenarioRole r) => characters.FirstOrDefault((ICharacterInferenceData c) => c.ScenarioRole == r.Name)?.Name ?? "Unknown");
		SimpleMessageData message;
		return (from m in templateSystem.Parse("Scenario messages", messages).Render(templateModel).Split('\n', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries)
			select (!SimpleMessageData.TryParse(m, "~~~", characterNames, out message)) ? null : message into m
			where m != null
			select m).ToArray();
	}
}

```

## Voxta.Core.Chats.Objects.Scenarios\IBootstrappedMessagesFactory.cs
```csharp
using System.Collections.Generic;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Model;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Objects.Scenarios;

public interface IBootstrappedMessagesFactory
{
	SimpleMessageData[] CreateMessagesFromScenario(string? messages, IReadOnlyList<ICharacterInferenceData> characters, ScenarioRole[] roles);
}

```

## Voxta.Core.Chats.Objects.Scenarios\IScenarioInstanceFactory.cs
```csharp
using System;
using System.Collections.Generic;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Core.Chats.Objects.Characters;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Objects.Scenarios;

public interface IScenarioInstanceFactory
{
	ScenarioInstance Create(Guid userId, ScenarioData? parentScenario, ScenarioData scenario, Chat chat, IReadOnlyList<CharacterInstance> characters, IActionScriptEngine scriptEngine);

	IScenarioEventInstance CreateEvent(ScenarioEventDefinition scenarioEvent, string? contextKey, int priority, string scriptFolder, IActionScriptEngine scriptEngine);
}

```

## Voxta.Core.Chats.Objects.Scenarios\ScenarioActionInstance.cs
```csharp
using System;
using System.Collections.Generic;
using Voxta.Abstractions.Chats.Conditions;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Templating;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Objects.Scenarios;

public class ScenarioActionInstance : FunctionDefinitionInstance, IScenarioActionInstance, IFunctionDefinitionInstance
{
	public string Layer { get; init; } = "";

	public bool FinalLayer { get; init; }

	public ITemplate ShortDescription { get; init; } = StaticTemplate.Empty;

	public FunctionArgumentDefinition[] Arguments { get; init; } = Array.Empty<FunctionArgumentDefinition>();

	public IReadOnlyList<string> Activates { get; init; } = Array.Empty<string>();

	public IChatConditions FlattenCondition { get; init; } = EmptyConditions.Instance;

	public override string ToString()
	{
		return this.FormatFunctionSignature();
	}
}

```

## Voxta.Core.Chats.Objects.Scenarios\ScenarioEventInstance.cs
```csharp
using Voxta.Abstractions.Chats.Objects;

namespace Voxta.Core.Chats.Objects.Scenarios;

public class ScenarioEventInstance : FunctionDefinitionInstance, IScenarioEventInstance, IFunctionDefinitionInstance
{
	public bool EvaluateNextEvent { get; init; }
}

```

## Voxta.Core.Chats.Objects.Scenarios\ScenarioInstance.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Chats.Objects.Assets;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Scenarios;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Templating;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Objects.Scenarios;

public class ScenarioInstance : IScenarioInferenceData
{
	public Guid Id { get; init; }

	public ScenarioData SourceScenario { get; init; } = Scenario.Empty;

	public required ITemplate ScenarioTemplate { get; init; }

	public SystemPromptOverrideTypes SystemPromptOverrideType { get; init; }

	public ITemplate SystemPrompt { get; init; } = StaticTemplate.Empty;

	public IReadOnlyList<IScenarioEventInstance> ScenarioEvents { get; init; } = Array.Empty<IScenarioEventInstance>();

	public IReadOnlyList<IScenarioActionInstance> ScenarioActions { get; init; } = Array.Empty<IScenarioActionInstance>();

	public IReadOnlyList<IContextDefinitionInstance> ScenarioContexts { get; init; } = Array.Empty<IContextDefinitionInstance>();

	public ChatFlowModes ChatFlow { get; init; }

	public ChatStyles ChatStyle { get; init; } = ChatStyles.Undefined;

	public SimpleMessageData[] BoostrapMessages { get; init; } = Array.Empty<SimpleMessageData>();

	public string[] Roles { get; init; } = Array.Empty<string>();

	public IAssetsListInstance Assets { get; init; } = NullAssetsListInstance.Instance;

	public Dictionary<string, string> CharNamesDict { get; private set; } = new Dictionary<string, string>();

	public Dictionary<string, ICharacterInferenceData> CharsDict { get; private set; } = new Dictionary<string, ICharacterInferenceData>();

	public ExplicitContentLevels ExplicitContent { get; init; }

	public void UpdateCharacters(Chat chat, IReadOnlyList<ICharacterInferenceData> characters)
	{
		CharNamesDict = Roles.ToDictionary((string r) => r, (string r) => GetCharacterByRole(characters, chat, r)?.Name ?? "Unknown");
		CharsDict = Roles.ToDictionary((string r) => r, (string r) => GetCharacterByRole(characters, chat, r) ?? throw new InvalidOperationException("Missing character for role " + r));
	}

	private static ICharacterInferenceData? GetCharacterByRole(IEnumerable<ICharacterInferenceData> characters, Chat chat, string role)
	{
		if (!chat.Roles.TryGetValue(role, out ChatScenarioRole assignation) || !assignation.CharacterId.HasValue)
		{
			return null;
		}
		return characters.FirstOrDefault(delegate(ICharacterInferenceData c)
		{
			Guid id = c.Id;
			Guid? characterId = assignation.CharacterId;
			return id == characterId;
		});
	}
}

```

## Voxta.Core.Chats.Objects.Scenarios\ScenarioInstanceFactory.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using Voxta.Abstractions.Assets;
using Voxta.Abstractions.Chats.Conditions;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Abstractions.Scripting.ChatConditions;
using Voxta.Abstractions.Templating;
using Voxta.Core.Chats.Conditions;
using Voxta.Core.Chats.Objects.Assets;
using Voxta.Core.Chats.Objects.Characters;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Objects.Scenarios;

public class ScenarioInstanceFactory(IScenarioActionInstanceFactory scenarioActionInstanceFactory, IContextDefinitionInstanceFactory contextDefinitionInstanceFactory, IActionEffectInstanceFactory actionEffectInstanceFactory, IResourceAssetsManager resourceAssetsManager, ITemplateSystem templateSystem, IFlagsConditionsFactory flagsConditionsFactory, IBootstrappedMessagesFactory bootstrappedMessagesFactory) : IScenarioInstanceFactory
{
	public ScenarioInstance Create(Guid userId, ScenarioData? parentScenario, ScenarioData scenario, Chat chat, IReadOnlyList<CharacterInstance> characters, IActionScriptEngine scriptEngine)
	{
		try
		{
			ITemplate scenarioTemplate = templateSystem.Parse("Scenario", scenario.Template);
			ScriptFile scriptFile = scenario.SharedScripts.FirstOrDefault((ScriptFile s) => s.Name == "index");
			ScriptFile[] sharedScripts = scenario.SharedScripts;
			foreach (ScriptFile scriptFile2 in sharedScripts)
			{
				scriptEngine.AddLibrary("scenario/" + scriptFile2.Name, scriptFile2.Content);
			}
			ScriptFile scriptFile3 = parentScenario?.SharedScripts.FirstOrDefault((ScriptFile s) => s.Name == "index");
			if (parentScenario != null)
			{
				sharedScripts = parentScenario.SharedScripts;
				foreach (ScriptFile scriptFile4 in sharedScripts)
				{
					scriptEngine.AddLibrary("base/" + scriptFile4.Name, scriptFile4.Content);
				}
			}
			if (scriptFile != null)
			{
				scriptEngine.SetEntrypoint("scenario/" + scriptFile.Name);
			}
			else if (scriptFile3 != null)
			{
				scriptEngine.SetEntrypoint("base/" + scriptFile3.Name);
			}
			List<IScenarioEventInstance> list = new List<IScenarioEventInstance>((scenario.Events.Length + parentScenario?.Events.Length).GetValueOrDefault());
			ScenarioEventDefinition[] events = scenario.Events;
			foreach (ScenarioEventDefinition scenarioEventDefinition in events)
			{
				if (!scenarioEventDefinition.Disabled)
				{
					list.Add(CreateEvent(scenarioEventDefinition, "_scenario", 0, "scenario", scriptEngine));
				}
			}
			if (parentScenario != null)
			{
				events = parentScenario.Events;
				foreach (ScenarioEventDefinition e in events)
				{
					if (!e.Disabled && !list.Any((IScenarioEventInstance a) => a.Name == e.Name))
					{
						list.Add(CreateEvent(e, "_scenario", 0, "base", scriptEngine));
					}
				}
			}
			List<IScenarioActionInstance> list2 = new List<IScenarioActionInstance>((scenario.Actions.Length + parentScenario?.Actions.Length).GetValueOrDefault());
			ScenarioActionDefinition[] actions = scenario.Actions;
			foreach (ScenarioActionDefinition scenarioActionDefinition in actions)
			{
				if (!scenarioActionDefinition.Disabled)
				{
					list2.Add(scenarioActionInstanceFactory.Create(scenarioActionDefinition, "_scenario", 0, "scenario", scriptEngine));
				}
			}
			if (parentScenario != null)
			{
				actions = parentScenario.Actions;
				foreach (ScenarioActionDefinition e2 in actions)
				{
					if (!e2.Disabled && !list2.Any((IScenarioActionInstance a) => a.Name == e2.Name))
					{
						list2.Add(scenarioActionInstanceFactory.Create(e2, "_scenario", 0, "base", scriptEngine));
					}
				}
			}
			List<IContextDefinitionInstance> list3 = new List<IContextDefinitionInstance>((scenario.Contexts.Length + parentScenario?.Contexts.Length).GetValueOrDefault());
			ContextDefinition[] contexts = scenario.Contexts;
			foreach (ContextDefinition contextDefinition in contexts)
			{
				if (!contextDefinition.Disabled)
				{
					list3.Add(contextDefinitionInstanceFactory.CreateContextDefinition(contextDefinition, 2));
				}
			}
			if (parentScenario != null)
			{
				contexts = parentScenario.Contexts;
				foreach (ContextDefinition c in contexts)
				{
					if (!c.Disabled && !list3.Any((IContextDefinitionInstance a) => a.Name == c.Name))
					{
						list3.Add(contextDefinitionInstanceFactory.CreateContextDefinition(c, 2));
					}
				}
			}
			ScenarioRole[] roles = scenario.Roles;
			SimpleMessageData[] boostrapMessages = bootstrappedMessagesFactory.CreateMessagesFromScenario(scenario.Messages, characters, roles);
			AssetsListInstance assets = new AssetsListInstance((scenario.LocalId != Guid.Empty && scenario.UserId != Guid.Empty) ? resourceAssetsManager.ManageContainer<Scenario>(userId, scenario.LocalId).ManageAssets().ListAssets() : Array.Empty<string>());
			ScenarioInstance obj = new ScenarioInstance
			{
				Id = scenario.LocalId,
				SourceScenario = scenario,
				ScenarioTemplate = scenarioTemplate,
				SystemPromptOverrideType = scenario.SystemPromptOverrideType,
				SystemPrompt = templateSystem.Parse("ScenarioSystemPrompt", scenario.SystemPrompt),
				Roles = roles.Select((ScenarioRole r) => r.Name).ToArray(),
				ScenarioEvents = list,
				ScenarioContexts = list3,
				ScenarioActions = list2,
				ChatFlow = scenario.ChatFlow,
				ChatStyle = scenario.ChatStyle,
				ExplicitContent = scenario.ExplicitContent,
				BoostrapMessages = boostrapMessages,
				Assets = assets
			};
			obj.UpdateCharacters(chat, characters);
			return obj;
		}
		catch
		{
			scriptEngine.Dispose();
			throw;
		}
	}

	public IScenarioEventInstance CreateEvent(ScenarioEventDefinition scenarioEvent, string? contextKey, int priority, string scriptFolder, IActionScriptEngine scriptEngine)
	{
		IChatConditions[] array = new IChatConditions[6];
		IChatConditions chatConditions;
		if (!scenarioEvent.Once)
		{
			chatConditions = EmptyConditions.Instance;
		}
		else
		{
			IChatConditions chatConditions2 = new SingleFlagCondition("_" + scenarioEvent.Name, isTrue: false);
			chatConditions = chatConditions2;
		}
		array[0] = chatConditions;
		array[1] = flagsConditionsFactory.Parse(scenarioEvent.FlagsFilter);
		array[2] = ((scenarioEvent.MatchFilter != null) ? RegexConditionsFactory.Parse(scenarioEvent.MatchFilter) : EmptyConditions.Instance);
		array[3] = ProbabilityConditionsFactory.Parse(scenarioEvent.Probability);
		array[4] = MessageCountConditionsFactory.Parse(scenarioEvent.MinMessagesCount, scenarioEvent.MaxMessagesCount, scenarioEvent.SinceFlag);
		array[5] = ChatTimeConditionsFactory.Parse(scenarioEvent.MinChatTimeSeconds, scenarioEvent.MaxChatTimeSeconds, scenarioEvent.SinceFlag);
		CompositeConditions conditions = new CompositeConditions(array);
		FunctionTiming timing = scenarioEvent.Timing ?? FunctionTiming.AfterAssistantMessage;
		ActionEffectInstance effectInstance = actionEffectInstanceFactory.Create(scenarioEvent.Effect, scriptFolder, scenarioEvent, scriptEngine, timing);
		return new ScenarioEventInstance
		{
			Source = scenarioEvent,
			ContextKey = contextKey,
			Priority = priority,
			Name = scenarioEvent.Name,
			EvaluateNextEvent = scenarioEvent.EvaluateNextEvent,
			Conditions = conditions,
			EffectInstance = effectInstance,
			RoleFilter = scenarioEvent.RoleFilter,
			Description = StaticTemplate.Empty,
			Timing = timing,
			CancelReply = (scenarioEvent.CancelReply == true)
		};
	}
}

```

## Voxta.Core.Chats.Objects\ActionEffectInstance.cs
```csharp
using System;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Abstractions.Templating;

namespace Voxta.Core.Chats.Objects;

public class ActionEffectInstance : IActionEffectInstance
{
	public required string Name { get; init; }

	public string[] SetFlags { get; init; } = Array.Empty<string>();

	public IActionScript Script { get; init; } = NullActionScript.Instance;

	public ITemplate? Effect { get; init; }

	public ITemplate? Note { get; init; }

	public ITemplate? Secret { get; init; }

	public ITemplate? Instructions { get; init; }

	public ITemplate? Event { get; init; }

	public ITemplate? Story { get; init; }

	public IContextDefinitionInstance[] Contexts { get; init; } = Array.Empty<IContextDefinitionInstance>();

	public int MaxSentences { get; init; }

	public int MaxTokens { get; init; }

	public string? Trigger { get; init; }

	public override string ToString()
	{
		return "ActionEffectInstance: " + Name;
	}
}

```

## Voxta.Core.Chats.Objects\ActionEffectInstanceFactory.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Abstractions.Scripting.ChatConditions;
using Voxta.Abstractions.Templating;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Objects;

public class ActionEffectInstanceFactory(ITemplateSystem templateSystem, IFlagsConditionsFactory flagsConditionsFactory) : IActionEffectInstanceFactory
{
	public ActionEffectInstance Create(ActionEffect effect, string scriptFolder, FunctionDefinition sourceFunction, IActionScriptEngine actionScriptEngine, FunctionTiming timing)
	{
		string value = ((sourceFunction is ScenarioEventDefinition) ? "event" : "action");
		string name = sourceFunction.Name;
		IActionScript script = ((!string.IsNullOrEmpty(effect.Script)) ? actionScriptEngine.AddAction($"{scriptFolder}/~{value}~{timing.ToString().ToLowerInvariant()}~{sourceFunction.Name}", effect.Script) : NullActionScript.Instance);
		string[] array = effect.SetFlags ?? Array.Empty<string>();
		if (sourceFunction.Once)
		{
			string text = "_" + name;
			if (!array.Contains(text))
			{
				if (array.Contains("!" + text))
				{
					throw new InvalidOperationException("Action " + text + " cannot have both positive (once) and negative (flagsFilter) set flags");
				}
				string[] array2 = array;
				int num = 0;
				string[] array3 = new string[1 + array2.Length];
				ReadOnlySpan<string> readOnlySpan = new ReadOnlySpan<string>(array2);
				readOnlySpan.CopyTo(new Span<string>(array3).Slice(num, readOnlySpan.Length));
				num += readOnlySpan.Length;
				array3[num] = text;
				array = array3;
			}
		}
		return new ActionEffectInstance
		{
			Name = name,
			SetFlags = array,
			Effect = CreateTemplate(effect.Effect, name, "Effect"),
			Note = CreateTemplate(effect.Note, name, "Note"),
			Secret = CreateTemplate(effect.Secret, name, "Secret"),
			Event = CreateTemplate(effect.Event, name, "Event"),
			Story = CreateTemplate(effect.Story, name, "Story"),
			Instructions = CreateTemplate(effect.Instructions, name, "Instructions"),
			Contexts = (((IEnumerable<IContextDefinitionInstance>)effect.Contexts?.Select((ContextDefinition x) => new ContextDefinitionInstance
			{
				Source = x,
				Name = (string.IsNullOrEmpty(x.Name) ? name : x.Name),
				TextTemplate = (CreateTemplate(x.Text, string.IsNullOrEmpty(x.Name) ? name : x.Name, "Contexts") ?? StaticTemplate.Empty),
				Conditions = flagsConditionsFactory.Parse(x.FlagsFilter),
				Priority = 2,
				ApplyTo = x.ApplyTo
			})).ToArray() ?? Array.Empty<IContextDefinitionInstance>()),
			MaxSentences = effect.MaxSentences,
			MaxTokens = effect.MaxTokens,
			Trigger = effect.Trigger,
			Script = script
		};
	}

	private ITemplate? CreateTemplate(string? value, string name, string field)
	{
		if (string.IsNullOrEmpty(value))
		{
			return null;
		}
		return templateSystem.Parse("Action " + name + " " + field, value);
	}
}

```

## Voxta.Core.Chats.Objects\ChatObjectInstanceFactory.cs
```csharp
using System;
using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using System.Text.RegularExpressions.Generated;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Abstractions.Services.Memory;
using Voxta.Abstractions.Services.TextGen;
using Voxta.Core.Chats.Objects.Characters;
using Voxta.Core.Chats.Objects.Scenarios;
using Voxta.Core.Chats.Sessions;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Objects;

public class ChatObjectInstanceFactory(ICharacterInstanceFactory characterInstanceFactory, IScenarioInstanceFactory scenarioInstanceFactory, IScenarioActionInstanceFactory scenarioActionInstanceFactory, IContextDefinitionInstanceFactory contextDefinitionDefinitionInstanceFactory) : IChatObjectInstanceFactory
{
	[GeneratedRegex("[^a-z0-9_]", RegexOptions.IgnoreCase | RegexOptions.CultureInvariant)]
	[GeneratedCode("System.Text.RegularExpressions.Generator", "9.0.12.41916")]
	private static Regex InvalidNameCharsRegex()
	{
		return _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__InvalidNameCharsRegex_1.Instance;
	}

	public Task<CharacterInstance> CreateCharacterAsync(Guid userId, Chat chat, Guid characterId, IEnumerable<Guid>? additionalMemoryBooks, IChatTextProcessor textProcessor, IServiceReference<ITextGenService> textGen, IServiceReference<IMemoryProviderService> memory, ChatStyles chatStyle, IActionScriptEngine scriptEngine, CancellationToken cancellationToken)
	{
		return characterInstanceFactory.CreateAsync(userId, chat, characterId, additionalMemoryBooks, textProcessor, textGen, memory, chatStyle, scriptEngine, cancellationToken);
	}

	public Task<CharacterInstance> CreateCharacterAsync(Guid userId, Chat chat, Character character, IEnumerable<Guid>? additionalMemoryBooks, IChatTextProcessor textProcessor, IServiceReference<ITextGenService> textGen, IServiceReference<IMemoryProviderService> memory, ChatStyles chatStyle, IActionScriptEngine scriptEngine, CancellationToken cancellationToken)
	{
		return characterInstanceFactory.CreateAsync(userId, chat, character, additionalMemoryBooks, textProcessor, textGen, memory, chatStyle, scriptEngine, cancellationToken);
	}

	public CharacterInstance? CreateNarratorAsync(Character character, ChatTextProcessor textProcessor, CancellationToken cancellationToken)
	{
		return characterInstanceFactory.CreateNarratorAsync(character, textProcessor, cancellationToken);
	}

	public ScenarioInstance CreateScenario(Guid userId, ScenarioData? parentScenario, ScenarioData scenario, Chat chat, IReadOnlyList<CharacterInstance> characters, IActionScriptEngine scriptEngine)
	{
		return scenarioInstanceFactory.Create(userId, parentScenario, scenario, chat, characters, scriptEngine);
	}

	public IScenarioEventInstance CreateEvent(ScenarioEventDefinition f, string? contextKey, int priority, IActionScriptEngine actionScriptEngine)
	{
		return scenarioInstanceFactory.CreateEvent(f, contextKey, priority, "__" + InvalidNameCharsRegex().Replace(contextKey ?? "", "_"), actionScriptEngine);
	}

	public IScenarioActionInstance CreateAction(ScenarioActionDefinition f, string? contextKey, int priority, string scriptFolder, IActionScriptEngine actionScriptEngine)
	{
		return scenarioActionInstanceFactory.Create(f, contextKey, priority, scriptFolder, actionScriptEngine);
	}

	public IContextDefinitionInstance CreateContext(ContextDefinition f, int priority)
	{
		return contextDefinitionDefinitionInstanceFactory.CreateContextDefinition(f, priority);
	}
}

```

## Voxta.Core.Chats.Objects\ContextDefinitionInstance.cs
```csharp
using Voxta.Abstractions.Chats.Conditions;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Templating;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Objects;

public class ContextDefinitionInstance : IContextDefinitionInstance
{
	public required ContextDefinition Source { get; init; }

	public required string Name { get; init; }

	public required int Priority { get; init; }

	public required PromptCategories ApplyTo { get; init; } = PromptCategories.All;

	public required IChatConditions Conditions { get; init; }

	public required ITemplate TextTemplate { get; init; }

	public static ContextDefinitionInstance Single(ITemplateSystem templateSystem, string text)
	{
		return new ContextDefinitionInstance
		{
			Source = new ContextDefinition
			{
				Text = text
			},
			Name = "",
			Priority = 0,
			ApplyTo = PromptCategories.All,
			Conditions = EmptyConditions.Instance,
			TextTemplate = templateSystem.Parse("Context (Unnamed)", text)
		};
	}
}

```

## Voxta.Core.Chats.Objects\ContextDefinitionInstanceFactory.cs
```csharp
using Voxta.Abstractions.Chats.Conditions;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Scripting.ChatConditions;
using Voxta.Abstractions.Templating;
using Voxta.Core.Chats.Conditions;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Objects;

public class ContextDefinitionInstanceFactory(ITemplateSystem templateSystem, IFlagsConditionsFactory flagsConditionsFactory) : IContextDefinitionInstanceFactory
{
	public IContextDefinitionInstance CreateContextDefinition(ContextDefinition f, int priority)
	{
		ContextDefinitionInstance contextDefinitionInstance = new ContextDefinitionInstance();
		contextDefinitionInstance.Source = f;
		contextDefinitionInstance.Name = f.Name ?? "";
		contextDefinitionInstance.Priority = priority;
		contextDefinitionInstance.ApplyTo = f.ApplyTo;
		contextDefinitionInstance.TextTemplate = templateSystem.Parse("Context " + f.Name, f.Text);
		contextDefinitionInstance.Conditions = new CompositeConditions(new IChatConditions[2]
		{
			RoleConditionsFactory.Parse(f.RoleFilter),
			flagsConditionsFactory.Parse(f.FlagsFilter)
		});
		return contextDefinitionInstance;
	}
}

```

## Voxta.Core.Chats.Objects\FunctionDefinitionInstance.cs
```csharp
using Voxta.Abstractions.Chats.Conditions;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Templating;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Objects;

public abstract class FunctionDefinitionInstance : IFunctionDefinitionInstance
{
	public required FunctionDefinition Source { get; init; }

	public required string? ContextKey { get; init; }

	public int Priority { get; init; }

	public required string Name { get; init; }

	public FunctionTiming Timing { get; init; } = FunctionTiming.AfterAssistantMessage;

	public bool CancelReply { get; init; }

	public required ITemplate Description { get; init; }

	public required IActionEffectInstance EffectInstance { get; init; }

	public string? RoleFilter { get; init; }

	public IChatConditions Conditions { get; init; } = EmptyConditions.Instance;
}

```

## Voxta.Core.Chats.Objects\IActionEffectInstanceFactory.cs
```csharp
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Objects;

public interface IActionEffectInstanceFactory
{
	ActionEffectInstance Create(ActionEffect effect, string scriptFolder, FunctionDefinition sourceFunction, IActionScriptEngine actionScriptEngine, FunctionTiming timing);
}

```

## Voxta.Core.Chats.Objects\IChatObjectInstanceFactory.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Abstractions.Services.Memory;
using Voxta.Abstractions.Services.TextGen;
using Voxta.Core.Chats.Objects.Characters;
using Voxta.Core.Chats.Objects.Scenarios;
using Voxta.Core.Chats.Sessions;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Objects;

public interface IChatObjectInstanceFactory
{
	Task<CharacterInstance> CreateCharacterAsync(Guid userId, Chat chat, Guid characterId, IEnumerable<Guid>? additionalMemoryBooks, IChatTextProcessor textProcessor, IServiceReference<ITextGenService> textGen, IServiceReference<IMemoryProviderService> memory, ChatStyles chatStyle, IActionScriptEngine scriptEngine, CancellationToken cancellationToken);

	Task<CharacterInstance> CreateCharacterAsync(Guid userId, Chat chat, Character character, IEnumerable<Guid>? additionalMemoryBooks, IChatTextProcessor textProcessor, IServiceReference<ITextGenService> textGen, IServiceReference<IMemoryProviderService> memory, ChatStyles chatStyle, IActionScriptEngine scriptEngine, CancellationToken cancellationToken);

	CharacterInstance? CreateNarratorAsync(Character character, ChatTextProcessor textProcessor, CancellationToken cancellationToken);

	ScenarioInstance CreateScenario(Guid userId, ScenarioData? parentScenario, ScenarioData scenario, Chat chat, IReadOnlyList<CharacterInstance> characters, IActionScriptEngine scriptEngine);

	IScenarioEventInstance CreateEvent(ScenarioEventDefinition f, string? contextKey, int priority, IActionScriptEngine actionScriptEngine);

	IScenarioActionInstance CreateAction(ScenarioActionDefinition f, string? contextKey, int priority, string scriptFolder, IActionScriptEngine actionScriptEngine);

	IContextDefinitionInstance CreateContext(ContextDefinition f, int priority);
}

```

## Voxta.Core.Chats.Objects\IContextDefinitionInstanceFactory.cs
```csharp
using Voxta.Abstractions.Chats.Objects;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Objects;

public interface IContextDefinitionInstanceFactory
{
	IContextDefinitionInstance CreateContextDefinition(ContextDefinition f, int priority);
}

```

## Voxta.Core.Chats.Objects\IScenarioActionInstanceFactory.cs
```csharp
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Objects;

public interface IScenarioActionInstanceFactory
{
	IScenarioActionInstance Create(ScenarioActionDefinition f, string? contextKey, int priority, string scriptFolder, IActionScriptEngine actionScriptEngine);
}

```

## Voxta.Core.Chats.Objects\ScenarioActionInstanceFactory.cs
```csharp
using System;
using Voxta.Abstractions.Chats.Conditions;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Abstractions.Scripting.ChatConditions;
using Voxta.Abstractions.Templating;
using Voxta.Core.Chats.Conditions;
using Voxta.Core.Chats.Objects.Scenarios;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Objects;

public class ScenarioActionInstanceFactory(ITemplateSystem templateSystem, IActionEffectInstanceFactory actionEffectInstanceFactory, IFlagsConditionsFactory flagsConditionsFactory) : IScenarioActionInstanceFactory
{
	public IScenarioActionInstance Create(ScenarioActionDefinition f, string? contextKey, int priority, string scriptFolder, IActionScriptEngine actionScriptEngine)
	{
		FunctionTiming timing = f.Timing ?? FunctionTiming.AfterAssistantMessage;
		ScenarioActionInstance scenarioActionInstance = new ScenarioActionInstance();
		scenarioActionInstance.Source = f;
		scenarioActionInstance.ContextKey = contextKey;
		scenarioActionInstance.Priority = priority;
		scenarioActionInstance.Name = f.Name;
		ITemplate description;
		if (string.IsNullOrEmpty(f.Description))
		{
			ITemplate template = new StaticTemplate("");
			description = template;
		}
		else
		{
			description = templateSystem.Parse(f.Name, f.Description);
		}
		scenarioActionInstance.Description = description;
		scenarioActionInstance.Arguments = f.Arguments;
		ITemplate shortDescription;
		if (string.IsNullOrEmpty(f.ShortDescription))
		{
			ITemplate template = new StaticTemplate("");
			shortDescription = template;
		}
		else
		{
			shortDescription = templateSystem.Parse(f.Name, f.ShortDescription);
		}
		scenarioActionInstance.ShortDescription = shortDescription;
		scenarioActionInstance.Layer = f.Layer ?? "";
		scenarioActionInstance.FinalLayer = f.FinalLayer;
		scenarioActionInstance.Timing = timing;
		scenarioActionInstance.CancelReply = f.CancelReply == true;
		scenarioActionInstance.RoleFilter = f.RoleFilter;
		IChatConditions[] array = new IChatConditions[4];
		IChatConditions chatConditions;
		if (!f.Once)
		{
			chatConditions = EmptyConditions.Instance;
		}
		else
		{
			IChatConditions chatConditions2 = new SingleFlagCondition("_" + f.Name, isTrue: false);
			chatConditions = chatConditions2;
		}
		array[0] = chatConditions;
		array[1] = RoleConditionsFactory.Parse(f.RoleFilter);
		array[2] = ((f.MatchFilter != null) ? RegexConditionsFactory.Parse(f.MatchFilter) : EmptyConditions.Instance);
		array[3] = flagsConditionsFactory.Parse(f.FlagsFilter);
		scenarioActionInstance.Conditions = new CompositeConditions(array);
		scenarioActionInstance.EffectInstance = actionEffectInstanceFactory.Create(f.Effect, scriptFolder, f, actionScriptEngine, timing);
		scenarioActionInstance.Activates = f.Activates ?? Array.Empty<string>();
		scenarioActionInstance.FlattenCondition = (string.IsNullOrEmpty(f.FlattenCondition) ? EmptyConditions.Instance : flagsConditionsFactory.Parse(f.FlattenCondition));
		return scenarioActionInstance;
	}
}

```

## Voxta.Core.Chats.ScopedServices\ActionEffectResult.cs
```csharp
namespace Voxta.Core.Chats.ScopedServices;

public record ActionEffectResult(bool EvaluateNextEvent, bool ShouldCancelReply);

```

## Voxta.Core.Chats.ScopedServices\ActionScriptCallback.cs
```csharp
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Scripting.ActionScripts;

namespace Voxta.Core.Chats.ScopedServices;

public record ActionScriptCallback(IActionScriptCallback Callback, ChatMessageData? Message, ICharacterOrUserData Owner, string ScriptName);

```

## Voxta.Core.Chats.ScopedServices\ActionScriptResult.cs
```csharp
namespace Voxta.Core.Chats.ScopedServices;

public record ActionScriptResult(bool EvaluateNextEvent, bool ShouldCancelReply);

```

## Voxta.Core.Chats.ScopedServices\ActionScriptsService.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Abstractions.Services.ActionInference;
using Voxta.Abstractions.Services.ChatAugmentations;
using Voxta.Abstractions.Utils;
using Voxta.Core.Chats.Commands;
using Voxta.Core.Chats.Commands.Images;
using Voxta.Core.Chats.Commands.Messages;
using Voxta.Core.Chats.Commands.Triggers;
using Voxta.Core.Chats.Objects;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.Sessions;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ClientMessages;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.ScopedServices;

public class ActionScriptsService(ChatInstance chatInstance, IUserConnectionTunnel tunnel, IChatContextService chatContextService, IChatFlowService chatFlowService, IChatSessionGeneratingState generatingState, IChatAugmentationsServiceInstance augmentations, IActionScriptEngine scriptEngine, IChatMessageFactory chatMessageFactory, IContextDefinitionInstanceFactory contextDefinitionInstanceFactory, IScenarioActionInstanceFactory scenarioActionInstanceFactory, ITunnelMessagesService tunnelMessagesService, IInspectorService inspectorService, IChatCommandsManager chatCommandsManager, ICustomMessageService customMessageService, ILogger<ApplyActionEffectsService> logger) : IActionScriptsService
{
	private readonly Queue<ActionScriptCallback> _afterSpeechCallbacks = new Queue<ActionScriptCallback>();

	public async Task<ActionScriptResult> RunScriptAsync(IActionScript script, ChatMessageData? message, ICharacterOrUserData owner, ActionInvocation? action, CancellationToken cancellationToken)
	{
		bool evaluateNextEvent = false;
		bool shouldCancelReply = false;
		try
		{
			IActionScriptResult result = await script.RunAsync(chatInstance, message, owner, action, cancellationToken);
			inspectorService.ScriptExecuted(message?.LocalId, script.Name, result);
			evaluateNextEvent = result.EvaluateNextEvent;
			if (result.ChatFlow != null)
			{
				await chatFlowService.ForceChatFlowAsync(result.ChatFlow);
			}
			if (result.AfterSpeechCallbacks.Count > 0)
			{
				foreach (IActionScriptCallback afterSpeechCallback in result.AfterSpeechCallbacks)
				{
					_afterSpeechCallbacks.Enqueue(new ActionScriptCallback(afterSpeechCallback, message, owner, script.Name));
				}
			}
			bool flag = shouldCancelReply;
			shouldCancelReply = flag | await ProcessPendingChanges(message, owner, cancellationToken);
		}
		catch (Exception ex)
		{
			logger.LogError(ex, "Error while running script: {Script}", script.Name);
			tunnel.Send(new ServerChatSessionErrorMessage(chatInstance.SessionId, ex)
			{
				Retry = false
			});
		}
		Guid? pendingSpeechMessageId = generatingState.GetPendingSpeechMessageId();
		if (message == null || pendingSpeechMessageId != message.LocalId)
		{
			await RunAfterSpeechAsync(cancellationToken);
		}
		return new ActionScriptResult(evaluateNextEvent, shouldCancelReply);
	}

	public async Task RunEventAsync(IActionScriptEvent ev, ChatMessageData? message, ICharacterOrUserData owner, CancellationToken cancellationToken)
	{
		await augmentations.OnChatScriptEvent(ev, message, owner, cancellationToken);
		if (!scriptEngine.Chat.IsEventRegistered(ev.Name))
		{
			return;
		}
		try
		{
			IReadOnlyList<ActionScriptLog> logs = await scriptEngine.Chat.DispatchEvent(ev, cancellationToken);
			inspectorService.ScriptExecuted(message?.LocalId, ev.Name, logs);
			if (ev is UserMessageReceivedActionScriptEvent { RewriteUserMessage: not null } userMessageReceivedActionScriptEvent && message != null && userMessageReceivedActionScriptEvent.RewriteUserMessage != message.Value)
			{
				message.Value = userMessageReceivedActionScriptEvent.RewriteUserMessage;
				await chatMessageFactory.UpdateMessageAsync(message, cancellationToken);
				tunnelMessagesService.SendMessageUpdated(message);
			}
			await ProcessPendingChanges(message, owner, cancellationToken);
		}
		catch (Exception ex)
		{
			logger.LogError(ex, "Error while running event: {EventName}", ev.Name);
			tunnel.Send(new ServerChatSessionErrorMessage(chatInstance.SessionId, ex)
			{
				Retry = false
			});
		}
	}

	public async Task RunAfterSpeechAsync(CancellationToken cancellationToken)
	{
		ActionScriptCallback callback;
		while (_afterSpeechCallbacks.TryDequeue(out callback))
		{
			try
			{
				IReadOnlyList<ActionScriptLog> logs = await scriptEngine.Chat.RunCallback(callback.Callback, cancellationToken);
				inspectorService.ScriptExecuted(callback.Message?.LocalId, "AfterSpeech:" + callback.ScriptName, logs);
				await ProcessPendingChanges(callback.Message, callback.Owner, cancellationToken);
			}
			catch (Exception ex)
			{
				logger.LogError(ex, "Error while running afterSpeech callback for script: {Script}", callback.ScriptName);
				tunnel.Send(new ServerChatSessionErrorMessage(chatInstance.SessionId, ex)
				{
					Retry = false
				});
			}
		}
	}

	public bool IsRegistered(string eventName)
	{
		if (!scriptEngine.Chat.IsEventRegistered(eventName))
		{
			return augmentations.HasEventListeners();
		}
		return true;
	}

	private async Task<bool> ProcessPendingChanges(ChatMessageData? message, ICharacterOrUserData owner, CancellationToken cancellationToken)
	{
		bool shouldCancelReply = false;
		IActionScriptPendingChanges pendingChange = scriptEngine.Chat.PendingChanges;
		try
		{
			if (pendingChange.VariableEffects.Count > 0)
			{
				chatContextService.ApplyVariables(pendingChange.VariableEffects);
			}
			IScriptEffect[] array = pendingChange.QueuedEffects.ToArray();
			foreach (IScriptEffect scriptEffect in array)
			{
				if (!(scriptEffect is ScenarioInterruptEffect))
				{
					if (!(scriptEffect is ScenarioAppTriggerEffect scenarioAppTriggerEffect))
					{
						if (!(scriptEffect is ScenarioMessageEffect message2))
						{
							if (!(scriptEffect is GenerateImageEffect generateImageEffect))
							{
								if (!(scriptEffect is ScenarioRoleEffect item))
								{
									if (!(scriptEffect is SetFlagEffect setFlagEffect))
									{
										if (!(scriptEffect is SetContextEffect setContextEffect))
										{
											if (scriptEffect is SetActionsEffect setActionsEffect)
											{
												string contextKey = "__script_" + setActionsEffect.ContextKey;
												IScenarioActionInstance[] actions = setActionsEffect.Actions.Select((ScenarioActionDefinition a) => scenarioActionInstanceFactory.Create(a, contextKey, 3, "?", NullActionScriptEngine.Instance)).ToArray();
												await chatContextService.AssignAllContextActionsAsync(contextKey, actions, cancellationToken);
											}
										}
										else
										{
											IContextDefinitionInstance context = contextDefinitionInstanceFactory.CreateContextDefinition(setContextEffect.Context, 3);
											await chatContextService.SetContextAsync("_scenario", context, cancellationToken);
										}
									}
									else
									{
										chatContextService.ApplyFlags(message, setFlagEffect.Flags);
									}
								}
								else
								{
									chatContextService.ApplyEnableRoles(new _003C_003Ez__ReadOnlySingleElementList<ScenarioRoleEffect>(item));
								}
							}
							else
							{
								chatCommandsManager.EnqueueForeground<IGenerateImageCommand, GenerateImageCommandRequest>(new GenerateImageCommandRequest(generateImageEffect.Prompt));
							}
						}
						else
						{
							bool flag = shouldCancelReply;
							shouldCancelReply = flag | await customMessageService.SendCustomMessageAsync(message2, cancellationToken);
						}
					}
					else if (scenarioAppTriggerEffect.Queued)
					{
						chatCommandsManager.EnqueueForeground<IAppTriggerCommand, AppTriggerRequest>(new AppTriggerRequest
						{
							Effect = scenarioAppTriggerEffect,
							Owner = owner,
							MessageId = message?.LocalId
						});
					}
					else
					{
						tunnel.Send(new ServerActionAppTriggerMessage
						{
							SessionId = chatInstance.SessionId,
							MessageId = message?.LocalId,
							Name = scenarioAppTriggerEffect.Name,
							Arguments = scenarioAppTriggerEffect.Arguments,
							SenderId = owner.Id,
							ScenarioRole = ((owner is ICharacterInferenceData characterInferenceData) ? characterInferenceData.ScenarioRole : null)
						});
					}
				}
				else
				{
					chatCommandsManager.EnqueueInput<IInterruptCommand, ClientInterruptMessage>(new ClientInterruptMessage
					{
						SessionId = chatInstance.SessionId
					});
				}
			}
			return shouldCancelReply;
		}
		finally
		{
			pendingChange.Clear();
		}
	}
}

```

## Voxta.Core.Chats.ScopedServices\ApplyActionEffectsService.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Prompting;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Abstractions.Services.ActionInference;
using Voxta.Abstractions.Templating;
using Voxta.Abstractions.Utils;
using Voxta.Core.Chats.Commands;
using Voxta.Core.Chats.Commands.Triggers;
using Voxta.Core.Chats.Objects.Characters;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.ScopedServices;

public class ApplyActionEffectsService(ChatInstance chatInstance, IChatCommandsManager commandsManager, IMessageDispatcherService messageDispatcher, IPromptBuilder promptBuilder, IChatMessageFactory chatMessageFactory, ISpecialMessageFormatter specialMessageFormatter, ITunnelMessagesService tunnelMessagesService, TimeProvider timeProvider, IActionScriptsService actionScriptsService, IChatContextService chatContextService, ILogger<ApplyActionEffectsService> logger) : IApplyActionEffectsService
{
	public async Task ApplyActionEffects(ChatMessageData message, IScenarioActionInstance fn, ActionInvocation action, CancellationToken cancellationToken)
	{
		CharacterInstance character = message.Role switch
		{
			ChatMessageRole.Assistant => chatInstance.GetCharacter(message.SenderId), 
			ChatMessageRole.User => chatInstance.GetMainCharacter(), 
			_ => throw new NotSupportedException($"Role {message.Role} is not supported"), 
		};
		ActionInvocationRecord value = new ActionInvocationRecord(action, timeProvider.GetUtcNow());
		switch (message.Role)
		{
		case ChatMessageRole.Assistant:
			character.LastInvokedFunction[fn.Layer] = value;
			break;
		case ChatMessageRole.User:
			chatInstance.LastInvokedUserFunction[fn.Layer] = value;
			break;
		default:
			throw new NotSupportedException($"Role {message.Role} is not supported");
		}
		if (actionScriptsService.IsRegistered("action:" + fn.Name))
		{
			await actionScriptsService.RunEventAsync(new ScenarioActionEvent
			{
				ContextKey = "_scenario",
				Layer = fn.Layer,
				Action = fn.Name,
				Character = character,
				Message = message,
				Arguments = action.ToArgsDictionary(fn.Arguments)
			}, message, character, cancellationToken);
		}
		IActionEffectInstance effectInstance = fn.EffectInstance;
		await ApplyActionEffects(effectInstance, message, character, action, cancellationToken);
	}

	public async Task<ActionEffectResult> ApplyActionEffects(IActionEffectInstance effect, ChatMessageData? message, CharacterInstance character, ActionInvocation? action, CancellationToken cancellationToken)
	{
		bool shouldCancelReply = false;
		if (effect.SetFlags.Length != 0)
		{
			chatContextService.ApplyFlags(message, SetFlagRequest.ParseFlags(effect.SetFlags));
		}
		ITemplateModel model = promptBuilder.CreateChatModel(chatInstance, character);
		if (effect.Effect != null && (message?.SummarizedBy.HasValue ?? false))
		{
			await chatMessageFactory.UpdateMessageTextAndTokensAndSaveAsync(message, specialMessageFormatter.ActionEffect(message.Value, promptBuilder.Render(effect.Effect, model)), cancellationToken);
			tunnelMessagesService.SendMessageUpdated(message);
			logger.LogInformation("Message updated by action effect: {Message}", message.Value);
		}
		if (effect.Note != null)
		{
			await messageDispatcher.SendScriptedMessageAsync(ChatMessageRole.Note, promptBuilder.Render(effect.Note, model), null, null, cancellationToken);
		}
		if (effect.Secret != null)
		{
			await messageDispatcher.SendScriptedMessageAsync(ChatMessageRole.Secret, promptBuilder.Render(effect.Secret, model), null, null, cancellationToken);
		}
		if (effect.Instructions != null)
		{
			await messageDispatcher.SendScriptedMessageAsync(ChatMessageRole.Instructions, promptBuilder.Render(effect.Instructions, model), null, null, cancellationToken);
		}
		if (effect.Event != null)
		{
			shouldCancelReply = true;
			await messageDispatcher.SendScriptedMessageAsync(ChatMessageRole.Event, promptBuilder.Render(effect.Event, model), null, null, cancellationToken);
		}
		if (effect.Story != null)
		{
			shouldCancelReply = true;
			await messageDispatcher.GenerateStoryAsync(ChatMessageRole.Event, promptBuilder.Render(effect.Story, model), null, null, new GenerateConstraintRequest
			{
				MaxNewTokens = effect.MaxTokens,
				MaxSentences = effect.MaxSentences
			}, cancellationToken);
		}
		if (!string.IsNullOrEmpty(effect.Trigger))
		{
			commandsManager.EnqueueInput<ITriggerEventCommand, TriggerEventRequest>(new TriggerEventRequest
			{
				Id = effect.Trigger
			});
		}
		if (effect.Contexts.Length != 0)
		{
			IContextDefinitionInstance[] contexts = effect.Contexts;
			foreach (IContextDefinitionInstance context in contexts)
			{
				await chatContextService.SetContextAsync("_scenario", context, cancellationToken);
			}
		}
		ActionScriptResult actionScriptResult = await actionScriptsService.RunScriptAsync(effect.Script, message, character, action, cancellationToken);
		return new ActionEffectResult(ShouldCancelReply: shouldCancelReply | actionScriptResult.ShouldCancelReply, EvaluateNextEvent: actionScriptResult.EvaluateNextEvent);
	}
}

```

## Voxta.Core.Chats.ScopedServices\ChatAugmentationsApiService.cs
```csharp
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Model;
using Voxta.Core.Chats.Objects.Chats;

namespace Voxta.Core.Chats.ScopedServices;

public class ChatAugmentationsApiService(ChatInstance chatInstance, IChatContinuousStorageService continuousStorageService, IChatContextService chatContextService) : IChatAugmentationsApiService
{
	public async Task SetFlags(SetFlagRequest[] flags, CancellationToken cancellationToken)
	{
		if (flags.Length == 0)
		{
			return;
		}
		await using (continuousStorageService.Begin())
		{
			await using IChatInstanceMessagesWriteToken chatInstanceMessagesWriteToken = await chatInstance.GetMessagesWriteTokenAsync(cancellationToken);
			ChatMessageData message = chatInstanceMessagesWriteToken.Messages.LastOrDefault();
			chatContextService.ApplyFlags(message, flags);
		}
	}
}

```

## Voxta.Core.Chats.ScopedServices\ChatConfigurationService.cs
```csharp
using Voxta.Abstractions.DependencyInjection;
using Voxta.Abstractions.Services.TextGen;
using Voxta.Core.Speech;

namespace Voxta.Core.Chats.ScopedServices;

public class ChatConfigurationService(IDynamicServiceAccessor<ISpeechGenerator> speechGeneratorAccessor, IDynamicServiceAccessor<ITextGenService> textGenAccessor) : IChatConfigurationService
{
	public bool SpeechEnabled => speechGeneratorAccessor.GetCurrent().Enabled;

	public TextGenPreprocessingSettings CreateTextGenPreprocessingSettings(int maxSentences, bool? allowMultipleLines)
	{
		return textGenAccessor.GetCurrent().CreateTextGenPreprocessingSettings(maxSentences, allowMultipleLines);
	}
}

```

## Voxta.Core.Chats.ScopedServices\ChatContextService.cs
```csharp
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Abstractions.Utils;
using Voxta.Core.Chats.Objects.Characters;
using Voxta.Core.Chats.Objects.Chats;

namespace Voxta.Core.Chats.ScopedServices;

public class ChatContextService(ChatInstance chatInstance, IChatTimer chatTimer, IChatContinuousStorageService chatContinuousStorageService, ILogger<ApplyActionEffectsService> logger) : IChatContextService
{
	public void ApplyFlags(ChatMessageData? message, SetFlagRequest[] flags)
	{
		if (flags.Length != 0 && chatInstance.State.SetFlags(message, flags))
		{
			chatContinuousStorageService.ChatAndContextUpdated();
			logger.LogInformation("Flags updated: {Flags}", chatInstance.State.GetFlags());
		}
	}

	public void ExpireFlagsAsync(int conversationIndex)
	{
		if (chatInstance.State.ExpireFlags(conversationIndex, chatTimer.GetChatTime()))
		{
			logger.LogInformation("Flags expired: {Flags}", chatInstance.State.GetFlags());
			chatContinuousStorageService.ChatAndContextUpdated();
		}
	}

	public async ValueTask ExpireFlagsAsync(CancellationToken cancellationToken)
	{
		if (chatInstance.State.GetFlags((IReadOnlyCollection<FlagState> flags) => flags.Any((FlagState x) => x.ExpireIndex > 0 || x.ExpireTime > 0)))
		{
			ChatMessageData chatMessageData = await chatInstance.GetLastMessageAsync(cancellationToken);
			if (chatMessageData != null && chatInstance.State.ExpireFlags(chatMessageData.ConversationIndex, chatMessageData.ChatTime))
			{
				logger.LogInformation("Flags expired: {Flags}", chatInstance.State.GetFlags());
				chatContinuousStorageService.ChatAndContextUpdated();
			}
		}
	}

	public void ApplyEnableRoles(IEnumerable<ScenarioRoleEffect> roleChanges)
	{
		foreach (ScenarioRoleEffect role in roleChanges)
		{
			CharacterInstance characterInstance = chatInstance.Characters.FirstOrDefault((CharacterInstance c) => c.ScenarioRole == role.Role);
			if (characterInstance != null)
			{
				if (characterInstance.Enabled != role.Enabled)
				{
					characterInstance.Enabled = role.Enabled;
					if (chatInstance.Chat.Roles.TryGetValue(role.Role, out ChatScenarioRole value))
					{
						value.Enabled = role.Enabled;
					}
					else
					{
						logger.LogWarning("Role not found: {Role}", role.Role);
					}
					chatContinuousStorageService.ChatAndContextUpdated();
				}
			}
			else
			{
				logger.LogWarning("Role not found: {Role}", role.Role);
			}
		}
	}

	public void ApplyEnableRoles(Dictionary<string, bool>? roles)
	{
		if (roles == null)
		{
			return;
		}
		foreach (KeyValuePair<string, bool> role in roles)
		{
			if (ApplyEnableRole(role.Key, role.Value))
			{
				chatContinuousStorageService.ChatAndContextUpdated();
			}
		}
	}

	private bool ApplyEnableRole(string roleName, bool enabled)
	{
		if (!chatInstance.Chat.Roles.TryGetValue(roleName, out ChatScenarioRole value) || value.Enabled == enabled)
		{
			return false;
		}
		value.Enabled = enabled;
		CharacterInstance characterByRole = chatInstance.GetCharacterByRole2(roleName);
		if (characterByRole != null)
		{
			characterByRole.Enabled = enabled;
		}
		logger.LogInformation("Chat scenario role {Role} enabled updated by client: {Enabled}", roleName, enabled);
		chatContinuousStorageService.ChatAndContextUpdated();
		return true;
	}

	public void ApplyVariables(Dictionary<string, object?> variables)
	{
		bool flag = false;
		foreach (var (key, obj2) in variables)
		{
			if (obj2 == null && chatInstance.State.RemoveVariable(key))
			{
				flag = true;
			}
			else if (obj2 != null && chatInstance.State.SetVariable(key, obj2))
			{
				flag = true;
			}
		}
		if (flag)
		{
			chatContinuousStorageService.ChatUpdated();
		}
	}

	public async Task AssignAllContextActionsAsync(string contextKey, IScenarioActionInstance[] actions, CancellationToken cancellationToken)
	{
		await using IChatInstanceContextWriteToken chatInstanceContextWriteToken = await chatInstance.GetContextWriteTokenAsync(cancellationToken);
		if (actions.Length == 0)
		{
			if (chatInstanceContextWriteToken.Actions.Remove(contextKey))
			{
				logger.LogInformation("Actions list cleared for key {ContextKey}", contextKey);
				chatContinuousStorageService.ContextUpdated();
			}
			return;
		}
		chatInstanceContextWriteToken.Actions[contextKey] = actions.ToList();
		chatContinuousStorageService.ContextUpdated();
		logger.LogInformation("Actions list updated for key {ContextKey}: {Functions}", contextKey, string.Join(", ", actions.Select((IScenarioActionInstance f) => f.Name)));
	}

	public async Task AssignAllContextEventsAsync(string contextKey, IScenarioEventInstance[] events, CancellationToken cancellationToken)
	{
		await using IChatInstanceContextWriteToken chatInstanceContextWriteToken = await chatInstance.GetContextWriteTokenAsync(cancellationToken);
		if (events.Length == 0)
		{
			if (chatInstanceContextWriteToken.Events.Remove(contextKey))
			{
				logger.LogInformation("Events list cleared for key {ContextKey}", contextKey);
				chatContinuousStorageService.ContextUpdated();
			}
			return;
		}
		chatInstanceContextWriteToken.Events[contextKey] = events.ToList();
		chatContinuousStorageService.ContextUpdated();
		logger.LogInformation("Events list updated for key {ContextKey}: {Functions}", contextKey, string.Join(", ", events.Select((IScenarioEventInstance f) => f.Name)));
	}

	public async Task ImportAllContextByContextKey(string contextKey, IContextDefinitionInstance[] contexts, CancellationToken cancellationToken)
	{
		await using IChatInstanceContextWriteToken chatInstanceContextWriteToken = await chatInstance.GetContextWriteTokenAsync(cancellationToken);
		if (contexts.Length == 0)
		{
			bool num = chatInstanceContextWriteToken.Contexts.Remove(contextKey);
			chatContinuousStorageService.ContextUpdated();
			if (num)
			{
				logger.LogDebug("Chat context cleared for key {ContextKey}", contextKey);
			}
		}
		else
		{
			chatInstanceContextWriteToken.Contexts[contextKey] = contexts.ToList();
			chatContinuousStorageService.ContextUpdated();
			logger.LogDebug("Chat context imported for key {ContextKey}", contextKey);
		}
	}

	public async Task SetContextAsync(string contextKey, IContextDefinitionInstance context, CancellationToken cancellationToken)
	{
		await using IChatInstanceContextWriteToken chatInstanceContextWriteToken = await chatInstance.GetContextWriteTokenAsync(cancellationToken);
		if (!chatInstanceContextWriteToken.Contexts.TryGetValue(contextKey, out List<IContextDefinitionInstance> value))
		{
			if (context.TextTemplate.IsEmpty)
			{
				return;
			}
			value = new List<IContextDefinitionInstance>();
			chatInstanceContextWriteToken.Contexts[contextKey] = value;
		}
		IContextDefinitionInstance contextDefinitionInstance = value.FirstOrDefault((IContextDefinitionInstance c) => c.Name == context.Name);
		if (contextDefinitionInstance != null)
		{
			value.Remove(contextDefinitionInstance);
		}
		if (!context.TextTemplate.IsEmpty)
		{
			value.Add(context);
		}
		chatContinuousStorageService.ContextUpdated();
		logger.LogDebug("Chat context updated for key {ContextKey}", contextKey);
	}
}

```

## Voxta.Core.Chats.ScopedServices\ChatContinuousStorageService.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Repositories;
using Voxta.Core.Chats.Commands;
using Voxta.Core.Chats.Commands.Context;
using Voxta.Core.Chats.Objects.Chats;

namespace Voxta.Core.Chats.ScopedServices;

public class ChatContinuousStorageService(ChatInstance chat, IUnitOfWorkFactory unitOfWorkFactory, IChatCommandsManager commandsManager) : IChatContinuousStorageService
{
	private class CallbackOnDispose(Func<ValueTask> end) : IAsyncDisposable
	{
		public ValueTask DisposeAsync()
		{
			return end();
		}
	}

	private bool _needsSaving;

	private bool _needsContextDispatch;

	private int _storageWrapperCount;

	public IAsyncDisposable Begin()
	{
		Interlocked.Increment(ref _storageWrapperCount);
		return new CallbackOnDispose(EndAsync);
	}

	public void ChatUpdated()
	{
		_needsSaving = true;
	}

	public void ContextUpdated()
	{
		_needsContextDispatch = true;
	}

	private async ValueTask EndAsync()
	{
		Interlocked.Decrement(ref _storageWrapperCount);
		if (_needsSaving)
		{
			_needsSaving = false;
			if (!chat.Ephemeral)
			{
				await unitOfWorkFactory.ApplyAndSaveChangesAsync((IUnitOfWork x) => x.Chats.UpdateAsync(chat.Chat), chat.Abort);
			}
		}
		if (_needsContextDispatch)
		{
			_needsContextDispatch = false;
			commandsManager.EnqueueInput<IPublishContextCommand, PublishContextRequest>(new PublishContextRequest());
		}
	}
}

```

## Voxta.Core.Chats.ScopedServices\ChatContinuousStorageServiceExtensions.cs
```csharp
namespace Voxta.Core.Chats.ScopedServices;

public static class ChatContinuousStorageServiceExtensions
{
	public static void ChatAndContextUpdated(this IChatContinuousStorageService service)
	{
		service.ChatUpdated();
		service.ContextUpdated();
	}
}

```

## Voxta.Core.Chats.ScopedServices\ChatFlowService.cs
```csharp
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.DependencyInjection;
using Voxta.Abstractions.Diagnostics;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Prompting;
using Voxta.Abstractions.Services.ActionInference;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.ScopedServices;

public class ChatFlowService(ChatInstance chatInstance, IUserConnectionTunnel tunnel, IPromptBuilder promptBuilder, IDiagnosticsContext diagnosticsContext, IDynamicServiceAccessor<IActionInferenceService> actionInferenceAccessor, ILogger<ChatFlowService> logger) : IChatFlowService
{
	private class ChatFlowCache<T>(ChatMessageData? previousMessage, T? value)
	{
		public readonly ChatMessageData? PreviousMessage = previousMessage;

		public readonly T? Value = value;
	}

	private readonly SemaphoreSlim _generatingChatFlowLock = new SemaphoreSlim(1, 1);

	private ChatMessageData? _generatingChatFlowFromMessage;

	private Guid? _lastChatFlowMessageId;

	private ChatFlowCache<ICharacterInstanceEditable>? _cachedNextCharacter;

	private ICharacterOrUserData? _forcedChatFlow;

	public void PreloadChatFlow(ChatMessageData previousMessage, bool allowUser, CancellationToken cancellationToken)
	{
		if (!previousMessage.Role.IsTriggering() || _forcedChatFlow != null)
		{
			return;
		}
		DiagnosticsContextValues diagnosticsContextValues = diagnosticsContext.GetCurrent();
		Task.Run(async delegate
		{
			diagnosticsContext.Restore(diagnosticsContextValues);
			diagnosticsContext.Augment((DiagnosticsContextValues x) => x with
			{
				MessageId = previousMessage.LocalId
			});
			await PreloadChatFlowAsync(previousMessage, allowUser, cancellationToken);
		}, cancellationToken);
	}

	private async Task PreloadChatFlowAsync(ChatMessageData previousMessage, bool allowUser, CancellationToken cancellationToken)
	{
		if (previousMessage == _generatingChatFlowFromMessage)
		{
			return;
		}
		Guid localId = previousMessage.LocalId;
		Guid? lastChatFlowMessageId = _lastChatFlowMessageId;
		if (localId == lastChatFlowMessageId || _forcedChatFlow != null)
		{
			return;
		}
		_lastChatFlowMessageId = previousMessage.LocalId;
		await _generatingChatFlowLock.WaitAsync(cancellationToken);
		try
		{
			_generatingChatFlowFromMessage = previousMessage;
			localId = previousMessage.LocalId;
			lastChatFlowMessageId = _lastChatFlowMessageId;
			if (!(localId == lastChatFlowMessageId) && _forcedChatFlow == null)
			{
				_cachedNextCharacter = new ChatFlowCache<ICharacterInstanceEditable>(previousMessage, await SelectReplyCharacter(previousMessage, allowUser, cancellationToken));
			}
		}
		finally
		{
			_generatingChatFlowFromMessage = null;
			_generatingChatFlowLock.Release();
		}
	}

	public async Task<ICharacterInstanceEditable?> GetNextCharacterAsync(ChatMessageData previousMessage, bool allowUser, CancellationToken cancellationToken)
	{
		await _generatingChatFlowLock.WaitAsync(cancellationToken);
		try
		{
			ChatFlowCache<ICharacterInstanceEditable> cachedNextCharacter = _cachedNextCharacter;
			_cachedNextCharacter = null;
			return (cachedNextCharacter == null || cachedNextCharacter.PreviousMessage != previousMessage) ? (await SelectReplyCharacter(previousMessage, allowUser, cancellationToken)) : cachedNextCharacter.Value;
		}
		catch (OperationCanceledException)
		{
			return null;
		}
		catch (Exception exception)
		{
			logger.LogError(exception, "Error while trying to select a reply character");
			tunnel.Send(new ServerChatSessionErrorMessage
			{
				SessionId = chatInstance.SessionId,
				Message = "Error while trying to select a reply character",
				Retry = false
			});
			return null;
		}
		finally
		{
			_generatingChatFlowLock.Release();
		}
	}

	public async Task ForceChatFlowAsync(ICharacterOrUserData forcedChatFlow)
	{
		await _generatingChatFlowLock.WaitAsync();
		try
		{
			_forcedChatFlow = forcedChatFlow;
			_cachedNextCharacter = null;
		}
		finally
		{
			_generatingChatFlowLock.Release();
		}
	}

	public void ClearChatFlow()
	{
		_forcedChatFlow = null;
	}

	public bool DequeueForcedUserAsync()
	{
		ICharacterOrUserData forcedChatFlow = _forcedChatFlow;
		if (forcedChatFlow == null)
		{
			return false;
		}
		if (forcedChatFlow.Role != ChatMessageRole.User)
		{
			return false;
		}
		_forcedChatFlow = null;
		return true;
	}

	public bool TryGetForced([NotNullWhen(true)] out ICharacterInstanceEditable? o)
	{
		ICharacterOrUserData characterOrUserData = Interlocked.Exchange(ref _forcedChatFlow, null);
		o = characterOrUserData as ICharacterInstanceEditable;
		return o != null;
	}

	private async Task<ICharacterInstanceEditable?> SelectReplyCharacter(ChatMessageData message, bool allowUser, CancellationToken cancellationToken)
	{
		try
		{
			return (await SelectReplyCharacterInternal(message, allowUser, cancellationToken)) as ICharacterInstanceEditable;
		}
		catch (Exception exception)
		{
			logger.LogError(exception, "Failed to select reply character");
			return null;
		}
	}

	public async Task<ICharacterOrUserData?> SelectReplyCharacterInternal(ChatMessageData message, bool allowUser, CancellationToken cancellationToken)
	{
		IEnumerable<ICharacterOrUserData> first = chatInstance.GetCharacters().Cast<ICharacterOrUserData>();
		IEnumerable<ICharacterOrUserData> second;
		if (!allowUser)
		{
			IEnumerable<ICharacterOrUserData> enumerable = Array.Empty<ICharacterOrUserData>();
			second = enumerable;
		}
		else
		{
			IEnumerable<ICharacterOrUserData> enumerable = new _003C_003Ez__ReadOnlySingleElementList<ICharacterOrUserData>(chatInstance.User);
			second = enumerable;
		}
		ICharacterOrUserData[] characters = (from c in first.Concat(second)
			where c.Enabled
			select c).ToArray();
		if (characters.Length == 0)
		{
			logger.LogWarning("No one can reply");
			return null;
		}
		if (characters.Length == 1)
		{
			return characters[0];
		}
		ICharacterOrUserData[] nextCharacters = characters.Where((ICharacterOrUserData c) => c.Id != message.SenderId).ToArray();
		if (nextCharacters.Length == 1)
		{
			return nextCharacters[0];
		}
		int messagesToSample = Math.Min(nextCharacters.Length, 2) * 3 + Math.Max(nextCharacters.Length - 2, 0) * 2;
		await using (IChatInstanceMessagesReadToken chatInstanceMessagesReadToken = await chatInstance.GetMessagesReadTokenAsync(cancellationToken))
		{
			if (chatInstanceMessagesReadToken.Messages.Count >= messagesToSample)
			{
				IGrouping<Guid, ChatMessageData>[] activeSpeakers = (from x in chatInstanceMessagesReadToken.Messages.Where(delegate(ChatMessageData x)
					{
						bool flag = x.SenderId != Guid.Empty;
						if (flag)
						{
							ChatMessageRole role = x.Role;
							bool flag2 = (uint)(role - 2) <= 1u;
							flag = flag2;
						}
						return flag;
					}).TakeLast(messagesToSample)
					group x by x.SenderId).ToArray();
				ICharacterOrUserData[] array = nextCharacters.Where((ICharacterOrUserData c) => activeSpeakers.All((IGrouping<Guid, ChatMessageData> x) => x.Key != c.Id)).ToArray();
				if (array.Length == 1)
				{
					return array[0];
				}
				if (array.Length != 0)
				{
					nextCharacters = array;
				}
			}
		}
		string text = message.Value;
		if (message.Role == ChatMessageRole.User)
		{
			ICharacterOrUserData[] array2 = nextCharacters.Where((ICharacterOrUserData c) => text.Contains(c.Name, StringComparison.CurrentCultureIgnoreCase)).ToArray();
			if (array2.Length == 1)
			{
				return array2[0];
			}
		}
		IActionInferenceService current = actionInferenceAccessor.GetCurrent();
		if (current.Enabled)
		{
			logger.LogInformation("Deciding who speaks next using Chat Flow...");
			tunnel.Send(new ServerChatFlowMessage
			{
				SessionId = chatInstance.SessionId,
				State = ChatFlowStates.SelectingSpeaker
			});
			ActionInvocation result = await current.InferChatFlowAsync(chatInstance, promptBuilder, message, nextCharacters, cancellationToken);
			if (result != null)
			{
				logger.LogInformation("ChatFlow selected: {Name}", result.Name);
				if (string.Equals(result.Name, chatInstance.User.Name, StringComparison.InvariantCultureIgnoreCase))
				{
					return null;
				}
				ICharacterOrUserData characterOrUserData = characters.FirstOrDefault((ICharacterOrUserData c) => string.Equals(c.Name, result.Name, StringComparison.InvariantCultureIgnoreCase));
				if (characterOrUserData != null)
				{
					return characterOrUserData;
				}
			}
			else
			{
				logger.LogInformation("Failed to decide who speaks using chat flow, using manual method...");
			}
		}
		ICharacterOrUserData[] array3 = nextCharacters.Where((ICharacterOrUserData c) => text.Contains(c.Name, StringComparison.CurrentCultureIgnoreCase)).ToArray();
		if (array3.Length == 1)
		{
			return array3[0];
		}
		if (array3.Length > 1)
		{
			int num = Random.Shared.Next(0, array3.Length);
			if (num == array3.Length)
			{
				return null;
			}
			return array3[num];
		}
		ICharacterOrUserData[] array4 = nextCharacters.Where((ICharacterOrUserData c) => c.Id != message.SenderId).ToArray();
		if (array4.Length == 1)
		{
			return array4[0];
		}
		if (array4.Length == 0)
		{
			return nextCharacters[0];
		}
		int num2 = Random.Shared.Next(0, nextCharacters.Length);
		return nextCharacters[num2];
	}
}

```

## Voxta.Core.Chats.ScopedServices\ChatStartedMessageBuilderService.cs
```csharp
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Services.ChatAugmentations;
using Voxta.Abstractions.Web;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.Sessions;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.ScopedServices;

public class ChatStartedMessageBuilderService(ChatInstance chatInstance, IChatSessionServices services, IChatAugmentationsServiceInstance augmentations, IUrlProvider urlProvider) : IChatStartedMessageBuilderService
{
	public async Task<ServerChatStartedMessage> CreateServerChatStartedMessageAsync(CancellationToken cancellationToken)
	{
		ServerChatConfigurationMessage configuration = CreateChatConfigurationMessage();
		ChatMessage[] history;
		await using (IChatInstanceMessagesReadToken chatInstanceMessagesReadToken = await chatInstance.GetMessagesReadTokenAsync(cancellationToken))
		{
			history = chatInstanceMessagesReadToken.Messages.Select((ChatMessageData m) => new ChatMessage
			{
				MessageId = m.LocalId,
				SenderId = m.SenderId,
				Role = m.Role,
				Name = m.User,
				Text = m.Value,
				Tokens = m.Tokens,
				Timestamp = m.Timestamp,
				SummarizedBy = m.SummarizedBy,
				Index = m.Index,
				ConversationIndex = m.ConversationIndex,
				ChatTime = m.ChatTime,
				Attachments = m.Attachments?.Select((ChatMessageDataAttachment a) => new ChatMessageAttachment
				{
					Id = a.Id,
					Source = a.Source,
					ContentType = a.ContentType,
					Label = a.Label,
					FileName = a.FileName,
					Description = a.Description,
					Url = urlProvider.GetAssetUrl<Chat>(m.ChatId, a.GetAssetPath(m.LocalId))
				}).ToArray()
			}).ToArray();
		}
		ServerChatStartedMessage serverChatStartedMessage = new ServerChatStartedMessage
		{
			SessionId = configuration.SessionId,
			ChatId = configuration.ChatId,
			Title = chatInstance.Chat.Title,
			User = configuration.User,
			Characters = configuration.Characters,
			Narrator = configuration.Narrator,
			Scenario = configuration.Scenario,
			Augmentations = augmentations.GetAugmentations().ToArray(),
			Services = configuration.Services,
			ServicesConfigurationsSetId = configuration.ServicesConfigurationsSetId,
			Messages = history
		};
		ServerChatStartedMessage serverChatStartedMessage2 = serverChatStartedMessage;
		serverChatStartedMessage2.Context = await chatInstance.CreateServerContextUpdatedMessageWithoutInspectionAsync(cancellationToken);
		serverChatStartedMessage.ChatStyle = chatInstance.GetChatStyle(chatInstance.GetMainCharacter().ChatStyle);
		return serverChatStartedMessage;
	}

	private ServerChatConfigurationMessage CreateChatConfigurationMessage()
	{
		ScenarioData scenarioData = ((chatInstance.Scenario.SourceScenario.LocalId != Guid.Empty && chatInstance.Scenario.SourceScenario.LocalId != chatInstance.GetMainCharacter().Id) ? chatInstance.Scenario.SourceScenario : null);
		return new ServerChatConfigurationMessage
		{
			SessionId = chatInstance.SessionId,
			ChatId = chatInstance.Chat.LocalId,
			User = new ChatParticipantInfo
			{
				Id = chatInstance.User.Id,
				Name = chatInstance.User.Name,
				ThumbnailUrl = chatInstance.User.ThumbnailUrl
			},
			Characters = chatInstance.CreateContextUpdatedCharactersProperty(),
			Narrator = chatInstance.CreateChatParticipantInfo(chatInstance.Narrator),
			Scenario = ((scenarioData != null) ? new ScenarioInfo
			{
				Id = scenarioData.LocalId,
				Name = scenarioData.Name,
				ChatFlow = scenarioData.ChatFlow,
				ChatStyle = scenarioData.ChatStyle,
				PackageId = scenarioData.PackageId,
				Client = scenarioData.Client,
				Roles = scenarioData.Roles.Select((ScenarioRole r) => new ScenarioInfoRole
				{
					Name = r.Name,
					Description = r.Description
				}).ToArray()
			} : null),
			Augmentations = augmentations.GetAugmentations().ToArray(),
			Services = new ServerChatConfigurationMessage.ServicesConfiguration
			{
				TextGen = new ServerChatConfigurationMessage.ServiceInfo(services.TextGen.InstanceSettings.ToLink()),
				TextToSpeech = ((services.SpeechGenerator.Link == null) ? null : new ServerChatConfigurationMessage.ServiceInfo(services.SpeechGenerator.Link)),
				SpeechToText = ((!services.SpeechToText.Enabled) ? null : new ServerChatConfigurationMessage.ServiceInfo(services.SpeechToText.InstanceSettings.ToLink())),
				ActionInference = ((!services.ActionInference.Enabled) ? null : new ServerChatConfigurationMessage.ServiceInfo(services.ActionInference.InstanceSettings.ToLink())),
				Summarization = ((!services.Summarization.Enabled) ? null : new ServerChatConfigurationMessage.ServiceInfo(services.Summarization.InstanceSettings.ToLink())),
				ImageGen = ((!services.ImageGen.Enabled) ? null : new ServerChatConfigurationMessage.ServiceInfo(services.ImageGen.InstanceSettings.ToLink()))
			},
			ServicesConfigurationsSetId = chatInstance.Config.ServicesConfigurationsSetId
		};
	}
}

```

## Voxta.Core.Chats.ScopedServices\ChatSummarizationPassService.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.DependencyInjection;
using Voxta.Abstractions.Diagnostics;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Prompting;
using Voxta.Abstractions.Services.Summarization;
using Voxta.Abstractions.Services.TextGen;
using Voxta.Abstractions.Utils;
using Voxta.Common;
using Voxta.Core.Chats.Objects.Characters;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.ScopedServices;

public class ChatSummarizationPassService(ChatInstance chatInstance, IUserConnectionTunnel tunnel, IDynamicServiceAccessor<ITextGenService> textGenAccessor, IPromptBuilder promptBuilder, IChatMessageFactory chatMessageFactory, ITunnelMessagesService tunnelMessagesService, IDiagnosticsContext diagnosticsContext, IDynamicServiceAccessor<ISummarizationService> summarizationAccessor, IMemoryMaintenanceService memoryMaintenanceService, ILogger<ChatSummarizationPassService> logger) : IChatSummarizationPassService
{
	private readonly SemaphoreSlim _memorySummarizationSemaphore = new SemaphoreSlim(1, 1);

	public void ScheduleSummarize(bool force, CancellationToken cancellationToken)
	{
		if (summarizationAccessor.GetCurrent().Enabled)
		{
			DiagnosticsContextValues diagnosticsContextValues = diagnosticsContext.GetCurrent();
			Task.Run(async delegate
			{
				await Task.Delay(500, cancellationToken);
				diagnosticsContext.Restore(diagnosticsContextValues);
				await SummarizeNowAsync(force, all: false, cancellationToken);
			}, cancellationToken);
		}
	}

	public async Task SummarizeNowAsync(bool force, bool all, CancellationToken cancellationToken)
	{
		if (!(await _memorySummarizationSemaphore.WaitAsync(0, cancellationToken)))
		{
			return;
		}
		try
		{
			ISummarizationService summarizationService = summarizationAccessor.GetCurrent();
			if (!summarizationService.Enabled)
			{
				if (force)
				{
					logger.LogWarning("Tried to force summarization, but summarization is disabled");
				}
				return;
			}
			IReadOnlyList<ChatMessageData> readOnlyList = ((!all) ? (await SummarizeUnsafeAsync(summarizationService, force, cancellationToken)) : (await SummarizeAllAsync(summarizationService, cancellationToken)));
			if (readOnlyList.Count > 0)
			{
				await SaveMemoryAsync(summarizationService, readOnlyList, cancellationToken);
			}
		}
		finally
		{
			_memorySummarizationSemaphore.Release();
		}
	}

	private async Task SaveMemoryAsync(ISummarizationService summarizationService, IReadOnlyList<ChatMessageData> summarizedMessages, CancellationToken cancellationToken)
	{
		if (chatInstance.Chat.LastMemorizedMessage.HasValue)
		{
			ChatMessageData alreadyMemorizedMessage = summarizedMessages.FirstOrDefault(delegate(ChatMessageData x)
			{
				Guid localId = x.LocalId;
				Guid? lastMemorizedMessage = chatInstance.Chat.LastMemorizedMessage;
				return localId == lastMemorizedMessage;
			});
			if (alreadyMemorizedMessage != null)
			{
				summarizedMessages = summarizedMessages.Where((ChatMessageData x) => x.Index > alreadyMemorizedMessage.Index).ToArray();
			}
		}
		if (summarizedMessages.Count == 0)
		{
			return;
		}
		List<CharacterInstance> charactersWithMemory = chatInstance.Characters.Where((CharacterInstance c) => c.Memory.PrivateMemoryEnabled).ToList();
		if (charactersWithMemory.Count == 0)
		{
			return;
		}
		if (charactersWithMemory.Count > 1)
		{
			logger.LogWarning("Multiple characters with long term memory, memory extraction will take longer");
		}
		logger.LogInformation("Extracting memories from {SummarizedMessagesCount} summarized messages...", summarizedMessages.Count);
		IReadOnlyList<MemoryExtractResult> extractedMemories = await summarizationService.ExtractMemoriesAsync(chatInstance, chatInstance.GetMainCharacter(), promptBuilder, summarizedMessages.Where((ChatMessageData m) => m.Role != ChatMessageRole.Summary).ToArray(), cancellationToken);
		if (extractedMemories.Count == 0)
		{
			logger.LogWarning("No new memories extracted from summarized messages");
			return;
		}
		foreach (MemoryExtractResult item in extractedMemories)
		{
			logger.LogInformation("Extracted memory: {Text}", item.Text);
		}
		IReadOnlyList<ChatMessageData> readOnlyList = summarizedMessages;
		Guid lastMessageId = readOnlyList[readOnlyList.Count - 1].LocalId;
		foreach (CharacterInstance item2 in charactersWithMemory)
		{
			await memoryMaintenanceService.IntegrateMemoriesAsync(item2, extractedMemories, lastMessageId, cancellationToken);
		}
	}

	private async Task<IReadOnlyList<ChatMessageData>> SummarizeUnsafeAsync(ISummarizationService summarizationService, bool force, CancellationToken cancellationToken)
	{
		GenerationStats generationStats = chatInstance.GenerationStats;
		if (generationStats == null)
		{
			if (force)
			{
				logger.LogWarning("Tried to summarize, but there are no generation stats available");
			}
			return Array.Empty<ChatMessageData>();
		}
		ITextGenService current = textGenAccessor.GetCurrent();
		if (!ShouldRunSummarization(summarizationService, current, generationStats, force))
		{
			return Array.Empty<ChatMessageData>();
		}
		int tokensToDigest = await GetTokensToDigestAsync(current, summarizationService, cancellationToken);
		(IReadOnlyList<ChatMessageData>, IReadOnlyList<ChatMessageData>) tuple = await GetMessagesToSummarizeAsync(summarizationService, tokensToDigest, cancellationToken);
		IReadOnlyList<ChatMessageData> sourceMessagesToSummarize = tuple.Item1;
		IReadOnlyList<ChatMessageData> item = tuple.Item2;
		int sourceMessagesToSummarizeTokens = sourceMessagesToSummarize.Sum((ChatMessageData x) => x.Tokens);
		if (sourceMessagesToSummarizeTokens <= summarizationService.MaxSummaryLength)
		{
			logger.LogWarning("Summarization: Not enough messages to summarize (Got {MessagesToSummarizeTokens} tokens from {MessagesCount} messages, digest size: {TokensToDigest}, maximum allowed summarized tokens: {MaxSummaryLength})", sourceMessagesToSummarizeTokens, sourceMessagesToSummarize.Count, tokensToDigest, summarizationService.MaxSummaryLength);
		}
		logger.LogInformation("Summarization: Digesting {MessagesToSummarizeCount} messages ({MessagesToSummarizeTokens} tokens)...", sourceMessagesToSummarize.Count, sourceMessagesToSummarizeTokens);
		string text = await SummarizeMessagesSafeAsync(summarizationService, item, cancellationToken);
		if (text == null)
		{
			return Array.Empty<ChatMessageData>();
		}
		ChatMessageData chatMessageData = await SaveSummarizationResultAsync(sourceMessagesToSummarize, text, cancellationToken);
		logger.LogInformation("Summarized memory: From {MessageTokens} tokens (in {MessagesCount} messages) to {SummaryTokens} tokens: {SummaryText}", sourceMessagesToSummarizeTokens, sourceMessagesToSummarize.Count, chatMessageData.Tokens, chatMessageData.Value);
		return sourceMessagesToSummarize;
	}

	public bool ShouldRunSummarization(ISummarizationService summarizationService, ITextGenService textGen, GenerationStats stats, bool force)
	{
		if (force)
		{
			logger.LogInformation("Summarization: Forced summarization");
			return true;
		}
		double num = Math.Max(summarizationService.SummarizationTriggerMessagesBuffer, 1.0);
		int num2 = (int)Math.Ceiling(num * (double)textGen.MaxTokens);
		int num3 = stats.TotalAvailableTokensForMessages + textGen.MaxTokens - stats.TotalMessagesTokens;
		if (num3 < num2)
		{
			logger.LogWarning("Summarization: {RemainingTokens} tokens left for messages; summarization configured to trigger at {MinAllowedRemainingTokens} remaining tokens ({MessagesBuffer} messages at {MaxTokens} tokens)", num3, num2, num, textGen.MaxTokens);
			return true;
		}
		if (stats.RetainedMessagesTokens < stats.TotalMessagesTokens)
		{
			logger.LogWarning("Summarization: {TotalMessagesTokens} messages should be rendered but only {RetainedMessagesTokens} could be inserted, triggering summarization", stats.TotalMessagesTokens, stats.RetainedMessagesTokens);
			return true;
		}
		return false;
	}

	public async Task<int> GetTokensToDigestAsync(ITextGenService textGen, ISummarizationService summarization, CancellationToken cancellationToken)
	{
		GenerationStats stats = chatInstance.GenerationStats ?? throw new InvalidOperationException("Generation stats are not available");
		int result;
		await using (IChatInstanceMessagesWriteToken chatInstanceMessagesWriteToken = await chatInstance.GetMessagesWriteTokenAsync(cancellationToken))
		{
			int num = chatInstanceMessagesWriteToken.Messages.SingleOrDefault((ChatMessageData x) => x != null && x.Role == ChatMessageRole.Summary && !x.SummarizedBy.HasValue)?.Tokens ?? 0;
			int num2 = (int)Math.Clamp(summarization.SummarizationDigestRatio * (double)(stats.TotalAvailableTokensForMessages + textGen.MaxTokens + num), textGen.MaxTokens * 2, summarization.TokenWindow);
			result = num2;
		}
		return result;
	}

	private async Task<string?> SummarizeMessagesSafeAsync(ISummarizationService summarizationService, IReadOnlyList<ChatMessageData> messagesToSummarize, CancellationToken cancellationToken)
	{
		string text;
		try
		{
			text = await summarizationService.SummarizeAsync(chatInstance, promptBuilder, messagesToSummarize, cancellationToken);
		}
		catch (Exception exception)
		{
			logger.LogError(exception, "Error while summarizing memory, attempt to summarize dropped for this turn");
			return null;
		}
		if (string.IsNullOrEmpty(text))
		{
			logger.LogWarning("Empty summarization returned from the service");
			return null;
		}
		return text;
	}

	private async Task<IReadOnlyList<ChatMessageData>> SummarizeAllAsync(ISummarizationService summarizationService, CancellationToken cancellationToken)
	{
		IReadOnlyList<ChatMessageData> result;
		await using (IChatInstanceMessagesWriteToken token = await chatInstance.GetMessagesWriteTokenAsync(cancellationToken))
		{
			List<ChatMessageData> summarizedMessages = new List<ChatMessageData>();
			int i = 0;
			while (true)
			{
				if (i < 5)
				{
					int maxTokens = summarizationService.TokenWindow - 400;
					int tokens = 0;
					List<ChatMessageData> messages = token.Messages.TakeWhile((ChatMessageData x) => (tokens += x.Tokens) < maxTokens).SkipLast(2).ToList();
					if (messages.Count != 0)
					{
						if (messages != null && messages.Count == 1)
						{
							ChatMessageData chatMessageData = messages[0];
							if (chatMessageData != null && chatMessageData.Role == ChatMessageRole.Summary)
							{
								goto IL_015d;
							}
						}
						string text = await SummarizeMessagesSafeAsync(summarizationService, messages, cancellationToken);
						if (text == null)
						{
							result = summarizedMessages;
							break;
						}
						await SaveSummarizationResultAsync(messages, text, token, cancellationToken);
						summarizedMessages.AddRange(messages);
						if (token.Messages.Count != 0)
						{
							if (messages == null || messages.Count != 1)
							{
								goto IL_02f4;
							}
							ChatMessageData chatMessageData = messages[0];
							if (chatMessageData == null || chatMessageData.Role != ChatMessageRole.Summary)
							{
								goto IL_02f4;
							}
						}
						result = summarizedMessages;
						break;
					}
					goto IL_015d;
				}
				result = summarizedMessages;
				break;
				IL_015d:
				logger.LogWarning("Unable to fix any messages in token window {TokenWindow}", summarizationService.TokenWindow);
				result = summarizedMessages;
				break;
				IL_02f4:
				i++;
			}
		}
		return result;
	}

	private async Task<ChatMessageData> SaveSummarizationResultAsync(IReadOnlyList<ChatMessageData> messagesToSummarize, string summaryText, CancellationToken cancellationToken)
	{
		ChatMessageData result;
		await using (IChatInstanceMessagesWriteToken token = await chatInstance.GetMessagesWriteTokenAsync(cancellationToken))
		{
			result = await SaveSummarizationResultAsync(messagesToSummarize, summaryText, token, cancellationToken);
		}
		return result;
	}

	private async Task<ChatMessageData> SaveSummarizationResultAsync(IReadOnlyList<ChatMessageData> messagesToSummarize, string summaryText, IChatInstanceMessagesWriteToken token, CancellationToken cancellationToken)
	{
		if (messagesToSummarize.Count == 0)
		{
			throw new ArgumentException("No messages to summarize", "messagesToSummarize");
		}
		summaryText = summaryText.StripUnfinishedSentence().Trim();
		ChatMessageData chatMessageData = messagesToSummarize[messagesToSummarize.Count - 1];
		ChatMessageData chatMessageData2 = new ChatMessageData
		{
			UserId = chatInstance.UserId,
			LocalId = chatMessageFactory.CreateMessageId(),
			ChatId = chatMessageData.ChatId,
			Role = ChatMessageRole.Summary,
			Value = summaryText,
			Index = chatMessageData.Index,
			ConversationIndex = chatMessageData.ConversationIndex,
			ChatTime = chatMessageData.ChatTime,
			Timestamp = chatMessageData.Timestamp,
			SenderId = Guid.Empty
		};
		ChatMessageData chatMessageData3 = chatMessageData2;
		chatMessageData3.Tokens = await textGenAccessor.GetCurrent().Tokenizer.CountTokensAsync(summaryText, cancellationToken);
		ChatMessageData summarizedMessage = chatMessageData2;
		foreach (ChatMessageData item in messagesToSummarize)
		{
			item.SummarizedBy = summarizedMessage.LocalId;
			token.Messages.Remove(item);
		}
		token.Messages.Insert(0, summarizedMessage);
		await Task.WhenAll(messagesToSummarize.Select((ChatMessageData x) => chatMessageFactory.UpdateMessageAsync(x, cancellationToken)));
		await chatMessageFactory.SaveMessageAsync(summarizedMessage, cancellationToken);
		foreach (ChatMessageData item2 in messagesToSummarize)
		{
			tunnel.Send(new ServerUpdatedMessage
			{
				SessionId = chatInstance.SessionId,
				MessageId = item2.LocalId,
				SenderId = item2.SenderId,
				Role = item2.Role,
				Timestamp = item2.Timestamp,
				Tokens = item2.Tokens,
				Text = item2.Value,
				SummarizedBy = summarizedMessage.LocalId,
				Index = item2.Index,
				ConversationIndex = item2.ConversationIndex,
				ChatTime = item2.ChatTime
			});
		}
		tunnelMessagesService.SendMessageUpdated(summarizedMessage);
		return summarizedMessage;
	}

	public async Task<(IReadOnlyList<ChatMessageData> SourceMessagesToSummarize, IReadOnlyList<ChatMessageData> PreparedMessagesToSummarize)> GetMessagesToSummarizeAsync(ISummarizationService summarization, int tokensToDigest, CancellationToken cancellationToken)
	{
		(IReadOnlyList<ChatMessageData>, IReadOnlyList<ChatMessageData>) result;
		await using (IChatInstanceMessagesWriteToken chatInstanceMessagesWriteToken = await chatInstance.GetMessagesWriteTokenAsync(cancellationToken))
		{
			if (!summarization.Enabled)
			{
				result = (Array.Empty<ChatMessageData>(), Array.Empty<ChatMessageData>());
			}
			else
			{
				int maxTokens = textGenAccessor.GetCurrent().MaxTokens;
				List<ChatMessageData> list = new List<ChatMessageData>(chatInstanceMessagesWriteToken.Messages.Where((ChatMessageData x) => !x.SummarizedBy.HasValue));
				List<ChatMessageData> list2 = new List<ChatMessageData>(list);
				for (int num = 0; num < summarization.KeepLastMessages; num++)
				{
					if (list.Count > 0)
					{
						if (list[list.Count - 1].Role != ChatMessageRole.Summary)
						{
							list.RemoveAt(list.Count - 1);
							list2.RemoveAt(list2.Count - 1);
						}
					}
				}
				int num2 = 0;
				for (int num3 = 0; num3 < list.Count; num3++)
				{
					ChatMessageData chatMessageData = list[num3];
					if (chatMessageData.Tokens > maxTokens)
					{
						int maxLength = maxTokens * 2;
						ChatMessageData value = new ChatMessageData
						{
							UserId = chatMessageData.UserId,
							LocalId = chatMessageData.LocalId,
							ChatId = chatMessageData.ChatId,
							Role = chatMessageData.Role,
							Value = chatMessageData.Value.Excerpt(ephemeral: false, maxLength),
							Index = chatMessageData.Index,
							ConversationIndex = chatMessageData.ConversationIndex,
							ChatTime = chatMessageData.ChatTime,
							Timestamp = chatMessageData.Timestamp,
							SenderId = chatMessageData.SenderId,
							Attachments = chatMessageData.Attachments,
							Tokens = maxTokens,
							GlobalId = chatMessageData.GlobalId,
							Special = chatMessageData.Special,
							SummarizedBy = chatMessageData.SummarizedBy,
							User = chatMessageData.User
						};
						list2[num3] = value;
						num2 += maxTokens;
					}
					else
					{
						num2 += chatMessageData.Tokens;
					}
					if (num2 > tokensToDigest)
					{
						list.RemoveRange(num3, list.Count - num3);
						list2.RemoveRange(num3, list2.Count - num3);
						break;
					}
				}
				result = (list, list2);
			}
		}
		return result;
	}
}

```

## Voxta.Core.Chats.ScopedServices\CommandModeService.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.DependencyInjection;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Prompting;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Abstractions.Services.ActionInference;
using Voxta.Abstractions.Templating;
using Voxta.Common;
using Voxta.Core.Chats.Commands;
using Voxta.Core.Chats.Commands.Messages;
using Voxta.Core.Chats.Commands.Reply;
using Voxta.Core.Chats.Commands.Start;
using Voxta.Core.Chats.Objects;
using Voxta.Core.Chats.Objects.Characters;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.Objects.Scenarios;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.ScopedServices;

public class CommandModeService(ChatInstance chatInstance, IChatCommandsManager commandsManager, IChatObjectInstanceFactory chatObjectInstanceFactory, ITunnelMessagesService tunnelMessagesService, IPromptBuilder promptBuilder, TimeProvider timeProvider, IDynamicServiceAccessor<IActionInferenceService> actionInferenceAccessor, ILogger<CommandModeService> logger) : ICommandModeService
{
	private enum ChatSessionStates
	{
		Live,
		Paused,
		CommandMode
	}

	private ChatSessionStates _state;

	private int _commandModeIndex = -1;

	private const string CommandModeKey = "Command";

	private Func<CancellationToken, Task>? _pendingCommandModeAction;

	private IScenarioActionInstance[]? _yesNoFunctions;

	private List<IScenarioActionInstance>? _commandModeFunctions;

	private ChatInstance _commandModeChatInstanceSession;

	public async ValueTask<bool> TryHandle(ClientSendMessage clientSendMessage, CancellationToken cancellationToken)
	{
		string text = clientSendMessage.Text ?? "";
		switch (_state)
		{
		case ChatSessionStates.Live:
			if (text.Contains("go offline", StringComparison.InvariantCultureIgnoreCase))
			{
				await RegisterUserMessage(clientSendMessage, cancellationToken);
				await EnterPauseMode(cancellationToken);
				return true;
			}
			if (text.Contains("enter command mode", StringComparison.InvariantCultureIgnoreCase))
			{
				await RegisterUserMessage(clientSendMessage, cancellationToken);
				await EnterCommandMode(cancellationToken);
				return true;
			}
			return false;
		case ChatSessionStates.Paused:
			await RegisterUserMessage(clientSendMessage, cancellationToken);
			if (text.Contains("go online", StringComparison.InvariantCultureIgnoreCase))
			{
				await EnterLiveMode(cancellationToken);
			}
			else if (text.Contains("enter command mode", StringComparison.InvariantCultureIgnoreCase))
			{
				await EnterCommandMode(cancellationToken);
			}
			return true;
		case ChatSessionStates.CommandMode:
			await RegisterUserMessage(clientSendMessage, cancellationToken);
			if (text.Contains("go online", StringComparison.InvariantCultureIgnoreCase) || text.Contains("resume", StringComparison.InvariantCultureIgnoreCase))
			{
				await EnterLiveMode(cancellationToken);
			}
			else if (!text.Contains("go offline", StringComparison.InvariantCultureIgnoreCase))
			{
				await HandleCommandModeAsync(clientSendMessage, cancellationToken);
			}
			else
			{
				await EnterPauseMode(cancellationToken);
			}
			return true;
		default:
			throw new NotSupportedException($"Unknown state: {_state}");
		}
	}

	private async Task EnterCommandMode(CancellationToken cancellationToken)
	{
		ChatMessageData chatMessageData = await chatInstance.GetLastMessageAsync(cancellationToken);
		_state = ChatSessionStates.CommandMode;
		_commandModeChatInstanceSession.LastInvokedUserFunction.Clear();
		_commandModeIndex = Math.Max(chatMessageData?.Index ?? 0, chatMessageData?.ConversationIndex ?? 0);
		await SendCommandModeReplyAsync("Entering command mode.", reusable: true, cancellationToken);
	}

	private async Task EnterLiveMode(CancellationToken cancellationToken)
	{
		await SendCommandModeReplyAsync("Back online.", reusable: true, cancellationToken);
		await ClearCommandModeAsync(cancellationToken);
		_state = ChatSessionStates.Live;
	}

	private async Task EnterPauseMode(CancellationToken cancellationToken)
	{
		await ClearCommandModeAsync(cancellationToken);
		_state = ChatSessionStates.Paused;
		await SendCommandModeReplyAsync("Going offline.", reusable: true, cancellationToken);
	}

	private async Task ClearCommandModeAsync(CancellationToken cancellationToken)
	{
		if (_state != ChatSessionStates.CommandMode)
		{
			return;
		}
		await using IChatInstanceMessagesWriteToken chatInstanceMessagesWriteToken = await chatInstance.GetMessagesWriteTokenAsync(cancellationToken);
		foreach (ChatMessageData message in chatInstanceMessagesWriteToken.Messages)
		{
			tunnelMessagesService.SendMessageDeleted(message);
		}
		chatInstanceMessagesWriteToken.Messages.Clear();
		_pendingCommandModeAction = null;
	}

	private IScenarioActionInstance[] GetYesNoFunctions()
	{
		return _yesNoFunctions ?? (_yesNoFunctions = new ScenarioActionDefinition[2]
		{
			new ScenarioActionDefinition
			{
				Name = "accept",
				Description = "When {{ user }} says yes to the command"
			},
			new ScenarioActionDefinition
			{
				Name = "refuse",
				Description = "When {{ user }} says no to the command"
			}
		}.Select((ScenarioActionDefinition x) => chatObjectInstanceFactory.CreateAction(x, "Command", 0, "commands", NullActionScriptEngine.Instance)).ToArray());
	}

	private List<IScenarioActionInstance> GetCommandModeFunctions()
	{
		return _commandModeFunctions ?? (_commandModeFunctions = new List<ScenarioActionDefinition>
		{
			new ScenarioActionDefinition
			{
				Name = "help",
				Description = "Provide help on the available commands"
			},
			new ScenarioActionDefinition
			{
				Name = "list_services",
				Description = "List the current AI services used for text generation and speech"
			},
			new ScenarioActionDefinition
			{
				Name = "list_commands",
				Description = "List the available commands you can send to the AI"
			},
			new ScenarioActionDefinition
			{
				Name = "reset_chat",
				Description = "Reset the chat session, clearing all messages and memories"
			},
			new ScenarioActionDefinition
			{
				Name = "repeat",
				Description = "Repeat the sentence of the user",
				Arguments = new FunctionArgumentDefinition[1]
				{
					new FunctionArgumentDefinition
					{
						Name = "text",
						Description = "The text to repeat",
						Required = true,
						Type = FunctionArgumentType.String
					}
				}
			},
			new ScenarioActionDefinition
			{
				Name = "regenerate",
				Description = "Regenerate the last character response"
			},
			new ScenarioActionDefinition
			{
				Name = "rollback",
				Description = "Delete the last user and character exchange, reverting to the previous one"
			}
		}.Select((ScenarioActionDefinition x) => chatObjectInstanceFactory.CreateAction(x, "Command", 0, "commands", NullActionScriptEngine.Instance)).ToList());
	}

	public async Task ConfigureCommandModeAsync(CancellationToken cancellationToken)
	{
		Chat chat = new Chat
		{
			LocalId = Guid.Empty,
			UserId = chatInstance.Chat.UserId,
			Characters = new List<Guid>(),
			CreatedAt = timeProvider.GetUtcNow()
		};
		ChatInstance commandModeChatInstance = new ChatInstance(chat)
		{
			UserId = chatInstance.UserId,
			User = chatInstance.User,
			Characters = new List<CharacterInstance>(1)
			{
				new CharacterInstance
				{
					Id = Guid.Empty,
					Name = "Assistant",
					Personality = new StaticTemplate("robotic + precise + helpful"),
					Description = StaticTemplate.Empty,
					Profile = StaticTemplate.Empty
				}
			},
			Scenario = new ScenarioInstance
			{
				ScenarioTemplate = new StaticTemplate("The user enters command mode to make administrative commands."),
				SourceScenario = Scenario.Empty
			}
		};
		await using IChatInstanceContextWriteToken chatInstanceContextWriteToken = await commandModeChatInstance.GetContextWriteTokenAsync(cancellationToken);
		chatInstanceContextWriteToken.Actions["Command"] = GetCommandModeFunctions();
		_commandModeChatInstanceSession = commandModeChatInstance;
	}

	private async Task HandleCommandModeAsync(ClientSendMessage message, CancellationToken cancellationToken)
	{
		logger.LogInformation("Received command message: {Message}", message.Text);
		IActionInferenceService actionInference = actionInferenceAccessor.GetCurrent();
		if (!actionInference.Enabled)
		{
			await SendCommandModeReplyAsync("Cannot process command mode, action inference is not configured.", reusable: true, cancellationToken);
			return;
		}
		ChatMessageData commandModeMessage;
		await using (IChatInstanceMessagesWriteToken chatInstanceMessagesWriteToken = await _commandModeChatInstanceSession.GetMessagesWriteTokenAsync(cancellationToken))
		{
			commandModeMessage = chatInstanceMessagesWriteToken.AddTestMessage(_commandModeChatInstanceSession.User, message.Text ?? "", 0, timeProvider.GetUtcNow());
			_commandModeIndex++;
			commandModeMessage.Index = _commandModeIndex;
			commandModeMessage.ConversationIndex = _commandModeIndex;
			chatInstanceMessagesWriteToken.Messages.Add(commandModeMessage);
		}
		if (_pendingCommandModeAction != null)
		{
			await ProcessYesNoCommandAsync(commandModeMessage, cancellationToken);
			return;
		}
		ActionInvocation actionInvocation = await actionInference.InferActionAsync(_commandModeChatInstanceSession, promptBuilder, commandModeMessage, ActionInferenceType.UserFunction, GetCommandModeFunctions(), cancellationToken);
		if (actionInvocation == null)
		{
			await SendCommandModeReplyAsync("No commands found matching your query. You can ask for help.", reusable: true, cancellationToken);
			return;
		}
		_commandModeChatInstanceSession.LastInvokedUserFunction[""] = new ActionInvocationRecord(actionInvocation, timeProvider.GetUtcNow());
		switch (actionInvocation.Name)
		{
		case "help":
			await HelpAsync(cancellationToken);
			break;
		case "list_commands":
			await ListCommandsAsync(cancellationToken);
			break;
		case "reset_chat":
			await ResetChatAsync(cancellationToken);
			break;
		case "repeat":
			await RepeatAsync(actionInvocation.Arguments[0].Value, cancellationToken);
			break;
		case "regenerate":
			await RegenerateAsync(cancellationToken);
			break;
		case "rollback":
			await RollbackAsync(cancellationToken);
			break;
		default:
			throw new NotSupportedException("The function " + actionInvocation.Name + " was recognized, but not implemented");
		}
	}

	private async Task RegisterUserMessage(ClientSendMessage message, CancellationToken cancellationToken)
	{
		await using IChatInstanceMessagesWriteToken chatInstanceMessagesWriteToken = await _commandModeChatInstanceSession.GetMessagesWriteTokenAsync(cancellationToken);
		ChatMessageData chatMessageData = chatInstanceMessagesWriteToken.AddTestMessage(chatInstance.User, message.Text ?? "", 0, timeProvider.GetUtcNow());
		_commandModeIndex++;
		chatMessageData.Index = _commandModeIndex;
		chatMessageData.ConversationIndex = _commandModeIndex;
		chatInstanceMessagesWriteToken.Messages.Add(chatMessageData);
		tunnelMessagesService.SendMessageUpdated(chatMessageData);
	}

	private async Task ProcessYesNoCommandAsync(ChatMessageData commandMessage, CancellationToken cancellationToken)
	{
		if (_pendingCommandModeAction == null)
		{
			return;
		}
		IActionInferenceService current = actionInferenceAccessor.GetCurrent();
		if (!current.Enabled)
		{
			throw new InvalidOperationException("Action inference is not enabled.");
		}
		ActionInvocation actionInvocation = await current.InferActionAsync(_commandModeChatInstanceSession, promptBuilder, commandMessage, ActionInferenceType.UserFunction, GetYesNoFunctions(), cancellationToken);
		if (actionInvocation == null)
		{
			await SendCommandModeReplyAsync("Please either accept or refuse the command.", reusable: true, cancellationToken);
			return;
		}
		string name = actionInvocation.Name;
		if (!(name == "accept"))
		{
			if (!(name == "refuse"))
			{
				throw new NotSupportedException("The function " + actionInvocation.Name + " was recognized, but not implemented");
			}
			_pendingCommandModeAction = null;
			await SendCommandModeReplyAsync("Command refused.", reusable: true, cancellationToken);
		}
		else
		{
			await _pendingCommandModeAction(cancellationToken);
		}
	}

	private Task HelpAsync(CancellationToken cancellationToken)
	{
		return SendCommandModeReplyAsync("You are in analysis mode. Say \"list commands\" to hear available commands, say \"go online\" to resume conversation or \"go offline\" to pause transcription.", reusable: true, cancellationToken);
	}

	private Task ListCommandsAsync(CancellationToken cancellationToken)
	{
		StringBuilder stringBuilder = new StringBuilder();
		stringBuilder.AppendLineLinux("You can use the following commands:");
		stringBuilder.AppendLineLinux("repeat");
		stringBuilder.AppendLineLinux("list services");
		stringBuilder.AppendLineLinux("list commands");
		stringBuilder.AppendLineLinux("reset chat");
		stringBuilder.AppendLineLinux("regenerate");
		stringBuilder.AppendLineLinux("rollback");
		return SendCommandModeReplyAsync(stringBuilder.ToString(), reusable: true, cancellationToken);
	}

	private Task ResetChatAsync(CancellationToken cancellationToken)
	{
		_pendingCommandModeAction = ResetChatConfirmAsync;
		return SendCommandModeReplyAsync("Are you sure you want to reset the chat?", reusable: true, cancellationToken);
	}

	private async Task ResetChatConfirmAsync(CancellationToken cancellationToken)
	{
		foreach (CharacterInstance character in chatInstance.Characters)
		{
			await using ICharacterInstanceWriteToken characterInstanceWriteToken = await character.GetWriteTokenAsync(cancellationToken);
			characterInstanceWriteToken.Memories.Clear();
		}
		await using (IChatInstanceMessagesWriteToken chatInstanceMessagesWriteToken = await chatInstance.GetMessagesWriteTokenAsync(cancellationToken))
		{
			chatInstanceMessagesWriteToken.Messages.Clear();
		}
		_state = ChatSessionStates.Live;
		commandsManager.EnqueueInput<IStartChatCommand, StartChatRequest>(new StartChatRequest());
	}

	private Task RepeatAsync(string text, CancellationToken cancellationToken)
	{
		return SendCommandModeReplyAsync(text.Substring(7, text.Length - 7), reusable: false, cancellationToken);
	}

	private async Task RegenerateAsync(CancellationToken cancellationToken)
	{
		if ((await DeleteLastMessages(ChatMessageRole.Assistant, cancellationToken)).Count > 0)
		{
			_state = ChatSessionStates.Live;
			commandsManager.EnqueueForeground<IRetryCommand, ClientRetryMessage>(new ClientRetryMessage
			{
				SessionId = chatInstance.SessionId
			});
		}
		else
		{
			await SendCommandModeReplyAsync("No messages found to regenerate from.", reusable: true, cancellationToken);
		}
	}

	private async Task RollbackAsync(CancellationToken cancellationToken)
	{
		List<ChatMessageData> list = await DeleteLastMessages(ChatMessageRole.Assistant, cancellationToken);
		List<ChatMessageData> list2 = await DeleteLastMessages(ChatMessageRole.User, cancellationToken);
		List<ChatMessageData> list3 = new List<ChatMessageData>(list.Count + list2.Count);
		list3.AddRange(list);
		list3.AddRange(list2);
		List<ChatMessageData> list4 = list3;
		string text = list4.FirstOrDefault((ChatMessageData x) => x.Role == ChatMessageRole.User)?.Value ?? "";
		text = string.Join(" ", text.Split(" ", StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries).Take(8));
		string text2 = $"Deleted last {list4.Count} messages, starting with \"{Regex.Replace(text, "[.\\n]", "")}\".";
		await SendCommandModeReplyAsync(text2, reusable: false, cancellationToken);
	}

	private async Task<List<ChatMessageData>> DeleteLastMessages(ChatMessageRole role, CancellationToken cancellationToken)
	{
		List<ChatMessageData> result;
		await using (IChatInstanceMessagesWriteToken chatInstanceMessagesWriteToken = await chatInstance.GetMessagesWriteTokenAsync(cancellationToken))
		{
			int num = chatInstanceMessagesWriteToken.Messages.FindLastIndex((ChatMessageData m) => m.Role == role);
			if (num == -1 || num == chatInstanceMessagesWriteToken.Messages.Count - 1)
			{
				result = new List<ChatMessageData>();
			}
			else
			{
				int val = chatInstanceMessagesWriteToken.Messages.FindLastIndex(num - 1, (ChatMessageData m) => m.Role != role) + 1;
				val = Math.Max(val, num);
				List<ChatMessageData> range = chatInstanceMessagesWriteToken.Messages.GetRange(val, chatInstanceMessagesWriteToken.Messages.Count - val);
				foreach (ChatMessageData item in range)
				{
					commandsManager.EnqueueInput<IDeleteMessageCommand, ClientDeleteMessageMessage>(new ClientDeleteMessageMessage
					{
						SessionId = chatInstance.SessionId,
						MessageId = item.LocalId
					});
				}
				result = range;
			}
		}
		return result;
	}

	private async Task SendCommandModeReplyAsync(string text, bool reusable, CancellationToken cancellationToken)
	{
		ChatMessageData commandModeMessage;
		await using (IChatInstanceMessagesWriteToken chatInstanceMessagesWriteToken = await _commandModeChatInstanceSession.GetMessagesWriteTokenAsync(cancellationToken))
		{
			commandModeMessage = chatInstanceMessagesWriteToken.AddTestMessage(_commandModeChatInstanceSession.GetMainCharacter(), text, 0, timeProvider.GetUtcNow());
			_commandModeIndex++;
			commandModeMessage.Index = _commandModeIndex;
			commandModeMessage.ConversationIndex = _commandModeIndex;
			chatInstanceMessagesWriteToken.Messages.Add(commandModeMessage);
		}
		commandsManager.EnqueueForeground<ISpeechOnlyCommand, SpeechOnlyRequest>(new SpeechOnlyRequest
		{
			Reusable = (reusable ? "cmd" : null),
			Message = commandModeMessage
		});
	}
}

```

## Voxta.Core.Chats.ScopedServices\ContinuationService.cs
```csharp
using System;
using System.Threading;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Model;
using Voxta.Core.Chats.Commands;
using Voxta.Core.Chats.Commands.ChatFlow;
using Voxta.Core.Chats.Sessions;
using Voxta.Core.CommandsProcessing;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.ScopedServices;

public class ContinuationService(IChatInferenceData chatInstance, IUserConnectionTunnel tunnel, IChatCommandsManager commandsManager, IChatCommandsReceiver chatCommandsReceiver, IChatFlowService chatFlowService, IChatSessionGeneratingState generatingState) : IContinuationService
{
	private readonly Lock _lock = new Lock();

	private (ChatMessageData Message, bool AllowUser)? _continuation;

	public int ContinuationCounter { get; private set; }

	public void CancelContinuation()
	{
		_continuation = null;
	}

	public void ScheduleContinuation(ChatMessageData? message, bool allowUser)
	{
		if (message == null)
		{
			return;
		}
		if (!generatingState.SpeechInProgress())
		{
			using (_lock.EnterScope())
			{
				ContinuationCounter++;
				EnqueueContinuation(message, allowUser, ContinuationCounter);
				return;
			}
		}
		chatFlowService.PreloadChatFlow(message, allowUser, chatInstance.Abort);
		using (_lock.EnterScope())
		{
			_continuation = (message, allowUser);
		}
	}

	public void HoldForSpeech()
	{
		chatCommandsReceiver.HoldForeground();
	}

	public ChatFlowStates SpeechComplete(Guid messageId, CancellationToken cancellationToken)
	{
		chatCommandsReceiver.ReleaseForeground();
		cancellationToken.ThrowIfCancellationRequested();
		if (TryEnqueueContinuation(messageId))
		{
			return ChatFlowStates.Undefined;
		}
		ChatFlowStates chatFlowStates = ((chatInstance.ChatFlow == ChatFlowModes.Chat) ? ChatFlowStates.WaitingForUserInput : ChatFlowStates.Undefined);
		tunnel.Send(new ServerChatFlowMessage
		{
			SessionId = chatInstance.SessionId,
			State = chatFlowStates
		});
		return chatFlowStates;
	}

	private bool TryEnqueueContinuation(Guid messageId)
	{
		using (_lock.EnterScope())
		{
			if (!_continuation.HasValue)
			{
				return false;
			}
			if (_continuation.Value.Message.LocalId != messageId)
			{
				return false;
			}
			ContinuationCounter++;
			EnqueueContinuation(_continuation.Value.Message, _continuation.Value.AllowUser, ContinuationCounter);
			_continuation = null;
		}
		return true;
	}

	private void EnqueueContinuation(ChatMessageData message, bool allowUser, int continuationCounter)
	{
		commandsManager.EnqueueForeground<IContinueConversationCommand, ContinueConversationRequest>(new ContinueConversationRequest
		{
			ContinuationCounter = continuationCounter,
			Message = message,
			AllowUser = allowUser
		});
	}
}

```

## Voxta.Core.Chats.ScopedServices\CustomMessageService.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Prompting;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Core.Chats.Commands;
using Voxta.Core.Chats.Commands.Reply;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.ScopedServices;

public class CustomMessageService(ChatInstance chatInstance, IMessageDispatcherService messageDispatcher, IPromptBuilder promptBuilder, IChatCommandsManager chatCommandsManager, ILogger<ApplyActionEffectsService> logger) : ICustomMessageService
{
	public async Task<bool> SendCustomMessageAsync(ScenarioMessageEffect message, CancellationToken cancellationToken)
	{
		bool shouldCancelReply = false;
		string text = (string.IsNullOrWhiteSpace(message.Text) ? "" : promptBuilder.RenderMessage("script generated", chatInstance, message.Character ?? chatInstance.GetMainCharacter(), message.Text));
		if (message.UseStoryWriter)
		{
			if (text == "")
			{
				logger.LogWarning("Empty message text in script effect with story writer");
				return false;
			}
			shouldCancelReply = true;
			await messageDispatcher.GenerateStoryAsync(message.Role, text, message.TriggerReply, message.Narrate, message.GetGenerateConstraintRequest() ?? GenerateConstraintRequest.Empty, cancellationToken);
		}
		else if (message != null && message.Role == ChatMessageRole.Assistant)
		{
			ICharacterInferenceData characterInferenceData = message.Character ?? chatInstance.GetMainCharacter();
			if (((text == null || text.Length != 0) && !(text == "*")) || 1 == 0)
			{
				await messageDispatcher.SendCharacterMessageAsync(characterInferenceData, text, message.TriggerReply, message.Narrate, cancellationToken);
			}
			else
			{
				shouldCancelReply = true;
				chatCommandsManager.EnqueueForeground<IGenerateReplyCommand, GenerateReplyRequest>(new GenerateReplyRequest
				{
					AllowUser = false,
					CharacterId = characterInferenceData.Id,
					TriggerReply = message.TriggerReply,
					Narrate = message.Narrate
				});
			}
		}
		else
		{
			if (text == "")
			{
				logger.LogWarning("Empty message text in script effect for role {Role}", message.Role);
				return false;
			}
			await messageDispatcher.SendScriptedMessageAsync(message.Role, text, message.TriggerReply, message.Narrate, cancellationToken);
		}
		return shouldCancelReply;
	}
}

```

## Voxta.Core.Chats.ScopedServices\GenerateActionInferenceService.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.DependencyInjection;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Prompting;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Abstractions.Services.ActionInference;
using Voxta.Abstractions.Services.ChatAugmentations;
using Voxta.Common;
using Voxta.Core.Chats.Objects.Characters;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.Utils;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.ScopedServices;

public class GenerateActionInferenceService(ChatInstance chatInstance, IUserConnectionTunnel tunnel, IPromptBuilder promptBuilder, IApplyActionEffectsService applyActionEffectsService, IChatAugmentationsServiceInstance augmentations, IDynamicServiceAccessor<IActionInferenceService> actionInferenceAccessor, IChatContinuousStorageService continuousStorageService, IInspectorService inspectorService, IActionScriptsService actionScriptsService, ILogger<GenerateActionInferenceService> logger) : IGenerateActionInferenceService, IAsyncDisposable
{
	private const int MaxIterations = 5;

	private readonly CancellableInvoker<ActionInvocation?> _invoker = new CancellableInvoker<ActionInvocation>();

	public async Task<ActionInvocation?> GenerateActionInference(ActionInferenceType type, ICharacterOrUserData owner, ChatMessageData message, FunctionTiming timing, IScenarioActionInstance[] actions, IScenarioActionInstance[] manualActions, CancellationToken itemAbort)
	{
		if (actions.Length == 0)
		{
			return null;
		}
		IActionInferenceService actionInferenceService = actionInferenceAccessor.GetCurrent();
		if (!actionInferenceService.Enabled)
		{
			return null;
		}
		return await _invoker.RunAsync(async (CancellationToken c) => await GenerateActionInferenceInternal(actionInferenceService, type, owner, message, timing, actions, manualActions, c), itemAbort);
	}

	private async Task<ActionInvocation?> GenerateActionInferenceInternal(IActionInferenceService actionInferenceService, ActionInferenceType type, ICharacterOrUserData owner, ChatMessageData message, FunctionTiming timing, IScenarioActionInstance[] actions, IScenarioActionInstance[] manualActions, CancellationToken cancellationToken)
	{
		ActionInvocation action = null;
		ActionInvocation result;
		await using (continuousStorageService.Begin())
		{
			Queue<List<IScenarioActionInstance>> layersQueue = new Queue<List<IScenarioActionInstance>>((from f in actions
				group f by f.Layer into x
				orderby x.Key
				select x.ToList()).ToList());
			if (layersQueue.Count > 5)
			{
				throw new InvalidOperationException("More than 5 layers in action inference, please optimize your layers.");
			}
			HashSet<string> activatedLayers = new HashSet<string>();
			int iterations = 0;
			while (true)
			{
				if (layersQueue.TryDequeue(out List<IScenarioActionInstance> layer))
				{
					if (!activatedLayers.Add(layer[0].Layer))
					{
						throw new InvalidOperationException("Layer " + layer[0].Layer + " was already activated once, do you have an actions loop?");
					}
					int num = iterations + 1;
					iterations = num;
					if (num > 5)
					{
						throw new InvalidOperationException("More than 5 activations in action inference, do you have an actions loop?");
					}
					List<IScenarioActionInstance> flattenedLayer = new List<IScenarioActionInstance>(layer);
					foreach (IScenarioActionInstance item in layer)
					{
						if (item.Activates.Count > 0 && !item.FlattenCondition.Empty && item.FlattenCondition.Match(chatInstance, message))
						{
							flattenedLayer.AddRange(GetActivatedActions(message, manualActions, item));
							flattenedLayer.Remove(item);
						}
					}
					if (actionScriptsService.IsRegistered("beforeSelectActionInference"))
					{
						string[] names = flattenedLayer.Select((IScenarioActionInstance f) => f.Name).ToArray();
						BeforeSelectActionInferenceActionScriptEvent filtered = new BeforeSelectActionInferenceActionScriptEvent
						{
							Layer = layer[0].Layer,
							Character = owner,
							Message = message,
							Timing = actions[0].Timing,
							Actions = names
						};
						await actionScriptsService.RunEventAsync(filtered, message, owner, cancellationToken);
						if (names.Length != filtered.Actions.Length)
						{
							flattenedLayer = flattenedLayer.Where((IScenarioActionInstance f) => filtered.Actions.Contains(f.Name)).ToList();
							if (flattenedLayer.Count == 0)
							{
								logger.LogInformation("All actions were filtered out in layer {Layer}", layer[0].Layer);
							}
						}
					}
					var (actionInvocation, scenarioActionInstance) = await ProcessOneLayer(actionInferenceService, type, message, flattenedLayer, timing, cancellationToken);
					if (actionInvocation != null)
					{
						action = actionInvocation;
					}
					if (scenarioActionInstance == null)
					{
						continue;
					}
					if (scenarioActionInstance.FinalLayer)
					{
						logger.LogInformation("Final layer reached, stopping action inference (Layer: {Layer})...", layer[0].Layer.NullWhenEmpty() ?? "default");
						result = action;
						break;
					}
					if (scenarioActionInstance.Activates.Count > 0)
					{
						List<IScenarioActionInstance> activatedActions = GetActivatedActions(message, manualActions, scenarioActionInstance);
						if (activatedActions.Count > 0)
						{
							layersQueue.Enqueue(activatedActions);
							action = null;
						}
					}
					continue;
				}
				result = action;
				break;
			}
		}
		return result;
	}

	private List<IScenarioActionInstance> GetActivatedActions(ChatMessageData message, IScenarioActionInstance[] manualActions, IScenarioActionInstance fn)
	{
		return (from f in manualActions
			where fn.Activates.Contains(f.Name)
			where f.Conditions.Match(chatInstance, message)
			select f).ToList();
	}

	private async Task<(ActionInvocation? action, IScenarioActionInstance? fn)> ProcessOneLayer(IActionInferenceService actionInferenceService, ActionInferenceType type, ChatMessageData message, IReadOnlyList<IScenarioActionInstance> actions, FunctionTiming timing, CancellationToken cancellationToken)
	{
		string layerLabel = ((actions[0].Layer == "") ? "default" : actions[0].Layer);
		logger.LogInformation("Doing action inference (Layer: {Layer})...", layerLabel);
		ActionInvocation action;
		try
		{
			action = await actionInferenceService.InferActionAsync(chatInstance, promptBuilder, message, type, actions, cancellationToken);
		}
		catch (Exception exception)
		{
			logger.LogError(exception, "Error doing action inference (Layer: {Layer})...", layerLabel);
			return (action: null, fn: null);
		}
		if (action == null)
		{
			logger.LogInformation("No action inferred (Layer: {Layer})...", layerLabel);
			ServerActionMessage message2 = new ServerActionMessage
			{
				SessionId = chatInstance.SessionId,
				ContextKey = null,
				Layer = actions[0].Layer,
				Role = message.Role,
				Value = "",
				Arguments = null,
				SenderId = message.SenderId,
				ScenarioRole = ((message.Role != ChatMessageRole.Assistant || !(message.SenderId != Guid.Empty)) ? null : chatInstance.Characters.FirstOrDefault((CharacterInstance c) => c.Id == message.SenderId)?.ScenarioRole)
			};
			tunnel.Send(message2);
			return (action: null, fn: null);
		}
		IScenarioActionInstance fn = actions.FirstOrDefault((IScenarioActionInstance f) => f.Name == action.Name);
		if (fn == null)
		{
			logger.LogError("Unexpected function name {Action} in layer {Layer}, this is probably an error in the action inference implementation", action.Name, layerLabel);
			return (action: action, fn: null);
		}
		if (action.Arguments.Length != 0)
		{
			logger.LogInformation("Inferred {Role} action (Layer: {Layer}): {Action}({Arguments})", action.Role, layerLabel, action.Name, string.Join(", ", action.Arguments.Select((ActionInvocationArgument a) => a.Name + ": \"" + a.Value + "\"")));
		}
		else
		{
			logger.LogInformation("Inferred {Role} action (Layer: {Layer}): {Action}", action.Role, layerLabel, action.Name);
		}
		ServerActionMessage serverActionMessage = new ServerActionMessage
		{
			SessionId = chatInstance.SessionId,
			ContextKey = fn.ContextKey,
			Layer = fn.Layer,
			Role = action.Role,
			Value = action.Name,
			Arguments = ((action.Arguments.Length != 0) ? action.Arguments : null),
			SenderId = message.SenderId,
			ScenarioRole = ((message.Role != ChatMessageRole.Assistant || !(message.SenderId != Guid.Empty)) ? null : chatInstance.Characters.FirstOrDefault((CharacterInstance c) => c.Id == message.SenderId)?.ScenarioRole)
		};
		inspectorService.ActionExecuted(message.LocalId, serverActionMessage, timing);
		await applyActionEffectsService.ApplyActionEffects(message, fn, action, cancellationToken);
		if (!(await augmentations.TryHandleActionInference(message, serverActionMessage, cancellationToken)))
		{
			tunnel.Send(serverActionMessage);
		}
		return (action: action, fn: fn);
	}

	public ValueTask DisposeAsync()
	{
		return _invoker.DisposeAsync();
	}
}

```

## Voxta.Core.Chats.ScopedServices\GenerateReplyWithSpeechService.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.DependencyInjection;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Services.TextGen;
using Voxta.Abstractions.Services.VisionCapture;
using Voxta.Abstractions.TextGenerationStreaming;
using Voxta.Abstractions.Utils;
using Voxta.Common;
using Voxta.Core.Chats.Sessions;
using Voxta.Core.Chats.Utils;
using Voxta.Core.Speech;
using Voxta.Core.TextGenerationStreaming;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.ScopedServices;

public class GenerateReplyWithSpeechService(IChatInferenceData chatInstance, IChatSessionGeneratingState generatingState, ITextGenerationStreamingPipe textGenerationStreamingPipe, ITranscriptionService transcriptionService, IChatMessageFactory chatMessageFactory, IChatConfigurationService chatConfigurationService, IDynamicServiceAccessor<ISpeechGenerator> speechGeneratorAccessor, IHandleAttachmentsService handleAttachmentsService, ILogger<GenerateReplyWithSpeechService> logger) : IGenerateReplyWithSpeechService
{
	public async Task<ChatMessageData?> GenerateReplyWithSpeechAsync(ICharacterInferenceData character, IReplyChunksHandler replyChunksHandler, Guid messageId, string? replyTo, ChatMessageRole role, Func<CancellationToken, IAsyncEnumerable<LLMOutputToken>> generate, int maxSentences, bool? allowMultipleLines, CancellationToken sessionAbort, CancellationToken itemAbort)
	{
		TextGenerationResult generated = null;
		ChatMessageData message = null;
		try
		{
			itemAbort.ThrowIfCancellationRequested();
			ChatMessageSpeechToken chatMessageSpeechToken = new ChatMessageSpeechToken
			{
				SessionId = chatInstance.SessionId,
				MessageId = messageId
			};
			ISpeechGenerator speechGenerator = speechGeneratorAccessor.GetCurrent();
			ISpeechGeneratorPlaybackQueue playbackQueue = speechGenerator.CreateSpeechQueue(chatMessageSpeechToken, (role == ChatMessageRole.Assistant && speechGenerator.Enabled && character.ThinkingSpeechEntries.Length != 0) ? character.ThinkingSpeechEntries[Random.Shared.Next(character.ThinkingSpeechEntries.Length)] : null);
			generatingState.PlaybackSpeechBegin(playbackQueue);
			List<Task> audioProcessorTasks = new List<Task>();
			generated = await RetryUtil.RetryOnErrorOrEmptyAsync(logger, async delegate(CancellationToken c)
			{
				TextGenPreprocessingSettings preprocessingSettings = ((chatInstance.GetChatStyle(character.ChatStyle) == ChatStyles.Assistant) ? new TextGenPreprocessingSettings
				{
					MaxSentences = 0,
					AllowMultipleLines = true,
					MaxWordsInAsterisks = -1,
					TextProcessing = TextProcessingOptions.None
				} : chatConfigurationService.CreateTextGenPreprocessingSettings(maxSentences, allowMultipleLines));
				var (output, images2, item) = await textGenerationStreamingPipe.ProcessReplyAsync(chatInstance, character, speechGenerator, playbackQueue, generate(c), messageId, replyTo, replyChunksHandler, preprocessingSettings, c);
				audioProcessorTasks.Add(item);
				return new TextGenerationResult(output, images2);
			}, itemAbort);
			IReplyChunksHandler closureReplyChunksHandler = replyChunksHandler;
			if (logger.IsEnabled(LogLevel.Debug))
			{
				logger.LogDebug("Waiting for {Tasks} audio processor tasks to complete (states: {States})...", audioProcessorTasks.Count, string.Join(", ", audioProcessorTasks.Select((Task x) => x.Status.ToString())));
			}
			Task.WhenAll(audioProcessorTasks).ContinueWith((Func<Task, Task>)async delegate
			{
				try
				{
					await Task.Delay(50, sessionAbort);
				}
				catch (OperationCanceledException)
				{
				}
				closureReplyChunksHandler.Dispose();
			}, sessionAbort).Forget(logger);
			logger.LogDebug("Audio processor tasks complete");
		}
		catch (TextGenerationStreamingPipeCanceledException ex)
		{
			try
			{
				if (!ex.AudioProcessorTask.IsCompleted)
				{
					logger.LogDebug("Waiting for audio processor task to complete after canceled streaming...");
					await ex.AudioProcessorTask;
					logger.LogDebug("Audio processor task complete");
				}
			}
			catch (OperationCanceledException)
			{
			}
			generated = TextGenerationResult.Empty;
			if (!string.IsNullOrEmpty(ex.Output))
			{
				message = await SaveMessageAsync(character, messageId, role, replyChunksHandler, ex.Output, sessionAbort);
				replyChunksHandler.MessageSaved(message);
				logger.LogInformation("{Character} (Interrupted): {Text}", character.Name, message.Value.Excerpt(chatInstance.Ephemeral));
			}
			replyChunksHandler.Dispose();
		}
		catch (OperationCanceledException)
		{
			return null;
		}
		catch
		{
			await transcriptionService.StartTranscriptionAsync("After error", sessionAbort);
			throw;
		}
		finally
		{
			if (generated != null && (!string.IsNullOrEmpty(generated.Output) || generated.Images.Count > 0))
			{
				message = await SaveMessageAsync(character, messageId, role, replyChunksHandler, generated.Output, sessionAbort);
				logger.LogInformation("{Sender}: {Text}", (role == ChatMessageRole.Assistant) ? character.Name : ((object)role), generated.Output.Excerpt(chatInstance.Ephemeral));
				IReadOnlyList<IImage> images = generated.Images;
				if (images != null && images.Count > 0)
				{
					await handleAttachmentsService.AttachImagesAsync(message, character, generated.Images, describe: false, sessionAbort);
					logger.LogInformation("Images ({ImagesCount}) attached to message {MessageId}", generated.Images.Count, messageId);
				}
				replyChunksHandler.MessageSaved(message);
			}
		}
		return message;
	}

	private async Task<ChatMessageData> SaveMessageAsync(ICharacterInferenceData character, Guid messageId, ChatMessageRole role, IReplyChunksHandler replyChunksHandler, string text, CancellationToken cancellationToken)
	{
		ChatMessageData chatMessageData;
		if (role == ChatMessageRole.Assistant)
		{
			IChatMessageFactory chatMessageFactory = chatMessageFactory;
			long? chatTime = replyChunksHandler.ChatTime;
			CancellationToken cancellationToken2 = cancellationToken;
			chatMessageData = await chatMessageFactory.CreateCharacterMessageAsync(messageId, character, text, chatTime, null, cancellationToken2);
		}
		else
		{
			IChatMessageFactory chatMessageFactory2 = chatMessageFactory;
			long? chatTime2 = replyChunksHandler.ChatTime;
			CancellationToken cancellationToken2 = cancellationToken;
			chatMessageData = await chatMessageFactory2.CreateMessageAsync(messageId, role, text, chatTime2, null, cancellationToken2);
		}
		ChatMessageData message = chatMessageData;
		await chatMessageFactory.InsertMessageInHistoryAndSaveAsync(message, cancellationToken);
		return message;
	}
}

```

## Voxta.Core.Chats.ScopedServices\HandleAttachmentsService.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Assets;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.DependencyInjection;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Prompting;
using Voxta.Abstractions.Services.ComputerVision;
using Voxta.Abstractions.Services.TextGen;
using Voxta.Abstractions.Services.VisionCapture;
using Voxta.Abstractions.Tokenizers;
using Voxta.Abstractions.Utils;
using Voxta.Common;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.ScopedServices;

public class HandleAttachmentsService(ChatInstance chatInstance, IResourceAssetsManager resourceAssetsManager, IPromptBuilder promptBuilder, ISpecialMessageFormatter specialMessageFormatter, IChatMessageFactory chatMessageFactory, ITunnelMessagesService tunnelMessagesService, IDynamicServiceAccessor<IComputerVisionService> computerVisionAccessor, IDynamicServiceAccessor<ITokenizer> tokenizerAccessor, IDynamicServiceAccessor<ITextGenService> textGenServiceAccessor, ILogger<HandleAttachmentsService> logger) : IHandleAttachmentsService
{
	public async Task AttachAttachmentsAsync(ChatMessageData message, ICharacterInferenceData? character, ClientSendMessageAttachment[] attachments, CancellationToken cancellationToken)
	{
		if (attachments.Length == 0)
		{
			return;
		}
		List<IImage> list = new List<IImage>();
		foreach (ClientSendMessageAttachment clientSendMessageAttachment in attachments)
		{
			if (!(clientSendMessageAttachment is Base64UrlClientSendMessageAttachment base64UrlClientSendMessageAttachment))
			{
				if (!(clientSendMessageAttachment is ObjectClientSendMessageAttachment<IImage> objectClientSendMessageAttachment))
				{
					throw new NotSupportedException("Attachment type " + clientSendMessageAttachment.GetType().Name + " is not supported");
				}
				list.Add(objectClientSendMessageAttachment.Data);
			}
			else
			{
				(byte[], string) tuple = Base64UrlHelper.FromBase64UrlWithContentType(base64UrlClientSendMessageAttachment.Base64Url);
				list.Add(new BytesImage(tuple.Item2, tuple.Item1, clientSendMessageAttachment.Source)
				{
					FileName = clientSendMessageAttachment.FileName,
					Label = clientSendMessageAttachment.Label
				});
			}
		}
		if (list.Count != 0)
		{
			await AttachImagesAsync(message, character, list, describe: true, cancellationToken);
		}
	}

	public async Task AttachImagesAsync(ChatMessageData message, ICharacterInferenceData? character, IEnumerable<IImage> images, bool describe = true, CancellationToken cancellationToken = default(CancellationToken))
	{
		Guid messageId = message.LocalId;
		List<ChatMessageDataAttachment> assets = new List<ChatMessageDataAttachment>();
		IResourceUserAssetsContainer assetsContainer = resourceAssetsManager.ManageContainer<Chat>(chatInstance.UserId, chatInstance.ChatId).ManageAssets();
		try
		{
			foreach (IImage image2 in images)
			{
				ChatMessageDataAttachment dataAttachment = new ChatMessageDataAttachment
				{
					Id = Guid.NewGuid(),
					ContentType = image2.ContentType,
					Source = image2.Source,
					Image = image2,
					FileName = image2.FileName,
					Label = image2.Label,
					Description = image2.Description
				};
				if (!chatInstance.Ephemeral)
				{
					string assetPath = dataAttachment.GetAssetPath(messageId);
					await assetsContainer.WriteAsset(assetPath, image2.ToBytes(), cancellationToken);
				}
				assets.Add(dataAttachment);
			}
			message.Attachments = assets.ToArray();
			if (!chatInstance.Ephemeral)
			{
				await chatMessageFactory.UpdateMessageAsync(message, cancellationToken);
			}
		}
		catch
		{
			foreach (ChatMessageDataAttachment item in assets)
			{
				assetsContainer.DeleteAsset(item.GetAssetPath(messageId), cancellationToken);
			}
			throw;
		}
		tunnelMessagesService.SendMessageUpdated(message);
		if (!describe || textGenServiceAccessor.GetCurrent().CanProcessAttachments())
		{
			return;
		}
		IComputerVisionService computerVision = computerVisionAccessor.GetCurrent();
		if (!computerVision.Enabled)
		{
			logger.LogWarning("Computer vision is not configured, cannot process attachments.");
			return;
		}
		bool described = false;
		ITokenizer tokenizer = tokenizerAccessor.GetCurrent();
		foreach (ChatMessageDataAttachment dataAttachment in assets)
		{
			if (dataAttachment.Description != null)
			{
				described = true;
				ChatMessageDataAttachment chatMessageDataAttachment = dataAttachment;
				int? descriptionTokens = chatMessageDataAttachment.DescriptionTokens;
				descriptionTokens.GetValueOrDefault();
				if (!descriptionTokens.HasValue)
				{
					chatMessageDataAttachment.DescriptionTokens = await tokenizer.CountTokensAsync(dataAttachment.Description, cancellationToken);
				}
				continue;
			}
			IImage image = dataAttachment.Image;
			if (image == null)
			{
				continue;
			}
			if (image.Description != null)
			{
				described = true;
				dataAttachment.Description = image.Description;
				ChatMessageDataAttachment chatMessageDataAttachment = dataAttachment;
				int? descriptionTokens = chatMessageDataAttachment.DescriptionTokens;
				descriptionTokens.GetValueOrDefault();
				if (!descriptionTokens.HasValue)
				{
					chatMessageDataAttachment.DescriptionTokens = await tokenizer.CountTokensAsync(image.Description, cancellationToken);
				}
			}
			else
			{
				string text = await DescribeImageAsync(computerVision, character, image, cancellationToken);
				if (text != null)
				{
					described = true;
					image.Description = text;
					dataAttachment.Description = text;
					ChatMessageDataAttachment chatMessageDataAttachment = dataAttachment;
					chatMessageDataAttachment.DescriptionTokens = await tokenizer.CountTokensAsync(text, cancellationToken);
				}
			}
		}
		if (described)
		{
			if (!chatInstance.Ephemeral)
			{
				await chatMessageFactory.UpdateMessageAsync(message, cancellationToken);
			}
			tunnelMessagesService.SendMessageUpdated(message);
		}
	}

	private async Task<string?> DescribeImageAsync(IComputerVisionService computerVision, ICharacterInferenceData? character, IImage image, CancellationToken cancellationToken)
	{
		logger.LogInformation("Describing image...");
		string text = (await computerVision.DescribeAsync(chatInstance, character ?? chatInstance.GetMainCharacter(), promptBuilder, image, cancellationToken)).StripUnfinishedSentence();
		if (string.IsNullOrWhiteSpace(text))
		{
			logger.LogWarning("Failed to describe image (empty result)");
			return null;
		}
		string text2 = specialMessageFormatter.AttachedImage(image.Source, text, chatInstance.User.Name, character?.Name ?? chatInstance.GetMainCharacter().Name);
		if (string.IsNullOrWhiteSpace(text2))
		{
			logger.LogWarning("Failed to format image description message (empty result)");
			return null;
		}
		return text2;
	}
}

```

## Voxta.Core.Chats.ScopedServices\IActionScriptsService.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Abstractions.Services.ActionInference;

namespace Voxta.Core.Chats.ScopedServices;

public interface IActionScriptsService
{
	Task<ActionScriptResult> RunScriptAsync(IActionScript script, ChatMessageData? message, ICharacterOrUserData owner, ActionInvocation? action, CancellationToken cancellationToken);

	Task RunEventAsync(IActionScriptEvent ev, ChatMessageData? message, ICharacterOrUserData owner, CancellationToken cancellationToken);

	Task RunAfterSpeechAsync(CancellationToken cancellationToken);

	bool IsRegistered(string eventName);
}

```

## Voxta.Core.Chats.ScopedServices\IApplyActionEffectsService.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Services.ActionInference;
using Voxta.Core.Chats.Objects.Characters;

namespace Voxta.Core.Chats.ScopedServices;

public interface IApplyActionEffectsService
{
	Task ApplyActionEffects(ChatMessageData message, IScenarioActionInstance fn, ActionInvocation action, CancellationToken cancellationToken);

	Task<ActionEffectResult> ApplyActionEffects(IActionEffectInstance effect, ChatMessageData? message, CharacterInstance character, ActionInvocation? action, CancellationToken cancellationToken);
}

```

## Voxta.Core.Chats.ScopedServices\IChatAugmentationsApiService.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects.Chats;

namespace Voxta.Core.Chats.ScopedServices;

public interface IChatAugmentationsApiService
{
	Task SetFlags(SetFlagRequest[] flags, CancellationToken cancellationToken);
}

```

## Voxta.Core.Chats.ScopedServices\IChatConfigurationService.cs
```csharp
using Voxta.Abstractions.Services.TextGen;

namespace Voxta.Core.Chats.ScopedServices;

public interface IChatConfigurationService
{
	bool SpeechEnabled { get; }

	TextGenPreprocessingSettings CreateTextGenPreprocessingSettings(int maxSentences, bool? allowMultipleLines);
}

```

## Voxta.Core.Chats.ScopedServices\IChatContextService.cs
```csharp
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Scripting.ActionScripts;

namespace Voxta.Core.Chats.ScopedServices;

public interface IChatContextService
{
	void ApplyFlags(ChatMessageData? message, SetFlagRequest[] flags);

	void ApplyEnableRoles(IEnumerable<ScenarioRoleEffect> roleChanges);

	void ApplyEnableRoles(Dictionary<string, bool>? roles);

	void ApplyVariables(Dictionary<string, object?> variables);

	void ExpireFlagsAsync(int conversationIndex);

	ValueTask ExpireFlagsAsync(CancellationToken cancellationToken);

	Task AssignAllContextActionsAsync(string contextKey, IScenarioActionInstance[] actions, CancellationToken cancellationToken);

	Task AssignAllContextEventsAsync(string contextKey, IScenarioEventInstance[] events, CancellationToken cancellationToken);

	Task ImportAllContextByContextKey(string contextKey, IContextDefinitionInstance[] contexts, CancellationToken cancellationToken);

	Task SetContextAsync(string contextKey, IContextDefinitionInstance context, CancellationToken cancellationToken);
}

```

## Voxta.Core.Chats.ScopedServices\IChatContinuousStorageService.cs
```csharp
using System;

namespace Voxta.Core.Chats.ScopedServices;

public interface IChatContinuousStorageService
{
	IAsyncDisposable Begin();

	void ChatUpdated();

	void ContextUpdated();
}

```

## Voxta.Core.Chats.ScopedServices\IChatFlowService.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Model;

namespace Voxta.Core.Chats.ScopedServices;

public interface IChatFlowService
{
	void PreloadChatFlow(ChatMessageData previousMessage, bool allowUser, CancellationToken cancellationToken);

	Task<ICharacterInstanceEditable?> GetNextCharacterAsync(ChatMessageData previousMessage, bool allowUser, CancellationToken cancellationToken);

	Task ForceChatFlowAsync(ICharacterOrUserData resultChatFlow);

	void ClearChatFlow();

	bool DequeueForcedUserAsync();

	bool TryGetForced(out ICharacterInstanceEditable? o);
}

```

## Voxta.Core.Chats.ScopedServices\IChatStartedMessageBuilderService.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.ScopedServices;

public interface IChatStartedMessageBuilderService
{
	Task<ServerChatStartedMessage> CreateServerChatStartedMessageAsync(CancellationToken cancellationToken);
}

```

## Voxta.Core.Chats.ScopedServices\IChatSummarizationPassService.cs
```csharp
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Core.Chats.ScopedServices;

public interface IChatSummarizationPassService
{
	void ScheduleSummarize(bool force, CancellationToken cancellationToken);

	Task SummarizeNowAsync(bool force, bool all, CancellationToken cancellationToken);
}

```

## Voxta.Core.Chats.ScopedServices\ICommandModeService.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.ScopedServices;

public interface ICommandModeService
{
	Task ConfigureCommandModeAsync(CancellationToken cancellationToken);

	ValueTask<bool> TryHandle(ClientSendMessage clientSendMessage, CancellationToken cancellationToken);
}

```

## Voxta.Core.Chats.ScopedServices\IContinuationService.cs
```csharp
using System;
using System.Threading;
using Voxta.Abstractions.Model;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.ScopedServices;

public interface IContinuationService
{
	int ContinuationCounter { get; }

	void CancelContinuation();

	void ScheduleContinuation(ChatMessageData? message, bool allowUser);

	void HoldForSpeech();

	ChatFlowStates SpeechComplete(Guid messageId, CancellationToken cancellationToken);
}

```

## Voxta.Core.Chats.ScopedServices\ICustomMessageService.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Scripting.ActionScripts;

namespace Voxta.Core.Chats.ScopedServices;

public interface ICustomMessageService
{
	Task<bool> SendCustomMessageAsync(ScenarioMessageEffect message, CancellationToken cancellationToken);
}

```

## Voxta.Core.Chats.ScopedServices\IGenerateActionInferenceService.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Services.ActionInference;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.ScopedServices;

public interface IGenerateActionInferenceService
{
	Task<ActionInvocation?> GenerateActionInference(ActionInferenceType type, ICharacterOrUserData owner, ChatMessageData message, FunctionTiming timing, IScenarioActionInstance[] actions, IScenarioActionInstance[] manualActions, CancellationToken itemAbort);
}

```

## Voxta.Core.Chats.ScopedServices\IGenerateReplyWithSpeechService.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Services.TextGen;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.ScopedServices;

public interface IGenerateReplyWithSpeechService
{
	Task<ChatMessageData?> GenerateReplyWithSpeechAsync(ICharacterInferenceData character, IReplyChunksHandler replyChunksHandler, Guid messageId, string? replyTo, ChatMessageRole role, Func<CancellationToken, IAsyncEnumerable<LLMOutputToken>> generate, int maxSentences, bool? allowMultipleLines, CancellationToken sessionAbort, CancellationToken itemAbort);
}

```

## Voxta.Core.Chats.ScopedServices\IHandleAttachmentsService.cs
```csharp
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Services.VisionCapture;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.ScopedServices;

public interface IHandleAttachmentsService
{
	Task AttachAttachmentsAsync(ChatMessageData message, ICharacterInferenceData? character, ClientSendMessageAttachment[] attachments, CancellationToken cancellationToken);

	Task AttachImagesAsync(ChatMessageData message, ICharacterInferenceData? character, IEnumerable<IImage> images, bool describe = true, CancellationToken cancellationToken = default(CancellationToken));
}

```

## Voxta.Core.Chats.ScopedServices\IImmediateMessagesService.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.ScopedServices;

public interface IImmediateMessagesService
{
	ValueTask WriteNowAsync(ChatMessageRole role, string text, CancellationToken cancellationToken);
}

```

## Voxta.Core.Chats.ScopedServices\IInspectorService.cs
```csharp
using System;
using System.Collections.Generic;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.ScopedServices;

public interface IInspectorService
{
	void EnableInspector(bool inspectMessageEnabled);

	void ScriptExecuted(Guid? triggeredByMessageId, string name, IReadOnlyList<ActionScriptLog> logs);

	void ScenarioEventExecuted(Guid? triggeredByMessageId, IScenarioEventInstance e, FunctionTiming timing);

	void ActionExecuted(Guid? triggeredByMessageId, ServerActionMessage a, FunctionTiming timing);

	void ScriptExecuted(Guid? triggeredByMessageId, string name, IActionScriptResult result);
}

```

## Voxta.Core.Chats.ScopedServices\IMemoryMaintenanceService.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Services.Summarization;
using Voxta.Core.Chats.Objects.Characters;

namespace Voxta.Core.Chats.ScopedServices;

public interface IMemoryMaintenanceService
{
	Task IntegrateMemoriesAsync(CharacterInstance character, IReadOnlyList<MemoryExtractResult> extractedMemories, Guid lastMessageId, CancellationToken cancellationToken);
}

```

## Voxta.Core.Chats.ScopedServices\IMessageDispatcherService.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.ScopedServices;

public interface IMessageDispatcherService
{
	ValueTask SendCharacterMessageAsync(ICharacterInferenceData character, string text, bool? triggerReply, bool? narrate, CancellationToken cancellationToken);

	ValueTask SendScriptedMessageAsync(ChatMessageRole role, string text, bool? triggerReply, bool? narrate, CancellationToken cancellationToken);

	Task DispatchMessage(SimpleMessageData message, CancellationToken cancellationToken);

	ValueTask GenerateStoryAsync(ChatMessageRole role, string text, bool? triggerReply, bool? narrate, GenerateConstraintRequest generateConstraintRequest, CancellationToken cancellationToken);
}

```

## Voxta.Core.Chats.ScopedServices\ImmediateMessagesService.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Utils;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.ScopedServices;

public class ImmediateMessagesService(ChatInstance chatInstance, ITunnelMessagesService tunnelMessagesService, IChatMessageFactory chatMessageFactory) : IImmediateMessagesService
{
	public async ValueTask WriteNowAsync(ChatMessageRole role, string text, CancellationToken cancellationToken)
	{
		if (role == ChatMessageRole.Event)
		{
			throw new InvalidOperationException("Event requests cannot be sent on the input queue");
		}
		if (string.IsNullOrWhiteSpace(text) || text == "*")
		{
			throw new InvalidOperationException("immediate message cannot be empty");
		}
		(Guid?, string) tuple;
		switch (role)
		{
		case ChatMessageRole.Assistant:
			tuple = (chatInstance.GetMainCharacter().Id, chatInstance.GetMainCharacter().Name);
			break;
		case ChatMessageRole.User:
			tuple = (chatInstance.User.Id, chatInstance.User.Name);
			break;
		case ChatMessageRole.Event:
		case ChatMessageRole.Note:
			if (chatInstance.Narrator.Enabled)
			{
				tuple = (chatInstance.Narrator.Id, null);
				break;
			}
			goto default;
		default:
			tuple = (null, null);
			break;
		}
		(Guid?, string) tuple2 = tuple;
		ChatMessageData message = await chatMessageFactory.CreateCustomMessageAsync(chatMessageFactory.CreateMessageId(), role, text, tuple2.Item1, tuple2.Item2, null, cancellationToken);
		await chatMessageFactory.InsertMessageInHistoryAndSaveAsync(message, cancellationToken);
		tunnelMessagesService.SendMessageUpdated(message);
	}
}

```

## Voxta.Core.Chats.ScopedServices\InspectorService.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.ScopedServices;

public class InspectorService(ChatInstance chat, IUserConnectionTunnel tunnel, TimeProvider timeProvider) : IInspectorService
{
	public void EnableInspector(bool inspectMessageEnabled)
	{
		if (inspectMessageEnabled != chat.InspectorEnabled)
		{
			chat.InspectorEnabled = inspectMessageEnabled;
			tunnel.Send(new ServerInspectorEnabledMessage
			{
				SessionId = chat.SessionId,
				Enabled = chat.InspectorEnabled,
				Timestamp = timeProvider.GetUtcNow()
			});
		}
	}

	public void ScriptExecuted(Guid? triggeredByMessageId, string name, IReadOnlyList<ActionScriptLog> logs)
	{
		if (chat.InspectorEnabled)
		{
			tunnel.Send(new ServerInspectorScriptExecutedMessage
			{
				SessionId = chat.SessionId,
				Timestamp = timeProvider.GetUtcNow(),
				TriggeredByMessageId = triggeredByMessageId,
				Name = name,
				Logs = ConvertLogs(logs)
			});
		}
	}

	public void ScriptExecuted(Guid? triggeredByMessageId, string name, IActionScriptResult result)
	{
		if (chat.InspectorEnabled)
		{
			tunnel.Send(new ServerInspectorScriptExecutedMessage
			{
				SessionId = chat.SessionId,
				Timestamp = timeProvider.GetUtcNow(),
				TriggeredByMessageId = triggeredByMessageId,
				Name = name,
				Logs = ConvertLogs(result.Logs)
			});
		}
	}

	public void ScenarioEventExecuted(Guid? triggeredByMessageId, IScenarioEventInstance e, FunctionTiming timing)
	{
		if (chat.InspectorEnabled)
		{
			tunnel.Send(new ServerInspectorScenarioEventExecutedMessage
			{
				SessionId = chat.SessionId,
				Timestamp = timeProvider.GetUtcNow(),
				TriggeredByMessageId = triggeredByMessageId,
				Name = e.Name,
				Timing = timing
			});
		}
	}

	public void ActionExecuted(Guid? triggeredByMessageId, ServerActionMessage a, FunctionTiming timing)
	{
		if (chat.InspectorEnabled)
		{
			tunnel.Send(new ServerInspectorActionExecutedMessage
			{
				SessionId = chat.SessionId,
				Timestamp = timeProvider.GetUtcNow(),
				TriggeredByMessageId = triggeredByMessageId,
				Layer = a.Layer,
				Name = a.Value,
				Timing = timing
			});
		}
	}

	private static IReadOnlyList<ServerInspectorLog> ConvertLogs(IReadOnlyList<ActionScriptLog> logs)
	{
		return logs.Select((ActionScriptLog l) => new ServerInspectorLog
		{
			Level = l.Level.ToString(),
			Message = l.Message
		}).ToArray();
	}
}

```

## Voxta.Core.Chats.ScopedServices\IProcessScenarioEventService.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Model;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.ScopedServices;

public interface IProcessScenarioEventService
{
	Task<(IScenarioEventInstance? Event, bool ShouldCancelReply)> ProcessScenarioEvent(ChatMessageData? previousMessage, FunctionTiming timing, string? trigger, CancellationToken cancellationToken);
}

```

## Voxta.Core.Chats.ScopedServices\IReplyChunksHandler.cs
```csharp
using System;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Services.TextToSpeech;
using Voxta.Abstractions.TextGenerationStreaming;

namespace Voxta.Core.Chats.ScopedServices;

public interface IReplyChunksHandler : IDisposable
{
	long ChatTime { get; }

	void Generating(string? thinkingSpeechUrl, bool isNarration = false);

	ValueTask StartAsync();

	void Thinking(string chunk);

	void Chunk(TextChunk chunk, string? url, TextToSpeechAudioSettings? audioSettings = null);

	Task NotifyAudioIncoming();

	void End();

	void Cancel();

	void MessageSaved(ChatMessageData message);
}

```

## Voxta.Core.Chats.ScopedServices\IReplyChunksService.cs
```csharp
using System;
using Voxta.Abstractions.Model;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.ScopedServices;

public interface IReplyChunksService
{
	IReplyChunksHandler CreateReplyChunksHandler(Guid characterId, Guid messageId, ChatMessageRole role);

	IReplyChunksHandler CreateReplyChunksHandler(ChatMessageData message);
}

```

## Voxta.Core.Chats.ScopedServices\IScriptedSpeechService.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Model;

namespace Voxta.Core.Chats.ScopedServices;

public interface IScriptedSpeechService
{
	Task SendReusableReplyWithSpeechAsync(string? cacheKeyPrefix, ICharacterInferenceData character, ChatMessageData message);

	Task SendReplyWithSpeechAsync(ICharacterInferenceData character, ChatMessageData message);

	Task SendReplyWithSpeechPostGeneratedEvent(string? reusableSpeechId, ChatMessageData message, ICharacterInferenceData character, IReplyChunksHandler replyChunksHandler, CancellationToken cancellationToken = default(CancellationToken));
}

```

## Voxta.Core.Chats.ScopedServices\ITranscriptionService.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Core.Chats.ScopedServices;

public interface ITranscriptionService : IAsyncDisposable
{
	Task StartTranscriptionAsync(string reason, CancellationToken cancellationToken = default(CancellationToken));

	Task PauseTranscriptionAsync(string reason, CancellationToken cancellationToken = default(CancellationToken));

	Task StopTranscriptionAsync(string reason, CancellationToken cancellationToken = default(CancellationToken));
}

```

## Voxta.Core.Chats.ScopedServices\ITunnelMessagesService.cs
```csharp
using Voxta.Abstractions.Model;

namespace Voxta.Core.Chats.ScopedServices;

public interface ITunnelMessagesService
{
	void SendMessageUpdated(ChatMessageData message);

	void SendMessageDeleted(ChatMessageData message);
}

```

## Voxta.Core.Chats.ScopedServices\IUpdateContextService.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.ScopedServices;

public interface IUpdateContextService
{
	ValueTask HandleUpdateContextMessageAsync(IUpdateContextMessage updateContextMessage, CancellationToken cancellationToken);
}

```

## Voxta.Core.Chats.ScopedServices\MemoryMaintenanceService.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.DependencyInjection;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Prompting;
using Voxta.Abstractions.Repositories;
using Voxta.Abstractions.Services.Memory;
using Voxta.Abstractions.Services.Summarization;
using Voxta.Abstractions.Services.TextGen;
using Voxta.Abstractions.Tokenizers;
using Voxta.Common;
using Voxta.Core.Chats.Objects.Characters;
using Voxta.Core.Chats.Objects.Chats;

namespace Voxta.Core.Chats.ScopedServices;

public class MemoryMaintenanceService(ChatInstance chatInstance, IUnitOfWorkFactory unitOfWorkFactory, IDynamicServiceAccessor<ITextGenService> textGenAccessor, IDynamicServiceAccessor<ISummarizationService> summarizationAccessor, IPromptBuilder promptBuilder, TimeProvider timeProvider, ILogger<MemoryMaintenanceService> logger) : IMemoryMaintenanceService
{
	public async Task IntegrateMemoriesAsync(CharacterInstance character, IReadOnlyList<MemoryExtractResult> extractedMemories, Guid lastMessageId, CancellationToken cancellationToken)
	{
		if (extractedMemories.Count == 0)
		{
			return;
		}
		IMemoryProviderInstance memoryProviderInstance = character.Memory.MemoryProviderInstance;
		if (!memoryProviderInstance.Enabled)
		{
			return;
		}
		MemoryBook memoryBook = character.Memory.PrivateMemoryBook;
		if (memoryBook == null)
		{
			return;
		}
		ITokenizer tokenizer = textGenAccessor.GetCurrent().Tokenizer;
		ISummarizationService summarizationService = summarizationAccessor.GetCurrent();
		if (!summarizationService.Enabled)
		{
			return;
		}
		logger.LogInformation("Integrating {MemoriesCount} memories to {Character}'s memory book...", extractedMemories.Count, character.Name);
		await using IUnitOfWork uow = unitOfWorkFactory.CreateUnitOfWork();
		List<MemoryItem> newMemoryItems = (from memoryExtractResult in extractedMemories
			where !string.IsNullOrEmpty(memoryExtractResult.Text) && memoryBook.Items.All((MemoryItem i) => i.Text != memoryExtractResult.Text)
			select new MemoryItem
			{
				Id = Guid.NewGuid(),
				Text = memoryExtractResult.Text,
				CreatedAt = timeProvider.GetLocalNow(),
				SourceChatId = chatInstance.ChatId
			}).ToList();
		if (newMemoryItems.Count == 0)
		{
			return;
		}
		List<MemoryItem> list = new List<MemoryItem>();
		foreach (MemoryItem x in newMemoryItems)
		{
			if ((from i in memoryBook.Items
				where !string.IsNullOrEmpty(i.Text)
				select (Item: i, Distance: i.Text.GetLevenshteinDistance(x.Text)) into i
				select (Item: i.Item, Distance: (float)i.Distance.Distance / (float)i.Distance.MaxDistance)).FirstOrDefault(((MemoryItem Item, float Distance) i) => (double)i.Distance < 0.05).Item != null)
			{
				list.Add(x);
			}
		}
		foreach (MemoryItem item in list)
		{
			newMemoryItems.Remove(item);
		}
		IEnumerable<MemoryItem> first = from memorySearchResult in await memoryProviderInstance.SearchAsync(extractedMemories.Select((MemoryExtractResult memoryExtractResult) => memoryExtractResult.Text).ToArray(), cancellationToken)
			select memorySearchResult.Memory into memoryRef
			select memoryBook.Items.FirstOrDefault((MemoryItem i) => memoryRef.Id == i.Id) into memoryItem3
			where memoryItem3 != null
			select memoryItem3;
		MemoryMergeResult memoryMergeResult = ((memoryBook.Items.Count <= 0) ? new MemoryMergeResult
		{
			Removed = Array.Empty<MemoryItem>(),
			Updated = Array.Empty<MemoryMergeUpdate>()
		} : (await summarizationService.MergeMemoriesAsync(chatInstance, character, promptBuilder, first.Concat(newMemoryItems).ToArray(), cancellationToken)));
		MemoryMergeResult mergeResult = memoryMergeResult;
		MemoryItem[] removed = mergeResult.Removed;
		foreach (MemoryItem memoryItem in removed)
		{
			newMemoryItems.Remove(memoryItem);
			memoryItem.Deleted = true;
			memoryItem.DeletedAt = timeProvider.GetLocalNow();
		}
		List<MemoryItem> updatedMemoryItems = new List<MemoryItem>();
		MemoryMergeUpdate[] updated = mergeResult.Updated;
		foreach (MemoryMergeUpdate updated2 in updated)
		{
			MemoryItem memoryItem2 = memoryBook.Items.FirstOrDefault((MemoryItem memoryItem3) => memoryItem3.Id == updated2.Item.Id);
			if (memoryItem2 != null)
			{
				memoryItem2.Text = updated2.Text;
				memoryItem2.LastUpdated = timeProvider.GetLocalNow();
				updatedMemoryItems.Add(memoryItem2);
				continue;
			}
			memoryItem2 = newMemoryItems.FirstOrDefault((MemoryItem memoryItem3) => memoryItem3.Id == updated2.Item.Id);
			if (memoryItem2 != null)
			{
				memoryItem2.Text = updated2.Text;
				memoryItem2.LastUpdated = timeProvider.GetLocalNow();
			}
		}
		memoryBook.Items.AddRange(newMemoryItems);
		chatInstance.Chat.LastMemorizedMessage = lastMessageId;
		await uow.MemoryBooks.UpdateAsync(memoryBook);
		if (!chatInstance.Ephemeral)
		{
			await uow.Chats.UpdateAsync(chatInstance.Chat);
		}
		await uow.SaveChangesAsync(cancellationToken);
		MemoryRef[] source = await Task.WhenAll(newMemoryItems.Concat(updatedMemoryItems).Select(async delegate(MemoryItem memoryItem3)
		{
			MemoryRef memoryRef = new MemoryRef
			{
				Id = memoryItem3.Id,
				Keywords = memoryItem3.Keywords,
				Text = memoryItem3.Text
			};
			MemoryRef memoryRef2 = memoryRef;
			memoryRef2.Tokens = await tokenizer.CountTokensAsync(memoryItem3.Text, cancellationToken);
			memoryRef.Weight = memoryItem3.Weight;
			memoryRef.CreatedAt = memoryItem3.CreatedAt;
			return memoryRef;
		}));
		MemoryRef[] add = source.Where((MemoryRef memoryRef) => newMemoryItems.Any((MemoryItem i) => i.Id == memoryRef.Id)).ToArray();
		MemoryRef[] update = source.Where((MemoryRef memoryRef) => updatedMemoryItems.Any((MemoryItem i) => i.Id == memoryRef.Id)).ToArray();
		await memoryProviderInstance.UpdateMemoriesAsync(mergeResult.Removed.Select((MemoryItem memoryItem3) => memoryItem3.Id).ToArray(), update, add, cancellationToken);
		logger.LogInformation("Completed adding {EntriesCount} memories to memory book {MemoryBookId} of {Character}", newMemoryItems.Count, memoryBook.LocalId, character.Name);
	}
}

```

## Voxta.Core.Chats.ScopedServices\MessageDispatcherService.cs
```csharp
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Core.Chats.Commands;
using Voxta.Core.Chats.Commands.Messages;
using Voxta.Core.Chats.Commands.Reply;
using Voxta.Core.Chats.Objects.Characters;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.CommandsProcessing;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.ScopedServices;

public class MessageDispatcherService(ChatInstance chatInstance, IImmediateMessagesService immediateMessagesService, IChatCommandsManager commandsManager, IChatCommandsReceiver commandsReceiver, IChatTextProcessor chatTextProcessor, IContinuationService continuationService) : IMessageDispatcherService
{
	public ValueTask SendCharacterMessageAsync(ICharacterInferenceData character, string text, bool? triggerReply, bool? narrate, CancellationToken cancellationToken)
	{
		cancellationToken.ThrowIfCancellationRequested();
		DispatchForegroundMessage(ChatMessageRole.Assistant, text, character, triggerReply, narrate);
		return ValueTask.CompletedTask;
	}

	public async ValueTask SendScriptedMessageAsync(ChatMessageRole role, string text, bool? triggerReply, bool? narrate, CancellationToken cancellationToken)
	{
		if (role == ChatMessageRole.Event || (narrate == true && role == ChatMessageRole.Note))
		{
			continuationService.CancelContinuation();
			DispatchForegroundMessage(role, text, chatInstance.Narrator, triggerReply, narrate);
			return;
		}
		if (role == ChatMessageRole.Assistant)
		{
			continuationService.CancelContinuation();
			DispatchForegroundMessage(role, text, chatInstance.GetMainCharacter(), triggerReply, narrate);
			return;
		}
		if (commandsReceiver.HasForegroundCommands() || triggerReply == true)
		{
			DispatchForegroundMessage(role, text, null, triggerReply, narrate);
			return;
		}
		bool flag = narrate == true;
		if (flag)
		{
			bool flag2 = ((role == ChatMessageRole.Instructions || role == ChatMessageRole.Secret) ? true : false);
			flag = flag2;
		}
		if (flag)
		{
			throw new NotSupportedException("Narration is not supported for secret or instructions messages");
		}
		string text2 = chatTextProcessor.ProcessText(text);
		await immediateMessagesService.WriteNowAsync(role, text2, cancellationToken);
	}

	public async Task DispatchMessage(SimpleMessageData message, CancellationToken cancellationToken)
	{
		if (message.Role == ChatMessageRole.Assistant)
		{
			string value = message.Value;
			if (((value != null && value.Length == 0) || value == "*") ? true : false)
			{
				continuationService.CancelContinuation();
				commandsManager.EnqueueForeground<IGenerateReplyCommand, GenerateReplyRequest>(new GenerateReplyRequest
				{
					CharacterId = chatInstance.Characters.FirstOrDefault((CharacterInstance c) => c.Name == message.User)?.Id
				});
			}
			else
			{
				DispatchForegroundMessage(message.Role, message.Value, chatInstance.Characters.First((CharacterInstance c) => c.Name == message.User));
			}
		}
		else
		{
			await SendScriptedMessageAsync(message.Role, message.Value, null, null, cancellationToken);
		}
	}

	private void DispatchForegroundMessage(ChatMessageRole role, string text, ICharacterInferenceData? character, bool? triggerReply = null, bool? narrate = null)
	{
		commandsManager.EnqueueForeground<ICreateForegroundMessageCommand, CreateForegroundMessageRequest>(new CreateForegroundMessageRequest
		{
			Role = role,
			Text = text,
			Character = character,
			TriggerReply = triggerReply,
			Narrate = narrate
		});
	}

	public ValueTask GenerateStoryAsync(ChatMessageRole role, string text, bool? triggerReply, bool? narrate, GenerateConstraintRequest generateConstraintRequest, CancellationToken cancellationToken)
	{
		cancellationToken.ThrowIfCancellationRequested();
		commandsManager.EnqueueForeground<IGenerateStoryCommand, GenerateStoryRequest>(new GenerateStoryRequest
		{
			Role = role,
			Text = text,
			UseStoryWriter = true,
			GenerateConstraintRequest = generateConstraintRequest,
			TriggerReply = triggerReply,
			Narrate = narrate
		});
		return ValueTask.CompletedTask;
	}
}

```

## Voxta.Core.Chats.ScopedServices\NullReplyChunksHandler.cs
```csharp
using System;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Services.TextToSpeech;
using Voxta.Abstractions.TextGenerationStreaming;

namespace Voxta.Core.Chats.ScopedServices;

public class NullReplyChunksHandler : IReplyChunksHandler, IDisposable
{
	public static readonly IReplyChunksHandler Instance = new NullReplyChunksHandler();

	public long ChatTime => 0L;

	public void Generating(string? thinkingSpeechUrl, bool isNarration = false)
	{
	}

	public ValueTask StartAsync()
	{
		return ValueTask.CompletedTask;
	}

	public void Thinking(string chunk)
	{
	}

	public void Chunk(TextChunk chunk, string? url, TextToSpeechAudioSettings? audioSettings = null)
	{
	}

	public Task NotifyAudioIncoming()
	{
		return Task.CompletedTask;
	}

	public void End()
	{
	}

	public void Cancel()
	{
	}

	public void MessageSaved(ChatMessageData message)
	{
	}

	public void Dispose()
	{
	}
}

```

## Voxta.Core.Chats.ScopedServices\PreGeneratedMessageReplyChunkHandler.cs
```csharp
using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Utils;
using Voxta.Core.Chats.Sessions;

namespace Voxta.Core.Chats.ScopedServices;

public class PreGeneratedMessageReplyChunkHandler : ReplyChunkHandlerBase
{
	public PreGeneratedMessageReplyChunkHandler(IUserConnectionTunnel tunnel, IChatTimer chatTimer, ITranscriptionService transcriptionService, IContinuationService continuationService, IChatSessionGeneratingState chatSessionGeneratingState, ILogger<ReplyChunksService> logger, ChatMessageData message, Guid sessionId)
	{
		_003Cmessage_003EP = message;
		base._002Ector(tunnel, chatTimer, chatSessionGeneratingState, transcriptionService, continuationService, logger, sessionId, _003Cmessage_003EP.SenderId, _003Cmessage_003EP.LocalId);
	}

	public override ValueTask StartAsync()
	{
		StartChatTime = _003Cmessage_003EP.ChatTime;
		base.MessageSaved(_003Cmessage_003EP);
		return base.StartAsync();
	}
}

```

## Voxta.Core.Chats.ScopedServices\ProcessScenarioEventService.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Model;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.ScopedServices;

public class ProcessScenarioEventService(ChatInstance chatInstance, IApplyActionEffectsService applyActionEffectsService, IInspectorService inspectorService, ILogger<ProcessScenarioEventService> logger) : IProcessScenarioEventService
{
	public async Task<(IScenarioEventInstance? Event, bool ShouldCancelReply)> ProcessScenarioEvent(ChatMessageData? previousMessage, FunctionTiming timing, string? trigger, CancellationToken cancellationToken)
	{
		(IScenarioEventInstance?, bool) result;
		IScenarioEventInstance[] applicableEvents;
		await using (IChatInstanceContextReadToken chatInstanceContextReadToken = await chatInstance.GetContextReadTokenAsync(cancellationToken))
		{
			if (chatInstanceContextReadToken.Events.Count == 0)
			{
				result = (null, false);
				goto IL_01e0;
			}
			bool flag;
			switch (previousMessage?.Role)
			{
			case ChatMessageRole.Event:
			case ChatMessageRole.Note:
				flag = true;
				break;
			default:
				flag = false;
				break;
			}
			if (flag)
			{
				result = (null, false);
				goto IL_01e0;
			}
			applicableEvents = chatInstanceContextReadToken.ResolveEvents(previousMessage, timing, trigger);
		}
		IScenarioEventInstance item = null;
		bool shouldCancelReply = false;
		IScenarioEventInstance[] array = applicableEvents;
		foreach (IScenarioEventInstance e in array)
		{
			logger.LogInformation("Scenario event triggered: {Event} ({Timing})", e.Name, timing);
			inspectorService.ScenarioEventExecuted(previousMessage?.LocalId, e, timing);
			ActionEffectResult actionEffectResult = await applyActionEffectsService.ApplyActionEffects(e.EffectInstance, previousMessage, (previousMessage != null && previousMessage.Role == ChatMessageRole.Assistant) ? chatInstance.GetCharacter(previousMessage.SenderId) : chatInstance.GetMainCharacter(), null, cancellationToken);
			item = e;
			shouldCancelReply |= actionEffectResult.ShouldCancelReply;
			if (!e.EvaluateNextEvent && !actionEffectResult.EvaluateNextEvent)
			{
				break;
			}
		}
		return (Event: item, ShouldCancelReply: shouldCancelReply);
		IL_01e0:
		return result;
	}
}

```

## Voxta.Core.Chats.ScopedServices\ReplyChunkHandler.cs
```csharp
using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Services.TextToSpeech;
using Voxta.Abstractions.TextGenerationStreaming;
using Voxta.Abstractions.Utils;
using Voxta.Common;
using Voxta.Core.Chats.Sessions;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.ScopedServices;

public class ReplyChunkHandler : ReplyChunkHandlerBase
{
	private bool _replyEnded;

	private bool _generatingSent;

	private bool _endSent;

	private bool _disposed;

	private readonly IUserConnectionTunnel _tunnel;

	private readonly Guid _sessionId;

	private readonly Guid _characterId;

	private readonly Guid _messageId;

	public ReplyChunkHandler(IUserConnectionTunnel tunnel, IChatTimer chatTimer, ITranscriptionService transcriptionService, IContinuationService continuationService, IChatSessionGeneratingState chatSessionGeneratingState, ILogger<ReplyChunksService> logger, Guid sessionId, Guid characterId, Guid messageId, ChatMessageRole role)
	{
		_003Clogger_003EP = logger;
		_003Crole_003EP = role;
		_tunnel = tunnel;
		_sessionId = sessionId;
		_characterId = characterId;
		_messageId = messageId;
		base._002Ector(tunnel, chatTimer, chatSessionGeneratingState, transcriptionService, continuationService, _003Clogger_003EP, sessionId, characterId, messageId);
	}

	public override void Generating(string? thinkingSpeechUrl, bool isNarration = false)
	{
		if (_disposed)
		{
			throw new InvalidOperationException("Disposed");
		}
		if (_generatingSent)
		{
			throw new InvalidOperationException("Generating already sent");
		}
		if (thinkingSpeechUrl != null)
		{
			NotifyAudioIncoming().Forget(_003Clogger_003EP);
		}
		_generatingSent = true;
		_tunnel.Send(new ServerReplyGeneratingMessage
		{
			SessionId = _sessionId,
			MessageId = _messageId,
			SenderId = _characterId,
			Role = _003Crole_003EP,
			ThinkingSpeechUrl = thinkingSpeechUrl,
			IsNarration = isNarration
		});
	}

	public override ValueTask StartAsync()
	{
		if (_disposed)
		{
			throw new InvalidOperationException("Disposed");
		}
		if (!_generatingSent)
		{
			throw new InvalidOperationException("Generating not sent");
		}
		if (_endSent)
		{
			throw new InvalidOperationException("End already sent");
		}
		if (StartChatTime.HasValue)
		{
			return ValueTask.CompletedTask;
		}
		return base.StartAsync();
	}

	public override void Chunk(TextChunk chunk, string? url, TextToSpeechAudioSettings? audioSettings = null)
	{
		if (_disposed)
		{
			throw new InvalidOperationException("Disposed");
		}
		if (!StartChatTime.HasValue)
		{
			throw new InvalidOperationException("Start not called");
		}
		if (_replyEnded)
		{
			_003Clogger_003EP.LogWarning("Chunk received after end");
		}
		else
		{
			base.Chunk(chunk, url, audioSettings);
		}
	}

	public override void End()
	{
		if (_disposed)
		{
			throw new InvalidOperationException("Disposed");
		}
		_replyEnded = true;
		TrySendEnd();
	}

	public override void Cancel()
	{
		if (!_disposed)
		{
			_replyEnded = true;
			if (_generatingSent && !_endSent)
			{
				_endSent = true;
				base.End();
			}
		}
	}

	public override void MessageSaved(ChatMessageData message)
	{
		base.MessageSaved(message);
		TrySendEnd();
	}

	private void TrySendEnd()
	{
		if (_generatingSent && !_endSent && _replyEnded && Message != null)
		{
			_endSent = true;
			base.End();
		}
	}

	public override void Dispose()
	{
		if (!_disposed)
		{
			_disposed = true;
			if (_generatingSent && !_endSent)
			{
				_endSent = true;
				base.End();
				GC.SuppressFinalize(this);
			}
		}
	}
}

```

## Voxta.Core.Chats.ScopedServices\ReplyChunkHandlerBase.cs
```csharp
using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Services.TextToSpeech;
using Voxta.Abstractions.TextGenerationStreaming;
using Voxta.Abstractions.Utils;
using Voxta.Common;
using Voxta.Core.Chats.Sessions;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.ScopedServices;

public abstract class ReplyChunkHandlerBase(IUserConnectionTunnel tunnel, IChatTimer chatTimer, IChatSessionGeneratingState chatSessionGeneratingState, ITranscriptionService transcriptionService, IContinuationService continuationService, ILogger logger, Guid sessionId, Guid characterId, Guid messageId) : IReplyChunksHandler, IDisposable
{
	private bool _notifedAudioIncoming;

	protected long? StartChatTime;

	protected ChatMessageData? Message;

	public long ChatTime
	{
		get
		{
			long valueOrDefault = StartChatTime.GetValueOrDefault();
			if (!StartChatTime.HasValue)
			{
				valueOrDefault = chatTimer.GetChatTime();
				StartChatTime = valueOrDefault;
				return valueOrDefault;
			}
			return valueOrDefault;
		}
	}

	public virtual void Generating(string? thinkingSpeechUrl, bool isNarration = false)
	{
		throw new NotSupportedException("Generating not supported, use the normal ReplyChunksHandler");
	}

	public virtual ValueTask StartAsync()
	{
		tunnel.Send(new ServerReplyStartMessage
		{
			SessionId = sessionId,
			MessageId = messageId,
			SenderId = characterId,
			ChatTime = ChatTime
		});
		return ValueTask.CompletedTask;
	}

	public void Thinking(string chunk)
	{
		ServerReplyThinkingMessage message = new ServerReplyThinkingMessage
		{
			SessionId = sessionId,
			MessageId = messageId,
			SenderId = characterId,
			Text = chunk
		};
		tunnel.Send(message);
	}

	public virtual void Chunk(TextChunk chunk, string? url, TextToSpeechAudioSettings? audioSettings = null)
	{
		ServerReplyChunkMessage serverReplyChunkMessage = new ServerReplyChunkMessage
		{
			SessionId = sessionId,
			MessageId = messageId,
			SenderId = characterId,
			Text = chunk.Text,
			StartIndex = chunk.StartIndex,
			EndIndex = chunk.EndIndex,
			AudioUrl = (url ?? ""),
			IsNarration = chunk.IsNarration,
			AudioGapMs = (((object)audioSettings != null && audioSettings.AudioGap > 0) ? new int?(audioSettings.AudioGap) : ((int?)null))
		};
		chatSessionGeneratingState.StoreChunk(serverReplyChunkMessage);
		if (!string.IsNullOrEmpty(url))
		{
			NotifyAudioIncoming().Forget(logger);
		}
		tunnel.Send(serverReplyChunkMessage);
	}

	public async Task NotifyAudioIncoming()
	{
		if (!_notifedAudioIncoming)
		{
			_notifedAudioIncoming = true;
			await transcriptionService.PauseTranscriptionAsync("Speech will start");
			chatSessionGeneratingState.SetPendingSpeech(messageId);
		}
	}

	public virtual void End()
	{
		continuationService.HoldForSpeech();
		tunnel.Send(new ServerReplyEndMessage
		{
			SessionId = sessionId,
			MessageId = messageId,
			SenderId = characterId,
			Tokens = (Message?.Tokens ?? 0),
			MessageIndex = (Message?.Index ?? (-1)),
			ConversationIndex = (Message?.ConversationIndex ?? (-1))
		});
	}

	public virtual void Cancel()
	{
		End();
	}

	public virtual void MessageSaved(ChatMessageData message)
	{
		Message = message;
	}

	public virtual void Dispose()
	{
	}
}

```

## Voxta.Core.Chats.ScopedServices\ReplyChunksService.cs
```csharp
using System;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Utils;
using Voxta.Core.Chats.Sessions;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.ScopedServices;

public class ReplyChunksService(IChatSessionData chatSession, IUserConnectionTunnel tunnel, IChatTimer chatTimer, ITranscriptionService transcriptionService, IContinuationService continuationService, IChatSessionGeneratingState chatSessionGeneratingState, ILogger<ReplyChunksService> logger) : IReplyChunksService
{
	public IReplyChunksHandler CreateReplyChunksHandler(Guid characterId, Guid messageId, ChatMessageRole role)
	{
		return new ReplyChunkHandler(tunnel, chatTimer, transcriptionService, continuationService, chatSessionGeneratingState, logger, chatSession.SessionId, characterId, messageId, role);
	}

	public IReplyChunksHandler CreateReplyChunksHandler(ChatMessageData message)
	{
		return new PreGeneratedMessageReplyChunkHandler(tunnel, chatTimer, transcriptionService, continuationService, chatSessionGeneratingState, logger, message, chatSession.SessionId);
	}
}

```

## Voxta.Core.Chats.ScopedServices\ScriptedSpeechService.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.DependencyInjection;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Services.ChatAugmentations;
using Voxta.Abstractions.Services.TextGen;
using Voxta.Abstractions.TextGenerationStreaming;
using Voxta.Common;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.Sessions;
using Voxta.Core.Speech;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.ScopedServices;

public class ScriptedSpeechService(ChatInstance chatInstance, IChatSessionGeneratingState chatSessionGeneratingState, IChatAugmentationsServiceInstance augmentations, IReplyChunksService replyChunksService, ISentencePreprocessorFactory sentencePreprocessorFactory, IDynamicServiceAccessor<ISpeechGenerator> speechGeneratorAccessor, IDynamicServiceAccessor<ITextGenService> textGenServiceAccessor) : IScriptedSpeechService
{
	public Task SendReusableReplyWithSpeechAsync(string? cacheKeyPrefix, ICharacterInferenceData character, ChatMessageData message)
	{
		string reusableSpeechId = ((cacheKeyPrefix != null) ? BuildSpeechId(cacheKeyPrefix, character, message) : null);
		return SendReplyWithSpeechInternalAsync(reusableSpeechId, message, character);
	}

	private string BuildSpeechId(string cacheKeyPrefix, ICharacterInferenceData character, ChatMessageData message)
	{
		VoiceInfo voiceInfo = GetVoiceInfo(character);
		ISpeechGenerator current = speechGeneratorAccessor.GetCurrent();
		return $"{cacheKeyPrefix}_{Crypto.CreateSha1Hash((current.Link?.ServiceName ?? "-") + (voiceInfo?.GetParametersAsString() ?? "-"))}_{Crypto.CreateSha1Hash(message.Value)}";
	}

	public Task SendReplyWithSpeechAsync(ICharacterInferenceData character, ChatMessageData message)
	{
		return SendReplyWithSpeechInternalAsync(null, message, character);
	}

	private async Task SendReplyWithSpeechInternalAsync(string? reusableSpeechId, ChatMessageData message, ICharacterInferenceData character)
	{
		using IReplyChunksHandler replyChunksHandler = replyChunksService.CreateReplyChunksHandler(character.Id, message.LocalId, message.Role);
		replyChunksHandler.Generating(null, message.Role.IsNarrated());
		replyChunksHandler.MessageSaved(message);
		await SendReplyWithSpeechPostGeneratedEvent(reusableSpeechId, message, character, replyChunksHandler);
	}

	public async Task SendReplyWithSpeechPostGeneratedEvent(string? reusableSpeechId, ChatMessageData message, ICharacterInferenceData character, IReplyChunksHandler replyChunksHandler, CancellationToken cancellationToken = default(CancellationToken))
	{
		ICharacterInferenceData narrator = chatInstance.Narrator;
		VoiceInfo characterVoice = GetVoiceInfo(character);
		VoiceInfo narratorVoice = GetVoiceInfo(narrator);
		await replyChunksHandler.StartAsync();
		ISpeechGenerator current = speechGeneratorAccessor.GetCurrent();
		ISpeechGeneratorPlaybackQueue playbackQueue = current.CreateSpeechQueue(new ChatMessageSpeechToken
		{
			SessionId = chatInstance.SessionId,
			MessageId = message.LocalId
		}, null);
		chatSessionGeneratingState.PlaybackSpeechBegin(playbackQueue);
		SpeechChunkProcessor processor = new SpeechChunkProcessor(chatInstance.SessionId, chatInstance.UserId, message.LocalId, current, playbackQueue, augmentations, replyChunksHandler, character, characterVoice, narrator, narratorVoice, character.Culture.Name, reusableSpeechId, null);
		processor.Initialize(cancellationToken);
		ISentencePreprocessor sentencePreprocessor = sentencePreprocessorFactory.Create(new TextGenPreprocessingSettings
		{
			MaxSentences = -1,
			MaxWordsInAsterisks = -1,
			TextProcessing = textGenServiceAccessor.GetCurrent().TextProcessing,
			AllowMultipleLines = true
		});
		try
		{
			if (string.IsNullOrEmpty(message.Value))
			{
				return;
			}
			await foreach (TextChunk item in sentencePreprocessor.ProcessChunk(message.Value, cancellationToken))
			{
				await processor.ProcessChunkAsync(item, cancellationToken);
			}
			await foreach (TextChunk item2 in sentencePreprocessor.Complete(cancellationToken))
			{
				await processor.ProcessChunkAsync(item2, cancellationToken);
			}
		}
		finally
		{
			replyChunksHandler.End();
			playbackQueue.Complete();
		}
	}

	private VoiceInfo? GetVoiceInfo(ICharacterInferenceData character)
	{
		ServiceLink link = speechGeneratorAccessor.GetCurrent().Link;
		if (link == null || !link.ServiceId.HasValue)
		{
			return null;
		}
		return character.GetVoice(link.ServiceName, link.ServiceId.Value) ?? VoiceInfo.Empty;
	}
}

```

## Voxta.Core.Chats.ScopedServices\ServiceCollectionExtensions.cs
```csharp
using Microsoft.Extensions.DependencyInjection;

namespace Voxta.Core.Chats.ScopedServices;

public static class ServiceCollectionExtensions
{
	public static void AddChatScopedServices(this IServiceCollection services)
	{
		services.AddScoped<IActionScriptsService, ActionScriptsService>();
		services.AddScoped<IApplyActionEffectsService, ApplyActionEffectsService>();
		services.AddScoped<IHandleAttachmentsService, HandleAttachmentsService>();
		services.AddScoped<IChatConfigurationService, ChatConfigurationService>();
		services.AddScoped<IChatContextService, ChatContextService>();
		services.AddScoped<IChatFlowService, ChatFlowService>();
		services.AddScoped<ICommandModeService, CommandModeService>();
		services.AddScoped<IContinuationService, ContinuationService>();
		services.AddScoped<IImmediateMessagesService, ImmediateMessagesService>();
		services.AddScoped<IMessageDispatcherService, MessageDispatcherService>();
		services.AddScoped<IChatStartedMessageBuilderService, ChatStartedMessageBuilderService>();
		services.AddScoped<IProcessScenarioEventService, ProcessScenarioEventService>();
		services.AddScoped<IReplyChunksService, ReplyChunksService>();
		services.AddScoped<IGenerateActionInferenceService, GenerateActionInferenceService>();
		services.AddScoped<IGenerateReplyWithSpeechService, GenerateReplyWithSpeechService>();
		services.AddScoped<IScriptedSpeechService, ScriptedSpeechService>();
		services.AddScoped<IChatSummarizationPassService, ChatSummarizationPassService>();
		services.AddScoped<ITranscriptionService, TranscriptionService>();
		services.AddScoped<IUpdateContextService, UpdateContextService>();
		services.AddScoped<IChatContinuousStorageService, ChatContinuousStorageService>();
		services.AddScoped<IMemoryMaintenanceService, MemoryMaintenanceService>();
		services.AddScoped<ICustomMessageService, CustomMessageService>();
		services.AddScoped<IChatAugmentationsApiService, ChatAugmentationsApiService>();
		services.AddScoped<IInspectorService, InspectorService>();
		services.AddScoped<ITunnelMessagesService, TunnelMessagesService>();
	}
}

```

## Voxta.Core.Chats.ScopedServices\TranscriptionService.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Abstractions.Services.SpeechToText;
using Voxta.Common;
using Voxta.Core.Chats.Commands;
using Voxta.Core.Chats.Commands.Messages;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.Sessions;
using Voxta.Core.Runtime;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.ScopedServices;

public class TranscriptionService(ChatInstance chatInstance, IUserConnectionTunnel tunnel, IChatSessionServices services, IChatSessionGeneratingState generatingState, ProfileSettings profileSettings, IActionScriptsService actionScriptsService, IChatContinuousStorageService chatContinuousStorageService, IChatCommandsManager commandsManager, ILogger<TranscriptionService> logger) : ITranscriptionService, IAsyncDisposable
{
	private const int WaitTimeout = 30000;

	private readonly SemaphoreSlim _listenerSync = new SemaphoreSlim(1, 1);

	private ISpeechToTextListener? _listener;

	private bool _speechRecognitionStartedWhileIgnoring;

	private bool _disposed;

	private bool _transcriptionStarted;

	public async Task StartTranscriptionAsync(string reason, CancellationToken cancellationToken = default(CancellationToken))
	{
		if (_disposed)
		{
			return;
		}
		logger.LogDebug("Starting speech transcription ({Reason})", reason);
		if (!(await _listenerSync.WaitAsync(30000, cancellationToken)))
		{
			throw new TimeoutException("Failed to acquire listener sync lock to start  transcription");
		}
		try
		{
			if (_listener != null)
			{
				logger.LogDebug("Speech transcription already started");
				return;
			}
			_listener = await services.StartTranscriptionAsync(reason, OnSpeechRecognitionStarted, OnSpeechRecognitionPartial, OnSpeechRecognitionFinished, cancellationToken);
			if (_listener != null)
			{
				logger.LogDebug("Speech transcription started successfully");
				tunnel.Send(new ServerRecordingStatusMessage
				{
					SessionId = chatInstance.SessionId,
					Enabled = true
				});
			}
			else
			{
				logger.LogWarning("Failed to start speech transcription (null listener)");
			}
		}
		finally
		{
			_listenerSync.Release();
		}
	}

	public Task PauseTranscriptionAsync(string reason, CancellationToken cancellationToken = default(CancellationToken))
	{
		if (_disposed)
		{
			return Task.CompletedTask;
		}
		if (!profileSettings.PauseSpeechRecognitionDuringPlayback)
		{
			logger.LogDebug("Transcription not paused because pause speech recognition during playback is disabled ({Reason})", reason);
			return Task.CompletedTask;
		}
		return StopTranscriptionAsync(reason, cancellationToken);
	}

	public async Task StopTranscriptionAsync(string reason, CancellationToken cancellationToken = default(CancellationToken))
	{
		if (_disposed)
		{
			return;
		}
		logger.LogDebug("Trying to stop speech transcription ({Reason})", reason);
		if (!(await _listenerSync.WaitAsync(30000, cancellationToken)))
		{
			throw new TimeoutException("Failed to acquire listener sync lock to stop transcription");
		}
		try
		{
			ISpeechToTextListener listener = _listener;
			if (listener == null)
			{
				return;
			}
			_listener = null;
			logger.LogInformation("Stopping speech transcription ({Reason})", reason);
			await listener.DisposeAsync();
		}
		finally
		{
			_listenerSync.Release();
		}
		tunnel.Send(new ServerRecordingStatusMessage
		{
			SessionId = chatInstance.SessionId,
			Enabled = false
		});
	}

	private void OnSpeechRecognitionStarted()
	{
		if (!_disposed)
		{
			_transcriptionStarted = false;
			if (ShouldIgnore())
			{
				logger.LogDebug("Speech recognition started while ignoring");
				_speechRecognitionStartedWhileIgnoring = true;
			}
			else
			{
				tunnel.Send(new ServerSpeechRecognitionStartMessage());
			}
		}
	}

	private void OnSpeechRecognitionPartial(string text)
	{
		if (_disposed)
		{
			return;
		}
		if (ShouldIgnore())
		{
			if (!_speechRecognitionStartedWhileIgnoring)
			{
				_speechRecognitionStartedWhileIgnoring = true;
				logger.LogDebug("Speech recognition partial receive while ignoring");
			}
			return;
		}
		if (!profileSettings.PauseSpeechRecognitionDuringPlayback && (generatingState.ReplyInProgress() || generatingState.SpeechInProgress()) && (text.Contains(' ') || text.IsCompleteSentence()))
		{
			Task.Run((Func<ValueTask<SpeechInterruptionInfo>>)AbortCurrentReplyAsync);
		}
		tunnel.Send(new ServerSpeechRecognitionPartialMessage
		{
			Text = text
		});
		if (!_transcriptionStarted)
		{
			_transcriptionStarted = true;
			DispatchTranscriptionStartedEventAsync().Forget(logger);
		}
	}

	private void OnSpeechRecognitionFinished(string? text, SpeechToTextRecognitionEndReason reason)
	{
		if (_disposed)
		{
			return;
		}
		string text2 = ((text == "" || _speechRecognitionStartedWhileIgnoring) ? null : text);
		if (_transcriptionStarted)
		{
			_transcriptionStarted = false;
			DispatchTranscriptionFinishedEventAsync(text ?? "").Forget(logger);
		}
		if (ShouldIgnore())
		{
			_speechRecognitionStartedWhileIgnoring = false;
			if (_speechRecognitionStartedWhileIgnoring)
			{
				logger.LogDebug("Transcription ignored because it was started while ignoring");
			}
			else
			{
				logger.LogDebug("Transcription ignored because the recording context is not valid anymore");
			}
		}
		else
		{
			_speechRecognitionStartedWhileIgnoring = false;
			tunnel.Send(new ServerSpeechRecognitionEndMessage
			{
				Text = text2,
				Reason = reason.ToString()
			});
		}
	}

	private bool ShouldIgnore()
	{
		if (_speechRecognitionStartedWhileIgnoring)
		{
			return true;
		}
		if (!profileSettings.PauseSpeechRecognitionDuringPlayback)
		{
			return false;
		}
		if (_listener == null)
		{
			return true;
		}
		if (generatingState.SpeechInProgress())
		{
			return true;
		}
		return false;
	}

	private async Task DispatchTranscriptionStartedEventAsync()
	{
		if (actionScriptsService.IsRegistered("transcriptionStarted"))
		{
			await using (chatContinuousStorageService.Begin())
			{
				await actionScriptsService.RunEventAsync(new TranscriptionStartedScriptEvent(), null, chatInstance.User, chatInstance.Abort);
			}
		}
	}

	private async Task DispatchTranscriptionFinishedEventAsync(string text)
	{
		if (actionScriptsService.IsRegistered("transcriptionFinished"))
		{
			await using (chatContinuousStorageService.Begin())
			{
				await actionScriptsService.RunEventAsync(new TranscriptionFinishedScriptEvent
				{
					Text = text
				}, null, chatInstance.User, chatInstance.Abort);
			}
		}
	}

	private async ValueTask<SpeechInterruptionInfo?> AbortCurrentReplyAsync()
	{
		if (await generatingState.AbortGeneratingReplyAsync())
		{
			logger.LogInformation("Aborted currently generating reply by speech recognition");
		}
		SpeechInterruptionInfo speechInterruptionInfo = await generatingState.InterruptSpeech();
		if (speechInterruptionInfo != null)
		{
			tunnel.Send(new ServerInterruptSpeechMessage
			{
				SessionId = chatInstance.SessionId,
				MessageId = speechInterruptionInfo.StartMessage.MessageId
			});
			commandsManager.EnqueueForeground<IProcessInterruptedReplyCommand, ProcessInterruptedReplyRequest>(new ProcessInterruptedReplyRequest
			{
				Interruption = speechInterruptionInfo
			});
		}
		return speechInterruptionInfo;
	}

	public async ValueTask DisposeAsync()
	{
		if (_disposed)
		{
			return;
		}
		_disposed = true;
		bool isListenerSync = await _listenerSync.WaitAsync(1000, default(CancellationToken));
		if (!isListenerSync)
		{
			logger.LogDebug("Failed to acquire listener sync lock to dispose transcription");
		}
		try
		{
			if (_listener != null)
			{
				await _listener.DisposeAsync();
			}
		}
		finally
		{
			if (isListenerSync)
			{
				_listenerSync.Release();
			}
		}
		_listenerSync.Dispose();
	}
}

```

## Voxta.Core.Chats.ScopedServices\TunnelMessagesService.cs
```csharp
using System.Linq;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Web;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.ScopedServices;

public class TunnelMessagesService(ChatInstance chatInstance, IUserConnectionTunnel tunnel, IUrlProvider urlProvider) : ITunnelMessagesService
{
	public void SendMessageUpdated(ChatMessageData message)
	{
		tunnel.Send(new ServerUpdatedMessage
		{
			SessionId = chatInstance.SessionId,
			MessageId = message.LocalId,
			SenderId = message.SenderId,
			Text = message.Value,
			Role = message.Role,
			Timestamp = message.Timestamp,
			Index = message.Index,
			ConversationIndex = message.ConversationIndex,
			ChatTime = message.ChatTime,
			Attachments = message.Attachments?.Select((ChatMessageDataAttachment a) => new ChatMessageAttachment
			{
				Id = a.Id,
				Source = a.Source,
				ContentType = a.ContentType,
				Description = a.Description,
				FileName = a.FileName,
				Label = a.Label,
				Url = ((a.ContentType != null) ? urlProvider.GetAssetUrl<Chat>(message.ChatId, a.GetAssetPath(message.LocalId)) : null)
			}).ToArray()
		});
	}

	public void SendMessageDeleted(ChatMessageData message)
	{
		tunnel.Send(new ServerUpdatedMessage
		{
			SessionId = chatInstance.SessionId,
			MessageId = message.LocalId,
			SenderId = message.SenderId,
			Text = null,
			Role = message.Role,
			Timestamp = message.Timestamp,
			Index = 0,
			ConversationIndex = 0,
			ChatTime = 0L
		});
	}
}

```

## Voxta.Core.Chats.ScopedServices\UpdateContextService.cs
```csharp
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Core.Chats.Objects;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.ScopedServices;

public class UpdateContextService(ChatInstance chatInstance, IChatContextService chatContextService, IChatContinuousStorageService continuousStorageService, IChatObjectInstanceFactory chatObjectInstanceFactory, IActionScriptEngine scriptEngine) : IUpdateContextService
{
	private const string MainContextKey = "Main";

	public async ValueTask HandleUpdateContextMessageAsync(IUpdateContextMessage updateContextMessage, CancellationToken cancellationToken)
	{
		string contextKey = updateContextMessage.ContextKey ?? "Main";
		await using (continuousStorageService.Begin())
		{
			string[] setFlags = updateContextMessage.SetFlags;
			if (setFlags != null && setFlags.Length > 0)
			{
				await using IChatInstanceMessagesWriteToken chatInstanceMessagesWriteToken = await chatInstance.GetMessagesWriteTokenAsync(cancellationToken);
				ChatMessageData message = chatInstanceMessagesWriteToken.Messages.LastOrDefault();
				chatContextService.ApplyFlags(message, SetFlagRequest.ParseFlags(updateContextMessage.SetFlags));
			}
			if (updateContextMessage.EnableRoles != null)
			{
				chatContextService.ApplyEnableRoles(updateContextMessage.EnableRoles);
			}
			ScenarioActionDefinition[] actions = updateContextMessage.Actions;
			if (actions != null)
			{
				await chatContextService.AssignAllContextActionsAsync(contextKey, ImportActions(contextKey, actions), cancellationToken);
			}
			ScenarioEventDefinition[] events = updateContextMessage.Events;
			if (events != null)
			{
				await chatContextService.AssignAllContextEventsAsync(contextKey, ImportEvents(contextKey, events), cancellationToken);
			}
			ContextDefinition[] contexts = updateContextMessage.Contexts;
			if (contexts != null)
			{
				await chatContextService.ImportAllContextByContextKey(contextKey, ImportContexts(contexts), cancellationToken);
			}
		}
	}

	private IScenarioActionInstance[] ImportActions(string? contextKey, ScenarioActionDefinition[]? functions)
	{
		if (functions == null)
		{
			return Array.Empty<IScenarioActionInstance>();
		}
		return (from f in functions
			where !f.Disabled
			select chatObjectInstanceFactory.CreateAction(f, contextKey, 3, "dynamic", scriptEngine)).ToArray();
	}

	private IScenarioEventInstance[] ImportEvents(string? contextKey, ScenarioEventDefinition[]? functions)
	{
		if (functions == null)
		{
			return Array.Empty<IScenarioEventInstance>();
		}
		return (from f in functions
			where !f.Disabled
			select chatObjectInstanceFactory.CreateEvent(f, contextKey, 3, scriptEngine)).ToArray();
	}

	private IContextDefinitionInstance[] ImportContexts(ContextDefinition[] contexts)
	{
		return (from c in contexts
			where !c.Disabled
			select chatObjectInstanceFactory.CreateContext(c, 3)).ToArray();
	}
}

```

## Voxta.Core.Chats.Sessions\ChatAugmentationsServiceInstanceContainer.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Abstractions.Services.ChatAugmentations;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ClientMessages;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.Sessions;

public class ChatAugmentationsServiceInstanceContainer : IChatAugmentationsServiceInstance, IChatPreProcessAugmentation, IChatAugmentationServiceInstanceBase, IAsyncDisposable, IChatPostProcessAugmentation, IActionInferenceAugmentation, IPrefixContributionsAugmentation, IChatScriptEventsAugmentation, IChatSpeechReplacementsAugmentation
{
	private readonly List<IChatAugmentationServiceInstanceBase> _instances = new List<IChatAugmentationServiceInstanceBase>();

	private readonly List<EnabledServiceAugmentation> _augmentations = new List<EnabledServiceAugmentation>();

	private bool _hasEventListenerInstances;

	public bool HasEventListeners()
	{
		return _hasEventListenerInstances;
	}

	public IReadOnlyList<EnabledServiceAugmentation> GetAugmentations()
	{
		return _augmentations;
	}

	public string[] GetAugmentationNames()
	{
		throw new NotSupportedException("This method should not be called on this instance.");
	}

	public string SpeechProcessText(string text)
	{
		string text2 = text;
		foreach (IChatSpeechReplacementsAugmentation item in _instances.OfType<IChatSpeechReplacementsAugmentation>())
		{
			text2 = item.SpeechProcessText(text2);
		}
		return text2;
	}

	public void AddRange(IChatAugmentationsService augmentationService, IReadOnlyList<IChatAugmentationServiceInstanceBase> instances)
	{
		_instances.AddRange(instances);
		_augmentations.AddRange(from n in instances.SelectMany((IChatAugmentationServiceInstanceBase i) => i.GetAugmentationNames())
			select new EnabledServiceAugmentation(augmentationService.InstanceSettings.ModuleId, n));
		_hasEventListenerInstances = _instances.OfType<IChatScriptEventsAugmentation>().Any();
	}

	public async ValueTask<string> PreProcessTextAsync(ChatMessageRole role, string text, CancellationToken cancellationToken)
	{
		string text2 = text;
		foreach (IChatPreProcessAugmentation item in _instances.OfType<IChatPreProcessAugmentation>())
		{
			text2 = await item.PreProcessTextAsync(role, text2, cancellationToken);
		}
		return text2;
	}

	public async ValueTask<string> PostProcessTextAsync(ChatMessageRole role, string text, CancellationToken cancellationToken)
	{
		string text2 = text;
		foreach (IChatPostProcessAugmentation item in _instances.OfType<IChatPostProcessAugmentation>())
		{
			text2 = await item.PostProcessTextAsync(role, text2, cancellationToken);
		}
		return text2;
	}

	public IEnumerable<ClientUpdateContextMessage> RegisterChatContext()
	{
		return _instances.OfType<IActionInferenceAugmentation>().SelectMany((IActionInferenceAugmentation instance) => instance.RegisterChatContext());
	}

	public async ValueTask<bool> TryHandleActionInference(ChatMessageData? message, ServerActionMessage serverActionMessage, CancellationToken cancellationToken)
	{
		foreach (IActionInferenceAugmentation item in _instances.OfType<IActionInferenceAugmentation>())
		{
			if (await item.TryHandleActionInference(message, serverActionMessage, cancellationToken))
			{
				return true;
			}
		}
		return false;
	}

	public async Task<bool> ShouldRetryGeneratedChunkAsync(string chunkText, CancellationToken cancellationToken)
	{
		return (await Task.WhenAll(from x in _instances.OfType<IPrefixContributionsAugmentation>()
			select x.ShouldRetryGeneratedChunkAsync(chunkText, cancellationToken))).Any((bool x) => x);
	}

	public async ValueTask<string?> ContributePrefix(ICharacterInferenceData character, ChatMessageRole role, string? prefix, bool force, CancellationToken cancellationToken)
	{
		string text = prefix;
		foreach (IPrefixContributionsAugmentation item in _instances.OfType<IPrefixContributionsAugmentation>())
		{
			text = await item.ContributePrefix(character, role, text, force, cancellationToken);
		}
		return text;
	}

	public async Task OnChatScriptEvent(IActionScriptEvent e, ChatMessageData? message, ICharacterOrUserData character, CancellationToken cancellationToken)
	{
		foreach (IChatScriptEventsAugmentation item in _instances.OfType<IChatScriptEventsAugmentation>())
		{
			await item.OnChatScriptEvent(e, message, character, cancellationToken);
		}
	}

	public ServiceTypes[] GetRequiredServiceTypes()
	{
		return _instances.SelectMany((IChatAugmentationServiceInstanceBase x) => x.GetRequiredServiceTypes()).Distinct().ToArray();
	}

	public async ValueTask DisposeAsync()
	{
		await Task.WhenAll(_instances.Select((IChatAugmentationServiceInstanceBase x) => x.DisposeAsync().AsTask()));
	}
}

```

## Voxta.Core.Chats.Sessions\ChatLockId.cs
```csharp
using System;

namespace Voxta.Core.Chats.Sessions;

public record ChatLockId(Guid UserId, Guid ChatId);

```

## Voxta.Core.Chats.Sessions\ChatSession.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services.VisionCapture;
using Voxta.Abstractions.Utils;
using Voxta.Core.Chats.Commands;
using Voxta.Core.Chats.Commands.Chat;
using Voxta.Core.Chats.Commands.ChatFlow;
using Voxta.Core.Chats.Commands.ClientMessage;
using Voxta.Core.Chats.Commands.Context;
using Voxta.Core.Chats.Commands.Documents;
using Voxta.Core.Chats.Commands.Messages;
using Voxta.Core.Chats.Commands.Participants;
using Voxta.Core.Chats.Commands.Reply;
using Voxta.Core.Chats.Commands.Scripts;
using Voxta.Core.Chats.Commands.Speech;
using Voxta.Core.Chats.Commands.Start;
using Voxta.Core.Chats.Commands.Triggers;
using Voxta.Core.Chats.Commands.Typing;
using Voxta.Core.Chats.Objects.Characters;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.ScopedServices;
using Voxta.Core.CommandsProcessing;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ClientMessages;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.Sessions;

public sealed class ChatSession(AsyncServiceScope scope, IAuthenticationContext auth, IChatSessionServices services, ChatInstance chatInstance, IUserConnectionTunnel tunnel, IChatTextProcessor chatTextProcessor, IChatSessionGeneratingState chatSessionGeneratingState, IActionScriptEngine scriptEngine, IChatCommandsManager commandsManager, ITranscriptionService transcriptionService, IInspectorService inspectorService, IChatCommandsProcessor commandsProcessor, IMessageDispatcherService messageDispatcher, IChatStartedMessageBuilderService chatStartedMessageBuilderService, IChatAugmentationsApiService chatAugmentationsApiService, IUserInteractionRequestsManager userInteractionRequestsManager) : IChatSession, IChatSessionMessageHandler, IChatSessionPlaybackHandler, IAsyncDisposable, IChatSessionChatAugmentationApi
{
	Guid IChatSessionChatAugmentationApi.SessionId => SessionId;

	ICharacterInferenceData IChatSessionChatAugmentationApi.MainCharacter => chatInstance.GetMainCharacter();

	ICharacterOrUserData IChatSessionChatAugmentationApi.User => chatInstance.User;

	IChatInferenceData IChatSessionChatAugmentationApi.Chat => chatInstance;

	CancellationToken IChatSessionChatAugmentationApi.Abort => chatInstance.Abort;

	ChatStyles IChatSessionChatAugmentationApi.ChatStyle => chatInstance.GetChatStyle(chatInstance.GetMainCharacter().ChatStyle);

	public ChatInstance ChatInstance => chatInstance;

	public Guid ChatId => chatInstance.ChatId;

	public Guid SessionId => chatInstance.SessionId;

	public Guid UserId => chatInstance.UserId;

	public IAuthenticationContext Auth => auth;

	bool IChatSessionChatAugmentationApi.IsAugmentationEnabled(string key, bool includeInCatchAll)
	{
		return chatInstance.IsAugmentationEnabled(key, includeInCatchAll);
	}

	async Task IChatSessionChatAugmentationApi.SendSecretAsync(string text, CancellationToken cancellationToken)
	{
		await messageDispatcher.SendScriptedMessageAsync(ChatMessageRole.Secret, chatTextProcessor.ProcessText(text), null, null, cancellationToken);
	}

	async Task IChatSessionChatAugmentationApi.SendNoteAsync(string text, CancellationToken cancellationToken)
	{
		await messageDispatcher.SendScriptedMessageAsync(ChatMessageRole.Note, chatTextProcessor.ProcessText(text), null, null, cancellationToken);
	}

	async Task IChatSessionChatAugmentationApi.SendInstructionsAsync(string text, CancellationToken cancellationToken)
	{
		await messageDispatcher.SendScriptedMessageAsync(ChatMessageRole.Instructions, chatTextProcessor.ProcessText(text), null, null, cancellationToken);
	}

	async Task IChatSessionChatAugmentationApi.SendCharacterMessageAsync(string text, CancellationToken cancellationToken)
	{
		await messageDispatcher.SendScriptedMessageAsync(ChatMessageRole.Assistant, chatTextProcessor.ProcessText(text), null, null, cancellationToken);
	}

	Task IChatSessionChatAugmentationApi.SendNoteAttachmentAsync(string text, IImage image, CancellationToken cancellationToken)
	{
		commandsManager.EnqueueForeground<ICreateForegroundMessageCommand, CreateForegroundMessageRequest>(new CreateForegroundMessageRequest
		{
			Text = text,
			Role = ChatMessageRole.Note,
			Character = null,
			Narrate = false,
			Reusable = null,
			TriggerReply = false,
			Attachments = new IImage[1] { image }
		});
		return Task.CompletedTask;
	}

	Task IChatSessionChatAugmentationApi.SendUserAttachmentAsync(string text, IImage image, CancellationToken cancellationToken)
	{
		commandsManager.EnqueueForeground<IReceiveUserMessageCommand, ReceiveUserMessageRequest>(new ReceiveUserMessageRequest
		{
			Text = text,
			Attachments = new ClientSendMessageAttachment[1]
			{
				new ObjectClientSendMessageAttachment<IImage>(image)
				{
					Source = image.Source,
					FileName = image.FileName,
					Label = image.Label
				}
			},
			AllowUserActionInference = false,
			DoContinue = false
		});
		return Task.CompletedTask;
	}

	Task IChatSessionChatAugmentationApi.SetContexts(string key, ContextDefinition[] contexts, CancellationToken cancellationToken)
	{
		cancellationToken.ThrowIfCancellationRequested();
		commandsManager.EnqueueInput<IUpdateContextCommand, ClientUpdateContextMessage>(new ClientUpdateContextMessage
		{
			SessionId = SessionId,
			ContextKey = key,
			Contexts = contexts
		});
		return Task.CompletedTask;
	}

	Task IChatSessionChatAugmentationApi.TriggerReplyAsync(CancellationToken cancellationToken)
	{
		cancellationToken.ThrowIfCancellationRequested();
		commandsManager.EnqueueForeground<IGenerateReplyCommand, GenerateReplyRequest>(new GenerateReplyRequest
		{
			AllowUser = false
		});
		return Task.CompletedTask;
	}

	Task IChatSessionChatAugmentationApi.SetFlags(SetFlagRequest[] flags, CancellationToken cancellationToken)
	{
		return chatAugmentationsApiService.SetFlags(flags, cancellationToken);
	}

	string IChatSessionChatAugmentationApi.ProcessSimpleTemplate(string result)
	{
		return chatTextProcessor.ProcessText(result);
	}

	bool IChatSessionChatAugmentationApi.HasService(ServiceTypes serviceType)
	{
		return services.HasService(serviceType);
	}

	bool IChatSessionChatAugmentationApi.CheckService(ServiceTypes serviceType, string serviceName)
	{
		if (serviceType != ServiceTypes.TextToSpeech)
		{
			throw new NotSupportedException($"Service type {serviceType} is not supported by {"IChatSessionChatAugmentationApi"} service check");
		}
		return services.SpeechGenerator.Link?.ServiceName == serviceName;
	}

	public async Task<IUserInteractionRequestToken> RequestUserAction(UserInteractionRequestInput input, CancellationToken cancellationToken)
	{
		IUserInteractionRequestToken userInteractionRequestToken = await userInteractionRequestsManager.RequestUserInteractionAsync(cancellationToken);
		try
		{
			tunnel.Send(new ServerUserInteractionRequestMessage
			{
				RequestId = userInteractionRequestToken.RequestId,
				ModuleId = input.ModuleId,
				Message = input.Message,
				Url = input.Url
			});
			return new UserInteractionRequestTokenChatSessionWrapper(tunnel, userInteractionRequestToken, chatInstance.Abort);
		}
		catch
		{
			await userInteractionRequestToken.DisposeAsync();
			throw;
		}
	}

	public void StartChatAsync(StartChatRequest request)
	{
		commandsManager.EnqueueInput<IStartChatCommand, StartChatRequest>(request);
		commandsProcessor.Start();
	}

	public ChatSessionInfo GetChatSessionInfo()
	{
		return new ChatSessionInfo
		{
			SessionId = SessionId,
			ChatId = chatInstance.ChatId,
			User = new ChatParticipantInfo
			{
				Id = chatInstance.User.Id,
				Name = chatInstance.User.Name,
				ThumbnailUrl = null
			},
			Characters = chatInstance.Characters.Select((CharacterInstance c) => new ChatParticipantInfo
			{
				Id = c.Id,
				Name = c.Name,
				ThumbnailUrl = c.ThumbnailUrl
			}).ToArray()
		};
	}

	public async IAsyncEnumerable<ServerChatSessionMessage> CreateInitialChatMessagesAsync([EnumeratorCancellation] CancellationToken cancellationToken)
	{
		yield return await chatStartedMessageBuilderService.CreateServerChatStartedMessageAsync(cancellationToken);
		yield return await chatInstance.CreateServerContextUpdatedMessageWithoutInspectionAsync(cancellationToken);
	}

	public async ValueTask DisposeAsync()
	{
		await transcriptionService.StopTranscriptionAsync("Disposing chat");
		await chatSessionGeneratingState.DisposeAsync();
		await commandsProcessor.DisposeAsync();
		scriptEngine.Dispose();
		await services.DisposeAsync();
		await chatInstance.DisposeAsync();
		await scope.DisposeAsync();
	}

	public async Task HandleClientMessage(ClientChatSessionMessage clientChatSessionMessage)
	{
		if (clientChatSessionMessage.SessionId != SessionId)
		{
			throw new InvalidOperationException($"Invalid SessionId on message {clientChatSessionMessage.GetType().Name}, expected {SessionId} but received {clientChatSessionMessage.SessionId}");
		}
		if (!(clientChatSessionMessage is ClientSendMessage parameter))
		{
			if (!(clientChatSessionMessage is ClientSpeechPlaybackStartMessage startMessage))
			{
				if (!(clientChatSessionMessage is ClientSpeechPlaybackCompleteMessage completeMessage))
				{
					if (!(clientChatSessionMessage is ClientUpdateContextMessage parameter2))
					{
						if (!(clientChatSessionMessage is ClientUpdateMessage parameter3))
						{
							if (!(clientChatSessionMessage is ClientDeleteMessageMessage parameter4))
							{
								if (!(clientChatSessionMessage is ClientUpdateChatMessage parameter5))
								{
									if (!(clientChatSessionMessage is ClientCharacterSpeechRequestMessage clientCharacterSpeechRequestMessage))
									{
										if (!(clientChatSessionMessage is ClientSpeakMessage parameter6))
										{
											if (!(clientChatSessionMessage is ClientRetryMessage parameter7))
											{
												if (!(clientChatSessionMessage is ClientInterruptMessage parameter8))
												{
													if (!(clientChatSessionMessage is ClientRevertMessage parameter9))
													{
														if (!(clientChatSessionMessage is ClientPauseMessage parameter10))
														{
															if (!(clientChatSessionMessage is ClientTriggerActionMessage parameter11))
															{
																if (!(clientChatSessionMessage is ClientRunScriptMessage parameter12))
																{
																	if (!(clientChatSessionMessage is ClientAddChatParticipantMessage parameter13))
																	{
																		if (!(clientChatSessionMessage is ClientRemoveChatParticipantMessage parameter14))
																		{
																			if (!(clientChatSessionMessage is ClientTypingStartMessage parameter15))
																			{
																				if (!(clientChatSessionMessage is ClientTypingEndMessage parameter16))
																				{
																					if (!(clientChatSessionMessage is ClientTriggerScriptEventMessage parameter17))
																					{
																						if (!(clientChatSessionMessage is ClientInspectMessage clientInspectMessage))
																						{
																							if (!(clientChatSessionMessage is ClientRequestSuggestionsMessage parameter18))
																							{
																								if (!(clientChatSessionMessage is ClientUpdateDocumentMessage parameter19))
																								{
																									throw new InvalidOperationException("Invalid message type " + clientChatSessionMessage.GetType().Name);
																								}
																								commandsManager.EnqueueInput<IUpdateDocumentCommand, ClientUpdateDocumentMessage>(parameter19);
																							}
																							else
																							{
																								commandsManager.EnqueueInput<IGenerateSuggestionsCommand, ClientRequestSuggestionsMessage>(parameter18);
																							}
																						}
																						else
																						{
																							inspectorService.EnableInspector(clientInspectMessage.Enabled);
																							commandsManager.EnqueueInput<IPublishContextCommand, PublishContextRequest>(new PublishContextRequest());
																						}
																					}
																					else
																					{
																						commandsManager.EnqueueInput<ITriggerScriptEventCommand, ClientTriggerScriptEventMessage>(parameter17);
																					}
																				}
																				else
																				{
																					commandsManager.EnqueueInput<ITypingEndCommand, ClientTypingEndMessage>(parameter16);
																				}
																			}
																			else
																			{
																				commandsManager.EnqueueInput<ITypingStartCommand, ClientTypingStartMessage>(parameter15);
																			}
																		}
																		else
																		{
																			commandsManager.EnqueueInput<IRemoveParticipantCommand, ClientRemoveChatParticipantMessage>(parameter14);
																		}
																	}
																	else
																	{
																		commandsManager.EnqueueInput<IAddParticipantCommand, ClientAddChatParticipantMessage>(parameter13);
																	}
																}
																else
																{
																	commandsManager.EnqueueForeground<IRunScriptCommand, ClientRunScriptMessage>(parameter12);
																}
															}
															else
															{
																commandsManager.EnqueueInput<ITriggerActionCommand, ClientTriggerActionMessage>(parameter11);
															}
														}
														else
														{
															commandsManager.EnqueueInput<IPauseCommand, ClientPauseMessage>(parameter10);
														}
													}
													else
													{
														commandsManager.EnqueueInput<IRevertMessageCommand, ClientRevertMessage>(parameter9);
													}
												}
												else
												{
													commandsManager.EnqueueInput<IInterruptCommand, ClientInterruptMessage>(parameter8);
												}
											}
											else
											{
												commandsManager.EnqueueForeground<IRetryCommand, ClientRetryMessage>(parameter7);
											}
										}
										else
										{
											commandsManager.EnqueueForeground<ISpeakCommand, ClientSpeakMessage>(parameter6);
										}
									}
									else
									{
										commandsManager.EnqueueForeground<ICreateForegroundMessageCommand, CreateForegroundMessageRequest>(new CreateForegroundMessageRequest
										{
											Text = clientCharacterSpeechRequestMessage.Text,
											Role = ChatMessageRole.Assistant,
											Character = (clientCharacterSpeechRequestMessage.CharacterId.HasValue ? chatInstance.GetCharacter(clientCharacterSpeechRequestMessage.CharacterId.Value) : chatInstance.GetMainCharacter())
										});
									}
								}
								else
								{
									commandsManager.EnqueueInput<IUpdateChatCommand, ClientUpdateChatMessage>(parameter5);
								}
							}
							else
							{
								commandsManager.EnqueueInput<IDeleteMessageCommand, ClientDeleteMessageMessage>(parameter4);
							}
						}
						else
						{
							commandsManager.EnqueueInput<IUpdateExistingMessageCommand, ClientUpdateMessage>(parameter3);
						}
					}
					else
					{
						commandsManager.EnqueueInput<IUpdateContextCommand, ClientUpdateContextMessage>(parameter2);
					}
				}
				else
				{
					await HandleSpeechPlaybackCompleteAsync(completeMessage);
				}
			}
			else
			{
				HandleSpeechPlaybackStart(startMessage);
			}
		}
		else
		{
			commandsManager.EnqueueInput<IProcessClientSendMessageCommand, ClientSendMessage>(parameter);
		}
	}

	private void HandleSpeechPlaybackStart(ClientSpeechPlaybackStartMessage startMessage)
	{
		if (!services.SpeechGenerator.IsServerSide)
		{
			DoSpeechPlaybackStart(startMessage);
		}
	}

	public void DoSpeechPlaybackStart(ClientSpeechPlaybackStartMessage startMessage)
	{
		commandsManager.EnqueueInput<ISpeechPlaybackStartCommand, ClientSpeechPlaybackStartMessage>(startMessage);
	}

	private async Task HandleSpeechPlaybackCompleteAsync(ClientSpeechPlaybackCompleteMessage completeMessage)
	{
		if (!services.SpeechGenerator.IsServerSide)
		{
			await DoSpeechPlaybackCompleteAsync(completeMessage);
		}
	}

	public Task DoSpeechPlaybackCompleteAsync(ClientSpeechPlaybackCompleteMessage completeMessage)
	{
		commandsManager.EnqueueInput<ISpeechPlaybackCompleteCommand, ClientSpeechPlaybackCompleteMessage>(completeMessage);
		return Task.CompletedTask;
	}
}

```

## Voxta.Core.Chats.Sessions\ChatSessionGeneratingState.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Diagnostics;
using Voxta.Core.Speech;
using Voxta.Model.WebsocketMessages.ClientMessages;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.Sessions;

public class ChatSessionGeneratingState(IChatSessionData chatSession, TimeProvider timeProvider, IPerformanceMetrics performanceMetrics, ILogger<ChatSessionGeneratingState> logger) : IChatSessionGeneratingState, IAsyncDisposable
{
	private const int MaxStoredChunks = 100;

	private DateTimeOffset _audioPlaybackStart;

	private ClientSpeechPlaybackStartMessage? _audioPlaybackLastStartMessage;

	private ISpeechGeneratorPlaybackQueue? _currentSpeech;

	private Guid? _pendingSpeechMessageId;

	private MessageGeneratingToken? _generating;

	private IPerformanceMetricsTracker? _firstSpeechTracker;

	private readonly Lock _sync = new Lock();

	private readonly List<ServerReplyChunkMessage> _chunks = new List<ServerReplyChunkMessage>();

	private readonly Lock _chunksSync = new Lock();

	public bool Paused { get; set; }

	public MessageGeneratingToken GenerateReplyBegin(Guid messageId)
	{
		using (_sync.EnterScope())
		{
			IUserPerformanceMetrics userPerformanceMetrics = performanceMetrics.OfUser(chatSession.UserId);
			_firstSpeechTracker = userPerformanceMetrics.Start("Reply - Time to first speech");
			if (_generating != null)
			{
				throw new InvalidOperationException("Previous reply generation was not aborted");
			}
			_generating = new MessageGeneratingToken(messageId);
			return _generating;
		}
	}

	public void GenerateReplyEnd(MessageGeneratingToken token)
	{
		using (_sync.EnterScope())
		{
			token.Dispose();
			if (_generating != null)
			{
				if (token != _generating)
				{
					logger.LogWarning("Reply completed while another while in progress");
				}
				_generating = null;
			}
		}
	}

	public void PlaybackSpeechBegin(ISpeechGeneratorPlaybackQueue speech)
	{
		_currentSpeech = speech;
	}

	public bool ReplyInProgress()
	{
		return _generating != null;
	}

	public bool SpeechInProgress()
	{
		if (_currentSpeech == null && !_pendingSpeechMessageId.HasValue)
		{
			return _audioPlaybackLastStartMessage != null;
		}
		return true;
	}

	public Guid? GetPendingSpeechMessageId()
	{
		MessageGeneratingToken? generating = _generating;
		if (generating == null)
		{
			return _pendingSpeechMessageId ?? _audioPlaybackLastStartMessage?.MessageId;
		}
		return generating.MessageId;
	}

	public async Task<bool> AbortGeneratingReplyAsync()
	{
		Interlocked.Exchange(ref _firstSpeechTracker, null);
		MessageGeneratingToken messageGeneratingToken = Interlocked.Exchange(ref _generating, null);
		if (messageGeneratingToken != null)
		{
			await messageGeneratingToken.AbortAsync();
			return true;
		}
		return false;
	}

	public void SpeechChunkStart(ClientSpeechPlaybackStartMessage startMessage)
	{
		if (startMessage.Duration == 0.0)
		{
			return;
		}
		using (_sync.EnterScope())
		{
			_audioPlaybackStart = timeProvider.GetUtcNow();
			_audioPlaybackLastStartMessage = startMessage;
			_firstSpeechTracker?.Done();
			_firstSpeechTracker = null;
		}
	}

	public void SpeechComplete(ClientSpeechPlaybackCompleteMessage _)
	{
		using (_sync.EnterScope())
		{
			_pendingSpeechMessageId = null;
			_audioPlaybackLastStartMessage = null;
			_audioPlaybackStart = default(DateTimeOffset);
			_currentSpeech = null;
			_firstSpeechTracker = null;
		}
	}

	public async Task<SpeechInterruptionInfo?> InterruptSpeech()
	{
		ISpeechGeneratorPlaybackQueue speechGeneratorPlaybackQueue = Interlocked.Exchange(ref _currentSpeech, null);
		if (speechGeneratorPlaybackQueue != null)
		{
			await speechGeneratorPlaybackQueue.DisposeAsync();
		}
		using (_sync.EnterScope())
		{
			if (_audioPlaybackLastStartMessage == null)
			{
				return null;
			}
			ClientSpeechPlaybackStartMessage audioPlaybackLastStartMessage = _audioPlaybackLastStartMessage;
			double ratio = (timeProvider.GetUtcNow() - _audioPlaybackStart).TotalSeconds / audioPlaybackLastStartMessage.Duration;
			_audioPlaybackStart = default(DateTimeOffset);
			_audioPlaybackLastStartMessage = null;
			_firstSpeechTracker = null;
			return new SpeechInterruptionInfo
			{
				StartMessage = audioPlaybackLastStartMessage,
				Ratio = ratio
			};
		}
	}

	public void StoreChunk(ServerReplyChunkMessage chunk)
	{
		using (_chunksSync.EnterScope())
		{
			if (_chunks.Count > 100)
			{
				_chunks.RemoveAt(0);
			}
			_chunks.Add(chunk);
		}
	}

	public ServerReplyChunkMessage? GetChunk(ClientSpeechPlaybackStartMessage request)
	{
		using (_chunksSync.EnterScope())
		{
			ServerReplyChunkMessage serverReplyChunkMessage = _chunks.FirstOrDefault((ServerReplyChunkMessage x) => x.MessageId == request.MessageId && x.StartIndex == request.StartIndex);
			if (serverReplyChunkMessage != null)
			{
				_chunks.Remove(serverReplyChunkMessage);
			}
			return serverReplyChunkMessage;
		}
	}

	public void SetPendingSpeech(Guid messageId)
	{
		_pendingSpeechMessageId = messageId;
	}

	public async ValueTask DisposeAsync()
	{
		ISpeechGeneratorPlaybackQueue currentSpeech = Interlocked.Exchange(ref _currentSpeech, null);
		MessageGeneratingToken generating = Interlocked.Exchange(ref _generating, null);
		if (currentSpeech != null)
		{
			await currentSpeech.CancelAsync();
			await currentSpeech.DisposeAsync();
		}
		if (generating != null)
		{
			await generating.AbortAsync();
		}
	}
}

```

## Voxta.Core.Chats.Sessions\ChatSessionManager.cs
```csharp
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Services.ActivityManager;
using Voxta.Common;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ClientMessages;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.Sessions;

public class ChatSessionManager : IChatSessionManager
{
	private const int MaxConcurrentChatsPerUser = 2;

	private readonly ConcurrentDictionary<Guid, SemaphoreSlim> _userChatLocks;

	private readonly ConcurrentDictionary<ChatLockId, bool> _chatLocks;

	private readonly ConcurrentDictionary<Guid, ChatSessionProxy> _chatSessions;

	private readonly IActivityManagerService[] _activityManagerServices;

	public ChatSessionManager(IEnumerable<IActivityManagerService> activityManagerServices, ILogger<ChatSessionManager> logger)
	{
		_003Clogger_003EP = logger;
		_userChatLocks = new ConcurrentDictionary<Guid, SemaphoreSlim>();
		_chatLocks = new ConcurrentDictionary<ChatLockId, bool>();
		_chatSessions = new ConcurrentDictionary<Guid, ChatSessionProxy>();
		_activityManagerServices = activityManagerServices.ToArray();
		base._002Ector();
	}

	public async Task<IDisposable> AcquireTokenAsync(Guid userId, CancellationToken cancellationToken)
	{
		if (await _userChatLocks.GetOrAdd(userId, (Guid _) => new SemaphoreSlim(2, 2)).WaitAsync(10000, cancellationToken))
		{
			return new UserChatLock(delegate
			{
				ReleaseToken(userId);
			});
		}
		throw new TimeoutException($"Cannot start more than {2} concurrent chats.");
	}

	private void ReleaseToken(Guid userId)
	{
		if (!_userChatLocks.TryGetValue(userId, out SemaphoreSlim value))
		{
			throw new InvalidOperationException($"No chat lock found for user {userId}");
		}
		value.Release();
	}

	public async Task<Guid> Create(IUserConnection owner, IUserConnectionTunnelInternal tunnel, CancellationToken cancellationToken)
	{
		Guid sessionId = Crypto.CreateCryptographicallySecureGuid();
		try
		{
			ChatSessionProxy value = new ChatSessionProxy(owner, tunnel, sessionId);
			if (!_chatSessions.TryAdd(sessionId, value))
			{
				throw new InvalidOperationException("Chat session already exists");
			}
			await tunnel.JoinChatSession(sessionId, cancellationToken);
			return sessionId;
		}
		catch
		{
			_chatSessions.TryRemove(sessionId, out ChatSessionProxy _);
			throw;
		}
	}

	public async Task Register(IChatSession chat, CancellationToken cancellationToken)
	{
		if (!_chatSessions.TryGetValue(chat.SessionId, out ChatSessionProxy value))
		{
			throw new InvalidOperationException("Chat session does not exist");
		}
		ChatLockId key = new ChatLockId(chat.UserId, chat.ChatId);
		try
		{
			if (value.SessionId != chat.SessionId)
			{
				throw new InvalidOperationException("Chat session does not match the session id of the proxy");
			}
			if (value.ChatSession != null)
			{
				throw new InvalidOperationException("Chat session already registered in this proxy");
			}
			value.ChatSession = chat;
			if (!_chatLocks.TryAdd(key, value: true))
			{
				throw new InvalidOperationException("Chat session already exists for this chat");
			}
			value.Tunnel.Send(new ServerChatSessionsUpdatedMessage
			{
				Sessions = GetChats().ToArray()
			});
			if (_chatLocks.Count != 1)
			{
				return;
			}
			IActivityManagerService[] activityManagerServices = _activityManagerServices;
			foreach (IActivityManagerService activityManagerService in activityManagerServices)
			{
				try
				{
					activityManagerService.StartChat();
				}
				catch (Exception exception)
				{
					_003Clogger_003EP.LogWarning(exception, "Failed to publish chat activity to {Service}", activityManagerService.GetType().Name);
				}
			}
		}
		catch
		{
			_chatSessions.TryRemove(chat.SessionId, out ChatSessionProxy _);
			_chatLocks.TryRemove(key, out var _);
			await value.Tunnel.LeaveChatSession(chat.SessionId, cancellationToken);
			throw;
		}
	}

	public async Task Unregister(IChatSession chat)
	{
		if (!_chatSessions.TryRemove(chat.SessionId, out ChatSessionProxy value))
		{
			return;
		}
		ChatLockId key = new ChatLockId(chat.UserId, chat.ChatId);
		_chatLocks.TryRemove(key, out var _);
		value.Tunnel.Send(new ServerChatClosedMessage
		{
			SessionId = chat.SessionId,
			ChatId = chat.ChatId
		});
		value.Tunnel.Send(new ServerChatSessionsUpdatedMessage
		{
			Sessions = GetChats().ToArray()
		});
		await value.Tunnel.LeaveChatSession(chat.SessionId, default(CancellationToken));
		if (!_chatLocks.IsEmpty)
		{
			return;
		}
		IActivityManagerService[] activityManagerServices = _activityManagerServices;
		foreach (IActivityManagerService activityManagerService in activityManagerServices)
		{
			try
			{
				activityManagerService.EndChat();
			}
			catch (Exception exception)
			{
				_003Clogger_003EP.LogWarning(exception, "Failed to publish chat activity to {Service}", activityManagerService.GetType().Name);
			}
		}
	}

	public IEnumerable<ChatSessionInfo> GetChats()
	{
		foreach (ChatSessionProxy value in _chatSessions.Values)
		{
			IChatSession chatSession = value.ChatSession;
			if (chatSession != null)
			{
				yield return chatSession.GetChatSessionInfo();
			}
		}
	}

	public async Task<bool> SubscribeToChat(Guid sessionId, IUserConnectionTunnelInternal tunnel, CancellationToken cancellationToken)
	{
		if (!_chatSessions.TryGetValue(sessionId, out ChatSessionProxy session))
		{
			return false;
		}
		try
		{
			await tunnel.JoinChatSession(sessionId, cancellationToken);
			IChatSession chatSession = session.ChatSession;
			if (chatSession != null)
			{
				await foreach (ServerChatSessionMessage item in chatSession.CreateInitialChatMessagesAsync(cancellationToken))
				{
					tunnel.Send(item.ToPrivate(tunnel.ConnectionId));
				}
			}
			return true;
		}
		catch
		{
			await tunnel.LeaveChatSession(sessionId, cancellationToken);
			throw;
		}
	}

	public async Task UnsubscribeFromChat(Guid sessionId, IUserConnectionTunnelInternal tunnel)
	{
		await tunnel.LeaveChatSession(sessionId, default(CancellationToken));
	}

	public async Task ForwardToSession(ClientChatSessionMessage clientChatSessionMessage)
	{
		if (!_chatSessions.TryGetValue(clientChatSessionMessage.SessionId, out ChatSessionProxy value))
		{
			if ((!(clientChatSessionMessage is ClientSpeechPlaybackCompleteMessage) && !(clientChatSessionMessage is ClientSpeechPlaybackStartMessage)) || 1 == 0)
			{
				_003Clogger_003EP.LogWarning("Chat session {SessionId} not found for message {Message}, cannot forward", clientChatSessionMessage.SessionId, clientChatSessionMessage);
			}
		}
		else
		{
			await value.Owner.HandleClientMessage(clientChatSessionMessage, allowForward: false);
		}
	}

	public void ThrowWhenChatInProgress(Guid userId, Guid chatId)
	{
		ChatLockId key = new ChatLockId(userId, chatId);
		if (_chatLocks.ContainsKey(key))
		{
			throw new InvalidOperationException("Chat is in progress");
		}
	}
}

```

## Voxta.Core.Chats.Sessions\ChatSessionProxy.cs
```csharp
using System;
using Voxta.Abstractions.Connections;

namespace Voxta.Core.Chats.Sessions;

public class ChatSessionProxy
{
	public Guid SessionId => _003CsessionId_003EP;

	public IChatSession? ChatSession { get; set; }

	public IUserConnection Owner { get; }

	public IUserConnectionTunnelInternal Tunnel { get; }

	public ChatSessionProxy(IUserConnection owner, IUserConnectionTunnelInternal tunnel, Guid sessionId)
	{
		_003CsessionId_003EP = sessionId;
		Owner = owner;
		Tunnel = tunnel;
		base._002Ector();
	}
}

```

## Voxta.Core.Chats.Sessions\ChatSessionServices.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Services.ActionInference;
using Voxta.Abstractions.Services.ComputerVision;
using Voxta.Abstractions.Services.ImageGen;
using Voxta.Abstractions.Services.Memory;
using Voxta.Abstractions.Services.SpeechToText;
using Voxta.Abstractions.Services.Summarization;
using Voxta.Abstractions.Services.TextGen;
using Voxta.Core.Runtime;
using Voxta.Core.Speech;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Sessions;

public class ChatSessionServices(IServiceReference<ITextGenService> textGen, IServiceReference<ISummarizationService> summarization, IServiceReference<IActionInferenceService> actionInference, IServiceReference<IMemoryProviderService> memory, IServiceReference<IImageGenService> imageGen, ISpeechToTextManager speechToTextManager, ITextToSpeechManager textToSpeechManager, IVisionManager visionManager) : IChatSessionServices, IAsyncDisposable
{
	private bool _disposed;

	public ITextGenService TextGen => textGen.Current;

	public IServiceReference<ITextGenService> TextGenRef => textGen;

	public IActionInferenceService ActionInference => actionInference.Current;

	public ISummarizationService Summarization => summarization.Current;

	public IImageGenService ImageGen => imageGen.Current;

	public IComputerVisionService ComputerVision => visionManager.ComputerVision;

	public ISpeechGenerator SpeechGenerator => textToSpeechManager.SpeechGenerator;

	public ISpeechToTextService SpeechToText => speechToTextManager.SpeechToText;

	public IServiceReference<IMemoryProviderService> MemoryProviderRef => memory;

	public ISpeechToTextManager SpeechToTextManager => speechToTextManager;

	public IVisionManager VisionManager => visionManager;

	public bool HasService(ServiceTypes serviceType)
	{
		return serviceType switch
		{
			ServiceTypes.ComputerVision => ComputerVision.Enabled, 
			ServiceTypes.ImageGen => ImageGen.Enabled, 
			ServiceTypes.SpeechToText => SpeechToText.Enabled, 
			ServiceTypes.TextToSpeech => SpeechGenerator.Enabled, 
			ServiceTypes.ActionInference => ActionInference.Enabled, 
			ServiceTypes.TextGen => TextGen.Enabled, 
			ServiceTypes.Summarization => Summarization.Enabled, 
			ServiceTypes.Memory => MemoryProviderRef.Current.Enabled, 
			_ => throw new NotSupportedException($"HasService does not support Service type {serviceType}."), 
		};
	}

	public Task<ISpeechToTextListener?> StartTranscriptionAsync(string reason, Action started, Action<string> partial, Action<string?, SpeechToTextRecognitionEndReason> finished, CancellationToken cancellationToken)
	{
		return speechToTextManager.StartTranscriptionAsync(reason, started, partial, finished, cancellationToken);
	}

	public void HealthCheck()
	{
		int maxSummaryLength = Summarization.MaxSummaryLength;
		if (TextGen.MaxMemoryTokens + maxSummaryLength + TextGen.MaxTokens >= TextGen.MaxWindowTokens - 1)
		{
			throw new InvalidOperationException($"Memory ({TextGen.MaxMemoryTokens}), summarization ({maxSummaryLength}) and new tokens ({TextGen.MaxTokens}) exceed the maximum tokens window of {TextGen.MaxWindowTokens}");
		}
	}

	public async ValueTask DisposeAsync()
	{
		if (!_disposed)
		{
			_disposed = true;
			await textGen.DisposeAsync();
			await summarization.DisposeAsync();
			await actionInference.DisposeAsync();
			await imageGen.DisposeAsync();
			await speechToTextManager.DisposeAsync();
			await textToSpeechManager.DisposeAsync();
			await visionManager.DisposeAsync();
			await memory.DisposeAsync();
		}
	}
}

```

## Voxta.Core.Chats.Sessions\ChatTextProcessor.cs
```csharp
using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using System.Text.RegularExpressions.Generated;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Common;

namespace Voxta.Core.Chats.Sessions;

public class ChatTextProcessor(string userName, string characterName, Dictionary<string, string>? scenarioCharacterNames = null) : IChatTextProcessor
{
	public string User => userName;

	public string Character => characterName;

	[GeneratedRegex("{{\\s*(?<key>[a-z_.]+)\\s*}}", RegexOptions.IgnoreCase, "en-US")]
	[GeneratedCode("System.Text.RegularExpressions.Generator", "9.0.12.41916")]
	private static Regex TagsRegex()
	{
		return _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__TagsRegex_2.Instance;
	}

	public string ProcessText(string? text)
	{
		if (string.IsNullOrEmpty(text))
		{
			return "";
		}
		MatchCollection matchCollection = TagsRegex().Matches(text);
		int num = 0;
		foreach (Match item in matchCollection)
		{
			string value = item.Groups["key"].Value;
			string text2 = ((value == "char") ? characterName : ((!(value == "user")) ? GetComplexMap(value) : userName));
			string text3 = text2;
			text = text.Remove(item.Index + num, item.Length).Insert(item.Index + num, text3);
			num += text3.Length - item.Length;
		}
		return text.TrimExcess();
	}

	private string GetComplexMap(string key)
	{
		if (scenarioCharacterNames != null && key.StartsWith("scenario_chars."))
		{
			int length = "scenario_chars.".Length;
			string key2 = key.Substring(length, key.Length - length);
			if (scenarioCharacterNames.TryGetValue(key2, out string value))
			{
				return value;
			}
		}
		return "";
	}
}

```

## Voxta.Core.Chats.Sessions\CommandsQueueErrorHandler.cs
```csharp
using System;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Connections;
using Voxta.Core.CommandsProcessing;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.Sessions;

public class CommandsQueueErrorHandler(IUserConnectionTunnel tunnel, IChatSessionData chatSession, ILogger<CommandsQueueErrorHandler> logger) : ICommandsQueueErrorHandler
{
	public void Handle(Exception exc)
	{
		logger.LogError(exc, "Error processing message");
		tunnel.Send(new ServerChatSessionErrorMessage(chatSession.SessionId, exc));
	}

	public void Warn(string message)
	{
		logger.LogWarning("Warning from commands queue: {Message}", message);
	}
}

```

## Voxta.Core.Chats.Sessions\IChatSession.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Core.Chats.Commands.Start;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.Sessions;

public interface IChatSession : IChatSessionMessageHandler, IChatSessionPlaybackHandler, IAsyncDisposable
{
	ChatInstance ChatInstance { get; }

	Guid ChatId { get; }

	Guid UserId { get; }

	ChatSessionInfo GetChatSessionInfo();

	IAsyncEnumerable<ServerChatSessionMessage> CreateInitialChatMessagesAsync(CancellationToken cancellationToken);

	void StartChatAsync(StartChatRequest request);
}

```

## Voxta.Core.Chats.Sessions\IChatSessionGeneratingState.cs
```csharp
using System;
using System.Threading.Tasks;
using Voxta.Core.Speech;
using Voxta.Model.WebsocketMessages.ClientMessages;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.Sessions;

public interface IChatSessionGeneratingState : IAsyncDisposable
{
	bool Paused { get; set; }

	MessageGeneratingToken GenerateReplyBegin(Guid messageId);

	void GenerateReplyEnd(MessageGeneratingToken token);

	void PlaybackSpeechBegin(ISpeechGeneratorPlaybackQueue speech);

	bool ReplyInProgress();

	bool SpeechInProgress();

	Guid? GetPendingSpeechMessageId();

	Task<bool> AbortGeneratingReplyAsync();

	void SpeechChunkStart(ClientSpeechPlaybackStartMessage startMessage);

	void SpeechComplete(ClientSpeechPlaybackCompleteMessage _);

	Task<SpeechInterruptionInfo?> InterruptSpeech();

	void StoreChunk(ServerReplyChunkMessage chunk);

	ServerReplyChunkMessage? GetChunk(ClientSpeechPlaybackStartMessage request);

	void SetPendingSpeech(Guid messageId);
}

```

## Voxta.Core.Chats.Sessions\IChatSessionManager.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Connections;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Sessions;

public interface IChatSessionManager
{
	Task<IDisposable> AcquireTokenAsync(Guid userId, CancellationToken token);

	Task<Guid> Create(IUserConnection owner, IUserConnectionTunnelInternal tunnel, CancellationToken cancellationToken);

	Task Register(IChatSession chat, CancellationToken cancellationToken);

	Task Unregister(IChatSession chat);

	IEnumerable<ChatSessionInfo> GetChats();

	Task<bool> SubscribeToChat(Guid sessionId, IUserConnectionTunnelInternal tunnel, CancellationToken cancellationToken);

	Task UnsubscribeFromChat(Guid sessionId, IUserConnectionTunnelInternal tunnel);

	Task ForwardToSession(ClientChatSessionMessage clientChatSessionMessage);

	void ThrowWhenChatInProgress(Guid userId, Guid chatId);
}

```

## Voxta.Core.Chats.Sessions\IChatSessionServices.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Services.ActionInference;
using Voxta.Abstractions.Services.ComputerVision;
using Voxta.Abstractions.Services.ImageGen;
using Voxta.Abstractions.Services.Memory;
using Voxta.Abstractions.Services.SpeechToText;
using Voxta.Abstractions.Services.Summarization;
using Voxta.Abstractions.Services.TextGen;
using Voxta.Core.Runtime;
using Voxta.Core.Speech;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Sessions;

public interface IChatSessionServices : IAsyncDisposable
{
	ITextGenService TextGen { get; }

	IServiceReference<ITextGenService> TextGenRef { get; }

	IActionInferenceService ActionInference { get; }

	ISummarizationService Summarization { get; }

	IImageGenService ImageGen { get; }

	IComputerVisionService ComputerVision { get; }

	ISpeechGenerator SpeechGenerator { get; }

	ISpeechToTextService SpeechToText { get; }

	IServiceReference<IMemoryProviderService> MemoryProviderRef { get; }

	ISpeechToTextManager SpeechToTextManager { get; }

	IVisionManager VisionManager { get; }

	bool HasService(ServiceTypes serviceType);

	Task<ISpeechToTextListener?> StartTranscriptionAsync(string reason, Action started, Action<string> partial, Action<string?, SpeechToTextRecognitionEndReason> finished, CancellationToken cancellationToken);
}

```

## Voxta.Core.Chats.Sessions\IVisionCaptureServiceReferences.cs
```csharp
using System;
using System.Threading.Tasks;
using Voxta.Abstractions.Services.VisionCapture;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Sessions;

public interface IVisionCaptureServiceReferences : IAsyncDisposable
{
	Task InitializeAsync();

	IVisionCaptureService GetBySource(ComputerVisionSource source);
}

```

## Voxta.Core.Chats.Sessions\MessageGeneratingToken.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Core.Chats.Sessions;

public class MessageGeneratingToken : IDisposable
{
	private readonly CancellationTokenSource _generateReplyAbort = new CancellationTokenSource();

	public CancellationToken Abort => _generateReplyAbort.Token;

	public Guid MessageId { get; }

	public MessageGeneratingToken(Guid messageId)
	{
		MessageId = messageId;
		base._002Ector();
	}

	public async Task AbortAsync()
	{
		await _generateReplyAbort.CancelAsync();
	}

	public void Dispose()
	{
		_generateReplyAbort.Dispose();
	}
}

```

## Voxta.Core.Chats.Sessions\NullServiceReference.cs
```csharp
using System;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Services;

namespace Voxta.Core.Chats.Sessions;

public class NullServiceReference<TService> : IServiceReference<TService>, IAsyncDisposable where TService : class, IService
{
	public static IServiceReference<TService> Instance { get; } = new NullServiceReference<TService>();

	public TService Current
	{
		get
		{
			throw new NotImplementedException();
		}
	}

	public event EventHandler? ServiceRemoved;

	public event EventHandler? ServiceChanged;

	public Task InitializeAsync()
	{
		return Task.CompletedTask;
	}

	public ValueTask DisposeAsync()
	{
		return ValueTask.CompletedTask;
	}
}

```

## Voxta.Core.Chats.Sessions\ServiceChangedDebouncer.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Core.Chats.Sessions;

public class ServiceChangedDebouncer(int debounceMs) : IAsyncDisposable
{
	private readonly CancellationTokenSource _cts = new CancellationTokenSource();

	private readonly Lock _lock = new Lock();

	private Task? _debounceTask;

	public event EventHandler? ServicesChanged;

	public void OnServiceChanged(object? o, EventArgs e)
	{
		using (_lock.EnterScope())
		{
			if (_debounceTask == null)
			{
				_debounceTask = StartDebounceAsync();
			}
		}
	}

	private async Task StartDebounceAsync()
	{
		try
		{
			await Task.Delay(debounceMs, _cts.Token);
			this.ServicesChanged?.Invoke(this, EventArgs.Empty);
		}
		finally
		{
			using (_lock.EnterScope())
			{
				_debounceTask = null;
			}
		}
	}

	public async ValueTask DisposeAsync()
	{
		await _cts.CancelAsync();
		_cts.Dispose();
	}
}

```

## Voxta.Core.Chats.Sessions\ServiceItemReference.cs
```csharp
using System;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Services;

namespace Voxta.Core.Chats.Sessions;

public class ServiceItemReference<T, TService>(IServiceReference<TService> serviceRef, Func<TService, T> fn) : IServiceItemReference<T> where TService : class, IService
{
	public T Current => _003Cfn_003EP(_003CserviceRef_003EP.Current);
}

```

## Voxta.Core.Chats.Sessions\ServiceReference.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Configuration;
using Voxta.Abstractions.Registration;
using Voxta.Abstractions.Runtime;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services;
using Voxta.Common;
using Voxta.Core.Services;
using Voxta.Core.Utils;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Sessions;

public class ServiceReference<TService> : IServiceReference<TService>, IAsyncDisposable where TService : class, IService
{
	private readonly SemaphoreSlim _semaphore;

	private readonly CancellationTokenSource _cts;

	private ServicesConfigurations _configs;

	private bool _disposed;

	public TService Current { get; private set; }

	public event EventHandler? ServiceChanged;

	public event EventHandler? ServiceRemoved;

	public ServiceReference(IServiceFactory serviceFactory, IModuleDefinitionsRegistry moduleDefinitionsRegistry, IServicesConfigurationChangeDispatcher servicesConfigurationChangeDispatcher, ServiceTypes serviceType, TService nullService, ILogger logger, IAuthenticationContext auth, ServicesConfigurations initialConfigs)
	{
		_003CserviceFactory_003EP = serviceFactory;
		_003CmoduleDefinitionsRegistry_003EP = moduleDefinitionsRegistry;
		_003CservicesConfigurationChangeDispatcher_003EP = servicesConfigurationChangeDispatcher;
		_003CserviceType_003EP = serviceType;
		_003CnullService_003EP = nullService;
		_003Clogger_003EP = logger;
		_003Cauth_003EP = auth;
		_semaphore = new SemaphoreSlim(1, 1);
		_cts = new CancellationTokenSource();
		_configs = initialConfigs;
		Current = _003CnullService_003EP;
		base._002Ector();
	}

	public static IServiceReference<TService> Create(IServiceFactory serviceFactory, IServicesConfigurationChangeDispatcher servicesConfigurationChangeDispatcher, IModuleDefinitionsRegistry moduleDefinitionsRegistry, TService nullService, ILogger logger, IAuthenticationContext auth, ServicesConfigurations config)
	{
		ServiceTypes serviceType = ServiceTypesHelper.FromType<TService>();
		ServiceReference<TService> serviceReference = new ServiceReference<TService>(serviceFactory, moduleDefinitionsRegistry, servicesConfigurationChangeDispatcher, serviceType, nullService, logger, auth, config);
		serviceReference.RegisterEvents();
		return serviceReference;
	}

	public Task InitializeAsync()
	{
		return CreateServiceAsync();
	}

	private void RegisterEvents()
	{
		_003CservicesConfigurationChangeDispatcher_003EP.ServicesConfigurationsSetChanged += OnServicesConfigurationsSetChanged;
		_003CservicesConfigurationChangeDispatcher_003EP.ServiceReady += OnServiceReady;
		_003CservicesConfigurationChangeDispatcher_003EP.ServiceSettingsUpdated += OnServiceSettingsUpdated;
		_003CservicesConfigurationChangeDispatcher_003EP.ModuleConfigurationUpdated += OnModuleConfigurationUpdated;
	}

	private void OnServicesConfigurationsSetChanged(object? sender, ServicesConfigurationsSetChangedEventArgs e)
	{
		if (_disposed)
		{
			return;
		}
		ServicesConfigurations configs = _configs;
		if (e.Config.ServicesConfigurationsSetId != configs.ServicesConfigurationsSetId)
		{
			return;
		}
		configs.Services.TryGetValue(_003CserviceType_003EP, out ServiceConfiguration value);
		TService current = Current;
		_configs = e.Config;
		if (!current.Enabled)
		{
			return;
		}
		if (!e.Config.Services.TryGetValue(_003CserviceType_003EP, out ServiceConfiguration value2) || value2.Module == null)
		{
			DisposeService(e.ModuleReloadCoordinator.RegisterShutDownTask(_003CserviceType_003EP)).Forget(_003Clogger_003EP);
			return;
		}
		if (value != null)
		{
			Guid moduleId = value2.Module.ModuleId;
			Guid? obj = value.Module?.ModuleId;
			if (!(moduleId != obj))
			{
				ModuleDefinition moduleDefinition = _003CmoduleDefinitionsRegistry_003EP.Get(value2.Module.ServiceName);
				string[] moduleConfigurationFieldsRequiringReload = moduleDefinition.ModuleConfigurationFieldsRequiringReload;
				string[] presetsFieldsRequiringReload = moduleDefinition.PresetsFieldsRequiringReload;
				if (RequiredFieldsChangesUtil.RequiresReload(moduleConfigurationFieldsRequiringReload, value.Module.ModuleConfiguration, value2.Module.ModuleConfiguration) || RequiredFieldsChangesUtil.RequiresReload(presetsFieldsRequiringReload, value.Settings?.ServiceSettings, value2.Settings?.ServiceSettings))
				{
					DisposeService(e.ModuleReloadCoordinator.RegisterShutDownTask(_003CserviceType_003EP)).Forget(_003Clogger_003EP);
					return;
				}
				Current.InstanceSettings.ModuleConfiguration = value2.Module.ModuleConfiguration;
				Current.InstanceSettings.ServiceSettingsId = value2.Settings?.ServiceSettingsId;
				Current.InstanceSettings.ServiceSettings = value2.Settings?.ServiceSettings ?? new Dictionary<string, string>();
				return;
			}
		}
		DisposeService(e.ModuleReloadCoordinator.RegisterShutDownTask(_003CserviceType_003EP)).Forget(_003Clogger_003EP);
	}

	private void OnServiceReady(object? sender, ServiceReadyEventArgs e)
	{
		if (e.ServiceType == _003CserviceType_003EP)
		{
			CreateServiceAsync().Forget(_003Clogger_003EP);
		}
	}

	private void OnServiceSettingsUpdated(object? sender, ServiceSettingsUpdatedEventArgs e)
	{
		TService current = Current;
		if (current.Enabled && !(current.InstanceSettings.ServiceSettingsId != e.ServiceSettingsId))
		{
			if (RequiredFieldsChangesUtil.RequiresReload(_003CmoduleDefinitionsRegistry_003EP.Get(e.ServiceName).PresetsFieldsRequiringReload, current.InstanceSettings.ServiceSettings, e.ServiceSettings))
			{
				DisposeService(e.Coordinator.RegisterShutDownTask(_003CserviceType_003EP)).Forget(_003Clogger_003EP);
				return;
			}
			Current.InstanceSettings.ServiceSettingsId = e.ServiceSettingsId;
			Current.InstanceSettings.ServiceSettings = e.ServiceSettings;
		}
	}

	private void OnModuleConfigurationUpdated(object? sender, ModuleConfigurationUpdatedEventArgs e)
	{
		TService current = Current;
		if (current.Enabled && !(current.InstanceSettings.ModuleId != e.ModuleId))
		{
			if (RequiredFieldsChangesUtil.RequiresReload(_003CmoduleDefinitionsRegistry_003EP.Get(e.ServiceName).ModuleConfigurationFieldsRequiringReload, current.InstanceSettings.ModuleConfiguration, e.ModuleConfiguration))
			{
				DisposeService(e.Coordinator.RegisterShutDownTask(_003CserviceType_003EP)).Forget(_003Clogger_003EP);
			}
			else
			{
				Current.InstanceSettings.ModuleConfiguration = e.ModuleConfiguration;
			}
		}
	}

	private async Task DisposeService(TaskCompletionSource<bool>? tcs = null)
	{
		_ = 1;
		try
		{
			await _semaphore.WaitAsync(CancellationToken.None);
			try
			{
				TService current = Current;
				Current = _003CnullService_003EP;
				this.ServiceRemoved?.Invoke(this, EventArgs.Empty);
				try
				{
					await current.DisposeAsync();
				}
				catch (Exception exception)
				{
					_003Clogger_003EP.LogError(exception, "Failed to dispose {ServiceType}", Current.GetType().Name);
				}
			}
			finally
			{
				_semaphore.Release();
			}
		}
		finally
		{
			tcs?.SetResult(result: true);
		}
	}

	private async Task CreateServiceAsync()
	{
		if (_disposed)
		{
			return;
		}
		await _semaphore.WaitAsync(_cts.Token);
		try
		{
			if (!_disposed && _configs.Services.TryGetValue(_003CserviceType_003EP, out ServiceConfiguration value))
			{
				Current = await _003CserviceFactory_003EP.CreateAsync<TService>(_003Cauth_003EP, value, _cts.Token);
				this.ServiceChanged?.Invoke(this, EventArgs.Empty);
			}
		}
		finally
		{
			_semaphore.Release();
		}
	}

	public async ValueTask DisposeAsync()
	{
		if (!_disposed)
		{
			_disposed = true;
			_003CservicesConfigurationChangeDispatcher_003EP.ServicesConfigurationsSetChanged -= OnServicesConfigurationsSetChanged;
			_003CservicesConfigurationChangeDispatcher_003EP.ServiceReady -= OnServiceReady;
			_003CservicesConfigurationChangeDispatcher_003EP.ServiceSettingsUpdated -= OnServiceSettingsUpdated;
			_003CservicesConfigurationChangeDispatcher_003EP.ModuleConfigurationUpdated -= OnModuleConfigurationUpdated;
			await _cts.CancelAsync();
			await DisposeService();
			_cts.Dispose();
			_semaphore.Dispose();
		}
	}
}

```

## Voxta.Core.Chats.Sessions\SpeechInterruptionInfo.cs
```csharp
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Chats.Sessions;

public class SpeechInterruptionInfo
{
	public required ClientSpeechPlaybackStartMessage StartMessage { get; init; }

	public required double Ratio { get; init; }
}

```

## Voxta.Core.Chats.Sessions\StaticServiceReference.cs
```csharp
using System;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Services;

namespace Voxta.Core.Chats.Sessions;

public class StaticServiceReference<TService>(TService instance) : IServiceReference<TService>, IAsyncDisposable where TService : class, IService
{
	public TService Current => _003Cinstance_003EP;

	public event EventHandler? ServiceRemoved;

	public event EventHandler? ServiceChanged;

	public Task InitializeAsync()
	{
		return Task.CompletedTask;
	}

	public ValueTask DisposeAsync()
	{
		return _003Cinstance_003EP.DisposeAsync();
	}
}

```

## Voxta.Core.Chats.Sessions\UserChatLock.cs
```csharp
using System;

namespace Voxta.Core.Chats.Sessions;

public sealed class UserChatLock(Action dispose) : IDisposable
{
	private bool _disposed;

	public void Dispose()
	{
		if (!_disposed)
		{
			_disposed = true;
			dispose();
		}
	}
}

```

## Voxta.Core.Chats.Sessions\UserInteractionRequestTokenChatSessionWrapper.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Utils;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Chats.Sessions;

public class UserInteractionRequestTokenChatSessionWrapper : IUserInteractionRequestToken, IAsyncDisposable
{
	public Guid RequestId => _003Cinner_003EP.RequestId;

	public Task<UserInteractionRequestResult> Task { get; }

	public UserInteractionRequestTokenChatSessionWrapper(IUserConnectionTunnel tunnel, IUserInteractionRequestToken inner, CancellationToken abort)
	{
		_003Ctunnel_003EP = tunnel;
		_003Cinner_003EP = inner;
		Task = WaitForResultAsync(_003Ctunnel_003EP, _003Cinner_003EP, abort);
		base._002Ector();
	}

	private static async Task<UserInteractionRequestResult> WaitForResultAsync(IUserConnectionTunnel tunnel, IUserInteractionRequestToken inner, CancellationToken cancellationToken)
	{
		try
		{
			cancellationToken.ThrowIfCancellationRequested();
			Task<bool> abortTask = System.Threading.Tasks.Task.Run(() => cancellationToken.WaitHandle.WaitOne(), cancellationToken);
			await System.Threading.Tasks.Task.WhenAny(inner.Task, abortTask);
			if (abortTask.IsCompleted)
			{
				throw new OperationCanceledException(cancellationToken);
			}
			return await inner.Task;
		}
		finally
		{
			tunnel.Send(new ServerCloseUserInteractionRequestMessage
			{
				RequestId = inner.RequestId
			});
		}
	}

	public void Cancel()
	{
		_003Cinner_003EP.Cancel();
		_003Ctunnel_003EP.Send(new ServerCloseUserInteractionRequestMessage
		{
			RequestId = _003Cinner_003EP.RequestId
		});
	}

	public ValueTask DisposeAsync()
	{
		return _003Cinner_003EP.DisposeAsync();
	}
}

```

## Voxta.Core.Chats.Sessions\VisionCaptureServiceReferences.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Configuration;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Registration;
using Voxta.Abstractions.Runtime;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services;
using Voxta.Abstractions.Services.VisionCapture;
using Voxta.Common;
using Voxta.Core.Services.VisionCapture;
using Voxta.Core.Utils;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Sessions;

public class VisionCaptureServiceReferences : IVisionCaptureServiceReferences, IAsyncDisposable
{
	private readonly Lock _lock;

	private readonly SemaphoreSlim _semaphore;

	private readonly CancellationTokenSource _cts;

	private bool _disposed;

	private readonly Dictionary<ComputerVisionSource, IVisionCaptureService> _services;

	private ServicesConfigurations _configs;

	public VisionCaptureServiceReferences(IVisionCaptureServiceFactory visionCaptureServiceFactory, IModuleDefinitionsRegistry moduleDefinitionsRegistry, IServicesConfigurationChangeDispatcher servicesConfigurationChangeDispatcher, IRemoteVisionCaptureGlobalListener remoteVisionCaptureGlobalListener, IUserConnectionTunnel tunnel, ILogger logger, IAuthenticationContext auth, ClientCapabilities capabilities, ServicesConfigurations initialConfigs, Guid sessionId)
	{
		_003CvisionCaptureServiceFactory_003EP = visionCaptureServiceFactory;
		_003CmoduleDefinitionsRegistry_003EP = moduleDefinitionsRegistry;
		_003CservicesConfigurationChangeDispatcher_003EP = servicesConfigurationChangeDispatcher;
		_003CremoteVisionCaptureGlobalListener_003EP = remoteVisionCaptureGlobalListener;
		_003Ctunnel_003EP = tunnel;
		_003Clogger_003EP = logger;
		_003Cauth_003EP = auth;
		_003Ccapabilities_003EP = capabilities;
		_003CsessionId_003EP = sessionId;
		_lock = new Lock();
		_semaphore = new SemaphoreSlim(1, 1);
		_cts = new CancellationTokenSource();
		_services = new Dictionary<ComputerVisionSource, IVisionCaptureService>();
		_configs = initialConfigs;
		base._002Ector();
	}

	public static IVisionCaptureServiceReferences Create(IVisionCaptureServiceFactory visionCaptureServiceFactory, IModuleDefinitionsRegistry moduleDefinitionsRegistry, IServicesConfigurationChangeDispatcher servicesConfigurationChangeDispatcher, IRemoteVisionCaptureGlobalListener remoteVisionCaptureGlobalListener, ILogger logger, IUserConnectionTunnel tunnel, IAuthenticationContext auth, ClientCapabilities capabilities, ServicesConfigurations configs, Guid sessionId)
	{
		VisionCaptureServiceReferences visionCaptureServiceReferences = new VisionCaptureServiceReferences(visionCaptureServiceFactory, moduleDefinitionsRegistry, servicesConfigurationChangeDispatcher, remoteVisionCaptureGlobalListener, tunnel, logger, auth, capabilities, configs, sessionId);
		visionCaptureServiceReferences.RegisterEvents();
		return visionCaptureServiceReferences;
	}

	public IVisionCaptureService GetBySource(ComputerVisionSource source)
	{
		using (_lock.EnterScope())
		{
			if (_disposed)
			{
				throw new ObjectDisposedException("VisionCaptureServiceReferences");
			}
			IVisionCaptureService value;
			return _services.TryGetValue(source, out value) ? value : NullVisionCaptureService.Instance;
		}
	}

	public Task InitializeAsync()
	{
		return CreateServiceAsync();
	}

	private void RegisterEvents()
	{
		_003CservicesConfigurationChangeDispatcher_003EP.ServicesConfigurationsSetChanged += OnServicesConfigurationsSetChanged;
		_003CservicesConfigurationChangeDispatcher_003EP.ServiceReady += OnServiceReady;
		_003CservicesConfigurationChangeDispatcher_003EP.ModuleConfigurationUpdated += OnModuleConfigurationUpdated;
	}

	private void OnServicesConfigurationsSetChanged(object? sender, ServicesConfigurationsSetChangedEventArgs e)
	{
		if (_disposed)
		{
			return;
		}
		using (_lock.EnterScope())
		{
			ServiceConfiguration value;
			bool num = !_configs.Services.TryGetValue(ServiceTypes.VisionCapture, out value) || value.PreferClientCapability;
			ServiceConfiguration value2;
			bool flag = !e.Config.Services.TryGetValue(ServiceTypes.VisionCapture, out value2) || value2.PreferClientCapability;
			_configs = e.Config;
			if (num == flag)
			{
				return;
			}
			foreach (IVisionCaptureService value3 in _services.Values)
			{
				if (value3.Enabled)
				{
					DisposeService(e.ModuleReloadCoordinator.RegisterShutDownTask(value3.ServiceType)).Forget(_003Clogger_003EP);
				}
			}
		}
	}

	private void OnServiceReady(object? sender, ServiceReadyEventArgs e)
	{
		if (e.ServiceType == ServiceTypes.VisionCapture)
		{
			CreateServiceAsync().Forget(_003Clogger_003EP);
		}
	}

	private void OnModuleConfigurationUpdated(object? sender, ModuleConfigurationUpdatedEventArgs e)
	{
		using (_lock.EnterScope())
		{
			foreach (IVisionCaptureService item in _services.Values.Where((IVisionCaptureService s) => s.Enabled && s.InstanceSettings.ModuleId == e.ModuleId).Distinct().ToList())
			{
				if (RequiredFieldsChangesUtil.RequiresReload(_003CmoduleDefinitionsRegistry_003EP.Get(e.ServiceName).ModuleConfigurationFieldsRequiringReload, item.InstanceSettings.ModuleConfiguration, e.ModuleConfiguration))
				{
					DisposeService(e.Coordinator.RegisterShutDownTask(item.ServiceType)).Forget(_003Clogger_003EP);
				}
				else
				{
					item.InstanceSettings.ModuleConfiguration = e.ModuleConfiguration;
				}
			}
		}
	}

	private async Task DisposeService(TaskCompletionSource<bool>? tcs = null)
	{
		_ = 1;
		try
		{
			await _semaphore.WaitAsync(CancellationToken.None);
			try
			{
				IVisionCaptureService[] array;
				using (_lock.EnterScope())
				{
					array = _services.Values.ToArray();
					_services.Clear();
				}
				IVisionCaptureService[] array2 = array;
				foreach (IVisionCaptureService service in array2)
				{
					try
					{
						await service.DisposeAsync();
					}
					catch (Exception exception)
					{
						_003Clogger_003EP.LogError(exception, "Failed to dispose {ServiceType}", service.GetType().Name);
					}
				}
			}
			finally
			{
				_semaphore.Release();
			}
		}
		finally
		{
			tcs?.SetResult(result: true);
		}
	}

	private async Task CreateServiceAsync()
	{
		if (_disposed)
		{
			return;
		}
		await _semaphore.WaitAsync(_cts.Token);
		try
		{
			if (_disposed)
			{
				return;
			}
			List<ComputerVisionSource> remainingSourcesToRegister = new List<ComputerVisionSource>
			{
				ComputerVisionSource.Eyes,
				ComputerVisionSource.Screen
			};
			if (!_configs.Services.TryGetValue(ServiceTypes.VisionCapture, out ServiceConfiguration value) || value.PreferClientCapability)
			{
				await CreateClientServiceAsync(remainingSourcesToRegister, ComputerVisionSource.Eyes);
				await CreateClientServiceAsync(remainingSourcesToRegister, ComputerVisionSource.Screen);
			}
			if (_003Cauth_003EP.Remote || remainingSourcesToRegister.Count <= 0)
			{
				return;
			}
			await using IVisionCaptureServicesContainer services = await _003CvisionCaptureServiceFactory_003EP.CreateVisionCaptureServicesAsync(_003Cauth_003EP, remainingSourcesToRegister, _cts.Token);
			List<IVisionCaptureService> list = new List<IVisionCaptureService>();
			using (_lock.EnterScope())
			{
				foreach (var (computerVisionSource2, visionCaptureService2) in services.All())
				{
					if (!_services.TryAdd(computerVisionSource2, visionCaptureService2))
					{
						list.Add(visionCaptureService2);
					}
					else
					{
						remainingSourcesToRegister.Remove(computerVisionSource2);
					}
				}
			}
			foreach (IVisionCaptureService item in list)
			{
				using (_lock.EnterScope())
				{
					if (_services.ContainsValue(item))
					{
						continue;
					}
				}
				await item.DisposeAsync();
			}
		}
		finally
		{
			_semaphore.Release();
		}
	}

	private async Task CreateClientServiceAsync(List<ComputerVisionSource> remainingSources, ComputerVisionSource source)
	{
		if (!_003Ccapabilities_003EP.CanVisionCapture(source))
		{
			return;
		}
		using (_lock.EnterScope())
		{
			if (_services.ContainsKey(source))
			{
				return;
			}
		}
		ClientVisionCaptureService clientVisionCaptureService = await CreateClientVisionCaptureService(source, _cts.Token);
		bool flag;
		using (_lock.EnterScope())
		{
			flag = _services.TryAdd(source, clientVisionCaptureService);
		}
		if (!flag)
		{
			await clientVisionCaptureService.DisposeAsync();
		}
		remainingSources.Remove(source);
	}

	private async Task<ClientVisionCaptureService> CreateClientVisionCaptureService(ComputerVisionSource source, CancellationToken cancellationToken)
	{
		ClientVisionCaptureService service = new ClientVisionCaptureService(_003Ctunnel_003EP, _003CremoteVisionCaptureGlobalListener_003EP, _003CsessionId_003EP, _003Cauth_003EP.UserId, source, _003Clogger_003EP);
		await service.InitializeAsync(_003Cauth_003EP, NullServiceInstanceSettings.Instance, cancellationToken);
		return service;
	}

	public async ValueTask DisposeAsync()
	{
		if (!_disposed)
		{
			_disposed = true;
			_003CservicesConfigurationChangeDispatcher_003EP.ServicesConfigurationsSetChanged -= OnServicesConfigurationsSetChanged;
			_003CservicesConfigurationChangeDispatcher_003EP.ServiceReady -= OnServiceReady;
			_003CservicesConfigurationChangeDispatcher_003EP.ModuleConfigurationUpdated -= OnModuleConfigurationUpdated;
			await _cts.CancelAsync();
			await DisposeService();
			_cts.Dispose();
			_semaphore.Dispose();
		}
	}
}

```

## Voxta.Core.Chats.Utils\CancellableInvoker.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Core.Chats.Utils;

public class CancellableInvoker<T> : IAsyncDisposable where T : class?
{
	private bool _disposed;

	private CancellationTokenSource _currentCts = new CancellationTokenSource();

	private readonly SemaphoreSlim _semaphore = new SemaphoreSlim(1, 1);

	private Func<CancellationToken, Task>? _nextAction;

	private readonly Lock _locker = new Lock();

	public async Task<T?> RunAsync(Func<CancellationToken, Task<T>> fn, CancellationToken externalCancellationToken)
	{
		CancellationTokenSource newCts;
		using (_locker.EnterScope())
		{
			if (!_currentCts.IsCancellationRequested)
			{
				_currentCts.Cancel();
			}
			_currentCts.Dispose();
			_currentCts = CancellationTokenSource.CreateLinkedTokenSource(externalCancellationToken);
			_nextAction = fn;
			newCts = _currentCts;
		}
		await _semaphore.WaitAsync(externalCancellationToken);
		try
		{
			if (!_disposed && (Delegate?)_nextAction == (Delegate?)fn && !newCts.IsCancellationRequested)
			{
				return await fn(newCts.Token);
			}
		}
		catch (OperationCanceledException)
		{
		}
		finally
		{
			_semaphore.Release();
		}
		return null;
	}

	public async ValueTask DisposeAsync()
	{
		if (_disposed)
		{
			return;
		}
		_disposed = true;
		using (_locker.EnterScope())
		{
			try
			{
				_currentCts.Cancel();
			}
			catch (ObjectDisposedException)
			{
			}
		}
		await _semaphore.WaitAsync();
		_currentCts.Dispose();
		_semaphore.Dispose();
	}
}

```

## Voxta.Core.Chats.Utils\ChatCommands.cs
```csharp
namespace Voxta.Core.Chats.Utils;

public enum ChatCommands
{
	Event,
	Story,
	Note,
	Instructions,
	Secret,
	Trigger,
	Summarize,
	Repeat,
	NoReply,
	Char,
	SetFlags,
	Capture,
	Context,
	Message,
	Regenerate,
	Rollback,
	Image
}

```

## Voxta.Core.Chats.Utils\CommandErrorException.cs
```csharp
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Utils;

public class CommandErrorException : VoxtaException
{
	public CommandErrorException(string message)
		: base(message)
	{
	}
}

```

## Voxta.Core.Chats.Utils\CommandsUtil.cs
```csharp
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Common;
using Voxta.Model.Shared;

namespace Voxta.Core.Chats.Utils;

public static class CommandsUtil
{
	public static bool TryGetCommand(string text, [NotNullWhen(true)] out ChatCommands? command, out string commandText)
	{
		if (text.StartsWith('/'))
		{
			int num = text.IndexOf(' ');
			string text3;
			if (num == -1)
			{
				string text2 = text;
				text3 = text2.Substring(1, text2.Length - 1);
			}
			else
			{
				text3 = text.Substring(1, num - 1);
			}
			string text4 = text3;
			if (text4.Length == 0)
			{
				throw new CommandErrorException("Empty command is not supported");
			}
			string text5 = text4;
			if (text5[text5.Length - 1] == ':')
			{
				string text2 = text4;
				text4 = text2.Substring(0, text2.Length - 1);
			}
			if (!Enum.TryParse<ChatCommands>(text4, ignoreCase: true, out var result))
			{
				throw new CommandErrorException("Command " + text4 + " is not supported");
			}
			command = result;
			object obj;
			if (num == -1)
			{
				obj = "";
			}
			else
			{
				string text2 = text;
				int num2 = num + 1;
				obj = text2.Substring(num2, text2.Length - num2);
			}
			commandText = (string)obj;
			return true;
		}
		if (TryGetTextInBrackets(text, out commandText))
		{
			command = ChatCommands.Event;
			return true;
		}
		command = null;
		commandText = text;
		return false;
	}

	private static bool TryGetTextInBrackets(string value, out string result)
	{
		bool flag = value.Length > 2 && value.StartsWith('[') && value.EndsWith(']');
		string text;
		if (!flag)
		{
			text = value;
		}
		else
		{
			text = value.Substring(1, value.Length - 1 - 1);
		}
		result = text;
		return flag;
	}

	public static ScenarioMessageEffect ParseCustomMessage(IChatInferenceData chat, string input)
	{
		Dictionary<string, string> dictionary = ArgumentsParser.Parse(input);
		if (!dictionary.TryGetValue("", out string value))
		{
			throw new CommandErrorException("Text is required");
		}
		string value2;
		ChatMessageRole chatMessageRole = (dictionary.TryGetValue("role", out value2) ? Enum.Parse<ChatMessageRole>(value2) : ChatMessageRole.Assistant);
		string characterStr;
		ICharacterInferenceData characterInferenceData = (dictionary.TryGetValue("character", out characterStr) ? chat.GetCharacters().FirstOrDefault((ICharacterInferenceData c) => c.Name.Equals(characterStr, StringComparison.InvariantCultureIgnoreCase)) : null);
		if (characterStr != null && characterInferenceData == null)
		{
			throw new CommandErrorException("Character " + characterStr + " not found");
		}
		string scenarioRoleStr;
		ICharacterInferenceData characterInferenceData2 = (dictionary.TryGetValue("scenario-role", out scenarioRoleStr) ? chat.GetCharacters().FirstOrDefault((ICharacterInferenceData c) => c.ScenarioRole?.Equals(scenarioRoleStr, StringComparison.InvariantCultureIgnoreCase) ?? false) : null);
		if (scenarioRoleStr != null && characterInferenceData2 == null)
		{
			throw new CommandErrorException("Character with scenario-role " + scenarioRoleStr + " not found");
		}
		if (characterStr != null && scenarioRoleStr != null)
		{
			throw new CommandErrorException("Character and scenario-role can't be specified at the same time");
		}
		if (characterInferenceData == null)
		{
			characterInferenceData = characterInferenceData2;
		}
		if (characterInferenceData != null && chatMessageRole != ChatMessageRole.Assistant)
		{
			throw new CommandErrorException("Character can be specified only for Assistant role");
		}
		string value3;
		bool useStoryWriter = dictionary.TryGetValue("use-story-writer", out value3) && bool.Parse(value3);
		string value4;
		int maxNewTokens = (dictionary.TryGetValue("max-new-tokens", out value4) ? int.Parse(value4) : 0);
		string value5;
		int maxSentences = (dictionary.TryGetValue("max-sentences", out value5) ? int.Parse(value5) : 0);
		string value6;
		bool? triggerReply = (dictionary.TryGetValue("reply", out value6) ? new bool?(bool.Parse(value6)) : ((bool?)null));
		string value7;
		bool? narrate = (dictionary.TryGetValue("narrate", out value7) ? new bool?(bool.Parse(value7)) : ((bool?)null));
		return new ScenarioMessageEffect
		{
			Role = chatMessageRole,
			Character = characterInferenceData,
			Text = value,
			UseStoryWriter = useStoryWriter,
			MaxNewTokens = maxNewTokens,
			MaxSentences = maxSentences,
			TriggerReply = triggerReply,
			Narrate = narrate
		};
	}
}

```

## Voxta.Core.Chats.Utils\RetryUtil.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Services.VisionCapture;
using Voxta.Abstractions.Templating;
using Voxta.Core.TextGenerationStreaming;

namespace Voxta.Core.Chats.Utils;

public static class RetryUtil
{
	public static async Task<TextGenerationResult> RetryOnErrorOrEmptyAsync(ILogger logger, Func<CancellationToken, Task<TextGenerationResult>> generate, CancellationToken cancellationToken)
	{
		if (cancellationToken.IsCancellationRequested)
		{
			logger.LogWarning("Cancellation requested, aborting generation");
			return TextGenerationResult.Empty;
		}
		TextGenerationResult textGenerationResult;
		using (CancellationTokenSource cts = CancellationTokenSource.CreateLinkedTokenSource(cancellationToken))
		{
			try
			{
				textGenerationResult = await generate(cts.Token);
				if (textGenerationResult.Images.Count > 0)
				{
					return textGenerationResult;
				}
				string output = textGenerationResult.Output;
				if (((output != null && output.Length == 0) || output == "...") ? true : false)
				{
					throw new InvalidOperationException("Generated text is empty, retrying...");
				}
				if (textGenerationResult.Output.StartsWith('*') && textGenerationResult.Output.IndexOf('*', 1) == -1)
				{
					throw new InvalidOperationException("Generated text starts with an asterisks but does not contain any other, which is not desirable -  you might want to review your character, retrying...");
				}
				return textGenerationResult;
			}
			catch (TextGenerationStreamingPipeCanceledException)
			{
				throw;
			}
			catch (TemplateException exception)
			{
				await cts.CancelAsync();
				logger.LogError(exception, "Error generating text due to a template error");
				return TextGenerationResult.Empty;
			}
			catch (Exception exception2)
			{
				await cts.CancelAsync();
				logger.LogError(exception2, "Error generating text, retrying...");
			}
		}
		if (cancellationToken.IsCancellationRequested)
		{
			logger.LogWarning("Cancellation requested, aborting generation");
			return TextGenerationResult.Empty;
		}
		textGenerationResult = await generate(cancellationToken);
		if (textGenerationResult.Images.Count > 0)
		{
			return textGenerationResult;
		}
		if (string.IsNullOrWhiteSpace(textGenerationResult.Output))
		{
			logger.LogWarning("Generated text is empty");
			return TextGenerationResult.Empty;
		}
		if (textGenerationResult.Output.StartsWith('*') && textGenerationResult.Output.IndexOf('*', 1) == -1)
		{
			logger.LogWarning("Generated text starts with an asterisks but does not contain any other, which is not desirable -  you might want to review your character");
			string output = textGenerationResult.Output;
			return new TextGenerationResult(output.Substring(1, output.Length - 1), Array.Empty<IImage>());
		}
		return textGenerationResult;
	}
}

```

## Voxta.Core.CommandsProcessing\ChatCommandsProcessor.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Diagnostics;
using Voxta.Core.Chats.Objects.Chats;

namespace Voxta.Core.CommandsProcessing;

public sealed class ChatCommandsProcessor : IChatCommandsProcessor, IChatCommandsReceiver, IAsyncDisposable
{
	private readonly CommandsQueue _inputsQueue;

	private readonly CommandsQueue _foregroundQueue;

	public ChatCommandsProcessor(ChatInstance chatInstance, IDiagnosticsContext diagnosticsContext, ICommandsQueueErrorHandler errorHandler, ILogger<ChatCommandsProcessor> logger)
	{
		_003CchatInstance_003EP = chatInstance;
		_003CdiagnosticsContext_003EP = diagnosticsContext;
		_003Clogger_003EP = logger;
		_inputsQueue = new CommandsQueue(errorHandler);
		_foregroundQueue = new CommandsQueue(errorHandler);
		base._002Ector();
	}

	public void Start()
	{
		_inputsQueue.Start();
		_foregroundQueue.Start();
	}

	public long EnqueueInputCommand<TParameter>(IChatInputCommand<TParameter> receiver, TParameter parameter) where TParameter : class
	{
		ChatInputCommandWrapper<TParameter> receiver2 = new ChatInputCommandWrapper<TParameter>(receiver, _003CchatInstance_003EP, _003CdiagnosticsContext_003EP);
		return Enqueue("input", _inputsQueue, receiver2, parameter);
	}

	public long EnqueueForegroundCommand<TParameter>(IChatForegroundCommand<TParameter> receiver, TParameter parameter, CancellationToken? cancellationToken = null) where TParameter : class
	{
		ChatForegroundCommandWrapper<TParameter> receiver2 = new ChatForegroundCommandWrapper<TParameter>(receiver, _003CchatInstance_003EP, _003CdiagnosticsContext_003EP);
		return Enqueue("foreground", _foregroundQueue, receiver2, parameter, cancellationToken);
	}

	private long Enqueue<TParameter>(string type, CommandsQueue queue, IChatCommand<TParameter> receiver, TParameter parameter, CancellationToken? cancellationToken = null) where TParameter : class
	{
		long index = -1L;
		if (_003Clogger_003EP.IsEnabled(LogLevel.Debug))
		{
			index = queue.Enqueue(async delegate(TParameter r, CancellationToken c)
			{
				_003Clogger_003EP.LogDebug("Processing {Type} command #{Index}: {Command}", type, index, receiver.GetType().Name);
				await receiver.ExecuteAsync(r, c);
				_003Clogger_003EP.LogDebug("Processed {Type} command #{Index}: {Command}", type, index, receiver.GetType().Name);
			}, parameter);
		}
		else
		{
			index = queue.Enqueue(receiver.ExecuteAsync, parameter, cancellationToken);
		}
		if (_003Clogger_003EP.IsEnabled(LogLevel.Debug))
		{
			_003Clogger_003EP.LogDebug("Enqueueing {Type} command #{Index}: {Command}", type, index, receiver.GetType().Name);
		}
		return index;
	}

	public void HoldForeground()
	{
		_foregroundQueue.Hold();
	}

	public void ReleaseForeground()
	{
		_foregroundQueue.Release();
	}

	public bool HasForegroundCommands()
	{
		long lastEnqueuedIndex = _foregroundQueue.LastEnqueuedIndex;
		long currentlyProcessingIndex = _foregroundQueue.CurrentlyProcessingIndex;
		if (currentlyProcessingIndex > -1 && lastEnqueuedIndex >= currentlyProcessingIndex)
		{
			return true;
		}
		long lastProcessedIndex = _foregroundQueue.LastProcessedIndex;
		if (lastProcessedIndex > -1 && lastEnqueuedIndex > lastProcessedIndex)
		{
			return true;
		}
		return false;
	}

	public async ValueTask WaitForInputProcessingAsync(long index, CancellationToken cancellationToken)
	{
		await _inputsQueue.WaitForProcessingAsync(index, cancellationToken);
	}

	public async ValueTask WaitForInputCompletionAsync(long index, CancellationToken cancellationToken)
	{
		await _inputsQueue.WaitForCompletionAsync(index, cancellationToken);
	}

	public async ValueTask WaitAllCompletedAsync(CancellationToken cancellationToken)
	{
		await _inputsQueue.WaitForCompletionAsync(_inputsQueue.LastEnqueuedIndex, cancellationToken);
		await _foregroundQueue.WaitForCompletionAsync(_foregroundQueue.LastEnqueuedIndex, cancellationToken);
	}

	public async ValueTask DisposeAsync()
	{
		await _inputsQueue.DisposeAsync();
		await _foregroundQueue.DisposeAsync();
	}
}

```

## Voxta.Core.CommandsProcessing\ChatForegroundCommandWrapper.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Diagnostics;
using Voxta.Core.Chats.Objects.Chats;

namespace Voxta.Core.CommandsProcessing;

public class ChatForegroundCommandWrapper<TParameter>(IChatForegroundCommand<TParameter> wrapped, ChatInstance chatInstance, IDiagnosticsContext diagnosticsContext) : IChatForegroundCommand<TParameter>, IChatCommand<TParameter>, IChatCommand where TParameter : class
{
	public async ValueTask ExecuteAsync(TParameter request, CancellationToken cancellationToken)
	{
		_003CdiagnosticsContext_003EP.Initialize(new DiagnosticsContextValues
		{
			ChatId = _003CchatInstance_003EP.ChatId,
			UserId = _003CchatInstance_003EP.UserId,
			SessionId = _003CchatInstance_003EP.SessionId
		});
		await _003Cwrapped_003EP.ExecuteAsync(request, cancellationToken);
	}
}

```

## Voxta.Core.CommandsProcessing\ChatInputCommandWrapper.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Diagnostics;
using Voxta.Core.Chats.Objects.Chats;

namespace Voxta.Core.CommandsProcessing;

public class ChatInputCommandWrapper<TParameter>(IChatInputCommand<TParameter> wrapped, ChatInstance chatInstance, IDiagnosticsContext diagnosticsContext) : IChatInputCommand<TParameter>, IChatCommand<TParameter>, IChatCommand where TParameter : class
{
	public async ValueTask ExecuteAsync(TParameter request, CancellationToken cancellationToken)
	{
		_003CdiagnosticsContext_003EP.Initialize(new DiagnosticsContextValues
		{
			ChatId = _003CchatInstance_003EP.ChatId,
			UserId = _003CchatInstance_003EP.UserId,
			SessionId = _003CchatInstance_003EP.SessionId
		});
		await _003Cwrapped_003EP.ExecuteAsync(request, cancellationToken);
	}
}

```

## Voxta.Core.CommandsProcessing\CommandCallback.cs
```csharp
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Core.CommandsProcessing;

public delegate ValueTask CommandCallback(CancellationToken cancellationToken);

```

## Voxta.Core.CommandsProcessing\CommandCallbackWithParameter.cs
```csharp
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Core.CommandsProcessing;

public delegate ValueTask CommandCallbackWithParameter<in TParameter>(TParameter parameter, CancellationToken cancellationToken) where TParameter : class;

```

## Voxta.Core.CommandsProcessing\CommandsQueue.cs
```csharp
using System;
using System.Collections.Concurrent;
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Core.CommandsProcessing;

public sealed class CommandsQueue(ICommandsQueueErrorHandler errorHandler) : ICommandsQueue, IAsyncDisposable
{
	private readonly BlockingCollection<(CommandCallback Fn, long Index, CancellationToken? CancellationToken)> _queue = new BlockingCollection<(CommandCallback, long, CancellationToken?)>();

	private readonly CancellationTokenSource _cts = new CancellationTokenSource();

	private readonly SemaphoreSlim _semaphore = new SemaphoreSlim(1, 1);

	private int _holdCount;

	private Task _task = Task.CompletedTask;

	private bool _disposed;

	private long _lastEnqueuedIndex;

	private CancellationToken Abort => _cts.Token;

	public long LastProcessedIndex { get; private set; }

	public long CurrentlyProcessingIndex { get; private set; }

	public long LastEnqueuedIndex => _lastEnqueuedIndex;

	public void Start()
	{
		_cts.Token.ThrowIfCancellationRequested();
		_task = Task.Run((Func<Task?>)ProcessQueueAsync, Abort);
	}

	public long Enqueue<TParameter>(CommandCallbackWithParameter<TParameter> fn, TParameter parameter, CancellationToken? cancellationToken = null) where TParameter : class
	{
		if (_disposed)
		{
			return -1L;
		}
		if (Abort.IsCancellationRequested)
		{
			return -1L;
		}
		long num = Interlocked.Increment(ref _lastEnqueuedIndex);
		_queue.Add((WrappedAction, num, cancellationToken), Abort);
		return num;
		ValueTask WrappedAction(CancellationToken c)
		{
			return fn(parameter, c);
		}
	}

	public long Enqueue(CommandCallback fn, CancellationToken? cancellationToken = null)
	{
		if (_disposed)
		{
			return -1L;
		}
		if (Abort.IsCancellationRequested)
		{
			return -1L;
		}
		long num = Interlocked.Increment(ref _lastEnqueuedIndex);
		_queue.Add((fn, num, cancellationToken), Abort);
		return num;
	}

	public void Hold()
	{
		if (Interlocked.Increment(ref _holdCount) == 1 && !_semaphore.Wait(0, Abort))
		{
			Interlocked.Decrement(ref _holdCount);
		}
	}

	public void Release()
	{
		if (Interlocked.Exchange(ref _holdCount, 0) > 0)
		{
			_semaphore.Release();
		}
	}

	private async Task ProcessQueueAsync()
	{
		_ = 1;
		try
		{
			foreach (var message in _queue.GetConsumingEnumerable(Abort))
			{
				CancellationTokenSource cts;
				CancellationToken cancellationToken;
				if (message.CancellationToken.HasValue)
				{
					cts = CancellationTokenSource.CreateLinkedTokenSource(Abort, message.CancellationToken.Value);
					cancellationToken = cts.Token;
				}
				else
				{
					cts = null;
					cancellationToken = Abort;
				}
				try
				{
					bool firstFailure = true;
					while (_holdCount > 0)
					{
						bool num = await _semaphore.WaitAsync(60000, cancellationToken);
						if (num)
						{
							_semaphore.Release();
						}
						if (!num && firstFailure)
						{
							firstFailure = false;
							errorHandler.Warn("Commands queue is taking a long time to process commands, either speech is taking a long time to generate, or an error prevented releasing the queue; you may need to restart the chat.");
						}
					}
					CurrentlyProcessingIndex = message.Index;
					await message.Fn(cancellationToken);
				}
				catch (OperationCanceledException) when (cancellationToken.IsCancellationRequested)
				{
				}
				catch (ObjectDisposedException) when (Abort.IsCancellationRequested)
				{
				}
				catch (Exception exc)
				{
					errorHandler.Handle(exc);
				}
				finally
				{
					LastProcessedIndex = CurrentlyProcessingIndex;
					CurrentlyProcessingIndex = -1L;
					cts?.Dispose();
				}
			}
		}
		catch (OperationCanceledException)
		{
		}
	}

	public async Task WaitForProcessingAsync(long index, CancellationToken cancellationToken)
	{
		try
		{
			while (LastProcessedIndex >= index || CurrentlyProcessingIndex == index)
			{
				cancellationToken.ThrowIfCancellationRequested();
				await Task.Delay(10, cancellationToken);
			}
		}
		catch (ObjectDisposedException)
		{
		}
	}

	public async Task WaitForCompletionAsync(long index, CancellationToken cancellationToken)
	{
		try
		{
			while (LastProcessedIndex < index)
			{
				cancellationToken.ThrowIfCancellationRequested();
				await Task.Delay(10, cancellationToken);
			}
		}
		catch (ObjectDisposedException)
		{
		}
	}

	public async ValueTask DisposeAsync()
	{
		if (!_disposed)
		{
			_disposed = true;
			try
			{
				await _cts.CancelAsync();
			}
			catch (ObjectDisposedException)
			{
			}
			try
			{
				await _task;
			}
			catch (OperationCanceledException)
			{
			}
			catch (ObjectDisposedException)
			{
			}
			catch (Exception exc)
			{
				errorHandler.Handle(exc);
			}
			_task.Dispose();
			_queue.Dispose();
			_cts.Dispose();
			_semaphore.Dispose();
		}
	}
}

```

## Voxta.Core.CommandsProcessing\IChatCommand.cs
```csharp
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Core.CommandsProcessing;

public interface IChatCommand
{
}
public interface IChatCommand<in TParameter> : IChatCommand where TParameter : class
{
	ValueTask ExecuteAsync(TParameter request, CancellationToken cancellationToken);
}

```

## Voxta.Core.CommandsProcessing\IChatCommandsProcessor.cs
```csharp
using System;

namespace Voxta.Core.CommandsProcessing;

public interface IChatCommandsProcessor : IChatCommandsReceiver, IAsyncDisposable
{
	void Start();
}

```

## Voxta.Core.CommandsProcessing\IChatCommandsReceiver.cs
```csharp
using System.Threading;

namespace Voxta.Core.CommandsProcessing;

public interface IChatCommandsReceiver
{
	long EnqueueInputCommand<TParameter>(IChatInputCommand<TParameter> receiver, TParameter parameter) where TParameter : class;

	long EnqueueForegroundCommand<TParameter>(IChatForegroundCommand<TParameter> receiver, TParameter parameter, CancellationToken? cancellationToken = null) where TParameter : class;

	void HoldForeground();

	void ReleaseForeground();

	bool HasForegroundCommands();
}

```

## Voxta.Core.CommandsProcessing\IChatForegroundCommand.cs
```csharp
namespace Voxta.Core.CommandsProcessing;

public interface IChatForegroundCommand<in TParameter> : IChatCommand<TParameter>, IChatCommand where TParameter : class
{
}

```

## Voxta.Core.CommandsProcessing\IChatInputCommand.cs
```csharp
namespace Voxta.Core.CommandsProcessing;

public interface IChatInputCommand<in TParameter> : IChatCommand<TParameter>, IChatCommand where TParameter : class
{
}

```

## Voxta.Core.CommandsProcessing\ICommandsQueue.cs
```csharp
using System;
using System.Threading;

namespace Voxta.Core.CommandsProcessing;

public interface ICommandsQueue : IAsyncDisposable
{
	long Enqueue(CommandCallback fn, CancellationToken? cancellationToken = null);

	long Enqueue<TParameter>(CommandCallbackWithParameter<TParameter> fn, TParameter parameter, CancellationToken? cancellationToken = null) where TParameter : class;
}

```

## Voxta.Core.CommandsProcessing\ICommandsQueueErrorHandler.cs
```csharp
using System;

namespace Voxta.Core.CommandsProcessing;

public interface ICommandsQueueErrorHandler
{
	void Handle(Exception exc);

	void Warn(string message);
}

```

## Voxta.Core.Configuration\ServiceConfigurationFirstPass.cs
```csharp
using System;
using Voxta.Model.Shared;

namespace Voxta.Core.Configuration;

public class ServiceConfigurationFirstPass
{
	public required Guid ModuleId { get; init; }

	public required ServiceTypes ServiceType { get; init; }

	public Guid? ServiceSettingsId { get; init; }

	public bool PreferClientCapability { get; init; }
}

```

## Voxta.Core.Configuration\ServicesConfigurationsSetResolver.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Caching;
using Voxta.Abstractions.Configuration;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Repositories;
using Voxta.Model.Shared;

namespace Voxta.Core.Configuration;

public class ServicesConfigurationsSetResolver(IUnitOfWorkFactory unitOfWorkFactory, IProfileSettingsCache profileSettingsCache, IServicesConfigurationsSetCache servicesConfigurationsSetCache) : IServicesConfigurationsSetResolver
{
	public async Task<ServiceConfiguration> ResolveOneWithDefaultConfigAsync(Guid userId, ServiceTypes serviceType, CancellationToken cancellationToken)
	{
		ProfileSettings profileSettings = await profileSettingsCache.GetRequiredProfileByUserIdAsync(userId, cancellationToken);
		if (!(await servicesConfigurationsSetCache.GetServicesConfigurationsSet(userId, profileSettings.ServicesConfigurationsSetId, cancellationToken)).Services.TryGetValue(serviceType, out ServiceTypeConfiguration value))
		{
			throw new InvalidOperationException($"Service type {serviceType} not found in profile settings.");
		}
		if (!value.DefaultServiceId.HasValue)
		{
			throw new InvalidOperationException($"Default service ID is null for service type {serviceType} in profile settings.");
		}
		return await ResolveOneWithDefaultConfigAsync(userId, value.DefaultServiceId.Value, serviceType, cancellationToken);
	}

	public async Task<ServiceConfiguration> ResolveOneWithDefaultConfigAsync(Guid userId, Guid moduleId, ServiceTypes serviceType, CancellationToken cancellationToken)
	{
		if (userId == Guid.Empty)
		{
			throw new InvalidOperationException("User ID cannot be empty.");
		}
		if (moduleId == Guid.Empty)
		{
			throw new InvalidOperationException("Module ID cannot be empty.");
		}
		if (serviceType == ServiceTypes.None)
		{
			throw new InvalidOperationException("Service type cannot be None.");
		}
		ServiceConfiguration result;
		await using (IUnitOfWork uow = unitOfWorkFactory.CreateUnitOfWork())
		{
			Module module = (await uow.Modules.GetByIdAsync(userId, moduleId, cancellationToken)) ?? throw new NullReferenceException($"Module {moduleId} not found.");
			if (!serviceType.HasServiceSettings())
			{
				result = ServiceConfiguration.CreateFromModule(module, serviceType);
			}
			else
			{
				ProfileSettings profileSettings = await profileSettingsCache.GetRequiredProfileByUserIdAsync(userId, cancellationToken);
				if (!(await servicesConfigurationsSetCache.GetServicesConfigurationsSet(userId, profileSettings.ServicesConfigurationsSetId, cancellationToken)).Services.TryGetValue(serviceType, out ServiceTypeConfiguration value))
				{
					throw new InvalidOperationException($"Service type {serviceType} not found in profile settings.");
				}
				if (!value.Modules.TryGetValue(moduleId, out ServiceTypeModuleConfiguration moduleConfig))
				{
					result = ServiceConfiguration.CreateFromModule(module, serviceType);
				}
				else if (!moduleConfig.ServiceSettingsId.HasValue)
				{
					result = ServiceConfiguration.CreateFromModule(module, serviceType);
				}
				else
				{
					ServiceSettings serviceSettings = await uow.ServiceSettings.GetByIdAsync(userId, moduleConfig.ServiceSettingsId.Value, cancellationToken);
					if (serviceSettings == null)
					{
						throw new NullReferenceException($"Service settings {moduleConfig.ServiceSettingsId} not found for module {module.ServiceName} {module.LocalId} configuration.");
					}
					result = ServiceConfiguration.CreateFromModuleAndSettings(module, serviceSettings, serviceType);
				}
			}
		}
		return result;
	}

	public async Task<ServiceConfiguration?> ResolveOneAsync(ServicesConfigurationsSet source, ServiceTypes serviceType, CancellationToken cancellationToken)
	{
		if (!source.Services.TryGetValue(serviceType, out ServiceTypeConfiguration value))
		{
			return null;
		}
		ServiceConfigurationFirstPass firstPass = ResolveOneFirstPass(source, serviceType, value);
		ServiceConfiguration result;
		await using (IUnitOfWork uow = unitOfWorkFactory.CreateUnitOfWork())
		{
			Module module = (await uow.Modules.GetByIdAsync(source.UserId, firstPass.ModuleId, cancellationToken)) ?? throw new NullReferenceException($"Module {firstPass.ModuleId} not found.");
			ServiceSettings serviceSettings = ((!firstPass.ServiceSettingsId.HasValue) ? null : (await uow.ServiceSettings.GetByIdAsync(source.UserId, firstPass.ServiceSettingsId.Value, cancellationToken)));
			ServiceSettings serviceSettings2 = serviceSettings;
			ServiceConfiguration serviceConfiguration = ResolveOneSecondPass(firstPass, module, serviceSettings2);
			result = serviceConfiguration;
		}
		return result;
	}

	public async Task<ServicesConfigurations> ResolveAllWithDefaultConfigAsync(Guid userId, CancellationToken cancellationToken)
	{
		ProfileSettings profileSettings = await profileSettingsCache.GetRequiredProfileByUserIdAsync(userId, cancellationToken);
		return await ResolveAllAsync(await servicesConfigurationsSetCache.GetServicesConfigurationsSet(userId, profileSettings.ServicesConfigurationsSetId, cancellationToken), cancellationToken);
	}

	public async Task<ServicesConfigurations> ResolveAllAsync(ServicesConfigurationsSet source, CancellationToken cancellationToken)
	{
		KeyValuePair<ServiceTypes, ServiceTypeConfiguration>[] source2 = source.Services.Where<KeyValuePair<ServiceTypes, ServiceTypeConfiguration>>(delegate(KeyValuePair<ServiceTypes, ServiceTypeConfiguration> x)
		{
			ServiceTypeConfiguration value = x.Value;
			return (value != null && !value.Disabled && (value.UseSettingsOf.HasValue || value.DefaultServiceId.HasValue)) ? true : false;
		}).ToArray();
		ServiceConfigurationFirstPass[] firstPass = source2.Select((KeyValuePair<ServiceTypes, ServiceTypeConfiguration> x) => ResolveOneFirstPass(source, x.Key, x.Value)).ToArray();
		ServicesConfigurations result;
		await using (IUnitOfWork uow = unitOfWorkFactory.CreateUnitOfWork())
		{
			Module[] modules = await uow.Modules.GetManyByIdAsync(source.UserId, firstPass.Select((ServiceConfigurationFirstPass x) => x.ModuleId).ToArray(), cancellationToken);
			ServiceSettings[] serviceSettings = await uow.ServiceSettings.GetManyByIdAsync(source.UserId, (from x in firstPass
				where x.ServiceSettingsId.HasValue
				select x.ServiceSettingsId.Value).ToArray(), cancellationToken);
			IEnumerable<ServiceConfiguration> source3 = firstPass.Select((ServiceConfigurationFirstPass x) => ResolveOneSecondPass(x, modules.First((Module m) => m.LocalId == x.ModuleId), serviceSettings.FirstOrDefault(delegate(ServiceSettings s)
			{
				Guid localId = s.LocalId;
				Guid? serviceSettingsId = x.ServiceSettingsId;
				return localId == serviceSettingsId;
			})));
			ServicesConfigurations servicesConfigurations = new ServicesConfigurations
			{
				ServicesConfigurationsSetId = source.LocalId,
				Services = source3.ToDictionary((ServiceConfiguration x) => x.ServiceType, (ServiceConfiguration x) => x)
			};
			result = servicesConfigurations;
		}
		return result;
	}

	private ServiceConfigurationFirstPass ResolveOneFirstPass(ServicesConfigurationsSet source, ServiceTypes serviceType, ServiceTypeConfiguration sourceItemConfig)
	{
		if (sourceItemConfig.UseSettingsOf.HasValue && sourceItemConfig.UseSettingsOf != serviceType)
		{
			if (!source.Services.TryGetValue(sourceItemConfig.UseSettingsOf.Value, out ServiceTypeConfiguration value))
			{
				throw new InvalidOperationException($"Service type {sourceItemConfig.UseSettingsOf.Value} not found in profile settings.");
			}
			Guid moduleId = value.DefaultServiceId ?? throw new NullReferenceException($"Default service ID is null for useSettingsOf target type {sourceItemConfig.UseSettingsOf}.");
			return new ServiceConfigurationFirstPass
			{
				ServiceType = serviceType,
				ModuleId = moduleId,
				ServiceSettingsId = ResolveServiceSettingsId(serviceType, value, moduleId),
				PreferClientCapability = value.PreferClientCapability
			};
		}
		Guid value2 = sourceItemConfig.DefaultServiceId.Value;
		return new ServiceConfigurationFirstPass
		{
			ServiceType = serviceType,
			ModuleId = value2,
			ServiceSettingsId = ResolveServiceSettingsId(serviceType, sourceItemConfig, value2),
			PreferClientCapability = sourceItemConfig.PreferClientCapability
		};
	}

	private static Guid? ResolveServiceSettingsId(ServiceTypes serviceType, ServiceTypeConfiguration useSettingsOfConfig, Guid moduleId)
	{
		if (!serviceType.HasServiceSettings())
		{
			return null;
		}
		if (!useSettingsOfConfig.Modules.TryGetValue(moduleId, out ServiceTypeModuleConfiguration value))
		{
			return null;
		}
		return value.ServiceSettingsId;
	}

	private ServiceConfiguration ResolveOneSecondPass(ServiceConfigurationFirstPass source, Module module, ServiceSettings? serviceSettings)
	{
		return new ServiceConfiguration
		{
			ServiceType = source.ServiceType,
			PreferClientCapability = source.PreferClientCapability,
			Module = new ServiceConfigurationModule
			{
				ModuleId = module.LocalId,
				ServiceName = module.ServiceName,
				ModuleConfiguration = module.Configuration
			},
			Settings = new ServiceConfigurationSettings
			{
				ServiceSettingsId = serviceSettings?.LocalId,
				ServiceSettings = (serviceSettings?.Configuration ?? new Dictionary<string, string>())
			}
		};
	}
}

```

## Voxta.Core.Connections.Sessions\AudioFramesObserverSession.cs
```csharp
using System;
using System.Diagnostics;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Services.AudioInput.Pipeline;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Connections.Sessions;

public class AudioFramesObserverSession : IDisposable
{
	private const int MaxFrameRate = 10;

	private const int UpdateEveryMilliseconds = 100;

	private readonly IAudioInputPipelineState _state;

	private readonly IUserConnectionTunnel _tunnel;

	private readonly IAudioInputPipelineToken _inspectAudio;

	private readonly Stopwatch _sw = new Stopwatch();

	public AudioFramesObserverSession(IAudioInputPipelineState state, IUserConnectionTunnel tunnel)
	{
		_state = state;
		_tunnel = tunnel;
		state.FrameReceived += OnFrameReceived;
		_inspectAudio = _state.Listen(delegate
		{
		});
		_sw.Start();
	}

	private void OnFrameReceived(object? sender, ICurrentAudioFrameInfo e)
	{
		if (_sw.ElapsedMilliseconds >= 100)
		{
			_tunnel.Send(new ServerAudioFrameMessage
			{
				Rms = e.Rms,
				VoiceActivity = e.HasVoiceActivity
			});
			_sw.Restart();
		}
	}

	public void Dispose()
	{
		_state.FrameReceived -= OnFrameReceived;
		_inspectAudio.Dispose();
	}
}

```

## Voxta.Core.Connections.Sessions\ITranscriptionSession.cs
```csharp
using System;

namespace Voxta.Core.Connections.Sessions;

public interface ITranscriptionSession : IAsyncDisposable
{
}

```

## Voxta.Core.Connections.Sessions\ITranscriptionSessionFactory.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Security;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Connections.Sessions;

public interface ITranscriptionSessionFactory
{
	Task<TranscriptionSession> CreateAsync(IUserConnectionTunnel tunnel, IAuthenticationContext auth, ClientCapabilities capabilities, ClientInspectAudioInputMessage inspectAudioInputMessage, CancellationToken cancellationToken);
}

```

## Voxta.Core.Connections.Sessions\SpeechToTextObserverSession.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Services.SpeechToText;
using Voxta.Core.Runtime;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Connections.Sessions;

public class SpeechToTextObserverSession(ISpeechToTextManager speechToTextManager, IUserConnectionTunnel tunnel, Guid sessionId) : IAsyncDisposable
{
	private ISpeechToTextListener? _listener;

	public async Task StartAsync(CancellationToken cancellationToken)
	{
		if (_listener != null)
		{
			throw new InvalidOperationException("Can only start once");
		}
		_listener = await speechToTextManager.StartTranscriptionAsync("Playground", OnSpeechRecognitionStarted, OnSpeechRecognitionPartial, OnSpeechRecognitionFinished, cancellationToken);
		tunnel.Send(new ServerRecordingStatusMessage
		{
			SessionId = sessionId,
			Enabled = true
		});
	}

	private void OnSpeechRecognitionStarted()
	{
		tunnel.Send(new ServerSpeechRecognitionStartMessage());
	}

	private void OnSpeechRecognitionPartial(string text)
	{
		tunnel.Send(new ServerSpeechRecognitionPartialMessage
		{
			Text = text
		});
	}

	private void OnSpeechRecognitionFinished(string? text, SpeechToTextRecognitionEndReason reason)
	{
		tunnel.Send(new ServerSpeechRecognitionEndMessage
		{
			Text = ((text == "") ? null : text),
			Reason = reason.ToString()
		});
	}

	public async ValueTask DisposeAsync()
	{
		if (_listener != null)
		{
			await _listener.DisposeAsync();
		}
		tunnel.Send(new ServerRecordingStatusMessage
		{
			SessionId = sessionId,
			Enabled = false
		});
		await speechToTextManager.DisposeAsync();
	}
}

```

## Voxta.Core.Connections.Sessions\TranscriptionSession.cs
```csharp
using System;
using System.Threading.Tasks;

namespace Voxta.Core.Connections.Sessions;

public class TranscriptionSession(AudioFramesObserverSession? audioFramesObserver, SpeechToTextObserverSession? speechToTextObserver) : ITranscriptionSession, IAsyncDisposable
{
	public async ValueTask DisposeAsync()
	{
		audioFramesObserver?.Dispose();
		if (speechToTextObserver != null)
		{
			await speechToTextObserver.DisposeAsync();
		}
	}
}

```

## Voxta.Core.Connections.Sessions\TranscriptionSessionFactory.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Configuration;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Registration;
using Voxta.Abstractions.Runtime;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services;
using Voxta.Abstractions.Services.AudioInput;
using Voxta.Abstractions.Services.AudioInput.Pipeline;
using Voxta.Abstractions.Services.SpeechToText;
using Voxta.Abstractions.Services.WakeWord;
using Voxta.Core.Chats.Sessions;
using Voxta.Core.Runtime;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Connections.Sessions;

public class TranscriptionSessionFactory(IServiceFactory serviceFactory, IServicesConfigurationChangeDispatcher servicesConfigurationChangeDispatcher, IServicesConfigurationsSetResolver servicesConfigurationsSetResolver, IModuleDefinitionsRegistry moduleDefinitionsRegistry, IAudioInputPipelineState audioInputPipelineState, ISpeechToTextManagerFactory speechToTextManagerFactory, ILogger<TranscriptionSessionFactory> logger) : ITranscriptionSessionFactory
{
	public async Task<TranscriptionSession> CreateAsync(IUserConnectionTunnel tunnel, IAuthenticationContext auth, ClientCapabilities capabilities, ClientInspectAudioInputMessage inspectAudioInputMessage, CancellationToken cancellationToken)
	{
		Guid audioObserverSessionId = Guid.NewGuid();
		string culture = inspectAudioInputMessage.Culture ?? "en-US";
		ServicesConfigurations config = await servicesConfigurationsSetResolver.ResolveAllWithDefaultConfigAsync(auth.UserId, cancellationToken);
		AudioFramesObserverSession audioFramesObserver = null;
		SpeechToTextObserverSession speechToTextObserver = null;
		try
		{
			if (inspectAudioInputMessage.AudioFrames)
			{
				audioFramesObserver = new AudioFramesObserverSession(audioInputPipelineState, tunnel);
			}
			if (inspectAudioInputMessage.SpeechToText && speechToTextObserver == null)
			{
				IServiceReference<ISpeechToTextService> speechToText = null;
				IServiceReference<IAudioInputService> audioInput = null;
				IServiceReference<IWakeWordService> wakeWord = null;
				ISpeechToTextManager speechToTextManager;
				try
				{
					speechToText = ServiceReference<ISpeechToTextService>.Create(serviceFactory, servicesConfigurationChangeDispatcher, moduleDefinitionsRegistry, NullSpeechToTextService.Instance, logger, auth, config);
					await speechToText.InitializeAsync();
					audioInput = ServiceReference<IAudioInputService>.Create(serviceFactory, servicesConfigurationChangeDispatcher, moduleDefinitionsRegistry, NullAudioInputService.Instance, logger, auth, config);
					if (speechToText.Current.Enabled)
					{
						await audioInput.InitializeAsync();
					}
					wakeWord = ServiceReference<IWakeWordService>.Create(serviceFactory, servicesConfigurationChangeDispatcher, moduleDefinitionsRegistry, NullWakeWordService.Instance, logger, auth, config);
					if (speechToText.Current.Enabled)
					{
						await wakeWord.InitializeAsync();
					}
					speechToTextManager = speechToTextManagerFactory.Create(speechToText, audioInput, wakeWord, auth, audioObserverSessionId, config, tunnel, capabilities);
					try
					{
						await speechToTextManager.InitializeAsync(culture, cancellationToken);
					}
					catch
					{
						await speechToTextManager.DisposeAsync();
						throw;
					}
				}
				catch
				{
					if (speechToText != null)
					{
						await speechToText.DisposeAsync();
					}
					if (audioInput != null)
					{
						await audioInput.DisposeAsync();
					}
					if (wakeWord != null)
					{
						await wakeWord.DisposeAsync();
					}
					throw;
				}
				speechToTextObserver = new SpeechToTextObserverSession(speechToTextManager, tunnel, audioObserverSessionId);
				await speechToTextObserver.StartAsync(cancellationToken);
			}
			return new TranscriptionSession(audioFramesObserver, speechToTextObserver);
		}
		catch
		{
			audioFramesObserver?.Dispose();
			if (speechToTextObserver != null)
			{
				await speechToTextObserver.DisposeAsync();
			}
			throw;
		}
	}
}

```

## Voxta.Core.Connections\ConnectionAuthenticationInfoExtensions.cs
```csharp
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Connections;

public static class ConnectionAuthenticationInfoExtensions
{
	public static void ValidateScope(this UserConnectionRegistrationInfo auth, string scope, ClientMessage message)
	{
		auth.ValidateScope(scope, () => MakeMessage(message));
	}

	private static string MakeMessage(ClientMessage message)
	{
		if (message is ClientChatSessionMessage clientChatSessionMessage)
		{
			return $"{message.GetType().Name} Session: {clientChatSessionMessage.SessionId}";
		}
		return message.GetType().Name;
	}
}

```

## Voxta.Core.Connections\ConnectionClientSettings.cs
```csharp
using Voxta.Model.Shared;

namespace Voxta.Core.Connections;

public class ConnectionClientSettings(ClientCapabilities capabilities)
{
	public static ConnectionClientSettings None => new ConnectionClientSettings(ClientCapabilities.Disabled);

	public ClientCapabilities Capabilities => capabilities;
}

```

## Voxta.Core.Connections\UserConnection.cs
```csharp
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Humanizer;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions;
using Voxta.Abstractions.Caching;
using Voxta.Abstractions.Chats.Creation;
using Voxta.Abstractions.Configuration;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Downloading;
using Voxta.Abstractions.Exporting.Import;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.ModuleRuntimeInstances;
using Voxta.Abstractions.Registration;
using Voxta.Abstractions.Repositories;
using Voxta.Abstractions.Runtime;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services.AudioInput.Pipeline;
using Voxta.Abstractions.Utils;
using Voxta.Abstractions.Web;
using Voxta.Common;
using Voxta.Core.Chats.Commands.Start;
using Voxta.Core.Chats.Creation;
using Voxta.Core.Chats.Sessions;
using Voxta.Core.Connections.Sessions;
using Voxta.Core.Utils;
using Voxta.Model;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ClientMessages;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Connections;

public sealed class UserConnection : IUserConnection, IAsyncDisposable
{
	private readonly ILogger<UserConnection> _logger;

	private readonly CancellationTokenSource _cts;

	private IChatSession? _chatSession;

	private TranscriptionSession? _transcriptionSession;

	private UserConnectionRegistrationInfo _registration;

	private ConnectionClientSettings _clientSettings;

	private const int MaxChatWaitForChatCancelTimeout = 10000;

	private readonly SemaphoreSlim _chatCreateDisposeLock;

	private CancellationTokenSource _chatStartCts;

	private IDisposable? _chatLock;

	private void OnProfileConfigurationChanged(object? sender, ProfileConfigurationChangedEventArgs e)
	{
		if (!(e.UserId != _003Cauth_003EP.UserId))
		{
			SendConfigurationMessage().Forget(_logger);
		}
	}

	private async Task SendConfigurationMessage()
	{
		ProfileSettings profile = await _003CprofileSettingsCache_003EP.GetRequiredProfileByUserIdAsync(_003Cauth_003EP.UserId, _cts.Token);
		await using IUnitOfWork uow = _003CunitOfWorkFactory_003EP.CreateUnitOfWork();
		ServicesConfigurationsSet[] servicesConfigurationsSets = await uow.ServicesConfigurationsSets.GetAllForUserAsync(_003Cauth_003EP.UserId, _cts.Token);
		ServicesConfigurationsSet servicesConfigurationsSet = servicesConfigurationsSets.FirstOrDefault((ServicesConfigurationsSet x) => x.LocalId == profile.ServicesConfigurationsSetId);
		if (servicesConfigurationsSet == null)
		{
			throw new NullReferenceException($"ServicesConfigurationsSet with id {profile.ServicesConfigurationsSetId} not found for user {_003Cauth_003EP.UserId}.");
		}
		Module[] array = ((!_registration.HasScope("services:read")) ? Array.Empty<Module>() : (await uow.Modules.GetManyByUserAsync(_003Cauth_003EP.UserId, _cts.Token)));
		Module[] services = array;
		ServiceSettings[] presets = await uow.ServiceSettings.GetManyByUserAsync(_003Cauth_003EP.UserId, _cts.Token);
		ServiceTypes[] serviceTypes = new ServiceTypes[14]
		{
			ServiceTypes.TextGen,
			ServiceTypes.TextToSpeech,
			ServiceTypes.SpeechToText,
			ServiceTypes.ActionInference,
			ServiceTypes.Summarization,
			ServiceTypes.AudioInput,
			ServiceTypes.AudioOutput,
			ServiceTypes.AudioPipeline,
			ServiceTypes.WakeWord,
			ServiceTypes.VisionCapture,
			ServiceTypes.ComputerVision,
			ServiceTypes.ChatAugmentations,
			ServiceTypes.Memory,
			ServiceTypes.ImageGen
		};
		Dictionary<ServiceTypes, ServerConfigurationMessage.ServiceListItemInfo[]> dictionary = serviceTypes.Select((ServiceTypes serviceType) => (serviceType: serviceType, info: GetServiceListInfo(services, presets, serviceType))).ToDictionary<(ServiceTypes, ServerConfigurationMessage.ServiceListItemInfo[]), ServiceTypes, ServerConfigurationMessage.ServiceListItemInfo[]>(((ServiceTypes serviceType, ServerConfigurationMessage.ServiceListItemInfo[] info) x) => x.serviceType, ((ServiceTypes serviceType, ServerConfigurationMessage.ServiceListItemInfo[] info) x) => x.info);
		dictionary.Add(ServiceTypes.None, GetMissingServiceTypeInfo(services, presets, ServiceTypes.None));
		ServerConfigurationMessage.ServicesConfigurationsSetInfo[] configurations = servicesConfigurationsSets.Select((ServicesConfigurationsSet x) => new ServerConfigurationMessage.ServicesConfigurationsSetInfo
		{
			Id = x.LocalId,
			Name = x.Name,
			IsDefault = (x.LocalId == servicesConfigurationsSet.LocalId),
			Services = serviceTypes.Select((ServiceTypes serviceType) => (serviceType: serviceType, info: GetServiceConfigurationSetInfo(x, serviceType))).ToDictionary<(ServiceTypes, ServerConfigurationMessage.ServicesConfigurationsSetServiceInfo), ServiceTypes, ServerConfigurationMessage.ServicesConfigurationsSetServiceInfo>(((ServiceTypes serviceType, ServerConfigurationMessage.ServicesConfigurationsSetServiceInfo info) y) => y.serviceType, ((ServiceTypes serviceType, ServerConfigurationMessage.ServicesConfigurationsSetServiceInfo info) y) => y.info)
		}).ToArray();
		ServerConfigurationMessage message = new ServerConfigurationMessage
		{
			Configurations = configurations,
			Services = dictionary,
			FeatureFlags = _003CfeatureFlags_003EP.ToArray()
		};
		_003Ctunnel_003EP.Send(message);
	}

	private ServerConfigurationMessage.ServicesConfigurationsSetServiceInfo GetServiceConfigurationSetInfo(ServicesConfigurationsSet servicesConfigurationsSet, ServiceTypes serviceType)
	{
		if (!servicesConfigurationsSet.Services.TryGetValue(serviceType, out ServiceTypeConfiguration value))
		{
			return new ServerConfigurationMessage.ServicesConfigurationsSetServiceInfo
			{
				Enabled = false,
				DefaultServiceId = null,
				UseClientCapability = true,
				UseSettingsOf = null,
				Modules = new Dictionary<Guid, ServerConfigurationMessage.ServicesConfigurationsSetModuleInfo>()
			};
		}
		return new ServerConfigurationMessage.ServicesConfigurationsSetServiceInfo
		{
			Enabled = !value.Disabled,
			DefaultServiceId = value.DefaultServiceId,
			UseClientCapability = value.PreferClientCapability,
			UseSettingsOf = value.UseSettingsOf,
			Modules = value.Modules.ToDictionary<KeyValuePair<Guid, ServiceTypeModuleConfiguration>, Guid, ServerConfigurationMessage.ServicesConfigurationsSetModuleInfo>((KeyValuePair<Guid, ServiceTypeModuleConfiguration> x) => x.Key, (KeyValuePair<Guid, ServiceTypeModuleConfiguration> x) => new ServerConfigurationMessage.ServicesConfigurationsSetModuleInfo
			{
				ServiceSettingsId = x.Value.ServiceSettingsId
			})
		};
	}

	private ServerConfigurationMessage.ServiceListItemInfo[] GetMissingServiceTypeInfo(IEnumerable<Module> services, IEnumerable<ServiceSettings> presets, ServiceTypes serviceType)
	{
		return (from x in services.Where((Module x) => !_003CmoduleDefinitionsRegistry_003EP.Exists(x.ServiceName)).ToArray()
			select new ServerConfigurationMessage.ServiceListItemInfo
			{
				Id = x.LocalId,
				Name = x.ServiceName,
				Required = false,
				Single = false,
				ServiceLabel = x.ServiceName + " (Missing Definition)",
				Enabled = x.Enabled,
				UserLabel = x.Label,
				Score = 0,
				Pricing = 0,
				Hosting = 0,
				ServiceSettingsList = (from p in presets
					where p.ModuleId == x.LocalId
					where p.ServiceType == serviceType.ForServiceSettings()
					select p).Select(ToPresetMap).ToArray(),
				Augmentations = Array.Empty<string>(),
				NeedsInstall = (x.NeedsInstallation || x.NeedsPythonInstallation)
			} into x
			orderby x.Score descending, (!string.IsNullOrEmpty(x.UserLabel)) ? x.UserLabel : x.ServiceLabel
			select x).ToArray();
	}

	private ServerConfigurationMessage.ServiceListItemInfo[] GetServiceListInfo(IEnumerable<Module> services, IEnumerable<ServiceSettings> presets, ServiceTypes serviceType)
	{
		return (from x in (from x in services
				select (Module: x, Definition: _003CmoduleDefinitionsRegistry_003EP.Get(x.ServiceName)) into x
				where x.Definition.Supports.ContainsKey(serviceType)
				select (Module: x.Module, Definition: x.Definition)).ToArray()
			select new ServerConfigurationMessage.ServiceListItemInfo
			{
				Id = x.Module.LocalId,
				Name = x.Module.ServiceName,
				Required = x.Definition.Required,
				Single = x.Definition.Single,
				ServiceLabel = x.Definition.Label,
				Enabled = x.Module.Enabled,
				Logo = ((x.Definition.Logo != null) ? _003CurlProvider_003EP.GetModuleLogoUrl(x.Module.ServiceName) : null),
				UserLabel = x.Module.Label,
				Score = (int)x.Definition.Supports[serviceType],
				Pricing = (int)x.Definition.Pricing,
				Hosting = (int)x.Definition.Hosting,
				ServiceSettingsList = (from p in presets
					where p.ModuleId == x.Module.LocalId
					where p.ServiceType == serviceType.ForServiceSettings()
					select p).Select(ToPresetMap).ToArray(),
				Augmentations = (x.Definition.Augmentations ?? Array.Empty<string>()),
				NeedsInstall = (x.Module.NeedsInstallation || x.Module.NeedsPythonInstallation)
			} into x
			orderby x.Score descending, (!string.IsNullOrEmpty(x.UserLabel)) ? x.UserLabel : x.ServiceLabel
			select x).ToArray();
	}

	private static ServerConfigurationMessage.ServiceSettingsItemInfo ToPresetMap(ServiceSettings serviceSettings)
	{
		return new ServerConfigurationMessage.ServiceSettingsItemInfo
		{
			Id = serviceSettings.LocalId,
			Label = (serviceSettings.Label ?? "Unnamed")
		};
	}

	public UserConnection(IUserConnectionTunnelInternal tunnel, IAuthenticationContext auth, IVoxtaVersion voxtaVersion, IChatFactory chatFactory, IChatSessionManager chatSessionManager, IProfileSettingsCache profileSettingsCache, IEphemeralChatRepository ephemeralChatRepository, IUnitOfWorkFactory unitOfWorkFactory, IChatSessionFactory chatSessionFactory, ITranscriptionSessionFactory transcriptionSessionFactory, IModuleRuntimeInstancesManager moduleRuntimeInstancesManager, IServicesConfigurationChangeDispatcher servicesConfigurationChangeDispatcher, ILoggerFactory loggerFactory, IModuleDefinitionsRegistry moduleDefinitionsRegistry, IUrlProvider urlProvider, IAudioInputPipelineState audioInputPipelineState, IDownloadsManager downloadsManager, VoxtaFeatureFlags featureFlags, TimeProvider timeProvider, IAppDeployImporter appDeployImporter, IDeleteLogicUtil deleteLogicUtil, IUserInteractionRequestsManager userInteractionRequestsManager, CancellationToken connectionAborted)
	{
		_003Ctunnel_003EP = tunnel;
		_003Cauth_003EP = auth;
		_003CvoxtaVersion_003EP = voxtaVersion;
		_003CchatFactory_003EP = chatFactory;
		_003CchatSessionManager_003EP = chatSessionManager;
		_003CprofileSettingsCache_003EP = profileSettingsCache;
		_003CephemeralChatRepository_003EP = ephemeralChatRepository;
		_003CunitOfWorkFactory_003EP = unitOfWorkFactory;
		_003CchatSessionFactory_003EP = chatSessionFactory;
		_003CtranscriptionSessionFactory_003EP = transcriptionSessionFactory;
		_003CmoduleRuntimeInstancesManager_003EP = moduleRuntimeInstancesManager;
		_003CservicesConfigurationChangeDispatcher_003EP = servicesConfigurationChangeDispatcher;
		_003CmoduleDefinitionsRegistry_003EP = moduleDefinitionsRegistry;
		_003CurlProvider_003EP = urlProvider;
		_003CaudioInputPipelineState_003EP = audioInputPipelineState;
		_003CdownloadsManager_003EP = downloadsManager;
		_003CfeatureFlags_003EP = featureFlags;
		_003CtimeProvider_003EP = timeProvider;
		_003CappDeployImporter_003EP = appDeployImporter;
		_003CdeleteLogicUtil_003EP = deleteLogicUtil;
		_003CuserInteractionRequestsManager_003EP = userInteractionRequestsManager;
		_logger = loggerFactory.CreateLogger<UserConnection>();
		_cts = CancellationTokenSource.CreateLinkedTokenSource(connectionAborted);
		_registration = UserConnectionRegistrationInfo.NotRegistered;
		_clientSettings = ConnectionClientSettings.None;
		_chatCreateDisposeLock = new SemaphoreSlim(1, 1);
		_chatStartCts = new CancellationTokenSource();
		base._002Ector();
	}

	public void RegisterEvents()
	{
		_003CservicesConfigurationChangeDispatcher_003EP.ProfileConfigurationChanged += OnProfileConfigurationChanged;
		_003CmoduleRuntimeInstancesManager_003EP.Changed += OnModuleRuntimeInstancesChanged;
		_003CdownloadsManager_003EP.Progress += OnDownloadProgress;
	}

	public async ValueTask DisposeAsync()
	{
		_logger.LogInformation("Client {Auth} connection disposing (Connection ID {ConnectionId})", _registration.Client ?? "UNAUTHORIZED", _003Ctunnel_003EP.ConnectionId);
		_003CservicesConfigurationChangeDispatcher_003EP.ProfileConfigurationChanged -= OnProfileConfigurationChanged;
		_003CmoduleRuntimeInstancesManager_003EP.Changed -= OnModuleRuntimeInstancesChanged;
		_003CdownloadsManager_003EP.Progress -= OnDownloadProgress;
		await _cts.CancelAsync();
		if (_transcriptionSession != null)
		{
			await _transcriptionSession.DisposeAsync();
		}
		try
		{
			await DisposeCurrentChatAsync();
		}
		catch (Exception exception)
		{
			_logger.LogError(exception, "Failed to dispose of current chat");
		}
		_cts.Dispose();
		_chatCreateDisposeLock.Dispose();
	}

	private void OnDownloadProgress(object? sender, DownloadsEventArgs e)
	{
		if (!(e.UserId != _003Cauth_003EP.UserId))
		{
			_003Ctunnel_003EP.Send(new ServerDownloadProgressMessage
			{
				Id = e.Id,
				Target = e.Target,
				Status = e.Status.ToString(),
				Percent = e.Percent
			});
		}
	}

	private void SendDownloadsMessage()
	{
		DownloadProgress[] downloads = _003CdownloadsManager_003EP.GetDownloads(_003Cauth_003EP);
		foreach (DownloadProgress downloadProgress in downloads)
		{
			_003Ctunnel_003EP.Send(new ServerDownloadProgressMessage
			{
				Id = downloadProgress.Id,
				Target = downloadProgress.Target,
				Status = downloadProgress.Status.ToString(),
				Percent = downloadProgress.Percent
			});
		}
	}

	public async Task HandleClientMessage(ClientMessage clientMessage, bool allowForward = true)
	{
		if (clientMessage is ClientChatSessionMessage clientChatSessionMessage)
		{
			if (clientChatSessionMessage.SessionId == Guid.Empty)
			{
				throw new InvalidOperationException("Missing SessionId on message " + clientMessage.GetType().Name);
			}
			Guid sessionId = clientChatSessionMessage.SessionId;
			Guid? obj = _chatSession?.SessionId;
			if (sessionId != obj)
			{
				if (allowForward)
				{
					_registration.ValidateScope("broadcast:write", clientMessage);
					await _003CchatSessionManager_003EP.ForwardToSession(clientChatSessionMessage);
				}
				return;
			}
			if (_chatSession == null)
			{
				throw new NullReferenceException("Cannot process message " + clientChatSessionMessage.GetType().Name + ", there is currently no chat");
			}
			_registration.ValidateScope("message:write", clientMessage);
			await _chatSession.HandleClientMessage(clientChatSessionMessage);
		}
		else if (!(clientMessage is ClientAuthenticateMessage authenticateMessage))
		{
			ClientStartChatMessage clientStartChatMessage = clientMessage as ClientStartChatMessage;
			if (clientStartChatMessage == null)
			{
				ClientResumeChatMessage clientResumeChatMessage = clientMessage as ClientResumeChatMessage;
				if (clientResumeChatMessage == null)
				{
					if (!(clientMessage is ClientStopChatMessage stopChatMessage))
					{
						if (!(clientMessage is ClientSubscribeToChatMessage subscribeToChatMessage))
						{
							if (!(clientMessage is ClientUnsubscribeFromChatMessage clientUnsubscribeFromChatMessage))
							{
								if (!(clientMessage is ClientLoadCharactersListMessage))
								{
									if (!(clientMessage is ClientLoadScenariosListMessage))
									{
										if (!(clientMessage is ClientLoadChatsListMessage clientLoadChatsListMessage))
										{
											if (!(clientMessage is ClientDeleteChatMessage deleteChatMessage))
											{
												if (!(clientMessage is ClientInspectAudioInputMessage inspectAudioInputMessage))
												{
													if (!(clientMessage is ClientListResourcesMessage listResourcesMessage))
													{
														if (!(clientMessage is ClientDeployResourceMessage deployResourceMessage))
														{
															if (clientMessage is ClientFulfillUserInteractionRequestMessage clientFulfillUserInteractionRequestMessage)
															{
																_registration.ValidateScope("resources:write", clientMessage);
																UserInteractionRequestResult result = new UserInteractionRequestResult();
																await _003CuserInteractionRequestsManager_003EP.FulfillUserInteractionRequestAsync(clientFulfillUserInteractionRequestMessage.RequestId, result, _cts.Token);
															}
															else
															{
																_logger.LogError("Unknown message type {ClientMessage}", clientMessage.GetType().Name);
															}
														}
														else
														{
															_registration.ValidateScope("resources:write", clientMessage);
															await DeployResourceAsync(deployResourceMessage, _cts.Token);
														}
													}
													else
													{
														_registration.ValidateScope("resources:read", clientMessage);
														await LoadResourcesListAsync(listResourcesMessage, _cts.Token);
													}
												}
												else
												{
													_registration.ValidateScope("audio:read", clientMessage);
													await CreateOrUpdateAudioObserversAsync(_clientSettings.Capabilities, inspectAudioInputMessage, _cts.Token);
												}
											}
											else
											{
												_registration.ValidateScope("chats:delete", clientMessage);
												if (_chatSession?.ChatId == deleteChatMessage.ChatId)
												{
													await DisposeCurrentChatAsync();
												}
												await using IUnitOfWork uow = _003CunitOfWorkFactory_003EP.CreateUnitOfWork();
												await _003CdeleteLogicUtil_003EP.DeleteChat(uow, _003Cauth_003EP.UserId, deleteChatMessage.ChatId);
												await uow.SaveChangesAsync(_cts.Token);
											}
										}
										else
										{
											_registration.ValidateScope("chats:read", clientMessage);
											await LoadChatsListAsync(clientLoadChatsListMessage.ScenarioId, clientLoadChatsListMessage.CharacterId, _cts.Token);
										}
									}
									else
									{
										_registration.ValidateScope("chats:read", clientMessage);
										await LoadScenariosListAsync(_cts.Token);
									}
								}
								else
								{
									_registration.ValidateScope("characters:read", clientMessage);
									await LoadCharactersListAsync(_cts.Token);
								}
							}
							else
							{
								_registration.ValidateScope("broadcast:read", clientMessage);
								await _003CchatSessionManager_003EP.UnsubscribeFromChat(clientUnsubscribeFromChatMessage.SessionId, _003Ctunnel_003EP);
							}
						}
						else
						{
							_registration.ValidateScope("broadcast:read", clientMessage);
							if (!(await _003CchatSessionManager_003EP.SubscribeToChat(subscribeToChatMessage.SessionId, _003Ctunnel_003EP, _cts.Token)))
							{
								_003Ctunnel_003EP.Send(new ServerChatClosedMessage
								{
									SessionId = subscribeToChatMessage.SessionId,
									ChatId = Guid.Empty
								});
							}
						}
					}
					else
					{
						_registration.ValidateScope("chat:start", clientMessage);
						await StopChatAsync(stopChatMessage);
					}
				}
				else
				{
					_registration.ValidateScope("chat:start", clientMessage);
					StartChat((CancellationToken ct) => HandleResumeChatAsync(clientResumeChatMessage, ct));
				}
			}
			else
			{
				_registration.ValidateScope("chat:start", clientMessage);
				StartChat((CancellationToken ct) => HandleStartChatAsync(clientStartChatMessage, ct));
			}
		}
		else
		{
			await HandleAuthenticate(authenticateMessage);
		}
	}

	private async Task HandleAuthenticate(ClientAuthenticateMessage authenticateMessage)
	{
		ProfileSettings profile = await _003CprofileSettingsCache_003EP.GetProfileByUserIdAsync(_003Cauth_003EP.UserId, _cts.Token);
		if (profile == null)
		{
			_logger.LogWarning("There is no user profile for user {UserId}", _003Cauth_003EP.UserId);
			_003Ctunnel_003EP.Send(new ServerAuthenticationRequiredMessage());
			return;
		}
		await using (IUnitOfWork uow = _003CunitOfWorkFactory_003EP.CreateUnitOfWork())
		{
			if (await uow.Apps.GetByClientAsync(_003Cauth_003EP.UserId, authenticateMessage.Client, _cts.Token) == null)
			{
				App model = new App
				{
					LocalId = Crypto.CreateCryptographicallySecureGuid(),
					UserId = _003Cauth_003EP.UserId,
					ClientId = authenticateMessage.Client,
					DateCreated = _003CtimeProvider_003EP.GetUtcNow(),
					DateModified = _003CtimeProvider_003EP.GetUtcNow()
				};
				await uow.Apps.CreateAsync(model);
				await uow.SaveChangesAsync(_cts.Token);
			}
		}
		_registration = new UserConnectionRegistrationInfo(ResolveScope(authenticateMessage.Scope), authenticateMessage.Client);
		_clientSettings = new ConnectionClientSettings(authenticateMessage.Capabilities);
		_logger.LogInformation("Client {Client} version {ClientVersion} authenticated (Connection ID {ConnectionId})", authenticateMessage.Client, authenticateMessage.ClientVersion, _003Ctunnel_003EP.ConnectionId);
		CharacterItem characterItem = ((!profile.AssistantCharacterId.HasValue) ? null : (await _003CunitOfWorkFactory_003EP.ReadAsync((IUnitOfWork x) => x.Characters.GetItemByIdAsync(_003Cauth_003EP.UserId, profile.AssistantCharacterId.Value, _cts.Token))));
		CharacterItem favorite = characterItem;
		characterItem = ((!profile.WorkCharacterId.HasValue) ? null : (await _003CunitOfWorkFactory_003EP.ReadAsync((IUnitOfWork x) => x.Characters.GetItemByIdAsync(_003Cauth_003EP.UserId, profile.WorkCharacterId.Value, _cts.Token))));
		CharacterItem characterItem2 = characterItem;
		_003Ctunnel_003EP.Send(new ServerWelcomeMessage
		{
			ApiVersion = "2025-08",
			VoxtaServerVersion = _003CvoxtaVersion_003EP.Current,
			User = new ChatParticipantInfo
			{
				Id = profile.LocalId,
				Name = profile.Name,
				ThumbnailUrl = _003CurlProvider_003EP.GetThumbnailUrl<ProfileSettings>(profile.LocalId, profile.Thumbnail)
			},
			Favorite = ((favorite != null) ? new ChatParticipantInfo
			{
				Id = favorite.Id,
				Name = favorite.Name,
				ThumbnailUrl = _003CurlProvider_003EP.GetThumbnailUrl<Character>(favorite.Id, favorite.Thumbnail)
			} : null),
			Assistant = ((characterItem2 != null) ? new ChatParticipantInfo
			{
				Id = characterItem2.Id,
				Name = characterItem2.Name,
				ThumbnailUrl = _003CurlProvider_003EP.GetThumbnailUrl<Character>(characterItem2.Id, characterItem2.Thumbnail)
			} : null)
		});
		SentServiceInstancesMessage();
		await SendConfigurationMessage();
		SendDownloadsMessage();
		if (!_registration.HasScope("broadcast:read"))
		{
			return;
		}
		ChatSessionInfo[] array = _003CchatSessionManager_003EP.GetChats().ToArray();
		if (array.Length == 0)
		{
			return;
		}
		_003Ctunnel_003EP.Send(new ServerChatSessionsUpdatedMessage
		{
			Sessions = array
		});
		if (_003CaudioInputPipelineState_003EP.Recording)
		{
			Guid? guid = _chatSession?.SessionId;
			if (guid.HasValue)
			{
				_003Ctunnel_003EP.Send(new ServerRecordingStatusMessage
				{
					SessionId = guid.Value,
					Enabled = true
				});
			}
		}
	}

	private string[] ResolveScope(string[] requestedScopes)
	{
		if (requestedScopes.Any((string x) => x == "role:admin"))
		{
			if (!(_003Cauth_003EP.Role == "ADMIN"))
			{
				throw new UnauthorizedAccessException($"Requested scope '{"role:admin"}' is forbidden for user '{_003Cauth_003EP.UserId}'");
			}
		}
		else if (requestedScopes.Any((string x) => x == "role:user"))
		{
			if (!(_003Cauth_003EP.Role == "USER"))
			{
				throw new UnauthorizedAccessException($"Requested scope '{"role:user"}' is forbidden for user '{_003Cauth_003EP.UserId}'");
			}
		}
		else
		{
			if (!requestedScopes.All(delegate(string x)
			{
				switch (x)
				{
				case "role:app":
				case "role:provider":
				case "role:inspector":
					return true;
				default:
					return false;
				}
			}))
			{
				throw new InvalidOperationException("Unknown scopes '" + string.Join(", ", requestedScopes) + "'");
			}
			switch (_003Cauth_003EP.Role)
			{
			default:
				throw new UnauthorizedAccessException($"Requested scopes '{string.Join(", ", requestedScopes)}' are forbidden for user '{_003Cauth_003EP.UserId}'");
			case "ADMIN":
			case "USER":
			case "APP":
				break;
			}
		}
		return ClientScopes.Resolve(requestedScopes);
	}

	private async Task LoadCharactersListAsync(CancellationToken cancellationToken)
	{
		GetCharactersQueryParameters parameters = new GetCharactersQueryParameters();
		await using IUnitOfWork uow = _003CunitOfWorkFactory_003EP.CreateUnitOfWork();
		IEnumerable<CharacterItem> characters = await uow.Characters.GetItemsByUserAsync(_003Cauth_003EP.UserId, parameters, cancellationToken);
		if ((await _003CprofileSettingsCache_003EP.GetRequiredProfileByUserIdAsync(_003Cauth_003EP.UserId, cancellationToken)).HideExplicitContent)
		{
			characters = characters.Where((CharacterItem c) => !c.ExplicitContent.IsExplicit()).ToArray();
		}
		Guid[] array = (from x in characters
			where x.PackageId.HasValue
			select x.PackageId.Value).Distinct().ToArray();
		ContentPackageItem[] array2 = ((array.Length == 0) ? Array.Empty<ContentPackageItem>() : (await uow.ContentPackages.GetItemsByIdsAsync(_003Cauth_003EP.UserId, array, cancellationToken)));
		ContentPackageItem[] packages = array2;
		ServerCharactersListLoadedMessage message = new ServerCharactersListLoadedMessage
		{
			Characters = characters.Select((CharacterItem x) => CreateCharacterListItem(x, x.PackageId.HasValue ? packages.FirstOrDefault(delegate(ContentPackageItem p)
			{
				Guid id = p.Id;
				Guid? packageId = x.PackageId;
				return id == packageId;
			}) : null)).ToArray()
		};
		_003Ctunnel_003EP.Send(message);
	}

	private CharactersListItem CreateCharacterListItem(ICharacterItem character, ContentPackageItem? package)
	{
		CharactersListItem obj = new CharactersListItem
		{
			Id = character.Id,
			Name = ((!string.IsNullOrEmpty(character.Label)) ? character.Label : character.Name),
			Version = character.Version,
			AppControlled = character.AppControlled,
			DateCreated = character.DateCreated
		};
		DateTimeOffset dateCreated = character.DateCreated;
		CultureInfo invariantCulture = CultureInfo.InvariantCulture;
		obj.DateCreatedAgo = dateCreated.Humanize(null, invariantCulture);
		obj.DateModified = character.DateModified;
		DateTimeOffset dateModified = character.DateModified;
		invariantCulture = CultureInfo.InvariantCulture;
		obj.DateModifiedAgo = dateModified.Humanize(null, invariantCulture);
		obj.CreatorNotes = character.CreatorNotes?.Excerpt(ephemeral: false, 80);
		obj.Creator = character.Creator;
		obj.Culture = character.Culture;
		obj.ExplicitContent = character.ExplicitContent.IsExplicit();
		obj.ThumbnailUrl = _003CurlProvider_003EP.GetThumbnailUrl<Character>(character.Id, character.Thumbnail);
		obj.ImportedFrom = character.ImportedFrom;
		obj.Favorite = character.Favorite;
		obj.Hidden = character.Hidden;
		obj.ScenarioOnly = character.Hidden;
		obj.Tags = character.Tags;
		obj.PackageId = character.PackageId;
		obj.PackageName = package?.Name;
		obj.PackageVersion = package?.Version;
		return obj;
	}

	private async Task LoadScenariosListAsync(CancellationToken cancellationToken)
	{
		GetScenariosQueryParameters parameters = new GetScenariosQueryParameters();
		await using IUnitOfWork uow = _003CunitOfWorkFactory_003EP.CreateUnitOfWork();
		ScenarioItem[] scenarios = await uow.Scenarios.GetItemsByUserAsync(_003Cauth_003EP.UserId, parameters, cancellationToken);
		if ((await _003CprofileSettingsCache_003EP.GetRequiredProfileByUserIdAsync(_003Cauth_003EP.UserId, cancellationToken)).HideExplicitContent)
		{
			scenarios = scenarios.Where((ScenarioItem c) => !c.ExplicitContent.IsExplicit()).ToArray();
		}
		Guid[] array = (from x in scenarios
			where x.PackageId.HasValue
			select x.PackageId.Value).Distinct().ToArray();
		ContentPackageItem[] array2 = ((array.Length == 0) ? Array.Empty<ContentPackageItem>() : (await uow.ContentPackages.GetItemsByIdsAsync(_003Cauth_003EP.UserId, array, cancellationToken)));
		ContentPackageItem[] packages = array2;
		string client = _registration.Client ?? "";
		ServerScenariosListLoadedMessage message = new ServerScenariosListLoadedMessage
		{
			Scenarios = (from c in scenarios
				where c.Client == null || client == c.Client
				orderby c.Name
				select c).Select(delegate(ScenarioItem c)
			{
				ContentPackageItem contentPackageItem = (c.PackageId.HasValue ? packages.FirstOrDefault(delegate(ContentPackageItem x)
				{
					Guid id = x.Id;
					Guid? packageId = c.PackageId;
					return id == packageId;
				}) : null);
				return new ScenarioInfo
				{
					Id = c.Id,
					Name = c.Name,
					ChatFlow = c.ChatFlow,
					ChatStyle = c.ChatStyle,
					Client = c.Client,
					Roles = c.Roles.Select((ScenarioRole r) => new ScenarioInfoRole
					{
						Name = r.Name,
						Description = r.Description,
						DefaultCharacterId = r.DefaultCharacterId
					}).ToArray(),
					PackageId = contentPackageItem?.Id,
					PackageName = contentPackageItem?.Name,
					PackageVersion = contentPackageItem?.Version
				};
			}).ToArray()
		};
		_003Ctunnel_003EP.Send(message);
	}

	private async Task LoadChatsListAsync(Guid scenarioId, Guid characterId, CancellationToken cancellationToken)
	{
		ChatItem[] source = await _003CunitOfWorkFactory_003EP.ReadAsync((IUnitOfWork x) => x.Chats.GetItemsByCharacterAsync(_003Cauth_003EP.UserId, characterId, cancellationToken));
		ServerChatsListLoadedMessage message = new ServerChatsListLoadedMessage
		{
			Chats = (from c in source
				orderby c.CreatedAt descending
				where (!(scenarioId != Guid.Empty)) ? (!c.ScenarioId.HasValue) : (c.ScenarioId == scenarioId)
				select c).Select(delegate(ChatItem c)
			{
				ServerChatsListLoadedMessage.ChatsListItem obj = new ServerChatsListLoadedMessage.ChatsListItem
				{
					Id = c.Id
				};
				DateTimeOffset createdAt = c.CreatedAt;
				CultureInfo invariantCulture = CultureInfo.InvariantCulture;
				obj.Created = createdAt.Humanize(null, invariantCulture);
				return obj;
			}).ToArray()
		};
		_003Ctunnel_003EP.Send(message);
	}

	private void OnModuleRuntimeInstancesChanged(object? sender, ModuleRuntimeInstancesChangedEventArgs e)
	{
		if (_003Cauth_003EP.Role == "ADMIN")
		{
			ServerModuleRuntimeInstancesMessage message = new ServerModuleRuntimeInstancesMessage
			{
				Instances = e.Instances.Select(ToResponse).ToArray()
			};
			_003Ctunnel_003EP.Send(message);
		}
	}

	private void SentServiceInstancesMessage()
	{
		IReadOnlyList<ModuleRuntimeInstanceTicketRef> source = _003CmoduleRuntimeInstancesManager_003EP.ListInstances();
		ServerModuleRuntimeInstancesMessage message = new ServerModuleRuntimeInstancesMessage
		{
			Instances = source.Select(ToResponse).ToArray()
		};
		_003Ctunnel_003EP.Send(message);
	}

	private static ModuleRuntimeInstanceInfo ToResponse(ModuleRuntimeInstanceTicketRef x)
	{
		return new ModuleRuntimeInstanceInfo
		{
			Id = x.Id,
			Name = x.Configuration.Name,
			Status = x.Status.ToString(),
			CreatedAt = x.CreatedAt,
			Label = x.Configuration.GetLabel()
		};
	}

	private async Task LoadResourcesListAsync(ClientListResourcesMessage listResourcesMessage, CancellationToken cancellationToken)
	{
		ChatResourceInformation[] resources = await _003CappDeployImporter_003EP.ListAsync(_003Cauth_003EP.UserId, listResourcesMessage.Resources, cancellationToken);
		_003Ctunnel_003EP.Send(new ServerListResourcesResultMessage
		{
			Resources = resources
		});
	}

	private async Task DeployResourceAsync(ClientDeployResourceMessage deployResourceMessage, CancellationToken cancellationToken)
	{
		try
		{
			if (deployResourceMessage.Data is ClientDeployResourceBase64File clientDeployResourceBase64File)
			{
				byte[] array = Convert.FromBase64String(clientDeployResourceBase64File.Base64Data);
				byte[] data = array;
				array = ((!(deployResourceMessage.Thumbnail is ClientDeployResourceBase64File clientDeployResourceBase64File2)) ? null : Convert.FromBase64String(clientDeployResourceBase64File2.Base64Data));
				byte[] array2 = array;
				ImportableFile data2 = ImportableFile.FromFilename(deployResourceMessage.Data.Name, data);
				ImportableFile thumbnail = ((array2 != null) ? ImportableFile.FromFilename(deployResourceMessage.Thumbnail.Name, array2) : null);
				ImportableObject importableObject = await _003CappDeployImporter_003EP.ImportAsync(_003Cauth_003EP.UserId, data2, thumbnail, null, overwrite: false, cancellationToken);
				if (importableObject == null)
				{
					_003Ctunnel_003EP.Send(new ServerDeployResourceResultMessage
					{
						Id = deployResourceMessage.Id,
						Success = false,
						Error = "Failed to deploy resource"
					});
				}
				else
				{
					_003Ctunnel_003EP.Send(new ServerDeployResourceResultMessage
					{
						Id = importableObject.LocalId,
						Name = importableObject.Name,
						Version = importableObject.Version,
						Success = true
					});
				}
				return;
			}
			throw new NotSupportedException("Unsupported file transfer type");
		}
		catch (Exception ex)
		{
			_logger.LogError(ex, "Failed to deploy resource {Id}", deployResourceMessage.Id);
			_003Ctunnel_003EP.Send(new ServerDeployResourceResultMessage
			{
				Id = deployResourceMessage.Id,
				Success = false,
				Error = ex.Message
			});
		}
	}

	private async Task HandleStartChatAsync(ClientStartChatMessage startChatMessage, CancellationToken cancellationToken)
	{
		_logger.LogInformation("Starting new chat...");
		ProfileSettings profile = await _003CprofileSettingsCache_003EP.GetRequiredProfileByUserIdAsync(_003Cauth_003EP.UserId, cancellationToken);
		Chat chat = null;
		if (startChatMessage.ChatId.HasValue)
		{
			if (startChatMessage.Ephemeral)
			{
				throw new InvalidOperationException("Cannot resume ephemeral chat");
			}
			chat = await _003CunitOfWorkFactory_003EP.ReadAsync((IUnitOfWork x) => x.Chats.GetByIdAsync(_003Cauth_003EP.UserId, startChatMessage.ChatId.Value, cancellationToken));
		}
		ChatResourcesRequest request;
		if (chat != null)
		{
			if (startChatMessage.ScenarioId.HasValue && chat.ScenarioId != startChatMessage.ScenarioId.Value)
			{
				throw new InvalidOperationException("ScenarioId does not match the chat's scenario");
			}
			Guid? guid = startChatMessage.CharacterId ?? ((chat.Characters.Count > 0) ? new Guid?(chat.Characters[0]) : ((Guid?)null));
			if (guid.HasValue && !chat.Characters.Contains(guid.Value))
			{
				throw new InvalidOperationException("CharacterId does not match the chat's characters");
			}
			ChatResourcesRequest chatResourcesRequest = new ChatResourcesRequest();
			chatResourcesRequest.UserId = _003Cauth_003EP.UserId;
			ChatResourcesRequest chatResourcesRequest2 = chatResourcesRequest;
			List<Guid> characters = chat.Characters;
			int num = 0;
			VersionedGuid[] array = new VersionedGuid[characters.Count];
			foreach (Guid item in characters)
			{
				array[num] = item;
				num++;
			}
			chatResourcesRequest2.Characters = array;
			chatResourcesRequest.Scenario = chat.ScenarioId;
			chatResourcesRequest.Dependencies = startChatMessage.Dependencies ?? Array.Empty<DependencyInfo>();
			request = chatResourcesRequest;
		}
		else
		{
			ChatResourcesRequest chatResourcesRequest = new ChatResourcesRequest();
			chatResourcesRequest.UserId = _003Cauth_003EP.UserId;
			chatResourcesRequest.Characters = startChatMessage.CharacterIds?.Select(VersionedGuid.FromGuid).ToArray() ?? new VersionedGuid[1] { VersionedGuid.FromGuid(startChatMessage.CharacterId ?? throw new NullReferenceException("CharacterId is required")) };
			chatResourcesRequest.Scenario = startChatMessage.ScenarioId;
			chatResourcesRequest.Dependencies = startChatMessage.Dependencies ?? Array.Empty<DependencyInfo>();
			chatResourcesRequest.DefaultNarratorCharacterId = profile.NarratorCharacterId;
			request = chatResourcesRequest;
		}
		ChatResources data = await _003CchatFactory_003EP.LoadChatResourcesAsync(request, cancellationToken);
		if (chat == null)
		{
			CreateChatOptions options = new CreateChatOptions
			{
				Ephemeral = startChatMessage.Ephemeral,
				UseChatMemory = startChatMessage.UseChatMemory
			};
			chat = await _003CchatFactory_003EP.CreateChatAsync(data, startChatMessage.Roles, _registration.Client, options, cancellationToken);
		}
		else
		{
			chat.LastSessionTimestamp = _003CtimeProvider_003EP.GetUtcNow();
			if (!chat.Ephemeral)
			{
				await using IUnitOfWork uow = _003CunitOfWorkFactory_003EP.CreateUnitOfWork();
				await uow.Chats.UpdateAsync(chat);
				await uow.SaveChangesAsync(cancellationToken);
			}
		}
		await StartChatAsync(profile, chat, data, startChatMessage, cancellationToken);
	}

	private async Task HandleResumeChatAsync(ClientResumeChatMessage resumeChatMessage, CancellationToken cancellationToken)
	{
		_logger.LogInformation("Resuming chat {ChatId}...", resumeChatMessage.ChatId);
		await using IUnitOfWork uow = _003CunitOfWorkFactory_003EP.CreateUnitOfWork();
		ProfileSettings profile = await _003CprofileSettingsCache_003EP.GetRequiredProfileByUserIdAsync(_003Cauth_003EP.UserId, cancellationToken);
		Chat chat = ((!(resumeChatMessage.ChatId == Guid.Empty)) ? (await uow.Chats.GetByIdAsync(_003Cauth_003EP.UserId, resumeChatMessage.ChatId, cancellationToken)) : _003CephemeralChatRepository_003EP.Acquire(_003Cauth_003EP.UserId));
		Chat chat2 = chat;
		if (chat2 == null)
		{
			throw new InvalidOperationException($"Chat {resumeChatMessage.ChatId} not found");
		}
		if (chat2.Client != _registration.Client)
		{
			_logger.LogWarning("Resuming chat {ChatId} with client {ClientId} but chat was originally created with {ChatClientId}", resumeChatMessage.ChatId, _registration.Client, chat2.Client);
		}
		if (chat2.Characters.Count == 0)
		{
			throw new InvalidOperationException("Chat has no characters.");
		}
		if ((await uow.Characters.GetManyByIdAsync(_003Cauth_003EP.UserId, chat2.Characters, cancellationToken)).Length == 0)
		{
			throw new InvalidOperationException($"Character {chat2.Characters[0]} referenced in chat {resumeChatMessage.ChatId} was not found");
		}
		chat2.LastSessionTimestamp = _003CtimeProvider_003EP.GetUtcNow();
		if (!chat2.Ephemeral)
		{
			await uow.Chats.UpdateAsync(chat2);
			await uow.SaveChangesAsync(cancellationToken);
		}
		IChatFactory chatFactory = _003CchatFactory_003EP;
		ChatResourcesRequest chatResourcesRequest = new ChatResourcesRequest();
		chatResourcesRequest.UserId = _003Cauth_003EP.UserId;
		ChatResourcesRequest chatResourcesRequest2 = chatResourcesRequest;
		List<Guid> characters = chat2.Characters;
		int num = 0;
		VersionedGuid[] array = new VersionedGuid[characters.Count];
		foreach (Guid item in characters)
		{
			array[num] = item;
			num++;
		}
		chatResourcesRequest2.Characters = array;
		chatResourcesRequest.Scenario = chat2.ScenarioId;
		chatResourcesRequest.Dependencies = Array.Empty<DependencyInfo>();
		chatResourcesRequest.DefaultNarratorCharacterId = profile.NarratorCharacterId;
		await StartChatAsync(profile, chat2, await chatFactory.LoadChatResourcesAsync(chatResourcesRequest, cancellationToken), resumeChatMessage, cancellationToken);
	}

	private async Task StartChatAsync(ProfileSettings profile, Chat chat, ChatResources data, ClientDoChatMessageBase resumeChatMessage, CancellationToken cancellationToken)
	{
		ChatStyles chatStyles = ChatStylesSelector.Select(data.Scenario?.ChatStyle, data.Characters[0].ChatStyle);
		bool flag = ((chatStyles == ChatStyles.Companion || chatStyles == ChatStyles.Assistant) ? true : false);
		bool flag2 = flag;
		StartChatRequest request = new StartChatRequest
		{
			Actions = resumeChatMessage.Actions,
			Events = resumeChatMessage.Events,
			ContextKey = resumeChatMessage.ContextKey,
			Contexts = resumeChatMessage.Contexts,
			EnableRoles = resumeChatMessage.EnableRoles,
			NotifyUserAwayReturn = (flag2 && data.Characters[0].NotifyUserAwayReturn),
			SetFlags = resumeChatMessage.SetFlags
		};
		Guid sessionId = await _003CchatSessionManager_003EP.Create(this, _003Ctunnel_003EP, cancellationToken);
		try
		{
			_chatSession = await _003CchatSessionFactory_003EP.CreateAsync(_003Ctunnel_003EP, _003Cauth_003EP, profile, chat, data, _clientSettings, sessionId, cancellationToken);
			await _003CchatSessionManager_003EP.Register(_chatSession, cancellationToken);
			_logger.LogInformation("Started chat: {ChatId} in session {SessionId}", chat.LocalId, sessionId);
			_chatSession.StartChatAsync(request);
		}
		catch (Exception ex)
		{
			if (ex is VoxtaServiceException exc)
			{
				_003Ctunnel_003EP.Send(new ServerChatSessionErrorMessage(sessionId, exc));
			}
			else
			{
				_003Ctunnel_003EP.Send(new ServerChatSessionErrorMessage(sessionId, ex.Message));
			}
			if (_chatSession != null)
			{
				await _003CchatSessionManager_003EP.Unregister(_chatSession);
				await _chatSession.DisposeAsync();
				_chatSession = null;
				throw;
			}
			throw;
		}
	}

	private void StartChat(Func<CancellationToken, Task> startChatFn)
	{
		_cts.Token.ThrowIfCancellationRequested();
		StartChatAsync(startChatFn).Forget(_logger);
	}

	private async Task StartChatAsync(Func<CancellationToken, Task> startChatFn)
	{
		_logger.LogInformation("Getting ready to start chat...");
		CancellationTokenSource value = CancellationTokenSource.CreateLinkedTokenSource(_cts.Token);
		await Interlocked.Exchange(ref _chatStartCts, value).CancelAsync();
		if (!(await _chatCreateDisposeLock.WaitAsync(0, _chatStartCts.Token)))
		{
			_logger.LogWarning("Another chat is still in progress, waiting {Timeout} seconds for it to finish", Math.Round(10.0));
			if (!(await _chatCreateDisposeLock.WaitAsync(10000, _chatStartCts.Token)))
			{
				_logger.LogError("Another chat is still in progress, try again later or check in the logs for more information");
				if (!_cts.IsCancellationRequested)
				{
					_003Ctunnel_003EP.Send(new ServerErrorMessage("Another chat is still trying to start or close, try again later or check in the logs for more information"));
				}
				return;
			}
			_logger.LogInformation("The other chat tasks have completed, resuming chat start...");
		}
		try
		{
			_chatLock = await _003CchatSessionManager_003EP.AcquireTokenAsync(_003Cauth_003EP.UserId, _chatStartCts.Token);
			await startChatFn(_chatStartCts.Token);
			if (_chatStartCts.IsCancellationRequested)
			{
				await DisposeCurrentChatAsyncUnsafe();
			}
		}
		catch (OperationCanceledException exception)
		{
			_logger.LogWarning(exception, "A starting chat was canceled");
			if (_chatSession != null || _chatLock != null)
			{
				await DisposeCurrentChatAsyncUnsafe();
			}
		}
		catch (Exception ex)
		{
			IChatSession chatSession = _chatSession;
			if (!_cts.IsCancellationRequested)
			{
				if (ex is MissingChatResourcesException ex2)
				{
					_logger.LogWarning("Resources are missing, the app may publish them and retry automatically: {Resources}", string.Join(", ", ex2.Resources.Select((ChatResourceStatusInformation r) => r.ToString())));
					_003Ctunnel_003EP.Send(new ServerMissingResourcesErrorMessage
					{
						Resources = ex2.Resources
					});
				}
				else
				{
					_logger.LogError(ex, "Failed to start chat");
					_003Ctunnel_003EP.Send((chatSession != null) ? new ServerChatSessionErrorMessage(chatSession.SessionId, ex) : new ServerErrorMessage(ex));
				}
			}
			if (chatSession != null || _chatLock != null)
			{
				await DisposeCurrentChatAsyncUnsafe();
			}
		}
		finally
		{
			try
			{
				_chatCreateDisposeLock.Release();
			}
			catch (ObjectDisposedException)
			{
			}
		}
	}

	private async Task StopChatAsync(ClientStopChatMessage stopChatMessage)
	{
		bool hasLoggedWaiting = false;
		await _chatStartCts.CancelAsync();
		if (!(await _chatCreateDisposeLock.WaitAsync(0)))
		{
			hasLoggedWaiting = true;
			_logger.LogWarning("Another chat is still starting or closing, waiting for it to finish...");
			if (!(await _chatCreateDisposeLock.WaitAsync(10000)))
			{
				throw new InvalidOperationException("Failed to acquire chat create/dispose lock while trying to stop the current starting chat from completing");
			}
			_logger.LogInformation("The other chat tasks have completed, resuming chat stop...");
		}
		try
		{
			IChatSession chatSession = _chatSession;
			if (chatSession == null)
			{
				if (hasLoggedWaiting)
				{
					_logger.LogInformation("No chat session to stop");
				}
				return;
			}
			if (stopChatMessage.SessionId.HasValue)
			{
				Guid sessionId = chatSession.SessionId;
				Guid? sessionId2 = stopChatMessage.SessionId;
				if (sessionId != sessionId2)
				{
					throw new InvalidOperationException($"Cannot stop chat session {stopChatMessage.SessionId}, another session is in progress.");
				}
			}
			await DisposeCurrentChatAsyncUnsafe();
		}
		finally
		{
			try
			{
				_chatCreateDisposeLock.Release();
				_003CephemeralChatRepository_003EP.Release(_003Cauth_003EP.UserId);
			}
			catch (ObjectDisposedException)
			{
			}
		}
	}

	private async Task DisposeCurrentChatAsync()
	{
		await _chatStartCts.CancelAsync();
		if (!(await _chatCreateDisposeLock.WaitAsync(10000)))
		{
			_logger.LogError("the currently loading chat failed to cancel within the specified timeout, disposal of the current chat will continue, but might generate further errors");
		}
		try
		{
			await DisposeCurrentChatAsyncUnsafe();
		}
		finally
		{
			try
			{
				_chatCreateDisposeLock.Release();
			}
			catch (ObjectDisposedException)
			{
			}
		}
	}

	private async Task DisposeCurrentChatAsyncUnsafe()
	{
		_ = 1;
		try
		{
			IChatSession chat = _chatSession;
			_chatSession = null;
			if (chat != null)
			{
				_logger.LogInformation("Leaving chat {ChatId} (Session {SessionId})", chat.ChatId, chat.SessionId);
				await _003CchatSessionManager_003EP.Unregister(chat);
				Task chatDisposeTask = chat.DisposeAsync().AsTask();
				if (await Task.WhenAny(chatDisposeTask, Task.Delay(10000)) != chatDisposeTask)
				{
					_logger.LogError("Chat {ChatId} failed to dispose within the specified timeout, some services may not be fully disposed", chat.ChatId);
				}
				else
				{
					_logger.LogInformation("Chat {ChatId} disposed", chat.ChatId);
				}
			}
			if (_chatLock != null)
			{
				IDisposable? chatLock = _chatLock;
				_chatLock = null;
				chatLock.Dispose();
			}
		}
		catch (Exception exception)
		{
			_logger.LogError(exception, "Failed to dispose chat, Voxta is in a potentially unstable state, consider restarting");
		}
	}

	private async Task CreateOrUpdateAudioObserversAsync(ClientCapabilities capabilities, ClientInspectAudioInputMessage inspectAudioInputMessage, CancellationToken cancellationToken)
	{
		if (_transcriptionSession != null)
		{
			await _transcriptionSession.DisposeAsync();
			_transcriptionSession = null;
		}
		_transcriptionSession = await _003CtranscriptionSessionFactory_003EP.CreateAsync(_003Ctunnel_003EP, _003Cauth_003EP, capabilities, inspectAudioInputMessage, cancellationToken);
	}
}

```

## Voxta.Core.Connections\UserConnectionFactory.cs
```csharp
using System;
using System.Threading;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions;
using Voxta.Abstractions.Caching;
using Voxta.Abstractions.Chats.Creation;
using Voxta.Abstractions.Configuration;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Downloading;
using Voxta.Abstractions.Exporting.Import;
using Voxta.Abstractions.ModuleRuntimeInstances;
using Voxta.Abstractions.Registration;
using Voxta.Abstractions.Repositories;
using Voxta.Abstractions.Runtime;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services.AudioInput.Pipeline;
using Voxta.Abstractions.Utils;
using Voxta.Abstractions.Web;
using Voxta.Core.Chats.Creation;
using Voxta.Core.Chats.Sessions;
using Voxta.Core.Connections.Sessions;
using Voxta.Core.Utils;

namespace Voxta.Core.Connections;

public class UserConnectionFactory(IServiceProvider sp)
{
	public IUserConnection Create(IUserConnectionTunnelInternal tunnel, IAuthenticationContext auth, CancellationToken connectionAborted)
	{
		UserConnection userConnection = new UserConnection(tunnel, auth, sp.GetRequiredService<IVoxtaVersion>(), sp.GetRequiredService<IChatFactory>(), sp.GetRequiredService<IChatSessionManager>(), sp.GetRequiredService<IProfileSettingsCache>(), sp.GetRequiredService<IEphemeralChatRepository>(), sp.GetRequiredService<IUnitOfWorkFactory>(), sp.GetRequiredService<IChatSessionFactory>(), sp.GetRequiredService<ITranscriptionSessionFactory>(), sp.GetRequiredService<IModuleRuntimeInstancesManager>(), sp.GetRequiredService<IServicesConfigurationChangeDispatcher>(), sp.GetRequiredService<ILoggerFactory>(), sp.GetRequiredService<IModuleDefinitionsRegistry>(), sp.GetRequiredService<IUrlProvider>(), sp.GetRequiredService<IAudioInputPipelineState>(), sp.GetRequiredService<IDownloadsManager>(), sp.GetRequiredService<VoxtaFeatureFlags>(), sp.GetRequiredService<TimeProvider>(), sp.GetRequiredService<IAppDeployImporter>(), sp.GetRequiredService<IDeleteLogicUtil>(), sp.GetRequiredService<IUserInteractionRequestsManager>(), connectionAborted);
		userConnection.RegisterEvents();
		return userConnection;
	}
}

```

## Voxta.Core.Connections\UserConnectionRegistrationInfo.cs
```csharp
using System;
using System.Linq;
using Voxta.Model;

namespace Voxta.Core.Connections;

public class UserConnectionRegistrationInfo
{
	public static UserConnectionRegistrationInfo NotRegistered => new UserConnectionRegistrationInfo(Array.Empty<string>(), null);

	public string[] Scopes { get; } = ClientScopes.Resolve(scopes);

	public string? Client { get; }

	public UserConnectionRegistrationInfo(string[] scopes, string? client)
	{
		Client = client;
		base._002Ector();
	}

	public bool HasScope(string scope)
	{
		return Scopes.Contains(scope);
	}

	public void ValidateScope(string scope, Func<string> functionName)
	{
		if (Scopes.Length == 0)
		{
			throw new InvalidOperationException("Call authenticate first");
		}
		if (!Scopes.Contains(scope))
		{
			throw new InvalidOperationException("You need scope " + scope + " to execute " + functionName());
		}
	}
}

```

## Voxta.Core.Connections\UserConnectionTunnelAccessor.cs
```csharp
using Voxta.Abstractions.Connections;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Connections;

public class UserConnectionTunnelAccessor(IUserConnectionTunnel tunnel) : IUserConnectionTunnel
{
	public void Send<T>(T message) where T : ServerMessage
	{
		tunnel.Send(message);
	}
}

```

## Voxta.Core.DependencyInjection\DynamicServiceAccessor.cs
```csharp
using System;
using Microsoft.Extensions.DependencyInjection;
using Voxta.Abstractions.DependencyInjection;

namespace Voxta.Core.DependencyInjection;

public class DynamicServiceAccessor<TParent, TService>(IServiceProvider sp, Func<TParent, TService> factory) : IDynamicServiceAccessor<TService> where TParent : notnull where TService : notnull
{
	public TService GetCurrent()
	{
		return _003Cfactory_003EP(_003Csp_003EP.GetRequiredService<TParent>());
	}
}

```

## Voxta.Core.DependencyInjection\FixedDynamicServiceAccessor.cs
```csharp
using Voxta.Abstractions.DependencyInjection;

namespace Voxta.Core.DependencyInjection;

public class FixedDynamicServiceAccessor<TService>(TService value) : IDynamicServiceAccessor<TService> where TService : notnull
{
	public TService GetCurrent()
	{
		return _003Cvalue_003EP;
	}
}

```

## Voxta.Core.DependencyInjection\IScopedServiceAccessor.cs
```csharp
using System;

namespace Voxta.Core.DependencyInjection;

public interface IScopedServiceAccessor<out T> : IAsyncDisposable
{
	T GetService();
}

```

## Voxta.Core.DependencyInjection\ScopedServiceAccessor.cs
```csharp
using System;
using System.Threading.Tasks;

namespace Voxta.Core.DependencyInjection;

public class ScopedServiceAccessor<T> : IScopedServiceAccessor<T>, IAsyncDisposable
{
	private T? _service;

	private bool _resolved;

	public T GetService()
	{
		if (_resolved)
		{
			throw new InvalidOperationException("Service " + typeof(T).Name + " was already resolved");
		}
		if (_service == null)
		{
			throw new NullReferenceException("Service " + typeof(T).Name + " was not initialized");
		}
		_resolved = true;
		return _service;
	}

	public void SetService(T service)
	{
		_service = service;
	}

	public async ValueTask DisposeAsync()
	{
		if (_resolved)
		{
			return;
		}
		T service = _service;
		if (!(service is IAsyncDisposable asyncDisposable))
		{
			if (service is IDisposable disposable)
			{
				disposable.Dispose();
			}
		}
		else
		{
			await asyncDisposable.DisposeAsync();
		}
	}
}

```

## Voxta.Core.DependencyInjection\ServiceCollectionExtensions.cs
```csharp
using System;
using Microsoft.Extensions.DependencyInjection;
using Voxta.Abstractions.DependencyInjection;

namespace Voxta.Core.DependencyInjection;

public static class ServiceCollectionExtensions
{
	public static void AddDynamicServiceAccessor<TParent, TService>(this IServiceCollection services, Func<TParent, TService> factory) where TParent : notnull where TService : notnull
	{
		services.AddScoped((Func<IServiceProvider, IDynamicServiceAccessor<TService>>)((IServiceProvider sp) => new DynamicServiceAccessor<TParent, TService>(sp, factory)));
	}

	public static void AddScopedServiceAccessor<TService>(this IServiceCollection services) where TService : class
	{
		services.AddScoped((IServiceProvider sp) => sp.GetRequiredService<IScopedServiceAccessor<TService>>().GetService());
		services.AddScoped<IScopedServiceAccessor<TService>, ScopedServiceAccessor<TService>>();
	}
}

```

## Voxta.Core.DependencyInjection\ServiceProviderExtensions.cs
```csharp
using System;
using Microsoft.Extensions.DependencyInjection;

namespace Voxta.Core.DependencyInjection;

public static class ServiceProviderExtensions
{
	public static void RegisterScopedServiceAccessor<TService>(this IServiceProvider sp, TService service) where TService : class
	{
		IScopedServiceAccessor<TService> requiredService;
		try
		{
			requiredService = sp.GetRequiredService<IScopedServiceAccessor<TService>>();
		}
		catch (InvalidOperationException innerException)
		{
			throw new InvalidOperationException("Service accessor for " + typeof(TService).Name + " was not added", innerException);
		}
		((requiredService as ScopedServiceAccessor<TService>) ?? throw new InvalidOperationException("Service accessor for " + typeof(TService).Name + " is not of type " + typeof(ScopedServiceAccessor<TService>).Name)).SetService(service);
	}
}

```

## Voxta.Core.DependencyInjection\VisionCaptureServicesAccessor.cs
```csharp
using Voxta.Abstractions.DependencyInjection;
using Voxta.Abstractions.Services.VisionCapture;
using Voxta.Core.Chats.Sessions;
using Voxta.Model.Shared;

namespace Voxta.Core.DependencyInjection;

public class VisionCaptureServicesAccessor(IChatSessionServices chatSessionServices) : IVisionCaptureServicesAccessor
{
	public IVisionCaptureService Get(ComputerVisionSource source)
	{
		return source switch
		{
			ComputerVisionSource.Eyes => chatSessionServices.VisionManager.EyesVisionCapture, 
			ComputerVisionSource.Screen => chatSessionServices.VisionManager.ScreenVisionCapture, 
			_ => NullVisionCaptureService.Instance, 
		};
	}
}

```

## Voxta.Core.Diagnostics\MarkdownReportGenerator.cs
```csharp
using System.Collections.Generic;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using Voxta.Abstractions.Diagnostics;
using Voxta.Model.Shared;

namespace Voxta.Core.Diagnostics;

public class MarkdownReportGenerator
{
	private readonly StringBuilder _sb = new StringBuilder();

	private readonly JsonSerializerOptions _jsonSerializerOptions = new JsonSerializerOptions
	{
		WriteIndented = true,
		DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull
	};

	public MarkdownReportGenerator()
	{
		_sb.AppendLine("# Voxta Diagnostics Report");
		_sb.AppendLine();
	}

	public void General(string voxtaVersion)
	{
		_sb.AppendLine("## General");
		_sb.AppendLine();
		_sb.AppendLine("- Voxta Version: " + voxtaVersion);
		_sb.AppendLine();
	}

	public void AddMany(string title, IEnumerable<InferenceLogger> observers)
	{
		foreach (InferenceLogger observer in observers)
		{
			Add(observer, title);
		}
	}

	private void Add(InferenceLogger? observer, string title)
	{
		if (observer != null)
		{
			StringBuilder sb = _sb;
			StringBuilder.AppendInterpolatedStringHandler handler = new StringBuilder.AppendInterpolatedStringHandler(3, 1, sb);
			handler.AppendLiteral("## ");
			handler.AppendFormatted(title);
			sb.AppendLine(ref handler);
			_sb.AppendLine();
			_sb.AppendLine("Service: " + observer.ServiceName);
			_sb.AppendLine();
			if (observer.Request != null)
			{
				_sb.AppendLine("### Parameters");
				_sb.AppendLine();
				AppendDict(observer.Request.GetDisplayDict());
				_sb.AppendLine();
			}
			if (observer.Fields.Count > 0)
			{
				_sb.AppendLine("### Response Fields");
				_sb.AppendLine();
				AppendDict(observer.Fields);
				_sb.AppendLine();
			}
			_sb.AppendLine();
			_sb.AppendLine("### Prompt");
			_sb.AppendLine();
			AppendPrompt(observer.Request?.GetMessages());
			_sb.AppendLine();
			_sb.AppendLine("### Result");
			_sb.AppendLine();
			WriteChunks(observer.Chunks);
			_sb.AppendLine();
			if (observer.ThinkingChunks.Count > 0)
			{
				_sb.AppendLine("### Thinking");
				_sb.AppendLine();
				WriteChunks(observer.ThinkingChunks);
				_sb.AppendLine();
			}
			if (observer.Flags != null)
			{
				_sb.AppendLine("### Flags");
				_sb.AppendLine();
				_sb.AppendLine("````json");
				_sb.AppendLine(string.Join(", ", observer.Flags));
				_sb.AppendLine("````");
				_sb.AppendLine();
			}
			if (observer.Functions != null)
			{
				_sb.AppendLine("### Functions");
				_sb.AppendLine();
				_sb.AppendLine("````json");
				_sb.AppendLine(JsonSerializer.Serialize(observer.Functions, _jsonSerializerOptions));
				_sb.AppendLine("````");
				_sb.AppendLine();
			}
			_sb.AppendLine();
		}
	}

	private void WriteChunks(List<string> chunks)
	{
		if (chunks.Count == 0)
		{
			_sb.AppendLine("No text was generated");
			return;
		}
		_sb.AppendLine("````text");
		_sb.AppendLine(string.Join("", chunks));
		_sb.AppendLine("````");
		if (chunks.Count > 1)
		{
			_sb.AppendLine();
			_sb.AppendLine("#### Tokens");
			_sb.AppendLine();
			_sb.AppendLine("````text");
			_sb.AppendLine(string.Join("|", chunks));
			_sb.AppendLine("````");
		}
	}

	private void AppendPrompt(SimpleMessageData[]? prompt)
	{
		if (prompt != null)
		{
			switch (prompt.Length)
			{
			case 0:
				break;
			case 1:
				_sb.AppendLine("````text");
				_sb.AppendLine(prompt[0].Value);
				_sb.AppendLine("````");
				return;
			default:
			{
				for (int i = 0; i < prompt.Length; i++)
				{
					SimpleMessageData simpleMessageData = prompt[i];
					StringBuilder sb = _sb;
					StringBuilder.AppendInterpolatedStringHandler handler = new StringBuilder.AppendInterpolatedStringHandler(1, 1, sb);
					handler.AppendFormatted(simpleMessageData.Role);
					handler.AppendLiteral(":");
					sb.AppendLine(ref handler);
					_sb.AppendLine();
					_sb.AppendLine("````text");
					_sb.AppendLine(simpleMessageData.Value);
					_sb.AppendLine("````");
					if (i < prompt.Length - 1)
					{
						_sb.AppendLine();
					}
				}
				return;
			}
			}
		}
		_sb.AppendLine("No prompt was provided");
	}

	private void AppendDict(Dictionary<string, string> dict)
	{
		if (dict.Count == 0)
		{
			_sb.AppendLine("No parameters were provided");
			return;
		}
		foreach (KeyValuePair<string, string> item in dict)
		{
			StringBuilder sb = _sb;
			StringBuilder.AppendInterpolatedStringHandler handler = new StringBuilder.AppendInterpolatedStringHandler(4, 2, sb);
			handler.AppendLiteral("- ");
			handler.AppendFormatted(item.Key);
			handler.AppendLiteral(": ");
			handler.AppendFormatted(item.Value);
			sb.AppendLine(ref handler);
		}
	}

	public string Export()
	{
		return _sb.ToString();
	}
}

```

## Voxta.Core.Diagnostics\StaticInferenceLoggersManager.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Diagnostics;
using Voxta.Model.Shared;

namespace Voxta.Core.Diagnostics;

public class StaticInferenceLoggersManager(TimeProvider timeProvider, IPerformanceMetrics performanceMetrics, IDiagnosticsContext diagnosticsContext, ILogger<StaticInferenceLoggersManager> logger) : IInferenceLoggersManager
{
	private const int MaxSize = 100;

	private readonly List<InferenceLogger> _instances = new List<InferenceLogger>();

	private readonly Lock _lock = new Lock();

	public InferenceLogger Record(ServiceTypes serviceType, string serviceName, string actionName)
	{
		DiagnosticsContextValues current = diagnosticsContext.GetCurrent();
		if (!current.UserId.HasValue)
		{
			throw new InvalidOperationException("UserId is not set in the diagnostics context.");
		}
		IUserPerformanceMetrics userPerformanceMetrics = performanceMetrics.OfUser(current.UserId.Value);
		InferenceLogger inferenceLogger = new InferenceLogger(serviceType, serviceName, actionName, timeProvider, userPerformanceMetrics.Start($"{serviceName} ({serviceName}) - {actionName}"))
		{
			UserId = current.UserId,
			ChatId = current.ChatId,
			SessionId = current.SessionId,
			MessageId = current.MessageId
		};
		if (!current.Set)
		{
			logger.LogDebug("Missing diagnostics context. Inference will not be recorded.");
			return inferenceLogger;
		}
		using (_lock.EnterScope())
		{
			_instances.Add(inferenceLogger);
			if (_instances.Count > 100)
			{
				_instances.RemoveAt(0);
			}
		}
		return inferenceLogger;
	}

	public IPerformanceMetricsTracker TrackTextGenSubmetric(string serviceName, string submetricName)
	{
		DiagnosticsContextValues current = diagnosticsContext.GetCurrent();
		if (!current.UserId.HasValue)
		{
			throw new InvalidOperationException("UserId is not set in the diagnostics context.");
		}
		return performanceMetrics.OfUser(current.UserId.Value).Start("TextGen (" + serviceName + ") - " + submetricName);
	}

	public IPerformanceMetricsTracker TrackCustom(string name, string serviceName)
	{
		DiagnosticsContextValues current = diagnosticsContext.GetCurrent();
		if (!current.UserId.HasValue)
		{
			throw new InvalidOperationException("UserId is not set in the diagnostics context.");
		}
		return performanceMetrics.OfUser(current.UserId.Value).Start(name + " (" + serviceName + ")");
	}

	public IEnumerable<InferenceLogger> OfUser(Guid userId)
	{
		using (_lock.EnterScope())
		{
			return _instances.Where((InferenceLogger x) => x.UserId == userId);
		}
	}

	public InferenceLogger? Get(Guid userId, Guid id)
	{
		using (_lock.EnterScope())
		{
			return _instances.Where((InferenceLogger x) => x.UserId == userId).FirstOrDefault((InferenceLogger x) => x.Id == id);
		}
	}

	public InferenceLogger? GetAction(Guid userId, string actionName, Guid? id = null)
	{
		using (_lock.EnterScope())
		{
			return _instances.Where((InferenceLogger x) => x.UserId == userId).FirstOrDefault(delegate(InferenceLogger x)
			{
				if (x.ActionName == actionName)
				{
					if (id.HasValue)
					{
						Guid id2 = x.Id;
						Guid? guid = id;
						return id2 == guid;
					}
					return true;
				}
				return false;
			});
		}
	}

	public IEnumerable<InferenceLogger> WhereAction(Guid userId, string actionName, int count)
	{
		using (_lock.EnterScope())
		{
			return (from x in _instances
				where x.UserId == userId
				where x.ActionName == actionName
				select x).TakeLast(count);
		}
	}

	public void Clear(Guid userId)
	{
		using (_lock.EnterScope())
		{
			_instances.RemoveAll((InferenceLogger x) => x.UserId == userId);
		}
	}
}

```

## Voxta.Core.Diagnostics\StaticPerformanceMetrics.cs
```csharp
using System;
using System.Collections.Concurrent;
using Voxta.Abstractions.Diagnostics;

namespace Voxta.Core.Diagnostics;

public class StaticPerformanceMetrics : IPerformanceMetrics
{
	private readonly ConcurrentDictionary<Guid, IUserPerformanceMetrics> _userMetrics = new ConcurrentDictionary<Guid, IUserPerformanceMetrics>();

	public IUserPerformanceMetrics OfUser(Guid userId)
	{
		return _userMetrics.GetOrAdd(userId, (Guid _) => new StaticUserPerformanceMetrics());
	}
}

```

## Voxta.Core.Diagnostics\StaticPerformanceMetricsTracker.cs
```csharp
using System.Diagnostics;
using Voxta.Abstractions.Diagnostics;

namespace Voxta.Core.Diagnostics;

public class StaticPerformanceMetricsTracker(StaticUserPerformanceMetrics metrics, string key) : IPerformanceMetricsTracker
{
	private readonly Stopwatch _sw = Stopwatch.StartNew();

	public void Pause()
	{
		_sw.Stop();
	}

	public void Resume()
	{
		_sw.Start();
	}

	public void Done()
	{
		metrics.Track(key, _sw.Elapsed);
		if (_sw.IsRunning)
		{
			_sw.Stop();
		}
	}

	public void DoneWithDurationCounter(float count, string unit)
	{
		metrics.TrackWithDurationCounter(key, _sw.Elapsed, count, unit);
	}
}

```

## Voxta.Core.Diagnostics\StaticUserPerformanceMetrics.cs
```csharp
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using Voxta.Abstractions.Diagnostics;

namespace Voxta.Core.Diagnostics;

public class StaticUserPerformanceMetrics : IUserPerformanceMetrics
{
	private record struct Counter
	{
		public TimeSpan Elapsed { get; init; }

		public int Count { get; init; }

		public float CounterSum { get; init; }

		public string? CounterUnit { get; init; }
	}

	private readonly ConcurrentDictionary<string, Counter> _counters = new ConcurrentDictionary<string, Counter>();

	public IPerformanceMetricsTracker Start(string key)
	{
		return new StaticPerformanceMetricsTracker(this, key);
	}

	public void Track(string key, TimeSpan elapsed)
	{
		_counters.AddOrUpdate(key, new Counter
		{
			Elapsed = elapsed,
			Count = 1
		}, (string _, Counter c) => new Counter
		{
			Elapsed = c.Elapsed + elapsed,
			Count = c.Count + 1
		});
	}

	public void TrackWithDurationCounter(string key, TimeSpan elapsed, float counterValue = 0f, string? counterUnit = null)
	{
		_counters.AddOrUpdate(key, new Counter
		{
			Elapsed = elapsed,
			Count = 1,
			CounterSum = (float)elapsed.TotalMilliseconds / counterValue,
			CounterUnit = counterUnit
		}, (string _, Counter c) => new Counter
		{
			Elapsed = c.Elapsed + elapsed,
			Count = c.Count + 1,
			CounterSum = c.CounterSum + (float)elapsed.TotalMilliseconds / counterValue,
			CounterUnit = c.CounterUnit
		});
	}

	public IEnumerable<string> GetKeys()
	{
		return _counters.Keys;
	}

	public (TimeSpan AverageDuration, int Count) GetAverage(string key)
	{
		if (!_counters.TryGetValue(key, out var value) || value.Count <= 0)
		{
			return (AverageDuration: TimeSpan.Zero, Count: 0);
		}
		return (AverageDuration: TimeSpan.FromTicks(value.Elapsed.Ticks / value.Count), Count: value.Count);
	}

	public (float counter, string unit)? GetCounterAverage(string key)
	{
		if (!_counters.TryGetValue(key, out var value) || value.CounterUnit == null || value.Count <= 0)
		{
			return null;
		}
		return (value.CounterSum / (float)value.Count, value.CounterUnit);
	}

	public void Clear()
	{
		_counters.Clear();
	}
}

```

## Voxta.Core.Downloading\DownloadsManager.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using Voxta.Abstractions.Downloading;
using Voxta.Abstractions.Security;

namespace Voxta.Core.Downloading;

public class DownloadsManager : IDownloadsManager
{
	private readonly Lock _lock = new Lock();

	private readonly List<DownloadTicket> _tickets = new List<DownloadTicket>();

	public event EventHandler<DownloadsEventArgs>? Progress;

	public DownloadProgress[] GetDownloads(IAuthenticationContext auth)
	{
		using (_lock.EnterScope())
		{
			return (from t in _tickets
				where t.UserId == auth.UserId
				select t.GetProgress()).ToArray();
		}
	}

	public IDownloadTicket GetDownloadTicket(IAuthenticationContext auth, string url)
	{
		using (_lock.EnterScope())
		{
			DownloadTicket downloadTicket = new DownloadTicket(auth.UserId, url, DispatchProgress, DisposeTicket);
			_tickets.Add(downloadTicket);
			this.Progress?.Invoke(this, new DownloadsEventArgs(downloadTicket.GetProgress()));
			return downloadTicket;
		}
	}

	public void CancelTicket(Guid id)
	{
		using (_lock.EnterScope())
		{
			_tickets.FirstOrDefault((DownloadTicket t) => t.Id == id)?.Cancel();
		}
	}

	private void DispatchProgress(DownloadProgress progress)
	{
		using (_lock.EnterScope())
		{
			this.Progress?.Invoke(this, new DownloadsEventArgs(progress));
		}
	}

	private void DisposeTicket(DownloadTicket ticket)
	{
		using (_lock.EnterScope())
		{
			_tickets.Remove(ticket);
		}
	}
}

```

## Voxta.Core.Downloading\DownloadTicket.cs
```csharp
using System;
using System.Threading;
using Voxta.Abstractions.Downloading;

namespace Voxta.Core.Downloading;

public class DownloadTicket(Guid userId, string url, Action<DownloadProgress> progress, Action<DownloadTicket> done) : IDownloadTicket, IDisposable
{
	private readonly CancellationTokenSource _cts = new CancellationTokenSource();

	private DownloadStatus _status;

	private int _percent;

	private bool _disposed;

	public Guid UserId => userId;

	public Guid Id { get; } = Guid.NewGuid();

	public CancellationToken Abort => _cts.Token;

	public DownloadProgress GetProgress()
	{
		return new DownloadProgress(userId, Id, url, _status, _percent);
	}

	private void DispatchProgress()
	{
		progress(GetProgress());
	}

	public void Progress(int percent)
	{
		if (!_disposed)
		{
			_status = DownloadStatus.InProgress;
			_percent = percent;
			DispatchProgress();
		}
	}

	public void Complete()
	{
		if (!_disposed)
		{
			_status = DownloadStatus.Completed;
			_percent = 100;
			DispatchProgress();
		}
	}

	public void Cancel()
	{
		if (!_disposed)
		{
			_status = DownloadStatus.Failed;
			DispatchProgress();
			_cts.Cancel();
		}
	}

	public void Dispose()
	{
		if (!_disposed)
		{
			_disposed = true;
			_cts.Cancel();
			if (_status <= DownloadStatus.InProgress)
			{
				_status = DownloadStatus.Failed;
				DispatchProgress();
			}
			done(this);
			_cts.Dispose();
		}
	}
}

```

## Voxta.Core.Downloading\ProgressDownloader.cs
```csharp
using System.Net.Http;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Downloading;
using Voxta.Abstractions.Security;

namespace Voxta.Core.Downloading;

public class ProgressDownloader(IHttpClientFactory httpClientFactory, IDownloadsManager downloadsManager, ILogger<ProgressDownloader> logger) : IProgressDownloader
{
	public bool IsDownloading(IAuthenticationContext auth)
	{
		return downloadsManager.GetDownloads(auth).Length != 0;
	}

	public IProgressDownloaderInstance Create(IAuthenticationContext auth)
	{
		HttpClient httpClient = httpClientFactory.CreateClient();
		httpClient.DefaultRequestHeaders.UserAgent.ParseAdd("VoxtaServer/1.0");
		return new ProgressDownloaderInstance(httpClient, downloadsManager, logger, auth);
	}

	public IProgressDownloaderInstance Create(IAuthenticationContext auth, HttpClient httpClient)
	{
		return new ProgressDownloaderInstance(httpClient, downloadsManager, logger, auth);
	}
}

```

## Voxta.Core.Downloading\ProgressDownloaderInstance.cs
```csharp
using System;
using System.Diagnostics;
using System.IO;
using System.IO.Compression;
using System.Net.Http;
using System.Security;
using System.Security.Cryptography;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Downloading;
using Voxta.Abstractions.Security;
using Voxta.Common.Reporting;

namespace Voxta.Core.Downloading;

public class ProgressDownloaderInstance(HttpClient httpClient, IDownloadsManager downloadsManager, ILogger logger, IAuthenticationContext auth) : IProgressDownloaderInstance
{
	public async Task DownloadFileAsync(string label, string url, string path, IDeferredReporter reporter, CancellationToken cancellationToken)
	{
		if (string.IsNullOrEmpty(url))
		{
			throw new ArgumentNullException("url");
		}
		if (string.IsNullOrEmpty(path))
		{
			throw new ArgumentNullException("path");
		}
		path = Path.GetFullPath(path);
		if (File.Exists(path))
		{
			if (new FileInfo(path).Length > 0)
			{
				logger.LogDebug("File {Path} already exists, skipping download", path);
				reporter.Info("File " + path + " already exists, skipping download");
				return;
			}
			reporter.Info("File " + path + " exists but has zero bytes, re-downloading");
			File.Delete(path);
		}
		logger.LogInformation("Downloading {Label} to {Path} from {Url}", label, path, url);
		reporter.Info($"Downloading {label} to {path} from {url}");
		string directoryName = Path.GetDirectoryName(path) ?? throw new InvalidOperationException("Invalid path " + path);
		bool createdDirectory = false;
		if (!Directory.Exists(directoryName))
		{
			Directory.CreateDirectory(directoryName);
			createdDirectory = true;
		}
		string tmpPath = path + ".download";
		try
		{
			await using (FileStream fileStream = new FileStream(tmpPath, FileMode.Create, FileAccess.Write, FileShare.None))
			{
				await DownloadAsync(url, fileStream, reporter, cancellationToken);
				fileStream.Close();
			}
			await Task.Delay(10, cancellationToken);
			File.Move(tmpPath, path);
		}
		catch
		{
			if (File.Exists(tmpPath))
			{
				try
				{
					logger.LogInformation("{Label} temporary file {path} file will be deleted", label, path);
					File.Delete(tmpPath);
					if (createdDirectory)
					{
						try
						{
							Directory.Delete(directoryName, recursive: false);
						}
						catch (Exception exception)
						{
							reporter.Error("Failed to delete temporary directory " + directoryName + ", please delete it manually.");
							logger.LogError(exception, "Failed to delete temporary directory {Directory}, please delete it manually", directoryName);
						}
					}
				}
				catch (Exception exception2)
				{
					reporter.Error("Failed to delete temporary file " + tmpPath + ", please delete it manually.");
					logger.LogError(exception2, "Failed to delete temporary file {TmpPath}, please delete it manually", tmpPath);
				}
			}
			throw;
		}
	}

	private async Task DownloadAsync(string url, Stream outputStream, IDeferredReporter reporter, CancellationToken cancellationToken)
	{
		using IDownloadTicket ticket = downloadsManager.GetDownloadTicket(auth, url);
		using CancellationTokenSource cts = CancellationTokenSource.CreateLinkedTokenSource(ticket.Abort, cancellationToken);
		using HttpResponseMessage response = await httpClient.GetAsync(url, HttpCompletionOption.ResponseHeadersRead, cts.Token);
		response.EnsureSuccessStatusCode();
		if (response.Content.Headers.ContentType?.MediaType == "text/html")
		{
			throw new InvalidOperationException("The server returned an HTML response, expected a file");
		}
		await using Stream responseStream = await response.Content.ReadAsStreamAsync(cts.Token);
		long totalBytes = response.Content.Headers.ContentLength.GetValueOrDefault();
		byte[] buffer = new byte[8192];
		long bytesRead = 0L;
		int lastPercent = 0;
		Stopwatch stopwatch = new Stopwatch();
		stopwatch.Start();
		while (true)
		{
			int read = await responseStream.ReadAsync(buffer, cts.Token);
			if (read == 0)
			{
				break;
			}
			await outputStream.WriteAsync(buffer.AsMemory(0, read), cts.Token);
			bytesRead += read;
			if (stopwatch.ElapsedMilliseconds >= 1000)
			{
				int num = (int)(bytesRead * 100 / totalBytes);
				if (num > lastPercent)
				{
					logger.LogInformation("Downloaded {Percent}%", num);
					reporter.Info($"Downloaded {num}%");
					ticket.Progress(num);
					lastPercent = num;
				}
				stopwatch.Restart();
			}
		}
		ticket.Complete();
		string text;
		try
		{
			text = Path.GetFileName(url);
		}
		catch
		{
			text = url;
		}
		logger.LogInformation("Download complete: {File}", text);
		reporter.Info("Download complete: " + text);
	}

	public void VerifyHashAsync(string label, byte[] bytes, string? hashMethod, string? hashExpected, IDeferredReporter reporter)
	{
		if (hashExpected != null)
		{
			logger.LogInformation("{Label} Verifying hash...", label);
			reporter.Info("Verifying " + label + " hash...");
			string text = hashMethod switch
			{
				null => throw new InvalidOperationException("If a hash is provided, a hash method should be provide too"), 
				"sha1" => BitConverter.ToString(SHA1.HashData(bytes)).Replace("-", "").ToLower(), 
				"sha512" => BitConverter.ToString(SHA256.HashData(bytes)).Replace("-", "").ToLower(), 
				"md5" => BitConverter.ToString(MD5.HashData(bytes)).Replace("-", "").ToLower(), 
				_ => throw new NotSupportedException("Hash method not supported: " + hashMethod), 
			};
			if (!(text == hashExpected))
			{
				logger.LogError("{Label} {HashMethod} hash is {ActualZipHash}, expected {ExpectedZipHash}", label, hashMethod, text, hashExpected);
				reporter.Error($"{label} {hashMethod} hash is {text}, expected {hashExpected}");
				throw new SecurityException("Invalid zip hash.");
			}
		}
	}

	public void Extract(string label, string zipPath, byte[] zipBytes, string path, IDeferredReporter reporter)
	{
		logger.LogInformation("{Label} Extracting {ZipPath} to {Path}...", label, zipPath, path);
		reporter.Info($"Extracting {label} {zipPath} to {path}...");
		Directory.CreateDirectory(path);
		using MemoryStream stream = new MemoryStream(zipBytes);
		using ZipArchive zipArchive = new ZipArchive(stream);
		foreach (ZipArchiveEntry entry in zipArchive.Entries)
		{
			if (!entry.FullName.EndsWith('/') && !entry.FullName.EndsWith('\\'))
			{
				string text = Path.Combine(path, entry.FullName);
				Directory.CreateDirectory(Path.GetDirectoryName(text));
				entry.ExtractToFile(text, overwrite: true);
			}
		}
		logger.LogInformation("Extracted {Label} model", label);
		reporter.Info("Extracted " + label + " model");
	}
}

```

## Voxta.Core.ModuleRuntimeInstances\IModuleRuntimeTicketDisposer.cs
```csharp
using Voxta.Abstractions.ModuleRuntimeInstances;

namespace Voxta.Core.ModuleRuntimeInstances;

public interface IModuleRuntimeTicketDisposer
{
	void ReleaseTicket(IModuleRuntimeTicket ticket);
}

```

## Voxta.Core.ModuleRuntimeInstances\ModuleReloadCoordinator.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.ModuleRuntimeInstances;
using Voxta.Model.Shared;

namespace Voxta.Core.ModuleRuntimeInstances;

public class ModuleReloadCoordinator : IModuleReloadCoordinator
{
	private readonly Lock _lock = new Lock();

	private readonly List<TaskCompletionSource<bool>> _tasks = new List<TaskCompletionSource<bool>>();

	private readonly HashSet<ServiceTypes> _serviceTypes = new HashSet<ServiceTypes>();

	public TaskCompletionSource<bool> RegisterShutDownTask(ServiceTypes serviceType)
	{
		TaskCompletionSource<bool> taskCompletionSource = new TaskCompletionSource<bool>();
		using (_lock.EnterScope())
		{
			_serviceTypes.Add(serviceType);
			_tasks.Add(taskCompletionSource);
			return taskCompletionSource;
		}
	}

	public Task WaitForShutDownTasksAsync(CancellationToken cancellationToken)
	{
		using (_lock.EnterScope())
		{
			Task<bool>[] tasks = _tasks.Select((TaskCompletionSource<bool> t) => t.Task).ToArray();
			if (tasks.Length == 0)
			{
				return Task.CompletedTask;
			}
			return Task.WhenAll(tasks).ContinueWith(delegate
			{
				Task<bool>[] array = tasks;
				foreach (Task<bool> task in array)
				{
					if (task.IsFaulted)
					{
						throw new Exception("Task failed", task.Exception);
					}
				}
			}, cancellationToken);
		}
	}

	public IReadOnlyList<ServiceTypes> GetServiceTypes()
	{
		return _serviceTypes.ToArray();
	}
}

```

## Voxta.Core.ModuleRuntimeInstances\ModuleRuntimeInstanceContainer.cs
```csharp
using System;
using System.Threading.Tasks;
using Voxta.Abstractions.ModuleRuntimeInstances;
using Voxta.Abstractions.Services;

namespace Voxta.Core.ModuleRuntimeInstances;

public class ModuleRuntimeInstanceContainer
{
	public required Guid Id { get; init; }

	public required DateTimeOffset CreatedAt { get; init; }

	public required ModuleRuntimeInstanceStatus Status { get; set; }

	public required ModuleRuntimeInstanceConfiguration Configuration { get; init; }

	public required IModuleRuntimeInstance Instance { get; init; }

	public required Task LoadingTask { get; init; }
}

```

## Voxta.Core.ModuleRuntimeInstances\ModuleRuntimeInstancesManager.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Configuration;
using Voxta.Abstractions.ModuleRuntimeInstances;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services;
using Voxta.Common;

namespace Voxta.Core.ModuleRuntimeInstances;

public class ModuleRuntimeInstancesManager(IServiceProvider sp, TimeProvider timeProvider, ILogger<ModuleRuntimeInstancesManager> logger) : IModuleRuntimeInstancesManager, IAsyncDisposable, IModuleRuntimeTicketDisposer
{
	private readonly CancellationTokenSource _cts = new CancellationTokenSource();

	private readonly Lock _instancesLock = new Lock();

	private readonly List<IModuleRuntimeTicket> _tickets = new List<IModuleRuntimeTicket>();

	private readonly List<ModuleRuntimeInstanceContainer> _instances = new List<ModuleRuntimeInstanceContainer>();

	private readonly List<Task> _shutdownTasks = new List<Task>();

	public event EventHandler<ModuleRuntimeInstancesChangedEventArgs>? Changed;

	public async Task<IModuleRuntimeTicket<TClient>> AcquireInstanceAsync<TClient, TConfiguration>(IAuthenticationContext auth, TConfiguration configuration) where TClient : class, IModuleRuntimeInstance<TConfiguration> where TConfiguration : ModuleRuntimeInstanceConfiguration
	{
		ModuleRuntimeInstanceTicket<TClient> ticket;
		ModuleRuntimeInstanceContainer container;
		using (_instancesLock.EnterScope())
		{
			ModuleRuntimeInstanceContainer moduleRuntimeInstanceContainer = _instances.FirstOrDefault((ModuleRuntimeInstanceContainer x) => x.Configuration.Equals(configuration));
			if (moduleRuntimeInstanceContainer != null)
			{
				if (!(moduleRuntimeInstanceContainer.Instance is TClient))
				{
					throw new InvalidOperationException($"Client type mismatch: expected {typeof(TClient)}, got {moduleRuntimeInstanceContainer.Instance.GetType()}");
				}
				if (moduleRuntimeInstanceContainer.Status == ModuleRuntimeInstanceStatus.ShuttingDown)
				{
					throw new InvalidOperationException("Instance is shutting down, please try again later");
				}
				ticket = new ModuleRuntimeInstanceTicket<TClient>(moduleRuntimeInstanceContainer, this);
				container = null;
			}
			else
			{
				Guid instanceId = Guid.NewGuid();
				TClient client = sp.GetRequiredService<TClient>();
				Task<TClient> loadingTask = Task.Run(async () => await InitializeClient(auth, instanceId, client, configuration), _cts.Token);
				container = new ModuleRuntimeInstanceContainer
				{
					Id = instanceId,
					CreatedAt = timeProvider.GetLocalNow(),
					Status = ModuleRuntimeInstanceStatus.Starting,
					Configuration = configuration,
					Instance = client,
					LoadingTask = loadingTask
				};
				_instances.Add(container);
				InvokeChanged();
				ticket = new ModuleRuntimeInstanceTicket<TClient>(container, this);
			}
			_tickets.Add(ticket);
		}
		try
		{
			await ticket.WaitForReady();
			return ticket;
		}
		catch
		{
			ticket.Dispose();
			if (container != null)
			{
				using (_instancesLock.EnterScope())
				{
					container.Status = ModuleRuntimeInstanceStatus.ShuttingDown;
					InvokeChanged();
				}
				try
				{
					await container.Instance.DisposeAsync();
				}
				catch (Exception exception)
				{
					logger.LogError(exception, "Failed to unload instance {Id} after failed ticket acquisition", container.Id);
				}
				using (_instancesLock.EnterScope())
				{
					_instances.Remove(container);
					InvokeChanged();
				}
			}
			throw;
		}
	}

	public IReadOnlyList<ModuleRuntimeInstanceTicketRef> ListInstances()
	{
		using (_instancesLock.EnterScope())
		{
			return _instances.Select(From).ToArray();
		}
	}

	public async Task<bool> UnloadInstance(Guid id)
	{
		ModuleRuntimeInstanceContainer instance;
		using (_instancesLock.EnterScope())
		{
			ModuleRuntimeInstanceContainer i = _instances.FirstOrDefault((ModuleRuntimeInstanceContainer x) => x.Id == id);
			if (i == null)
			{
				return false;
			}
			int num = _tickets.Count((IModuleRuntimeTicket x) => x.GetInstance() == i.Instance);
			if (num > 0)
			{
				logger.LogWarning("Cannot unload instance {Id} while {TicketsCount} ticket(s) are still active", num, id);
				return false;
			}
			i.Status = ModuleRuntimeInstanceStatus.ShuttingDown;
			InvokeChanged();
			instance = i;
		}
		return await ShutDownServiceInternal(instance);
	}

	public Task UnloadAll()
	{
		using (_instancesLock.EnterScope())
		{
			foreach (ModuleRuntimeInstanceContainer instance in _instances)
			{
				if (_tickets.Count((IModuleRuntimeTicket x) => x.GetInstance() == instance.Instance) > 0)
				{
					throw new InvalidOperationException("Cannot unload instance " + instance.Configuration.Name + " while tickets are still active");
				}
			}
			foreach (ModuleRuntimeInstanceContainer instance2 in _instances)
			{
				instance2.Status = ModuleRuntimeInstanceStatus.ShuttingDown;
			}
			InvokeChanged();
			Task<bool>[] source = (from i in _instances.ToArray()
				select await ShutDownServiceInternal(i)).ToArray();
			_shutdownTasks.AddRange(source.Where((Task<bool> t) => !t.IsCompleted));
		}
		return WaitForPendingShutdowns();
	}

	public Task ShutDownUnusedModulesAsync(ModuleRuntimeCleanupScope scope)
	{
		using (_instancesLock.EnterScope())
		{
			IEnumerable<ModuleRuntimeInstanceContainer> enumerable = from i in _instances
				where i.Status != ModuleRuntimeInstanceStatus.ShuttingDown
				where _tickets.All((IModuleRuntimeTicket t) => t.GetInstance() != i.Instance)
				select i;
			IEnumerable<ModuleRuntimeInstanceContainer> source;
			if (!(scope is ModuleRuntimeCleanupScopeAll))
			{
				ModuleRuntimeCleanupScopeForServiceTypes moduleRuntimeCleanupScopeForServiceTypes = scope as ModuleRuntimeCleanupScopeForServiceTypes;
				if ((object)moduleRuntimeCleanupScopeForServiceTypes == null)
				{
					ModuleRuntimeCleanupScopeForServiceNames moduleRuntimeCleanupScopeForServiceNames = scope as ModuleRuntimeCleanupScopeForServiceNames;
					if ((object)moduleRuntimeCleanupScopeForServiceNames == null)
					{
						ModuleRuntimeCleanupScopeForSingleServiceConfig moduleRuntimeCleanupScopeForSingleServiceConfig = scope as ModuleRuntimeCleanupScopeForSingleServiceConfig;
						if ((object)moduleRuntimeCleanupScopeForSingleServiceConfig == null)
						{
							ModuleRuntimeCleanupScopeForConfigs moduleRuntimeCleanupScopeForConfigs = scope as ModuleRuntimeCleanupScopeForConfigs;
							if ((object)moduleRuntimeCleanupScopeForConfigs == null)
							{
								throw new InvalidOperationException("Unknown scope type: " + scope.GetType().Name);
							}
							source = enumerable.Where((ModuleRuntimeInstanceContainer i) => !moduleRuntimeCleanupScopeForConfigs.PreserveWithConfigs.Services.Values.Any((ServiceConfiguration v) => v.Module?.ServiceName == i.Instance.ServiceName && i.Configuration.Match(v)));
						}
						else
						{
							source = from i in enumerable
								where i.Instance.ProvidesServiceTypes.Contains(moduleRuntimeCleanupScopeForSingleServiceConfig.ServiceType)
								where moduleRuntimeCleanupScopeForSingleServiceConfig.PreserveWithConfig.Module?.ServiceName != i.Instance.ServiceName || !i.Configuration.Match(moduleRuntimeCleanupScopeForSingleServiceConfig.PreserveWithConfig)
								select i;
						}
					}
					else
					{
						source = enumerable.Where((ModuleRuntimeInstanceContainer i) => moduleRuntimeCleanupScopeForServiceNames.ServiceNames.Contains(i.Instance.ServiceName));
					}
				}
				else
				{
					source = enumerable.Where((ModuleRuntimeInstanceContainer i) => i.Instance.ProvidesServiceTypes.ContainsAny(moduleRuntimeCleanupScopeForServiceTypes.ServiceTypes));
				}
			}
			else
			{
				source = enumerable;
			}
			List<ModuleRuntimeInstanceContainer> list = source.ToList();
			if (list.Count == 0)
			{
				return Task.CompletedTask;
			}
			foreach (ModuleRuntimeInstanceContainer item in list)
			{
				item.Status = ModuleRuntimeInstanceStatus.ShuttingDown;
			}
			InvokeChanged();
			Task<bool>[] source2 = list.Select(async (ModuleRuntimeInstanceContainer i) => await ShutDownServiceInternal(i)).ToArray();
			_shutdownTasks.AddRange(source2.Where((Task<bool> t) => !t.IsCompleted));
		}
		return WaitForPendingShutdowns();
	}

	private Task WaitForPendingShutdowns()
	{
		using (_instancesLock.EnterScope())
		{
			_shutdownTasks.RemoveAll((Task t) => t.IsCompleted);
			Task[] array = _shutdownTasks.ToArray();
			if (array.Length == 0)
			{
				return Task.CompletedTask;
			}
			return Task.WhenAll(array);
		}
	}

	private async Task<bool> ShutDownServiceInternal(ModuleRuntimeInstanceContainer instance)
	{
		_ = 1;
		try
		{
			try
			{
				if (!instance.LoadingTask.IsFaulted)
				{
					await instance.LoadingTask;
				}
			}
			catch (Exception exception)
			{
				logger.LogWarning(exception, "Failed to finish loading instance {Id} while trying to unload", instance.Id);
			}
			await instance.Instance.DisposeAsync();
			return true;
		}
		catch (Exception exception2)
		{
			logger.LogError(exception2, "Failed to unload instance {Id}", instance.Id);
			return false;
		}
		finally
		{
			using (_instancesLock.EnterScope())
			{
				_instances.Remove(instance);
				InvokeChanged();
			}
		}
	}

	private async Task<TClient> InitializeClient<TClient, TConfiguration>(IAuthenticationContext auth, Guid instanceId, TClient client, TConfiguration configuration) where TClient : class, IModuleRuntimeInstance<TConfiguration> where TConfiguration : ModuleRuntimeInstanceConfiguration
	{
		await client.InitializeAsync(auth, configuration, _cts.Token);
		using (_instancesLock.EnterScope())
		{
			ModuleRuntimeInstanceContainer moduleRuntimeInstanceContainer = _instances.FirstOrDefault((ModuleRuntimeInstanceContainer x) => x.Id == instanceId);
			if (moduleRuntimeInstanceContainer != null && moduleRuntimeInstanceContainer.Status == ModuleRuntimeInstanceStatus.Starting)
			{
				moduleRuntimeInstanceContainer.Status = ModuleRuntimeInstanceStatus.Running;
				InvokeChanged();
			}
		}
		return client;
	}

	private void InvokeChanged()
	{
		ModuleRuntimeInstanceTicketRef[] instances = _instances.Select(From).ToArray();
		this.Changed?.Invoke(this, new ModuleRuntimeInstancesChangedEventArgs(instances));
	}

	private static ModuleRuntimeInstanceTicketRef From(ModuleRuntimeInstanceContainer arg)
	{
		return new ModuleRuntimeInstanceTicketRef
		{
			Id = arg.Id,
			Configuration = arg.Configuration,
			CreatedAt = arg.CreatedAt,
			Status = arg.Status
		};
	}

	public void ReleaseTicket(IModuleRuntimeTicket ticket)
	{
		using (_instancesLock.EnterScope())
		{
			_tickets.Remove(ticket);
		}
	}

	public async ValueTask DisposeAsync()
	{
		await _cts.CancelAsync();
	}
}

```

## Voxta.Core.ModuleRuntimeInstances\ModuleRuntimeInstanceTicket.cs
```csharp
using System;
using System.Threading.Tasks;
using Voxta.Abstractions.ModuleRuntimeInstances;
using Voxta.Abstractions.Services;

namespace Voxta.Core.ModuleRuntimeInstances;

public class ModuleRuntimeInstanceTicket<TClient>(ModuleRuntimeInstanceContainer container, IModuleRuntimeTicketDisposer disposer) : IModuleRuntimeTicket<TClient>, IModuleRuntimeTicket, IDisposable where TClient : class, IModuleRuntimeInstance
{
	private bool _disposed;

	public TClient Instance => (TClient)_003Ccontainer_003EP.Instance;

	IModuleRuntimeInstance? IModuleRuntimeTicket.GetInstance()
	{
		if (_disposed)
		{
			return null;
		}
		return _003Ccontainer_003EP.Instance;
	}

	public Task WaitForReady()
	{
		return _003Ccontainer_003EP.LoadingTask;
	}

	public void Dispose()
	{
		if (!_disposed)
		{
			_disposed = true;
			_003Cdisposer_003EP.ReleaseTicket(this);
		}
	}
}

```

## Voxta.Core.Runtime\FileBasedServiceInstallLock.cs
```csharp
using System.IO;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Runtime;
using Voxta.Abstractions.Utils;

namespace Voxta.Core.Runtime;

public class FileBasedServiceInstallLock(ICommonFolders folders) : IServiceInstallLock
{
	private const string LiveLockMessage = "Another installation is already in progress or was interrupted. Please wait for the current installation to finish. Check out the terminal, and if there is no installation in progress, exit Voxta and delete the Data/Python folder, then re-install your services from the Manage Services menu.";

	private readonly SemaphoreSlim _processLock = new SemaphoreSlim(1, 1);

	private string LockFilePath => Path.Combine(folders.Data, "Python", "install.lock");

	public async Task CreateLockFileAsync(string contents, CancellationToken cancellationToken)
	{
		if (!(await _processLock.WaitAsync(0, cancellationToken)))
		{
			throw new ServiceInstallLockException("Another installation is already in progress or was interrupted. Please wait for the current installation to finish.");
		}
		try
		{
			await File.WriteAllTextAsync(LockFilePath, contents, cancellationToken);
		}
		catch
		{
			_processLock.Release();
			throw;
		}
	}

	public Task ReleaseLockFileAsync()
	{
		try
		{
			if (File.Exists(LockFilePath))
			{
				File.Delete(LockFilePath);
			}
		}
		finally
		{
			_processLock.Release();
		}
		return Task.CompletedTask;
	}

	public async Task ThrowIfLockedAsync(CancellationToken cancellationToken)
	{
		if (!(await _processLock.WaitAsync(0, cancellationToken)))
		{
			throw new ServiceInstallLockException("Another installation is already in progress or was interrupted. Please wait for the current installation to finish. Check out the terminal, and if there is no installation in progress, exit Voxta and delete the Data/Python folder, then re-install your services from the Manage Services menu.");
		}
		_processLock.Release();
		if (!File.Exists(LockFilePath))
		{
			return;
		}
		string text = await File.ReadAllTextAsync(LockFilePath, cancellationToken);
		throw new ServiceInstallLockException("An installation was killed before it could be  completed. This may leave the service in a broken state. You can delete the file " + LockFilePath + " manually and retry. If you have problems, consider deleting the Data/Python folder completely and go to Manage Services, Install All. The install command that was interrupted is: " + text);
	}
}

```

## Voxta.Core.Runtime\InMemoryEphemeralChatRepository.cs
```csharp
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Runtime;

namespace Voxta.Core.Runtime;

public class InMemoryEphemeralChatRepository : IEphemeralChatRepository
{
	private readonly ConcurrentDictionary<Guid, Chat> _chats = new ConcurrentDictionary<Guid, Chat>();

	public void Register(Guid userId, Chat chat)
	{
		_chats[userId] = chat;
	}

	public Chat? Acquire(Guid userId)
	{
		return _chats.GetValueOrDefault(userId);
	}

	public void Release(Guid userId)
	{
		_chats.TryRemove(userId, out Chat _);
	}
}

```

## Voxta.Core.Runtime\ISpeechToTextListener.cs
```csharp
using System;

namespace Voxta.Core.Runtime;

public interface ISpeechToTextListener : IAsyncDisposable
{
}

```

## Voxta.Core.Runtime\ISpeechToTextManager.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Services.SpeechToText;

namespace Voxta.Core.Runtime;

public interface ISpeechToTextManager : IAsyncDisposable
{
	ISpeechToTextService SpeechToText { get; }

	bool Enabled { get; }

	Task<ISpeechToTextListener?> StartTranscriptionAsync(string startReason, Action started, Action<string> partial, Action<string?, SpeechToTextRecognitionEndReason> finished, CancellationToken cancellationToken);

	Task InitializeAsync(string culture, CancellationToken cancellationToken);

	void SpeechChunkStart();

	void SpeechComplete();
}

```

## Voxta.Core.Runtime\ISpeechToTextManagerFactory.cs
```csharp
using System;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Configuration;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services.AudioInput;
using Voxta.Abstractions.Services.SpeechToText;
using Voxta.Abstractions.Services.WakeWord;
using Voxta.Model.Shared;

namespace Voxta.Core.Runtime;

public interface ISpeechToTextManagerFactory
{
	ISpeechToTextManager Create(IServiceReference<ISpeechToTextService> speechToText, IServiceReference<IAudioInputService> audioInput, IServiceReference<IWakeWordService> wakeWord, IAuthenticationContext auth, Guid sessionId, ServicesConfigurations configs, IUserConnectionTunnel tunnel, ClientCapabilities capabilities);
}

```

## Voxta.Core.Runtime\ITextToSpeechManager.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Core.Chats.Sessions;
using Voxta.Core.Speech;
using Voxta.Model.Shared;

namespace Voxta.Core.Runtime;

public interface ITextToSpeechManager : IAsyncDisposable
{
	ISpeechGenerator SpeechGenerator { get; }

	bool Enabled { get; }

	Task InitializeAsync(IChatSession session, CancellationToken cancellationToken);

	Task WarmupAsync(Guid userId, VoiceInfo voice, Guid characterId, string culture, CancellationToken cancellationToken);
}

```

## Voxta.Core.Runtime\ITextToSpeechManagerFactory.cs
```csharp
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Configuration;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services.AudioOutput;
using Voxta.Abstractions.Services.TextToSpeech;
using Voxta.Model.Shared;

namespace Voxta.Core.Runtime;

public interface ITextToSpeechManagerFactory
{
	ITextToSpeechManager Create(IServiceReference<ITextToSpeechService> textToSpeech, IServiceReference<IAudioOutputService> audioOutput, IAuthenticationContext auth, ServicesConfigurations configs, ClientCapabilities capabilities);
}

```

## Voxta.Core.Runtime\IVisionManager.cs
```csharp
using System;
using Voxta.Abstractions.Services.ComputerVision;
using Voxta.Abstractions.Services.VisionCapture;

namespace Voxta.Core.Runtime;

public interface IVisionManager : IAsyncDisposable
{
	IVisionCaptureService EyesVisionCapture { get; }

	IVisionCaptureService ScreenVisionCapture { get; }

	IComputerVisionService ComputerVision { get; }
}

```

## Voxta.Core.Runtime\IVisionManagerFactory.cs
```csharp
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Services.ComputerVision;
using Voxta.Core.Chats.Sessions;

namespace Voxta.Core.Runtime;

public interface IVisionManagerFactory
{
	IVisionManager Create(IServiceReference<IComputerVisionService> computerVision, IVisionCaptureServiceReferences visionCapture);
}

```

## Voxta.Core.Runtime\ServicesConfigurationChangeDispatcher.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Configuration;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.ModuleRuntimeInstances;
using Voxta.Abstractions.Registration;
using Voxta.Abstractions.Runtime;
using Voxta.Core.ModuleRuntimeInstances;
using Voxta.Core.Utils;
using Voxta.Model.Shared;

namespace Voxta.Core.Runtime;

public sealed class ServicesConfigurationChangeDispatcher(IModuleDefinitionsRegistry moduleDefinitionsRegistry, IModuleRuntimeInstancesManager moduleRuntimeInstancesManager, IServicesConfigurationsSetResolver servicesConfigurationsSetResolver) : IServicesConfigurationChangeDispatcher, IDisposable
{
	private readonly SemaphoreSlim _reloadingServicesSemaphore = new SemaphoreSlim(1, 1);

	public event EventHandler<ServiceReadyEventArgs>? ServiceReady;

	public event EventHandler<ProfileConfigurationChangedEventArgs>? ProfileConfigurationChanged;

	public event EventHandler<ServicesConfigurationsSetChangedEventArgs>? ServicesConfigurationsSetChanged;

	public event EventHandler<ModuleConfigurationUpdatedEventArgs>? ModuleConfigurationUpdated;

	public event EventHandler<ServiceSettingsUpdatedEventArgs>? ServiceSettingsUpdated;

	public void DispatchConfigurationChanged(Guid userId)
	{
		this.ProfileConfigurationChanged?.Invoke(userId, new ProfileConfigurationChangedEventArgs(userId));
	}

	public async Task PropagateModuleConfigurationChangesAsync(Guid moduleId, string serviceName, Dictionary<string, string> previousConfig, Dictionary<string, string> updatedConfig, CancellationToken cancellationToken)
	{
		await _reloadingServicesSemaphore.WaitAsync(cancellationToken);
		try
		{
			ModuleReloadCoordinator coordinator = new ModuleReloadCoordinator();
			this.ModuleConfigurationUpdated?.Invoke(this, new ModuleConfigurationUpdatedEventArgs(coordinator, moduleId, serviceName, updatedConfig));
			await coordinator.WaitForShutDownTasksAsync(cancellationToken);
			IReadOnlyList<ServiceTypes> affectedServiceTypes = coordinator.GetServiceTypes();
			bool flag = RequiredFieldsChangesUtil.RequiresReload(moduleDefinitionsRegistry.Get(serviceName).ModuleConfigurationFieldsRequiringReload, previousConfig, updatedConfig);
			if (affectedServiceTypes.Count >= 0 || flag)
			{
				ModuleRuntimeCleanupScope scope = (flag ? ((ModuleRuntimeCleanupScope)new ModuleRuntimeCleanupScopeForServiceNames
				{
					ServiceNames = new _003C_003Ez__ReadOnlySingleElementList<string>(serviceName)
				}) : ((ModuleRuntimeCleanupScope)new ModuleRuntimeCleanupScopeForServiceTypes
				{
					ServiceTypes = affectedServiceTypes
				}));
				await moduleRuntimeInstancesManager.ShutDownUnusedModulesAsync(scope);
			}
			foreach (ServiceTypes item in affectedServiceTypes)
			{
				this.ServiceReady?.Invoke(this, new ServiceReadyEventArgs(item));
			}
		}
		finally
		{
			_reloadingServicesSemaphore.Release();
		}
	}

	public async Task PropagateServiceSettingsChangesAsync(string serviceName, Guid serviceSettingsId, Dictionary<string, string> initialSettings, Dictionary<string, string> updatedSettings, CancellationToken cancellationToken)
	{
		await _reloadingServicesSemaphore.WaitAsync(cancellationToken);
		try
		{
			ModuleReloadCoordinator coordinator = new ModuleReloadCoordinator();
			this.ServiceSettingsUpdated?.Invoke(this, new ServiceSettingsUpdatedEventArgs(coordinator, serviceName, serviceSettingsId, updatedSettings));
			await coordinator.WaitForShutDownTasksAsync(cancellationToken);
			IReadOnlyList<ServiceTypes> affectedServiceTypes = coordinator.GetServiceTypes();
			bool flag = RequiredFieldsChangesUtil.RequiresReload(moduleDefinitionsRegistry.Get(serviceName).PresetsFieldsRequiringReload, initialSettings, updatedSettings);
			if (affectedServiceTypes.Count > 0 || flag)
			{
				ModuleRuntimeCleanupScope scope = (flag ? ((ModuleRuntimeCleanupScope)new ModuleRuntimeCleanupScopeForServiceNames
				{
					ServiceNames = new _003C_003Ez__ReadOnlySingleElementList<string>(serviceName)
				}) : ((ModuleRuntimeCleanupScope)new ModuleRuntimeCleanupScopeForServiceTypes
				{
					ServiceTypes = affectedServiceTypes
				}));
				await moduleRuntimeInstancesManager.ShutDownUnusedModulesAsync(scope);
			}
			foreach (ServiceTypes item in affectedServiceTypes)
			{
				this.ServiceReady?.Invoke(this, new ServiceReadyEventArgs(item));
			}
		}
		finally
		{
			_reloadingServicesSemaphore.Release();
		}
	}

	public async Task PropagateServicesConfigurationsChangesAsync(ServicesConfigurationsSet config, CancellationToken cancellationToken)
	{
		DispatchConfigurationChanged(config.UserId);
		if (this.ServicesConfigurationsSetChanged != null)
		{
			await PropagateServicesConfigurationsChangesAsync(await servicesConfigurationsSetResolver.ResolveAllAsync(config, cancellationToken), cancellationToken);
		}
	}

	private async Task PropagateServicesConfigurationsChangesAsync(ServicesConfigurations configs, CancellationToken cancellationToken)
	{
		await _reloadingServicesSemaphore.WaitAsync(cancellationToken);
		try
		{
			ModuleReloadCoordinator coordinator = new ModuleReloadCoordinator();
			this.ServicesConfigurationsSetChanged?.Invoke(this, new ServicesConfigurationsSetChangedEventArgs(configs, coordinator));
			await coordinator.WaitForShutDownTasksAsync(cancellationToken);
			ModuleRuntimeCleanupScopeForConfigs scope = new ModuleRuntimeCleanupScopeForConfigs
			{
				PreserveWithConfigs = configs
			};
			await moduleRuntimeInstancesManager.ShutDownUnusedModulesAsync(scope);
			IReadOnlyList<ServiceTypes> readOnlyList = coordinator.GetServiceTypes();
			if (readOnlyList.Contains(ServiceTypes.TextGen))
			{
				IReadOnlyList<ServiceTypes> readOnlyList2 = readOnlyList;
				int num = 0;
				ServiceTypes[] array = new ServiceTypes[2 + readOnlyList2.Count];
				foreach (ServiceTypes item in readOnlyList2)
				{
					array[num] = item;
					num++;
				}
				array[num] = ServiceTypes.Summarization;
				num++;
				array[num] = ServiceTypes.ActionInference;
				readOnlyList = new global::_003C_003Ez__ReadOnlyArray<ServiceTypes>(array);
				readOnlyList = readOnlyList.Distinct().ToArray();
			}
			foreach (ServiceTypes item2 in readOnlyList)
			{
				this.ServiceReady?.Invoke(this, new ServiceReadyEventArgs(item2));
			}
		}
		finally
		{
			_reloadingServicesSemaphore.Release();
		}
	}

	public void Dispose()
	{
		_reloadingServicesSemaphore.Dispose();
	}
}

```

## Voxta.Core.Runtime\SpeechToTextListener.cs
```csharp
using System;
using System.Threading.Tasks;
using Voxta.Abstractions.Services.SpeechToText;

namespace Voxta.Core.Runtime;

public class SpeechToTextListener(SpeechToTextManager manager, Action started, Action<string> partial, Action<string?, SpeechToTextRecognitionEndReason> finished) : ISpeechToTextListener, IAsyncDisposable
{
	private bool _disposed;

	public Action Started { get; } = started;

	public Action<string> Partial { get; } = partial;

	public Action<string?, SpeechToTextRecognitionEndReason> Finished { get; } = finished;

	public async ValueTask DisposeAsync()
	{
		if (!_disposed)
		{
			_disposed = true;
			await manager.StopTranscriptionAsync(this);
		}
	}
}

```

## Voxta.Core.Runtime\SpeechToTextManager.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Configuration;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Runtime;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services;
using Voxta.Abstractions.Services.AudioInput;
using Voxta.Abstractions.Services.AudioInput.Pipeline;
using Voxta.Abstractions.Services.SpeechToText;
using Voxta.Abstractions.Services.WakeWord;
using Voxta.Common;
using Voxta.Core.Chats.Sessions;
using Voxta.Core.Services.AudioInput;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Runtime;

public class SpeechToTextManager : ISpeechToTextManager, IAsyncDisposable
{
	private readonly SemaphoreSlim _sync;

	private readonly List<SpeechToTextListener> _listeners;

	private readonly ServiceChangedDebouncer _serviceChangedDebouncer;

	private string? _lastCulture;

	private bool _initializing;

	private readonly CancellationTokenSource _cts;

	private IAudioInputPipeline? _audioInputPipeline;

	private ClientAudioInputService? _clientService;

	private IWakeWordAudioInputPipelineMiddleware? _wakeWordMiddleware;

	private readonly StartStopDebouncer<ISpeechToTextListener?> _transcriptionDebouncer;

	private ServiceConfiguration? _audioConfig;

	private bool _disposed;

	private ISpeechToTextService _currentSpeechToText;

	public ISpeechToTextService SpeechToText => _003CspeechToText_003EP.Current;

	public bool Enabled => _003CspeechToText_003EP.Current.Enabled;

	public SpeechToTextManager(IServicesConfigurationChangeDispatcher servicesConfigurationChangeDispatcher, IAudioInputPipelineFactory audioInputPipelineFactory, IAudioStreamingGlobalListener audioStreamingGlobalListener, IServiceReference<ISpeechToTextService> speechToText, IServiceReference<IAudioInputService> audioInput, IServiceReference<IWakeWordService> wakeWord, IUserConnectionTunnel tunnel, ClientCapabilities capabilities, IAuthenticationContext auth, Guid sessionId, ServicesConfigurations configs, ILoggerFactory loggerFactory, ILogger<SpeechToTextManager> logger)
	{
		_003CservicesConfigurationChangeDispatcher_003EP = servicesConfigurationChangeDispatcher;
		_003CaudioInputPipelineFactory_003EP = audioInputPipelineFactory;
		_003CaudioStreamingGlobalListener_003EP = audioStreamingGlobalListener;
		_003CspeechToText_003EP = speechToText;
		_003CaudioInput_003EP = audioInput;
		_003CwakeWord_003EP = wakeWord;
		_003Ctunnel_003EP = tunnel;
		_003Ccapabilities_003EP = capabilities;
		_003Cauth_003EP = auth;
		_003CsessionId_003EP = sessionId;
		_003CloggerFactory_003EP = loggerFactory;
		_003Clogger_003EP = logger;
		_sync = new SemaphoreSlim(1, 1);
		_listeners = new List<SpeechToTextListener>();
		_serviceChangedDebouncer = new ServiceChangedDebouncer(250);
		_cts = new CancellationTokenSource();
		_transcriptionDebouncer = new StartStopDebouncer<ISpeechToTextListener>(_003Clogger_003EP, TimeSpan.FromMilliseconds(300L, 0L));
		_audioConfig = configs.Services.GetValueOrDefault(ServiceTypes.AudioInput);
		_currentSpeechToText = NullSpeechToTextService.Instance;
		base._002Ector();
	}

	public void RegisterEvents()
	{
		_003CservicesConfigurationChangeDispatcher_003EP.ServicesConfigurationsSetChanged += OnServicesConfigurationsSetChanged;
		_003CspeechToText_003EP.ServiceRemoved += OnServiceRemoved;
		_003CaudioInput_003EP.ServiceRemoved += OnServiceRemoved;
		_003CwakeWord_003EP.ServiceRemoved += OnServiceRemoved;
		_003CspeechToText_003EP.ServiceChanged += OnSpeechToTextChanged;
		_003CspeechToText_003EP.ServiceRemoved += OnSpeechToTextRemoved;
		_003CspeechToText_003EP.ServiceChanged += _serviceChangedDebouncer.OnServiceChanged;
		_003CaudioInput_003EP.ServiceChanged += _serviceChangedDebouncer.OnServiceChanged;
		_003CwakeWord_003EP.ServiceChanged += _serviceChangedDebouncer.OnServiceChanged;
		_serviceChangedDebouncer.ServicesChanged += OnServicesChangedDebounced;
	}

	public async Task InitializeAsync(string culture, CancellationToken cancellationToken)
	{
		_lastCulture = culture;
		_initializing = true;
		try
		{
			OnSpeechToTextChanged(this, EventArgs.Empty);
			await InitializeInternalAsync(cancellationToken);
		}
		finally
		{
			_initializing = false;
		}
	}

	public void SpeechChunkStart()
	{
		if (!_disposed)
		{
			_wakeWordMiddleware?.HandleSpeechStart();
		}
	}

	public void SpeechComplete()
	{
		if (!_disposed)
		{
			_wakeWordMiddleware?.HandleSpeechComplete();
		}
	}

	private async Task InitializeInternalAsync(CancellationToken cancellationToken)
	{
		if (_disposed)
		{
			return;
		}
		await _sync.WaitAsync(cancellationToken);
		try
		{
			if (_disposed || cancellationToken.IsCancellationRequested)
			{
				return;
			}
			if (_003Ccapabilities_003EP == null || _lastCulture == null)
			{
				throw new InvalidOperationException("Cannot initialize without capabilities and culture");
			}
			if (!_initializing)
			{
				_003Clogger_003EP.LogInformation("Configuration change detected, reinitializing speech to text services");
			}
			ClientAudioInputService clientService = _clientService;
			ISpeechToTextService currentSpeechToText = _003CspeechToText_003EP.Current;
			IAudioInputPipeline audioInputPipeline = _audioInputPipeline;
			if (!currentSpeechToText.Enabled)
			{
				_003Clogger_003EP.LogWarning("Cannot enable speech to text because the input service is missing or disabled");
				return;
			}
			if (clientService != null)
			{
				throw new InvalidOperationException("Attempt to initialize speech to text while client service is not null");
			}
			if (audioInputPipeline != null)
			{
				throw new InvalidOperationException("Attempt to initialize speech to text while audio input pipeline is not null");
			}
			IAudioInputService audioInputService = (((_audioConfig != null && !_audioConfig.PreferClientCapability && !_003Cauth_003EP.Remote) || !_003Ccapabilities_003EP.CanAudioInput()) ? ((!_003Cauth_003EP.Remote) ? _003CaudioInput_003EP.Current : null) : (_clientService = await CreateClientAudioInputService(cancellationToken)));
			IAudioInputService audioInputService2 = audioInputService;
			if (audioInputService2 == null || !audioInputService2.Enabled)
			{
				_003Clogger_003EP.LogWarning("Cannot enable speech to text, failed to create an audio input service");
				return;
			}
			AudioInputSpecifications specifications = audioInputService2.GetSpecifications();
			IWakeWordAudioInputPipelineMiddleware wakeWordMiddleware = ((!_003CwakeWord_003EP.Current.Enabled) ? null : (await _003CwakeWord_003EP.Current.CreateWakeWordAudioInputMiddlewareAsync(_003Ctunnel_003EP, _003CsessionId_003EP)));
			_wakeWordMiddleware = wakeWordMiddleware;
			_audioInputPipeline = await _003CaudioInputPipelineFactory_003EP.CreateAsync(_003Cauth_003EP, audioInputService2, _wakeWordMiddleware, specifications, cancellationToken);
			if (currentSpeechToText.ActiveCulture != _lastCulture)
			{
				await currentSpeechToText.InitializeTranscriptionAsync(specifications, _lastCulture, cancellationToken);
			}
			if (_listeners.Count > 0)
			{
				await SpeechToText.StartTranscriptionAsync(_audioInputPipeline, cancellationToken);
			}
		}
		catch (OperationCanceledException)
		{
			_003Clogger_003EP.LogWarning("Canceled speech transcription initialization");
		}
		catch (Exception ex2)
		{
			_003Clogger_003EP.LogError(ex2, "Failed to initialize speech transcription");
			_003Ctunnel_003EP.Send(new ServerErrorMessage(ex2));
		}
		finally
		{
			_sync.Release();
		}
	}

	private async Task<ClientAudioInputService> CreateClientAudioInputService(CancellationToken cancellationToken)
	{
		ClientAudioInputService service = new ClientAudioInputService(_003Ctunnel_003EP, _003CaudioStreamingGlobalListener_003EP.Subscribe(_003Cauth_003EP.UserId, _003CsessionId_003EP, cancellationToken), _003CloggerFactory_003EP.CreateLogger<ClientAudioInputService>(), _003CsessionId_003EP);
		await service.InitializeAsync(_003Cauth_003EP, NullServiceInstanceSettings.Instance, cancellationToken);
		return service;
	}

	private void OnServicesChangedDebounced(object? sender, EventArgs args)
	{
		Task.Run(async delegate
		{
			await InitializeInternalAsync(_cts.Token);
		}, _cts.Token);
	}

	private void OnSpeechToTextChanged(object? sender, EventArgs args)
	{
		if (_disposed)
		{
			return;
		}
		_sync.Wait();
		try
		{
			if (!_disposed)
			{
				ISpeechToTextService current = _003CspeechToText_003EP.Current;
				if (current.Enabled)
				{
					current.SpeechRecognitionStarted += OnSpeechRecognitionStarted;
					current.SpeechRecognitionPartial += OnSpeechRecognitionPartial;
					current.SpeechRecognitionFinished += OnSpeechRecognitionFinished;
					_currentSpeechToText = current;
				}
			}
		}
		finally
		{
			_sync.Release();
		}
	}

	private void OnSpeechToTextRemoved(object? sender, EventArgs args)
	{
		_sync.Wait();
		try
		{
			_currentSpeechToText.SpeechRecognitionStarted -= OnSpeechRecognitionStarted;
			_currentSpeechToText.SpeechRecognitionPartial -= OnSpeechRecognitionPartial;
			_currentSpeechToText.SpeechRecognitionFinished -= OnSpeechRecognitionFinished;
			_currentSpeechToText = NullSpeechToTextService.Instance;
		}
		finally
		{
			_sync.Release();
		}
	}

	private void OnServicesConfigurationsSetChanged(object? sender, ServicesConfigurationsSetChangedEventArgs e)
	{
		_audioConfig = e.Config.Services.GetValueOrDefault(ServiceTypes.AudioInput);
	}

	private void OnServiceRemoved(object? sender, EventArgs args)
	{
		ClientAudioInputService? clientAudioInputService = Interlocked.Exchange(ref _clientService, null);
		IAudioInputPipeline audioInputPipeline = Interlocked.Exchange(ref _audioInputPipeline, null);
		IWakeWordAudioInputPipelineMiddleware wakeWordAudioInputPipelineMiddleware = Interlocked.Exchange(ref _wakeWordMiddleware, null);
		clientAudioInputService?.DisposeAsync().Forget(_003Clogger_003EP);
		audioInputPipeline?.DisposeAsync().Forget(_003Clogger_003EP);
		wakeWordAudioInputPipelineMiddleware?.DisposeAsync().Forget(_003Clogger_003EP);
	}

	public async Task<ISpeechToTextListener?> StartTranscriptionAsync(string startReason, Action started, Action<string> partial, Action<string?, SpeechToTextRecognitionEndReason> finished, CancellationToken cancellationToken)
	{
		if (_disposed)
		{
			return null;
		}
		return await _transcriptionDebouncer.Start(async delegate
		{
			if (_disposed)
			{
				return (ISpeechToTextListener?)null;
			}
			SpeechToTextListener listener = null;
			await _sync.WaitAsync(cancellationToken);
			try
			{
				IWakeWordAudioInputPipelineMiddleware currentWakeWordMiddleware = _wakeWordMiddleware;
				listener = new SpeechToTextListener(this, started, partial, delegate(string? text, SpeechToTextRecognitionEndReason endReason)
				{
					if (currentWakeWordMiddleware != null && currentWakeWordMiddleware.HandleTranscriptionResult(text))
					{
						finished(null, endReason);
					}
					else
					{
						finished(text, endReason);
					}
				});
				_listeners.Add(listener);
				if (_listeners.Count > 1)
				{
					_003Clogger_003EP.LogDebug("Multiple listeners detected after starting one");
				}
				if (_listeners.Count == 1)
				{
					ISpeechToTextService currentSpeechToText = _currentSpeechToText;
					IAudioInputPipeline audioInputPipeline = _audioInputPipeline;
					if (currentSpeechToText.Enabled && audioInputPipeline != null)
					{
						_003Clogger_003EP.LogInformation("Starting speech transcription ({Reason})", startReason);
						audioInputPipeline.Start();
						await currentSpeechToText.StartTranscriptionAsync(audioInputPipeline, cancellationToken);
						_wakeWordMiddleware?.TranscriptionStartedAsync();
					}
				}
				else
				{
					_003Clogger_003EP.LogDebug("Speech transcription would start but it is disabled ({Reason})", startReason);
				}
				return listener;
			}
			catch
			{
				if (listener != null)
				{
					await listener.DisposeAsync();
				}
				throw;
			}
			finally
			{
				_sync.Release();
			}
		});
	}

	internal async Task StopTranscriptionAsync(SpeechToTextListener listener)
	{
		if (_disposed)
		{
			return;
		}
		await _transcriptionDebouncer.Stop(async delegate
		{
			if (_disposed)
			{
				return;
			}
			await _sync.WaitAsync(CancellationToken.None);
			try
			{
				if (!_listeners.Remove(listener))
				{
					throw new InvalidOperationException("Failed to remove listener");
				}
				if (_listeners.Count > 0)
				{
					_003Clogger_003EP.LogDebug("Listeners remaining after stopping one");
				}
				ISpeechToTextService currentSpeechToText = _currentSpeechToText;
				if (_listeners.Count == 0 && currentSpeechToText.Enabled)
				{
					await currentSpeechToText.StopTranscriptionAsync();
				}
			}
			finally
			{
				_sync.Release();
			}
		});
	}

	private void OnSpeechRecognitionStarted(object? sender, EventArgs e)
	{
		if (_disposed)
		{
			return;
		}
		_003Clogger_003EP.LogDebug("Speech recognition started");
		_sync.Wait();
		try
		{
			foreach (SpeechToTextListener listener in _listeners)
			{
				listener.Started();
			}
		}
		finally
		{
			_sync.Release();
		}
	}

	private void OnSpeechRecognitionPartial(object? sender, string e)
	{
		if (_disposed)
		{
			return;
		}
		_003Clogger_003EP.LogDebug("Speech recognition partial: {Value}", e);
		_sync.Wait();
		try
		{
			foreach (SpeechToTextListener listener in _listeners)
			{
				listener.Partial(e);
			}
		}
		finally
		{
			_sync.Release();
		}
	}

	private void OnSpeechRecognitionFinished(object? sender, SpeechToTextTranscriptionCompleteEventArgs e)
	{
		if (_disposed)
		{
			return;
		}
		if (e.Text != null)
		{
			_003Clogger_003EP.LogDebug("Speech recognition finished: {Value}", e);
		}
		else
		{
			_003Clogger_003EP.LogDebug("Speech recognition canceled");
		}
		_sync.Wait();
		try
		{
			foreach (SpeechToTextListener listener in _listeners)
			{
				listener.Finished(e.Text, e.Reason);
			}
		}
		finally
		{
			_sync.Release();
		}
	}

	public async ValueTask DisposeAsync()
	{
		if (_disposed)
		{
			return;
		}
		_disposed = true;
		_003CservicesConfigurationChangeDispatcher_003EP.ServicesConfigurationsSetChanged -= OnServicesConfigurationsSetChanged;
		_003CspeechToText_003EP.ServiceRemoved -= OnServiceRemoved;
		_003CaudioInput_003EP.ServiceRemoved -= OnServiceRemoved;
		_003CwakeWord_003EP.ServiceRemoved -= OnServiceRemoved;
		_003CspeechToText_003EP.ServiceChanged -= OnSpeechToTextChanged;
		_003CspeechToText_003EP.ServiceRemoved -= OnSpeechToTextRemoved;
		_003CspeechToText_003EP.ServiceChanged -= _serviceChangedDebouncer.OnServiceChanged;
		_003CaudioInput_003EP.ServiceChanged -= _serviceChangedDebouncer.OnServiceChanged;
		_003CwakeWord_003EP.ServiceChanged -= _serviceChangedDebouncer.OnServiceChanged;
		_serviceChangedDebouncer.ServicesChanged += OnServicesChangedDebounced;
		await _serviceChangedDebouncer.DisposeAsync();
		await _cts.CancelAsync();
		await _sync.WaitAsync(CancellationToken.None);
		ClientAudioInputService clientAudioInputService = Interlocked.Exchange(ref _clientService, null);
		if (clientAudioInputService != null)
		{
			if (_listeners.Count > 0)
			{
				clientAudioInputService.StopRecording();
			}
			await clientAudioInputService.DisposeAsync();
		}
		IAudioInputPipeline audioInputPipeline = Interlocked.Exchange(ref _audioInputPipeline, null);
		if (audioInputPipeline != null)
		{
			await audioInputPipeline.DisposeAsync();
		}
		IWakeWordAudioInputPipelineMiddleware wakeWordAudioInputPipelineMiddleware = Interlocked.Exchange(ref _wakeWordMiddleware, null);
		if (wakeWordAudioInputPipelineMiddleware != null)
		{
			await wakeWordAudioInputPipelineMiddleware.DisposeAsync();
		}
		await _003CaudioInput_003EP.DisposeAsync();
		await _003CwakeWord_003EP.DisposeAsync();
		await _003CspeechToText_003EP.DisposeAsync();
		_sync.Dispose();
		_cts.Dispose();
	}
}

```

## Voxta.Core.Runtime\SpeechToTextManagerFactory.cs
```csharp
using System;
using System.Threading;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Configuration;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Runtime;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services.AudioInput;
using Voxta.Abstractions.Services.AudioInput.Pipeline;
using Voxta.Abstractions.Services.SpeechToText;
using Voxta.Abstractions.Services.WakeWord;
using Voxta.Core.Services.AudioInput;
using Voxta.Model.Shared;

namespace Voxta.Core.Runtime;

public class SpeechToTextManagerFactory : ISpeechToTextManagerFactory
{
	private static int _used;

	private readonly IServicesConfigurationChangeDispatcher _servicesConfigurationChangeDispatcher;

	private readonly IAudioInputPipelineFactory _audioInputPipelineFactory;

	private readonly IAudioStreamingGlobalListener _audioStreamingGlobalListener;

	private readonly ILoggerFactory _loggerFactory;

	public SpeechToTextManagerFactory(IServicesConfigurationChangeDispatcher servicesConfigurationChangeDispatcher, IAudioInputPipelineFactory audioInputPipelineFactory, IAudioStreamingGlobalListener audioStreamingGlobalListener, ILoggerFactory loggerFactory)
	{
		if (Interlocked.CompareExchange(ref _used, 1, 0) == 1)
		{
			throw new InvalidOperationException("SpeechToTextManagerFactory can only be used once");
		}
		_servicesConfigurationChangeDispatcher = servicesConfigurationChangeDispatcher;
		_audioInputPipelineFactory = audioInputPipelineFactory;
		_audioStreamingGlobalListener = audioStreamingGlobalListener;
		_loggerFactory = loggerFactory;
	}

	public ISpeechToTextManager Create(IServiceReference<ISpeechToTextService> speechToText, IServiceReference<IAudioInputService> audioInput, IServiceReference<IWakeWordService> wakeWord, IAuthenticationContext auth, Guid sessionId, ServicesConfigurations configs, IUserConnectionTunnel tunnel, ClientCapabilities capabilities)
	{
		SpeechToTextManager speechToTextManager = new SpeechToTextManager(_servicesConfigurationChangeDispatcher, _audioInputPipelineFactory, _audioStreamingGlobalListener, speechToText, audioInput, wakeWord, tunnel, capabilities, auth, sessionId, configs, _loggerFactory, _loggerFactory.CreateLogger<SpeechToTextManager>());
		speechToTextManager.RegisterEvents();
		return speechToTextManager;
	}
}

```

## Voxta.Core.Runtime\TextToSpeechManager.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Cache;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Configuration;
using Voxta.Abstractions.Runtime;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services.AudioOutput;
using Voxta.Abstractions.Services.AudioOutput.Pipeline;
using Voxta.Abstractions.Services.TextToSpeech;
using Voxta.Common;
using Voxta.Core.Chats.Objects.Characters;
using Voxta.Core.Chats.Sessions;
using Voxta.Core.Speech;
using Voxta.Core.Speech.None;
using Voxta.Model.Shared;

namespace Voxta.Core.Runtime;

public class TextToSpeechManager : ITextToSpeechManager, IAsyncDisposable
{
	private readonly SemaphoreSlim _sync;

	private readonly ServiceChangedDebouncer _serviceChangedDebouncer;

	private bool _initializing;

	private IChatSession? _chatSession;

	private readonly CancellationTokenSource _cts;

	private ISpeechGenerator _speechGenerator;

	private IAudioOutputPipeline? _audioOutputPipeline;

	private bool _disposed;

	private ServiceConfiguration? _audioConfig;

	public ISpeechGenerator SpeechGenerator => _speechGenerator;

	public bool Enabled => _speechGenerator.Enabled;

	public TextToSpeechManager(IAudioOutputPipelineFactory audioOutputPipelineFactory, ISpeechGeneratorFactory speechGeneratorFactory, IThinkingSpeechManager thinkingSpeechManager, IServicesConfigurationChangeDispatcher servicesConfigurationChangeDispatcher, IServiceReference<ITextToSpeechService> textToSpeech, IServiceReference<IAudioOutputService> audioOutput, ClientCapabilities capabilities, IAuthenticationContext auth, ServicesConfigurations configs, ILogger<TextToSpeechManager> logger)
	{
		_003CaudioOutputPipelineFactory_003EP = audioOutputPipelineFactory;
		_003CspeechGeneratorFactory_003EP = speechGeneratorFactory;
		_003CthinkingSpeechManager_003EP = thinkingSpeechManager;
		_003CservicesConfigurationChangeDispatcher_003EP = servicesConfigurationChangeDispatcher;
		_003CtextToSpeech_003EP = textToSpeech;
		_003CaudioOutput_003EP = audioOutput;
		_003Ccapabilities_003EP = capabilities;
		_003Cauth_003EP = auth;
		_003Clogger_003EP = logger;
		_sync = new SemaphoreSlim(1, 1);
		_serviceChangedDebouncer = new ServiceChangedDebouncer(250);
		_cts = new CancellationTokenSource();
		_speechGenerator = NullSpeechGenerator.Instance;
		_audioConfig = configs.Services.GetValueOrDefault(ServiceTypes.AudioOutput);
		base._002Ector();
	}

	public void RegisterEvents()
	{
		_003CservicesConfigurationChangeDispatcher_003EP.ServicesConfigurationsSetChanged += OnServicesConfigurationsSetChanged;
		_003CtextToSpeech_003EP.ServiceRemoved += OnServiceRemoved;
		_003CaudioOutput_003EP.ServiceRemoved += OnServiceRemoved;
		_003CtextToSpeech_003EP.ServiceChanged += _serviceChangedDebouncer.OnServiceChanged;
		_003CaudioOutput_003EP.ServiceChanged += _serviceChangedDebouncer.OnServiceChanged;
		_serviceChangedDebouncer.ServicesChanged += OnTextToSpeechChangedDebounced;
	}

	public async Task InitializeAsync(IChatSession session, CancellationToken cancellationToken)
	{
		_chatSession = session;
		_initializing = true;
		try
		{
			await InitializeInternalAsync(cancellationToken);
		}
		finally
		{
			_initializing = false;
		}
	}

	public async Task WarmupAsync(Guid userId, VoiceInfo voice, Guid characterId, string culture, CancellationToken cancellationToken)
	{
		ISpeechGenerator speechGenerator = _speechGenerator;
		if (speechGenerator.Enabled)
		{
			await speechGenerator.WarmupAsync(userId, voice, characterId, culture, cancellationToken);
		}
	}

	private async Task InitializeInternalAsync(CancellationToken cancellationToken)
	{
		if (_disposed)
		{
			return;
		}
		await _sync.WaitAsync(cancellationToken);
		try
		{
			if (!_disposed)
			{
				if (_audioOutputPipeline != null)
				{
					await _audioOutputPipeline.DisposeAsync();
				}
				if (!_initializing)
				{
					_003Clogger_003EP.LogInformation("Configuration change detected, reinitializing text to speech services");
				}
				if (!_003CtextToSpeech_003EP.Current.Enabled)
				{
					_003Clogger_003EP.LogWarning("Cannot enable text to speech because the output service is missing or disabled");
					ConfigureSpeechGenerator();
					return;
				}
				IAudioOutputService current = _003CaudioOutput_003EP.Current;
				IAudioOutputPipeline audioOutputPipeline = ((!current.Enabled) ? null : (await _003CaudioOutputPipelineFactory_003EP.CreateAsync(current, cancellationToken)));
				_audioOutputPipeline = audioOutputPipeline;
				ConfigureSpeechGenerator();
				await GenerateThinkingSpeechAsync(cancellationToken);
			}
		}
		catch (OperationCanceledException)
		{
			_003Clogger_003EP.LogWarning("Canceled text to speech initialization");
		}
		catch (Exception exception)
		{
			_003Clogger_003EP.LogError(exception, "Error while initializing text to speech");
		}
		finally
		{
			_sync.Release();
		}
	}

	private void ConfigureSpeechGenerator()
	{
		_speechGenerator = ((_chatSession != null) ? _003CspeechGeneratorFactory_003EP.Disabled(_chatSession) : NullSpeechGenerator.Instance);
		if (_chatSession != null)
		{
			_speechGenerator = _003CspeechGeneratorFactory_003EP.Create(_003Cauth_003EP, _chatSession, _003CtextToSpeech_003EP.Current, _audioOutputPipeline, _003Ccapabilities_003EP, _audioConfig?.PreferClientCapability ?? true);
		}
	}

	private async Task GenerateThinkingSpeechAsync(CancellationToken cancellationToken)
	{
		if (_chatSession == null || !_003CtextToSpeech_003EP.Current.Enabled || !_speechGenerator.Enabled)
		{
			return;
		}
		foreach (CharacterInstance character in _chatSession.ChatInstance.Characters)
		{
			if (character.EnableThinkingSpeech)
			{
				VoiceInfo voice = character.GetVoice(_003CtextToSpeech_003EP.Current.InstanceSettings.ServiceName, _003CtextToSpeech_003EP.Current.InstanceSettings.ModuleId);
				IPersistentCacheEntry[] items = (character.ThinkingSpeechEntries = await _003CthinkingSpeechManager_003EP.GenerateThinkingSpeechAsync(_003Cauth_003EP, _003CtextToSpeech_003EP.Current, voice, character.Id, character.Culture.Name, _003Ccapabilities_003EP.AcceptedAudioContentTypes, cancellationToken));
				character.ThinkingSpeechUrls = _speechGenerator.ConvertToUrl(items) ?? Array.Empty<string>();
				break;
			}
		}
	}

	private void OnTextToSpeechChangedDebounced(object? sender, EventArgs e)
	{
		if (!_disposed)
		{
			Task.Run(async delegate
			{
				await InitializeInternalAsync(_cts.Token);
			}, _cts.Token);
		}
	}

	private void OnServicesConfigurationsSetChanged(object? sender, ServicesConfigurationsSetChangedEventArgs e)
	{
		_audioConfig = e.Config.Services.GetValueOrDefault(ServiceTypes.AudioOutput);
	}

	private void OnServiceRemoved(object? sender, EventArgs e)
	{
		if (!_disposed)
		{
			ISpeechGenerator value = ((_chatSession != null) ? _003CspeechGeneratorFactory_003EP.Disabled(_chatSession) : NullSpeechGenerator.Instance);
			Interlocked.Exchange(ref _speechGenerator, value);
			Interlocked.Exchange(ref _audioOutputPipeline, null)?.DisposeAsync().Forget(_003Clogger_003EP);
		}
	}

	public async ValueTask DisposeAsync()
	{
		if (!_disposed)
		{
			_disposed = true;
			_003CservicesConfigurationChangeDispatcher_003EP.ServicesConfigurationsSetChanged += OnServicesConfigurationsSetChanged;
			_003CtextToSpeech_003EP.ServiceRemoved -= OnServiceRemoved;
			_003CaudioOutput_003EP.ServiceRemoved -= OnServiceRemoved;
			_003CtextToSpeech_003EP.ServiceChanged -= _serviceChangedDebouncer.OnServiceChanged;
			_003CaudioOutput_003EP.ServiceChanged -= _serviceChangedDebouncer.OnServiceChanged;
			_serviceChangedDebouncer.ServicesChanged -= OnTextToSpeechChangedDebounced;
			await _cts.CancelAsync();
			await _sync.WaitAsync();
			await _serviceChangedDebouncer.DisposeAsync();
			if (_audioOutputPipeline != null)
			{
				await _audioOutputPipeline.DisposeAsync();
			}
			await _003CtextToSpeech_003EP.DisposeAsync();
			await _003CaudioOutput_003EP.DisposeAsync();
		}
	}
}

```

## Voxta.Core.Runtime\TextToSpeechManagerFactory.cs
```csharp
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Configuration;
using Voxta.Abstractions.Runtime;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services.AudioOutput;
using Voxta.Abstractions.Services.AudioOutput.Pipeline;
using Voxta.Abstractions.Services.TextToSpeech;
using Voxta.Core.Speech;
using Voxta.Model.Shared;

namespace Voxta.Core.Runtime;

public class TextToSpeechManagerFactory(IAudioOutputPipelineFactory audioOutputPipelineFactory, ISpeechGeneratorFactory speechGeneratorFactory, IThinkingSpeechManager thinkingSpeechManager, IServicesConfigurationChangeDispatcher servicesConfigurationChangeDispatcher, ILoggerFactory loggerFactory) : ITextToSpeechManagerFactory
{
	public ITextToSpeechManager Create(IServiceReference<ITextToSpeechService> textToSpeech, IServiceReference<IAudioOutputService> audioOutput, IAuthenticationContext auth, ServicesConfigurations configs, ClientCapabilities capabilities)
	{
		TextToSpeechManager textToSpeechManager = new TextToSpeechManager(audioOutputPipelineFactory, speechGeneratorFactory, thinkingSpeechManager, servicesConfigurationChangeDispatcher, textToSpeech, audioOutput, capabilities, auth, configs, loggerFactory.CreateLogger<TextToSpeechManager>());
		textToSpeechManager.RegisterEvents();
		return textToSpeechManager;
	}
}

```

## Voxta.Core.Runtime\VisionManager.cs
```csharp
using System;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Services.ComputerVision;
using Voxta.Abstractions.Services.VisionCapture;
using Voxta.Core.Chats.Sessions;
using Voxta.Model.Shared;

namespace Voxta.Core.Runtime;

public class VisionManager(IServiceReference<IComputerVisionService> computerVision, IVisionCaptureServiceReferences visionCapture) : IVisionManager, IAsyncDisposable
{
	private bool _disposed;

	public IVisionCaptureService EyesVisionCapture => visionCapture.GetBySource(ComputerVisionSource.Eyes);

	public IVisionCaptureService ScreenVisionCapture => visionCapture.GetBySource(ComputerVisionSource.Screen);

	public IComputerVisionService ComputerVision => computerVision.Current;

	public async ValueTask DisposeAsync()
	{
		if (!_disposed)
		{
			_disposed = true;
			await computerVision.DisposeAsync();
			await visionCapture.DisposeAsync();
		}
	}
}

```

## Voxta.Core.Runtime\VisionManagerFactory.cs
```csharp
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Services.ComputerVision;
using Voxta.Core.Chats.Sessions;

namespace Voxta.Core.Runtime;

public class VisionManagerFactory : IVisionManagerFactory
{
	public IVisionManager Create(IServiceReference<IComputerVisionService> computerVision, IVisionCaptureServiceReferences visionCapture)
	{
		return new VisionManager(computerVision, visionCapture);
	}
}

```

## Voxta.Core.Security\AuthenticationContext.cs
```csharp
using System;
using Voxta.Abstractions.Security;

namespace Voxta.Core.Security;

public class AuthenticationContext(Guid userId, string role, bool isRemote) : IAuthenticationContext
{
	public Guid UserId { get; } = userId;

	public string Role { get; } = role;

	public bool Remote { get; } = isRemote;
}

```

## Voxta.Core.Services.AudioInput\AudioInputPipeline.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services.AudioInput;
using Voxta.Abstractions.Services.AudioInput.Pipeline;
using Voxta.Abstractions.Services.WakeWord;
using Voxta.Model.Shared;

namespace Voxta.Core.Services.AudioInput;

public class AudioInputPipeline(IAudioInputPipelineComponentFactory factory, IAudioInputPipelineState state, IAudioInputService audioInputService, IWakeWordAudioInputPipelineMiddleware? wakeWordAudioInputPipelineMiddleware, AudioInputSpecifications specifications, IAuthenticationContext auth) : IAudioInputPipeline, IAudioInputPipelineListener, IAsyncDisposable
{
	private AudioInputPipelineInstance? _instance;

	public async Task InitializeInputPipelineAsync(CancellationToken cancellationToken)
	{
		if (_instance != null)
		{
			throw new InvalidOperationException("Already initialized");
		}
		state.Specifications = audioInputService.GetSpecifications();
		if (state.Specifications.BufferMilliseconds <= 0)
		{
			throw new InvalidOperationException("BufferMilliseconds must be greater than 0");
		}
		if (state.Specifications.SampleRate <= 0)
		{
			throw new InvalidOperationException("SampleRate must be greater than 0");
		}
		IAudioInputPipelineMiddleware[] components = await factory.CreateAudioInputPipelineComponentsAsync(auth, specifications, wakeWordAudioInputPipelineMiddleware, cancellationToken);
		AudioInputPipelineInstance audioInputPipelineInstance = new AudioInputPipelineInstance(audioInputService, components, state);
		audioInputPipelineInstance.DataAvailable += PushRecordedBytes;
		_instance = audioInputPipelineInstance;
		state.OnFirstListener += OnFirstListener;
		state.OnNoListeners += OnNoListeners;
		if (state.Recording)
		{
			OnFirstListener(this, EventArgs.Empty);
		}
	}

	public IAudioInputPipelineToken Listen(AudioPipelineListenCallback callback)
	{
		return state.Listen(callback);
	}

	public void Start()
	{
		_instance?.Start();
	}

	private void OnFirstListener(object? sender, EventArgs e)
	{
		if (_instance == null)
		{
			throw new NullReferenceException("AudioInputPipelineInstance is not initialized");
		}
		_instance.Source.StartRecording();
	}

	private void OnNoListeners(object? sender, EventArgs e)
	{
		_instance?.Source.StopRecording();
	}

	private void PushRecordedBytes(object? sender, AudioInputFrame e)
	{
		state.PushRecordedBytes(e.Buffer, e.BytesRecorded);
	}

	public async ValueTask DisposeAsync()
	{
		state.OnFirstListener -= OnFirstListener;
		state.OnNoListeners -= OnNoListeners;
		if (_instance != null)
		{
			_instance.DataAvailable -= PushRecordedBytes;
			await _instance.DisposeAsync();
			_instance = null;
		}
	}
}

```

## Voxta.Core.Services.AudioInput\AudioInputPipelineComponentFactory.cs
```csharp
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services;
using Voxta.Abstractions.Services.AudioInput;
using Voxta.Abstractions.Services.AudioInput.Pipeline;
using Voxta.Abstractions.Services.WakeWord;
using Voxta.Model.Shared;

namespace Voxta.Core.Services.AudioInput;

public class AudioInputPipelineComponentFactory(IServiceFactory<IAudioInputPipelineService> audioPipelineServiceFactory) : IAudioInputPipelineComponentFactory
{
	public async Task<IAudioInputPipelineMiddleware[]> CreateAudioInputPipelineComponentsAsync(IAuthenticationContext auth, AudioInputSpecifications specifications, IWakeWordAudioInputPipelineMiddleware? wakeWordAudioInputPipelineMiddleware, CancellationToken cancellationToken)
	{
		List<IAudioInputPipelineMiddleware> middlewares = new List<IAudioInputPipelineMiddleware>();
		IAudioInputPipelineService[] services = await audioPipelineServiceFactory.CreateAllAsync(auth, cancellationToken);
		try
		{
			IAudioInputPipelineService[] array = services;
			foreach (IAudioInputPipelineService obj in array)
			{
				List<IAudioInputPipelineMiddleware> list = middlewares;
				list.AddRange(await obj.CreateAudioInputMiddlewaresAsync());
			}
			if (wakeWordAudioInputPipelineMiddleware != null)
			{
				middlewares.Add(wakeWordAudioInputPipelineMiddleware);
			}
			IAudioInputPipelineMiddleware[] ordered = middlewares.OrderBy((IAudioInputPipelineMiddleware c) => c.Position).ToArray();
			IAudioInputPipelineMiddleware[] array2 = ordered;
			for (int i = 0; i < array2.Length; i++)
			{
				await array2[i].InitializeAsync(specifications);
			}
			return ordered;
		}
		catch
		{
			IAudioInputPipelineService[] array = services;
			for (int i = 0; i < array.Length; i++)
			{
				await array[i].DisposeAsync();
			}
			foreach (IAudioInputPipelineMiddleware item in middlewares)
			{
				await item.DisposeAsync();
			}
			throw;
		}
	}
}

```

## Voxta.Core.Services.AudioInput\AudioInputPipelineFactory.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services.AudioInput;
using Voxta.Abstractions.Services.AudioInput.Pipeline;
using Voxta.Abstractions.Services.WakeWord;
using Voxta.Model.Shared;

namespace Voxta.Core.Services.AudioInput;

public class AudioInputPipelineFactory(IAudioInputPipelineComponentFactory audioInputPipelineComponentFactory, IAudioInputPipelineState state) : IAudioInputPipelineFactory
{
	public async Task<IAudioInputPipeline> CreateAsync(IAuthenticationContext auth, IAudioInputService audioInputService, IWakeWordAudioInputPipelineMiddleware? wakeWordAudioInputPipelineMiddleware, AudioInputSpecifications specifications, CancellationToken cancellationToken)
	{
		AudioInputPipeline pipeline = new AudioInputPipeline(audioInputPipelineComponentFactory, state, audioInputService, wakeWordAudioInputPipelineMiddleware, specifications, auth);
		try
		{
			await pipeline.InitializeInputPipelineAsync(cancellationToken);
			return pipeline;
		}
		catch
		{
			await pipeline.DisposeAsync();
			throw;
		}
	}
}

```

## Voxta.Core.Services.AudioInput\AudioInputPipelineInstance.cs
```csharp
using System;
using System.Linq;
using System.Threading.Tasks;
using Voxta.Abstractions.Services.AudioInput;
using Voxta.Abstractions.Services.AudioInput.Pipeline;
using Voxta.Model.Shared;

namespace Voxta.Core.Services.AudioInput;

public class AudioInputPipelineInstance
{
	private class FinalMiddleware(AudioInputPipelineInstance pipeline) : IAudioInputPipelineMiddleware, IAsyncDisposable
	{
		public int Position => int.MaxValue;

		public Task InitializeAsync(AudioInputSpecifications specifications)
		{
			return Task.CompletedTask;
		}

		public void Start()
		{
		}

		public void Process(AudioInputFrame data, Action<AudioInputFrame> next, Action terminate)
		{
			if (!pipeline._disposed)
			{
				pipeline._state.FrameComplete();
				pipeline.DataAvailable?.Invoke(this, data);
			}
		}

		public ValueTask DisposeAsync()
		{
			return ValueTask.CompletedTask;
		}
	}

	private readonly IAudioInputPipelineMiddleware[] _components;

	private readonly IAudioInputPipelineState _state;

	private bool _disposed;

	private readonly AudioInputPipelineMiddlewareChain _chain;

	public IAudioInputService Source { get; }

	public event EventHandler<AudioInputFrame>? DataAvailable;

	public AudioInputPipelineInstance(IAudioInputService source, IAudioInputPipelineMiddleware[] components, IAudioInputPipelineState state)
	{
		Source = source;
		_components = components;
		_state = state;
		_chain = new AudioInputPipelineMiddlewareChain(delegate
		{
			if (!_disposed)
			{
				_state.FrameComplete();
			}
		});
		foreach (IAudioInputPipelineMiddleware item in _components.OrderBy((IAudioInputPipelineMiddleware c) => c.Position))
		{
			_chain.Use(item);
		}
		_chain.Use(new FinalMiddleware(this));
		source.DataAvailable += OnDataAvailable;
	}

	public void Start()
	{
		IAudioInputPipelineMiddleware[] components = _components;
		for (int i = 0; i < components.Length; i++)
		{
			components[i].Start();
		}
	}

	private void OnDataAvailable(object? sender, AudioInputFrame e)
	{
		if (!_disposed && e.BytesRecorded != 0)
		{
			_state.CurrentFrame.Clear();
			_chain.Execute(e);
		}
	}

	public async ValueTask DisposeAsync()
	{
		_disposed = true;
		Source.DataAvailable -= OnDataAvailable;
		await Task.WhenAll(_components.Select((IAudioInputPipelineMiddleware x) => x.DisposeAsync().AsTask()));
	}
}

```

## Voxta.Core.Services.AudioInput\AudioInputPipelineMiddlewareChain.cs
```csharp
using System;
using System.Collections.Generic;
using Voxta.Abstractions.Services.AudioInput.Pipeline;

namespace Voxta.Core.Services.AudioInput;

public class AudioInputPipelineMiddlewareChain(Action onTerminate)
{
	private readonly List<IAudioInputPipelineMiddleware> _middlewares = new List<IAudioInputPipelineMiddleware>();

	public void Use(IAudioInputPipelineMiddleware middleware)
	{
		_middlewares.Add(middleware);
	}

	public void Execute(AudioInputFrame data)
	{
		ProcessMiddleware(0, data);
	}

	private void ProcessMiddleware(int index, AudioInputFrame data)
	{
		if (index < _middlewares.Count)
		{
			_middlewares[index].Process(data, Next, onTerminate);
		}
		void Next(AudioInputFrame d)
		{
			ProcessMiddleware(index + 1, d);
		}
	}
}

```

## Voxta.Core.Services.AudioInput\AudioStreamingGlobalListener.cs
```csharp
using System;
using System.Collections.Concurrent;
using System.Threading;

namespace Voxta.Core.Services.AudioInput;

public class AudioStreamingGlobalListener : IAudioStreamingGlobalListener
{
	private readonly ConcurrentDictionary<UserSession, IAudioStreamingListener> _sessions = new ConcurrentDictionary<UserSession, IAudioStreamingListener>();

	public IAudioStreamingListener Subscribe(Guid userId, Guid sessionId, CancellationToken cancellationToken)
	{
		cancellationToken.ThrowIfCancellationRequested();
		UserSession userSession = new UserSession(userId, sessionId);
		IAudioStreamingListener orAdd = _sessions.GetOrAdd(userSession, (UserSession x) => new AudioStreamingListener(delegate
		{
			_sessions.TryRemove(userSession, out IAudioStreamingListener _);
		}));
		orAdd.Increment();
		return orAdd;
	}
}

```

## Voxta.Core.Services.AudioInput\AudioStreamingListener.cs
```csharp
using System;
using System.Threading;
using Voxta.Abstractions.Services.AudioInput.Pipeline;

namespace Voxta.Core.Services.AudioInput;

public class AudioStreamingListener(Action dispose) : IAudioStreamingListener, IDisposable
{
	private int _listeners;

	public event EventHandler<AudioInputFrame>? DataAvailable;

	public void Send(byte[] buffer, int resultCount)
	{
		if (_listeners != 0)
		{
			this.DataAvailable?.Invoke(this, new AudioInputFrame(buffer, resultCount));
		}
	}

	public void Increment()
	{
		Interlocked.Increment(ref _listeners);
	}

	public void Dispose()
	{
		if (Interlocked.Decrement(ref _listeners) <= 0)
		{
			this.DataAvailable = null;
			dispose();
		}
	}
}

```

## Voxta.Core.Services.AudioInput\ClientAudioInputService.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services;
using Voxta.Abstractions.Services.AudioInput;
using Voxta.Abstractions.Services.AudioInput.Pipeline;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Services.AudioInput;

public class ClientAudioInputService(IUserConnectionTunnel tunnel, IAudioStreamingListener audioStreamingListener, ILogger logger, Guid sessionId) : IAudioInputService, IService, IAsyncDisposable
{
	public static readonly AudioInputSpecifications Specifications = new AudioInputSpecifications
	{
		SampleRate = 16000,
		BufferMilliseconds = 30,
		Channels = 1,
		BitsPerSample = 16
	};

	private readonly Lock _sync = new Lock();

	private bool _recording;

	public ServiceTypes ServiceType => ServiceTypes.AudioInput;

	public IServiceInstanceSettings InstanceSettings
	{
		get
		{
			throw new NotSupportedException("ClientAudioInputService does not support settings");
		}
	}

	public event EventHandler<AudioInputFrame>? DataAvailable;

	public Task InitializeAsync(IAuthenticationContext auth, IServiceInstanceSettings settings, CancellationToken cancellationToken)
	{
		audioStreamingListener.DataAvailable += OnDataAvailable;
		return Task.CompletedTask;
	}

	private void OnDataAvailable(object? sender, AudioInputFrame e)
	{
		this.DataAvailable?.Invoke(this, e);
	}

	public AudioInputSpecifications GetSpecifications()
	{
		return Specifications;
	}

	public void StartRecording()
	{
		using (_sync.EnterScope())
		{
			if (!_recording)
			{
				_recording = true;
				tunnel.Send(new ServerRecordingRequestMessage
				{
					SessionId = sessionId,
					Enabled = true
				});
				logger.LogDebug("Requested client recording start");
			}
		}
	}

	public void StopRecording()
	{
		using (_sync.EnterScope())
		{
			if (_recording)
			{
				_recording = false;
				tunnel.Send(new ServerRecordingRequestMessage
				{
					SessionId = sessionId,
					Enabled = false
				});
				logger.LogDebug("Requested client recording stop");
			}
		}
	}

	public ValueTask DisposeAsync()
	{
		audioStreamingListener.DataAvailable -= OnDataAvailable;
		audioStreamingListener.Dispose();
		using (_sync.EnterScope())
		{
			if (_recording)
			{
				tunnel.Send(new ServerRecordingRequestMessage
				{
					SessionId = sessionId,
					Enabled = false
				});
			}
		}
		return ValueTask.CompletedTask;
	}
}

```

## Voxta.Core.Services.AudioInput\IAudioInputPipelineComponentFactory.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services.AudioInput.Pipeline;
using Voxta.Abstractions.Services.WakeWord;
using Voxta.Model.Shared;

namespace Voxta.Core.Services.AudioInput;

public interface IAudioInputPipelineComponentFactory
{
	Task<IAudioInputPipelineMiddleware[]> CreateAudioInputPipelineComponentsAsync(IAuthenticationContext auth, AudioInputSpecifications specifications, IWakeWordAudioInputPipelineMiddleware? wakeWordAudioInputPipelineMiddleware, CancellationToken cancellationToken);
}

```

## Voxta.Core.Services.AudioInput\IAudioStreamingGlobalListener.cs
```csharp
using System;
using System.Threading;

namespace Voxta.Core.Services.AudioInput;

public interface IAudioStreamingGlobalListener
{
	IAudioStreamingListener Subscribe(Guid userId, Guid sessionId, CancellationToken cancellationToken);
}

```

## Voxta.Core.Services.AudioInput\IAudioStreamingListener.cs
```csharp
using System;
using Voxta.Abstractions.Services.AudioInput.Pipeline;

namespace Voxta.Core.Services.AudioInput;

public interface IAudioStreamingListener : IDisposable
{
	event EventHandler<AudioInputFrame>? DataAvailable;

	void Send(byte[] buffer, int resultCount);

	void Increment();
}

```

## Voxta.Core.Services.AudioInput\UserSession.cs
```csharp
using System;

namespace Voxta.Core.Services.AudioInput;

public record UserSession(Guid UserId, Guid SessionId);

```

## Voxta.Core.Services.AudioOutput.Tunneling\ConversionSpeechTunnel.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services.AudioConversion;
using Voxta.Abstractions.Services.AudioOutput;
using Voxta.Abstractions.Services.AudioOutput.Tunneling;

namespace Voxta.Core.Services.AudioOutput.Tunneling;

public class ConversionSpeechTunnel(IAuthenticationContext auth, IAudioConverter audioConverter, string targetContentType, ISpeechTunnel nextTunnel) : ISpeechTunnel
{
	public Task ErrorAsync(Exception exc, CancellationToken cancellationToken)
	{
		return nextTunnel.ErrorAsync(exc, cancellationToken);
	}

	public async Task SendAsync(AudioData audioData, CancellationToken cancellationToken)
	{
		if (audioData.ContentType == targetContentType)
		{
			await nextTunnel.SendAsync(audioData, cancellationToken);
			return;
		}
		if (audioData.Stream.Length == 0L || audioData.Stream.Position != 0L)
		{
			throw new InvalidOperationException($"The audio stream is empty ({audioData.Stream.Position} / {audioData.Stream.Length})");
		}
		try
		{
			AudioData converted = await audioConverter.ConvertAudioAsync(auth, audioData, targetContentType, cancellationToken);
			try
			{
				await nextTunnel.SendAsync(converted, cancellationToken);
			}
			finally
			{
				if (converted != audioData)
				{
					await audioData.DisposeAsync();
				}
			}
		}
		catch
		{
			await audioData.DisposeAsync();
			throw;
		}
	}

	public ValueTask<ISpeechTunnelResponse> StartAsync(string contentType, int? contentLength, CancellationToken cancellationToken)
	{
		if (targetContentType == contentType)
		{
			return nextTunnel.StartAsync(contentType, null, cancellationToken);
		}
		return ValueTask.FromResult((ISpeechTunnelResponse)new ConversionSpeechTunnelResponse(auth, contentType, nextTunnel, audioConverter, targetContentType));
	}
}

```

## Voxta.Core.Services.AudioOutput.Tunneling\ConversionSpeechTunnelResponse.cs
```csharp
using System;
using System.IO;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services.AudioConversion;
using Voxta.Abstractions.Services.AudioOutput;
using Voxta.Abstractions.Services.AudioOutput.Tunneling;

namespace Voxta.Core.Services.AudioOutput.Tunneling;

public class ConversionSpeechTunnelResponse(IAuthenticationContext auth, string contentType, ISpeechTunnel nextTunnel, IAudioConverter audioConverter, string targetContentType) : ISpeechTunnelResponse, IAsyncDisposable
{
	private readonly MemoryStream _ms = new MemoryStream();

	private bool _closed;

	public ValueTask SendAsync(ReadOnlyMemory<byte> chunk, CancellationToken cancellationToken)
	{
		if (_closed)
		{
			throw new InvalidOperationException("Cannot send data after the stream has been closed.");
		}
		_ms.Write(chunk.Span);
		return ValueTask.CompletedTask;
	}

	public Task ErrorAsync(Exception exc, CancellationToken cancellationToken)
	{
		return nextTunnel.ErrorAsync(exc, cancellationToken);
	}

	public async ValueTask CompleteAsync(CancellationToken cancellationToken)
	{
		if (!_closed)
		{
			_closed = true;
			_ms.Seek(0L, SeekOrigin.Begin);
			AudioData input = new AudioData(_ms, contentType);
			AudioData audioData = await audioConverter.ConvertAudioAsync(auth, input, targetContentType, cancellationToken);
			await nextTunnel.SendAsync(audioData, cancellationToken);
		}
	}

	public ValueTask DisposeAsync()
	{
		_closed = true;
		return ValueTask.CompletedTask;
	}
}

```

## Voxta.Core.Services.AudioOutput\AudioOutputPipeline.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Services.AudioOutput;
using Voxta.Abstractions.Services.AudioOutput.Pipeline;

namespace Voxta.Core.Services.AudioOutput;

public class AudioOutputPipeline(ILogger<AudioOutputPipeline> logger) : IAudioOutputPipeline, IAsyncDisposable
{
	private IAudioOutputService? _audioOutputService;

	public Task InitializeOutputPipelineAsync(IAudioOutputService audioOutputService, CancellationToken cancellationToken)
	{
		cancellationToken.ThrowIfCancellationRequested();
		_audioOutputService = audioOutputService;
		return Task.CompletedTask;
	}

	public IAudioOutputPipelineQueue GetPlaybackQueue()
	{
		if (_audioOutputService == null)
		{
			throw new InvalidOperationException("AudioOutputService is not initialized");
		}
		return new AudioOutputPipelineQueue(_audioOutputService, logger);
	}

	public ValueTask DisposeAsync()
	{
		return ValueTask.CompletedTask;
	}
}

```

## Voxta.Core.Services.AudioOutput\AudioOutputPipelineFactory.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Services.AudioOutput;
using Voxta.Abstractions.Services.AudioOutput.Pipeline;

namespace Voxta.Core.Services.AudioOutput;

public class AudioOutputPipelineFactory(ILoggerFactory loggerFactory) : IAudioOutputPipelineFactory
{
	public async Task<IAudioOutputPipeline> CreateAsync(IAudioOutputService audioOutputService, CancellationToken cancellationToken)
	{
		AudioOutputPipeline pipeline = new AudioOutputPipeline(loggerFactory.CreateLogger<AudioOutputPipeline>());
		try
		{
			await pipeline.InitializeOutputPipelineAsync(audioOutputService, cancellationToken);
		}
		catch
		{
			await pipeline.DisposeAsync();
			throw;
		}
		return pipeline;
	}
}

```

## Voxta.Core.Services.AudioOutput\AudioOutputPipelineQueue.cs
```csharp
using System;
using System.Collections.Concurrent;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Services.AudioOutput;
using Voxta.Abstractions.Services.AudioOutput.Pipeline;

namespace Voxta.Core.Services.AudioOutput;

public class AudioOutputPipelineQueue(IAudioOutputService audioOutputService, ILogger logger) : IAudioOutputPipelineQueue, IAsyncDisposable
{
	private readonly BlockingCollection<(AudioData audioData, Action<TimeSpan> OnStart)> _queue = new BlockingCollection<(AudioData, Action<TimeSpan>)>();

	private CancellationTokenSource? _cts;

	private Action? _complete;

	private Task _task = Task.CompletedTask;

	public void Initialize(CancellationToken cancellationToken)
	{
		_cts = CancellationTokenSource.CreateLinkedTokenSource(cancellationToken);
		_task = Task.Run(() => ProcessQueue(_cts.Token), _cts.Token);
	}

	public void PlayQueue(AudioData audioData, Action<TimeSpan> onStart)
	{
		_queue.Add((audioData, onStart));
	}

	public void Complete(Action complete)
	{
		if (_complete != null)
		{
			throw new InvalidOperationException("Multiple complete audio output pipeline calls are not allowed.");
		}
		_complete = complete;
		_queue.CompleteAdding();
	}

	public Task CancelAsync()
	{
		if (_cts == null)
		{
			return Task.CompletedTask;
		}
		return _cts.CancelAsync();
	}

	private async Task ProcessQueue(CancellationToken cancellationToken)
	{
		_ = 3;
		try
		{
			foreach (var (audioData, onStart) in _queue.GetConsumingEnumerable(cancellationToken))
			{
				try
				{
					await using IAudioClipPlayer clip = await audioOutputService.Load(audioData.Stream, audioData.ContentType, cancellationToken);
					onStart(clip.Duration);
					await clip.Play(cancellationToken);
				}
				finally
				{
					await audioData.DisposeAsync();
				}
			}
		}
		catch (OperationCanceledException)
		{
		}
		catch (Exception exception)
		{
			logger.LogError(exception, "Failed to play audio");
		}
		finally
		{
			_complete?.Invoke();
		}
	}

	public Task WaitAsync(CancellationToken cancellationToken)
	{
		cancellationToken.Register(delegate
		{
			_cts?.Cancel();
		});
		return _task;
	}

	public async ValueTask DisposeAsync()
	{
		_cts?.Dispose();
		_queue.CompleteAdding();
		await _task;
		foreach (var item in _queue.GetConsumingEnumerable())
		{
			await item.audioData.DisposeAsync();
		}
		_queue.Dispose();
	}
}

```

## Voxta.Core.Services.Memory\ChatMemoryExtractionHelper.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Diagnostics;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Prompting;
using Voxta.Abstractions.Repositories;
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Abstractions.Services.Memory;
using Voxta.Abstractions.Services.Summarization;
using Voxta.Abstractions.Services.TextGen;
using Voxta.Abstractions.Templating;
using Voxta.Core.Chats.Objects.Characters;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Core.Chats.Objects.Scenarios;
using Voxta.Core.Chats.ScopedServices;
using Voxta.Core.Chats.Sessions;
using Voxta.Core.DependencyInjection;
using Voxta.Model.Shared;

namespace Voxta.Core.Services.Memory;

public class ChatMemoryExtractionHelper(IUnitOfWorkFactory unitOfWorkFactory, ITemplateSystem templateSystem, ICharacterInstanceFactory characterInstanceFactory, IScenarioInstanceFactory scenarioInstanceFactory, IDiagnosticsContext diagnosticsContext, TimeProvider timeProvider, ILoggerFactory loggerFactory, ILogger<ChatMemoryExtractionHelper> logger) : IChatMemoryExtractionHelper
{
	private const int MaxChatsToMemorize = 3;

	public async Task ProcessPreviousChatMemoriesAsync(ISummarizationService? summarizationService, ITextGenService textGenService, ProfileSettings profile, Chat currentChat, CharacterInstance character, Character characterData, IPromptBuilder promptBuilder, CancellationToken cancellationToken)
	{
		if (!character.Enabled || !character.Memory.Enabled)
		{
			return;
		}
		if (summarizationService == null || !summarizationService.Enabled)
		{
			return;
		}
		await using IUnitOfWork uow = unitOfWorkFactory.CreateUnitOfWork();
		ChatItem[] source = await uow.Chats.GetItemsByCharacterAsync(profile.UserId, character.Id, cancellationToken);
		int chatsMemorizationLeft = 3;
		foreach (ChatItem c in source.OrderByDescending((ChatItem chatItem) => chatItem.CreatedAt))
		{
			if (c.Id == currentChat.LocalId)
			{
				continue;
			}
			Chat chat = await uow.Chats.GetByIdAsync(profile.UserId, c.Id, cancellationToken);
			if (chat == null)
			{
				logger.LogWarning("Chat {ChatId} not found for {Character} but it did exist when listing", c.Id, character.Name);
				continue;
			}
			ChatMessageData[] array = await uow.ChatMessages.GetLastMessagesAsync(chat.UserId, chat.LocalId, 1, cancellationToken);
			if (array.Length == 0)
			{
				continue;
			}
			chatsMemorizationLeft--;
			if (chatsMemorizationLeft <= 0)
			{
				break;
			}
			Guid localId = array[0].LocalId;
			Guid? lastMemorizedMessage = chat.LastMemorizedMessage;
			if (localId == lastMemorizedMessage)
			{
				continue;
			}
			Scenario scenario = ((!chat.ScenarioId.HasValue) ? null : (await uow.Scenarios.GetByIdAsync(chat.UserId, chat.ScenarioId.Value, cancellationToken)));
			Scenario scenario2 = scenario;
			ChatStyles chatStyles = ChatStylesSelector.Select(scenario2?.ChatStyle, character.ChatStyle);
			if ((uint)(chatStyles - 1) <= 1u)
			{
				continue;
			}
			logger.LogWarning("{Characer} memories will now be processed for past chat {ChatId}", character.Name, chat.LocalId);
			try
			{
				await ProcessChatAsync(uow, textGenService, chat, scenario2, profile, character, characterData, promptBuilder, summarizationService, cancellationToken);
			}
			catch (Exception exception)
			{
				logger.LogError(exception, "Failed to process chat {ChatId} memories for {Character}", chat.LocalId, character.Name);
			}
			break;
		}
	}

	private async Task ProcessChatAsync(IUnitOfWork uow, ITextGenService textGenService, Chat chat, Scenario? scenario, ProfileSettings profile, CharacterInstance character, Character characterData, IPromptBuilder promptBuilder, ISummarizationService summarization, CancellationToken cancellationToken)
	{
		diagnosticsContext.Augment((DiagnosticsContextValues x) => x with
		{
			ChatId = chat.LocalId
		});
		ChatMessageData[] messagesToMemorize = (await uow.ChatMessages.GetChatMessagesAsync(chat.UserId, chat.LocalId, includeSummarizedMessages: false, cancellationToken)).Where((ChatMessageData r) => r.IsConversation).ToArray();
		if (messagesToMemorize.Length == 0 || chat.LastMemorizedMessage == messagesToMemorize[^1].LocalId)
		{
			return;
		}
		Scenario scenario2 = ((!(scenario?.ParentId.HasValue ?? false)) ? null : (await uow.Scenarios.GetByIdAsync(chat.UserId, scenario.ParentId.Value, cancellationToken)));
		Scenario parentScenario = scenario2;
		ScenarioData scenarioFinal = ((scenario != null) ? ScenarioData.WithCharacter(scenario, characterData, scenario.IsMainRoleEnabledOnStart()) : ScenarioData.FromCharacter(characterData));
		List<CharacterInstance> characters = new List<CharacterInstance>(1) { character };
		List<Guid> list = chat.Characters.Where((Guid c) => c != character.Id).ToList();
		if (list.Count > 0)
		{
			ChatTextProcessor textProcessor = new ChatTextProcessor(profile.Name, character.Name);
			characters.AddRange(await Task.WhenAll((await uow.Characters.GetManyByIdAsync(chat.UserId, list, cancellationToken)).Select((Character c) => characterInstanceFactory.CreateAsync(chat.UserId, chat, c, Array.Empty<Guid>(), textProcessor, NullServiceReference<ITextGenService>.Instance, NullServiceReference<IMemoryProviderService>.Instance, ChatStyles.Undefined, NullActionScriptEngine.Instance, cancellationToken))));
		}
		ScenarioInstance scenarioInstance = scenarioInstanceFactory.Create(chat.UserId, parentScenario, scenarioFinal, chat, characters, NullActionScriptEngine.Instance);
		UserInstance user = new UserInstance
		{
			Id = profile.LocalId,
			Name = profile.Name,
			Description = templateSystem.Parse("User Description", profile.Description),
			Enabled = (scenarioInstance.ChatFlow == ChatFlowModes.Chat)
		};
		List<ExplicitContentLevels?> list2 = new List<ExplicitContentLevels?>();
		list2.Add(scenario?.ExplicitContent);
		list2.Add(parentScenario?.ExplicitContent);
		foreach (ExplicitContentLevels item in characters.Select((CharacterInstance c) => c.ExplicitContent))
		{
			list2.Add(item);
		}
		ExplicitContentLevels explicitContent = ExplicitContentLevelsUtils.Choose(list2.ToArray());
		await using ChatInstance detachedChatInstance = new ChatInstance(chat, ownCharacters: false)
		{
			UserId = chat.UserId,
			Characters = characters,
			Scenario = scenarioInstance,
			User = user,
			ExplicitContent = explicitContent
		};
		FixedDynamicServiceAccessor<ITextGenService> textGenAccessor = new FixedDynamicServiceAccessor<ITextGenService>(textGenService);
		FixedDynamicServiceAccessor<ISummarizationService> summarizationAccessor = new FixedDynamicServiceAccessor<ISummarizationService>(summarization);
		MemoryMaintenanceService memoryMaintenanceService = new MemoryMaintenanceService(detachedChatInstance, unitOfWorkFactory, textGenAccessor, summarizationAccessor, promptBuilder, timeProvider, loggerFactory.CreateLogger<MemoryMaintenanceService>());
		IReadOnlyList<MemoryExtractResult> readOnlyList = await summarization.ExtractMemoriesAsync(detachedChatInstance, character, promptBuilder, messagesToMemorize, cancellationToken);
		if (readOnlyList.Count != 0)
		{
			await memoryMaintenanceService.IntegrateMemoriesAsync(character, readOnlyList, messagesToMemorize[^1].LocalId, cancellationToken);
		}
	}
}

```

## Voxta.Core.Services.Memory\IChatMemoryExtractionHelper.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Prompting;
using Voxta.Abstractions.Services.Summarization;
using Voxta.Abstractions.Services.TextGen;
using Voxta.Core.Chats.Objects.Characters;

namespace Voxta.Core.Services.Memory;

public interface IChatMemoryExtractionHelper
{
	Task ProcessPreviousChatMemoriesAsync(ISummarizationService? chatServicesSummarization, ITextGenService chatServicesTextGen, ProfileSettings profile, Chat currentChat, CharacterInstance character, Character characterData, IPromptBuilder promptBuilder, CancellationToken cancellationToken);
}

```

## Voxta.Core.Services.Registration\ModuleDefinitionsRegistry.cs
```csharp
using System.Collections.Generic;
using Voxta.Abstractions.Registration;
using Voxta.Model.Shared;

namespace Voxta.Core.Services.Registration;

public class ModuleDefinitionsRegistry : IModuleDefinitionsRegistry
{
	private readonly Dictionary<string, ModuleDefinition> _services = new Dictionary<string, ModuleDefinition>();

	public void Add(ModuleDefinition moduleDefinition)
	{
		_services.Add(moduleDefinition.ServiceName, moduleDefinition);
	}

	public bool Exists(string serviceName)
	{
		return _services.ContainsKey(serviceName);
	}

	public ModuleDefinition Get(string serviceName)
	{
		if (!_services.TryGetValue(serviceName, out ModuleDefinition value))
		{
			return new ModuleDefinition
			{
				Missing = true,
				ServiceName = serviceName,
				Label = serviceName + " (Unknown)",
				Experimental = false,
				Supports = new Dictionary<ServiceTypes, ServiceDefinitionCategoryScore>(),
				Pricing = ServiceDefinitionPricing.Free,
				Hosting = ServiceDefinitionHosting.Builtin,
				SupportsExplicitContent = false,
				Recommended = false,
				Notes = "This service is not supported.",
				Pros = "",
				Cons = "",
				ModuleConfigurationProviderType = null
			};
		}
		return value;
	}

	public IEnumerable<ModuleDefinition> List()
	{
		return _services.Values;
	}
}

```

## Voxta.Core.Services.VisionCapture\ClientServiceInstanceSettings.cs
```csharp
using System;
using System.Collections.Generic;
using Voxta.Abstractions.Services;
using Voxta.Model.Shared;

namespace Voxta.Core.Services.VisionCapture;

public class ClientServiceInstanceSettings : IServiceInstanceSettings
{
	public Guid ModuleId => Guid.Empty;

	public string ServiceName => "Client";

	public ServiceTypes ServiceType => ServiceTypes.VisionCapture;

	public Dictionary<string, string> ModuleConfiguration { get; set; } = new Dictionary<string, string>();

	public Guid? ServiceSettingsId { get; set; }

	public Dictionary<string, string> ServiceSettings { get; set; } = new Dictionary<string, string>();

	public ServiceLink ToLink()
	{
		return new ServiceLink(ServiceName, ModuleId);
	}
}

```

## Voxta.Core.Services.VisionCapture\ClientVisionCaptureService.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Connections;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services;
using Voxta.Abstractions.Services.VisionCapture;
using Voxta.Model.Shared;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Core.Services.VisionCapture;

public class ClientVisionCaptureService(IUserConnectionTunnel tunnel, IRemoteVisionCaptureGlobalListener remoteVisionCaptureGlobalListener, Guid sessionId, Guid userId, ComputerVisionSource supportedSource, ILogger logger) : IVisionCaptureService, IService, IAsyncDisposable
{
	public ServiceTypes ServiceType => ServiceTypes.VisionCapture;

	public IServiceInstanceSettings InstanceSettings { get; } = new ClientServiceInstanceSettings();

	public ComputerVisionSource[] SupportedSources => new ComputerVisionSource[1] { supportedSource };

	public Task InitializeAsync(IAuthenticationContext auth, IServiceInstanceSettings settings, CancellationToken cancellationToken)
	{
		return Task.CompletedTask;
	}

	public async Task<IImage?> CaptureImageAsync(ComputerVisionSource source, CancellationToken cancellationToken)
	{
		if (source != supportedSource)
		{
			logger.LogWarning("Requested source {Source} is not supported by this service", source);
		}
		using IRemoteVisionCaptureListener listener = remoteVisionCaptureGlobalListener.Request(userId, sessionId);
		tunnel.Send(new ServerVisionCaptureRequestMessage
		{
			SessionId = sessionId,
			VisionCaptureRequestId = listener.RequestId,
			Source = source
		});
		IImage image = await listener.WaitForImageAsync(cancellationToken);
		if (image != null && image.Source != source)
		{
			logger.LogWarning("Received image with unexpected source {Source} instead of {ExpectedSource}", image.Source, source);
		}
		return image;
	}

	public ValueTask DisposeAsync()
	{
		return ValueTask.CompletedTask;
	}
}

```

## Voxta.Core.Services.VisionCapture\IRemoteVisionCaptureGlobalListener.cs
```csharp
using System;
using Voxta.Abstractions.Services.VisionCapture;

namespace Voxta.Core.Services.VisionCapture;

public interface IRemoteVisionCaptureGlobalListener
{
	IRemoteVisionCaptureListener Request(Guid userId, Guid sessionId);

	void Send(Guid userId, Guid sessionId, Guid visionCaptureRequestId, IImage image);

	void Delay(Guid userId, Guid sessionId, Guid visionCaptureRequestId, int milliseconds);

	void Cancel(Guid userId, Guid sessionId, Guid visionCaptureRequestId);
}

```

## Voxta.Core.Services.VisionCapture\IRemoteVisionCaptureListener.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Services.VisionCapture;

namespace Voxta.Core.Services.VisionCapture;

public interface IRemoteVisionCaptureListener : IDisposable
{
	Guid RequestId { get; }

	void Send(IImage image);

	void AddDelay(int milliseconds);

	void Cancel();

	Task<IImage?> WaitForImageAsync(CancellationToken cancellationToken);
}

```

## Voxta.Core.Services.VisionCapture\RemoteVisionCaptureGlobalListener.cs
```csharp
using System;
using System.Collections.Concurrent;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Services.VisionCapture;

namespace Voxta.Core.Services.VisionCapture;

public class RemoteVisionCaptureGlobalListener(ILogger<RemoteVisionCaptureGlobalListener> logger) : IRemoteVisionCaptureGlobalListener
{
	private readonly ConcurrentDictionary<VisionRequestIdentifier, IRemoteVisionCaptureListener> _requests = new ConcurrentDictionary<VisionRequestIdentifier, IRemoteVisionCaptureListener>();

	public IRemoteVisionCaptureListener Request(Guid userId, Guid sessionId)
	{
		VisionRequestIdentifier request = new VisionRequestIdentifier(userId, sessionId, Guid.NewGuid());
		RemoteVisionCaptureListener remoteVisionCaptureListener = new RemoteVisionCaptureListener(request.VisionRequestId, delegate
		{
			_requests.TryRemove(request, out IRemoteVisionCaptureListener _);
		});
		if (!_requests.TryAdd(request, remoteVisionCaptureListener))
		{
			throw new InvalidOperationException("Failed to add request to the dictionary.");
		}
		return remoteVisionCaptureListener;
	}

	public void Send(Guid userId, Guid sessionId, Guid visionCaptureRequestId, IImage image)
	{
		VisionRequestIdentifier key = new VisionRequestIdentifier(userId, sessionId, visionCaptureRequestId);
		if (!_requests.TryRemove(key, out IRemoteVisionCaptureListener value))
		{
			logger.LogWarning("Received image for vision capture request {VisionCaptureRequestId} but there was no such request, usually because it expired or was already processed", visionCaptureRequestId);
		}
		else
		{
			value.Send(image);
		}
	}

	public void Delay(Guid userId, Guid sessionId, Guid visionCaptureRequestId, int milliseconds)
	{
		VisionRequestIdentifier key = new VisionRequestIdentifier(userId, sessionId, visionCaptureRequestId);
		if (!_requests.TryGetValue(key, out IRemoteVisionCaptureListener value))
		{
			logger.LogWarning("Received delay for vision capture request {VisionCaptureRequestId} but there was no such request, usually because it expired or was already processed", visionCaptureRequestId);
		}
		else
		{
			value.AddDelay(milliseconds);
		}
	}

	public void Cancel(Guid userId, Guid sessionId, Guid visionCaptureRequestId)
	{
		VisionRequestIdentifier key = new VisionRequestIdentifier(userId, sessionId, visionCaptureRequestId);
		if (_requests.TryRemove(key, out IRemoteVisionCaptureListener value))
		{
			logger.LogWarning("Received client cancellation for vision capture request {VisionCaptureRequestId}", visionCaptureRequestId);
			value.Cancel();
		}
	}
}

```

## Voxta.Core.Services.VisionCapture\RemoteVisionCaptureListener.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Services.VisionCapture;

namespace Voxta.Core.Services.VisionCapture;

public class RemoteVisionCaptureListener(Guid requestVisionRequestId, Action onCancel) : IRemoteVisionCaptureListener, IDisposable
{
	private static readonly TimeSpan _timeout = TimeSpan.FromSeconds(30L);

	private readonly TaskCompletionSource<IImage?> _imageCompletionSource = new TaskCompletionSource<IImage>(TaskCreationOptions.RunContinuationsAsynchronously);

	private readonly Lock _lock = new Lock();

	private CancellationTokenSource? _currentDelayCts;

	public Guid RequestId => requestVisionRequestId;

	public void Send(IImage image)
	{
		_imageCompletionSource.TrySetResult(image);
	}

	public void AddDelay(int milliseconds)
	{
		using (_lock.EnterScope())
		{
			CancellationTokenSource currentDelayCts = _currentDelayCts;
			if (currentDelayCts != null && !currentDelayCts.IsCancellationRequested)
			{
				_currentDelayCts.Cancel();
			}
			_currentDelayCts = new CancellationTokenSource();
			Task.Delay(milliseconds, _currentDelayCts.Token);
		}
	}

	public void Cancel()
	{
		if (_imageCompletionSource.TrySetCanceled())
		{
			onCancel();
		}
	}

	public async Task<IImage?> WaitForImageAsync(CancellationToken cancellationToken)
	{
		using CancellationTokenSource linkedCts = CancellationTokenSource.CreateLinkedTokenSource(cancellationToken);
		linkedCts.CancelAfter(_timeout);
		try
		{
			Task delayTask;
			Task task;
			do
			{
				using (_lock.EnterScope())
				{
					if (_currentDelayCts == null || _currentDelayCts.IsCancellationRequested)
					{
						_currentDelayCts = new CancellationTokenSource();
					}
					delayTask = Task.Delay(-1, _currentDelayCts.Token);
				}
				global::_003C_003Ey__InlineArray3<Task> buffer = default(global::_003C_003Ey__InlineArray3<Task>);
				global::_003CPrivateImplementationDetails_003E.InlineArrayElementRef<global::_003C_003Ey__InlineArray3<Task>, Task>(ref buffer, 0) = _imageCompletionSource.Task;
				global::_003CPrivateImplementationDetails_003E.InlineArrayElementRef<global::_003C_003Ey__InlineArray3<Task>, Task>(ref buffer, 1) = delayTask;
				global::_003CPrivateImplementationDetails_003E.InlineArrayElementRef<global::_003C_003Ey__InlineArray3<Task>, Task>(ref buffer, 2) = Task.Delay(-1, linkedCts.Token);
				task = await Task.WhenAny(global::_003CPrivateImplementationDetails_003E.InlineArrayAsReadOnlySpan<global::_003C_003Ey__InlineArray3<Task>, Task>(in buffer, 3));
				if (task == _imageCompletionSource.Task)
				{
					return await _imageCompletionSource.Task;
				}
			}
			while (task == delayTask);
		}
		catch (OperationCanceledException)
		{
			onCancel();
			return null;
		}
		return null;
	}

	public void Dispose()
	{
		if (_imageCompletionSource.TrySetCanceled())
		{
			onCancel();
		}
	}
}

```

## Voxta.Core.Services.VisionCapture\VisionCaptureServiceFactory.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Configuration;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Registration;
using Voxta.Abstractions.Repositories;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services;
using Voxta.Abstractions.Services.VisionCapture;
using Voxta.Common;
using Voxta.Model.Shared;

namespace Voxta.Core.Services.VisionCapture;

public class VisionCaptureServiceFactory(IServiceFactory<IVisionCaptureService> visionCaptureServiceFactory, IUnitOfWorkFactory unitOfWorkFactory, IModuleDefinitionsRegistry moduleDefinitionsRegistry, ILogger<VisionCaptureServiceFactory> logger) : IVisionCaptureServiceFactory
{
	public async Task<IVisionCaptureServicesContainer> CreateVisionCaptureServicesAsync(IAuthenticationContext auth, List<ComputerVisionSource> sources, CancellationToken cancellationToken)
	{
		Dictionary<ComputerVisionSource, IVisionCaptureService> services = new Dictionary<ComputerVisionSource, IVisionCaptureService>();
		if (sources.Count == 0)
		{
			return new VisionCaptureServicesContainer(services);
		}
		Guid[] array = await GetVisionServiceIdsAsync(auth.UserId, new ComputerVisionSource[2]
		{
			ComputerVisionSource.Eyes,
			ComputerVisionSource.Screen
		}, cancellationToken);
		if (array.Length == 0)
		{
			return new VisionCaptureServicesContainer(services);
		}
		List<ComputerVisionSource> expectedSources = sources.ToList();
		logger.LogDebug("Creating {Type} service...", ServiceTypes.ComputerVision);
		IVisionCaptureServicesContainer result;
		await using (IUnitOfWork uow = unitOfWorkFactory.CreateUnitOfWork())
		{
			Module[] array2 = await uow.Modules.GetManyByIdAsync(auth.UserId, array, cancellationToken);
			for (int i = 0; i < array2.Length; i++)
			{
				ServiceConfiguration config = ServiceConfiguration.CreateFromModule(array2[i], ServiceTypes.VisionCapture);
				int j;
				await using (ServiceWithSettings<IVisionCaptureService> uninitialized = visionCaptureServiceFactory.CreateUninitializedAsync(config))
				{
					await using (IVisionCaptureService service = uninitialized.Acquire())
					{
						List<ComputerVisionSource> list = expectedSources.Intersect(service.SupportedSources).ToList();
						if (list.Count == 0)
						{
							continue;
						}
						expectedSources.RemoveAll(list.Remove);
						await service.InitializeAsync(auth, uninitialized.Settings, cancellationToken);
						logger.LogDebug("Created Vision Capture service ({Name}) for sources {Sources}", service.InstanceSettings.ServiceName, string.Join(", ", service.SupportedSources));
						ComputerVisionSource[] supportedSources = service.SupportedSources;
						foreach (ComputerVisionSource computerVisionSource in supportedSources)
						{
							if (services.TryAdd(computerVisionSource, service))
							{
								expectedSources.Remove(computerVisionSource);
							}
						}
						if (expectedSources.Count == 0)
						{
						}
						goto IL_045f;
					}
					IL_045f:
					if (j == 2)
					{
					}
					goto IL_052a;
				}
				IL_052a:
				if (j == 2)
				{
					break;
				}
			}
			result = new VisionCaptureServicesContainer(services);
		}
		return result;
	}

	private async Task<Guid[]> GetVisionServiceIdsAsync(Guid userId, ComputerVisionSource[] sources, CancellationToken cancellationToken)
	{
		return (from x in (await unitOfWorkFactory.ReadAsync((IUnitOfWork x) => x.Modules.GetManyByUserAsync(userId, cancellationToken))).Where((Module x) => x.Enabled).Where(delegate(Module x)
			{
				ModuleDefinition moduleDefinition = moduleDefinitionsRegistry.Get(x.ServiceName);
				return moduleDefinition.SupportsServiceType(ServiceTypes.VisionCapture) && (moduleDefinition.SupportedVisionSources ?? Array.Empty<ComputerVisionSource>()).ContainsAny(sources);
			})
			select x.LocalId).ToArray();
	}
}

```

## Voxta.Core.Services.VisionCapture\VisionCaptureServicesContainer.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Voxta.Abstractions.Services.VisionCapture;
using Voxta.Model.Shared;

namespace Voxta.Core.Services.VisionCapture;

public class VisionCaptureServicesContainer(Dictionary<ComputerVisionSource, IVisionCaptureService> services) : IVisionCaptureServicesContainer, IAsyncDisposable
{
	public int Count => services.Count;

	public IVisionCaptureService GetBySource(ComputerVisionSource source)
	{
		if (services.Remove(source, out IVisionCaptureService value))
		{
			return value;
		}
		throw new KeyNotFoundException($"Vision capture service for {source} not found");
	}

	public IEnumerable<KeyValuePair<ComputerVisionSource, IVisionCaptureService>> All()
	{
		KeyValuePair<ComputerVisionSource, IVisionCaptureService>[] result = services.ToArray();
		services.Clear();
		return result;
	}

	public async ValueTask DisposeAsync()
	{
		IVisionCaptureService[] array = services.Values.ToArray();
		services.Clear();
		IVisionCaptureService[] array2 = array;
		for (int i = 0; i < array2.Length; i++)
		{
			await array2[i].DisposeAsync();
		}
	}
}

```

## Voxta.Core.Services.VisionCapture\VisionRequestIdentifier.cs
```csharp
using System;

namespace Voxta.Core.Services.VisionCapture;

public record VisionRequestIdentifier(Guid UserId, Guid SessionId, Guid VisionRequestId);

```

## Voxta.Core.Services\NoCompatibleServiceException.cs
```csharp
using System;

namespace Voxta.Core.Services;

public class NoCompatibleServiceException : Exception
{
	public NoCompatibleServiceException(string message)
		: base(message)
	{
	}
}

```

## Voxta.Core.Services\ServiceFactory.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Voxta.Abstractions.Configuration;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Registration;
using Voxta.Abstractions.Repositories;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services;
using Voxta.Model.Shared;

namespace Voxta.Core.Services;

public class ServiceFactory(IServiceProvider sp) : IServiceFactory
{
	public Task<T> CreateAsync<T>(IAuthenticationContext auth, ServiceConfiguration config, CancellationToken cancellationToken) where T : class, IService
	{
		return sp.GetRequiredService<IServiceFactory<T>>().CreateAsync(auth, config, cancellationToken);
	}
}
public class ServiceFactory<TInterface>(IServiceRegistry<TInterface> registry, IServiceProvider sp) : IServiceFactory<TInterface> where TInterface : class, IService
{
	public ServiceWithSettings<TInterface> CreateUninitializedAsync(ServiceConfiguration config)
	{
		if (config.Module == null)
		{
			throw new ArgumentException("Service configuration module cannot be null.", "config");
		}
		if (!_003Cregistry_003EP.Types.TryGetValue(config.Module.ServiceName, out Type value))
		{
			throw new NoCompatibleServiceException($"Service {typeof(TInterface).Name} was not registered by module {config.Module.ServiceName}.");
		}
		ServiceInstanceSettings settings = new ServiceInstanceSettings(config);
		return new ServiceWithSettings<TInterface>((TInterface)_003Csp_003EP.GetRequiredService(value), settings);
	}

	public async Task<TInterface> CreateAsync(IAuthenticationContext auth, ServiceConfiguration config, CancellationToken cancellationToken)
	{
		TInterface result;
		await using (ServiceWithSettings<TInterface> uninitialized = CreateUninitializedAsync(config))
		{
			ServiceInstanceSettings settings = uninitialized.Settings;
			TInterface instance = uninitialized.Acquire();
			try
			{
				await instance.InitializeAsync(auth, settings, cancellationToken);
			}
			catch
			{
				await instance.DisposeAsync();
				throw;
			}
			result = instance;
		}
		return result;
	}

	public async Task<(TProvider? Provider, Dictionary<string, string> Settings)> CreateServiceProvider<TProvider>(IAuthenticationContext auth, Guid moduleId, Func<ModuleDefinition, Type?> select, CancellationToken cancellationToken) where TProvider : class
	{
		IModuleDefinitionsRegistry servicesDefinitions = _003Csp_003EP.GetRequiredService<IModuleDefinitionsRegistry>();
		(TProvider?, Dictionary<string, string> Configuration) result;
		await using (IUnitOfWork uow = _003Csp_003EP.GetRequiredService<IUnitOfWorkFactory>().CreateUnitOfWork())
		{
			Module module = (await uow.Modules.GetByIdAsync(auth.UserId, moduleId, cancellationToken)) ?? throw new NullReferenceException($"Service {moduleId} not found.");
			if (!module.Enabled)
			{
				result = (null, Configuration: module.Configuration);
			}
			else
			{
				ModuleDefinition arg = servicesDefinitions.Get(module.ServiceName);
				Type type = select(arg);
				if (type == null)
				{
					result = (null, Configuration: module.Configuration);
				}
				else
				{
					if (!(_003Csp_003EP.GetRequiredService(type) is TProvider item))
					{
						throw new InvalidOperationException($"Service {moduleId} provider {type.Name} is not compatible with {typeof(TInterface).Name}.");
					}
					result = (item, Configuration: module.Configuration);
				}
			}
		}
		return result;
	}

	public async Task<TInterface[]> CreateAllAsync(IAuthenticationContext auth, CancellationToken cancellationToken)
	{
		IModuleDefinitionsRegistry requiredService = _003Csp_003EP.GetRequiredService<IModuleDefinitionsRegistry>();
		ServiceTypes serviceType = ServiceTypesHelper.FromType<TInterface>();
		if (serviceType.HasServiceSettings())
		{
			throw new InvalidOperationException("Cannot create all services of type with service settings.");
		}
		TInterface[] result;
		await using (IUnitOfWork uow = _003Csp_003EP.GetRequiredService<IUnitOfWorkFactory>().CreateUnitOfWork())
		{
			IEnumerable<ModuleDefinition> enumerable = from s in requiredService.List()
				where s.Supports.ContainsKey(serviceType)
				select s;
			List<TInterface> instances = new List<TInterface>();
			foreach (ModuleDefinition item in enumerable)
			{
				string serviceName = item.ServiceName;
				Module[] array = await uow.Modules.GetManyByServiceNameAsync(auth.UserId, serviceName, cancellationToken);
				foreach (Module module in array)
				{
					if (!module.Enabled || instances.Any((TInterface s) => s.InstanceSettings.ModuleId == module.LocalId))
					{
						continue;
					}
					ServiceInstanceSettings serviceInstanceSettings = new ServiceInstanceSettings(ServiceConfiguration.CreateFromModule(module, serviceType));
					if (!_003Cregistry_003EP.Types.TryGetValue(((IServiceInstanceSettings)serviceInstanceSettings).ServiceName, out Type value))
					{
						throw new NoCompatibleServiceException("Service " + ((IServiceInstanceSettings)serviceInstanceSettings).ServiceName + " is not registered.");
					}
					TInterface val = (TInterface)_003Csp_003EP.GetRequiredService(value);
					instances.Add(val);
					try
					{
						await val.InitializeAsync(auth, serviceInstanceSettings, cancellationToken);
					}
					catch
					{
						foreach (TInterface item2 in instances)
						{
							await item2.DisposeAsync();
						}
						throw;
					}
				}
			}
			result = instances.ToArray();
		}
		return result;
	}
}

```

## Voxta.Core.Services\ServiceTypesHelper.cs
```csharp
using System;
using Voxta.Abstractions.Services;
using Voxta.Abstractions.Services.ActionInference;
using Voxta.Abstractions.Services.AudioInput;
using Voxta.Abstractions.Services.AudioOutput;
using Voxta.Abstractions.Services.ChatAugmentations;
using Voxta.Abstractions.Services.ComputerVision;
using Voxta.Abstractions.Services.ImageGen;
using Voxta.Abstractions.Services.Memory;
using Voxta.Abstractions.Services.SpeechToText;
using Voxta.Abstractions.Services.Summarization;
using Voxta.Abstractions.Services.TextGen;
using Voxta.Abstractions.Services.TextToSpeech;
using Voxta.Abstractions.Services.VisionCapture;
using Voxta.Abstractions.Services.WakeWord;
using Voxta.Model.Shared;

namespace Voxta.Core.Services;

public static class ServiceTypesHelper
{
	public static ServiceTypes FromType<T>() where T : IService
	{
		Type typeFromHandle = typeof(T);
		if (typeFromHandle.IsAssignableTo(typeof(ITextGenService)))
		{
			return ServiceTypes.TextGen;
		}
		if (typeFromHandle.IsAssignableTo(typeof(IActionInferenceService)))
		{
			return ServiceTypes.ActionInference;
		}
		if (typeFromHandle.IsAssignableTo(typeof(ISummarizationService)))
		{
			return ServiceTypes.Summarization;
		}
		if (typeFromHandle.IsAssignableTo(typeof(ITextToSpeechService)))
		{
			return ServiceTypes.TextToSpeech;
		}
		if (typeFromHandle.IsAssignableTo(typeof(ISpeechToTextService)))
		{
			return ServiceTypes.SpeechToText;
		}
		if (typeFromHandle.IsAssignableTo(typeof(IAudioInputService)))
		{
			return ServiceTypes.AudioInput;
		}
		if (typeFromHandle.IsAssignableTo(typeof(IAudioOutputService)))
		{
			return ServiceTypes.AudioOutput;
		}
		if (typeFromHandle.IsAssignableTo(typeof(IAudioInputPipelineService)))
		{
			return ServiceTypes.AudioPipeline;
		}
		if (typeFromHandle.IsAssignableTo(typeof(IWakeWordService)))
		{
			return ServiceTypes.WakeWord;
		}
		if (typeFromHandle.IsAssignableTo(typeof(IVisionCaptureService)))
		{
			return ServiceTypes.VisionCapture;
		}
		if (typeFromHandle.IsAssignableTo(typeof(IComputerVisionService)))
		{
			return ServiceTypes.ComputerVision;
		}
		if (typeFromHandle.IsAssignableTo(typeof(IChatAugmentationsService)))
		{
			return ServiceTypes.ChatAugmentations;
		}
		if (typeFromHandle.IsAssignableTo(typeof(IMemoryProviderService)))
		{
			return ServiceTypes.Memory;
		}
		if (typeFromHandle.IsAssignableTo(typeof(IImageGenService)))
		{
			return ServiceTypes.ImageGen;
		}
		throw new InvalidOperationException($"Service {typeFromHandle} is not supported.");
	}
}

```

## Voxta.Core.Speech.AudioOutputService\AudioOutputServiceSpeechGenerator.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Cache;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services.AudioConversion;
using Voxta.Abstractions.Services.AudioOutput.Pipeline;
using Voxta.Abstractions.Services.TextToSpeech;
using Voxta.Core.Services.AudioOutput.Tunneling;
using Voxta.Core.Speech.LocalFile;
using Voxta.Model.Shared;

namespace Voxta.Core.Speech.AudioOutputService;

public class AudioOutputServiceSpeechGenerator(IAuthenticationContext auth, IAudioOutputPipeline audioOutputPipeline, ITextToSpeechService ttsService, IAudioConverter audioConverter, IChatSessionPlaybackHandler chatSession, IPersistentCache persistentCache) : ISpeechGenerator
{
	public bool Enabled => true;

	public bool IsServerSide => true;

	public ServiceLink Link => ttsService.InstanceSettings.ToLink();

	public ValueTask<TextToSpeechAudioSettings> GetAudioSettings(VoiceInfo? voice, CancellationToken cancellationToken)
	{
		return ttsService.GetAudioSettings(voice, cancellationToken);
	}

	public Task WarmupAsync(Guid userId, VoiceInfo? voice, Guid characterId, string culture, CancellationToken cancellationToken)
	{
		return ttsService.WarmupAsync(voice, userId, characterId, culture, cancellationToken);
	}

	public ISpeechGeneratorPlaybackQueue CreateSpeechQueue(ChatMessageSpeechToken token, IPersistentCacheEntry? thinkingSpeechEntry)
	{
		return new AudioOutputServiceSpeechGeneratorPlaybackQueue(chatSession, audioOutputPipeline.GetPlaybackQueue(), token, thinkingSpeechEntry);
	}

	public Task<string?> GenerateAudioUrlAsync(SpeechRequest speechRequest, string? reusableSpeechId, CancellationToken cancellationToken)
	{
		return Task.FromResult<string>(null);
	}

	public async Task<bool> ServerPlaybackAsync(SpeechRequest speechRequest, string? reusableSpeechId, ISpeechGeneratorPlaybackQueue playbackQueue, ChatMessageSpeechChunkToken token, CancellationToken cancellationToken)
	{
		ConversionSpeechTunnel speechTunnel = new ConversionSpeechTunnel(auth, audioConverter, "audio/x-wav", new AudioOutputServiceSpeechTunnel(playbackQueue, token));
		try
		{
			if (reusableSpeechId == null)
			{
				await ttsService.GenerateSpeechAsync(speechRequest, speechTunnel, cancellationToken);
			}
			else
			{
				IPersistentCacheEntry cache = persistentCache.Get(reusableSpeechId, "audio/x-wav");
				if (!cache.Exists())
				{
					ConversionSpeechTunnel tunnel = new ConversionSpeechTunnel(auth, audioConverter, "audio/x-wav", new FileSpeechTunnel(cache.GetPath()));
					await ttsService.GenerateSpeechAsync(speechRequest, tunnel, cancellationToken);
				}
				await cache.UpdateAsync(cancellationToken);
				await speechTunnel.SendAsync(cache.GetAsAudioData(), cancellationToken);
			}
			return true;
		}
		catch (OperationCanceledException)
		{
			return false;
		}
	}

	public string[]? ConvertToUrl(IPersistentCacheEntry[] items)
	{
		return null;
	}
}

```

## Voxta.Core.Speech.AudioOutputService\AudioOutputServiceSpeechGeneratorPlaybackQueue.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Cache;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Services.AudioOutput;
using Voxta.Abstractions.Services.AudioOutput.Pipeline;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Speech.AudioOutputService;

public class AudioOutputServiceSpeechGeneratorPlaybackQueue(IChatSessionPlaybackHandler chatSession, IAudioOutputPipelineQueue queue, ChatMessageSpeechToken token, IPersistentCacheEntry? thinkingSpeech) : ISpeechGeneratorPlaybackQueue, IAsyncDisposable
{
	private CancellationToken _abort;

	public void Initialize(CancellationToken cancellationToken)
	{
		_abort = cancellationToken;
		queue.Initialize(_abort);
		if (thinkingSpeech != null)
		{
			queue.PlayQueue(thinkingSpeech.GetAsAudioData(), delegate
			{
			});
		}
	}

	public void PlayQueue(AudioData audioData, ChatMessageSpeechChunkToken chunkToken)
	{
		queue.PlayQueue(audioData, delegate(TimeSpan duration)
		{
			chatSession.DoSpeechPlaybackStart(new ClientSpeechPlaybackStartMessage
			{
				MessageId = chunkToken.MessageId,
				SessionId = chunkToken.SessionId,
				StartIndex = chunkToken.StartIndex,
				EndIndex = chunkToken.EndIndex,
				Duration = duration.Milliseconds,
				IsNarration = chunkToken.IsNarration
			});
		});
	}

	public void Complete()
	{
		queue.Complete(delegate
		{
			chatSession.DoSpeechPlaybackCompleteAsync(new ClientSpeechPlaybackCompleteMessage
			{
				SessionId = token.SessionId,
				MessageId = token.MessageId
			});
		});
	}

	public Task CancelAsync()
	{
		return queue.CancelAsync();
	}

	public ValueTask DisposeAsync()
	{
		return queue.DisposeAsync();
	}
}

```

## Voxta.Core.Speech.AudioOutputService\AudioOutputServiceSpeechTunnel.cs
```csharp
using System;
using System.Runtime.ExceptionServices;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Services.AudioOutput;
using Voxta.Abstractions.Services.AudioOutput.Tunneling;

namespace Voxta.Core.Speech.AudioOutputService;

public class AudioOutputServiceSpeechTunnel(ISpeechGeneratorPlaybackQueue playbackQueue, ChatMessageSpeechChunkToken token) : ISpeechTunnel
{
	public Task ErrorAsync(Exception exc, CancellationToken cancellationToken)
	{
		ExceptionDispatchInfo.Capture(exc).Throw();
		throw exc;
	}

	public Task SendAsync(AudioData audioData, CancellationToken cancellationToken)
	{
		playbackQueue.PlayQueue(audioData, token);
		return Task.CompletedTask;
	}

	public ValueTask<ISpeechTunnelResponse> StartAsync(string contentType, int? contentLength, CancellationToken cancellationToken)
	{
		return ValueTask.FromResult((ISpeechTunnelResponse)new AudioOutputServiceSpeechTunnelResponse(playbackQueue, token, contentType));
	}
}

```

## Voxta.Core.Speech.AudioOutputService\AudioOutputServiceSpeechTunnelResponse.cs
```csharp
using System;
using System.IO.Pipelines;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Services.AudioOutput;
using Voxta.Abstractions.Services.AudioOutput.Tunneling;

namespace Voxta.Core.Speech.AudioOutputService;

public class AudioOutputServiceSpeechTunnelResponse(ISpeechGeneratorPlaybackQueue playbackQueue, ChatMessageSpeechChunkToken token, string contentType) : ISpeechTunnelResponse, IAsyncDisposable
{
	private readonly Pipe _pipe = new Pipe();

	private bool _started;

	private bool _complete;

	public async ValueTask SendAsync(ReadOnlyMemory<byte> chunk, CancellationToken cancellationToken)
	{
		if (!_started)
		{
			_started = true;
			playbackQueue.PlayQueue(new AudioData(_pipe.Reader.AsStream(), contentType), token);
		}
		await _pipe.Writer.WriteAsync(chunk, cancellationToken);
	}

	public Task ErrorAsync(Exception exc, CancellationToken cancellationToken)
	{
		throw new InvalidOperationException("Speech error", exc);
	}

	public async ValueTask CompleteAsync(CancellationToken cancellationToken)
	{
		_complete = true;
		await _pipe.Writer.CompleteAsync();
	}

	public async ValueTask DisposeAsync()
	{
		if (_started && !_complete)
		{
			await _pipe.Writer.CompleteAsync();
		}
	}
}

```

## Voxta.Core.Speech.Cache\CacheFolder.cs
```csharp
using System.IO;
using Voxta.Abstractions.Utils;

namespace Voxta.Core.Speech.Cache;

public class CacheFolder(ICommonFolders folders) : ICacheFolder
{
	public string Folder => Path.GetFullPath(Path.Combine(folders.Data, "Cache"));
}

```

## Voxta.Core.Speech.Cache\FileSystemCacheEntry.cs
```csharp
using System;
using System.IO;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Cache;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Repositories;
using Voxta.Abstractions.Services.AudioOutput;

namespace Voxta.Core.Speech.Cache;

public class FileSystemCacheEntry(IUnitOfWorkFactory unitOfWorkFactory, ICacheFolder cacheFolder, TimeProvider timeProvider, string file, string contentType) : IPersistentCacheEntry
{
	public string GetPath()
	{
		return file;
	}

	public bool Exists()
	{
		return File.Exists(file);
	}

	public AudioData GetAsAudioData()
	{
		return new AudioData(File.OpenRead(file), contentType);
	}

	public Task UpdateAsync(CancellationToken cancellationToken)
	{
		if (!file.StartsWith(cacheFolder.Folder))
		{
			throw new InvalidOperationException("Cannot write to a path outside the cache folder");
		}
		string text = file;
		int num = cacheFolder.Folder.Length + 1;
		string relativePath = text.Substring(num, text.Length - num);
		return unitOfWorkFactory.ApplyAndSaveChangesAsync((IUnitOfWork x) => x.Cache.SaveEntryAsync(new CacheEntry
		{
			Path = relativePath,
			LastUsed = timeProvider.GetUtcNow()
		}, cancellationToken), cancellationToken);
	}
}

```

## Voxta.Core.Speech.Cache\FileSystemPersistentCache.cs
```csharp
using System;
using System.CodeDom.Compiler;
using System.IO;
using System.Text.RegularExpressions;
using System.Text.RegularExpressions.Generated;
using Voxta.Abstractions.Cache;
using Voxta.Abstractions.Repositories;
using Voxta.Abstractions.Services.AudioOutput;

namespace Voxta.Core.Speech.Cache;

public class FileSystemPersistentCache(IUnitOfWorkFactory unitOfWorkFactory, ICacheFolder cacheFolder, TimeProvider timeProvider) : IPersistentCache
{
	public string Folder => Path.GetFullPath(Path.Combine(cacheFolder.Folder, "Speech"));

	[GeneratedRegex("^[a-z0-9_-]+$", RegexOptions.IgnoreCase | RegexOptions.CultureInvariant)]
	[GeneratedCode("System.Text.RegularExpressions.Generator", "9.0.12.41916")]
	private static Regex ValidSpeechIdRegex()
	{
		return _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__ValidSpeechIdRegex_3.Instance;
	}

	public IPersistentCacheEntry Get(string speechId, string contentType)
	{
		if (!ValidSpeechIdRegex().IsMatch(speechId))
		{
			throw new ArgumentException("Invalid speechId: '" + speechId + "'", "speechId");
		}
		string extension = AudioData.GetExtension(contentType);
		return new FileSystemCacheEntry(unitOfWorkFactory, cacheFolder, timeProvider, Path.Combine(Folder, speechId + extension), contentType);
	}
}

```

## Voxta.Core.Speech.Cache\ICacheFolder.cs
```csharp
namespace Voxta.Core.Speech.Cache;

public interface ICacheFolder
{
	string Folder { get; }
}

```

## Voxta.Core.Speech.DeferredUrl\DeferredUrlSpeechGenerator.cs
```csharp
using System;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Cache;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Services.TextToSpeech;
using Voxta.Common;
using Voxta.Model.Shared;

namespace Voxta.Core.Speech.DeferredUrl;

public class DeferredUrlSpeechGenerator(ITextToSpeechService ttsService, IPendingSpeechManager pendingSpeech, string[] acceptedContentTypes) : ISpeechGenerator
{
	private readonly bool _acceptsPcm = acceptedContentTypes.Contains("audio/pcm");

	public bool Enabled => true;

	public bool IsServerSide => false;

	public ServiceLink Link => ttsService.InstanceSettings.ToLink();

	public ValueTask<TextToSpeechAudioSettings> GetAudioSettings(VoiceInfo? voice, CancellationToken cancellationToken)
	{
		return ttsService.GetAudioSettings(voice, cancellationToken);
	}

	public Task WarmupAsync(Guid userId, VoiceInfo? voice, Guid characterId, string culture, CancellationToken cancellationToken)
	{
		return ttsService.WarmupAsync(voice, userId, characterId, culture, cancellationToken);
	}

	public ISpeechGeneratorPlaybackQueue CreateSpeechQueue(ChatMessageSpeechToken chatMessageSpeechToken, IPersistentCacheEntry? thinkingSpeechEntry)
	{
		return new ClientSideSpeechGeneratorPlaybackQueue();
	}

	public Task<string?> GenerateAudioUrlAsync(SpeechRequest speechRequest, string? reusableSpeechId, CancellationToken cancellationToken)
	{
		string text = Crypto.CreateCryptographicallySecureGuid().ToString();
		pendingSpeech.Push(text, new PendingSpeechItem
		{
			ServiceRef = new WeakReference<ITextToSpeechService>(ttsService),
			Request = speechRequest,
			AcceptedContentTypes = acceptedContentTypes,
			SpeechId = reusableSpeechId
		});
		string text2 = "/api/tts/gens/" + text;
		if (_acceptsPcm)
		{
			PcmStreamingConfig pcmStreaming = ttsService.PcmStreaming;
			if (pcmStreaming != null)
			{
				text2 += $"?pcm=true&sr={pcmStreaming.SampleRate}&chan={pcmStreaming.Channels}";
			}
		}
		return Task.FromResult(text2);
	}

	public Task<bool> ServerPlaybackAsync(SpeechRequest speechRequest, string? reusableSpeechId, ISpeechGeneratorPlaybackQueue playbackQueue, ChatMessageSpeechChunkToken token, CancellationToken cancellationToken)
	{
		return Task.FromResult(result: false);
	}

	public string[] ConvertToUrl(IPersistentCacheEntry[] items)
	{
		string token = pendingSpeech.GetUserSessionToken();
		return items.Select((IPersistentCacheEntry item) => "/api/tts/cached/" + Path.GetFileName(item.GetPath()) + "?token=" + token).ToArray();
	}
}

```

## Voxta.Core.Speech.LocalFile\FileSpeechGenerator.cs
```csharp
using System;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Cache;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services.AudioConversion;
using Voxta.Abstractions.Services.AudioOutput;
using Voxta.Abstractions.Services.TextToSpeech;
using Voxta.Core.Services.AudioOutput.Tunneling;
using Voxta.Model.Shared;

namespace Voxta.Core.Speech.LocalFile;

public class FileSpeechGenerator(IAuthenticationContext auth, ITextToSpeechService ttsService, ITemporaryFileCleanup temporaryFileCleanup, IPersistentCache persistentCache, string audioPath, string contentType, IAudioConverter audioConverter) : ISpeechGenerator
{
	public bool Enabled => true;

	public bool IsServerSide => false;

	public ServiceLink Link => ttsService.InstanceSettings.ToLink();

	public ValueTask<TextToSpeechAudioSettings> GetAudioSettings(VoiceInfo? voice, CancellationToken cancellationToken)
	{
		return ttsService.GetAudioSettings(voice, cancellationToken);
	}

	public Task WarmupAsync(Guid userId, VoiceInfo? voice, Guid characterId, string culture, CancellationToken cancellationToken)
	{
		return ttsService.WarmupAsync(voice, userId, characterId, culture, cancellationToken);
	}

	public ISpeechGeneratorPlaybackQueue CreateSpeechQueue(ChatMessageSpeechToken chatMessageSpeechToken, IPersistentCacheEntry? thinkingSpeechEntry)
	{
		return new ClientSideSpeechGeneratorPlaybackQueue();
	}

	public async Task<string?> GenerateAudioUrlAsync(SpeechRequest speechRequest, string? reusableSpeechId, CancellationToken cancellationToken)
	{
		string localPath = Path.Combine(audioPath, "voxta_" + (reusableSpeechId ?? Guid.NewGuid().ToString()) + AudioData.GetExtension(contentType));
		if (File.Exists(localPath))
		{
			return localPath;
		}
		ConversionSpeechTunnel speechTunnel = new ConversionSpeechTunnel(auth, audioConverter, contentType, new FileSpeechTunnel(localPath));
		if (reusableSpeechId == null)
		{
			temporaryFileCleanup.MarkForDeletion(localPath);
		}
		try
		{
			if (reusableSpeechId == null)
			{
				await ttsService.GenerateSpeechAsync(speechRequest, speechTunnel, cancellationToken);
			}
			else
			{
				IPersistentCacheEntry cache = persistentCache.Get(reusableSpeechId, contentType);
				if (!cache.Exists())
				{
					ConversionSpeechTunnel tunnel = new ConversionSpeechTunnel(auth, audioConverter, contentType, new FileSpeechTunnel(cache.GetPath()));
					await ttsService.GenerateSpeechAsync(speechRequest, tunnel, cancellationToken);
				}
				await cache.UpdateAsync(cancellationToken);
				await speechTunnel.SendAsync(cache.GetAsAudioData(), cancellationToken);
			}
		}
		catch (OperationCanceledException)
		{
			return null;
		}
		return localPath;
	}

	public Task<bool> ServerPlaybackAsync(SpeechRequest speechRequest, string? reusableSpeechId, ISpeechGeneratorPlaybackQueue playbackQueue, ChatMessageSpeechChunkToken token, CancellationToken cancellationToken)
	{
		return Task.FromResult(result: true);
	}

	public string[] ConvertToUrl(IPersistentCacheEntry[] items)
	{
		return items.Select(ConvertToUrl).ToArray();
	}

	private string ConvertToUrl(IPersistentCacheEntry cache)
	{
		string path = cache.GetPath();
		string fileName = Path.GetFileName(path);
		string text = Path.Combine(audioPath, "voxta_" + fileName);
		if (File.Exists(text))
		{
			return text;
		}
		File.Copy(path, text);
		return text;
	}
}

```

## Voxta.Core.Speech.LocalFile\FileSpeechTunnel.cs
```csharp
using System;
using System.IO;
using System.Runtime.ExceptionServices;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Services.AudioOutput;
using Voxta.Abstractions.Services.AudioOutput.Tunneling;

namespace Voxta.Core.Speech.LocalFile;

public class FileSpeechTunnel(string path) : ISpeechTunnel
{
	public Task ErrorAsync(Exception exc, CancellationToken cancellationToken)
	{
		ExceptionDispatchInfo.Capture(exc).Throw();
		throw exc;
	}

	public async Task SendAsync(AudioData audioData, CancellationToken cancellationToken)
	{
		await using FileStream f = File.Create(path);
		try
		{
			await audioData.Stream.CopyToAsync(f, cancellationToken);
		}
		finally
		{
			await audioData.DisposeAsync();
		}
	}

	public ValueTask<ISpeechTunnelResponse> StartAsync(string contentType, int? contentLength, CancellationToken cancellationToken)
	{
		return ValueTask.FromResult((ISpeechTunnelResponse)new FileSpeechTunnelResponse(File.Create(path)));
	}
}

```

## Voxta.Core.Speech.LocalFile\FileSpeechTunnelResponse.cs
```csharp
using System;
using System.IO;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Services.AudioOutput.Tunneling;

namespace Voxta.Core.Speech.LocalFile;

public class FileSpeechTunnelResponse(FileStream stream) : ISpeechTunnelResponse, IAsyncDisposable
{
	private bool _complete;

	public ValueTask SendAsync(ReadOnlyMemory<byte> chunk, CancellationToken cancellationToken)
	{
		return stream.WriteAsync(chunk, cancellationToken);
	}

	public Task ErrorAsync(Exception exc, CancellationToken cancellationToken)
	{
		throw new InvalidOperationException("Speech error", exc);
	}

	public async ValueTask CompleteAsync(CancellationToken cancellationToken)
	{
		await stream.FlushAsync(cancellationToken);
		_complete = true;
		await stream.DisposeAsync();
	}

	public async ValueTask DisposeAsync()
	{
		if (!_complete)
		{
			await stream.DisposeAsync();
		}
	}
}

```

## Voxta.Core.Speech.None\DisabledSpeechGenerator.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Cache;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Services.TextToSpeech;
using Voxta.Model.Shared;

namespace Voxta.Core.Speech.None;

public class DisabledSpeechGenerator(IChatSessionPlaybackHandler chatSession) : ISpeechGenerator
{
	public bool Enabled => false;

	public bool IsServerSide => false;

	public ServiceLink? Link => null;

	public ValueTask<TextToSpeechAudioSettings> GetAudioSettings(VoiceInfo? voice, CancellationToken cancellationToken)
	{
		return ValueTask.FromResult(TextToSpeechAudioSettings.Empty);
	}

	public Task WarmupAsync(Guid userId, VoiceInfo? voice, Guid characterId, string culture, CancellationToken cancellationToken)
	{
		return Task.CompletedTask;
	}

	public ISpeechGeneratorPlaybackQueue CreateSpeechQueue(ChatMessageSpeechToken token, IPersistentCacheEntry? thinkingSpeechEntry)
	{
		return new NullSpeechGeneratorPlaybackQueue(chatSession, token);
	}

	public Task<string?> GenerateAudioUrlAsync(SpeechRequest speechRequest, string? reusableSpeechId, CancellationToken cancellationToken)
	{
		return Task.FromResult<string>(null);
	}

	public Task<bool> ServerPlaybackAsync(SpeechRequest speechRequest, string? reusableSpeechId, ISpeechGeneratorPlaybackQueue playbackQueue, ChatMessageSpeechChunkToken token, CancellationToken cancellationToken)
	{
		return Task.FromResult(result: false);
	}

	public string[]? ConvertToUrl(IPersistentCacheEntry[] items)
	{
		return null;
	}
}

```

## Voxta.Core.Speech.None\NullSpeechGenerator.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Cache;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Services.TextToSpeech;
using Voxta.Model.Shared;

namespace Voxta.Core.Speech.None;

public class NullSpeechGenerator : ISpeechGenerator
{
	public static readonly ISpeechGenerator Instance = new NullSpeechGenerator();

	public bool Enabled => false;

	public bool IsServerSide => false;

	public ServiceLink? Link => null;

	public ValueTask<TextToSpeechAudioSettings> GetAudioSettings(VoiceInfo? voice, CancellationToken cancellationToken)
	{
		return ValueTask.FromResult(TextToSpeechAudioSettings.Empty);
	}

	public Task WarmupAsync(Guid userId, VoiceInfo? voice, Guid characterId, string culture, CancellationToken cancellationToken)
	{
		throw new InvalidOperationException("Speech generator is not initialized");
	}

	public ISpeechGeneratorPlaybackQueue CreateSpeechQueue(ChatMessageSpeechToken token, IPersistentCacheEntry? thinkingSpeechEntry)
	{
		throw new InvalidOperationException("Speech generator is not initialized");
	}

	public Task<string?> GenerateAudioUrlAsync(SpeechRequest speechRequest, string? reusableSpeechId, CancellationToken cancellationToken)
	{
		throw new InvalidOperationException("Speech generator is not initialized");
	}

	public Task<bool> ServerPlaybackAsync(SpeechRequest speechRequest, string? reusableSpeechId, ISpeechGeneratorPlaybackQueue playbackQueue, ChatMessageSpeechChunkToken token, CancellationToken cancellationToken)
	{
		throw new InvalidOperationException("Speech generator is not initialized");
	}

	public string[] ConvertToUrl(IPersistentCacheEntry[] items)
	{
		throw new InvalidOperationException("Speech generator is not initialized");
	}
}

```

## Voxta.Core.Speech.None\NullSpeechGeneratorPlaybackQueue.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Services.AudioOutput;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Core.Speech.None;

public class NullSpeechGeneratorPlaybackQueue(IChatSessionPlaybackHandler chatSession, ChatMessageSpeechToken speechToken) : ISpeechGeneratorPlaybackQueue, IAsyncDisposable
{
	public void Initialize(CancellationToken cancellationToken)
	{
	}

	public void PlayQueue(AudioData audioData, ChatMessageSpeechChunkToken chunkToken)
	{
	}

	public void Complete()
	{
		chatSession.DoSpeechPlaybackCompleteAsync(new ClientSpeechPlaybackCompleteMessage
		{
			SessionId = speechToken.SessionId,
			MessageId = speechToken.MessageId
		});
	}

	public Task CancelAsync()
	{
		return Task.CompletedTask;
	}

	public ValueTask DisposeAsync()
	{
		return ValueTask.CompletedTask;
	}
}

```

## Voxta.Core.Speech\ClientSideSpeechGeneratorPlaybackQueue.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Services.AudioOutput;

namespace Voxta.Core.Speech;

public class ClientSideSpeechGeneratorPlaybackQueue : ISpeechGeneratorPlaybackQueue, IAsyncDisposable
{
	public void Initialize(CancellationToken cancellationToken)
	{
	}

	public void PlayQueue(AudioData audioData, ChatMessageSpeechChunkToken chunkToken)
	{
	}

	public void Complete()
	{
	}

	public Task CancelAsync()
	{
		return Task.CompletedTask;
	}

	public ValueTask DisposeAsync()
	{
		return ValueTask.CompletedTask;
	}
}

```

## Voxta.Core.Speech\IPendingSpeechManager.cs
```csharp
using System.Diagnostics.CodeAnalysis;

namespace Voxta.Core.Speech;

public interface IPendingSpeechManager
{
	void Push(string id, PendingSpeechItem request);

	bool TryGetValue(string id, [NotNullWhen(true)] out PendingSpeechItem? request);

	void RemoveValue(string id);

	string GetUserSessionToken();
}

```

## Voxta.Core.Speech\ISpeechGenerator.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Cache;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Services.TextToSpeech;
using Voxta.Model.Shared;

namespace Voxta.Core.Speech;

public interface ISpeechGenerator
{
	bool Enabled { get; }

	bool IsServerSide { get; }

	ServiceLink? Link { get; }

	ValueTask<TextToSpeechAudioSettings> GetAudioSettings(VoiceInfo? voice, CancellationToken cancellationToken);

	Task WarmupAsync(Guid userId, VoiceInfo? voice, Guid characterId, string culture, CancellationToken cancellationToken);

	ISpeechGeneratorPlaybackQueue CreateSpeechQueue(ChatMessageSpeechToken chatMessageSpeechToken, IPersistentCacheEntry? thinkingSpeechEntry);

	Task<string?> GenerateAudioUrlAsync(SpeechRequest speechRequest, string? reusableSpeechId, CancellationToken cancellationToken);

	Task<bool> ServerPlaybackAsync(SpeechRequest speechRequest, string? reusableSpeechId, ISpeechGeneratorPlaybackQueue playbackQueue, ChatMessageSpeechChunkToken token, CancellationToken cancellationToken);

	string[]? ConvertToUrl(IPersistentCacheEntry[] items);
}

```

## Voxta.Core.Speech\ISpeechGeneratorFactory.cs
```csharp
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services.AudioOutput.Pipeline;
using Voxta.Abstractions.Services.TextToSpeech;
using Voxta.Model.Shared;

namespace Voxta.Core.Speech;

public interface ISpeechGeneratorFactory
{
	ISpeechGenerator Disabled(IChatSessionPlaybackHandler chatSession);

	ISpeechGenerator Create(IAuthenticationContext auth, IChatSessionPlaybackHandler chatSession, ITextToSpeechService ttsService, IAudioOutputPipeline? audioOutput, ClientCapabilities capabilities, bool preferClientCapability);
}

```

## Voxta.Core.Speech\ISpeechGeneratorPlaybackQueue.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Services.AudioOutput;

namespace Voxta.Core.Speech;

public interface ISpeechGeneratorPlaybackQueue : IAsyncDisposable
{
	void Initialize(CancellationToken cancellationToken);

	void PlayQueue(AudioData audioData, ChatMessageSpeechChunkToken chunkToken);

	void Complete();

	Task CancelAsync();
}

```

## Voxta.Core.Speech\IThinkingSpeechManager.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Cache;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services.TextToSpeech;
using Voxta.Model.Shared;

namespace Voxta.Core.Speech;

public interface IThinkingSpeechManager
{
	Task<IPersistentCacheEntry[]> GenerateThinkingSpeechAsync(IAuthenticationContext auth, ITextToSpeechService ttsService, VoiceInfo? voice, Guid? characterId, string culture, string[] acceptedContentTypes, CancellationToken cancellationToken);
}

```

## Voxta.Core.Speech\PendingSpeechItem.cs
```csharp
using System;
using Voxta.Abstractions.Services.TextToSpeech;

namespace Voxta.Core.Speech;

public class PendingSpeechItem
{
	public required WeakReference<ITextToSpeechService> ServiceRef { get; init; }

	public required SpeechRequest Request { get; init; }

	public required string[] AcceptedContentTypes { get; init; }

	public string? SpeechId { get; init; }
}

```

## Voxta.Core.Speech\PendingSpeechManager.cs
```csharp
using System;
using System.Diagnostics.CodeAnalysis;
using Microsoft.Extensions.Logging;
using Voxta.Common;

namespace Voxta.Core.Speech;

public class PendingSpeechManager(TimeProvider timeProvider, ILogger<PendingSpeechManager> logger) : IPendingSpeechManager
{
	private readonly CacheWithExpiration<PendingSpeechItem> _pendingSpeechCache = new CacheWithExpiration<PendingSpeechItem>(timeProvider);

	private readonly CacheWithExpiration<PendingSpeechItem> _retrySpeechCache = new CacheWithExpiration<PendingSpeechItem>(timeProvider);

	private readonly string _userSessionTokens = Crypto.CreateCryptographicallySecureGuid().ToString();

	public void Push(string id, PendingSpeechItem request)
	{
		CacheItem<PendingSpeechItem> item = new CacheItem<PendingSpeechItem>(timeProvider.GetUtcNow().AddHours(1.0), id, request);
		_pendingSpeechCache.Add(item);
	}

	public bool TryGetValue(string id, [NotNullWhen(true)] out PendingSpeechItem? request)
	{
		if (_pendingSpeechCache.TryGetValue(id, out PendingSpeechItem item))
		{
			request = item;
			return true;
		}
		if (_retrySpeechCache.TryGetValue(id, out PendingSpeechItem item2))
		{
			logger.LogDebug("Pending speech request {Id} has already been played before, accessing from the retry cache.", id);
			request = item2;
			return true;
		}
		request = null;
		return false;
	}

	public void RemoveValue(string id)
	{
		if (_pendingSpeechCache.TryGetValue(id, out PendingSpeechItem item))
		{
			CacheItem<PendingSpeechItem> item2 = new CacheItem<PendingSpeechItem>(timeProvider.GetUtcNow().AddMinutes(5.0), id, item);
			_retrySpeechCache.Add(item2);
			_pendingSpeechCache.Remove(id);
		}
	}

	public string GetUserSessionToken()
	{
		return _userSessionTokens;
	}
}

```

## Voxta.Core.Speech\SpeechChunkProcessor.cs
```csharp
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Services.ChatAugmentations;
using Voxta.Abstractions.Services.TextToSpeech;
using Voxta.Abstractions.TextGenerationStreaming;
using Voxta.Common;
using Voxta.Core.Chats.ScopedServices;
using Voxta.Model.Shared;

namespace Voxta.Core.Speech;

public class SpeechChunkProcessor(Guid sessionId, Guid userId, Guid messageId, ISpeechGenerator speechGenerator, ISpeechGeneratorPlaybackQueue playbackQueue, IChatSpeechReplacementsAugmentation augmentations, IReplyChunksHandler replyChunksHandler, ICharacterInferenceData character, VoiceInfo? characterVoice, ICharacterInferenceData narrator, VoiceInfo? narratorVoice, string cultureName, string? reusableSpeechId, string? replyTo)
{
	private int _partIdx;

	private string? _previousNarratorPart;

	private string? _previousCharacterPart;

	private bool _insideCodeBlock;

	private TextToSpeechAudioSettings? _characterAudioSettings;

	private TextToSpeechAudioSettings? _narratorAudioSettings;

	public void Initialize(CancellationToken cancellationToken)
	{
		playbackQueue.Initialize(cancellationToken);
	}

	public async Task ProcessChunkAsync(TextChunk chunk, CancellationToken cancellationToken)
	{
		string speechId = ((reusableSpeechId != null) ? $"{reusableSpeechId}_{_partIdx++}" : null);
		string text = chunk.Text;
		if (character == narrator && !chunk.IsNarration)
		{
			TextChunk textChunk = chunk;
			textChunk.IsNarration = true;
			chunk = textChunk;
		}
		string audioText = TryExtractAudioText(text);
		if (audioText != null)
		{
			audioText = augmentations.SpeechProcessText(audioText);
			if (audioText.StartsWith('*') && audioText.EndsWith('*'))
			{
				audioText = audioText.Trim('*');
				if (!chunk.IsNarration)
				{
					TextChunk textChunk = chunk;
					textChunk.IsNarration = true;
					chunk = textChunk;
				}
			}
			if (audioText.Length == 0)
			{
				audioText = null;
			}
		}
		VoiceInfo voice = null;
		TextToSpeechAudioSettings audioSettings = TextToSpeechAudioSettings.Empty;
		if (audioText != null)
		{
			voice = (chunk.IsNarration ? narratorVoice : characterVoice);
			audioSettings = (chunk.IsNarration ? _narratorAudioSettings : _characterAudioSettings);
			if (audioSettings == null)
			{
				audioSettings = await speechGenerator.GetAudioSettings(voice, cancellationToken);
				if (chunk.IsNarration)
				{
					_narratorAudioSettings = audioSettings;
				}
				else
				{
					_characterAudioSettings = audioSettings;
				}
			}
			if (audioSettings.SkipPunctuationOnly && audioText.IsPunctuationOnly())
			{
				voice = null;
			}
		}
		SpeechRequest speechRequest = ((audioText != null && voice != null) ? new SpeechRequest
		{
			UserId = userId,
			Text = audioText,
			PreviousText = (chunk.IsNarration ? _previousNarratorPart : _previousCharacterPart),
			Voice = voice,
			Culture = cultureName,
			CharacterId = (chunk.IsNarration ? narrator.Id : character.Id),
			ReplyTo = replyTo
		} : null);
		string text2 = ((speechRequest == null) ? null : (await speechGenerator.GenerateAudioUrlAsync(speechRequest, speechId, cancellationToken)));
		string text3 = text2;
		replyChunksHandler.Chunk(chunk, text3 ?? "", audioSettings);
		if (speechRequest != null)
		{
			ChatMessageSpeechChunkToken token = new ChatMessageSpeechChunkToken
			{
				SessionId = sessionId,
				MessageId = messageId,
				StartIndex = chunk.StartIndex,
				EndIndex = chunk.EndIndex,
				IsNarration = chunk.IsNarration
			};
			if (await speechGenerator.ServerPlaybackAsync(speechRequest, speechId, playbackQueue, token, cancellationToken))
			{
				await replyChunksHandler.NotifyAudioIncoming();
			}
		}
		if (chunk.IsNarration)
		{
			_previousNarratorPart = audioText;
		}
		else
		{
			_previousCharacterPart = audioText;
		}
	}

	private string? TryExtractAudioText(string chunkText)
	{
		string text = chunkText;
		int num = chunkText.IndexOf("```", StringComparison.Ordinal);
		if (num > -1)
		{
			if (!_insideCodeBlock)
			{
				text = text.Substring(0, num);
				_insideCodeBlock = true;
			}
			else
			{
				string text2 = text;
				int num2 = num + 3;
				text = text2.Substring(num2, text2.Length - num2);
				_insideCodeBlock = false;
			}
		}
		else if (_insideCodeBlock)
		{
			return null;
		}
		if (!text.Any(char.IsLetterOrDigit))
		{
			return null;
		}
		text = text.Trim();
		if (!(text == ""))
		{
			return text;
		}
		return null;
	}
}

```

## Voxta.Core.Speech\SpeechGeneratorFactory.cs
```csharp
using System;
using System.IO;
using System.Linq;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Cache;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services.AudioConversion;
using Voxta.Abstractions.Services.AudioOutput;
using Voxta.Abstractions.Services.AudioOutput.Pipeline;
using Voxta.Abstractions.Services.TextToSpeech;
using Voxta.Core.Speech.AudioOutputService;
using Voxta.Core.Speech.DeferredUrl;
using Voxta.Core.Speech.LocalFile;
using Voxta.Core.Speech.None;
using Voxta.Model.Shared;

namespace Voxta.Core.Speech;

public class SpeechGeneratorFactory(IPendingSpeechManager pendingSpeechManager, ITemporaryFileCleanup temporaryFileCleanup, IPersistentCache persistentCache, IAudioConverter audioConverter, ILogger<SpeechGeneratorFactory> logger) : ISpeechGeneratorFactory
{
	public ISpeechGenerator Disabled(IChatSessionPlaybackHandler chatSession)
	{
		return new DisabledSpeechGenerator(chatSession);
	}

	public ISpeechGenerator Create(IAuthenticationContext auth, IChatSessionPlaybackHandler chatSession, ITextToSpeechService ttsService, IAudioOutputPipeline? audioOutput, ClientCapabilities capabilities, bool preferClientCapability)
	{
		if (!ttsService.Enabled)
		{
			return new DisabledSpeechGenerator(chatSession);
		}
		if ((preferClientCapability || auth.Remote) && capabilities.CanAudioOutput())
		{
			switch (capabilities.AudioOutput)
			{
			case AudioOutputClientCapabilities.Url:
				return new DeferredUrlSpeechGenerator(ttsService, pendingSpeechManager, capabilities.AcceptedAudioContentTypes);
			case AudioOutputClientCapabilities.LocalFile:
			{
				string audioFolder = capabilities.AudioFolder;
				if (string.IsNullOrEmpty(audioFolder))
				{
					throw new InvalidOperationException("No speech generator was created because the client only supports file-based speech generation, and no local folder was specified");
				}
				if (Path.GetFullPath(audioFolder) == Path.GetFullPath(persistentCache.Folder))
				{
					throw new InvalidOperationException("Local file folder cannot be the same as the speech cache folder");
				}
				Directory.CreateDirectory(audioFolder);
				int num = 0;
				string[] files = Directory.GetFiles(audioFolder);
				foreach (string path in files)
				{
					if (AudioData.SupportedExtensions.Contains(Path.GetExtension(path).ToLower()) && Path.GetFileName(path).StartsWith("voxta_"))
					{
						File.Delete(path);
						num++;
					}
				}
				logger.LogInformation("Deleted {Deleted} files from the local file audio folder {Folder}", num, audioFolder);
				return new FileSpeechGenerator(auth, ttsService, temporaryFileCleanup, persistentCache, audioFolder, audioConverter.SelectOutputContentType(capabilities.AcceptedAudioContentTypes, ttsService.ContentType), audioConverter);
			}
			default:
				throw new InvalidOperationException($"No speech generator was created because the client only supports {capabilities.AudioOutput} audio output, and no local folder was specified");
			}
		}
		if (!auth.Remote && audioOutput != null)
		{
			return new AudioOutputServiceSpeechGenerator(auth, audioOutput, ttsService, audioConverter, chatSession, persistentCache);
		}
		logger.LogWarning("No speech generator was created because the client does not support audio output or no tts service was specified");
		return new DisabledSpeechGenerator(chatSession);
	}
}

```

## Voxta.Core.Speech\ThinkingSpeechManager.cs
```csharp
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Cache;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services.AudioConversion;
using Voxta.Abstractions.Services.AudioOutput;
using Voxta.Abstractions.Services.TextToSpeech;
using Voxta.Abstractions.Utils;
using Voxta.Common;
using Voxta.Core.Services.AudioOutput.Tunneling;
using Voxta.Core.Speech.LocalFile;
using Voxta.Model.Shared;

namespace Voxta.Core.Speech;

public class ThinkingSpeechManager(IPersistentCache persistentCache, ICommonFolders folders, IAudioConverter audioConverter, ILogger<ThinkingSpeechManager> logger) : IThinkingSpeechManager
{
	public async Task<IPersistentCacheEntry[]> GenerateThinkingSpeechAsync(IAuthenticationContext auth, ITextToSpeechService ttsService, VoiceInfo? voice, Guid? characterId, string culture, string[] acceptedContentTypes, CancellationToken cancellationToken)
	{
		List<IPersistentCacheEntry> items = new List<IPersistentCacheEntry>();
		IReadOnlyList<string> thinkingSpeechUtterances = (IReadOnlyList<string>)(ttsService.GetThinkingSpeech() ?? ((object)ArraySegment<string>.Empty));
		List<IPersistentCacheEntry> list = items;
		list.AddRange(await GenerateThinkingSpeechFromVoice(auth, ttsService, voice, characterId, culture, thinkingSpeechUtterances, acceptedContentTypes, cancellationToken));
		list = items;
		list.AddRange(await LoadThinkingSpeechFolder(auth, Path.Combine(folders.Data, "Audio", "ThinkingSpeech", "Shared"), acceptedContentTypes, cancellationToken));
		return items.ToArray();
	}

	private async Task<ICollection<IPersistentCacheEntry>> GenerateThinkingSpeechFromVoice(IAuthenticationContext auth, ITextToSpeechService ttsService, VoiceInfo? voice, Guid? characterId, string culture, IReadOnlyList<string> thinkingSpeechUtterances, string[] acceptedContentTypes, CancellationToken cancellationToken)
	{
		acceptedContentTypes = acceptedContentTypes.Where((string x) => x != "audio/pcm").ToArray();
		string contentType = audioConverter.SelectOutputContentType(acceptedContentTypes, ttsService.ContentType);
		bool first = true;
		List<IPersistentCacheEntry> items = new List<IPersistentCacheEntry>();
		TextToSpeechAudioSettings audioSettings = await ttsService.GetAudioSettings(voice, cancellationToken);
		foreach (string thinkingSpeechUtterance in thinkingSpeechUtterances)
		{
			if (string.IsNullOrWhiteSpace(thinkingSpeechUtterance) || (audioSettings.SkipPunctuationOnly && thinkingSpeechUtterance.IsPunctuationOnly()))
			{
				continue;
			}
			string speechId = "think_" + Crypto.CreateSha1Hash(ttsService.InstanceSettings.ServiceName + (voice?.GetParametersAsString() ?? "-")) + "_" + Crypto.CreateSha1Hash(thinkingSpeechUtterance);
			IPersistentCacheEntry cache = persistentCache.Get(speechId, contentType);
			if (cache.Exists())
			{
				items.Add(cache);
				await cache.UpdateAsync(cancellationToken);
				continue;
			}
			if (first)
			{
				logger.LogInformation("Pre-generating {Utterances} thinking speech into {Folder}", thinkingSpeechUtterances.Count, persistentCache.Folder);
				first = false;
			}
			string path = cache.GetPath();
			ConversionSpeechTunnel tunnel = new ConversionSpeechTunnel(auth, audioConverter, contentType, new FileSpeechTunnel(path));
			logger.LogInformation("Generating thinking speech for voice '{Voice}' and utterance '{Text}'", voice?.Label ?? "None", thinkingSpeechUtterance);
			await ttsService.GenerateSpeechAsync(new SpeechRequest
			{
				UserId = auth.UserId,
				Voice = voice,
				Culture = culture,
				Text = thinkingSpeechUtterance,
				CharacterId = characterId
			}, tunnel, cancellationToken);
			if (!cache.Exists())
			{
				logger.LogWarning("Thinking speech was not generated");
				continue;
			}
			await cache.UpdateAsync(cancellationToken);
			items.Add(cache);
		}
		return items;
	}

	private async Task<ICollection<IPersistentCacheEntry>> LoadThinkingSpeechFolder(IAuthenticationContext auth, string folder, string[] acceptedContentTypes, CancellationToken cancellationToken)
	{
		if (!Directory.Exists(folder))
		{
			return new List<IPersistentCacheEntry>();
		}
		List<IPersistentCacheEntry> items = new List<IPersistentCacheEntry>();
		string[] files = Directory.GetFiles(folder);
		foreach (string text in files)
		{
			if (AudioData.SupportedExtensions.Contains(Path.GetExtension(text).ToLower()))
			{
				string speechId = "think_file_" + Crypto.CreateSha1Hash(text ?? "");
				string sourceContentType = AudioData.FromExtension(Path.GetExtension(text));
				string text2 = audioConverter.SelectOutputContentType(acceptedContentTypes, sourceContentType);
				IPersistentCacheEntry cache = persistentCache.Get(speechId, text2);
				string path = cache.GetPath();
				if (File.Exists(path))
				{
					items.Add(cache);
					continue;
				}
				ConversionSpeechTunnel conversionSpeechTunnel = new ConversionSpeechTunnel(auth, audioConverter, text2, new FileSpeechTunnel(path));
				AudioData audioData = new AudioData(File.OpenRead(text), AudioData.FromExtension(Path.GetExtension(text)));
				logger.LogInformation("Converting thinking speech {File}", Path.GetFileName(text));
				await conversionSpeechTunnel.SendAsync(audioData, cancellationToken);
				items.Add(cache);
			}
		}
		return items;
	}
}

```

## Voxta.Core.TextGenerationStreaming\ITextGenerationStreamingPipe.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Services.TextGen;
using Voxta.Core.Chats.ScopedServices;
using Voxta.Core.Speech;

namespace Voxta.Core.TextGenerationStreaming;

public interface ITextGenerationStreamingPipe
{
	ValueTask<TextGenerationStreamingPipeResult> ProcessReplyAsync(IChatInferenceData chat, ICharacterInferenceData character, ISpeechGenerator speechGenerator, ISpeechGeneratorPlaybackQueue playbackQueue, IAsyncEnumerable<LLMOutputToken> reply, Guid messageId, string? replyTo, IReplyChunksHandler replyChunksHandler, TextGenPreprocessingSettings preprocessingSettings, CancellationToken cancellationToken);
}

```

## Voxta.Core.TextGenerationStreaming\SentencePreprocessor.cs
```csharp
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Runtime.ExceptionServices;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Threading.Tasks.Sources;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Services.ChatAugmentations;
using Voxta.Abstractions.Services.TextGen;
using Voxta.Abstractions.TextGenerationStreaming;
using Voxta.Common;
using Voxta.Model.Shared;

namespace Voxta.Core.TextGenerationStreaming;

public sealed class SentencePreprocessor(IChatInferenceData chat, IChatPostProcessAugmentation postProcessAugmentation, TextGenPreprocessingSettings preprocessingSettings) : ISentencePreprocessor
{
	[CompilerGenerated]
	private sealed class _003CProcessChunk_003Ed__17 : IAsyncEnumerable<TextChunk>, IAsyncEnumerator<TextChunk>, IAsyncDisposable, IValueTaskSource<bool>, IValueTaskSource, IAsyncStateMachine
	{
		public int _003C_003E1__state;

		public AsyncIteratorMethodBuilder _003C_003Et__builder;

		public ManualResetValueTaskSourceCore<bool> _003C_003Ev__promiseOfValueOrEnd;

		private TextChunk _003C_003E2__current;

		private bool _003C_003Ew__disposeMode;

		private CancellationTokenSource _003C_003Ex__combinedTokens;

		private int _003C_003El__initialThreadId;

		public SentencePreprocessor _003C_003E4__this;

		private string raw;

		public string _003C_003E3__raw;

		private CancellationToken cancellationToken;

		public CancellationToken _003C_003E3__cancellationToken;

		private IAsyncEnumerator<TextChunk> _003C_003E7__wrap1;

		private object _003C_003E7__wrap2;

		private int _003C_003E7__wrap3;

		private TextChunk _003Cchunk_003E5__5;

		private ValueTaskAwaiter<bool> _003C_003Eu__1;

		private ValueTaskAwaiter _003C_003Eu__2;

		TextChunk IAsyncEnumerator<TextChunk>.Current
		{
			[DebuggerHidden]
			get
			{
				return _003C_003E2__current;
			}
		}

		[DebuggerHidden]
		public _003CProcessChunk_003Ed__17(int _003C_003E1__state)
		{
			_003C_003Et__builder = AsyncIteratorMethodBuilder.Create();
			this._003C_003E1__state = _003C_003E1__state;
			_003C_003El__initialThreadId = Environment.CurrentManagedThreadId;
		}

		private void MoveNext()
		{
			int num = _003C_003E1__state;
			SentencePreprocessor sentencePreprocessor = _003C_003E4__this;
			try
			{
				ValueTaskAwaiter awaiter;
				switch (num)
				{
				default:
					if (!_003C_003Ew__disposeMode)
					{
						num = (_003C_003E1__state = -1);
						if (!sentencePreprocessor._stopProcessing && !string.IsNullOrEmpty(raw))
						{
							if (sentencePreprocessor._isRoleplay && !sentencePreprocessor._quoted.HasValue)
							{
								if (raw.StartsWith("\""))
								{
									sentencePreprocessor._quoted = true;
									string text = raw;
									raw = text.Substring(1, text.Length - 1);
								}
								else if (raw.StartsWith(" \""))
								{
									sentencePreprocessor._quoted = true;
									string text = raw;
									raw = text.Substring(2, text.Length - 2);
								}
								else if (raw.StartsWith('"'))
								{
									sentencePreprocessor._quoted = true;
									string text = raw;
									raw = text.Substring(1, text.Length - 1);
								}
								else
								{
									sentencePreprocessor._quoted = false;
								}
							}
							sentencePreprocessor._buf.Append(raw);
							_003C_003E7__wrap1 = sentencePreprocessor.ExtractCompleted(cancellationToken).GetAsyncEnumerator();
							_003C_003E7__wrap2 = null;
							_003C_003E7__wrap3 = 0;
							goto case -4;
						}
						_003C_003Ew__disposeMode = true;
					}
					goto end_IL_000e;
				case -4:
				case 0:
					try
					{
						ValueTaskAwaiter<bool> awaiter2;
						if (num != -4)
						{
							if (num != 0)
							{
								goto IL_0202;
							}
							awaiter2 = _003C_003Eu__1;
							_003C_003Eu__1 = default(ValueTaskAwaiter<bool>);
							num = (_003C_003E1__state = -1);
							goto IL_0272;
						}
						num = (_003C_003E1__state = -1);
						if (!_003C_003Ew__disposeMode)
						{
							sentencePreprocessor._previousChunk = _003Cchunk_003E5__5.Text;
							if (!sentencePreprocessor._stopProcessing)
							{
								_003Cchunk_003E5__5 = default(TextChunk);
								goto IL_0202;
							}
							_003C_003Ew__disposeMode = true;
						}
						goto end_IL_0182;
						IL_0202:
						_003C_003E2__current = default(TextChunk);
						awaiter2 = _003C_003E7__wrap1.MoveNextAsync().GetAwaiter();
						if (!awaiter2.IsCompleted)
						{
							num = (_003C_003E1__state = 0);
							_003C_003Eu__1 = awaiter2;
							_003CProcessChunk_003Ed__17 stateMachine = this;
							_003C_003Et__builder.AwaitUnsafeOnCompleted(ref awaiter2, ref stateMachine);
							return;
						}
						goto IL_0272;
						IL_0272:
						if (awaiter2.GetResult())
						{
							_003Cchunk_003E5__5 = _003C_003E7__wrap1.Current;
							_003C_003E2__current = _003Cchunk_003E5__5;
							num = (_003C_003E1__state = -4);
							goto IL_0413;
						}
						end_IL_0182:;
					}
					catch (object obj)
					{
						_003C_003E7__wrap2 = obj;
					}
					if (_003C_003E7__wrap1 == null)
					{
						break;
					}
					_003C_003E2__current = default(TextChunk);
					awaiter = _003C_003E7__wrap1.DisposeAsync().GetAwaiter();
					if (!awaiter.IsCompleted)
					{
						num = (_003C_003E1__state = 1);
						_003C_003Eu__2 = awaiter;
						_003CProcessChunk_003Ed__17 stateMachine = this;
						_003C_003Et__builder.AwaitUnsafeOnCompleted(ref awaiter, ref stateMachine);
						return;
					}
					goto IL_0304;
				case 1:
					{
						awaiter = _003C_003Eu__2;
						_003C_003Eu__2 = default(ValueTaskAwaiter);
						num = (_003C_003E1__state = -1);
						goto IL_0304;
					}
					IL_0304:
					awaiter.GetResult();
					break;
				}
				object obj2 = _003C_003E7__wrap2;
				if (obj2 != null)
				{
					ExceptionDispatchInfo.Capture((obj2 as Exception) ?? throw obj2).Throw();
				}
				_ = _003C_003E7__wrap3;
				if (!_003C_003Ew__disposeMode)
				{
					_003C_003E7__wrap2 = null;
					_003C_003E7__wrap1 = null;
				}
				end_IL_000e:;
			}
			catch (Exception exception)
			{
				_003C_003E1__state = -2;
				_003C_003E7__wrap1 = null;
				_003C_003E7__wrap2 = null;
				_003Cchunk_003E5__5 = default(TextChunk);
				if (_003C_003Ex__combinedTokens != null)
				{
					_003C_003Ex__combinedTokens.Dispose();
					_003C_003Ex__combinedTokens = null;
				}
				_003C_003E2__current = default(TextChunk);
				_003C_003Et__builder.Complete();
				_003C_003Ev__promiseOfValueOrEnd.SetException(exception);
				return;
			}
			_003C_003E1__state = -2;
			_003C_003E7__wrap1 = null;
			_003C_003E7__wrap2 = null;
			_003Cchunk_003E5__5 = default(TextChunk);
			if (_003C_003Ex__combinedTokens != null)
			{
				_003C_003Ex__combinedTokens.Dispose();
				_003C_003Ex__combinedTokens = null;
			}
			_003C_003E2__current = default(TextChunk);
			_003C_003Et__builder.Complete();
			_003C_003Ev__promiseOfValueOrEnd.SetResult(result: false);
			return;
			IL_0413:
			_003C_003Ev__promiseOfValueOrEnd.SetResult(result: true);
		}

		void IAsyncStateMachine.MoveNext()
		{
			//ILSpy generated this explicit interface implementation from .override directive in MoveNext
			this.MoveNext();
		}

		[DebuggerHidden]
		private void SetStateMachine(IAsyncStateMachine stateMachine)
		{
		}

		void IAsyncStateMachine.SetStateMachine(IAsyncStateMachine stateMachine)
		{
			//ILSpy generated this explicit interface implementation from .override directive in SetStateMachine
			this.SetStateMachine(stateMachine);
		}

		[DebuggerHidden]
		IAsyncEnumerator<TextChunk> IAsyncEnumerable<TextChunk>.GetAsyncEnumerator(CancellationToken cancellationToken = default(CancellationToken))
		{
			_003CProcessChunk_003Ed__17 _003CProcessChunk_003Ed__;
			if (_003C_003E1__state == -2 && _003C_003El__initialThreadId == Environment.CurrentManagedThreadId)
			{
				_003C_003E1__state = -3;
				_003C_003Et__builder = AsyncIteratorMethodBuilder.Create();
				_003C_003Ew__disposeMode = false;
				_003CProcessChunk_003Ed__ = this;
			}
			else
			{
				_003CProcessChunk_003Ed__ = new _003CProcessChunk_003Ed__17(-3)
				{
					_003C_003E4__this = _003C_003E4__this
				};
			}
			_003CProcessChunk_003Ed__.raw = _003C_003E3__raw;
			if (_003C_003E3__cancellationToken.Equals(default(CancellationToken)))
			{
				_003CProcessChunk_003Ed__.cancellationToken = cancellationToken;
			}
			else if (cancellationToken.Equals(_003C_003E3__cancellationToken) || cancellationToken.Equals(default(CancellationToken)))
			{
				_003CProcessChunk_003Ed__.cancellationToken = _003C_003E3__cancellationToken;
			}
			else
			{
				_003C_003Ex__combinedTokens = CancellationTokenSource.CreateLinkedTokenSource(_003C_003E3__cancellationToken, cancellationToken);
				_003CProcessChunk_003Ed__.cancellationToken = _003C_003Ex__combinedTokens.Token;
			}
			return _003CProcessChunk_003Ed__;
		}

		[DebuggerHidden]
		ValueTask<bool> IAsyncEnumerator<TextChunk>.MoveNextAsync()
		{
			if (_003C_003E1__state == -2)
			{
				return default(ValueTask<bool>);
			}
			_003C_003Ev__promiseOfValueOrEnd.Reset();
			_003CProcessChunk_003Ed__17 stateMachine = this;
			_003C_003Et__builder.MoveNext(ref stateMachine);
			short version = _003C_003Ev__promiseOfValueOrEnd.Version;
			if (_003C_003Ev__promiseOfValueOrEnd.GetStatus(version) == ValueTaskSourceStatus.Succeeded)
			{
				return new ValueTask<bool>(_003C_003Ev__promiseOfValueOrEnd.GetResult(version));
			}
			return new ValueTask<bool>(this, version);
		}

		[DebuggerHidden]
		bool IValueTaskSource<bool>.GetResult(short token)
		{
			return _003C_003Ev__promiseOfValueOrEnd.GetResult(token);
		}

		[DebuggerHidden]
		ValueTaskSourceStatus IValueTaskSource<bool>.GetStatus(short token)
		{
			return _003C_003Ev__promiseOfValueOrEnd.GetStatus(token);
		}

		[DebuggerHidden]
		void IValueTaskSource<bool>.OnCompleted(Action<object?> continuation, object? state, short token, ValueTaskSourceOnCompletedFlags flags)
		{
			_003C_003Ev__promiseOfValueOrEnd.OnCompleted(continuation, state, token, flags);
		}

		[DebuggerHidden]
		void IValueTaskSource.GetResult(short token)
		{
			_003C_003Ev__promiseOfValueOrEnd.GetResult(token);
		}

		[DebuggerHidden]
		ValueTaskSourceStatus IValueTaskSource.GetStatus(short token)
		{
			return _003C_003Ev__promiseOfValueOrEnd.GetStatus(token);
		}

		[DebuggerHidden]
		void IValueTaskSource.OnCompleted(Action<object?> continuation, object? state, short token, ValueTaskSourceOnCompletedFlags flags)
		{
			_003C_003Ev__promiseOfValueOrEnd.OnCompleted(continuation, state, token, flags);
		}

		[DebuggerHidden]
		ValueTask IAsyncDisposable.DisposeAsync()
		{
			if (_003C_003E1__state >= -1)
			{
				throw new NotSupportedException();
			}
			if (_003C_003E1__state == -2)
			{
				return default(ValueTask);
			}
			_003C_003Ew__disposeMode = true;
			_003C_003Ev__promiseOfValueOrEnd.Reset();
			_003CProcessChunk_003Ed__17 stateMachine = this;
			_003C_003Et__builder.MoveNext(ref stateMachine);
			return new ValueTask(this, _003C_003Ev__promiseOfValueOrEnd.Version);
		}
	}

	private readonly StringBuilder _buf = new StringBuilder();

	private readonly StringBuilder _result = new StringBuilder();

	private readonly bool _isRoleplay = preprocessingSettings.TextProcessing == TextProcessingOptions.Roleplay;

	private int _cursor;

	private bool _stopProcessing;

	private int _sentenceCounter;

	private bool _isInsideRoleplay;

	private bool? _quoted;

	private int _chunksReturned;

	private string _previousChunk = "";

	private static readonly string[] _endMarkers = new string[3] { "<|", "</s>", "<end_of_turn>" };

	private const string Term = ".?!‽‼⁇⁈⁉⸮¿。｡…~";

	private static readonly HashSet<string> _acronyms = new HashSet<string>
	{
		"Mr", "Mrs", "Ms", "Dr", "Prof", "Sr", "Jr", "Mt", "Ave", "St",
		"Rd", "Blvd", "Ln", "Pl", "Ct", "Lt", "Capt", "Col", "Gen", "Adm",
		"Cpl", "Maj", "Sgt", "Inc", "Ltd", "Co", "Corp"
	};

	[AsyncIteratorStateMachine(typeof(_003CProcessChunk_003Ed__17))]
	public IAsyncEnumerable<TextChunk> ProcessChunk(string raw, [EnumeratorCancellation] CancellationToken cancellationToken)
	{
		return new _003CProcessChunk_003Ed__17(-2)
		{
			_003C_003E4__this = this,
			_003C_003E3__raw = raw,
			_003C_003E3__cancellationToken = cancellationToken
		};
	}

	public async IAsyncEnumerable<TextChunk> Complete([EnumeratorCancellation] CancellationToken cancellationToken)
	{
		if (_stopProcessing || _buf.Length == 0)
		{
			yield break;
		}
		string text = _buf.ToString().TrimEnd();
		_buf.Clear();
		if (text.Length != 0)
		{
			TextChunk? textChunk = await MakeChunkAsync(text, cancellationToken);
			if (textChunk.HasValue && (_chunksReturned == 0 || IsValidLastChunk(textChunk.Value.Text)))
			{
				_result.Append(textChunk.Value.Text);
				yield return textChunk.Value;
				_chunksReturned++;
			}
		}
	}

	[MethodImpl(MethodImplOptions.AggressiveInlining)]
	private static bool IsTerminator(char c)
	{
		return ".?!‽‼⁇⁈⁉⸮¿。｡…~".IndexOf(c) >= 0;
	}

	private bool IsValidLastChunk(string chunk)
	{
		if (chunk.IsCompleteSentence())
		{
			return true;
		}
		if (chunk.Length < 3)
		{
			return false;
		}
		if (chunk.EndsWith("..."))
		{
			return true;
		}
		bool flag;
		switch (chunk[chunk.Length - 1])
		{
		case ')':
		case '*':
		case ']':
		case '}':
			flag = true;
			break;
		default:
			flag = false;
			break;
		}
		if (flag)
		{
			return true;
		}
		flag = chunk.Length > 1 && chunk[1] == ' ';
		if (flag)
		{
			char c = chunk[0];
			bool flag2 = ((c == '*' || c == '-') ? true : false);
			flag = flag2;
		}
		if (flag)
		{
			return true;
		}
		if (_quoted == true)
		{
			if (chunk[chunk.Length - 1] == '"')
			{
				return true;
			}
		}
		if (chunk[0] == '"' || (chunk.Length > 1 && chunk[1] == '"'))
		{
			if (chunk[chunk.Length - 1] == '"')
			{
				return true;
			}
		}
		if (_previousChunk.Length > 1 && char.IsNumber(_previousChunk[0]) && _previousChunk[1] == '.')
		{
			return true;
		}
		return false;
	}

	public string GetResult()
	{
		return _result.ToString();
	}

	private async IAsyncEnumerable<TextChunk> ExtractCompleted([EnumeratorCancellation] CancellationToken cancellationToken)
	{
		string span;
		while (TryPopNext(_buf, out span))
		{
			TextChunk? textChunk = await MakeChunkAsync(span, cancellationToken);
			if (textChunk.HasValue)
			{
				_result.Append(textChunk.Value.Text);
				yield return textChunk.Value;
				_chunksReturned++;
			}
		}
	}

	private async ValueTask<TextChunk?> MakeChunkAsync(string text, CancellationToken cancellationToken)
	{
		if (text.Length == 0)
		{
			return null;
		}
		if (!preprocessingSettings.AllowMultipleLines)
		{
			if (text[text.Length - 1] == '\n')
			{
				if (_chunksReturned > 0)
				{
					_stopProcessing = true;
				}
				return null;
			}
		}
		string text2 = text;
		string[] endMarkers = _endMarkers;
		foreach (string value in endMarkers)
		{
			int num = text2.IndexOf(value, StringComparison.Ordinal);
			if (num >= 0)
			{
				text2 = text2.Substring(0, num);
				_stopProcessing = true;
				break;
			}
		}
		if (_isRoleplay && ((text2.StartsWith('[') && text2.Contains("]: ")) || text2.StartsWith(chat.User.Name + ":", StringComparison.Ordinal)))
		{
			_stopProcessing = true;
			return null;
		}
		text2 = CropNames(text2);
		if (text2.Length == 0)
		{
			return null;
		}
		bool flag;
		bool endsWithAsterisk;
		bool isInsideRoleplay;
		if (_isRoleplay)
		{
			if (_quoted == true && !text2.StartsWith('"') && text2.EndsWith('"'))
			{
				string text3 = text2;
				text2 = text3.Substring(0, text3.Length - 1);
				_stopProcessing = true;
			}
			if (text2.Length > 3 && _quoted == true && text2.StartsWith('"') && text2.EndsWith('"'))
			{
				string text3 = text2;
				text2 = "*" + text3.Substring(1, text3.Length - 1 - 1).Trim(',', ' ') + "*";
			}
			flag = text.StartsWith('(') || text.StartsWith('*') || ((text.StartsWith(" *") || text.StartsWith(" (")) && text.Length > 1 && text[1] != ' ');
			endsWithAsterisk = text.EndsWith('*') || text.EndsWith(')');
			isInsideRoleplay = _isInsideRoleplay || flag;
			if (flag)
			{
				_isInsideRoleplay = true;
			}
			if (endsWithAsterisk)
			{
				_isInsideRoleplay = false;
			}
			if (text2 != null && text2.Length >= 2 && text2[0] == '*')
			{
				string text4 = text2;
				if (text4[text4.Length - 1] == '*')
				{
					isInsideRoleplay = true;
					flag = true;
					endsWithAsterisk = true;
				}
			}
			if (isInsideRoleplay && preprocessingSettings.MaxWordsInAsterisks > -1)
			{
				if (preprocessingSettings.MaxWordsInAsterisks == 0 || !flag || !endsWithAsterisk)
				{
					return null;
				}
				if (text2.Split(' ', StringSplitOptions.RemoveEmptyEntries).Length > preprocessingSettings.MaxWordsInAsterisks)
				{
					return null;
				}
			}
		}
		else
		{
			isInsideRoleplay = false;
			flag = false;
			endsWithAsterisk = false;
		}
		string text5 = text2;
		bool addLeading = false;
		bool addTrailing = false;
		if (isInsideRoleplay)
		{
			addTrailing = flag && !endsWithAsterisk;
			addLeading = endsWithAsterisk && !flag;
			if (addLeading)
			{
				text5 = "*" + text5;
			}
			if (addTrailing)
			{
				text5 += "*";
			}
		}
		text2 = await postProcessAugmentation.PostProcessTextAsync(ChatMessageRole.Assistant, text5, cancellationToken);
		if (isInsideRoleplay)
		{
			if (addLeading && text2.Length > 0 && text2[0] == '*')
			{
				string text3 = text2;
				text2 = text3.Substring(1, text3.Length - 1);
			}
			if (addTrailing && text2.Length > 0)
			{
				string text6 = text2;
				if (text6[text6.Length - 1] == '*')
				{
					string text3 = text2;
					text2 = text3.Substring(0, text3.Length - 1);
				}
			}
		}
		if (text2.Length == 0)
		{
			return null;
		}
		int cursor = _cursor;
		_cursor += text2.Length;
		if (preprocessingSettings.MaxSentences > 0 && CountsAsSentence(text2, endsWithAsterisk))
		{
			_sentenceCounter++;
			if (_sentenceCounter >= preprocessingSettings.MaxSentences)
			{
				_stopProcessing = true;
			}
		}
		return new TextChunk
		{
			Text = text2,
			StartIndex = cursor,
			EndIndex = _cursor,
			IsNarration = isInsideRoleplay
		};
	}

	private static bool CountsAsSentence(string processed, bool endsWithAsterisk)
	{
		if (processed.Length <= 5)
		{
			return false;
		}
		char c = processed[processed.Length - 1];
		if ((c == ' ' || c == '…') ? true : false)
		{
			return false;
		}
		if (processed.EndsWith("..."))
		{
			return false;
		}
		if (endsWithAsterisk)
		{
			return processed.Substring(0, processed.Length - 1).IsCompleteSentence();
		}
		return processed.IsCompleteSentence();
	}

	private string CropNames(string sentence)
	{
		int num = sentence.IndexOf(':');
		if (num <= -1)
		{
			return sentence;
		}
		string potential = sentence.Substring(0, num).Trim();
		if (!chat.GetCharacters().Any((ICharacterInferenceData c) => c.Name.Equals(potential, StringComparison.OrdinalIgnoreCase)))
		{
			return sentence;
		}
		int num2 = ((num + 1 >= sentence.Length || sentence[num + 1] != ' ') ? 1 : 2);
		string text = sentence;
		int num3 = num + num2;
		sentence = text.Substring(num3, text.Length - num3);
		string text3;
		if (sentence.Length > 0 && sentence.StartsWith('"'))
		{
			if (sentence.Length > 1)
			{
				string text2 = sentence;
				if (text2[text2.Length - 1] == '"')
				{
					text = sentence;
					text3 = text.Substring(1, text.Length - 1 - 1);
					goto IL_00d3;
				}
			}
			text = sentence;
			text3 = text.Substring(1, text.Length - 1);
			goto IL_00d3;
		}
		goto IL_00e1;
		IL_00d3:
		sentence = text3;
		_quoted = true;
		goto IL_00e1;
		IL_00e1:
		return sentence;
	}

	private bool TryPopNext(StringBuilder sb, [NotNullWhen(true)] out string? span)
	{
		span = null;
		if (sb.Length == 0)
		{
			return false;
		}
		int num = 0;
		int num2 = 0;
		bool flag = false;
		while (num < sb.Length)
		{
			char c = sb[num];
			if (c == '"' && _quoted == false)
			{
				flag = !flag;
				num++;
				continue;
			}
			if ((c == '[' || c == '{') ? true : false)
			{
				num2++;
				num++;
				continue;
			}
			if ((c == ']' || c == '}') ? true : false)
			{
				if (num2 > 0)
				{
					num2--;
				}
				num++;
				continue;
			}
			bool flag2 = _isRoleplay;
			if (flag2)
			{
				bool flag3 = ((c == '"' || c == '(' || c == '*') ? true : false);
				flag2 = flag3;
			}
			if (flag2)
			{
				char c2 = c switch
				{
					'*' => '*', 
					'"' => '"', 
					'(' => ')', 
					_ => c, 
				};
				int i;
				for (i = num + 1; i < sb.Length && sb[i] != c2; i++)
				{
				}
				if (i == sb.Length)
				{
					return false;
				}
				bool flag4 = false;
				for (int j = num + 1; j < i; j++)
				{
					if (flag4)
					{
						break;
					}
					flag4 = IsTerminator(sb[j]) || sb[j] == '\n';
				}
				if (!flag4)
				{
					if (num > 0)
					{
						if (sb[num - 1] != ' ')
						{
							return Pop(sb, 0, num, out span);
						}
						if (num > 1 && !char.IsWhiteSpace(sb[num - 2]))
						{
							return Pop(sb, 0, num - 1, out span);
						}
						if (num > 1 && char.IsWhiteSpace(sb[num - 2]))
						{
							return Pop(sb, 0, num, out span);
						}
					}
					return Pop(sb, 0, i + 1, out span);
				}
				num++;
				continue;
			}
			if (c == '\n')
			{
				int k;
				for (k = num; k + 1 < sb.Length && sb[k + 1] == '\n'; k++)
				{
				}
				if (k + 1 == sb.Length)
				{
					return false;
				}
				if (num > 0)
				{
					return Pop(sb, 0, num, out span);
				}
				return Pop(sb, 0, k + 1, out span);
			}
			if (num2 == 0 && !flag && IsTerminator(c))
			{
				int l;
				for (l = num; l + 1 < sb.Length && IsTerminator(sb[l + 1]); l++)
				{
				}
				int num3 = l + 1;
				if (num3 == sb.Length)
				{
					return false;
				}
				if (!IsAcronymDot(sb, num, num3) && !IsHonorificDot(sb, num))
				{
					int num4 = num3;
					if (num4 < sb.Length && sb[num4] == '*')
					{
						bool flag5 = sb[0] == '*' || (sb.Length > 1 && sb[0] == ' ' && sb[1] == '*');
						if (_isInsideRoleplay || flag5)
						{
							num4++;
						}
					}
					if (num4 == sb.Length)
					{
						return false;
					}
					return Pop(sb, 0, num4, out span);
				}
				num = num3;
			}
			else
			{
				num++;
			}
		}
		return false;
	}

	private static bool IsAcronymDot(StringBuilder sb, int i, int after)
	{
		if (sb[i] != '.')
		{
			return false;
		}
		char c = sb[after];
		if (char.IsLetterOrDigit(c) && !char.IsWhiteSpace(c))
		{
			return !IsTerminator(c);
		}
		return false;
	}

	private static bool IsHonorificDot(StringBuilder sb, int i)
	{
		if (sb[i] != '.')
		{
			return false;
		}
		int num = i - 1;
		while (num >= 0 && char.IsLetter(sb[num]))
		{
			num--;
		}
		int num2 = i - (num + 1);
		if ((num2 > 4 || num2 == 0) ? true : false)
		{
			return false;
		}
		string item = sb.ToString(num + 1, num2);
		return _acronyms.Contains(item);
	}

	private static bool Pop(StringBuilder sb, int start, int length, out string span)
	{
		span = sb.ToString(start, length);
		sb.Remove(start, length);
		return true;
	}
}

```

## Voxta.Core.TextGenerationStreaming\SentencePreprocessorFactory.cs
```csharp
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Services.ChatAugmentations;
using Voxta.Abstractions.Services.TextGen;
using Voxta.Abstractions.TextGenerationStreaming;

namespace Voxta.Core.TextGenerationStreaming;

public class SentencePreprocessorFactory(IChatInferenceData chat, IChatPostProcessAugmentation postProcessAugmentation) : ISentencePreprocessorFactory
{
	public ISentencePreprocessor Create(TextGenPreprocessingSettings preprocessingSettings)
	{
		return new SentencePreprocessor(chat, postProcessAugmentation, preprocessingSettings);
	}
}

```

## Voxta.Core.TextGenerationStreaming\TextGenerationResult.cs
```csharp
using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using Voxta.Abstractions.Services.VisionCapture;

namespace Voxta.Core.TextGenerationStreaming;

public record TextGenerationResult(string Output, IReadOnlyList<IImage> Images)
{
	public static readonly TextGenerationResult Empty = new TextGenerationResult("", Array.Empty<IImage>());

	[CompilerGenerated]
	protected TextGenerationResult(TextGenerationResult original)
	{
		Output = original.Output;
		Images = original.Images;
	}
}

```

## Voxta.Core.TextGenerationStreaming\TextGenerationStreamingPipe.cs
```csharp
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Services.ChatAugmentations;
using Voxta.Abstractions.Services.TextGen;
using Voxta.Abstractions.Services.VisionCapture;
using Voxta.Abstractions.TextGenerationStreaming;
using Voxta.Core.Chats.ScopedServices;
using Voxta.Core.Speech;
using Voxta.Model.Shared;

namespace Voxta.Core.TextGenerationStreaming;

public class TextGenerationStreamingPipe(IChatAugmentationsServiceInstance augmentations, ISentencePreprocessorFactory sentencePreprocessorFactory, ILogger<TextGenerationStreamingPipe> logger) : ITextGenerationStreamingPipe
{
	public async ValueTask<TextGenerationStreamingPipeResult> ProcessReplyAsync(IChatInferenceData chat, ICharacterInferenceData character, ISpeechGenerator speechGenerator, ISpeechGeneratorPlaybackQueue playbackQueue, IAsyncEnumerable<LLMOutputToken> reply, Guid messageId, string? replyTo, IReplyChunksHandler replyChunksHandler, TextGenPreprocessingSettings preprocessingSettings, CancellationToken cancellationToken)
	{
		BlockingCollection<TextChunk> audioQueue = new BlockingCollection<TextChunk>();
		using CancellationTokenSource cancellationSource = CancellationTokenSource.CreateLinkedTokenSource(cancellationToken);
		CancellationToken internalCancellationToken = cancellationSource.Token;
		Task audioProcessorTask = Task.Run(async delegate
		{
			await ProcessAudioProcessorQueue(chat.UserId, chat.SessionId, messageId, replyTo, character, chat.Narrator, speechGenerator, audioQueue, playbackQueue, replyChunksHandler, internalCancellationToken);
		}, internalCancellationToken);
		if (chat.GetChatStyle(character.Enabled ? character.ChatStyle : chat.GetMainCharacter().ChatStyle) == ChatStyles.Storytelling)
		{
			preprocessingSettings = preprocessingSettings with
			{
				MaxWordsInAsterisks = -1
			};
		}
		ISentencePreprocessor sentencePreprocessor = sentencePreprocessorFactory.Create(preprocessingSettings);
		List<IImage> images = new List<IImage>();
		bool firstChunk = true;
		try
		{
			await foreach (LLMOutputToken item in reply.WithCancellation(internalCancellationToken))
			{
				if (item.Images != null)
				{
					images.AddRange(item.Images);
				}
				if (item.Thinking)
				{
					replyChunksHandler.Thinking(item.Text);
					continue;
				}
				TextGenerationStreamingPipeResult result;
				await using (IAsyncEnumerator<TextChunk> asyncEnumerator = sentencePreprocessor.ProcessChunk(item.Text, internalCancellationToken).GetAsyncEnumerator())
				{
					TextChunk processed;
					for (; await asyncEnumerator.MoveNextAsync(); audioQueue.Add(processed, internalCancellationToken))
					{
						processed = asyncEnumerator.Current;
						if (!firstChunk)
						{
							continue;
						}
						firstChunk = false;
						if (!(await ShouldRetryAsync(processed, cancellationSource, cancellationToken)))
						{
							continue;
						}
						audioQueue.CompleteAdding();
						result = new TextGenerationStreamingPipeResult("", images, audioProcessorTask);
						goto IL_04c2;
					}
				}
				result = null;
				continue;
				IL_04c2:
				return result;
			}
			TextGenerationStreamingPipeResult textGenerationStreamingPipeResult = null;
			await foreach (TextChunk processed in sentencePreprocessor.Complete(internalCancellationToken))
			{
				if (firstChunk)
				{
					firstChunk = false;
					if (await ShouldRetryAsync(processed, cancellationSource, cancellationToken))
					{
						audioQueue.CompleteAdding();
						return new TextGenerationStreamingPipeResult("", images, audioProcessorTask);
					}
				}
				audioQueue.Add(processed, internalCancellationToken);
			}
			string result2 = sentencePreprocessor.GetResult();
			audioQueue.CompleteAdding();
			return new TextGenerationStreamingPipeResult(result2, images, audioProcessorTask);
		}
		catch (OperationCanceledException)
		{
			audioQueue.CompleteAdding();
			throw new TextGenerationStreamingPipeCanceledException(sentencePreprocessor.GetResult(), audioProcessorTask);
		}
		catch
		{
			audioQueue.CompleteAdding();
			throw;
		}
	}

	private async Task<bool> ShouldRetryAsync(TextChunk processed, CancellationTokenSource cancellationSource, CancellationToken cancellationToken)
	{
		if (!(await augmentations.ShouldRetryGeneratedChunkAsync(processed.Text, cancellationToken)))
		{
			return false;
		}
		try
		{
			await cancellationSource.CancelAsync();
		}
		catch (ObjectDisposedException)
		{
		}
		return true;
	}

	private async Task ProcessAudioProcessorQueue(Guid userId, Guid sessionId, Guid messageId, string? replyTo, ICharacterInferenceData character, ICharacterInferenceData narrator, ISpeechGenerator speechGenerator, BlockingCollection<TextChunk> queue, ISpeechGeneratorPlaybackQueue playbackQueue, IReplyChunksHandler replyChunksHandler, CancellationToken cancellationToken)
	{
		_ = 1;
		try
		{
			ServiceLink link = speechGenerator.Link;
			VoiceInfo narratorVoice = ((narrator.Enabled && link != null && link.ServiceId.HasValue) ? narrator.GetVoice(link.ServiceName, link.ServiceId.Value) : null);
			VoiceInfo characterVoice = ((character.Enabled && link != null && link.ServiceId.HasValue) ? (character.GetVoice(link.ServiceName, link.ServiceId.Value) ?? VoiceInfo.Empty) : null);
			SpeechChunkProcessor processor = new SpeechChunkProcessor(sessionId, userId, messageId, speechGenerator, playbackQueue, augmentations, replyChunksHandler, character, characterVoice, narrator, narratorVoice, character.Culture.Name, null, replyTo);
			processor.Initialize(cancellationToken);
			bool started = false;
			bool hasAnyChunks = false;
			foreach (TextChunk chunk in queue.GetConsumingEnumerable(cancellationToken))
			{
				if (!started)
				{
					await replyChunksHandler.StartAsync();
					started = true;
				}
				await processor.ProcessChunkAsync(chunk, cancellationToken);
				hasAnyChunks |= !string.IsNullOrWhiteSpace(chunk.Text);
			}
			if (hasAnyChunks)
			{
				replyChunksHandler.End();
			}
		}
		catch (OperationCanceledException)
		{
			logger.LogWarning("Audio processing for message {MessageId} was canceled", messageId);
		}
		catch (Exception exception)
		{
			logger.LogError(exception, "Failed to process audio for message {MessageId}", messageId);
		}
		finally
		{
			playbackQueue.Complete();
		}
	}
}

```

## Voxta.Core.TextGenerationStreaming\TextGenerationStreamingPipeCanceledException.cs
```csharp
using System;
using System.Threading.Tasks;

namespace Voxta.Core.TextGenerationStreaming;

public class TextGenerationStreamingPipeCanceledException(string output, Task audioProcessorTask) : OperationCanceledException("Text generation streaming pipe cancelled")
{
	public string Output { get; } = output;

	public Task AudioProcessorTask { get; } = audioProcessorTask;
}

```

## Voxta.Core.TextGenerationStreaming\TextGenerationStreamingPipeResult.cs
```csharp
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using Voxta.Abstractions.Services.VisionCapture;

namespace Voxta.Core.TextGenerationStreaming;

public record TextGenerationStreamingPipeResult : TextGenerationResult
{
	public Task AudioProcessorTask { get; init; }

	public TextGenerationStreamingPipeResult(string Output, IReadOnlyList<IImage> Images, Task AudioProcessorTask)
	{
		this.AudioProcessorTask = AudioProcessorTask;
		base._002Ector(Output, Images);
	}

	[CompilerGenerated]
	public void Deconstruct(out string Output, out IReadOnlyList<IImage> Images, out Task AudioProcessorTask)
	{
		Output = base.Output;
		Images = base.Images;
		AudioProcessorTask = this.AudioProcessorTask;
	}
}

```

## Voxta.Core.TextGenerationStreaming\TokenIsolationHelper.cs
```csharp
using System.Collections.Generic;

namespace Voxta.Core.TextGenerationStreaming;

public static class TokenIsolationHelper
{
	private static readonly HashSet<char> _tokensToIsolatePunctuation = new HashSet<char>
	{
		'.', '!', '?', '‽', '‼', '⁇', '⁈', '⁉', '⸮', '¿',
		'。', '｡', '…'
	};

	private static readonly HashSet<char> _tokensToIsolate = new HashSet<char> { '[', ']', '(', ')', '<', '>', '"', '*', ':', '\n' };

	public static IEnumerable<string> SplitTokenAtoms(string rawChunk)
	{
		if (rawChunk.Length <= 1)
		{
			yield return rawChunk;
			yield break;
		}
		int startIndex = 0;
		for (int i = 0; i < rawChunk.Length; i++)
		{
			bool flag = i == rawChunk.Length - 1;
			char currentChar = rawChunk[i];
			if (_tokensToIsolate.Contains(currentChar))
			{
				if (startIndex < i)
				{
					int num = startIndex;
					yield return rawChunk.Substring(num, i - num);
				}
				yield return currentChar.ToString();
				startIndex = i + 1;
				continue;
			}
			char? c = (flag ? ((char?)null) : new char?(rawChunk[i + 1]));
			if (_tokensToIsolatePunctuation.Contains(currentChar))
			{
				if (!c.HasValue || !char.IsLetterOrDigit(c.Value) || char.IsUpper(c.Value))
				{
					if (i != startIndex)
					{
						yield return rawChunk.Substring(startIndex, i - startIndex);
					}
					if (i + 2 < rawChunk.Length && _tokensToIsolatePunctuation.Contains(rawChunk[i]) && _tokensToIsolatePunctuation.Contains(rawChunk[i + 1]) && _tokensToIsolatePunctuation.Contains(rawChunk[i + 2]))
					{
						int num = i;
						yield return rawChunk.Substring(num, i + 3 - num);
						i += 2;
					}
					else
					{
						yield return currentChar.ToString();
					}
					startIndex = i + 1;
				}
			}
			else if (_tokensToIsolate.Contains(currentChar))
			{
				if (i != startIndex)
				{
					yield return rawChunk.Substring(startIndex, i - startIndex);
				}
				yield return currentChar.ToString();
				startIndex = i + 1;
			}
			else if (flag)
			{
				int num = startIndex;
				yield return rawChunk.Substring(num, rawChunk.Length - num);
			}
		}
	}
}

```

## Voxta.Core.Utils\ChatMessageFactory.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.DependencyInjection;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Repositories;
using Voxta.Abstractions.Tokenizers;
using Voxta.Abstractions.Utils;
using Voxta.Core.Chats.Objects.Chats;
using Voxta.Model.Shared;

namespace Voxta.Core.Utils;

public class ChatMessageFactory(ChatInstance chat, IUnitOfWorkFactory unitOfWorkFactory, IDynamicServiceAccessor<ITokenizer> tokenizerAccessor, IChatTimer chatTimer, TimeProvider timeProvider) : IChatMessageFactory
{
	public Guid CreateMessageId()
	{
		return Guid.NewGuid();
	}

	public Task<ChatMessageData> CreateMessageAsync(Guid messageId, ChatMessageRole role, string text, long? chatTime = null, int? tokens = null, CancellationToken cancellationToken = default(CancellationToken))
	{
		switch (role)
		{
		case ChatMessageRole.Assistant:
			return CreateCharacterMessageAsync(messageId, chat.GetMainCharacter(), text, chatTime, tokens, cancellationToken);
		case ChatMessageRole.User:
			return CreateUserMessageAsync(messageId, chat.User, text, chatTime, cancellationToken);
		case ChatMessageRole.Instructions:
		case ChatMessageRole.Secret:
			return CreateCustomMessageAsync(messageId, role, text, Guid.Empty, null, chatTime, cancellationToken);
		case ChatMessageRole.Event:
		case ChatMessageRole.Note:
			return CreateCustomMessageAsync(messageId, role, text, chat.GetNarrator().Id, chat.GetNarrator().Name, chatTime, cancellationToken);
		case ChatMessageRole.Summary:
			return CreateCustomMessageAsync(messageId, role, text, Guid.Empty, null, chatTime, cancellationToken);
		default:
			throw new InvalidOperationException($"Unexpected message role {role}");
		}
	}

	public Task<ChatMessageData> CreateCharacterMessageAsync(Guid messageId, ICharacterInferenceData character, string text, long? chatTime = null, int? tokens = null, CancellationToken cancellationToken = default(CancellationToken))
	{
		return CreateCustomMessageAsync(messageId, ChatMessageRole.Assistant, text, character.Id, character.Name, chatTime, cancellationToken);
	}

	public Task<ChatMessageData> CreateUserMessageAsync(Guid messageId, UserInstance user, string text, long? chatTime = null, CancellationToken cancellationToken = default(CancellationToken))
	{
		return CreateCustomMessageAsync(messageId, ChatMessageRole.User, text, user.Id, user.Name, chatTime, cancellationToken);
	}

	public async Task<ChatMessageData> CreateCustomMessageAsync(Guid messageId, ChatMessageRole role, string text, Guid? senderId, string? user, long? chatTime = null, CancellationToken cancellationToken = default(CancellationToken))
	{
		int newIndex;
		int newConversationIndex;
		await using (IChatInstanceMessagesReadToken chatInstanceMessagesReadToken = await chat.GetMessagesReadTokenAsync(cancellationToken))
		{
			if (chatInstanceMessagesReadToken.Messages.Count == 0)
			{
				newIndex = 1;
				newConversationIndex = 1;
			}
			else
			{
				IReadOnlyList<ChatMessageData> messages = chatInstanceMessagesReadToken.Messages;
				int index = messages[messages.Count - 1].Index;
				newIndex = index + 1;
				int num = chatInstanceMessagesReadToken.Messages.LastOrDefault((ChatMessageData m) => m.Role.IsConversation())?.ConversationIndex ?? 1;
				newConversationIndex = ((!role.IsConversation()) ? 1 : (num + 1));
			}
		}
		ChatMessageData chatMessageData = new ChatMessageData
		{
			UserId = chat.UserId,
			LocalId = messageId,
			Role = role,
			Timestamp = timeProvider.GetUtcNow(),
			Value = text,
			ChatId = chat.ChatId,
			SenderId = (senderId ?? Guid.Empty),
			User = user
		};
		ChatMessageData chatMessageData2 = chatMessageData;
		chatMessageData2.Tokens = await CountTokensAsync(role, text, cancellationToken);
		chatMessageData.Index = newIndex;
		chatMessageData.ConversationIndex = newConversationIndex;
		chatMessageData.ChatTime = chatTime ?? chatTimer.GetChatTime();
		return chatMessageData;
	}

	public async Task UpdateMessageTextAndTokensAndSaveAsync(ChatMessageData message, string text, CancellationToken cancellationToken)
	{
		if (message.Value != text)
		{
			message.Value = text;
			ChatMessageData chatMessageData = message;
			chatMessageData.Tokens = await CountTokensAsync(message.Role, text, cancellationToken);
		}
		if (!chat.Ephemeral)
		{
			await unitOfWorkFactory.ApplyAndSaveChangesAsync((IUnitOfWork x) => x.ChatMessages.UpdateMessageAsync(message), cancellationToken);
		}
	}

	private async Task<int> CountTokensAsync(ChatMessageRole role, string text, CancellationToken cancellationToken)
	{
		return (!string.IsNullOrEmpty(text) && role.IsSeenByAI()) ? (await tokenizerAccessor.GetCurrent().CountTokensAsync(text, cancellationToken)) : 0;
	}

	private async Task InsertMessageInHistoryAsync(ChatMessageData message, CancellationToken cancellationToken)
	{
		await using IChatInstanceMessagesWriteToken chatInstanceMessagesWriteToken = await chat.GetMessagesWriteTokenAsync(cancellationToken);
		int num;
		if (chatInstanceMessagesWriteToken.Messages.Count <= 0)
		{
			num = 1;
		}
		else
		{
			List<ChatMessageData> messages = chatInstanceMessagesWriteToken.Messages;
			num = messages[messages.Count - 1].Index + 1;
		}
		int index = num;
		int conversationIndex = (chatInstanceMessagesWriteToken.Messages.LastOrDefault((ChatMessageData m) => m.Role.IsConversation())?.ConversationIndex ?? 0) + 1;
		message.Index = index;
		message.ConversationIndex = conversationIndex;
		chatInstanceMessagesWriteToken.Messages.Add(message);
	}

	public async Task UpdateMessageAsync(ChatMessageData message, CancellationToken cancellationToken)
	{
		cancellationToken.ThrowIfCancellationRequested();
		if (!chat.Ephemeral)
		{
			await unitOfWorkFactory.ApplyAndSaveChangesAsync((IUnitOfWork x) => x.ChatMessages.UpdateMessageAsync(message), cancellationToken);
		}
	}

	public async Task SaveMessageAsync(ChatMessageData message, CancellationToken cancellationToken)
	{
		cancellationToken.ThrowIfCancellationRequested();
		if (!chat.Ephemeral)
		{
			await unitOfWorkFactory.ApplyAndSaveChangesAsync((IUnitOfWork x) => x.ChatMessages.AddMessageAsync(message), cancellationToken);
		}
	}

	public async Task InsertMessageInHistoryAndSaveAsync(ChatMessageData message, CancellationToken cancellationToken)
	{
		await InsertMessageInHistoryAsync(message, cancellationToken);
		await SaveMessageAsync(message, cancellationToken);
	}
}

```

## Voxta.Core.Utils\ChatTimer.cs
```csharp
using System.Diagnostics;
using Voxta.Abstractions.Utils;

namespace Voxta.Core.Utils;

public class ChatTimer : IChatTimer
{
	private long _startTime;

	private readonly Stopwatch _stopwatch = new Stopwatch();

	public long GetChatTime()
	{
		return _stopwatch.ElapsedMilliseconds + _startTime;
	}

	public void SetStartTime(long startTime)
	{
		_startTime = startTime;
		_stopwatch.Start();
	}

	public void Pause()
	{
		_stopwatch.Stop();
	}

	public void Resume()
	{
		_stopwatch.Start();
	}
}

```

## Voxta.Core.Utils\CommonFolders.cs
```csharp
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using Voxta.Abstractions.Utils;

namespace Voxta.Core.Utils;

public class CommonFolders : ICommonFolders
{
	public string Resources => "Resources";

	public string Data => "Data";

	public IEnumerable<string> GetCommonFolder(CultureInfo culture, GetCommonFolderDelegate getFolder, bool allowEnglishFallback)
	{
		string[] source = new string[2] { Data, Resources };
		string[] languages = ((!allowEnglishFallback) ? new string[2] { culture.Name, culture.TwoLetterISOLanguageName } : new string[3] { culture.Name, culture.TwoLetterISOLanguageName, "en" });
		return source.SelectMany((string x) => from l in languages.Distinct()
			select getFolder(x, l));
	}
}

```

## Voxta.Core.Utils\DeleteLogicUtil.cs
```csharp
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Assets;
using Voxta.Abstractions.Caching;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Repositories;
using Voxta.Model.Shared;

namespace Voxta.Core.Utils;

public class DeleteLogicUtil(IResourceAssetsManager resourceAssetsManager, IProfileSettingsCache profileSettingsCache, IServicesConfigurationsSetCache servicesConfigurationsSetCache, IUserCache userCache, ILogger<DeleteLogicUtil> logger) : IDeleteLogicUtil
{
	public Task DeleteAsync<T>(IUnitOfWork unitOfWork, Guid userId, Guid resourceId)
	{
		Type typeFromHandle = typeof(T);
		if ((object)typeFromHandle != null)
		{
			if (typeFromHandle == typeof(Character))
			{
				return DeleteCharacter(unitOfWork, userId, resourceId);
			}
			if (typeFromHandle == typeof(Scenario))
			{
				return DeleteScenario(unitOfWork, userId, resourceId);
			}
			if (typeFromHandle == typeof(MemoryBook))
			{
				return DeleteMemoryBook(unitOfWork, userId, resourceId);
			}
			if (typeFromHandle == typeof(Chat))
			{
				return DeleteChat(unitOfWork, userId, resourceId);
			}
			if (typeFromHandle == typeof(Collection))
			{
				return DeleteCollection(unitOfWork, userId, resourceId);
			}
			if (typeFromHandle == typeof(ContentPackage))
			{
				return DeleteContentPackage(unitOfWork, userId, resourceId);
			}
		}
		throw new InvalidOperationException("Unsupported type: " + typeof(T).Name);
	}

	public async Task DeleteCharacter(IUnitOfWork unitOfWork, Guid userId, Guid characterId)
	{
		await DeletePrivateMemoryBooks(unitOfWork, userId, ChatResourceKind.Character, characterId);
		ChatItem[] array = await unitOfWork.Chats.GetItemsByCharacterAsync(userId, characterId, CancellationToken.None);
		foreach (ChatItem chatItem in array)
		{
			if (chatItem.Characters.Count <= 1)
			{
				await DeleteChat(unitOfWork, userId, chatItem.Id);
			}
		}
		resourceAssetsManager.DeleteContainer<Character>(userId, characterId);
		await unitOfWork.Characters.DeleteAsync(userId, characterId);
		logger.LogWarning("Deleted character {CharacterId}", characterId);
	}

	public async Task DeleteScenario(IUnitOfWork unitOfWork, Guid userId, Guid scenarioId)
	{
		ChatItem[] array = await unitOfWork.Chats.GetItemsByScenarioAsync(userId, scenarioId, CancellationToken.None);
		foreach (ChatItem chatItem in array)
		{
			await DeleteChat(unitOfWork, userId, chatItem.Id);
		}
		resourceAssetsManager.DeleteContainer<Scenario>(userId, scenarioId);
		await unitOfWork.Scenarios.DeleteAsync(userId, scenarioId);
		logger.LogWarning("Deleted scenario {ScenarioId}", scenarioId);
	}

	public async Task DeleteMemoryBook(IUnitOfWork unitOfWork, Guid userId, Guid memoryBookId)
	{
		resourceAssetsManager.DeleteContainer<MemoryBook>(userId, memoryBookId);
		await unitOfWork.MemoryBooks.DeleteAsync(userId, memoryBookId);
		logger.LogWarning("Deleted memory book {MemoryBookId}", memoryBookId);
	}

	public async Task DeleteFolder(IUnitOfWork unitOfWork, Guid userId, Guid folderId)
	{
		_003C_003Ey__InlineArray5<Task> buffer = default(_003C_003Ey__InlineArray5<Task>);
		global::_003CPrivateImplementationDetails_003E.InlineArrayElementRef<_003C_003Ey__InlineArray5<Task>, Task>(ref buffer, 0) = unitOfWork.Characters.ExecuteChangeFolderAsync(userId, folderId, null, default(CancellationToken));
		global::_003CPrivateImplementationDetails_003E.InlineArrayElementRef<_003C_003Ey__InlineArray5<Task>, Task>(ref buffer, 1) = unitOfWork.Scenarios.ExecuteChangeFolderAsync(userId, folderId, null, default(CancellationToken));
		global::_003CPrivateImplementationDetails_003E.InlineArrayElementRef<_003C_003Ey__InlineArray5<Task>, Task>(ref buffer, 2) = unitOfWork.MemoryBooks.ExecuteChangeFolderAsync(userId, folderId, null, default(CancellationToken));
		global::_003CPrivateImplementationDetails_003E.InlineArrayElementRef<_003C_003Ey__InlineArray5<Task>, Task>(ref buffer, 3) = unitOfWork.Collections.ExecuteChangeFolderAsync(userId, folderId, null, default(CancellationToken));
		global::_003CPrivateImplementationDetails_003E.InlineArrayElementRef<_003C_003Ey__InlineArray5<Task>, Task>(ref buffer, 4) = unitOfWork.ContentPackages.ExecuteChangeFolderAsync(userId, folderId, null, default(CancellationToken));
		await Task.WhenAll(global::_003CPrivateImplementationDetails_003E.InlineArrayAsReadOnlySpan<_003C_003Ey__InlineArray5<Task>, Task>(in buffer, 5));
		resourceAssetsManager.DeleteContainer<Folder>(userId, folderId);
		await unitOfWork.Folders.DeleteAsync(userId, folderId);
		logger.LogWarning("Deleted folder {FolderId}", folderId);
	}

	public async Task DeleteChat(IUnitOfWork unitOfWork, Guid userId, Guid chatId)
	{
		resourceAssetsManager.DeleteContainer<Chat>(userId, chatId);
		await DeletePrivateMemoryBooks(unitOfWork, userId, ChatResourceKind.Chat, chatId);
		await unitOfWork.ChatMessages.DeleteAllChatMessagesAsync(userId, chatId);
		await unitOfWork.ChatDocuments.DeleteAllChatDocumentsAsync(userId, chatId);
		await unitOfWork.Chats.DeleteAsync(userId, chatId);
		logger.LogWarning("Deleted chat {ChatId}", chatId);
	}

	public async Task DeleteCollection(IUnitOfWork unitOfWork, Guid userId, Guid packageId)
	{
		Collection collection = await unitOfWork.Collections.GetByIdAsync(userId, packageId, CancellationToken.None);
		if (collection == null)
		{
			throw new InvalidOperationException("Collection not found");
		}
		resourceAssetsManager.DeleteContainer<Collection>(userId, packageId);
		await unitOfWork.Collections.DeleteAsync(collection);
	}

	public async Task DeleteContentPackage(IUnitOfWork unitOfWork, Guid userId, Guid packageId)
	{
		ContentPackage package = await unitOfWork.ContentPackages.GetByIdAsync(userId, packageId, CancellationToken.None);
		if (package == null)
		{
			throw new InvalidOperationException("Content package not found");
		}
		foreach (CharacterItem item in (await unitOfWork.Characters.GetItemsByUserAsync(package.UserId, new GetCharactersQueryParameters
		{
			PackageId = packageId
		}, CancellationToken.None)).Where((CharacterItem c) => c.PackageId == package.LocalId))
		{
			await DeleteCharacter(unitOfWork, userId, item.Id);
		}
		foreach (ScenarioItem item2 in (await unitOfWork.Scenarios.GetItemsByUserAsync(package.UserId, new GetScenariosQueryParameters
		{
			PackageId = packageId
		}, CancellationToken.None)).Where((ScenarioItem c) => c.PackageId == package.LocalId))
		{
			await DeleteScenario(unitOfWork, userId, item2.Id);
		}
		foreach (MemoryBookItem item3 in (await unitOfWork.MemoryBooks.GetItemsByUserAsync(package.UserId, new GetMemoryBooksQueryParameters
		{
			PackageId = packageId
		}, CancellationToken.None)).Where((MemoryBookItem c) => c.PackageId == package.LocalId))
		{
			await DeleteMemoryBook(unitOfWork, userId, item3.Id);
		}
		foreach (CollectionItem item4 in (await unitOfWork.Collections.GetItemsByUserAsync(package.UserId, new GetCollectionsQueryParameters
		{
			PackageId = packageId
		}, CancellationToken.None)).Where((CollectionItem c) => c.PackageId == package.LocalId))
		{
			await DeleteCollection(unitOfWork, userId, item4.Id);
		}
		resourceAssetsManager.DeleteContainer<ContentPackage>(userId, packageId);
		await unitOfWork.ContentPackages.DeleteAsync(package);
	}

	public async Task DeleteUserResources(IUnitOfWork unitOfWork, Guid userId)
	{
		await unitOfWork.ApiKeys.DeleteAllUserKeysAsync(userId);
		CollectionItem[] array = await unitOfWork.Collections.GetItemsByUserAsync(userId, GetCollectionsQueryParameters.All, CancellationToken.None);
		foreach (CollectionItem collectionItem in array)
		{
			await DeleteCollection(unitOfWork, userId, collectionItem.Id);
		}
		ChatItem[] array2 = await unitOfWork.Chats.GetItemsByUserAsync(userId, CancellationToken.None);
		foreach (ChatItem chatItem in array2)
		{
			await DeleteChat(unitOfWork, userId, chatItem.Id);
		}
		ContentPackageItem[] array3 = await unitOfWork.ContentPackages.GetItemsByUserAsync(userId, CancellationToken.None);
		foreach (ContentPackageItem contentPackageItem in array3)
		{
			await DeleteContentPackage(unitOfWork, userId, contentPackageItem.Id);
		}
		ScenarioItem[] array4 = await unitOfWork.Scenarios.GetItemsByUserAsync(userId, GetScenariosQueryParameters.All, CancellationToken.None);
		foreach (ScenarioItem scenarioItem in array4)
		{
			await DeleteScenario(unitOfWork, userId, scenarioItem.Id);
		}
		CharacterItem[] array5 = await unitOfWork.Characters.GetItemsByUserAsync(userId, GetCharactersQueryParameters.All, CancellationToken.None);
		foreach (CharacterItem characterItem in array5)
		{
			await DeleteCharacter(unitOfWork, userId, characterItem.Id);
		}
		MemoryBookItem[] array6 = await unitOfWork.MemoryBooks.GetItemsByUserAsync(userId, GetMemoryBooksQueryParameters.All, CancellationToken.None);
		foreach (MemoryBookItem memoryBookItem in array6)
		{
			await DeleteMemoryBook(unitOfWork, userId, memoryBookItem.Id);
		}
		Folder[] array7 = await unitOfWork.Folders.GetAllForUserAsync(userId, CancellationToken.None);
		foreach (Folder folder in array7)
		{
			await DeleteFolder(unitOfWork, userId, folder.LocalId);
		}
		ServiceSettings[] array8 = await unitOfWork.ServiceSettings.GetManyByUserAsync(userId, CancellationToken.None);
		foreach (ServiceSettings model in array8)
		{
			await unitOfWork.ServiceSettings.DeleteAsync(model);
		}
		Module[] array9 = await unitOfWork.Modules.GetManyByUserAsync(userId, CancellationToken.None);
		foreach (Module model2 in array9)
		{
			await unitOfWork.Modules.DeleteAsync(model2);
		}
		AppItem[] array10 = await unitOfWork.Apps.GetItemsByUserAsync(userId, CancellationToken.None);
		foreach (AppItem appItem in array10)
		{
			await unitOfWork.Apps.DeleteAsync(new App
			{
				UserId = userId,
				LocalId = appItem.Id,
				ClientId = null
			});
		}
		ProfileSettings[] array11 = await unitOfWork.Profiles.GetProfilesByUserAsync(userId, CancellationToken.None);
		foreach (ProfileSettings profileSettings in array11)
		{
			profileSettingsCache.Clear(userId, profileSettings.LocalId);
			await unitOfWork.Profiles.DeleteAsync(userId, profileSettings.LocalId);
		}
		ServicesConfigurationsSet[] array12 = await unitOfWork.ServicesConfigurationsSets.GetAllForUserAsync(userId, CancellationToken.None);
		foreach (ServicesConfigurationsSet servicesConfigurationsSet in array12)
		{
			servicesConfigurationsSetCache.Clear(userId, servicesConfigurationsSet.LocalId);
			await unitOfWork.ServicesConfigurationsSets.DeleteAsync(servicesConfigurationsSet);
		}
		userCache.ClearUser(userId);
		resourceAssetsManager.DeleteUser(userId);
	}

	private static async Task DeletePrivateMemoryBooks(IUnitOfWork unitOfWork, Guid userId, ChatResourceKind kind, Guid localId)
	{
		MemoryBook[] array = await unitOfWork.MemoryBooks.GetAllByOwner(userId, kind, localId, CancellationToken.None);
		foreach (MemoryBook model in array)
		{
			await unitOfWork.MemoryBooks.DeleteAsync(model);
		}
	}

	public async Task DeleteMessage(IUnitOfWork unitOfWork, ChatMessageData message)
	{
		IResourceUserAssetsContainer resourceUserAssetsContainer = resourceAssetsManager.ManageContainer<Chat>(message.UserId, message.ChatId).ManageAssets();
		if (message.Attachments != null)
		{
			ChatMessageDataAttachment[] attachments = message.Attachments;
			foreach (ChatMessageDataAttachment chatMessageDataAttachment in attachments)
			{
				resourceUserAssetsContainer.GetAssetFullPath(chatMessageDataAttachment.GetAssetPath(message.ChatId));
			}
		}
		await unitOfWork.ChatMessages.DeleteMessageAsync(message.UserId, message.LocalId);
	}
}

```

## Voxta.Core.Utils\DomainRateLimiter.cs
```csharp
using System;
using System.Collections.Concurrent;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Diagnostics;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Utils;

namespace Voxta.Core.Utils;

public class DomainRateLimiter(IPerformanceMetrics performanceMetrics) : IDomainRateLimiter
{
	private class DomainRateLimiterLock(DomainRateLimiterConfig config) : IDisposable
	{
		private bool _disposed;

		public void Dispose()
		{
			if (!_disposed)
			{
				_disposed = true;
				config.Release();
			}
		}
	}

	private class NullDomainRateLimiterLock : IDisposable
	{
		public void Dispose()
		{
		}
	}

	private readonly ConcurrentDictionary<string, DomainRateLimiterConfig> _domainLocks = new ConcurrentDictionary<string, DomainRateLimiterConfig>();

	public async Task<IDisposable> LockAsync(IAuthenticationContext auth, string? domain, int maxConcurrentLocks, int releaseDelay = 0, CancellationToken cancellationToken = default(CancellationToken))
	{
		if (string.IsNullOrEmpty(domain))
		{
			return new NullDomainRateLimiterLock();
		}
		DomainRateLimiterConfig locker = _domainLocks.GetOrAdd(domain, (string _) => new DomainRateLimiterConfig(maxConcurrentLocks, releaseDelay));
		IUserPerformanceMetrics userPerformanceMetrics = performanceMetrics.OfUser(auth.UserId);
		IPerformanceMetricsTracker metrics = userPerformanceMetrics.Start("DomainRateLimiter (" + domain + ")");
		await locker.WaitAsync(cancellationToken);
		metrics.Done();
		return new DomainRateLimiterLock(locker);
	}
}

```

## Voxta.Core.Utils\DomainRateLimiterConfig.cs
```csharp
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Core.Utils;

public class DomainRateLimiterConfig
{
	private readonly SemaphoreSlim _semaphore;

	public DomainRateLimiterConfig(int maxConcurrentLocks, int releaseDelay)
	{
		_003CreleaseDelay_003EP = releaseDelay;
		_semaphore = new SemaphoreSlim(maxConcurrentLocks, maxConcurrentLocks);
		base._002Ector();
	}

	public Task WaitAsync(CancellationToken cancellationToken)
	{
		return _semaphore.WaitAsync(cancellationToken);
	}

	public void Release()
	{
		if (_003CreleaseDelay_003EP <= 0)
		{
			_semaphore.Release();
			return;
		}
		Task.Delay(_003CreleaseDelay_003EP).ContinueWith((Task _) => _semaphore.Release());
	}
}

```

## Voxta.Core.Utils\IDeleteLogicUtil.cs
```csharp
using System;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Repositories;

namespace Voxta.Core.Utils;

public interface IDeleteLogicUtil
{
	Task DeleteAsync<T>(IUnitOfWork unitOfWork, Guid userId, Guid resourceId);

	Task DeleteFolder(IUnitOfWork unitOfWork, Guid userId, Guid folderId);

	Task DeleteCharacter(IUnitOfWork unitOfWork, Guid userId, Guid characterId);

	Task DeleteScenario(IUnitOfWork unitOfWork, Guid userId, Guid scenarioId);

	Task DeleteMemoryBook(IUnitOfWork unitOfWork, Guid userId, Guid memoryBookId);

	Task DeleteCollection(IUnitOfWork unitOfWork, Guid userId, Guid packageId);

	Task DeleteContentPackage(IUnitOfWork unitOfWork, Guid userId, Guid packageId);

	Task DeleteChat(IUnitOfWork unitOfWork, Guid userId, Guid chatId);

	Task DeleteUserResources(IUnitOfWork unitOfWork, Guid userId);

	Task DeleteMessage(IUnitOfWork unitOfWork, ChatMessageData message);
}

```

## Voxta.Core.Utils\InterruptionsUtil.cs
```csharp
using System;
using Voxta.Common;

namespace Voxta.Core.Utils;

public abstract class InterruptionsUtil
{
	public static string GetInterruptedText(string message, int startIndex, int endIndex, double speechInterruptionRatio)
	{
		int num = endIndex - startIndex;
		int num2 = ((num > 1) ? Math.Clamp((int)Math.Round((double)num * speechInterruptionRatio), 0, num) : 0);
		int num3 = startIndex + num2;
		if (num3 >= message.Length - 1)
		{
			return message;
		}
		int num4 = message.IndexOf(' ', num3);
		if (num4 == -1)
		{
			return message;
		}
		if (num4 >= message.Length)
		{
			return message;
		}
		string text = message.Substring(0, num4).Trim();
		if (text.EndsWith(','))
		{
			string text2 = text;
			text = text2.Substring(0, text2.Length - 1);
		}
		if (!text.IsCompleteSentence())
		{
			text += "...";
		}
		return text;
	}
}

```

## Voxta.Core.Utils\RequiredFieldsChangesUtil.cs
```csharp
using System.Collections.Generic;
using System.Linq;

namespace Voxta.Core.Utils;

public static class RequiredFieldsChangesUtil
{
	public static bool RequiresReload(string[] fieldsRequiringReload, Dictionary<string, string>? before, Dictionary<string, string>? after)
	{
		if (fieldsRequiringReload.Length == 0)
		{
			return false;
		}
		if (before == null && after == null)
		{
			return false;
		}
		if (before == null || after == null)
		{
			return true;
		}
		if (before.Count == 0 && after.Count == 0)
		{
			return false;
		}
		return fieldsRequiringReload.Any((string field) => !object.Equals(before.GetValueOrDefault(field), after.GetValueOrDefault(field)));
	}
}

```

## Voxta.Core.Utils\Sanitizer.cs
```csharp
using System.CodeDom.Compiler;
using System.Text.RegularExpressions;
using System.Text.RegularExpressions.Generated;
using Voxta.Abstractions.Utils;

namespace Voxta.Core.Utils;

public class Sanitizer : ISanitizer
{
	[GeneratedRegex("[\\x00-\\x09\\x0B-\\x0C\\x0E-\\x1F]+", RegexOptions.CultureInvariant)]
	[GeneratedCode("System.Text.RegularExpressions.Generator", "9.0.12.41916")]
	private static Regex RemoveUnprintableCharacters()
	{
		return _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__RemoveUnprintableCharacters_4.Instance;
	}

	[GeneratedRegex("\\*.+_.+\\*", RegexOptions.CultureInvariant)]
	[GeneratedCode("System.Text.RegularExpressions.Generator", "9.0.12.41916")]
	private static Regex RemoveTextInAsterisksWithUnderscore()
	{
		return _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__RemoveTextInAsterisksWithUnderscore_5.Instance;
	}

	[GeneratedRegex("^[a-z]+: ", RegexOptions.IgnoreCase)]
	[GeneratedCode("System.Text.RegularExpressions.Generator", "9.0.12.41916")]
	private static Regex RemoveNamePrefix()
	{
		return _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__RemoveNamePrefix_6.Instance;
	}

	[GeneratedRegex("\\([^)]+\\)", RegexOptions.CultureInvariant)]
	[GeneratedCode("System.Text.RegularExpressions.Generator", "9.0.12.41916")]
	private static Regex RemoveProbableEmotes()
	{
		return _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__RemoveProbableEmotes_7.Instance;
	}

	[GeneratedRegex("\\[[^\\]]+$", RegexOptions.CultureInvariant)]
	[GeneratedCode("System.Text.RegularExpressions.Generator", "9.0.12.41916")]
	private static Regex RemoveUnfinishedNotes()
	{
		return _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__RemoveUnfinishedNotes_8.Instance;
	}

	[GeneratedRegex("(\\u00a9|\\u00ae|\\ud83c[\\ud000-\\udfff]|\\ud83d[\\ud000-\\udfff]|\\ud83e[\\ud000-\\udfff])", RegexOptions.CultureInvariant)]
	[GeneratedCode("System.Text.RegularExpressions.Generator", "9.0.12.41916")]
	private static Regex RemoveEmojis()
	{
		return _003CRegexGenerator_g_003EF5BC9674B6A9C4DCE01863B5EB44CBC92EC19CE7364405F71AB77AA39970985D9__RemoveEmojis_9.Instance;
	}

	public string SanitizeForModel(string message, int maxWordsInAsterisks)
	{
		if (message == "")
		{
			return "";
		}
		string text = message;
		if (text.StartsWith("1) "))
		{
			string text2 = text;
			text = text2.Substring(2, text2.Length - 2);
		}
		if (text.StartsWith("- "))
		{
			string text2 = text;
			text = text2.Substring(1, text2.Length - 1);
		}
		text = RemoveTextInAsterisksWithUnderscore().Replace(text, "");
		text = RemoveNamePrefix().Replace(text, "");
		text = RemoveProbableEmotes().Replace(text, "");
		text = RemoveUnfinishedNotes().Replace(text, "");
		text = RemoveEmojis().Replace(text, "");
		text = RemoveUnprintableCharacters().Replace(text, "");
		if (maxWordsInAsterisks >= 0 && maxWordsInAsterisks != int.MaxValue)
		{
			text = new Regex("\\* ?(?:[^* ]+ ){" + maxWordsInAsterisks + ",}[^* ]+ ?\\*").Replace(text, "");
		}
		text = text.Trim(' ');
		if (text == "")
		{
			return "";
		}
		if (text.Length > 3 && text[0] == '"')
		{
			string text3 = text;
			if (text3[text3.Length - 1] == '"')
			{
				string text2 = text;
				text = text2.Substring(1, text2.Length - 1 - 1);
			}
		}
		if (text.Length > 3 && text[0] == '\'')
		{
			string text4 = text;
			if (text4[text4.Length - 1] == '\'')
			{
				string text2 = text;
				text = text2.Substring(1, text2.Length - 1 - 1);
			}
		}
		return text;
	}
}

```

## Voxta.Core.Utils\UserInteractionRequestsManager.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Utils;

namespace Voxta.Core.Utils;

public class UserInteractionRequestsManager(ILogger<UserInteractionRequestsManager> logger) : IUserInteractionRequestsManager
{
	private readonly SemaphoreSlim _semaphore = new SemaphoreSlim(1, 1);

	private readonly Dictionary<Guid, UserInteractionRequestToken> _pending = new Dictionary<Guid, UserInteractionRequestToken>();

	public async Task<IUserInteractionRequestToken> RequestUserInteractionAsync(CancellationToken cancellationToken)
	{
		TaskCompletionSource<UserInteractionRequestResult> tcs = new TaskCompletionSource<UserInteractionRequestResult>(TaskCreationOptions.RunContinuationsAsynchronously);
		Guid id = Guid.NewGuid();
		UserInteractionRequestToken token = new UserInteractionRequestToken(id, tcs, this, logger);
		await _semaphore.WaitAsync(cancellationToken).ConfigureAwait(continueOnCapturedContext: false);
		try
		{
			_pending.Add(id, token);
		}
		finally
		{
			_semaphore.Release();
		}
		if (cancellationToken.CanBeCanceled)
		{
			cancellationToken.Register(delegate
			{
				token.Cancel();
			});
		}
		return token;
	}

	public async Task FulfillUserInteractionRequestAsync(Guid id, UserInteractionRequestResult result, CancellationToken cancellationToken)
	{
		await _semaphore.WaitAsync(cancellationToken);
		UserInteractionRequestToken value;
		try
		{
			if (!_pending.Remove(id, out value))
			{
				throw new InvalidOperationException($"No pending user interaction request with given id {id}");
			}
		}
		finally
		{
			_semaphore.Release();
		}
		value.TrySetResult(result);
	}

	internal void Cancel(Guid id)
	{
		_semaphore.Wait();
		UserInteractionRequestToken value;
		try
		{
			if (!_pending.Remove(id, out value))
			{
				return;
			}
		}
		finally
		{
			_semaphore.Release();
		}
		value.TrySetCanceled();
	}
}

```

## Voxta.Core.Utils\UserInteractionRequestToken.cs
```csharp
using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Utils;

namespace Voxta.Core.Utils;

public class UserInteractionRequestToken : IUserInteractionRequestToken, IAsyncDisposable
{
	public Guid RequestId { get; }

	public Task<UserInteractionRequestResult> Task => _003Ctcs_003EP.Task;

	public UserInteractionRequestToken(Guid requestId, TaskCompletionSource<UserInteractionRequestResult> tcs, UserInteractionRequestsManager manager, ILogger logger)
	{
		_003Ctcs_003EP = tcs;
		_003Cmanager_003EP = manager;
		_003Clogger_003EP = logger;
		RequestId = requestId;
		base._002Ector();
	}

	public void Cancel()
	{
		if (!_003Ctcs_003EP.Task.IsCompleted)
		{
			_003Cmanager_003EP.Cancel(RequestId);
		}
	}

	internal bool TrySetResult(UserInteractionRequestResult result)
	{
		return _003Ctcs_003EP.TrySetResult(result);
	}

	internal bool TrySetCanceled()
	{
		return _003Ctcs_003EP.TrySetCanceled();
	}

	public async ValueTask DisposeAsync()
	{
		Cancel();
		try
		{
			await Task;
		}
		catch (OperationCanceledException)
		{
		}
		catch
		{
			_003Clogger_003EP.LogWarning("User interaction request {RequestId} was cancelled or faulted before being fulfilled", RequestId);
		}
	}
}

```

## Voxta.Core\ApiVersion.cs
```csharp
namespace Voxta.Core;

public static class ApiVersion
{
	public const string Current = "2025-08";
}

```

## Voxta.Core\VoxtaVersion.cs
```csharp
using System.Reflection;
using Voxta.Abstractions;

namespace Voxta.Core;

public class VoxtaVersion : IVoxtaVersion
{
	public string Current { get; } = GetCurrentVersion();

	private static string GetCurrentVersion()
	{
		try
		{
			return (typeof(VoxtaVersion).Assembly.GetCustomAttribute<AssemblyInformationalVersionAttribute>()?.InformationalVersion ?? "0.0.0").Split('+', 2)[0];
		}
		catch
		{
			return "0.0.0";
		}
	}
}

```

