---
id: 3ssNuoKQCuIRy8Fedp79b
slug: using-the-char-placeholder-3ssNuo
type: qa
title: Using the {{ char }} Placeholder
topics:
  - scripting
  - configuration
keywords:
  - templates
  - scriban
  - variables
  - placeholders
  - syntax
confidence: 1
authority: 0.2
contributor: madhellspawn
sources: []
created: 2025-12-19T05:16:36.456Z
updated: 2025-12-19T05:16:36.456Z
---

# Using the {{ char }} Placeholder

> Use the literal variable {{ char }} in templates rather than the specific character name.

## Answer

You should use the literal string `char` (e.g., `{{ char }}`). This is a Scriban variable that Voxta dynamically replaces with the name of the character assigned to the first role.

---

*Extracted from Discord. Primary contributor: madhellspawn*