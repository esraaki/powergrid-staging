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
        initial={{ opacity: 0, x: 48 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: EASE }}
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
      {/* Observe the unclipped wrapper: IntersectionObserver ignores fully clipped elements. */}
      <motion.div className="feat-b__media" initial="hide" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <motion.div
          className="feat-b__wipe"
          variants={{ hide: { clipPath: 'inset(0 0 100% 0)' }, show: { clipPath: 'inset(0 0 0% 0)' } }}
          transition={{ duration: 1.1, ease: EASE }}
        >
          <Img src={images[0]} sizes="90vw" />
        </motion.div>
      </motion.div>
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

/* C — Colour field with image sequence. */
const FeatureC: FC<FeatureData> = ({ eyebrow, title, body, images }) => (
  <section className="feat-c" aria-labelledby="feature-title">
    <div className="container">
      <Reveal className="feat-c__head">
        <Eyebrow className="on-field">{eyebrow}</Eyebrow>
        <Display id="feature-title" size="xl" lines={title} />
      </Reveal>
      <div className="feat-c__row">
        <Reveal className="feat-c__body"><p className="lead">{body}</p></Reveal>
        <div className="feat-c__strip">
          {images.slice(0, 3).map((src, i) => (
            <Reveal key={src + i} delay={0.1 + i * 0.1} className={`feat-c__img feat-c__img--${i}`}>
              <Img src={src} sizes="30vw" />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const FEATURE: Record<Variant, FC<FeatureData>> = { A: FeatureA, B: FeatureB, C: FeatureC };
