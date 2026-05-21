---
id: wDeirELIGgFk-y7u52kro
slug: conditionally-rendering-profile-content-with-scriban-wDeirE
type: tip
title: Conditionally Rendering Profile Content with Scriban
topics:
  - scripting
  - configuration
  - llm
keywords:
  - scriban
  - dynamic profile
  - context
  - flags
  - conditional text
  - tokens
confidence: 0.9
authority: 0.2
contributor: pro_kun_vita
sources:
  - messageId: "1374598709630865470"
    author: pro_kun_vita
    timestamp: 2025-12-22T22:58:16.584Z
    url: ""
  - messageId: "1374678008165830717"
    author: pro_kun_vita
    timestamp: 2025-12-22T22:58:16.584Z
    url: ""
  - messageId: "1377127286888992879"
    author: pro_kun_vita
    timestamp: 2025-12-22T22:58:16.584Z
    url: ""
created: 2025-12-22T22:58:16.584Z
updated: 2025-12-22T22:58:16.584Z
---

# Conditionally Rendering Profile Content with Scriban

> Use Scriban templates to conditionally render parts of a character profile based on context or flags.

## Answer

You can dynamically enable or disable sections of a character profile, scenario, or system prompt using Scriban templating. This is useful for saving tokens or avoiding prompt pollution by only including text when specific conditions are met (e.g., specific flags or context keywords).

### Example: Toggling content based on a Context keyword
```scriban
{{~ has_keyword = false ~}}
{{~ if context && !context.empty? ~}}
{{~ for item in context ~}}
  {{~ if item | string.contains "[YOUR KEYWORD]" ~}}
    {{~ has_keyword = true ~}}
    {{~ break ~}}
  {{~ end ~}}
{{~ end ~}}
{{~ end ~}}

{{~ if has_keyword ~}}
    [CONTENT TO SHOW IF KEYWORD EXISTS]
{{~ else ~}}
    [CONTENT TO SHOW IF KEYWORD IS MISSING]
{{~ end ~}}
```

**Note:** Ensure variable names (like `has_keyword`) are unique if using multiple logic blocks in one prompt.

---

*Extracted from Discord. Primary contributor: pro_kun_vita*