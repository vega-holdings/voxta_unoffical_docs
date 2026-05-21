---
id: DC2S9eubdwjCg4d9ZqiDD
slug: visibility-of-action-inference-text-DC2S9e
type: qa
title: Visibility of Action Inference Text
topics:
  - llm
  - troubleshooting
  - integrations
keywords:
  - action inference
  - kobold
  - console
  - diagnostics
  - reasoning
  - vam
  - voxy
confidence: 0.9
authority: 0.2
contributor: acidbubbles
sources:
  - messageId: "1368585747598151810"
    author: acidbubbles
    timestamp: 2025-12-22T22:40:16.806Z
    url: ""
created: 2025-12-22T22:40:16.806Z
updated: 2025-12-22T22:40:16.806Z
---

# Visibility of Action Inference Text

> Console text describing character intent is Action Inference data, viewable in Diagnostics but not as chat messages.

## Answer

The text observed in the console is likely part of **Action Inference**, which Voxta uses to determine appropriate emotes or actions (such as for VAM or Voxy integrations). This text is generated separately from the dialogue and is not intended for display in the chat window. To view active contexts and other internal states, you can check the **Diagnostics** panel.

---

*Extracted from Discord. Primary contributor: acidbubbles*