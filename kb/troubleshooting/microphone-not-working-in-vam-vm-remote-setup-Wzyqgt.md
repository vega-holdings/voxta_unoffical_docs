---
id: WzyqgtzIyjdeOLmCTheP6
slug: microphone-not-working-in-vam-vm-remote-setup-Wzyqgt
type: troubleshooting
title: Microphone and Audio Configuration for Remote Voxta Instances in VAM
topics:
  - troubleshooting
  - setup
  - configuration
  - integrations
keywords:
  - microphone
  - VAM
  - VM
  - virtual machine
  - remote
  - NAudio
  - netsh
  - portproxy
  - windows server
  - audio
  - network
  - proxy
confidence: 0.9
authority: 0.2
contributor: objp
sources:
  - messageId: "1383772220349878312"
    author: objp
    timestamp: 2025-12-22T23:03:12.692Z
    url: ""
created: 2025-12-22T23:03:12.692Z
updated: 2025-12-23T13:56:42.508Z
---

# Microphone and Audio Configuration for Remote Voxta Instances in VAM

> When running Voxta on a separate machine or VM from Virt-A-Mate (VAM), microphone access may fail due to NAudio security restrictions. This entry explains how to use Windows portproxy as a workaround and notes future tooling developments.

## Answer

When running Voxta Server on a separate machine or VM to distribute system load, you may encounter issues with audio integration. Simply changing the IP address in the VAM plugin is often insufficient because Voxta restricts NAudio (local microphone) usage if the connection does not originate locally (from `127.0.0.1`) for security reasons.

### Workaround: Using Windows Portproxy

You can use the Windows `netsh` command to proxy traffic so that it appears to originate locally on the host machine.

**Prerequisites:**
*   Ensure Voxta is configured to bind to localhost.

**Steps:**

1.  Open a command prompt or PowerShell with administrative privileges on the Windows host.
2.  Run the following command (replace `<YOUR_IP>` with the interface IP receiving the connection):

```powershell
netsh interface portproxy add v4tov4 listenport=5384 listenaddress=<YOUR_IP> connectport=5384 connectaddress=127.0.0.1
```

This configuration forwards traffic from the external IP to localhost, allowing the microphone to function correctly in VAM.

### Future Developments

Developers are currently working on a dedicated proxy tool (client/server) specifically designed to handle remote audio for VAM. This tool aims to provide a more streamlined solution for distributing system load across separate machines in the future.

---

*Extracted from Discord. Primary contributor: objp*