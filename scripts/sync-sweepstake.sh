#!/usr/bin/env bash
# Pulls WC2026 sweepstake data from the sister sweepstake repo into src/data/.
# Optional files (allocation, results, standings, matches) are removed when
# absent in the source, so the page reflects the upstream state honestly.
#
# matches.csv schema (match-by-match results), one row per fixture:
#   date,stage,group,home,home_score,away,away_score
#   2026-06-11,GROUP,A,Mexico,2,South Africa,1
# Leave home_score/away_score blank for fixtures not yet played. stage is one
# of GROUP,R32,R16,QF,SF,FINAL; group is blank for knockout matches.
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
sync_optional matches.csv

echo "Done."
