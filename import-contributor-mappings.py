import sqlite3

# Read the dkm.db scraper database
conn = sqlite3.connect('./data/dkm.db')
cursor = conn.cursor()

# Get all contributors with their Discord IDs
cursor.execute('''
  SELECT DISTINCT
    user_id as discord_id,
    username,
    display_name
  FROM contributors
  WHERE user_id IS NOT NULL
''')
contributors = cursor.fetchall()

print(f'Found {len(contributors)} contributors')

# Generate SQL to create mapping table
sql = '''-- Drop existing table if exists
DROP TABLE IF EXISTS contributor_mappings;

-- Create contributor mappings table
CREATE TABLE contributor_mappings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  discord_id TEXT NOT NULL UNIQUE,
  username TEXT NOT NULL,
  display_name TEXT
);

-- Insert mappings
'''

for c in contributors:
    discord_id, username, display_name = c
    username_escaped = username.replace("'", "''")
    display_escaped = (display_name or username).replace("'", "''")
    sql += f"INSERT INTO contributor_mappings (discord_id, username, display_name) VALUES ('{discord_id}', '{username_escaped}', '{display_escaped}');\n"

with open('import-contributor-mappings.sql', 'w') as f:
    f.write(sql)

print('Generated import-contributor-mappings.sql')

conn.close()
