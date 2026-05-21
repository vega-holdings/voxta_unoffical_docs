# Documentation Rename Mapping

This document tracks outdated documentation files that need to be renamed, merged, or deprecated to match the current Voxta UI (v1.2.0).

## Terminology Changes

The UI has shifted from "Services" to "Modules" terminology:

| Old Term | New Term | Notes |
|----------|----------|-------|
| Services | Modules | Central concept change |
| Add Service | Add Modules | Installation page |
| Service | Module | Individual component |

## Files to Rename/Update

### HIGH PRIORITY - Terminology Mismatch

| Current File | Recommended Action | New File | Notes |
|--------------|-------------------|----------|-------|
| `docs-services.md` | DEPRECATE/REDIRECT | `docs-manage-modules.md` | New doc created, old refers to outdated UI |
| `docs-add-service.md` | DEPRECATE/REDIRECT | `docs-add-modules.md` | New doc created, old refers to outdated UI |

### MEDIUM PRIORITY - Content Updates Needed

| Current File | Action | Notes |
|--------------|--------|-------|
| `docs-menu.md` | UPDATE | Navigation structure changed, add Collections |
| `docs-profile.md` | UPDATE | New fields: Favorite Character, Assistant, Narrator |
| `docs-playgrounds.md` | UPDATE | Image Gen section needs Local Diffusers info |
| `docs-wizard.md` | REVIEW | May reference old "Services" terminology |
| `docs-services-overview.md` | UPDATE | Should reference Modules, add new modules |

### LOW PRIORITY - Minor Updates

| Current File | Action | Notes |
|--------------|--------|-------|
| `docs-getting-started.md` | REVIEW | May need UI screenshot updates |
| `docs-characters.md` | REVIEW | May reference old service configuration |
| `docs-scenarios.md` | REVIEW | Check terminology |
| `docs-chat.md` | REVIEW | Check sidebar references |

## New Files Created

These files were created to fill documentation gaps:

| New File | Purpose | Priority |
|----------|---------|----------|
| `docs-manage-modules.md` | Central module management hub | HIGH |
| `docs-add-modules.md` | Installing new modules | HIGH |
| `docs-configurations.md` | Configuration presets | HIGH |
| `docs-local-diffusers.md` | Image generation module | HIGH |
| `docs-collections.md` | Content organization | MEDIUM |
| `docs-import.md` | Importing content | MEDIUM |
| `docs-app-registrations.md` | Connected applications | MEDIUM |
| `docs-running-services.md` | Active service monitor | LOW |
| `docs-chats.md` | Chat session management | LOW |

## Navigation Structure Update

The sidebar navigation in docs should match the UI:

### Current UI Navigation (v1.2.0)

```
CHAT
  Home
  Chats                    <- NEW DOC NEEDED (created)

CREATOR STUDIO
  Characters
  Scenarios
  Collections              <- NEW DOC NEEDED (created)
  Memory Books
  Packages
  Import                   <- NEW DOC NEEDED (created)

CONFIGURATION
  Open Settings Panel
  Configurations           <- NEW DOC NEEDED (created)
  Manage Modules           <- REPLACES "Services" (created)
  Running Services         <- NEW DOC NEEDED (created)
  Profile & Settings

PLAYGROUND
  Text Gen
  Speech To Text
  Text To Speech
  Image Gen                <- UPDATE for Local Diffusers
  Vision

ADVANCED
  Diagnostics
  Benchmarks
  App Registrations        <- NEW DOC NEEDED (created)

HELP
  Documentation
```

## Module Documentation Updates

### New Modules Needing Docs

| Module | Category | Priority |
|--------|----------|----------|
| Local Diffusers | Image Generation | HIGH (created) |
| ExLlamaV3 | Chat Replies | MEDIUM |
| Chatterbox TTS | Voice | LOW |
| Kitten TTS | Voice | LOW |
| Orpheus | Voice | LOW |
| Sesame | Voice | LOW |
| AssemblyAI | Speech Transcription | LOW |

### Existing Module Docs to Review

All module docs should be reviewed for:
- Correct terminology (Service → Module)
- Updated configuration UI references
- Preset system documentation
- Integration with Configurations system

## Implementation Steps

### Phase 1: Critical Updates
1. Deploy new docs (manage-modules, add-modules, configurations)
2. Add deprecation notices to old services docs
3. Update navigation/menu doc

### Phase 2: Content Migration
1. Update profile.md with new fields
2. Update playgrounds.md with Image Gen changes
3. Review and update all "service" references

### Phase 3: New Module Docs
1. Create docs for new modules (ExLlamaV3, new TTS options)
2. Update services-overview.md with full module list
3. Add module comparison/recommendation guide

### Phase 4: Cleanup
1. Remove or redirect deprecated docs
2. Update all internal links
3. Refresh screenshots throughout docs

## Search and Replace Guide

When updating existing docs, search for and update:

| Find | Replace With |
|------|--------------|
| "Services page" | "Manage Modules page" |
| "Add Service" | "Add Modules" |
| "service" (when referring to modules) | "module" |
| "/services" (URLs) | "/modules" or "/manage-modules" |
| "add-service" (URLs) | "/add-modules" |

## Notes

- All new docs are marked with `status: "draft"` in frontmatter
- Screenshots will need updating after doc review
- Consider creating a "Migration Guide" for users familiar with old UI
