---
id: jeG_7UM6WtApB-Gi5XIqE
slug: configuring-narrator-speech-and-perspective-jeG_7U
type: qa
title: Configuring Narrator Settings and Speech
topics:
  - configuration
  - scenarios
  - llm
  - troubleshooting
keywords:
  - narrator
  - storytelling
  - chat style
  - role
  - companion
  - assistant
  - stt
  - tts
confidence: 0.9
authority: 0.2
contributor: sraura
sources:
  - messageId: "1341664488746647605"
    author: sraura
    timestamp: 2025-12-22T20:50:07.610Z
    url: ""
  - messageId: "1341694731436163083"
    author: sraura
    timestamp: 2025-12-22T20:50:07.610Z
    url: ""
created: 2025-12-22T20:50:07.610Z
updated: 2025-12-23T13:49:59.372Z
---

# Configuring Narrator Settings and Speech

> Instructions for enabling, disabling, and managing the narrator character and narration styles in scenarios and single character chats.

## Answer

### Configuring the Narrator Character

To ensure the narrator functions correctly, particularly in scenarios, you should specify a **narrator character** within the scenario settings. 

For 'simple quick chat' or if issues persist, try:
1. Setting the **Chat Style** to **Storytelling**.
2. Setting a **default character** in the STT (Speech-to-Text) engine settings.

**Disabling Narrator Speech**
You can disable narration speech by removing the narrator character from:
*   **Profile & Settings** (for the Default Narrator)
*   **Scenario Settings** (for scenario-specific narrators)

### Managing Narrated Text via Roles

In **Single Character Chat**, the amount of narration generated and read by TTS depends on the selected role:

*   **Companion / Assistant:** These roles focus on direct dialogue, minimizing or stopping unwanted narration.
*   **RP / Storytelling:** These roles are designed to generate narrated actions and descriptions, which the TTS will read aloud.

### Narrator Behavior and Perspective

The default narrator instructions are set to "DO NOT allow speech, citations or dialogue." This means the narrator is intended to describe events rather than speak. While not explicitly restricted to 3rd person, this instruction aims for descriptive text. Adherence to this perspective depends on the specific LLM used.

*Note: Future builds are expected to include a default narrator configuration to simplify this process.*

---

*Extracted from Discord. Primary contributor: sraura*