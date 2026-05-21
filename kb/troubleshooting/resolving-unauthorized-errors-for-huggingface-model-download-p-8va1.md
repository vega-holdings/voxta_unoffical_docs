---
id: p-8va1UqT06wYYJ5oJMAe
slug: resolving-unauthorized-errors-for-huggingface-model-download-p-8va1
type: troubleshooting
title: Downloading HuggingFace Models and Resolving Authentication Errors
topics:
  - troubleshooting
  - configuration
  - llm
keywords:
  - HuggingFace
  - download
  - gated
  - HF_TOKEN
  - authentication
  - ExLlamaV2
  - manual download
  - "hf:"
confidence: 0.9
authority: 0.2
contributor: acidbubbles
sources:
  - messageId: "1404109620552925225"
    author: acidbubbles
    timestamp: 2025-12-22T23:25:54.209Z
    url: ""
  - messageId: "1404314626585530399"
    author: acidbubbles
    timestamp: 2025-12-22T23:25:54.209Z
    url: ""
  - messageId: "1404316069652594760"
    author: acidbubbles
    timestamp: 2025-12-22T23:25:54.209Z
    url: ""
  - messageId: "1404320802488193126"
    author: acidbubbles
    timestamp: 2025-12-22T23:25:54.209Z
    url: ""
created: 2025-12-22T23:25:54.209Z
updated: 2025-12-23T13:51:43.506Z
---

# Downloading HuggingFace Models and Resolving Authentication Errors

> Instructions for downloading HuggingFace models directly via the Voxta UI using the `hf:` prefix, and troubleshooting unauthorized errors for gated repositories by setting an authentication token.

## Answer

Voxta allows you to download HuggingFace models directly via the user interface. However, if a model is gated or private, you must authenticate to resolve unauthorized download errors.

## Downloading Models via the UI

To download models directly within the Voxta UI:

1.  In the **Model** field, enter the HuggingFace repository string prefixed with `hf:` (for example, `hf:Sao10K/14B-Qwen2.5-Kunou-v1`).
2.  Press **Enter**.
3.  A download button will appear at the end of the row; click it to initiate the download.

> **Note for ExLlamaV2 users:** Ensure you select a compatible EXL2 quantized model (e.g., `hf:Statuo/Qwen-2.5-14b-Kunou-EXL2-4bpw`).

## Resolving Unauthorized Errors (Gated Repositories)

This error typically occurs when a model is gated or private on HuggingFace. To resolve this, follow these steps:

1.  **Request Access:** Ensure you have visited the model's HuggingFace page and accepted the license terms or agreement.
2.  **Get Your Token:** Retrieve your access token from [HuggingFace Tokens](https://huggingface.co/settings/tokens).
3.  **Set Authentication Token:**
    *   **Windows:** Search for **Edit the system environment variables**, create a new variable named `HF_TOKEN`, and paste your token as the value.
    *   **Configuration:** Alternatively, ensure the `hf_token` is set within your Voxta configuration files.
4.  **Restart:** Restart Voxta (or reboot Windows if necessary) to ensure the new environment variables are loaded.

## Alternative: Manual Download

If the client fails or you prefer not to use the UI downloader:

1.  Download the model files manually from the Hugging Face website.
2.  Place them in the correct Voxta model directory.

> **Note:** Ensure that you are operating within the correct executable Python environment that runs within Voxta when troubleshooting download failures.

---

*Extracted from Discord. Primary contributor: acidbubbles*