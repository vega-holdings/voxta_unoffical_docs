---
id: OvXLPYTqAEY9CzPHZbtDr
slug: managing-character-presence-in-multi-room-scenarios-OvXLPY
type: tip
title: Managing Character Presence in Multi-Room Scenarios
topics:
  - configuration
  - scenarios
keywords:
  - rooms
  - location
  - flags
  - character presence
  - multiple characters
  - context
confidence: 0.8
authority: 0.2
contributor: futurestorm
sources: []
created: 2025-12-22T23:17:23.620Z
updated: 2025-12-22T23:17:23.620Z
---

# Managing Character Presence in Multi-Room Scenarios

> Use flags to track user location and condition character speech/presence based on the active room.

## Answer

To prevent characters in other rooms from speaking or interfering in a chat, you can use **Flags** and **Contexts**.

1.  **Assign Flags to Rooms**: Create flags representing the user's current location (e.g., `room.A`, `room.B`).
2.  **Condition Character Presence**: Set up contexts or conditions so that a specific character is only considered 'present' or allowed to speak when the corresponding room flag is active.
3.  **Manage Transitions**: When moving between rooms, ensure you unset the previous room's flag and set the new one to update character availability dynamically.

---

*Extracted from Discord. Primary contributor: futurestorm*