---
title: "App Triggersv2"
url: "https://doc.voxta.ai/docs/app-triggersv2/"
scraped_at: "2025-12-19T04:37:56.664Z"
---
[Voxta Documentation](https://doc.voxta.ai/)
[](https://doc.voxta.ai/tools/search/)
  * [](https://doc.voxta.ai/docs/)
  * [Voxta Cloud](https://doc.voxta.ai/cloud/)
  * [Virt-A-Mate](https://doc.voxta.ai/vam/)
  * [Voxy](https://doc.voxta.ai/voxy/)


**Documentation** [What is Voxta?](https://doc.voxta.ai/docs/what-is-voxta/) [Getting Started](https://doc.voxta.ai/docs/getting-started/) **Installing** [Install Server](https://doc.voxta.ai/docs/install-server/) [Update Server](https://doc.voxta.ai/docs/update-server/) **Interface** [Menu](https://doc.voxta.ai/docs/menu/) [Chat](https://doc.voxta.ai/docs/chat/) [Profile](https://doc.voxta.ai/docs/profile/) [Characters](https://doc.voxta.ai/docs/characters/) [Services](https://doc.voxta.ai/docs/services/) [Add Service](https://doc.voxta.ai/docs/add-service/) [Wizard](https://doc.voxta.ai/docs/wizard/) [Benchmarks](https://doc.voxta.ai/docs/benchmarks/) [Chat History](https://doc.voxta.ai/docs/chat-history/) [Diagnostics](https://doc.voxta.ai/docs/diagnostics/) [Test Services](https://doc.voxta.ai/docs/test-services/) [Prompt Formatting](https://doc.voxta.ai/docs/prompt-formatting/) [Prompt Templates](https://doc.voxta.ai/docs/prompt-templates/) [Playgrounds](https://doc.voxta.ai/docs/playgrounds/) [Terminal](https://doc.voxta.ai/docs/terminal/) **Creator Studio** [Scenarios](https://doc.voxta.ai/docs/scenarios/) [Memory Books](https://doc.voxta.ai/docs/memory-books/) [Actions](https://doc.voxta.ai/docs/actions/) [Events](https://doc.voxta.ai/docs/events/) [Contexts](https://doc.voxta.ai/docs/contexts/) [Templates](https://doc.voxta.ai/docs/templates/) [Flags](https://doc.voxta.ai/docs/flags/) [Scripting](https://doc.voxta.ai/docs/scripting/) [App Triggers](https://doc.voxta.ai/docs/app-triggers/) [App Triggersv2](https://doc.voxta.ai/docs/app-triggersv2/) [Packages](https://doc.voxta.ai/docs/packages/) [Messages](https://doc.voxta.ai/docs/messages/) [Asset Formats](https://doc.voxta.ai/docs/asset-formats/) **Services** [Services Overview](https://doc.voxta.ai/docs/services-overview/) [✨ Voxta Cloud](https://doc.voxta.ai/docs/voxta-cloud/) [✨ F5-TTS](https://doc.voxta.ai/docs/f5-tts/) [✨ Coqui](https://doc.voxta.ai/docs/coqui/) [✨ Azure Speech Service](https://doc.voxta.ai/docs/azure-speech-service/) [✨ Deepgram](https://doc.voxta.ai/docs/deepgram/) [✨ ExLlamaV2](https://doc.voxta.ai/docs/exllamav2/) [✨ llama.cpp](https://doc.voxta.ai/docs/llama.cpp/) [✨ WhisperLive](https://doc.voxta.ai/docs/whisperlive/) [✨ ElevenLabs](https://doc.voxta.ai/docs/elevenlabs/) [✨ KoboldAI](https://doc.voxta.ai/docs/koboldai/) [✨ NovelAI](https://doc.voxta.ai/docs/novelai/) [✨ Text To Speech HTTP API](https://doc.voxta.ai/docs/text-to-speech-http-api/) [✨ OpenAI](https://doc.voxta.ai/docs/openai/) [✨ OpenAI Compatible](https://doc.voxta.ai/docs/openai-compatible/) [✨ OpenRouter](https://doc.voxta.ai/docs/openrouter/) [✨ Text Generation Web UI](https://doc.voxta.ai/docs/text-generation-web-ui/) [🔘 Silero](https://doc.voxta.ai/docs/silero/) [🔘 Vosk](https://doc.voxta.ai/docs/vosk/) [🚧 Azure Bing Search](https://doc.voxta.ai/docs/azure-bing-search/) [🚧 Text Generation Inference](https://doc.voxta.ai/docs/text-generation-inference/) [🚧 Windows Speech](https://doc.voxta.ai/docs/windows-speech/) [✨ ChromaDB](https://doc.voxta.ai/docs/chromadb/) [✨ Florence-2 Vision](https://doc.voxta.ai/docs/florence-2-vision/) [✨ Kokoro TTS](https://doc.voxta.ai/docs/kokoro-tts/) [NAudio](https://doc.voxta.ai/docs/naudio/) [Voxta Utilities](https://doc.voxta.ai/docs/voxta-utilities/) **Articles** [Large Language Models](https://doc.voxta.ai/docs/large-language-models/) [RunPod](https://doc.voxta.ai/docs/runpod/) [XTTS Server](https://doc.voxta.ai/docs/xtts-server/) [LLM Parameters](https://doc.voxta.ai/docs/llm-parameters/) [Troubleshooting & Solutions](https://doc.voxta.ai/docs/troubleshooting-solutions/) [Glossary](https://doc.voxta.ai/docs/glossary/) **FAQ** [Voxta Cloud Credits FAQ](https://doc.voxta.ai/docs/voxta-cloud-credits-faq/) [Voxta server FAQ](https://doc.voxta.ai/docs/voxta-server-faq/) [Voxta VAM plugin FAQ](https://doc.voxta.ai/docs/voxta-vam-plugin-faq/) **About** [Patreon](https://doc.voxta.ai/docs/patreon/) [Terms](https://doc.voxta.ai/docs/terms/) [AI Safety](https://doc.voxta.ai/docs/ai-safety/)
# App Triggersv2
The Voxta.Talk API enables dynamic control over the user interface, character appearances, and audio experiences within your Voxta interactions. Use these application triggers from Voxta Studio scripts via `chat.appTrigger("TriggerName", ...params)` to create rich, interactive scenes.
## Asset Management
### Asset Helper Functions (Recommended for Asset-Based Triggers)
For triggers that accept an `Asset` object (e.g., the asset-based `SetAvatar`), these helper functions are the recommended way to retrieve and manage assets. They are available on collections like `e.character.assets` or `chat.scenario.assets`.
Function | Description | Example Usage  
---|---|---  
`assets.get(name)` | Retrieves a specific asset by its filename (e.g., “idle.png”, “theme.mp3”). Throws an error if the asset is not found. |  `e.character.assets.get("happy_face.webm")` `chat.scenario.assets.get("main_theme.ogg")`  
`assets.oneOf(prefix)` | Randomly selects one asset from those whose filenames start with the given prefix (e.g., “emote_”). Throws an error if no matching assets are found. | `e.character.assets.oneOf("talking_animation_")`  
`assets.oneOrNoneOf(prefix)` | Randomly selects one asset like `oneOf`. However, it does not throw an error if no matching asset is found (it returns a falsy value like `null` or `undefined`). | `e.character.assets.oneOrNoneOf("special_effect_")`  
### Path-Based Asset Access
Some triggers, like the path-based `SetAvatar` and `SetAvatarFromScenario`, directly use string paths to refer to assets within predefined folders (e.g., a character’s `Assets` folder or the scenario’s `Assets` folder).
## App Triggers
These are the triggers you can use to control various aspects of the Voxta.Talk interface and experience.
Trigger | Description | Parameters | Example Usage  
---|---|---|---  
`Emote` | Displays an emote bubble above a character or narrator, with an emoji and optional color. |  `emoji?: string`, `color?: string` |  `chat.appTrigger("Emote", "💡", "yellow");` `chat.appTrigger("Emote", "❤️");`  
`SelectView` | Changes the active chat interface mode. See `ChatView` in the Types table for mode details. | `view: ChatView` | `chat.appTrigger("SelectView", "portrait");`  
**`SetAvatar`(Asset-based)** |  **(Recommended)** Sets avatar using an **Asset object**. Provides flexibility with asset helper functions. |  `asset: Asset`, `targetCharacterId?: string`, `until?: AvatarExpiration` |  `// Uses asset object` `chat.appTrigger("SetAvatar", e.character.assets.get("mood.png"), e.character.id, "untilEndOfSpeech");` `chat.appTrigger("SetAvatar", chat.scenario.assets.get("narrator_icon.png"), chat.narrator.id);`  
**`SetAvatar`(Path-based)** | Sets avatar using a **string path** relative to a specified character’s asset folder. |  `assetPath: string`, `sourceCharacterId: string`, `applyToCharacterId?: string`, `until?: AvatarExpiration` |  `// Asset "talk.webm" from sourceCharacterId's Assets folder` `chat.appTrigger("SetAvatar", "talk.webm", e.character.id, e.character.id, "untilNextMessage");`  
`SetAvatarFromScenario` | Sets avatar using a **string path** relative to the scenario’s asset folder. |  `assetPath: string`, `applyToCharacterId?: string`, `until?: AvatarExpiration` |  `// Asset "intro.png" from Scenario's Assets folder` `chat.appTrigger("SetAvatarFromScenario", "intro.png", e.character.id);` `chat.appTrigger("SetAvatarFromScenario", "outro.webm", chat.narrator.id, "untilEndOfSpeech");`  
`PlayMusic` | Plays a music track. Starting a new music track automatically stops the previous one. | `asset: Asset` | `chat.appTrigger("PlayMusic", chat.scenario.assets.get("background_music.mp3"));`  
`PlayAmbient` | Plays an ambient sound. Multiple ambient tracks can play simultaneously if given different `track` names. |  `asset: Asset`, `track: string`, `volume?: number` | `chat.appTrigger("PlayAmbient", chat.scenario.assets.get("rain_loop.ogg"), "weather_sounds", 0.6);`  
`StopMusic` | Stops the currently playing music track. | None | `chat.appTrigger("StopMusic");`  
`StopAmbient` | Stops a specific ambient sound track identified by its `track` name. | `track: string` | `chat.appTrigger("StopAmbient", "weather_sounds");`  
`PlaySound` | Plays an immediate sound effect. Multiple sound effects can overlap. |  `asset: Asset`, `volume?: number` | `chat.appTrigger("PlaySound", e.character.assets.get("door_creak.wav"), 0.9);`  
`PlayVoice` | Plays a queued voice line, typically used for character dialogue or narration. Asset usually from TTS. | `asset: Asset` | `chat.appTrigger("PlayVoice", e.character.assets.get("greeting_line_01.mp3"));`  
`SetBackground` | Changes the background image or video for views that support custom backgrounds. Asset-based. | `asset: Asset` | `chat.appTrigger("SetBackground", chat.scenario.assets.get("main_room_bg.jpg"));`  
## Types Reference
This table defines the data types used as parameters in the app triggers.
Type | Description | Examples / Values  
---|---|---  
`Asset` | An object representing a media file (e.g., image, audio, video) retrieved using one of the asset helper functions. | The return value of `e.character.assets.get("file.png")` or `chat.scenario.assets.oneOf("prefix_")`.  
`assetPath` | A string representing the filename of an asset (e.g., “image.png”, “sound.wav”) located within a character’s or scenario’s `Assets` folder. |  `"my_avatar.png"`, `"ambient/forest.ogg"`  
`AvatarExpiration` | Defines how long an avatar change from `SetAvatar` or `SetAvatarFromScenario` persists. |  `untilNextMessage`: Reverts after the next chat message is processed.`untilEndOfSpeech`: Reverts after the current character speech (TTS/audio) completes.`undefined` (or omitted): Persists for the session or until explicitly changed by another `SetAvatar` call.  
`ChatView` | A string specifying the desired chat interface mode for the `SelectView` trigger. |  `talk`: Voice-centric view, often showing just the active speaker or minimal UI.`portrait`: Avatar-focused view, prominently displaying the character avatar.`chat`: Full view, typically including chat history and other interactive elements.  
`string` | A sequence of characters used for names, IDs, text, or prefixes. |  `"emote_happy"`, `"my_unique_track_name"`, `"blue"`, `e.character.id`, `chat.narrator.id`  
`number` | A numerical value. For `volume` parameters, this is typically a float between 0.0 (silent) and 1.0 (full volume). |  `0.5`, `1.0`, `0.75`  
`sourceCharacterId` | (For path-based `SetAvatar`) A string ID of the character whose `Assets` folder contains the `assetPath`. |  `e.character.id`, `"some_specific_char_id"`  
`targetCharacterId` | (Optional for Asset-based `SetAvatar`) String ID of the character whose avatar to change. Defaults to current character if asset is from `e.character.assets` and ID is omitted. |  `e.character.id`, `chat.narrator.id`  
`applyToCharacterId` | (For path-based `SetAvatar` and `SetAvatarFromScenario`) String ID of character whose avatar will be changed. If omitted for path-based `SetAvatar`, may default to `sourceCharacterId`. |  `e.character.id`, `chat.narrator.id`  
`emoji` | (For `Emote` trigger) A string containing a single emoji character. |  `"😊"`, `"👍"`, `"🎉"`  
`color` | (For `Emote` trigger, optional) A string representing a color name (e.g., “red”) or a hexadecimal color code (e.g., “#FF0000”). |  `"red"`, `"blue"`, `"#8A2BE2"`  
`track` | (For `PlayAmbient`, `StopAmbient`) A user-defined string name to identify and manage a specific ambient audio track. |  `"forest_ambience"`, `"engine_rumble"`, `"dungeon_drip"`  
* * *
[](https://doc.voxta.ai/docs/app-triggers/) [Next ](https://doc.voxta.ai/docs/packages/)
  * [Asset Management](https://doc.voxta.ai/docs/app-triggersv2/#asset-management)
    * [Asset Helper Functions (Recommended for Asset-Based Triggers)](https://doc.voxta.ai/docs/app-triggersv2/#asset-helper-functions-recommended-for-asset-based-triggers)
    * [Path-Based Asset Access](https://doc.voxta.ai/docs/app-triggersv2/#path-based-asset-access)
  * [App Triggers](https://doc.voxta.ai/docs/app-triggersv2/#app-triggers)
  * [Types Reference](https://doc.voxta.ai/docs/app-triggersv2/#types-reference)


[ ](https://voxta.ai/)
[ ](https://www.twitter.com/VoxtaAi) [ ](https://github.com/voxta-ai) [ ](https://www.youtube.com/@Voxta)
Made with [Docura](https://docura.github.io/)
