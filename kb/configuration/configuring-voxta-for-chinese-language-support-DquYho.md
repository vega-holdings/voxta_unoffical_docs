---
id: DquYho1lRLpvwrm4_ysut
slug: configuring-voxta-for-chinese-language-support-DquYho
type: qa
title: Configuring Voxta for Multiple Languages
topics:
  - configuration
  - llm
  - language
keywords:
  - language support
  - character culture
  - voice language
  - LLM
  - localized LLM
  - character description
  - TTS
  - STT
  - configuration
  - Chinese
  - Vietnamese
  - French
  - Coqui TTS
  - Whisper
  - Mistral
  - KoboldCPP
  - ExLlamaV2
  - F5-TTS
  - memory book
confidence: 0.9
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T21:01:07.415Z
updated: 2025-12-23T04:35:13.457Z
---

# Configuring Voxta for Multiple Languages

> To configure Voxta for a specific language, set the character's Culture and Voice Language, choose an LLM that supports the language, align TTS/STT service settings, and write character instructions in the target language. Examples for French, Chinese, and Vietnamese are included.

## Answer

# Configuring Voxta for Multiple Languages

Voxta supports a wide variety of languages, including but not limited to Chinese, Vietnamese, French, and many others. To ensure your character speaks and understands the desired language, you need to configure several settings consistently across the system.

## Required Configuration Steps

### 1. Character Settings

- **Culture**: In the character's Configuration tab, set the **Culture** field to the appropriate language and cultural context (e.g., `zh-CN` for Chinese, `vi-VN` for Vietnamese, `fr-FR` for French). This informs the AI about the character's background.
- **Voice Language**: In the Voice tab, set the **Language** field to the target language. This tells the audio generation which language to use.
- **Character Description and Memory Book**: Write the entire character profile, memory book, and any system instructions in the target language. Explicitly instruct the character to speak only that language. For example, for French: `{{ char }} est une française, et ne parle que le français`. This helps override any default English tendencies of the LLM.

### 2. Large Language Model (LLM) Selection

The quality of responses in non‑English languages heavily depends on the LLM's training data. Some models are primarily English‑only.

- For best results, use a **localized LLM** that is specifically trained for your target language. You can download such models from Hugging Face.
- If a localized model is not available, choose a multilingual model known for good performance in your language. For French, models like **Mistral 24B** or its forks work well. Recommended inference runners include **KoboldCPP** and **ExLlamaV2**.
- If the AI still responds in English, reinforce the language instruction in the character description or system prompt.

### 3. Text-to-Speech (TTS) Configuration

- Select a TTS service that supports your target language (e.g., **F5‑TTS**, **Coqui TTS**).
- In the service settings, set the language to match the output language you want.
- Use a voice sample (`.wav`) that is native to the language. For French, ensure you use a French voice sample with Coqui TTS.
- Verify that the TTS voice produces natural‑sounding speech for the language.

### 4. Speech-to-Text (STT) Configuration

- Choose an STT service with robust multilingual support, such as **Whisper** or **faster-whisper**.
- Ensure the model you select supports the target language. For example, `faster-whisper-large-v3-turbo-ct2` is a good choice for many languages.
- In the service settings, specify the language or use a multilingual model that automatically detects it.
- For better accuracy, consider using larger models (e.g., Whisper "large") and setting the language explicitly.

### 5. Consistency Check

Make sure all language settings are aligned: Character Culture, Voice Language, TTS language, STT language, and the LLM's language capabilities. Inconsistencies can cause the character to revert to English or produce errors.

## Troubleshooting

- **AI responds in English despite settings**:
  - Confirm that your LLM supports the target language. Try a different model if necessary.
  - Add a clear instruction in the character's description: "You always speak [language]."
  - Check that the Culture and Voice Language fields are correctly set and that the TTS/STT services are configured for the same language.

- **Poor quality or accented speech**:
  - Use a TTS voice that is native to the language.
  - For languages with special characters (e.g., Chinese), ensure the LLM outputs proper text without encoding issues.

- **STT not understanding spoken language**:
  - Ensure the STT service is set to the correct language or uses a multilingual model.
  - If using Whisper, select the appropriate model size (e.g., "large" for better accuracy) and specify the language in the service settings.

## Example: Configuring for French

To illustrate the steps, here is a typical setup for French:

- **Character**: Set Culture to `fr-FR`, Voice Language to French. Write the character profile and memory book entirely in French, with an explicit instruction to speak only French.
- **LLM**: Use a model like Mistral 24B (or a French-optimized variant) via KoboldCPP or ExLlamaV2.
- **TTS**: Use Coqui TTS with a French voice sample. Configure the service language to French.
- **STT**: Use `faster-whisper-large-v3-turbo-ct2` (or a similar multilingual model) and set the language to French.

The same principles apply for other languages such as Chinese, Vietnamese, etc. Simply replace the language codes, models, and voice samples accordingly.

By following these guidelines, you can successfully configure Voxta to interact in a wide range of languages.

---

*Extracted from Discord. Primary contributor: sraura*