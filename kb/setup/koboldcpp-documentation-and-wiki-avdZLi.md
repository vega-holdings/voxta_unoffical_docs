---
id: avdZLiVeSJNeI3yaRXT6-
slug: koboldcpp-documentation-and-wiki-avdZLi
type: reference
title: "Setting Up KoboldCpp for Voxta: Setup, Vision, and Model Recommendations"
topics:
  - setup
  - integrations
  - llm
  - configuration
  - troubleshooting
  - performance
keywords:
  - KoboldCpp
  - setup
  - vision
  - mmproj
  - GGUF
  - local llm
  - connection
  - troubleshooting
  - VLM
  - Stheno
  - NeuralDaredevil
  - Orpheus
  - VRAM
  - bartowski
confidence: 1
authority: 0.2
contributor: futurestorm
sources: []
created: 2025-12-22T23:17:19.936Z
updated: 2025-12-23T13:53:31.960Z
---

# Setting Up KoboldCpp for Voxta: Setup, Vision, and Model Recommendations

> KoboldCpp is a standalone application that runs GGML/GGUF models and provides an API endpoint for Voxta. This guide covers downloading, recommended models for performance, loading standard or vision models, and configuring Voxta to connect to the local instance.

## Answer

# Setting Up KoboldCpp for Voxta

KoboldCpp is a self-contained AI text-generation software for GGML and GGUF models. It runs separately from Voxta and hosts an API endpoint that Voxta connects to for both text generation and computer vision capabilities.

## Overview

- **Separate Application:** KoboldCpp is not installed inside Voxta. You must download and run it independently.
- **Model Selection:** Models must be loaded within the KoboldCpp interface, not Voxta.
- **Startup Order:** Always start KoboldCpp and load your model **before** launching Voxta to avoid connection errors.
- **Unified Endpoint:** A single running instance of KoboldCpp can handle both text and vision requests.

For advanced configuration, refer to the [KoboldCpp Wiki](https://github.com/LostRuins/koboldcpp/wiki).

---

## Step 1: Download and Install

1. Visit the [KoboldCpp GitHub repository](https://github.com/LostRuins/koboldcpp).
2. Download the latest release compatible with your operating system (Windows, Linux, or macOS).

---

## Recommended Models

When using KoboldCpp with Voxta, selecting the right model is crucial for balancing performance and quality, especially if you are running Text-to-Speech (TTS) simultaneously.

### Top Recommendations

The following 8B GGUF models are recommended for their balance of speed and intelligence:

*   [L3-8B-Stheno-v3.2-GGUF](https://huggingface.co/bartowski/L3-8B-Stheno-v3.2-GGUF/tree/main)
*   [NeuralDaredevil-8B-abliterated-GGUF](https://huggingface.co/bartowski/NeuralDaredevil-8B-abliterated-GGUF/tree/main)

### Performance Tips

- **File Size:** Aim for a model file size around **5GB to 6GB** (quantized). This typically leaves sufficient system resources (RAM/VRAM) to run TTS services (such as Orpheus) simultaneously without running out of memory.
- **Source:** Models quantized by reputable sources like `bartowski` on Hugging Face are generally reliable.

---

## Step 2: Load a Model

You can load standard text models or vision-capable models (VLMs) into KoboldCpp.

### Standard Text Models
1. Launch the KoboldCpp executable.
2. Load a GGUF model file (obtainable from sources like Hugging Face).
3. Start the server. By default, it hosts at `http://localhost:5001`.

### Vision Models (VLM)
To use computer vision, you need a compatible LLM and a matching projector file (`.mmproj`).

**Requirements:**
- A vision-capable GGUF model (e.g., **Mistral Small 3.1 24b** or **Gemma 3**).
- The corresponding `.mmproj` file that matches the LLM's architecture.

**Configuration:**
1. Download the model and the matching `.mmproj` file (e.g., from [koboldcpp/mmproj](https://huggingface.co/koboldcpp/mmproj/tree/main) on Hugging Face).
2. Load both files into KoboldCpp. You can use the UI or the command line:
   ```bash
   koboldcpp.exe --model your_model.gguf --mmproj your_model.mmproj
   ```
3. Ensure the mmproj file is compatible with your specific model architecture (e.g., Mistral LLM requires a Mistral mmproj).

---

## Step 3: Configure Voxta

Once KoboldCpp is running, configure Voxta to connect to it.

### Text Generation
1. Open Voxta and navigate to **Services** (or Settings).
2. Locate the **KoboldCpp** service.
3. Ensure the API URL points to your local instance (e.g., `http://localhost:5001`).
4. Save the configuration.

### Vision Module
If you loaded a vision model in Step 2:
1. Go to the **Vision** module settings in Voxta.
2. Set the provider to **KoboldAI**.
3. Enter the same URL as your text generation endpoint (e.g., `http://localhost:5001`).

---

## Troubleshooting

- **Voxta cannot connect:** Verify KoboldCpp is running. Try opening the API URL (e.g., `http://localhost:5001`) in a web browser to check if the UI loads. Ensure the URL in Voxta matches exactly.
- **Model not loading:** Ensure you have a valid GGUF file and sufficient system resources (RAM/VRAM).
- **Vision issues:** Confirm the `.mmproj` file matches the model architecture. Mixing architectures (e.g., a Gemma mmproj with a Mistral model) will fail.
- **Connection errors on startup:** Restart the applications in the correct order—KoboldCpp first, then Voxta.

---

*Extracted from Discord. Primary contributor: futurestorm*