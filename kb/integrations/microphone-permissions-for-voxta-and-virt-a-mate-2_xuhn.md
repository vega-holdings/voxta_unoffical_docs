---
id: 2_xuhn-V6OAc6B-9H3A_K
slug: microphone-permissions-for-voxta-and-virt-a-mate-2_xuhn
type: qa
title: Configuring Voice Input and Microphone Permissions for Voxta with Virt-A-Mate
topics:
  - integrations
  - configuration
  - setup
  - troubleshooting
keywords:
  - microphone
  - permissions
  - windows
  - VAM
  - Virt-A-Mate
  - STT
  - Speech-to-Text
  - Voxta Server
  - audio
  - input
  - privacy
confidence: 0.9
authority: 0.2
contributor: sraura
sources:
  - messageId: "1324833471419645983"
    author: sraura
    timestamp: 2025-12-19T05:01:09.836Z
    url: ""
created: 2025-12-19T05:01:09.836Z
updated: 2025-12-23T13:54:44.987Z
---

# Configuring Voice Input and Microphone Permissions for Voxta with Virt-A-Mate

> Voxta Server handles all microphone capture and Speech-to-Text (STT) processing for Virt-A-Mate; VAM requires no specific audio settings. Ensure Windows microphone permissions are enabled for Voxta Server and configure your STT service within the Voxta interface.

## Answer

When using Voxta with Virt-A-Mate (VAM), the **Voxta Server** application manages all audio capture and Speech-to-Text (STT) processing. Virt-A-Mate does not require microphone access, nor does it handle audio input directly.

### Windows Microphone Permissions

Because Voxta Server captures the audio, it is the only application that requires microphone permissions in Windows.

1.  Open Windows **Settings** and go to **Privacy & security** > **Microphone**.
2.  Ensure **Microphone access** is turned on.
3.  Verify that **`voxta.server`** is enabled in the app list.
4.  **Note:** Virt-A-Mate does not need to be listed in the Windows Microphone privacy settings.

### STT Configuration

To enable voice input, you must configure a Speech-to-Text service within Voxta Server. No configuration is required inside VAM itself.

**Requirements:**
*   Voxta Server installed and running.
*   A configured STT service (e.g., Whisper, Azure).
*   Microphone connected to the same PC as Voxta Server.

**Steps:**
1.  Open Voxta Server settings.
2.  Navigate to the **Speech-to-Text** section.
3.  Select and configure your preferred STT provider.
4.  Test the functionality using the **Voxta web interface** (chat or test tools).

### System Settings

Ensure your microphone is set as the **default input device** in your operating system. Voxta Server will automatically use the system default recording device.

### Troubleshooting

If voice input is not working in VAM:
*   **Verify STT in Web Interface:** If STT works in the Voxta web interface, it is configured correctly for VAM.
*   **Check Permissions:** Confirm `voxta.server` has permission in Windows Privacy settings.
*   **Check Default Device:** Ensure the correct microphone is selected as the system default input.
*   **Check Connection:** Ensure Voxta Server is running and connected to VAM.

---

*Extracted from Discord. Primary contributor: sraura*