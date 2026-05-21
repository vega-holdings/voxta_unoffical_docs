---
id: vpFVWvGXB_7uo1ANV3FKN
slug: fixing-short-or-low-quality-responses-in-voxta-vpFVWv
type: troubleshooting
title: Controlling AI Response Length and Quality in Voxta
topics:
  - configuration
  - llm
  - troubleshooting
keywords:
  - response length
  - max_new_tokens
  - min_length
  - length_penalty
  - chat style
  - character examples
  - system prompt
  - text gen preset
  - steering
  - temperature
  - user input
  - verbosity
  - intro.scriban
  - context addon
  - new lines
  - fluff
confidence: 0.9
authority: 0.2
contributor: a1os353
sources:
  - messageId: "1334040279036199034"
    author: a1os353
    timestamp: 2025-12-22T20:03:24.043Z
    url: ""
  - messageId: "1334092330898030634"
    author: a1os353
    timestamp: 2025-12-22T20:03:24.043Z
    url: ""
created: 2025-12-22T20:03:24.043Z
updated: 2025-12-23T13:41:35.791Z
---

# Controlling AI Response Length and Quality in Voxta

> Adjust generation parameters, character definitions, and user interaction styles to control response length and quality. Learn to use presets, steering prompts, and specific LLM settings to avoid short or overly verbose outputs.

## Answer

# Controlling AI Response Length and Quality in Voxta

Voxta allows fine-tuning of AI responses through several settings. If you're experiencing replies that are too short, too long, or filled with unnecessary fluff, this guide will help you adjust the configuration to get the desired output.

It's recommended to start with the default settings and only adjust parameters when you need to fine-tune the AI's output style or verbosity.

## 1. Influence of User Input

Since Large Language Models (LLMs) function as token predictors, the style and length of user input directly influence the AI's output. 

- **Avoid Short Inputs**: If a user consistently provides short answers (e.g., 1-2 words) over multiple turns, the model will likely mimic this pattern and restrict its own response length.
- **Maintain Structure**: To encourage longer or more natural responses, maintain normal tonality and full sentence structure during interactions.

## 2. Adjust Generation Parameters

The most direct way to influence response length is by controlling the generation parameters in your Text Generation Preset.

- **Max Tokens (`max_new_tokens`)**: This setting caps the length of the generated reply. Increase it to allow longer responses; decrease it to keep replies brief.
- **Min Length (`min_length`)**: The minimum number of tokens the model must generate. Setting a higher value forces longer responses, but be careful: too high may cause the model to add irrelevant filler to meet the minimum.
- **Length Penalty**: A parameter that influences the model's tendency to produce longer or shorter sequences. Positive values (e.g., >1.00) encourage longer outputs; negative values discourage length.
- **Sentences Count**: Some presets use a sentence-based limit. Adjust this value to match your expectations.
- **Max Words Inside Asterisks**: Some presets include this parameter to limit the length of action text (e.g., *looks at you*). Use it to keep roleplay actions concise.
- **Temperature**: While not directly controlling length, higher temperature can increase variability and sometimes lead to longer responses. Adjusting this may help break fixed-length patterns.
- **Enable New Lines**: Allowing the model to insert line breaks can encourage multi‑paragraph replies, but be aware that some prompt formats may not handle newlines correctly, which can interrupt generation. Use this option with caution.

> ⚠️ Setting `max_new_tokens` too high without proper prompting can cause the model to "fill" the remaining space with repetitive or irrelevant text. Combine token limits with behavioral instructions.

## 3. Configure Character Settings

The AI learns from the definition and examples you provide for the character.

- **Chat Style**: In the **Character** settings, the **Chat Style** dropdown influences the underlying prompt template. 
  - **Storytelling** and **Roleplay** styles typically produce longer, more descriptive replies.
  - Other styles (e.g., `Chat`) may result in shorter, conversational answers.
- **First Message**: The initial message from the character sets the tone and length expectation. Ensure it is verbose if you want detailed replies.
- **Message Examples**: Include several example dialogues that demonstrate the desired verbosity and style. The model will tend to mimic the patterns found here.
- **Character Description**: You can include explicit instructions about response length in the description (e.g., "Always give concise answers" or "Be elaborate").

## 4. Use Presets and Steering

For more precise control, you can use custom presets or service-level steering to inject specific instructions.

### Text Generation Presets
1. Go to **Settings** (top‑right cog wheel).
2. Locate the default Text Gen preset and **Clone** it to create your own editable version.
3. In your custom preset, use the **System Prompt Addon** or **Context Addon** fields to give explicit instructions about length and pacing. 
   - *Example*: `Give short answers for simple questions, but be descriptive when telling stories.`
   - *Example*: `Avoid unnecessary filler text.`

### Service-Level Steering
You can also apply steering instructions at the service level:
1. Go to the **Services** tab > **Text Generation** > **Configure** > **Presets**.
2. Select **Edit** on your active preset.
3. In the **Prompts** section, add steering instructions such as "Prefer shorter responses, unless explaining something" or "Be verbose".

This applies the instruction globally and can effectively steer the model when character-specific prompts are insufficient.

## 5. Advanced: Modify System Prompt Templates (Caution)

For ultimate control, you can edit the raw prompt templates used by Voxta. The file `Resources\Prompts\Default\en\TextGen\Includes\intro.scriban` (or similar) contains the system prompt that frames the conversation.

- Editing this file allows you to insert your own guidelines about response length directly into the system prompt.
- **Important**: This file is overwritten when you update Voxta. Always back up your changes, or consider creating a custom prompt set to avoid losing modifications.

Only attempt this if you are comfortable with Scriban templating and understand the risks.

## Troubleshooting

- **Responses are too short** 
  - Increase `max_new_tokens` and/or sentences count.
  - Switch to a more descriptive Chat Style (e.g., Storytelling).
  - Enrich the character's Message Examples with longer replies.
  - Add a System Prompt Addon or steering instruction asking for more detail.
  - Ensure your own user inputs are not consistently one-word answers.

- **Responses are too long or fluffy** 
  - Decrease `max_new_tokens` or set a negative `length_penalty`.
  - Use a Chat Style that encourages brevity (e.g., Chat).
  - Add a System Prompt Addon requesting concise answers.
  - Ensure the character examples are not overly verbose.

- **Responses are cut off or not continuing** 
  - Disable "Enable New Lines" if you have it on; some models struggle with line breaks in certain prompt formats.
  - Check that `max_new_tokens` is not set too low.
  - Verify that the model's stopping criteria are correctly configured.

- **Responses are always exactly a certain length** 
  - Check the `min_length` parameter; it may be forcing a minimum token count.
  - Adjust temperature or other samplers to break deterministic patterns.

---

*Extracted from Discord. Primary contributor: a1os353*