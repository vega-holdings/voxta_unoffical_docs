---
id: nqoECOFHybGA9RSdDWvIo
slug: response-cutoff-and-line-breaks-nqoECO
type: qa
title: Managing LLM Response Formatting, Line Breaks, and Truncation
topics:
  - llm
  - configuration
  - troubleshooting
  - formatting
keywords:
  - line breaks
  - truncation
  - multi-line
  - bullet points
  - system prompt
  - diagnostics
  - chat style
  - narration
  - textgen
  - stop words
confidence: 1
authority: 0.2
contributor: acidbubbles
sources: []
created: 2025-12-22T20:06:01.421Z
updated: 2025-12-23T13:52:18.395Z
---

# Managing LLM Response Formatting, Line Breaks, and Truncation

> Voxta enforces a chat/narration style by default, which strips bullet points and truncates responses at line breaks. You can configure settings to allow multi-paragraph responses or enforce single-paragraph output via system prompts.

## Answer

# Managing LLM Response Formatting, Line Breaks, and Truncation

Voxta is designed to process text in a way that feels like natural chat or narration. To maintain this flow, the application enforces specific formatting limitations:

*   **Stripping Formatting:** Bullet points and distinct paragraphs are generally removed or not displayed to preserve the conversational aesthetic.
*   **Line Break Handling:** By default, Voxta stops processing output when it encounters a new line character (line break). This prevents unwanted narration or formatting issues but can cut off multi-paragraph replies.
*   **Length Limits:** Voxta enforces a maximum sentence count to prevent overly long responses.

Depending on your preference, you can enable multi-paragraph support, force the model to output single paragraphs, or use diagnostics to troubleshoot output issues.

## Option 1: Enabling Multi-Paragraph Responses

To receive full multi-paragraph responses, you must configure the TextGen (or Chat Replies) service presets to allow line breaks.

### Steps

1. Go to **Manage Modules**.
2. Select your **TextGen / Chat Replies** service.
3. Edit the **Presets** (it is recommended to clone the preset first).
4. Enable the option **Allow for multiple lines**.
5. If the issue persists, try enabling **Disable Stop Words**, as line breaks might be triggering a stop sequence in the backend.

### Additional Notes

*   This setting works with any TextGen-compatible backend, including Koboldcpp, Qwen, and others.
*   The maximum sentence count may still apply even with multi-line enabled, which can truncate very long replies.

## Option 2: Enforcing Single-Paragraph Responses

If you prefer to avoid line breaks entirely (which can sometimes cause responses to be cut short or formatted incorrectly), you can modify the **System Prompt Addons** to force single-paragraph output.

### Solution

Add the following instruction to your system prompt:

> "Respond in a single paragraph without adding extra line breaks between sentences."

### Methodology

Different LLMs respond to different phrasing. If the above doesn't work, you can ask the LLM directly to find the best keywords (e.g., *"What do I have to write to system prompt to prevent you of using line breaks?"*). Some models may prefer terms like "single line" instead of "line break".

## Troubleshooting with Diagnostics

To determine if the LLM is generating the full text and Voxta is cutting it off, or if the LLM itself is stopping early, use the Diagnostics menu.

### Viewing Raw Output

1. Go to **Diagnostics** (located in the left menu under **Advanced**).
2. Select the **Text Generation** tab.
3. Click on any of the recent lines in the list.
4. View the **"Raw Result"** section below.

Comparing the raw output against the chat display helps identify if content is being limited by the software or formatted incorrectly by the model.

---

*Extracted from Discord. Primary contributor: acidbubbles*