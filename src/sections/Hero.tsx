import { useEffect, useState, type FC } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import type { HeroData, Variant } from '../data/types';
import { Button, Display, Img, TextLink, EASE } from '../components/ui';
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

/* Restrained entrance: short travel, one soft fade. */
const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: EASE, delay },
});
const fade = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.9, ease: EASE, delay },
});

/* A — Cinematic. Full-bleed field photography, crossfading; type anchored low-left. */
const HeroA: FC<HeroData> = ({ title, body, images, action }) => {
  const i = useCycle(images.length);
  return (
    <section className="hero-a" aria-labelledby="hero-title">
      <div className="hero-a__media" aria-hidden="true">
        <AnimatePresence initial={false}>
          <motion.div
            key={images[i]}
            className="hero-a__frame"
            initial={{ opacity: 0, scale: 1.015 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.4, ease: EASE }, scale: { duration: 8, ease: 'linear' } }}
          >
            <Img src={images[i]} eager />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="hero-a__shade" aria-hidden="true" />
      <div className="container hero-a__content">
        <motion.div className="hero-a__title" {...rise(0.1)}>
          <Display as="h1" id="hero-title" size="xl" lines={title} accentLine={title.length - 1} className="hero-a__h1" fit />
        </motion.div>
        <motion.div className="hero-a__aside" {...fade(0.35)}>
          <p className="lead">{body}</p>
          <Button action={action} tone="accent" />
        </motion.div>
      </div>
    </section>
  );
};

/* B — Split field. Flat brand-colour panel against a single photograph. */
const HeroB: FC<HeroData> = ({ title, body, images, action }) => (
  <section className="hero-b" aria-labelledby="hero-title">
    <motion.div className="hero-b__panel" {...rise(0.05)}>
      <Display as="h1" id="hero-title" size="l" lines={title} className="hero-b__h1" fit />
      <div className="hero-b__foot">
        <p>{body}</p>
        <Button action={action} tone="light" />
      </div>
    </motion.div>
    <motion.div className="hero-b__media" {...fade()}>
      <Img src={images[0]} eager sizes="60vw" />
    </motion.div>
  </section>
);

/* C — Monumental type. The headline carries the page; one wide photograph sits
   beneath it on the same 12-column frame. */
const HeroC: FC<HeroData> = ({ title, body, images, action }) => (
  <section className="hero-c" aria-labelledby="hero-title">
    <div className="container">
      <div className="hero-c__top">
        <motion.div className="hero-c__head" {...rise(0.05)}>
          <Display as="h1" id="hero-title" size="xxl" lines={title} accentLine={title.length - 1} className="hero-c__title" fit />
        </motion.div>
        <motion.div className="hero-c__aside" {...fade(0.3)}>
          <p>{body}</p>
          <TextLink action={action} />
        </motion.div>
      </div>
      <motion.div className="hero-c__stage" {...fade(0.15)}>
        <Img src={images[0]} eager sizes="92vw" />
      </motion.div>
    </div>
  </section>
);

export const HERO: Record<Variant, FC<HeroData>> = { A: HeroA, B: HeroB, C: HeroC };
/** How the navigation should sit over each hero. */
export const HERO_NAV: Record<Variant, NavTone> = { A: 'overlay', B: 'solid', C: 'solid' };
