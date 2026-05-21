---
id: PEKlLaNUbFqaM8_Mt4OuN
slug: accessing-the-debug-terminal-PEKlLa
type: tip
title: Accessing Voxta Logs and Diagnostics
topics:
  - troubleshooting
  - configuration
  - integrations
keywords:
  - F2
  - terminal
  - console
  - logs
  - debug
  - missing character
  - missing voice
  - diagnostics
  - error logs
  - missing assets
  - actions
  - prompt
  - service performance
  - screenshots
  - diagnosis
  - Voxta Cloud
  - API key
confidence: 1
authority: 0.2
contributor: _kinkyk9
sources: []
created: 2025-12-22T23:58:30.043Z
updated: 2025-12-23T04:26:53.729Z
---

# Accessing Voxta Logs and Diagnostics

> Press F2 to open the debug terminal for real-time logs, or use the Diagnostics panel for deeper insights into service performance, prompts, and actions. These tools, combined with best practices such as providing screenshots, are essential for troubleshooting Voxta issues.

## Answer

# Accessing Voxta Logs and Diagnostics\n\nWhen troubleshooting issues in Voxta, detailed logs and diagnostic information are essential. You can access them through two primary methods: the **F2 console** (debug terminal) and the **Diagnostics panel**.\n\n## F2 Console (Debug Terminal)\n\nPress the **F2** key while the Voxta application is in focus to toggle the internal debug terminal. This view provides:\n\n- Live updates of system operations and logs.\n- General application logs and error messages.\n- Detailed error logs useful for diagnosing issues such as missing assets, missing character, missing voice, connection problems, or incorrect API keys (e.g., Voxta Cloud connection errors).\n\nIf the Voxta UI indicates it is \"connected\" but features are not working, open the debug terminal with `F2` and check the logs for specific errors. The console is particularly helpful for real-time monitoring and catching errors that may not appear in the standard interface.\n\n## Diagnostics Panel\n\nFor deeper inspection of AI behavior, service performance, and action triggers, use the Diagnostics panel:\n\n1. In the left-side menu, navigate to **Diagnostics** (or go to **Advanced** > **Diagnostics**, depending on your version).\n2. The panel displays:\n   - Service performance metrics.\n   - The fully generated prompt in real-time.\n   - The current state of the chat.\n   - Insights into why specific actions did or did not trigger.\n\nThis tool is invaluable for understanding the inner workings of Voxta and debugging complex interactions.\n\n## Best Practices for Troubleshooting\n\n- **Combine both methods**: Use the F2 console for immediate log output and the Diagnostics panel for contextual analysis.\n- **When seeking help**, provide screenshots of the terminal in two states:\n  1. When Voxta is running by itself (server only).\n  2. When used in a Voxta Scene (e.g., Beta with Voxta).\n  This helps distinguish between core server issues and integration/scene-specific problems.\n- **For Voxta Cloud connection errors**, the most common cause is an incorrect API key. Check the F2 logs for authentication errors and verify your API key in the settings.\n\n> **Tip:** Keep the debug terminal open during testing to catch errors as they occur.

---

*Extracted from Discord. Primary contributor: _kinkyk9*