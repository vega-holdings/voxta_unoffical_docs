---
id: VYjPBkGWo2osZ3CjSiLJ5
slug: kokoro-tts-int8-model-configuration-VYjPBk
type: tip
title: Kokoro TTS Int8 Model Configuration
topics:
  - configuration
  - performance
keywords:
  - kokoro
  - tts
  - onnx
  - int8
  - quantization
  - huggingface
confidence: 0.8
authority: 0.2
contributor: minipasila
sources:
  - messageId: "1416445276326989875"
    author: minipasila
    timestamp: 2025-12-22T23:31:16.383Z
    url: ""
created: 2025-12-22T23:31:16.383Z
updated: 2025-12-22T23:31:16.383Z
---

# Kokoro TTS Int8 Model Configuration

> Recommended model string for the int8 quantized version of Kokoro TTS.

## Answer

For Kokoro TTS, you can use the int8 quantized ONNX model instead of the standard fp32 version for potential performance gains.

**Model String:**
`hf:onnx-community/Kokoro-82M-v1.1-zh-ONNX:onnx/model_int8.onnx`

Note: The path after the colon (`:onnx/model_int8.onnx`) is required to point to the specific file within the repository folder structure.

---

*Extracted from Discord. Primary contributor: minipasila*