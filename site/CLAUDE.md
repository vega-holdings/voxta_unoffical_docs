# CLAUDE.md - Voxta Unofficial Docs Site

This file provides guidance to Claude Code when working with this project.

## Project Overview

A searchable documentation site for Voxta built with:
- **PayloadCMS** - Headless CMS for content management
- **Next.js 15** - React framework with App Router
- **Cloudflare D1** - SQLite database
- **Cloudflare R2** - Media/file storage
- **Cloudflare Vectorize** - Vector search index (384 dimensions, cosine metric)
- **Cloudflare Workers AI** - Embedding generation (`@cf/baai/bge-small-en-v1.5`)
- **OpenNext** - Adapter for deploying Next.js to Cloudflare
- **Discord OAuth** - User authentication via Discord (requires Voxta Discord membership)
- **GitHub Actions** - CI/CD for build checks

## Content

| Collection | Count | Description |
|------------|-------|-------------|
| docs-pages | 84 | Official documentation + dev guides |
| kb-articles | 1,005 | Community knowledge base articles |
| discord-users | varies | Users who logged in via Discord |
| contributor_mappings | 754 | Discord ID to contributor name mappings (from scraper) |

## PayloadCMS Collections

### DocsPage (`src/collections/DocsPage.ts`)
- Fields: title, slug, content (textarea), category, sortOrder, originalUrl, relatedKB, lastEditedBy, lastEditedByName, lastEditedByDiscordId, lastEditedAt
- `category`: One of documentation, installing, interface, modules, developers, creators
- `sortOrder`: Number for ordering within category (lower = first)
- **Versioning**: PayloadCMS native versioning enabled (maxPerDoc: 25)

### KBArticle (`src/collections/KBArticle.ts`)
- Fields: title, slug, content (textarea), type, category, topics[], keywords[], confidence
- **Contributor tracking**: contributor (original name), originalContributor, lastEditedBy, lastEditedByName, lastEditedByDiscordId, lastEditedAt, editHistory[]
- Edit tracking fields link to DiscordUsers
- **Versioning**: PayloadCMS native versioning enabled (maxPerDoc: 25)

### DiscordUsers (`src/collections/DiscordUsers.ts`)
- Fields: discordId, username, displayName, avatar, claimedContributorNames[], editCount, lastLogin, isGuildMember, isAdmin, displayPreference, favoriteKBArticles, favoriteDocsPages
- `isGuildMember`: Must be member of Voxta Discord (ID: 1125594592180445284) to edit/create
- `claimedContributorNames`: Array of contributor names claimed/auto-linked to this user
- `isAdmin`: Boolean for admin privileges
- `displayPreference`: 'username' or 'displayName' - controls how name appears on edits
- `favoriteKBArticles`: Relationship array to favorited KB articles
- `favoriteDocsPages`: Relationship array to favorited documentation pages

## User Features

### Discord Login
- Login button in header navigates to `/api/auth/discord`
- OAuth scopes: `identify guilds` (to verify Voxta Discord membership)
- OAuth callback at `/api/auth/discord/callback`
- User session stored in `discord_user` cookie (includes isGuildMember flag)
- `/api/auth/me` returns current user, `/api/auth/logout` clears session
- **Guild Check**: Verifies user is member of Voxta Discord (ID: 1125594592180445284)
- **Auto-association**: On login, checks `contributor_mappings` table and auto-claims contributor name

### User Account Page (`/account`)
- Shows user profile with avatar and display name
- Stats: original contributions, edits made, claimed names
- Lists claimed contributor names (clickable to profile)
- Shows original contributions and recent edits
- **Favorites**: Shows favorited KB articles and documentation pages
- **Settings**: Choose display preference (username vs display name)

### Contributor Profiles (`/contributor/[name]`)
- Shows articles by that contributor
- Auto-linked when Discord user logs in (via contributor_mappings)
- Claimed profiles show Discord avatar and display name

### KB Article Editing
- Logged-in guild members see "Edit" button on KB articles
- Edit page at `/kb/[slug]/edit` with title and markdown content
- `/api/kb/edit` saves changes via PayloadCMS (requires guild membership)
- Tracks lastEditedByName (uses user's displayPreference), lastEditedByDiscordId, lastEditedAt

### KB Article Creation
- Guild members see "+ New Article" button on KB list page
- Create page at `/kb/new` with title, content, category, type
- `/api/kb/create` creates new article (requires guild membership)
- Automatically sets contributor to the creating user

### Favorites
- Star button on KB articles and documentation pages
- Toggle favorite via `/api/favorites` (POST/DELETE)
- View all favorites on account page

### Documentation Download
- Doc pages have "DL .md" button to download content as markdown file

## Commands

```bash
# Development
pnpm install
pnpm dev                    # Start dev server at localhost:3000

# Build & Deploy
pnpm build                  # Build for production
pnpm deploy                 # Deploy to Cloudflare Pages

# Database
pnpm payload migrate        # Run Payload migrations on local D1

# Type checking
npx tsc --noEmit           # Check TypeScript without emitting

# Secrets (use correct project name!)
npx cross-env CLOUDFLARE_API_TOKEN=xxx npx wrangler secret put SECRET_NAME --name voxta-unoffical-docs
```

## Project Structure

```
site/
├── src/
│   ├── app/
│   │   ├── (frontend)/           # Public pages
│   │   │   ├── docs/[slug]/      # Doc detail pages (with DL button)
│   │   │   ├── kb/[slug]/        # KB article pages
│   │   │   │   └── edit/         # KB edit page
│   │   │   ├── kb/new/           # New KB article page
│   │   │   ├── contributor/[name]/ # Contributor profiles
│   │   │   ├── account/          # User account page + settings
│   │   │   ├── docs/page.tsx     # Docs list (grouped by category)
│   │   │   ├── kb/page.tsx       # KB list
│   │   │   ├── leaderboard/      # Top contributors page
│   │   │   ├── components/       # HeaderSearch, DiscordLogin, DownloadButton, FavoriteButton
│   │   │   └── page.tsx          # Homepage with search + quick-links
│   │   ├── (payload)/            # PayloadCMS admin UI
│   │   └── api/
│   │       ├── search/route.ts   # Vector search endpoint
│   │       ├── auth/             # Discord OAuth routes
│   │       │   ├── discord/      # OAuth initiate & callback (with auto-claim)
│   │       │   ├── me/           # Get current user
│   │       │   └── logout/       # Clear session
│   │       ├── kb/edit/          # KB article editing
│   │       ├── kb/create/        # KB article creation
│   │       ├── favorites/        # Favorites API (GET/POST/DELETE)
│   │       ├── user/settings/    # User settings (display preference)
│   │       └── admin/
│   │           └── populate-vectors/route.ts
│   ├── collections/
│   │   ├── DocsPage.ts
│   │   ├── KBArticle.ts
│   │   ├── DiscordUsers.ts
│   │   └── Media.ts
│   ├── components/
│   │   ├── MarkdownContent.tsx   # Markdown renderer with link transformation
│   │   └── SearchForm.tsx        # Search UI component
│   └── payload.config.ts         # Payload configuration
├── wrangler.jsonc                # Cloudflare bindings config
├── populate-vectors.js           # Script to populate Vectorize index
└── .github/workflows/build.yml   # CI/CD build check workflow
```

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/search?q=query` | GET | Vector search for docs and KB |
| `/api/auth/discord` | GET | Initiate Discord OAuth |
| `/api/auth/discord/callback` | GET | OAuth callback (auto-claims contributor) |
| `/api/auth/me` | GET | Get current logged-in user |
| `/api/auth/logout` | GET | Clear session cookie |
| `/api/kb/edit` | POST | Update KB article (requires login) |
| `/api/user/settings` | POST | Update user settings (display preference) |
| `/api/admin/populate-vectors` | POST | Populate Vectorize index |

## D1 Tables (beyond Payload)

| Table | Description |
|-------|-------------|
| `contributor_mappings` | Maps Discord IDs to contributor usernames (from scraper dkm.db) |
| `discord_users_claimed_contributor_names` | Payload array field storage for claimed names |

## Cloudflare Configuration

### Project
- **Name**: `voxta-unoffical-docs`
- **Database**: `voxta-docs` (D1)
- **Bucket**: `voxta-docs` (R2)
- **Index**: `voxta-docs-index` (Vectorize)

### Secrets (set via wrangler)
```bash
npx cross-env CLOUDFLARE_API_TOKEN=xxx npx wrangler secret put PAYLOAD_SECRET --name voxta-unoffical-docs
npx cross-env CLOUDFLARE_API_TOKEN=xxx npx wrangler secret put DISCORD_CLIENT_ID --name voxta-unoffical-docs
npx cross-env CLOUDFLARE_API_TOKEN=xxx npx wrangler secret put DISCORD_CLIENT_SECRET --name voxta-unoffical-docs
npx cross-env CLOUDFLARE_API_TOKEN=xxx npx wrangler secret put NEXT_PUBLIC_APP_URL --name voxta-unoffical-docs
```

### Environment Variables
- `PAYLOAD_SECRET` - Secret for Payload admin & API auth
- `CLOUDFLARE_API_TOKEN` - For wrangler CLI operations
- `DISCORD_CLIENT_ID` - Discord OAuth app client ID
- `DISCORD_CLIENT_SECRET` - Discord OAuth app client secret
- `NEXT_PUBLIC_APP_URL` - Site URL (https://voxta.axailotl.ai)

## Data Import

### Import Contributor Mappings (from scraper dkm.db)
```bash
python import-contributor-mappings.py
npx cross-env CLOUDFLARE_API_TOKEN=xxx npx wrangler d1 execute voxta-docs --remote --file=import-contributor-mappings.sql
```

### Import Docs
```bash
node clean-import-docs.cjs
npx cross-env CLOUDFLARE_API_TOKEN=xxx npx wrangler d1 execute voxta-docs --remote --file=clean-import-docs.sql
```

### Import KB Articles
```bash
node clean-import-kb.cjs
npx cross-env CLOUDFLARE_API_TOKEN=xxx npx wrangler d1 execute voxta-docs --remote --file=clean-import-kb-0.sql
```

### Populate Vector Index
```bash
PAYLOAD_SECRET=your-secret node populate-vectors.js
```

## Troubleshooting

**Discord login shows "not configured"**
- Ensure DISCORD_CLIENT_ID and DISCORD_CLIENT_SECRET secrets are set
- Use `wrangler secret put --name voxta-unoffical-docs`

**Search returns no results**
- Vectorize index may be empty
- Run `populate-vectors.js` to index all content

**Edits not saving**
- Check user is logged in (cookie present)
- Verify PayloadCMS can write to D1
- Check `payload_locked_documents_rels` has columns for all collections

**Contributor not auto-linked on login**
- Check `contributor_mappings` table has user's Discord ID
- Import from dkm.db using `import-contributor-mappings.py`

**D1 errors on deploy**
- Run migrations: `pnpm payload migrate`
- Check wrangler.jsonc database_id matches your D1 instance
