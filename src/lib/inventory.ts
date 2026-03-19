import { readFileSync } from 'fs';
import { resolve } from 'path';

export interface InventoryItem {
  code: string;       // full URL code e.g. KIT-06-2 or BED-02
  baseCode: string;   // e.g. KIT-06
  room: string;
  item: string;
  fragile: boolean;
  instance: number;   // 0 = single (no suffix); 1-N = instance number
  qty: number;        // total planned quantity
  printed: number;    // how many labels have been printed
  notes: string;
}

// Columns: Code | Item | Qty | Printed | Pack | Fragile | Note | Details | Link
function parseRow(line: string): string[] {
  return line.split('|').map(s => s.trim()).slice(1, -1);
}

export function parseInventory(): Map<string, InventoryItem> {
  const filePath = resolve('./src/data/inventory.md');
  const lines = readFileSync(filePath, 'utf-8').split('\n');
  const items = new Map<string, InventoryItem>();
  let currentRoom = '';

  for (const line of lines) {
    if (!line.startsWith('|')) continue;

    const cols = parseRow(line);
    if (cols.length < 2) continue;

    const [codeCol, itemName, qtyStr, printedStr, , fragileCol, note] = cols;

    // Skip table header and separator rows
    if (codeCol === 'Code' || codeCol.startsWith('---') || codeCol.startsWith(':---')) continue;

    // Section header row e.g. **1st Floor - Kitchen** &nbsp; *0/22*
    if (codeCol.startsWith('**')) {
      const match = codeCol.match(/\*\*(.+?)\*\*/);
      if (match) currentRoom = match[1];
      continue;
    }

    const baseCode = codeCol;
    const qty = parseInt(qtyStr) || 1;
    const printed = parseInt(printedStr) || 0;

    if (printed === 0) continue; // no labels exist yet

    if (qty === 1) {
      items.set(baseCode, {
        code: baseCode,
        baseCode,
        room: currentRoom,
        item: itemName,
        fragile: fragileCol === 'Yes',
        instance: 0,
        qty,
        printed,
        notes: note || '',
      });
    } else {
      for (let i = 1; i <= printed; i++) {
        const code = `${baseCode}-${i}`;
        items.set(code, {
          code,
          baseCode,
          room: currentRoom,
          item: itemName,
          fragile: fragileCol === 'Yes',
          instance: i,
          qty,
          printed,
          notes: note || '',
        });
      }
    }
  }

  return items;
}

// Returns all line items regardless of printed status, for the index page
export interface InventoryLineItem {
  baseCode: string;
  room: string;
  item: string;
  fragile: boolean;
  qty: number;
  printed: number;
  notes: string;
}

export function parseInventoryIndex(): Map<string, InventoryLineItem> {
  const filePath = resolve('./src/data/inventory.md');
  const lines = readFileSync(filePath, 'utf-8').split('\n');
  const items = new Map<string, InventoryLineItem>();
  let currentRoom = '';

  for (const line of lines) {
    if (!line.startsWith('|')) continue;
    const cols = parseRow(line);
    if (cols.length < 2) continue;
    const [codeCol, itemName, qtyStr, printedStr, , fragileCol, note] = cols;
    if (codeCol === 'Code' || codeCol.startsWith('---') || codeCol.startsWith(':---')) continue;
    if (codeCol.startsWith('**')) {
      const match = codeCol.match(/\*\*(.+?)\*\*/);
      if (match) currentRoom = match[1];
      continue;
    }
    items.set(codeCol, {
      baseCode: codeCol,
      room: currentRoom,
      item: itemName,
      fragile: fragileCol === 'Yes',
      qty: parseInt(qtyStr) || 1,
      printed: parseInt(printedStr) || 0,
      notes: note || '',
    });
  }

  return items;
}
