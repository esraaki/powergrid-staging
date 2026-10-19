#!/usr/bin/env bash
set -euo pipefail
css=public/global.css
app=src/App.tsx
switcher=src/components/DesignSwitcher.tsx
grep -q 'grid-template-columns:58% 42%' "$css"
grep -q 'numbered horizontal project index' "$css"
grep -q 'grid-template-columns:190px 1fr 80px' "$css"
grep -q 'side-by-side title slab' "$css"
grep -q 'data-design="b"' "$css"
grep -q 'DesignSwitcher' "$app"
grep -q "onChange('b')" "$switcher"
echo 'v39 Variation B structural checks passed'
