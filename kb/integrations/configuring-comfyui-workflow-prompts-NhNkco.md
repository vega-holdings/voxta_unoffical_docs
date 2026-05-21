---
id: NhNkcoQqO1ictZlpiMCN1
slug: configuring-comfyui-workflow-prompts-NhNkco
type: qa
title: Configuring ComfyUI Workflow Prompts
topics:
  - integrations
  - configuration
keywords:
  - ComfyUI
  - image generation
  - workflow
  - api
  - node id
  - prompts
confidence: 0.8
authority: 0.2
contributor: djsoapyknuckles
sources:
  - messageId: "1413161240917704846"
    author: djsoapyknuckles
    timestamp: 2025-12-22T23:29:14.040Z
    url: ""
  - messageId: "1413292080360456202"
    author: djsoapyknuckles
    timestamp: 2025-12-22T23:29:14.040Z
    url: ""
created: 2025-12-22T23:29:14.040Z
updated: 2025-12-22T23:29:14.040Z
---

# Configuring ComfyUI Workflow Prompts

> Map ComfyUI Node IDs in Voxta configuration to allow dynamic prompt injection.

## Answer

Yes, Voxta fills the prompts dynamically. You must map the specific Node IDs from your ComfyUI workflow in Voxta's configuration to tell Voxta where to inject the text.

For example, if your positive prompt node ID is `81` and negative is `7`, the configuration in Voxta maps these IDs:

```json
"positive": [
        "81",
        0
      ],
"negative": [
        "7",
        0
      ],
```

---

*Extracted from Discord. Primary contributor: djsoapyknuckles*