#!/usr/bin/env bash
set -euo pipefail
FILE="$(dirname "$0")/../src/components/StandardPage.tsx"
grep -q "Safety content can also provide context around how teams prepare for work" "$FILE"
grep -q "As final program content becomes available, this section can expand" "$FILE"
grep -q "The goal is to give crews, partners and project stakeholders" "$FILE"
echo "v36 safety copy checks passed"
