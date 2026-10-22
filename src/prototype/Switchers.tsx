/* Staging-only presentation toolbar. Not part of production company sites.

   A thin black ribbon, always fixed to the bottom edge:
     left   DESIGN A / B / C       — pure design directions
     right  WEBSITES 1 / 2 / 3     — demonstration websites mixed from A/B/C
            + Layers               — tag each section with its A/B/C origin */
import { Layers } from 'lucide-react';
import type { View } from '../data/types';
import { DEFAULT_BRAND, WEBSITES } from '../data/websites';
import { useSite } from '../system/site';
import { fieldColor } from '../system/theme';

type Props = { onView: (v: View) => void; onLabels: () => void; isHome: boolean };

export function ProtoBar({ onView, onLabels, isHome }: Props) {
  const { view, showLabels } = useSite();
  const choose = (next: View) => onView(next);

  const design = view.kind === 'design' ? view.design : null;
  const website = view.kind === 'website' ? view.website : null;
  const note = website
    ? `${website.label} — ${website.brand.name}, assembled from Designs A, B and C.`
    : design === 'C' && !isHome
      ? 'Design C — homepage concept. Inner pages use the Design B system.'
      : `Design ${design} — pure design direction, shown in the ${DEFAULT_BRAND.shortName} brand.`;

  return (
    <div id="protobar" className="protobar" role="region" aria-label="Prototype controls">
        <div className="protobar__group protobar__design" role="group" aria-label="Designs">
          <span className="protobar__label">Design</span>
          {(['A', 'B', 'C'] as const).map(v => (
            <button
              key={v}
              type="button"
              className="protobar__seg"
              aria-pressed={design === v}
              onClick={() => choose({ kind: 'design', design: v })}
              title={`Design ${v}`}
            >
              {v}
            </button>
          ))}
          <p className="protobar__note">{note}</p>
        </div>

        <div className="protobar__group" role="group" aria-label="Websites">
          <span className="protobar__label">Websites</span>
          {WEBSITES.map(w => (
            <button
              key={w.key}
              type="button"
              className="protobar__site"
              aria-pressed={website?.key === w.key}
              aria-label={`${w.label} — ${w.brand.name}`}
              title={`${w.label} — ${w.brand.shortName}`}
              onClick={() => choose({ kind: 'website', website: w })}
              style={{ background: fieldColor(w.brand.accent) }}
            >
              {w.key}
            </button>
          ))}
          {website && (
            <button
              type="button"
              className={`protobar__icon${showLabels ? ' is-on' : ''}`}
              aria-pressed={showLabels}
              onClick={onLabels}
              title="Layers — show which design each section comes from"
            >
              <Layers size={14} aria-hidden="true" />
              <span className="sr-only">Layers: show which design each section comes from</span>
            </button>
          )}
        </div>
    </div>
  );
}
