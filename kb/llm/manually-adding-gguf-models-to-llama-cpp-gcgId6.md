---
id: gcgId6MyXz3Ve4DxR6k3e
slug: manually-adding-gguf-models-to-llama-cpp-gcgId6
type: qa
title: Using Custom Models in Voxta
topics:
  - llm
  - configuration
  - setup
keywords:
  - custom models
  - GGUF
  - GPTQ
  - manual installation
  - model folder
  - huggingface
  - llama.cpp
  - Llamasharp
  - KoboldAI
  - KoboldCpp
  - Voxta
  - model selection
confidence: 0.9
authority: 0.2
contributor: alvar89alvar89
sources:
  - messageId: "1332499804491878524"
    author: alvar89alvar89
    timestamp: 2025-12-19T05:41:18.275Z
    url: ""
created: 2025-12-19T05:41:18.275Z
updated: 2025-12-23T04:35:56.952Z
---

# Using Custom Models in Voxta

> Voxta supports custom models beyond the default selection list. You can add GGUF models by placing them in the HuggingFace data folder, or other formats like GPTQ by configuring the model path in the relevant service settings.

## Answer

# Using Custom Models in Voxta

Voxta provides a selection of pre-configured models to help you get started quickly. However, you are not limited to these—you can use any compatible model, including GGUF and GPTQ formats from HuggingFace or other sources. This guide explains how to add custom models to Voxta.

## Supported Services and Formats

Voxta supports several inference services that can load custom models:

- **llama.cpp** – supports GGUF models.
- **Llamasharp** – supports GGUF models.
- **KoboldAI** (which uses KoboldCpp) – supports GGUF models.
- Other services may support GPTQ or other formats.

When you select a service in Voxta's settings, the available models will be those that are compatible with that service and placed in the correct location.

## Adding GGUF Models

GGUF is the most common format for local LLMs. Voxta can automatically detect GGUF models placed in its HuggingFace data directory.

### Step-by-Step

1. **Download the GGUF file** from a trusted source (e.g., HuggingFace). The file should have a `.gguf` extension (e.g., `Llama-3.2-3B-Instruct.Q4_K_M.gguf`).

2. **Locate your Voxta installation directory**. This is where you installed or extracted Voxta (e.g., `C:\Program Files\Voxta` or the portable version folder).

3. **Navigate to the HuggingFace data folder**. Inside the Voxta directory, go to `data/huggingface/` (on Windows the case may differ, e.g., `Data/HuggingFace`). This folder is used by Voxta to store model files.

4. **Create a new folder for your model** (optional but recommended). Give it a descriptive name ending with `GGUF` (e.g., `Llama-3.2-3B-GGUF`). This helps you identify the model later.

5. **Place the GGUF file** inside that folder. You can place multiple GGUF files in the same folder if they belong to the same model variant, but usually one file is enough.

6. **Restart Voxta** if it was running, then go to the service configuration (e.g., llama.cpp, Llamasharp, or KoboldAI). Your model should now appear in the model dropdown list.

### Notes

- The service scans all subfolders of `data/huggingface/` for `.gguf` files, so the folder name is not critical.
- If the model does not appear, ensure:
  - The file extension is `.gguf`.
  - You have selected a service that supports GGUF (llama.cpp, Llamasharp, or KoboldAI).
  - Voxta has read permissions for the folder.
- For optimal performance, make sure your hardware meets the model's requirements.

## Adding Other Model Formats (GPTQ, etc.)

For model formats other than GGUF (such as GPTQ), the process is slightly different because Voxta does not automatically scan for them. Instead, you need to manually specify the model path in the service settings.

1. **Download the model files** from a source like HuggingFace. Ensure they are in a format supported by the service you intend to use.

2. **Place the files in a folder of your choice** (it does not have to be inside the Voxta directory, but it can be).

3. **In Voxta, go to the service configuration** and look for the "Model Path" or "Custom Model" option. Enter the full path to the model file or the folder containing the model files.

4. **Save the settings and restart the service** if necessary.

Some services may also allow you to select a model from a list if you place it in the HuggingFace data folder, but this behavior is not guaranteed for all formats. Refer to the specific service's documentation for detailed instructions.

## Troubleshooting

- **Model not appearing**: Double-check the file location and that the service supports the format. For GGUF, ensure the file is directly inside a subfolder of `data/huggingface/` (not nested too deep).
- **Service fails to load model**: Verify that the model is compatible with the service (e.g., correct quantization, architecture). Check the service logs for error messages.
- **Performance issues**: Larger models require more VRAM/RAM. Adjust context size or use a smaller quantization.

By following these steps, you can expand Voxta's capabilities with any model that suits your needs.

---

*Extracted from Discord. Primary contributor: alvar89alvar89*