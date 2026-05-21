---
id: 2e_zl91qyHH5ZriVCkM6H
slug: monitoring-dedicated-vram-usage-2e_zl9
type: tip
title: Monitoring and Interpreting GPU Memory Usage
topics:
  - performance
  - troubleshooting
  - llm
keywords:
  - task manager
  - vram
  - dedicated memory
  - shared gpu memory
  - gpu
  - monitoring
  - spillover
  - optimization
  - quantization
confidence: 0.9
authority: 0.2
contributor: sraura
sources:
  - messageId: "1325081250934820864"
    author: sraura
    timestamp: 2025-12-19T05:03:02.920Z
    url: ""
created: 2025-12-19T05:03:02.920Z
updated: 2025-12-23T13:54:45.273Z
---

# Monitoring and Interpreting GPU Memory Usage

> Monitor Dedicated GPU memory in Windows Task Manager for AI inference, as high Shared GPU memory usage indicates VRAM saturation and performance degradation.

## Answer

When checking GPU memory usage for Voxta services in Windows Task Manager, navigate to the **Performance** tab. Specifically monitor the **Dedicated GPU memory** graph.

### What to Monitor
*   **Dedicated GPU Memory:** AI inference relies on the dedicated VRAM available on the graphics card. You should focus primarily on this metric.
*   **Ignore Combined Totals:** Disregard "Shared GPU memory" or combined totals when assessing capacity, as these do not reflect the high-speed memory required for optimal AI performance.

### Interpreting Shared Memory Usage
If 'Shared GPU Memory' usage is visible (e.g., above 0.1 GB), it typically indicates that the dedicated VRAM is fully saturated. The system is spilling data over into system RAM (sometimes referred to colloquially as a 'leak' into shared memory).

### Performance Impact and Solutions
This spillover usually results in significantly slower performance. To fix this, consider using a smaller model or a more compressed quantization (such as GGUF or EXL2) to ensure the model fits within the dedicated VRAM.

---

*Extracted from Discord. Primary contributor: sraura*