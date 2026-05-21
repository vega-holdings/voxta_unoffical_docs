---
id: iA0W3feQHIvbZvQiGTmZb
slug: importing-vrm-avatars-into-voxy-desktop-companion-iA0W3f
type: tip
title: Importing and Using Custom VRM Avatars in Voxy
topics:
  - configuration
  - setup
  - integrations
keywords:
  - Voxy
  - VRM
  - avatar
  - import
  - VRoid Studio
  - rigging
  - character
  - Voxta
confidence: 0.8
authority: 0.2
contributor: djsoapyknuckles
sources: []
created: 2025-12-22T23:41:15.472Z
updated: 2025-12-23T13:49:18.295Z
---

# Importing and Using Custom VRM Avatars in Voxy

> Voxy Desktop Companion supports the VRM file format for avatars, which includes all necessary rigging and textures. You can import custom models by placing `.vrm` files in the application's data folder and assigning them to characters within the app.

## Answer

# Importing and Using Custom VRM Avatars in Voxy

Voxy uses the **VRM** file format for avatars. A key advantage of this format is that it is a self-contained package including the mesh, rig, textures, and other metadata. You do not need to perform manual rigging or modifications; if you have a `.vrm` file, it is ready to use immediately in Voxy.

## Obtaining VRM Avatars

You can acquire VRM models through the following methods:

*   **Create your own:** Use [VRoid Studio](https://vroid.com/en/studio) (available on Steam) to design a custom model.
*   **Download models:** Browse free or paid models on [VRoid Hub](https://hub.vroid.com/).
*   **Convert existing models:** Convert VRChat models to VRM using Blender. Note that this process requires advanced 3D modeling knowledge.

## Adding VRM Files to Voxy

To make your avatars available in the application, follow these steps:

1.  Locate your Voxy Desktop Companion installation folder (the directory where you unzipped `voxy-desktop-companion`).
2.  Open the `_Data` folder.
3.  Open the `VRM` folder.
4.  Copy your `.vrm` files into this folder.

## Assigning an Avatar to a Character

Once the files are imported, assign them to a character via the interface:

1.  Launch Voxy.
2.  Click on an existing character to open its menu.
3.  Select your desired VRM model from the avatar list.

The character will now update to display your custom avatar.

## Additional Resources

For visual guidance on importing, movement, and animation, you can find official video guides and tutorials for Voxta and Voxy on the [official Voxta YouTube channel](https://www.youtube.com/@VoxtaAI).

---

*Extracted from Discord. Primary contributor: djsoapyknuckles*