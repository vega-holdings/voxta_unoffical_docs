---
title: "Events"
url: "https://doc.voxta.ai/docs/events/"
scraped_at: "2025-12-19T04:37:56.664Z"
---
[Voxta Documentation](https://doc.voxta.ai/)
[](https://doc.voxta.ai/tools/search/)
  * [](https://doc.voxta.ai/docs/)
  * [Voxta Cloud](https://doc.voxta.ai/cloud/)
  * [Virt-A-Mate](https://doc.voxta.ai/vam/)
  * [Voxy](https://doc.voxta.ai/voxy/)


**Documentation** [What is Voxta?](https://doc.voxta.ai/docs/what-is-voxta/) [Getting Started](https://doc.voxta.ai/docs/getting-started/) **Installing** [Install Server](https://doc.voxta.ai/docs/install-server/) [Update Server](https://doc.voxta.ai/docs/update-server/) **Interface** [Menu](https://doc.voxta.ai/docs/menu/) [Chat](https://doc.voxta.ai/docs/chat/) [Profile](https://doc.voxta.ai/docs/profile/) [Characters](https://doc.voxta.ai/docs/characters/) [Services](https://doc.voxta.ai/docs/services/) [Add Service](https://doc.voxta.ai/docs/add-service/) [Wizard](https://doc.voxta.ai/docs/wizard/) [Benchmarks](https://doc.voxta.ai/docs/benchmarks/) [Chat History](https://doc.voxta.ai/docs/chat-history/) [Diagnostics](https://doc.voxta.ai/docs/diagnostics/) [Test Services](https://doc.voxta.ai/docs/test-services/) [Prompt Formatting](https://doc.voxta.ai/docs/prompt-formatting/) [Prompt Templates](https://doc.voxta.ai/docs/prompt-templates/) [Playgrounds](https://doc.voxta.ai/docs/playgrounds/) [Terminal](https://doc.voxta.ai/docs/terminal/) **Creator Studio** [Scenarios](https://doc.voxta.ai/docs/scenarios/) [Memory Books](https://doc.voxta.ai/docs/memory-books/) [Actions](https://doc.voxta.ai/docs/actions/) [Events](https://doc.voxta.ai/docs/events/) [Contexts](https://doc.voxta.ai/docs/contexts/) [Templates](https://doc.voxta.ai/docs/templates/) [Flags](https://doc.voxta.ai/docs/flags/) [Scripting](https://doc.voxta.ai/docs/scripting/) [App Triggers](https://doc.voxta.ai/docs/app-triggers/) [App Triggersv2](https://doc.voxta.ai/docs/app-triggersv2/) [Packages](https://doc.voxta.ai/docs/packages/) [Messages](https://doc.voxta.ai/docs/messages/) [Asset Formats](https://doc.voxta.ai/docs/asset-formats/) **Services** [Services Overview](https://doc.voxta.ai/docs/services-overview/) [✨ Voxta Cloud](https://doc.voxta.ai/docs/voxta-cloud/) [✨ F5-TTS](https://doc.voxta.ai/docs/f5-tts/) [✨ Coqui](https://doc.voxta.ai/docs/coqui/) [✨ Azure Speech Service](https://doc.voxta.ai/docs/azure-speech-service/) [✨ Deepgram](https://doc.voxta.ai/docs/deepgram/) [✨ ExLlamaV2](https://doc.voxta.ai/docs/exllamav2/) [✨ llama.cpp](https://doc.voxta.ai/docs/llama.cpp/) [✨ WhisperLive](https://doc.voxta.ai/docs/whisperlive/) [✨ ElevenLabs](https://doc.voxta.ai/docs/elevenlabs/) [✨ KoboldAI](https://doc.voxta.ai/docs/koboldai/) [✨ NovelAI](https://doc.voxta.ai/docs/novelai/) [✨ Text To Speech HTTP API](https://doc.voxta.ai/docs/text-to-speech-http-api/) [✨ OpenAI](https://doc.voxta.ai/docs/openai/) [✨ OpenAI Compatible](https://doc.voxta.ai/docs/openai-compatible/) [✨ OpenRouter](https://doc.voxta.ai/docs/openrouter/) [✨ Text Generation Web UI](https://doc.voxta.ai/docs/text-generation-web-ui/) [🔘 Silero](https://doc.voxta.ai/docs/silero/) [🔘 Vosk](https://doc.voxta.ai/docs/vosk/) [🚧 Azure Bing Search](https://doc.voxta.ai/docs/azure-bing-search/) [🚧 Text Generation Inference](https://doc.voxta.ai/docs/text-generation-inference/) [🚧 Windows Speech](https://doc.voxta.ai/docs/windows-speech/) [✨ ChromaDB](https://doc.voxta.ai/docs/chromadb/) [✨ Florence-2 Vision](https://doc.voxta.ai/docs/florence-2-vision/) [✨ Kokoro TTS](https://doc.voxta.ai/docs/kokoro-tts/) [NAudio](https://doc.voxta.ai/docs/naudio/) [Voxta Utilities](https://doc.voxta.ai/docs/voxta-utilities/) **Articles** [Large Language Models](https://doc.voxta.ai/docs/large-language-models/) [RunPod](https://doc.voxta.ai/docs/runpod/) [XTTS Server](https://doc.voxta.ai/docs/xtts-server/) [LLM Parameters](https://doc.voxta.ai/docs/llm-parameters/) [Troubleshooting & Solutions](https://doc.voxta.ai/docs/troubleshooting-solutions/) [Glossary](https://doc.voxta.ai/docs/glossary/) **FAQ** [Voxta Cloud Credits FAQ](https://doc.voxta.ai/docs/voxta-cloud-credits-faq/) [Voxta server FAQ](https://doc.voxta.ai/docs/voxta-server-faq/) [Voxta VAM plugin FAQ](https://doc.voxta.ai/docs/voxta-vam-plugin-faq/) **About** [Patreon](https://doc.voxta.ai/docs/patreon/) [Terms](https://doc.voxta.ai/docs/terms/) [AI Safety](https://doc.voxta.ai/docs/ai-safety/)
# Events
Events are used to drive roleplay or storytelling. They can be triggered at specific times or following specific messages.
Events are the same as actions, except that they are triggered automatically rather than relying on action inference.
See [Actions](https://doc.voxta.ai/docs/actions/) for more information on filters and triggers not defined here.
## Conditions
### Target, Match, Once and Flags
See [Actions](https://doc.voxta.ai/docs/actions/).
### Probability
The probability of the event being triggered. This will be on top of other conditions, therefore if you define that an event should have 50% probability and should happen between 5 and 10 messages after a flag, at the 5th message the probability will be 10% (half of 20%), and at the 10th message the probability will be 50% until the event is triggered.
### Messages Count
The number of messages that should be sent before the event is triggered. This is useful to trigger events after a certain amount of time has passed.
By default, the messages count will be based on the start of the chat (you can see message numbers in the Voxta UI, in the inspector by clicking Show Hidden) but you can also specify a “since flag”, which will base the count on the last time the flag was set. This behavior can be used to make looping events! For example, you can make the message “5 message since flag my_flag” and make that message set “my_flag”, effectively making the event trigger every 5 messages.
### Chat Time
Works the same was as messages count, but based on the real time since the chat started or the last time the flag was set.
Keep in mind that chat time is always calculated from the last message’s time since chat start; that means that if you exit the chat one hour after a character’s message and come back, the chat time since the last message will be reset.
## Interface
You can reorder contexts, they will be used in the order they are displayed. You can also edit or delete them. Toggle them off to prevent them from being used, e.g. for testing.
## Useful event patterns
  * You can specify a Set Flag “event1” after some event, and then for another event, you can specify “since flag event1” to trigger the event after the first one. This way, you can create long sequences and easily adjust the length between each part.
  * You can also do branching by using a script to set one flag or another, and set a custom flag. For example, `go_left` and `go_right` can both set the flag `direction_chosen`, but each specify a different flag. You can create trees like this.
  * An event can re-set a flag, if you need to create loops for example.


[](https://doc.voxta.ai/docs/actions/) [Next ](https://doc.voxta.ai/docs/contexts/)
  * [Conditions](https://doc.voxta.ai/docs/events/#conditions)
    * [Target, Match, Once and Flags](https://doc.voxta.ai/docs/events/#target-match-once-and-flags)
    * [Probability](https://doc.voxta.ai/docs/events/#probability)
    * [Messages Count](https://doc.voxta.ai/docs/events/#messages-count)
    * [Chat Time](https://doc.voxta.ai/docs/events/#chat-time)
  * [Interface](https://doc.voxta.ai/docs/events/#interface)
  * [Useful event patterns](https://doc.voxta.ai/docs/events/#useful-event-patterns)


[ ](https://voxta.ai/)
[ ](https://www.twitter.com/VoxtaAi) [ ](https://github.com/voxta-ai) [ ](https://www.youtube.com/@Voxta)
Made with [Docura](https://docura.github.io/)
