---
id: j0ptxceMpWzrf4IXAxzgO
slug: voxta-cloud-as-alternative-to-local-hardware-j0ptxc
type: tip
title: Choosing Between Local Hardware and Voxta Cloud
topics:
  - setup
  - configuration
keywords:
  - Voxta Cloud
  - local hosting
  - GPU
  - hardware requirements
  - modules
  - privacy
  - security
  - low-end PC
confidence: 0.9
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T22:37:56.271Z
updated: 2025-12-23T04:29:41.335Z
---

# Choosing Between Local Hardware and Voxta Cloud

> Voxta can run locally on capable hardware or use Voxta Cloud for remote processing. This guide explains both options, their requirements, and when to choose each.

## Answer

Voxta offers two primary ways to run its services: **local hosting** on your own hardware, or using **Voxta Cloud** for remote processing. The choice depends on your hardware capabilities and preferences.

## Local Hosting

If you have a powerful GPU (or multiple GPUs), you can run Voxta services like LLM, STT, and TTS locally. To do this:
- Install the relevant Voxta modules on your machine.
- Some modules allow you to specify which GPU to use, enabling you to leverage multi‑GPU setups.

Local hosting gives you full control over your data and avoids any reliance on an internet connection after setup.

## Voxta Cloud

Voxta Cloud is a secure, anonymous alternative for users whose computers lack the necessary hardware (especially a powerful GPU). It handles all processing remotely, so you don't need a high‑end local GPU.

Key points about Voxta Cloud:
- Designed to be secure and anonymous.
- Ideal for low‑end PCs or when you prefer not to invest in expensive hardware.
- For details on data handling, see the [Voxta Cloud Privacy Policy](https://doc.voxta.ai/cloud/privacy/).

## Privacy and Security

- **Local hosting**: Your data stays on your own machine.
- **Voxta Cloud**: Data is processed remotely; the service is built with privacy and security in mind. Refer to the privacy policy for specifics.

## Conclusion

Choose local hosting if you have a capable GPU and want maximum control. Use Voxta Cloud if your hardware is insufficient or you prefer a managed remote solution.

---

*Extracted from Discord. Primary contributor: sraura*