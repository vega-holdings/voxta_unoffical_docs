---
id: TeJRXrwB7JPkB5S6q0XNW
slug: running-voxta-server-on-a-separate-machine-from-vam-TeJRXr
type: troubleshooting
title: "Running Voxta Server and VAM on Separate Machines: Limitations and
  LLM/TTS Offloading"
topics:
  - setup
  - troubleshooting
  - configuration
  - llm
keywords:
  - remote server
  - separate machine
  - network
  - audio missing
  - lip sync
  - VAM
  - dual pc
  - LAN
  - KoboldCPP
  - Oobabooga
  - LM Studio
  - remote llm
  - remote tts
  - audio path
  - UnauthorizedAccessException
  - Voxta Server
  - Virt-A-Mate
confidence: 1
authority: 0.2
contributor: acidbubbles
sources:
  - messageId: "1339977556379566221"
    author: acidbubbles
    timestamp: 2025-12-22T20:36:52.043Z
    url: ""
  - messageId: "1340001793932918926"
    author: acidbubbles
    timestamp: 2025-12-22T20:36:52.043Z
    url: ""
created: 2025-12-22T20:36:52.043Z
updated: 2025-12-23T01:56:30.142Z
---

# Running Voxta Server and VAM on Separate Machines: Limitations and LLM/TTS Offloading

> Voxta Server must run on the same computer as Virt-A-Mate because it writes audio files directly to VAM's directory; however, you can offload resource-intensive services like LLM and TTS to another PC to improve performance.

## Answer

# Running Voxta Server and VAM on Separate Machines

## Why Voxta Server and VAM Must Be on the Same Computer

Voxta Server generates audio files (speech) and writes them directly to the Virt-A-Mate (VAM) temporary directory. The VAM plugin then accesses these files locally for playback and lip-sync. If Voxta Server runs on a different machine, it cannot write to the local VAM folder, and VAM cannot access the files, leading to errors.

### Symptoms of Separation

- Character performs gestures (received via websocket) but no audio plays.
- Lip-sync does not work.
- In the Voxta Server logs, you may see `System.UnauthorizedAccessException` errors.
- The character may hang in the "speaking" state indefinitely.

## Offloading LLM and TTS to Another PC

While Voxta Server and VAM must remain together, you can offload resource-intensive services like the Large Language Model (LLM) and Text-to-Speech (TTS) to a separate computer to improve performance.

### Architecture

- **Main PC:** Runs Voxta Server and VAM.
- **Secondary PC:** Hosts LLM (e.g., via KoboldCPP, Oobabooga Text Generation WebUI, LM Studio) and/or TTS services.

### Configuration Steps

1. **Set up the secondary PC:**
   - Install the desired LLM/TTS software (e.g., KoboldCPP) and ensure it is running and accessible over the network.
   - Assign a static LAN IP address to the secondary PC (e.g., `192.168.0.55`).

2. **Configure Voxta Server on the main PC:**
   - Open Voxta Server and go to **Manage Services**.
   - Add the module corresponding to your remote service (e.g., KoboldCPP module for LLM, or the appropriate TTS module).
   - In the module settings, set the IP address to point to the secondary PC's address.
   - Save and restart Voxta Server as needed.

3. **Hardware Considerations:**
   - A secondary PC with a GPU having at least 8–12 GB VRAM (e.g., RTX 3060, RTX 4060) can run quantized models (GGUF) at acceptable speeds.

**Note:** The same principle applies to TTS services; you can host them on a separate machine and point Voxta Server to that IP.

## Potential Workarounds for Full Separation

Some users have considered using network drives and symbolic links to map the VAM folder across machines, theoretically allowing Voxta Server to write to a network location that appears local to VAM. However, this approach is complex, untested, and not recommended due to potential performance issues and file permission errors.

## Future Support

Native support for running Voxta Server on a separate machine would require a proxy that routes HTTP/Websocket calls and downloads audio files locally. This feature is not currently implemented but may be considered in future updates.

---

*Extracted from Discord. Primary contributor: acidbubbles*