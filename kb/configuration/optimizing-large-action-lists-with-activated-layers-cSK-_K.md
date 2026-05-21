---
id: cSK-_KPUnH1DjFn41Ny1D
slug: optimizing-large-action-lists-with-activated-layers-cSK-_K
type: tip
title: Optimizing Large Action Lists with Activated Layers
topics:
  - configuration
  - integrations
keywords:
  - actions
  - layers
  - manual layer
  - activates
  - notion
  - context optimization
confidence: 0.9
authority: 0.2
contributor: acidbubbles
sources:
  - messageId: "1340781164725801012"
    author: acidbubbles
    timestamp: 2025-12-22T20:41:04.508Z
    url: ""
created: 2025-12-22T20:41:04.508Z
updated: 2025-12-22T20:41:04.508Z
---

# Optimizing Large Action Lists with Activated Layers

> Use manual layers and the 'activates' property to group large sets of actions under a single parent action.

## Answer

When dealing with a large number of actions (e.g., from an integration like Notion), it is recommended to split them using activated layers to avoid overwhelming the context.

**Implementation Strategy:**
1. Create a parent action (e.g., `invoke_notion_action`) with a description summarizing the capability (e.g., "Read, write or list elements in a notion wiki project").
2. Place the detailed actions in a separate layer.
3. Mark this separate layer as `manual`.
4. Configure the parent action to trigger the separate layer using the `activates` field.

This approach ensures the model only loads the specific actions when the parent intent is triggered.

---

*Extracted from Discord. Primary contributor: acidbubbles*