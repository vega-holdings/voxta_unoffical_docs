---
id: cJEq4gfVrtSbuS-YNHzsn
slug: verifying-active-context-and-secrets-cJEq4g
type: tip
title: Inspecting Chat Context, Memory, and Prompts
topics:
  - troubleshooting
  - llm
  - configuration
keywords:
  - diagnostics
  - diag
  - context
  - prompt
  - inspect
  - debug
  - memory
  - secrets
  - notes
confidence: 0.9
authority: 0.2
contributor: sraura
sources:
  - messageId: "1349857113228181586"
    author: sraura
    timestamp: 2025-12-22T21:29:35.303Z
    url: ""
created: 2025-12-22T21:29:35.303Z
updated: 2025-12-23T13:50:44.335Z
---

# Inspecting Chat Context, Memory, and Prompts

> Use the Diagnostics panel or Chat Inspect window to view the exact prompt, context, and memory sent to the AI, helping you debug visibility and prompt construction issues.

## Answer

To troubleshoot chat behavior or verify what information the AI is receiving, you can inspect the active context, memory, and the fully generated prompt. This helps ensure that notes, secrets, and system instructions are being injected correctly.

### Using the Diagnostics Panel
The Diagnostics panel (often referred to as "diag") provides a comprehensive view of the data sent to the Large Language Model (LLM).

*   **Access:** Open the panel from the left-hand menu during a chat session.
*   **What it shows:** The complete prompt, including system instructions, user messages, context entries, notes, and secrets.
*   **Use cases:**
    *   Verify exactly how the prompt is assembled.
    *   Debug issues related to prompt construction or malformed context.
    *   Identify why the LLM is responding unexpectedly.

### Using the Chat Inspect Window
The Chat Inspect window allows you to review what the AI is remembering and taking into account for the current response, including specific configuration limitations.

*   **Access:**
    1.  Ensure you are using the full window interface.
    2.  Select the **Chat** tab.
    3.  Navigate to the top right and scroll down to locate the **Inspect** button.
*   **What it shows:** The exact context and prompt being sent, reflecting limitations such as the memory window size set in your configuration.
*   **Use cases:**
    *   Debug context visibility issues.
    *   Understand how memory constraints are affecting the current response.
    *   Confirm that settings are working as expected.

---

*Extracted from Discord. Primary contributor: sraura*