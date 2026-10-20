#!/usr/bin/env bash
set -euo pipefail
css=public/global.css
svc=src/components/ServicePage.tsx
grep -Fq 'V45: Variation B internal-page alignment + spacing refinements' "$css"
grep -Fq 'top:0!important;' "$css"
grep -Fq '.page-about .about-careers-link:before{display:none!important;content:none!important}' "$css"
grep -Fq '.service-cta .eyebrow i{display:none!important}' "$css"
grep -Fq '.page-safety .safety-closing-copy .eyebrow i{display:none!important}' "$css"
grep -Fq 'max-width:225px!important;' "$css"
grep -Fq 'Additional client-provided context can sit here as well' "$svc"
echo 'V45 regression checks passed.'
