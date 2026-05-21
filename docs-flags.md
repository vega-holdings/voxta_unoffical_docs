---
title: "Flags"
url: "https://doc.voxta.ai/docs/flags/"
scraped_at: "2025-12-19T04:37:56.664Z"
---
[Voxta Documentation](https://doc.voxta.ai/)
[](https://doc.voxta.ai/tools/search/)
  * [](https://doc.voxta.ai/docs/)
  * [Voxta Cloud](https://doc.voxta.ai/cloud/)
  * [Virt-A-Mate](https://doc.voxta.ai/vam/)
  * [Voxy](https://doc.voxta.ai/voxy/)


**Documentation** [What is Voxta?](https://doc.voxta.ai/docs/what-is-voxta/) [Getting Started](https://doc.voxta.ai/docs/getting-started/) **Installing** [Install Server](https://doc.voxta.ai/docs/install-server/) [Update Server](https://doc.voxta.ai/docs/update-server/) **Interface** [Menu](https://doc.voxta.ai/docs/menu/) [Chat](https://doc.voxta.ai/docs/chat/) [Profile](https://doc.voxta.ai/docs/profile/) [Characters](https://doc.voxta.ai/docs/characters/) [Services](https://doc.voxta.ai/docs/services/) [Add Service](https://doc.voxta.ai/docs/add-service/) [Wizard](https://doc.voxta.ai/docs/wizard/) [Benchmarks](https://doc.voxta.ai/docs/benchmarks/) [Chat History](https://doc.voxta.ai/docs/chat-history/) [Diagnostics](https://doc.voxta.ai/docs/diagnostics/) [Test Services](https://doc.voxta.ai/docs/test-services/) [Prompt Formatting](https://doc.voxta.ai/docs/prompt-formatting/) [Prompt Templates](https://doc.voxta.ai/docs/prompt-templates/) [Playgrounds](https://doc.voxta.ai/docs/playgrounds/) [Terminal](https://doc.voxta.ai/docs/terminal/) **Creator Studio** [Scenarios](https://doc.voxta.ai/docs/scenarios/) [Memory Books](https://doc.voxta.ai/docs/memory-books/) [Actions](https://doc.voxta.ai/docs/actions/) [Events](https://doc.voxta.ai/docs/events/) [Contexts](https://doc.voxta.ai/docs/contexts/) [Templates](https://doc.voxta.ai/docs/templates/) [Flags](https://doc.voxta.ai/docs/flags/) [Scripting](https://doc.voxta.ai/docs/scripting/) [App Triggers](https://doc.voxta.ai/docs/app-triggers/) [App Triggersv2](https://doc.voxta.ai/docs/app-triggersv2/) [Packages](https://doc.voxta.ai/docs/packages/) [Messages](https://doc.voxta.ai/docs/messages/) [Asset Formats](https://doc.voxta.ai/docs/asset-formats/) **Services** [Services Overview](https://doc.voxta.ai/docs/services-overview/) [✨ Voxta Cloud](https://doc.voxta.ai/docs/voxta-cloud/) [✨ F5-TTS](https://doc.voxta.ai/docs/f5-tts/) [✨ Coqui](https://doc.voxta.ai/docs/coqui/) [✨ Azure Speech Service](https://doc.voxta.ai/docs/azure-speech-service/) [✨ Deepgram](https://doc.voxta.ai/docs/deepgram/) [✨ ExLlamaV2](https://doc.voxta.ai/docs/exllamav2/) [✨ llama.cpp](https://doc.voxta.ai/docs/llama.cpp/) [✨ WhisperLive](https://doc.voxta.ai/docs/whisperlive/) [✨ ElevenLabs](https://doc.voxta.ai/docs/elevenlabs/) [✨ KoboldAI](https://doc.voxta.ai/docs/koboldai/) [✨ NovelAI](https://doc.voxta.ai/docs/novelai/) [✨ Text To Speech HTTP API](https://doc.voxta.ai/docs/text-to-speech-http-api/) [✨ OpenAI](https://doc.voxta.ai/docs/openai/) [✨ OpenAI Compatible](https://doc.voxta.ai/docs/openai-compatible/) [✨ OpenRouter](https://doc.voxta.ai/docs/openrouter/) [✨ Text Generation Web UI](https://doc.voxta.ai/docs/text-generation-web-ui/) [🔘 Silero](https://doc.voxta.ai/docs/silero/) [🔘 Vosk](https://doc.voxta.ai/docs/vosk/) [🚧 Azure Bing Search](https://doc.voxta.ai/docs/azure-bing-search/) [🚧 Text Generation Inference](https://doc.voxta.ai/docs/text-generation-inference/) [🚧 Windows Speech](https://doc.voxta.ai/docs/windows-speech/) [✨ ChromaDB](https://doc.voxta.ai/docs/chromadb/) [✨ Florence-2 Vision](https://doc.voxta.ai/docs/florence-2-vision/) [✨ Kokoro TTS](https://doc.voxta.ai/docs/kokoro-tts/) [NAudio](https://doc.voxta.ai/docs/naudio/) [Voxta Utilities](https://doc.voxta.ai/docs/voxta-utilities/) **Articles** [Large Language Models](https://doc.voxta.ai/docs/large-language-models/) [RunPod](https://doc.voxta.ai/docs/runpod/) [XTTS Server](https://doc.voxta.ai/docs/xtts-server/) [LLM Parameters](https://doc.voxta.ai/docs/llm-parameters/) [Troubleshooting & Solutions](https://doc.voxta.ai/docs/troubleshooting-solutions/) [Glossary](https://doc.voxta.ai/docs/glossary/) **FAQ** [Voxta Cloud Credits FAQ](https://doc.voxta.ai/docs/voxta-cloud-credits-faq/) [Voxta server FAQ](https://doc.voxta.ai/docs/voxta-server-faq/) [Voxta VAM plugin FAQ](https://doc.voxta.ai/docs/voxta-vam-plugin-faq/) **About** [Patreon](https://doc.voxta.ai/docs/patreon/) [Terms](https://doc.voxta.ai/docs/terms/) [AI Safety](https://doc.voxta.ai/docs/ai-safety/)
# Flags
## Flags in Voxta
Flags are a simple yet powerful way to determine which actions and contexts are applicable at any moment in time. They are a simple list of strings, for example `is_thirsty`, `wears_hat`, etc. You can then use these flags to filter actions (e.g. filter out the action `remove_hat` when `wears_hat` is set) and contexts (only show `{{ char }} is thirsty` when `is_thirsty` is set).
Flags can be used in conditions, scripts, and can be set directly from actions too.
## Enum Flags (Exclusive Flags)
Some flags are mutually exclusive, and it quickly can become a pain to unset all variants of that flag. A typical example would be if you have a character that can be `standing`, `sitting`, `dancing` or `crouching`, you would have to unset all other flags when setting one. To make this easier, you can use enum flags.
To simplify this, Voxta supports **enum flags** using a **dot-separated syntax** :
```
pose.standing
pose.sitting
pose.dancing

```

An enum flag uses the syntax `flag.value`. If you set the flag `pose.standing`, then if you had a flag such as `pose.sitting` before, it will automatically be unset.
## Unsetting flags
It is possible to set a flag by prefixing it with `!`, which will un-set it. For example, if you have the flag `standing` and you set `!standing`, this will remove the flag `standing`.
For enums, the behavior is slightly different. If you have `pose.standing` and you set `!pose.standing`, the flag `pose.standing` will be removed, but if you had the flag `pose.sitting`, it will remain. If you use `!pose` however, all `pose.*` flags will be removed.
## Flag conditions
You can make actions and contexts dependent on a specific set of flags using basic javascript-like conditions.
The simplest examples would be:
  * `pose.standing`: Only if the flag `pose.standing` is set.
  * `!pose.standing`: Only if the flag `pose.standing` is not set.


But you can also combine flags:
  * `pose.standing && !door.closed`: Only if the flag `pose.standing` is set and the flag `door.closed` is not set.
  * `hold.empty_bottle || hold.empty_glass`: Only if one of the flags `hold.empty_bottle` or `hold.empty_glass` is set.


You can also use `()` to group conditions.
[](https://doc.voxta.ai/docs/templates/) [Next ](https://doc.voxta.ai/docs/scripting/)
  * [Flags in Voxta](https://doc.voxta.ai/docs/flags/#flags-in-voxta)
  * [Enum Flags (Exclusive Flags)](https://doc.voxta.ai/docs/flags/#enum-flags-exclusive-flags)
  * [Unsetting flags](https://doc.voxta.ai/docs/flags/#unsetting-flags)
  * [Flag conditions](https://doc.voxta.ai/docs/flags/#flag-conditions)


[ ](https://voxta.ai/)
[ ](https://www.twitter.com/VoxtaAi) [ ](https://github.com/voxta-ai) [ ](https://www.youtube.com/@Voxta)
Made with [Docura](https://docura.github.io/)
