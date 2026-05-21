---
id: zL64SW7drBF1_6SXbO5nx
slug: converting-mp4-to-webp-for-character-avatars-zL64SW
type: troubleshooting
title: Converting MP4 to WebP for Character Avatars
topics:
  - configuration
  - troubleshooting
keywords:
  - avatar
  - webp
  - mp4
  - ffmpeg
  - conversion
  - animation
  - video
confidence: 0.8
authority: 0.2
contributor: pertily
sources:
  - messageId: "1400315014929190962"
    author: pertily
    timestamp: 2025-12-22T23:24:38.189Z
    url: ""
created: 2025-12-22T23:24:38.189Z
updated: 2025-12-22T23:24:38.189Z
---

# Converting MP4 to WebP for Character Avatars

> FFmpeg command to convert MP4 to WebP for Voxta avatars.

## Answer

If the Voxta UI restricts avatar selection to WebP files, you can convert your MP4 videos using `ffmpeg`. 

The following command optimizes the output for Voxta (adjusting FPS, scale, and looping):
```bash
ffmpeg -i input.mp4 -vf "fps=20,scale=384:576" -an -q:v 90 -loop 0 output.webp
```

**Parameters:**
- `fps=20`: Sets frame rate to 20.
- `scale=384:576`: Resizes to a portrait aspect ratio suitable for cards.
- `-an`: Removes audio.
- `-q:v 90`: Sets quality.
- `-loop 0`: Enables infinite looping.

---

*Extracted from Discord. Primary contributor: pertily*