---
id: Y5oUt3S8TW8ESjUxDiWhX
slug: cli-command-for-searching-audio-and-module-logs-Y5oUt3
type: tip
title: CLI Command for Searching Audio and Module Logs
topics:
  - troubleshooting
keywords:
  - grep
  - logs
  - audio
  - portaudio
  - naudio
  - debugging
  - cli
  - modules
confidence: 0.8
authority: 0.2
contributor: cinnabrad
sources: []
created: 2025-12-23T00:04:23.583Z
updated: 2025-12-23T00:04:23.583Z
---

# CLI Command for Searching Audio and Module Logs

> A grep command to search Voxta logs for audio and module registration events.

## Answer

To troubleshoot audio or module loading issues, you can search the Voxta log files using `grep` from the Voxta root directory (requires a Bash-compatible terminal like Git Bash on Windows). This command filters for keywords related to audio services (PortAudio, NAudio) and module registration:

```bash
grep -Ei 'module|audio|portaudio|naudio|IAudio(Input|Output)Service|registered' -n Data/**/*.log 2>/dev/null || true
```

---

*Extracted from Discord. Primary contributor: cinnabrad*