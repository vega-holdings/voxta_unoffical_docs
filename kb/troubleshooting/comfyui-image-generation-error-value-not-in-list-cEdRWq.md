---
id: cEdRWqiLe3DBWdOXFSs0a
slug: comfyui-image-generation-error-value-not-in-list-cEdRWq
type: troubleshooting
title: "ComfyUI Image Generation Error: Value not in list"
topics:
  - troubleshooting
  - integrations
keywords:
  - ComfyUI
  - image generation
  - prompt_outputs_failed_validation
  - ckpt_name
  - lora_name
  - safetensors
  - missing model
confidence: 0.9
authority: 0.2
contributor: themickey_
sources:
  - messageId: "1424954404808687736"
    author: themickey_
    timestamp: 2025-12-22T23:35:02.504Z
    url: ""
  - messageId: "1424978966653177876"
    author: themickey_
    timestamp: 2025-12-22T23:35:02.504Z
    url: ""
created: 2025-12-22T23:35:02.504Z
updated: 2025-12-22T23:35:02.504Z
---

# ComfyUI Image Generation Error: Value not in list

> Fixes 'Value not in list' errors in ComfyUI by ensuring models and LoRAs are in the correct directories.

## Answer

This error occurs when ComfyUI cannot find the specified model (checkpoint) or LoRA files required by the workflow.

**Solution:**
1. Ensure the required model files (e.g., `.safetensors`) are downloaded.
2. Place checkpoint files in the `ComfyUI/models/checkpoints` directory.
3. Place LoRA files in the `ComfyUI/models/loras` directory.
4. Verify that the filenames match exactly what the workflow expects.

It is recommended to test the workflow directly within the ComfyUI web interface to ensure all assets are loaded correctly before triggering it through Voxta.

---

*Extracted from Discord. Primary contributor: themickey_*