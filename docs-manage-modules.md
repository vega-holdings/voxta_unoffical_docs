---
title: "Manage Modules"
url: "https://doc.voxta.ai/docs/manage-modules/"
scraped_at: "2025-12-22T00:00:00.000Z"
status: "draft"
---

# Manage Modules

The Manage Modules page is the central hub for viewing, configuring, and managing all installed modules in Voxta. Access it via **Configuration > Manage Modules** in the sidebar.

## Overview

Modules are the building blocks that power Voxta's AI capabilities. Each module provides specific functionality:

| Module Category | Purpose | Examples |
|-----------------|---------|----------|
| **Chat Replies** | Generate conversational responses | Voxta Cloud, OpenRouter, OpenAI |
| **Voice** | Text-to-speech synthesis | Voxta Cloud, ElevenLabs, Kokoro |
| **Speech Transcription** | Speech-to-text conversion | Voxta Cloud, Whisper Live, Deepgram |
| **Action Inference** | Infer actions and intents (tool calling) | Voxta Cloud, OpenRouter |
| **Summarization** | Condense long conversations | Voxta Cloud, OpenRouter |
| **Computer Vision** | Analyze images and video | Voxta Cloud, Florence-2 |
| **Image Generation** | Create images from text | Local Diffusers, Voxta Cloud |
| **Memory** | Long-term conversation recall | Voxta Utilities: Simple Memory |
| **Augmentations** | Enhance chat experience | Various utilities |

## Interface Elements

### Filters and Search

At the top of the page:

- **All Types** dropdown - Filter by module category (shows count of installed modules)
- **Search installed modules...** - Find modules by name
- **Upgrade All** button - Update all modules that have newer versions
- **Add Modules** button - Navigate to install new modules

### Module Cards

Each installed module displays:

- **Module icon and name**
- **Status indicator** - Green dot = Active, Gray = Inactive
- **Presets** button - Manage saved configurations for this module
- **Configure** button - Open module settings
- **More options** (...) - Additional actions

### Module Status Badges

- **Active** (green) - Currently selected for use
- **Installed** - Available but not active
- **Disabled** - Manually turned off
- **Upgrade Required** - Newer version available

## Module Categories Explained

### Chat Replies (Text Generation)

These modules power the AI's ability to understand context and generate responses. You need at least one active Chat Replies module to have conversations.

**Cloud-Based Options:**
- Voxta Cloud - Easy setup, uses credits
- OpenRouter - Access to many models (GPT-4, Claude, Llama, etc.)
- OpenAI - Direct OpenAI API access

**Self-Hosted Options:**
- ExLlamaV2 / ExLlamaV3 - Fast local inference on GPU
- LlamaSharp (llama.cpp) - Cross-platform local inference
- OpenAI Compatible - Connect to any OpenAI-compatible endpoint

### Voice (Text-to-Speech)

Enables characters to speak their responses aloud.

**Cloud-Based:**
- Voxta Cloud - High quality, uses credits
- ElevenLabs - Premium quality voices
- Azure Speech Service - Microsoft's TTS

**Self-Hosted:**
- Kokoro - Small but capable (82M parameters)
- F5-TTS - Diffusion-based TTS
- XTTS (Coqui) - Voice cloning capable
- Remote TTS (HTTP API) - Connect to external TTS servers

### Speech Transcription (Speech-to-Text)

Converts your spoken words into text for the AI to process.

**Cloud-Based:**
- Voxta Cloud - Easy setup
- Deepgram - Fast and accurate
- Azure Speech Service

**Self-Hosted:**
- Whisper Live - OpenAI's Whisper model
- Vosk - Lightweight, offline capable

### Action Inference

Allows the AI to determine and execute actions based on conversation context. Similar to "function calling" or "tool use" in other AI systems.

### Summarization

Condenses long conversations into summaries to maintain context within token limits. Essential for extended chats.

### Computer Vision

Enables the AI to see and analyze images, screenshots, or video feeds.

### Image Generation

Creates images from text descriptions during chat.

### Memory

Provides long-term memory across chat sessions, allowing characters to remember previous conversations.

### Augmentations

Special modules that enhance or modify the chat experience. Enable them here, then activate per-character in their Configuration tab.

## Configuring a Module

1. Click **Configure** on any module card
2. Enter required credentials (API keys, endpoints)
3. Adjust settings specific to that module
4. Click **Save**

## Using Presets

Presets let you save different configurations for the same module:

1. Click **Presets** on a module card
2. Create named presets (e.g., "Creative", "Precise", "Fast")
3. Each preset stores different settings
4. Select presets in your Configuration profiles

## Multiple Instances

You can install multiple instances of the same module type:

- Click **Add Another** on an installed module in Add Modules
- Useful for different API keys or configurations
- Example: One OpenRouter for chat, another for summarization

## Best Practices

1. **Start with Voxta Cloud** - Easiest setup for beginners
2. **Mix cloud and local** - Use cloud for quality, local for privacy/cost
3. **Create presets** - Save configurations for different use cases
4. **Use Configurations** - Group module selections into switchable profiles

## Related Pages

- [Add Modules](add-modules.md) - Install new modules
- [Configurations](configurations.md) - Create module presets
- [Running Services](running-services.md) - Monitor active modules

## Troubleshooting

**Module shows "Upgrade Required":**
- Click the Upgrade button or use "Upgrade All"
- Some upgrades may require reconfiguration

**Module not appearing in chat:**
- Check it's set as Active (green indicator)
- Verify it's enabled in your current Configuration
- Check the module is properly configured with valid credentials

**Performance issues:**
- Self-hosted modules depend on your hardware
- Cloud modules depend on network and API availability
- Use Benchmarks page to compare module performance

---

## Related KB Articles

- [Enabling non-English languages in Whisper STT](kb/configuration/enabling-non-english-languages-in-whisper-stt-ewg3uR.md)
- [Running Voxta Server and VAM on Separate Machines](kb/troubleshooting/running-voxta-server-on-a-separate-machine-from-vam-TeJRXr.md)
- [Setting Up KoboldCpp for Voxta](kb/troubleshooting/koboldcpp-documentation-and-wiki-avdZLi.md)
- [11Labs Module vs Voxta Cloud Credits](kb/configuration/11labs-module-vs-voxta-cloud-credits-kcfewg.md)
- [Fix for XTTS LLVM Error](kb/troubleshooting/fix-for-xtts-llvm-error-symbol-not-found-svml-cosf8-ha-QWiYCK.md)
- [Changing LLM Provider without Reinstalling](kb/configuration/changing-llm-provider-without-reinstalling-I8v3dP.md)
