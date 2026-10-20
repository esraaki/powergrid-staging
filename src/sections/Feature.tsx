import type { FC } from 'react';
import { motion } from 'motion/react';
import type { FeatureData, Variant } from '../data/types';
import { Display, Eyebrow, Img, Reveal, EASE } from '../components/ui';

/* A — Image with overlapping brand-colour panel. */
const FeatureA: FC<FeatureData> = ({ eyebrow, title, body, images }) => (
  <section className="feat-a" aria-labelledby="feature-title">
    <div className="feat-a__media">
      <Img src={images[0]} />
    </div>
    <div className="container feat-a__container">
      <motion.div
        className="feat-a__panel"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <Eyebrow className="on-field">{eyebrow}</Eyebrow>
        <Display id="feature-title" size="m" lines={title} />
        <p>{body}</p>
      </motion.div>
    </div>
  </section>
);

/* B — Editorial plate. Wide framed image, caption-style statement below. */
const FeatureB: FC<FeatureData> = ({ eyebrow, title, body, images }) => (
  <section className="feat-b" aria-labelledby="feature-title">
    <div className="container">
      <Reveal className="feat-b__media" y={0}>
        <Img src={images[0]} sizes="90vw" />
      </Reveal>
      <Reveal className="feat-b__caption">
        <div className="feat-b__margin">
          <span className="index-number" aria-hidden="true">04</span>
          <Eyebrow rule={false}>{eyebrow}</Eyebrow>
        </div>
        <Display id="feature-title" size="m" lines={title} className="feat-b__title" />
        <p className="feat-b__body">{body}</p>
      </Reveal>
    </div>
  </section>
);

/* C — Colour field: statement above a centred, balanced trio of images. */
const FeatureC: FC<FeatureData> = ({ eyebrow, title, body, images }) => (
  <section className="feat-c" aria-labelledby="feature-title">
    <div className="container">
      <Reveal className="feat-c__head">
        <div>
          <Eyebrow className="on-field">{eyebrow}</Eyebrow>
          <Display id="feature-title" size="xl" lines={title} />
        </div>
        <p className="lead feat-c__body">{body}</p>
      </Reveal>
      <Reveal className="feat-c__trio" delay={0.08}>
        {images.slice(0, 3).map((src, i) => (
          <div key={src + i} className={`feat-c__img feat-c__img--${i}`}>
            <Img src={src} sizes={i === 1 ? '40vw' : '28vw'} />
          </div>
        ))}
      </Reveal>
    </div>
  </section>
);

export const FEATURE: Record<Variant, FC<FeatureData>> = { A: FeatureA, B: FeatureB, C: FeatureC };
