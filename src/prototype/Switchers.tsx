/* Staging-only presentation toolbar. Not part of production company sites.

   A thin black ribbon, hidden by default, that docks to the bottom edge:
     left   DESIGN A / B / C       — pure design directions
     right  WEBSITES 1 / 2 / 3     — demonstration websites mixed from A/B/C
            + Layers               — tag each section with its A/B/C origin

   Reveal: pointer → an invisible strip along the bottom edge; touch → a small
   handle tab; keyboard → focusing any control. It hides again shortly after. */
import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp, Layers } from 'lucide-react';
import type { View } from '../data/types';
import { DEFAULT_BRAND, WEBSITES } from '../data/websites';
import { useSite } from '../system/site';
import { fieldColor } from '../system/theme';

type Props = { onView: (v: View) => void; onLabels: () => void; isHome: boolean };

const HIDE_AFTER_POINTER_MS = 700;
const HIDE_AFTER_TOUCH_MS = 5000;

export function ProtoBar({ onView, onLabels, isHome }: Props) {
  const { view, showLabels } = useSite();
  const [shown, setShown] = useState(false);
  const timer = useRef<number>();
  const bar = useRef<HTMLDivElement>(null);
  const touch = useRef(window.matchMedia('(hover: none)').matches);

  const show = useCallback(() => { window.clearTimeout(timer.current); setShown(true); }, []);
  const hideSoon = useCallback(() => {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      // Never hide out from under keyboard focus.
      const active = document.activeElement;
      if (!touch.current && active && bar.current?.contains(active) && active.matches(':focus-visible')) return;
      setShown(false);
    }, touch.current ? HIDE_AFTER_TOUCH_MS : HIDE_AFTER_POINTER_MS);
  }, []);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const design = view.kind === 'design' ? view.design : null;
  const website = view.kind === 'website' ? view.website : null;
  const note = website
    ? `${website.label} — ${website.brand.name}, assembled from Designs A, B and C.`
    : design === 'C' && !isHome
      ? 'Design C — homepage concept. Inner pages use the Design B system.'
      : `Design ${design} — pure design direction, shown in the ${DEFAULT_BRAND.shortName} brand.`;

  return (
    <div className={`protodock${shown ? ' is-shown' : ''}`}>
      {/* Pointer trigger: an invisible strip along the bottom edge. */}
      <div className="protodock__zone" aria-hidden="true" onMouseEnter={show} onMouseLeave={hideSoon} />

      {/* Touch trigger: a small handle tab. */}
      <button type="button" className="protodock__handle" aria-controls="protobar" aria-expanded={shown} onClick={() => { show(); hideSoon(); }}>
        <ChevronUp size={16} aria-hidden="true" />
        <span className="sr-only">Show prototype controls</span>
      </button>

      <div
        id="protobar"
        ref={bar}
        className="protobar"
        role="region"
        aria-label="Prototype controls"
        onMouseEnter={show}
        onMouseLeave={hideSoon}
        onFocus={show}
        onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget as Node)) hideSoon(); }}
        onPointerDown={() => { if (touch.current) { show(); hideSoon(); } }}
      >
        <div className="protobar__group protobar__design" role="group" aria-label="Designs">
          <span className="protobar__label">Design</span>
          {(['A', 'B', 'C'] as const).map(v => (
            <button
              key={v}
              type="button"
              className="protobar__seg"
              aria-pressed={design === v}
              onClick={() => onView({ kind: 'design', design: v })}
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
              onClick={() => onView({ kind: 'website', website: w })}
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
          <button type="button" className="protobar__close" onClick={() => setShown(false)}>
            <ChevronDown size={16} aria-hidden="true" />
            <span className="sr-only">Hide prototype controls</span>
          </button>
        </div>
      </div>
    </div>
  );
}
