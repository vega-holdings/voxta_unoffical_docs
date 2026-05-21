---
id: 2NWHSvWk_rlI817aBcyAP
slug: making-characters-speak-more-emotionally-2NWHSv
type: qa
title: Configuring Emotional Speech in Text-to-Speech (TTS)
topics:
  - configuration
  - integrations
  - llm
keywords:
  - emotion
  - ElevenLabs
  - stability
  - voice sample
  - character card
  - tts
  - v3
  - system prompt
  - custom voices
confidence: 0.8
authority: 0.2
contributor: _kinkyk9
sources:
  - messageId: "1447542811434946673"
    author: _kinkyk9
    timestamp: 2025-12-22T23:54:37.288Z
    url: ""
created: 2025-12-22T23:54:37.288Z
updated: 2025-12-23T14:00:58.893Z
---

# Configuring Emotional Speech in Text-to-Speech (TTS)

> To achieve more emotional speech, select a capable TTS service like ElevenLabs, optimize voice samples, and configure character definitions. For ElevenLabs v3 specifically, ensure the system prompt instructs the LLM to provide emotional context.

## Answer

To achieve more emotional speech in your application, consider the following adjustments across your TTS service, character definitions, and specific integration settings.

### General Configuration

*   **TTS Service:** Use a service known for emotional range, such as ElevenLabs.
*   **Character Definition:** Explicitly describe the character's emotional state in the **Scenario**, **Chat Setup**, **Character Card**, and **Message Examples**. Providing context helps the system understand the intended delivery.

### Voice Samples

*   **Source Quality:** Ensure the source voice sample used for generation has the desired emotional tone. Re-recording or re-generating the sample can help.
*   **Voice Type:** Users have reported that emotional speech generation tends to work better with original ElevenLabs voices compared to custom cloned voices.

### ElevenLabs Specific Settings

*   **System Prompt (v3):** To enable emotional speech with ElevenLabs v3, you must include a specific system prompt that instructs the LLM to provide emotional context. This prompt should be placed in the **Character System Prompt** or **Character Context**.
*   **Stability:** If using ElevenLabs, adjust the **Stability** setting in the Manage Modules panel. Changing stability can impact emotional variance; often, lower stability allows for more expression, though results vary.

---

*Extracted from Discord. Primary contributor: _kinkyk9*