---
id: rhcM56bMijtdymfa3OsmT
slug: optimizing-credit-usage-with-vision-services-rhcM56
type: tip
title: Optimizing Credit Usage with Vision Services
topics:
  - configuration
  - performance
keywords:
  - vision
  - continuous vision
  - cloud credits
  - cost
  - local
  - gpu
  - vram
confidence: 0.9
authority: 0.2
contributor: sraura
sources:
  - messageId: "1360554784393789550"
    author: sraura
    timestamp: 2025-12-22T22:35:22.378Z
    url: ""
created: 2025-12-22T22:35:22.378Z
updated: 2025-12-23T03:16:07.360Z
---

# Optimizing Credit Usage with Vision Services

> Vision services, especially continuous vision, consume a large number of Voxta Cloud credits due to frequent image transmission. Running vision locally on a capable GPU can significantly reduce credit usage.

## Answer

Vision capabilities on Voxta Cloud, particularly **continuous vision**, consume a significant amount of credits. Continuous vision sends image data to the cloud for processing every second, which can rapidly deplete your credit balance.

If your hardware includes a capable GPU with sufficient VRAM, you should consider running vision services locally. Local processing eliminates cloud credit consumption for vision tasks and helps conserve your credits. Users with limited VRAM may need to rely on the cloud, but should monitor their credit usage closely when vision is enabled.

---

*Extracted from Discord. Primary contributor: sraura*