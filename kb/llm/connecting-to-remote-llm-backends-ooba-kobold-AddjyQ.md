---
id: AddjyQmxIF9FIvR4CP8nv
slug: connecting-to-remote-llm-backends-ooba-kobold-AddjyQ
type: tip
title: Using Local LLMs with Voxta (KoboldCpp, Oobabooga, and Remote Setup)
topics:
  - llm
  - integrations
  - configuration
  - setup
keywords:
  - remote
  - network
  - Oobabooga
  - Kobold
  - IP address
  - KoboldCpp
  - Text Generation WebUI
  - KoboldAI
  - Local LLM
  - GPU
  - VRAM
  - Hugging Face
  - GGUF
  - dual pc
  - resource usage
  - Voxta Cloud
  - external services
  - backend
confidence: 0.9
authority: 0.2
contributor: .frond
sources: []
created: 2025-12-19T04:24:49.023Z
updated: 2025-12-23T03:17:21.132Z
---

# Using Local LLMs with Voxta (KoboldCpp, Oobabooga, and Remote Setup)

> Voxta supports connecting to external LLM services like KoboldCpp and Oobabooga for local or remote model execution. This guide covers setup, configuration, and options for offloading to a second computer.

## Answer

# Using Local LLMs with Voxta\n\nVoxta can connect to external services that run Large Language Models (LLMs) locally or on a separate machine. This allows you to leverage your own hardware for AI processing, offering flexibility and control over model selection and performance.\n\n## Supported External LLM Services\n\nVoxta currently supports:\n\n- **KoboldCpp** (recommended for ease of use and performance)\n- **Oobabooga (Text Generation WebUI)**\n- **KoboldAI** (legacy)\n\nThese services act as backends that Voxta communicates with via API. The ability to run specific models depends on your computer's hardware, particularly GPU VRAM.\n\n## Setting Up KoboldCpp\n\nKoboldCpp is a popular option for running GGUF models efficiently. Follow these steps:\n\n1. **Download KoboldCpp** from the [official GitHub repository](https://github.com/LostRuins/koboldcpp).\n2. **Download a compatible model** in GGUF format from [Hugging Face](https://huggingface.co/models?search=gguf). Choose a model size that fits your GPU's VRAM (or use CPU offloading if needed).\n3. **Launch KoboldCpp** with your model file. You can typically run it via command line or a provided executable.\n4. **Configure Voxta**:\n   - Open Voxta settings.\n   - Under the LLM provider, select **Kobold**.\n   - Ensure the connection details match where KoboldCpp is running. The default URL is `http://localhost:5001` if KoboldCpp is on the same machine.\n5. **Start Voxta** and verify the connection.\n\n> KoboldCpp must be running while Voxta is active. If you close KoboldCpp, Voxta will lose LLM functionality.\n\n## Running the LLM on a Separate Computer\n\nTo reduce resource usage on your primary machine, you can run KoboldCpp (or another service) on a second computer on your local network.\n\n### Requirements\n\n- A second computer with a capable GPU (higher VRAM is better for larger models).\n- Both computers must be on the same network (or reachable via IP address).\n\n### Configuration Steps\n\n1. **Install and run KoboldCpp** on the secondary machine. Ensure it is configured to accept network connections (check firewall settings).\n2. **Determine the IP address** of the secondary machine (e.g., 192.168.1.100) and the port KoboldCpp is using (default is 5001).\n3. **In Voxta**, select **Kobold** as the provider and enter the remote machine's IP address and port in the URL field (e.g., `http://192.168.1.100:5001`).\n   - If you are using a different service (like Oobabooga), select the corresponding provider and adjust the URL accordingly.\n4. **Ensure the firewall** on the remote machine allows incoming connections on the specific port used by the LLM service.\n5. Save the settings and test the connection.\n\nThis setup allows you to dedicate GPU resources to the LLM while Voxta runs on a less powerful machine.\n\n## Alternative Services: Oobabooga (Text Generation WebUI)\n\n[Oobabooga's Text Generation WebUI](https://github.com/oobabooga/text-generation-webui) is another widely used backend. Voxta can connect to it similarly:\n\n1. Install and run Oobabooga on your local or remote machine.\n2. In Voxta, select the appropriate provider (e.g., \"Oobabooga\" or \"Kobold\" depending on compatibility; both use similar APIs). Consult Voxta documentation for the exact option.\n3. Configure the API endpoint (usually `http://localhost:5000` or the remote IP).\n4. Ensure the service is running and accessible.\n\nNote that Oobabooga supports a variety of model formats and advanced features.\n\n## Cloud Hosting Option\n\nIf you prefer not to manage local hardware, **Voxta Cloud** offers hosted LLM services. This eliminates the need to set up and maintain your own backend.\n\n## Troubleshooting Tips\n\n- Ensure the external service is running before starting Voxta.\n- Verify that the API endpoint is correct and accessible (no firewall blocking). For remote connections, test by accessing the API URL from a browser on the Voxta machine (e.g., `http://192.168.1.100:5001`).\n- For KoboldCpp, make sure you are using a GGUF model; other formats may not work.\n- If you encounter performance issues, consider reducing model size or enabling GPU layers offloading.\n- Double-check that the port number matches the one configured in the LLM service.\n- If using a remote machine, ensure both devices are on the same network subnet and that no network restrictions are in place.

---

*Extracted from Discord. Primary contributor: .frond*