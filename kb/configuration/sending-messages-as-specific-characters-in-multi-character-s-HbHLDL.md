---
id: HbHLDLOtOU_da5WutjK2f
slug: sending-messages-as-specific-characters-in-multi-character-s-HbHLDL
type: qa
title: Sending messages as specific characters in multi-character scenarios
topics:
  - configuration
  - scripting
keywords:
  - /message
  - chat commands
  - scenario roles
  - multi-character
  - forcing speech
confidence: 1
authority: 0.2
contributor: acidbubbles
sources:
  - messageId: "1331051012366270527"
    author: acidbubbles
    timestamp: 2025-12-19T05:22:46.871Z
    url: ""
created: 2025-12-19T05:22:46.871Z
updated: 2025-12-19T05:22:46.871Z
---

# Sending messages as specific characters in multi-character scenarios

> Use the /message command with --character or --scenario-role flags to make specific characters speak.

## Answer

You can use the `/message` command to target specific characters or scenario roles. This allows you to force a specific character to speak.

**By Character Name:**
```
/message --character "Character Name" -- Your message text
```

**By Scenario Role:**
```
/message --scenario-role "role_name" -- Your message text
```

---

*Extracted from Discord. Primary contributor: acidbubbles*