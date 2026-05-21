---
id: XXaXam0cvFBARB935IxqO
slug: debugging-vision-context-XXaXam
type: troubleshooting
title: Debugging Vision Context with Inspector
topics:
  - troubleshooting
  - configuration
  - integrations
keywords:
  - Inspector
  - show hidden
  - context
  - vision
  - debug
  - augmentations
  - black screen
  - screen capture
  - game integration
  - diagnostics
confidence: 0.9
authority: 0.2
contributor: acidbubbles
sources:
  - messageId: "1321244812799643739"
    author: acidbubbles
    timestamp: 2025-12-19T03:15:42.973Z
    url: ""
created: 2025-12-19T03:15:42.973Z
updated: 2025-12-23T04:24:54.077Z
---

# Debugging Vision Context with Inspector

> Use the Inspector tab to view the full context sent to the AI, including vision data. This helps verify that the AI is receiving the correct visual information and troubleshoot issues like black screens.

## Answer

# Debugging Vision Context with Inspector

When using vision capabilities, you can inspect exactly what visual context is being sent to the AI. This is useful for verifying that the AI receives the correct screen captures, diagnosing issues like black screens, and confirming that the AI accurately perceives game UI elements or other visual data.

## Prerequisites

Ensure the character profile has the necessary augmentations enabled:
- `vision`
- `vision.prompted`
- `windows_sdk`
- `windows_sdk.active_window`

These augmentations allow the AI to capture and process screen content.

## Steps to Inspect Vision Context

1. Open the **Chat** interface where the AI is interacting.
2. Click on the **Inspector** tab (or the "Inspect" button, depending on your interface).
3. Enable **Show Hidden** (or "show hidden messages") to reveal the full context sent to the AI, including hidden system messages and vision data.
4. Examine the messages and the **Context** section (especially for continuous vision) to see exactly what visual information is being provided.

In the Inspector, you can:
- View the raw messages that include vision attachments or descriptions.
- Check if the AI is receiving a black screen or missing visual data.
- Verify that the correct screen region or window is being captured.

## Additional Notes

- Vision is currently experimental; its behavior and augmentations may change.
- The Inspector method works both in the Playground and in regular chat sessions.
- If you encounter a black screen, ensure the target window is not minimized or obscured, and that the screen capture permissions are granted.

## Example: Verifying Game UI Detection

Users have successfully used this technique to confirm that the AI can accurately describe specific game UI elements, such as items in a Minecraft chest or health status. By inspecting the context, you can see the exact visual data the AI receives and compare it to the AI's responses.

---

*Extracted from Discord. Primary contributor: acidbubbles*