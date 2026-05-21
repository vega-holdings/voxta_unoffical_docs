---
title: "Messages"
url: "https://doc.voxta.ai/docs/messages/"
scraped_at: "2025-12-19T04:37:56.665Z"
---
[Voxta Documentation](https://doc.voxta.ai/)
[](https://doc.voxta.ai/tools/search/)
  * [](https://doc.voxta.ai/docs/)
  * [Voxta Cloud](https://doc.voxta.ai/cloud/)
  * [Virt-A-Mate](https://doc.voxta.ai/vam/)
  * [Voxy](https://doc.voxta.ai/voxy/)


**Documentation** [What is Voxta?](https://doc.voxta.ai/docs/what-is-voxta/) [Getting Started](https://doc.voxta.ai/docs/getting-started/) **Installing** [Install Server](https://doc.voxta.ai/docs/install-server/) [Update Server](https://doc.voxta.ai/docs/update-server/) **Interface** [Menu](https://doc.voxta.ai/docs/menu/) [Chat](https://doc.voxta.ai/docs/chat/) [Profile](https://doc.voxta.ai/docs/profile/) [Characters](https://doc.voxta.ai/docs/characters/) [Services](https://doc.voxta.ai/docs/services/) [Add Service](https://doc.voxta.ai/docs/add-service/) [Wizard](https://doc.voxta.ai/docs/wizard/) [Benchmarks](https://doc.voxta.ai/docs/benchmarks/) [Chat History](https://doc.voxta.ai/docs/chat-history/) [Diagnostics](https://doc.voxta.ai/docs/diagnostics/) [Test Services](https://doc.voxta.ai/docs/test-services/) [Prompt Formatting](https://doc.voxta.ai/docs/prompt-formatting/) [Prompt Templates](https://doc.voxta.ai/docs/prompt-templates/) [Playgrounds](https://doc.voxta.ai/docs/playgrounds/) [Terminal](https://doc.voxta.ai/docs/terminal/) **Creator Studio** [Scenarios](https://doc.voxta.ai/docs/scenarios/) [Memory Books](https://doc.voxta.ai/docs/memory-books/) [Actions](https://doc.voxta.ai/docs/actions/) [Events](https://doc.voxta.ai/docs/events/) [Contexts](https://doc.voxta.ai/docs/contexts/) [Templates](https://doc.voxta.ai/docs/templates/) [Flags](https://doc.voxta.ai/docs/flags/) [Scripting](https://doc.voxta.ai/docs/scripting/) [App Triggers](https://doc.voxta.ai/docs/app-triggers/) [App Triggersv2](https://doc.voxta.ai/docs/app-triggersv2/) [Packages](https://doc.voxta.ai/docs/packages/) [Messages](https://doc.voxta.ai/docs/messages/) [Asset Formats](https://doc.voxta.ai/docs/asset-formats/) **Services** [Services Overview](https://doc.voxta.ai/docs/services-overview/) [✨ Voxta Cloud](https://doc.voxta.ai/docs/voxta-cloud/) [✨ F5-TTS](https://doc.voxta.ai/docs/f5-tts/) [✨ Coqui](https://doc.voxta.ai/docs/coqui/) [✨ Azure Speech Service](https://doc.voxta.ai/docs/azure-speech-service/) [✨ Deepgram](https://doc.voxta.ai/docs/deepgram/) [✨ ExLlamaV2](https://doc.voxta.ai/docs/exllamav2/) [✨ llama.cpp](https://doc.voxta.ai/docs/llama.cpp/) [✨ WhisperLive](https://doc.voxta.ai/docs/whisperlive/) [✨ ElevenLabs](https://doc.voxta.ai/docs/elevenlabs/) [✨ KoboldAI](https://doc.voxta.ai/docs/koboldai/) [✨ NovelAI](https://doc.voxta.ai/docs/novelai/) [✨ Text To Speech HTTP API](https://doc.voxta.ai/docs/text-to-speech-http-api/) [✨ OpenAI](https://doc.voxta.ai/docs/openai/) [✨ OpenAI Compatible](https://doc.voxta.ai/docs/openai-compatible/) [✨ OpenRouter](https://doc.voxta.ai/docs/openrouter/) [✨ Text Generation Web UI](https://doc.voxta.ai/docs/text-generation-web-ui/) [🔘 Silero](https://doc.voxta.ai/docs/silero/) [🔘 Vosk](https://doc.voxta.ai/docs/vosk/) [🚧 Azure Bing Search](https://doc.voxta.ai/docs/azure-bing-search/) [🚧 Text Generation Inference](https://doc.voxta.ai/docs/text-generation-inference/) [🚧 Windows Speech](https://doc.voxta.ai/docs/windows-speech/) [✨ ChromaDB](https://doc.voxta.ai/docs/chromadb/) [✨ Florence-2 Vision](https://doc.voxta.ai/docs/florence-2-vision/) [✨ Kokoro TTS](https://doc.voxta.ai/docs/kokoro-tts/) [NAudio](https://doc.voxta.ai/docs/naudio/) [Voxta Utilities](https://doc.voxta.ai/docs/voxta-utilities/) **Articles** [Large Language Models](https://doc.voxta.ai/docs/large-language-models/) [RunPod](https://doc.voxta.ai/docs/runpod/) [XTTS Server](https://doc.voxta.ai/docs/xtts-server/) [LLM Parameters](https://doc.voxta.ai/docs/llm-parameters/) [Troubleshooting & Solutions](https://doc.voxta.ai/docs/troubleshooting-solutions/) [Glossary](https://doc.voxta.ai/docs/glossary/) **FAQ** [Voxta Cloud Credits FAQ](https://doc.voxta.ai/docs/voxta-cloud-credits-faq/) [Voxta server FAQ](https://doc.voxta.ai/docs/voxta-server-faq/) [Voxta VAM plugin FAQ](https://doc.voxta.ai/docs/voxta-vam-plugin-faq/) **About** [Patreon](https://doc.voxta.ai/docs/patreon/) [Terms](https://doc.voxta.ai/docs/terms/) [AI Safety](https://doc.voxta.ai/docs/ai-safety/)
# Messages
## Message Types
There are a few special message types that you can use in your scenarios:
  * 👁 Char. means visible by the character;
  * 👁 User means visible by the user (you);
  * Reply means that the message triggers a follow-up reply;
  * Narrated only applies in scenarios with a narrator, whether the text will be read;

Template | Command | Description | 👁 Char. | 👁 User | Reply | Narrated  
---|---|---|---|---|---|---  
`{{ char }}` | N/A | A message from the first character in the chat | YES | YES | YES | N/A  
`{{ user }}` | `your message` | A message from the user | YES | YES | YES | N/A  
`{{ scenario_chars.your_role_name }}` | N/A | A message from a character assigned to a scenario role | YES | YES | YES | N/A  
`{{ event }}` | `/event text` | A narrated event | YES | YES | YES | YES  
`{{ story }}` | `/story prompt` | A narrated event generated by the story writer | YES | YES | YES | YES  
`{{ note }}` | `/note text` | A silent note | YES | YES | NO | NO  
`{{ secret }}` | `/secret text` | A hidden note | YES | NO | NO | NO  
`{{ instructions }}` | `/instructions text` | Information for the user | NO | YES | NO | NO  
N/A | `/noreply text` | A user message that does not trigger a reply | YES | YES | NO | N/A  
## Custom Messages
You can also create fully custom messages using `/message`, or `customMessage` using [scripting](https://doc.voxta.ai/docs/scripting/).
The syntax is `/message --arg1 "value1" --arg2 --etc -- message`.
Arguments:
Name | Value | Description  
---|---|---  
role |  `Secret`, `Note`, `Instructions`, `Event`, `User`, `Assistant` | The type of message  
character | `"character name"` | The name of the character  
scenario-role | `role_name` | The name of the scenario role  
use-story-writer | `boolean` | Use the story writer to generate the message  
max-new-tokens | `number` | The maximum number of new tokens to generate  
max-sentences | `number` | The maximum number of sentences to generate  
reply | `boolean` | The message triggers a follow-up reply  
narrate | `boolean` | The message is narrated  
`--` | `string` | The message content (until the end of the block)  
Examples:
Generate a secret message using the story writer:
```
/message --role Secret --use-story-writer --max-new-tokens 200 --max-sentences 2 -- Then something incredible happens!

```

Write a message as one of the characters:
```
/message --character "Catherine" -- Hi! It's me, Catherine!

```

Write a message as one of the scenario roles:
```
/message --scenario-role "main" -- I'm this story's main character.

```

Write a note but disable narration for it
```
/message --role Note --narrate false -- A loud noise is heard in the distance.

```

[](https://doc.voxta.ai/docs/packages/) [Next ](https://doc.voxta.ai/docs/asset-formats/)
  * [Message Types](https://doc.voxta.ai/docs/messages/#message-types)
  * [Custom Messages](https://doc.voxta.ai/docs/messages/#custom-messages)


[ ](https://voxta.ai/)
[ ](https://www.twitter.com/VoxtaAi) [ ](https://github.com/voxta-ai) [ ](https://www.youtube.com/@Voxta)
Made with [Docura](https://docura.github.io/)
