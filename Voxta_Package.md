# Voxta Package Format Specification v1.1

> **Note:** This is a corrected specification based on analysis of actual .voxpkg files.

## Overview

The Voxta Package Format (`.voxpkg`) is a comprehensive character and scenario format designed for interactive AI roleplay and storytelling. It extends beyond simple character cards to include full scenarios with scripting, events, multiple characters, lorebooks, and assets.

## Package Structure

A Voxta package is a ZIP archive with the following directory structure:

```
PackageName.Version.voxpkg (ZIP)
│
├── package.json                    # OPTIONAL: Only in multi-resource packages
│
├── Characters/
│   └── {uuid}/                     # UUID-based directory per character
│       ├── character.json          # Character definition
│       ├── thumbnail.png           # Character portrait
│       └── Assets/
│           └── Avatars/
│               └── Default/
│                   └── {Emotion}_{State}_{Variant}.webp
│
├── Scenarios/
│   └── {uuid}/
│       └── scenario.json           # Scenario definition
│
└── Books/
    └── {uuid}/
        └── book.json               # Lorebook/memory book
```

### Key Observations from Real Files

1. **package.json is OPTIONAL** - Simple single-character packages don't include it
2. **UUIDs are used as directory names** - Each resource has its own UUID folder
3. **No root-level version folder** - Files are at the ZIP root, not in a `package_name.version/` subfolder
4. **Avatar files use strict naming convention** - `{Emotion}_{State}_{Variant}.webp`

---

## File Formats

### 1. Package Metadata (`package.json`) - OPTIONAL

Only present in packages containing multiple resources or scenarios.

```json
{
  "$type": "package",
  "Id": "uuid-v4",
  "Name": "Package Name",
  "Version": "1.0.0",
  "Description": "Package description",
  "Creator": "Creator name",
  "ExplicitContent": false,
  "EntryResource": {
    "Kind": 3,      // 1=Character, 3=Scenario
    "Id": "uuid"    // Entry point resource ID
  },
  "ThumbnailResource": {
    "Kind": 1,
    "Id": "uuid"
  },
  "DateCreated": "2024-01-01T00:00:00.0000000Z",
  "DateModified": "2024-01-01T00:00:00.0000000Z"
}
```

### 2. Character Definition (`character.json`)

```json
{
  "$type": "character",
  "Id": "uuid-v4",
  "Name": "Character Name",
  "Version": "1.0.0",

  // Optional Identifiers
  "Label": "Display Label",           // Can differ from Name
  "PackageId": "uuid",                // Parent package reference

  // Core Character Content
  "Description": "Physical description",
  "Personality": "Personality traits",
  "Profile": "Extended character profile/backstory",
  "Scenario": "Initial scenario context",
  "FirstMessage": "Opening message",
  "MessageExamples": "Example dialogue",
  "CreatorNotes": "Notes from creator",
  "Tags": ["tag1", "tag2"],

  // Prompting
  "SystemPrompt": "System prompt text",
  "PostHistoryInstructions": "Post-history instructions",
  "Instructions": "User instructions",
  "Context": "Additional context",

  // User Overrides
  "UserNameOverride": "Override user name",
  "UserDescriptionOverride": "Override user description",

  // Configuration
  "Culture": "en-US",
  "ChatStyle": 0,                     // 0=default, 3=extended
  "ExplicitContent": false,
  "EnableThinkingSpeech": false,
  "NotifyUserAwayReturn": false,
  "TimeAware": false,
  "UseMemory": false,
  "MaxTokens": 0,                     // 0 = unlimited
  "MaxSentences": 0,                  // 0 = unlimited
  "SystemPromptOverrideType": 0,

  // References
  "MemoryBooks": [],                  // Array of book UUIDs
  "DefaultScenarios": [],             // Array of scenario UUIDs

  // Text-to-Speech
  "TextToSpeech": [
    {
      "Voice": {
        "parameters": {
          "VoiceBackend": "elevenlabs",
          "VoiceId": "voice_id",
          "Filename": "local_file.wav",
          "Gender": "Female"
        },
        "label": "Voice Label"
      },
      "Service": {
        "ServiceName": "ElevenLabs",
        "ServiceId": "service_uuid"
      }
    }
  ],

  // Scripting
  "Scripts": [
    {
      "Name": "index",
      "Content": "import { chat } from \"@voxta\"; ..."
    }
  ],

  // Feature Augmentations
  "Augmentations": [
    "bing",
    "vision",
    "mcp"
  ],

  // Metadata
  "Creator": "Creator name",
  "ImportedFrom": "Source identifier",
  "Thumbnail": {
    "RandomizedETag": "string",
    "ContentType": "image/png"
  },
  "DateCreated": "2024-01-01T00:00:00.0000000Z",
  "DateModified": "2024-01-01T00:00:00.0000000Z"
}
```

### 3. Scenario Definition (`scenario.json`)

```json
{
  "$type": "scenario",
  "Id": "uuid-v4",
  "Name": "Scenario Name",
  "Version": "1.0.0",
  "ParentId": "uuid",          // Optional parent scenario
  "PackageId": "uuid",         // Parent package ID
  "Client": "Voxta.Talk",      // Target client application
  "Creator": "Creator name",
  "Description": "Scenario description",
  "ExplicitContent": false,

  // Scenario Configuration
  "ChatFlow": 0,
  "ChatStyle": 0,
  "SystemPromptOverrideType": 0,
  "SystemPrompt": "",
  "Template": "...",           // Scenario template
  "Messages": "...",           // Pre-defined messages
  "MemoryBooks": [],

  // User Configuration
  "Impersonation": {
    "Name": "User Name",
    "Description": "User description"
  },
  "NarratorCharacterId": "uuid",

  // Role System
  "Roles": [
    {
      "Name": "Role Name",
      "Description": "Role description",
      "DefaultCharacterId": "uuid",
      "EnabledOnStart": true
    }
  ],

  // Scripting System
  "SharedScripts": [
    {
      "Name": "script_name",
      "Content": "// JavaScript/TypeScript code"
    }
  ],

  // Event System
  "Events": [
    {
      "EvaluateNextEvent": false,
      "Name": "event_name",
      "Timing": 0,
      "Description": "Event description",
      "Disabled": false,
      "Once": false,
      "FlagsFilter": "flag_expression",
      "Effect": {
        "SetFlags": ["flag1", "!flag2"],
        "Script": "script_code",
        "MaxSentences": 0,
        "MaxTokens": 0
      }
    }
  ],

  // Actions
  "Actions": [
    {
      "Name": "action_name",
      "Layer": "layer_name",
      "Arguments": [],
      "FinalLayer": false,
      "Timing": 0,
      "Description": "Action description",
      "Disabled": false,
      "Once": false,
      "FlagsFilter": "flag_expression",
      "Effect": {
        "SetFlags": ["flag"],
        "MaxSentences": 0,
        "MaxTokens": 0
      }
    }
  ],

  // Contexts
  "Contexts": [
    {
      "Name": "context_name",
      "Text": "Context text content",
      "Disabled": false,
      "FlagsFilter": "flag_expression",
      "ApplyTo": 0
    }
  ],

  // Metadata
  "Thumbnail": {
    "RandomizedETag": "string",
    "ContentType": "image/png"
  },
  "DateCreated": "2024-01-01T00:00:00.0000000Z",
  "DateModified": "2024-01-01T00:00:00.0000000Z"
}
```

### 4. Lorebook/Memory Book (`book.json`)

```json
{
  "$type": "book",
  "Id": "uuid-v4",
  "PackageId": "uuid",
  "Name": "Book Name",
  "Version": "1.0.0",
  "Description": "Book description",
  "ExplicitContent": false,
  "Creator": "Creator name",

  "Items": [
    {
      "Id": "uuid-v4",
      "Keywords": ["keyword1", "keyword2"],
      "Text": "Entry content",
      "Weight": 100,
      "Deleted": false,
      "CreatedAt": "2024-01-01T00:00:00.0000000Z",
      "LastUpdated": "2024-01-01T00:00:00.0000000Z",
      "DeletedAt": null
    }
  ],

  "DateCreated": "2024-01-01T00:00:00.0000000Z",
  "DateModified": "2024-01-01T00:00:00.0000000Z"
}
```

---

## Avatar Asset Organization

### Overview

Voxta's `Assets/` folder structure is **flexible and script-driven**. Unlike CHARX which has explicit metadata in the `assets[]` array, Voxta relies on:
1. Naming conventions for automatic emotion detection
2. Scripts for custom asset handling
3. The `Default/` subfolder as the conventional location for the primary avatar set

There is no strict metadata file - asset organization can be customized via character scripts.

### Naming Convention

```
{Emotion}_{State}_{Variant}.webp
```

### Emotions (Observed in Real Files)
- Neutral
- Smile
- Laugh
- Love
- Horny
- Angry
- Unhappy
- Cry
- Fear
- Question
- Surprise

### States
- Idle - Default/resting state
- Talking - Active speech animation
- Thinking - Processing/waiting state

### Variants
- 01, 02, 03, etc. (for multiple variations of the same emotion/state)

### Example Files
```
Neutral_Idle_01.webp
Neutral_Talking_01.webp
Neutral_Thinking_01.webp
Smile_Idle_01.webp
Smile_Talking_01.webp
Angry_Idle_01.webp
Cry_Talking_02.webp
```

### Full Path Example
```
Characters/c6fd02f8-a422-43ce-97e9-7e7750ea9943/Assets/Avatars/Default/Smile_Talking_01.webp
```

### Comparison with CHARX Assets

| Aspect | Voxta | CHARX |
|--------|-------|-------|
| Metadata | None (naming convention) | `assets[]` array in card.json |
| Structure | Flexible, script-driven | Defined by `uri` field |
| States | Idle/Talking/Thinking per emotion | Single image per emotion |
| Organization | `Assets/Avatars/Default/` convention | `assets/{type}/images/` convention |

---

## Scripting API

Voxta scenarios support JavaScript/TypeScript scripting:

```javascript
import { chat } from "@voxta";

// Event Handling
chat.addEventListener("start", (e) => {
  // Initialize scenario
});

// Variables (persistent state)
chat.variables.varName = value;
chat.get("varName");
chat.set("varName", value);

// Flags (boolean states)
chat.setFlag("flagName");
chat.unsetFlag("flagName");
chat.hasFlag("flagName");

// Roles (character management)
chat.setRoleEnabled("roleName", boolean);

// Messaging
chat.secret("message");  // Hidden AI context
```

### Flag Conventions
- `p_{character}` - Character presence
- `m_{character}` - First meeting flag
- `rm_{character}` - Relationship meter
- `r_{character}_f` - Friendship status
- `cd_{character}` - Cooldown flag

---

## Character Augmentations

The `Augmentations` array in character.json enables special features:

| Augmentation | Description |
|--------------|-------------|
| `bing` | Web search capability via Bing |
| `vision` | Image recognition and analysis |
| `vision.prompted` | Prompted image analysis |
| `windows_sdk` | Windows SDK integration |
| `continuations_idle_followup` | Automatic idle follow-up messages |
| `think_pass_before_reply` | Character "thinks" before responding |
| `mcp` | Model Context Protocol integration |
| `folderwatcher` | File system monitoring |

---

## ChatStyle Values

| Value | Description |
|-------|-------------|
| `0` | Default style |
| `1` | Unknown |
| `2` | Unknown |
| `3` | Extended/detailed responses |

---

## Resource Kind Values

| Kind | Resource Type |
|------|---------------|
| 1 | Character |
| 3 | Scenario |

---

## Real-World Package Examples

### Simple Character Package (No package.json)
```
2B.1.0.0.voxpkg/
└── Characters/
    └── c6fd02f8-a422-43ce-97e9-7e7750ea9943/
        ├── character.json
        ├── thumbnail.png
        └── Assets/
            └── Avatars/
                └── Default/
                    ├── Neutral_Idle_01.webp
                    ├── Smile_Talking_01.webp
                    └── ... (101 avatar files)
```

### Complex Multi-Resource Package
```
Arcane Alley University.1.4.0.voxpkg/
├── package.json
├── Characters/
│   ├── 30163218-a898-02d7-99b7-65a8e1434236/
│   │   └── character.json
│   ├── 3f6c1054-9115-02c6-2728-c728ee989cc1/
│   │   └── character.json
│   └── ... (15 characters total)
├── Scenarios/
│   └── a5b50431-bd80-d94f-09cc-f9968cb36964/
│       └── scenario.json
└── Books/
    ├── 72c55ffc-f69e-d530-b2fb-4205ad20e18f/
    │   └── book.json
    └── e2affe86-8be6-f429-360a-0460807aee3c/
        └── book.json
```

---

## Corrections from Original Spec

| Original Claim | Actual Behavior |
|----------------|-----------------|
| `package.json` required | Optional, only in multi-resource packages |
| Version folder at root (`package_name.version/`) | Files directly at ZIP root |
| `Character` field in character.json | Does not exist; use `Profile` |
| Resource Kind 2 exists | Not observed |
| `PackageId` in character.json | Optional, not always present |
| Fixed set of emotions | Varies by character, common set listed |

## Fields Added in v1.1 (from standalone character.json analysis)

| Field | Type | Description |
|-------|------|-------------|
| `Label` | string | Display label (can differ from Name) |
| `SystemPrompt` | string | System prompt text |
| `PostHistoryInstructions` | string | Instructions inserted after history |
| `Instructions` | string | User-provided instructions |
| `Context` | string | Additional context |
| `UserNameOverride` | string | Override the user's display name |
| `UserDescriptionOverride` | string | Override the user's description |
| `Creator` | string | Creator name |
| `ImportedFrom` | string | Import source tracking |

---

## Version History

- v1.2 - Added fields from standalone character.json export (SystemPrompt, PostHistoryInstructions, etc.)
- v1.1 - Corrected specification based on analysis of real .voxpkg files
- v1.0 - Initial specification (contained errors)

---

*This specification is derived from analysis of actual Voxta package files and may not cover all edge cases or future additions.*
