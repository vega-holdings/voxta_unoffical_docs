---
id: 6RRsshk_7HYAbAGWr-OqO
slug: setting-up-voxta-cloud-module-6RRssh
type: qa
title: Setting Up and Configuring Voxta Cloud
topics:
  - setup
  - configuration
  - troubleshooting
  - llm
keywords:
  - Voxta Cloud
  - API key
  - Manage Modules
  - portal
  - cloud config
  - activation
  - services
  - setup
confidence: 0.9
authority: 0.2
contributor: _kinkyk9
sources: []
created: 2025-12-23T00:21:44.862Z
updated: 2025-12-23T04:36:31.059Z
---

# Setting Up and Configuring Voxta Cloud

> Voxta Cloud simplifies setup by providing cloud-based services for speech transcription, voice, text generation, action inference, and summarization. Install the module, retrieve your API key from the portal, and configure it in the Voxta Desktop App; then ensure required services are activated before chatting.

## Answer

# Setting Up Voxta Cloud

Voxta Cloud provides cloud-based services for speech transcription, voice, text generation, action inference, and summarization. It offers an all-in-one solution that simplifies configuration compared to setting up multiple third-party providers individually.

## Prerequisites

- Voxta Desktop App installed.
- An account on [Voxta Portal](https://portal.voxta.ai) (to obtain an API key).

## Installation

1. Open the Voxta Desktop App.
2. Navigate to **Manage Modules**.
3. Search for **Voxta Cloud**.
4. Click **Install** (if not already installed).

## Configuration

1. Obtain your API key:
   - Go to [Voxta Portal](https://portal.voxta.ai) and log in.
   - Your API key is displayed on the dashboard (or in account settings). Copy it.
2. In Voxta Desktop App, go to **Manage Modules** > **Voxta Cloud Config**.
3. Paste the API key into the designated field.
4. Click **Save**.

## Activation

Before starting a chat, you must set Voxta Cloud as the active service for each required function. Voxta Cloud can provide the following services:

- **Speech Transcription** (STT)
- **Voice** (TTS)
- **Text Generation** (LLM)
- **Action Inference**
- **Summarization**

To activate:

1. In the right-hand panel of the app, open the **Services** menu.
2. For each service you wish to use, select **Voxta Cloud** from the dropdown.
3. Ensure the selections are saved (they are typically applied automatically).

These services rely on Voxta Cloud and will not function without a valid API key.

## Troubleshooting

- **Voxta stops working**: Verify that the API key is correctly entered in **Manage Modules** > **Voxta Cloud Config**. If the key is missing or invalid, update it.
- **Lost API key**: You can generate a new key at any time from the [Voxta Portal](https://portal.voxta.ai). Note that generating a new key will invalidate the old one.
- **Services not appearing or failing**: Make sure the Voxta Cloud module is installed and the API key is valid. Restart the app if necessary.

---

*Extracted from Discord. Primary contributor: _kinkyk9*