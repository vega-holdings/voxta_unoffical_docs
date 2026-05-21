---
id: IDPB8uISQq1K1zSk5YmhD
slug: silent-failure-in-vam-due-to-memory-exhaustion-IDPB8u
type: troubleshooting
title: Silent failure in VaM due to memory exhaustion
topics:
  - troubleshooting
  - performance
  - integrations
keywords:
  - VaM
  - silent failure
  - memory
  - VRAM
  - no response
confidence: 0.9
authority: 0.2
contributor: neurom4ax
sources:
  - messageId: "1327744956479180993"
    author: neurom4ax
    timestamp: 2025-12-19T05:13:28.570Z
    url: ""
created: 2025-12-19T05:13:28.570Z
updated: 2025-12-19T05:13:28.570Z
---

# Silent failure in VaM due to memory exhaustion

> Silent failures in VaM often indicate out-of-memory errors; verify by testing with Voxta Cloud.

## Answer

If the Voxta plugin shows as connected and audio settings are correct, but characters do not respond, the system may have run out of memory (RAM or VRAM), causing local AI services to fail silently.

**Diagnosis:**
Try switching to **Voxta Cloud** for services. If the issue resolves, the cause is likely insufficient local hardware resources to run the selected models.

**Solution:**
- Use Voxta Cloud to offload processing.
- Upgrade hardware (specifically GPU VRAM for AI models).
- Switch to smaller/quantized local models.

---

*Extracted from Discord. Primary contributor: neurom4ax*