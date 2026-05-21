---
id: ht5aNGG6QESH9qdUx4d3U
slug: fix-could-not-find-prompt-formatting-template-error-ht5aNG
type: troubleshooting
title: "Prompt Formatting Templates: Fixing Missing Template Errors and Creating
  Custom Templates"
topics:
  - troubleshooting
  - configuration
  - llm
keywords:
  - prompt formatting
  - ChatML
  - Formatters.json
  - update
  - migration
  - textgen
  - error
  - templates
  - custom template
  - UI
  - missing button
confidence: 1
authority: 0.2
contributor: caz2727
sources:
  - messageId: "1436260358779179048"
    author: caz2727
    timestamp: 2025-12-22T23:52:32.029Z
    url: ""
  - messageId: "1436752704818122876"
    author: caz2727
    timestamp: 2025-12-22T23:52:32.029Z
    url: ""
created: 2025-12-22T23:52:32.029Z
updated: 2025-12-23T04:29:10.627Z
---

# Prompt Formatting Templates: Fixing Missing Template Errors and Creating Custom Templates

> Resolve the 'Could not find prompt formatting template' error by re-selecting the template, and learn how to manually create custom templates when the UI button is missing.

## Answer

# Managing Prompt Formatting Templates

Prompt formatting templates define how messages are structured before being sent to the LLM. This guide covers two common scenarios: fixing a missing template error and creating custom templates when the UI button is unavailable.

## Fixing "Could not find prompt formatting template" Error

This error typically occurs after copying the `data` folder to a new version of Voxta, causing path references in the settings to become invalid.

**Solution:**

1. Open Voxta and go to **Services** → **Chat Replies (TEXTGEN)** settings.
2. Find the **Prompt Formatting Template** setting.
3. Remove the currently selected template (clear the field or select "None").
4. Re-select your preferred template from the dropdown list of available formats.
5. Save the configuration.

The error should now be resolved, and the LLM will use the correct formatting.

## Creating Custom Prompt Formatting Templates

In some Voxta versions, the "+ Create Prompt Formatting Templates" button may be missing from the UI. You can still create a custom template manually by duplicating an existing template file.

**Manual creation steps:**

1. Navigate to your Voxta installation directory.
2. Locate the folder containing prompt formatting templates (common locations include `data/templates` or `Formatters`; look for files with names like `ChatML.json`, `Alpaca.json`, etc.).
3. Choose an existing template that closely matches your desired format and make a copy of its file.
4. Rename the copy to reflect your custom template (e.g., `MyCustomFormat.json`).
5. Open the new file in a text editor and modify the template structure to meet your LLM's requirements. Refer to Voxta's documentation for the template syntax.
6. Restart Voxta if necessary; your new template should appear in the **Prompt Formatting Template** dropdown list.
7. Select your custom template in the Chat Replies (TEXTGEN) settings as described in the previous section.

**Note:** If the template does not appear, ensure the file is placed in the correct folder and has a valid JSON structure.

By following these instructions, you can resolve template-related issues and extend Voxta's compatibility with any LLM.

---

*Extracted from Discord. Primary contributor: caz2727*