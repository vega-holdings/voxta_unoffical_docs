---
id: yrGkdmALwAXZCiW28k4mY
slug: creating-voice-samples-for-coqui-xtts-yrGkdm
type: qa
title: Creating Voice Samples for Coqui/XTTS
topics:
  - integrations
  - configuration
keywords:
  - Coqui
  - XTTS
  - voice cloning
  - wav
  - audacity
  - sample rate
  - 22050Hz
confidence: 0.9
authority: 0.2
contributor: .frond
sources:
  - messageId: "1324314735323254884"
    author: .frond
    timestamp: 2025-12-19T04:53:35.559Z
    url: ""
  - messageId: "1324285293548797962"
    author: .frond
    timestamp: 2025-12-19T04:53:35.559Z
    url: ""
created: 2025-12-19T04:53:35.559Z
updated: 2025-12-19T04:53:35.559Z
---

# Creating Voice Samples for Coqui/XTTS

> Instructions for preparing and formatting audio samples for Coqui/XTTS voice cloning.

## Answer

For Coqui (XTTS), you do not need to perform full model training. You simply need to place a properly formatted `.wav` file in the `\Data\Audio\VoiceSamples\` folder.

### Recommended Specifications
*   **Length:** 7-9 seconds (longer is not necessarily better).
*   **Format:** Mono, 22050Hz, 16-bit WAV.
    *   *Note: Using higher sample rates (e.g., 44.1kHz) can significantly slow down processing and may result in poorer quality.*

### Preparation Steps (Audacity)
1.  **Clean Audio:** Remove background noise, music, or hiss before downsampling.
2.  **Resample:** Select clip -> `Tracks` > `Resample` to **22050Hz**.
3.  **Mix to Mono:** `Tracks` > `Mix` > `Stereo to Mono`.
4.  **Export:** `File` > `Export Audio` > Save as **WAV** at **22050Hz**.

### Quality Tips
*   Ensure the clip contains flowing speech without large pauses.
*   Avoid clips with background music or sound effects.
*   Trim breathy sounds (inhales/exhales) from the start and end of the clip.

---

*Extracted from Discord. Primary contributor: .frond*