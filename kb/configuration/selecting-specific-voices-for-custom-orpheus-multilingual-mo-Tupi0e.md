---
id: Tupi0eUDctF_CVnoFb9qv
slug: selecting-specific-voices-for-custom-orpheus-multilingual-mo-Tupi0e
type: troubleshooting
title: Configuring Orpheus Text-to-Speech in Voxta
topics:
  - configuration
  - integrations
  - troubleshooting
keywords:
  - Orpheus
  - TTS
  - voice
  - module
  - setup
  - multilingual
  - HTTP API
  - custom models
confidence: 0.8
authority: 0.2
contributor: mrdragonfox
sources:
  - messageId: "1437911246090272870"
    author: mrdragonfox
    timestamp: 2025-12-22T23:52:57.014Z
    url: ""
created: 2025-12-22T23:52:57.014Z
updated: 2025-12-23T14:00:14.678Z
---

# Configuring Orpheus Text-to-Speech in Voxta

> Provides instructions for enabling the standard Orpheus module and details how to configure the HTTP API for custom multilingual models to ensure correct voice selection.

## Answer

### Standard Setup
To enable the Orpheus module within Voxta:

1. Navigate to the **Services/Modules** section.
2. Add the **Orpheus** module.
3. Select a model within the Orpheus module settings.
4. Go to the chat interface and open the **Voice** side panel on the right.
5. Select Orpheus from the available voice options.

### Custom Multilingual Models
Voxta's built-in Orpheus integration may not automatically detect or list specific voice tags for custom multilingual models (such as the Spanish/Italian research releases). This can result in random voice selection.

To resolve this and select specific speakers for custom models:

1. Run the Orpheus inference externally (outside of Voxta's internal loader).
2. Connect the external service to Voxta using the **Text To Speech HTTP API**.
3. Configure the `Voices Url` and `Voices Format` in Voxta to correctly list the speakers available in your external model.

---

*Extracted from Discord. Primary contributor: mrdragonfox*