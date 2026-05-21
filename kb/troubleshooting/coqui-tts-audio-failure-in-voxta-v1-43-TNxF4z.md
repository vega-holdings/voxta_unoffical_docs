---
id: TNxF4zV-7q6xhRpXQyp5E
slug: coqui-tts-audio-failure-in-voxta-v1-43-TNxF4z
type: troubleshooting
title: Coqui TTS Audio Failure in Voxta v1.43+
topics:
  - troubleshooting
  - performance
keywords:
  - Coqui
  - TTS
  - audio
  - no supported source
  - browser
  - Edge
  - v1.45
confidence: 0.6
authority: 0.2
contributor: caz2727
sources: []
created: 2025-12-22T22:41:28.257Z
updated: 2025-12-22T22:41:28.257Z
---

# Coqui TTS Audio Failure in Voxta v1.43+

> Workaround for Coqui TTS audio stopping with 'no supported source' error in Voxta v1.43+.

## Answer

Users have reported an issue in Voxta versions 1.43 through 1.45 where Coqui TTS audio stops playing after a prolonged session (e.g., 30-40 messages) or fails to play in chat.

**Symptoms:**
- Error message: "Failed to play audio: Failed to load because no supported source was found."
- Text in the browser inspector appears with a strikethrough.
- Text generation continues, but no voice is heard.

**Workaround:**
Restarting the web browser (closing it completely and reopening) and re-entering the chat via the Web UI has been reported to temporarily resolve the issue. Merely exiting and resuming the chat session within the same browser instance may not work.

---

*Extracted from Discord. Primary contributor: caz2727*