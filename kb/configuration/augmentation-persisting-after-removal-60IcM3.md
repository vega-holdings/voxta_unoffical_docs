---
id: 60IcM365p87_YhIrxZHJW
slug: augmentation-persisting-after-removal-60IcM3
type: troubleshooting
title: Managing Global and Character-Specific Augmentation Settings
topics:
  - configuration
  - troubleshooting
keywords:
  - augmentation
  - auto-continue
  - module settings
  - character config
  - flags
  - overrides
confidence: 0.8
authority: 0.2
contributor: djsoapyknuckles
sources: []
created: 2025-12-23T00:05:37.746Z
updated: 2025-12-23T14:01:15.475Z
---

# Managing Global and Character-Specific Augmentation Settings

> Global module settings for augmentations can override character-specific configurations. This guide explains how to manage these overrides to control feature availability per character.

## Answer

### Understanding Configuration Hierarchy
Global module settings for augmentations take precedence over character-specific configurations. This means that if an augmentation is enabled at the module level, it will override settings defined within an individual character's configuration.

### Recommended Workflow
To maintain an augmentation globally while preventing specific characters from using it, follow this workflow:

1. **Enable Globally:** Keep the augmentation setting enabled at the module level.
2. **Exclude by Type:** Configure the module to exclude specific character types (e.g., 'companion') by default.
3. **Manual Application:** Manually apply the augmentation tag only to the specific characters you intend to use it with.

### Troubleshooting
If an augmentation persists after you attempt to remove it from a character:
* Check the specific module configuration (e.g., under the **flag-based auto-continue section**).
* Verify that a global flag is not forcing the setting on that character.

---

*Extracted from Discord. Primary contributor: djsoapyknuckles*