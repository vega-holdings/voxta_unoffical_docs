# Voxta.Abstractions source dump

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
[assembly: AssemblyTitle("Voxta.Abstractions")]
[assembly: AssemblyMetadata("RepositoryUrl", "https://github.com/voxta-ai/voxta-server")]
[assembly: AssemblyVersion("1.0.0.0")]
[module: RefSafetyRules(11)]

```

## System.Text.RegularExpressions.Generated\-RegexGenerator_g-FB60E32FC1EBF06439A8EB2F6C2062FEBFBE21A84F441808E3243F14AA0739387__FlagValidation_0.cs
```csharp
using System.CodeDom.Compiler;

namespace System.Text.RegularExpressions.Generated;

[GeneratedCode("System.Text.RegularExpressions.Generator", "9.0.12.41916")]
internal sealed class _003CRegexGenerator_g_003EFB60E32FC1EBF06439A8EB2F6C2062FEBFBE21A84F441808E3243F14AA0739387__FlagValidation_0 : Regex
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
				if (num <= inputSpan.Length - 2 && num == 0)
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
				ReadOnlySpan<char> readOnlySpan = inputSpan.Slice(num);
				if (num != 0)
				{
					return false;
				}
				char c;
				if (readOnlySpan.IsEmpty || (((c = readOnlySpan[0]) < '\u0080') ? (("\0\0\0\0\ufffe蟿\ufffe߿"[(int)c >> 4] & (1 << (c & 0xF))) == 0) : (!RegexRunner.CharInClass(c, "\0\b\0A[_`a{KÅ"))))
				{
					return false;
				}
				int num2 = readOnlySpan.Slice(1).IndexOfAnyExcept(_003CRegexGenerator_g_003EFB60E32FC1EBF06439A8EB2F6C2062FEBFBE21A84F441808E3243F14AA0739387__Utilities.s_nonAscii_9FA52D3BAECB644578472387D5284CC6F36F408FEB88A04BA674CE14F24D2386);
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
				if (2 < readOnlySpan.Length || (1 < readOnlySpan.Length && readOnlySpan[1] != '\n'))
				{
					return false;
				}
				Capture(0, start, runtextpos = num + 1);
				return true;
			}
		}

		protected override RegexRunner CreateInstance()
		{
			return new Runner();
		}
	}

	internal static readonly _003CRegexGenerator_g_003EFB60E32FC1EBF06439A8EB2F6C2062FEBFBE21A84F441808E3243F14AA0739387__FlagValidation_0 Instance = new _003CRegexGenerator_g_003EFB60E32FC1EBF06439A8EB2F6C2062FEBFBE21A84F441808E3243F14AA0739387__FlagValidation_0();

	private _003CRegexGenerator_g_003EFB60E32FC1EBF06439A8EB2F6C2062FEBFBE21A84F441808E3243F14AA0739387__FlagValidation_0()
	{
		pattern = "^[a-z_][a-z0-9_]+$";
		roptions = RegexOptions.IgnoreCase | RegexOptions.CultureInvariant;
		Regex.ValidateMatchTimeout(_003CRegexGenerator_g_003EFB60E32FC1EBF06439A8EB2F6C2062FEBFBE21A84F441808E3243F14AA0739387__Utilities.s_defaultTimeout);
		internalMatchTimeout = _003CRegexGenerator_g_003EFB60E32FC1EBF06439A8EB2F6C2062FEBFBE21A84F441808E3243F14AA0739387__Utilities.s_defaultTimeout;
		factory = new RunnerFactory();
		capsize = 1;
	}
}

```

## System.Text.RegularExpressions.Generated\-RegexGenerator_g-FB60E32FC1EBF06439A8EB2F6C2062FEBFBE21A84F441808E3243F14AA0739387__Utilities.cs
```csharp
using System.Buffers;
using System.CodeDom.Compiler;

namespace System.Text.RegularExpressions.Generated;

[GeneratedCode("System.Text.RegularExpressions.Generator", "9.0.12.41916")]
internal static class _003CRegexGenerator_g_003EFB60E32FC1EBF06439A8EB2F6C2062FEBFBE21A84F441808E3243F14AA0739387__Utilities
{
	internal static readonly TimeSpan s_defaultTimeout = ((AppContext.GetData("REGEX_DEFAULT_MATCH_TIMEOUT") is TimeSpan timeSpan) ? timeSpan : Regex.InfiniteMatchTimeout);

	internal static readonly bool s_hasTimeout = s_defaultTimeout != Regex.InfiniteMatchTimeout;

	internal static readonly SearchValues<char> s_nonAscii_9FA52D3BAECB644578472387D5284CC6F36F408FEB88A04BA674CE14F24D2386 = SearchValues.Create("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyzK");
}

```

## Voxta.Abstractions.Assets\IResourceAssetsContainer.cs
```csharp
using System.IO;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Imaging;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Assets;

public interface IResourceAssetsContainer
{
	IResourceUserAssetsContainer ManageAssets();

	string GetThumbnailPath(ImageInfo image);

	string GetThumbnailPath(int width, int height, ResizeMode mode, string contentType);

	Task<ImageInfo> SaveThumbnail(Stream stream, string contentType, CancellationToken cancellationToken);

	void DeleteThumbnail();

	ImageInfo? CopyThumbnailTo(ImageInfo? sourceImage, IResourceAssetsContainer target);
}

```

## Voxta.Abstractions.Assets\IResourceAssetsManager.cs
```csharp
using System;

namespace Voxta.Abstractions.Assets;

public interface IResourceAssetsManager
{
	IResourceAssetsContainer ManageContainer<T>(Guid userId, Guid id);

	void DeleteContainer<T>(Guid userId, Guid id);

	void DeleteUser(Guid userId);
}

```

## Voxta.Abstractions.Assets\IResourceUserAssetsContainer.cs
```csharp
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Assets;

public interface IResourceUserAssetsContainer
{
	string AssetsBasePath { get; }

	string[] ListAssets();

	string GetAssetFullPath(string resourcePath);

	Task WriteAsset(string assetPath, byte[] data, CancellationToken cancellationToken);

	void DeleteAsset(string assetPath, CancellationToken cancellationToken);

	void CopyAssets(IResourceUserAssetsContainer target);
}

```

## Voxta.Abstractions.Cache\IPersistentCache.cs
```csharp
namespace Voxta.Abstractions.Cache;

public interface IPersistentCache
{
	string Folder { get; }

	IPersistentCacheEntry Get(string speechId, string contentType);
}

```

## Voxta.Abstractions.Cache\IPersistentCacheEntry.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Services.AudioOutput;

namespace Voxta.Abstractions.Cache;

public interface IPersistentCacheEntry
{
	bool Exists();

	string GetPath();

	AudioData GetAsAudioData();

	Task UpdateAsync(CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Cache\ITemporaryFileCleanup.cs
```csharp
namespace Voxta.Abstractions.Cache;

public interface ITemporaryFileCleanup
{
	void MarkForDeletion(string filename);
}

```

## Voxta.Abstractions.Caching\IProfileSettingsCache.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Caching;

public interface IProfileSettingsCache
{
	Task<ProfileSettings?> GetProfileByUserIdAsync(Guid userId, CancellationToken cancellationToken);

	void Cache(ProfileSettings profile);

	void Clear(Guid userId, Guid profileId);
}

```

## Voxta.Abstractions.Caching\IServicesConfigurationsSetCache.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Caching;

public interface IServicesConfigurationsSetCache
{
	Task<ServicesConfigurationsSet> GetServicesConfigurationsSet(Guid userId, Guid servicesConfigurationId, CancellationToken cancellationToken);

	void Cache(ServicesConfigurationsSet servicesConfigurationsSet);

	void Clear(Guid userId, Guid servicesConfigurationId);
}

```

## Voxta.Abstractions.Caching\IUserCache.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Caching;

public interface IUserCache
{
	Task<VoxtaUser?> GetByIdAsync(Guid userId, CancellationToken cancellationToken);

	Task<VoxtaUser?> GetByNormalizedUsename(string username, CancellationToken cancellationToken);

	void CacheUser(VoxtaUser user);

	void ClearUser(Guid userId);
}

```

## Voxta.Abstractions.Caching\ProfileSettingsCacheExtensions.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Caching;

public static class ProfileSettingsCacheExtensions
{
	public static async Task<ProfileSettings> GetRequiredProfileByUserIdAsync(this IProfileSettingsCache profileRepository, Guid userId, CancellationToken cancellationToken)
	{
		return (await profileRepository.GetProfileByUserIdAsync(userId, cancellationToken)) ?? throw new NullReferenceException("The profile was not configured.");
	}
}

```

## Voxta.Abstractions.Caching\ServicesConfigurationsSetCacheExtensions.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Caching;

public static class ServicesConfigurationsSetCacheExtensions
{
	public static Task<ServicesConfigurationsSet> GetDefaultServicesConfigurationsSet(this IServicesConfigurationsSetCache cache, ProfileSettings profile, CancellationToken cancellationToken)
	{
		return cache.GetServicesConfigurationsSet(profile.UserId, profile.ServicesConfigurationsSetId, cancellationToken);
	}
}

```

## Voxta.Abstractions.Chats.Conditions\EmptyConditions.cs
```csharp
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Chats.Conditions;

public class EmptyConditions : IChatConditions
{
	public static readonly IChatConditions Instance = new EmptyConditions();

	public bool Empty => true;

	public bool Match(IChatInferenceData chat, ChatMessageData? message, bool forDisplay = false)
	{
		return true;
	}

	public override string ToString()
	{
		return "true";
	}
}

```

## Voxta.Abstractions.Chats.Conditions\IChatConditions.cs
```csharp
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Chats.Conditions;

public interface IChatConditions
{
	bool Empty { get; }

	bool Match(IChatInferenceData chat, ChatMessageData? message, bool forDisplay = false);
}

```

## Voxta.Abstractions.Chats.Creation\ChatResourcesRequest.cs
```csharp
using System;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Chats.Creation;

public class ChatResourcesRequest
{
	public required Guid UserId { get; init; }

	public required VersionedGuid[] Characters { get; init; }

	public VersionedGuid? Scenario { get; init; }

	public required DependencyInfo[] Dependencies { get; init; }

	public Guid? DefaultNarratorCharacterId { get; init; }
}

```

## Voxta.Abstractions.Chats.Creation\CreateChatOptions.cs
```csharp
namespace Voxta.Abstractions.Chats.Creation;

public record CreateChatOptions
{
	public bool Ephemeral { get; init; }

	public bool UseChatMemory { get; init; }
}

```

## Voxta.Abstractions.Chats.Creation\IChatFactory.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Chats.Creation;

public interface IChatFactory
{
	Task<ChatResources> LoadChatResourcesAsync(ChatResourcesRequest request, CancellationToken cancellationToken);

	Task<Chat> CreateChatAsync(ChatResources resources, Dictionary<string, Guid>? rolesMap, string? client, CreateChatOptions options, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Chats.Creation\MissingChatResourcesException.cs
```csharp
using System;
using System.Linq;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Chats.Creation;

public class MissingChatResourcesException(ChatResourceStatusInformation[] resources) : Exception("Missing chat resources: " + string.Join(", ", _003Cresources_003EP.Select((ChatResourceStatusInformation x) => $"{x.Kind}: {x.Id} ({x.Status})")))
{
	public ChatResourceStatusInformation[] Resources => resources;
}

```

## Voxta.Abstractions.Chats.Objects.Assets\IAssetsListInstance.cs
```csharp
using System.Collections.Generic;

namespace Voxta.Abstractions.Chats.Objects.Assets;

public interface IAssetsListInstance
{
	IReadOnlyList<string> AssetFiles { get; }

	string[] MatchFiles(string regexString);
}

```

## Voxta.Abstractions.Chats.Objects.Assets\NullAssetsListInstance.cs
```csharp
using System;
using System.Collections.Generic;

namespace Voxta.Abstractions.Chats.Objects.Assets;

public class NullAssetsListInstance : IAssetsListInstance
{
	public static NullAssetsListInstance Instance { get; } = new NullAssetsListInstance();

	public IReadOnlyList<string> AssetFiles => Array.Empty<string>();

	private NullAssetsListInstance()
	{
	}

	public string[] MatchFiles(string regexString)
	{
		return Array.Empty<string>();
	}
}

```

## Voxta.Abstractions.Chats.Objects.Characters\ICharacterInferenceData.cs
```csharp
using System;
using System.Collections.Concurrent;
using System.Globalization;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Cache;
using Voxta.Abstractions.Services.ActionInference;
using Voxta.Abstractions.Templating;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Chats.Objects.Characters;

public interface ICharacterInferenceData : ICharacterOrUserData
{
	ITemplate Personality { get; }

	SimpleMessageData[] MessageExamples { get; }

	SystemPromptOverrideTypes SystemPromptOverrideType { get; }

	ITemplate SystemPrompt { get; }

	string PostHistoryInstructions { get; }

	ITemplate Profile { get; }

	bool TimeAware { get; }

	ExplicitContentLevels ExplicitContent { get; }

	string[] Tags { get; }

	ChatStyles ChatStyle { get; }

	ConcurrentDictionary<string, ActionInvocationRecord> LastInvokedFunction { get; }

	CultureInfo Culture { get; }

	IPersistentCacheEntry[] ThinkingSpeechEntries { get; }

	string? ScenarioRole { get; }

	GenerateConstraintRequest GenerateConstraintRequest { get; }

	string? ThumbnailUrl { get; }

	VoiceInfo? GetVoice(string serviceName, Guid moduleId);

	Task<ICharacterInstanceReadToken> GetReadTokenAsync(CancellationToken cancellationToken = default(CancellationToken));
}

```

## Voxta.Abstractions.Chats.Objects.Characters\ICharacterInstanceEditable.cs
```csharp
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Services.Memory;

namespace Voxta.Abstractions.Chats.Objects.Characters;

public interface ICharacterInstanceEditable : ICharacterInferenceData, ICharacterOrUserData
{
	List<CharacterMemoryEntry> Memories { get; }

	ICharacterMemoryInstance Memory { get; }

	string[] ThinkingSpeechUrls { get; }

	bool CanReply { get; }

	bool CanDoActionInference { get; }

	Task<ICharacterInstanceWriteToken> GetWriteTokenAsync(CancellationToken cancellationToken = default(CancellationToken));
}

```

## Voxta.Abstractions.Chats.Objects.Characters\ICharacterInstanceReadToken.cs
```csharp
using System;
using System.Collections.Generic;
using Voxta.Abstractions.Services.Memory;

namespace Voxta.Abstractions.Chats.Objects.Characters;

public interface ICharacterInstanceReadToken : IAsyncDisposable
{
	IReadOnlyList<CharacterMemoryEntry> Memories { get; }
}

```

## Voxta.Abstractions.Chats.Objects.Characters\ICharacterInstanceUnsafe.cs
```csharp
using System;

namespace Voxta.Abstractions.Chats.Objects.Characters;

public interface ICharacterInstanceUnsafe : ICharacterInstanceEditable, ICharacterInferenceData, ICharacterOrUserData, IAsyncDisposable
{
}

```

## Voxta.Abstractions.Chats.Objects.Characters\ICharacterInstanceWriteToken.cs
```csharp
using System;
using System.Collections.Generic;
using Voxta.Abstractions.Services.Memory;

namespace Voxta.Abstractions.Chats.Objects.Characters;

public interface ICharacterInstanceWriteToken : ICharacterInstanceReadToken, IAsyncDisposable
{
	new List<CharacterMemoryEntry> Memories { get; }
}

```

## Voxta.Abstractions.Chats.Objects.Characters\ICharacterMemoryInstance.cs
```csharp
using System;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Services.Memory;

namespace Voxta.Abstractions.Chats.Objects.Characters;

public interface ICharacterMemoryInstance : IAsyncDisposable
{
	bool Enabled { get; }

	bool PrivateMemoryEnabled { get; }

	MemoryBook? PrivateMemoryBook { get; }

	IMemoryProviderInstance MemoryProviderInstance { get; }
}

```

## Voxta.Abstractions.Chats.Objects.Characters\ICharacterOrUserData.cs
```csharp
using System;
using Voxta.Abstractions.Chats.Objects.Assets;
using Voxta.Abstractions.Templating;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Chats.Objects.Characters;

public interface ICharacterOrUserData
{
	bool Enabled { get; }

	Guid Id { get; }

	string Name { get; }

	ITemplate Description { get; }

	ChatMessageRole Role { get; }

	IAssetsListInstance Assets { get; }
}

```

## Voxta.Abstractions.Chats.Objects.Characters\NullCharacterMemoryInstance.cs
```csharp
using System;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Services.Memory;

namespace Voxta.Abstractions.Chats.Objects.Characters;

public class NullCharacterMemoryInstance : ICharacterMemoryInstance, IAsyncDisposable
{
	public static readonly NullCharacterMemoryInstance Instance = new NullCharacterMemoryInstance();

	public bool Enabled => false;

	public bool PrivateMemoryEnabled => false;

	public MemoryBook? PrivateMemoryBook => null;

	public IMemoryProviderInstance MemoryProviderInstance => NullMemoryProviderInstance.Instance;

	public ValueTask DisposeAsync()
	{
		return ValueTask.CompletedTask;
	}
}

```

## Voxta.Abstractions.Chats.Objects.Chats\ChatInferenceDataExtensions.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Chats.Objects.Chats;

public static class ChatInferenceDataExtensions
{
	public static async ValueTask<ChatMessageData?> GetLastMessageAsync(this IChatInferenceData chat, CancellationToken cancellationToken = default(CancellationToken))
	{
		return await chat.GetOneMessageAsync((IReadOnlyList<ChatMessageData> x) => (x.Count <= 0) ? null : x[x.Count - 1], cancellationToken);
	}

	public static async ValueTask<ChatMessageData?> GetLastMessageByRoleAsync(this IChatInferenceData chat, ChatMessageRole[] roles, CancellationToken cancellationToken = default(CancellationToken))
	{
		return await chat.GetOneMessageAsync(delegate(IReadOnlyList<ChatMessageData> x)
		{
			for (int num = x.Count - 1; num >= 0; num--)
			{
				if (roles.Contains(x[num].Role))
				{
					return x[num];
				}
			}
			return (ChatMessageData)null;
		}, cancellationToken);
	}

	public static async ValueTask<ChatMessageData?> GetMessageByIdAsync(this IChatInferenceData chat, Guid messageId, CancellationToken cancellationToken = default(CancellationToken))
	{
		return await chat.GetOneMessageAsync((IReadOnlyList<ChatMessageData> x) => x.FirstOrDefault((ChatMessageData y) => y.LocalId == messageId), cancellationToken);
	}
}

```

## Voxta.Abstractions.Chats.Objects.Chats\ChatInstanceTokenExtensions.cs
```csharp
using System;
using System.Linq;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Model;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Chats.Objects.Chats;

public static class ChatInstanceTokenExtensions
{
	public static ChatMessageData AddTestMessage(this IChatInstanceMessagesWriteToken chat, ICharacterInferenceData character, string message, int tokens, DateTimeOffset timestamp)
	{
		ChatMessageData chatMessageData = new ChatMessageData
		{
			UserId = chat.UserId,
			ChatId = chat.ChatId,
			LocalId = Guid.NewGuid(),
			SenderId = character.Id,
			Role = ChatMessageRole.Assistant,
			User = character.Name,
			Timestamp = timestamp,
			Value = message,
			Tokens = tokens,
			Index = chat.Messages.Count + 1,
			ConversationIndex = (chat.Messages.LastOrDefault((ChatMessageData m) => m.Role.IsConversation())?.ConversationIndex ?? 0) + 1,
			ChatTime = 0L
		};
		chat.Messages.Add(chatMessageData);
		return chatMessageData;
	}

	public static ChatMessageData AddTestMessage(this IChatInstanceMessagesWriteToken chat, UserInstance user, string message, int tokens, DateTimeOffset timestamp, ChatMessageRole role = ChatMessageRole.User, string? special = null)
	{
		ChatMessageData chatMessageData = new ChatMessageData
		{
			UserId = chat.UserId,
			ChatId = chat.ChatId,
			LocalId = Guid.NewGuid(),
			SenderId = user.Id,
			Role = role,
			User = user.Name,
			Timestamp = timestamp,
			Value = message,
			Tokens = tokens,
			Index = chat.Messages.Count,
			ConversationIndex = (chat.Messages.LastOrDefault((ChatMessageData m) => m.Role.IsConversation())?.ConversationIndex ?? 0) + 1,
			Special = special,
			ChatTime = 0L
		};
		chat.Messages.Add(chatMessageData);
		return chatMessageData;
	}
}

```

## Voxta.Abstractions.Chats.Objects.Chats\GenerationStats.cs
```csharp
namespace Voxta.Abstractions.Chats.Objects.Chats;

public record GenerationStats
{
	public int TotalAvailableTokensForMessages { get; init; }

	public int TotalMessagesTokens { get; init; }

	public int RetainedMessagesTokens { get; init; }
}

```

## Voxta.Abstractions.Chats.Objects.Chats\IChatInferenceData.cs
```csharp
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Scenarios;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Services.ActionInference;
using Voxta.Abstractions.Templating;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Chats.Objects.Chats;

public interface IChatInferenceData : IChatSessionData
{
	bool Ephemeral { get; }

	ChatFlowModes ChatFlow { get; }

	UserInstance User { get; }

	IChatStateInferenceData State { get; }

	IScenarioInferenceData ChatSessionScenario { get; }

	ExplicitContentLevels ExplicitContent { get; }

	string? Vision { get; }

	ConcurrentDictionary<string, ActionInvocationRecord> LastInvokedUserFunction { get; }

	GenerationStats? GenerationStats { set; }

	SystemPromptOverrideTypes SystemPromptOverrideType { get; }

	List<ITemplate> SystemPromptAddons { get; }

	ICharacterInferenceData Narrator { get; }

	ITemplate ReplyPrefix { get; }

	ChatStyles GetChatStyle(ChatStyles defaultValue);

	ICharacterInferenceData GetMainCharacter();

	ICharacterInferenceData GetCharacter(Guid id);

	ICharacterInferenceData GetCharacterWithFallback(Guid? id);

	ICharacterInferenceData? GetCharacterByRole(string role);

	IReadOnlyList<ICharacterInferenceData> GetCharacters();

	ValueTask<T> GetOneMessageAsync<T>(Func<IReadOnlyList<ChatMessageData>, T> predicate, CancellationToken cancellationToken = default(CancellationToken));

	ValueTask<IChatInstanceMessagesReadToken> GetMessagesReadTokenAsync(CancellationToken cancellationToken = default(CancellationToken));

	ValueTask<IChatInstanceContextReadToken> GetContextReadTokenAsync(CancellationToken cancellationToken = default(CancellationToken));

	Task<ITemplate[]> ResolveContextsAsync(Func<IContextDefinitionInstance, bool> filter, CancellationToken cancellationToken);

	Task<IScenarioActionInstance[]> ResolveActionsAsync(ChatMessageData? message, FunctionTiming timing, string? role, CancellationToken cancellationToken);

	IReadOnlyCollection<string> GetCurrentFlags();
}

```

## Voxta.Abstractions.Chats.Objects.Chats\IChatInstanceContextReadToken.cs
```csharp
using System;
using System.Collections.Generic;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Templating;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Chats.Objects.Chats;

public interface IChatInstanceContextReadToken : IAsyncDisposable
{
	IReadOnlyList<ChatDocument> Documents { get; }

	IReadOnlyDictionary<string, List<IContextDefinitionInstance>> Contexts { get; }

	IReadOnlyDictionary<string, List<IScenarioActionInstance>> Actions { get; }

	IReadOnlyDictionary<string, List<IScenarioEventInstance>> Events { get; }

	IContextDefinitionInstance[] ResolveContextDefinitions();

	ITemplate[] ResolveContexts(Func<IContextDefinitionInstance, bool> filter);

	IScenarioActionInstance[] ResolveActions(ChatMessageData? message, FunctionTiming timing, string? role);

	IScenarioEventInstance[] ResolveEvents(ChatMessageData? message, FunctionTiming timing, string? trigger);
}

```

## Voxta.Abstractions.Chats.Objects.Chats\IChatInstanceContextWriteToken.cs
```csharp
using System;
using System.Collections.Generic;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Chats.Objects.Chats;

public interface IChatInstanceContextWriteToken : IAsyncDisposable
{
	List<ChatDocument> Documents { get; }

	Dictionary<string, List<IContextDefinitionInstance>> Contexts { get; }

	Dictionary<string, List<IScenarioActionInstance>> Actions { get; }

	Dictionary<string, List<IScenarioEventInstance>> Events { get; }
}

```

## Voxta.Abstractions.Chats.Objects.Chats\IChatInstanceMessagesReadToken.cs
```csharp
using System;
using System.Collections.Generic;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Chats.Objects.Chats;

public interface IChatInstanceMessagesReadToken : IAsyncDisposable
{
	IReadOnlyList<ChatMessageData> Messages { get; }
}

```

## Voxta.Abstractions.Chats.Objects.Chats\IChatInstanceMessagesWriteToken.cs
```csharp
using System;
using System.Collections.Generic;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Chats.Objects.Chats;

public interface IChatInstanceMessagesWriteToken : IAsyncDisposable
{
	Guid UserId { get; }

	Guid ChatId { get; }

	List<ChatMessageData> Messages { get; }
}

```

## Voxta.Abstractions.Chats.Objects.Chats\IChatInstanceUnsafe.cs
```csharp
using System.Collections.Generic;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Chats.Objects.Chats;

public interface IChatInstanceUnsafe : IChatInferenceData, IChatSessionData
{
	List<ChatMessageData> Messages { get; }

	List<ChatDocument> Documents { get; }

	Dictionary<string, List<IContextDefinitionInstance>> Contexts { get; }

	Dictionary<string, List<IScenarioActionInstance>> Actions { get; }

	Dictionary<string, List<IScenarioEventInstance>> Events { get; }
}

```

## Voxta.Abstractions.Chats.Objects.Chats\IChatSessionData.cs
```csharp
using System;
using System.Threading;

namespace Voxta.Abstractions.Chats.Objects.Chats;

public interface IChatSessionData
{
	CancellationToken Abort { get; }

	Guid SessionId { get; }

	Guid ChatId { get; }

	Guid UserId { get; }
}

```

## Voxta.Abstractions.Chats.Objects.Chats\IChatStateInferenceData.cs
```csharp
using System;
using System.Collections.Generic;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Chats.Objects.Chats;

public interface IChatStateInferenceData
{
	IReadOnlyDictionary<string, object> Variables { get; }

	IReadOnlyCollection<string> GetFlags();

	T GetFlags<T>(Func<IReadOnlyCollection<FlagState>, T> selector);

	FlagState? GetFlag(Func<FlagState, bool> selector);
}

```

## Voxta.Abstractions.Chats.Objects.Chats\IChatStateInstance.cs
```csharp
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Chats.Objects.Chats;

public interface IChatStateInstance : IChatStateInferenceData
{
	bool SetFlags(ChatMessageData? message, SetFlagRequest[] flags);

	bool ExpireFlags(int conversationIndex, long chatTime);

	bool RemoveVariable(string key);

	bool SetVariable(string key, object value);
}

```

## Voxta.Abstractions.Chats.Objects.Chats\SetFlagRequest.cs
```csharp
using System;
using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System.Text.RegularExpressions;
using System.Text.RegularExpressions.Generated;

namespace Voxta.Abstractions.Chats.Objects.Chats;

public record SetFlagRequest(string Value, string? EnumKey = null, string? EnumValue = null, bool Set = true, int ExpireInMessages = 0, int ExpiresInChatTime = 0)
{
	private static SetFlagRequest Empty { get; } = new SetFlagRequest("", null, null, Set: false);

	private static readonly HashSet<string> _reservedKeywords = new HashSet<string>
	{
		"true", "false", "null", "undefined", "if", "else", "for", "while", "do", "switch",
		"case", "default", "break"
	};

	[GeneratedRegex("^[a-z_][a-z0-9_]+$", RegexOptions.IgnoreCase | RegexOptions.CultureInvariant)]
	[GeneratedCode("System.Text.RegularExpressions.Generator", "9.0.12.41916")]
	private static Regex FlagValidation()
	{
		return _003CRegexGenerator_g_003EFB60E32FC1EBF06439A8EB2F6C2062FEBFBE21A84F441808E3243F14AA0739387__FlagValidation_0.Instance;
	}

	public static bool TryParseFlag(string s, out SetFlagRequest flag)
	{
		s = s.Trim();
		if (s == "")
		{
			flag = Empty;
			return false;
		}
		bool flag2 = !s.StartsWith('!');
		if (!flag2)
		{
			string text = s;
			s = text.Substring(1, text.Length - 1);
		}
		string[] array = s.Split('.', 2);
		switch (array.Length)
		{
		case 1:
			if (_reservedKeywords.Contains(s))
			{
				throw new ArgumentException("Invalid flag name (reserved keyword): " + s);
			}
			if (!FlagValidation().IsMatch(s))
			{
				throw new ArgumentException("Invalid flag name (invalid syntax): " + s);
			}
			flag = new SetFlagRequest(s, s, null, flag2);
			return true;
		case 2:
		{
			string text2 = array[0];
			string text3 = array[1];
			if (_reservedKeywords.Contains(text2))
			{
				throw new ArgumentException("Invalid flag name (reserved keyword): " + s);
			}
			if (!FlagValidation().IsMatch(text2))
			{
				throw new ArgumentException("Invalid flag name (invalid enum key syntax): " + s);
			}
			if (!FlagValidation().IsMatch(text3))
			{
				throw new ArgumentException("Invalid flag name (invalid enum value syntax): " + s);
			}
			flag = new SetFlagRequest(s, text2, text3, flag2);
			return true;
		}
		default:
			throw new ArgumentException("Invalid flag name: " + s);
		}
	}

	public static SetFlagRequest[] ParseFlags(string[] s)
	{
		List<SetFlagRequest> list = new List<SetFlagRequest>(s.Length);
		for (int i = 0; i < s.Length; i++)
		{
			if (TryParseFlag(s[i], out SetFlagRequest flag))
			{
				list.Add(flag);
			}
		}
		return list.ToArray();
	}

	public override string ToString()
	{
		return (Set ? "" : "!") + Value;
	}

	[CompilerGenerated]
	protected SetFlagRequest(SetFlagRequest original)
	{
		Value = original.Value;
		EnumKey = original.EnumKey;
		EnumValue = original.EnumValue;
		Set = original.Set;
		ExpireInMessages = original.ExpireInMessages;
		ExpiresInChatTime = original.ExpiresInChatTime;
	}
}

```

## Voxta.Abstractions.Chats.Objects.Chats\UserInstance.cs
```csharp
using System;
using Voxta.Abstractions.Chats.Objects.Assets;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Templating;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Chats.Objects.Chats;

[Serializable]
public class UserInstance : ICharacterOrUserData
{
	public required Guid Id { get; init; }

	public required string Name { get; init; }

	public bool Enabled { get; set; } = true;

	public ITemplate Description { get; init; } = StaticTemplate.Empty;

	public string? ThumbnailUrl { get; init; }

	public IAssetsListInstance Assets => NullAssetsListInstance.Instance;

	public ChatMessageRole Role => ChatMessageRole.User;
}

```

## Voxta.Abstractions.Chats.Objects.Scenarios\IScenarioInferenceData.cs
```csharp
using System;
using System.Collections.Generic;
using Voxta.Abstractions.Chats.Objects.Assets;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Templating;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Chats.Objects.Scenarios;

public interface IScenarioInferenceData
{
	Guid Id { get; }

	ITemplate ScenarioTemplate { get; }

	SystemPromptOverrideTypes SystemPromptOverrideType { get; }

	ITemplate SystemPrompt { get; }

	Dictionary<string, string> CharNamesDict { get; }

	Dictionary<string, ICharacterInferenceData> CharsDict { get; }

	IAssetsListInstance Assets { get; }
}

```

## Voxta.Abstractions.Chats.Objects\IActionEffectInstance.cs
```csharp
using Voxta.Abstractions.Scripting.ActionScripts;
using Voxta.Abstractions.Templating;

namespace Voxta.Abstractions.Chats.Objects;

public interface IActionEffectInstance
{
	string[] SetFlags { get; }

	IActionScript Script { get; }

	ITemplate? Effect { get; }

	ITemplate? Note { get; }

	ITemplate? Secret { get; }

	ITemplate? Instructions { get; }

	ITemplate? Event { get; }

	ITemplate? Story { get; }

	IContextDefinitionInstance[] Contexts { get; }

	int MaxSentences { get; }

	int MaxTokens { get; }

	string? Trigger { get; }
}

```

## Voxta.Abstractions.Chats.Objects\IContextDefinitionInstance.cs
```csharp
using Voxta.Abstractions.Chats.Conditions;
using Voxta.Abstractions.Templating;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Chats.Objects;

public interface IContextDefinitionInstance
{
	ContextDefinition Source { get; }

	string Name { get; }

	int Priority { get; }

	PromptCategories ApplyTo { get; }

	IChatConditions Conditions { get; }

	ITemplate TextTemplate { get; }
}

```

## Voxta.Abstractions.Chats.Objects\IFunctionDefinitionInstance.cs
```csharp
using Voxta.Abstractions.Chats.Conditions;
using Voxta.Abstractions.Templating;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Chats.Objects;

public interface IFunctionDefinitionInstance
{
	FunctionDefinition Source { get; }

	string? ContextKey { get; }

	int Priority { get; }

	string Name { get; }

	FunctionTiming Timing { get; }

	bool CancelReply { get; }

	ITemplate Description { get; }

	IActionEffectInstance EffectInstance { get; }

	string? RoleFilter { get; }

	IChatConditions Conditions { get; }
}

```

## Voxta.Abstractions.Chats.Objects\IScenarioActionInstance.cs
```csharp
using System.Collections.Generic;
using Voxta.Abstractions.Chats.Conditions;
using Voxta.Abstractions.Templating;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Chats.Objects;

public interface IScenarioActionInstance : IFunctionDefinitionInstance
{
	string Layer { get; }

	bool FinalLayer { get; }

	ITemplate ShortDescription { get; }

	FunctionArgumentDefinition[] Arguments { get; }

	IReadOnlyList<string> Activates { get; }

	IChatConditions FlattenCondition { get; }
}

```

## Voxta.Abstractions.Chats.Objects\IScenarioEventInstance.cs
```csharp
namespace Voxta.Abstractions.Chats.Objects;

public interface IScenarioEventInstance : IFunctionDefinitionInstance
{
	bool EvaluateNextEvent { get; }
}

```

## Voxta.Abstractions.Chats.Objects\ScenarioActionInstanceExtensions.cs
```csharp
using System;
using System.Text;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Chats.Objects;

public static class ScenarioActionInstanceExtensions
{
	public static string FormatFunctionSignature(this IScenarioActionInstance function)
	{
		StringBuilder stringBuilder = new StringBuilder();
		stringBuilder.Append(function.Name);
		stringBuilder.Append('(');
		for (int i = 0; i < function.Arguments.Length; i++)
		{
			FunctionArgumentDefinition functionArgumentDefinition = function.Arguments[i];
			stringBuilder.Append(functionArgumentDefinition.Name);
			stringBuilder.Append(": ");
			StringBuilder stringBuilder2 = stringBuilder;
			stringBuilder2.Append(functionArgumentDefinition.Type switch
			{
				FunctionArgumentType.String => "string", 
				FunctionArgumentType.Integer => "int", 
				FunctionArgumentType.Double => "double", 
				FunctionArgumentType.Boolean => "bool", 
				FunctionArgumentType.Array => "[]", 
				_ => throw new ArgumentOutOfRangeException(), 
			});
			if (i < function.Arguments.Length - 1)
			{
				stringBuilder.Append(", ");
			}
		}
		stringBuilder.Append(')');
		return stringBuilder.ToString();
	}
}

```

## Voxta.Abstractions.Chats.Sessions\ChatMessageSpeechChunkToken.cs
```csharp
using System;

namespace Voxta.Abstractions.Chats.Sessions;

public class ChatMessageSpeechChunkToken
{
	public required Guid SessionId { get; init; }

	public required Guid MessageId { get; init; }

	public required int StartIndex { get; init; }

	public required int EndIndex { get; init; }

	public required bool IsNarration { get; init; }
}

```

## Voxta.Abstractions.Chats.Sessions\ChatMessageSpeechToken.cs
```csharp
using System;

namespace Voxta.Abstractions.Chats.Sessions;

public class ChatMessageSpeechToken
{
	public required Guid SessionId { get; init; }

	public required Guid MessageId { get; init; }
}

```

## Voxta.Abstractions.Chats.Sessions\IChatSessionChatAugmentationApi.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services.VisionCapture;
using Voxta.Abstractions.Utils;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Chats.Sessions;

public interface IChatSessionChatAugmentationApi
{
	IAuthenticationContext Auth { get; }

	Guid SessionId { get; }

	ICharacterInferenceData MainCharacter { get; }

	ICharacterOrUserData User { get; }

	IChatInferenceData Chat { get; }

	ChatStyles ChatStyle { get; }

	CancellationToken Abort { get; }

	bool IsAugmentationEnabled(string key, bool includeInCatchAll = true);

	Task SendSecretAsync(string text, CancellationToken cancellationToken = default(CancellationToken));

	Task SendNoteAsync(string text, CancellationToken cancellationToken = default(CancellationToken));

	Task SendInstructionsAsync(string text, CancellationToken cancellationToken = default(CancellationToken));

	Task SendCharacterMessageAsync(string text, CancellationToken cancellationToken = default(CancellationToken));

	Task SendNoteAttachmentAsync(string text, IImage image, CancellationToken cancellationToken);

	Task SendUserAttachmentAsync(string text, IImage image, CancellationToken cancellationToken);

	Task SetContexts(string key, ContextDefinition[] contexts, CancellationToken cancellationToken = default(CancellationToken));

	Task SetFlags(SetFlagRequest[] flags, CancellationToken cancellationToken);

	Task TriggerReplyAsync(CancellationToken cancellationToken = default(CancellationToken));

	Task<IUserInteractionRequestToken> RequestUserAction(UserInteractionRequestInput input, CancellationToken cancellationToken);

	string ProcessSimpleTemplate(string result);

	bool HasService(ServiceTypes serviceType);

	bool CheckService(ServiceTypes serviceType, string serviceName);
}

```

## Voxta.Abstractions.Chats.Sessions\IChatSessionMessageHandler.cs
```csharp
using System;
using System.Threading.Tasks;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Abstractions.Chats.Sessions;

public interface IChatSessionMessageHandler
{
	Guid SessionId { get; }

	Task HandleClientMessage(ClientChatSessionMessage clientChatSessionMessage);
}

```

## Voxta.Abstractions.Chats.Sessions\IChatSessionPlaybackHandler.cs
```csharp
using System.Threading.Tasks;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Abstractions.Chats.Sessions;

public interface IChatSessionPlaybackHandler
{
	void DoSpeechPlaybackStart(ClientSpeechPlaybackStartMessage startMessage);

	Task DoSpeechPlaybackCompleteAsync(ClientSpeechPlaybackCompleteMessage completeMessage);
}

```

## Voxta.Abstractions.Chats.Sessions\IChatTextProcessor.cs
```csharp
namespace Voxta.Abstractions.Chats.Sessions;

public interface IChatTextProcessor
{
	string User { get; }

	string Character { get; }

	string ProcessText(string? text);
}

```

## Voxta.Abstractions.Chats.Sessions\IServiceItemReference.cs
```csharp
namespace Voxta.Abstractions.Chats.Sessions;

public interface IServiceItemReference<out T>
{
	T Current { get; }
}

```

## Voxta.Abstractions.Chats.Sessions\IServiceReference.cs
```csharp
using System;
using System.Threading.Tasks;
using Voxta.Abstractions.Services;

namespace Voxta.Abstractions.Chats.Sessions;

public interface IServiceReference<out TService> : IAsyncDisposable where TService : class, IService
{
	TService Current { get; }

	event EventHandler? ServiceRemoved;

	event EventHandler? ServiceChanged;

	Task InitializeAsync();
}

```

## Voxta.Abstractions.Chats.Sessions\ISpecialMessageFormatter.cs
```csharp
using System;
using System.Globalization;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Chats.Sessions;

public interface ISpecialMessageFormatter
{
	string Interrupt(string message, string userName, string characterName);

	string ActionEffect(string message, string effect);

	string ReturnFromAway(string userName, string characterName, TimeSpan awayDuration, CultureInfo culture);

	string ChatMemberAdded(string userName, string characterName);

	string ChatMemberRemoved(string userName, string characterName);

	string AttachedImage(ComputerVisionSource source, string description, string userName, string charName);
}

```

## Voxta.Abstractions.Chats.Sessions\ISpecialMessageFormatterFactory.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Prompting;

namespace Voxta.Abstractions.Chats.Sessions;

public interface ISpecialMessageFormatterFactory
{
	Task<ISpecialMessageFormatter> CreateAsync(IPromptTemplatesLoader loader, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Chats.Sessions\SpecialMessagesKeys.cs
```csharp
namespace Voxta.Abstractions.Chats.Sessions;

public static class SpecialMessagesKeys
{
	public const string ReturnFromAway = "ReturnFromAway";
}

```

## Voxta.Abstractions.Chats.Sessions\StaticServiceItemReference.cs
```csharp
namespace Voxta.Abstractions.Chats.Sessions;

public class StaticServiceItemReference<T>(T current) : IServiceItemReference<T>
{
	public T Current => _003Ccurrent_003EP;
}

```

## Voxta.Abstractions.Configuration\IServicesConfigurationsSetResolver.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Configuration;

public interface IServicesConfigurationsSetResolver
{
	Task<ServiceConfiguration> ResolveOneWithDefaultConfigAsync(Guid userId, ServiceTypes serviceType, CancellationToken cancellationToken);

	Task<ServiceConfiguration> ResolveOneWithDefaultConfigAsync(Guid userId, Guid moduleId, ServiceTypes serviceType, CancellationToken cancellationToken);

	Task<ServiceConfiguration?> ResolveOneAsync(ServicesConfigurationsSet source, ServiceTypes serviceType, CancellationToken cancellationToken);

	Task<ServicesConfigurations> ResolveAllWithDefaultConfigAsync(Guid userId, CancellationToken cancellationToken);

	Task<ServicesConfigurations> ResolveAllAsync(ServicesConfigurationsSet source, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Configuration\ServiceConfiguration.cs
```csharp
using Voxta.Abstractions.Model;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Configuration;

public class ServiceConfiguration
{
	public ServiceTypes ServiceType { get; init; }

	public ServiceConfigurationModule? Module { get; init; }

	public ServiceConfigurationSettings? Settings { get; init; }

	public bool PreferClientCapability { get; init; }

	public static ServiceConfiguration CreateFromModule(Module module, ServiceTypes serviceType)
	{
		return new ServiceConfiguration
		{
			ServiceType = serviceType,
			PreferClientCapability = false,
			Module = new ServiceConfigurationModule
			{
				ModuleId = module.LocalId,
				ModuleConfiguration = module.Configuration,
				ServiceName = module.ServiceName
			}
		};
	}

	public static ServiceConfiguration CreateFromModuleAndSettings(Module module, ServiceSettings settings, ServiceTypes serviceType)
	{
		return new ServiceConfiguration
		{
			ServiceType = serviceType,
			Module = new ServiceConfigurationModule
			{
				ModuleId = module.LocalId,
				ModuleConfiguration = module.Configuration,
				ServiceName = module.ServiceName
			},
			Settings = new ServiceConfigurationSettings
			{
				ServiceSettingsId = settings.LocalId,
				ServiceSettings = settings.Configuration
			}
		};
	}
}

```

## Voxta.Abstractions.Configuration\ServiceConfigurationModule.cs
```csharp
using System;
using System.Collections.Generic;

namespace Voxta.Abstractions.Configuration;

public class ServiceConfigurationModule
{
	public required Guid ModuleId { get; init; }

	public required string ServiceName { get; init; }

	public required Dictionary<string, string> ModuleConfiguration { get; init; }
}

```

## Voxta.Abstractions.Configuration\ServiceConfigurationSettings.cs
```csharp
using System;
using System.Collections.Generic;

namespace Voxta.Abstractions.Configuration;

public class ServiceConfigurationSettings
{
	public Guid? ServiceSettingsId { get; init; }

	public required Dictionary<string, string> ServiceSettings { get; init; }
}

```

## Voxta.Abstractions.Configuration\ServicesConfigurations.cs
```csharp
using System;
using System.Collections.Generic;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Configuration;

public class ServicesConfigurations
{
	public static ServicesConfigurations Empty => new ServicesConfigurations
	{
		ServicesConfigurationsSetId = Guid.Empty,
		Services = new Dictionary<ServiceTypes, ServiceConfiguration>()
	};

	public Guid ServicesConfigurationsSetId { get; init; }

	public Dictionary<ServiceTypes, ServiceConfiguration> Services { get; init; } = new Dictionary<ServiceTypes, ServiceConfiguration>();
}

```

## Voxta.Abstractions.Configuration\VoxtaFeatureFlags.cs
```csharp
using System.Collections.Generic;
using System.Linq;

namespace Voxta.Abstractions.Configuration;

public class VoxtaFeatureFlags(IReadOnlyDictionary<string, bool> features)
{
	public const string EnableDiscordGameSDK = "EnableDiscordGameSDK";

	public const string DisablePythonInstall = "DisablePythonInstall";

	public const string EnableCreatorTools = "EnableCreatorTools";

	public const string EnableCollections = "EnableCollections";

	public const string EnableNetworkRestrictions = "EnableNetworkRestrictions";

	public const string Debug = "Debug";

	public bool Enabled(string flag)
	{
		bool value;
		return features.TryGetValue(flag, out value) && value;
	}

	public string[] ToArray()
	{
		return (from x in features
			where x.Value
			select x.Key).ToArray();
	}
}

```

## Voxta.Abstractions.Configuration\VoxtaGlobalOptions.cs
```csharp
using System;

namespace Voxta.Abstractions.Configuration;

[Serializable]
public class VoxtaGlobalOptions
{
	public bool DisableComputerSessionAccess { get; init; }
}

```

## Voxta.Abstractions.Connections\IIVoxtaWebsocketBroadcasterFactory.cs
```csharp
using System;

namespace Voxta.Abstractions.Connections;

public interface IIVoxtaWebsocketBroadcasterFactory
{
	IVoxtaWebsocketBroadcaster Create(Guid userId);
}

```

## Voxta.Abstractions.Connections\IUserConnection.cs
```csharp
using System;
using System.Threading.Tasks;
using Voxta.Model.WebsocketMessages.ClientMessages;

namespace Voxta.Abstractions.Connections;

public interface IUserConnection : IAsyncDisposable
{
	Task HandleClientMessage(ClientMessage clientMessage, bool allowForward = true);
}

```

## Voxta.Abstractions.Connections\IUserConnectionTunnel.cs
```csharp
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Abstractions.Connections;

public interface IUserConnectionTunnel
{
	void Send<T>(T message) where T : ServerMessage;
}

```

## Voxta.Abstractions.Connections\IUserConnectionTunnelInternal.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Connections;

public interface IUserConnectionTunnelInternal : IUserConnectionTunnel
{
	string ConnectionId { get; }

	Task JoinChatSession(Guid sessionId, CancellationToken cancellationToken);

	Task LeaveChatSession(Guid sessionId, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Connections\IVoxtaWebsocketBroadcaster.cs
```csharp
using System;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Abstractions.Connections;

public interface IVoxtaWebsocketBroadcaster
{
	void SendToUser<T>(T message) where T : ServerMessage;

	void SendToSession<T>(Guid sessionId, T message) where T : ServerMessage, IServerChatSessionBroadcastMessage;
}

```

## Voxta.Abstractions.DependencyInjection\IDynamicServiceAccessor.cs
```csharp
namespace Voxta.Abstractions.DependencyInjection;

public interface IDynamicServiceAccessor<out TService> where TService : notnull
{
	TService GetCurrent();
}

```

## Voxta.Abstractions.DependencyInjection\IVisionCaptureServicesAccessor.cs
```csharp
using Voxta.Abstractions.Services.VisionCapture;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.DependencyInjection;

public interface IVisionCaptureServicesAccessor
{
	IVisionCaptureService Get(ComputerVisionSource source);
}

```

## Voxta.Abstractions.Diagnostics\DiagnosticsContext.cs
```csharp
using System;
using System.Threading;
using Microsoft.Extensions.Logging;

namespace Voxta.Abstractions.Diagnostics;

public class DiagnosticsContext(ILogger<DiagnosticsContext> logger) : IDiagnosticsContext
{
	private readonly AsyncLocal<DiagnosticsContextValues> _current = new AsyncLocal<DiagnosticsContextValues>();

	public DiagnosticsContextValues GetCurrent()
	{
		return _current.Value ?? new DiagnosticsContextValues(Set: false);
	}

	public void Restore(DiagnosticsContextValues values)
	{
		_current.Value = values;
	}

	public void Initialize(DiagnosticsContextValues values)
	{
		if (_current.Value != null)
		{
			logger.LogWarning("Diagnostics context was already initialized. Overwriting.");
		}
		_current.Value = values;
	}

	public void Augment(Func<DiagnosticsContextValues, DiagnosticsContextValues> augment)
	{
		DiagnosticsContextValues value = _current.Value;
		if (value == null)
		{
			throw new InvalidOperationException("Diagnostics context is not initialized.");
		}
		_current.Value = augment(value);
	}
}

```

## Voxta.Abstractions.Diagnostics\DiagnosticsContextValues.cs
```csharp
using System;

namespace Voxta.Abstractions.Diagnostics;

public record DiagnosticsContextValues(bool Set = true)
{
	public Guid? UserId { get; init; }

	public Guid? SessionId { get; init; }

	public Guid? ChatId { get; init; }

	public Guid? MessageId { get; init; }
}

```

## Voxta.Abstractions.Diagnostics\DisabledPerformanceMetrics.cs
```csharp
using System;

namespace Voxta.Abstractions.Diagnostics;

public class DisabledPerformanceMetrics : IPerformanceMetrics
{
	private static readonly DisabledUserPerformanceMetrics _instance = new DisabledUserPerformanceMetrics();

	public IUserPerformanceMetrics OfUser(Guid userId)
	{
		return _instance;
	}
}

```

## Voxta.Abstractions.Diagnostics\DisabledPerformanceMetricsTracker.cs
```csharp
namespace Voxta.Abstractions.Diagnostics;

public class DisabledPerformanceMetricsTracker : IPerformanceMetricsTracker
{
	public static readonly DisabledPerformanceMetricsTracker Instance = new DisabledPerformanceMetricsTracker();

	public void Done()
	{
	}

	public void DoneWithDurationCounter(float count, string unit)
	{
	}

	public void Pause()
	{
	}

	public void Resume()
	{
	}
}

```

## Voxta.Abstractions.Diagnostics\DisabledUserPerformanceMetrics.cs
```csharp
using System;
using System.Collections.Generic;

namespace Voxta.Abstractions.Diagnostics;

public class DisabledUserPerformanceMetrics : IUserPerformanceMetrics
{
	public IPerformanceMetricsTracker Start(string key)
	{
		return DisabledPerformanceMetricsTracker.Instance;
	}

	public IEnumerable<string> GetKeys()
	{
		throw new NotSupportedException("Performance metrics are disabled");
	}

	public (TimeSpan AverageDuration, int Count) GetAverage(string key)
	{
		throw new NotSupportedException("Performance metrics are disabled");
	}

	public (float counter, string unit)? GetCounterAverage(string key)
	{
		throw new NotSupportedException("Performance metrics are disabled");
	}

	public void Clear()
	{
	}
}

```

## Voxta.Abstractions.Diagnostics\IDiagnosticsContext.cs
```csharp
using System;

namespace Voxta.Abstractions.Diagnostics;

public interface IDiagnosticsContext
{
	DiagnosticsContextValues GetCurrent();

	void Restore(DiagnosticsContextValues values);

	void Initialize(DiagnosticsContextValues values);

	void Augment(Func<DiagnosticsContextValues, DiagnosticsContextValues> augment);
}

```

## Voxta.Abstractions.Diagnostics\IDisplayable.cs
```csharp
using System.Collections.Generic;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Diagnostics;

public interface IDisplayable
{
	SimpleMessageData[] GetMessages();

	Dictionary<string, string> GetDisplayDict();
}

```

## Voxta.Abstractions.Diagnostics\IInferenceLogger.cs
```csharp
using System.Collections.Generic;

namespace Voxta.Abstractions.Diagnostics;

public interface IInferenceLogger
{
	IDisplayable? Request { set; }

	List<string> Chunks { get; }

	List<string> ThinkingChunks { get; }

	Dictionary<string, string> Fields { get; }
}

```

## Voxta.Abstractions.Diagnostics\IInferenceLoggersManager.cs
```csharp
using System;
using System.Collections.Generic;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Diagnostics;

public interface IInferenceLoggersManager
{
	InferenceLogger Record(ServiceTypes serviceType, string serviceName, string actionName);

	IPerformanceMetricsTracker TrackTextGenSubmetric(string serviceName, string submetricName);

	IPerformanceMetricsTracker TrackCustom(string name, string serviceName);

	IEnumerable<InferenceLogger> OfUser(Guid userId);

	InferenceLogger? Get(Guid userId, Guid id);

	InferenceLogger? GetAction(Guid userId, string actionName, Guid? id = null);

	IEnumerable<InferenceLogger> WhereAction(Guid userId, string actionName, int count);

	void Clear(Guid userId);
}

```

## Voxta.Abstractions.Diagnostics\InferenceLogActionNames.cs
```csharp
namespace Voxta.Abstractions.Diagnostics;

public static class InferenceLogActionNames
{
	public const string Unknown = "Unknown";

	public const string TextGen = "TextGen";

	public const string StoryGen = "StoryGen";

	public const string UserActionInference = "UserActionInference";

	public const string CharacterActionInference = "CharacterActionInference";

	public const string ChatFlow = "ChatFlow";

	public const string Summarization = "Summarization";

	public const string SpecializedSummarization = "SpecializedSummarization";

	public const string MemoryExtraction = "MemoryExtraction";

	public const string MemoryMerge = "MemoryMerge";

	public const string ComputerVision = "ComputerVision";

	public const string ImageGen = "ImageGen";

	public const string ImagePromptGen = "ImagePromptGen";

	public const string Test = "Test";
}

```

## Voxta.Abstractions.Diagnostics\InferenceLogger.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Diagnostics;

[Serializable]
public class InferenceLogger : IInferenceLogger, IDisposable
{
	public Guid? UserId { get; init; }

	public Guid? ChatId { get; init; }

	public Guid? SessionId { get; init; }

	public Guid? MessageId { get; init; }

	public ServiceTypes ServiceType { get; }

	public string ActionName { get; }

	public Guid Id { get; }

	public string ServiceName { get; }

	public DateTimeOffset Timestamp { get; }

	public DateTimeOffset? End { get; private set; }

	public IDisplayable? Request { get; set; }

	public List<string> Chunks { get; }

	public List<string> ThinkingChunks { get; }

	public Dictionary<string, string> Fields { get; }

	public RenderedScenarioAction[]? Functions { get; set; }

	public IReadOnlyCollection<string>? Flags { get; set; }

	public bool? Success { get; set; }

	public InferenceLogger(ServiceTypes serviceType, string serviceName, string actionName, TimeProvider timeProvider, IPerformanceMetricsTracker perf)
	{
		_003CtimeProvider_003EP = timeProvider;
		_003Cperf_003EP = perf;
		ServiceType = serviceType;
		ActionName = actionName;
		Id = Guid.NewGuid();
		ServiceName = serviceName;
		Timestamp = _003CtimeProvider_003EP.GetUtcNow();
		Chunks = new List<string>();
		ThinkingChunks = new List<string>();
		Fields = new Dictionary<string, string>();
		base._002Ector();
	}

	public void Pause()
	{
		_003Cperf_003EP.Pause();
	}

	public void Resume()
	{
		_003Cperf_003EP.Resume();
	}

	public string FormatPromptForDisplay()
	{
		SimpleMessageData[] array = Request?.GetMessages();
		if (array == null)
		{
			return "";
		}
		switch (array.Length)
		{
		case 0:
			return "";
		case 1:
			if (array[0].Role == ChatMessageRole.Undefined)
			{
				return array[0].Value;
			}
			break;
		}
		return string.Join("\n\n", array.Select((SimpleMessageData x) => $"### {x.Role}\n{x.Value}"));
	}

	public void Done()
	{
		End = _003CtimeProvider_003EP.GetUtcNow();
		_003Cperf_003EP.Done();
		Success = true;
	}

	public void Dispose()
	{
		bool? success = Success;
		bool valueOrDefault = success == true;
		if (!success.HasValue)
		{
			valueOrDefault = false;
			bool? success2 = valueOrDefault;
			Success = success2;
		}
	}
}

```

## Voxta.Abstractions.Diagnostics\InferenceLoggerExtensions.cs
```csharp
using Voxta.Abstractions.Services.TextGen;

namespace Voxta.Abstractions.Diagnostics;

public static class InferenceLoggerExtensions
{
	public static void AddToken(this IInferenceLogger logger, LLMOutputToken token)
	{
		if (token.Thinking)
		{
			logger.ThinkingChunks.Add(token.Text);
		}
		else
		{
			logger.Chunks.Add(token.Text);
		}
	}
}

```

## Voxta.Abstractions.Diagnostics\IPerformanceMetrics.cs
```csharp
using System;

namespace Voxta.Abstractions.Diagnostics;

public interface IPerformanceMetrics
{
	IUserPerformanceMetrics OfUser(Guid userId);
}

```

## Voxta.Abstractions.Diagnostics\IPerformanceMetricsTracker.cs
```csharp
namespace Voxta.Abstractions.Diagnostics;

public interface IPerformanceMetricsTracker
{
	void Done();

	void DoneWithDurationCounter(float count, string unit);

	void Pause();

	void Resume();
}

```

## Voxta.Abstractions.Diagnostics\IUserPerformanceMetrics.cs
```csharp
using System;
using System.Collections.Generic;

namespace Voxta.Abstractions.Diagnostics;

public interface IUserPerformanceMetrics
{
	IPerformanceMetricsTracker Start(string key);

	IEnumerable<string> GetKeys();

	(TimeSpan AverageDuration, int Count) GetAverage(string key);

	(float counter, string unit)? GetCounterAverage(string key);

	void Clear();
}

```

## Voxta.Abstractions.Diagnostics\NullInferenceLogger.cs
```csharp
using System.Collections.Generic;

namespace Voxta.Abstractions.Diagnostics;

public class NullInferenceLogger : IInferenceLogger
{
	public static readonly NullInferenceLogger Instance = new NullInferenceLogger();

	public IDisplayable? Request
	{
		set
		{
		}
	}

	public List<string> Chunks { get; } = new List<string>();

	public List<string> ThinkingChunks { get; } = new List<string>();

	public Dictionary<string, string> Fields { get; } = new Dictionary<string, string>();
}

```

## Voxta.Abstractions.Diagnostics\RawDisplayable.cs
```csharp
using System.Collections.Generic;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Diagnostics;

public class RawDisplayable(string value) : IDisplayable
{
	public SimpleMessageData[] GetMessages()
	{
		return new SimpleMessageData[1]
		{
			new SimpleMessageData
			{
				Role = ChatMessageRole.Undefined,
				Value = value
			}
		};
	}

	public Dictionary<string, string> GetDisplayDict()
	{
		return new Dictionary<string, string> { { "Value", value } };
	}
}

```

## Voxta.Abstractions.Downloading\AlreadyDownloadingException.cs
```csharp
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Downloading;

public class AlreadyDownloadingException : VoxtaException
{
	public AlreadyDownloadingException(string message)
		: base(message)
	{
	}
}

```

## Voxta.Abstractions.Downloading\DownloadProgress.cs
```csharp
using System;

namespace Voxta.Abstractions.Downloading;

public record DownloadProgress(Guid UserId, Guid Id, string Target, DownloadStatus Status, int Percent);

```

## Voxta.Abstractions.Downloading\DownloadsEventArgs.cs
```csharp
using System;

namespace Voxta.Abstractions.Downloading;

public class DownloadsEventArgs(DownloadProgress progress) : EventArgs()
{
	public Guid UserId => progress.UserId;

	public Guid Id => progress.Id;

	public string Target => progress.Target;

	public DownloadStatus Status => progress.Status;

	public int Percent => progress.Percent;
}

```

## Voxta.Abstractions.Downloading\DownloadStatus.cs
```csharp
namespace Voxta.Abstractions.Downloading;

public enum DownloadStatus
{
	Pending = 0,
	InProgress = 1,
	Completed = 2,
	Failed = 9
}

```

## Voxta.Abstractions.Downloading\IDownloadsManager.cs
```csharp
using System;
using Voxta.Abstractions.Security;

namespace Voxta.Abstractions.Downloading;

public interface IDownloadsManager
{
	event EventHandler<DownloadsEventArgs> Progress;

	DownloadProgress[] GetDownloads(IAuthenticationContext auth);

	IDownloadTicket GetDownloadTicket(IAuthenticationContext auth, string url);

	void CancelTicket(Guid id);
}

```

## Voxta.Abstractions.Downloading\IDownloadTicket.cs
```csharp
using System;
using System.Threading;

namespace Voxta.Abstractions.Downloading;

public interface IDownloadTicket : IDisposable
{
	CancellationToken Abort { get; }

	void Progress(int percent);

	void Complete();
}

```

## Voxta.Abstractions.Downloading\IProgressDownloader.cs
```csharp
using System.Net.Http;
using Voxta.Abstractions.Security;

namespace Voxta.Abstractions.Downloading;

public interface IProgressDownloader
{
	bool IsDownloading(IAuthenticationContext auth);

	IProgressDownloaderInstance Create(IAuthenticationContext auth);

	IProgressDownloaderInstance Create(IAuthenticationContext auth, HttpClient httpClient);
}

```

## Voxta.Abstractions.Downloading\IProgressDownloaderInstance.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Voxta.Common.Reporting;

namespace Voxta.Abstractions.Downloading;

public interface IProgressDownloaderInstance
{
	Task DownloadFileAsync(string label, string url, string path, IDeferredReporter reporter, CancellationToken cancellationToken);

	void VerifyHashAsync(string label, byte[] bytes, string? hashMethod, string? hashExpected, IDeferredReporter reporter);

	void Extract(string label, string zipPath, byte[] zipBytes, string path, IDeferredReporter reporter);
}

```

## Voxta.Abstractions.Encryption\ILocalEncryptionProvider.cs
```csharp
namespace Voxta.Abstractions.Encryption;

public interface ILocalEncryptionProvider
{
	string Encrypt(string value);

	string Decrypt(string value);
}

```

## Voxta.Abstractions.Encryption\LocalEncryptionProviderExtensions.cs
```csharp
using System;

namespace Voxta.Abstractions.Encryption;

public static class LocalEncryptionProviderExtensions
{
	public static string SafeDecrypt(this ILocalEncryptionProvider provider, string? value)
	{
		if (string.IsNullOrEmpty(value))
		{
			return "";
		}
		try
		{
			return provider.Decrypt(value);
		}
		catch (Exception ex)
		{
			return "Failed to decrypt: " + ex.Message;
		}
	}
}

```

## Voxta.Abstractions.Encryption\NullEncryptionProvider.cs
```csharp
namespace Voxta.Abstractions.Encryption;

public class NullEncryptionProvider : ILocalEncryptionProvider
{
	public string Encrypt(string value)
	{
		return value;
	}

	public string Decrypt(string value)
	{
		return value;
	}
}

```

## Voxta.Abstractions.Exporting.Export\ContentPackageData.cs
```csharp
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Exporting.Export;

public class ContentPackageData
{
	public required Scenario[] Scenarios { get; init; }

	public required Character[] Characters { get; init; }

	public required MemoryBook[] MemoryBooks { get; init; }

	public required Collection[] Collections { get; init; }
}

```

## Voxta.Abstractions.Exporting.Export\ExportData.cs
```csharp
namespace Voxta.Abstractions.Exporting.Export;

public class ExportData(byte[] bytes, string contentType, string filename)
{
	public byte[] Bytes { get; } = bytes;

	public string ContentType { get; } = contentType;

	public string Filename { get; } = filename;
}

```

## Voxta.Abstractions.Exporting.Export\IUserExporter.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Exporting.Export;

public interface IUserExporter
{
	Task<ExportData> ExportAsync(Guid userId, ImportableObject obj, string contentType, string spec, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Exporting.Import\IAppDeployImporter.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Exporting.Import;

public interface IAppDeployImporter
{
	Task<ChatResourceInformation[]> ListAsync(Guid userId, ChatVersionedResourceReference[] resources, CancellationToken cancellationToken);

	Task<ImportableObject?> ImportAsync(Guid userId, ImportableFile data, ImportableFile? thumbnail, IImportableAssetFile[]? assets, bool overwrite, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Exporting.Import\IImportableAssetFile.cs
```csharp
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Exporting.Import;

public interface IImportableAssetFile
{
	string Name { get; }

	Task<byte[]> GetDataAsync(CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Exporting.Import\ImportableAssetFile.cs
```csharp
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Exporting.Import;

public record ImportableAssetFile(string Name, byte[] Data) : IImportableAssetFile
{
	public static ImportableAssetFile FromFilename(string filename, byte[] data)
	{
		return new ImportableAssetFile(filename, data);
	}

	public Task<byte[]> GetDataAsync(CancellationToken cancellationToken)
	{
		return Task.FromResult(Data);
	}
}

```

## Voxta.Abstractions.Exporting.Import\ImportableAssetFileLazy.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Exporting.Import;

public class ImportableAssetFileLazy(string name, Func<Task<byte[]>> getData) : IImportableAssetFile
{
	public string Name => name;

	public Task<byte[]> GetDataAsync(CancellationToken cancellationToken)
	{
		cancellationToken.ThrowIfCancellationRequested();
		return getData();
	}
}

```

## Voxta.Abstractions.Exporting.Import\ImportableEntry.cs
```csharp
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Exporting.Import;

public record ImportableEntry(ImportableObject Importable, ImportableFile? Thumbnail, IImportableAssetFile[] Assets);

```

## Voxta.Abstractions.Exporting.Import\ImportableFile.cs
```csharp
using System.IO;
using Voxta.Common;

namespace Voxta.Abstractions.Exporting.Import;

public record ImportableFile(byte[] Data, string ContentType)
{
	public static ImportableFile FromFilename(string filename, byte[] data)
	{
		string contentTypeFromExtension = ContentTypes.GetContentTypeFromExtension(Path.GetExtension(filename));
		return new ImportableFile(data, contentTypeFromExtension);
	}
}

```

## Voxta.Abstractions.Exporting.Import\ImportFailure.cs
```csharp
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Exporting.Import;

public class ImportFailure
{
	public required ChatResourceKind Kind { get; init; }

	public required string Message { get; init; }
}

```

## Voxta.Abstractions.Exporting.Import\ImportResult.cs
```csharp
using System.Collections.Generic;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Exporting.Import;

public class ImportResult
{
	public List<ImportableObject> Imported { get; } = new List<ImportableObject>();

	public List<ImportFailure> Failures { get; } = new List<ImportFailure>();
}

```

## Voxta.Abstractions.Exporting.Import\InternalImportOptions.cs
```csharp
namespace Voxta.Abstractions.Exporting.Import;

public class InternalImportOptions
{
	public InternalImportOverwriteOptions Overwrite { get; set; }
}

```

## Voxta.Abstractions.Exporting.Import\InternalImportOverwriteOptions.cs
```csharp
namespace Voxta.Abstractions.Exporting.Import;

public enum InternalImportOverwriteOptions
{
	Overwrite,
	New,
	Skip,
	AppDeploy,
	AppDeployOverwrite,
	Fail
}

```

## Voxta.Abstractions.Exporting.Import\IUserImporter.cs
```csharp
using System;
using System.IO;
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Exporting.Import;

public interface IUserImporter
{
	Task<ImportResult> ImportAsync(Guid userId, string filename, Stream thumbnailStream, InternalImportOptions importOptions, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Imaging\IImageResizer.cs
```csharp
using System.IO;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Imaging;

public interface IImageResizer
{
	Task<byte[]> ResizeImageAsync(Stream inputStream, int width, int height, ResizeMode mode, string contentType);
}

```

## Voxta.Abstractions.Imaging\ResizeMode.cs
```csharp
namespace Voxta.Abstractions.Imaging;

public enum ResizeMode
{
	FitIn,
	FillIn
}

```

## Voxta.Abstractions.Model\App.cs
```csharp
using System;

namespace Voxta.Abstractions.Model;

[Serializable]
public class App : OwnedEntity
{
	public required string ClientId { get; init; }

	public DateTimeOffset DateCreated { get; set; }

	public DateTimeOffset DateModified { get; set; }

	protected override string StoreName()
	{
		return "apps";
	}
}

```

## Voxta.Abstractions.Model\AppItem.cs
```csharp
using System;

namespace Voxta.Abstractions.Model;

[Serializable]
public class AppItem
{
	public required Guid Id { get; set; }

	public required string ClientId { get; init; }

	public DateTimeOffset DateCreated { get; set; }

	public DateTimeOffset DateModified { get; set; }
}

```

## Voxta.Abstractions.Model\CacheEntry.cs
```csharp
using System;

namespace Voxta.Abstractions.Model;

[Serializable]
public class CacheEntry
{
	public required string Path { get; init; }

	public DateTimeOffset LastUsed { get; set; }
}

```

## Voxta.Abstractions.Model\Character.cs
```csharp
using System;

namespace Voxta.Abstractions.Model;

[Serializable]
public class Character : CharacterCardExtended, ICharacterItem, IContentPackageResource, IStorableObject
{
	Guid ICharacterItem.Id => base.LocalId;

	public string? Label { get; set; }

	public Guid? PackageId { get; set; }

	public Guid[] MemoryBooks { get; set; } = Array.Empty<Guid>();

	public Guid? ServicesConfigurationsSetId { get; set; }

	public CharacterDefaultScenarioAssignation[] DefaultScenarios { get; set; } = Array.Empty<CharacterDefaultScenarioAssignation>();

	public override string GetDisplayName()
	{
		if (string.IsNullOrEmpty(Label))
		{
			return base.Name;
		}
		return Label;
	}
}

```

## Voxta.Abstractions.Model\CharacterCard.cs
```csharp
using System;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Model;

[Serializable]
public class CharacterCard : ClassifiedResource
{
	public string? Description { get; set; }

	public string? Personality { get; set; }

	public string? Scenario { get; set; }

	public string? FirstMessage { get; set; }

	public string? MessageExamples { get; set; }

	public string? SystemPrompt { get; set; }

	public string? PostHistoryInstructions { get; set; }

	public string? Creator { get; set; }

	public string? CreatorNotes { get; set; }

	protected override string StoreName()
	{
		return "characters";
	}

	public override ChatResourceKind GetKind()
	{
		return ChatResourceKind.Character;
	}
}

```

## Voxta.Abstractions.Model\CharacterCardExtended.cs
```csharp
using System;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Model;

[Serializable]
public class CharacterCardExtended : CharacterCard
{
	public string Culture { get; set; } = "en-US";

	public string? UserNameOverride { get; set; }

	public string? UserDescriptionOverride { get; set; }

	public string? ImportedFrom { get; set; }

	public VoiceServiceMap[] TextToSpeech { get; set; } = Array.Empty<VoiceServiceMap>();

	public string? Profile { get; set; }

	public string? Instructions { get; set; }

	public string? Context { get; set; }

	public ScriptFile[]? Scripts { get; set; }

	public ChatStyles ChatStyle { get; set; }

	public ExplicitContentLevels ExplicitContent { get; set; }

	public bool EnableThinkingSpeech { get; set; }

	public bool NotifyUserAwayReturn { get; set; } = true;

	public bool TimeAware { get; set; } = true;

	public bool UseMemory { get; set; }

	public int MaxTokens { get; set; }

	public int MaxSentences { get; set; }

	public string[] Augmentations { get; set; } = Array.Empty<string>();

	public SystemPromptOverrideTypes SystemPromptOverrideType { get; set; }
}

```

## Voxta.Abstractions.Model\CharacterDefaultScenarioAssignation.cs
```csharp
using System;

namespace Voxta.Abstractions.Model;

[Serializable]
public class CharacterDefaultScenarioAssignation
{
	public string? ClientId { get; set; }

	public Guid ScenarioId { get; set; }
}

```

## Voxta.Abstractions.Model\CharacterItem.cs
```csharp
using System;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Model;

[Serializable]
public class CharacterItem : ClassifiedResourceItemBase, ICharacterItem
{
	public string? Label { get; set; }

	public string? Creator { get; init; }

	public string? CreatorNotes { get; init; }

	public required string Culture { get; init; }

	public ExplicitContentLevels ExplicitContent { get; init; }

	public string? ImportedFrom { get; init; }

	public DateTimeOffset DateCreated { get; set; }

	public DateTimeOffset DateModified { get; set; }

	public ChatStyles ChatStyle { get; init; } = ChatStyles.Undefined;
}

```

## Voxta.Abstractions.Model\Chat.cs
```csharp
using System;
using System.Collections.Generic;

namespace Voxta.Abstractions.Model;

[Serializable]
public class Chat : OwnedEntity, IChat
{
	public bool Favorite { get; set; }

	public string? Title { get; set; }

	public string? Client { get; set; }

	public required List<Guid> Characters { get; set; }

	public Guid? ScenarioId { get; set; }

	public required DateTimeOffset CreatedAt { get; set; }

	public DateTimeOffset? LastSessionTimestamp { get; set; }

	public Dictionary<string, ChatScenarioRole> Roles { get; set; } = new Dictionary<string, ChatScenarioRole>();

	public ChatState State { get; set; } = new ChatState();

	public Guid? LastMemorizedMessage { get; set; }

	public bool Ephemeral { get; set; }

	public bool UseChatMemory { get; set; }

	protected override string StoreName()
	{
		return "chats";
	}
}

```

## Voxta.Abstractions.Model\ChatDocument.cs
```csharp
using System;

namespace Voxta.Abstractions.Model;

[Serializable]
public class ChatDocument : OwnedEntity
{
	public Guid ChatId { get; set; }

	public required string Title { get; set; }

	public int TitleTokens { get; set; }

	public required string Content { get; set; }

	public int ContentTokens { get; set; }

	protected override string StoreName()
	{
		return "documents";
	}
}

```

## Voxta.Abstractions.Model\ChatItem.cs
```csharp
using System;
using System.Collections.Generic;

namespace Voxta.Abstractions.Model;

[Serializable]
public class ChatItem : IChat
{
	Guid IChat.LocalId => Id;

	bool IChat.Ephemeral => false;

	bool IChat.UseChatMemory => false;

	public required Guid Id { get; set; }

	public bool Favorite { get; set; }

	public string? Title { get; set; }

	public string? Client { get; set; }

	public required List<Guid> Characters { get; set; }

	public Guid? ScenarioId { get; set; }

	public required DateTimeOffset CreatedAt { get; set; }

	public DateTimeOffset? LastSessionTimestamp { get; set; }
}

```

## Voxta.Abstractions.Model\ChatMessageData.cs
```csharp
using System;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Model;

[Serializable]
public class ChatMessageData : MessageDataBase, IChatMessageData
{
	public required Guid ChatId { get; set; }

	public required Guid SenderId { get; set; }

	public required DateTimeOffset Timestamp { get; init; }

	public required int Index { get; set; }

	public required int ConversationIndex { get; set; }

	public required long ChatTime { get; set; }

	public Guid? SummarizedBy { get; set; }

	public string? Special { get; set; }

	public override string ToString()
	{
		return (base.User ?? base.Role.ToString()) + ": " + base.Value;
	}
}

```

## Voxta.Abstractions.Model\ChatMessageDataAttachment.cs
```csharp
using System;
using System.Text.Json.Serialization;
using Voxta.Abstractions.Services.VisionCapture;
using Voxta.Common;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Model;

[Serializable]
public class ChatMessageDataAttachment
{
	public Guid Id { get; init; }

	public ComputerVisionSource Source { get; init; } = ComputerVisionSource.Attachment;

	public string? FileName { get; init; }

	public string? Label { get; init; }

	public string? ContentType { get; init; }

	public string? Description { get; set; }

	public int? DescriptionTokens { get; set; }

	[JsonIgnore]
	public IImage? Image { get; set; }

	public string GetAssetPath(Guid messageId)
	{
		if (ContentType == null)
		{
			throw new InvalidOperationException("ContentType is null");
		}
		return $"att_{messageId}_{Id}{ContentTypes.GetExtensionFromContentType(ContentType)}";
	}
}

```

## Voxta.Abstractions.Model\ChatResourceItemBase.cs
```csharp
using System;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Model;

[Serializable]
public abstract class ChatResourceItemBase
{
	public required Guid Id { get; init; }

	public required Guid UserId { get; set; }

	public required string Name { get; init; }

	public required ImageInfo? Thumbnail { get; init; }

	public required bool AppControlled { get; init; }

	public required string? Version { get; init; }

	public Guid? PackageId { get; set; }
}

```

## Voxta.Abstractions.Model\ChatResources.cs
```csharp
using System;

namespace Voxta.Abstractions.Model;

public class ChatResources
{
	public required Guid UserId { get; init; }

	public Scenario? Scenario { get; init; }

	public Scenario? ParentScenario { get; init; }

	public required Character[] Characters { get; init; }

	public Character? Narrator { get; init; }
}

```

## Voxta.Abstractions.Model\ChatScenarioRole.cs
```csharp
using System;

namespace Voxta.Abstractions.Model;

[Serializable]
public class ChatScenarioRole
{
	public Guid? CharacterId { get; set; }

	public bool Enabled { get; set; }
}

```

## Voxta.Abstractions.Model\ChatState.cs
```csharp
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;

namespace Voxta.Abstractions.Model;

[Serializable]
public class ChatState
{
	public List<FlagState> Flags { get; set; } = new List<FlagState>();

	public ConcurrentDictionary<string, object> Variables { get; set; } = new ConcurrentDictionary<string, object>();
}

```

## Voxta.Abstractions.Model\ClassifiedResource.cs
```csharp
using System;

namespace Voxta.Abstractions.Model;

[Serializable]
public abstract class ClassifiedResource : ImportableObject
{
	public Guid? FolderId { get; set; }

	public bool Favorite { get; set; }

	public bool Hidden { get; set; }

	public string[]? Tags { get; set; }
}

```

## Voxta.Abstractions.Model\ClassifiedResourceItemBase.cs
```csharp
using System;

namespace Voxta.Abstractions.Model;

[Serializable]
public abstract class ClassifiedResourceItemBase : ChatResourceItemBase
{
	public Guid? FolderId { get; init; }

	public bool Favorite { get; init; }

	public bool Hidden { get; init; }

	public string[]? Tags { get; init; }
}

```

## Voxta.Abstractions.Model\Collection.cs
```csharp
using System;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Model;

[Serializable]
public class Collection : ClassifiedResource
{
	public string? Description { get; init; }

	public Guid? PackageId { get; set; }

	public bool ExplicitContent { get; init; }

	public required CollectionRoot Root { get; init; }

	protected override string StoreName()
	{
		return "collections";
	}

	public override ChatResourceKind GetKind()
	{
		return ChatResourceKind.Collection;
	}
}

```

## Voxta.Abstractions.Model\CollectionFolder.cs
```csharp
using System;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Model;

[Serializable]
public class CollectionFolder
{
	public string Name { get; set; } = string.Empty;

	public string? Description { get; set; }

	public ChatResourceKind Kind { get; set; }

	public CollectionFolderItem[] Items { get; set; } = Array.Empty<CollectionFolderItem>();
}

```

## Voxta.Abstractions.Model\CollectionFolderItem.cs
```csharp
using System;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Model;

[Serializable]
public class CollectionFolderItem
{
	public required ChatResourceReference Resource { get; set; }
}

```

## Voxta.Abstractions.Model\CollectionItem.cs
```csharp
using System;

namespace Voxta.Abstractions.Model;

[Serializable]
public class CollectionItem : ClassifiedResourceItemBase
{
	public string? Description { get; init; }

	public bool ExplicitContent { get; init; }

	public required DateTimeOffset DateCreated { get; init; }

	public required DateTimeOffset DateModified { get; init; }
}

```

## Voxta.Abstractions.Model\CollectionRoot.cs
```csharp
using System;

namespace Voxta.Abstractions.Model;

[Serializable]
public class CollectionRoot
{
	public CollectionFolder[] Folders { get; set; } = Array.Empty<CollectionFolder>();
}

```

## Voxta.Abstractions.Model\ContentPackage.cs
```csharp
using System;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Model;

[Serializable]
public class ContentPackage : ClassifiedResource, IContentPackageItem
{
	Guid IContentPackageItem.Id => base.LocalId;

	public string? Description { get; set; }

	public string? Creator { get; set; }

	public bool ExplicitContent { get; set; }

	public ChatResourceReference? EntryResource { get; set; }

	public ChatResourceReference? ThumbnailResource { get; set; }

	protected override string StoreName()
	{
		return "packages";
	}

	public override ChatResourceKind GetKind()
	{
		return ChatResourceKind.Package;
	}
}

```

## Voxta.Abstractions.Model\ContentPackageItem.cs
```csharp
using System;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Model;

[Serializable]
public class ContentPackageItem : ClassifiedResourceItemBase, IContentPackageItem
{
	public required string? Description { get; init; }

	public required string? Creator { get; init; }

	public bool ExplicitContent { get; init; }

	public required DateTimeOffset DateCreated { get; init; }

	public required DateTimeOffset DateModified { get; init; }

	public ChatResourceReference? ThumbnailResource { get; init; }

	public ChatResourceReference? EntryResource { get; set; }
}

```

## Voxta.Abstractions.Model\ExportedChat.cs
```csharp
using System;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Model;

[Serializable]
public class ExportedChat : ImportableObject
{
	public required Chat Chat { get; init; }

	public required ChatMessageData[] Messages { get; init; }

	protected override string StoreName()
	{
		throw new NotSupportedException("Exported chats cannot be stored directly");
	}

	public override ChatResourceKind GetKind()
	{
		return ChatResourceKind.Chat;
	}
}

```

## Voxta.Abstractions.Model\FlagState.cs
```csharp
using System;

namespace Voxta.Abstractions.Model;

[Serializable]
public class FlagState
{
	public required string Name { get; init; }

	public long? MessageChatTime { get; init; }

	public int? MessageIndex { get; init; }

	public int ExpireIndex { get; init; }

	public long ExpireTime { get; init; }
}

```

## Voxta.Abstractions.Model\Folder.cs
```csharp
namespace Voxta.Abstractions.Model;

public class Folder : OwnedEntity
{
	public string Name { get; set; } = string.Empty;

	protected override string StoreName()
	{
		return "folders";
	}
}

```

## Voxta.Abstractions.Model\ICharacterItem.cs
```csharp
using System;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Model;

public interface ICharacterItem
{
	Guid Id { get; }

	string Name { get; }

	string? Label { get; }

	string? Version { get; }

	bool AppControlled { get; }

	DateTimeOffset DateCreated { get; }

	DateTimeOffset DateModified { get; }

	string? Creator { get; }

	string? CreatorNotes { get; }

	string Culture { get; }

	ExplicitContentLevels ExplicitContent { get; }

	ImageInfo? Thumbnail { get; }

	string? ImportedFrom { get; }

	string[]? Tags { get; }

	Guid? PackageId { get; }

	ChatStyles ChatStyle { get; }

	Guid? FolderId { get; }

	bool Hidden { get; }

	bool Favorite { get; }
}

```

## Voxta.Abstractions.Model\IChat.cs
```csharp
using System;

namespace Voxta.Abstractions.Model;

public interface IChat
{
	Guid LocalId { get; }

	bool Ephemeral { get; }

	bool UseChatMemory { get; }
}

```

## Voxta.Abstractions.Model\IContentPackageItem.cs
```csharp
using System;

namespace Voxta.Abstractions.Model;

public interface IContentPackageItem
{
	Guid Id { get; }
}

```

## Voxta.Abstractions.Model\IContentPackageResource.cs
```csharp
using System;

namespace Voxta.Abstractions.Model;

public interface IContentPackageResource : IStorableObject
{
	Guid? PackageId { get; set; }
}

```

## Voxta.Abstractions.Model\ImportableObject.cs
```csharp
using System;
using System.Text.Json.Serialization;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Model;

[Serializable]
[JsonPolymorphic]
[JsonDerivedType(typeof(Character), "character")]
[JsonDerivedType(typeof(Scenario), "scenario")]
[JsonDerivedType(typeof(MemoryBook), "book")]
[JsonDerivedType(typeof(ContentPackage), "package")]
[JsonDerivedType(typeof(ExportedChat), "chat")]
[JsonDerivedType(typeof(Collection), "collection")]
public abstract class ImportableObject : OwnedEntity, IStorableObject
{
	public required string Name { get; set; }

	public bool AppControlled { get; set; }

	public bool Locked { get; set; }

	public string Version { get; set; } = "1.0.0";

	public ImageInfo? Thumbnail { get; set; }

	public DateTimeOffset DateCreated { get; set; }

	public DateTimeOffset DateModified { get; set; }

	public abstract ChatResourceKind GetKind();

	public virtual string GetDisplayName()
	{
		return Name;
	}
}

```

## Voxta.Abstractions.Model\IOwnedEntity.cs
```csharp
using System;

namespace Voxta.Abstractions.Model;

public interface IOwnedEntity
{
	string? GlobalId { get; }

	Guid UserId { get; }

	Guid LocalId { get; }

	void ValidateIdentity();
}

```

## Voxta.Abstractions.Model\IStorableObject.cs
```csharp
using System;

namespace Voxta.Abstractions.Model;

public interface IStorableObject
{
	Guid LocalId { get; set; }

	Guid UserId { get; }
}

```

## Voxta.Abstractions.Model\MemoryBook.cs
```csharp
using System;
using System.Collections.Generic;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Model;

[Serializable]
public class MemoryBook : ClassifiedResource, IContentPackageResource, IStorableObject
{
	public Guid? PackageId { get; set; }

	public string? Description { get; set; }

	public bool ExplicitContent { get; set; }

	public string? Creator { get; set; }

	public ChatResourceReference? Owner { get; set; }

	public List<MemoryItem> Items { get; set; } = new List<MemoryItem>();

	protected override string StoreName()
	{
		return "books";
	}

	public override ChatResourceKind GetKind()
	{
		return ChatResourceKind.MemoryBook;
	}
}

```

## Voxta.Abstractions.Model\MemoryBookItem.cs
```csharp
using System;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Model;

[Serializable]
public class MemoryBookItem : ClassifiedResourceItemBase
{
	public required string? Description { get; init; }

	public required string? Creator { get; init; }

	public required bool ExplicitContent { get; init; }

	public required DateTimeOffset DateCreated { get; init; }

	public required DateTimeOffset DateModified { get; init; }

	public required int ItemsCount { get; init; }

	public ChatResourceReference? Owner { get; set; }
}

```

## Voxta.Abstractions.Model\MemoryItem.cs
```csharp
using System;

namespace Voxta.Abstractions.Model;

[Serializable]
public class MemoryItem
{
	public Guid Id { get; set; } = Guid.NewGuid();

	public string[]? Keywords { get; set; }

	public string Text { get; set; } = "";

	public int Weight { get; set; }

	public bool? Deleted { get; set; }

	public DateTimeOffset? CreatedAt { get; set; }

	public DateTimeOffset? LastUpdated { get; set; }

	public DateTimeOffset? DeletedAt { get; set; }

	public Guid? SourceChatId { get; set; }

	public override string ToString()
	{
		return $"{Id}: {Text}";
	}
}

```

## Voxta.Abstractions.Model\MessageDataBase.cs
```csharp
using System;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Model;

[Serializable]
public class MessageDataBase : OwnedEntity
{
	public required ChatMessageRole Role { get; init; }

	public string? User { get; init; }

	public required string Value { get; set; }

	public int Tokens { get; set; }

	public ChatMessageDataAttachment[]? Attachments { get; set; }

	public bool IsConversation => Role.IsConversation();

	protected override string StoreName()
	{
		return "messages";
	}

	public bool HasAttachments()
	{
		ChatMessageDataAttachment[] attachments = Attachments;
		if (attachments != null)
		{
			return attachments.Length > 0;
		}
		return false;
	}

	public bool IsEmpty()
	{
		if (string.IsNullOrWhiteSpace(Value))
		{
			return !HasAttachments();
		}
		return false;
	}

	public override string ToString()
	{
		return (User ?? Role.ToString()) + ": " + Value;
	}
}

```

## Voxta.Abstractions.Model\Module.cs
```csharp
using System;
using System.Collections.Generic;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Model;

[Serializable]
public class Module : OwnedEntity
{
	public string? Label { get; set; }

	public required string ServiceName { get; set; }

	public bool Enabled { get; set; } = true;

	public bool NeedsInstallation { get; set; }

	public bool NeedsPythonInstallation { get; set; }

	public Dictionary<string, string> Configuration { get; set; } = new Dictionary<string, string>();

	protected override string StoreName()
	{
		return "modules";
	}

	public ServiceLink ToServiceLink()
	{
		return new ServiceLink(ServiceName, base.LocalId);
	}

	public ServiceMap ToServiceMap()
	{
		return new ServiceMap
		{
			Service = ToServiceLink()
		};
	}

	public override string ToString()
	{
		if (!string.IsNullOrEmpty(Label))
		{
			return ServiceName + " (" + Label + ")";
		}
		return ServiceName;
	}
}

```

## Voxta.Abstractions.Model\OwnedEntity.cs
```csharp
using System;
using System.Text.Json.Serialization;

namespace Voxta.Abstractions.Model;

[Serializable]
public abstract class OwnedEntity : IOwnedEntity
{
	[JsonIgnore]
	public string? GlobalId
	{
		get
		{
			if (UserId == Guid.Empty || LocalId == Guid.Empty)
			{
				return null;
			}
			return $"urn:voxta:{UserId}:{StoreName()}:{LocalId}";
		}
		init
		{
		}
	}

	[JsonIgnore]
	public Guid UserId { get; set; }

	public Guid LocalId { get; set; }

	protected abstract string StoreName();

	public virtual void ValidateIdentity()
	{
		if (UserId == Guid.Empty)
		{
			throw new InvalidOperationException("UserId is empty");
		}
		if (LocalId == Guid.Empty)
		{
			throw new InvalidOperationException("LocalId is empty");
		}
	}
}

```

## Voxta.Abstractions.Model\ProfileSettings.cs
```csharp
using System;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Model;

[Serializable]
public class ProfileSettings : OwnedEntity
{
	public static readonly Guid RootUserId = VoxtaUser.RootUserId;

	public required string Name { get; set; }

	public string? AuthorName { get; set; }

	public string? Description { get; set; }

	public ImageInfo? Thumbnail { get; set; }

	public bool PauseSpeechRecognitionDuringPlayback { get; set; } = true;

	public bool HideExplicitContent { get; set; }

	public Guid ServicesConfigurationsSetId { get; set; }

	public Guid? AssistantCharacterId { get; set; }

	public Guid? WorkCharacterId { get; set; }

	public Guid? NarratorCharacterId { get; set; }

	public DateTimeOffset Created { get; init; } = DateTimeOffset.UtcNow;

	protected override string StoreName()
	{
		return "profiles";
	}
}

```

## Voxta.Abstractions.Model\Scenario.cs
```csharp
using System;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Model;

[Serializable]
public class Scenario : ScenarioData
{
	public const string ContextKey = "_scenario";

	public const string ScenarioFolder = "scenario";

	public const string ParentScenarioFolder = "base";

	public static readonly Scenario Empty = new Scenario
	{
		LocalId = Guid.Empty,
		Name = "Empty",
		UserId = Guid.Empty,
		Template = "",
		Messages = ""
	};

	public Guid? ParentId { get; set; }

	[Obsolete("Use parent scenarios instead")]
	public Guid? StageId { get; set; }

	public Guid? ServicesConfigurationsSetId { get; set; }

	public override ChatResourceKind GetKind()
	{
		return ChatResourceKind.Scenario;
	}

	public bool IsMainRoleEnabledOnStart()
	{
		if (base.Roles.Length != 0)
		{
			return base.Roles[0].EnabledOnStart;
		}
		return true;
	}
}

```

## Voxta.Abstractions.Model\ScenarioData.cs
```csharp
using System;
using System.Collections.Generic;
using System.Text;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Model;

[Serializable]
public class ScenarioData : ClassifiedResource, IContentPackageResource, IStorableObject
{
	public Guid? PackageId { get; set; }

	public string? Client { get; set; }

	public string? Creator { get; set; }

	public string? Description { get; set; }

	public string? InitScript { get; set; }

	public ScriptFile[] SharedScripts { get; set; } = Array.Empty<ScriptFile>();

	public ScenarioActionDefinition[] Actions { get; set; } = Array.Empty<ScenarioActionDefinition>();

	public ContextDefinition[] Contexts { get; set; } = Array.Empty<ContextDefinition>();

	public ExplicitContentLevels ExplicitContent { get; init; }

	public ChatFlowModes ChatFlow { get; init; }

	public ChatStyles ChatStyle { get; init; } = ChatStyles.Undefined;

	public string Template { get; set; } = string.Empty;

	public string Messages { get; set; } = string.Empty;

	public SystemPromptOverrideTypes SystemPromptOverrideType { get; set; }

	public string? SystemPrompt { get; set; }

	public List<Guid> MemoryBooks { get; init; } = new List<Guid>();

	public ScenarioImpersonation? Impersonation { get; set; }

	public Guid? NarratorCharacterId { get; set; }

	public ScenarioRole[] Roles { get; init; } = Array.Empty<ScenarioRole>();

	public ScenarioEventDefinition[] Events { get; init; } = Array.Empty<ScenarioEventDefinition>();

	protected override string StoreName()
	{
		return "scenarios";
	}

	public static ScenarioData FromCharacter(CharacterCardExtended mainCharacter)
	{
		return new ScenarioData
		{
			Name = mainCharacter.Name,
			UserId = mainCharacter.UserId,
			LocalId = mainCharacter.LocalId,
			Template = (mainCharacter.Scenario ?? ""),
			Messages = BuildMessages(mainCharacter.Instructions, mainCharacter.FirstMessage),
			ChatFlow = ChatFlowModes.Chat,
			ChatStyle = mainCharacter.ChatStyle
		};
	}

	public static ScenarioData WithCharacter(ScenarioData scenario, CharacterCardExtended mainCharacter, bool enabledOnStart)
	{
		if (!string.IsNullOrEmpty(scenario.Messages) && !string.IsNullOrEmpty(scenario.Template))
		{
			return scenario;
		}
		return new ScenarioData
		{
			UserId = scenario.UserId,
			LocalId = scenario.LocalId,
			Name = scenario.Name,
			Creator = scenario.Creator,
			Description = scenario.Description,
			InitScript = scenario.InitScript,
			SharedScripts = scenario.SharedScripts,
			Actions = scenario.Actions,
			Contexts = scenario.Contexts,
			ExplicitContent = scenario.ExplicitContent,
			ChatFlow = scenario.ChatFlow,
			ChatStyle = scenario.ChatStyle,
			Template = ((!string.IsNullOrEmpty(scenario.Template)) ? scenario.Template : (mainCharacter.Scenario ?? "")),
			Messages = ((!string.IsNullOrEmpty(scenario.Messages)) ? scenario.Messages : (enabledOnStart ? BuildMessages(mainCharacter.Instructions, mainCharacter.FirstMessage) : "")),
			MemoryBooks = scenario.MemoryBooks,
			Impersonation = scenario.Impersonation,
			NarratorCharacterId = scenario.NarratorCharacterId,
			Roles = scenario.Roles,
			Events = scenario.Events,
			PackageId = scenario.PackageId,
			Client = scenario.Client
		};
	}

	private static string BuildMessages(string? instructions, string? firstMessage)
	{
		StringBuilder stringBuilder = new StringBuilder();
		if (!string.IsNullOrEmpty(instructions))
		{
			stringBuilder.Append("{{ instructions }}: ");
			stringBuilder.Append(instructions.Replace("\n", "\\n"));
			stringBuilder.Append('\n');
		}
		if (!string.IsNullOrEmpty(firstMessage))
		{
			stringBuilder.Append("{{ char }}: ");
			stringBuilder.Append(firstMessage.Replace("\n", "\\n"));
			stringBuilder.Append('\n');
		}
		return stringBuilder.ToString();
	}

	public override ChatResourceKind GetKind()
	{
		throw new NotImplementedException();
	}
}

```

## Voxta.Abstractions.Model\ScenarioImpersonation.cs
```csharp
using System;

namespace Voxta.Abstractions.Model;

[Serializable]
public class ScenarioImpersonation
{
	public string? Name { get; set; }

	public string? Description { get; set; }
}

```

## Voxta.Abstractions.Model\ScenarioItem.cs
```csharp
using System;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Model;

[Serializable]
public class ScenarioItem : ClassifiedResourceItemBase
{
	public required string? Description { get; init; }

	public string? Client { get; set; }

	public required string? Creator { get; init; }

	public required ExplicitContentLevels ExplicitContent { get; init; }

	public required DateTimeOffset DateCreated { get; init; }

	public required DateTimeOffset DateModified { get; init; }

	public required Guid? ParentId { get; init; }

	public required ChatFlowModes ChatFlow { get; init; }

	public required ChatStyles ChatStyle { get; init; } = ChatStyles.Undefined;

	public required Guid? NarratorCharacterId { get; init; }

	public required ScenarioRole[] Roles { get; init; }
}

```

## Voxta.Abstractions.Model\ScenarioRole.cs
```csharp
using System;

namespace Voxta.Abstractions.Model;

[Serializable]
public class ScenarioRole
{
	public required string Name { get; init; }

	public string? Description { get; init; }

	public Guid? DefaultCharacterId { get; set; }

	public bool EnabledOnStart { get; init; } = true;
}

```

## Voxta.Abstractions.Model\ScriptFile.cs
```csharp
using System;

namespace Voxta.Abstractions.Model;

[Serializable]
public class ScriptFile
{
	public required string Name { get; init; }

	public required string Content { get; set; }
}

```

## Voxta.Abstractions.Model\ServicesConfigurationsSet.cs
```csharp
using System;
using System.Collections.Generic;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Model;

[Serializable]
public class ServicesConfigurationsSet : OwnedEntity
{
	public required string Name { get; set; }

	public Dictionary<ServiceTypes, ServiceTypeConfiguration> Services { get; init; } = new Dictionary<ServiceTypes, ServiceTypeConfiguration>();

	protected override string StoreName()
	{
		return "configurations";
	}

	public void EnsureServiceTypes(Dictionary<ServiceTypes, Guid?> defaultServices)
	{
		ServiceTypes[] values = Enum.GetValues<ServiceTypes>();
		foreach (ServiceTypes serviceTypes in values)
		{
			Guid? value;
			Guid? guid = ((defaultServices.TryGetValue(serviceTypes, out value) && value.HasValue) ? value : ((Guid?)null));
			if (Services.TryGetValue(serviceTypes, out ServiceTypeConfiguration value2))
			{
				ServiceTypeConfiguration serviceTypeConfiguration = value2;
				if (!serviceTypeConfiguration.DefaultServiceId.HasValue)
				{
					Guid? guid2 = (serviceTypeConfiguration.DefaultServiceId = guid);
				}
				if ((serviceTypes == ServiceTypes.TextGen || serviceTypes == ServiceTypes.Memory) ? true : false)
				{
					value2.Disabled = false;
				}
			}
			else
			{
				Services.TryAdd(serviceTypes, new ServiceTypeConfiguration
				{
					DefaultServiceId = guid
				});
			}
		}
	}

	public ServiceTypeModuleConfiguration GetOrCreate(ServiceTypes serviceType, Guid moduleId)
	{
		if (!Services.TryGetValue(serviceType, out ServiceTypeConfiguration value))
		{
			ServiceTypeConfiguration serviceTypeConfiguration = new ServiceTypeConfiguration();
			serviceTypeConfiguration.DefaultServiceId = moduleId;
			ServiceTypeConfiguration serviceTypeConfiguration2 = serviceTypeConfiguration;
			bool flag = (uint)(serviceType - 1) <= 1u;
			serviceTypeConfiguration2.UseSettingsOf = (flag ? new ServiceTypes?(ServiceTypes.TextGen) : ((ServiceTypes?)null));
			value = serviceTypeConfiguration;
			Services[serviceType] = value;
		}
		if (!value.Modules.TryGetValue(moduleId, out ServiceTypeModuleConfiguration value2))
		{
			value2 = new ServiceTypeModuleConfiguration();
			value.Modules[moduleId] = value2;
		}
		return value2;
	}
}

```

## Voxta.Abstractions.Model\ServiceSettings.cs
```csharp
using System;
using System.Collections.Generic;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Model;

[Serializable]
public class ServiceSettings : OwnedEntity
{
	public required Guid ModuleId { get; set; }

	public required ServiceTypes ServiceType { get; init; }

	public string? Label { get; set; }

	public string? Description { get; set; }

	public Dictionary<string, string> Configuration { get; set; } = new Dictionary<string, string>();

	protected override string StoreName()
	{
		return "serviceSettings";
	}

	public override void ValidateIdentity()
	{
		base.ValidateIdentity();
		if (ModuleId == Guid.Empty)
		{
			throw new InvalidOperationException("ModuleId is empty");
		}
	}

	public override string ToString()
	{
		return $"{Label ?? "Unnamed"} ({ServiceType}): {base.LocalId}";
	}
}

```

## Voxta.Abstractions.Model\ServiceTypeConfiguration.cs
```csharp
using System;
using System.Collections.Generic;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Model;

[Serializable]
public class ServiceTypeConfiguration
{
	public bool Disabled { get; set; }

	public Guid? DefaultServiceId { get; set; }

	public bool PreferClientCapability { get; set; } = true;

	public ServiceTypes? UseSettingsOf { get; set; }

	public Dictionary<Guid, ServiceTypeModuleConfiguration> Modules { get; set; } = new Dictionary<Guid, ServiceTypeModuleConfiguration>();
}

```

## Voxta.Abstractions.Model\ServiceTypeModuleConfiguration.cs
```csharp
using System;

namespace Voxta.Abstractions.Model;

[Serializable]
public class ServiceTypeModuleConfiguration
{
	public Guid? ServiceSettingsId { get; set; }
}

```

## Voxta.Abstractions.Model\VoxtaApiKey.cs
```csharp
using System;

namespace Voxta.Abstractions.Model;

[Serializable]
public class VoxtaApiKey : OwnedEntity
{
	public required string Name { get; set; }

	public required string Key { get; set; }

	public required string[] Scopes { get; set; }

	public DateTimeOffset DateCreated { get; init; }

	protected override string StoreName()
	{
		return "apikeys";
	}
}

```

## Voxta.Abstractions.Model\VoxtaApiKeyItem.cs
```csharp
using System;

namespace Voxta.Abstractions.Model;

[Serializable]
public class VoxtaApiKeyItem
{
	public required Guid Id { get; set; }

	public required string Name { get; set; }

	public required string[] Scopes { get; set; }

	public DateTimeOffset DateCreated { get; init; }
}

```

## Voxta.Abstractions.Model\VoxtaRole.cs
```csharp
using System;

namespace Voxta.Abstractions.Model;

[Serializable]
public class VoxtaRole
{
}

```

## Voxta.Abstractions.Model\VoxtaUpgrade.cs
```csharp
using System;

namespace Voxta.Abstractions.Model;

[Serializable]
public class VoxtaUpgrade
{
	public const string MessageType = "VoxtaUpgrade";

	public required string Name { get; init; }

	public required int Version { get; init; }

	public string? Explanation { get; init; }

	public bool Dismissed { get; set; }
}

```

## Voxta.Abstractions.Model\VoxtaUser.cs
```csharp
using System;

namespace Voxta.Abstractions.Model;

[Serializable]
public class VoxtaUser
{
	public static readonly Guid RootUserId = new Guid("8a0e9879-f8c8-4c96-8b07-6b51e49987e2");

	public required Guid Id { get; set; }

	public required string Role { get; set; }

	public DateTimeOffset DateCreated { get; init; }

	public required string UserName { get; set; }

	public string? NormalizedUserName { get; set; }

	public string? PasswordHash { get; set; }
}

```

## Voxta.Abstractions.Model\VoxtaUserItem.cs
```csharp
using System;

namespace Voxta.Abstractions.Model;

[Serializable]
public class VoxtaUserItem
{
	public required Guid Id { get; init; }

	public required string UserName { get; init; }

	public required string Role { get; init; }

	public DateTimeOffset DateCreated { get; init; }
}

```

## Voxta.Abstractions.ModuleRuntimeInstances\IModuleReloadCoordinator.cs
```csharp
using System.Threading.Tasks;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.ModuleRuntimeInstances;

public interface IModuleReloadCoordinator
{
	TaskCompletionSource<bool> RegisterShutDownTask(ServiceTypes serviceType);
}

```

## Voxta.Abstractions.ModuleRuntimeInstances\IModuleRuntimeInstancesManager.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services;

namespace Voxta.Abstractions.ModuleRuntimeInstances;

public interface IModuleRuntimeInstancesManager : IAsyncDisposable
{
	event EventHandler<ModuleRuntimeInstancesChangedEventArgs> Changed;

	IModuleRuntimeTicket<TInstance> NullTicket<TInstance>() where TInstance : class, IModuleRuntimeInstance
	{
		return NullModuleRuntimeInstanceTicket<TInstance>.NullTicket;
	}

	Task<IModuleRuntimeTicket<TClient>> AcquireInstanceAsync<TClient, TConfiguration>(IAuthenticationContext auth, TConfiguration configuration) where TClient : class, IModuleRuntimeInstance<TConfiguration> where TConfiguration : ModuleRuntimeInstanceConfiguration;

	IReadOnlyList<ModuleRuntimeInstanceTicketRef> ListInstances();

	Task<bool> UnloadInstance(Guid id);

	Task UnloadAll();

	Task ShutDownUnusedModulesAsync(ModuleRuntimeCleanupScope scope);
}

```

## Voxta.Abstractions.ModuleRuntimeInstances\IModuleRuntimeTicket.cs
```csharp
using System;
using Voxta.Abstractions.Services;

namespace Voxta.Abstractions.ModuleRuntimeInstances;

public interface IModuleRuntimeTicket<out TInstance> : IModuleRuntimeTicket, IDisposable where TInstance : class, IModuleRuntimeInstance
{
	TInstance Instance { get; }
}
public interface IModuleRuntimeTicket : IDisposable
{
	IModuleRuntimeInstance? GetInstance();
}

```

## Voxta.Abstractions.ModuleRuntimeInstances\ModuleRuntimeCleanupScope.cs
```csharp
namespace Voxta.Abstractions.ModuleRuntimeInstances;

public abstract record ModuleRuntimeCleanupScope;

```

## Voxta.Abstractions.ModuleRuntimeInstances\ModuleRuntimeCleanupScopeAll.cs
```csharp
using System.Runtime.CompilerServices;

namespace Voxta.Abstractions.ModuleRuntimeInstances;

public record ModuleRuntimeCleanupScopeAll : ModuleRuntimeCleanupScope
{
	public static ModuleRuntimeCleanupScopeAll Instance { get; } = new ModuleRuntimeCleanupScopeAll();

	[CompilerGenerated]
	protected ModuleRuntimeCleanupScopeAll(ModuleRuntimeCleanupScopeAll original)
		: base(original)
	{
	}

	public ModuleRuntimeCleanupScopeAll()
	{
	}
}

```

## Voxta.Abstractions.ModuleRuntimeInstances\ModuleRuntimeCleanupScopeForConfigs.cs
```csharp
using System.Diagnostics.CodeAnalysis;
using System.Runtime.CompilerServices;
using Voxta.Abstractions.Configuration;

namespace Voxta.Abstractions.ModuleRuntimeInstances;

public record ModuleRuntimeCleanupScopeForConfigs : ModuleRuntimeCleanupScope
{
	public required ServicesConfigurations PreserveWithConfigs { get; init; }

	[CompilerGenerated]
	[SetsRequiredMembers]
	protected ModuleRuntimeCleanupScopeForConfigs(ModuleRuntimeCleanupScopeForConfigs original)
		: base(original)
	{
		PreserveWithConfigs = original.PreserveWithConfigs;
	}

	public ModuleRuntimeCleanupScopeForConfigs()
	{
	}
}

```

## Voxta.Abstractions.ModuleRuntimeInstances\ModuleRuntimeCleanupScopeForServiceNames.cs
```csharp
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Runtime.CompilerServices;

namespace Voxta.Abstractions.ModuleRuntimeInstances;

public record ModuleRuntimeCleanupScopeForServiceNames : ModuleRuntimeCleanupScope
{
	public required IReadOnlyList<string> ServiceNames { get; init; }

	[CompilerGenerated]
	[SetsRequiredMembers]
	protected ModuleRuntimeCleanupScopeForServiceNames(ModuleRuntimeCleanupScopeForServiceNames original)
		: base(original)
	{
		ServiceNames = original.ServiceNames;
	}

	public ModuleRuntimeCleanupScopeForServiceNames()
	{
	}
}

```

## Voxta.Abstractions.ModuleRuntimeInstances\ModuleRuntimeCleanupScopeForServiceTypes.cs
```csharp
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Runtime.CompilerServices;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.ModuleRuntimeInstances;

public record ModuleRuntimeCleanupScopeForServiceTypes : ModuleRuntimeCleanupScope
{
	public required IReadOnlyList<ServiceTypes> ServiceTypes { get; init; }

	[CompilerGenerated]
	[SetsRequiredMembers]
	protected ModuleRuntimeCleanupScopeForServiceTypes(ModuleRuntimeCleanupScopeForServiceTypes original)
		: base(original)
	{
		ServiceTypes = original.ServiceTypes;
	}

	public ModuleRuntimeCleanupScopeForServiceTypes()
	{
	}
}

```

## Voxta.Abstractions.ModuleRuntimeInstances\ModuleRuntimeCleanupScopeForSingleServiceConfig.cs
```csharp
using System.Diagnostics.CodeAnalysis;
using System.Runtime.CompilerServices;
using Voxta.Abstractions.Configuration;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.ModuleRuntimeInstances;

public record ModuleRuntimeCleanupScopeForSingleServiceConfig : ModuleRuntimeCleanupScope
{
	public required ServiceTypes ServiceType { get; init; }

	public required ServiceConfiguration PreserveWithConfig { get; init; }

	[CompilerGenerated]
	[SetsRequiredMembers]
	protected ModuleRuntimeCleanupScopeForSingleServiceConfig(ModuleRuntimeCleanupScopeForSingleServiceConfig original)
		: base(original)
	{
		ServiceType = original.ServiceType;
		PreserveWithConfig = original.PreserveWithConfig;
	}

	public ModuleRuntimeCleanupScopeForSingleServiceConfig()
	{
	}
}

```

## Voxta.Abstractions.ModuleRuntimeInstances\ModuleRuntimeInstanceConfiguration.cs
```csharp
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Runtime.CompilerServices;
using Voxta.Abstractions.Configuration;
using Voxta.Common;

namespace Voxta.Abstractions.ModuleRuntimeInstances;

public abstract record ModuleRuntimeInstanceConfiguration
{
	public required Dictionary<string, string> ModuleFields { get; init; }

	public Dictionary<string, string>? ServiceSettingsFields { get; init; }

	public abstract string Name { get; }

	public abstract string GetLabel();

	public bool Match(ServiceConfiguration serviceConfiguration)
	{
		if (serviceConfiguration.Module == null)
		{
			return false;
		}
		if (!ModuleFields.All<KeyValuePair<string, string>>((KeyValuePair<string, string> x) => serviceConfiguration.Module.ModuleConfiguration.GetValueOrDefault(x.Key)?.NullWhenEmpty() == x.Value.NullWhenEmpty()))
		{
			return false;
		}
		if (ServiceSettingsFields == null)
		{
			return true;
		}
		if (ServiceSettingsFields.Count == 0)
		{
			return true;
		}
		Dictionary<string, string> serviceConfigurationSettings = serviceConfiguration.Settings?.ServiceSettings ?? new Dictionary<string, string>();
		return ServiceSettingsFields.All<KeyValuePair<string, string>>((KeyValuePair<string, string> x) => serviceConfigurationSettings.GetValueOrDefault(x.Key)?.NullWhenEmpty() == x.Value.NullWhenEmpty());
	}

	public virtual bool Equals(ModuleRuntimeInstanceConfiguration? other)
	{
		if (other != null)
		{
			return other.GetType() == GetType();
		}
		return false;
	}

	[CompilerGenerated]
	[SetsRequiredMembers]
	protected ModuleRuntimeInstanceConfiguration(ModuleRuntimeInstanceConfiguration original)
	{
		ModuleFields = original.ModuleFields;
		ServiceSettingsFields = original.ServiceSettingsFields;
	}

	protected ModuleRuntimeInstanceConfiguration()
	{
	}
}

```

## Voxta.Abstractions.ModuleRuntimeInstances\ModuleRuntimeInstancesChangedEventArgs.cs
```csharp
using System;
using System.Collections.Generic;

namespace Voxta.Abstractions.ModuleRuntimeInstances;

public class ModuleRuntimeInstancesChangedEventArgs(IReadOnlyList<ModuleRuntimeInstanceTicketRef> instances) : EventArgs()
{
	public IReadOnlyList<ModuleRuntimeInstanceTicketRef> Instances { get; } = instances;
}

```

## Voxta.Abstractions.ModuleRuntimeInstances\ModuleRuntimeInstanceStatus.cs
```csharp
namespace Voxta.Abstractions.ModuleRuntimeInstances;

public enum ModuleRuntimeInstanceStatus
{
	Undefined,
	Starting,
	Running,
	ShuttingDown
}

```

## Voxta.Abstractions.ModuleRuntimeInstances\ModuleRuntimeInstanceTicketRef.cs
```csharp
using System;
using System.Diagnostics.CodeAnalysis;
using System.Runtime.CompilerServices;

namespace Voxta.Abstractions.ModuleRuntimeInstances;

public record ModuleRuntimeInstanceTicketRef
{
	public required Guid Id { get; init; }

	public required DateTimeOffset CreatedAt { get; init; }

	public required ModuleRuntimeInstanceStatus Status { get; init; }

	public required ModuleRuntimeInstanceConfiguration Configuration { get; init; }

	[CompilerGenerated]
	[SetsRequiredMembers]
	protected ModuleRuntimeInstanceTicketRef(ModuleRuntimeInstanceTicketRef original)
	{
		Id = original.Id;
		CreatedAt = original.CreatedAt;
		Status = original.Status;
		Configuration = original.Configuration;
	}

	public ModuleRuntimeInstanceTicketRef()
	{
	}
}

```

## Voxta.Abstractions.ModuleRuntimeInstances\NullModuleRuntimeInstanceTicket.cs
```csharp
using System;
using Voxta.Abstractions.Services;

namespace Voxta.Abstractions.ModuleRuntimeInstances;

public class NullModuleRuntimeInstanceTicket<TInstance> : IModuleRuntimeTicket<TInstance>, IModuleRuntimeTicket, IDisposable where TInstance : class, IModuleRuntimeInstance
{
	public static IModuleRuntimeTicket<TInstance> NullTicket { get; } = new NullModuleRuntimeInstanceTicket<TInstance>();

	public TInstance Instance
	{
		get
		{
			throw new NotSupportedException("No module instance ticket has been created yet");
		}
	}

	public IModuleRuntimeInstance? GetInstance()
	{
		return null;
	}

	public void Dispose()
	{
	}
}

```

## Voxta.Abstractions.ModuleRuntimeInstances\SettingsSourceExtensions.cs
```csharp
using System.Collections.Generic;
using System.Linq;
using Voxta.Abstractions.Registration;

namespace Voxta.Abstractions.ModuleRuntimeInstances;

public static class SettingsSourceExtensions
{
	public static Dictionary<string, string> GetRequiredFields(this ISettingsSource source, string[] keys)
	{
		return keys.ToDictionary((string key) => key, source.GetRawValue);
	}
}

```

## Voxta.Abstractions.Modules\IVoxtaModule.cs
```csharp
namespace Voxta.Abstractions.Modules;

public interface IVoxtaModule
{
	void Configure(IVoxtaModuleBuilder builder);
}

```

## Voxta.Abstractions.Modules\IVoxtaModuleBuilder.cs
```csharp
using System.Diagnostics.CodeAnalysis;
using Microsoft.Extensions.DependencyInjection;
using Voxta.Abstractions.Configuration;
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

namespace Voxta.Abstractions.Modules;

public interface IVoxtaModuleBuilder
{
	IServiceCollection Services { get; }

	VoxtaGlobalOptions Options { get; }

	void Register(ModuleDefinition moduleDefinition);

	void AddModuleRuntimeInstance<TService, [DynamicallyAccessedMembers(DynamicallyAccessedMemberTypes.PublicConstructors)] TImplementation>() where TService : class, IModuleRuntimeInstance where TImplementation : class, TService;

	void AddSummarizationService<[DynamicallyAccessedMembers(DynamicallyAccessedMemberTypes.PublicConstructors)] TService>(string serviceKey) where TService : class, ISummarizationService;

	void AddActionInferenceService<[DynamicallyAccessedMembers(DynamicallyAccessedMemberTypes.PublicConstructors)] TService>(string serviceKey) where TService : class, IActionInferenceService;

	void AddTextToSpeechService<[DynamicallyAccessedMembers(DynamicallyAccessedMemberTypes.PublicConstructors)] TService>(string serviceKey) where TService : class, ITextToSpeechService;

	void AddTextGenService<[DynamicallyAccessedMembers(DynamicallyAccessedMemberTypes.PublicConstructors)] TService>(string serviceKey) where TService : class, ITextGenService;

	void AddSpeechToTextService<[DynamicallyAccessedMembers(DynamicallyAccessedMemberTypes.PublicConstructors)] TService>(string serviceKey) where TService : class, ISpeechToTextService;

	void AddAudioInputService<[DynamicallyAccessedMembers(DynamicallyAccessedMemberTypes.PublicConstructors)] TService>(string serviceKey) where TService : class, IAudioInputService;

	void AddAudioOutputService<[DynamicallyAccessedMembers(DynamicallyAccessedMemberTypes.PublicConstructors)] TService>(string serviceKey) where TService : class, IAudioOutputService;

	void AddAudioPipelineService<[DynamicallyAccessedMembers(DynamicallyAccessedMemberTypes.PublicConstructors)] TService>(string serviceKey) where TService : class, IAudioInputPipelineService;

	void AddWakeWordService<[DynamicallyAccessedMembers(DynamicallyAccessedMemberTypes.PublicConstructors)] TService>(string serviceKey) where TService : class, IWakeWordService;

	void AddVisionCaptureService<[DynamicallyAccessedMembers(DynamicallyAccessedMemberTypes.PublicConstructors)] TService>(string serviceKey) where TService : class, IVisionCaptureService;

	void AddComputerVisionService<[DynamicallyAccessedMembers(DynamicallyAccessedMemberTypes.PublicConstructors)] TService>(string serviceKey) where TService : class, IComputerVisionService;

	void AddChatAugmentationsService<[DynamicallyAccessedMembers(DynamicallyAccessedMemberTypes.PublicConstructors)] TService>(string serviceKey) where TService : class, IChatAugmentationsService;

	void AddMemoryProviderService<[DynamicallyAccessedMembers(DynamicallyAccessedMemberTypes.PublicConstructors)] TService>(string serviceKey) where TService : class, IMemoryProviderService;

	void AddImageGenService<[DynamicallyAccessedMembers(DynamicallyAccessedMemberTypes.PublicConstructors)] TService>(string serviceKey) where TService : class, IImageGenService;
}

```

## Voxta.Abstractions.Modules\IVoxtaModuleTestingProvider.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Registration;
using Voxta.Abstractions.Security;

namespace Voxta.Abstractions.Modules;

public interface IVoxtaModuleTestingProvider
{
	Task<ModuleTestResultItem[]> TestModuleAsync(IAuthenticationContext auth, Guid moduleId, ISettingsSource settings, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Modules\ModuleTestResultItem.cs
```csharp
using System;

namespace Voxta.Abstractions.Modules;

[Serializable]
public class ModuleTestResultItem
{
	public required bool Success { get; init; }

	public required string Message { get; init; }
}

```

## Voxta.Abstractions.Modules\VoxtaModuleTestingSpeechToText.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Configuration;
using Voxta.Abstractions.ModuleRuntimeInstances;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services;
using Voxta.Abstractions.Services.AudioInput;
using Voxta.Abstractions.Services.AudioInput.Pipeline;
using Voxta.Abstractions.Services.SpeechToText;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Modules;

public class VoxtaModuleTestingSpeechToText(IServiceFactory serviceFactory, IAudioInputPipelineFactory audioInputPipelineFactory, IServicesConfigurationsSetResolver servicesConfigurationsSetResolver, IModuleRuntimeInstancesManager moduleRuntimeInstancesManager, ILogger logger)
{
	public async Task<ModuleTestResultItem[]> TestSpeechToTextAsync(IAuthenticationContext auth, Guid moduleId, CancellationToken cancellationToken)
	{
		List<ModuleTestResultItem> results = new List<ModuleTestResultItem>();
		try
		{
			ServiceConfiguration sttConfig = await servicesConfigurationsSetResolver.ResolveOneWithDefaultConfigAsync(auth.UserId, moduleId, ServiceTypes.SpeechToText, cancellationToken);
			ServiceConfiguration audioInputConfig = await servicesConfigurationsSetResolver.ResolveOneWithDefaultConfigAsync(auth.UserId, ServiceTypes.AudioInput, cancellationToken);
			ModuleRuntimeCleanupScopeForSingleServiceConfig scope = new ModuleRuntimeCleanupScopeForSingleServiceConfig
			{
				ServiceType = ServiceTypes.SpeechToText,
				PreserveWithConfig = sttConfig
			};
			await moduleRuntimeInstancesManager.ShutDownUnusedModulesAsync(scope);
			await using ISpeechToTextService stt = await serviceFactory.CreateAsync<ISpeechToTextService>(auth, sttConfig, cancellationToken);
			await using IAudioInputService audioInputService = await serviceFactory.CreateAsync<IAudioInputService>(auth, audioInputConfig, cancellationToken);
			await using IAudioInputPipeline audioInputPipeline = await audioInputPipelineFactory.CreateAsync(auth, audioInputService, null, audioInputService.GetSpecifications(), cancellationToken);
			await stt.InitializeTranscriptionAsync(audioInputService.GetSpecifications(), "en-US", cancellationToken);
			await stt.StartTranscriptionAsync(audioInputPipeline, cancellationToken);
			await Task.Delay(1000, cancellationToken);
			await stt.StopTranscriptionAsync();
			results.Add(new ModuleTestResultItem
			{
				Success = true,
				Message = "Transcription service initialized successfully."
			});
		}
		catch (Exception ex)
		{
			logger.LogError(ex, "Error testing text to speech API ");
			results.Add(new ModuleTestResultItem
			{
				Success = false,
				Message = "Error testing speech to text: " + ex.Message
			});
		}
		return results.ToArray();
	}
}

```

## Voxta.Abstractions.Modules\VoxtaModuleTestingTextGen.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Configuration;
using Voxta.Abstractions.Diagnostics;
using Voxta.Abstractions.ModuleRuntimeInstances;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services;
using Voxta.Abstractions.Services.TextGen;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Modules;

public class VoxtaModuleTestingTextGen(IServiceFactory serviceFactory, IInferenceLoggersManager inferenceLoggersManager, IServicesConfigurationsSetResolver servicesConfigurationsSetResolver, IModuleRuntimeInstancesManager moduleRuntimeInstancesManager, ILogger logger)
{
	public async Task<ModuleTestResultItem[]> TestTextGenAsync(IAuthenticationContext auth, Guid moduleId, CancellationToken cancellationToken)
	{
		List<ModuleTestResultItem> results = new List<ModuleTestResultItem>();
		try
		{
			ServiceConfiguration config = await servicesConfigurationsSetResolver.ResolveOneWithDefaultConfigAsync(auth.UserId, moduleId, ServiceTypes.TextGen, cancellationToken);
			if (config == null)
			{
				throw new NullReferenceException("Default services configuration set for TextGen is null.");
			}
			ModuleRuntimeCleanupScopeForSingleServiceConfig scope = new ModuleRuntimeCleanupScopeForSingleServiceConfig
			{
				ServiceType = ServiceTypes.TextGen,
				PreserveWithConfig = config
			};
			await moduleRuntimeInstancesManager.ShutDownUnusedModulesAsync(scope);
			await using ITextGenService textGen = await serviceFactory.CreateAsync<ITextGenService>(auth, config, cancellationToken);
			GenerateReplyRequest generateReplyRequest = new GenerateReplyRequest();
			generateReplyRequest.Messages = new SimpleMessageData[1]
			{
				new SimpleMessageData
				{
					Role = ChatMessageRole.User,
					Value = "Write the result of 2 + 2, nothing else."
				}
			};
			generateReplyRequest.MaxNewTokens = 10;
			generateReplyRequest.Type = GenerateReplyRequestType.Chat;
			generateReplyRequest.StoppingStrings = Array.Empty<string>();
			GenerateReplyRequest request = generateReplyRequest;
			InferenceLogger observer = inferenceLoggersManager.Record(textGen.InstanceSettings.ServiceType, textGen.InstanceSettings.ServiceName, "Test");
			string text = await textGen.GenerateAsync(request, observer, cancellationToken);
			if (!string.IsNullOrWhiteSpace(text))
			{
				results.Add(new ModuleTestResultItem
				{
					Success = true,
					Message = "The text completion API is working as expected!"
				});
			}
			else
			{
				results.Add(new ModuleTestResultItem
				{
					Success = false,
					Message = "The module is working but the output was unexpected: '" + text + "'"
				});
			}
		}
		catch (Exception ex)
		{
			logger.LogError(ex, "Error testing text to speech API ");
			results.Add(new ModuleTestResultItem
			{
				Success = false,
				Message = "Error testing text completion API: " + ex.Message
			});
		}
		return results.ToArray();
	}
}

```

## Voxta.Abstractions.Modules\VoxtaModuleTestingTextToSpeech.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Configuration;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services;
using Voxta.Abstractions.Services.AudioOutput.Tunneling;
using Voxta.Abstractions.Services.TextToSpeech;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Modules;

public class VoxtaModuleTestingTextToSpeech(IServiceFactory serviceFactory, IServicesConfigurationsSetResolver servicesConfigurationsSetResolver, ILogger logger)
{
	public async Task<ModuleTestResultItem[]> TestTextToSpeechAsync(IAuthenticationContext auth, Guid moduleId, CancellationToken cancellationToken)
	{
		List<ModuleTestResultItem> results = new List<ModuleTestResultItem>();
		try
		{
			ServiceConfiguration config = await servicesConfigurationsSetResolver.ResolveOneWithDefaultConfigAsync(auth.UserId, moduleId, ServiceTypes.TextToSpeech, cancellationToken);
			await using ITextToSpeechService tts = await serviceFactory.CreateAsync<ITextToSpeechService>(auth, config, cancellationToken);
			SpeechRequest request = new SpeechRequest
			{
				UserId = auth.UserId,
				Culture = "en-US",
				Text = "Hi!",
				Voice = null
			};
			DeadSpeechTunnel tunnel = new DeadSpeechTunnel();
			await tts.GenerateSpeechAsync(request, tunnel, cancellationToken);
			if (tunnel.Bytes > 0)
			{
				results.Add(new ModuleTestResultItem
				{
					Success = true,
					Message = "The text to speech API is working as expected!"
				});
			}
			else
			{
				results.Add(new ModuleTestResultItem
				{
					Success = false,
					Message = "The text to speech API did not return any audio data."
				});
			}
			if (tunnel.ContentType != null && tunnel.ContentType.StartsWith("audio/"))
			{
				results.Add(new ModuleTestResultItem
				{
					Success = true,
					Message = "The text to speech API returned a valid content type: " + tunnel.ContentType
				});
			}
			else
			{
				results.Add(new ModuleTestResultItem
				{
					Success = false,
					Message = "The text to speech API did not return a valid audio content type: " + tunnel.ContentType
				});
			}
		}
		catch (Exception ex)
		{
			logger.LogError(ex, "Error testing text to speech API ");
			results.Add(new ModuleTestResultItem
			{
				Success = false,
				Message = "Error testing text to speech API: " + ex.Message
			});
		}
		return results.ToArray();
	}
}

```

## Voxta.Abstractions.Prompting\AttachmentHandlingTypes.cs
```csharp
namespace Voxta.Abstractions.Prompting;

public enum AttachmentHandlingTypes
{
	None,
	AsMessages,
	AsAttachments
}

```

## Voxta.Abstractions.Prompting\ChatMessagesFormattingStyle.cs
```csharp
namespace Voxta.Abstractions.Prompting;

public enum ChatMessagesFormattingStyle
{
	Normal,
	PrefixMessagesWithName,
	SingleUserMessage
}

```

## Voxta.Abstractions.Prompting\ChatMessagesFormattingStyleExtensions.cs
```csharp
namespace Voxta.Abstractions.Prompting;

public static class ChatMessagesFormattingStyleExtensions
{
	public static bool IsInstructStyle(this ChatMessagesFormattingStyle style)
	{
		return style == ChatMessagesFormattingStyle.SingleUserMessage;
	}
}

```

## Voxta.Abstractions.Prompting\ConstrainedChatMessages.cs
```csharp
using System.Collections.Generic;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Prompting;

public record ConstrainedChatMessages(List<SimpleMessageData> ChatMessages, int TotalMessagesTokens, int RetainedMessagesTokens);

```

## Voxta.Abstractions.Prompting\GenerateReplyConstraints.cs
```csharp
using Voxta.Abstractions.TextGenerationStreaming;

namespace Voxta.Abstractions.Prompting;

public class GenerateReplyConstraints
{
	public required double MaxMemoryTokensRatio { get; init; }

	public required int MaxInputTokens { get; init; }

	public required int MaxNewTokens { get; init; }

	public ChatMessagesFormattingStyle FormattingStyle { get; init; }

	public ReasoningStyle Reasoning { get; init; }

	public bool PostHistorySupport { get; init; }

	public bool AllowMultipleLines { get; init; }

	public TextProcessingOptions TextProcessing { get; init; }

	public bool Multimodal { get; init; }
}

```

## Voxta.Abstractions.Prompting\IPromptBuilder.cs
```csharp
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Services.ActionInference;
using Voxta.Abstractions.Services.TextGen;
using Voxta.Abstractions.Services.VisionCapture;
using Voxta.Abstractions.Templating;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Prompting;

public interface IPromptBuilder
{
	string RenderMessage(string id, IChatInferenceData chat, ICharacterInferenceData character, string message);

	ITemplateModel CreateChatModel(IChatInferenceData chat, ICharacterOrUserData character);

	Task<ITemplateModel> CreateFullChatModelAsync(IChatInferenceData chat, ICharacterInferenceData character, PromptCategories promptCategory, CancellationToken cancellationToken);

	string Render(ITemplate template, ITemplateModel model);

	RenderedScenarioAction RenderFunction(IScenarioActionInstance function, ITemplateModel model);

	ValueTask<GenerateReplyRequest> CreateReplyRequest(IChatInferenceData chat, ICharacterInferenceData character, GenerateReplyConstraints constraints, string? prefix, CancellationToken cancellationToken);

	ValueTask<GenerateReplyRequest> CreateStoryWriterRequest(IChatInferenceData chat, string eventDescription, GenerateReplyConstraints constraints, string? prefix, CancellationToken cancellationToken);

	ValueTask<GenerateReplyRequest> CreateSummarizationRequest(IChatInferenceData chat, IReadOnlyList<ChatMessageData> messagesToSummarize, CancellationToken cancellationToken);

	ValueTask<GenerateReplyRequest> CreateMemoryExtractionRequest(IChatInferenceData chat, ICharacterInferenceData character, IReadOnlyList<IChatMessageData> messagesToExtract, CancellationToken cancellationToken);

	ValueTask<GenerateReplyRequest> CreateMemoryMergeRequest(IChatInferenceData chat, IReadOnlyList<MemoryItem> memories, CancellationToken cancellationToken);

	ValueTask<GenerateReplyRequest> CreateActionInferenceRequest(IChatInferenceData chat, ChatMessageData message, RenderedScenarioAction[] functions, string layer, ICharacterInferenceData mainCharacter, ICharacterInferenceData targetCharacter, ActionInferenceType type, string? prefix, string[] stoppingStrings, CancellationToken cancellationToken);

	ValueTask<GenerateReplyRequest> CreateComputerVisionRequest(IChatInferenceData chat, ICharacterInferenceData character, IImage image, CancellationToken cancellationToken);

	GenerateReplyRequest CreateComputerVisionRequest(IImage image);

	ValueTask<GenerateReplyRequest> CreateImagePromptGenRequest(IChatInferenceData chat, string? instructions, CancellationToken cancellationToken);

	Task<ConstrainedChatMessages> GetConstrainedChatMessages(IChatInstanceMessagesReadToken chatToken, int maxTokens, AttachmentHandlingTypes attachmentsHandling, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Prompting\IPromptBuilderFactory.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Tokenizers;

namespace Voxta.Abstractions.Prompting;

public interface IPromptBuilderFactory
{
	Task<IPromptBuilder> CreateAsync(IPromptTemplatesLoader loader, IServiceItemReference<ITokenizer> tokenizer, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Prompting\IPromptFormatter.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Services.TextGen;

namespace Voxta.Abstractions.Prompting;

public interface IPromptFormatter
{
	ValueTask<int> GetReservedTokens(string userName, string characterName, CancellationToken cancellationToken);

	string FormatPrompt(GenerateReplyRequest request);
}

```

## Voxta.Abstractions.Prompting\IPromptFormatterFactory.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Tokenizers;

namespace Voxta.Abstractions.Prompting;

public interface IPromptFormatterFactory
{
	string GenericPromptFormattingTemplateId { get; }

	Task<PromptFormatEntry[]> GetAllPromptFormattingTemplatesAsync(CancellationToken cancellationToken);

	ValueTask<IPromptFormatter> CreateAsync(string? name, IServiceItemReference<ITokenizer> tokenizer, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Prompting\IPromptTemplatesIncludesLoader.cs
```csharp
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Prompting;

public interface IPromptTemplatesIncludesLoader
{
	Task<string> LoadAsync(string key, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Prompting\IPromptTemplatesLoader.cs
```csharp
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Prompting;

public interface IPromptTemplatesLoader
{
	Task<(string Filename, string Template)> LoadAsync(string category, string key, CancellationToken cancellationToken);

	IPromptTemplatesIncludesLoader CreateIncludesLoader(string category);
}

```

## Voxta.Abstractions.Prompting\IPromptTemplatesLoaderFactory.cs
```csharp
namespace Voxta.Abstractions.Prompting;

public interface IPromptTemplatesLoaderFactory
{
	IPromptTemplatesLoader CreatePromptTemplatesLoader(string culture);
}

```

## Voxta.Abstractions.Prompting\NullPromptTemplatesIncludesLoader.cs
```csharp
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Prompting;

public class NullPromptTemplatesIncludesLoader : IPromptTemplatesIncludesLoader
{
	public static NullPromptTemplatesIncludesLoader Instance { get; } = new NullPromptTemplatesIncludesLoader();

	public Task<string> LoadAsync(string key, CancellationToken cancellationToken)
	{
		return Task.FromResult(string.Empty);
	}
}

```

## Voxta.Abstractions.Prompting\PromptFormatEntry.cs
```csharp
using System;

namespace Voxta.Abstractions.Prompting;

[Serializable]
public class PromptFormatEntry
{
	public required string Name { get; init; }

	public required string Directory { get; init; }

	public override string ToString()
	{
		return Name + " (" + Directory + ")";
	}
}

```

## Voxta.Abstractions.Prompting\ReasoningStyle.cs
```csharp
namespace Voxta.Abstractions.Prompting;

public enum ReasoningStyle
{
	None,
	InOutputTokens,
	InResponseObjects
}

```

## Voxta.Abstractions.PythonIntegration\IPythonAccessor.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Security;
using Voxta.Common.Reporting;

namespace Voxta.Abstractions.PythonIntegration;

public interface IPythonAccessor : IDisposable
{
	bool Enabled { get; }

	bool Initialized { get; }

	string PythonExecutablePath { get; }

	string SitePackages { get; }

	string VoxtaModulesScripts { get; }

	void Initialize();

	void SetupEnvironmentVariables();

	Task EnsurePythonAsync(IAuthenticationContext auth, IDeferredReporter reporter, CancellationToken cancellationToken = default(CancellationToken));

	Task WriteRequirementsFileAsync(IReadOnlyList<(string Requirement, string ServiceName)> dependencies, CancellationToken cancellationToken = default(CancellationToken));

	Task InstallRequirementsAsync(IDeferredReporter reporter, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.PythonIntegration\NullPythonAccessor.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Security;
using Voxta.Common.Reporting;

namespace Voxta.Abstractions.PythonIntegration;

public class NullPythonAccessor : IPythonAccessor, IDisposable
{
	public bool Enabled => false;

	public bool Initialized => false;

	public string PythonExecutablePath
	{
		get
		{
			throw new NotSupportedException("Python is not enabled");
		}
	}

	public string SitePackages
	{
		get
		{
			throw new NotSupportedException("Python is not enabled");
		}
	}

	public string VoxtaModulesScripts
	{
		get
		{
			throw new NotSupportedException("Python is not enabled");
		}
	}

	public void Initialize()
	{
	}

	public void SetupEnvironmentVariables()
	{
	}

	public Task EnsurePythonAsync(IAuthenticationContext auth, IDeferredReporter reporter, CancellationToken cancellationToken = default(CancellationToken))
	{
		return Task.CompletedTask;
	}

	public Task WriteRequirementsFileAsync(IReadOnlyList<(string Requirement, string ServiceName)> dependencies, CancellationToken cancellationToken = default(CancellationToken))
	{
		return Task.CompletedTask;
	}

	public Task InstallRequirementsAsync(IDeferredReporter reporter, CancellationToken cancellationToken)
	{
		return Task.CompletedTask;
	}

	public void Dispose()
	{
	}
}

```

## Voxta.Abstractions.Registration\EmptySettingsSource.cs
```csharp
using System.Collections.Generic;

namespace Voxta.Abstractions.Registration;

public class EmptySettingsSource : SettingsSourceBase
{
	public static readonly ISettingsSource Instance = new EmptySettingsSource();

	private static readonly Dictionary<string, string> _emptySettings = new Dictionary<string, string>();

	protected override Dictionary<string, string> Settings => _emptySettings;
}

```

## Voxta.Abstractions.Registration\IModuleConfigurationProvider.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Security;
using Voxta.Common.Reporting;
using Voxta.Model.ApiMessages.Requests;
using Voxta.Model.ApiMessages.Responses;
using Voxta.Model.Shared.Forms;

namespace Voxta.Abstractions.Registration;

public interface IModuleConfigurationProvider
{
	Task<FormField[]> GetModuleConfigurationFieldsAsync(IAuthenticationContext auth, ISettingsSource settings, CancellationToken cancellationToken);

	Task UpdateModuleConfigurationAsync(ISettingsSource settings);

	Task DownloadAsync(IAuthenticationContext auth, ISettingsSource settings, string value, IDeferredReporter reporter, CancellationToken cancellationToken);

	Task<FormInvokeActionResponse> InvokeAction(StaticSettingsSource settings, FormInvokeActionRequest request, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Registration\IModuleDefinitionsRegistry.cs
```csharp
using System.Collections.Generic;

namespace Voxta.Abstractions.Registration;

public interface IModuleDefinitionsRegistry
{
	bool Exists(string serviceName);

	ModuleDefinition Get(string serviceName);

	IEnumerable<ModuleDefinition> List();
}

```

## Voxta.Abstractions.Registration\InstanceSettingsSource.cs
```csharp
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Registration;

public class InstanceSettingsSource(ServiceTypes serviceType, Func<Dictionary<string, string>> fn) : SettingsSourceBase()
{
	protected override Dictionary<string, string> Settings => fn();

	protected override bool TryGetValue(string key, [NotNullWhen(true)] out string? value)
	{
		if (Settings.TryGetValue($"{serviceType}:{key}", out value))
		{
			return true;
		}
		return Settings.TryGetValue(key, out value);
	}
}

```

## Voxta.Abstractions.Registration\IServiceInstallationProvider.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Security;
using Voxta.Common.Reporting;

namespace Voxta.Abstractions.Registration;

public interface IServiceInstallationProvider
{
	string[] GetPythonDependencies(ISettingsSource settings);

	Task ConfigureModuleAsync(IAuthenticationContext auth, Module module, IDeferredReporter reporter, CancellationToken cancellationToken);

	Task InstallSharedResourcesAsync(IAuthenticationContext auth, ISettingsSource settings, IDeferredReporter reporter, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Registration\IServiceRegistry.cs
```csharp
using System;
using System.Collections.Generic;

namespace Voxta.Abstractions.Registration;

public interface IServiceRegistry<in TInterface> where TInterface : class
{
	Dictionary<string, Type> Types { get; }
}

```

## Voxta.Abstractions.Registration\IServiceSettingsProvider.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Security;
using Voxta.Model.Shared;
using Voxta.Model.Shared.Forms;

namespace Voxta.Abstractions.Registration;

public interface IServiceSettingsProvider
{
	Task<FormField[]> GetFormFieldsAsync(IAuthenticationContext auth, ServiceTypes serviceType, ISettingsSource moduleSettings, ISettingsSource serviceSettings, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Registration\ISettingsSource.cs
```csharp
using System;
using System.Collections.Generic;
using Voxta.Model.Shared.Forms;

namespace Voxta.Abstractions.Registration;

public interface ISettingsSource
{
	string GetRawValue(string fieldName);

	string? GetOptional(FormHiddenField field);

	string? GetOptional(FormTextField field);

	string GetRequired(FormTextField field);

	string GetRequired(FormModelField field);

	string? GetOptional(FormModelField field);

	string? GetOptional(FormChoicesField field);

	string GetRequired(FormChoicesField field);

	TEnum GetRequired<TEnum>(FormEnumField<TEnum> field) where TEnum : struct, Enum;

	string GetRequired(FormMultilineField field);

	string? GetOptional(FormMultilineField field);

	bool HasValue(FormPasswordField field);

	string GetRequired(FormPasswordField field);

	bool GetRequired(FormBooleanField field);

	int? GetOptional(FormNumberFieldBase<int> field);

	int GetRequired(FormNumberFieldBase<int> field);

	double? GetOptional(FormNumberFieldBase<double> field);

	double GetRequired(FormNumberFieldBase<double> field);

	long? GetOptional(FormNumberFieldBase<long> field);

	long GetRequired(FormNumberFieldBase<long> field);

	IReadOnlyList<string> GetRequired(FormStringListField field);

	int[] GetRequired(FormIntListField gpuSplit);
}

```

## Voxta.Abstractions.Registration\MissingRequiredSettingsFieldException.cs
```csharp
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Registration;

public class MissingRequiredSettingsFieldException : VoxtaException
{
	public MissingRequiredSettingsFieldException(string fieldName)
		: base("A required configuration field '" + fieldName + "' is missing. Please open your module configuration and make sure all required fields have values.")
	{
	}
}

```

## Voxta.Abstractions.Registration\ModuleConfigurationProviderBase.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Security;
using Voxta.Common.Reporting;
using Voxta.Model.ApiMessages.Requests;
using Voxta.Model.ApiMessages.Responses;

namespace Voxta.Abstractions.Registration;

public abstract class ModuleConfigurationProviderBase
{
	public virtual Task UpdateModuleConfigurationAsync(ISettingsSource settings)
	{
		return Task.CompletedTask;
	}

	public virtual Task<FormInvokeActionResponse> InvokeAction(StaticSettingsSource settings, FormInvokeActionRequest request, CancellationToken cancellationToken)
	{
		throw new NotSupportedException("This service does not support invoking actions.");
	}

	public virtual Task DownloadAsync(IAuthenticationContext auth, ISettingsSource settings, string value, IDeferredReporter reporter, CancellationToken cancellationToken)
	{
		throw new NotSupportedException("This service does not support downloading.");
	}
}

```

## Voxta.Abstractions.Registration\ModuleDefinition.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Registration;

public class ModuleDefinition
{
	public bool Missing { get; init; }

	public required string ServiceName { get; init; }

	public required string Label { get; init; }

	public bool Required { get; init; }

	public bool Single { get; init; }

	public bool CanBeInstalledByAdminsOnly { get; init; } = true;

	public bool UsePython { get; init; }

	public required Dictionary<ServiceTypes, ServiceDefinitionCategoryScore> Supports { get; init; } = new Dictionary<ServiceTypes, ServiceDefinitionCategoryScore>();

	public required ServiceDefinitionPricing Pricing { get; init; }

	public required ServiceDefinitionHosting Hosting { get; init; }

	public bool SupportsExplicitContent { get; init; }

	public bool Experimental { get; init; }

	public bool Recommended { get; init; }

	public bool Deprecated { get; init; }

	public string Notes { get; init; } = "";

	public string Pros { get; init; } = "";

	public string Cons { get; init; } = "";

	public string? HelpLink { get; init; }

	public ModuleLogo? Logo { get; init; }

	public required Type ModuleConfigurationProviderType { get; init; }

	public string[] ModuleConfigurationFieldsRequiringReload { get; init; } = Array.Empty<string>();

	public Type? PresetsProviderType { get; init; }

	public string[] PresetsFieldsRequiringReload { get; init; } = Array.Empty<string>();

	public Type? ModuleInstallationProviderType { get; init; }

	public Type? VoicesProviderType { get; init; }

	public Type? ModuleTestingProviderType { get; init; }

	public string[]? FeatureFlags { get; init; }

	public string[]? Augmentations { get; init; }

	public ComputerVisionSource[]? SupportedVisionSources { get; init; }

	public ServiceTypes[] ServiceTypes => (from x in Supports
		where x.Value > ServiceDefinitionCategoryScore.NotSupported
		select x.Key).ToArray();

	public bool SupportsServiceType(ServiceTypes serviceType)
	{
		if (!Supports.TryGetValue(serviceType, out var value))
		{
			return false;
		}
		return value > ServiceDefinitionCategoryScore.NotSupported;
	}

	public override string ToString()
	{
		return ServiceName + " (" + Label + ")";
	}
}

```

## Voxta.Abstractions.Registration\ModuleDefinitionRegistryExtensions.cs
```csharp
using System.Collections.Generic;
using System.Linq;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Registration;

public static class ModuleDefinitionRegistryExtensions
{
	public static IReadOnlyList<(Module Service, ModuleDefinition Definition)> WithModuleDefinitions(this IModuleDefinitionsRegistry registry, IEnumerable<Module> modules)
	{
		return modules.Select((Module x) => (x: x, registry.Get(x.ServiceName))).ToArray();
	}
}

```

## Voxta.Abstractions.Registration\ModuleLogo.cs
```csharp
using System;
using System.Reflection;

namespace Voxta.Abstractions.Registration;

public class ModuleLogo
{
	public required Assembly Assembly { get; init; }

	public required string EmbeddedResourcePath { get; init; }

	public static ModuleLogo EmbeddedResource(Type rootType, string embeddedResourcePath)
	{
		return new ModuleLogo
		{
			Assembly = rootType.Assembly,
			EmbeddedResourcePath = rootType.Namespace + "." + embeddedResourcePath
		};
	}
}

```

## Voxta.Abstractions.Registration\ServiceDefinitionCategoryScore.cs
```csharp
namespace Voxta.Abstractions.Registration;

public enum ServiceDefinitionCategoryScore
{
	NotSupported,
	Low,
	Medium,
	High
}

```

## Voxta.Abstractions.Registration\ServiceDefinitionHosting.cs
```csharp
namespace Voxta.Abstractions.Registration;

public enum ServiceDefinitionHosting
{
	Builtin,
	External,
	Online
}

```

## Voxta.Abstractions.Registration\ServiceDefinitionPricing.cs
```csharp
namespace Voxta.Abstractions.Registration;

public enum ServiceDefinitionPricing
{
	Free,
	Low,
	Medium,
	High
}

```

## Voxta.Abstractions.Registration\ServiceRegistry.cs
```csharp
using System;
using System.Collections.Generic;

namespace Voxta.Abstractions.Registration;

public class ServiceRegistry<TInterface> : IServiceRegistry<TInterface> where TInterface : class
{
	public Dictionary<string, Type> Types { get; } = new Dictionary<string, Type>();

	public void Add<TConcrete>(string key) where TConcrete : class, TInterface
	{
		if (!string.IsNullOrEmpty(key) && !(key == "None"))
		{
			Types.Add(key, typeof(TConcrete));
		}
	}
}

```

## Voxta.Abstractions.Registration\ServiceSettingsBuilder.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using Voxta.Abstractions.Model;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Registration;

public static class ServiceSettingsBuilder
{
	public static ServiceSettings Build(ServiceTypes serviceType, string label, string description, params KeyValuePair<string, string>[] pairs)
	{
		return new ServiceSettings
		{
			UserId = Guid.Empty,
			LocalId = Guid.Empty,
			ModuleId = Guid.Empty,
			ServiceType = serviceType,
			Label = label,
			Description = description,
			Configuration = pairs.ToDictionary((KeyValuePair<string, string> x) => x.Key, (KeyValuePair<string, string> x) => x.Value)
		};
	}
}

```

## Voxta.Abstractions.Registration\SettingsResultExtensions.cs
```csharp
using System;

namespace Voxta.Abstractions.Registration;

public static class SettingsResultExtensions
{
	public static double? NullWhenZero(this double? value)
	{
		if (!value.HasValue)
		{
			return null;
		}
		if (Math.Abs(value.Value) < 0.0001)
		{
			return null;
		}
		return value;
	}

	public static double? NullWhenOne(this double? value)
	{
		if (!value.HasValue)
		{
			return null;
		}
		if (Math.Abs(value.Value - 1.0) < 0.0001)
		{
			return null;
		}
		return value;
	}
}

```

## Voxta.Abstractions.Registration\SettingsSourceBase.cs
```csharp
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.Linq;
using Voxta.Common;
using Voxta.Model.Shared.Forms;

namespace Voxta.Abstractions.Registration;

public abstract class SettingsSourceBase : ISettingsSource
{
	protected abstract Dictionary<string, string> Settings { get; }

	public string GetRawValue(string fieldName)
	{
		return Settings.GetValueOrDefault(fieldName) ?? "";
	}

	public string? GetOptional(FormHiddenField field)
	{
		return GetValueOrDefault(field.Name, null, (string value) => value);
	}

	public string GetRequired(FormTextField field)
	{
		string valueOrDefault = GetValueOrDefault(field.Name, field.DefaultValue, (string value) => value);
		if (valueOrDefault == null || (field.DefaultValue == null && string.IsNullOrEmpty(valueOrDefault)))
		{
			throw new MissingRequiredSettingsFieldException(field.Name);
		}
		return valueOrDefault;
	}

	public string? GetOptional(FormTextField field)
	{
		return GetValueOrDefault(field.Name, field.DefaultValue, (string value) => value);
	}

	public string GetRequired(FormModelField field)
	{
		string valueOrDefault = GetValueOrDefault(field.Name, field.DefaultValue, (string value) => value);
		if (valueOrDefault == null || (field.DefaultValue == null && (string.IsNullOrEmpty(valueOrDefault) || valueOrDefault == "-")))
		{
			throw new MissingRequiredSettingsFieldException(field.Name);
		}
		return valueOrDefault;
	}

	public string? GetOptional(FormModelField field)
	{
		return GetValueOrDefault(field.Name, field.DefaultValue, (string value) => value).NullWhenEmpty();
	}

	public string? GetOptional(FormChoicesField field)
	{
		return GetValueOrDefault<string>(field.Name, field.DefaultValue, (string value) => value.NullWhenEmpty());
	}

	public string GetRequired(FormChoicesField field)
	{
		return GetValueOrDefault(field.Name, field.DefaultValue, (string value) => value) ?? throw new MissingRequiredSettingsFieldException(field.Name);
	}

	public TEnum GetRequired<TEnum>(FormEnumField<TEnum> field) where TEnum : struct, Enum
	{
		return GetValueOrDefault(field.Name, field.DefaultValue, Enum.Parse<TEnum>);
	}

	public string GetRequired(FormMultilineField field)
	{
		return GetValueOrDefault(field.Name, field.DefaultValue, (string value) => value) ?? throw new MissingRequiredSettingsFieldException(field.Name);
	}

	public string? GetOptional(FormMultilineField field)
	{
		return GetValueOrDefault(field.Name, field.DefaultValue, (string value) => value);
	}

	public bool HasValue(FormPasswordField field)
	{
		if (Settings.TryGetValue(field.Name, out string value))
		{
			return !string.IsNullOrEmpty(value);
		}
		return false;
	}

	public string GetRequired(FormPasswordField field)
	{
		return GetValueOrDefault(field.Name, null, (string value) => value) ?? throw new MissingRequiredSettingsFieldException(field.Name);
	}

	public bool GetRequired(FormBooleanField field)
	{
		return GetValueOrDefault(field.Name, field.DefaultValue == true, bool.Parse);
	}

	public int GetRequired(FormNumberFieldBase<int> field)
	{
		return GetValueOrDefault(field.Name, field.DefaultValue.GetValueOrDefault(), (string value) => int.Parse(value, CultureInfo.InvariantCulture));
	}

	public int? GetOptional(FormNumberFieldBase<int> field)
	{
		return GetValueOrDefault(field.Name, field.DefaultValue, (string value) => int.Parse(value, CultureInfo.InvariantCulture));
	}

	public double? GetOptional(FormNumberFieldBase<double> field)
	{
		return GetValueOrDefault(field.Name, field.DefaultValue, (string value) => double.Parse(value, CultureInfo.InvariantCulture));
	}

	public double GetRequired(FormNumberFieldBase<double> field)
	{
		return GetValueOrDefault(field.Name, field.DefaultValue.GetValueOrDefault(), (string value) => double.Parse(value, CultureInfo.InvariantCulture));
	}

	public long? GetOptional(FormNumberFieldBase<long> field)
	{
		return GetValueOrDefault(field.Name, field.DefaultValue, (string value) => long.Parse(value, CultureInfo.InvariantCulture));
	}

	public long GetRequired(FormNumberFieldBase<long> field)
	{
		return GetValueOrDefault(field.Name, field.DefaultValue.GetValueOrDefault(), (string value) => long.Parse(value, CultureInfo.InvariantCulture));
	}

	public IReadOnlyList<string> GetRequired(FormStringListField field)
	{
		return GetValueOrDefault<string[]>(field.Name, field.DefaultValue ?? Array.Empty<string>(), (string value) => value.Split(new char[1] { '\n' }, StringSplitOptions.RemoveEmptyEntries)) ?? throw new MissingRequiredSettingsFieldException(field.Name);
	}

	public int[] GetRequired(FormIntListField gpuSplit)
	{
		return GetValueOrDefault(gpuSplit.Name, gpuSplit.DefaultValue ?? Array.Empty<int>(), (string value) => (from x in value.Split(new char[2] { '\n', ',' }, StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries)
			select int.Parse(x, CultureInfo.InvariantCulture)).ToArray()) ?? Array.Empty<int>();
	}

	protected virtual bool TryGetValue(string key, [NotNullWhen(true)] out string? value)
	{
		return Settings.TryGetValue(key, out value);
	}

	private T? GetValueOrDefault<T>(string name, T? defaultValue, Func<string, T> convert)
	{
		if (TryGetValue(name, out string value) && !string.IsNullOrEmpty(value))
		{
			return convert(value);
		}
		return defaultValue;
	}
}

```

## Voxta.Abstractions.Registration\StaticSettingsSource.cs
```csharp
using System.Collections.Generic;

namespace Voxta.Abstractions.Registration;

public class StaticSettingsSource(Dictionary<string, string> settings) : SettingsSourceBase()
{
	protected override Dictionary<string, string> Settings => settings;
}

```

## Voxta.Abstractions.Repositories\CharacterRepositoryExtensions.cs
```csharp
using System;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Repositories;

public static class CharacterRepositoryExtensions
{
	public static Task DeleteAsync(this ICharacterRepository repository, Guid userId, Guid localId)
	{
		Character model = new Character
		{
			UserId = userId,
			LocalId = localId,
			Name = null
		};
		return repository.DeleteAsync(model);
	}
}

```

## Voxta.Abstractions.Repositories\ChatRepositoryExtensions.cs
```csharp
using System;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Repositories;

public static class ChatRepositoryExtensions
{
	public static Task DeleteAsync(this IChatRepository repository, Guid userId, Guid localId)
	{
		Chat model = new Chat
		{
			UserId = userId,
			LocalId = localId,
			Characters = null,
			CreatedAt = default(DateTimeOffset)
		};
		return repository.DeleteAsync(model);
	}
}

```

## Voxta.Abstractions.Repositories\FolderRepositoryExtensions.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Repositories;

public static class FolderRepositoryExtensions
{
	public static Task DeleteAsync(this IFolderRepository repository, Guid userId, Guid localId)
	{
		Folder model = new Folder
		{
			UserId = userId,
			LocalId = localId,
			Name = null
		};
		return repository.DeleteAsync(model);
	}

	public static Task<Folder[]> GetManyByNullableIdAsync(this IFolderRepository repository, Guid userId, IEnumerable<Guid?> folderIds, CancellationToken cancellationToken)
	{
		Guid[] ids = (from id in folderIds
			where id.HasValue
			select id ?? throw new NullReferenceException()).Distinct().ToArray();
		return repository.GetManyByIdAsync(userId, ids, cancellationToken);
	}
}

```

## Voxta.Abstractions.Repositories\GetCharactersQueryParameters.cs
```csharp
using System;

namespace Voxta.Abstractions.Repositories;

public class GetCharactersQueryParameters
{
	public static readonly GetCharactersQueryParameters All = new GetCharactersQueryParameters();

	public Guid? PackageId { get; init; }

	public bool FavoritesOnly { get; init; }

	public int Max { get; init; }
}

```

## Voxta.Abstractions.Repositories\GetCollectionsQueryParameters.cs
```csharp
using System;

namespace Voxta.Abstractions.Repositories;

public class GetCollectionsQueryParameters
{
	public static readonly GetCollectionsQueryParameters All = new GetCollectionsQueryParameters();

	public Guid? PackageId { get; init; }
}

```

## Voxta.Abstractions.Repositories\GetMemoryBooksQueryParameters.cs
```csharp
using System;

namespace Voxta.Abstractions.Repositories;

public class GetMemoryBooksQueryParameters
{
	public static readonly GetMemoryBooksQueryParameters All = new GetMemoryBooksQueryParameters
	{
		IncludePrivateBooks = true
	};

	public Guid? PackageId { get; init; }

	public bool IncludePrivateBooks { get; init; }
}

```

## Voxta.Abstractions.Repositories\GetScenariosQueryParameters.cs
```csharp
using System;

namespace Voxta.Abstractions.Repositories;

public class GetScenariosQueryParameters
{
	public static readonly GetScenariosQueryParameters All = new GetScenariosQueryParameters();

	public Guid? PackageId { get; init; }
}

```

## Voxta.Abstractions.Repositories\IApiKeyRepository.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Repositories;

public interface IApiKeyRepository
{
	Task<VoxtaApiKeyItem[]> GetItems(Guid userId, CancellationToken cancellationToken);

	Task<VoxtaApiKey?> GetByKey(string apiKey, CancellationToken cancellationToken);

	Task InsertApiKeyAsync(VoxtaApiKey key);

	Task DeleteAsync(Guid userId, Guid apiKeyId);

	Task DeleteAllUserKeysAsync(Guid userId);
}

```

## Voxta.Abstractions.Repositories\IAppRepository.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Repositories;

public interface IAppRepository : IOwnedObjectRepository<App>
{
	Task<AppItem[]> GetItemsByUserAsync(Guid userId, CancellationToken cancellationToken);

	Task<App?> GetByClientAsync(Guid userId, string clientId, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Repositories\ICacheRepository.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Repositories;

public interface ICacheRepository
{
	Task SaveEntryAsync(CacheEntry entry, CancellationToken cancellationToken);

	Task DeleteEntryAsync(string path);

	Task<CacheEntry[]> GetOldEntriesAsync(TimeSpan age, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Repositories\ICharacterRepository.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Repositories;

public interface ICharacterRepository : IImportableObjectRepository, IClassifiedResourceRepository<Character, CharacterItem>, IClassifiedResourceRepository, IOwnedObjectRepository<Character>
{
	Task<CharacterItem[]> GetItemsByUserAsync(Guid userId, GetCharactersQueryParameters parameters, CancellationToken cancellationToken);

	Task<Character[]> GetManyByIdAsync(Guid userId, IReadOnlyList<Guid> ids, CancellationToken cancellationToken);

	Task<Character[]> GetByPackageAsync(Guid userId, Guid packageId);
}

```

## Voxta.Abstractions.Repositories\IChatDocumentRepository.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Repositories;

public interface IChatDocumentRepository
{
	Task<ChatDocument[]> GetChatDocumentsAsync(Guid userId, Guid chatId, CancellationToken cancellationToken);

	Task AddDocumentAsync(ChatDocument message);

	Task UpdateDocumentAsync(ChatDocument message);

	Task DeleteAllChatDocumentsAsync(Guid userId, Guid chatId);

	Task DeleteDocumentAsync(Guid userId, Guid messageId);
}

```

## Voxta.Abstractions.Repositories\IChatMessageRepository.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Repositories;

public interface IChatMessageRepository
{
	Task<ChatMessageData[]> GetChatMessagesAsync(Guid userId, Guid chatId, bool includeSummarizedMessages, CancellationToken cancellationToken);

	Task<ChatMessageData[]> GetLastMessagesAsync(Guid userId, Guid chatId, int count, CancellationToken cancellationToken);

	Task<ChatMessageData?> GetLastMessageByRoleAsync(Guid userId, Guid chatId, ChatMessageRole role, CancellationToken cancellationToken);

	Task AddMessageAsync(ChatMessageData message);

	Task UpdateMessageAsync(ChatMessageData message);

	Task DeleteAllChatMessagesAsync(Guid userId, Guid chatId);

	Task DeleteMessageAsync(Guid userId, Guid messageId);

	Task DeleteMessagesAsync(Guid userId, Guid[] messageIds);

	Task SaveMessagesAsync(Chat chat, ChatMessageData[] messages);
}

```

## Voxta.Abstractions.Repositories\IChatRepository.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Repositories;

public interface IChatRepository : IOwnedObjectRepository<Chat>, IImportableObjectRepository
{
	Task<ChatItem[]> GetItemsByCharacterAsync(Guid userId, Guid characterId, CancellationToken cancellationToken);

	Task<ChatItem[]> GetItemsByScenarioAsync(Guid userId, Guid scenarioId, CancellationToken cancellationToken);

	Task<ChatItem[]> GetItemsByUserAsync(Guid userId, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Repositories\IClassifiedResourceRepository.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Repositories;

public interface IClassifiedResourceRepository
{
	Task<string[]> GetAllTagsAsync(Guid userId, CancellationToken cancellationToken);
}
public interface IClassifiedResourceRepository<T, TItem> : IClassifiedResourceRepository, IOwnedObjectRepository<T> where T : ClassifiedResource where TItem : ChatResourceItemBase
{
	Task<TItem?> GetItemByIdAsync(Guid userId, Guid id, CancellationToken cancellationToken);

	Task ExecuteChangeFolderAsync(Guid userId, Guid previousFolderId, Guid? newFolderId, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Repositories\ICollectionRepository.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Repositories;

public interface ICollectionRepository : IImportableObjectRepository, IClassifiedResourceRepository<Collection, CollectionItem>, IClassifiedResourceRepository, IOwnedObjectRepository<Collection>
{
	Task<CollectionItem[]> GetItemsByUserAsync(Guid userId, GetCollectionsQueryParameters parameters, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Repositories\IContentPackageRepository.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Repositories;

public interface IContentPackageRepository : IImportableObjectRepository, IClassifiedResourceRepository<ContentPackage, ContentPackageItem>, IClassifiedResourceRepository, IOwnedObjectRepository<ContentPackage>
{
	Task<ContentPackageItem[]> GetItemsByUserAsync(Guid userId, CancellationToken cancellationToken);

	Task<ContentPackageItem[]> GetItemsByIdsAsync(Guid userId, Guid[] ids, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Repositories\IFolderRepository.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Repositories;

public interface IFolderRepository : IOwnedObjectRepository<Folder>
{
	Task<Folder?> GetByNameAsync(Guid userId, string name, CancellationToken cancellationToken);

	Task<Folder[]> GetAllForUserAsync(Guid userId, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Repositories\IImportableObjectRepository.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Repositories;

public interface IImportableObjectRepository
{
	Task<ChatResourceInformation> GetChatResourceInformationAsync(Guid userId, Guid id, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Repositories\IMemoryBookRepository.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Repositories;

public interface IMemoryBookRepository : IImportableObjectRepository, IClassifiedResourceRepository<MemoryBook, MemoryBookItem>, IClassifiedResourceRepository, IOwnedObjectRepository<MemoryBook>
{
	Task<MemoryBookItem[]> GetItemsByUserAsync(Guid userId, GetMemoryBooksQueryParameters parameters, CancellationToken cancellationToken);

	Task<MemoryBook?> GetByOwner(Guid userId, ChatResourceKind kind, Guid id, CancellationToken cancellationToken);

	Task<MemoryBook[]> GetAllByOwner(Guid userId, ChatResourceKind kind, Guid id, CancellationToken cancellationToken);

	Task<MemoryBook[]> GetByPackageAsync(Guid userId, Guid packageId);
}

```

## Voxta.Abstractions.Repositories\IModuleRepository.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Repositories;

public interface IModuleRepository : IOwnedObjectRepository<Module>
{
	Task<Module[]> GetManyByUserAsync(Guid userId, CancellationToken cancellationToken);

	Task<Module[]> GetManyByServiceNameAsync(Guid userId, string serviceName, CancellationToken cancellationToken);

	Task<Module[]> GetAllEnabledServicesForAllUsersAsync(CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Repositories\IOwnedObjectRepository.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Repositories;

public interface IOwnedObjectRepository<T> where T : class
{
	Task<bool> ExistsAndOwned(Guid userId, Guid id, CancellationToken cancellationToken);

	Task<T?> GetByIdAsync(Guid userId, Guid id, CancellationToken cancellationToken);

	Task<T[]> GetManyByIdAsync(Guid userId, Guid[] ids, CancellationToken cancellationToken);

	Task CreateAsync(T model);

	Task UpdateAsync(T model);

	Task DeleteAsync(T model);
}

```

## Voxta.Abstractions.Repositories\IProfileRepository.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Repositories;

public interface IProfileRepository
{
	Task<ProfileSettings[]> GetProfilesByUserAsync(Guid userId, CancellationToken cancellationToken);

	Task<ProfileSettings?> GetProfileByIdAsync(Guid userId, Guid profileId, CancellationToken cancellationToken);

	Task<ProfileSettings?> GetProfileByUserIdAsync(Guid userId, CancellationToken cancellationToken);

	Task CreateProfileAsync(ProfileSettings profile);

	Task UpdateAsync(ProfileSettings profile);

	Task DeleteAsync(Guid userId, Guid profileId);
}

```

## Voxta.Abstractions.Repositories\IScenarioRepository.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Repositories;

public interface IScenarioRepository : IImportableObjectRepository, IClassifiedResourceRepository<Scenario, ScenarioItem>, IClassifiedResourceRepository, IOwnedObjectRepository<Scenario>
{
	Task<ScenarioItem[]> GetItemsByUserAsync(Guid userId, GetScenariosQueryParameters parameters, CancellationToken cancellationToken);

	Task<Scenario[]> GetByPackageAsync(Guid userId, Guid packageId);
}

```

## Voxta.Abstractions.Repositories\IServicesConfigurationsSetRepository.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Repositories;

public interface IServicesConfigurationsSetRepository : IOwnedObjectRepository<ServicesConfigurationsSet>
{
	Task<ServicesConfigurationsSet[]> GetAllForUserAsync(Guid userId, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Repositories\IServiceSettingsRepository.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Repositories;

public interface IServiceSettingsRepository : IOwnedObjectRepository<ServiceSettings>
{
	Task<ServiceSettings[]> GetManyByUserAsync(Guid userId, CancellationToken cancellationToken);

	Task<ServiceSettings[]> GetManyByServiceTypeAsync(Guid userId, Guid moduleId, ServiceTypes serviceType, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Repositories\IUnitOfWork.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Repositories;

public interface IUnitOfWork : IAsyncDisposable
{
	IUserRepository Users { get; }

	IProfileRepository Profiles { get; }

	IApiKeyRepository ApiKeys { get; }

	IAppRepository Apps { get; }

	IModuleRepository Modules { get; }

	IServiceSettingsRepository ServiceSettings { get; }

	IServicesConfigurationsSetRepository ServicesConfigurationsSets { get; }

	ICacheRepository Cache { get; }

	IMemoryBookRepository MemoryBooks { get; }

	IContentPackageRepository ContentPackages { get; }

	IChatRepository Chats { get; }

	IChatMessageRepository ChatMessages { get; }

	IChatDocumentRepository ChatDocuments { get; }

	IScenarioRepository Scenarios { get; }

	ICharacterRepository Characters { get; }

	ICollectionRepository Collections { get; }

	IVoxtaUpgradesRepository Upgrades { get; }

	IFolderRepository Folders { get; }

	Task<int> SaveChangesAsync(CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Repositories\IUnitOfWorkFactory.cs
```csharp
namespace Voxta.Abstractions.Repositories;

public interface IUnitOfWorkFactory
{
	IUnitOfWork CreateUnitOfWork();
}

```

## Voxta.Abstractions.Repositories\IUserRepository.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Repositories;

public interface IUserRepository
{
	Task<VoxtaUserItem[]> GetItems(CancellationToken cancellationToken);

	Task<VoxtaUser?> GetById(Guid userId, CancellationToken cancellationToken);

	Task<int> GetUsersCount(CancellationToken cancellationToken);

	Task InsertUserAsync(VoxtaUser user);

	Task UpdateUserAsync(VoxtaUser user);

	Task DeleteAsync(Guid userId);
}

```

## Voxta.Abstractions.Repositories\IVoxtaUpgradesRepository.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Repositories;

public interface IVoxtaUpgradesRepository
{
	Task<VoxtaUpgrade[]> GetInitMessagesAsync(CancellationToken cancellation);

	void Update(VoxtaUpgrade message);
}

```

## Voxta.Abstractions.Repositories\MemoryBookRepositoryExtensions.cs
```csharp
using System;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Repositories;

public static class MemoryBookRepositoryExtensions
{
	public static Task DeleteAsync(this IMemoryBookRepository repository, Guid userId, Guid localId)
	{
		MemoryBook model = new MemoryBook
		{
			UserId = userId,
			LocalId = localId,
			Name = null
		};
		return repository.DeleteAsync(model);
	}
}

```

## Voxta.Abstractions.Repositories\ProfileRepositoryExtensions.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Repositories;

public static class ProfileRepositoryExtensions
{
	public static async Task<ProfileSettings> GetRequiredProfileByUserIdAsync(this IProfileRepository profileRepository, Guid userId, CancellationToken cancellationToken)
	{
		return (await profileRepository.GetProfileByUserIdAsync(userId, cancellationToken)) ?? throw new NullReferenceException("The profile was not configured.");
	}
}

```

## Voxta.Abstractions.Repositories\ScenarioRepositoryExtensions.cs
```csharp
using System;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Repositories;

public static class ScenarioRepositoryExtensions
{
	public static Task DeleteAsync(this IScenarioRepository repository, Guid userId, Guid localId)
	{
		Scenario model = new Scenario
		{
			UserId = userId,
			LocalId = localId,
			Name = null
		};
		return repository.DeleteAsync(model);
	}
}

```

## Voxta.Abstractions.Repositories\UnitOfWorkExtensions.cs
```csharp
using System;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Repositories;

public static class UnitOfWorkExtensions
{
	public static IImportableObjectRepository GetRepository(this IUnitOfWork unitOfWork, ChatResourceKind kind)
	{
		return kind switch
		{
			ChatResourceKind.Package => unitOfWork.ContentPackages, 
			ChatResourceKind.Character => unitOfWork.Characters, 
			ChatResourceKind.Scenario => unitOfWork.Scenarios, 
			ChatResourceKind.MemoryBook => unitOfWork.MemoryBooks, 
			_ => throw new InvalidOperationException($"Dependency kind {kind} does not have a matching repository"), 
		};
	}
}

```

## Voxta.Abstractions.Repositories\UnitOfWorkFactoryExtensions.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Repositories;

public static class UnitOfWorkFactoryExtensions
{
	public static async Task<T> ReadAsync<T>(this IUnitOfWorkFactory factory, Func<IUnitOfWork, Task<T>> action)
	{
		T result;
		await using (IUnitOfWork unitOfWork = factory.CreateUnitOfWork())
		{
			result = await action(unitOfWork);
		}
		return result;
	}

	public static async Task ApplyAndSaveChangesAsync(this IUnitOfWorkFactory factory, Func<IUnitOfWork, Task> action, CancellationToken cancellationToken)
	{
		await using IUnitOfWork unitOfWork = factory.CreateUnitOfWork();
		await action(unitOfWork);
		await unitOfWork.SaveChangesAsync(cancellationToken);
	}
}

```

## Voxta.Abstractions.Runtime\IEphemeralChatRepository.cs
```csharp
using System;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Runtime;

public interface IEphemeralChatRepository
{
	void Register(Guid userId, Chat chat);

	Chat? Acquire(Guid userId);

	void Release(Guid userId);
}

```

## Voxta.Abstractions.Runtime\IServiceInstallLock.cs
```csharp
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Runtime;

public interface IServiceInstallLock
{
	Task CreateLockFileAsync(string contents, CancellationToken token);

	Task ReleaseLockFileAsync();

	Task ThrowIfLockedAsync(CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Runtime\IServicesConfigurationChangeDispatcher.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Runtime;

public interface IServicesConfigurationChangeDispatcher
{
	event EventHandler<ServiceReadyEventArgs> ServiceReady;

	event EventHandler<ProfileConfigurationChangedEventArgs> ProfileConfigurationChanged;

	event EventHandler<ServicesConfigurationsSetChangedEventArgs> ServicesConfigurationsSetChanged;

	event EventHandler<ModuleConfigurationUpdatedEventArgs> ModuleConfigurationUpdated;

	event EventHandler<ServiceSettingsUpdatedEventArgs> ServiceSettingsUpdated;

	void DispatchConfigurationChanged(Guid userId);

	Task PropagateModuleConfigurationChangesAsync(Guid moduleId, string serviceName, Dictionary<string, string> previousConfig, Dictionary<string, string> updatedConfig, CancellationToken cancellationToken);

	Task PropagateServiceSettingsChangesAsync(string serviceName, Guid serviceSettingsId, Dictionary<string, string> initialSettings, Dictionary<string, string> updatedSettings, CancellationToken cancellationToken);

	Task PropagateServicesConfigurationsChangesAsync(ServicesConfigurationsSet config, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Runtime\ModuleConfigurationUpdatedEventArgs.cs
```csharp
using System;
using System.Collections.Generic;
using Voxta.Abstractions.ModuleRuntimeInstances;

namespace Voxta.Abstractions.Runtime;

public class ModuleConfigurationUpdatedEventArgs(IModuleReloadCoordinator coordinator, Guid moduleId, string serviceName, Dictionary<string, string> moduleConfiguration) : EventArgs()
{
	public IModuleReloadCoordinator Coordinator { get; } = coordinator;

	public Guid ModuleId { get; } = moduleId;

	public string ServiceName { get; } = serviceName;

	public Dictionary<string, string> ModuleConfiguration { get; } = moduleConfiguration;
}

```

## Voxta.Abstractions.Runtime\ProfileConfigurationChangedEventArgs.cs
```csharp
using System;

namespace Voxta.Abstractions.Runtime;

public class ProfileConfigurationChangedEventArgs(Guid userId) : EventArgs()
{
	public Guid UserId { get; } = userId;
}

```

## Voxta.Abstractions.Runtime\ServiceInstallLockException.cs
```csharp
using System;

namespace Voxta.Abstractions.Runtime;

public class ServiceInstallLockException : Exception
{
	public ServiceInstallLockException(string message)
		: base(message)
	{
	}
}

```

## Voxta.Abstractions.Runtime\ServiceReadyEventArgs.cs
```csharp
using System;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Runtime;

public class ServiceReadyEventArgs(ServiceTypes serviceType) : EventArgs()
{
	public ServiceTypes ServiceType { get; } = serviceType;
}

```

## Voxta.Abstractions.Runtime\ServicesConfigurationsSetChangedEventArgs.cs
```csharp
using System;
using Voxta.Abstractions.Configuration;
using Voxta.Abstractions.ModuleRuntimeInstances;

namespace Voxta.Abstractions.Runtime;

public class ServicesConfigurationsSetChangedEventArgs(ServicesConfigurations config, IModuleReloadCoordinator coordinator) : EventArgs()
{
	public ServicesConfigurations Config { get; } = config;

	public IModuleReloadCoordinator ModuleReloadCoordinator { get; } = coordinator;
}

```

## Voxta.Abstractions.Runtime\ServiceSettingsUpdatedEventArgs.cs
```csharp
using System;
using System.Collections.Generic;
using Voxta.Abstractions.ModuleRuntimeInstances;

namespace Voxta.Abstractions.Runtime;

public class ServiceSettingsUpdatedEventArgs(IModuleReloadCoordinator coordinator, string serviceName, Guid serviceSettingsId, Dictionary<string, string> serviceSettings) : EventArgs()
{
	public IModuleReloadCoordinator Coordinator { get; } = coordinator;

	public string ServiceName { get; } = serviceName;

	public Guid ServiceSettingsId { get; } = serviceSettingsId;

	public Dictionary<string, string> ServiceSettings { get; } = serviceSettings;
}

```

## Voxta.Abstractions.Scripting.ActionScripts\ActionScriptLog.cs
```csharp
using System;
using Microsoft.Extensions.Logging;

namespace Voxta.Abstractions.Scripting.ActionScripts;

[Serializable]
public record ActionScriptLog(LogLevel Level, string Message);

```

## Voxta.Abstractions.Scripting.ActionScripts\AppScriptEvent.cs
```csharp
using System.Collections.Generic;

namespace Voxta.Abstractions.Scripting.ActionScripts;

public class AppScriptEvent : IActionScriptEvent
{
	public const string EventName = "app";

	public string Name => "app:" + Event;

	public required string Event { get; init; }

	public required Dictionary<string, object?> Arguments { get; init; }
}

```

## Voxta.Abstractions.Scripting.ActionScripts\BeforeSelectActionInferenceActionScriptEvent.cs
```csharp
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Model;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Scripting.ActionScripts;

public class BeforeSelectActionInferenceActionScriptEvent : IActionScriptEvent, IActionScriptEventWithCharacter, IActionScriptEventWithMessage
{
	public const string EventName = "beforeSelectActionInference";

	public string Name => "beforeSelectActionInference";

	public required ICharacterOrUserData Character { get; init; }

	public required ChatMessageData Message { get; init; }

	public required string Layer { get; init; }

	public required FunctionTiming Timing { get; init; }

	public required string[] Actions { get; set; }
}

```

## Voxta.Abstractions.Scripting.ActionScripts\GenerateImageEffect.cs
```csharp
namespace Voxta.Abstractions.Scripting.ActionScripts;

public class GenerateImageEffect : IScriptEffect
{
	public string? Prompt { get; init; }
}

```

## Voxta.Abstractions.Scripting.ActionScripts\GeneratingActionScriptEvent.cs
```csharp
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Scripting.ActionScripts;

public class GeneratingActionScriptEvent : IActionScriptEvent, IActionScriptEventWithCharacter, IActionScriptEventWithMessage
{
	public const string EventName = "generating";

	public string Name => "generating";

	public required ICharacterOrUserData Character { get; init; }

	public required ChatMessageData Message { get; init; }
}

```

## Voxta.Abstractions.Scripting.ActionScripts\GeneratingCompleteActionScriptEvent.cs
```csharp
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Scripting.ActionScripts;

public class GeneratingCompleteActionScriptEvent : IActionScriptEvent, IActionScriptEventWithCharacter, IActionScriptEventWithMessage
{
	public const string EventName = "generatingComplete";

	public string Name => "generatingComplete";

	public required ICharacterOrUserData Character { get; init; }

	public required ChatMessageData Message { get; init; }
}

```

## Voxta.Abstractions.Scripting.ActionScripts\IActionScript.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Services.ActionInference;

namespace Voxta.Abstractions.Scripting.ActionScripts;

public interface IActionScript
{
	string Name { get; }

	Task<IActionScriptResult> RunAsync(IChatInferenceData chat, ChatMessageData? message, ICharacterOrUserData? character, ActionInvocation? action, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Scripting.ActionScripts\IActionScriptCallback.cs
```csharp
namespace Voxta.Abstractions.Scripting.ActionScripts;

public interface IActionScriptCallback
{
}

```

## Voxta.Abstractions.Scripting.ActionScripts\IActionScriptChatModule.cs
```csharp
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Scripting.ActionScripts;

public interface IActionScriptChatModule
{
	IActionScriptPendingChanges PendingChanges { get; }

	Task<IReadOnlyList<ActionScriptLog>> DispatchEvent(IActionScriptEvent e, CancellationToken cancellationToken);

	Task<IReadOnlyList<ActionScriptLog>> RunCallback(IActionScriptCallback callback, CancellationToken cancellationToken);

	bool IsEventRegistered(string type);
}

```

## Voxta.Abstractions.Scripting.ActionScripts\IActionScriptEngine.cs
```csharp
using System;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Utils;

namespace Voxta.Abstractions.Scripting.ActionScripts;

public interface IActionScriptEngine : IDisposable
{
	IActionScriptChatModule Chat { get; }

	void AddLibrary(string name, string script);

	void SetEntrypoint(string name);

	IActionScript AddAction(string name, string script);

	void Start(IChatInferenceData chat, IChatTimer chatTimer);
}

```

## Voxta.Abstractions.Scripting.ActionScripts\IActionScriptEngineFactory.cs
```csharp
namespace Voxta.Abstractions.Scripting.ActionScripts;

public interface IActionScriptEngineFactory
{
	IActionScriptEngine Create();
}

```

## Voxta.Abstractions.Scripting.ActionScripts\IActionScriptEvent.cs
```csharp
namespace Voxta.Abstractions.Scripting.ActionScripts;

public interface IActionScriptEvent
{
	string Name { get; }
}

```

## Voxta.Abstractions.Scripting.ActionScripts\IActionScriptEventWithCharacter.cs
```csharp
using Voxta.Abstractions.Chats.Objects.Characters;

namespace Voxta.Abstractions.Scripting.ActionScripts;

public interface IActionScriptEventWithCharacter
{
	ICharacterOrUserData Character { get; }
}

```

## Voxta.Abstractions.Scripting.ActionScripts\IActionScriptEventWithMessage.cs
```csharp
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Scripting.ActionScripts;

public interface IActionScriptEventWithMessage
{
	ChatMessageData Message { get; }
}

```

## Voxta.Abstractions.Scripting.ActionScripts\IActionScriptPendingChanges.cs
```csharp
using System.Collections.Generic;

namespace Voxta.Abstractions.Scripting.ActionScripts;

public interface IActionScriptPendingChanges
{
	IEnumerable<IScriptEffect> QueuedEffects { get; }

	Dictionary<string, object?> VariableEffects { get; }

	void Clear();
}

```

## Voxta.Abstractions.Scripting.ActionScripts\IActionScriptResult.cs
```csharp
using System.Collections.Generic;
using Voxta.Abstractions.Chats.Objects.Characters;

namespace Voxta.Abstractions.Scripting.ActionScripts;

public interface IActionScriptResult
{
	ICharacterOrUserData? ChatFlow { get; }

	bool EvaluateNextEvent { get; }

	IReadOnlyList<IActionScriptCallback> AfterSpeechCallbacks { get; }

	IReadOnlyList<ActionScriptLog> Logs { get; }
}

```

## Voxta.Abstractions.Scripting.ActionScripts\InitActionScriptEvent.cs
```csharp
namespace Voxta.Abstractions.Scripting.ActionScripts;

public class InitActionScriptEvent : IActionScriptEvent
{
	public const string EventName = "init";

	public string Name => "init";
}

```

## Voxta.Abstractions.Scripting.ActionScripts\IScriptEffect.cs
```csharp
namespace Voxta.Abstractions.Scripting.ActionScripts;

public interface IScriptEffect
{
}

```

## Voxta.Abstractions.Scripting.ActionScripts\NullActionScript.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Services.ActionInference;

namespace Voxta.Abstractions.Scripting.ActionScripts;

public class NullActionScript : IActionScript
{
	public static IActionScript Instance { get; } = new NullActionScript();

	public string Name => string.Empty;

	public Task<IActionScriptResult> RunAsync(IChatInferenceData chat, ChatMessageData? message, ICharacterOrUserData? character, ActionInvocation? action, CancellationToken cancellationToken)
	{
		return Task.FromResult(NullActionScriptResult.Instance);
	}
}

```

## Voxta.Abstractions.Scripting.ActionScripts\NullActionScriptChatModule.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Scripting.ActionScripts;

public class NullActionScriptChatModule : IActionScriptChatModule
{
	public static IActionScriptChatModule Instance { get; } = new NullActionScriptChatModule();

	public IActionScriptPendingChanges PendingChanges => NullActionScriptPendingChanges.Instance;

	public Task<IReadOnlyList<ActionScriptLog>> DispatchEvent(IActionScriptEvent e, CancellationToken cancellationToken)
	{
		return Task.FromResult((IReadOnlyList<ActionScriptLog>)Array.Empty<ActionScriptLog>());
	}

	public Task<IReadOnlyList<ActionScriptLog>> RunCallback(IActionScriptCallback callback, CancellationToken cancellationToken)
	{
		return Task.FromResult((IReadOnlyList<ActionScriptLog>)Array.Empty<ActionScriptLog>());
	}

	public bool IsEventRegistered(string type)
	{
		return false;
	}
}

```

## Voxta.Abstractions.Scripting.ActionScripts\NullActionScriptEngine.cs
```csharp
using System;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Utils;

namespace Voxta.Abstractions.Scripting.ActionScripts;

public class NullActionScriptEngine : IActionScriptEngine, IDisposable
{
	public static IActionScriptEngine Instance { get; } = new NullActionScriptEngine();

	public IActionScriptChatModule Chat => NullActionScriptChatModule.Instance;

	public void AddLibrary(string name, string script)
	{
	}

	public void SetEntrypoint(string name)
	{
	}

	public IActionScript AddAction(string name, string script)
	{
		return NullActionScript.Instance;
	}

	public void Start(IChatInferenceData chat, IChatTimer chatTimer)
	{
	}

	public void Dispose()
	{
	}
}

```

## Voxta.Abstractions.Scripting.ActionScripts\NullActionScriptPendingChanges.cs
```csharp
using System;
using System.Collections.Generic;

namespace Voxta.Abstractions.Scripting.ActionScripts;

public class NullActionScriptPendingChanges : IActionScriptPendingChanges
{
	public static IActionScriptPendingChanges Instance { get; } = new NullActionScriptPendingChanges();

	public Dictionary<string, object?> VariableEffects => new Dictionary<string, object>();

	public IEnumerable<IScriptEffect> QueuedEffects => Array.Empty<IScriptEffect>();

	public void Clear()
	{
	}
}

```

## Voxta.Abstractions.Scripting.ActionScripts\NullActionScriptResult.cs
```csharp
using System;
using System.Collections.Generic;
using Voxta.Abstractions.Chats.Objects.Characters;

namespace Voxta.Abstractions.Scripting.ActionScripts;

public class NullActionScriptResult : IActionScriptResult
{
	public static IActionScriptResult Instance { get; } = new NullActionScriptResult();

	public ICharacterOrUserData? ChatFlow => null;

	public bool EvaluateNextEvent => false;

	public IReadOnlyList<IActionScriptCallback> AfterSpeechCallbacks => Array.Empty<IActionScriptCallback>();

	public IReadOnlyList<ActionScriptLog> Logs => Array.Empty<ActionScriptLog>();
}

```

## Voxta.Abstractions.Scripting.ActionScripts\ResumeActionScriptEvent.cs
```csharp
namespace Voxta.Abstractions.Scripting.ActionScripts;

public class ResumeActionScriptEvent : IActionScriptEvent
{
	public const string EventName = "resume";

	public string Name => "resume";
}

```

## Voxta.Abstractions.Scripting.ActionScripts\ScenarioActionEvent.cs
```csharp
using System.Collections.Generic;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Scripting.ActionScripts;

public class ScenarioActionEvent : IActionScriptEvent, IActionScriptEventWithCharacter, IActionScriptEventWithMessage
{
	public const string EventName = "action";

	public string Name => "action:" + Action;

	public required string ContextKey { get; init; }

	public required string Layer { get; init; }

	public required string Action { get; init; }

	public required Dictionary<string, object> Arguments { get; init; }

	public required ICharacterOrUserData Character { get; init; }

	public required ChatMessageData Message { get; init; }
}

```

## Voxta.Abstractions.Scripting.ActionScripts\ScenarioAppTriggerEffect.cs
```csharp
namespace Voxta.Abstractions.Scripting.ActionScripts;

public class ScenarioAppTriggerEffect : IScriptEffect
{
	public required string Name { get; init; }

	public object?[]? Arguments { get; init; }

	public bool Queued { get; init; }
}

```

## Voxta.Abstractions.Scripting.ActionScripts\ScenarioInterruptEffect.cs
```csharp
namespace Voxta.Abstractions.Scripting.ActionScripts;

public class ScenarioInterruptEffect : IScriptEffect
{
}

```

## Voxta.Abstractions.Scripting.ActionScripts\ScenarioMessageEffect.cs
```csharp
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Scripting.ActionScripts;

public class ScenarioMessageEffect : IScriptEffect
{
	public required ChatMessageRole Role { get; init; }

	public ICharacterInferenceData? Character { get; init; }

	public required string Text { get; init; }

	public bool UseStoryWriter { get; init; }

	public int MaxNewTokens { get; init; }

	public int MaxSentences { get; init; }

	public bool? AllowMultipleLines { get; init; }

	public bool? TriggerReply { get; init; }

	public bool? Narrate { get; init; }

	public GenerateConstraintRequest? GetGenerateConstraintRequest()
	{
		if (MaxNewTokens == 0 && MaxSentences == 0)
		{
			return null;
		}
		return new GenerateConstraintRequest
		{
			MaxNewTokens = MaxNewTokens,
			MaxSentences = MaxSentences,
			AllowMultipleLines = AllowMultipleLines
		};
	}
}

```

## Voxta.Abstractions.Scripting.ActionScripts\ScenarioRoleEffect.cs
```csharp
namespace Voxta.Abstractions.Scripting.ActionScripts;

public class ScenarioRoleEffect : IScriptEffect
{
	public required string Role { get; init; }

	public bool Enabled { get; init; } = true;
}

```

## Voxta.Abstractions.Scripting.ActionScripts\SetActionsEffect.cs
```csharp
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Scripting.ActionScripts;

public class SetActionsEffect : IScriptEffect
{
	public required string ContextKey { get; init; }

	public required ScenarioActionDefinition[] Actions { get; init; }
}

```

## Voxta.Abstractions.Scripting.ActionScripts\SetContextEffect.cs
```csharp
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Scripting.ActionScripts;

public class SetContextEffect : IScriptEffect
{
	public required ContextDefinition Context { get; init; }
}

```

## Voxta.Abstractions.Scripting.ActionScripts\SetFlagEffect.cs
```csharp
using Voxta.Abstractions.Chats.Objects.Chats;

namespace Voxta.Abstractions.Scripting.ActionScripts;

public class SetFlagEffect : IScriptEffect
{
	public required SetFlagRequest[] Flags { get; init; }
}

```

## Voxta.Abstractions.Scripting.ActionScripts\SpeechCompleteActionScriptEvent.cs
```csharp
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Scripting.ActionScripts;

public class SpeechCompleteActionScriptEvent : IActionScriptEvent, IActionScriptEventWithCharacter, IActionScriptEventWithMessage
{
	public const string EventName = "speechComplete";

	public string Name => "speechComplete";

	public required ICharacterOrUserData Character { get; init; }

	public required ChatMessageData Message { get; init; }
}

```

## Voxta.Abstractions.Scripting.ActionScripts\SpeechStartActionScriptEvent.cs
```csharp
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Scripting.ActionScripts;

public class SpeechStartActionScriptEvent : IActionScriptEvent, IActionScriptEventWithCharacter, IActionScriptEventWithMessage
{
	public const string EventName = "speechStart";

	public string Name => "speechStart";

	public required ICharacterOrUserData Character { get; init; }

	public required ChatMessageData Message { get; init; }

	public required int StartIndex { get; init; }

	public required bool IsNarrator { get; init; }
}

```

## Voxta.Abstractions.Scripting.ActionScripts\StartActionScriptEvent.cs
```csharp
namespace Voxta.Abstractions.Scripting.ActionScripts;

public class StartActionScriptEvent : IActionScriptEvent
{
	public const string EventName = "start";

	public string Name => "start";

	public bool HasBootstrapMessages { get; init; }
}

```

## Voxta.Abstractions.Scripting.ActionScripts\TranscriptionFinishedScriptEvent.cs
```csharp
namespace Voxta.Abstractions.Scripting.ActionScripts;

public class TranscriptionFinishedScriptEvent : IActionScriptEvent
{
	public const string EventName = "transcriptionFinished";

	public string Name => "transcriptionFinished";

	public required string Text { get; init; }
}

```

## Voxta.Abstractions.Scripting.ActionScripts\TranscriptionStartedScriptEvent.cs
```csharp
namespace Voxta.Abstractions.Scripting.ActionScripts;

public class TranscriptionStartedScriptEvent : IActionScriptEvent
{
	public const string EventName = "transcriptionStarted";

	public string Name => "transcriptionStarted";
}

```

## Voxta.Abstractions.Scripting.ActionScripts\TypingEndScriptEvent.cs
```csharp
namespace Voxta.Abstractions.Scripting.ActionScripts;

public class TypingEndScriptEvent : IActionScriptEvent
{
	public const string EventName = "typingEnd";

	public string Name => "typingEnd";

	public bool Sent { get; init; }
}

```

## Voxta.Abstractions.Scripting.ActionScripts\TypingStartScriptEvent.cs
```csharp
namespace Voxta.Abstractions.Scripting.ActionScripts;

public class TypingStartScriptEvent : IActionScriptEvent
{
	public const string EventName = "typingStart";

	public string Name => "typingStart";
}

```

## Voxta.Abstractions.Scripting.ActionScripts\UserMessageReceivedActionScriptEvent.cs
```csharp
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Scripting.ActionScripts;

public class UserMessageReceivedActionScriptEvent : IActionScriptEvent, IActionScriptEventWithMessage
{
	public const string EventName = "userMessageReceived";

	public string Name => "userMessageReceived";

	public required ChatMessageData Message { get; init; }

	public string? RewriteUserMessage { get; set; }
}

```

## Voxta.Abstractions.Scripting.ChatConditions\IFlagsConditionsFactory.cs
```csharp
using System;
using Voxta.Abstractions.Chats.Conditions;

namespace Voxta.Abstractions.Scripting.ChatConditions;

public interface IFlagsConditionsFactory : IDisposable
{
	IChatConditions Parse(string? condition);
}

```

## Voxta.Abstractions.Security\IAuthenticationContext.cs
```csharp
using System;

namespace Voxta.Abstractions.Security;

public interface IAuthenticationContext
{
	Guid UserId { get; }

	string Role { get; }

	bool Remote { get; }
}

```

## Voxta.Abstractions.Security\NullAuthenticationContext.cs
```csharp
using System;

namespace Voxta.Abstractions.Security;

public class NullAuthenticationContext : IAuthenticationContext
{
	public static readonly IAuthenticationContext Instance = new NullAuthenticationContext();

	public Guid UserId
	{
		get
		{
			throw new UnauthorizedAccessException("Authentication context is required");
		}
	}

	public string Role
	{
		get
		{
			throw new UnauthorizedAccessException("Authentication context is required");
		}
	}

	public bool Remote
	{
		get
		{
			throw new UnauthorizedAccessException("Authentication context is required");
		}
	}
}

```

## Voxta.Abstractions.Services.ActionInference\ActionInferenceType.cs
```csharp
namespace Voxta.Abstractions.Services.ActionInference;

public enum ActionInferenceType
{
	UserFunction,
	CharacterAction,
	ChatFlow
}

```

## Voxta.Abstractions.Services.ActionInference\ActionInvocation.cs
```csharp
using System;
using System.Diagnostics.CodeAnalysis;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services.ActionInference;

[Serializable]
public class ActionInvocation : ActionInvocationData
{
	public RenderedScenarioAction ScenarioAction { get; set; }

	[SetsRequiredMembers]
	public ActionInvocation(RenderedScenarioAction fn, ChatMessageRole role)
	{
		ScenarioAction = fn;
		base.Name = fn.Name;
		base.Role = role;
	}
}

```

## Voxta.Abstractions.Services.ActionInference\ActionInvocationData.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services.ActionInference;

[Serializable]
public class ActionInvocationData
{
	public required string Name { get; init; }

	public required ChatMessageRole Role { get; init; }

	public ActionInvocationArgument[] Arguments { get; init; } = Array.Empty<ActionInvocationArgument>();

	public override string ToString()
	{
		StringBuilder stringBuilder = new StringBuilder();
		stringBuilder.Append(Name);
		stringBuilder.Append('(');
		if (Arguments.Length != 0)
		{
			for (int i = 0; i < Arguments.Length; i++)
			{
				ActionInvocationArgument actionInvocationArgument = Arguments[i];
				stringBuilder.Append(actionInvocationArgument.Name);
				stringBuilder.Append(": \"");
				stringBuilder.Append(actionInvocationArgument.Value);
				stringBuilder.Append('"');
				if (i != Arguments.Length - 1)
				{
					stringBuilder.Append(", ");
				}
			}
		}
		stringBuilder.Append(')');
		return stringBuilder.ToString();
	}

	public Dictionary<string, object> ToArgsDictionary(FunctionArgumentDefinition[] definitions)
	{
		return (from a in Arguments
			select (Name: a.Name, Value: a.Value, Def: definitions.FirstOrDefault((FunctionArgumentDefinition d) => d.Name == a.Name)) into a
			where a.Def != null
			select a).ToDictionary<(string, string, FunctionArgumentDefinition), string, object>(((string Name, string Value, FunctionArgumentDefinition Def) a) => a.Name, ((string Name, string Value, FunctionArgumentDefinition Def) a) => a.Def?.Type switch
		{
			FunctionArgumentType.String => a.Value, 
			FunctionArgumentType.Integer => int.Parse(a.Value), 
			FunctionArgumentType.Double => double.Parse(a.Value), 
			FunctionArgumentType.Boolean => bool.Parse(a.Value), 
			FunctionArgumentType.Array => (from x in a.Value.Trim('[', ']').Split(',')
				select x.Trim(' ', '"', '\'')).ToArray(), 
			_ => throw new NotSupportedException($"Argument type {a.Def?.Type} is not supported"), 
		});
	}
}

```

## Voxta.Abstractions.Services.ActionInference\ActionInvocationRecord.cs
```csharp
using System;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services.ActionInference;

public class ActionInvocationRecord(ActionInvocation actionInvocation, DateTimeOffset timestamp)
{
	public ActionInvocation ActionInvocation => actionInvocation;

	public RenderedScenarioAction ScenarioAction => actionInvocation.ScenarioAction;

	public DateTimeOffset Timestamp => timestamp;
}

```

## Voxta.Abstractions.Services.ActionInference\IActionInferenceService.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Prompting;
using Voxta.Abstractions.Services.TextGen;

namespace Voxta.Abstractions.Services.ActionInference;

public interface IActionInferenceService : ILLMService, IService, IAsyncDisposable
{
	ValueTask<ActionInvocation?> InferActionAsync(IChatInferenceData chat, IPromptBuilder promptBuilder, ChatMessageData message, ActionInferenceType type, IReadOnlyList<IScenarioActionInstance> functions, CancellationToken cancellationToken);

	ValueTask<ActionInvocation?> InferChatFlowAsync(IChatInferenceData chat, IPromptBuilder promptBuilder, ChatMessageData message, IReadOnlyList<ICharacterOrUserData> nextCharacters, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Services.ActionInference\NullActionInferenceService.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Prompting;
using Voxta.Abstractions.Services.TextGen;

namespace Voxta.Abstractions.Services.ActionInference;

public class NullActionInferenceService : NullLLMServiceBase, IActionInferenceService, ILLMService, IService, IAsyncDisposable
{
	public static readonly IActionInferenceService Instance = new NullActionInferenceService();

	public ValueTask<ActionInvocation?> InferActionAsync(IChatInferenceData chat, IPromptBuilder promptBuilder, ChatMessageData message, ActionInferenceType type, IReadOnlyList<IScenarioActionInstance> functions, CancellationToken cancellationToken)
	{
		throw new InvalidOperationException("Service not initialized");
	}

	public ValueTask<ActionInvocation?> InferChatFlowAsync(IChatInferenceData chat, IPromptBuilder promptBuilder, ChatMessageData message, IReadOnlyList<ICharacterOrUserData> nextCharacters, CancellationToken cancellationToken)
	{
		throw new InvalidOperationException("Service not initialized");
	}
}

```

## Voxta.Abstractions.Services.ActivityManager\IActivityManagerService.cs
```csharp
using System;

namespace Voxta.Abstractions.Services.ActivityManager;

public interface IActivityManagerService : IAsyncDisposable
{
	void StartChat();

	void EndChat();
}

```

## Voxta.Abstractions.Services.AudioConversion\IAudioConverter.cs
```csharp
using System.IO;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services.AudioOutput;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services.AudioConversion;

public interface IAudioConverter
{
	bool CanGetSpecificationsFromWavHeaders { get; }

	string SelectOutputContentType(string[] acceptedContentTypes, string sourceContentType);

	Task<AudioData> ConvertAudioAsync(IAuthenticationContext auth, AudioData input, string contentType, CancellationToken cancellationToken);

	Task ConvertRawToWav(Stream rawBytes, Stream output, int sampleRate = 16000, int bits = 16, int channels = 1, CancellationToken cancellationToken = default(CancellationToken));

	IAudioFrameConverter CreateStreamingConverter(string contentType, int inputSamplingRate, int inputChannels, int outputSamplingRate, int outputChannels);

	WavSpecifications GetSpecificationsFromWavHeaders(Stream stream);
}

```

## Voxta.Abstractions.Services.AudioConversion\IAudioFrameConverter.cs
```csharp
using Voxta.Abstractions.Services.AudioInput.Pipeline;

namespace Voxta.Abstractions.Services.AudioConversion;

public interface IAudioFrameConverter
{
	AudioInputFrame Convert(byte[] inputWavData, int index, int length);
}

```

## Voxta.Abstractions.Services.AudioConversion\IAudioStreamingEncoder.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Services.AudioConversion;

public interface IAudioStreamingEncoder : IAsyncDisposable
{
	string TargetContentType { get; }

	ValueTask BeginEncoderAsync(CancellationToken cancellationToken);

	ValueTask SendAsync(ReadOnlyMemory<byte> chunk, CancellationToken cancellationToken);

	ValueTask CompleteAsync(CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Services.AudioConversion\IAudioStreamingEncoderFactory.cs
```csharp
using System.IO;
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Services.AudioConversion;

public interface IAudioStreamingEncoderFactory
{
	bool CanConvert(string source);

	ValueTask<IAudioStreamingEncoder> CreateAsync(Stream output, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Services.AudioConversion\PassthroughAudioStreamingEncoder.cs
```csharp
using System;
using System.IO;
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Services.AudioConversion;

public class PassthroughAudioStreamingEncoder(Stream output, string contentType) : IAudioStreamingEncoder, IAsyncDisposable
{
	public string TargetContentType => contentType;

	public ValueTask BeginEncoderAsync(CancellationToken cancellationToken)
	{
		return ValueTask.CompletedTask;
	}

	public ValueTask SendAsync(ReadOnlyMemory<byte> chunk, CancellationToken cancellationToken)
	{
		return output.WriteAsync(chunk, cancellationToken);
	}

	public ValueTask CompleteAsync(CancellationToken cancellationToken)
	{
		return new ValueTask(output.FlushAsync(cancellationToken));
	}

	public ValueTask DisposeAsync()
	{
		return ValueTask.CompletedTask;
	}
}

```

## Voxta.Abstractions.Services.AudioInput.Pipeline\AudioInputFrame.cs
```csharp
namespace Voxta.Abstractions.Services.AudioInput.Pipeline;

public record AudioInputFrame(byte[] Buffer, int BytesRecorded);

```

## Voxta.Abstractions.Services.AudioInput.Pipeline\AudioInputPipelineState.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using Microsoft.Extensions.Logging;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services.AudioInput.Pipeline;

public class AudioInputPipelineState(ILogger<AudioInputPipelineState> logger) : IAudioInputPipelineState, IAudioInputPipelineStateReader
{
	private readonly Lock _lock = new Lock();

	private readonly List<AudioInputPipelineToken> _listeners = new List<AudioInputPipelineToken>();

	private int _vadActiveListeningWindow;

	private int _transcriptionActiveListeningWindow;

	private int _activeListeningWindow;

	public CurrentAudioFrameInfo CurrentFrame { get; } = new CurrentAudioFrameInfo();

	public bool HasFrameReceivedListeners => this.FrameReceived != null;

	public bool ActiveListening => _activeListeningWindow > 0;

	public bool ActiveTranscription => _transcriptionActiveListeningWindow > 0;

	public bool Recording { get; private set; }

	public AudioInputSpecifications Specifications { get; set; } = new AudioInputSpecifications();

	public event EventHandler<ICurrentAudioFrameInfo>? FrameReceived;

	public event EventHandler? OnFirstListener;

	public event EventHandler? OnNoListeners;

	public IAudioInputPipelineToken Listen(AudioPipelineListenCallback callback)
	{
		using (_lock.EnterScope())
		{
			AudioInputPipelineToken audioInputPipelineToken = new AudioInputPipelineToken(this, callback);
			_listeners.Add(audioInputPipelineToken);
			int count = _listeners.Count;
			if (count <= 1)
			{
				if (count == 1)
				{
					Recording = true;
					this.OnFirstListener?.Invoke(this, EventArgs.Empty);
				}
			}
			else
			{
				logger.LogWarning("Multiple listeners detected, recording will continue");
			}
			return audioInputPipelineToken;
		}
	}

	public void FrameComplete()
	{
		using (_lock.EnterScope())
		{
			_transcriptionActiveListeningWindow -= Specifications.BufferMilliseconds;
			_vadActiveListeningWindow -= Specifications.BufferMilliseconds;
			_activeListeningWindow = Math.Max(_transcriptionActiveListeningWindow, _vadActiveListeningWindow);
		}
		this.FrameReceived?.Invoke(this, CurrentFrame);
	}

	public void PushRecordedBytes(byte[] buffer, int bytesRecorded)
	{
		using (_lock.EnterScope())
		{
			foreach (AudioInputPipelineToken listener in _listeners)
			{
				listener.Callback(buffer, bytesRecorded);
			}
		}
	}

	public void Release(AudioInputPipelineToken token)
	{
		using (_lock.EnterScope())
		{
			if (!_listeners.Remove(token))
			{
				throw new InvalidOperationException("Token not found");
			}
			if (_listeners.Count == 0)
			{
				Recording = false;
				this.OnNoListeners?.Invoke(this, EventArgs.Empty);
			}
		}
	}

	public void PushVadActiveListeningWindow(int duration)
	{
		using (_lock.EnterScope())
		{
			_vadActiveListeningWindow = Math.Max(duration, _activeListeningWindow);
			_activeListeningWindow = Math.Max(_transcriptionActiveListeningWindow, _vadActiveListeningWindow);
		}
	}

	public void PushTranscriptionActiveListeningWindow(int duration)
	{
		using (_lock.EnterScope())
		{
			_transcriptionActiveListeningWindow = Math.Max(duration, _activeListeningWindow);
			_activeListeningWindow = Math.Max(_transcriptionActiveListeningWindow, _vadActiveListeningWindow);
		}
	}

	public void CloseTranscriptionActiveListeningWindow()
	{
		using (_lock.EnterScope())
		{
			_activeListeningWindow = 0;
			_transcriptionActiveListeningWindow = 0;
			_vadActiveListeningWindow = 0;
		}
	}
}

```

## Voxta.Abstractions.Services.AudioInput.Pipeline\AudioInputPipelineToken.cs
```csharp
using System;

namespace Voxta.Abstractions.Services.AudioInput.Pipeline;

public class AudioInputPipelineToken(AudioInputPipelineState state, AudioPipelineListenCallback callback) : IAudioInputPipelineToken, IDisposable
{
	private bool _disposed;

	public AudioPipelineListenCallback Callback { get; } = callback;

	public void NotifyTranscriptionActiveWindow(int duration)
	{
		state.PushTranscriptionActiveListeningWindow(duration);
	}

	public void CloseTranscriptionActiveWindow()
	{
		state.CloseTranscriptionActiveListeningWindow();
	}

	public void Dispose()
	{
		GC.SuppressFinalize(this);
		if (!_disposed)
		{
			_disposed = true;
			state.Release(this);
		}
	}
}

```

## Voxta.Abstractions.Services.AudioInput.Pipeline\AudioPipelineComponentRange.cs
```csharp
namespace Voxta.Abstractions.Services.AudioInput.Pipeline;

public static class AudioPipelineComponentRange
{
	public static int FirstPassInspectAudio => 100;

	public static int VoiceActivityDetection => 200;

	public static int WakeWord => 300;

	public static int Observation => 1000;
}

```

## Voxta.Abstractions.Services.AudioInput.Pipeline\AudioPipelineListenCallback.cs
```csharp
namespace Voxta.Abstractions.Services.AudioInput.Pipeline;

public delegate void AudioPipelineListenCallback(byte[] buffer, int bytesRecorded);

```

## Voxta.Abstractions.Services.AudioInput.Pipeline\CurrentAudioFrameInfo.cs
```csharp
namespace Voxta.Abstractions.Services.AudioInput.Pipeline;

public class CurrentAudioFrameInfo : ICurrentAudioFrameInfo
{
	public float Rms { get; set; }

	public bool HasVoiceActivity { get; set; }

	public void Clear()
	{
		Rms = 0f;
		HasVoiceActivity = true;
	}
}

```

## Voxta.Abstractions.Services.AudioInput.Pipeline\IAudioInputPipeline.cs
```csharp
using System;

namespace Voxta.Abstractions.Services.AudioInput.Pipeline;

public interface IAudioInputPipeline : IAudioInputPipelineListener, IAsyncDisposable
{
	void Start();
}

```

## Voxta.Abstractions.Services.AudioInput.Pipeline\IAudioInputPipelineFactory.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services.WakeWord;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services.AudioInput.Pipeline;

public interface IAudioInputPipelineFactory
{
	Task<IAudioInputPipeline> CreateAsync(IAuthenticationContext auth, IAudioInputService audioInputService, IWakeWordAudioInputPipelineMiddleware? wakeWordAudioInputPipelineMiddleware, AudioInputSpecifications specifications, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Services.AudioInput.Pipeline\IAudioInputPipelineListener.cs
```csharp
namespace Voxta.Abstractions.Services.AudioInput.Pipeline;

public interface IAudioInputPipelineListener
{
	IAudioInputPipelineToken Listen(AudioPipelineListenCallback callback);
}

```

## Voxta.Abstractions.Services.AudioInput.Pipeline\IAudioInputPipelineMiddleware.cs
```csharp
using System;
using System.Threading.Tasks;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services.AudioInput.Pipeline;

public interface IAudioInputPipelineMiddleware : IAsyncDisposable
{
	int Position { get; }

	Task InitializeAsync(AudioInputSpecifications specifications);

	void Start();

	void Process(AudioInputFrame data, Action<AudioInputFrame> next, Action terminate);
}

```

## Voxta.Abstractions.Services.AudioInput.Pipeline\IAudioInputPipelineState.cs
```csharp
using System;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services.AudioInput.Pipeline;

public interface IAudioInputPipelineState : IAudioInputPipelineStateReader
{
	CurrentAudioFrameInfo CurrentFrame { get; }

	bool HasFrameReceivedListeners { get; }

	bool ActiveListening { get; }

	bool ActiveTranscription { get; }

	bool Recording { get; }

	AudioInputSpecifications Specifications { get; set; }

	event EventHandler? OnFirstListener;

	event EventHandler? OnNoListeners;

	void FrameComplete();

	void PushRecordedBytes(byte[] buffer, int bytesRecorded);

	void PushVadActiveListeningWindow(int duration);
}

```

## Voxta.Abstractions.Services.AudioInput.Pipeline\IAudioInputPipelineStateReader.cs
```csharp
using System;

namespace Voxta.Abstractions.Services.AudioInput.Pipeline;

public interface IAudioInputPipelineStateReader
{
	event EventHandler<ICurrentAudioFrameInfo>? FrameReceived;

	IAudioInputPipelineToken Listen(AudioPipelineListenCallback callback);
}

```

## Voxta.Abstractions.Services.AudioInput.Pipeline\IAudioInputPipelineToken.cs
```csharp
using System;

namespace Voxta.Abstractions.Services.AudioInput.Pipeline;

public interface IAudioInputPipelineToken : IDisposable
{
	void NotifyTranscriptionActiveWindow(int duration);

	void CloseTranscriptionActiveWindow();
}

```

## Voxta.Abstractions.Services.AudioInput.Pipeline\ICurrentAudioFrameInfo.cs
```csharp
namespace Voxta.Abstractions.Services.AudioInput.Pipeline;

public interface ICurrentAudioFrameInfo
{
	float Rms { get; }

	bool HasVoiceActivity { get; }
}

```

## Voxta.Abstractions.Services.AudioInput\IAudioInputPipelineService.cs
```csharp
using System;
using System.Threading.Tasks;
using Voxta.Abstractions.Services.AudioInput.Pipeline;

namespace Voxta.Abstractions.Services.AudioInput;

public interface IAudioInputPipelineService : IService, IAsyncDisposable
{
	Task<IAudioInputPipelineMiddleware[]> CreateAudioInputMiddlewaresAsync();
}

```

## Voxta.Abstractions.Services.AudioInput\IAudioInputService.cs
```csharp
using System;
using Voxta.Abstractions.Services.AudioInput.Pipeline;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services.AudioInput;

public interface IAudioInputService : IService, IAsyncDisposable
{
	event EventHandler<AudioInputFrame>? DataAvailable;

	AudioInputSpecifications GetSpecifications();

	void StartRecording();

	void StopRecording();
}

```

## Voxta.Abstractions.Services.AudioInput\NullAudioInputService.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Security;
using Voxta.Abstractions.Services.AudioInput.Pipeline;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services.AudioInput;

public class NullAudioInputService : IAudioInputService, IService, IAsyncDisposable
{
	public static readonly IAudioInputService Instance = new NullAudioInputService();

	public bool Enabled => false;

	public ServiceTypes ServiceType => ServiceTypes.AudioInput;

	public IServiceInstanceSettings InstanceSettings
	{
		get
		{
			throw new InvalidOperationException("Service not initialized");
		}
	}

	public event EventHandler<AudioInputFrame>? DataAvailable;

	public Task InitializeAsync(IAuthenticationContext auth, IServiceInstanceSettings settings, CancellationToken cancellationToken)
	{
		throw new InvalidOperationException("Service not initialized");
	}

	public AudioInputSpecifications GetSpecifications()
	{
		throw new InvalidOperationException("Service not initialized");
	}

	public void StartRecording()
	{
		throw new InvalidOperationException("Service not initialized");
	}

	public void StopRecording()
	{
		throw new InvalidOperationException("Service not initialized");
	}

	public ValueTask DisposeAsync()
	{
		return ValueTask.CompletedTask;
	}
}

```

## Voxta.Abstractions.Services.AudioOutput.Pipeline\IAudioOutputPipeline.cs
```csharp
using System;

namespace Voxta.Abstractions.Services.AudioOutput.Pipeline;

public interface IAudioOutputPipeline : IAsyncDisposable
{
	IAudioOutputPipelineQueue GetPlaybackQueue();
}

```

## Voxta.Abstractions.Services.AudioOutput.Pipeline\IAudioOutputPipelineFactory.cs
```csharp
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Services.AudioOutput.Pipeline;

public interface IAudioOutputPipelineFactory
{
	Task<IAudioOutputPipeline> CreateAsync(IAudioOutputService audioOutputService, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Services.AudioOutput.Pipeline\IAudioOutputPipelineQueue.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Services.AudioOutput.Pipeline;

public interface IAudioOutputPipelineQueue : IAsyncDisposable
{
	void Initialize(CancellationToken none);

	void PlayQueue(AudioData audioData, Action<TimeSpan> onStart);

	void Complete(Action complete);

	Task CancelAsync();
}

```

## Voxta.Abstractions.Services.AudioOutput.Tunneling\DeadSpeechTunnel.cs
```csharp
using System;
using System.Runtime.ExceptionServices;
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Services.AudioOutput.Tunneling;

public class DeadSpeechTunnel : ISpeechTunnel
{
	public string? ContentType { get; private set; }

	public int Bytes { get; set; }

	public Task ErrorAsync(Exception exc, CancellationToken cancellationToken)
	{
		ExceptionDispatchInfo.Capture(exc).Throw();
		throw exc;
	}

	public async Task SendAsync(AudioData audioData, CancellationToken cancellationToken)
	{
		ContentType = audioData.ContentType;
		Bytes += (int)audioData.Stream.Length;
		await audioData.Stream.DisposeAsync();
	}

	public ValueTask<ISpeechTunnelResponse> StartAsync(string contentType, int? contentLength, CancellationToken cancellationToken)
	{
		ContentType = contentType;
		return ValueTask.FromResult((ISpeechTunnelResponse)new DeadSpeechTunnelResponse(this));
	}
}

```

## Voxta.Abstractions.Services.AudioOutput.Tunneling\DeadSpeechTunnelResponse.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Services.AudioOutput.Tunneling;

public sealed class DeadSpeechTunnelResponse(DeadSpeechTunnel deadSpeechTunnel) : ISpeechTunnelResponse, IAsyncDisposable
{
	public ValueTask SendAsync(ReadOnlyMemory<byte> chunk, CancellationToken cancellationToken)
	{
		deadSpeechTunnel.Bytes += chunk.Length;
		return ValueTask.CompletedTask;
	}

	public Task ErrorAsync(Exception exc, CancellationToken cancellationToken)
	{
		throw new InvalidOperationException("Cannot send error on DeadSpeechTunnelResponse", exc);
	}

	public ValueTask CompleteAsync(CancellationToken cancellationToken)
	{
		return ValueTask.CompletedTask;
	}

	public ValueTask DisposeAsync()
	{
		return ValueTask.CompletedTask;
	}
}

```

## Voxta.Abstractions.Services.AudioOutput.Tunneling\ISpeechTunnel.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Services.AudioOutput.Tunneling;

public interface ISpeechTunnel
{
	Task ErrorAsync(Exception exc, CancellationToken cancellationToken);

	Task SendAsync(AudioData audioData, CancellationToken cancellationToken);

	ValueTask<ISpeechTunnelResponse> StartAsync(string contentType, int? contentLength, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Services.AudioOutput.Tunneling\ISpeechTunnelResponse.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Services.AudioOutput.Tunneling;

public interface ISpeechTunnelResponse : IAsyncDisposable
{
	ValueTask SendAsync(ReadOnlyMemory<byte> chunk, CancellationToken cancellationToken);

	Task ErrorAsync(Exception exc, CancellationToken cancellationToken);

	ValueTask CompleteAsync(CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Services.AudioOutput.Tunneling\NullSpeechTunnel.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Services.AudioOutput.Tunneling;

public class NullSpeechTunnel : ISpeechTunnel
{
	public Task ErrorAsync(Exception exc, CancellationToken cancellationToken)
	{
		throw exc;
	}

	public async Task SendAsync(AudioData audioData, CancellationToken cancellationToken)
	{
		await audioData.DisposeAsync();
	}

	public ValueTask<ISpeechTunnelResponse> StartAsync(string contentType, int? contentLength, CancellationToken cancellationToken)
	{
		return ValueTask.FromResult((ISpeechTunnelResponse)NullSpeechTunnelResponse.Instance);
	}
}

```

## Voxta.Abstractions.Services.AudioOutput.Tunneling\NullSpeechTunnelResponse.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Services.AudioOutput.Tunneling;

public class NullSpeechTunnelResponse : ISpeechTunnelResponse, IAsyncDisposable
{
	public static NullSpeechTunnelResponse Instance { get; } = new NullSpeechTunnelResponse();

	public ValueTask SendAsync(ReadOnlyMemory<byte> chunk, CancellationToken cancellationToken)
	{
		return ValueTask.CompletedTask;
	}

	public Task ErrorAsync(Exception exc, CancellationToken cancellationToken)
	{
		throw new InvalidOperationException("Cannot send error on NullSpeechTunnelResponse", exc);
	}

	public ValueTask CompleteAsync(CancellationToken cancellationToken)
	{
		return ValueTask.CompletedTask;
	}

	public ValueTask DisposeAsync()
	{
		return ValueTask.CompletedTask;
	}
}

```

## Voxta.Abstractions.Services.AudioOutput.Tunneling\SpeechTunnelExtensions.cs
```csharp
using System;
using System.Buffers;
using System.IO;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Services.AudioOutput.Tunneling;

public static class SpeechTunnelExtensions
{
	public static async ValueTask RunAsync(this ISpeechTunnel tunnel, string contentType, int? contentLength, Func<ISpeechTunnelResponse, Task> fn, CancellationToken cancellationToken)
	{
		await using ISpeechTunnelResponse response = await tunnel.StartAsync(contentType, contentLength, cancellationToken);
		try
		{
			await fn(response);
			await response.CompleteAsync(cancellationToken);
		}
		catch (Exception exc)
		{
			await response.ErrorAsync(exc, cancellationToken);
		}
	}

	public static async ValueTask StreamFrom(this ISpeechTunnel tunnel, HttpResponseMessage response, string defaultContentType, CancellationToken cancellationToken)
	{
		await using ISpeechTunnelResponse writer = await tunnel.StartAsync(response.Content.Headers.ContentType?.MediaType ?? defaultContentType, response.Content.Headers.ContentLength.HasValue ? new int?((int)response.Content.Headers.ContentLength.Value) : ((int?)null), cancellationToken);
		await using Stream stream = await response.Content.ReadAsStreamAsync(cancellationToken);
		byte[] buffer = ArrayPool<byte>.Shared.Rent(8192);
		try
		{
			int length;
			while ((length = await stream.ReadAsync(buffer.AsMemory(0, buffer.Length), cancellationToken)) > 0)
			{
				await writer.SendAsync(buffer.AsMemory(0, length), cancellationToken);
			}
		}
		finally
		{
			ArrayPool<byte>.Shared.Return(buffer);
		}
		await writer.CompleteAsync(cancellationToken);
	}
}

```

## Voxta.Abstractions.Services.AudioOutput\AudioData.cs
```csharp
using System;
using System.IO;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Services.AudioOutput;

public sealed class AudioData : IAsyncDisposable
{
	public static readonly string[] SupportedExtensions = new string[4] { ".mp3", ".wav", ".webm", ".m4a" };

	public string ContentType { get; }

	public Stream Stream { get; }

	public bool ForceConversion { get; init; }

	public AudioData(Stream stream, string contentType)
	{
		ContentType = contentType;
		Stream = stream;
		base._002Ector();
	}

	public ValueTask DisposeAsync()
	{
		return Stream.DisposeAsync();
	}

	public static string GetExtension(string contentType)
	{
		switch (contentType)
		{
		case "audio/mpeg":
			return ".mp3";
		case "audio/x-wav":
		case "audio/wav":
			return ".wav";
		case "audio/webm":
			return ".webm";
		case "audio/pcm":
			return ".pcm";
		default:
			throw new NotSupportedException("Content type '" + contentType + "' is not supported.");
		}
	}

	public static string FromExtension(string extension)
	{
		return extension switch
		{
			".mp3" => "audio/mpeg", 
			".wav" => "audio/x-wav", 
			".webm" => "audio/webm", 
			".m4a" => "audio/aac", 
			".pcm" => "audio/pcm", 
			_ => throw new NotSupportedException("Extension '" + extension + "' is not supported."), 
		};
	}
}

```

## Voxta.Abstractions.Services.AudioOutput\IAudioClipPlayer.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Services.AudioOutput;

public interface IAudioClipPlayer : IAsyncDisposable
{
	TimeSpan Duration { get; }

	Task Play(CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Services.AudioOutput\IAudioOutputService.cs
```csharp
using System;
using System.IO;
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Services.AudioOutput;

public interface IAudioOutputService : IService, IAsyncDisposable
{
	Task<IAudioClipPlayer> Load(Stream stream, string contentType, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Services.AudioOutput\NullAudioOutputService.cs
```csharp
using System;
using System.IO;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Security;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services.AudioOutput;

public class NullAudioOutputService : IAudioOutputService, IService, IAsyncDisposable
{
	public static readonly IAudioOutputService Instance = new NullAudioOutputService();

	public bool Enabled => false;

	public ServiceTypes ServiceType => ServiceTypes.AudioOutput;

	public IServiceInstanceSettings InstanceSettings
	{
		get
		{
			throw new InvalidOperationException("Service not initialized");
		}
	}

	public Task InitializeAsync(IAuthenticationContext auth, IServiceInstanceSettings settings, CancellationToken cancellationToken)
	{
		throw new InvalidOperationException("Service not initialized");
	}

	public Task<IAudioClipPlayer> Load(Stream stream, string contentType, CancellationToken cancellationToken)
	{
		throw new InvalidOperationException("Service not initialized");
	}

	public ValueTask DisposeAsync()
	{
		return ValueTask.CompletedTask;
	}
}

```

## Voxta.Abstractions.Services.ChatAugmentations\ChatAugmentationServiceInitializationHolder.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Services.ChatAugmentations;

public class ChatAugmentationServiceInitializationHolder : IAsyncDisposable
{
	private readonly List<IChatAugmentationServiceInstanceBase> _instances = new List<IChatAugmentationServiceInstanceBase>();

	public void Add(IChatAugmentationServiceInstanceBase? instance)
	{
		if (instance != null)
		{
			_instances.Add(instance);
		}
	}

	public IChatAugmentationServiceInstanceBase[] Acquire()
	{
		IChatAugmentationServiceInstanceBase[] result = _instances.ToArray();
		_instances.Clear();
		return result;
	}

	public async ValueTask DisposeAsync()
	{
		await Task.WhenAll(_instances.Select((IChatAugmentationServiceInstanceBase x) => x.DisposeAsync().AsTask()));
	}
}

```

## Voxta.Abstractions.Services.ChatAugmentations\IActionInferenceAugmentation.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;
using Voxta.Model.WebsocketMessages.ClientMessages;
using Voxta.Model.WebsocketMessages.ServerMessages;

namespace Voxta.Abstractions.Services.ChatAugmentations;

public interface IActionInferenceAugmentation : IChatAugmentationServiceInstanceBase, IAsyncDisposable
{
	IEnumerable<ClientUpdateContextMessage> RegisterChatContext();

	ValueTask<bool> TryHandleActionInference(ChatMessageData? message, ServerActionMessage serverActionMessage, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Services.ChatAugmentations\IChatAugmentationServiceInstanceBase.cs
```csharp
using System;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services.ChatAugmentations;

public interface IChatAugmentationServiceInstanceBase : IAsyncDisposable
{
	ServiceTypes[] GetRequiredServiceTypes();

	string[] GetAugmentationNames();
}

```

## Voxta.Abstractions.Services.ChatAugmentations\IChatAugmentationsService.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Sessions;
using Voxta.Abstractions.Security;

namespace Voxta.Abstractions.Services.ChatAugmentations;

public interface IChatAugmentationsService : IService, IAsyncDisposable
{
	Task<IChatAugmentationServiceInstanceBase[]> CreateInstanceAsync(IChatSessionChatAugmentationApi session, IAuthenticationContext auth, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Services.ChatAugmentations\IChatAugmentationsServiceInstance.cs
```csharp
using System;
using System.Collections.Generic;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services.ChatAugmentations;

public interface IChatAugmentationsServiceInstance : IChatPreProcessAugmentation, IChatAugmentationServiceInstanceBase, IAsyncDisposable, IChatPostProcessAugmentation, IActionInferenceAugmentation, IPrefixContributionsAugmentation, IChatScriptEventsAugmentation, IChatSpeechReplacementsAugmentation
{
	bool HasEventListeners();

	IReadOnlyList<EnabledServiceAugmentation> GetAugmentations();
}

```

## Voxta.Abstractions.Services.ChatAugmentations\IChatPostProcessAugmentation.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services.ChatAugmentations;

public interface IChatPostProcessAugmentation : IChatAugmentationServiceInstanceBase, IAsyncDisposable
{
	ValueTask<string> PostProcessTextAsync(ChatMessageRole role, string text, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Services.ChatAugmentations\IChatPreProcessAugmentation.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services.ChatAugmentations;

public interface IChatPreProcessAugmentation : IChatAugmentationServiceInstanceBase, IAsyncDisposable
{
	ValueTask<string> PreProcessTextAsync(ChatMessageRole role, string text, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Services.ChatAugmentations\IChatScriptEventsAugmentation.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Scripting.ActionScripts;

namespace Voxta.Abstractions.Services.ChatAugmentations;

public interface IChatScriptEventsAugmentation : IChatAugmentationServiceInstanceBase, IAsyncDisposable
{
	Task OnChatScriptEvent(IActionScriptEvent e, ChatMessageData? message, ICharacterOrUserData character, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Services.ChatAugmentations\IChatSpeechReplacementsAugmentation.cs
```csharp
using System;

namespace Voxta.Abstractions.Services.ChatAugmentations;

public interface IChatSpeechReplacementsAugmentation : IChatAugmentationServiceInstanceBase, IAsyncDisposable
{
	string SpeechProcessText(string text);
}

```

## Voxta.Abstractions.Services.ChatAugmentations\IPrefixContributionsAugmentation.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services.ChatAugmentations;

public interface IPrefixContributionsAugmentation : IChatAugmentationServiceInstanceBase, IAsyncDisposable
{
	Task<bool> ShouldRetryGeneratedChunkAsync(string chunkText, CancellationToken cancellationToken);

	ValueTask<string?> ContributePrefix(ICharacterInferenceData character, ChatMessageRole role, string? prefix, bool force, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Services.ComputerVision\IComputerVisionService.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Prompting;
using Voxta.Abstractions.Services.TextGen;
using Voxta.Abstractions.Services.VisionCapture;

namespace Voxta.Abstractions.Services.ComputerVision;

public interface IComputerVisionService : ILLMService, IService, IAsyncDisposable
{
	ValueTask<string> DescribeAsync(IChatInferenceData chat, ICharacterInferenceData character, IPromptBuilder promptBuilder, IImage image, CancellationToken cancellationToken);

	ValueTask<string> DescribeAsync(IPromptBuilder promptBuilder, IImage image, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Services.ComputerVision\NullComputerVisionService.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Prompting;
using Voxta.Abstractions.Services.TextGen;
using Voxta.Abstractions.Services.VisionCapture;

namespace Voxta.Abstractions.Services.ComputerVision;

public class NullComputerVisionService : NullLLMServiceBase, IComputerVisionService, ILLMService, IService, IAsyncDisposable
{
	public static readonly IComputerVisionService Instance = new NullComputerVisionService();

	public ValueTask<string> DescribeAsync(IChatInferenceData chat, ICharacterInferenceData character, IPromptBuilder promptBuilder, IImage image, CancellationToken cancellationToken)
	{
		throw new InvalidOperationException("Service not initialized");
	}

	public ValueTask<string> DescribeAsync(IPromptBuilder promptBuilder, IImage image, CancellationToken cancellationToken)
	{
		throw new InvalidOperationException("Service not initialized");
	}
}

```

## Voxta.Abstractions.Services.ImageGen\GenerateImageRequest.cs
```csharp
using System;
using System.Diagnostics.CodeAnalysis;
using System.Runtime.CompilerServices;

namespace Voxta.Abstractions.Services.ImageGen;

[Serializable]
public record GenerateImageRequest
{
	public required string Prompt { get; init; }

	public string? NegativePrompt { get; init; }

	public int? Width { get; init; }

	public int? Height { get; init; }

	public bool IgnoreAffixes { get; set; }

	public long? Seed { get; set; }

	[CompilerGenerated]
	[SetsRequiredMembers]
	protected GenerateImageRequest(GenerateImageRequest original)
	{
		Prompt = original.Prompt;
		NegativePrompt = original.NegativePrompt;
		Width = original.Width;
		Height = original.Height;
		IgnoreAffixes = original.IgnoreAffixes;
		Seed = original.Seed;
	}

	public GenerateImageRequest()
	{
	}
}

```

## Voxta.Abstractions.Services.ImageGen\IImageGenService.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Diagnostics;
using Voxta.Abstractions.Services.VisionCapture;

namespace Voxta.Abstractions.Services.ImageGen;

public interface IImageGenService : IService, IAsyncDisposable
{
	string? PromptingInstructions { get; }

	Task WarmupAsync(CancellationToken cancellationToken);

	ValueTask<IImage> GenerateAsync(GenerateImageRequest request, IInferenceLogger observer, CancellationToken cancellationToken = default(CancellationToken));
}

```

## Voxta.Abstractions.Services.ImageGen\ImageGenServiceBase.cs
```csharp
using Microsoft.Extensions.Logging;

namespace Voxta.Abstractions.Services.ImageGen;

public abstract class ImageGenServiceBase : ServiceBase
{
	public string? PromptingInstructions => base.ServiceSettings.GetOptional(ImageGenServiceSettingsFields.PromptingInstructions);

	protected ImageGenServiceBase(ILogger logger)
		: base(logger)
	{
	}
}

```

## Voxta.Abstractions.Services.ImageGen\ImageGenServiceSettingsFields.cs
```csharp
using Voxta.Model.Shared.Forms;

namespace Voxta.Abstractions.Services.ImageGen;

public static class ImageGenServiceSettingsFields
{
	public static readonly FormMultilineField PromptingInstructions = new FormMultilineField
	{
		Name = "PromptingInstructions",
		Label = "Prompting Instructions",
		Text = "Instructions for prompting. This can help the LLM better understand how to prompt your image generation model.",
		Required = false,
		Rows = 4,
		Placeholder = "Use comma separated concepts, write \"solo\" for a single person, etc..."
	};
}

```

## Voxta.Abstractions.Services.ImageGen\NullImageGenService.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Diagnostics;
using Voxta.Abstractions.Services.VisionCapture;

namespace Voxta.Abstractions.Services.ImageGen;

public class NullImageGenService : NullServiceBase, IImageGenService, IService, IAsyncDisposable
{
	public static readonly IImageGenService Instance = new NullImageGenService();

	public string? PromptingInstructions => null;

	public Task WarmupAsync(CancellationToken cancellationToken)
	{
		return Task.CompletedTask;
	}

	public ValueTask<IImage> GenerateAsync(GenerateImageRequest request, IInferenceLogger observer, CancellationToken cancellationToken = default(CancellationToken))
	{
		throw new NotImplementedException("Image generation is not supported.");
	}
}

```

## Voxta.Abstractions.Services.Memory\CharacterMemoryEntry.cs
```csharp
namespace Voxta.Abstractions.Services.Memory;

public class CharacterMemoryEntry(MemoryRef memory, int expireConversationIndex)
{
	public MemoryRef Memory => memory;

	public int ExpireConversationIndex { get; set; } = expireConversationIndex;
}

```

## Voxta.Abstractions.Services.Memory\IMemoryProviderInstance.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Services.Memory;

public interface IMemoryProviderInstance : IAsyncDisposable
{
	bool Enabled { get; }

	void Configure(int maxMemoryTokens);

	Task RegisterMemoriesAsync(IEnumerable<MemoryRef> items, CancellationToken cancellationToken);

	Task<bool> PrefillAsync(IReadOnlyList<ChatMessageData> messages, List<CharacterMemoryEntry> characterMemories, CancellationToken cancellationToken);

	Task<bool> UpdateMemoryWindowAsync(IReadOnlyList<ChatMessageData> messages, List<CharacterMemoryEntry> characterMemories, CancellationToken cancellationToken);

	Task<MemorySearchResult[]> SearchAsync(IReadOnlyList<string> values, CancellationToken cancellationToken);

	Task UpdateMemoriesAsync(Guid[] remove, MemoryRef[] update, MemoryRef[] add, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Services.Memory\IMemoryProviderService.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Services.Memory;

public interface IMemoryProviderService : IService, IAsyncDisposable
{
	Task WarmupAsync(CancellationToken cancellationToken);

	Task<IMemoryProviderInstance> CreateAsync(CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Services.Memory\MemoryRef.cs
```csharp
using System;

namespace Voxta.Abstractions.Services.Memory;

[Serializable]
public class MemoryRef
{
	public Guid Id { get; set; } = Guid.NewGuid();

	public string[]? Keywords { get; set; }

	public required string Text { get; set; }

	public int Weight { get; set; }

	public DateTimeOffset? CreatedAt { get; set; }

	public int Tokens { get; set; }

	public override string ToString()
	{
		return $"{Id} [{((Keywords != null) ? string.Join(", ", Keywords) : "")}] {Text} ({Tokens} tokens)";
	}
}

```

## Voxta.Abstractions.Services.Memory\MemoryRefListExtensions.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;

namespace Voxta.Abstractions.Services.Memory;

public static class MemoryRefListExtensions
{
	public static IEnumerable<MemoryRef> SortByWeight(this IReadOnlyList<MemoryRef> list)
	{
		if (list.Count <= 1)
		{
			return list;
		}
		DateTimeOffset? dateTimeOffset = list.Where((MemoryRef x) => x.CreatedAt.HasValue).Min((MemoryRef x) => x.CreatedAt);
		DateTimeOffset? dateTimeOffset2 = list.Where((MemoryRef x) => x.CreatedAt.HasValue).Max((MemoryRef x) => x.CreatedAt);
		long oldestMs = dateTimeOffset?.ToUnixTimeMilliseconds() ?? 0;
		long num = dateTimeOffset2?.ToUnixTimeMilliseconds() ?? 0;
		long dateRange = num - oldestMs;
		int weakest = list.Min((MemoryRef x) => x.Weight);
		int strongest = list.Max((MemoryRef x) => x.Weight);
		return from x in list.Select(delegate(MemoryRef x)
			{
				long num2 = x.CreatedAt?.ToUnixTimeMilliseconds() ?? oldestMs;
				double num3 = ((dateRange > 0) ? ((double)(num2 - oldestMs) / (double)dateRange) : 0.0);
				double num4 = (double)(x.Weight - weakest) / (double)(strongest - weakest);
				double item = num3 * 1.0 + num4 * 0.2;
				return (x: x, score: item);
			})
			orderby x.score descending
			select x.x;
	}

	public static IEnumerable<MemoryRef> SortByWeightPreWeighted(this IReadOnlyList<MemoryRef> list)
	{
		if (list.Count <= 1)
		{
			return list;
		}
		DateTimeOffset? dateTimeOffset = list.Where((MemoryRef x) => x.CreatedAt.HasValue).Min((MemoryRef x) => x.CreatedAt);
		DateTimeOffset? dateTimeOffset2 = list.Where((MemoryRef x) => x.CreatedAt.HasValue).Max((MemoryRef x) => x.CreatedAt);
		long oldestMs = dateTimeOffset?.ToUnixTimeMilliseconds() ?? 0;
		long num = dateTimeOffset2?.ToUnixTimeMilliseconds() ?? 0;
		long dateRange = num - oldestMs;
		int weakest = list.Min((MemoryRef x) => x.Weight);
		int strongest = list.Max((MemoryRef x) => x.Weight);
		return from x in list.Select(delegate(MemoryRef x, int i)
			{
				long num2 = x.CreatedAt?.ToUnixTimeMilliseconds() ?? oldestMs;
				double num3 = ((dateRange > 0) ? ((double)(num2 - oldestMs) / (double)dateRange) : 0.0);
				double num4 = (double)(x.Weight - weakest) / (double)(strongest - weakest);
				double num5 = (double)(list.Count - i) / (double)list.Count;
				double item = num3 * 0.8 + num4 * 0.4 + num5 * 1.6;
				return (x: x, score: item);
			})
			orderby x.score descending
			select x.x;
	}
}

```

## Voxta.Abstractions.Services.Memory\MemorySearchResult.cs
```csharp
using System;

namespace Voxta.Abstractions.Services.Memory;

[Serializable]
public class MemorySearchResult
{
	public required MemoryRef Memory { get; init; }

	public required double Score { get; set; }

	public override string ToString()
	{
		return $"{Memory} ({Score})";
	}
}

```

## Voxta.Abstractions.Services.Memory\MessagesListExtensions.cs
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Services.Memory;

public static class MessagesListExtensions
{
	public static IEnumerable<ChatMessageData> Since(this IReadOnlyList<ChatMessageData> list, Guid? messageId, int maxMessages)
	{
		object source;
		if (messageId.HasValue && !list.All(delegate(ChatMessageData m)
		{
			Guid localId = m.LocalId;
			Guid? guid = messageId;
			return localId != guid;
		}))
		{
			source = list.SkipWhile(delegate(ChatMessageData m)
			{
				Guid localId = m.LocalId;
				Guid? guid = messageId;
				return localId != guid;
			}).Skip(1);
		}
		else
		{
			source = list;
		}
		return ((IEnumerable<ChatMessageData>)source).TakeLast(maxMessages);
	}
}

```

## Voxta.Abstractions.Services.Memory\NullMemoryProviderInstance.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Services.Memory;

public sealed class NullMemoryProviderInstance : IMemoryProviderInstance, IAsyncDisposable
{
	public static IMemoryProviderInstance Instance { get; } = new NullMemoryProviderInstance();

	public bool Enabled => false;

	public void Configure(int maxMemoryTokens)
	{
	}

	public Task RegisterMemoriesAsync(IEnumerable<MemoryRef> items, CancellationToken cancellationToken)
	{
		return Task.CompletedTask;
	}

	public Task<bool> PrefillAsync(IReadOnlyList<ChatMessageData> messages, List<CharacterMemoryEntry> characterMemories, CancellationToken cancellationToken)
	{
		return Task.FromResult(result: false);
	}

	public Task<bool> UpdateMemoryWindowAsync(IReadOnlyList<ChatMessageData> messages, List<CharacterMemoryEntry> characterMemories, CancellationToken cancellationToken)
	{
		return Task.FromResult(result: false);
	}

	public Task<MemorySearchResult[]> SearchAsync(IReadOnlyList<string> values, CancellationToken cancellationToken)
	{
		return Task.FromResult(Array.Empty<MemorySearchResult>());
	}

	public Task UpdateMemoriesAsync(Guid[] remove, MemoryRef[] update, MemoryRef[] add, CancellationToken cancellationToken)
	{
		return Task.CompletedTask;
	}

	public ValueTask DisposeAsync()
	{
		return ValueTask.CompletedTask;
	}
}

```

## Voxta.Abstractions.Services.Memory\NullMemoryProviderService.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Services.Memory;

public class NullMemoryProviderService : NullServiceBase, IMemoryProviderService, IService, IAsyncDisposable
{
	public static IMemoryProviderService Instance { get; } = new NullMemoryProviderService();

	public Task WarmupAsync(CancellationToken cancellationToken)
	{
		return Task.CompletedTask;
	}

	public Task<IMemoryProviderInstance> CreateAsync(CancellationToken cancellationToken)
	{
		return Task.FromResult(NullMemoryProviderInstance.Instance);
	}
}

```

## Voxta.Abstractions.Services.SpeechToText\ISpeechToTextService.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Services.AudioInput.Pipeline;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services.SpeechToText;

public interface ISpeechToTextService : IService, IAsyncDisposable
{
	string? ActiveCulture { get; }

	event EventHandler? SpeechRecognitionStarted;

	event EventHandler<string>? SpeechRecognitionPartial;

	event EventHandler<SpeechToTextTranscriptionCompleteEventArgs>? SpeechRecognitionFinished;

	Task InitializeTranscriptionAsync(AudioInputSpecifications audioInputSpecifications, string culture, CancellationToken cancellationToken);

	Task StartTranscriptionAsync(IAudioInputPipeline audioInput, CancellationToken cancellationToken);

	Task StopTranscriptionAsync();
}

```

## Voxta.Abstractions.Services.SpeechToText\NullSpeechToTextService.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Services.AudioInput.Pipeline;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services.SpeechToText;

public class NullSpeechToTextService : NullServiceBase, ISpeechToTextService, IService, IAsyncDisposable
{
	public static readonly ISpeechToTextService Instance = new NullSpeechToTextService();

	public string? ActiveCulture => null;

	public event EventHandler? SpeechRecognitionStarted;

	public event EventHandler<string>? SpeechRecognitionPartial;

	public event EventHandler<SpeechToTextTranscriptionCompleteEventArgs>? SpeechRecognitionFinished;

	public Task InitializeTranscriptionAsync(AudioInputSpecifications audioInputSpecifications, string culture, CancellationToken cancellationToken)
	{
		throw new InvalidOperationException("Service not initialized");
	}

	public Task StartTranscriptionAsync(IAudioInputPipeline audioInput, CancellationToken cancellationToken)
	{
		throw new InvalidOperationException("Service not initialized");
	}

	public Task StopTranscriptionAsync()
	{
		return Task.CompletedTask;
	}
}

```

## Voxta.Abstractions.Services.SpeechToText\SpeechToTextRecognitionEndReason.cs
```csharp
namespace Voxta.Abstractions.Services.SpeechToText;

public enum SpeechToTextRecognitionEndReason
{
	Undefined,
	Complete,
	Incomplete,
	Rejected,
	Empty
}

```

## Voxta.Abstractions.Services.SpeechToText\SpeechToTextServiceBase.cs
```csharp
using Microsoft.Extensions.Logging;

namespace Voxta.Abstractions.Services.SpeechToText;

public abstract class SpeechToTextServiceBase : ServiceBase
{
	protected SpeechToTextServiceBase(ILogger logger)
		: base(logger)
	{
	}
}

```

## Voxta.Abstractions.Services.SpeechToText\SpeechToTextTranscriptionCompleteEventArgs.cs
```csharp
namespace Voxta.Abstractions.Services.SpeechToText;

public record SpeechToTextTranscriptionCompleteEventArgs(string? Text, SpeechToTextRecognitionEndReason Reason);

```

## Voxta.Abstractions.Services.Summarization\ISummarizationService.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Prompting;
using Voxta.Abstractions.Services.TextGen;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services.Summarization;

public interface ISummarizationService : ILLMService, IService, IAsyncDisposable
{
	double SummarizationDigestRatio { get; }

	double SummarizationTriggerMessagesBuffer { get; }

	int TokenWindow { get; }

	int MaxSummaryLength { get; }

	int KeepLastMessages { get; }

	ValueTask<string> SummarizeAsync(IChatInferenceData chat, IPromptBuilder promptBuilder, IReadOnlyList<ChatMessageData> messagesToSummarize, CancellationToken cancellationToken);

	ValueTask<string> SummarizeAsync(string prompt, CancellationToken cancellationToken);

	Task<IReadOnlyList<MemoryExtractResult>> ExtractMemoriesAsync(IChatInferenceData chat, ICharacterInferenceData character, IPromptBuilder promptBuilder, IReadOnlyList<IChatMessageData> messages, CancellationToken cancellationToken);

	Task<MemoryMergeResult> MergeMemoriesAsync(IChatInferenceData chat, ICharacterInferenceData character, IPromptBuilder promptBuilder, IReadOnlyList<MemoryItem> memories, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Services.Summarization\MemoryExtractResult.cs
```csharp
namespace Voxta.Abstractions.Services.Summarization;

public class MemoryExtractResult
{
	public int Index { get; init; }

	public required string Text { get; init; }

	public override string ToString()
	{
		return $"{Index}: {Text}";
	}
}

```

## Voxta.Abstractions.Services.Summarization\MemoryMergeParsed.cs
```csharp
namespace Voxta.Abstractions.Services.Summarization;

public class MemoryMergeParsed
{
	public required int Index { get; init; }

	public required string Action { get; init; }

	public required string Text { get; init; }

	public override string ToString()
	{
		return $"{Index} [{Action}]: {Text}";
	}
}

```

## Voxta.Abstractions.Services.Summarization\MemoryMergeResult.cs
```csharp
using System;
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Services.Summarization;

public class MemoryMergeResult
{
	public static readonly MemoryMergeResult Empty = new MemoryMergeResult
	{
		Removed = Array.Empty<MemoryItem>(),
		Updated = Array.Empty<MemoryMergeUpdate>()
	};

	public required MemoryItem[] Removed { get; init; }

	public required MemoryMergeUpdate[] Updated { get; init; }
}

```

## Voxta.Abstractions.Services.Summarization\MemoryMergeUpdate.cs
```csharp
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Services.Summarization;

public class MemoryMergeUpdate
{
	public required MemoryItem Item { get; init; }

	public required string Text { get; init; }
}

```

## Voxta.Abstractions.Services.Summarization\NullSummarizationService.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Model;
using Voxta.Abstractions.Prompting;
using Voxta.Abstractions.Services.TextGen;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services.Summarization;

public class NullSummarizationService : NullLLMServiceBase, ISummarizationService, ILLMService, IService, IAsyncDisposable
{
	public static readonly ISummarizationService Instance = new NullSummarizationService();

	public double SummarizationDigestRatio => 0.0;

	public double SummarizationTriggerMessagesBuffer => 0.0;

	public int TokenWindow => 0;

	public int MaxSummaryLength => 0;

	public int KeepLastMessages => 0;

	public ValueTask<string> SummarizeAsync(IChatInferenceData chat, IPromptBuilder promptBuilder, IReadOnlyList<ChatMessageData> messagesToSummarize, CancellationToken cancellationToken)
	{
		throw new InvalidOperationException("Service not initialized");
	}

	public ValueTask<string> SummarizeAsync(string prompt, CancellationToken cancellationToken)
	{
		throw new InvalidOperationException("Service not initialized");
	}

	public Task<IReadOnlyList<MemoryExtractResult>> ExtractMemoriesAsync(IChatInferenceData chat, ICharacterInferenceData character, IPromptBuilder promptBuilder, IReadOnlyList<IChatMessageData> messages, CancellationToken cancellationToken)
	{
		throw new InvalidOperationException("Service not initialized");
	}

	public Task<MemoryMergeResult> MergeMemoriesAsync(IChatInferenceData chat, ICharacterInferenceData character, IPromptBuilder promptBuilder, IReadOnlyList<MemoryItem> memories, CancellationToken cancellationToken)
	{
		throw new InvalidOperationException("Service not initialized");
	}
}

```

## Voxta.Abstractions.Services.TextGen.SettingsFields\TextGenServiceSettingsFields.cs
```csharp
using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using Voxta.Model.Shared.Forms;

namespace Voxta.Abstractions.Services.TextGen.SettingsFields;

public static class TextGenServiceSettingsFields
{
	private const string DefaultDrySequenceBreakers = "\"\\\\n\", \":\", \"\\\\\"\", \"*\"";

	public static readonly FormBooleanField Multimodal = new FormBooleanField
	{
		Name = "multimodal",
		Label = "Multimodal",
		DefaultValue = false,
		Text = "Enables attaching images to messages instead of converting them to description. Requires the Formatting Style to be Multi-Turn."
	};

	public static readonly FormTitleField ModelTitle = FormTitleField.Create("Model");

	public static readonly FormTitleField GpuTitle = FormTitleField.Create("GPU", null, advanced: true);

	public static readonly FormTitleField CreativityTitle = FormTitleField.Create("Creativity");

	public static readonly FormTitleField TokenFilteringCommonTitle = FormTitleField.Create("Token Filtering (Common)");

	public static readonly FormTitleField TokenFilteringAdvancedTitle = FormTitleField.Create("Token Filtering (Advanced)");

	public static readonly FormTitleField RepetitionControlTitle = FormTitleField.Create("Repetition Control");

	public static readonly FormTitleField ReproducibilityTitle = FormTitleField.Create("Reproducibility");

	public static readonly FormTitleField MirostatTitle = FormTitleField.Create("Mirostat");

	public static readonly FormTitleField CfgTitle = FormTitleField.Create("Cfg");

	public static readonly FormTitleField DryTitle = FormTitleField.Create("Dry");

	public static readonly FormTitleField DynamicTemperatureTitle = FormTitleField.Create("Dynamic Temperature");

	public static readonly FormTitleField SmoothingFactorTitle = FormTitleField.Create("Smoothing Factor");

	public static readonly FormTitleField XtcTitle = FormTitleField.Create("Exclude Top Tokens (XTC)");

	public static readonly FormTitleField PresetOverrideTitle = FormTitleField.Create("Preset Override");

	public static FormIntListField Order(string name, int[]? defaultValue = null)
	{
		return new FormIntListField
		{
			Name = name,
			Label = "Sampler Order",
			Text = "Controls the precise order in which sampling methods are applied. The default order is <code>6,0,1,3,4,2,5</code>. Each number corresponds to a specific sampler:<br><code>0</code>: Top-K<br><code>1</code>: Top-A<br><code>2</code>: Top-P<br><code>3</code>: TFS<br><code>4</code>: Typical<br><code>5</code>: Temperature<br><code>6</code>: Repetition Penalty<br><code>7</code>: Min-P<br>You can reorder or remove samplers to customize the generation pipeline. This is an advanced setting.",
			DefaultValue = defaultValue
		};
	}

	public static FormIntSliderField NoRepeatNgramSize(string name, int defaultValue = 0)
	{
		FormIntSliderField formIntSliderField = new FormIntSliderField();
		formIntSliderField.Name = name;
		formIntSliderField.Label = "No-Repeat N-gram";
		formIntSliderField.Text = "Hard block on repeated token sequences (n-grams). 0 disables. Smaller values are stricter. If you must enable it, try 3.";
		formIntSliderField.DefaultValue = defaultValue;
		formIntSliderField.Min = 0;
		formIntSliderField.Max = 20;
		formIntSliderField.SoftMin = 0;
		formIntSliderField.SoftMax = 8;
		formIntSliderField.InactiveValue = 0;
		formIntSliderField.RangeDescriptions = new FormIntRangeDescription[6]
		{
			new FormIntRangeDescription
			{
				To = 0,
				Title = "Disabled",
				Description = "No n-gram blocking. Natural phrasing is unrestricted.",
				Level = "Info"
			},
			new FormIntRangeDescription
			{
				To = 2,
				Title = "Very Strict",
				Description = "Blocks bigrams from repeating. Can make text choppy or ungrammatical.",
				Level = "Warning"
			},
			new FormIntRangeDescription
			{
				To = 3,
				Title = "Strict",
				Description = "Common emergency setting to break loops; may reduce fluency.",
				Level = "Warning"
			},
			new FormIntRangeDescription
			{
				To = 5,
				Title = "Moderate",
				Description = "Blocks short phrase reuse while keeping flow. Useful for short replies.",
				Level = "Good"
			},
			new FormIntRangeDescription
			{
				To = 8,
				Title = "Subtle",
				Description = "Only prevents repetition of longer short phrases; light impact on style.",
				Level = "Good"
			},
			new FormIntRangeDescription
			{
				To = 20,
				Title = "Minimal",
				Description = "Rarely triggers except in long outputs; almost no effect.",
				Level = "Info"
			}
		};
		return formIntSliderField;
	}

	public static FormDoubleSliderField PenaltyAlpha(string name, double defaultValue = 0.0)
	{
		FormDoubleSliderField formDoubleSliderField = new FormDoubleSliderField();
		formDoubleSliderField.Name = name;
		formDoubleSliderField.Label = "Penalty Alpha";
		formDoubleSliderField.Text = "Enables contrastive search when > 0 and top_k > 1. Lower = looser; higher = stronger anti-repetition. Set 0 to disable.";
		formDoubleSliderField.DefaultValue = defaultValue;
		formDoubleSliderField.Min = 0.0;
		formDoubleSliderField.Max = 5.0;
		formDoubleSliderField.SoftMax = 1.0;
		formDoubleSliderField.InactiveValue = 0.0;
		formDoubleSliderField.Precision = 2;
		formDoubleSliderField.RangeDescriptions = new FormDoubleRangeDescription[6]
		{
			new FormDoubleRangeDescription
			{
				To = 0.0,
				Title = "Disabled",
				Description = "Contrastive search is off; standard sampling is used.",
				Level = "Info"
			},
			new FormDoubleRangeDescription
			{
				To = 0.3,
				Title = "Light",
				Description = "Subtle penalty; keeps style close to the model's baseline.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 0.6,
				Title = "Balanced",
				Description = "Good default with top_k≈4. Reduces repetition without feeling rigid.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 1.0,
				Title = "Firm",
				Description = "Stronger repetition control; can feel less freeform.",
				Level = "Warning"
			},
			new FormDoubleRangeDescription
			{
				To = 3.0,
				Title = "Strong",
				Description = "Aggressive penalty; use for very low-entropy, deterministic output.",
				Level = "Warning"
			},
			new FormDoubleRangeDescription
			{
				To = 5.0,
				Title = "Extreme",
				Description = "Max control; often harms fluency and cohesion. Rarely needed.",
				Level = "Danger"
			}
		};
		return formDoubleSliderField;
	}

	public static FormDoubleSliderField Cfg(string name, double defaultValue = 1.5)
	{
		FormDoubleSliderField formDoubleSliderField = new FormDoubleSliderField();
		formDoubleSliderField.Name = name;
		formDoubleSliderField.Label = "Classifier Free Guidance (CFG) Scale";
		formDoubleSliderField.Text = "How strong should the output be guided away from the default output tokens (with or without an opposing prompt). A good value to start with is 1.5 - 1.6.";
		formDoubleSliderField.DefaultValue = defaultValue;
		formDoubleSliderField.Min = 1.0;
		formDoubleSliderField.Max = 5.0;
		formDoubleSliderField.SoftMin = 1.0;
		formDoubleSliderField.SoftMax = 3.0;
		formDoubleSliderField.Precision = 2;
		formDoubleSliderField.InactiveValue = 1.0;
		formDoubleSliderField.RangeDescriptions = new FormDoubleRangeDescription[5]
		{
			new FormDoubleRangeDescription
			{
				ExactValue = 1.0,
				Title = "Disabled",
				Description = "No guidance is applied. The model generates text freely.",
				Level = "Info"
			},
			new FormDoubleRangeDescription
			{
				To = 1.4,
				Title = "Subtle Guidance",
				Description = "Gently nudges the model towards the prompt's intent.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 2.0,
				Title = "Balanced",
				Description = "A good balance of prompt adherence and creativity. Recommended for most cases.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 3.0,
				Title = "Strong Guidance",
				Description = "Strongly adheres to the prompt, which may reduce creativity.",
				Level = "Warning"
			},
			new FormDoubleRangeDescription
			{
				To = 5.0,
				Title = "Aggressive",
				Description = "Very strong adherence to the prompt. Can cause rigid or repetitive output.",
				Level = "Danger"
			}
		};
		return formDoubleSliderField;
	}

	public static FormTextField CfgNegativePrompt(string name)
	{
		return new FormTextField
		{
			Name = name,
			Label = "Classifier Free Guidance (CFG) Opposing Prompt",
			Text = "Enter words or phrases to prevent them from appearing in the AI's response. This steers the generation away from unwanted topics or styles. For example, to prevent the AI from breaking character, you could enter: <code>I am an AI, language model</code>.",
			DefaultValue = null
		};
	}

	public static FormDoubleSliderField Temperature(string name, double defaultValue = 0.7)
	{
		FormDoubleSliderField formDoubleSliderField = new FormDoubleSliderField();
		formDoubleSliderField.Name = name;
		formDoubleSliderField.Label = "Temperature";
		formDoubleSliderField.Text = "Controls the creativity of the AI's responses. Lower values make the AI more focused and predictable, while higher values make it more creative and surprising.";
		formDoubleSliderField.DefaultValue = defaultValue;
		formDoubleSliderField.Min = 0.0;
		formDoubleSliderField.Max = 10.0;
		formDoubleSliderField.SoftMin = 0.0;
		formDoubleSliderField.SoftMax = 2.0;
		formDoubleSliderField.Favorite = true;
		formDoubleSliderField.Precision = 2;
		formDoubleSliderField.RangeDescriptions = new FormDoubleRangeDescription[4]
		{
			new FormDoubleRangeDescription
			{
				To = 0.0,
				Title = "Deterministic",
				Description = "Always picks the most probable token.",
				Level = "Info"
			},
			new FormDoubleRangeDescription
			{
				To = 0.9,
				Title = "Balanced",
				Description = "A good balance between creativity and coherence.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 1.5,
				Title = "Creative",
				Description = "More creative, but may produce less coherent text.",
				Level = "Warning"
			},
			new FormDoubleRangeDescription
			{
				To = 10.0,
				Title = "Chaotic",
				Description = "Very high temperature, leading to highly unpredictable outputs.",
				Level = "Danger"
			}
		};
		return formDoubleSliderField;
	}

	public static FormBooleanField TemperatureLast(string name, bool defaultValue = false)
	{
		return new FormBooleanField
		{
			Name = name,
			Label = "Use Temperature Last",
			Text = "This is useful for excluding tail tokens with top a / min p and then using a high temperature",
			DefaultValue = defaultValue,
			Advanced = true
		};
	}

	public static FormDoubleSliderField DryMultiplier(string name, double defaultValue = 0.0)
	{
		FormDoubleSliderField formDoubleSliderField = new FormDoubleSliderField();
		formDoubleSliderField.Name = name;
		formDoubleSliderField.Label = "DRY Multiplier";
		formDoubleSliderField.Text = "Stops phrase loops. Higher values push the model to say something new instead of repeating the same wording. Start at 0.8; if repeats persist try 1.0–1.5; if it feels stiff, lower to 0.5–0.6. Pairs with DRY Base (how fast the penalty grows, try 1.5–1.8) and Allowed Length (how many tokens can repeat for free, usually 2).";
		formDoubleSliderField.DefaultValue = defaultValue;
		formDoubleSliderField.Min = 0.0;
		formDoubleSliderField.Max = 5.0;
		formDoubleSliderField.SoftMax = 2.0;
		formDoubleSliderField.Precision = 2;
		formDoubleSliderField.InactiveValue = 0.0;
		formDoubleSliderField.RangeDescriptions = new FormDoubleRangeDescription[5]
		{
			new FormDoubleRangeDescription
			{
				To = 0.0,
				Title = "Disabled",
				Description = "DRY is off; no sequence-loop penalty is applied.",
				Level = "Info"
			},
			new FormDoubleRangeDescription
			{
				To = 0.6,
				Title = "Subtle",
				Description = "Light loop discouraging; best when you want maximum freedom.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 1.0,
				Title = "Balanced",
				Description = "Recommended. Stops most loops without cramping style.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 2.0,
				Title = "Strong",
				Description = "Aggressive anti-looping. Use if the model tends to repeat.",
				Level = "Warning"
			},
			new FormDoubleRangeDescription
			{
				To = 5.0,
				Title = "Extreme",
				Description = "Very heavy penalty; can degrade fluency. Rarely needed.",
				Level = "Danger"
			}
		};
		return formDoubleSliderField;
	}

	public static FormDoubleSliderField DryBase(string name, double defaultValue = 1.75)
	{
		FormDoubleSliderField formDoubleSliderField = new FormDoubleSliderField();
		formDoubleSliderField.Name = name;
		formDoubleSliderField.Label = "DRY Base";
		formDoubleSliderField.Text = "How fast the DRY penalty ramps up as a repeat continues. >1 grows faster. Set DRY Multiplier to 0 to disable DRY.";
		formDoubleSliderField.DefaultValue = defaultValue;
		formDoubleSliderField.Min = 1.0;
		formDoubleSliderField.Max = 5.0;
		formDoubleSliderField.SoftMin = 1.4;
		formDoubleSliderField.SoftMax = 2.5;
		formDoubleSliderField.Precision = 2;
		formDoubleSliderField.InactiveValue = 1.0;
		formDoubleSliderField.RangeDescriptions = new FormDoubleRangeDescription[5]
		{
			new FormDoubleRangeDescription
			{
				To = 1.0,
				Title = "Flat",
				Description = "Penalty doesn’t grow with length (not disabled; for off use DRY Multiplier = 0).",
				Level = "Info"
			},
			new FormDoubleRangeDescription
			{
				To = 1.6,
				Title = "Subtle",
				Description = "Gentle ramp-up; nudges away from short loops.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 1.9,
				Title = "Balanced",
				Description = "Recommended. Effective against loops without feeling harsh.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 2.5,
				Title = "Strong",
				Description = "Fast ramp-up; use if the model repeats stubbornly.",
				Level = "Warning"
			},
			new FormDoubleRangeDescription
			{
				To = 5.0,
				Title = "Extreme",
				Description = "Very steep growth; can over-prune and hurt fluency.",
				Level = "Danger"
			}
		};
		return formDoubleSliderField;
	}

	public static FormIntSliderField DryAllowLength(string name, int defaultValue = 2)
	{
		FormIntSliderField formIntSliderField = new FormIntSliderField();
		formIntSliderField.Name = name;
		formIntSliderField.Label = "DRY Allowed Length";
		formIntSliderField.Text = "How many tokens in a repeating phrase are allowed before DRY applies a penalty. DRY is active only if DRY Multiplier > 0. 2 keeps natural bigrams like 'of the'.";
		formIntSliderField.DefaultValue = defaultValue;
		formIntSliderField.Min = 0;
		formIntSliderField.Max = 64;
		formIntSliderField.SoftMin = 1;
		formIntSliderField.SoftMax = 6;
		formIntSliderField.RangeDescriptions = new FormIntRangeDescription[6]
		{
			new FormIntRangeDescription
			{
				To = 0,
				Title = "Immediate",
				Description = "Penalize repeats from the very first token. Very strict.",
				Level = "Warning"
			},
			new FormIntRangeDescription
			{
				To = 1,
				Title = "Strict",
				Description = "Allows only 1 token to repeat before penalizing. Breaks loops fast; can feel stiff.",
				Level = "Warning"
			},
			new FormIntRangeDescription
			{
				To = 2,
				Title = "Balanced",
				Description = "Recommended. Lets short natural phrases pass; penalizes longer repeats.",
				Level = "Good"
			},
			new FormIntRangeDescription
			{
				To = 3,
				Title = "Lenient",
				Description = "Only longer repeats get penalized; a bit more freedom.",
				Level = "Good"
			},
			new FormIntRangeDescription
			{
				To = 6,
				Title = "Permissive",
				Description = "Penalizes only fairly long repeats. May reduce loop protection.",
				Level = "Info"
			},
			new FormIntRangeDescription
			{
				To = 64,
				Title = "Lax",
				Description = "DRY rarely triggers in typical chat. Use only for special cases.",
				Level = "Danger"
			}
		};
		return formIntSliderField;
	}

	public static FormTextField DrySequenceBreakers(string name, string placeholder = "\"\\\\n\", \":\", \"\\\\\"\", \"*\"")
	{
		return new FormTextField
		{
			Name = name,
			Label = "Dry Sequence Breakers",
			Text = "Tokens that reset the dryness penalty.",
			Placeholder = placeholder
		};
	}

	public static FormBooleanField DynamicTemperature(string name, string lowTempName, string highTempName, string exponentName)
	{
		FormBooleanField obj = new FormBooleanField
		{
			Name = name,
			Label = "Dynamic Temperature",
			Text = "Vary temperature between a minimum and maximum based on model confidence. Use either Dynamic Temperature or Mirostat, not both.",
			DefaultValue = false
		};
		int num = 3;
		List<string> list = new List<string>(num);
		CollectionsMarshal.SetCount(list, num);
		Span<string> span = CollectionsMarshal.AsSpan(list);
		int num2 = 0;
		span[num2] = lowTempName;
		num2++;
		span[num2] = highTempName;
		num2++;
		span[num2] = exponentName;
		obj.EnablesFieldsOnActive = list;
		return obj;
	}

	public static FormDoubleSliderField DynaTempLow(string name, double defaultValue = 0.7)
	{
		FormDoubleSliderField formDoubleSliderField = new FormDoubleSliderField();
		formDoubleSliderField.Name = name;
		formDoubleSliderField.Label = "Dynamic Temperature Low";
		formDoubleSliderField.Text = "The minimum temperature for Dynamic Temperature.";
		formDoubleSliderField.DefaultValue = defaultValue;
		formDoubleSliderField.Min = 0.0;
		formDoubleSliderField.Max = 10.0;
		formDoubleSliderField.SoftMax = 3.0;
		formDoubleSliderField.Precision = 2;
		formDoubleSliderField.RangeDescriptions = new FormDoubleRangeDescription[4]
		{
			new FormDoubleRangeDescription
			{
				To = 0.0,
				Title = "Deterministic",
				Description = "The lowest possible temperature will be 0, ensuring predictable output when entropy is low.",
				Level = "Info"
			},
			new FormDoubleRangeDescription
			{
				To = 0.9,
				Title = "Balanced",
				Description = "A balanced minimum, allowing for creativity while maintaining coherence.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 1.5,
				Title = "Creative",
				Description = "A higher minimum for more consistently creative output.",
				Level = "Warning"
			},
			new FormDoubleRangeDescription
			{
				To = 10.0,
				Title = "Chaotic",
				Description = "A very high minimum, leading to highly unpredictable outputs.",
				Level = "Danger"
			}
		};
		return formDoubleSliderField;
	}

	public static FormDoubleSliderField DynaTempHigh(string name, double defaultValue = 1.3)
	{
		FormDoubleSliderField formDoubleSliderField = new FormDoubleSliderField();
		formDoubleSliderField.Name = name;
		formDoubleSliderField.Label = "Dynamic Temperature High";
		formDoubleSliderField.Text = "The maximum temperature for Dynamic Temperature.";
		formDoubleSliderField.DefaultValue = defaultValue;
		formDoubleSliderField.Min = 0.0;
		formDoubleSliderField.Max = 10.0;
		formDoubleSliderField.SoftMax = 3.0;
		formDoubleSliderField.Precision = 2;
		formDoubleSliderField.RangeDescriptions = new FormDoubleRangeDescription[4]
		{
			new FormDoubleRangeDescription
			{
				To = 0.0,
				Title = "Deterministic",
				Description = "The highest possible temperature will be 0, ensuring all output is predictable.",
				Level = "Info"
			},
			new FormDoubleRangeDescription
			{
				To = 0.9,
				Title = "Balanced",
				Description = "A balanced maximum, allowing for creativity while maintaining coherence.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 1.5,
				Title = "Creative",
				Description = "A higher maximum for more creative output when entropy is high.",
				Level = "Warning"
			},
			new FormDoubleRangeDescription
			{
				To = 10.0,
				Title = "Chaotic",
				Description = "A very high maximum, leading to highly unpredictable outputs.",
				Level = "Danger"
			}
		};
		return formDoubleSliderField;
	}

	public static FormDoubleSliderField DynaTempExponent(string name, double defaultValue = 1.0)
	{
		FormDoubleSliderField formDoubleSliderField = new FormDoubleSliderField();
		formDoubleSliderField.Name = name;
		formDoubleSliderField.Label = "Dynamic Temperature Exponent";
		formDoubleSliderField.Text = "Controls the steepness of the curve for Dynamic Temperature. 1 is linear.";
		formDoubleSliderField.DefaultValue = defaultValue;
		formDoubleSliderField.Min = 0.0;
		formDoubleSliderField.Max = 5.0;
		formDoubleSliderField.SoftMin = 0.0;
		formDoubleSliderField.SoftMax = 2.5;
		formDoubleSliderField.Precision = 2;
		formDoubleSliderField.RangeDescriptions = new FormDoubleRangeDescription[4]
		{
			new FormDoubleRangeDescription
			{
				To = 0.99,
				Title = "Gentle Curve",
				Description = "Temperature will change slowly with entropy.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				ExactValue = 1.0,
				Title = "Linear",
				Description = "Temperature scales linearly with entropy. A good default.",
				Level = "Info"
			},
			new FormDoubleRangeDescription
			{
				To = 2.0,
				Title = "Steep Curve",
				Description = "Temperature will change rapidly with entropy, leading to more extreme creative or deterministic shifts.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 5.0,
				Title = "Aggressive Curve",
				Description = "Very rapid temperature changes. Can make the output feel unstable.",
				Level = "Warning"
			}
		};
		return formDoubleSliderField;
	}

	public static FormIntSliderField MinLength(string name, int defaultValue = 0)
	{
		FormIntSliderField formIntSliderField = new FormIntSliderField();
		formIntSliderField.Name = name;
		formIntSliderField.Label = "Min Length";
		formIntSliderField.Text = "The minimum number of tokens to generate. Set to 0 to disable.";
		formIntSliderField.DefaultValue = defaultValue;
		formIntSliderField.Min = 0;
		formIntSliderField.Max = 1024;
		formIntSliderField.SoftMax = 256;
		formIntSliderField.InactiveValue = 0;
		formIntSliderField.RangeDescriptions = new FormIntRangeDescription[4]
		{
			new FormIntRangeDescription
			{
				ExactValue = 0,
				Title = "Disabled",
				Description = "The model is not forced to generate a minimum number of tokens.",
				Level = "Info"
			},
			new FormIntRangeDescription
			{
				To = 32,
				Title = "Short",
				Description = "Forces the model to generate at least a few words or a short sentence.",
				Level = "Good"
			},
			new FormIntRangeDescription
			{
				To = 128,
				Title = "Medium",
				Description = "Ensures the model generates a detailed sentence or a short paragraph.",
				Level = "Good"
			},
			new FormIntRangeDescription
			{
				To = 1024,
				Title = "Long",
				Description = "Forces a long-form response. Use with caution as it can lead to rambling.",
				Level = "Warning"
			}
		};
		return formIntSliderField;
	}

	public static FormDoubleSliderField LengthPenalty(string name, double defaultValue = 1.0)
	{
		FormDoubleSliderField formDoubleSliderField = new FormDoubleSliderField();
		formDoubleSliderField.Name = name;
		formDoubleSliderField.Label = "Length Penalty";
		formDoubleSliderField.Text = "Controls the penalty for generating long sequences. Values > 1.0 encourage longer responses, while < 1.0 encourage shorter ones. 1.0 is neutral.";
		formDoubleSliderField.DefaultValue = defaultValue;
		formDoubleSliderField.Min = 0.0;
		formDoubleSliderField.Max = 4.0;
		formDoubleSliderField.SoftMin = 0.8;
		formDoubleSliderField.SoftMax = 1.5;
		formDoubleSliderField.InactiveValue = 1.0;
		formDoubleSliderField.Precision = 2;
		formDoubleSliderField.RangeDescriptions = new FormDoubleRangeDescription[4]
		{
			new FormDoubleRangeDescription
			{
				To = 0.99,
				Title = "Shorter",
				Description = "Strongly encourages the model to generate shorter text.",
				Level = "Warning"
			},
			new FormDoubleRangeDescription
			{
				ExactValue = 1.0,
				Title = "Neutral",
				Description = "No penalty is applied based on length.",
				Level = "Info"
			},
			new FormDoubleRangeDescription
			{
				To = 1.5,
				Title = "Longer",
				Description = "Gently encourages the model to generate longer, more verbose text.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 4.0,
				Title = "Much Longer",
				Description = "Strongly encourages long-form generation, which may lead to repetition.",
				Level = "Warning"
			}
		};
		return formDoubleSliderField;
	}

	public static FormChoicesField MirostatMode(string name, string tauName, string etaName, int defaultValue = 0)
	{
		FormChoicesField formChoicesField = new FormChoicesField();
		formChoicesField.Name = name;
		formChoicesField.Label = "Mirostat Mode";
		formChoicesField.Text = "An advanced sampling method that aims for a target level of creativity (perplexity), producing more coherent text. When enabled, this overrides <code>Top K, Top P, Top A, Typical P, Min P, </code> and <code>TFS.</code> Mirostat v1 is the original algorithm, while v2 is a more advanced version recommended for most models.";
		formChoicesField.DefaultValue = defaultValue.ToString();
		formChoicesField.Choices = new FormChoicesField.Choice[3]
		{
			new FormChoicesField.Choice
			{
				Value = "0",
				Label = "Disabled"
			},
			new FormChoicesField.Choice
			{
				Value = "1",
				Label = "Mirostat v1"
			},
			new FormChoicesField.Choice
			{
				Value = "2",
				Label = "Mirostat v2 (Recommended)"
			}
		};
		int num = 2;
		List<string> list = new List<string>(num);
		CollectionsMarshal.SetCount(list, num);
		Span<string> span = CollectionsMarshal.AsSpan(list);
		int num2 = 0;
		span[num2] = tauName;
		num2++;
		span[num2] = etaName;
		formChoicesField.EnablesFieldsOnActive = list;
		formChoicesField.InactiveValue = "0";
		return formChoicesField;
	}

	public static FormDoubleSliderField MirostatTau(string name, double defaultValue = 5.0)
	{
		FormDoubleSliderField formDoubleSliderField = new FormDoubleSliderField();
		formDoubleSliderField.Name = name;
		formDoubleSliderField.Label = "Mirostat Tau";
		formDoubleSliderField.Text = "Target complexity (entropy). Higher = more diverse. Used only when Mirostat is enabled.";
		formDoubleSliderField.DefaultValue = defaultValue;
		formDoubleSliderField.Min = 0.0;
		formDoubleSliderField.Max = 10.0;
		formDoubleSliderField.SoftMin = 4.0;
		formDoubleSliderField.SoftMax = 8.0;
		formDoubleSliderField.Precision = 2;
		formDoubleSliderField.RangeDescriptions = new FormDoubleRangeDescription[4]
		{
			new FormDoubleRangeDescription
			{
				To = 3.0,
				Title = "Tight",
				Description = "Low complexity; very focused and predictable.",
				Level = "Warning"
			},
			new FormDoubleRangeDescription
			{
				To = 6.0,
				Title = "Balanced",
				Description = "Good mix of coherence and creativity. Recommended starting range.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 8.0,
				Title = "Creative",
				Description = "Higher diversity while staying mostly coherent.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 10.0,
				Title = "Chaotic",
				Description = "Very high complexity; may reduce coherence.",
				Level = "Danger"
			}
		};
		return formDoubleSliderField;
	}

	public static FormDoubleSliderField MirostatEta(string name, double defaultValue = 0.1)
	{
		FormDoubleSliderField formDoubleSliderField = new FormDoubleSliderField();
		formDoubleSliderField.Name = name;
		formDoubleSliderField.Label = "Mirostat Eta";
		formDoubleSliderField.Text = "Controller speed (learning rate). Lower = steadier; higher = twitchier. Used only when Mirostat is enabled.";
		formDoubleSliderField.DefaultValue = defaultValue;
		formDoubleSliderField.Min = 0.01;
		formDoubleSliderField.Max = 1.0;
		formDoubleSliderField.SoftMin = 0.05;
		formDoubleSliderField.SoftMax = 0.2;
		formDoubleSliderField.Precision = 2;
		formDoubleSliderField.RangeDescriptions = new FormDoubleRangeDescription[4]
		{
			new FormDoubleRangeDescription
			{
				To = 0.05,
				Title = "Slow",
				Description = "Very stable adjustments; slower to react.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 0.2,
				Title = "Balanced",
				Description = "Stable yet responsive. Recommended.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 0.5,
				Title = "Fast",
				Description = "Quick adaptation; may wobble around the target.",
				Level = "Warning"
			},
			new FormDoubleRangeDescription
			{
				To = 1.0,
				Title = "Instant",
				Description = "Extremely reactive; often unstable. Rarely useful.",
				Level = "Danger"
			}
		};
		return formDoubleSliderField;
	}

	public static FormDoubleSliderField RepetitionPenalty(string name, double defaultValue = 1.1)
	{
		FormDoubleSliderField formDoubleSliderField = new FormDoubleSliderField();
		formDoubleSliderField.Name = name;
		formDoubleSliderField.Label = "Repetition Penalty";
		formDoubleSliderField.Text = "Prevents the AI from repeating itself by applying a penalty to words that have already appeared, making them less likely to be chosen again.";
		formDoubleSliderField.DefaultValue = defaultValue;
		formDoubleSliderField.Min = 1.0;
		formDoubleSliderField.Max = 10.0;
		formDoubleSliderField.SoftMin = 1.0;
		formDoubleSliderField.SoftMax = 2.0;
		formDoubleSliderField.Favorite = true;
		formDoubleSliderField.Precision = 2;
		formDoubleSliderField.InactiveValue = 1.0;
		formDoubleSliderField.RangeDescriptions = new FormDoubleRangeDescription[5]
		{
			new FormDoubleRangeDescription
			{
				To = 1.0,
				Title = "Disabled",
				Description = "No penalty is applied. The model may repeat itself.",
				Level = "Info"
			},
			new FormDoubleRangeDescription
			{
				To = 1.1,
				Title = "Subtle",
				Description = "Applies a very light penalty. Good for preventing minor loops.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 1.3,
				Title = "Balanced",
				Description = "The recommended sweet spot for preventing repetition without harming quality.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 1.7,
				Title = "Aggressive",
				Description = "Strongly discourages repetition. May cause the AI to use unusual words or phrasing.",
				Level = "Warning"
			},
			new FormDoubleRangeDescription
			{
				To = 10.0,
				Title = "Extreme",
				Description = "Very high penalty. Can severely degrade output quality and is not recommended.",
				Level = "Danger"
			}
		};
		return formDoubleSliderField;
	}

	public static FormDoubleSliderField EncoderRepetitionPenalty(string name, double defaultValue = 1.0)
	{
		FormDoubleSliderField formDoubleSliderField = new FormDoubleSliderField();
		formDoubleSliderField.Name = name;
		formDoubleSliderField.Label = "Encoder Repetition Penalty";
		formDoubleSliderField.Text = "Controls reuse of words from the prompt. 1.00 = neutral. > 1 encourages reuse; < 1 discourages reuse.";
		formDoubleSliderField.DefaultValue = defaultValue;
		formDoubleSliderField.Min = 0.0;
		formDoubleSliderField.Max = 2.0;
		formDoubleSliderField.SoftMin = 0.9;
		formDoubleSliderField.SoftMax = 1.25;
		formDoubleSliderField.InactiveValue = 1.0;
		formDoubleSliderField.Precision = 2;
		formDoubleSliderField.RangeDescriptions = new FormDoubleRangeDescription[5]
		{
			new FormDoubleRangeDescription
			{
				To = 0.8,
				Title = "Discourage",
				Description = "Strongly discourages copying from the prompt; can drift from source wording.",
				Level = "Warning"
			},
			new FormDoubleRangeDescription
			{
				To = 0.95,
				Title = "Mild",
				Description = "Lightly reduces prompt echo; use if the model parrots the user.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				ExactValue = 1.0,
				Title = "Disabled",
				Description = "No special treatment of prompt tokens (disabled).",
				Level = "Info"
			},
			new FormDoubleRangeDescription
			{
				To = 1.25,
				Title = "Faithful",
				Description = "Gently encourages reuse of prompt terms; good for summaries/RAG.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 2.0,
				Title = "Strong",
				Description = "Strongly favors prompt wording; may feel repetitive.",
				Level = "Warning"
			}
		};
		return formDoubleSliderField;
	}

	public static FormDoubleSliderField RepetitionPenaltyFrequency(string name, double defaultValue = 0.0)
	{
		FormDoubleSliderField formDoubleSliderField = new FormDoubleSliderField();
		formDoubleSliderField.Name = name;
		formDoubleSliderField.Label = "Repetition Penalty Frequency";
		formDoubleSliderField.Text = "Penalizes words based on how many times they've already appeared. Higher values discourage repetition; 0 disables. Negative values encourage repetition.";
		formDoubleSliderField.DefaultValue = defaultValue;
		formDoubleSliderField.Min = -2.0;
		formDoubleSliderField.Max = 2.0;
		formDoubleSliderField.SoftMin = 0.0;
		formDoubleSliderField.SoftMax = 0.3;
		formDoubleSliderField.Favorite = false;
		formDoubleSliderField.Precision = 2;
		formDoubleSliderField.InactiveValue = 0.0;
		formDoubleSliderField.RangeDescriptions = new FormDoubleRangeDescription[6]
		{
			new FormDoubleRangeDescription
			{
				To = -0.01,
				Title = "Encourage Repetition",
				Description = "Makes repeats more likely. Niche use (chants/mantras); can sound monotonous.",
				Level = "Warning"
			},
			new FormDoubleRangeDescription
			{
				ExactValue = 0.0,
				Title = "Disabled",
				Description = "No frequency-based penalty.",
				Level = "Info"
			},
			new FormDoubleRangeDescription
			{
				To = 0.15,
				Title = "Subtle",
				Description = "Lightly discourages repeats. Good everyday setting (try ~0.10).",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 0.3,
				Title = "Balanced",
				Description = "Reduces echoing without sounding unnatural.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 0.5,
				Title = "Firm",
				Description = "Noticeably cuts repetition; may constrain style.",
				Level = "Warning"
			},
			new FormDoubleRangeDescription
			{
				To = 2.0,
				Title = "Aggressive",
				Description = "Strong penalty that often harms fluency/coherence. Use sparingly.",
				Level = "Danger"
			}
		};
		return formDoubleSliderField;
	}

	public static FormDoubleSliderField RepetitionPenaltyPresence(string name, double defaultValue = 0.0)
	{
		FormDoubleSliderField formDoubleSliderField = new FormDoubleSliderField();
		formDoubleSliderField.Name = name;
		formDoubleSliderField.Label = "Repetition Penalty Presence";
		formDoubleSliderField.Text = "Applies a one-time penalty to words that have already appeared. Positive values encourage new topics, while negative values encourage staying on the current topic.";
		formDoubleSliderField.DefaultValue = defaultValue;
		formDoubleSliderField.Min = -2.0;
		formDoubleSliderField.Max = 2.0;
		formDoubleSliderField.SoftMin = -0.5;
		formDoubleSliderField.SoftMax = 0.5;
		formDoubleSliderField.Favorite = false;
		formDoubleSliderField.Precision = 2;
		formDoubleSliderField.InactiveValue = 0.0;
		formDoubleSliderField.RangeDescriptions = new FormDoubleRangeDescription[5]
		{
			new FormDoubleRangeDescription
			{
				ExactValue = 0.0,
				Title = "Disabled",
				Description = "No presence penalty is applied. This is the default setting.",
				Level = "Info"
			},
			new FormDoubleRangeDescription
			{
				To = -0.5,
				Title = "Aggressive Focus",
				Description = "Strongly encourages reusing words to stay on topic, but risks making the output monotonous.",
				Level = "Warning"
			},
			new FormDoubleRangeDescription
			{
				To = -0.01,
				Title = "Focused",
				Description = "Slightly encourages reusing words to maintain focus on the current topic.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 0.5,
				Title = "Diverse",
				Description = "Gently encourages the model to introduce new words and concepts.",
				Level = "Warning"
			},
			new FormDoubleRangeDescription
			{
				To = 2.0,
				Title = "Aggressive Diversity",
				Description = "Strongly pushes the model to find new words, which may harm the natural flow of the text.",
				Level = "Danger"
			}
		};
		return formDoubleSliderField;
	}

	public static FormIntSliderField RepetitionPenaltyRange(string name, int defaultValue = 128)
	{
		FormIntSliderField formIntSliderField = new FormIntSliderField();
		formIntSliderField.Name = name;
		formIntSliderField.Label = "Repetition Penalty Range";
		formIntSliderField.Text = "How many recent tokens the repetition penalties look back. Larger values remember more text. Note: some engines treat 0 as 'unlimited', others as 'off' for the window.";
		formIntSliderField.DefaultValue = defaultValue;
		formIntSliderField.Min = 0;
		formIntSliderField.Max = 8192;
		formIntSliderField.SoftMin = 0;
		formIntSliderField.SoftMax = 1024;
		formIntSliderField.InactiveValue = 0;
		formIntSliderField.RangeDescriptions = new FormIntRangeDescription[7]
		{
			new FormIntRangeDescription
			{
				To = 0,
				Title = "Engine-defined",
				Description = "Often means 'unlimited window'. Some engines may treat 0 as 'no window'.",
				Level = "Info"
			},
			new FormIntRangeDescription
			{
				To = 64,
				Title = "Very Short",
				Description = "Stops immediate echoes with minimal style impact.",
				Level = "Good"
			},
			new FormIntRangeDescription
			{
				To = 128,
				Title = "Short",
				Description = "Good default for chat/story. Balances variety and anti-echo.",
				Level = "Good"
			},
			new FormIntRangeDescription
			{
				To = 256,
				Title = "Medium",
				Description = "Reduces repetition across a few paragraphs.",
				Level = "Good"
			},
			new FormIntRangeDescription
			{
				To = 512,
				Title = "Long",
				Description = "Discourages repeats over longer spans; may over-penalize key terms.",
				Level = "Warning"
			},
			new FormIntRangeDescription
			{
				To = 2048,
				Title = "Very Long",
				Description = "Aggressive. Use with decay to avoid flattening style.",
				Level = "Warning"
			},
			new FormIntRangeDescription
			{
				To = 8192,
				Title = "Full Context",
				Description = "Extremely aggressive. Likely to harm fluency and length.",
				Level = "Danger"
			}
		};
		return formIntSliderField;
	}

	public static FormIntSliderField RepetitionPenaltyDecay(string name, int defaultValue = 0)
	{
		FormIntSliderField formIntSliderField = new FormIntSliderField();
		formIntSliderField.Name = name;
		formIntSliderField.Label = "Repetition Penalty Decay";
		formIntSliderField.Text = "How quickly the repetition penalty fades with distance. Smaller = faster fade; larger = slower fade. 0 disables.";
		formIntSliderField.DefaultValue = defaultValue;
		formIntSliderField.Min = 0;
		formIntSliderField.Max = 8192;
		formIntSliderField.SoftMin = 0;
		formIntSliderField.SoftMax = 512;
		formIntSliderField.InactiveValue = 0;
		formIntSliderField.RangeDescriptions = new FormIntRangeDescription[7]
		{
			new FormIntRangeDescription
			{
				To = 0,
				Title = "Disabled",
				Description = "No decay. The penalty strength is the same across the entire window.",
				Level = "Info"
			},
			new FormIntRangeDescription
			{
				To = 64,
				Title = "Fast Decay",
				Description = "Penalizes very recent repeats strongly, then fades quickly.",
				Level = "Good"
			},
			new FormIntRangeDescription
			{
				To = 160,
				Title = "Balanced",
				Description = "Good everyday setting for chat/story. Recent echoes are curbed; older phrasing can reappear.",
				Level = "Good"
			},
			new FormIntRangeDescription
			{
				To = 256,
				Title = "Moderate Decay",
				Description = "Penalty remains noticeable for a few paragraphs before fading.",
				Level = "Good"
			},
			new FormIntRangeDescription
			{
				To = 512,
				Title = "Slow Decay",
				Description = "Keeps pressure on repeats over longer spans; may suppress legitimate reuse.",
				Level = "Warning"
			},
			new FormIntRangeDescription
			{
				To = 2048,
				Title = "Very Slow Decay",
				Description = "Penalty fades only over long contexts; can make style feel constrained.",
				Level = "Warning"
			},
			new FormIntRangeDescription
			{
				To = 8192,
				Title = "Near-None",
				Description = "Effectively no decay for typical message lengths.",
				Level = "Danger"
			}
		};
		return formIntSliderField;
	}

	public static FormDoubleSliderField RepetitionPenaltySlope(string name, double defaultValue = 0.0)
	{
		FormDoubleSliderField formDoubleSliderField = new FormDoubleSliderField();
		formDoubleSliderField.Name = name;
		formDoubleSliderField.Label = "Repetition Penalty Slope";
		formDoubleSliderField.Text = "If 'Repetition Penalty Range' > 0, this applies a stronger penalty to recent tokens. 0 disables sloping, 1 is linear, and higher is steeper.";
		formDoubleSliderField.DefaultValue = defaultValue;
		formDoubleSliderField.Min = 0.0;
		formDoubleSliderField.Max = 10.0;
		formDoubleSliderField.SoftMax = 2.5;
		formDoubleSliderField.Precision = 2;
		formDoubleSliderField.InactiveValue = 0.0;
		formDoubleSliderField.RangeDescriptions = new FormDoubleRangeDescription[5]
		{
			new FormDoubleRangeDescription
			{
				ExactValue = 0.0,
				Title = "Disabled",
				Description = "Disables sloping. The penalty is applied uniformly across the entire range.",
				Level = "Info"
			},
			new FormDoubleRangeDescription
			{
				To = 0.99,
				Title = "Gentle Slope",
				Description = "Good for chat. The penalty gradually increases for more recent tokens.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				ExactValue = 1.0,
				Title = "Linear Slope",
				Description = "The penalty increases in a straight line. A balanced starting point.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 2.5,
				Title = "Steep Slope",
				Description = "The penalty ramps up sharply, heavily penalizing the most recent tokens.",
				Level = "Warning"
			},
			new FormDoubleRangeDescription
			{
				To = 10.0,
				Title = "Extreme Slope",
				Description = "Very aggressive penalty on recent tokens, which may harm quality.",
				Level = "Danger"
			}
		};
		return formDoubleSliderField;
	}

	public static FormIntSliderField Seed(string name, int defaultValue = -1)
	{
		FormIntSliderField formIntSliderField = new FormIntSliderField();
		formIntSliderField.Name = name;
		formIntSliderField.Label = "Seed";
		formIntSliderField.Text = "Random seed to control sampling. Use -1 for a random seed.";
		formIntSliderField.DefaultValue = defaultValue;
		formIntSliderField.Min = -1;
		formIntSliderField.Max = 1000000;
		formIntSliderField.SoftMin = -1;
		formIntSliderField.SoftMax = 10000;
		formIntSliderField.InactiveValue = 0;
		formIntSliderField.RangeDescriptions = new FormIntRangeDescription[2]
		{
			new FormIntRangeDescription
			{
				To = -1,
				Title = "Random",
				Description = "The model will produce different results on each run. Recommended for creative exploration.",
				Level = "Info"
			},
			new FormIntRangeDescription
			{
				To = 1000000,
				Title = "Fixed",
				Description = "Guarantees the same output every time with the same settings. Essential for reproducibility and testing.",
				Level = "Good"
			}
		};
		return formIntSliderField;
	}

	public static FormDoubleSliderField SmoothingFactor(string name, double defaultValue = 0.0)
	{
		FormDoubleSliderField formDoubleSliderField = new FormDoubleSliderField();
		formDoubleSliderField.Name = name;
		formDoubleSliderField.Label = "Smoothing Factor";
		formDoubleSliderField.Text = "Adjusts how sharply or smoothly the model prefers its next-word choices, using Quadratic Sampling. This setting changes the shape of the probability curve before Min-P or Dynamic Temperature are applied. When 0 < smoothing_factor < 1, the logits distribution becomes flatter. When smoothing_factor > 1, it becomes more peaked.";
		formDoubleSliderField.DefaultValue = defaultValue;
		formDoubleSliderField.Min = 0.0;
		formDoubleSliderField.Max = 5.0;
		formDoubleSliderField.SoftMax = 2.0;
		formDoubleSliderField.Precision = 2;
		formDoubleSliderField.InactiveValue = 0.0;
		formDoubleSliderField.RangeDescriptions = new FormDoubleRangeDescription[6]
		{
			new FormDoubleRangeDescription
			{
				To = 0.0,
				Title = "Disabled",
				Description = "Quadratic sampling is off.",
				Level = "Info"
			},
			new FormDoubleRangeDescription
			{
				To = 0.3,
				Title = "Subtle",
				Description = "Light flattening; adds variety with minimal risk.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 0.99,
				Title = "Flat",
				Description = "Stronger flattening; more diversity, possible coherence loss.",
				Level = "Warning"
			},
			new FormDoubleRangeDescription
			{
				ExactValue = 1.0,
				Title = "Neutral",
				Description = "No change to the distribution.",
				Level = "Info"
			},
			new FormDoubleRangeDescription
			{
				To = 2.0,
				Title = "Sharp",
				Description = "Peaks the distribution; focuses on top tokens.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 5.0,
				Title = "Extreme",
				Description = "Very peaky; can feel repetitive or rigid.",
				Level = "Warning"
			}
		};
		return formDoubleSliderField;
	}

	public static FormDoubleSliderField SmoothingCurve(string name, double defaultValue = 1.0)
	{
		FormDoubleSliderField formDoubleSliderField = new FormDoubleSliderField();
		formDoubleSliderField.Name = name;
		formDoubleSliderField.Label = "Smoothing Curve";
		formDoubleSliderField.Text = "Shapes how strongly smoothing reacts as probabilities change. 1.00 is linear; < 1 gentler; >1 steeper.";
		formDoubleSliderField.DefaultValue = defaultValue;
		formDoubleSliderField.Min = 0.0;
		formDoubleSliderField.Max = 5.0;
		formDoubleSliderField.SoftMin = 0.0;
		formDoubleSliderField.SoftMax = 2.5;
		formDoubleSliderField.Precision = 2;
		formDoubleSliderField.RangeDescriptions = new FormDoubleRangeDescription[4]
		{
			new FormDoubleRangeDescription
			{
				To = 0.8,
				Title = "Gentle Curve",
				Description = "The smoothing effect is applied gradually.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				ExactValue = 1.0,
				Title = "Linear",
				Description = "The smoothing effect is applied linearly. A good default.",
				Level = "Info"
			},
			new FormDoubleRangeDescription
			{
				To = 2.0,
				Title = "Steep Curve",
				Description = "The smoothing effect is applied more aggressively.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 5.0,
				Title = "Aggressive Curve",
				Description = "Very aggressive application of the smoothing effect. Can cause instability.",
				Level = "Warning"
			}
		};
		return formDoubleSliderField;
	}

	public static FormIntSliderField TopK(string name, int defaultValue = 0)
	{
		FormIntSliderField formIntSliderField = new FormIntSliderField();
		formIntSliderField.Name = name;
		formIntSliderField.Label = "Top K";
		formIntSliderField.Text = "Restricts the AI to choosing from a fixed number of the most likely next words. A low value makes the AI more predictable, while a high value allows for more diverse and surprising responses.";
		formIntSliderField.DefaultValue = defaultValue;
		formIntSliderField.Min = 0;
		formIntSliderField.Max = 16384;
		formIntSliderField.SoftMin = 0;
		formIntSliderField.SoftMax = 200;
		formIntSliderField.Favorite = true;
		formIntSliderField.InactiveValue = 0;
		formIntSliderField.RangeDescriptions = new FormIntRangeDescription[5]
		{
			new FormIntRangeDescription
			{
				To = 0,
				Title = "Disabled",
				Description = "All tokens are considered (model-dependent). Can be slow and may produce lower quality results.",
				Level = "Info"
			},
			new FormIntRangeDescription
			{
				To = 1,
				Title = "Deterministic",
				Description = "Always picks the single most likely token. No creativity.",
				Level = "Warning"
			},
			new FormIntRangeDescription
			{
				To = 100,
				Title = "Balanced",
				Description = "A good balance between creativity and coherence. Recommended for most use cases.",
				Level = "Good"
			},
			new FormIntRangeDescription
			{
				To = 400,
				Title = "Creative",
				Description = "Allows for more creative and diverse outputs, but may occasionally be less coherent.",
				Level = "Warning"
			},
			new FormIntRangeDescription
			{
				To = int.MaxValue,
				Title = "Unrestricted",
				Description = "Considers a very large number of tokens, which can lead to unpredictable and lower quality results.",
				Level = "Danger"
			}
		};
		return formIntSliderField;
	}

	public static FormDoubleSliderField TopP(string name, double? defaultValue = 1.0)
	{
		FormDoubleSliderField formDoubleSliderField = new FormDoubleSliderField();
		formDoubleSliderField.Name = name;
		formDoubleSliderField.Label = "Top P";
		formDoubleSliderField.Text = "Filters out unlikely words to keep the AI's response coherent. Lower values make the AI more focused and predictable. Higher values allow for more variety and creativity in its word choice.";
		formDoubleSliderField.DefaultValue = defaultValue;
		formDoubleSliderField.Min = 0.0;
		formDoubleSliderField.Max = 1.0;
		formDoubleSliderField.InactiveValue = 1.0;
		formDoubleSliderField.RangeDescriptions = new FormDoubleRangeDescription[5]
		{
			new FormDoubleRangeDescription
			{
				To = 0.0,
				Title = "Deterministic",
				Description = "Picks only the single most likely token, removing all randomness. Not recommended for creative text.",
				Level = "Info"
			},
			new FormDoubleRangeDescription
			{
				To = 0.3,
				Title = "Focused",
				Description = "Restricts the model to the safest and most likely tokens. Very coherent, but not creative.",
				Level = "Warning"
			},
			new FormDoubleRangeDescription
			{
				To = 0.8,
				Title = "Balanced",
				Description = "A good balance between coherence and creativity. Recommended for most uses.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 0.99,
				Title = "Creative",
				Description = "Allows for more diverse and unexpected results, which may be less predictable.",
				Level = "Info"
			},
			new FormDoubleRangeDescription
			{
				To = 1.0,
				Title = "Unfiltered",
				Description = "Effectively disables Top P, allowing the model to pick from all possible tokens.",
				Level = "Info"
			}
		};
		return formDoubleSliderField;
	}

	public static FormDoubleSliderField MinP(string name, double defaultValue = 0.0)
	{
		FormDoubleSliderField formDoubleSliderField = new FormDoubleSliderField();
		formDoubleSliderField.Name = name;
		formDoubleSliderField.Label = "Min P";
		formDoubleSliderField.Text = "An intelligent filter designed to work well with high Temperature settings. It allows for creative and surprising answers while helping to ensure they don't become nonsensical or incoherent.";
		formDoubleSliderField.DefaultValue = defaultValue;
		formDoubleSliderField.Min = 0.0;
		formDoubleSliderField.Max = 1.0;
		formDoubleSliderField.SoftMax = 0.15;
		formDoubleSliderField.InactiveValue = 0.0;
		formDoubleSliderField.Precision = 2;
		formDoubleSliderField.RangeDescriptions = new FormDoubleRangeDescription[5]
		{
			new FormDoubleRangeDescription
			{
				To = 0.0,
				Title = "Disabled",
				Description = "No min_p filtering.",
				Level = "Info"
			},
			new FormDoubleRangeDescription
			{
				To = 0.05,
				Title = "Creative",
				Description = "Very permissive; maximizes variety. Best for exploratory or story-like output.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 0.1,
				Title = "Balanced",
				Description = "Recommended sweet spot. Good blend of coherence and diversity.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 0.2,
				Title = "Coherence-focused",
				Description = "Noticeably stricter; reins in rambling and randomness, but reduces novelty.",
				Level = "Warning"
			},
			new FormDoubleRangeDescription
			{
				To = 1.0,
				Title = "Aggressive",
				Description = "Very restrictive; often harms output unless you need low-entropy, highly stable text.",
				Level = "Danger"
			}
		};
		return formDoubleSliderField;
	}

	public static FormDoubleSliderField TopA(string name, double defaultValue = 0.0)
	{
		FormDoubleSliderField formDoubleSliderField = new FormDoubleSliderField();
		formDoubleSliderField.Name = name;
		formDoubleSliderField.Label = "Top A";
		formDoubleSliderField.Text = "An adaptive filter that removes any word that is significantly less probable than the AI's single top choice. This helps maintain coherence while still allowing for variety when the AI is less certain.";
		formDoubleSliderField.DefaultValue = defaultValue;
		formDoubleSliderField.Min = 0.0;
		formDoubleSliderField.Max = 1.0;
		formDoubleSliderField.SoftMax = 0.3;
		formDoubleSliderField.InactiveValue = 0.0;
		formDoubleSliderField.Precision = 2;
		formDoubleSliderField.RangeDescriptions = new FormDoubleRangeDescription[5]
		{
			new FormDoubleRangeDescription
			{
				To = 0.0,
				Title = "Disabled",
				Description = "Top A filtering is off.",
				Level = "Info"
			},
			new FormDoubleRangeDescription
			{
				To = 0.05,
				Title = "Loose",
				Description = "Barely filters. Maximizes variety; minimal coherence effect.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 0.15,
				Title = "Balanced",
				Description = "Gently drops very improbable tokens. Good creativity–coherence balance.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 0.3,
				Title = "Coherence-focused",
				Description = "Stronger cutoff, especially when the model is confident. Stabilizes phrasing but can reduce novelty.",
				Level = "Warning"
			},
			new FormDoubleRangeDescription
			{
				To = 1.0,
				Title = "Aggressive",
				Description = "Very restrictive. Often harms output quality; use only for strict, low-entropy tasks.",
				Level = "Danger"
			}
		};
		return formDoubleSliderField;
	}

	public static FormDoubleSliderField TypicalP(string name, double defaultValue = 1.0)
	{
		FormDoubleSliderField formDoubleSliderField = new FormDoubleSliderField();
		formDoubleSliderField.Name = name;
		formDoubleSliderField.Label = "Typical P";
		formDoubleSliderField.Text = "Filters out unusual word choices so the text sounds natural. Lower values filter more; 1 turns it off.";
		formDoubleSliderField.DefaultValue = defaultValue;
		formDoubleSliderField.Min = 0.0;
		formDoubleSliderField.Max = 1.0;
		formDoubleSliderField.SoftMin = 0.9;
		formDoubleSliderField.SoftMax = 1.0;
		formDoubleSliderField.InactiveValue = 1.0;
		formDoubleSliderField.Precision = 2;
		formDoubleSliderField.RangeDescriptions = new FormDoubleRangeDescription[5]
		{
			new FormDoubleRangeDescription
			{
				To = 0.5,
				Title = "Aggressive",
				Description = "Very restrictive; keeps only highly typical tokens. Can feel repetitive and reduce diversity.",
				Level = "Danger"
			},
			new FormDoubleRangeDescription
			{
				To = 0.9,
				Title = "Coherence-focused",
				Description = "Strong filtering that stabilizes style and reins in odd tokens, at the cost of creativity.",
				Level = "Warning"
			},
			new FormDoubleRangeDescription
			{
				To = 0.95,
				Title = "Balanced",
				Description = "Gentle typicality filtering. Natural tone without heavy pruning. Recommended for most use.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 0.99,
				Title = "Subtle",
				Description = "Very light touch; close to normal sampling while nudging away from unlikely outliers.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 1.0,
				Title = "Disabled",
				Description = "Typical sampling is off. Full vocabulary considered.",
				Level = "Info"
			}
		};
		return formDoubleSliderField;
	}

	public static FormDoubleSliderField TailFreeSampling(string name, double defaultValue = 1.0)
	{
		FormDoubleSliderField formDoubleSliderField = new FormDoubleSliderField();
		formDoubleSliderField.Name = name;
		formDoubleSliderField.Label = "Tail Free Sampling (TFS)";
		formDoubleSliderField.Text = "This sampler looks for the point where the list of possible words becomes flat and uninteresting (the \"plateau\") and cuts everything off after that point. It's an advanced way to filter out junk responses.";
		formDoubleSliderField.DefaultValue = defaultValue;
		formDoubleSliderField.Min = 0.0;
		formDoubleSliderField.Max = 1.0;
		formDoubleSliderField.SoftMin = 0.9;
		formDoubleSliderField.SoftMax = 1.0;
		formDoubleSliderField.InactiveValue = 1.0;
		formDoubleSliderField.Precision = 2;
		formDoubleSliderField.RangeDescriptions = new FormDoubleRangeDescription[5]
		{
			new FormDoubleRangeDescription
			{
				To = 0.7,
				Title = "Aggressive",
				Description = "Heavy pruning of the tail. Can reduce diversity and cause repetitive phrasing.",
				Level = "Danger"
			},
			new FormDoubleRangeDescription
			{
				To = 0.9,
				Title = "Coherence-focused",
				Description = "Strong trimming that reins in rambling. Less variety, more stability.",
				Level = "Warning"
			},
			new FormDoubleRangeDescription
			{
				To = 0.95,
				Title = "Balanced",
				Description = "Gentle tail trim. Good blend of coherence and diversity. Recommended.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 0.99,
				Title = "Subtle",
				Description = "Very light trimming; close to full vocabulary while removing obvious junk.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 1.0,
				Title = "Disabled",
				Description = "No tail-free filtering. Full vocabulary considered.",
				Level = "Info"
			}
		};
		return formDoubleSliderField;
	}

	public static FormDoubleSliderField XtcThreshold(string name, double defaultValue = 0.15)
	{
		FormDoubleSliderField formDoubleSliderField = new FormDoubleSliderField();
		formDoubleSliderField.Name = name;
		formDoubleSliderField.Label = "Exclude Top Choices Threshold";
		formDoubleSliderField.Text = "Boosts creativity by removing the most predictable word choices, which helps avoid clichés and repetition. This slider sets the probability threshold for a word to be considered 'predictable'. Lower values are stronger.";
		formDoubleSliderField.DefaultValue = defaultValue;
		formDoubleSliderField.Min = 0.0;
		formDoubleSliderField.Max = 0.5;
		formDoubleSliderField.Precision = 2;
		formDoubleSliderField.InactiveValue = 0.0;
		formDoubleSliderField.RangeDescriptions = new FormDoubleRangeDescription[5]
		{
			new FormDoubleRangeDescription
			{
				To = 0.0,
				Title = "Disabled",
				Description = "XTC is disabled. Top choices are not excluded.",
				Level = "Info"
			},
			new FormDoubleRangeDescription
			{
				To = 0.08,
				Title = "Creative",
				Description = "Strong trimming of predictable choices; forces creative and unexpected outputs. Use for brainstorming or fiction; may reduce factual fidelity.",
				Level = "Warning"
			},
			new FormDoubleRangeDescription
			{
				To = 0.15,
				Title = "Balanced",
				Description = "A good balance that avoids clichés while keeping coherence. Good default for general creative prompts.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 0.3,
				Title = "Subtle",
				Description = "Gently trims the most predictable choices. Slightly fresher wording without big surprises.",
				Level = "Info"
			},
			new FormDoubleRangeDescription
			{
				To = 0.5,
				Title = "Near max",
				Description = "Threshold is near the upper bound; very few tokens qualify as 'predictable', so XTC effect is minimal or vanishes.",
				Level = "Danger"
			}
		};
		return formDoubleSliderField;
	}

	public static FormDoubleSliderField XtcProbability(string name, double defaultValue = 0.5)
	{
		FormDoubleSliderField formDoubleSliderField = new FormDoubleSliderField();
		formDoubleSliderField.Name = name;
		formDoubleSliderField.Label = "Exclude Top Choices Probability";
		formDoubleSliderField.Text = "After the 'Threshold' identifies which predictable words can be removed, this slider sets the percentage chance that the removal will actually happen on each token. A value of 0.5 means a 50% chance on each step.";
		formDoubleSliderField.DefaultValue = defaultValue;
		formDoubleSliderField.Min = 0.0;
		formDoubleSliderField.Max = 1.0;
		formDoubleSliderField.Precision = 2;
		formDoubleSliderField.RangeDescriptions = new FormDoubleRangeDescription[5]
		{
			new FormDoubleRangeDescription
			{
				To = 0.0,
				Title = "Disabled",
				Description = "XTC is never applied. No tokens are trimmed based on this mechanism.",
				Level = "Info"
			},
			new FormDoubleRangeDescription
			{
				To = 0.2,
				Title = "Subtle",
				Description = "XTC is applied rarely; gentle nudges away from the most-predictable tokens.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 0.5,
				Title = "Balanced",
				Description = "Applied about half the time; a practical balance between creativity and coherence.",
				Level = "Good"
			},
			new FormDoubleRangeDescription
			{
				To = 0.8,
				Title = "Creative",
				Description = "Applied often; trims a large portion of likely tokens and encourages more inventive outputs.",
				Level = "Warning"
			},
			new FormDoubleRangeDescription
			{
				To = 1.0,
				Title = "Aggressive",
				Description = "Applied on every token; maximizes creativity but may produce incoherent or factual errors.",
				Level = "Danger"
			}
		};
		return formDoubleSliderField;
	}
}

```

## Voxta.Abstractions.Services.TextGen\GenerateReplyRequest.cs
```csharp
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services.TextGen;

public class GenerateReplyRequest
{
	public GenerateReplyRequestType Type { get; init; }

	public string? UserName { get; init; }

	public string? AssistantName { get; init; }

	public required SimpleMessageData[] Messages { get; init; }

	public string? FormattingAndContinuationPrefix { get; init; }

	public string? ContinuationPrefill { get; init; }

	public required string[] StoppingStrings { get; init; }

	public int MaxNewTokens { get; init; }
}

```

## Voxta.Abstractions.Services.TextGen\GenerateReplyRequestType.cs
```csharp
namespace Voxta.Abstractions.Services.TextGen;

public enum GenerateReplyRequestType
{
	Chat,
	Instruct
}

```

## Voxta.Abstractions.Services.TextGen\ILLMService.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Diagnostics;
using Voxta.Abstractions.Tokenizers;

namespace Voxta.Abstractions.Services.TextGen;

public interface ILLMService : IService, IAsyncDisposable
{
	ITokenizer Tokenizer { get; }

	Task WarmupAsync(CancellationToken cancellationToken);

	IAsyncEnumerable<LLMOutputToken> GenerateStreamingAsync(InferenceLogger observer, GenerateReplyRequest request, CancellationToken cancellationToken = default(CancellationToken));

	ValueTask<string> GenerateAsync(GenerateReplyRequest request, InferenceLogger observer, CancellationToken cancellationToken = default(CancellationToken));
}

```

## Voxta.Abstractions.Services.TextGen\ITextGenService.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Prompting;
using Voxta.Abstractions.TextGenerationStreaming;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services.TextGen;

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

	IAsyncEnumerable<LLMOutputToken> GenerateReplyAsync(IChatInferenceData chat, ICharacterInferenceData character, IPromptBuilder promptBuilder, string? prefix, GenerateConstraintRequest constraintRequest, CancellationToken cancellationToken);

	IAsyncEnumerable<LLMOutputToken> GenerateStoryAsync(IChatInferenceData chat, string eventDescription, IPromptBuilder promptBuilder, string? prefix, GenerateConstraintRequest constraintRequest, CancellationToken cancellationToken);

	ValueTask<GenerateReplyConstraints> GetConstraintsAsync(IChatInferenceData chat, ICharacterInferenceData character, GenerateConstraintRequest constraintRequest, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Services.TextGen\LLMOutputToken.cs
```csharp
using System.Collections.Generic;
using Voxta.Abstractions.Services.VisionCapture;

namespace Voxta.Abstractions.Services.TextGen;

public record LLMOutputToken(string Text, bool Thinking = false, IReadOnlyList<IImage>? Images = null);

```

## Voxta.Abstractions.Services.TextGen\NullLLMServiceBase.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Diagnostics;
using Voxta.Abstractions.Tokenizers;

namespace Voxta.Abstractions.Services.TextGen;

public abstract class NullLLMServiceBase : NullServiceBase, ILLMService, IService, IAsyncDisposable
{
	public ITokenizer Tokenizer => NullTokenizer.Instance;

	public Task WarmupAsync(CancellationToken cancellationToken)
	{
		return Task.CompletedTask;
	}

	public IAsyncEnumerable<LLMOutputToken> GenerateStreamingAsync(InferenceLogger observer, GenerateReplyRequest request, CancellationToken cancellationToken = default(CancellationToken))
	{
		throw new InvalidOperationException("Service not initialized");
	}

	public ValueTask<string> GenerateAsync(GenerateReplyRequest request, InferenceLogger observer, CancellationToken cancellationToken = default(CancellationToken))
	{
		throw new InvalidOperationException("Service not initialized");
	}
}

```

## Voxta.Abstractions.Services.TextGen\NullTextGenService.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Prompting;
using Voxta.Abstractions.TextGenerationStreaming;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services.TextGen;

public class NullTextGenService : NullLLMServiceBase, ITextGenService, ILLMService, IService, IAsyncDisposable
{
	public static ITextGenService Instance { get; } = new NullTextGenService();

	public int MaxWindowTokens => 0;

	public int MaxTokens => 0;

	public int MaxMemoryTokens => 0;

	public SystemPromptOverrideTypes SystemPromptOverrideType => SystemPromptOverrideTypes.AddOn;

	public string? SystemPromptAddon => null;

	public string? ContextPromptAddon => null;

	public string? ReplyPrefix => null;

	public TextProcessingOptions TextProcessing => TextProcessingOptions.None;

	public TextGenPreprocessingSettings CreateTextGenPreprocessingSettings(int maxSentences = 0, bool? allowMultipleLines = null)
	{
		return new TextGenPreprocessingSettings
		{
			MaxSentences = maxSentences,
			MaxWordsInAsterisks = 0,
			AllowMultipleLines = (allowMultipleLines == true),
			TextProcessing = TextProcessingOptions.None
		};
	}

	public bool CanProcessAttachments()
	{
		return false;
	}

	public IAsyncEnumerable<LLMOutputToken> GenerateReplyAsync(IChatInferenceData chat, ICharacterInferenceData character, IPromptBuilder promptBuilder, string? prefix, GenerateConstraintRequest constraintRequest, CancellationToken cancellationToken)
	{
		throw new InvalidOperationException("Service not initialized");
	}

	public IAsyncEnumerable<LLMOutputToken> GenerateStoryAsync(IChatInferenceData chat, string eventDescription, IPromptBuilder promptBuilder, string? prefix, GenerateConstraintRequest constraintRequest, CancellationToken cancellationToken)
	{
		throw new InvalidOperationException("Service not initialized");
	}

	public ValueTask<GenerateReplyConstraints> GetConstraintsAsync(IChatInferenceData chat, ICharacterInferenceData character, GenerateConstraintRequest constraintRequest, CancellationToken cancellationToken)
	{
		throw new InvalidOperationException("Service not initialized");
	}
}

```

## Voxta.Abstractions.Services.TextGen\TextGenPreprocessingSettings.cs
```csharp
using Voxta.Abstractions.TextGenerationStreaming;

namespace Voxta.Abstractions.Services.TextGen;

public record TextGenPreprocessingSettings
{
	public int MaxSentences { get; set; }

	public TextProcessingOptions TextProcessing { get; set; }

	public int MaxWordsInAsterisks { get; set; }

	public bool AllowMultipleLines { get; set; } = true;
}

```

## Voxta.Abstractions.Services.TextGen\ThinkingFormat.cs
```csharp
namespace Voxta.Abstractions.Services.TextGen;

public record ThinkingFormat(string ThinkStart, string ThinkEnd);

```

## Voxta.Abstractions.Services.TextToSpeech\ITextToSpeechService.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Services.AudioOutput.Tunneling;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services.TextToSpeech;

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

## Voxta.Abstractions.Services.TextToSpeech\IVoiceProvider.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Registration;
using Voxta.Abstractions.Security;
using Voxta.Model.Shared;
using Voxta.Model.Shared.Forms;

namespace Voxta.Abstractions.Services.TextToSpeech;

public interface IVoiceProvider
{
	Task<FormField[]> GetFormFieldsAsync(IAuthenticationContext auth, ISettingsSource settings, CancellationToken cancellationToken);

	Task<VoiceInfo[]> GetVoicesAsync(IAuthenticationContext auth, ISettingsSource settings, Guid? characterId, string culture, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Services.TextToSpeech\NullTextToSpeechService.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Services.AudioOutput.Tunneling;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services.TextToSpeech;

public class NullTextToSpeechService : NullServiceBase, ITextToSpeechService, IService, IAsyncDisposable
{
	public static readonly ITextToSpeechService Instance = new NullTextToSpeechService();

	public string ContentType
	{
		get
		{
			throw new InvalidOperationException("Service is not initialized");
		}
	}

	public PcmStreamingConfig? PcmStreaming => null;

	public IReadOnlyList<string>? GetThinkingSpeech()
	{
		return null;
	}

	public ValueTask<TextToSpeechAudioSettings> GetAudioSettings(VoiceInfo? voice, CancellationToken cancellationToken)
	{
		throw new InvalidOperationException("Service is not initialized");
	}

	public Task WarmupAsync(VoiceInfo? ttsVoice, Guid userId, Guid? characterId, string culture, CancellationToken cancellationToken)
	{
		throw new InvalidOperationException("Service is not initialized");
	}

	public Task GenerateSpeechAsync(SpeechRequest request, ISpeechTunnel tunnel, CancellationToken cancellationToken)
	{
		throw new InvalidOperationException("Service is not initialized");
	}
}

```

## Voxta.Abstractions.Services.TextToSpeech\NullVoiceProvider.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Registration;
using Voxta.Abstractions.Security;
using Voxta.Model.Shared;
using Voxta.Model.Shared.Forms;

namespace Voxta.Abstractions.Services.TextToSpeech;

public class NullVoiceProvider : IVoiceProvider
{
	public static readonly IVoiceProvider Instance = new NullVoiceProvider();

	public Task<VoiceInfo[]> GetVoicesAsync(IAuthenticationContext auth, ISettingsSource settings, Guid? characterId, string culture, CancellationToken cancellationToken)
	{
		return Task.FromResult(Array.Empty<VoiceInfo>());
	}

	public Task<FormField[]> GetFormFieldsAsync(IAuthenticationContext auth, ISettingsSource settings, CancellationToken cancellationToken)
	{
		return Task.FromResult(Array.Empty<FormField>());
	}
}

```

## Voxta.Abstractions.Services.TextToSpeech\PcmStreamingConfig.cs
```csharp
namespace Voxta.Abstractions.Services.TextToSpeech;

public record PcmStreamingConfig(int SampleRate, int Channels, int BitsPerSample)
{
	public string ContentType => "audio/pcm";

	public float GetDurationMs(int bytes)
	{
		int num = BitsPerSample / 8;
		return (float)(bytes / (num * Channels)) * 1000f / (float)SampleRate;
	}
}

```

## Voxta.Abstractions.Services.TextToSpeech\SpeechRequest.cs
```csharp
using System;
using System.Collections.Generic;
using Voxta.Abstractions.Registration;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services.TextToSpeech;

public class SpeechRequest
{
	private static readonly Dictionary<string, string> _emptyParameters = new Dictionary<string, string>();

	public required string Text { get; init; }

	public required VoiceInfo? Voice { get; init; }

	public required string Culture { get; init; }

	public string? PreviousText { get; init; }

	public Guid? CharacterId { get; init; }

	public required Guid UserId { get; init; }

	public string? ReplyTo { get; init; }

	private Dictionary<string, string> GetParameters()
	{
		return Voice?.Parameters ?? _emptyParameters;
	}

	public ISettingsSource GetSettings()
	{
		return new StaticSettingsSource(GetParameters());
	}
}

```

## Voxta.Abstractions.Services.TextToSpeech\TextToSpeechAudioSettings.cs
```csharp
using System.Runtime.CompilerServices;

namespace Voxta.Abstractions.Services.TextToSpeech;

public record TextToSpeechAudioSettings(int AudioGap = 0, bool SkipPunctuationOnly = false)
{
	public static TextToSpeechAudioSettings Empty { get; } = new TextToSpeechAudioSettings();

	[CompilerGenerated]
	protected TextToSpeechAudioSettings(TextToSpeechAudioSettings original)
	{
		AudioGap = original.AudioGap;
		SkipPunctuationOnly = original.SkipPunctuationOnly;
	}
}

```

## Voxta.Abstractions.Services.TextToSpeech\TextToSpeechServiceBase.cs
```csharp
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services.TextToSpeech;

public abstract class TextToSpeechServiceBase : ServiceBase
{
	protected TextToSpeechServiceBase(ILogger logger)
		: base(logger)
	{
	}

	public virtual ValueTask<TextToSpeechAudioSettings> GetAudioSettings(VoiceInfo? voice, CancellationToken cancellationToken)
	{
		return ValueTask.FromResult(TextToSpeechAudioSettings.Empty);
	}
}

```

## Voxta.Abstractions.Services.VisionCapture\Base64UrlImage.cs
```csharp
using System;
using Voxta.Common;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services.VisionCapture;

public class Base64UrlImage(string base64Url, ComputerVisionSource source) : ImageBase(), IImage
{
	public string Base64Url => base64Url;

	public string ContentType => GetContentType();

	public ComputerVisionSource Source => source;

	public string ToBase64Url()
	{
		return base64Url;
	}

	public byte[] ToBytes()
	{
		return Convert.FromBase64String(GetBase64String());
	}

	public SimpleMessageDataAttachment ToAttachment()
	{
		return new SimpleMessageDataAttachmentBase64(base64Url);
	}

	private string GetContentType()
	{
		int num = base64Url.IndexOf(',');
		if (num <= 0)
		{
			throw new InvalidOperationException("Invalid base64Url format: " + base64Url.Excerpt(512));
		}
		if (!base64Url.StartsWith("data:"))
		{
			throw new InvalidOperationException("Invalid base64Url format, missing 'data:' prefix: " + base64Url.Excerpt(512));
		}
		string text = base64Url.Substring(5, num - 5);
		if (text.EndsWith(";base64"))
		{
			string text2 = text;
			text = text2.Substring(0, text2.Length - 7);
		}
		return text;
	}

	private string GetBase64String()
	{
		int num = base64Url.IndexOf(',');
		if (num <= 0)
		{
			throw new InvalidOperationException("Invalid base64Url format: " + base64Url.Excerpt(512));
		}
		string text = base64Url;
		int num2 = num + 1;
		return text.Substring(num2, text.Length - num2);
	}
}

```

## Voxta.Abstractions.Services.VisionCapture\BytesImage.cs
```csharp
using System;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services.VisionCapture;

public class BytesImage(string contentType, byte[] bytes, ComputerVisionSource source) : ImageBase(), IImage
{
	public string ContentType => contentType;

	public byte[] Bytes => bytes;

	public ComputerVisionSource Source => source;

	public string ToBase64Url()
	{
		return "data:" + ContentType + ";base64," + Convert.ToBase64String(Bytes);
	}

	public byte[] ToBytes()
	{
		return Bytes;
	}

	public SimpleMessageDataAttachment ToAttachment()
	{
		return new SimpleMessageDataAttachmentBytes(ContentType, Bytes);
	}
}

```

## Voxta.Abstractions.Services.VisionCapture\IImage.cs
```csharp
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services.VisionCapture;

public interface IImage
{
	string ContentType { get; }

	ComputerVisionSource Source { get; }

	string? FileName { get; }

	string? Label { get; }

	string? Description { get; set; }

	string ToBase64Url();

	byte[] ToBytes();

	SimpleMessageDataAttachment ToAttachment();
}

```

## Voxta.Abstractions.Services.VisionCapture\ImageBase.cs
```csharp
namespace Voxta.Abstractions.Services.VisionCapture;

public abstract class ImageBase
{
	public string? FileName { get; init; }

	public string? Label { get; init; }

	public string? Description { get; set; }
}

```

## Voxta.Abstractions.Services.VisionCapture\IVisionCaptureService.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services.VisionCapture;

public interface IVisionCaptureService : IService, IAsyncDisposable
{
	ComputerVisionSource[] SupportedSources { get; }

	Task<IImage?> CaptureImageAsync(ComputerVisionSource source, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Services.VisionCapture\IVisionCaptureServiceFactory.cs
```csharp
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Security;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services.VisionCapture;

public interface IVisionCaptureServiceFactory
{
	Task<IVisionCaptureServicesContainer> CreateVisionCaptureServicesAsync(IAuthenticationContext auth, List<ComputerVisionSource> sources, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Services.VisionCapture\IVisionCaptureServicesContainer.cs
```csharp
using System;
using System.Collections.Generic;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services.VisionCapture;

public interface IVisionCaptureServicesContainer : IAsyncDisposable
{
	int Count { get; }

	IVisionCaptureService GetBySource(ComputerVisionSource source);

	IEnumerable<KeyValuePair<ComputerVisionSource, IVisionCaptureService>> All();
}

```

## Voxta.Abstractions.Services.VisionCapture\NullVisionCaptureService.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services.VisionCapture;

public class NullVisionCaptureService : NullServiceBase, IVisionCaptureService, IService, IAsyncDisposable
{
	public static IVisionCaptureService Instance { get; } = new NullVisionCaptureService();

	public ComputerVisionSource[] SupportedSources => Array.Empty<ComputerVisionSource>();

	public Task<IImage?> CaptureImageAsync(ComputerVisionSource source, CancellationToken cancellationToken)
	{
		throw new InvalidOperationException("Service not initialized");
	}
}

```

## Voxta.Abstractions.Services.WakeWord\IWakeWordAudioInputPipelineMiddleware.cs
```csharp
using System;
using Voxta.Abstractions.Services.AudioInput.Pipeline;

namespace Voxta.Abstractions.Services.WakeWord;

public interface IWakeWordAudioInputPipelineMiddleware : IAudioInputPipelineMiddleware, IAsyncDisposable
{
	void TranscriptionStartedAsync();

	bool HandleTranscriptionResult(string? text);

	void HandleSpeechStart();

	void HandleSpeechComplete();
}

```

## Voxta.Abstractions.Services.WakeWord\IWakeWordService.cs
```csharp
using System;
using System.Threading.Tasks;
using Voxta.Abstractions.Connections;

namespace Voxta.Abstractions.Services.WakeWord;

public interface IWakeWordService : IService, IAsyncDisposable
{
	Task<IWakeWordAudioInputPipelineMiddleware> CreateWakeWordAudioInputMiddlewareAsync(IUserConnectionTunnel tunnel, Guid sessionId);
}

```

## Voxta.Abstractions.Services.WakeWord\NullWakeWordService.cs
```csharp
using System;
using System.Threading.Tasks;
using Voxta.Abstractions.Connections;

namespace Voxta.Abstractions.Services.WakeWord;

public class NullWakeWordService : NullServiceBase, IWakeWordService, IService, IAsyncDisposable
{
	public static readonly IWakeWordService Instance = new NullWakeWordService();

	public Task<IWakeWordAudioInputPipelineMiddleware> CreateWakeWordAudioInputMiddlewareAsync(IUserConnectionTunnel tunnel, Guid sessionId)
	{
		throw new InvalidOperationException("Service not initialized");
	}
}

```

## Voxta.Abstractions.Services\ClientBase.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Registration;
using Voxta.Abstractions.Security;

namespace Voxta.Abstractions.Services;

public abstract class ClientBase : IClient, IAsyncDisposable
{
	private IServiceInstanceSettings? _instanceSettings;

	private ISettingsSource? _moduleConfiguration;

	private ISettingsSource? _serviceSettings;

	protected IServiceInstanceSettings InstanceSettings => _instanceSettings ?? throw new NullReferenceException("Service not initialized");

	protected IAuthenticationContext Auth { get; private set; } = NullAuthenticationContext.Instance;

	protected ISettingsSource ModuleConfiguration => _moduleConfiguration ?? throw new NullReferenceException("Module configuration not initialized");

	protected ISettingsSource ServiceSettings => _serviceSettings ?? throw new NullReferenceException("Service settings not initialized");

	public Task InitializeAsync(IAuthenticationContext auth, IServiceInstanceSettings settings, CancellationToken cancellationToken)
	{
		Auth = auth;
		_instanceSettings = settings;
		_moduleConfiguration = new InstanceSettingsSource(settings.ServiceType, () => InstanceSettings.ModuleConfiguration);
		_serviceSettings = new InstanceSettingsSource(settings.ServiceType, () => InstanceSettings.ServiceSettings);
		return InitializeAsync(cancellationToken);
	}

	protected virtual Task InitializeAsync(CancellationToken cancellationToken)
	{
		return Task.CompletedTask;
	}

	public virtual ValueTask DisposeAsync()
	{
		GC.SuppressFinalize(this);
		return ValueTask.CompletedTask;
	}
}

```

## Voxta.Abstractions.Services\IClient.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Security;

namespace Voxta.Abstractions.Services;

public interface IClient : IAsyncDisposable
{
	Task InitializeAsync(IAuthenticationContext auth, IServiceInstanceSettings settings, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Services\IModuleRuntimeInstance.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.ModuleRuntimeInstances;
using Voxta.Abstractions.Security;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services;

public interface IModuleRuntimeInstance<in TConfiguration> : IModuleRuntimeInstance, IAsyncDisposable where TConfiguration : ModuleRuntimeInstanceConfiguration
{
	Task InitializeAsync(IAuthenticationContext auth, TConfiguration configuration, CancellationToken cancellationToken);
}
public interface IModuleRuntimeInstance : IAsyncDisposable
{
	ServiceTypes[] ProvidesServiceTypes { get; }

	string ServiceName { get; }
}

```

## Voxta.Abstractions.Services\IService.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Security;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services;

public interface IService : IAsyncDisposable
{
	bool Enabled => true;

	ServiceTypes ServiceType { get; }

	IServiceInstanceSettings InstanceSettings { get; }

	Task InitializeAsync(IAuthenticationContext auth, IServiceInstanceSettings settings, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Services\IServiceFactory.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Configuration;
using Voxta.Abstractions.Registration;
using Voxta.Abstractions.Security;

namespace Voxta.Abstractions.Services;

public interface IServiceFactory
{
	Task<T> CreateAsync<T>(IAuthenticationContext auth, ServiceConfiguration config, CancellationToken cancellationToken) where T : class, IService;
}
public interface IServiceFactory<TInterface> where TInterface : class, IService
{
	ServiceWithSettings<TInterface> CreateUninitializedAsync(ServiceConfiguration config);

	Task<TInterface> CreateAsync(IAuthenticationContext auth, ServiceConfiguration config, CancellationToken cancellationToken);

	Task<(TProvider? Provider, Dictionary<string, string> Settings)> CreateServiceProvider<TProvider>(IAuthenticationContext auth, Guid moduleId, Func<ModuleDefinition, Type?> select, CancellationToken cancellationToken) where TProvider : class;

	Task<TInterface[]> CreateAllAsync(IAuthenticationContext auth, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Services\IServiceInstanceSettings.cs
```csharp
using System;
using System.Collections.Generic;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services;

public interface IServiceInstanceSettings
{
	Guid ModuleId { get; }

	string ServiceName { get; }

	ServiceTypes ServiceType { get; }

	Dictionary<string, string> ModuleConfiguration { get; set; }

	Guid? ServiceSettingsId { get; set; }

	Dictionary<string, string> ServiceSettings { get; set; }

	ServiceLink ToLink();
}

```

## Voxta.Abstractions.Services\NullServiceBase.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Security;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services;

public abstract class NullServiceBase : IService, IAsyncDisposable
{
	public bool Enabled => false;

	public ServiceTypes ServiceType
	{
		get
		{
			throw new InvalidOperationException("Service not initialized");
		}
	}

	public IServiceInstanceSettings InstanceSettings
	{
		get
		{
			throw new InvalidOperationException("Service not initialized");
		}
	}

	public Task InitializeAsync(IAuthenticationContext auth, IServiceInstanceSettings settings, CancellationToken cancellationToken)
	{
		return Task.CompletedTask;
	}

	public ValueTask DisposeAsync()
	{
		return ValueTask.CompletedTask;
	}
}

```

## Voxta.Abstractions.Services\NullServiceInstanceSettings.cs
```csharp
using System;
using System.Collections.Generic;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services;

public class NullServiceInstanceSettings : IServiceInstanceSettings
{
	public static readonly NullServiceInstanceSettings Instance = new NullServiceInstanceSettings();

	public Guid ModuleId
	{
		get
		{
			throw new InvalidOperationException("No service instance available");
		}
	}

	public string ServiceName
	{
		get
		{
			throw new InvalidOperationException("No service instance available");
		}
	}

	public ServiceTypes ServiceType => ServiceTypes.None;

	public Dictionary<string, string> ModuleConfiguration { get; set; } = new Dictionary<string, string>();

	public Guid? ServiceSettingsId { get; set; }

	public Dictionary<string, string> ServiceSettings { get; set; } = new Dictionary<string, string>();

	public ServiceLink ToLink()
	{
		throw new InvalidOperationException("No service instance available");
	}
}

```

## Voxta.Abstractions.Services\ServiceBase.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Voxta.Abstractions.Registration;
using Voxta.Abstractions.Security;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services;

public abstract class ServiceBase : IService, IAsyncDisposable
{
	private IServiceInstanceSettings? _instanceSettings;

	private ISettingsSource? _moduleConfiguration;

	private ISettingsSource? _serviceSettings;

	public ServiceTypes ServiceType => InstanceSettings.ServiceType;

	public IServiceInstanceSettings InstanceSettings => _instanceSettings ?? throw new NullReferenceException("Service not initialized");

	protected IAuthenticationContext Auth { get; private set; } = NullAuthenticationContext.Instance;

	protected ISettingsSource ModuleConfiguration => _moduleConfiguration ?? throw new NullReferenceException("Module configuration not initialized");

	protected ISettingsSource ServiceSettings => _serviceSettings ?? throw new NullReferenceException("Service settings not initialized");

	protected ServiceBase(ILogger logger)
	{
	}

	public Task InitializeAsync(IAuthenticationContext auth, IServiceInstanceSettings settings, CancellationToken cancellationToken)
	{
		Auth = auth;
		_instanceSettings = settings;
		_moduleConfiguration = new InstanceSettingsSource(settings.ServiceType, () => InstanceSettings.ModuleConfiguration);
		_serviceSettings = new InstanceSettingsSource(settings.ServiceType, () => InstanceSettings.ServiceSettings);
		return InitializeAsync(cancellationToken);
	}

	protected virtual Task InitializeAsync(CancellationToken cancellationToken)
	{
		return Task.CompletedTask;
	}

	public virtual ValueTask DisposeAsync()
	{
		GC.SuppressFinalize(this);
		return ValueTask.CompletedTask;
	}
}

```

## Voxta.Abstractions.Services\ServiceInstanceSettings.cs
```csharp
using System;
using System.Collections.Generic;
using Voxta.Abstractions.Configuration;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Services;

public class ServiceInstanceSettings : IServiceInstanceSettings
{
	public Guid ModuleId { get; } = (config.Module ?? throw new ArgumentException("Received null module", "config")).ModuleId;

	public string ServiceName { get; } = config.Module?.ServiceName ?? throw new ArgumentException("Received null module", "config");

	public ServiceTypes ServiceType { get; } = config.ServiceType;

	public Dictionary<string, string> ModuleConfiguration { get; set; } = config.Module?.ModuleConfiguration ?? throw new ArgumentException("Received null module", "config");

	public Guid? ServiceSettingsId { get; set; } = config.Settings?.ServiceSettingsId;

	public Dictionary<string, string> ServiceSettings { get; set; } = config.Settings?.ServiceSettings ?? new Dictionary<string, string>();

	public ServiceInstanceSettings(ServiceConfiguration config)
	{
	}

	public ServiceLink ToLink()
	{
		return new ServiceLink
		{
			ServiceId = ModuleId,
			ServiceName = ServiceName
		};
	}
}

```

## Voxta.Abstractions.Services\ServiceWithSettings.cs
```csharp
using System;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Services;

public class ServiceWithSettings<TService> : IAsyncDisposable where TService : class, IService
{
	private TService? _service;

	public ServiceInstanceSettings Settings => _003Csettings_003EP;

	public ServiceWithSettings(TService service, ServiceInstanceSettings settings)
	{
		_003Csettings_003EP = settings;
		_service = service;
		base._002Ector();
	}

	public TService Acquire()
	{
		TService? result = _service ?? throw new ObjectDisposedException("ServiceWithSettings");
		_service = null;
		return result;
	}

	public async ValueTask DisposeAsync()
	{
		if (_service != null)
		{
			await _service.DisposeAsync();
			_service = null;
		}
	}
}

```

## Voxta.Abstractions.Templating\ITemplate.cs
```csharp
using System.Threading.Tasks;

namespace Voxta.Abstractions.Templating;

public interface ITemplate
{
	bool IsEmpty { get; }

	string Render(ITemplateModel model);

	ValueTask<string> RenderWithImportsAsync(ITemplateModel model);
}

```

## Voxta.Abstractions.Templating\ITemplateModel.cs
```csharp
using System;

namespace Voxta.Abstractions.Templating;

public interface ITemplateModel
{
	object? this[string key] { get; set; }

	void Add(string key, object value);

	void AddMemo(string key, Func<string> value);

	void AddMemo(string key, Func<object> value);

	void AddFunction(string key, Delegate value);
}

```

## Voxta.Abstractions.Templating\ITemplateSystem.cs
```csharp
using Voxta.Abstractions.Prompting;

namespace Voxta.Abstractions.Templating;

public interface ITemplateSystem
{
	ITemplate Empty { get; }

	ITemplateModel CreateModel();

	ITemplate Parse(string id, string? template);

	ITemplate Parse(string id, string? template, IPromptTemplatesIncludesLoader loader);
}

```

## Voxta.Abstractions.Templating\NullTemplateModel.cs
```csharp
using System;

namespace Voxta.Abstractions.Templating;

public class NullTemplateModel : ITemplateModel
{
	public object? this[string key]
	{
		get
		{
			throw new NotSupportedException();
		}
		set
		{
		}
	}

	public void Add(string key, object value)
	{
	}

	public void AddMemo(string key, Func<string> value)
	{
	}

	public void AddMemo(string key, Func<object> value)
	{
	}

	public void AddFunction(string key, Delegate value)
	{
	}
}

```

## Voxta.Abstractions.Templating\StaticTemplate.cs
```csharp
using System.Threading.Tasks;

namespace Voxta.Abstractions.Templating;

public class StaticTemplate(string template) : ITemplate
{
	public static ITemplate Empty { get; } = new StaticTemplate(string.Empty);

	public bool IsEmpty => template == "";

	public string Render(ITemplateModel model)
	{
		return template;
	}

	public ValueTask<string> RenderWithImportsAsync(ITemplateModel model)
	{
		return new ValueTask<string>(template);
	}

	public override string ToString()
	{
		return template;
	}
}

```

## Voxta.Abstractions.Templating\StaticTemplateSystem.cs
```csharp
using Voxta.Abstractions.Prompting;

namespace Voxta.Abstractions.Templating;

public class StaticTemplateSystem : ITemplateSystem
{
	public static readonly StaticTemplateSystem Instance = new StaticTemplateSystem();

	public ITemplate Empty => StaticTemplate.Empty;

	public ITemplateModel CreateModel()
	{
		return new NullTemplateModel();
	}

	public ITemplate Parse(string id, string? template)
	{
		return new StaticTemplate(template ?? "");
	}

	public ITemplate Parse(string id, string? template, IPromptTemplatesIncludesLoader loader)
	{
		return new StaticTemplate(template ?? "");
	}
}

```

## Voxta.Abstractions.Templating\TemplateException.cs
```csharp
using System;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Templating;

public class TemplateException : VoxtaException
{
	public TemplateException(string message, Exception? innerException = null)
		: base(message, innerException)
	{
	}
}

```

## Voxta.Abstractions.Templating\TemplateParseException.cs
```csharp
using System;

namespace Voxta.Abstractions.Templating;

public class TemplateParseException : TemplateException
{
	public TemplateParseException(string message, Exception? innerException = null)
		: base(message, innerException)
	{
	}
}

```

## Voxta.Abstractions.Templating\TemplateRenderException.cs
```csharp
using System;

namespace Voxta.Abstractions.Templating;

public class TemplateRenderException : TemplateException
{
	public TemplateRenderException(string message, Exception innerException)
		: base(message, innerException)
	{
	}
}

```

## Voxta.Abstractions.TextGenerationStreaming\ISentencePreprocessor.cs
```csharp
using System.Collections.Generic;
using System.Threading;

namespace Voxta.Abstractions.TextGenerationStreaming;

public interface ISentencePreprocessor
{
	IAsyncEnumerable<TextChunk> ProcessChunk(string rawChunk, CancellationToken cancellationToken);

	IAsyncEnumerable<TextChunk> Complete(CancellationToken cancellationToken);

	string GetResult();
}

```

## Voxta.Abstractions.TextGenerationStreaming\ISentencePreprocessorFactory.cs
```csharp
using Voxta.Abstractions.Services.TextGen;

namespace Voxta.Abstractions.TextGenerationStreaming;

public interface ISentencePreprocessorFactory
{
	ISentencePreprocessor Create(TextGenPreprocessingSettings preprocessingSettings);
}

```

## Voxta.Abstractions.TextGenerationStreaming\TextChunk.cs
```csharp
namespace Voxta.Abstractions.TextGenerationStreaming;

public readonly struct TextChunk
{
	public string Text { get; init; }

	public int StartIndex { get; init; }

	public int EndIndex { get; init; }

	public bool IsNarration { get; init; }

	public override string ToString()
	{
		return Text ?? "";
	}
}

```

## Voxta.Abstractions.TextGenerationStreaming\TextProcessingOptions.cs
```csharp
namespace Voxta.Abstractions.TextGenerationStreaming;

public enum TextProcessingOptions
{
	None,
	Roleplay
}

```

## Voxta.Abstractions.Tokenizers\ITokenizer.cs
```csharp
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Tokenizers;

public interface ITokenizer
{
	ValueTask<int> CountTokensAsync(string value, CancellationToken cancellationToken);

	ValueTask<IReadOnlyList<int>> TokenizeAsync(string value, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Tokenizers\NullTokenizer.cs
```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Tokenizers;

public class NullTokenizer : ITokenizer
{
	public static readonly ITokenizer Instance = new NullTokenizer();

	public ValueTask<int> CountTokensAsync(string value, CancellationToken cancellationToken)
	{
		return new ValueTask<int>(0);
	}

	public ValueTask<IReadOnlyList<int>> TokenizeAsync(string value, CancellationToken cancellationToken)
	{
		return new ValueTask<IReadOnlyList<int>>(Array.Empty<int>());
	}
}

```

## Voxta.Abstractions.Utils\CommonFoldersExtensions.cs
```csharp
using System.Globalization;
using System.IO;
using System.Linq;

namespace Voxta.Abstractions.Utils;

public static class CommonFoldersExtensions
{
	public static string? GetFile(this ICommonFolders folders, CultureInfo culture, GetCommonFolderDelegate getFolder, bool allowEnglishFallback = true)
	{
		return folders.GetCommonFolder(culture, getFolder, allowEnglishFallback).FirstOrDefault(File.Exists);
	}
}

```

## Voxta.Abstractions.Utils\DomainRateLimiterExtensions.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Security;

namespace Voxta.Abstractions.Utils;

public static class DomainRateLimiterExtensions
{
	public static Task<IDisposable> LockAsync(this IDomainRateLimiter rateLimiter, IAuthenticationContext auth, Uri? domain, int maxConcurrentLocks = 1, int releaseDelay = 0, CancellationToken cancellationToken = default(CancellationToken))
	{
		return rateLimiter.LockAsync(auth, domain?.Host, maxConcurrentLocks, releaseDelay, cancellationToken);
	}
}

```

## Voxta.Abstractions.Utils\GetCommonFolderDelegate.cs
```csharp
namespace Voxta.Abstractions.Utils;

public delegate string GetCommonFolderDelegate(string baseFolder, string language);

```

## Voxta.Abstractions.Utils\IChatMessageFactory.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Chats.Objects.Characters;
using Voxta.Abstractions.Chats.Objects.Chats;
using Voxta.Abstractions.Model;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Utils;

public interface IChatMessageFactory
{
	Guid CreateMessageId();

	Task<ChatMessageData> CreateMessageAsync(Guid messageId, ChatMessageRole role, string text, long? chatTime = null, int? tokens = null, CancellationToken cancellationToken = default(CancellationToken));

	Task<ChatMessageData> CreateCharacterMessageAsync(Guid messageId, ICharacterInferenceData character, string text, long? chatTime = null, int? tokens = null, CancellationToken cancellationToken = default(CancellationToken));

	Task<ChatMessageData> CreateUserMessageAsync(Guid messageId, UserInstance user, string text, long? chatTime = null, CancellationToken cancellationToken = default(CancellationToken));

	Task<ChatMessageData> CreateCustomMessageAsync(Guid messageId, ChatMessageRole role, string text, Guid? senderId, string? user, long? chatTime = null, CancellationToken cancellationToken = default(CancellationToken));

	Task UpdateMessageTextAndTokensAndSaveAsync(ChatMessageData message, string text, CancellationToken cancellationToken);

	Task UpdateMessageAsync(ChatMessageData message, CancellationToken cancellationToken);

	Task SaveMessageAsync(ChatMessageData message, CancellationToken cancellationToken);

	Task InsertMessageInHistoryAndSaveAsync(ChatMessageData message, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Utils\IChatTimer.cs
```csharp
namespace Voxta.Abstractions.Utils;

public interface IChatTimer
{
	long GetChatTime();

	void SetStartTime(long startTime);

	void Pause();

	void Resume();
}

```

## Voxta.Abstractions.Utils\ICommonFolders.cs
```csharp
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;

namespace Voxta.Abstractions.Utils;

public interface ICommonFolders
{
	string Resources { get; }

	string Data { get; }

	string GetUserFolder(Guid userId)
	{
		return Path.Combine(Data, "Users", userId.ToString("D"));
	}

	IEnumerable<string> GetCommonFolder(CultureInfo culture, GetCommonFolderDelegate getFolder, bool allowEnglishFallback);
}

```

## Voxta.Abstractions.Utils\IDomainRateLimiter.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Voxta.Abstractions.Security;

namespace Voxta.Abstractions.Utils;

public interface IDomainRateLimiter
{
	Task<IDisposable> LockAsync(IAuthenticationContext auth, string? domain, int maxConcurrentLocks, int releaseDelay = 0, CancellationToken cancellationToken = default(CancellationToken));
}

```

## Voxta.Abstractions.Utils\ISanitizer.cs
```csharp
namespace Voxta.Abstractions.Utils;

public interface ISanitizer
{
	string SanitizeForModel(string message, int maxWordsInAsterisks);
}

```

## Voxta.Abstractions.Utils\IUserInteractionRequestsManager.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Utils;

public interface IUserInteractionRequestsManager
{
	Task<IUserInteractionRequestToken> RequestUserInteractionAsync(CancellationToken cancellationToken);

	Task FulfillUserInteractionRequestAsync(Guid id, UserInteractionRequestResult result, CancellationToken cancellationToken);
}

```

## Voxta.Abstractions.Utils\IUserInteractionRequestToken.cs
```csharp
using System;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Utils;

public interface IUserInteractionRequestToken : IAsyncDisposable
{
	Guid RequestId { get; }

	Task<UserInteractionRequestResult> Task { get; }

	void Cancel();
}

```

## Voxta.Abstractions.Utils\UserInteractionRequestInput.cs
```csharp
using System;

namespace Voxta.Abstractions.Utils;

public class UserInteractionRequestInput
{
	public Guid ModuleId { get; set; }

	public required string Message { get; init; }

	public string? Url { get; init; }
}

```

## Voxta.Abstractions.Utils\UserInteractionRequestResult.cs
```csharp
namespace Voxta.Abstractions.Utils;

public record UserInteractionRequestResult;

```

## Voxta.Abstractions.Utils\UserInteractionRequestTokenExtensions.cs
```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Voxta.Abstractions.Utils;

public static class UserInteractionRequestTokenExtensions
{
	public static async ValueTask<UserInteractionRequestResult?> WaitAsync(this IUserInteractionRequestToken token, TimeSpan timeout)
	{
		using CancellationTokenSource cts = new CancellationTokenSource(timeout);
		try
		{
			return await token.Task.WaitAsync(cts.Token);
		}
		catch (OperationCanceledException) when (cts.IsCancellationRequested)
		{
			token.Cancel();
			return null;
		}
	}
}

```

## Voxta.Abstractions.Web\IUrlProvider.cs
```csharp
using System;
using Voxta.Model.Shared;

namespace Voxta.Abstractions.Web;

public interface IUrlProvider
{
	string? GetThumbnailUrl<T>(Guid id, ImageInfo? image);

	string GetAssetUrl<T>(Guid id, string path);

	string GetModuleLogoUrl(string serviceName);
}

```

## Voxta.Abstractions.Web\UrlProviderExtensions.cs
```csharp
using Voxta.Abstractions.Model;

namespace Voxta.Abstractions.Web;

public static class UrlProviderExtensions
{
	public static string? GetThumbnailUrl<T>(this IUrlProvider urlProvider, T item) where T : ImportableObject
	{
		return urlProvider.GetThumbnailUrl<T>(item.LocalId, item.Thumbnail);
	}
}

```

## Voxta.Abstractions\IVoxtaVersion.cs
```csharp
namespace Voxta.Abstractions;

public interface IVoxtaVersion
{
	string Current { get; }
}

```

