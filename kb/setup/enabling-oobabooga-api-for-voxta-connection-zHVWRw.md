---
id: zHVWRw8bGOg3fcsN3hvog
slug: enabling-oobabooga-api-for-voxta-connection-zHVWRw
type: troubleshooting
title: Configuring Oobabooga Text Generation WebUI for Voxta
topics:
  - setup
  - integrations
  - troubleshooting
  - configuration
  - llm
keywords:
  - oobabooga
  - text generation web ui
  - api
  - CMD_FLAGS.txt
  - connection
  - api key
  - port 5000
  - network
  - listen
  - templates
  - openai compatible
confidence: 0.9
authority: 0.2
contributor: sraura
sources:
  - messageId: "1370271149170102363"
    author: sraura
    timestamp: 2025-12-22T22:40:52.447Z
    url: ""
created: 2025-12-22T22:40:52.447Z
updated: 2025-12-23T13:55:49.318Z
---

# Configuring Oobabooga Text Generation WebUI for Voxta

> Comprehensive guide to configuring Oobabooga for Voxta integration, including enabling the API, setting up authentication keys, configuring network settings, and customizing instruction templates.

## Answer

# Oobabooga Text Generation WebUI Setup and Configuration for Voxta

Oobabooga Text Generation WebUI is a popular interface for running language models. Voxta connects to its API for text generation. This guide covers basic configuration, network setup, customizing instruction templates, and troubleshooting connection issues.

## Basic Configuration

To allow Voxta to communicate with Oobabooga, you must enable the API and listening mode by modifying the command flags.

### Editing CMD_FLAGS.txt

1. Navigate to your Oobabooga installation folder.
2. Open the file `./user_data/CMD_FLAGS.txt`.
3. Add the necessary flags to the file (see below).
4. Ensure there is no `#` symbol at the start of the line (which would comment it out).
5. Restart Oobabooga for changes to take effect.

### Required Flags

- **`--api`**: You must start Oobabooga with this flag to enable the API endpoints. Without it, the API is unavailable.
- **`--listen`**: Required if Voxta and Oobabooga are on different computers. This binds the server to `0.0.0.0` to accept remote connections.
- **`--api-key=<your_key>`**: **Required for Voxta v146+**. You must define a custom API key manually in both Voxta and Oobabooga.
  - *Example*: `--api-key=myverysecureapikey`
  - Ensure the key in `CMD_FLAGS.txt` matches the key entered in Voxta's **Text Gen Web UI** service settings.

### Ports

- **Port 5000**: The default API port that Voxta connects to. You can change this using `--api-port <port>`, but Voxta expects port 5000 unless configured otherwise.
- **Port 7860**: The Web UI port for browser access; not used by Voxta.

## Network Setup (Multi-Machine)

If Voxta and Oobabooga are on different computers:
- Both devices must be on the same local network.
- Oobabooga must be started with the `--listen` flag.
- Ensure firewall rules allow traffic on the API port (default 5000).
- In Voxta, use the machine's LAN IP address, not `localhost`.

## Customizing Instruction Templates

The native Oobabooga integration in Voxta often uses hard-coded templates that cannot be edited directly in the UI. To use custom instruction templates:

1. Switch your Text Generation service in Voxta to **OpenAI Compatible**.
2. Connect this service to your Oobabooga API endpoint.
3. You can now use and edit the custom templates located in the `voxta\Resources\Formatting` directory.

## Verifying the API

To confirm Oobabooga is running and the API is accessible:
1. Open a web browser and navigate to `http://127.0.0.1:7860`. If the web interface loads, Oobabooga is running.
2. Check the API by visiting `http://127.0.0.1:5000` (or your configured API port). You should see a message indicating the API is running or a JSON response.

## Troubleshooting Connection Issues

If the web UI loads but Voxta cannot connect:

- **Missing Flags**: Ensure `--api` is present. For remote connections, ensure `--listen` is active. For Voxta v146+, ensure `--api-key` is set correctly on both ends.
- **Port Mismatch**: Voxta defaults to port 5000. If you changed the API port in Oobabooga, update Voxta's settings to match.
- **Outdated Version**: Older versions of Oobabooga may serve the web UI but have API issues. Updating to the latest version often resolves connection problems.
- **Network Configuration**: Verify the firewall allows the port and that you are using the correct LAN IP in Voxta.
- **Check Logs**: Review Oobabooga startup logs for errors related to the API or specific flags.

---

*Extracted from Discord. Primary contributor: sraura*