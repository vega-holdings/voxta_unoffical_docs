---
title: "Troubleshooting &amp; Solutions"
url: "https://doc.voxta.ai/docs/troubleshooting-solutions/"
scraped_at: "2025-12-19T04:37:56.668Z"
---
[Voxta Documentation](https://doc.voxta.ai/)
[](https://doc.voxta.ai/tools/search/)
  * [](https://doc.voxta.ai/docs/)
  * [Voxta Cloud](https://doc.voxta.ai/cloud/)
  * [Virt-A-Mate](https://doc.voxta.ai/vam/)
  * [Voxy](https://doc.voxta.ai/voxy/)


**Documentation** [What is Voxta?](https://doc.voxta.ai/docs/what-is-voxta/) [Getting Started](https://doc.voxta.ai/docs/getting-started/) **Installing** [Install Server](https://doc.voxta.ai/docs/install-server/) [Update Server](https://doc.voxta.ai/docs/update-server/) **Interface** [Menu](https://doc.voxta.ai/docs/menu/) [Chat](https://doc.voxta.ai/docs/chat/) [Profile](https://doc.voxta.ai/docs/profile/) [Characters](https://doc.voxta.ai/docs/characters/) [Services](https://doc.voxta.ai/docs/services/) [Add Service](https://doc.voxta.ai/docs/add-service/) [Wizard](https://doc.voxta.ai/docs/wizard/) [Benchmarks](https://doc.voxta.ai/docs/benchmarks/) [Chat History](https://doc.voxta.ai/docs/chat-history/) [Diagnostics](https://doc.voxta.ai/docs/diagnostics/) [Test Services](https://doc.voxta.ai/docs/test-services/) [Prompt Formatting](https://doc.voxta.ai/docs/prompt-formatting/) [Prompt Templates](https://doc.voxta.ai/docs/prompt-templates/) [Playgrounds](https://doc.voxta.ai/docs/playgrounds/) [Terminal](https://doc.voxta.ai/docs/terminal/) **Creator Studio** [Scenarios](https://doc.voxta.ai/docs/scenarios/) [Memory Books](https://doc.voxta.ai/docs/memory-books/) [Actions](https://doc.voxta.ai/docs/actions/) [Events](https://doc.voxta.ai/docs/events/) [Contexts](https://doc.voxta.ai/docs/contexts/) [Templates](https://doc.voxta.ai/docs/templates/) [Flags](https://doc.voxta.ai/docs/flags/) [Scripting](https://doc.voxta.ai/docs/scripting/) [App Triggers](https://doc.voxta.ai/docs/app-triggers/) [App Triggersv2](https://doc.voxta.ai/docs/app-triggersv2/) [Packages](https://doc.voxta.ai/docs/packages/) [Messages](https://doc.voxta.ai/docs/messages/) [Asset Formats](https://doc.voxta.ai/docs/asset-formats/) **Services** [Services Overview](https://doc.voxta.ai/docs/services-overview/) [✨ Voxta Cloud](https://doc.voxta.ai/docs/voxta-cloud/) [✨ F5-TTS](https://doc.voxta.ai/docs/f5-tts/) [✨ Coqui](https://doc.voxta.ai/docs/coqui/) [✨ Azure Speech Service](https://doc.voxta.ai/docs/azure-speech-service/) [✨ Deepgram](https://doc.voxta.ai/docs/deepgram/) [✨ ExLlamaV2](https://doc.voxta.ai/docs/exllamav2/) [✨ llama.cpp](https://doc.voxta.ai/docs/llama.cpp/) [✨ WhisperLive](https://doc.voxta.ai/docs/whisperlive/) [✨ ElevenLabs](https://doc.voxta.ai/docs/elevenlabs/) [✨ KoboldAI](https://doc.voxta.ai/docs/koboldai/) [✨ NovelAI](https://doc.voxta.ai/docs/novelai/) [✨ Text To Speech HTTP API](https://doc.voxta.ai/docs/text-to-speech-http-api/) [✨ OpenAI](https://doc.voxta.ai/docs/openai/) [✨ OpenAI Compatible](https://doc.voxta.ai/docs/openai-compatible/) [✨ OpenRouter](https://doc.voxta.ai/docs/openrouter/) [✨ Text Generation Web UI](https://doc.voxta.ai/docs/text-generation-web-ui/) [🔘 Silero](https://doc.voxta.ai/docs/silero/) [🔘 Vosk](https://doc.voxta.ai/docs/vosk/) [🚧 Azure Bing Search](https://doc.voxta.ai/docs/azure-bing-search/) [🚧 Text Generation Inference](https://doc.voxta.ai/docs/text-generation-inference/) [🚧 Windows Speech](https://doc.voxta.ai/docs/windows-speech/) [✨ ChromaDB](https://doc.voxta.ai/docs/chromadb/) [✨ Florence-2 Vision](https://doc.voxta.ai/docs/florence-2-vision/) [✨ Kokoro TTS](https://doc.voxta.ai/docs/kokoro-tts/) [NAudio](https://doc.voxta.ai/docs/naudio/) [Voxta Utilities](https://doc.voxta.ai/docs/voxta-utilities/) **Articles** [Large Language Models](https://doc.voxta.ai/docs/large-language-models/) [RunPod](https://doc.voxta.ai/docs/runpod/) [XTTS Server](https://doc.voxta.ai/docs/xtts-server/) [LLM Parameters](https://doc.voxta.ai/docs/llm-parameters/) [Troubleshooting & Solutions](https://doc.voxta.ai/docs/troubleshooting-solutions/) [Glossary](https://doc.voxta.ai/docs/glossary/) **FAQ** [Voxta Cloud Credits FAQ](https://doc.voxta.ai/docs/voxta-cloud-credits-faq/) [Voxta server FAQ](https://doc.voxta.ai/docs/voxta-server-faq/) [Voxta VAM plugin FAQ](https://doc.voxta.ai/docs/voxta-vam-plugin-faq/) **About** [Patreon](https://doc.voxta.ai/docs/patreon/) [Terms](https://doc.voxta.ai/docs/terms/) [AI Safety](https://doc.voxta.ai/docs/ai-safety/)
# Troubleshooting & Solutions
## WebView2 COM Exception (0x8007139F)
![](https://doc.voxta.ai/images/uploads/snag-0549.jpg)
This error occurs when launching Voxta and is related to Microsoft Edge WebView2. The error message typically includes:
```
System.Runtime.InteropServices.COMException (0x8007139F): 
The group or resource is not in the correct state to perform the requested operation.

```

#### Cause:
The issue is often caused by an incorrect entry in the Windows registry under **AppCompatFlags/Layers** , affecting **msedgewebview2.exe**.
#### Solution:
Deleting the problematic registry entry can resolve the issue:
![](https://doc.voxta.ai/images/uploads/snag-0552.jpg)
  1. Open **Registry Editor** (Win + R, type `regedit`and press Enter).
  2. Navigate to: `HKEY_CURRENT_USER\Software\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Layers`
  3. Look for an entry containing **msedgewebview2.exe**
  4. Right-click the entry and select **Delete**
  5. For more details, see the related discussion:
[GitHub WebView2 Issue #3008](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3008#issuecomment-1916313157)


## Voxta Cannot Run from a Folder with Spaces
![](https://doc.voxta.ai/images/uploads/spaces.png)
Voxta fails to initialize and throws an `InvalidOperationException` when installed in a folder containing spaces. The error message appears as:
System.InvalidOperationException: Cannot run Voxta from a folder with spaces. Please move your installation elsewhere.
#### Cause
Voxta does not support being installed in a directory with spaces in its name. This limitation affects service startup and hosting initialization, leading to a failure during application startup.
#### Solution
  1. Move the Voxta installation folder to a directory without spaces.
     * **Invalid installation paths:**
```
C:\Users\John Doe\Voxta  
D:\My Applications\Voxta  

```

     * **Valid installation paths:**
```
C:\Voxta  
D:\Apps\Voxta  

```

  2. Update any shortcuts or scripts referencing the old path to reflect the new location.
  3. Restart Voxta after relocation to ensure proper initialization.


#### Additional Notes
  * This restriction ensures compatibility with internal path resolution and dependency management.
  * If moving the folder is not feasible, consider using symbolic links or renaming parent directories to remove spaces.


[](https://doc.voxta.ai/docs/llm-parameters/) [Next ](https://doc.voxta.ai/docs/glossary/)
  * [WebView2 COM Exception (0x8007139F)](https://doc.voxta.ai/docs/troubleshooting-solutions/#webview2-com-exception-0x8007139f)
  * [Voxta Cannot Run from a Folder with Spaces](https://doc.voxta.ai/docs/troubleshooting-solutions/#voxta-cannot-run-from-a-folder-with-spaces)


[ ](https://voxta.ai/)
[ ](https://www.twitter.com/VoxtaAi) [ ](https://github.com/voxta-ai) [ ](https://www.youtube.com/@Voxta)
Made with [Docura](https://docura.github.io/)

---

## Related KB Articles

- [Voxta Desktop App vs Server Executable](kb/troubleshooting/running-voxta-server-vs-desktop-app-PxBNBZ.md)
- [Troubleshoot WebView2 Issues](kb/troubleshooting/voxta-desktop-app-webview2-error-fix-HV9a4o.md)
- [Accessing the Voxta Web Interface](kb/troubleshooting/accessing-interface-when-running-voxta-server-directly-3m1Ro1.md)
- [Missing Patreon Discord Roles](kb/troubleshooting/missing-access-to-patreon-tier-content-on-discord-SGoFJ9.md)
- [Managing Python Dependencies](kb/troubleshooting/fixing-corrupted-python-installation-or-module-errors-nSf4V3.md)
