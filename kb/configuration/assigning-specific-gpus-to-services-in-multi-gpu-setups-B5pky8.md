---
id: B5pky8aJ3XMvWaU0HSah8
slug: assigning-specific-gpus-to-services-in-multi-gpu-setups-B5pky8
type: qa
title: Assigning Specific GPUs to Services in Multi-GPU Setups
topics:
  - configuration
  - performance
keywords:
  - multi-gpu
  - cuda
  - gpu assignment
  - remote tts
  - openai compatible
  - hardware
confidence: 0.9
authority: 0.2
contributor: daisukearamaki
sources:
  - messageId: "1343663722962358433"
    author: daisukearamaki
    timestamp: 2025-12-22T21:00:34.951Z
    url: ""
  - messageId: "1343676974358466622"
    author: daisukearamaki
    timestamp: 2025-12-22T21:00:34.951Z
    url: ""
created: 2025-12-22T21:00:34.951Z
updated: 2025-12-22T21:00:34.951Z
---

# Assigning Specific GPUs to Services in Multi-GPU Setups

> How to configure specific GPUs for different services by running them externally.

## Answer

There is currently no default setting within the Voxta interface to specify GPU assignment for all Voxta-managed endpoints.

To achieve this, you should:
1. **Run the services externally** (outside of Voxta's management) where you can specify the CUDA device (e.g., using environment variables or launch arguments).
2. **Connect Voxta to them** using the **Remote TTS API** or **OpenAI Compatible** service types.

This approach provides greater configuration freedom for multi-GPU setups compared to using the built-in managed services.

---

*Extracted from Discord. Primary contributor: daisukearamaki*