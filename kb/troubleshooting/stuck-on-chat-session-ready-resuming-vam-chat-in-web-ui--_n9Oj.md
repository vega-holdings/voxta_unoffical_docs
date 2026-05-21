---
id: -_n9OjJu-_3tuzPdMdEaM
slug: stuck-on-chat-session-ready-resuming-vam-chat-in-web-ui--_n9Oj
type: troubleshooting
title: Managing Chats Across Different Voxta Clients (VAM, Web UI, Voxy)
topics:
  - troubleshooting
  - integrations
  - configuration
keywords:
  - VAM
  - Virt-A-Mate
  - Web UI
  - Voxy
  - Voxta.VirtAMate
  - Voxta.Talk
  - client mismatch
  - resume chat
  - App ID
  - scenario editing
  - cross-platform
confidence: 0.85
authority: 0.2
contributor: pertily
sources: []
created: 2025-12-22T23:07:41.575Z
updated: 2025-12-23T13:58:44.562Z
---

# Managing Chats Across Different Voxta Clients (VAM, Web UI, Voxy)

> Chats are tied to specific Client IDs and cannot be resumed across different interfaces by default. While a workaround exists by editing the Scenario App ID, it is experimental and may cause data inconsistencies.

## Answer

# Managing Chats Across Different Voxta Clients

By default, chat sessions in Voxta are strictly associated with the specific client (interface) that created them. This association is determined by the **Client ID**.

## Client IDs

Different interfaces use unique identifiers:
*   **Virt-A-Mate (VAM) plugin**: `Voxta.VirtAMate`
*   **Web UI**: `Voxta.Talk`
*   **Voxy**: `Voxta.Voxy`

## Standard Behavior and Limitations

If you attempt to resume a chat in a different client than the one that started it, you will encounter a **client mismatch error**. For example, resuming a VAM chat in the Web UI will fail with a server log indicating the original client ID does not match the current one.

### Why This Happens
Voxta treats each client as a separate endpoint with its own state and capabilities. The client ID ensures that features like character memory, scene integration, and other client-specific functions work correctly. Resuming a chat in a different client would lead to inconsistent behavior, so it is intentionally prevented.

### Recommended Actions
*   **To resume an existing chat:** Use the same client where the conversation started (e.g., resume VAM chats inside Virt-A-Mate).
*   **To start a new conversation:** You can start a new chat with the same character in a different client (e.g., use the Web UI **Home** tab to chat with a VAM character), but the history will not carry over.

## Experimental Workaround: Changing the Scenario App ID

While not recommended, there is a workaround to force a chat to appear in a different client by modifying the Scenario settings.

**Steps:**
1.  Edit the **Scenario** associated with the chat.
2.  Change the **App (client)** setting to the target environment (e.g., changing `Voxta.Voxy` to `Voxta.VirtAMate`).

**Warning:**
This is an experimental workaround. It may cause issues because chat-scoped variables (such as last action, emotion, or context) are stored in the chat object and may not be compatible or visible across different integrations.

---

*Extracted from Discord. Primary contributor: pertily*