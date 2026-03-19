#!/usr/bin/env bash
set -e

VAULT="/Users/rich/Obsidian/Relocation"
DATA="src/data"
IMAGES="public/admin/images"

echo "Syncing inventory from Obsidian vault..."

# Inventory master table
cp "$VAULT/Inventory.md" "$DATA/inventory.md"
echo "  Copied Inventory.md"

# Item notes
mkdir -p "$DATA/items"
if ls "$VAULT/Items/"*.md 2>/dev/null | head -1 > /dev/null; then
  cp "$VAULT/Items/"*.md "$DATA/items/"
  echo "  Copied $(ls "$VAULT/Items/"*.md | wc -l | tr -d ' ') item notes"
else
  echo "  No item notes found"
fi

# Images referenced in item notes
mkdir -p "$IMAGES"
count=0
while IFS= read -r -d '' f; do
  cp "$f" "$IMAGES/"
  count=$((count + 1))
done < <(find "$VAULT" -maxdepth 3 \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.gif" -o -name "*.webp" \) -print0)
echo "  Copied $count images"

echo "Done."
