#!/usr/bin/env bash
set -euo pipefail
CSS=public/global.css
STD=src/components/StandardPage.tsx

grep -q 'v41 — Variation B feedback pass' "$CSS"
grep -q 'contact-card-icon' "$STD"
grep -q 'MapPin' "$STD"
grep -q 'Headphones' "$STD"
grep -q 'html\[data-design="b"\] footer{background:var(--orange)!important' "$CSS"
grep -q 'html\[data-design="b"\] .other-service:hover img' "$CSS"
grep -q 'html\[data-design="b"\] .safety-badges{.*overflow:visible' "$CSS"
echo 'v41 checks passed'
