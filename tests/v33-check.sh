#!/usr/bin/env bash
set -euo pipefail
grep -q 'mobile-menu-toggle' src/components/Navigation.tsx
grep -q 'mobile-nav-panel' src/components/Navigation.tsx
grep -q 'safety-support' src/components/StandardPage.tsx
grep -q '\.contact-page h2{font-size:clamp(58px,5.4vw,92px)' public/global.css
grep -q '@media(max-width:900px).*mobile-menu-toggle' <(tr '\n' ' ' < public/global.css)
