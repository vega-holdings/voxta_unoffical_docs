---
id: nYAp_yAbzIkDXa8Heqbrd
slug: basic-local-service-configuration-workflow-nYAp_y
type: tip
title: Configure ExLlamaV2, XTTS Coqui, and Whisper for Local Voxta Setup
topics:
  - setup
  - configuration
keywords:
  - ExLlamaV2
  - XTTS
  - Whisper
  - Coqui
  - local setup
  - configuration
  - manage modules
confidence: 0.9
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T22:44:36.774Z
updated: 2025-12-23T04:36:49.580Z
---

# Configure ExLlamaV2, XTTS Coqui, and Whisper for Local Voxta Setup

> Step-by-step guide to configuring ExLlamaV2 for text generation, XTTS Coqui for speech synthesis, and Whisper for speech recognition as your primary local services in Voxta.

## Answer

# Local Voxta Setup with ExLlamaV2, XTTS Coqui, and Whisper

This guide walks you through configuring a high-quality local service stack for Voxta, using **ExLlamaV2** for text generation (including action inference and summarization), **XTTS Coqui** for text-to-speech, and **Whisper** for speech-to-text.

## Prerequisites

- Voxta installed and running.
- Sufficient hardware (GPU recommended for ExLlamaV2 and Whisper).
- The required modules (ExLlamaV2, XTTS Coqui, Whisper) downloaded or available for installation.

## Configuration Steps

### 1. Access Service Management
Open Voxta and click the **cogwheel icon** (top right) to open the **Services** menu. For module installation and advanced settings, go to **Manage Modules**.

### 2. Disable Unnecessary Services (Recommended)
To avoid conflicts, disable services you won't use:
- **Voxta Cloud** (if enabled)
- **Vosk** (speech-to-text)
- **Text Generation WebUI** (if present)

You can disable them in **Manage Modules** by toggling their status or removing them.

### 3. Ensure Required Modules Are Installed
In **Manage Modules**, verify that the following modules are installed and enabled:
- **ExLlamaV2**
- **XTTS Coqui**
- **Whisper**

If any are missing, use the provided installers to add them.

### 4. Assign Services
In the **Services** menu (cogwheel icon), set each service to the appropriate module:
- **Text Generation** → ExLlamaV2
- **Action Inference** → ExLlamaV2
- **Summarization** → ExLlamaV2
- **Text to Speech** (under Voice) → XTTS Coqui
- **Speech Transcription** → Whisper

### 5. Configure ExLlamaV2
1. Go to **Manage Modules** → **ExLlamaV2** configuration.
2. From the dropdown, select your desired LLM (e.g., *Silicon Maid*).
3. If you are switching the default model or it's the first time, you may need to click **Run Install** before saving to download dependencies.
4. Click **Save**.

### 6. Configure XTTS Coqui and Whisper (Optional)
Both services typically work with default settings. If you need to adjust parameters (e.g., voice, language), visit their configuration pages under **Manage Modules**.

### 7. Save and Test
Return to the main Voxta interface and start a conversation to test the setup. Ensure that:
- Speech is transcribed correctly (Whisper)
- Responses are generated (ExLlamaV2)
- Speech synthesis sounds natural (XTTS Coqui)

If any service fails, check the logs and verify the configuration.

## Notes
- ExLlamaV2 handles text generation, action inference, and summarization simultaneously; you don't need separate modules for these tasks.
- XTTS Coqui and Whisper are local alternatives to cloud services, offering higher quality and privacy.
- Keep your modules updated for best performance.

---

*Extracted from Discord. Primary contributor: sraura*