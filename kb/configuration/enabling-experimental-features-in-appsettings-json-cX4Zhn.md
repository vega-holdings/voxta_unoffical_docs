---
id: cX4ZhnkfVVjs4UNbDTHkG
slug: enabling-experimental-features-in-appsettings-json-cX4Zhn
type: tip
title: Enabling Experimental Features in appsettings.json
topics:
  - configuration
keywords:
  - appsettings.json
  - ExperimentalFeatures
  - EnableCreatorTools
  - EnableImageGen
  - creator tools
confidence: 0.5
authority: 0.2
contributor: mrdragonfox
sources: []
created: 2025-12-22T23:16:22.766Z
updated: 2025-12-22T23:16:22.766Z
---

# Enabling Experimental Features in appsettings.json

> Configuration snippet to enable Creator Tools and Image Generation in appsettings.json.

## Answer

To enable experimental features such as Creator Tools and Image Generation, add the following `ExperimentalFeatures` block to your `appsettings.json` configuration file:

```json
"ExperimentalFeatures": {
    "EnableCreatorTools": true,
    "EnableImageGen": true
}
```

---

*Extracted from Discord. Primary contributor: mrdragonfox*