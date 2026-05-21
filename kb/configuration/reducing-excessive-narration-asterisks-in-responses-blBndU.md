---
id: blBndUXLSlLvX5MugugUy
slug: reducing-excessive-narration-asterisks-in-responses-blBndU
type: troubleshooting
title: Managing Narration, Asterisks, and Character Modes
topics:
  - configuration
  - llm
  - troubleshooting
keywords:
  - asterisks
  - narration
  - system prompt
  - text generation
  - TTS
  - assistant mode
  - RP mode
  - max words
confidence: 0.9
authority: 0.2
contributor: sraura
sources:
  - messageId: "1335286325053624341"
    author: sraura
    timestamp: 2025-12-22T20:11:09.860Z
    url: ""
  - messageId: "1335322752969871360"
    author: sraura
    timestamp: 2025-12-22T20:11:09.860Z
    url: ""
  - messageId: "1335323630044708864"
    author: sraura
    timestamp: 2025-12-22T20:11:09.860Z
    url: ""
created: 2025-12-22T20:11:09.860Z
updated: 2025-12-23T13:41:10.285Z
---

# Managing Narration, Asterisks, and Character Modes

> Learn how to control excessive narration and asterisk usage in Voxta through text generation presets and system prompts, and understand how Assistant and RP modes affect output and TTS.

## Answer

### Understanding Character Modes
The behavior of character thoughts and actions depends on the selected scenario mode:

*   **Assistant Mode:** Typically suppresses 'thinking' or 'narration' text (internal monologue) to focus on direct answers.
*   **RP / Story Telling Mode:** Displays thoughts and actions, usually enclosed within asterisks (e.g., `*smiles*`).

### Reducing Excessive Narration
If the AI is generating too much roleplay narration, you can adjust the Text Generation Preset settings:

1.  **Max Words In Asterisks:**
    Navigate to your Text Generation Preset settings and look for the **"Max Words In Asterisks"** option. Lowering this value defines a strict limit on how many words are allowed within asterisks, effectively discouraging the model from generating long action descriptions.

2.  **System Prompt Modifications:**
    You can append specific instructions to the **System Prompt** field within the preset settings to guide the model's behavior.
    *   *Example:* "Aim to use asterisks and detailed descriptions sparingly, focusing more on straightforward and concise responses."

    **Note:** While you cannot easily remove default base instructions (which often encourage roleplay-style narration) without modifying core files, appending counter-instructions to the system prompt is the recommended workaround.

### TTS Interaction
When using Voice (Text-to-Speech), the interaction with asterisk text is as follows:

*   TTS engines typically skip text enclosed in asterisks (actions).
*   Specific TTS settings determine whether this text is read aloud or ignored.

### Diagnostics
To verify exactly what instructions the AI is receiving, go to the **Diagnostics** tab (left menu) and check the **Text Generation** section. This displays the full compiled prompt sent to the model.

---

*Extracted from Discord. Primary contributor: sraura*