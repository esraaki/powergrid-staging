import { useState, type FC } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import type { Service, ServicesData, Variant } from '../data/types';
import { Display, Eyebrow, Img, Reveal, EASE } from '../components/ui';
import { Link } from '../system/router';

const pad = (n: number) => String(n).padStart(2, '0');

/**
 * Column spans on a 6-column grid for any service count.
 * Rows of three; remainders resolve to an asymmetric 4/2 – 2/4 pair or an even 3/3 pair.
 */
export function mosaicSpans(n: number): number[] {
  if (n <= 0) return [];
  if (n === 1) return [6];
  if (n === 2) return [3, 3];
  if (n === 4) return [4, 2, 2, 4];
  const r = n % 3;
  if (r === 0) return Array(n).fill(2);
  if (r === 1) return [...Array(n - 4).fill(2), 4, 2, 2, 4];
  return [...Array(n - 2).fill(2), 3, 3];
}

/* ---------- Shared: photo card (Services A, Other Services A) ---------- */
export function ServiceCard({ service, index, span, compact }: { service: Service; index: number; span?: number; compact?: boolean }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={`svc-card${compact ? ' svc-card--compact' : ''}`}
    >
      <Img src={service.image} sizes={span && span > 3 ? '60vw' : '33vw'} className="svc-card__img" />
      <span className="svc-card__shade" aria-hidden="true" />
      <span className="svc-card__wash" aria-hidden="true" />
      <span className="svc-card__body">
        <span className="svc-card__index" aria-hidden="true">{pad(index + 1)}</span>
        <span className="svc-card__title">{service.name}</span>
        {!compact && <span className="svc-card__summary">{service.summary}</span>}
      </span>
      <span className="svc-card__arrow" aria-hidden="true"><ArrowRight size={20} /></span>
    </Link>
  );
}

/* ---------- Shared: numbered index row list (Services B, Other Services B) ---------- */
export function ServiceIndex({ services, startIndex = 0 }: { services: Service[]; startIndex?: number }) {
  return (
    <ol className="svc-index">
      {services.map((s, i) => (
        <Reveal as="li" key={s.slug}>
          <Link href={`/services/${s.slug}`} className="svc-index__row">
            <span className="svc-index__num" aria-hidden="true">{pad(startIndex + i + 1)}</span>
            <span className="svc-index__title">{s.name}</span>
            <span className="svc-index__summary">{s.summary}</span>
            <span className="svc-index__thumb" aria-hidden="true">
              <Img src={s.image} sizes="240px" />
            </span>
            <span className="svc-index__arrow" aria-hidden="true"><ArrowRight size={22} /></span>
          </Link>
        </Reveal>
      ))}
    </ol>
  );
}

/* A — Photographic mosaic. */
const ServicesA: FC<ServicesData> = ({ eyebrow, title, intro, services }) => {
  const spans = mosaicSpans(services.length);
  return (
    <section className="svc-a" id="services" aria-labelledby="services-title">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <Display id="services-title" size="l" lines={title} accentLine={1} />
          </div>
          <p className="lead section-head__aside">{intro}</p>
        </Reveal>
        <div className="svc-a__grid" data-count={services.length}>
          {services.map((s, i) => (
            <div key={s.slug} className="svc-a__cell" style={{ '--span': spans[i] } as React.CSSProperties}>
              <Reveal delay={(i % 3) * 0.03} className="svc-a__reveal">
                <ServiceCard service={s} index={i} span={spans[i]} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* B — Numbered editorial index with image reveal. */
const ServicesB: FC<ServicesData> = ({ eyebrow, title, intro, services }) => (
  <section className="svc-b" id="services" aria-labelledby="services-title">
    <div className="container">
      <Reveal className="svc-b__head">
        <div className="svc-b__margin">
          <span className="index-number" aria-hidden="true">03</span>
          <Eyebrow rule={false}>{eyebrow}</Eyebrow>
        </div>
        <div className="svc-b__title">
          <Display id="services-title" size="m" lines={title} />
          <p className="lead">{intro}</p>
        </div>
      </Reveal>
      <ServiceIndex services={services} />
    </div>
  </section>
);

/* C — Split navigator. Large type list drives a sticky image stage. */
const ServicesC: FC<ServicesData> = ({ eyebrow, title, intro, services }) => {
  const [active, setActive] = useState(0);
  const current = services[Math.min(active, services.length - 1)];
  return (
    <section className="svc-c" id="services" aria-labelledby="services-title">
      <div className="container">
        <Reveal className="svc-c__head">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Display id="services-title" size="xl" lines={title} />
          <p className="lead">{intro}</p>
        </Reveal>
        <div className="svc-c__grid">
          <ol className="svc-c__list">
            {services.map((s, i) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className={`svc-c__item${i === active ? ' is-active' : ''}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                >
                  <span className="svc-c__num" aria-hidden="true">{pad(i + 1)}</span>
                  <span className="svc-c__name">{s.name}</span>
                  <span className="svc-c__mobile" aria-hidden="true">
                    <Img src={s.image} sizes="90vw" />
                  </span>
                  <span className="svc-c__msummary">{s.summary}</span>
                  <ArrowRight className="svc-c__arrow" size={28} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ol>
          <div className="svc-c__stage" aria-hidden="true">
            <div className="svc-c__frame">
              <AnimatePresence initial={false}>
                <motion.div
                  key={current.slug}
                  className="svc-c__img"
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  <Img src={current.image} sizes="45vw" />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="svc-c__caption">
              <span>{pad(active + 1)} / {pad(services.length)}</span>
              <p>{current.summary}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const SERVICES: Record<Variant, FC<ServicesData>> = { A: ServicesA, B: ServicesB, C: ServicesC };
