---
id: OEMOBEtROApxLbRJmtQdE
slug: elevenlabs-v3-availability-in-voxta-cloud-OEMOBE
type: qa
title: ElevenLabs v3 Model Availability and Configuration
topics:
  - integrations
  - configuration
  - troubleshooting
keywords:
  - ElevenLabs
  - v3
  - Voxta Cloud
  - API Key
  - TTS
  - update
confidence: 0.9
authority: 0.2
contributor: lapiro
sources: []
created: 2025-12-22T23:28:21.012Z
updated: 2025-12-23T13:56:41.519Z
---

# ElevenLabs v3 Model Availability and Configuration

> Voxta supports the ElevenLabs v3 model for self-hosted servers and personal API configurations, but it is excluded from the managed Voxta Cloud service due to performance constraints.

## Answer

Voxta supports the ElevenLabs v3 model, but availability depends on your deployment method.

### Voxta Cloud (Managed Service)
ElevenLabs v3 is **not** available in the managed Voxta Cloud service. This exclusion is due to the model's experimental nature and slower performance characteristics.

### Voxta Server (Self-Hosted) and Personal API Keys
You can use ElevenLabs v3 if you are running a self-hosted Voxta Server or by configuring the service manually:

*   **Update Voxta Server:** Ensure your Voxta Server is updated to the latest version. If the model option is missing, an update is usually required.
*   **Use a Personal API Key:** Configure the **11Labs** service separately within Voxta and provide your own personal ElevenLabs API key to access the v3 model.

---

*Extracted from Discord. Primary contributor: lapiro*