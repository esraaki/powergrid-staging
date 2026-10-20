/* Staging-only presentation controls. Not part of production company sites. */
import { useEffect, useRef, useState } from 'react';
import { ChevronUp, Layers } from 'lucide-react';
import type { Variant } from '../data/types';
import { SITES } from '../data/sites';
import { useSite } from '../system/site';

export function DesignSwitcher({ onDesign, onLabels, isHome }: { onDesign: (v: Variant) => void; onLabels: () => void; isHome: boolean }) {
  const { design, site, showLabels } = useSite();
  const locked = !!site.layout;
  return (
    <div className="proto proto--design" role="group" aria-label="Prototype design controls">
      <div className="proto__row">
        <span className="proto__label">{locked ? 'Mixed' : 'Design'}</span>
        <div className="proto__seg">
          {(['A', 'B', 'C'] as const).map(v => (
            <button
              key={v}
              type="button"
              aria-pressed={!locked && design === v}
              disabled={locked}
              onClick={() => onDesign(v)}
              title={locked ? `${site.label} uses a fixed mixed composition` : `Design ${v}`}
            >
              {v}
            </button>
          ))}
        </div>
        <button type="button" className={`proto__icon${showLabels ? ' is-on' : ''}`} aria-pressed={showLabels} onClick={onLabels} title="Show section variants">
          <Layers size={16} aria-hidden="true" />
          <span className="sr-only">Show section variant labels</span>
        </button>
      </div>
      {!locked && design === 'C' && !isHome && <p className="proto__note">C is a homepage concept — inner pages use the B system.</p>}
      {locked && <p className="proto__note">{site.label}: sections mixed from A / B / C.</p>}
    </div>
  );
}

export function SiteSwitcher({ onSite }: { onSite: (key: string) => void }) {
  const { site } = useSite();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('mousedown', onDown); document.removeEventListener('keydown', onKey); };
  }, [open]);

  const companies = SITES.filter(s => !s.demo);
  const demos = SITES.filter(s => s.demo);
  const pick = (k: string) => { onSite(k); setOpen(false); };

  return (
    <div className={`proto proto--site${open ? ' is-open' : ''}`} ref={ref}>
      {open && (
        <div className="proto__panel" id="site-panel">
          <p className="proto__heading">Companies</p>
          <ul className="proto__companies">
            {companies.map(s => (
              <li key={s.key}>
                <button type="button" aria-pressed={site.key === s.key} onClick={() => pick(s.key)}>
                  <img src={s.brand.logo.onLight} alt="" />
                  <span>{s.brand.name}</span>
                </button>
              </li>
            ))}
          </ul>
          <p className="proto__heading">Demo sites · mixed sections</p>
          <ul className="proto__demos">
            {demos.map(s => (
              <li key={s.key}>
                <button type="button" aria-pressed={site.key === s.key} onClick={() => pick(s.key)}>
                  <i style={{ background: s.brand.accent }} aria-hidden="true" />
                  <span><b>{s.label}</b>{s.brand.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button type="button" className="proto__trigger" aria-expanded={open} aria-controls="site-panel" onClick={() => setOpen(v => !v)}>
        <span className="proto__label">Site</span>
        <span className="proto__current">{site.label}</span>
        <ChevronUp size={16} aria-hidden="true" className="proto__chev" />
      </button>
    </div>
  );
}
