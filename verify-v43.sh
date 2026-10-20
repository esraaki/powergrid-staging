#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"
grep -Fq 'inner-page page-contact' src/components/StandardPage.tsx
grep -Fq 'inner-page page-careers' src/components/StandardPage.tsx
grep -Fq 'inner-page page-${page}' src/components/StandardPage.tsx
grep -Fq 'V43: Variation B spacing' public/global.css
grep -Fq 'This additional space can also support' src/components/ServicePage.tsx
