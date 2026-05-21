---
id: kWyg9gAphSPWvAWp5tC1m
slug: florence-2-vision-model-errors-kWyg9g
type: troubleshooting
title: Troubleshooting Florence-2 Vision Module Errors
topics:
  - troubleshooting
  - integrations
keywords:
  - Florence-2
  - vision
  - run_server.py
  - KoboldCpp
  - error
  - capture
  - screen
confidence: 0.8
authority: 0.2
contributor: lapiro
sources:
  - messageId: "1411765718973808690"
    author: lapiro
    timestamp: 2025-12-22T23:28:50.418Z
    url: ""
  - messageId: "1411951525466476575"
    author: lapiro
    timestamp: 2025-12-22T23:28:50.418Z
    url: ""
created: 2025-12-22T23:28:50.418Z
updated: 2025-12-23T04:40:08.577Z
---

# Troubleshooting Florence-2 Vision Module Errors

> If the Florence-2 vision module fails or the /capture command is unresponsive, you can either patch the module by replacing run_server.py or switch to KoboldCpp as an alternative backend.

## Answer

# Troubleshooting Florence-2 Vision Module Errors

Users have reported issues with the Florence-2 vision module, including unresponsiveness or failure of the `/capture` command. Two primary workarounds are available:

## Option 1: Patch the Module

Replace the `run_server.py` file located in `Data\Python\modules\florence2` with a fixed version. The fixed file is often shared in community support threads.

## Option 2: Switch to KoboldCpp

Use KoboldCpp as an alternative backend for vision tasks. This can provide more stable vision capabilities if Florence-2 continues to cause problems.

These solutions are community-tested and may resolve the errors.

---

*Extracted from Discord. Primary contributor: lapiro*