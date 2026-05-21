---
id: yRKAGMpBsZGloiMykeqvu
slug: scripting-generatingcomplete-event-yRKAGM
type: reference
title: "Scripting: generatingComplete Event – Usage and appTrigger Example"
topics:
  - scripting
keywords:
  - generatingComplete
  - event
  - listener
  - javascript
  - api
  - appTrigger
  - scriban
  - latest message
confidence: 1
authority: 0.2
contributor: Deleted User
sources: []
created: 2025-12-22T22:48:21.941Z
updated: 2025-12-23T04:27:48.148Z
---

# Scripting: generatingComplete Event – Usage and appTrigger Example

> Documentation and examples for the generatingComplete scripting event, including how to pass the generated message to chat.appTrigger.

## Answer

# generatingComplete Event

The `generatingComplete` event is triggered when the chat finishes generating a reply. It provides access to the generated message and the character who generated it.

## Usage

Add an event listener to the `chat` object:

```javascript
import { chat } from "@voxta";

chat.addEventListener('generatingComplete', (e) => {
    // e contains event details
});
```

The event object `e` has the following properties:
- `e.character`: the character object (includes `name`, etc.)
- `e.message`: the message object (includes `text`, etc.)

## Example: Logging the Reply

```javascript
import { chat } from "@voxta";

chat.addEventListener('generatingComplete', (e) => {
    console.log(`Generated reply from ${e.character.name}: ${e.message.text}`);
});
```

## Example: Passing the Generated Message to appTrigger

If you need to send the latest generated message to an app trigger (for example, to use it in a custom action), you can directly use `e.message.text` inside the event listener. This avoids the complexity of evaluating Scriban templates in JavaScript.

```javascript
import { chat } from "@voxta";

chat.addEventListener('generatingComplete', (e) => {
    // e.message.text contains the text of the generated reply
    chat.appTrigger(`${e.message.text}`);
});
```

This approach ensures that the raw message text is passed correctly, without needing to embed Scriban code.

---

This event is part of the Voxta scripting API.

---

*Extracted from Discord. Primary contributor: Deleted User*