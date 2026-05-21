---
id: G72VcJVJ8ZYqBzv7eNL36
slug: troubleshooting-generated-text-is-empty-error-with-kobold-G72VcJ
type: troubleshooting
title: Troubleshooting 'Generated text is empty' Errors
topics:
  - troubleshooting
  - llm
keywords:
  - InvalidOperationException
  - SystemInvalidOperationException
  - empty response
  - diagnostics
  - reply prefixing
  - Kobold
  - text generation
confidence: 0.8
authority: 0.2
contributor: sraura
sources:
  - messageId: "1351138020707008542"
    author: sraura
    timestamp: 2025-12-22T21:36:01.119Z
    url: ""
created: 2025-12-22T21:36:01.119Z
updated: 2025-12-23T14:00:05.724Z
---

# Troubleshooting 'Generated text is empty' Errors

> Steps to diagnose and resolve empty text generation errors by inspecting raw responses in Diagnostics and adjusting configuration settings like Reply Prefixing.

## Answer

This error indicates that Voxta received an empty response from the LLM backend (such as Kobold), causing the chat to hang. If the model works correctly in the backend's WebUI, the issue is likely related to Voxta's configuration or parsing.

### Troubleshooting Steps

1. **Inspect Raw Response in Diagnostics**
   Use the **Diagnostics** feature (found in the left-hand menu or the Text Gen tab) during a chat to view the raw reply from the LLM.
   - **If the raw reply is empty:** The issue likely stems from the backend settings or context limits (e.g., Kobold configuration).
   - **If the raw reply contains text but Voxta reports it as empty:** The issue is likely in Voxta's parsing settings or specific prompt formatting.

2. **Check Voxta Configuration**
   Review the following settings in **Manage Modules** or the relevant configuration panel:
   - **Reply Prefixing:** Try disabling **Reply Prefixing** to see if it resolves the issue.
   - **Text Gen Presets:** Ensure presets are compatible with your model.
   - **Context Size:** Incorrect values can cause generation to fail or be filtered out.

---

*Extracted from Discord. Primary contributor: sraura*