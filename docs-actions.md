---
title: "Actions"
url: "https://doc.voxta.ai/docs/actions/"
scraped_at: "2025-12-19T04:37:56.662Z"
---
[Voxta Documentation](https://doc.voxta.ai/)
[](https://doc.voxta.ai/tools/search/)
  * [](https://doc.voxta.ai/docs/)
  * [Voxta Cloud](https://doc.voxta.ai/cloud/)
  * [Virt-A-Mate](https://doc.voxta.ai/vam/)
  * [Voxy](https://doc.voxta.ai/voxy/)


**Documentation** [What is Voxta?](https://doc.voxta.ai/docs/what-is-voxta/) [Getting Started](https://doc.voxta.ai/docs/getting-started/) **Installing** [Install Server](https://doc.voxta.ai/docs/install-server/) [Update Server](https://doc.voxta.ai/docs/update-server/) **Interface** [Menu](https://doc.voxta.ai/docs/menu/) [Chat](https://doc.voxta.ai/docs/chat/) [Profile](https://doc.voxta.ai/docs/profile/) [Characters](https://doc.voxta.ai/docs/characters/) [Services](https://doc.voxta.ai/docs/services/) [Add Service](https://doc.voxta.ai/docs/add-service/) [Wizard](https://doc.voxta.ai/docs/wizard/) [Benchmarks](https://doc.voxta.ai/docs/benchmarks/) [Chat History](https://doc.voxta.ai/docs/chat-history/) [Diagnostics](https://doc.voxta.ai/docs/diagnostics/) [Test Services](https://doc.voxta.ai/docs/test-services/) [Prompt Formatting](https://doc.voxta.ai/docs/prompt-formatting/) [Prompt Templates](https://doc.voxta.ai/docs/prompt-templates/) [Playgrounds](https://doc.voxta.ai/docs/playgrounds/) [Terminal](https://doc.voxta.ai/docs/terminal/) **Creator Studio** [Scenarios](https://doc.voxta.ai/docs/scenarios/) [Memory Books](https://doc.voxta.ai/docs/memory-books/) [Actions](https://doc.voxta.ai/docs/actions/) [Events](https://doc.voxta.ai/docs/events/) [Contexts](https://doc.voxta.ai/docs/contexts/) [Templates](https://doc.voxta.ai/docs/templates/) [Flags](https://doc.voxta.ai/docs/flags/) [Scripting](https://doc.voxta.ai/docs/scripting/) [App Triggers](https://doc.voxta.ai/docs/app-triggers/) [App Triggersv2](https://doc.voxta.ai/docs/app-triggersv2/) [Packages](https://doc.voxta.ai/docs/packages/) [Messages](https://doc.voxta.ai/docs/messages/) [Asset Formats](https://doc.voxta.ai/docs/asset-formats/) **Services** [Services Overview](https://doc.voxta.ai/docs/services-overview/) [✨ Voxta Cloud](https://doc.voxta.ai/docs/voxta-cloud/) [✨ F5-TTS](https://doc.voxta.ai/docs/f5-tts/) [✨ Coqui](https://doc.voxta.ai/docs/coqui/) [✨ Azure Speech Service](https://doc.voxta.ai/docs/azure-speech-service/) [✨ Deepgram](https://doc.voxta.ai/docs/deepgram/) [✨ ExLlamaV2](https://doc.voxta.ai/docs/exllamav2/) [✨ llama.cpp](https://doc.voxta.ai/docs/llama.cpp/) [✨ WhisperLive](https://doc.voxta.ai/docs/whisperlive/) [✨ ElevenLabs](https://doc.voxta.ai/docs/elevenlabs/) [✨ KoboldAI](https://doc.voxta.ai/docs/koboldai/) [✨ NovelAI](https://doc.voxta.ai/docs/novelai/) [✨ Text To Speech HTTP API](https://doc.voxta.ai/docs/text-to-speech-http-api/) [✨ OpenAI](https://doc.voxta.ai/docs/openai/) [✨ OpenAI Compatible](https://doc.voxta.ai/docs/openai-compatible/) [✨ OpenRouter](https://doc.voxta.ai/docs/openrouter/) [✨ Text Generation Web UI](https://doc.voxta.ai/docs/text-generation-web-ui/) [🔘 Silero](https://doc.voxta.ai/docs/silero/) [🔘 Vosk](https://doc.voxta.ai/docs/vosk/) [🚧 Azure Bing Search](https://doc.voxta.ai/docs/azure-bing-search/) [🚧 Text Generation Inference](https://doc.voxta.ai/docs/text-generation-inference/) [🚧 Windows Speech](https://doc.voxta.ai/docs/windows-speech/) [✨ ChromaDB](https://doc.voxta.ai/docs/chromadb/) [✨ Florence-2 Vision](https://doc.voxta.ai/docs/florence-2-vision/) [✨ Kokoro TTS](https://doc.voxta.ai/docs/kokoro-tts/) [NAudio](https://doc.voxta.ai/docs/naudio/) [Voxta Utilities](https://doc.voxta.ai/docs/voxta-utilities/) **Articles** [Large Language Models](https://doc.voxta.ai/docs/large-language-models/) [RunPod](https://doc.voxta.ai/docs/runpod/) [XTTS Server](https://doc.voxta.ai/docs/xtts-server/) [LLM Parameters](https://doc.voxta.ai/docs/llm-parameters/) [Troubleshooting & Solutions](https://doc.voxta.ai/docs/troubleshooting-solutions/) [Glossary](https://doc.voxta.ai/docs/glossary/) **FAQ** [Voxta Cloud Credits FAQ](https://doc.voxta.ai/docs/voxta-cloud-credits-faq/) [Voxta server FAQ](https://doc.voxta.ai/docs/voxta-server-faq/) [Voxta VAM plugin FAQ](https://doc.voxta.ai/docs/voxta-vam-plugin-faq/) **About** [Patreon](https://doc.voxta.ai/docs/patreon/) [Terms](https://doc.voxta.ai/docs/terms/) [AI Safety](https://doc.voxta.ai/docs/ai-safety/)
# Actions
Actions use action inference to determine what action to take before or after a message. This is used to make visual reactions, such as smiling or moving around.
## Action name
Action names are very important, this is what the LLM will need to generate. For example, avoid action names like `jrs_045` and prefer action names such as `smile`, `sit_down` etc. Only use lower case letters, numbers and underscores.
## Layers
Layers are used to group actions together. Only one action by layer/timing can be selected per turn, and all layers will be executed in alphabetical order.
A good example of layers could be having an emotions layer (smile, frown, etc.) and a movement layer (sit_down, stand_up, etc.). It is recommended to avoid layers when possible, since they require a full inference pass for each layer.
## Timing
When should be action be executed.
  * After User: After the user sends a message, before any character reply.
  * Before Char.: Before a character replies to the user, another character or an event.
  * After Char.: After a character replies. This can happen before or while the character is speaking.
  * Manually: The only way to trigger this event is by sending a `/trigger event_name` message.


## Prompt
There are two prompts for actions. The main `prompt` is what is shown to action inference and should explain when to choose that action. For example, `sit_down` could have `When {{ char }} wants to sit down or when {{ user }} instructs it.` The `short desc.` prompt is optional, and will help make the character aware that they can do that action. For example, `sit_down`’s short description could be `sit down`. Use this fields for larger actions such as moving around.
## Conditions
### Target
Filters which role can do the action.
### Match
Allows specifying a regular expression to only react to specific words or patterns. This can be useful for actions that should only be triggered in response to a request, or to avoid running an action inference layer unless necessary, saving resources.
### Once
When enabled, this filter will automatically set an invisible `_event_name` flag, and a `!_event_name` condition so the action can only be executed once.
### Flags
See [Flags](https://doc.voxta.ai/docs/flags/) for more information on flag conditions.
## Effects
### Set Flags
Set flags when the action is executed. See [Flags](https://doc.voxta.ai/docs/flags/) for more information.
## Note, Instructions, Secret, Event, Story
See [Messages](https://doc.voxta.ai/docs/messages/) for more information on the different type of messages.
For story, you can also specify the maximum tokens and maximum sentences to generate. This allows you to make shorter or longer stories as needed.
## Script
See [Scripting](https://doc.voxta.ai/docs/scripting/) for more information.
## Interface
You can reorder contexts, they will be used in the order they are displayed. You can also edit or delete them. Toggle them off to prevent them from being used, e.g. for testing.
[](https://doc.voxta.ai/docs/memory-books/) [Next ](https://doc.voxta.ai/docs/events/)
  * [Action name](https://doc.voxta.ai/docs/actions/#action-name)
  * [Layers](https://doc.voxta.ai/docs/actions/#layers)
  * [Timing](https://doc.voxta.ai/docs/actions/#timing)
  * [Prompt](https://doc.voxta.ai/docs/actions/#prompt)
  * [Conditions](https://doc.voxta.ai/docs/actions/#conditions)
    * [Target](https://doc.voxta.ai/docs/actions/#target)
    * [Match](https://doc.voxta.ai/docs/actions/#match)
    * [Once](https://doc.voxta.ai/docs/actions/#once)
    * [Flags](https://doc.voxta.ai/docs/actions/#flags)
  * [Effects](https://doc.voxta.ai/docs/actions/#effects)
    * [Set Flags](https://doc.voxta.ai/docs/actions/#set-flags)
  * [Note, Instructions, Secret, Event, Story](https://doc.voxta.ai/docs/actions/#note-instructions-secret-event-story)
  * [Script](https://doc.voxta.ai/docs/actions/#script)
  * [Interface](https://doc.voxta.ai/docs/actions/#interface)


[ ](https://voxta.ai/)
[ ](https://www.twitter.com/VoxtaAi) [ ](https://github.com/voxta-ai) [ ](https://www.youtube.com/@Voxta)
Made with [Docura](https://docura.github.io/)
