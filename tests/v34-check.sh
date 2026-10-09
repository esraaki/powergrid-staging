#!/usr/bin/env bash
set -euo pipefail
# Contact page no longer renders an extra image/visual block.
! grep -q 'contact-visual' src/components/StandardPage.tsx
# Mobile overlay must not inherit the desktop backdrop-filter containing block.
grep -q '\.site-nav\.mobile-open{[^}]*backdrop-filter:none' <(tr '\n' ' ' < public/global.css)
grep -q '\.mobile-nav-panel{[^}]*height:100dvh' <(tr '\n' ' ' < public/global.css)
# Safety's final image comes after the training/accountability content.
python3 - <<'PY'
from pathlib import Path
s=Path('src/components/StandardPage.tsx').read_text()
assert s.index('TRAINING & ACCOUNTABILITY') < s.rindex('inner-photo-break safety-photo')
PY
