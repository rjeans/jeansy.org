import { readFileSync, existsSync, readdirSync } from 'fs';
import { resolve, basename } from 'path';

export interface ItemNote {
  code: string;
  status: string;
  fragile: boolean;
  privateHtml: string;
}

function extractSection(content: string, heading: string): string {
  const headingPattern = new RegExp(`^## ${heading}`, 'm');
  const match = headingPattern.exec(content);
  if (!match) return '';

  const start = match.index + match[0].length;
  // End at next ## heading or end of file
  const rest = content.slice(start);
  const nextHeading = /^## /m.exec(rest);
  return nextHeading ? rest.slice(0, nextHeading.index).trim() : rest.trim();
}

function obsidianToHtml(markdown: string): string {
  const lines = markdown.split('\n');
  const out: string[] = [];
  let inList = false;

  for (const line of lines) {
    const t = line.trim();

    if (!t) {
      if (inList) { out.push('</ul>'); inList = false; }
      continue;
    }

    // Obsidian image embed: ![[filename]]
    const imgMatch = t.match(/^!\[\[(.+?)\]\]$/);
    if (imgMatch) {
      if (inList) { out.push('</ul>'); inList = false; }
      const filename = imgMatch[1];
      out.push(`<img src="/admin/images/${encodeURIComponent(filename)}" alt="${filename}" loading="lazy" class="rounded-lg max-w-full my-4">`);
      continue;
    }

    // Headers
    if (t.startsWith('### ')) { out.push(`<h3 class="font-semibold mt-4 mb-1">${t.slice(4)}</h3>`); continue; }
    if (t.startsWith('## '))  { out.push(`<h2 class="font-bold text-lg mt-6 mb-2">${t.slice(3)}</h2>`); continue; }

    // List items
    if (t.startsWith('- ')) {
      if (!inList) { out.push('<ul class="list-disc list-inside space-y-1">'); inList = true; }
      out.push(`<li>${t.slice(2)}</li>`);
      continue;
    }

    if (inList) { out.push('</ul>'); inList = false; }
    out.push(`<p class="mb-2">${t}</p>`);
  }

  if (inList) out.push('</ul>');
  return out.join('\n');
}

function parseFrontmatter(content: string): { meta: Record<string, string>; body: string } {
  if (!content.startsWith('---')) return { meta: {}, body: content };
  const end = content.indexOf('\n---', 3);
  if (end === -1) return { meta: {}, body: content };
  const yaml = content.slice(4, end);
  const body = content.slice(end + 4).trim();
  const meta: Record<string, string> = {};
  for (const line of yaml.split('\n')) {
    const colon = line.indexOf(':');
    if (colon > 0) {
      meta[line.slice(0, colon).trim()] = line.slice(colon + 1).trim();
    }
  }
  return { meta, body };
}

export function getItemNote(code: string): ItemNote | null {
  const filePath = resolve(`./src/data/items/${code}.md`);
  if (!existsSync(filePath)) return null;

  const content = readFileSync(filePath, 'utf-8');
  const { meta, body } = parseFrontmatter(content);
  const privateSection = extractSection(body, 'Private');

  return {
    code,
    status: meta.status || '',
    fragile: meta.fragile === 'true',
    privateHtml: obsidianToHtml(privateSection),
  };
}

export function getAllItemNoteCodes(): string[] {
  const dir = resolve('./src/data/items');
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .map(f => basename(f, '.md'));
}
