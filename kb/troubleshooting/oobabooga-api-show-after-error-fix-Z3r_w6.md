---
id: Z3r_w6rSUzJSHt_GGLNfu
slug: oobabooga-api-show-after-error-fix-Z3r_w6
type: troubleshooting
title: Oobabooga API 'show_after' Error Fix
topics:
  - troubleshooting
  - integrations
keywords:
  - oobabooga
  - error
  - show_after
  - python
  - api
confidence: 0.85
authority: 0.2
contributor: fragileporcelainmouse
sources:
  - messageId: "1337925025210171442"
    author: fragileporcelainmouse
    timestamp: 2025-12-22T20:30:11.560Z
    url: ""
  - messageId: "1337939801210622014"
    author: fragileporcelainmouse
    timestamp: 2025-12-22T20:30:11.560Z
    url: ""
created: 2025-12-22T20:30:11.560Z
updated: 2025-12-22T20:30:11.560Z
---

# Oobabooga API 'show_after' Error Fix

> Code fix for the 'show_after' KeyError in Oobabooga's chat module.

## Answer

This error occurs in some versions of Oobabooga Text Generation Web UI due to missing state initialization during API calls. 

**Workaround:**
Modify `modules/chat.py` in your Oobabooga installation. Locate the `generate_chat_reply()` function and add the following check to initialize the value if missing:

```python
# Initialize show_after if it doesn't exist
if "show_after" not in state:
    state["show_after"] = None  # Or some other suitable default

show_after = html.escape(state["show_after"]) if state["show_after"] else None
```

---

*Extracted from Discord. Primary contributor: fragileporcelainmouse*