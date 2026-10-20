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

/* C — Statement paragraph. Body copy set as display; staggered image pair. */
const WhoC: FC<WhoData> = ({ eyebrow, heading, body, image, secondaryImage, action }) => (
  <section className="who-c" aria-labelledby="who-title">
    <div className="container who-c__grid">
      <Reveal className="who-c__label">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 id="who-title" className="who-c__heading">{heading}</h2>
      </Reveal>
      <Reveal className="who-c__statement" delay={0.08}>
        <p>{body}</p>
        <Button action={action} tone="dark" />
      </Reveal>
      <Reveal className="who-c__img who-c__img--1" delay={0.1}>
        <Img src={image} sizes="45vw" />
      </Reveal>
      {secondaryImage && (
        <Reveal className="who-c__img who-c__img--2" delay={0.2}>
          <Img src={secondaryImage} sizes="30vw" />
        </Reveal>
      )}
    </div>
  </section>
);

export const WHO: Record<Variant, FC<WhoData>> = { A: WhoA, B: WhoB, C: WhoC };
