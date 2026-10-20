/* Staging-only presentation controls. Not part of production company sites.
   Bottom-left  DESIGN       A / B / C — review each section library as a complete preset.
   Bottom-right MIXED SITES  X / Y / Z — finished company sites assembled from A + B + C. */
import { Layers } from 'lucide-react';
import type { Variant } from '../data/types';
import { SITES } from '../data/sites';
import { useSite } from '../system/site';

export function DesignSwitcher({ onDesign, onLabels, isHome }: { onDesign: (v: Variant) => void; onLabels: () => void; isHome: boolean }) {
  const { mode, brand, showLabels } = useSite();
  const note = mode === 'mixed'
    ? 'Choose A, B or C to review a complete design direction in the current brand.'
    : mode === 'C' && !isHome
      ? `Design C in the ${brand.shortName} brand. C is a homepage concept — inner pages use the B system.`
      : `Design ${mode}, previewed in the ${brand.shortName} brand.`;
  return (
    <div className="proto proto--design" role="group" aria-label="Design directions (prototype)">
      <div className="proto__row">
        <span className="proto__label">Design</span>
        <div className="proto__seg">
          {(['A', 'B', 'C'] as const).map(v => (
            <button key={v} type="button" aria-pressed={mode === v} onClick={() => onDesign(v)} title={`Design ${v}`}>
              {v}
            </button>
          ))}
        </div>
        <button type="button" className={`proto__icon${showLabels ? ' is-on' : ''}`} aria-pressed={showLabels} onClick={onLabels} title="Show section variants">
          <Layers size={16} aria-hidden="true" />
          <span className="sr-only">Show section variant labels</span>
        </button>
      </div>
      <p className="proto__note">{note}</p>
    </div>
  );
}

export function SiteSwitcher({ onSite }: { onSite: (key: string) => void }) {
  const { site, mode } = useSite();
  return (
    <div className="proto proto--site" role="group" aria-label="Mixed site examples (prototype)">
      <div className="proto__row">
        <span className="proto__label">Mixed sites</span>
        <div className="proto__sites">
          {SITES.map(s => (
            <button
              key={s.key}
              type="button"
              aria-pressed={mode === 'mixed' && site.key === s.key}
              /* In design-preview mode, mark which brand the preset is shown in. */
              className={mode !== 'mixed' && site.key === s.key ? 'is-brand' : ''}
              onClick={() => onSite(s.key)}
              title={`${s.label} — ${s.brand.name}`}
              style={{ '--site-accent': s.brand.accent } as React.CSSProperties}
            >
              <b>{s.key.toUpperCase()}</b>
              <span>{s.brand.shortName}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
