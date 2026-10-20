/* Staging-only presentation toolbar. Not part of production company sites.
   One thin black ribbon fixed to the bottom of the viewport:
     left   DESIGN A / B / C — review each section library as a complete preset
     right  X / Y / Z        — finished mixed sites (X = AMPP, Y = CSR, Z = James) */
import { Layers } from 'lucide-react';
import type { Variant } from '../data/types';
import { SITES } from '../data/sites';
import { useSite } from '../system/site';
import { fieldColor } from '../system/theme';

type Props = {
  onDesign: (v: Variant) => void;
  onSite: (key: string) => void;
  onLabels: () => void;
  isHome: boolean;
};

export function ProtoBar({ onDesign, onSite, onLabels, isHome }: Props) {
  const { mode, site, brand, showLabels } = useSite();
  const note = mode === 'mixed'
    ? `Viewing ${site.label} — ${brand.name}. Choose A, B or C to review a complete design direction.`
    : mode === 'C' && !isHome
      ? `Design C in the ${brand.shortName} brand. C is a homepage concept — inner pages use the B system.`
      : `Design ${mode}, previewed in the ${brand.shortName} brand.`;

  return (
    <div className="protobar" role="region" aria-label="Prototype controls">
      <div className="protobar__group protobar__design" role="group" aria-label="Design direction">
        <span className="protobar__label">Design</span>
        {(['A', 'B', 'C'] as const).map(v => (
          <button key={v} type="button" className="protobar__seg" aria-pressed={mode === v} onClick={() => onDesign(v)} title={`Design ${v}`}>
            {v}
          </button>
        ))}
        <button type="button" className={`protobar__icon${showLabels ? ' is-on' : ''}`} aria-pressed={showLabels} onClick={onLabels} title="Show section variants">
          <Layers size={14} aria-hidden="true" />
          <span className="sr-only">Show section variant labels</span>
        </button>
        <p className="protobar__note">{note}</p>
      </div>

      <div className="protobar__group" role="group" aria-label="Mixed sites">
        {SITES.map(s => (
          <button
            key={s.key}
            type="button"
            className={`protobar__site${mode !== 'mixed' && site.key === s.key ? ' is-brand' : ''}`}
            aria-pressed={mode === 'mixed' && site.key === s.key}
            aria-label={`${s.label} — ${s.brand.name}`}
            title={`${s.label} — ${s.brand.name}`}
            onClick={() => onSite(s.key)}
            style={{ background: fieldColor(s.brand.accent) }}
          >
            {s.key.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}
