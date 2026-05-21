---
id: qEtu53Bc3WDUtRu4Eh5JN
slug: whisper-local-stops-working-after-changing-services-qEtu53
type: troubleshooting
title: Whisper (Local) stops working after changing services
topics:
  - troubleshooting
  - integrations
keywords:
  - Whisper
  - Local
  - STT
  - bug
  - toggle
  - service change
  - 1.1.0
  - transcription
confidence: 0.9
authority: 0.2
contributor: lapiro
sources:
  - messageId: "1436290836416696380"
    author: lapiro
    timestamp: 2025-12-22T23:52:34.652Z
    url: ""
  - messageId: "1437200743328252064"
    author: lapiro
    timestamp: 2025-12-22T23:52:34.652Z
    url: ""
  - messageId: "1437235516859875409"
    author: lapiro
    timestamp: 2025-12-22T23:52:34.652Z
    url: ""
created: 2025-12-22T23:52:34.652Z
updated: 2025-12-22T23:52:34.652Z
---

# Whisper (Local) stops working after changing services

> Whisper (Local) requires a restart after service changes in Voxta 1.1.0; a fix is pending.

## Answer

This is a known bug in Voxta 1.1.0 where changing services (such as switching Textgen services or ComfyUI presets) causes Whisper (Local) to stop transcribing until the Speech-to-Text service is toggled off and on. The issue has been identified and fixed by the developers, with the solution expected to be deployed in an upcoming hotfix.

---

*Extracted from Discord. Primary contributor: lapiro*