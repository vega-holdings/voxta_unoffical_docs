---
title: "App Triggers"
url: "https://doc.voxta.ai/docs/app-triggers/"
scraped_at: "2025-12-19T04:37:56.664Z"
---
[Voxta Documentation](https://doc.voxta.ai/)
[](https://doc.voxta.ai/tools/search/)
  * [](https://doc.voxta.ai/docs/)
  * [Voxta Cloud](https://doc.voxta.ai/cloud/)
  * [Virt-A-Mate](https://doc.voxta.ai/vam/)
  * [Voxy](https://doc.voxta.ai/voxy/)


**Documentation** [What is Voxta?](https://doc.voxta.ai/docs/what-is-voxta/) [Getting Started](https://doc.voxta.ai/docs/getting-started/) **Installing** [Install Server](https://doc.voxta.ai/docs/install-server/) [Update Server](https://doc.voxta.ai/docs/update-server/) **Interface** [Menu](https://doc.voxta.ai/docs/menu/) [Chat](https://doc.voxta.ai/docs/chat/) [Profile](https://doc.voxta.ai/docs/profile/) [Characters](https://doc.voxta.ai/docs/characters/) [Services](https://doc.voxta.ai/docs/services/) [Add Service](https://doc.voxta.ai/docs/add-service/) [Wizard](https://doc.voxta.ai/docs/wizard/) [Benchmarks](https://doc.voxta.ai/docs/benchmarks/) [Chat History](https://doc.voxta.ai/docs/chat-history/) [Diagnostics](https://doc.voxta.ai/docs/diagnostics/) [Test Services](https://doc.voxta.ai/docs/test-services/) [Prompt Formatting](https://doc.voxta.ai/docs/prompt-formatting/) [Prompt Templates](https://doc.voxta.ai/docs/prompt-templates/) [Playgrounds](https://doc.voxta.ai/docs/playgrounds/) [Terminal](https://doc.voxta.ai/docs/terminal/) **Creator Studio** [Scenarios](https://doc.voxta.ai/docs/scenarios/) [Memory Books](https://doc.voxta.ai/docs/memory-books/) [Actions](https://doc.voxta.ai/docs/actions/) [Events](https://doc.voxta.ai/docs/events/) [Contexts](https://doc.voxta.ai/docs/contexts/) [Templates](https://doc.voxta.ai/docs/templates/) [Flags](https://doc.voxta.ai/docs/flags/) [Scripting](https://doc.voxta.ai/docs/scripting/) [App Triggers](https://doc.voxta.ai/docs/app-triggers/) [App Triggersv2](https://doc.voxta.ai/docs/app-triggersv2/) [Packages](https://doc.voxta.ai/docs/packages/) [Messages](https://doc.voxta.ai/docs/messages/) [Asset Formats](https://doc.voxta.ai/docs/asset-formats/) **Services** [Services Overview](https://doc.voxta.ai/docs/services-overview/) [✨ Voxta Cloud](https://doc.voxta.ai/docs/voxta-cloud/) [✨ F5-TTS](https://doc.voxta.ai/docs/f5-tts/) [✨ Coqui](https://doc.voxta.ai/docs/coqui/) [✨ Azure Speech Service](https://doc.voxta.ai/docs/azure-speech-service/) [✨ Deepgram](https://doc.voxta.ai/docs/deepgram/) [✨ ExLlamaV2](https://doc.voxta.ai/docs/exllamav2/) [✨ llama.cpp](https://doc.voxta.ai/docs/llama.cpp/) [✨ WhisperLive](https://doc.voxta.ai/docs/whisperlive/) [✨ ElevenLabs](https://doc.voxta.ai/docs/elevenlabs/) [✨ KoboldAI](https://doc.voxta.ai/docs/koboldai/) [✨ NovelAI](https://doc.voxta.ai/docs/novelai/) [✨ Text To Speech HTTP API](https://doc.voxta.ai/docs/text-to-speech-http-api/) [✨ OpenAI](https://doc.voxta.ai/docs/openai/) [✨ OpenAI Compatible](https://doc.voxta.ai/docs/openai-compatible/) [✨ OpenRouter](https://doc.voxta.ai/docs/openrouter/) [✨ Text Generation Web UI](https://doc.voxta.ai/docs/text-generation-web-ui/) [🔘 Silero](https://doc.voxta.ai/docs/silero/) [🔘 Vosk](https://doc.voxta.ai/docs/vosk/) [🚧 Azure Bing Search](https://doc.voxta.ai/docs/azure-bing-search/) [🚧 Text Generation Inference](https://doc.voxta.ai/docs/text-generation-inference/) [🚧 Windows Speech](https://doc.voxta.ai/docs/windows-speech/) [✨ ChromaDB](https://doc.voxta.ai/docs/chromadb/) [✨ Florence-2 Vision](https://doc.voxta.ai/docs/florence-2-vision/) [✨ Kokoro TTS](https://doc.voxta.ai/docs/kokoro-tts/) [NAudio](https://doc.voxta.ai/docs/naudio/) [Voxta Utilities](https://doc.voxta.ai/docs/voxta-utilities/) **Articles** [Large Language Models](https://doc.voxta.ai/docs/large-language-models/) [RunPod](https://doc.voxta.ai/docs/runpod/) [XTTS Server](https://doc.voxta.ai/docs/xtts-server/) [LLM Parameters](https://doc.voxta.ai/docs/llm-parameters/) [Troubleshooting & Solutions](https://doc.voxta.ai/docs/troubleshooting-solutions/) [Glossary](https://doc.voxta.ai/docs/glossary/) **FAQ** [Voxta Cloud Credits FAQ](https://doc.voxta.ai/docs/voxta-cloud-credits-faq/) [Voxta server FAQ](https://doc.voxta.ai/docs/voxta-server-faq/) [Voxta VAM plugin FAQ](https://doc.voxta.ai/docs/voxta-vam-plugin-faq/) **About** [Patreon](https://doc.voxta.ai/docs/patreon/) [Terms](https://doc.voxta.ai/docs/terms/) [AI Safety](https://doc.voxta.ai/docs/ai-safety/)
# App Triggers
Using [scripting](https://doc.voxta.ai/docs/scripting), you can call triggers so that the chat and [scenario](https://doc.voxta.ai/docs/scenarios) can respond to events in the app.
### Voxta UI (Voxta.Talk)
Available triggers:
Trigger | Description  
---|---  
`Emote(emoji?: string, color?: string)` | Send a message to the chat.  
`SelectView(view: ChatView)` | Changes the chat mode to `talk`, `portrait` or `chat`.  
`SetAvatar(assetPath: string, characterId?: string, applyToCharacterId?: string, until?: AvatarExpiration)` | Changes the avatar image to another using an asset from the character.  
`SetAvatarFromScenario(assetPath: string, applyToCharacterId?: string, until?: AvatarExpiration)` | Changes the avatar image to another using an asset from the scenario. You can also use `'narrator'` as the `characterId` to set the narrator image.  
`PlayCharacterAudio(assetPath: string, characterId?: string, method: AudioMethod)` | Plays a sound from the character assets.  
`PlayScenarioAudio(assetPath: string, method: AudioMethod)` | Plays a sound from the scenario assets.  
Types:
Type | Description  
---|---  
`ChatView` |  `talk` (voice only), `portrait` (avatar view) or `chat` (full view).  
`AudioMethod` |  `voice` (queued), `music` (single track), `sfx` (plays immediately).  
`AvatarExpiration` |  `untilNextMessage` (waits for the next message to start), `untilEndOfSpeech` (stays until the current speech is complete), undefined (stays until end of session).  
Here are some examples of calling a trigger from an action:
#### Sends a tree emoji to the chat
```
import { chat } from "@voxta";
export function trigger(e) {
    // Voxta UI Emote trigger with the emoji and color arguments
chat.appTrigger("Emote", "🌳", "#00ff00");
}

```

![tree](https://doc.voxta.ai/images/uploads/snag-0107.gif)
#### Changes the chat mode to `talk`, `portrait` or `chat`
```
import { chat } from "@voxta";
export function trigger(e) { 
  chat.appTrigger("SelectView", "chat");
}

```

![chatview](https://doc.voxta.ai/images/uploads/chatview.gif)
#### Changes the avatar image to another using an asset from the character
```
import { chat } from "@voxta";
export function trigger(e) { 
  chat.appTrigger("SetAvatar", "Avatars/Laugh.png");
}

```

![avatarchange](https://doc.voxta.ai/images/uploads/avatarchange.gif)
#### Plays a sound from the character assets (voice)
> The voice will be queued with the speech, which is helpful for sounds like laughs, sighs, etc. It was created using character audio. Note that the character ID can be left undefined to automatically select the current character (this works for “before/after character” but not for “after user,” as the speaker is not yet determined).
```
import { chat } from "@voxta";
// You need to place your audio files in the character assets folder.
export function trigger(e) { 
  chat.appTrigger('PlayCharacterAudio', 'Sounds/laugh.wav', undefined, 'voice');
}

```

#### Plays a sound from the scenario assets (voice)
```
import { chat } from "@voxta";
// You need to place your audio files in the scenario assets folder.
export function trigger(e) { 
  chat.appTrigger('PlayScenarioAudio', 'Sounds/laugh.wav', undefined, 'voice');
}

```

#### Play Queued Audio Playback After Speech
> Plays the audio right after the character finishes talking
```
import { chat } from "@voxta";
// You need to place your audio files in the scenario assets folder.
export function trigger(e) { 
  chat.queueAppTrigger('PlayScenarioAudio', 'Sounds/ping.mp3', 'sfx');
}

```

#### Plays a sound from the scenario assets (sound effect)
> Playing sfx will just play it right away
```
import { chat } from "@voxta";
export function trigger(e) { 
  chat.appTrigger('PlayScenarioAudio', 'Sounds/ping.mp3', 'sfx');
}

```

#### Plays a sound from the scenario assets (music)
> Music plays one track at a time and will stop when exiting the chat
```
import { chat } from "@voxta";
export function trigger(e) { 
  chat.appTrigger('PlayScenarioAudio', 'Sounds/music.mp3', 'music');
}

```

### Virt-A-Mate Triggers (Voxta.VirtAMate)
See [Virt-A-Mate](https://doc.voxta.ai/vam/app-triggers) for more information.
[](https://doc.voxta.ai/docs/scripting/) [Next ](https://doc.voxta.ai/docs/app-triggersv2/)
  *     * [Voxta UI (Voxta.Talk)](https://doc.voxta.ai/docs/app-triggers/#voxta-ui-voxtatalk)
    * [Virt-A-Mate Triggers (Voxta.VirtAMate)](https://doc.voxta.ai/docs/app-triggers/#virt-a-mate-triggers-voxtavirtamate)


[ ](https://voxta.ai/)
[ ](https://www.twitter.com/VoxtaAi) [ ](https://github.com/voxta-ai) [ ](https://www.youtube.com/@Voxta)
Made with [Docura](https://docura.github.io/)
