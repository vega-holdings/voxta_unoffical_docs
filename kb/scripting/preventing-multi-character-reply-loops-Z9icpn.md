---
id: Z9icpniFsNPsh5OfKL_ki
slug: preventing-multi-character-reply-loops-Z9icpn
type: troubleshooting
title: Controlling Chat Flow with Scripts to Prevent Multi-Character Reply Loops
topics:
  - scripting
  - troubleshooting
  - scenarios
  - configuration
keywords:
  - chatFlow
  - chat flow
  - multi-character
  - reply loop
  - force turn
  - after char
  - force speaker
  - events
  - scripting
confidence: 0.9
authority: 0.2
contributor: sraura
sources:
  - messageId: "1337245287093108797"
    author: sraura
    timestamp: 2025-12-22T20:26:08.820Z
    url: ""
created: 2025-12-22T20:26:08.820Z
updated: 2025-12-23T04:35:41.566Z
---

# Controlling Chat Flow with Scripts to Prevent Multi-Character Reply Loops

> Use the `e.chatFlow()` method in an event script to force the next speaker to be the user or a specific character, preventing endless reply loops in multi-character scenarios.

## Answer

# Controlling Chat Flow to Prevent Multi-Character Reply Loops

In multi-character scenarios, characters may sometimes continue replying to each other without waiting for user input, creating an endless loop. To control the turn order and ensure the user gets a chance to speak, you can use the `chatFlow` method within an event script.

## How to Use chatFlow

1. **Create an event** that triggers under the desired conditions. Common triggers:
   - **After Char**: to force the next turn to be the user immediately after a character speaks.
   - Other triggers like message count, specific flags, or custom conditions can also be used.

2. **Attach a script** to the event with the following code:

```javascript
import { chat } from "@voxta";

export function trigger(e) {
    // Force the next reply to be from the user
    e.chatFlow(chat.user);
    
    // Alternatively, force a specific character role
    // e.chatFlow(chat.roles.main);
}
```

3. **Save and enable** the event. The script will execute when the event triggers, setting the next speaker.

## Example: Preventing Reply Loops

To stop characters from chaining replies, create an event with the timing set to **After Char** and use the script above. This ensures that after a character speaks, the system waits for user input instead of automatically generating another character response.

## Additional Notes

- The `chatFlow` method accepts either `chat.user` (to give the turn to the user) or a specific character role (e.g., `chat.roles.main`).
- You can combine this with other event conditions to create more complex flow control.
- This technique is part of Voxta's scripting API, which allows extensive customization of chat behavior.

---

*Extracted from Discord. Primary contributor: sraura*