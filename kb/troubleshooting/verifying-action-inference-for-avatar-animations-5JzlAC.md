---
id: 5JzlACUBHg8Rnw8FHPwFr
slug: verifying-action-inference-for-avatar-animations-5JzlAC
type: troubleshooting
title: Troubleshooting Avatar Animations and Script Triggers
topics:
  - troubleshooting
  - configuration
  - scripting
keywords:
  - action inference
  - avatar
  - animations
  - scripts
  - inspect mode
  - logs
  - debug
  - scenes
confidence: 0.9
authority: 0.2
contributor: .frond
sources:
  - messageId: "1324068765146677278"
    author: .frond
    timestamp: 2025-12-19T04:52:38.131Z
    url: ""
  - messageId: "1324074267402440779"
    author: .frond
    timestamp: 2025-12-19T04:52:38.131Z
    url: ""
created: 2025-12-19T04:52:38.131Z
updated: 2025-12-23T13:49:16.626Z
---

# Troubleshooting Avatar Animations and Script Triggers

> If avatar animations or scripts are not triggering during chat or scenes, verify that the Action Inference service is enabled and configured. Unlike Inspect mode, chat mode requires the AI to actively decide to perform an action based on context.

## Answer

If your avatar is not performing actions (such as moving, emoting, or running specific scripts), the issue is likely related to the **Action Inference** configuration. Unlike Inspect mode—which executes scripts directly to test logic—Chat mode requires the AI to decide when to trigger an action based on the conversation context.

### Prerequisites for Triggering Actions
For an action to trigger in chat, the following must be configured:

1.  **Action Defined:** You must create an Action in Voxta that links to your specific script or animation.
2.  **Action Inference Enabled:** An Action Inference service must be added and enabled in your settings. If this service is disabled, the AI will generate text but will not trigger scripts or animations, causing scenes to appear inactive.

### Debugging Steps

#### 1. Verify Settings
Ensure that **Action Inference** is turned on in your Voxta configuration. If it is disabled, the system functions as a text-only chat.

#### 2. Check Console Logs
To confirm if the service is attempting to process actions, check the Voxta server logs:

1.  Open the Voxta console/logs.
2.  Ask the character to perform a specific action (e.g., "Can you dance?").
3.  Look for the following log entries:

```text
[INF] Doing action inference (Layer: behavior)...
[INF] Inferred Assistant action (Layer: behavior): [action_name]
```

If these logs are missing, the Action Inference service is likely not running or is incorrectly configured.

### Understanding Contextual Triggering
Action Inference is not a direct command system. The AI analyzes the conversation context to decide if an action is appropriate. Even if a script is perfectly written, the AI may choose not to trigger it if it does not fit the current flow of dialogue.

---

*Extracted from Discord. Primary contributor: .frond*