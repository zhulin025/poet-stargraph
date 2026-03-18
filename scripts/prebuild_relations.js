const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '../src/data');
const FILES = ['tang.ts', 'song.ts', 'yuan.ts', 'ming.ts', 'qing.ts'];

FILES.forEach(fileName => {
  const filePath = path.join(DATA_DIR, fileName);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${fileName}, skipping...`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Robust extraction of nodes and links via JS evaluation
  // We need to strip the import and type info for evaluation
  const cleanContent = content
    .replace(/import { Node, Link } from '\.\.\/types';/, '')
    .replace(/export const \w+Data: { nodes: Node\[\], links: Link\[\] } = /, 'module.exports = ')
    .replace(/};$/, '}'); // Remove trailing semicolon for module.exports if needed

  let data;
  try {
    // Write to a temporary JS file to require it
    const tempPath = path.join(__dirname, `_temp_${fileName}.js`);
    fs.writeFileSync(tempPath, cleanContent);
    data = require(tempPath);
    fs.unlinkSync(tempPath);
  } catch (e) {
    console.error(`Failed to load ${fileName}:`, e.message);
    return;
  }

  const { nodes, links: initialLinks } = data;
  console.log(`Processing ${fileName}: ${nodes.length} nodes, ${initialLinks.length} initial links`);

  // Filter out existing '同时代' links to re-calculate from scratch and avoid duplicates
  const filteredLinks = initialLinks.filter(l => l.type !== '同时代');
  const augmentedLinks = [...filteredLinks];
  
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const nodeA = nodes[i];
      const nodeB = nodes[j];
      
      if (nodeA.birth !== undefined && nodeA.death !== undefined && 
          nodeB.birth !== undefined && nodeB.death !== undefined) {
        const start = Math.max(nodeA.birth, nodeB.birth);
        const end = Math.min(nodeA.death, nodeB.death);
        
        if (start <= end) {
          const overlap = end - start;
          // Check if explicit link already exists
          const exists = augmentedLinks.some(l => {
            const s = typeof l.source === 'string' ? l.source : l.source.id;
            const t = typeof l.target === 'string' ? l.target : l.target.id;
            return (s === nodeA.id && t === nodeB.id) || (s === nodeB.id && t === nodeA.id);
          });
          
          if (!exists && overlap >= 5) {
            augmentedLinks.push({
              source: nodeA.id,
              target: nodeB.id,
              value: Math.min(Math.floor(overlap / 10) + 1, 5),
              type: '同时代'
            });
          }
        }
      }
    }
  }

  console.log(`Generated ${augmentedLinks.length - filteredLinks.length} contemporary links for ${fileName}`);

  // Re-serialize the links with proper indentation
  const linksJson = JSON.stringify(augmentedLinks, null, 2);
  const indentedLinks = linksJson.split('\n').map((line, i) => i === 0 ? line : '  ' + line).join('\n');

  // Replace only the links part in the original content
  // Regex looks for "links: [" until "]"
  const newContent = content.replace(/links: \[\s*[\s\S]*?\s*\]\s*(?=};|})/, `links: ${indentedLinks}`);
  
  fs.writeFileSync(filePath, newContent, 'utf-8');
  console.log(`Successfully updated ${fileName}`);
});
