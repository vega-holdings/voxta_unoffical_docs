---
title: "Asset Formats"
url: "https://doc.voxta.ai/docs/asset-formats/"
scraped_at: "2025-12-19T04:37:56.665Z"
---
[Voxta Documentation](https://doc.voxta.ai/)
[](https://doc.voxta.ai/tools/search/)
  * [](https://doc.voxta.ai/docs/)
  * [Voxta Cloud](https://doc.voxta.ai/cloud/)
  * [Virt-A-Mate](https://doc.voxta.ai/vam/)
  * [Voxy](https://doc.voxta.ai/voxy/)


**Documentation** [What is Voxta?](https://doc.voxta.ai/docs/what-is-voxta/) [Getting Started](https://doc.voxta.ai/docs/getting-started/) **Installing** [Install Server](https://doc.voxta.ai/docs/install-server/) [Update Server](https://doc.voxta.ai/docs/update-server/) **Interface** [Menu](https://doc.voxta.ai/docs/menu/) [Chat](https://doc.voxta.ai/docs/chat/) [Profile](https://doc.voxta.ai/docs/profile/) [Characters](https://doc.voxta.ai/docs/characters/) [Services](https://doc.voxta.ai/docs/services/) [Add Service](https://doc.voxta.ai/docs/add-service/) [Wizard](https://doc.voxta.ai/docs/wizard/) [Benchmarks](https://doc.voxta.ai/docs/benchmarks/) [Chat History](https://doc.voxta.ai/docs/chat-history/) [Diagnostics](https://doc.voxta.ai/docs/diagnostics/) [Test Services](https://doc.voxta.ai/docs/test-services/) [Prompt Formatting](https://doc.voxta.ai/docs/prompt-formatting/) [Prompt Templates](https://doc.voxta.ai/docs/prompt-templates/) [Playgrounds](https://doc.voxta.ai/docs/playgrounds/) [Terminal](https://doc.voxta.ai/docs/terminal/) **Creator Studio** [Scenarios](https://doc.voxta.ai/docs/scenarios/) [Memory Books](https://doc.voxta.ai/docs/memory-books/) [Actions](https://doc.voxta.ai/docs/actions/) [Events](https://doc.voxta.ai/docs/events/) [Contexts](https://doc.voxta.ai/docs/contexts/) [Templates](https://doc.voxta.ai/docs/templates/) [Flags](https://doc.voxta.ai/docs/flags/) [Scripting](https://doc.voxta.ai/docs/scripting/) [App Triggers](https://doc.voxta.ai/docs/app-triggers/) [App Triggersv2](https://doc.voxta.ai/docs/app-triggersv2/) [Packages](https://doc.voxta.ai/docs/packages/) [Messages](https://doc.voxta.ai/docs/messages/) [Asset Formats](https://doc.voxta.ai/docs/asset-formats/) **Services** [Services Overview](https://doc.voxta.ai/docs/services-overview/) [✨ Voxta Cloud](https://doc.voxta.ai/docs/voxta-cloud/) [✨ F5-TTS](https://doc.voxta.ai/docs/f5-tts/) [✨ Coqui](https://doc.voxta.ai/docs/coqui/) [✨ Azure Speech Service](https://doc.voxta.ai/docs/azure-speech-service/) [✨ Deepgram](https://doc.voxta.ai/docs/deepgram/) [✨ ExLlamaV2](https://doc.voxta.ai/docs/exllamav2/) [✨ llama.cpp](https://doc.voxta.ai/docs/llama.cpp/) [✨ WhisperLive](https://doc.voxta.ai/docs/whisperlive/) [✨ ElevenLabs](https://doc.voxta.ai/docs/elevenlabs/) [✨ KoboldAI](https://doc.voxta.ai/docs/koboldai/) [✨ NovelAI](https://doc.voxta.ai/docs/novelai/) [✨ Text To Speech HTTP API](https://doc.voxta.ai/docs/text-to-speech-http-api/) [✨ OpenAI](https://doc.voxta.ai/docs/openai/) [✨ OpenAI Compatible](https://doc.voxta.ai/docs/openai-compatible/) [✨ OpenRouter](https://doc.voxta.ai/docs/openrouter/) [✨ Text Generation Web UI](https://doc.voxta.ai/docs/text-generation-web-ui/) [🔘 Silero](https://doc.voxta.ai/docs/silero/) [🔘 Vosk](https://doc.voxta.ai/docs/vosk/) [🚧 Azure Bing Search](https://doc.voxta.ai/docs/azure-bing-search/) [🚧 Text Generation Inference](https://doc.voxta.ai/docs/text-generation-inference/) [🚧 Windows Speech](https://doc.voxta.ai/docs/windows-speech/) [✨ ChromaDB](https://doc.voxta.ai/docs/chromadb/) [✨ Florence-2 Vision](https://doc.voxta.ai/docs/florence-2-vision/) [✨ Kokoro TTS](https://doc.voxta.ai/docs/kokoro-tts/) [NAudio](https://doc.voxta.ai/docs/naudio/) [Voxta Utilities](https://doc.voxta.ai/docs/voxta-utilities/) **Articles** [Large Language Models](https://doc.voxta.ai/docs/large-language-models/) [RunPod](https://doc.voxta.ai/docs/runpod/) [XTTS Server](https://doc.voxta.ai/docs/xtts-server/) [LLM Parameters](https://doc.voxta.ai/docs/llm-parameters/) [Troubleshooting & Solutions](https://doc.voxta.ai/docs/troubleshooting-solutions/) [Glossary](https://doc.voxta.ai/docs/glossary/) **FAQ** [Voxta Cloud Credits FAQ](https://doc.voxta.ai/docs/voxta-cloud-credits-faq/) [Voxta server FAQ](https://doc.voxta.ai/docs/voxta-server-faq/) [Voxta VAM plugin FAQ](https://doc.voxta.ai/docs/voxta-vam-plugin-faq/) **About** [Patreon](https://doc.voxta.ai/docs/patreon/) [Terms](https://doc.voxta.ai/docs/terms/) [AI Safety](https://doc.voxta.ai/docs/ai-safety/)
# Asset Formats
Voxta’s `ResourceAssetsManager` provides support for a diverse range of asset formats. These formats can be used for various elements within Characters, Scenarios, Memory Books, Content Packages, and more. Below is a comprehensive list of file extensions explicitly supported by the system.
**Important Note:** While this list represents the asset types recognized and managed by Voxta’s core system, specific features or scripts within Voxta (e.g., a particular avatar selection script in a scenario) might only utilize a subset of these formats based on their own logic.
## 1. Image Formats
Supported image formats for avatars, UI elements, backgrounds, and other visual content:
Format Name | Extension(s) | Alpha Channel | Animation | Compression & Quality Profile | Notes  
---|---|---|---|---|---  
Portable Network Graphics | `.png` | Yes | No | Lossless; perfect quality, preserves sharp lines & text. Larger file sizes than lossy formats. | Ideal for graphics, icons, and images requiring transparency or precise detail.  
Joint Photographic Experts Group |  `.jpg`, `.jpeg` | No | No | Lossy; good compression for photos, adjustable quality. Quality degrades with higher compression. | Best for photographic images where some quality loss is acceptable for smaller size.  
AV1 Image File Format | `.avif` | Yes | Yes (if animated) | Lossy (primarily) or Lossless; **Excellent compression** , superior quality retention even at low file sizes. | Modern format, often significantly smaller than JPEG/WebP for similar quality.  
WebP | `.webp` | Yes | Yes (if animated) | Lossy or Lossless; Very good compression, generally better than JPEG. | Versatile format, good balance of quality, features, and file size.  
## 2. Video Formats
Supported video formats, typically used for dynamic avatars or embedded video content:
Format Name | Extension(s) | Contains Audio | Contains Video | Compression & Quality Profile | Notes  
---|---|---|---|---|---  
WebM | `.webm` | Yes | Yes | Typically Lossy (VP9/AV1 codecs); Efficient compression for web video. | Open format, well-suited for web use. Quality depends on codec and bitrate.  
MPEG-4 Part 14 | `.mp4` | Yes | Yes | Typically Lossy (H.264/H.265 codecs); Good compression, broad compatibility. | Widely supported standard. Quality depends on codec and bitrate.  
**Video Without Sound:** Standard video formats like MP4 and WebM can be used without an audio track by either not encoding an audio stream or by muting the audio during playback as controlled by Voxta.
## 3. Audio Formats
Supported audio formats for voice lines, sound effects (SFX), and background music:
Format Name | Extension(s) | Type | Compression & Quality Profile | Notes  
---|---|---|---|---  
MPEG Audio Layer 3 | `.mp3` | Lossy | Good compression; widely used, decent quality for file size. | Popular for music and voice where file size is a consideration.  
Waveform Audio File | `.wav` | Lossless | Uncompressed (typically); Perfect quality, preserves original audio. | Standard for high-quality audio. Results in very large file sizes.  
Ogg Vorbis | `.ogg` | Lossy | Good compression; often better quality than MP3 at similar bitrates. | Open-source format, good alternative for general audio needs.  
## 4. 3D Model / Animation Formats
Formats related to 3D models and motion data, primarily for character representation and animation:
Format Name | Extension(s) | Type | Compression & Quality Profile | Notes  
---|---|---|---|---  
VRM | `.vrm` | 3D Avatar Model | Binary, glTF-based; size depends on model complexity, textures, and blendshapes. Optimized for real-time use. | A file format for 3D humanoid avatars. Widely used in VTubing and social VR applications.  
Vocaloid Motion Data | `.vmd` | Animation/Pose Data | Binary, compact; size varies with animation length and complexity. | Commonly used for animations and poses with MMD models. Can be used with VRM models.  
## 5. Data / Text Formats
Formats for storing structured data, configuration, or textual information:
Format Name | Extension(s) | Type | Compression & Quality Profile | Notes  
---|---|---|---|---  
JavaScript Object Notation | `.json` | Data | Text-based; human-readable. Size varies with data complexity; can be verbose. | Common for data interchange and configuration files. Supports complex data structures.  
Plain Text | `.txt` | Text | Text-based; minimal file size for raw text. | Basic text files for notes, simple logs, or raw textual data.  
Comma-Separated Values | `.csv` | Tabular Data | Text-based; compact for tabular data. | Simple format for storing tabular data (numbers and text) in plain text.  
* * *
## 6. Unsupported Formats in Voxta
The following file formats are not supported by Voxta.
  * **Images:** `.gif` (Graphics Interchange Format), `.svg` (Scalable Vector Graphics)
  * **Audio:** `.aac` (Advanced Audio Coding), `.m4a` (MPEG-4 Audio / Apple Lossless), `.flac` (Free Lossless Audio Codec), standalone `.opus` files.
  * **Video:** `.mov` (QuickTime File Format)


[](https://doc.voxta.ai/docs/messages/) [Next ](https://doc.voxta.ai/docs/services-overview/)
  * [1. Image Formats](https://doc.voxta.ai/docs/asset-formats/#1-image-formats)
  * [2. Video Formats](https://doc.voxta.ai/docs/asset-formats/#2-video-formats)
  * [3. Audio Formats](https://doc.voxta.ai/docs/asset-formats/#3-audio-formats)
  * [4. 3D Model / Animation Formats](https://doc.voxta.ai/docs/asset-formats/#4-3d-model--animation-formats)
  * [5. Data / Text Formats](https://doc.voxta.ai/docs/asset-formats/#5-data--text-formats)
  * [6. Unsupported Formats in Voxta](https://doc.voxta.ai/docs/asset-formats/#6-unsupported-formats-in-voxta)


[ ](https://voxta.ai/)
[ ](https://www.twitter.com/VoxtaAi) [ ](https://github.com/voxta-ai) [ ](https://www.youtube.com/@Voxta)
Made with [Docura](https://docura.github.io/)
