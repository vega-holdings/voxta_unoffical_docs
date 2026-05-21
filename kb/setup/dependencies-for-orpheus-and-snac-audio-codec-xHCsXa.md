---
id: xHCsXaK7uEhbeghF8uNCi
slug: dependencies-for-orpheus-and-snac-audio-codec-xHCsXa
type: tip
title: Installing Python Dependencies for Orpheus and Snac Audio Codec
topics:
  - setup
  - configuration
  - integrations
keywords:
  - Orpheus
  - Snac
  - soundfile
  - librosa
  - dependencies
  - pip
  - virtual environment
  - audio codec
  - Linux
confidence: 0.6
authority: 0.2
contributor: mrdragonfox
sources: []
created: 2025-12-22T23:15:10.789Z
updated: 2025-12-23T03:28:56.770Z
---

# Installing Python Dependencies for Orpheus and Snac Audio Codec

> Install the required Python packages (librosa and soundfile) in your virtual environment to run the Orpheus service, which uses the Snac audio codec.

## Answer

When setting up the **Orpheus** service, which utilizes the **Snac** audio codec, ensure that your Python virtual environment includes the following dependencies:

- `librosa`
- `soundfile`

The `soundfile` library provides support for reading and writing audio files, including the Snac codec.

To install these packages, activate your virtual environment and run:

```bash
pip install librosa soundfile
```

(If you are on Linux, you may also need to install system-level audio libraries such as `libsndfile`, but the Python packages themselves are cross-platform.)

---

*Extracted from Discord. Primary contributor: mrdragonfox*