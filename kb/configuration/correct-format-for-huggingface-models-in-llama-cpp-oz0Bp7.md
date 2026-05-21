---
id: oz0Bp7p5u0e--HhMM44uN
slug: correct-format-for-huggingface-models-in-llama-cpp-oz0Bp7
type: qa
title: Correct format for HuggingFace models in llama.cpp
topics:
  - configuration
  - llm
keywords:
  - llama.cpp
  - huggingface
  - "hf:"
  - syntax
  - model path
confidence: 0.95
authority: 0.2
contributor: .munkeychunks
sources:
  - messageId: "1331989835036098591"
    author: .munkeychunks
    timestamp: 2025-12-19T05:33:47.544Z
    url: ""
created: 2025-12-19T05:33:47.544Z
updated: 2025-12-19T05:33:47.544Z
---

# Correct format for HuggingFace models in llama.cpp

> Explains the required `hf:ModelName/ModelFile` syntax for configuring llama.cpp models.

## Answer

According to the official documentation, you must specify both the model repository and the specific file name.

**Format:**
`hf:ModelName/ModelFile`

**Example:**
`hf:QuantFactory/NeuralDaredevil-8B-abliterated-GGUF/NeuralDaredevil-8B-abliterated.Q4_K_M.gguf`

Simply providing the repository URL or name without the specific file path is insufficient.

---

*Extracted from Discord. Primary contributor: .munkeychunks*