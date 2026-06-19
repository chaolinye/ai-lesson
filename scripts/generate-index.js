#!/usr/bin/env node
/**
 * generate-index.js
 *
 * Scans all subdirectories under the project root for `docs/lessons/` folders,
 * extracts <title> from each HTML file, and generates a grouped index.html
 * at the project root.
 *
 * Usage: node scripts/generate-index.js
 *        (run from project root, or the script auto-detects root)
 */

const fs = require('fs');
const path = require('path');

// ── Path resolution ──────────────────────────────────────────────────
// Script lives at <root>/scripts/generate-index.js
const ROOT = path.resolve(__dirname, '..');
const INDEX_PATH = path.join(ROOT, 'index.html');
const LESSONS_REL = path.join('docs', 'lessons');

// ── Helpers ──────────────────────────────────────────────────────────

/** Extract <title> content from an HTML string. Returns null on failure. */
function extractTitle(html) {
  const m = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  return m ? m[1].trim() : null;
}

/** Natural sort comparator for lesson filenames like `0001-xxx.html`. */
function byNumericPrefix(a, b) {
  const numA = parseInt(a.match(/^(\d+)/)?.[1] || '0', 10);
  const numB = parseInt(b.match(/^(\d+)/)?.[1] || '0', 10);
  if (numA !== numB) return numA - numB;
  return a.localeCompare(b);
}

/** Read a file safely; returns null on ENOENT. */
function readFileSafe(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch {
    return null;
  }
}

// ── Scan modules ─────────────────────────────────────────────────────

const modules = [];

const entries = fs.readdirSync(ROOT, { withFileTypes: true });
for (const entry of entries) {
  if (!entry.isDirectory()) continue;
  // Skip hidden dirs and common non-module dirs
  if (entry.name.startsWith('.')) continue;
  if (entry.name === 'node_modules' || entry.name === 'scripts' || entry.name === '.githooks') continue;

  const lessonsDir = path.join(ROOT, entry.name, LESSONS_REL);
  if (!fs.existsSync(lessonsDir)) continue;

  let lessonFiles;
  try {
    lessonFiles = fs.readdirSync(lessonsDir);
  } catch {
    continue;
  }

  const htmlFiles = lessonFiles
    .filter(f => f.endsWith('.html'))
    .sort(byNumericPrefix);

  if (htmlFiles.length === 0) continue;

  const lessons = htmlFiles.map(file => {
    const filePath = path.join(lessonsDir, file);
    const content = readFileSafe(filePath);
    const title = content ? extractTitle(content) : null;
    // Relative path from index.html (project root) to the lesson file
    const href = path.posix.join(entry.name, LESSONS_REL.replace(/\\/g, '/'), file);
    return { file, title, href };
  });

  modules.push({ name: entry.name, lessons });
}

// ── HooksPath check ──────────────────────────────────────────────────

const githooksDir = path.join(ROOT, '.githooks');
if (fs.existsSync(githooksDir)) {
  try {
    const configured = require('child_process')
      .execSync('git config core.hooksPath', { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'] })
      .trim();
    if (configured !== '.githooks') {
      console.warn(
        '⚠️  Detected .githooks/ directory but core.hooksPath is not set to ".githooks".\n' +
        '   Run: git config core.hooksPath .githooks\n'
      );
    }
  } catch {
    // Not a git repo or git not available — skip check
  }
}

// ── Generate HTML ────────────────────────────────────────────────────

const totalLessons = modules.reduce((sum, m) => sum + m.lessons.length, 0);

function lessonItemHTML(lesson) {
  const displayTitle = lesson.title || lesson.file.replace(/\.html$/, '');
  const numSpan = `<span class="lesson-num">${lesson.file.replace(/\.html$/, '')}</span>`;
  return `      <li class="lesson-item">${numSpan}<a class="lesson-title" href="${lesson.href}">${escapeHtml(displayTitle)}</a></li>`;
}

function moduleSectionHTML(mod) {
  const items = mod.lessons.map(lessonItemHTML).join('\n');
  return `    <section class="module-section">
      <h2>${escapeHtml(mod.name)}</h2>
      <ul class="lesson-list">
${items}
      </ul>
    </section>`;
}

function escapeHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const modulesHTML = modules.length > 0
  ? modules.map(moduleSectionHTML).join('\n\n')
  : `    <section class="module-section">
      <p class="empty-msg">暂无课程</p>
    </section>`;

const generatedDate = new Date().toISOString().slice(0, 10);

const html = `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>学习笔记 · 索引</title>
<style>
  :root{--ink:#1d1d1f;--muted:#686868;--paper:#fffdf8;--panel:#f7f1df;--line:#ded6c7;--accent:#8a5a00;}
  *,*::before,*::after{box-sizing:border-box}
  body{font-family:ui-serif,Georgia,"Noto Serif SC","Source Han Serif SC",serif;margin:0;background:var(--paper);color:var(--ink);line-height:1.65;}
  main{max-width:900px;margin:0 auto;padding:48px 24px 80px;}
  h1{font-size:2.35rem;line-height:1.15;margin:.2rem 0 .5rem;}
  h2{margin-top:2.2rem;padding-top:1rem;border-top:1px solid var(--line);font-size:1.5rem;}
  a{color:#2457a6;text-decoration:none;}
  a:hover{text-decoration:underline;}
  .subtitle{color:var(--muted);font-size:1.05rem;margin-bottom:2rem;}
  .module-section{margin-bottom:2.5rem;}
  .lesson-list{list-style:none;padding:0;margin:0;}
  .lesson-item{display:flex;align-items:baseline;gap:1rem;padding:.65rem 0;border-bottom:1px solid var(--line);}
  .lesson-item:last-child{border-bottom:none;}
  .lesson-num{color:var(--muted);font-size:.85rem;font-family:ui-monospace,SFMono-Regular,Consolas,monospace;min-width:4.5rem;flex-shrink:0;}
  .lesson-title{font-size:1.05rem;}
  .empty-msg{color:var(--muted);font-style:italic;padding:1rem 0;}
  .footer{margin-top:3rem;padding-top:1rem;border-top:1px solid var(--line);color:var(--muted);font-size:.85rem;}
  @media (max-width:600px){
    main{padding:24px 16px 60px;}
    h1{font-size:1.8rem;}
    .lesson-item{flex-direction:column;gap:.15rem;padding:.8rem 0;}
    .lesson-num{min-width:auto;font-size:.8rem;}
    .lesson-title{font-size:1rem;}
  }
</style>
</head>
<body>
<main>
  <h1>📖 学习笔记</h1>
  <p class="subtitle">共 ${totalLessons} 课 · 自动生成于 ${generatedDate}</p>

${modulesHTML}

  <p class="footer">自动生成 · <code>scripts/generate-index.js</code></p>
</main>
</body>
</html>
`;

// ── Write index.html ─────────────────────────────────────────────────

fs.writeFileSync(INDEX_PATH, html, 'utf-8');
console.log(`✓ index.html generated — ${totalLessons} lessons across ${modules.length} module(s)`);
