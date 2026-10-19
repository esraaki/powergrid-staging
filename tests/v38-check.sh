#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
grep -q "DesignSwitcher" src/App.tsx
grep -q "data-design\|dataset.design" src/App.tsx
grep -q "powergrid-design" src/App.tsx
grep -q "html\[data-design=\"b\"\] .hero" public/global.css
grep -q "html\[data-design=\"b\"\] .about" public/global.css
grep -q "html\[data-design=\"b\"\] .service-collage" public/global.css
grep -q "html\[data-design=\"b\"\] .feature" public/global.css
grep -q "html\[data-design=\"b\"\] .inner-hero" public/global.css
grep -q "html\[data-design=\"b\"\] .service-hero" public/global.css
grep -q "html\[data-design=\"b\"\] footer" public/global.css
echo "v38 structural checks passed"
