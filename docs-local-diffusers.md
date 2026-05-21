---
title: "Local Diffusers"
url: "https://doc.voxta.ai/docs/local-diffusers/"
scraped_at: "2025-12-22T00:00:00.000Z"
status: "draft"
---

# Local Diffusers

Local Diffusers is a self-hosted image generation module that runs Stable Diffusion models directly on your computer. Generate images from text descriptions during chat without sending data to external services.

## Overview

Local Diffusers enables:

- **Text-to-image generation** during conversations
- **Character portrait generation** based on descriptions
- **Scene visualization** for roleplay scenarios
- **Complete privacy** - all processing happens locally

## Requirements

### Hardware

- **GPU**: NVIDIA GPU with 6GB+ VRAM recommended
  - 8GB+ VRAM for higher resolutions
  - 12GB+ VRAM for SDXL models
- **RAM**: 16GB+ system RAM recommended
- **Storage**: 5-20GB per model

### Software

- Voxta Server (automatically manages the module)
- CUDA-compatible GPU drivers

## Installation

1. Go to **Manage Modules > Add Modules**
2. Find **Local Diffusers** under Image Generation
3. Click **Install**
4. Wait for initial setup (downloads dependencies)
5. Configure the module

## Configuration

Access configuration via **Manage Modules > Local Diffusers > Configure**.

### Model Selection

Choose which Stable Diffusion model to use:

- **SD 1.5 models** - Faster, lower VRAM, good quality
- **SDXL models** - Higher quality, more VRAM needed
- **Custom models** - Point to your own .safetensors files

### Generation Settings

| Setting | Description | Default |
|---------|-------------|---------|
| **Steps** | Denoising steps (more = better quality, slower) | 20-30 |
| **CFG Scale** | How closely to follow the prompt | 7.0 |
| **Sampler** | Sampling algorithm (Euler, DPM++, etc.) | DPM++ 2M Karras |
| **Width** | Output image width | 512 |
| **Height** | Output image height | 512 |
| **Seed** | Random seed (-1 for random) | -1 |

### Prompt Settings

| Setting | Description |
|---------|-------------|
| **Prompt Prefix** | Added before every prompt |
| **Prompt Suffix** | Added after every prompt (quality tags) |
| **Negative Prompt** | What to avoid in generations |

### Performance Settings

| Setting | Description |
|---------|-------------|
| **Precision** | float16 (faster) or float32 (more compatible) |
| **VAE** | Optional custom VAE for better colors |
| **Low VRAM Mode** | Enables memory optimizations |

## Using in Chat

Once configured, Local Diffusers integrates with chat:

### Automatic Generation

Characters can generate images based on conversation context when:
- Image generation is enabled for the character
- The conversation triggers a visual description

### Manual Generation

Use the Image Gen Playground to test:

1. Go to **Playground > Image Gen**
2. Enter a prompt describing the image
3. Optionally add a negative prompt
4. Set resolution (Width/Height)
5. Click **Generate**

## Presets

Save different configurations as presets:

- **Portrait** - Optimized for character faces
- **Scene** - Wider aspect ratio for environments
- **Quick** - Lower steps for faster generation
- **Quality** - Higher steps for detailed output

Access presets via **Manage Modules > Local Diffusers > Presets**.

## Recommended Models

### For Anime/Stylized

- Anything V5
- Counterfeit V3
- MeinaMix

### For Realistic

- Realistic Vision
- CyberRealistic
- epiCRealism

### For SDXL

- SDXL Base + Refiner
- Juggernaut XL
- RealVisXL

## Performance Tips

### Faster Generation

- Use SD 1.5 models instead of SDXL
- Lower step count (15-20 steps)
- Use efficient samplers (DPM++ 2M Karras)
- Enable Low VRAM Mode if needed

### Better Quality

- Use more steps (30-50)
- Use SDXL models
- Add quality tags to prompt suffix
- Use appropriate negative prompts

### Memory Management

- Close other GPU applications
- Enable Low VRAM Mode for 6GB cards
- Use smaller resolutions (512x512 or 768x768)
- Consider fp16 precision

## Integration with Characters

Characters can be configured to use image generation:

1. Edit a character
2. In the Configuration tab, enable Image Generation
3. Set generation triggers and settings
4. The character will generate images contextually

## Troubleshooting

### "CUDA out of memory"

- Enable Low VRAM Mode
- Reduce resolution
- Close other GPU applications
- Use a smaller model

### Slow Generation

- Check GPU utilization
- Reduce step count
- Use faster sampler
- Ensure CUDA is properly installed

### Poor Quality Output

- Increase step count
- Adjust CFG scale (try 7-12)
- Improve prompt with quality tags
- Check negative prompt for conflicts

### Module Won't Start

- Verify GPU drivers are current
- Check CUDA compatibility
- Review Voxta logs for errors
- Ensure sufficient disk space for models

## Related Pages

- [Manage Modules](manage-modules.md) - Module management
- [Add Modules](add-modules.md) - Installing modules
- [Playgrounds](playgrounds.md) - Testing image generation
- [Characters](characters.md) - Character configuration

---

## Related KB Articles

- [Customizing Image Generation Prompts](kb/configuration/modifying-the-image-generation-system-prompt-jd77XY.md)
- [ComfyUI Local Image Generation](kb/configuration/comfyui-local-image-generation-X4ceoX.md)
- [Enabling NSFW Image Generation in ComfyUI](kb/configuration/enabling-nsfw-image-generation-in-comfyui-bdiAI7.md)
- [ComfyUI Error: Value not in list](kb/troubleshooting/comfyui-image-generation-error-value-not-in-list-cEdRWq.md)
- [Image Generation Setup and Methods](kb/configuration/cost-and-setup-for-imagine-feature-7cOlHz.md)
- [Fix 'node is missing class_type' Error](kb/troubleshooting/fix-node-is-missing-the-class-type-property-image-generation-SWsEj5.md)
