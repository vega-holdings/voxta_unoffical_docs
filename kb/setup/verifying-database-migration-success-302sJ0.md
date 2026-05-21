---
id: 302sJ0vmPpcep2AqW1yOy
slug: verifying-database-migration-success-302sJ0
type: troubleshooting
title: Verifying Database Migration Success
topics:
  - setup
  - troubleshooting
keywords:
  - migration
  - database
  - LiteDB
  - Voxta.db
  - logs
confidence: 0.7
authority: 0.2
contributor: sraura
sources: []
created: 2025-12-22T22:50:21.810Z
updated: 2025-12-22T22:50:21.810Z
---

# Verifying Database Migration Success

> Log message confirming successful database migration.

## Answer

A successful database migration is indicated by the log message: `"Migration completed, renaming LiteDB file to Voxta.db.migrated, you can delete it now"`. This confirms that the data import went through correctly and the old database file can be safely removed.

---

*Extracted from Discord. Primary contributor: sraura*