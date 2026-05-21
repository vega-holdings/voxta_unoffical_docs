---
id: CQ0hE-sO-mq2N19th5flI
slug: running-xtts-standalone-for-dependency-isolation-CQ0hE-
type: tip
title: Running XTTS Standalone for Dependency Isolation
topics:
  - integrations
  - setup
keywords:
  - xtts
  - standalone
  - dependency
  - conflict
  - whisper
confidence: 0.8
authority: 0.2
contributor: daisukearamaki
sources:
  - messageId: "1348489765745463296"
    author: daisukearamaki
    timestamp: 2025-12-22T21:22:24.068Z
    url: ""
created: 2025-12-22T21:22:24.068Z
updated: 2025-12-22T21:22:24.068Z
---

# Running XTTS Standalone for Dependency Isolation

> Run XTTS separately to avoid dependency conflicts with other modules.

## Answer

If you encounter dependency conflicts between services (e.g., Whisper Live and XTTS requiring different libraries or Deepspeed versions), consider running `xtts-api-server` separately. This isolates the environment from Voxta's internal Python environment and prevents "dependency hell."

---

*Extracted from Discord. Primary contributor: daisukearamaki*