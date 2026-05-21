---
id: GsEW9IV6MAW2J6daojmMm
slug: setting-initial-background-and-view-mode-in-scenarios-GsEW9I
type: tip
title: Setting Initial Background and View Mode in Scenarios
topics:
  - scripting
  - configuration
keywords:
  - index script
  - init event
  - SelectView
  - SetBackgroundFromScenario
  - background
  - portrait mode
confidence: 0.8
authority: 0.2
contributor: .frond
sources: []
created: 2025-12-22T22:44:20.060Z
updated: 2025-12-22T22:44:20.060Z
---

# Setting Initial Background and View Mode in Scenarios

> Use an index script with an init event listener to set the initial view mode and background image.

## Answer

To set a starting picture and view mode when a scenario loads, create an index script in your scenario with an `init` event listener. This ensures the visual state is set immediately upon starting.

```javascript
import { chat } from "@voxta";

chat.addEventListener("init", (e) => {
  // Set the view mode (e.g., 'portrait', 'chat', 'talk')
  chat.appTrigger('SelectView', 'portrait');
  
  // Set the background image from the scenario assets folder
  chat.appTrigger('SetBackgroundFromScenario', 'Backgrounds/Arrival1.png');
});
```

---

*Extracted from Discord. Primary contributor: .frond*