---
id: _RxufqBhpRDq8vBqTI8yB
slug: vision-service-not-detecting-screen-content-_Rxufq
type: troubleshooting
title: Configuring AI Vision for Screen Capture
topics:
  - troubleshooting
  - configuration
  - integrations
keywords:
  - vision
  - screen capture
  - input source
  - preset
  - continuous vision
  - troubleshooting
confidence: 1
authority: 0.2
contributor: maktastik
sources:
  - messageId: "1322418107272396834"
    author: maktastik
    timestamp: 2025-12-19T03:23:50.328Z
    url: ""
created: 2025-12-19T03:23:50.328Z
updated: 2025-12-23T13:49:15.429Z
---

# Configuring AI Vision for Screen Capture

> Explains how to enable and troubleshoot AI Vision components for screen visibility, including input source settings, presets, and interaction limitations.

## Answer

### Overview
To enable the AI to see your screen, you must add **Vision components**. This functionality allows the AI to view the screen via screenshots, which can be triggered periodically or set to **continuous vision**.

### Configuration Requirements
For the AI to successfully capture screen content, verify the following settings:

*   **Input Source:** Ensure the input is set to **Screen** to enable desktop capture. It should not be set to **Eyes**.
*   **Vision Preset:** Ensure a **Vision Preset** is explicitly selected (e.g., `default`). The preset should not be left unselected.

### Limitations
**Note:** While the AI can see the screen, it **cannot interact** with the game or application. It does not have control over game inputs.

### Troubleshooting
If the AI fails to detect or capture screen content:
1.  Go to your Vision settings.
2.  Confirm the **Input Source** is set to **Screen**.
3.  Verify the **Vision Preset** is set to `default` or your preferred preset.

---

*Extracted from Discord. Primary contributor: maktastik*