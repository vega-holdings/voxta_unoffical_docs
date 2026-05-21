---
id: sYD-EcIjvryalScIN-1a0
slug: german-language-support-in-voxta-sYD-Ec
type: qa
title: German Language Support in Voxta
topics:
  - configuration
  - integrations
  - llm
  - setup
keywords:
  - German
  - language support
  - de-DE
  - locale
  - STT
  - TTS
  - LLM
  - Azure
  - Deepgram
  - ElevenLabs
  - OpenAI
  - Claude
  - Qwen
  - Kobold
  - multilingual
confidence: 0.8
authority: 0.2
contributor: .frond
sources:
  - messageId: "1339285794879438898"
    author: .frond
    timestamp: 2025-12-22T20:36:03.356Z
    url: ""
created: 2025-12-22T20:36:03.356Z
updated: 2025-12-23T02:46:31.494Z
---

# German Language Support in Voxta

> Voxta supports German when using STT, TTS, and LLM services that are configured for German. Recommended services include Azure, Deepgram, ElevenLabs, OpenAI, Claude, and Qwen. Additionally, set the character's locale to de-DE for best results.

## Answer

# German Language Support in Voxta\n\nVoxta can support German, but the quality and functionality depend on the AI services you connect. To achieve the best experience, you need to ensure that your Speech-to-Text (STT), Text-to-Speech (TTS), and Large Language Model (LLM) services are configured to handle German.\n\n## Requirements\n\n- **STT**: A service that supports German transcription.\n- **TTS**: A service that offers German voice synthesis.\n- **LLM**: A model capable of understanding and generating German text.\n- **Character Configuration**: Set the character's `locale` to `de-DE` to inform the system about the language.\n\n## Recommended Services\n\n### Speech-to-Text (STT)\n- [Azure Speech Services](https://azure.microsoft.com/en-us/products/ai-services/ai-speech) – supports German with high accuracy.\n- [Deepgram](https://deepgram.com/) – offers German language models.\n\n### Text-to-Speech (TTS)\n- [ElevenLabs](https://elevenlabs.io/) – provides natural-sounding German voices.\n\n### Large Language Models (LLM)\n- **OpenAI** (GPT models) – supports German.\n- **Claude** (Anthropic) – supports German.\n- **Qwen** – a multilingual model that works well with German; can be run locally via [KoboldAI](https://github.com/KoboldAI/KoboldAI-Client) or similar.\n\nThese are examples; other services that support German will also work.\n\n## Configuration Steps\n\n1. **Select Services**: In Voxta's Services menu, choose STT, TTS, and LLM providers that support German.\n2. **Configure Service Settings**: For each service, ensure the language is set to German (e.g., `de-DE` or `de` where applicable). Refer to the respective service documentation for details.\n3. **Set Character Locale**: Edit your character's configuration file (or use the UI) to include `\"locale\": \"de-DE\"`. Example:\n   ```json\n   {\n     \"name\": \"YourCharacter\",\n     \"locale\": \"de-DE\",\n     ...\n   }\n   ```\n4. **Test**: Run a conversation to verify that speech recognition, synthesis, and language understanding work correctly in German.\n\nIf you encounter issues, double-check each service's language support and configuration.

---

*Extracted from Discord. Primary contributor: .frond*