#!/usr/bin/env bash
# Pulls WC2026 sweepstake data from the sister sweepstake repo into src/data/.
# Optional files (allocation, results, standings) are removed when absent in the
# source, so the page reflects the upstream state honestly.
set -e

SRC="$HOME/Development/sweepstake"
DST="src/data/wc2026"

echo "Syncing WC2026 sweepstake data from $SRC..."
mkdir -p "$DST"

# Master team list (always required)
if [ ! -f "$SRC/wc2026_groups_fifa_ranking.csv" ]; then
  echo "ERROR: $SRC/wc2026_groups_fifa_ranking.csv not found." >&2
  exit 1
fi
cp "$SRC/wc2026_groups_fifa_ranking.csv" "$DST/teams.csv"
echo "  teams.csv"

sync_optional() {
  local name="$1"
  if [ -f "$SRC/$name" ]; then
    cp "$SRC/$name" "$DST/$name"
    echo "  $name"
  else
    rm -f "$DST/$name"
    echo "  $name: not present in source (left absent)"
  fi
}

sync_optional allocation.csv
sync_optional results.csv
sync_optional standings.csv

echo "Done."
