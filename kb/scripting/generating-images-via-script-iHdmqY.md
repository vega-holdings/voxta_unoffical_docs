---
id: iHdmqYy5aMvR6WujDCYVr
slug: generating-images-via-script-iHdmqY
type: tip
title: Generating Images
topics:
  - scripting
  - integrations
keywords:
  - image generation
  - /image
  - slash command
  - generateImage
  - script
  - prompt
  - chat object
confidence: 0.6
authority: 0.2
contributor: daisukearamaki
sources: []
created: 2025-12-22T23:39:00.991Z
updated: 2025-12-23T14:01:24.864Z
---

# Generating Images

> You can generate images using the `/image` slash command in the chat interface or programmatically via scripts using the `chat.generateImage` method.

## Answer

There are two primary ways to generate images within the application: using slash commands directly in the chat interface or triggering them via scripts.

### Using the Slash Command
You can generate images directly from the chat context or by providing a specific prompt.

*   **Context-based:** Type `/image` to generate an image derived from the current conversation content.
*   **Custom Prompt:** Type `/image <prompt>` to manually specify the prompt for the image generation.

*Note: This feature is currently experimental.*

### Using Scripts
For programmatic control, you can trigger image generation directly from a script using the `chat.generateImage` method. This allows you to create images based on specific prompts dynamically.

```javascript
import { chat } from "@voxta";

export function trigger(e) {
    // Generate an image with a simple prompt
    chat.generateImage("a cute cat sitting in a sunny garden");
    chat.characterMessage("I'm generating a beautiful image for you!");
}
```

---

*Extracted from Discord. Primary contributor: daisukearamaki*