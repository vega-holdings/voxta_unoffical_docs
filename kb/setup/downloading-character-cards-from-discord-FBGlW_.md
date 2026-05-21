---
id: FBGlW_LkKaTG4gk4FPsOs
slug: downloading-character-cards-from-discord-FBGlW_
type: tip
title: Finding, Importing, and Converting Character Cards in Voxta
topics:
  - setup
  - configuration
  - troubleshooting
  - integrations
  - llm
keywords:
  - character cards
  - import
  - export
  - conversion
  - discord
  - patreon
  - png
  - json
  - voxpkg
  - sillytavern
  - v2 spec
  - llm
  - webp
  - metadata
confidence: 1
authority: 0.2
contributor: futurestorm
sources:
  - messageId: "1406644237939773520"
    author: futurestorm
    timestamp: 2025-12-22T23:26:26.199Z
    url: ""
created: 2025-12-22T23:26:26.199Z
updated: 2025-12-23T13:53:46.670Z
---

# Finding, Importing, and Converting Character Cards in Voxta

> Learn how to find character cards in the Voxta Discord, import them while preserving metadata, and convert external cards (like SillyTavern) to Voxta V2 format using manual or LLM-assisted methods.

## Answer

# Finding, Importing, and Converting Character Cards in Voxta

Character cards define AI personalities in Voxta. They come in several file formats and can be sourced from the community or created by converting cards from other platforms. This guide covers finding, importing, and converting character cards.

## Supported Formats

Voxta supports the following character card formats:

- **PNG** – An image file with embedded character metadata (compatible with TavernAI cards).
- **JSON** – A plain text file containing the character definition.
- **.voxpkg** – A packaged format specific to Voxta.

## Finding Character Cards

The primary source for additional character cards is the **Voxta Discord community**. Look for the **pinned messages** in the relevant character sharing channels (e.g., `#scenes-characters-scenarios`).

**Note:** Access to many of these channels typically requires a subscription to the [Voxta Patreon Companion Tier](https://www.patreon.com/voxta/membership) or higher.

## Importing Character Cards

Once you have a character file (PNG, JSON, .voxpkg), you can import it into Voxta using either method:

- **Using the Import function:** Open Voxta, go to **File** → **Import** (or use the dedicated Import button), and select the file.
- **Drag and drop:** Simply drag the file from your file explorer and drop it onto the Voxta window.

### Troubleshooting Discord Downloads

When downloading character card images from Discord, the platform may convert the file to `.webp` or strip the embedded metadata, causing import failures. To preserve the original PNG format and metadata:

1.  **Open in Browser:** In the Discord desktop app, click the image to open it, then select **Open in Browser**. Save the image from the browser window.
2.  **Copy Link:** Right-click the image, copy the link, and paste it into a browser. Then save the image from there.

If you downloaded a `.webp` file, you can try dragging it into Voxta, but if the metadata was stripped, use the workarounds above to get the original PNG.

## Converting External Character Cards to Voxta V2 Format

There is currently no one-click solution to convert character cards from external platforms (e.g., SillyTavern) to Voxta's V2 specification due to differences in field formatting. However, you can use the following workarounds:

### 1. Manual JSON Comparison

Open a Voxta character card (JSON) and the source card in a text editor. Compare the fields and manually map the data from the source to the Voxta structure. This method requires familiarity with JSON and the Voxta V2 spec.

### 2. Using an LLM (Large Language Model)

You can use an LLM like ChatGPT or a local LLM (e.g., via LM Studio) to rewrite the exported JSON to the Voxta V2 format.

**Steps:**

1.  Export the character card to JSON from the source platform.
2.  Provide the JSON to the LLM with a prompt asking it to convert the data to the Voxta V2 specification.
3.  Copy the LLM's output and save it as a `.json` file.
4.  Import the JSON file into Voxta.
5.  **Re-add the character image manually** (the image is not embedded in the JSON).

**Note:** Standard cloud-based LLMs like ChatGPT may refuse to process NSFW character data. For such content, use a local LLM that does not impose content restrictions.

### 3. Voxta Assistant Mode

If you have Voxta running, you can use its assistant mode to help generate the character details. Provide the source character information (e.g., description, personality) and ask Voxta to format it as a Voxta V2 character card.

After conversion, verify the card's behavior in Voxta and adjust any fields if necessary.

---

*Extracted from Discord. Primary contributor: futurestorm*