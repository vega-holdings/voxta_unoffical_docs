---
id: aZRE1eFsxXSPeBXkrZEsD
slug: forcing-character-dialogue-scripting-vs-secrets-aZRE1e
type: tip
title: "Forcing Character Dialogue: Using Scripting Instead of Secrets"
topics:
  - scripting
  - troubleshooting
  - scenarios
keywords:
  - secrets
  - forcing reply
  - chat.roleMessage
  - chat.characterMessage
  - debugging
  - F2
  - logs
  - scripting
  - javascript
  - trigger
  - conditional
confidence: 0.9
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-19T05:21:07.814Z
updated: 2025-12-23T04:30:27.968Z
---

# Forcing Character Dialogue: Using Scripting Instead of Secrets

> To reliably force a character to say a specific line, use Voxta's scripting system (chat.roleMessage or chat.characterMessage) instead of secrets, which are unreliable. You can add conditional logic and debug using F2 logs.

## Answer

# Forcing Character Dialogue: Using Scripting Instead of Secrets

When you need a character to say an exact line, using `{{ secret }}` messages (e.g., "Say X in the next message") can be unreliable. Secrets rely on the LLM's interpretation and may linger in the context window longer than intended.

**Best practice:** Use Voxta's scripting system to force the character to speak exactly what you want programmatically.

## Scripting Basics

Scripts are JavaScript modules that export a `trigger` function. Inside, you can check conditions and use the `chat` object to send messages.

```javascript
import { chat } from "@voxta";

export function trigger(e) {
    // Force the character (using their role name, e.g., 'main') to say specific text
    chat.roleMessage('main', 'The exact text you want the character to speak.');
}
```

Alternatively, you can use `chat.characterMessage` to target a specific character by name:

```javascript
chat.characterMessage('Your specific line here');
```

You can also add conditional logic:

```javascript
if (someCondition) {
    chat.roleMessage('main', 'Conditional line.');
}
```

## Debugging

Press **F2** during a scenario to view the server log. This helps verify when secrets or events are triggered, ensuring your script runs as expected.

## Additional Resources

- [Official scripting documentation](https://doc.voxta.ai/docs/scripting/) for more methods and details.

---

*Extracted from Discord. Primary contributor: sraura*