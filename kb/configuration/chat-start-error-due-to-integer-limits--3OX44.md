---
id: -3OX44Oc6Jwz4DtCAkb2x
slug: chat-start-error-due-to-integer-limits--3OX44
type: troubleshooting
title: Chat Start Error Due to Integer Limits
topics:
  - configuration
  - troubleshooting
keywords:
  - int32
  - limit
  - overflow
  - chat start
  - error
  - max value
confidence: 0.6
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T23:10:09.250Z
updated: 2025-12-22T23:10:09.250Z
---

# Chat Start Error Due to Integer Limits

> Numeric configuration fields must not exceed the int32 limit (2,147,483,647) to avoid chat start errors.

## Answer

This issue can occur if a numeric configuration field (such as a duration or timeout) exceeds the maximum value for a 32-bit integer.

*   **Max Value:** `2147483647` (approximately 68 years in seconds).
*   **Solution:** Ensure no numeric settings exceed this value.

**Isolation Step:**
If errors persist, try closing external integrations (like Virt-a-Mate) and starting a chat in the Voxta app alone to confirm if the issue is with the core server or the integration.

---

*Extracted from Discord. Primary contributor: sraura*