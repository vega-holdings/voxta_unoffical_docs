---
id: BLdADdV4eT5chfr4pg87q
slug: action-timing-for-user-intent-BLdADd
type: tip
title: Using 'After User' Timing for Actions Based on User Input
topics:
  - configuration
  - troubleshooting
  - scripting
keywords:
  - actions
  - timing
  - inference
  - after user
  - after char
  - user action
  - navigation
  - room movement
confidence: 0.9
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T22:48:52.648Z
updated: 2025-12-23T04:30:33.510Z
---

# Using 'After User' Timing for Actions Based on User Input

> Set Action timing to 'After User' when you need to trigger actions based on the user's immediate input, such as detecting intent or handling navigation. This ensures the inference runs before the character replies and avoids failures that can occur with 'After Char' timing.

## Answer

# Action Timing: After User vs After Char

When configuring Actions, the **timing** setting determines when the action inference runs relative to the conversation flow.

- **After User**: Runs immediately after the user sends a message and before the character replies. Use this for conditions that check what the user just said or did (e.g., "When {{ user }} wants to sit").
- **After Char**: Runs after the character has replied. This is suitable for actions that depend on the character's response.

## When to Use After User

- Checking user intent from the latest message.
- Handling navigation or environmental changes driven by user commands (e.g., "go to the kitchen").
- Any action that should be triggered directly by the user's input.

## Why After Char May Fail for User Intent

If you attempt to check user intent during the **After Char** phase, the action inference will likely fail to trigger. This is because the context of the user's immediate input is less prioritized or passed differently after the character has already replied.

## Example Usage

The "Kally" scenario uses **After User** timing to handle room movement based on user prompts, demonstrating how this setting enables seamless navigation in interactive stories.

---

*Extracted from Discord. Primary contributor: sraura*