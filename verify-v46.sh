#!/usr/bin/env bash
set -euo pipefail
# A/B/C selector
grep -q "DesignVariation='a'|'b'|'c'" src/components/DesignSwitcher.tsx
grep -q ">C<" src/components/DesignSwitcher.tsx
# X/Y demo identities
grep -q "'x'|'y'" src/components/BrandSwitcher.tsx
grep -q "Variation X" src/components/BrandSwitcher.tsx
grep -q "Variation Y" src/components/BrandSwitcher.tsx
grep -q "x:" src/data/company.ts
grep -q "y:" src/data/company.ts
# mixed section architecture
grep -q "sectionDesign" src/App.tsx
grep -q "section-b" src/App.tsx
# C homepage exists
grep -q 'data-design="c"' public/global.css
# B hero consistency and requested home refinements
grep -q 'V46: unified internal B heroes' public/global.css
grep -q 'html\[data-design="b"\] .about-title:before' public/global.css
grep -q 'html\[data-design="b"\] .orange-button:hover' public/global.css
