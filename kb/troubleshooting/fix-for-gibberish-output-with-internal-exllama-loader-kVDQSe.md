---
id: kVDQSembR7IQgIc-4xqRV
slug: fix-for-gibberish-output-with-internal-exllama-loader-kVDQSe
type: troubleshooting
title: Troubleshooting Gibberish or Drunk Output with ExLlama Loaders in Voxta
topics:
  - troubleshooting
  - llm
keywords:
  - exllama
  - exllamav2
  - exllamav3
  - gibberish
  - drunk output
  - slurred
  - llama.cpp
  - llamasharp
  - voxta cloud
  - koboldcpp
  - oobabooga
  - backend
  - loader
  - rtx 4090
  - florence-2
confidence: 0.9
authority: 0.2
contributor: sraura
sources:
  - messageId: "1380475785059766383"
    author: sraura
    timestamp: 2025-12-22T23:00:39.980Z
    url: ""
  - messageId: "1380573098847375402"
    author: sraura
    timestamp: 2025-12-22T23:00:39.980Z
    url: ""
created: 2025-12-22T23:00:39.980Z
updated: 2025-12-23T13:57:18.142Z
---

# Troubleshooting Gibberish or Drunk Output with ExLlama Loaders in Voxta

> If Voxta's internal ExLlama, ExLlamaV2, or ExLlamaV3 loaders produce garbled or 'drunk' text, resolve the issue by switching to llama.cpp, LlamaSharp, Voxta Cloud, or an external host like Oobabooga.

## Answer

# Troubleshooting Gibberish or Drunk Output with ExLlama Loaders in Voxta

Users have reported that Voxta's internal **ExLlama**, **ExLlamaV2**, and **ExLlamaV3** model loaders can sometimes produce garbled, gibberish, or 'drunk' (slurred/mispronounced) output. This issue has been observed in various versions (including v145) and may be related to instability or hardware compatibility (e.g., RTX 4090 GPUs or specific configurations involving vision models like Florence-2).

Since Voxta Cloud functions correctly with the same models, the issue is isolated to the local ExLlama loader configuration.

## Solutions and Workarounds

### 1. Switch to llama.cpp within Voxta
- Change the service in Voxta to **llama.cpp**.
- Load a GGUF model instead of the ExLlama model.
- This approach has resolved the issue for many users, including those with RTX 4090 GPUs.

### 2. Switch to LlamaSharp
- Select the **LlamaSharp** module while keeping the same model.
- LlamaSharp often provides more stable text generation when ExLlama variants fail.

### 3. Use Voxta Cloud
- Switch Text Gen, Action Inference, and Summarization to **Voxta Cloud**.
- This confirms the issue is local and bypasses the problematic loader entirely.

### 4. Host the model externally
- Use external software such as **Oobabooga/Text Generation WebUI** or **KoboldCpp** to host the model.
- Connect Voxta to the external service via the appropriate API (e.g., OpenAI-compatible or KoboldAI).
- This bypasses Voxta's internal loader and can eliminate the gibberish problem.

**Note:** These workarounds are intended for temporary use; the underlying issue may be fixed in future Voxta updates.

---

*Extracted from Discord. Primary contributor: sraura*