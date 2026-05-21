---
id: jfaX-t6gF-7J53FZNNGAX
slug: changing-character-avatar-via-script-jfaX-t
type: qa
title: "Dynamic Avatar Switching: Scripting and Automatic Emotions"
topics:
  - scripting
  - configuration
keywords:
  - SetAvatar
  - appTrigger
  - avatar
  - image
  - script
  - assets
  - chat.variables
  - dynamic avatar
  - Catherine
  - scenario
  - emotions
  - naming convention
  - scenario script
  - customization
  - portraits
  - action inference
  - automatic
  - character card
confidence: 1
authority: 0.2
contributor: .frond
sources: []
created: 2025-12-22T22:40:12.605Z
updated: 2025-12-23T04:11:23.211Z
---

# Dynamic Avatar Switching: Scripting and Automatic Emotions

> Learn how to change a character's avatar dynamically using scripts or automatic emotion inference. Covers the SetAvatar app trigger, persistent variables, asset patterns, and customizing the emotion logic via scenario scripts.

## Answer

# Dynamic Avatar Switching

Voxta allows you to change a character's displayed avatar image dynamically, either automatically based on inferred emotions or manually via custom scripts. This guide covers both approaches.

## Automatic Avatar Switching (Emotion Inference)

The Voxta UI includes a built-in scenario that automatically switches avatars based on the character's emotional state. This system uses action inference to classify the character's response and selects an image matching that emotion.

### Configuration Steps

1. Open your character card.
2. Go to the **Configuration** tab and set **Avatars** to `Automatic`.
3. In the **Assets** tab, upload your avatar images following the required naming convention and folder structure.

### Naming Convention and Folder Structure

By default, the scenario script looks for images with the pattern `Emote_State_Number.jpeg` (or `.png`). For example, `Happy_State_1.png`, `Angry_State_2.png`, etc. The exact list of emotions is defined in the scenario script.

To understand the expected structure, examine the built-in **Catherine** character:
- Check Catherine's **Assets** tab.
- Open the folder path in your file explorer.
- Reproduce a similar folder hierarchy and naming for your own character.

### Customizing the Emotion Logic

The automatic switching logic is defined in the **Voxta UI scenario script**, not in the core application. To modify the list of emotions or the file naming pattern:

1. Duplicate the **Voxta UI scenario** (or create your own).
2. Edit the scenario script to add/remove emotions or change the pattern matching.
3. Ensure your character's assets match your new conventions.

For advanced customization, refer to the scripting section below.

## Manual Avatar Control via Scripts

You can change avatars programmatically using the `SetAvatar` app trigger in custom scripts. Scripts are typically placed in the **Scenarios** section of the Voxta UI.

### Basic Usage

Call `chat.appTrigger('SetAvatar', path)` where `path` is the relative path to an image file inside the character's assets folder.

```javascript
import { chat } from "@voxta";

export function trigger(e) {
  // Change to 'Avatars/Laugh.png' (relative to character folder)
  chat.appTrigger("SetAvatar", "Avatars/Laugh.png");
}
```

If you are in a multi-character chat, specify the character ID as the third argument:

```javascript
chat.appTrigger("SetAvatar", "Avatars/Laugh.png", characterId);
```

### Using Persistent Variables and Assets

For more advanced control, you can store avatar preferences in persistent variables and use the character's `assets` object to pick images.

The following script sets a persistent folder for the main character and immediately updates the avatar to a random "Idle" image from that folder.

```javascript
import { chat } from "@voxta";

export function trigger(e) {
  // Get the main character (first in the list)
  const char = chat.characters[0];
  const folder = 'Default'; // folder name under Avatars

  // Save the folder preference persistently (accessible across sessions)
  chat.variables['avatars_' + char.Id] = folder;

  // Pick a random asset matching the pattern: Avatars/{folder}/.*Idle.*
  const image = char.assets.oneOf(`Avatars/${folder}/.*Idle.*`);

  // Update the avatar immediately
  chat.appTrigger('SetAvatar', image, char.Id);
}
```

- `chat.variables` stores data that persists between chat sessions.
- `char.assets.oneOf(pattern)` returns a random asset path that matches the regular expression pattern. The pattern is relative to the character's assets folder.

### Randomizing Avatar from a List

You can also randomize the avatar from a predefined list of filenames. This example changes the avatar on chat start and each time the character starts speaking.

**index.js**
```javascript
import { chat } from "@voxta";
import { pics } from "./pics";

chat.addEventListener("start", (e) => {
  updatePic();
});
chat.addEventListener("speechStart", (e) => {
  updatePic();
});

function updatePic() {
  const picname = pics[Math.floor(Math.random() * pics.length)];
  chat.appTrigger("SetAvatar", `Pics/${picname}`);
}
```

**pics.js**
```javascript
export const pics = [
  "1.png",
  "2.png",
  // add more filenames
];
```

Place your images in a subfolder (e.g., `Pics`) inside the character's assets directory.

## Real-World Example: Catherine Scenario

For a complete implementation, clone the built-in **Catherine** scenario and inspect its scripts. It demonstrates both automatic emotion-based switching and manual overrides.

## Notes

- All image paths are relative to the character's assets folder. Ensure the files exist and are correctly referenced.
- The `SetAvatar` trigger updates the avatar displayed in the UI immediately.
- Use `chat.variables` to store preferences that should survive reloads.
- For multi-character chats, always specify the character ID when calling `appTrigger`.
- To customize the automatic emotion system, duplicate and edit the Voxta UI scenario script.

---

*Extracted from Discord. Primary contributor: .frond*