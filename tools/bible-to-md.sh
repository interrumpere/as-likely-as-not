#!/usr/bin/env bash
# Regenerate design/BIBLE.md from Andre's canonical .docx.
# Usage: tools/bible-to-md.sh design/source/<file>.docx
set -euo pipefail
src="${1:?path to the .docx}"
{
  echo "<!-- GENERATED from $(basename "$src") by tools/bible-to-md.sh. Do not edit by hand."
  echo "     Andre's .docx is canonical. Propose changes in design/PROPOSALS.md. -->"
  echo
  pandoc "$src" -t gfm --wrap=none | sed -e 's#<u>##g' -e 's#</u>##g'
} > design/BIBLE.md
echo "Wrote design/BIBLE.md from $src"
