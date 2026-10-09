#!/usr/bin/env bash
set -euo pipefail
f=src/components/StandardPage.tsx
grep -q "Safety information should be easy to understand" "$f"
grep -q "Final client content can also use this space" "$f"
grep -q "Longer program details can live directly on the page" "$f"
echo "v35 checks passed"
