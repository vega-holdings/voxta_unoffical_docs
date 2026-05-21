---
id: MnRgr6LvLy7ZkvBc7gSYI
slug: generating-character-backstory-with-story-writer-MnRgr6
type: qa
title: Generating Character Backstory with Story Writer
topics:
  - scripting
  - llm
keywords:
  - backstory
  - secret
  - story writer
  - customMessage
  - generation
  - history
confidence: 1
authority: 0.2
contributor: sraura
sources:
  - messageId: "1352721912396120097"
    author: sraura
    timestamp: 2025-12-22T21:40:29.007Z
    url: ""
  - messageId: "1352723270914543698"
    author: sraura
    timestamp: 2025-12-22T21:40:29.007Z
    url: ""
created: 2025-12-22T21:40:29.007Z
updated: 2025-12-22T21:40:29.007Z
---

# Generating Character Backstory with Story Writer

> Use a custom Secret message with the Story Writer enabled to generate hidden character backstory or reasoning.

## Answer

Yes, you can use a custom message configured as a `Secret` combined with the `Story Writer`. This allows you to prompt the AI to generate hidden content (like a backstory) which enters the context without being spoken aloud.

### Scripting Approach
Use `chat.customMessage` with `role: 'Secret'` and `useStoryWriter: true`.

```javascript
export function trigger(e) {
    chat.customMessage({
        role: 'Secret',
        text: 'Generate a detailed backstory explaining why the character loves oranges...',
        useStoryWriter: true,
        maxNewTokens: 200,
        triggerReply: false // Set to true if you want the character to react to this new info immediately
    });
}
```

### Slash Command Approach
You can also test this manually in chat:
```
/message --role Secret --use-story-writer -- Generate a backstory for why the character loves oranges.
```

---

*Extracted from Discord. Primary contributor: sraura*