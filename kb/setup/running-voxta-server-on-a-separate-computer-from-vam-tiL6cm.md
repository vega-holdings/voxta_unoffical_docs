---
id: tiL6cmF2Cd0pH8YOoStPU
slug: running-voxta-server-on-a-separate-computer-from-vam-tiL6cm
type: troubleshooting
title: Running Voxta Server on a Separate Computer (Remote/LAN Access)
topics:
  - setup
  - configuration
  - integrations
  - troubleshooting
keywords:
  - remote
  - network
  - LAN
  - VAM
  - Virt-A-Mate
  - appsettings.json
  - listening address
  - TTS
  - STT
  - subst
  - firewall
  - microphone
confidence: 0.8
authority: 0.2
contributor: j2x2.
sources:
  - messageId: "1341145673915043861"
    author: j2x2.
    timestamp: 2025-12-22T20:44:44.976Z
    url: ""
  - messageId: "1341187303560970242"
    author: j2x2.
    timestamp: 2025-12-22T20:44:44.976Z
    url: ""
  - messageId: "1341189908571619500"
    author: j2x2.
    timestamp: 2025-12-22T20:44:44.976Z
    url: ""
created: 2025-12-22T20:44:44.976Z
updated: 2025-12-23T04:34:12.576Z
---

# Running Voxta Server on a Separate Computer (Remote/LAN Access)

> Instructions for configuring Voxta to accept connections from other devices on the network, including sharing audio files for TTS and handling limitations of remote microphone input.

## Answer

# Remote/LAN Access for Voxta Server

This guide explains how to run Voxta Server on one computer and connect to it from another device on the same network (or via VPN). It covers network configuration, audio file sharing for TTS, and the current limitations of remote microphone input (STT).

## 1. Configure Voxta Server to Listen on the Network

By default, Voxta Server listens only on `localhost`. To allow remote connections, you must edit the `appsettings.json` file in the root folder of your Voxta installation.

**Important:** Back up the file before making changes. Modifying core configuration files carries risks.

### Steps:
1. Open `appsettings.json` in a text editor.
2. Locate the `Host` setting (usually under `Kestrel` > `Endpoints` > `Http`).
3. Change the value to either:
   - Your server's LAN IP address (e.g., `192.168.1.100`) to bind to a specific interface, or
   - `0.0.0.0` to listen on all network interfaces.
4. (Optional) Add the IP addresses or hostnames of client machines to the `PreauthorisedHosts` and `PreauthorisedIpAddresses` arrays to restrict access.
5. Save the file and restart Voxta Server.

**Firewall:** Ensure your firewall allows incoming connections on the port Voxta uses (default: 5001 for HTTPS, 5000 for HTTP).

## 2. Connect from a Client

On the client machine (e.g., a browser or VAM with the Voxta plugin), use the server's IP address and port to connect:
- `http://<server-ip>:5000` for HTTP
- `https://<server-ip>:5001` for HTTPS

If you're using a VPN like Tailscale, use the VPN IP address.

## 3. Handling TTS Audio Files (for VAM and Similar Clients)

When Voxta generates TTS audio, it saves the files locally on the server. Clients like Virt-A-Mate (VAM) need direct file access to play them. To make these files available on the client:

1. **Share the Voxta output folder** on the server (typically `Voxta\Data\Audio`).
2. **Map the shared folder as a network drive** on the client machine.
3. In VAM's Voxta settings, point the audio path to the mapped drive (e.g., `Z:\Audio`).

**Tip:** If VAM has trouble with network drive letters, you can use the Windows `subst` command to create a virtual drive that points to the network share. For example:
```
subst X: "\\server\share\Audio"
```
Symlinks generally do not work with network mapped drives.

## 4. Microphone/STT Limitations

Sending microphone audio from a remote client to Voxta Server is not straightforward:
- **Browser security:** If you access Voxta's web UI from a remote machine, the browser will require HTTPS (SSL) to grant microphone permissions. Even with HTTPS, some browsers may still block microphone access on non-`localhost` addresses.
- **VAM plugin:** The VAM plugin currently does not support sending microphone input over the network. Audio capture happens locally on the VAM machine, but Voxta Server runs remotely.

**Workarounds (unofficial):**
- Use third-party "voice over network" software combined with virtual audio cables (e.g., VB-Cable) to route microphone input from the client to the server. This is complex and not officially supported.
- Consider running Voxta Server on the same machine as VAM if STT is essential.

## Additional Notes
- For VPN setups (e.g., Tailscale), the same principles apply; just use the VPN IP address.
- Always test connectivity and permissions after making changes.
- Keep your Voxta installation updated, as future versions may improve remote STT support.

---

*Extracted from Discord. Primary contributor: j2x2.*