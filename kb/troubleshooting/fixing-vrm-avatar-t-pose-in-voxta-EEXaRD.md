---
id: EEXaRDAdjrZ1wJG7J306O
slug: fixing-vrm-avatar-t-pose-in-voxta-EEXaRD
type: troubleshooting
title: Fixing VRM Avatar T-Pose in Voxta
topics:
  - troubleshooting
  - configuration
keywords:
  - VRM
  - T-pose
  - idle.fbx
  - Mixamo
  - animation
  - folder structure
confidence: 0.9
authority: 0.2
contributor: doctortim
sources:
  - messageId: "1399899520665653331"
    author: doctortim
    timestamp: 2025-12-22T23:24:09.619Z
    url: ""
  - messageId: "1400087494573162587"
    author: doctortim
    timestamp: 2025-12-22T23:24:09.619Z
    url: ""
created: 2025-12-22T23:24:09.619Z
updated: 2025-12-22T23:24:09.619Z
---

# Fixing VRM Avatar T-Pose in Voxta

> Place .vrm and .fbx files in a 'VRM' subfolder to fix T-posing.

## Answer

To fix the T-pose issue for VRM avatars in Voxta (specifically noted for v149+):

1. Ensure you have your `.vrm` avatar file and your animation file (e.g., `idle.fbx` from Mixamo).
2. Create a sub-folder named `VRM` inside your character's asset directory.
3. Move both the `.vrm` file and the `.fbx` file into this `VRM` folder.

This directory structure allows Voxta to correctly apply the idle animation to the avatar.

---

*Extracted from Discord. Primary contributor: doctortim*