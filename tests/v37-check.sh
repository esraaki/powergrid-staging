#!/bin/sh
set -eu
F=src/components/StandardPage.tsx
! grep -q "Safety information should be easy to understand" "$F"
! grep -q "Safety content can also provide context" "$F"
grep -q 'SAFETY THAT SUPPORTS THE WORK' "$F"
grep -q 'className="service-cta safety-contact-cta"' "$F"
grep -q 'className="button service-cta-button" href="/contact"' "$F"
python3 - <<'PY'
p='src/components/StandardPage.tsx'
s=open(p).read()
assert s.index('safety-photo safety-photo-final') < s.index('SAFETY THAT SUPPORTS THE WORK') < s.index('safety-contact-cta')
PY
