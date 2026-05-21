---
id: fKCkAvkmeCxeXQQmu29cq
slug: continuous-vision-functionality-on-windows-vs-mac-fKCkAv
type: troubleshooting
title: Continuous Vision functionality on Windows vs Mac
topics:
  - troubleshooting
  - integrations
keywords:
  - continuous vision
  - windows sdk
  - mac
  - vision capture
  - bug
  - browser capture
confidence: 0.8
authority: 0.2
contributor: hotchick21.
sources:
  - messageId: "1333097202813370481"
    author: hotchick21.
    timestamp: 2025-12-22T19:53:30.535Z
    url: ""
  - messageId: "1333100537209552936"
    author: hotchick21.
    timestamp: 2025-12-22T19:53:30.535Z
    url: ""
  - messageId: "1333101290946957322"
    author: hotchick21.
    timestamp: 2025-12-22T19:53:30.535Z
    url: ""
  - messageId: "1333103831315255338"
    author: hotchick21.
    timestamp: 2025-12-22T19:53:30.535Z
    url: ""
created: 2025-12-22T19:53:30.535Z
updated: 2025-12-22T19:53:30.535Z
---

# Continuous Vision functionality on Windows vs Mac

> Continuous vision is currently broken on Windows due to an SDK bug but works on Mac via browser capture.

## Answer

## Windows
Continuous vision is currently reported as broken on Windows due to a UI bug that prevents the **Windows SDK** from activating. This is a known issue reported in the bug tracking channels and is expected to be resolved in a future build.

## Mac
Continuous vision functions differently on Mac and should work correctly. It utilizes the browser for vision capture rather than the Windows SDK. You can verify it is working by checking the inspector to see if the context is updating.

---

*Extracted from Discord. Primary contributor: hotchick21.*