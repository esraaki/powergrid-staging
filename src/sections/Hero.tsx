import { useEffect, useState, type FC } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import type { HeroData, Variant } from '../data/types';
import { Button, Display, Eyebrow, Img, TextLink, EASE } from '../components/ui';
import type { NavTone } from '../components/Navigation';

function useCycle(length: number, ms = 7000) {
  const [i, setI] = useState(0);
  useEffect(() => {
    setI(0);
    if (length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => setI(v => (v + 1) % length), ms);
    return () => window.clearInterval(id);
  }, [length, ms]);
  return i;
}

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.1, ease: EASE, delay },
});

/* A — Cinematic. Full-bleed field photography, crossfading; type anchored low-left. */
const HeroA: FC<HeroData> = ({ eyebrow, title, body, images, action }) => {
  const i = useCycle(images.length);
  return (
    <section className="hero-a" aria-labelledby="hero-title">
      <div className="hero-a__media" aria-hidden="true">
        <AnimatePresence initial={false}>
          <motion.div
            key={images[i]}
            className="hero-a__frame"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.6, ease: EASE }, scale: { duration: 8, ease: 'linear' } }}
          >
            <Img src={images[i]} eager />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="hero-a__shade" aria-hidden="true" />
      <div className="container hero-a__content">
        <motion.div className="hero-a__title" {...rise(0.15)}>
          <Eyebrow className="on-dark">{eyebrow}</Eyebrow>
          <Display as="h1" id="hero-title" size="xl" lines={title} accentLine={title.length - 1} />
        </motion.div>
        <motion.div className="hero-a__aside" {...rise(0.45)}>
          <p className="lead">{body}</p>
          <Button action={action} tone="accent" />
        </motion.div>
      </div>
      {images.length > 1 && (
        <div className="container hero-a__ticks" aria-hidden="true">
          {images.map((src, n) => (
            <span key={src} className={n === i ? 'is-active' : ''}><i /></span>
          ))}
          <em>{String(i + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</em>
        </div>
      )}
    </section>
  );
};

/* B — Split field. Flat brand-colour panel against a photograph; structured, graphic. */
const HeroB: FC<HeroData> = ({ eyebrow, title, body, images, action }) => (
  <section className="hero-b" aria-labelledby="hero-title">
    <div className="hero-b__panel">
      <motion.div className="hero-b__top" {...rise(0.1)}>
        <Eyebrow className="on-field" rule={false} index="01">{eyebrow}</Eyebrow>
      </motion.div>
      <motion.div {...rise(0.2)}>
        <Display as="h1" id="hero-title" size="l" lines={title} />
      </motion.div>
      <motion.div className="hero-b__foot" {...rise(0.45)}>
        <p>{body}</p>
        <Button action={action} tone="light" />
      </motion.div>
    </div>
    <div className="hero-b__media">
      <motion.div className="hero-b__img" initial={{ clipPath: 'inset(0 0 0 100%)' }} animate={{ clipPath: 'inset(0 0 0 0%)' }} transition={{ duration: 1.2, ease: EASE }}>
        <Img src={images[0]} eager sizes="60vw" />
      </motion.div>
      {images[1] && (
        <div className="hero-b__inset" aria-hidden="true">
          <Img src={images[1]} eager sizes="20vw" />
        </div>
      )}
    </div>
  </section>
);

/* C — Monumental type. Headline as architecture; panoramic image beneath. */
const HeroC: FC<HeroData> = ({ eyebrow, title, body, images, action }) => (
  <section className="hero-c" aria-labelledby="hero-title">
    <div className="container">
      <motion.div className="hero-c__meta" {...rise(0.05)}>
        <Eyebrow>{eyebrow}</Eyebrow>
      </motion.div>
      <h1 id="hero-title" className="display display--xxl hero-c__title">
        {title.map((l, n) => (
          <motion.span key={n} className={`display__line hero-c__line hero-c__line--${n}`} {...rise(0.1 + n * 0.12)}>
            {l}{n < title.length - 1 ? ' ' : ''}
          </motion.span>
        ))}
      </h1>
      <div className="hero-c__grid">
        <motion.div className="hero-c__copy" {...rise(0.5)}>
          <p>{body}</p>
          <TextLink action={action} />
        </motion.div>
        <motion.div className="hero-c__media" initial={{ clipPath: 'inset(100% 0 0 0)' }} animate={{ clipPath: 'inset(0% 0 0 0)' }} transition={{ duration: 1.3, ease: EASE, delay: 0.3 }}>
          <Img src={images[0]} eager sizes="75vw" />
          <span className="hero-c__mark" aria-hidden="true" />
        </motion.div>
      </div>
    </div>
  </section>
);

export const HERO: Record<Variant, FC<HeroData>> = { A: HeroA, B: HeroB, C: HeroC };
/** How the navigation should sit over each hero. */
export const HERO_NAV: Record<Variant, NavTone> = { A: 'overlay', B: 'solid', C: 'solid' };
