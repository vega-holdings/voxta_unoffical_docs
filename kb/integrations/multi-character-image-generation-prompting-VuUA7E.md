---
id: VuUA7EedJYSVLqO11XLIx
slug: multi-character-image-generation-prompting-VuUA7E
type: tip
title: Multi-Character Image Generation Prompting
topics:
  - integrations
  - configuration
keywords:
  - image generation
  - scriban
  - template
  - multi-character
  - prompt engineering
  - camera angles
confidence: 0.8
authority: 0.2
contributor: iceburn
sources: []
created: 2025-12-22T23:35:09.827Z
updated: 2025-12-22T23:35:09.827Z
---

# Multi-Character Image Generation Prompting

> A template and prompt strategy for handling multiple characters and camera angles in image generation.

## Answer

To generate images involving multiple characters or specific subjects in a scenario, you can modify the image generation prompt template to iterate through available characters using Scriban syntax.

### Template Snippet
Use the following code to include descriptions for the main character and other characters in the scene:

```handlebars
Main Character{{~ if !char_description.empty? ~}}
Main character appearance: {{ char_description }}
{{~ end ~}}

Other Characters{{~ if !characters.empty? ~}}
{{~ for char in characters ~}}
{{ char.name }}: {{ char.description }}{{~ end ~}}
{{~ end ~}}
```

### Prompt Strategy
To improve variety and composition, consider adding instructions like the following to the image prompt:

> State the setting and location, then choose one {{ char }} or subject from the most recent chat to generate an image for generation. Only describe this {{ char }} or subject in the image generation prompt. The image prompt should be prompted in a way that would best describe what is happening in visual way. The prompt should in include the full {{ char }} appearance details.
> Add one of the following danbooru image composition tags last, that best fits the current chat convo: Straight-on, Dutch angle, From above, From behind, From below, From side, Multiple views, or high up.

---

*Extracted from Discord. Primary contributor: iceburn*