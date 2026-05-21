---
id: 7qYkS7c9gwLzlPwkoaNOd
slug: setting-up-florence-2-vision-7qYkS7
type: tip
title: Configuring Florence-2 Vision with Windows SDK
topics:
  - setup
  - configuration
  - troubleshooting
keywords:
  - Florence-2
  - Vision
  - Windows SDK
  - augmentations
  - screen capture
  - input source
confidence: 0.9
authority: 0.2
contributor: gerryf.
sources:
  - messageId: "1321150208687603824"
    author: gerryf.
    timestamp: 2025-12-19T03:15:42.973Z
    url: ""
  - messageId: "1321244812799643739"
    author: gerryf.
    timestamp: 2025-12-19T03:15:42.973Z
    url: ""
created: 2025-12-19T03:15:42.973Z
updated: 2025-12-23T13:54:11.509Z
---

# Configuring Florence-2 Vision with Windows SDK

> Instructions for enabling the Florence-2 vision provider, selecting the Windows SDK for screen capture, and applying necessary character augmentations.

## Answer

To set up Vision using the Florence-2 model and configure it for screen capture, follow these steps:

### 1. Services Tab Configuration
*   **Disable Other Providers:** Unselect any other active vision providers (e.g., Ooba).
*   **Select Florence-2:** Choose **Florence-2** from the list. The system will automatically download the default large model (you can verify the download in the `Data/HuggingFace` folder).
*   **Enable Service:** Ensure the **Vision** service is enabled (the indicator should turn green).

### 2. Input Source Selection
*   In the Vision settings, select **Windows SDK** as the input source.
*   This option is used for screen capture and should be selected instead of the Webcam.

### 3. Character Configuration
*   Navigate to the character's profile in the configuration tab.
*   Ensure the following augmentations are added:
    *   `windows_sdk`
    *   `windows_sdk.active_window`
    *   `vision.prompted`
    *   `vision`

---

*Extracted from Discord. Primary contributor: gerryf.*