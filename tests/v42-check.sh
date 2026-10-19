#!/usr/bin/env bash
set -euo pipefail
CSS=public/global.css
grep -q 'V42: Variation B refinement pass' "$CSS"
grep -q 'align-items:flex-end!important' "$CSS"
grep -q 'margin-top:-230px!important' "$CSS"
grep -q "content:'JOIN THE TEAM'" "$CSS"
grep -q "content:'PROJECT'" "$CSS"
grep -q 'position:static!important;top:auto!important;align-self:auto!important' "$CSS"
grep -q 'max-width:190px!important;height:112px!important' "$CSS"
grep -q 'background:var(--orange)!important;color:#fff!important' "$CSS"
echo 'v42 checks passed'
