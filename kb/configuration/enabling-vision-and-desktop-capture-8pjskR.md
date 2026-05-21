---
id: 8pjskRH2nn9UcBa5nZQMi
slug: enabling-vision-and-desktop-capture-8pjskR
type: tip
title: "Voxta Vision: Setup, Capture, and Integrations"
topics:
  - configuration
  - setup
  - troubleshooting
  - integrations
  - performance
keywords:
  - vision
  - desktop capture
  - windows sdk
  - webcam
  - appsettings.json
  - vision.prompted
  - vision.continuous
  - vision.basic
  - manage modules
  - screen capture
  - vision capture
  - setup
  - missing tab
  - toggle
  - character config
  - enable vision
  - vision capture returned no image
  - enablevision
  - v1.3.5
  - v1.3.6
  - Playground
  - Voxy
  - Voxta
  - requirements
  - install
  - activate
  - browser
  - game
  - monitor
  - camera
  - augmentations
  - florence-2
  - florence
  - prompted vision
  - chat style
  - character settings
  - voxta utilities
  - screenshots
  - VaM
  - Virt-A-Mate
  - VRAM
  - multimodal
  - continuous vision
  - basic vision
  - troubleshooting
  - performance
confidence: 0.9
authority: 0.2
contributor: tyrotio
sources:
  - messageId: "1321022842443272244"
    author: tyrotio
    timestamp: 2025-12-19T03:04:46.637Z
    url: ""
created: 2025-12-19T03:04:46.637Z
updated: 2025-12-23T03:40:45.168Z
---

# Voxta Vision: Setup, Capture, and Integrations

> Vision allows Voxta to process screen or webcam images, enhancing AI interactions. This guide covers enabling Vision, installing required modules, configuring capture sources and characters, using prompted/continuous vision, and integrating with Voxy and Virt-A-Mate.

## Answer

# Vision in Voxta: Setup, Capture, and Integrations\n\nVision is an optional feature in Voxta that allows the AI to process visual information from your computer screen or webcam. When enabled, Voxta can capture images and send them to the AI, enhancing interactions with characters, Voxy, and other integrations. This guide covers enabling Vision, installing required modules, configuring capture sources, setting up characters, using different vision modes (basic, prompted, continuous), and integrating with Voxy and Virt-A-Mate (VaM).\n\n## Enabling Vision\n\nVision is disabled by default. To enable it:\n\n1. Locate your Voxta installation folder and open `appsettings.json` in a text editor.\n2. Find the key `EnableVision` (or `Vision` in older versions). If present, set its value to `true`. If missing, add `\"EnableVision\": true` at the root level.\n3. Save the file and restart Voxta.\n\nAfter restarting, the Vision tab and toggles should appear in the UI. Enabling Vision also resolves errors like `vision capture returned no image` that may occur when the service is not fully active.\n\n## Installing Required Modules\n\n### Windows SDK (for Desktop Capture)\n\nTo capture your desktop (instead of a webcam), you need the Windows SDK module:\n\n1. In Voxta, go to **Manage Modules**.\n2. Click **Add Service**.\n3. Find and install **Windows SDK**.\n4. Once installed, you can configure which monitor to capture.\n\n### Vision Provider\n\nVoxta requires a vision provider to process images. Recommended providers:\n\n- **Florence-2** (supports prompted vision)\n- **Florence** (alternative)\n\nInstall your chosen provider via **Manage Modules** > **Add Service**.\n\n### Voxta Utilities: Vision (for Prompted Vision)\n\nIf you want the AI to be able to request images (prompted vision), you also need the **Voxta Utilities: Vision** module. This module handles regex triggers and default prompts. Install it from **Manage Modules**.\n\n## Configuring Capture Source\n\nVoxta can capture from either your webcam or your desktop. The toggle is found in the Vision Capture settings:\n\n1. In the Services menu, locate **Vision Capture**.\n2. Ensure the provider is set to **Windows SDK** (if using desktop capture) or **Browser** (if using webcam).\n3. Find the checkbox that controls the source:\n   - In Voxta v1.3.5, uncheck the **webcam** checkbox to enable desktop vision.\n   - In v1.3.6 and later, the setting may be labeled **Use Browser**. Check it for webcam, uncheck for desktop capture.\n\nIf you are using webcam, make sure a camera is connected and not in use by another application. If using desktop capture, ensure the Windows SDK module is installed and configured (select the correct monitor).\n\n## Configuring Vision Provider\n\n1. Open the main settings (cogwheel icon) and navigate to the **Vision** section.\n2. Enable Vision if not already done.\n3. Select your vision provider (e.g., Florence-2) from the dropdown.\n4. Configure any provider-specific settings as needed.\n\n## Setting Up Characters for Vision\n\nFor a character to use vision, you must add the appropriate augmentation to its configuration:\n\n1. Edit the character (via **Edit Character**).\n2. Under **Configuration** > **Augmentations** (or **Chat Augmentations**), add one of the following:\n   - `vision` – Basic vision; the character can receive images you send.\n   - `vision.prompted` – Prompted vision; the AI can request images based on the conversation.\n   - `vision.continuous` – Continuous vision; the AI receives images continuously during the conversation (use with caution due to performance impact).\n3. Ensure the character's **Chat Style** supports augmentations. Styles like **Companion** or **Assistant** are recommended.\n4. Save the character.\n\n## Using Vision\n\n### Sending Images (Basic Vision)\n\n- You can attach an image to a message. If you send an image without any text, the character will receive a default prompt (e.g., "Describe this image").\n- The vision provider processes the image and the AI responds accordingly.\n\n### Prompted Vision\n\n- With `vision.prompted` enabled, the AI may ask for images (e.g., "Show me what you're wearing").\n- When such a request is detected (via regex triggers in Voxta Utilities: Vision), Voxta automatically captures the screen (or uses an attached image) and sends it to the AI.\n- Ensure Voxta Utilities: Vision is installed and configured with appropriate regex patterns.\n\n### Continuous Vision\n\n- With `vision.continuous`, the AI receives a steady stream of images during the conversation. This can provide rich context but consumes significant resources (VRAM, CPU). Adjust capture frequency or resolution if needed.\n\n## Integrations\n\n### Voxy\n\nVoxy is a component that requires the Voxta server. Once Vision is enabled in Voxta, Voxy automatically benefits from visual context without additional configuration.\n\n### Virt-A-Mate (VaM)\n\nVoxta Vision can capture the VaM window, allowing the AI to "see" the scene. To set this up:\n\n- Use desktop capture with Windows SDK and target the VaM window.\n- The AI will interpret the image using standard computer vision; without specific guidance, it may interpret the scene literally (e.g., as a person on your desktop) rather than understanding it is inside a simulation.\n- Performance: Vision features, especially when combined with VaM, require significant VRAM. Ensure your system has adequate resources.\n\n## Troubleshooting\n\n- **Vision tab missing**: Ensure `EnableVision` is set to `true` in `appsettings.json` and you have restarted Voxta.\n- **`vision capture returned no image`**: Usually indicates Vision is not enabled or the capture source is misconfigured. Enable Vision and verify your capture source settings.\n- **Desktop capture not working**: Confirm Windows SDK module is installed and the correct monitor is selected. Check that no other application is blocking capture.\n- **Webcam not working**: Ensure no other application is using the camera, and the webcam is selected as the source (checkbox checked). Try restarting Voxta.\n- **Prompted vision not triggering**: Verify that Voxta Utilities: Vision is installed, the character has `vision.prompted` augmentation, and the regex triggers match the AI's requests. Also ensure the chat style supports augmentations.\n- **High VRAM usage**: Reduce capture resolution, frequency, or disable continuous vision. Consider upgrading your GPU if necessary.\n\n## Additional Notes\n\n- After any configuration change, restart Voxta for changes to take effect.\n- Version differences: In v1.3.5, the checkbox is labeled **webcam**; uncheck for desktop. In v1.3.6+, it is **Use Browser**; check for webcam, uncheck for desktop.\n- Vision can view everything on the selected monitor or webcam feed; be mindful of privacy.

---

*Extracted from Discord. Primary contributor: tyrotio*