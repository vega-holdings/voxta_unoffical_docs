---
title: "Add Modules"
url: "https://doc.voxta.ai/docs/add-modules/"
scraped_at: "2025-12-22T00:00:00.000Z"
status: "draft"
---

# Add Modules

The Add Modules page lets you discover and install new modules to expand Voxta's capabilities. Access it via **Configuration > Manage Modules > Add Modules** button.

## Overview

Voxta offers 50+ modules across different categories. The Add Modules page helps you find and install the right modules for your needs.

## Interface Elements

### Filters

- **All Categories** - Filter by module type (Chat Replies, Voice, Speech Transcription, etc.)
- **All Hosting Types** - Filter by where the module runs:
  - Cloud-Based - Runs on external servers
  - Self-Hosted: Integrated (Zero-Setup) - Runs locally, Voxta handles setup
  - Self-Hosted: Requires External Software - Needs separate installation
- **All Pricing** - Filter by cost model
- **Search all modules...** - Find modules by name

### Use Wizard Button

The Setup Wizard guides new users through selecting and configuring essential modules. Recommended for first-time setup.

### Module Cards

Each available module shows:

- **Icon and name**
- **Description** - What the module does
- **Install button** - Add this module
- **Add Another** - Install additional instance (for already-installed modules)
- **Installed badge** - Already installed

## Module Categories

### Action Inference

Infer user and character actions and intents, similar to tool calling.

| Module | Type | Notes |
|--------|------|-------|
| OpenAI | Cloud | Direct OpenAI API |
| OpenRouter | Cloud | Multi-provider access |
| Voxta Cloud | Cloud | Easy setup with credits |
| ExLlamaV2 | Self-Hosted | GPU required |
| ExLlamaV3 | Self-Hosted | Latest version |
| LlamaSharp | Self-Hosted | Cross-platform |
| KoboldAI | External | Popular local LLM runner |
| Text Generation Web UI | External | Gradio-based UI |
| OpenAI Compatible | External | Any compatible endpoint |

### Speech Transcription

Transcribe recorded audio into text.

| Module | Type | Notes |
|--------|------|-------|
| AssemblyAI | Cloud | High accuracy |
| Azure Speech Service | Cloud | Microsoft cognitive services |
| Deepgram | Cloud | Fast transcription |
| Voxta Cloud | Cloud | Easy setup |
| Whisper Live | Self-Hosted | OpenAI Whisper model |
| Vosk | Self-Hosted | Lightweight, offline |
| Windows Speech | Self-Hosted | Built-in Windows STT |

### Voice (Text-to-Speech)

Generate spoken audio from text.

| Module | Type | Notes |
|--------|------|-------|
| Azure Speech Service | Cloud | Microsoft voices |
| ElevenLabs | Cloud | Premium quality, expensive |
| NovelAI | Cloud | Storytelling-focused |
| OpenAI | Cloud | OpenAI TTS |
| Voxta Cloud | Cloud | Easy setup |
| Chatterbox TTS | Self-Hosted | Diffusion-based |
| F5-TTS | Self-Hosted | ConvNeXt V2 architecture |
| Kitten TTS | Self-Hosted | Tiny (15M params) |
| Kokoro | Self-Hosted | 82M params, high quality |
| Orpheus | Self-Hosted | LLM-based synthesis |
| Sesame | Self-Hosted | Conversational model |
| XTTS (Coqui) | Self-Hosted | Voice cloning |
| Windows Speech | Self-Hosted | Built-in Windows TTS |
| Remote TTS (HTTP API) | External | Connect to TTS servers |

### Chat Replies (Text Generation)

Understand conversation context, generate replies and create stories.

| Module | Type | Notes |
|--------|------|-------|
| NovelAI | Cloud | Creative writing focus |
| OpenAI | Cloud | GPT models |
| OpenRouter | Cloud | 100+ models available |
| Voxta Cloud | Cloud | Easy setup |
| ExLlamaV2 | Self-Hosted | Fast GPU inference |
| ExLlamaV3 | Self-Hosted | Latest version |
| LlamaSharp | Self-Hosted | llama.cpp bindings |
| KoboldAI | External | Popular LLM interface |
| Text Generation Web UI | External | Oobabooga's UI |
| OpenAI Compatible | External | Generic endpoint |

### Summarization

Summarizes long conversations into concise summaries.

Same module options as Chat Replies - most LLM modules support both.

### Computer Vision

Analyze and interpret images and videos.

| Module | Type | Notes |
|--------|------|-------|
| OpenRouter | Cloud | Vision-capable models |
| Voxta Cloud | Cloud | Easy setup |
| Florence-2 | Self-Hosted | Microsoft's vision model |

### Image Generation

Create images from text descriptions.

| Module | Type | Notes |
|--------|------|-------|
| Voxta Cloud | Cloud | Easy setup |
| Local Diffusers | Self-Hosted | Stable Diffusion locally |

### Memory

Recalls information from long chats and previous conversations.

| Module | Type | Notes |
|--------|------|-------|
| Voxta Utilities: Simple Memory | Self-Hosted | Basic memory storage |
| ChromaDB | Self-Hosted | Vector database memory |

### Augmentations

Various utilities that enhance or modify the chat experience.

Note: Enabling an augmentation here makes it available server-wide. To use it, you must also activate it for a character in their Configuration tab.

## Installing a Module

1. Navigate to **Manage Modules > Add Modules**
2. Use filters to find the module you need
3. Click **Install** on the module card
4. Follow the configuration wizard
5. Enter required settings (API keys, endpoints, etc.)
6. Click **Save**

## Module Hosting Types Explained

### Cloud-Based

- Runs on external servers
- Requires internet connection
- Usually requires API key and/or subscription
- No local hardware requirements
- May have usage costs

### Self-Hosted: Integrated (Zero-Setup)

- Runs on your computer
- Voxta automatically downloads and manages the module
- May require significant disk space
- GPU often recommended for performance
- Free to use (your hardware costs)

### Self-Hosted: Requires External Software

- Runs on your computer
- Requires separate software installation
- More setup effort but more control
- Connect via API endpoints

## Recommended Starting Setup

For beginners, we recommend:

1. **Voxta Cloud** for all categories - Easiest setup, just needs account
2. Or use the **Setup Wizard** for guided configuration

For advanced users:

1. **OpenRouter** for Chat Replies - Access to many models
2. **Kokoro** or **F5-TTS** for Voice - Good local TTS
3. **Whisper Live** for Speech Transcription - Accurate local STT

## Adding Multiple Instances

Some modules support multiple instances:

- Different API keys for different accounts
- Different configurations for different purposes
- Click **Add Another** on an installed module

Example use cases:
- OpenRouter with different model selections
- Multiple OpenAI Compatible endpoints for different local servers

## Related Pages

- [Manage Modules](manage-modules.md) - View and configure installed modules
- [Configurations](configurations.md) - Create module presets
- [Services Overview](services-overview.md) - Detailed service documentation

---

## Related KB Articles

- [Setting Up KoboldCpp for Voxta](kb/troubleshooting/koboldcpp-documentation-and-wiki-avdZLi.md)
- [Configuring Florence-2 Vision with Windows SDK](kb/configuration/setting-up-florence-2-vision-7qYkS7.md)
- [Correct format for HuggingFace models in llama.cpp](kb/configuration/correct-format-for-huggingface-models-in-llama-cpp-oz0Bp7.md)
- [Kokoro TTS Speaker IDs](kb/configuration/kokoro-tts-speaker-ids-r00PLN.md)
- [ExLlamaV2 Default Model Directory](kb/configuration/exllamav2-default-model-directory-Lxhe48.md)
