---
id: uKgjXNL1ow9y_kAJxaoex
slug: tracking-cumulative-variables-money-points-in-scripts-uKgjXN
type: qa
title: Tracking Cumulative Variables (Money/Points) in Scripts
topics:
  - scripting
  - configuration
keywords:
  - variables
  - money
  - tracking
  - state
  - chat.set
  - chat.get
  - limit
  - chat.note
confidence: 0.9
authority: 0.2
contributor: sraura
sources:
  - messageId: "1384618779677556847"
    author: sraura
    timestamp: 2025-12-22T23:04:01.137Z
    url: ""
created: 2025-12-22T23:04:01.137Z
updated: 2025-12-22T23:04:01.137Z
---

# Tracking Cumulative Variables (Money/Points) in Scripts

> Use chat.get() and chat.set() to track persistent variables like money and trigger logic when limits are reached.

## Answer

Yes, you can track cumulative values using Voxta's scripting API to manage stateful variables.

### Approach
1. **State Management**: Use `chat.get(key, defaultValue)` and `chat.set(key, value)` to store and update the total amount across the session.
2. **Triggering**: Use an **Action** to detect when a transaction occurs. 
   - If the amount is an argument of the action, access it via `e.arguments`.
   - If the amount is in the conversation text, you must parse it (e.g., using Regex) from `e.message.text`.
3. **Feedback**: Use `chat.note()` to display the tracked amount to the user.

### Example Logic
Based on official documentation patterns:
```javascript
import { chat } from "@voxta";

export function transaction(e, amount) {
    // 1. Retrieve current total (default to 0 if not set)
    const currentTotal = chat.get("total_spent", 0);
    
    // 2. Calculate new total
    const newTotal = currentTotal + amount;
    
    // 3. Save new total to state
    chat.set("total_spent", newTotal);
    
    // 4. Display to user
    chat.note(`Transaction complete. Total spent: ${newTotal}`);

    // 5. Check for limit trigger
    if (newTotal >= 1000) {
        chat.note("Spending limit reached!");
        // specific trigger logic here
    }
}
```

---

*Extracted from Discord. Primary contributor: sraura*