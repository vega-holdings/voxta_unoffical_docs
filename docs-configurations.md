---
title: "Configurations"
url: "https://doc.voxta.ai/docs/configurations/"
scraped_at: "2025-12-22T00:00:00.000Z"
status: "draft"
---

# Configurations

Configurations are "presets of presets" - they define which modules are selected, which are disabled, and which settings to use for each. Access via **Configuration > Configurations** in the sidebar.

## Overview

Think of Configurations as complete AI setups you can switch between. Each Configuration specifies:

- Which modules to use for each capability (Chat, Voice, STT, etc.)
- Which module presets to apply
- Which modules are enabled or disabled

This allows you to quickly switch between different setups without reconfiguring everything.

## Use Cases

### Quality vs Speed

- **"High Quality"** - Premium cloud services, best models
- **"Fast Local"** - Lightweight local models for quick responses

### Privacy Modes

- **"Cloud"** - Use cloud services for convenience
- **"Private"** - All local modules, no data leaves your machine

### Character-Specific

- **"Roleplay"** - Creative LLM settings, expressive TTS
- **"Assistant"** - Factual LLM settings, neutral TTS

### Hardware Profiles

- **"Desktop"** - Full GPU acceleration
- **"Laptop"** - Lighter models for battery/heat

## Interface Elements

### Configuration List

The main page shows all your configurations:

- **Configuration name**
- **Active indicator** (green) - Currently in use
- **Selection radio button** - Click to switch configurations
- **Edit button** (pencil icon) - Modify configuration
- **Delete button** (trash icon) - Remove configuration

### Search Box

Filter configurations by name using the search field.

### Create New Configuration

Click the **Create New Configuration** button to add a new configuration profile.

## Creating a Configuration

1. Click **Create New Configuration**
2. Enter a descriptive name (e.g., "Gaming PC - High Quality")
3. For each module category, select:
   - Which module to use
   - Which preset for that module (if applicable)
   - Whether it's enabled or disabled
4. Save the configuration

## Editing a Configuration

1. Click the **Edit** (pencil) icon on a configuration
2. Modify module selections and presets
3. Save changes

You can also access configuration editing from:
- The sidebar's **Open Settings Panel** button
- The gear icon in the top-right corner
- Within a chat session

## The Settings Panel

The collapsible Settings Panel (right side of the UI) provides quick access to:

### Configuration Selection

- Switch between configurations
- Create, rename, clone, or delete configurations

### Module Categories

Expandable sections for each module type:

- **Speech Transcription** - STT module and settings
- **Voice** - TTS module and settings
- **Chat Replies (textgen)** - LLM for conversations
- **Action Inference** - Tool calling module
- **Summarization** - Context compression module
- **Vision** - Image analysis module
- **Image Generation** - Image creation module
- **Memory** - Long-term recall module
- **Chat Augmentations** - Active chat enhancements

Each section shows:
- Currently selected module
- Module preset selection
- Quick access to module configuration

## Switching Configurations

### From the Configurations Page

1. Go to **Configuration > Configurations**
2. Click the radio button next to the desired configuration
3. The configuration becomes active immediately

### From the Settings Panel

1. Click **Open Settings Panel** or the gear icon
2. In the Configurations section, select a different configuration
3. Changes apply immediately

## Configuration Inheritance

When you create a new configuration:
- It starts with default module selections
- You can clone an existing configuration as a starting point
- Changes to one configuration don't affect others

## Best Practices

### Naming Conventions

Use descriptive names that indicate:
- Purpose: "Roleplay", "Coding Assistant", "Casual Chat"
- Quality level: "High Quality", "Fast", "Balanced"
- Privacy: "Cloud", "Local Only", "Hybrid"

### Minimal Configurations

Create focused configurations:
- Don't enable modules you won't use
- Disable expensive cloud modules when using local alternatives

### Testing Configurations

- Use the Playground pages to test module performance
- Use Benchmarks to compare configurations
- Test with typical conversations before relying on a configuration

## Default Configuration

Voxta creates a "Default" configuration on first run:
- Uses Voxta Cloud for most modules (if configured)
- Can be renamed but not deleted
- Serves as a fallback configuration

## Configuration Actions

### Clone Configuration

Creates a copy of an existing configuration:
1. Useful for creating variations
2. Preserves all module selections and presets

### Rename Configuration

Change the display name without affecting settings.

### Delete Configuration

Remove a configuration you no longer need:
- Cannot delete the active configuration
- Cannot delete the last remaining configuration

## Related Pages

- [Manage Modules](manage-modules.md) - Install and configure modules
- [Add Modules](add-modules.md) - Discover new modules
- [Profile](profile.md) - User settings

---

## Related KB Articles

- [Location of Speech Interruption Setting](kb/configuration/location-of-speech-interruption-setting-v9kSD_.md)
- [Setting User Profile Description](kb/configuration/setting-user-profile-description-jhgf3D.md)
- [Voxta API Keys: Configuration and Management](kb/configuration/api-key-field-in-virt-a-mate-vam-plugin-R5YRda.md)
- [Configuring Model Directories and Downloads](kb/configuration/exllamav2-default-model-directory-Lxhe48.md)
