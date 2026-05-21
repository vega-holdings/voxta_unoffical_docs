---
title: "Import"
url: "https://doc.voxta.ai/docs/import/"
scraped_at: "2025-12-22T00:00:00.000Z"
status: "draft"
---

# Import

The Import page allows you to bring external content into Voxta, including characters, scenarios, packages, and other assets. Access via **Creator Studio > Import** in the sidebar.

## Overview

Voxta can import content from multiple sources and formats:

- **Voxta Packages** (.voxpkg) - Native Voxta export format
- **ZIP Archives** (.zip) - Compressed content bundles
- **Character Cards** (.png) - Character images with embedded data
- **Configuration Files** (.yml, .yaml) - YAML configuration
- **Data Files** (.json) - JSON data

## Interface Elements

### Conflict Resolution

Before importing, choose how to handle content that already exists:

| Option | Behavior |
|--------|----------|
| **Skip** | Keep existing content, ignore duplicates |
| **Overwrite** | Replace existing content with imported version |
| **Create New** | Import as new item (may create duplicates) |

### Drop Zone

The main import area:

- **Drag and drop** files directly onto the zone
- **Click to Select Files** - Browse for files manually
- Multiple files can be imported at once

### Restore Built-In Resources

Click this button to restore Voxta's default built-in content:
- Default characters (Voxta, Assistant, Narrator)
- Default scenarios
- Default templates and configurations

Useful if you accidentally deleted or modified built-in content.

## Supported Formats

### Voxta Packages (.voxpkg)

The native Voxta export format containing:
- Characters with all settings
- Scenarios with full configuration
- Memory books
- Assets (images, audio)
- Dependencies and references

Best for sharing complete Voxta setups.

### ZIP Archives (.zip)

Compressed archives that may contain:
- Multiple .voxpkg files
- Character cards
- Configuration files
- Asset folders

### Character Cards (.png)

PNG images with embedded character data (TavernAI/SillyTavern format):
- Character definition in image metadata
- Personality, scenario, first message
- Example dialogues
- May include lorebook entries

Voxta extracts the embedded data automatically.

### YAML Files (.yml, .yaml)

Configuration files for:
- Character definitions
- Scenario configurations
- Settings exports

### JSON Files (.json)

Data files for:
- Character definitions
- Lorebooks/Memory books
- Configuration exports

## Import Process

### Basic Import

1. Navigate to **Creator Studio > Import**
2. Select conflict resolution method (Skip/Overwrite/Create New)
3. Drag files onto the drop zone, or click to browse
4. Wait for processing
5. Review imported content

### Importing Character Cards

1. Obtain .png character cards (from ChubAI, etc.)
2. Drag the .png file onto the import zone
3. Voxta extracts embedded character data
4. The character appears in your Characters list

### Importing Packages

1. Obtain .voxpkg file (from other Voxta users)
2. Drag onto import zone
3. All package contents are imported
4. Check Characters, Scenarios, Memory Books for new content

## Conflict Resolution Details

### Skip (Default)

- Safest option
- Existing content is preserved
- New unique content is imported
- Duplicates are ignored

Use when: You want to add new content without risking existing data.

### Overwrite

- Replaces matching content
- Uses imported version
- Existing content is lost
- New content is added

Use when: You want to update content with a newer version.

### Create New

- Never modifies existing content
- Always creates new entries
- May result in duplicates
- Original and imported both exist

Use when: You want to compare versions or keep both.

## Batch Import

Import multiple files at once:

1. Select multiple files when browsing, or
2. Drag multiple files onto the drop zone
3. All files are processed sequentially
4. Each file follows the selected conflict resolution

## Global Import Drop Zone

Throughout Voxta, you may see "Drop files to import" at the bottom of pages. This global drop zone allows importing from anywhere in the app.

## Post-Import Steps

After importing:

### Verify Content

1. Check Characters list for imported characters
2. Check Scenarios for imported scenarios
3. Review Memory Books for lorebook content

### Configure Imported Content

Imported content may need adjustment:

- **Voice settings** - Assign appropriate TTS voice
- **Model settings** - Select LLM preferences
- **Image assets** - Verify images imported correctly
- **Dependencies** - Ensure referenced content exists

### Test Imported Characters

1. Start a chat with the imported character
2. Verify personality and responses
3. Check lorebook/memory book triggers
4. Adjust settings as needed

## Troubleshooting

### Import Failed

- Check file format is supported
- Verify file isn't corrupted
- Check available disk space
- Review Voxta logs for errors

### Missing Assets

- Some formats don't include all assets
- Character cards may lack voice settings
- Manually configure missing elements

### Character Behaves Differently

- Different LLM models produce different results
- Adjust prompt templates if needed
- Check lorebook entries are active

### Duplicate Content

- Used "Create New" with existing content
- Manually delete duplicates
- Use "Skip" for future imports

## Best Practices

1. **Backup first** - Export existing content before large imports
2. **Start with Skip** - Safest conflict resolution
3. **Test imports** - Verify content works after import
4. **Organize after** - Add imported content to Collections
5. **Update gradually** - Don't overwrite everything at once

## Related Pages

- [Packages](packages.md) - Creating exportable packages
- [Characters](characters.md) - Character management
- [Scenarios](scenarios.md) - Scenario management
- [Asset Formats](asset-formats.md) - Detailed format specifications
- [Collections](collections.md) - Organizing imported content

---

## Related KB Articles

- [Finding and Importing Character Cards](kb/troubleshooting/downloading-character-cards-from-discord-FBGlW_.md)
- [Character Card Import Compatibility](kb/integrations/character-card-import-compatibility-i6xfac.md)
- [Importing Aetherroom Scenarios](kb/configuration/aetherroom-scenario-compatibility-vgV6Uw.md)
