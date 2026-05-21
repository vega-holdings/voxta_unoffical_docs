---
id: 7cOlHzXO8eClnF3ujWuj0
slug: cost-and-setup-for-imagine-feature-7cOlHz
type: qa
title: "Image Generation in Voxta: Setup, Methods, and Usage"
topics:
  - configuration
  - integrations
  - setup
  - scripting
keywords:
  - /imagine
  - image generation
  - ComfyUI
  - Kobold
  - KoboldCPP
  - cost
  - setup
  - hardware
  - local
  - Stable Diffusion
  - SD.webui
  - Automatic1111
  - workflow
  - testing
  - roadmap
  - native loader
  - visual recognition
  - voxta cloud
  - openai
  - beta
  - local diffusers
  - chat.imagine
  - scenarios
confidence: 0.9
authority: 0.2
contributor: lapiro
sources:
  - messageId: "1425939409500504117"
    author: lapiro
    timestamp: 2025-12-22T23:35:15.839Z
    url: ""
created: 2025-12-22T23:35:15.839Z
updated: 2025-12-23T13:27:44.870Z
---

# Image Generation in Voxta: Setup, Methods, and Usage

> Voxta supports image generation via external services (ComfyUI, KoboldCpp, OpenAI) or built-in Local Diffusers. It's free when using local hardware, but requires a capable GPU. The feature is in beta and a native loader is in development.

## Answer

# Image Generation in Voxta

Voxta provides image generation capabilities through either external services or a built-in local diffusers module. The feature is currently in beta and may evolve.

## Supported Methods

- **External Services** (require separate installation and configuration):
  - **ComfyUI**: Node-based Stable Diffusion interface. Works with a local instance. You can reuse your existing checkpoints and LoRAs from SD.webui. The default ComfyUI workflow is compatible with Voxta.
  - **KoboldCpp**: Supports image generation when properly configured.
  - **OpenAI**: Cloud-based DALL·E or other models via API key.
- **Built-in Local Diffusers**: A native integration that runs diffusion models directly within Voxta, eliminating the need for external services. (Available as of recent versions.)

## Hardware Requirements

Image generation is computationally intensive. For acceptable performance, a dedicated GPU with sufficient VRAM is recommended. Without a capable GPU, generation may be slow or fail.

## Cost

- Using external services that run on your own hardware (ComfyUI, KoboldCpp, Local Diffusers) does not consume Voxta Cloud credits and is free aside from your own hardware/electricity.
- Using cloud-based services like OpenAI incurs costs according to the provider's pricing; Voxta does not charge extra.

## Setup

### External Services

1. **ComfyUI**:
   - Install and configure ComfyUI on your machine.
   - Ensure it is running and accessible (typically `http://localhost:8188`).
   - In Voxta, go to **Settings > Integrations** and provide the connection details.

2. **KoboldCpp**:
   - Install KoboldCpp with image generation support.
   - Start the service with appropriate flags.
   - Configure in Voxta's Integrations settings.

3. **OpenAI**:
   - Obtain an API key from OpenAI.
   - In Voxta, configure the OpenAI integration with your key and endpoint (if using a custom endpoint).

### Built-in Local Diffusers

1. Download the desired Stable Diffusion model or LoRA.
2. In Voxta settings, navigate to the Image Generation section and select the model.
3. Ensure your hardware meets requirements.

## Usage

- In chat, type `/imagine` followed by a description to generate an image.
- The generated image will appear in the conversation.

### Scripting

You can trigger image generation programmatically in Scenarios using the `chat.imagine()` function:

```javascript
import { chat } from "@voxta";

export function trigger(e) {
  chat.imagine();
}
```

You can also pass a prompt as an argument: `chat.imagine("a beautiful sunset")`.

## Voxta Cloud Considerations

Voxta Cloud currently provides built-in visual recognition (vision) but does not include native image generation. However, you can still use external image generation services with Voxta Cloud by configuring the appropriate integrations (e.g., OpenAI or a self-hosted ComfyUI instance accessible over the network).

## Upcoming Features

Voxta is developing a native diffusion model loader and inferencing module for an upcoming build, which will further simplify local image generation.

## Notes

- SD.webui (Automatic1111) is not directly supported; use ComfyUI or KoboldCpp instead.
- Image generation is in beta; stability and features may change.
- It is recommended to test and stabilize your workflow in ComfyUI before connecting to Voxta.

---

*Extracted from Discord. Primary contributor: lapiro*