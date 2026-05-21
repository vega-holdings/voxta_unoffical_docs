---
id: dkt4piP_Sab7nHoBgGgEz
slug: actions-vs-user-functions-for-explicit-commands-dkt4pi
type: tip
title: Actions vs. User Functions for Explicit Commands
topics:
  - scripting
  - configuration
keywords:
  - actions
  - user functions
  - triggers
  - best practice
  - menu
confidence: 0.8
authority: 0.2
contributor: djsoapyknuckles
sources: []
created: 2025-12-22T23:28:44.170Z
updated: 2025-12-22T23:28:44.170Z
---

# Actions vs. User Functions for Explicit Commands

> Use User Functions instead of Actions for commands that should only happen upon explicit user request.

## Answer

When configuring scenarios, **Actions** are tools the AI can *choose* to use autonomously based on context. If a function should only occur when the user explicitly commands it (e.g., "open the menu"), it is often better implemented as a **User Function** (trigger) rather than an Action. This prevents the AI from autonomously triggering the action when it wasn't explicitly requested.

---

*Extracted from Discord. Primary contributor: djsoapyknuckles*