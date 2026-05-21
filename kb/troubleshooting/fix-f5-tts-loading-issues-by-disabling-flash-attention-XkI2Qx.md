---
id: XkI2QxPfE9PO4x9C6MmIv
slug: fix-f5-tts-loading-issues-by-disabling-flash-attention-XkI2Qx
type: troubleshooting
title: Fix F5-TTS Loading Issues by Disabling Flash Attention
topics:
  - troubleshooting
  - configuration
keywords:
  - F5-TTS
  - flash_attn
  - flash_attention
  - run_server.py
  - windows
  - error
confidence: 0.6
authority: 0.2
contributor: .starmoose
sources: []
created: 2025-12-22T22:54:46.432Z
updated: 2025-12-22T22:54:46.432Z
---

# Fix F5-TTS Loading Issues by Disabling Flash Attention

> Workaround to disable flash_attn in F5-TTS to prevent loading failures on Windows.

## Answer

If F5-TTS fails to load due to `flash_attention` issues on Windows (post Voxta version 1.0.0-v143), you can force disable it by modifying the python script.

**Steps:**
1. Navigate to `Voxta root\Data\Python\modules\f5tts\`.
2. Backup `run_server.py`.
3. Open `run_server.py` and find line 45.
4. Insert the following code on a new line directly below line 45:
   ```python
   self.attn = use_flash_attn=False
   ```
5. Save the file and restart Voxta.

---

*Extracted from Discord. Primary contributor: .starmoose*