---
id: BJd1kzCenSZnkqT3iFeca
slug: choosing-speech-to-text-model-size-BJd1kz
type: tip
title: Optimizing Model Selection and VRAM Usage
topics:
  - configuration
  - performance
keywords:
  - stt
  - tts
  - whisper
  - f5-tts
  - xtts
  - vram
  - cpu
  - model size
  - optimization
  - accent
confidence: 0.85
authority: 0.2
contributor: sraura
sources:
  - messageId: "1360556943231684618"
    author: sraura
    timestamp: 2025-12-22T22:35:38.688Z
    url: ""
created: 2025-12-22T22:35:38.688Z
updated: 2025-12-23T13:58:17.351Z
---

# Optimizing Model Selection and VRAM Usage

> Guidance on selecting TTS and STT models to balance recognition accuracy, accent support, and VRAM consumption, including CPU offloading options.

## Answer

When configuring Voxta, selecting the right models for Text-to-Speech (TTS) and Speech-to-Text (STT) is essential for balancing performance, accuracy, and resource consumption (VRAM).

### Speech-to-Text (STT) - Whisper
The choice of STT model involves a trade-off between VRAM usage and recognition accuracy.

*   **Model Size & Accents**:
    *   **Small Models**: Generally sufficient for native English speakers and consume significantly less VRAM.
    *   **Larger Models**: Recommended for users with accents, as they provide higher recognition accuracy. However, they require more VRAM.
*   **CPU Offloading**: To free up GPU memory, Whisper can be offloaded to the **CPU**. Note that while this saves VRAM, it will result in slower transcription speeds.
*   **Recommendation**: The 'small' or 'medium' models are typically sufficient for most use cases.

### Text-to-Speech (TTS)
Different TTS engines have varying resource footprints.

*   **F5-TTS**: Generally consumes less VRAM compared to XTTS.
*   **XTTS**: Offers high quality but at a higher cost to VRAM.

### Best Practices
*   Start with a smaller model (e.g., Whisper 'small') to conserve resources.
*   Upgrade to a larger model only if you experience recognition issues, particularly with accents.

---

*Extracted from Discord. Primary contributor: sraura*