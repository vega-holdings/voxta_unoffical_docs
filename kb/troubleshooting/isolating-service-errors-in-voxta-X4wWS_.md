---
id: X4wWS_PtZituU8hXtwDPm
slug: isolating-service-errors-in-voxta-X4wWS_
type: tip
title: Isolating Service Errors in Voxta
topics:
  - troubleshooting
  - performance
keywords:
  - F2
  - logs
  - playground
  - debug
  - isolate
confidence: 0.85
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T23:06:25.949Z
updated: 2025-12-22T23:06:25.949Z
---

# Isolating Service Errors in Voxta

> Workflow for debugging and isolating failing services using logs and the playground.

## Answer

If you encounter errors with specific modules (like STT or TTS), follow this workflow to isolate the issue:

1. **Disable Services:** Turn off services via the right-hand menu (cog wheel) and restart the chat to see which module triggers the error.
2. **Check Logs:** Press **F2** to view detailed application logs.
3. **Use Playground:** Utilize the playground tools from the left menu; these start only one service at a time, making it easier to identify the failing component.
4. **Clean Test:** If issues persist, extract Voxta to a new folder to test with a default configuration before applying custom settings.

---

*Extracted from Discord. Primary contributor: sraura*