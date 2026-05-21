---
id: I2AF-aae8_9N4Royl2WBa
slug: running-voxta-services-on-a-secondary-machine-network-setup-I2AF-a
type: tip
title: Running Voxta Services on a Secondary Machine (Network Setup)
topics:
  - setup
  - configuration
  - integrations
  - performance
keywords:
  - network
  - remote
  - lan
  - xtts
  - kobold
  - oobabooga
  - secondary machine
  - ip address
  - firewall
  - listen
  - offloading
  - TextToSpeechHttpApi
  - dual pc
confidence: 0.85
authority: 0.2
contributor: .frond
sources: []
created: 2025-12-19T06:04:18.669Z
updated: 2025-12-23T02:32:21.612Z
---

# Running Voxta Services on a Secondary Machine (Network Setup)

> Instructions for configuring Voxta to connect to resource-intensive services like XTTS or LLMs running on a different computer on the local network. Includes steps for enabling network access, firewall configuration, and updating Voxta settings.

## Answer

# Running Voxta Services on a Secondary Machine (Network Setup)

Instructions for offloading resource-intensive services (e.g., XTTS, KoboldCpp, Oobabooga) to another computer on your local network, while running Voxta Server on your main machine. This reduces load on your primary system.

## General Steps

1. **Install & Run the Service** on the secondary machine. Follow the service's official documentation to set it up correctly. For Python-based services, ensure you have a compatible Python environment (e.g., Python 3.11).
2. **Enable Network Listening** for the service. Many services default to localhost only; you need to start them with an option to accept remote connections. Common flags: `--listen`, `--api`, or `--host 0.0.0.0`. Consult the service's documentation.
3. **Find the Secondary Machine's IP Address**. On Windows, open Command Prompt and run `ipconfig`; look for the IPv4 address under your active network adapter (e.g., `192.168.1.50`).
4. **Configure Voxta** on your main machine. In the service settings, replace `localhost` or `127.0.0.1` with the secondary machine's IP address. Use the appropriate port number for the service.

## Specifics for XTTS Server

The [xtts-api-server](https://github.com/daswer123/xtts-api-server) is a common TTS service used with Voxta. To run it remotely:

1. **Install** the server on the secondary machine as per its README.
2. **Enable Remote Access** by adding the `--listen` argument to the startup command. Edit the `Start_Server.bat` file (or equivalent) and modify the line to include `--listen`. Example:
```bash
python -m xtts_api_server -d cuda --deepspeed --listen
```
   This makes the server listen on all network interfaces.
3. **Firewall Configuration**: Ensure the firewall on the secondary machine allows incoming connections on port **8020** (the default XTTS port). If your main machine's firewall blocks outgoing connections, allow outbound traffic on that port as well.
4. **Voxta Configuration** (on main machine):
   - Select or install the **TextToSpeechHttpApi** service.
   - Set **Voices Url** to `http://<IP_ADDRESS>:8020/speakers`
   - Set **Url Template** to `http://<IP_ADDRESS>:8020/tts_to_audio/`
   Replace `<IP_ADDRESS>` with the secondary machine's IP.

## Additional Considerations

- **Other Services**: For KoboldCpp, Oobabooga, or similar LLM backends, the process is analogous: start the service with network listening enabled (e.g., `--api` for Oobabooga, `--host 0.0.0.0` for KoboldCpp) and then point Voxta to `http://<IP>:<port>`.
- **Security**: This setup assumes a trusted local network. If you need to expose services over the internet, consider additional security measures (e.g., VPN, authentication).
- **Troubleshooting**: If Voxta cannot connect, verify that the service is running, the IP address is correct, the port is open, and no firewall is blocking the connection. You can test by accessing the service's API URL from a browser on the main machine (e.g., `http://<IP>:8020/speakers` should return a list of voices).

---

*Extracted from Discord. Primary contributor: .frond*