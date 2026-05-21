---
id: QJ0Ujr3eYs2cqB2WioNOv
slug: character-foundry-cli-optimization-command-QJ0Ujr
type: reference
title: Character Foundry CLI Optimization Command
topics:
  - performance
  - scripting
keywords:
  - "@character-foundry/cli"
  - optimization
  - compression
  - voxpkg
  - ffmpeg
  - webp
  - mp3
confidence: 0.8
authority: 0.2
contributor: daisukearamaki
sources: []
created: 2025-12-23T00:08:44.261Z
updated: 2025-12-23T00:08:44.261Z
---

# Character Foundry CLI Optimization Command

> Documentation for the @character-foundry/cli optimize command used to compress media assets in Voxta packages.

## Answer

The `@character-foundry/cli` tool includes an `optimize` command designed to compress and optimize Voxta packages (`.voxpkg`). It handles image, audio, and video compression while automatically updating JSON metadata references.

### Features
- **Image optimization**: Converts to WebP, adjusts quality, and resizes dimensions.
- **Audio optimization**: Converts WAV to MP3/OGG/AAC with configurable bitrates.
- **Video optimization**: Re-encodes using libx264/libx265/VP9 with resolution limits and CRF quality settings.
- **Presets**: Includes `balanced` (default), `web`, `mobile`, and `archive`.
- **Safety**: Non-destructive (outputs to new file) and includes a `--dry-run` mode.

### Usage Examples
```bash
# Basic usage (Balanced preset)
npx @character-foundry/cli optimize character.voxpkg

# Aggressive web compression
npx @character-foundry/cli optimize character.voxpkg --preset web

# Preview changes without writing
npx @character-foundry/cli optimize character.voxpkg --dry-run

# Custom configuration
npx @character-foundry/cli optimize character.voxpkg \
  --image-format webp --image-quality 80 \
  --audio-format mp3 --audio-bitrate 128k \
  --video-crf 28 --video-max-resolution 720p
```

---

*Extracted from Discord. Primary contributor: daisukearamaki*