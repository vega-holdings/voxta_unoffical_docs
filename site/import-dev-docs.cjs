const fs = require('fs');
const path = require('path');

// Development documentation files to import with categories
const devDocs = [
  // Development Guides
  { file: 'VOXTA_DEVELOPMENT_GUIDE.md', category: 'Development Guides', slug: 'dev-sdk-guide' },
  { file: 'Voxta.Abstractions.md', category: 'Development Guides', slug: 'dev-abstractions' },
  { file: 'Voxta.Core.md', category: 'Development Guides', slug: 'dev-core' },
  // File Structure Reference
  { file: 'Voxta_Package.md', category: 'File Structure', slug: 'dev-package-format' },
  { file: 'voxpkg_structure_report.md', category: 'File Structure', slug: 'dev-package-structure' },
  // Chat Templates
  { file: 'Voxta_Scriban.md', category: 'Chat Templates', slug: 'dev-scriban-templates' },
];

const repoRoot = path.join(__dirname, '..');

// Start IDs from 100 to avoid conflicts with existing docs
let id = 100;

// First create a delete script
let deleteSQL = "-- Delete existing dev docs\nDELETE FROM docs_pages WHERE slug LIKE 'dev-%';\n";
fs.writeFileSync(path.join(__dirname, 'import-dev-docs-delete.sql'), deleteSQL);
console.log('Generated: import-dev-docs-delete.sql');

// Create separate SQL file for each doc (due to size limits)
for (const doc of devDocs) {
  const filePath = path.join(repoRoot, doc.file);

  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${doc.file}`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf-8');

  // Remove YAML frontmatter if present
  content = content.replace(/^---[\s\S]*?---\n*/m, '');

  // Find the first heading and keep everything from there
  const headingMatch = content.match(/^(#+\s+.+)$/m);
  if (headingMatch) {
    const headingIndex = content.indexOf(headingMatch[0]);
    content = content.slice(headingIndex);
  }

  content = content.trim();

  // Extract title from first heading
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1] : doc.file.replace('.md', '').replace(/[_-]/g, ' ');

  // Proper SQL escaping - double single quotes
  const escapedContent = content.replace(/'/g, "''");
  const escapedTitle = title.replace(/'/g, "''");
  const escapedCategory = doc.category.replace(/'/g, "''");

  const sql = `-- ${doc.file}\nINSERT INTO docs_pages (id, title, slug, content, category, github_path, updated_at, created_at) VALUES (${id}, '${escapedTitle}', '${doc.slug}', '${escapedContent}', '${escapedCategory}', '${doc.file}', datetime('now'), datetime('now'));\n`;

  const sqlFile = `import-dev-docs-${doc.slug}.sql`;
  fs.writeFileSync(path.join(__dirname, sqlFile), sql);
  console.log(`Generated: ${sqlFile} (${Math.round(content.length/1024)}KB) - ${doc.category}`);
  id++;
}

console.log(`\nGenerated ${devDocs.length + 1} SQL files for development docs`);
console.log('\nRun in order:');
console.log('1. import-dev-docs-delete.sql');
devDocs.forEach(d => console.log(`2. import-dev-docs-${d.slug}.sql`));
