---
title: "Azure Speech Service"
url: "https://doc.voxta.ai/docs/azure-speech-service/"
scraped_at: "2025-12-19T04:37:56.665Z"
---
[Voxta Documentation](https://doc.voxta.ai/)
[](https://doc.voxta.ai/tools/search/)
  * [](https://doc.voxta.ai/docs/)
  * [Voxta Cloud](https://doc.voxta.ai/cloud/)
  * [Virt-A-Mate](https://doc.voxta.ai/vam/)
  * [Voxy](https://doc.voxta.ai/voxy/)


**Documentation** [What is Voxta?](https://doc.voxta.ai/docs/what-is-voxta/) [Getting Started](https://doc.voxta.ai/docs/getting-started/) **Installing** [Install Server](https://doc.voxta.ai/docs/install-server/) [Update Server](https://doc.voxta.ai/docs/update-server/) **Interface** [Menu](https://doc.voxta.ai/docs/menu/) [Chat](https://doc.voxta.ai/docs/chat/) [Profile](https://doc.voxta.ai/docs/profile/) [Characters](https://doc.voxta.ai/docs/characters/) [Services](https://doc.voxta.ai/docs/services/) [Add Service](https://doc.voxta.ai/docs/add-service/) [Wizard](https://doc.voxta.ai/docs/wizard/) [Benchmarks](https://doc.voxta.ai/docs/benchmarks/) [Chat History](https://doc.voxta.ai/docs/chat-history/) [Diagnostics](https://doc.voxta.ai/docs/diagnostics/) [Test Services](https://doc.voxta.ai/docs/test-services/) [Prompt Formatting](https://doc.voxta.ai/docs/prompt-formatting/) [Prompt Templates](https://doc.voxta.ai/docs/prompt-templates/) [Playgrounds](https://doc.voxta.ai/docs/playgrounds/) [Terminal](https://doc.voxta.ai/docs/terminal/) **Creator Studio** [Scenarios](https://doc.voxta.ai/docs/scenarios/) [Memory Books](https://doc.voxta.ai/docs/memory-books/) [Actions](https://doc.voxta.ai/docs/actions/) [Events](https://doc.voxta.ai/docs/events/) [Contexts](https://doc.voxta.ai/docs/contexts/) [Templates](https://doc.voxta.ai/docs/templates/) [Flags](https://doc.voxta.ai/docs/flags/) [Scripting](https://doc.voxta.ai/docs/scripting/) [App Triggers](https://doc.voxta.ai/docs/app-triggers/) [App Triggersv2](https://doc.voxta.ai/docs/app-triggersv2/) [Packages](https://doc.voxta.ai/docs/packages/) [Messages](https://doc.voxta.ai/docs/messages/) [Asset Formats](https://doc.voxta.ai/docs/asset-formats/) **Services** [Services Overview](https://doc.voxta.ai/docs/services-overview/) [✨ Voxta Cloud](https://doc.voxta.ai/docs/voxta-cloud/) [✨ F5-TTS](https://doc.voxta.ai/docs/f5-tts/) [✨ Coqui](https://doc.voxta.ai/docs/coqui/) [✨ Azure Speech Service](https://doc.voxta.ai/docs/azure-speech-service/) [✨ Deepgram](https://doc.voxta.ai/docs/deepgram/) [✨ ExLlamaV2](https://doc.voxta.ai/docs/exllamav2/) [✨ llama.cpp](https://doc.voxta.ai/docs/llama.cpp/) [✨ WhisperLive](https://doc.voxta.ai/docs/whisperlive/) [✨ ElevenLabs](https://doc.voxta.ai/docs/elevenlabs/) [✨ KoboldAI](https://doc.voxta.ai/docs/koboldai/) [✨ NovelAI](https://doc.voxta.ai/docs/novelai/) [✨ Text To Speech HTTP API](https://doc.voxta.ai/docs/text-to-speech-http-api/) [✨ OpenAI](https://doc.voxta.ai/docs/openai/) [✨ OpenAI Compatible](https://doc.voxta.ai/docs/openai-compatible/) [✨ OpenRouter](https://doc.voxta.ai/docs/openrouter/) [✨ Text Generation Web UI](https://doc.voxta.ai/docs/text-generation-web-ui/) [🔘 Silero](https://doc.voxta.ai/docs/silero/) [🔘 Vosk](https://doc.voxta.ai/docs/vosk/) [🚧 Azure Bing Search](https://doc.voxta.ai/docs/azure-bing-search/) [🚧 Text Generation Inference](https://doc.voxta.ai/docs/text-generation-inference/) [🚧 Windows Speech](https://doc.voxta.ai/docs/windows-speech/) [✨ ChromaDB](https://doc.voxta.ai/docs/chromadb/) [✨ Florence-2 Vision](https://doc.voxta.ai/docs/florence-2-vision/) [✨ Kokoro TTS](https://doc.voxta.ai/docs/kokoro-tts/) [NAudio](https://doc.voxta.ai/docs/naudio/) [Voxta Utilities](https://doc.voxta.ai/docs/voxta-utilities/) **Articles** [Large Language Models](https://doc.voxta.ai/docs/large-language-models/) [RunPod](https://doc.voxta.ai/docs/runpod/) [XTTS Server](https://doc.voxta.ai/docs/xtts-server/) [LLM Parameters](https://doc.voxta.ai/docs/llm-parameters/) [Troubleshooting & Solutions](https://doc.voxta.ai/docs/troubleshooting-solutions/) [Glossary](https://doc.voxta.ai/docs/glossary/) **FAQ** [Voxta Cloud Credits FAQ](https://doc.voxta.ai/docs/voxta-cloud-credits-faq/) [Voxta server FAQ](https://doc.voxta.ai/docs/voxta-server-faq/) [Voxta VAM plugin FAQ](https://doc.voxta.ai/docs/voxta-vam-plugin-faq/) **About** [Patreon](https://doc.voxta.ai/docs/patreon/) [Terms](https://doc.voxta.ai/docs/terms/) [AI Safety](https://doc.voxta.ai/docs/ai-safety/)
# Azure Speech Service
Azure Speech Service is a cloud-based API that provides advanced speech recognition and text-to-speech capabilities.
<https://azure.microsoft.com/en-us/services/cognitive-services/speech-services/>
## Acquiring Azure (TTS, SST) API
This guide provides step-by-step instructions for setting up Azure’s advanced Speech-to-Text (STT), Text-to-Speech (TTS) services and acquiring Azure’s API key.
  1. Sign in to your Azure Portal. If you don’t have an Azure account, you’ll need to create one. You can sign up for a free Azure account.
  2. You have two options to create a Speech Service:
Option 1: Click on “Create a resource”. Then navigate to “AI + Machine Learning” and select “Speech”.
Option 2: You may also find “Speech Services” directly next to “Create a resource”. Clicking on this will also lead you to the setup for creating a new Speech Service.
  3. Fill in the required details:
Subscription: Your Azure subscription
Resource Group: Create a new one or select an existing one
Region: Choose a region that’s closest to your users
Name: Name your speech service
Pricing tier:
Free F0: Limited capabilities and a chance of hitting quota limitations, especially when using it in the Voxta app.
Standard S0: A paid tier with more robust capabilities.
  4. Click “Review + create” and after validation, click “Create”.
  5. After the resource is created, go to your Speech service. In the “Resource Management” section, you’ll see “Keys and Endpoint”. Click on it.
  6. Here, you’ll find your API keys and endpoint. Keep these safe and handy as you’ll need them to make API requests.


Important Note about Pricing Tiers: If you’re using the Speech Service in an application like Voxta and you encounter a “Quota Exceeded” error, it’s likely because you’re on the Free F0 pricing tier. To resolve this issue and enjoy better service, you may want to switch to the Standard S0 pricing tier.
## Integrate the API Key into Voxta
  1. Open the Voxta application on your device.
  2. Navigate to the Services menu.
  3. Click on the “+ Add Services” option.
  4. Scroll to find Azure Speech Services in the list of available services, then click the “+ Add” button next to it.
  5. A designated input field will appear for the Azure Speech Services API key. Paste your API key into this field.
  6. In the “Region” field, enter the Azure service region you are using (e.g., “eastus”).
  7. Click “Save” to complete the integration.


![AzureAPI](https://doc.voxta.ai/images/uploads/snag-0263.png)
Refer to the attached video tutorial for a complete walkthrough:
[](https://doc.voxta.ai/docs/coqui/) [Next ](https://doc.voxta.ai/docs/deepgram/)
  * [Acquiring Azure (TTS, SST) API](https://doc.voxta.ai/docs/azure-speech-service/#acquiring-azure-tts-sst-api)
  * [Integrate the API Key into Voxta](https://doc.voxta.ai/docs/azure-speech-service/#integrate-the-api-key-into-voxta)


[ ](https://voxta.ai/)
[ ](https://www.twitter.com/VoxtaAi) [ ](https://github.com/voxta-ai) [ ](https://www.youtube.com/@Voxta)
Made with [Docura](https://docura.github.io/)
