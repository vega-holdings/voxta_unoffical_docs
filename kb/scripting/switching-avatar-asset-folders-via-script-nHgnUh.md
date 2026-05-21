---
id: nHgnUhPCH_hvfvjLBo18x
slug: switching-avatar-asset-folders-via-script-nHgnUh
type: qa
title: Switching Avatar Asset Folders via Script
topics:
  - scripting
  - configuration
keywords:
  - avatar
  - assets
  - folders
  - sfw
  - nsfw
  - script
  - setAvatarFolder
confidence: 0.8
authority: 0.2
contributor: .frond
sources:
  - messageId: "1451087524104507563"
    author: .frond
    timestamp: 2025-12-23T00:01:56.435Z
    url: ""
created: 2025-12-23T00:01:56.435Z
updated: 2025-12-23T00:01:56.435Z
---

# Switching Avatar Asset Folders via Script

> How to switch between character asset subfolders using a script.

## Answer

Yes, you can organize character assets into subfolders (e.g., "Default", "Naked") within the character's asset directory and switch between them using a script trigger.

```javascript
import { setAvatarFolder } from './api';

export function trigger(e) {
    // Switches the folder state to 'Default'
    setAvatarFolder(e.character, 'Default');
}
```

*Note: This example imports `setAvatarFolder` from a local `./api` file, which is common in standard Voxta scenarios but may need to be defined or copied into your scenario scripts if missing.*

---

*Extracted from Discord. Primary contributor: .frond*