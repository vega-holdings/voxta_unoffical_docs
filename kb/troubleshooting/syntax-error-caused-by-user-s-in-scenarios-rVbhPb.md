---
id: rVbhPbyQiYIzVFKCLjCkS
slug: syntax-error-caused-by-user-s-in-scenarios-rVbhPb
type: troubleshooting
title: Syntax Error caused by {{ user's }} in Scenarios
topics:
  - troubleshooting
  - scripting
keywords:
  - syntax error
  - scenario
  - script
  - "{{ user }}"
  - validate
  - field generator
confidence: 0.9
authority: 0.2
contributor: muffinfactory127
sources: []
created: 2025-12-22T22:38:40.166Z
updated: 2025-12-22T22:38:40.166Z
---

# Syntax Error caused by {{ user's }} in Scenarios

> Fixing a syntax error where {{ user's }} is generated instead of {{ user }}'s in scenario scripts.

## Answer

This error often indicates a syntax issue in your scenario scripts. A known cause is the scenario generator incorrectly creating the string `{{ user's }}` instead of `{{ user }}'s`.

To resolve this:
1. Check your scenario scripts (or character scripts if they contain scenario data).
2. Look for `{{ user's }}`.
3. Change it to `{{ user }}'s`.

You can use the **Validate** button in the script editor to help identify syntax errors.

---

*Extracted from Discord. Primary contributor: muffinfactory127*