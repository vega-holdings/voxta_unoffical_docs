---
id: -S_sPaXFwei3M3T69_p_c
slug: setting-expiring-flags-in-scripts--S_sPa
type: reference
title: "Managing Flags in Scripts: Persistence, Expiration, and Resetting"
topics:
  - scripting
  - configuration
keywords:
  - flags
  - expiration
  - cooldown
  - setFlag
  - persistence
  - unset
  - expiring flags
  - reset
confidence: 1
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T22:50:42.921Z
updated: 2025-12-23T04:27:00.573Z
---

# Managing Flags in Scripts: Persistence, Expiration, and Resetting

> Flags persist indefinitely until manually unset; they can be set to expire after a number of messages or a duration using `chat.setFlag` with options. Calling `chat.setFlag` on an existing expiring flag resets its expiration timer. Unset a flag by prefixing its name with `!`.

## Answer

# Managing Flags in Scripts

Flags are persistent variables that can be used across script executions. By default, flags persist indefinitely until explicitly unset.

## Setting Flags

Use `chat.setFlag(name, value)` to set a flag. The value can be any JSON-serializable data. To set a flag with an expiration, provide an options object as the value with either `messages` or `seconds` (or both).

- `messages`: Number of conversation messages after which the flag expires. Only user and assistant messages count; system events are excluded.
- `seconds`: Duration in seconds after which the flag expires.

Example:
```javascript
export function trigger(e) {
    // Expire after 10 conversation messages
    chat.setFlag('cooldown_flag', { messages: 10 });

    // Expire after 2 minutes (120 seconds)
    chat.setFlag('cooldown_flag', { seconds: 120 });
}
```

## Unsetting Flags

To manually remove a flag, prefix the flag name with `!`:

```javascript
chat.setFlag('!cooldown_flag');
```

In chat commands, you can also use `!cooldown_flag` to unset.

Flags that expire automatically are removed as if they were unset.

## Expiration Behavior

When you set an expiring flag, the expiration timer or message counter starts from that moment. If you call `chat.setFlag` again on the same flag with a new expiration (or even the same), the expiration is reset to the new value. This refreshes the duration; it does not stack or ignore the update.

For example, if a flag is set with `{ seconds: 60 }` and after 30 seconds you set it again with `{ seconds: 60 }`, the flag will now expire 60 seconds from the second call, not from the original.

This behavior is useful for implementing cooldowns or temporary states that should be extended on repeated activity.

## Notes

- Flags are stored per chat session.
- Expiration based on `messages` only counts actual conversation messages (user and assistant), not script events or system messages.
- Expired flags are automatically removed and are no longer accessible.

---

*Extracted from Discord. Primary contributor: sraura*