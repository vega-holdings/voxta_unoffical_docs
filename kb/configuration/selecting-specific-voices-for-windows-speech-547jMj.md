---
id: 547jMjQdfThvAvVk0w9JG
slug: selecting-specific-voices-for-windows-speech-547jMj
type: troubleshooting
title: Selecting Specific Voices for Windows Speech
topics:
  - configuration
  - troubleshooting
keywords:
  - Windows Speech
  - SAPI
  - NaturalVoiceSAPIAdapter
  - voice selection
  - Microsoft Zira
confidence: 0.9
authority: 0.2
contributor: bopdobop
sources: []
created: 2025-12-22T23:42:12.882Z
updated: 2025-12-22T23:42:12.882Z
---

# Selecting Specific Voices for Windows Speech

> Windows Speech voices are selected in the Character settings rather than the service configuration.

## Answer

Voice selection for Windows Speech is configured at the **Character** level, not within the global service settings.

1. Go to **Edit Character** for the specific character you wish to modify.
2. Scroll to the **Text To Speech (Voice)** section.
3. Select your desired Windows voice from the dropdown menu.

*Note: If you are using tools like `NaturalVoiceSAPIAdapter` to expose Azure/Natural voices to SAPI, they will appear in this list after successful installation.*

---

*Extracted from Discord. Primary contributor: bopdobop*