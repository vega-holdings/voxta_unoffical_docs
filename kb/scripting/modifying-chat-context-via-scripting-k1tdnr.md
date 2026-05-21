---
id: k1tdnrek1ux3ReRuiMEYq
slug: modifying-chat-context-via-scripting-k1tdnr
type: qa
title: Modifying Chat Context via Scripting
topics:
  - scripting
keywords:
  - chat.setContext
  - context
  - api
  - dynamic context
confidence: 0.9
authority: 0.2
contributor: pro_kun_vita
sources: []
created: 2025-12-22T23:02:35.947Z
updated: 2025-12-22T23:02:35.947Z
---

# Modifying Chat Context via Scripting

> How to use chat.setContext to modify chat contexts in scripts.

## Answer

Yes, you can use the `chat.setContext` method within Voxta scripts to add, update, or remove contexts dynamically.

### Syntax
```javascript
// Add or update a context
chat.setContext("unique_identifier", "Your context text here");

// Delete a context (set text to empty string)
chat.setContext("unique_identifier", "");
```

---

*Extracted from Discord. Primary contributor: pro_kun_vita*