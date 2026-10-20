import type { FC } from 'react';
import type { Variant, WhoData } from '../data/types';
import { Button, Display, Eyebrow, Img, Reveal, TextLink } from '../components/ui';

/* A — Dark statement. Charcoal field, oversized heading with accent rule. */
const WhoA: FC<WhoData> = ({ eyebrow, heading, body, action }) => (
  <section className="who-a tone-dark" aria-labelledby="who-title">
    <div className="container who-a__grid">
      <Reveal className="who-a__head">
        <Eyebrow className="on-dark">{eyebrow}</Eyebrow>
        <Display id="who-title" size="l" text={heading} />
      </Reveal>
      <Reveal className="who-a__copy" delay={0.12}>
        <p className="lead">{body}</p>
        <Button action={action} tone="accent" />
      </Reveal>
    </div>
  </section>
);

/* B — Indexed editorial. Numbered margin, hairline rules, framed image. */
const WhoB: FC<WhoData> = ({ eyebrow, heading, body, image, action }) => (
  <section className="who-b" aria-labelledby="who-title">
    <div className="container">
      <div className="who-b__grid">
        <Reveal className="who-b__margin">
          <span className="index-number" aria-hidden="true">02</span>
          <Eyebrow rule={false}>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal className="who-b__heading" delay={0.06}>
          <Display id="who-title" size="m" text={heading} />
        </Reveal>
        <Reveal className="who-b__copy" delay={0.12}>
          <p className="lead">{body}</p>
          <TextLink action={action} />
        </Reveal>
        <Reveal className="who-b__media" delay={0.18}>
          <Img src={image} sizes="40vw" />
        </Reveal>
      </div>
    </div>
  </section>
);

/* C — Monumental heading over a balanced image / statement pair.
   Shares Hero C's frame: full-width heading, then a 6 + 5 column pair. */
const WhoC: FC<WhoData> = ({ eyebrow, heading, body, image, action }) => (
  <section className="who-c" aria-labelledby="who-title">
    <div className="container">
      <Reveal className="who-c__head">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Display id="who-title" size="l" text={heading} />
      </Reveal>
      <div className="who-c__pair">
        <Reveal className="who-c__img">
          <Img src={image} sizes="50vw" />
        </Reveal>
        <Reveal className="who-c__statement" delay={0.08}>
          <p>{body}</p>
          <Button action={action} tone="dark" />
        </Reveal>
      </div>
    </div>
  </section>
);

export const WHO: Record<Variant, FC<WhoData>> = { A: WhoA, B: WhoB, C: WhoC };
