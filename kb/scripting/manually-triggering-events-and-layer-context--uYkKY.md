---
id: -uYkKY-8fFRI3qiiCAGOl
slug: manually-triggering-events-and-layer-context--uYkKY
type: tip
title: Manually Triggering Events and Layer Context
topics:
  - scripting
  - troubleshooting
keywords:
  - /event
  - /trigger
  - manual trigger
  - layers
  - debugging
confidence: 0.8
authority: 0.2
contributor: acidbubbles
sources: []
created: 2025-12-22T22:54:24.662Z
updated: 2025-12-22T22:54:24.662Z
---

# Manually Triggering Events and Layer Context

> Manually triggering events via commands may bypass layer assignments, causing scripts with layer checks to fail.

## Answer

You can manually trigger an event using chat commands (e.g., `/event [event_name]` or `/trigger [event_name]`).

**Important Note on Scripting:**
When an event is triggered manually, it may not be associated with its defined **layer**. If your event script checks for a specific layer (e.g., `if (e.layer == 'gamepad')`), the check may fail. You may need to remove or modify layer checks to support manual triggering.

---

*Extracted from Discord. Primary contributor: acidbubbles*