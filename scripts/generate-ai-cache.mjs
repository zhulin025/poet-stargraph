/**
 * AI Cache Pre-generation Script
 * Run: node scripts/generate-ai-cache.mjs
 *
 * This script pre-generates AI content for:
 * 1. Poet "展开讲讲" (expandStory) - biography and social circle
 * 2. Poem "AI深度赏析" (deepAnalysis) - poem appreciation
 *
 * Generated content is stored in src/data/ai-cache/ directory
 */

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CACHE_DIR = path.join(__dirname, '..', 'src', 'data', 'ai-cache');

// Prompts (must match exactly with frontend in page.tsx)
const EXPAND_STORY_PROMPT = (poetId) =>
  `你是一位深谙中国古代文学史的学者。请详细介绍诗人【${poetId}】的生平。特别要注意，请重点讲述他的社交圈，与其他名士的交集与逸事。要求：文辞优美、富有历史画面感、言简意赅（字数控制在500字以内）。`;

const DEEP_ANALYSIS_PROMPT = (poetId, title, content) =>
  `你是一位精通唐宋文学的评论家。请你对以下这首诗进行深度赏析：\n《${title}》\n${content}\n作者：${poetId}\n请从情感意境、文学技巧、历史背景三个维度进行分析，言简意赅，富有诗意。`;

// Extract poet names from file
function extractPoets(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const poets = [];

  // Match: "id": "PoetName", "group"
  const poetRegex = /\"id\":\s*\"([^\"]+)\",\s*\"group\"/g;
  let match;
  while ((match = poetRegex.exec(content)) !== null) {
    poets.push(match[1]);
  }

  return poets;
}

// Extract works for a poet from file
function extractWorksForPoet(filePath, poetName) {
  const content = fs.readFileSync(filePath, 'utf-8');

  // Find the poet's section by looking for "id": "PoetName" followed by "group"
  const poetStartRegex = new RegExp(`\"id\":\\s*\"${poetName}\",\\s*\"group\"`);
  const poetStartMatch = content.match(poetStartRegex);

  if (!poetStartMatch) return [];

  const startPos = poetStartMatch.index;

  // Find the next poet or end of nodes array
  const nextPoetRegex = /\"id\":\s*\"[^\"]+\",\s*\"group\"/g;
  const allPoetStarts = [];
  let mp;
  while ((mp = nextPoetRegex.exec(content)) !== null) {
    if (mp.index > startPos) allPoetStarts.push(mp.index);
  }

  const endPos = allPoetStarts.length > 0 ? allPoetStarts[0] : content.length;

  // Extract poet's section
  const poetSection = content.substring(startPos, endPos);

  // Extract all works (titles and contents)
  const works = [];
  const workRegex = /\"title\":\s*\"([^\"]+)\"[\s\S]*?\"content\":\s*\"([^\"]+)\"/g;
  let wm;
  while ((wm = workRegex.exec(poetSection)) !== null) {
    works.push({
      title: wm[1],
      content: wm[2]
    });
  }

  return works;
}

// Load all dynasty data
function loadData() {
  const dynasties = [
    { name: '唐', path: 'src/data/tang.ts' },
    { name: '宋', path: 'src/data/song.ts' },
    { name: '元', path: 'src/data/yuan.ts' },
    { name: '明', path: 'src/data/ming.ts' },
    { name: '清', path: 'src/data/qing.ts' },
  ];

  const results = [];

  for (const dynasty of dynasties) {
    try {
      const poets = extractPoets(dynasty.path);
      results.push({ name: dynasty.name, path: dynasty.path, poets });
      console.log(`Loaded ${dynasty.name}: ${poets.length} poets`);
    } catch (err) {
      console.error(`Error loading ${dynasty.path}:`, err);
    }
  }

  return results;
}

// Generate cache key (same as backend in route.ts)
function getCacheKey(prompt, model) {
  const messages = [{ role: 'user', content: prompt }];
  return crypto.createHash('sha256').update(JSON.stringify({ messages, model })).digest('hex');
}

// Save cache
function saveCache(key, content, model) {
  const cachePath = path.join(CACHE_DIR, `${key}.json`);
  fs.writeFileSync(cachePath, JSON.stringify({
    content,
    model,
    timestamp: Date.now()
  }));
}

// Call AI API
async function callAI(prompt, apiKey, baseUrl, model) {
  const targetUrl = baseUrl.endsWith('/chat/completions')
    ? baseUrl
    : `${baseUrl.replace(/\/$/, '')}/chat/completions`;

  const response = await fetch(targetUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: [{ role: 'user', content: prompt }],
      stream: false,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API responded with status ${response.status}: ${errorText}`);
  }

  const data = await response.json();
  return data.choices[0]?.message?.content || '';
}

// Check if cache exists
function cacheExists(key) {
  const cachePath = path.join(CACHE_DIR, `${key}.json`);
  return fs.existsSync(cachePath);
}

// Ensure cache directory exists
if (!fs.existsSync(CACHE_DIR)) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
  console.log(`Created cache directory: ${CACHE_DIR}`);
}

// Main generation function
async function generateCache() {
  const apiKey = process.env.AI_API_KEY;
  const baseUrl = process.env.AI_BASE_URL || 'https://ark.cn-beijing.volces.com/api/v3';
  const model = process.env.AI_MODEL || 'qianfan-code-latest';

  if (!apiKey) {
    console.error('Error: AI_API_KEY environment variable is required');
    console.log('Please set your API key: export AI_API_KEY=your_key_here');
    process.exit(1);
  }

  console.log(`\n=== AI Cache Pre-generation Script ===`);
  console.log(`API: ${baseUrl}`);
  console.log(`Model: ${model}`);
  console.log(`Cache dir: ${CACHE_DIR}\n`);

  const dynasties = loadData();

  // Stats
  let totalPoets = 0;
  let totalPoems = 0;
  let newPoetCaches = 0;
  let newPoemCaches = 0;
  let existingCaches = 0;

  // 1. Generate "展开讲讲" (Poet biography) caches
  console.log('\n--- Generating Poet "展开讲讲" Caches ---\n');

  for (const dynasty of dynasties) {
    for (const poet of dynasty.poets) {
      totalPoets++;
      const prompt = EXPAND_STORY_PROMPT(poet);
      const cacheKey = getCacheKey(prompt, model);

      if (cacheExists(cacheKey)) {
        existingCaches++;
        console.log(`[SKIP] ${poet} (${dynasty.name}) - cache exists`);
        continue;
      }

      console.log(`[GENERATING] ${poet} (${dynasty.name})...`);
      try {
        const content = await callAI(prompt, apiKey, baseUrl, model);
        saveCache(cacheKey, content, model);
        newPoetCaches++;
        console.log(`[OK] ${poet} - saved (${content.length} chars)`);
      } catch (err) {
        console.error(`[ERROR] ${poet}:`, err.message);
      }

      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }

  // 2. Generate "AI深度赏析" (Poem appreciation) caches
  console.log('\n--- Generating Poem "AI深度赏析" Caches ---\n');

  for (const dynasty of dynasties) {
    for (const poet of dynasty.poets) {
      const works = extractWorksForPoet(dynasty.path, poet);

      for (const work of works) {
        totalPoems++;
        const prompt = DEEP_ANALYSIS_PROMPT(poet, work.title, work.content);
        const cacheKey = getCacheKey(prompt, model);

        if (cacheExists(cacheKey)) {
          existingCaches++;
          console.log(`[SKIP] 《${work.title}》by ${poet} - cache exists`);
          continue;
        }

        console.log(`[GENERATING] 《${work.title}》by ${poet}...`);
        try {
          const content = await callAI(prompt, apiKey, baseUrl, model);
          saveCache(cacheKey, content, model);
          newPoemCaches++;
          console.log(`[OK] 《${work.title}》 - saved (${content.length} chars)`);
        } catch (err) {
          console.error(`[ERROR] 《${work.title}》by ${poet}:`, err.message);
        }

        // Small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }
  }

  // Summary
  console.log('\n=== Generation Complete ===');
  console.log(`Total poets: ${totalPoets}`);
  console.log(`Total poems: ${totalPoems}`);
  console.log(`New poet caches: ${newPoetCaches}`);
  console.log(`New poem caches: ${newPoemCaches}`);
  console.log(`Existing caches: ${existingCaches}`);
  console.log(`Cache directory: ${CACHE_DIR}`);
}

// Run
generateCache().catch(console.error);
