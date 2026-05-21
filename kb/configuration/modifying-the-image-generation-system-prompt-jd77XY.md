---
id: jd77XY8YV2kKy5RkgozEG
slug: modifying-the-image-generation-system-prompt-jd77XY
type: qa
title: Customizing Image Generation and Computer Vision Prompts
topics:
  - configuration
  - scripting
  - integrations
keywords:
  - scriban
  - prompt template
  - image generation
  - computer vision
  - customization
  - system message
  - KoboldCPP
  - vision models
confidence: 1
authority: 0.2
contributor: a1os353
sources:
  - messageId: "1415084945579442337"
    author: a1os353
    timestamp: 2025-12-22T23:30:10.228Z
    url: ""
  - messageId: "1415085561332367491"
    author: a1os353
    timestamp: 2025-12-22T23:30:10.228Z
    url: ""
  - messageId: "1415086004007600249"
    author: a1os353
    timestamp: 2025-12-22T23:30:10.228Z
    url: ""
created: 2025-12-22T23:30:10.228Z
updated: 2025-12-23T13:53:48.307Z
---

# Customizing Image Generation and Computer Vision Prompts

> Learn how to customize the prompts used for image generation and computer vision by editing the Scriban template files located in the Voxta resources directory.

## Answer

# Customizing Image Generation and Computer Vision Prompts

Voxta uses Scriban template files to construct prompts for various AI models. You can customize these prompts by editing the appropriate template files in the installation directory. This allows you to adjust instructions, context, and priorities for the models.

## Before You Begin

Always back up the original `.scriban` files before making any edits. Changes will take effect the next time the specific module (Image Generation or Computer Vision) is used.

## Image Generation Prompts

Image generation uses two separate templates to define the context and the actual prompt.

### Template Files

*   **ImageGenSystemMessage.scriban**: Defines the system message that sets the context and instructions for the image generation model.
*   **ImageGenUserMessage.scriban**: Defines the user message that contains the actual prompt and any additional context.

Editing these files prevents default instructions from overwriting your preferences.

### Location

Navigate to the following folder in your Voxta installation directory:

```
Resources\Prompts\Default\en\ImageGen\
```

## Computer Vision Prompts

Computer Vision (e.g., KoboldCPP Vision) uses a single system message template to instruct the model on what to prioritize or ignore.

### Template File

*   **ComputerVisionSystemMessage.scriban**: Defines the system message for the vision model.

### Location

Navigate to the following folder in your Voxta installation directory:

```
VoxtaDesktop\Resources\Prompts\Default\en\ComputerVision\
```

## How to Edit

1.  Navigate to the directory corresponding to the feature you want to modify.
2.  Open the relevant `.scriban` file with a text editor (e.g., Notepad, VS Code).
3.  Modify the content to suit your specific needs.
4.  Save the file.

---

*Extracted from Discord. Primary contributor: a1os353*