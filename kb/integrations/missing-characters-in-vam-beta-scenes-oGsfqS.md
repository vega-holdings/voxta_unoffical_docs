---
id: oGsfqSLN6SeueK__1z6ro
slug: missing-characters-in-vam-beta-scenes-oGsfqS
type: troubleshooting
title: Handling Missing Characters in Older VAM Scenes
topics:
  - integrations
  - setup
  - troubleshooting
  - characters
keywords:
  - VAM
  - Virt-A-Mate
  - beta scenes
  - characters
  - PNG
  - import
  - missing files
  - var package
  - character import
  - manual import
  - character cards
  - older scenes
  - missing characters
confidence: 0.9
authority: 0.2
contributor: sraura
sources:
  - messageId: "1358143725712314650"
    author: sraura
    timestamp: 2025-12-22T22:33:42.644Z
    url: ""
created: 2025-12-22T22:33:42.644Z
updated: 2025-12-23T04:30:40.393Z
---

# Handling Missing Characters in Older VAM Scenes

> Older VAM (Virt-A-Mate) scenes often lack embedded character data; instead, characters are distributed as separate PNG cards that must be manually imported into Voxta. Newer scenes typically bundle characters automatically.

## Answer

# Handling Missing Characters in Older VAM Scenes

When using older VAM (Virt-A-Mate) Beta scenes, you may encounter missing character files. This is because these scenes often do not include the character data within the `.var` package. Instead, characters are distributed as separate **PNG files** (which contain embedded character data). Newer scenes, especially those from VamHub, usually bundle characters automatically, so no manual import is needed.

## Manual Import Steps

If you have an older scene that requires a character PNG, follow these steps:

1. **Locate the character PNG.** The scene creator may have provided a link to the character file, often in the scene description or on Discord sharing channels.
2. **Download the PNG.** Open the image in a browser, right-click, and select **Save image as**. Ensure the file extension is `.png`.
3. **Import into Voxta.** Open the Voxta Desktop App, go to the Characters section, and import the saved `.png` file.

## Notes

- Character PNGs for many older scenes can be found in dedicated character-sharing channels on Discord (e.g., the official Voxta or VAM communities).
- If you are using a scene from VamHub, the character is likely already included; no manual import is necessary.

---

*Extracted from Discord. Primary contributor: sraura*