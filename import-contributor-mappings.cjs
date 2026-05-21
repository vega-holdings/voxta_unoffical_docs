const fs = require('fs')
const sqlite3 = require('better-sqlite3')

// Read the dkm.db scraper database
const db = sqlite3('./data/dkm.db')

// Get all contributors with their Discord IDs
const contributors = db.prepare(`
  SELECT DISTINCT
    c.user_id as discord_id,
    c.username,
    c.display_name
  FROM contributors c
  WHERE c.user_id IS NOT NULL
`).all()

console.log(`Found ${contributors.length} contributors`)

// Generate SQL to create mapping table
let sql = `-- Drop existing table if exists
DROP TABLE IF EXISTS contributor_mappings;

-- Create contributor mappings table
CREATE TABLE contributor_mappings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  discord_id TEXT NOT NULL UNIQUE,
  username TEXT NOT NULL,
  display_name TEXT
);

-- Insert mappings
`

for (const c of contributors) {
  const username = c.username.replace(/'/g, "''")
  const displayName = (c.display_name || c.username).replace(/'/g, "''")
  sql += `INSERT INTO contributor_mappings (discord_id, username, display_name) VALUES ('${c.discord_id}', '${username}', '${displayName}');\n`
}

fs.writeFileSync('import-contributor-mappings.sql', sql)
console.log('Generated import-contributor-mappings.sql')

db.close()
