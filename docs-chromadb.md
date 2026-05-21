---
title: "ChromaDB"
url: "https://doc.voxta.ai/docs/chromadb/"
scraped_at: "2025-12-19T04:37:56.668Z"
---
[Voxta Documentation](https://doc.voxta.ai/)
[](https://doc.voxta.ai/tools/search/)
  * [](https://doc.voxta.ai/docs/)
  * [Voxta Cloud](https://doc.voxta.ai/cloud/)
  * [Virt-A-Mate](https://doc.voxta.ai/vam/)
  * [Voxy](https://doc.voxta.ai/voxy/)


**Documentation** [What is Voxta?](https://doc.voxta.ai/docs/what-is-voxta/) [Getting Started](https://doc.voxta.ai/docs/getting-started/) **Installing** [Install Server](https://doc.voxta.ai/docs/install-server/) [Update Server](https://doc.voxta.ai/docs/update-server/) **Interface** [Menu](https://doc.voxta.ai/docs/menu/) [Chat](https://doc.voxta.ai/docs/chat/) [Profile](https://doc.voxta.ai/docs/profile/) [Characters](https://doc.voxta.ai/docs/characters/) [Services](https://doc.voxta.ai/docs/services/) [Add Service](https://doc.voxta.ai/docs/add-service/) [Wizard](https://doc.voxta.ai/docs/wizard/) [Benchmarks](https://doc.voxta.ai/docs/benchmarks/) [Chat History](https://doc.voxta.ai/docs/chat-history/) [Diagnostics](https://doc.voxta.ai/docs/diagnostics/) [Test Services](https://doc.voxta.ai/docs/test-services/) [Prompt Formatting](https://doc.voxta.ai/docs/prompt-formatting/) [Prompt Templates](https://doc.voxta.ai/docs/prompt-templates/) [Playgrounds](https://doc.voxta.ai/docs/playgrounds/) [Terminal](https://doc.voxta.ai/docs/terminal/) **Creator Studio** [Scenarios](https://doc.voxta.ai/docs/scenarios/) [Memory Books](https://doc.voxta.ai/docs/memory-books/) [Actions](https://doc.voxta.ai/docs/actions/) [Events](https://doc.voxta.ai/docs/events/) [Contexts](https://doc.voxta.ai/docs/contexts/) [Templates](https://doc.voxta.ai/docs/templates/) [Flags](https://doc.voxta.ai/docs/flags/) [Scripting](https://doc.voxta.ai/docs/scripting/) [App Triggers](https://doc.voxta.ai/docs/app-triggers/) [App Triggersv2](https://doc.voxta.ai/docs/app-triggersv2/) [Packages](https://doc.voxta.ai/docs/packages/) [Messages](https://doc.voxta.ai/docs/messages/) [Asset Formats](https://doc.voxta.ai/docs/asset-formats/) **Services** [Services Overview](https://doc.voxta.ai/docs/services-overview/) [✨ Voxta Cloud](https://doc.voxta.ai/docs/voxta-cloud/) [✨ F5-TTS](https://doc.voxta.ai/docs/f5-tts/) [✨ Coqui](https://doc.voxta.ai/docs/coqui/) [✨ Azure Speech Service](https://doc.voxta.ai/docs/azure-speech-service/) [✨ Deepgram](https://doc.voxta.ai/docs/deepgram/) [✨ ExLlamaV2](https://doc.voxta.ai/docs/exllamav2/) [✨ llama.cpp](https://doc.voxta.ai/docs/llama.cpp/) [✨ WhisperLive](https://doc.voxta.ai/docs/whisperlive/) [✨ ElevenLabs](https://doc.voxta.ai/docs/elevenlabs/) [✨ KoboldAI](https://doc.voxta.ai/docs/koboldai/) [✨ NovelAI](https://doc.voxta.ai/docs/novelai/) [✨ Text To Speech HTTP API](https://doc.voxta.ai/docs/text-to-speech-http-api/) [✨ OpenAI](https://doc.voxta.ai/docs/openai/) [✨ OpenAI Compatible](https://doc.voxta.ai/docs/openai-compatible/) [✨ OpenRouter](https://doc.voxta.ai/docs/openrouter/) [✨ Text Generation Web UI](https://doc.voxta.ai/docs/text-generation-web-ui/) [🔘 Silero](https://doc.voxta.ai/docs/silero/) [🔘 Vosk](https://doc.voxta.ai/docs/vosk/) [🚧 Azure Bing Search](https://doc.voxta.ai/docs/azure-bing-search/) [🚧 Text Generation Inference](https://doc.voxta.ai/docs/text-generation-inference/) [🚧 Windows Speech](https://doc.voxta.ai/docs/windows-speech/) [✨ ChromaDB](https://doc.voxta.ai/docs/chromadb/) [✨ Florence-2 Vision](https://doc.voxta.ai/docs/florence-2-vision/) [✨ Kokoro TTS](https://doc.voxta.ai/docs/kokoro-tts/) [NAudio](https://doc.voxta.ai/docs/naudio/) [Voxta Utilities](https://doc.voxta.ai/docs/voxta-utilities/) **Articles** [Large Language Models](https://doc.voxta.ai/docs/large-language-models/) [RunPod](https://doc.voxta.ai/docs/runpod/) [XTTS Server](https://doc.voxta.ai/docs/xtts-server/) [LLM Parameters](https://doc.voxta.ai/docs/llm-parameters/) [Troubleshooting & Solutions](https://doc.voxta.ai/docs/troubleshooting-solutions/) [Glossary](https://doc.voxta.ai/docs/glossary/) **FAQ** [Voxta Cloud Credits FAQ](https://doc.voxta.ai/docs/voxta-cloud-credits-faq/) [Voxta server FAQ](https://doc.voxta.ai/docs/voxta-server-faq/) [Voxta VAM plugin FAQ](https://doc.voxta.ai/docs/voxta-vam-plugin-faq/) **About** [Patreon](https://doc.voxta.ai/docs/patreon/) [Terms](https://doc.voxta.ai/docs/terms/) [AI Safety](https://doc.voxta.ai/docs/ai-safety/)
# ChromaDB
ChromaDB is an open-source vector database designed to store and query embeddings, documents, and metadata for applications utilizing large language models (LLMs). It simplifies the development of LLM-powered applications by providing a unified platform for managing and retrieving vector data.
### Configuration Options
#### **Query Settings**
  * **Max Query Results:** Set the maximum number of results to retrieve during memory recall.
    * Default: `4`
    * Note: Higher values may cause items to be dropped due to token budget constraints.
  * **Max Query Distance:** Define the maximum distance threshold for results, based on the HNSW distance metric.
    * Default: `0.85`
    * Note: The range depends on the space metric (e.g., cosine ranges between `0 `and `2)`


#### **Memory Settings**
  * **Prefill Memory Window:** Automatically load the top entries (by weight or date) into live memory when starting a session.
    * Benefit: Increases the chances of recalling entries without triggers.
    * Risk: May introduce noise into memory recall.
  * **Max Memory Window Entries:** Limit the number of memory entries stored in the active memory window.
    * Default: `12`
    * Note: The actual number may be lower if the token count exceeds the available memory token window.
  * **Expire Memories After:** Specify how many messages to keep memories in the active window before they expire.
    * Example: `5`
Note: Set to `0 ` to keep memories indefinitely.
  * **Embedding Model:** Select the embedding model for representing data.
    * Default:
`all-MiniLM-L6-v2`
(small size, 80MB, very fast).
    * Note: Embeddings are used to represent data in an AI-native format, perfect for tools and algorithms.
    * Learn more:
[Sentence Transformers Pretrained Models](https://doc.voxta.ai/)
  * **Use Cuda:** Enable GPU usage for faster performance. If disabled, the CPU will be used instead.


#### **HNSW (Indexing and Search)**
  * **HNSW Space:** The distance metric used for the HNSW index.
    * Default: `Cosine`
    * Note: The space metric cannot be changed after the index is created. ChromaDB’s default is `l2`
  * **HNSW Construction EF:** Controls the number of neighbors explored when adding new vectors.
    * Default: `200`
    * Impact: Higher values result in better results but increase memory consumption.
    * ChromaDB Default: `100`
  * **HNSW Search EF:** Controls the number of neighbors explored when searching.
    * Default: `20`
    * Impact: Increasing this value improves search quality but requires more memory.
    * ChromaDB Default: `10`
  * **HNSW M:** Sets the maximum number of neighbor connections (`M`) for each newly inserted vector.
    * Default: `25`
    * Impact: Higher values create a more densely connected graph, leading to slower but more accurate searches with increased memory usage.
    * ChromaDB Default: `16`


[](https://doc.voxta.ai/docs/windows-speech/) [Next ](https://doc.voxta.ai/docs/florence-2-vision/)
  *     * [Configuration Options](https://doc.voxta.ai/docs/chromadb/#configuration-options)


[ ](https://voxta.ai/)
[ ](https://www.twitter.com/VoxtaAi) [ ](https://github.com/voxta-ai) [ ](https://www.youtube.com/@Voxta)
Made with [Docura](https://docura.github.io/)
