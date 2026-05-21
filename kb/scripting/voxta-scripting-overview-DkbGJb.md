---
id: DkbGJb6iA4N57NQ2_pOXZ
slug: voxta-scripting-overview-DkbGJb
type: reference
title: Voxta Scripting Overview
topics:
  - scripting
keywords:
  - javascript
  - events
  - trigger
  - persistence
  - chat object
confidence: 0.9
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T22:43:28.118Z
updated: 2025-12-22T22:43:28.118Z
---

# Voxta Scripting Overview

> Overview of Voxta scripting, including state persistence, event listeners, and customization of example code.

## Answer

Voxta supports JavaScript modules for scripting scenarios, events, and actions. Scripts interact with the application via the `chat` object imported from `@voxta`.

### Key Concepts
- **State Persistence**: Scripts live for the chat instance duration. Use `chat.setFlags()` and `chat.variables` to persist data across sessions.
- **Triggers**: Scripts must export a `trigger` function for actions.
- **Events**: Use `chat.addEventListener(event, callback)` to listen for events like `init`, `start`, `userMessageReceived`, `generating`, and `transcriptionStarted`.

### Usage Tip
Documentation examples often use `console.log` to demonstrate event flow. Users should replace these logging statements with custom logic to interact with the chat or modify state.

---

*Extracted from Discord. Primary contributor: sraura*