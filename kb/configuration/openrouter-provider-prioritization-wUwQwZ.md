---
id: wUwQwZlzMYxG4Z2FcpoLM
slug: openrouter-provider-prioritization-wUwQwZ
type: reference
title: OpenRouter Provider Prioritization
topics:
  - configuration
  - llm
keywords:
  - OpenRouter
  - provider order
  - nebius
  - priority
  - api
confidence: 0.8
authority: 0.2
contributor: mrdragonfox
sources: []
created: 2025-12-22T23:13:07.943Z
updated: 2025-12-22T23:13:07.943Z
---

# OpenRouter Provider Prioritization

> Use the 'order' field to prioritize specific providers (like Nebius) in OpenRouter requests.

## Answer

You can control which providers OpenRouter prioritizes for requests using the `order` field. This field accepts a list of provider slugs to try in a specific sequence.

**Format:**
`order`: `string[]` (List of provider slugs)

**Example:**
`["nebius", "anthropic", "openai"]`

The provider slug is typically the provider's name (e.g., `nebius`).

---

*Extracted from Discord. Primary contributor: mrdragonfox*