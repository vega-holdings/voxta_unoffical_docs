---
id: 9-aRi_brggrB7eC051HwJ
slug: character-data-storage-location-9-aRi_
type: reference
title: Character Data Storage Location
topics:
  - configuration
  - scripting
keywords:
  - character data
  - storage
  - png
  - metadata
  - database
  - db file
  - file structure
confidence: 0.6
authority: 0.2
contributor: pro_kun_vita
sources: []
created: 2025-12-22T23:11:09.973Z
updated: 2025-12-22T23:11:09.973Z
---

# Character Data Storage Location

> Character data is stored in a database file, not in the thumbnail PNG metadata.

## Answer

Voxta stores character profile data in a local database (`.db` file) rather than embedding it within the thumbnail PNG metadata (such as `tEXt` chunks). 

The character directory located at `Data\Users\{UserUUID}\Characters\{CharacterUUID}` typically contains only the thumbnail image file, while the actual definitions reside in the main database.

---

*Extracted from Discord. Primary contributor: pro_kun_vita*