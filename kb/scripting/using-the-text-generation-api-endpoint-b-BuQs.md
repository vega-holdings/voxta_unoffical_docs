---
id: b-BuQs2qj86q8GyY_xx4b
slug: using-the-text-generation-api-endpoint-b-BuQs
type: qa
title: Using the Text Generation API Endpoint
topics:
  - scripting
  - integrations
keywords:
  - api
  - endpoint
  - text generation
  - custom prompt
  - fetchAPI
confidence: 0.9
authority: 0.2
contributor: a1os353
sources:
  - messageId: "1321431561085648998"
    author: a1os353
    timestamp: 2025-12-19T03:20:52.800Z
    url: ""
created: 2025-12-19T03:20:52.800Z
updated: 2025-12-19T03:20:52.800Z
---

# Using the Text Generation API Endpoint

> How to use /api/text/generate for custom LLM queries.

## Answer

Yes, you can use the `/api/text/generate` endpoint to send custom prompts to the LLM.

Example usage:
```javascript
let requestData = {
    prompt: [
        systemPrompt,
        { role: "User", value: "Text to summarize: " + string },
    ],
    maxTokens: 100,
};

responseText = await fetchAPI(requestData, "/api/text/generate", "POST");
```

---

*Extracted from Discord. Primary contributor: a1os353*