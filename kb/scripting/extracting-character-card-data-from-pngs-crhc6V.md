---
id: crhc6VHUgiJZq4p53pbWk
slug: extracting-character-card-data-from-pngs-crhc6V
type: tip
title: Extracting Character Card Data from PNGs
topics:
  - scripting
  - configuration
keywords:
  - character card
  - metadata
  - png
  - base64
  - chara
  - tEXt chunk
  - decoding
confidence: 0.8
authority: 0.2
contributor: artnnj
sources: []
created: 2025-12-22T22:33:53.439Z
updated: 2025-12-22T22:33:53.439Z
---

# Extracting Character Card Data from PNGs

> Methods to manually or programmatically extract character data embedded in PNG metadata.

## Answer

Character card data is embedded within the PNG file's metadata. 

### Manual Extraction
1. Use a metadata inspection tool (e.g., metadata2go) to analyze the PNG.
2. Locate the `chara` field in the metadata.
3. The content is Base64 encoded; use a Base64 decoder to reveal the character JSON.

### Programmatic Access
The data is stored in the `tEXt` chunk of the PNG. Scripts can read or modify this chunk directly without requiring heavy external libraries.

---

*Extracted from Discord. Primary contributor: artnnj*