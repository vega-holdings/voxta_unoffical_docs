# Voxta Unofficial Documentation
![Gemini_Generated_Image_mvc66gmvc66gmvc6](https://github.com/user-attachments/assets/4b3ac633-41e4-4344-92dc-7ebf5a7fce5e)

Unofficial community documentation for [Voxta](https://voxta.ai/) - an AI conversation platform.

> **Note**: This is unofficial documentation maintained by the community. For official resources, visit [voxta.ai](https://voxta.ai/).

## Repository Structure

### Documentation Pages (`docs-*.md`)
User-facing documentation covering features, setup, and configuration. Based on the official Voxta documentation structure.

### Development Guides
Resources for developers building modules, clients, and providers:

| File | Description |
|------|-------------|
| `VOXTA_DEVELOPMENT_GUIDE.md` | Comprehensive development guide |
| `Voxta.Abstractions.md` | SDK abstractions reference |
| `Voxta.Core.md` | Core library documentation |

### File Structure Reference
Documentation about Voxta's package and file formats:

| File | Description |
|------|-------------|
| `Voxta_Package.md` | Package format specification |
| `voxpkg_structure_report.md` | Package structure analysis |

### Chat Templates
| File | Description |
|------|-------------|
| `Voxta_Scriban.md` | Scriban template variable reference |

### Knowledge Base (`kb/`)
Community-sourced Q&A articles extracted from Discord discussions. Organized by topic:
- `kb/configuration/` - Setup and configuration tips
- `kb/troubleshooting/` - Common issues and solutions
- `kb/llm/` - LLM-specific guidance
- `kb/integrations/` - Integration guides (VAM, etc.)
- `kb/scenarios/` - Scenario creation tips

### Other Directories
| Directory | Description |
|-----------|-------------|
| `plans/` | Planning documents for KB development |
| `legacy/` | Older/possibly outdated documentation |

## Terminology Note

As of Voxta v1.2.0, the UI has shifted from "Services" to "Modules" terminology. Some documentation may still use the older terms. See `_RENAME_MAPPING.md` for migration details.

## Contributing

KB articles are community-sourced and should be validated before being considered authoritative. See `_KB_LINKS.md` for mappings between documentation pages and related KB articles.

## How to Use

Dump the relevant files as context and ask your LLM for help with Voxta development or configuration.
