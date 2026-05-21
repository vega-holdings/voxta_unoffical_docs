---
id: x3zFl_y25KSGdYCetubwJ
slug: scripting-extracting-image-prompts-from-character-responses-x3zFl_
type: tip
title: "Scripting: Extracting Image Prompts from Character Responses"
topics:
  - scripting
  - integrations
keywords:
  - image generation
  - danbooru
  - prompt extraction
  - chat.generateImage
  - regex
confidence: 0.8
authority: 0.2
contributor: daisukearamaki
sources: []
created: 2025-12-22T23:39:06.468Z
updated: 2025-12-22T23:39:06.468Z
---

# Scripting: Extracting Image Prompts from Character Responses

> A method to instruct characters to format image prompts with tags and a script to extract them for generation.

## Answer

You can configure a character to generate image prompts within their dialogue and use a script to automatically trigger image generation based on those prompts.

### 1. Prompt Instructions
Add the following instructions to the character's context (e.g., via a Note or System Instruction) to ensure consistent formatting:

> Prompt Formatting Rules:
> * Use `<prompt>` tags to wrap the actual image generation prompt
> * Use danbooru tags separated by commas
> * Start with main subject (1girl, 1boy, etc.)
> * Add details in order: appearance, clothing, setting, style
> * Always include quality tags: masterpiece, best_quality, highly_detailed
> * Use underscores instead of spaces in tags (long_hair not "long hair")

### 2. Script
Use this script to parse the character's message, extract the content within the tags, and trigger the image generator.

```javascript
import { chat } from "@voxta";

export function trigger(e) {
    const messageText = e.message?.text || "";
    
    // Extract prompt from <prompt> tags
    // The 's' flag allows matching across newlines
    const promptMatch = messageText.match(/<prompt>(.*?)<\/prompt>/s);
    
    let prompt;
    if (promptMatch) {
        prompt = promptMatch[1].trim();
        console.log("Extracted prompt from tags:", prompt);
    } else {
        // Fallback if no tags found
        prompt = "masterpiece, best_quality, highly_detailed";
        console.log("No prompt tags found, using fallback:", prompt);
    }
    
    chat.generateImage(prompt);
}
```

---

*Extracted from Discord. Primary contributor: daisukearamaki*