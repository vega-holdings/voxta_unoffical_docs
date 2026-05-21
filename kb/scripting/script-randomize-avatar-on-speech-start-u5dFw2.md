---
id: u5dFw2znMXd51FcVmmcyh
slug: script-randomize-avatar-on-speech-start-u5dFw2
type: tip
title: Randomizing Avatars and Backgrounds in Scripts
topics:
  - scripting
  - configuration
keywords:
  - avatar
  - background
  - random
  - SetAvatar
  - SetBackground
  - oneOf
  - oneOrNoneOf
  - speechStart
  - appTrigger
  - assets
confidence: 0.8
authority: 0.2
contributor: .frond
sources:
  - messageId: "1332263633673261086"
    author: .frond
    timestamp: 2025-12-19T05:37:20.579Z
    url: ""
created: 2025-12-19T05:37:20.579Z
updated: 2025-12-23T13:59:02.758Z
---

# Randomizing Avatars and Backgrounds in Scripts

> You can randomize character avatars and backgrounds using scripts by utilizing asset helper methods like `oneOf` or by manually selecting from arrays during specific events like `speechStart`.

## Answer

You can randomize avatars or backgrounds in your scripts using two primary methods: using built-in asset helper functions for cleaner code, or manually defining arrays and event listeners for specific timing requirements.

### Method 1: Using Asset Helpers (Recommended)
The most efficient way to randomize assets is by naming files with a common prefix (e.g., `laughing1`, `laughing_2`) and using the `oneOf` or `oneOrNoneOf` helper methods on the asset objects.

#### Random Avatar
This example selects a random asset matching 'laughing' from the character's assets.

```javascript
import { chat } from "@voxta";

export function trigger(e) {
  // Selects a random asset matching 'laughing' from character assets
  chat.appTrigger("SetAvatar", e.character.assets.oneOf("laughing"));
}
```

#### Random Background
This example selects a random background matching 'living_' from the scenario assets. The `oneOrNoneOf` method acts as a failsafe if no match is found.

> **Note:** Backgrounds currently support pictures only, not MP4s.

```javascript
import { chat } from "@voxta";

export function trigger(e) {
  // Selects a random background matching 'living_' from scenario assets
  chat.appTrigger("SetBackground", chat.scenario.assets.oneOrNoneOf("Backgrounds/living_"));
}
```

### Method 2: Manual Randomization on Speech Start
If you need to change the avatar specifically in response to an event—such as when the character starts speaking—you can use an event listener with a manual array of filenames.

```javascript
import { chat } from "@voxta";

export function trigger(e) {
  const avatars = [
    "Def_1.png",
    "Def_2.png",
    "Def_3.png"
  ];
  
  // Event listener for when speech audio begins
  chat.addEventListener("speechStart", (e) => {
    const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];
    // Assumes images are located in the character's Avatars folder
    chat.appTrigger("SetAvatar", `Avatars/${randomAvatar}`);
  });
}
```

---

*Extracted from Discord. Primary contributor: .frond*