#!/usr/bin/env bash
set -euo pipefail
CSS=public/global.css
SP=src/components/ServicePage.tsx
grep -q 'V44: explicit Variation B corrections' "$CSS"
grep -q 'width:42%!important' "$CSS"
grep -q 'width:min(1400px,calc(100% - 80px))!important' "$CSS"
grep -q 'grid-template-columns:68% 32%!important' "$CSS"
grep -q 'width:min(920px,calc(100% - 120px))!important' "$CSS"
grep -q 'contact-card-icon{margin-bottom:9px!important}' "$CSS"
grep -q 'The layout also leaves room for final scope details' "$SP"
echo 'V44 requested-change checks passed'
