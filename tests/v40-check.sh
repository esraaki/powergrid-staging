#!/usr/bin/env bash
set -euo pipefail
css=public/global.css
for marker in \
 'V40 B REDESIGN' \
 '.hero:after{content:none' \
 '.editorial-intro{text-align:center' \
 '.service-cta:before' \
 '.other-services-grid{display:grid;grid-template-columns:repeat(2' \
 '.safety-layout{display:block' \
 '.contact-details>div:before' \
 'footer{background:color-mix'; do
  grep -Fq "$marker" "$css" || { echo "missing: $marker"; exit 1; }
done
echo 'v40 structural checks passed'
