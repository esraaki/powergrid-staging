import type { FC } from 'react';
import type { PowerGridData, Variant } from '../data/types';
import { POWERGRID } from '../data/media';
import { Reveal } from '../components/ui';

/* The parent identifier always stays secondary to the operating company. */

/* A — Brand-colour band. White mono mark, rule, statement; supplied grain texture. */
const PowerGridA: FC<PowerGridData> = ({ statement }) => (
  <section className="pg-a" aria-label="Part of PowerGrid Services">
    <div className="pg-a__grain" aria-hidden="true" style={{ backgroundImage: `url(${POWERGRID.texture})` }} />
    <Reveal className="container pg-a__inner">
      <img className="pg-a__logo" src={POWERGRID.logo.mono} alt={POWERGRID.name} />
      <span className="pg-a__rule" aria-hidden="true" />
      <p>{statement}</p>
    </Reveal>
  </section>
);

/* B — Ruled separator. Quiet, typographic lockup between hairlines. */
const PowerGridB: FC<PowerGridData> = ({ statement }) => (
  <section className="pg-b" aria-label="Part of PowerGrid Services">
    <Reveal className="container">
      <div className="pg-b__inner">
        <p className="pg-b__label">Our family of companies</p>
        <img className="pg-b__logo" src={POWERGRID.logo.onLight} alt={POWERGRID.name} />
        <p className="pg-b__text">{statement}</p>
      </div>
    </Reveal>
  </section>
);

/* C — Inset dark plate. Larger statement with the colour-on-dark mark. */
const PowerGridC: FC<PowerGridData> = ({ statement }) => (
  <section className="pg-c" aria-label="Part of PowerGrid Services">
    <div className="container">
      <Reveal className="pg-c__plate">
        <p className="pg-c__text">{statement}</p>
        <div className="pg-c__mark">
          <img src={POWERGRID.logo.onDark} alt={POWERGRID.name} />
        </div>
      </Reveal>
    </div>
  </section>
);

export const POWERGRID_ID: Record<Variant, FC<PowerGridData>> = { A: PowerGridA, B: PowerGridB, C: PowerGridC };
