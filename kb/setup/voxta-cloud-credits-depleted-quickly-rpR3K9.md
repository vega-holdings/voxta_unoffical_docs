---
id: rpR3K91gWBk5hyKBPxzFv
slug: voxta-cloud-credits-depleted-quickly-rpR3K9
type: troubleshooting
title: Voxta Subscription, Cloud Credits, and Local vs Cloud Optimization
topics:
  - setup
  - configuration
  - integrations
  - troubleshooting
  - performance
  - cost optimization
keywords:
  - LLM
  - STT
  - TTS
  - VAM
  - Voxta Cloud
  - Voxta Server
  - Voxta Portal
  - billing
  - cloud
  - cloud execution
  - configuration
  - cost
  - credits
  - elevenlabs
  - external providers
  - GPU
  - hardware
  - local execution
  - local services
  - mixed usage
  - monitoring
  - offline
  - optimization
  - patreon
  - portal
  - pricing
  - subscription
  - tiers
  - upgrade
  - vision
  - Virt-A-Mate
confidence: 1
authority: 0.2
contributor: sraura
sources:
  - messageId: "1381730736352264324"
    author: sraura
    timestamp: 2025-12-22T23:01:12.574Z
    url: ""
created: 2025-12-22T23:01:12.574Z
updated: 2025-12-23T04:36:18.530Z
---

# Voxta Subscription, Cloud Credits, and Local vs Cloud Optimization

> Voxta requires a Patreon subscription to access the software. This guide explains the different tiers, how cloud credits work, and strategies to optimize usage by mixing local and cloud services to manage costs.

## Answer

# Voxta Subscription, Cloud Credits, and Local vs Cloud Optimization

Voxta software requires a Patreon subscription. You can run AI services locally on your own hardware or use Voxta Cloud, which consumes credits included in your subscription tier. This guide explains the subscription tiers, how credits work, and how to optimize your setup to manage costs.

## Voxta Patreon Subscription Tiers

- A Patreon subscription is mandatory to access Voxta Server (the core software).
- Voxta offers several Patreon tiers, including **User**, **Companion**, **Ultimate**, **Supreme**, and **Elite**. Each tier provides a different monthly credit allowance for cloud services.
- Lower tiers (e.g., User) grant access to Voxta Server; higher tiers add benefits like Virt-A-Mate scenes (Companion adds Voxta VAM scenes, Ultimate adds Voxta Apartment Scene, etc.).
- The exact credit amounts and tier benefits are subject to change; refer to the [Voxta Patreon page](https://www.patreon.com/voxta/membership) for current details.

**Note:** Virt-A-Mate (VAM) is a separate application available via [MeshedVR's Patreon](https://www.patreon.com/meshedvr). The Voxta plugin for VAM can be found on [VamHub](https://hub.virtamate.com/).

## Local vs Cloud Execution

### Local Execution

- Run all AI services (LLM, STT, TTS, Vision) on your own computer.
- Requires a powerful GPU, especially for LLM (large VRAM) and TTS/STT if using local models.
- **Advantages:** No ongoing cloud costs; no credit consumption; full control.
- **Hardware requirements:** NVIDIA GPU with sufficient VRAM (e.g., 8GB+ for smaller models, 24GB+ for larger ones). Local execution is possible with any subscription tier, including the lowest.

### Cloud Execution (Voxta Cloud)

- Services run on Voxta's infrastructure.
- Consumes **credits** from your monthly allowance.
- Useful if your hardware cannot handle local models or you want access to high-quality cloud providers (e.g., ElevenLabs TTS, OpenAI STT, etc.).
- Credits are allocated monthly based on your Patreon tier and reset on the first of each month.

## Understanding Voxta Cloud Credits

### How Credits Work

- Credits are used to pay for cloud AI services: text generation (LLM), speech-to-text (STT), text-to-speech (TTS), and Vision.
- Each service consumes credits at different rates:
  - **LLM:** Relatively low cost.
  - **STT and TTS:** Higher cost, especially high-quality providers like ElevenLabs.
  - **Vision:** Also high cost.
- You can monitor your credit balance and usage in real time on the [Voxta Portal](https://portal.voxta.ai/), which also displays current service pricing.

### Why Credits May Deplete Quickly

- Even moderate usage of expensive services (e.g., ElevenLabs TTS, Vision) can quickly exhaust your monthly allowance.
- Understanding consumption rates helps you plan usage and adjust your configuration.

### Getting More Credits

- The primary way to increase your credit allowance is to **upgrade your Patreon tier**.
  - When you upgrade, Patreon charges a prorated difference, and you immediately receive a proportionate amount of additional credits.
- Direct credit purchases are planned for the future but are not yet available.
- To upgrade, visit your [Patreon membership page](https://www.patreon.com/voxta/membership) and select a higher tier.

## Optimizing Credit Usage

### General Tips

- **Start with a lower tier** (e.g., User) to test services and gauge your usage before committing to a higher tier.
- **Monitor your usage** regularly on the Voxta Portal to identify high-cost services.
- **Disable Voxta Cloud** when not needed to prevent accidental credit consumption.

### Cost-Saving Strategies

1. **Avoid or limit high-cost services:** Minimize usage of ElevenLabs TTS, Vision, etc., if credits are limited.
2. **Use local or external services for expensive components:**
   - If you have a capable GPU, run STT, TTS, and Vision locally to eliminate credit consumption.
   - Alternatively, use external providers (e.g., OpenAI for STT, ElevenLabs for TTS) directly, bypassing Voxta Cloud credits for those services.
3. **Offload LLM to the cloud when local resources are limited:** Since LLM consumes few credits, it can be a cost-effective way to overcome hardware constraints.
4. **Mix local and cloud providers:** Configure Voxta to use a combination of providers for different services, spending credits only on the services you value most.

### Configuring Mixed Usage

Voxta allows you to select different providers for each AI service. To set up a mixed configuration:

1. Open Voxta Settings.
2. Navigate to the **Services** section.
3. For each component (LLM, STT, TTS, Vision), choose either:
   - **Voxta Cloud** provider
   - **Local** service (if installed)
   - **External** provider (e.g., OpenAI, ElevenLabs)
4. Save your configuration.

By mixing providers, you can tailor credit consumption to your needs and hardware capabilities.

## Additional Resources

- [Voxta Documentation](https://docs.voxta.ai/)
- [Voxta Portal](https://portal.voxta.ai/) – monitor credits and pricing.
- [Voxta Patreon](https://www.patreon.com/voxta/membership) – subscription details.
- [Virt-A-Mate](https://www.patreon.com/meshedvr) – separate application.
- [VamHub](https://hub.virtamate.com/) – Voxta plugin for VAM.

---

*Extracted from Discord. Primary contributor: sraura*