import { readFileSync } from 'fs';
import { resolve } from 'path';

export interface InventoryItem {
  code: string;
  room: string;
  item: string;
  fragile: boolean;
  seq: string;
  notes: string;
}

function parseCSVLine(line: string): string[] {
  const fields: string[] = [];
  let current = '';
  let inQuotes = false;
  for (const ch of line) {
    if (ch === '"') {
      inQuotes = !inQuotes;
    } else if (ch === ',' && !inQuotes) {
      fields.push(current);
      current = '';
    } else {
      current += ch;
    }
  }
  fields.push(current);
  return fields;
}

export function parseInventory(): Map<string, InventoryItem> {
  const filePath = resolve('./src/data/inventory.csv');
  const lines = readFileSync(filePath, 'utf-8').trim().split('\n');
  const items = new Map<string, InventoryItem>();

  // Skip header row
  for (const line of lines.slice(1)) {
    if (!line.trim()) continue;
    const [code, room, item, fragile, , seq, total, notes] = parseCSVLine(line);

    const seqLabel = seq && total ? `${seq} of ${total}` : '';

    items.set(code, {
      code,
      room,
      item,
      fragile: fragile === 'true',
      seq: seqLabel,
      notes,
    });
  }

  return items;
}
