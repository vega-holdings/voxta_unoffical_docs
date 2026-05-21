---
id: VQJSjqs6cjqF72-fMSdbf
slug: image-generation-configuration-and-usage-VQJSjq
type: qa
title: Image Generation Configuration and Usage
topics:
  - configuration
  - integrations
keywords:
  - image generation
  - vision.prompting
  - presets
  - dimensions
  - augmentation
  - /image
confidence: 0.8
authority: 0.2
contributor: eritainment
sources:
  - messageId: "1448672477285842966"
    author: eritainment
    timestamp: 2025-12-22T23:59:48.133Z
    url: ""
created: 2025-12-22T23:59:48.133Z
updated: 2025-12-22T23:59:48.133Z
---

# Image Generation Configuration and Usage

> Explains how image generation uses character context, where to configure presets, and the requirement to enable the vision.prompting augmentation.

## Answer

Yes, image generation utilizes content from the Character Appearance, User Appearance, and the current Chat context.

**Configuration:**
You can adjust settings (such as dimensions) in:
* `Manage Modules` -> `Image Gen` -> `Presets`
* Right Panel -> `Image Gen` -> `Presets`

**Setup & Usage:**
1. Enable the `vision.prompting` augmentation for your character.
2. Type `/image` in the chat to trigger generation based on the character card and current conversation.

---

*Extracted from Discord. Primary contributor: eritainment*