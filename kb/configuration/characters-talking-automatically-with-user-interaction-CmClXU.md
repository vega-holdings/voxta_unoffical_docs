---
id: CmClXUO5debo-HtIZFV2N
slug: characters-talking-automatically-with-user-interaction-CmClXU
type: qa
title: Enable Automatic Character Chat While Allowing User Interruptions
topics:
  - configuration
  - scripting
  - scenarios
keywords:
  - story flow
  - chat flow
  - auto chat
  - user interaction
  - scripting
  - stt
  - interruption
  - auto go
  - banter
  - roleplay
confidence: 0.85
authority: 0.2
contributor: _kinkyk9
sources:
  - messageId: "1440047937374650548"
    author: _kinkyk9
    timestamp: 2025-12-22T23:54:30.285Z
    url: ""
  - messageId: "1440051482723356846"
    author: _kinkyk9
    timestamp: 2025-12-22T23:54:30.285Z
    url: ""
created: 2025-12-22T23:54:30.285Z
updated: 2025-12-23T04:38:00.196Z
---

# Enable Automatic Character Chat While Allowing User Interruptions

> Use the standard Chat (Roleplay) flow instead of Story flow to allow characters to converse automatically while keeping STT active. You can trigger auto-chat via scripts, scenario settings, or the 'auto go' button.

## Answer

# Enable Automatic Character Chat While Allowing User Interruptions

While the **Story Chat Flow** makes characters interact automatically, it disables user interaction (Speech-to-Text) and locks the user out of the conversation. To have characters chat automatically while retaining the ability to join in:

1. Select the **Chat** (Roleplay) Chat Flow (standard conversation mode).
2. Use one of the following methods to make characters converse automatically:
   - **Auto Go button**: Click the "auto go" (auto-generate) button in the interface to start automatic conversation.
   - **Scripts or Scenario settings**: Use scripts (e.g., `chat.chatFlow` triggers) or scenario configurations to 'force' characters to keep chatting.

This approach allows the user to intervene via voice or text at any time, unlike Story flow which excludes the user completely.

---

*Extracted from Discord. Primary contributor: _kinkyk9*