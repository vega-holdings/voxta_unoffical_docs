---
id: P8Eb_DwZZjbufnnl-j_-d
slug: ensuring-full-cloud-offload-for-performance-P8Eb_D
type: troubleshooting
title: Ensuring Full Cloud Offload for Performance
topics:
  - configuration
  - performance
  - voxta-cloud
keywords:
  - exllama
  - action inference
  - summarization
  - local model
  - cloud setup
confidence: 0.9
authority: 0.2
contributor: sraura
sources:
  - messageId: "1356241257004929115"
    author: sraura
    timestamp: 2025-12-22T21:52:12.327Z
    url: ""
  - messageId: "1356291812544745604"
    author: sraura
    timestamp: 2025-12-22T21:52:12.327Z
    url: ""
  - messageId: "1356364487036244104"
    author: sraura
    timestamp: 2025-12-22T21:52:12.327Z
    url: ""
created: 2025-12-22T21:52:12.327Z
updated: 2025-12-22T21:52:12.327Z
---

# Ensuring Full Cloud Offload for Performance

> All three services (Text Gen, Action Inference, Summarization) must be set to Voxta Cloud to avoid loading local models.

## Answer

If you only set **Text Gen** to Voxta Cloud but leave **Action Inference** or **Summarization** on a local provider (like ExLlama), the system will still attempt to load a local model (e.g., Silicon Maid) to handle those specific tasks. This consumes local resources and negates the performance benefits of using the cloud.

To ensure maximum performance, switch all three services to Voxta Cloud in the settings menu. It is also recommended to disable the ExLlama module entirely when using Voxta Cloud to prevent accidental local model loading.

---

*Extracted from Discord. Primary contributor: sraura*