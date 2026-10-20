import type { FC } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Siren } from 'lucide-react';
import type {
  BadgesData, CapabilitiesData, ContactData, CtaData, EditorialData, InnerVariant, MediaData, PageHeroData, Service, Variant,
} from '../data/types';
import { Button, Display, Eyebrow, Img, Reveal, TextLink, EASE } from '../components/ui';
import { Link } from '../system/router';
import type { NavTone } from '../components/Navigation';
import { ServiceCard, ServiceIndex } from './Services';
import { ArrowRight } from 'lucide-react';

/* ==================================================================
   PAGE HERO — one positioning system per variant, shared by
   About, Services, Safety, Careers and Contact.
   ================================================================== */

/* A — Full-bleed photograph. Title always bottom-anchored at the same inset. */
const PageHeroA: FC<PageHeroData> = ({ eyebrow, title, image }) => (
  <section className="ph-a" aria-labelledby="page-title">
    <motion.div className="ph-a__media" initial={{ opacity: 0.6 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, ease: EASE }}>
      <Img src={image} eager />
    </motion.div>
    <div className="ph-a__shade" aria-hidden="true" />
    <div className="container ph-a__content">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}>
        <Eyebrow className="on-dark">{eyebrow}</Eyebrow>
        <Display as="h1" id="page-title" size="xl" text={title} />
      </motion.div>
    </div>
  </section>
);

/* B — Brand-colour panel + image. Title always vertically centred in the panel. */
const PageHeroB: FC<PageHeroData> = ({ eyebrow, title, image }) => (
  <section className="ph-b" aria-labelledby="page-title">
    <div className="ph-b__panel">
      <motion.div className="ph-b__title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}>
        <Eyebrow className="on-field" rule={false} index="—">{eyebrow}</Eyebrow>
        <Display as="h1" id="page-title" size="l" text={title} />
      </motion.div>
    </div>
    <motion.div className="ph-b__media" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, ease: EASE }}>
      <Img src={image} eager sizes="60vw" />
    </motion.div>
  </section>
);

export const PAGE_HERO: Record<InnerVariant, FC<PageHeroData>> = { A: PageHeroA, B: PageHeroB };
export const PAGE_HERO_NAV: Record<InnerVariant, NavTone> = { A: 'overlay', B: 'solid' };

/* ==================================================================
   EDITORIAL — eyebrow + heading + paragraphs.
   ================================================================== */

/* A — Split: heading block left, reading column right. */
const EditorialA: FC<EditorialData & { tone?: 'light' | 'dark' }> = ({ eyebrow, heading, paragraphs, lead, tone = 'light' }) => (
  <section className={`ed-a${tone === 'dark' ? ' tone-dark' : ''}`}>
    <div className="container ed-a__grid">
      <Reveal className="ed-a__head">
        <Eyebrow className={tone === 'dark' ? 'on-dark' : ''}>{eyebrow}</Eyebrow>
        <Display size="m" text={heading} />
      </Reveal>
      <Reveal className="ed-a__body prose" delay={0.1}>
        {paragraphs.map((p, i) => <p key={i} className={lead && i === 0 ? 'lead' : ''}>{p}</p>)}
      </Reveal>
    </div>
  </section>
);

/* B — Indexed: numbered margin, full-width heading, stacked reading column. */
const EditorialB: FC<EditorialData & { tone?: 'light' | 'dark' }> = ({ index, eyebrow, heading, paragraphs, lead }) => (
  <section className="ed-b">
    <div className="container">
      <Reveal className="ed-b__grid">
        <div className="ed-b__margin">
          {index && <span className="index-number" aria-hidden="true">{index}</span>}
          <Eyebrow rule={false}>{eyebrow}</Eyebrow>
        </div>
        <Display size="m" text={heading} className="ed-b__heading" />
        <div className="ed-b__body prose">
          {paragraphs.map((p, i) => <p key={i} className={lead && i === 0 ? 'lead' : ''}>{p}</p>)}
        </div>
      </Reveal>
    </div>
  </section>
);

export const EDITORIAL: Record<InnerVariant, FC<EditorialData & { tone?: 'light' | 'dark' }>> = { A: EditorialA, B: EditorialB };

/* ==================================================================
   MEDIA — text with supporting photograph.
   ================================================================== */

/* A — Full-bleed half-and-half. */
const MediaA: FC<MediaData> = ({ eyebrow, heading, paragraphs, image, reverse }) => (
  <section className={`media-a${reverse ? ' media-a--reverse' : ''}`}>
    <div className="media-a__img"><Img src={image} sizes="50vw" /></div>
    <Reveal className="media-a__text">
      <Eyebrow>{eyebrow}</Eyebrow>
      <Display size="m" text={heading} />
      <div className="prose">{paragraphs.map((p, i) => <p key={i}>{p}</p>)}</div>
    </Reveal>
  </section>
);

/* B — Contained: reading column with a sticky framed image. */
const MediaB: FC<MediaData> = ({ index, eyebrow, heading, paragraphs, image, reverse }) => (
  <section className={`media-b${reverse ? ' media-b--reverse' : ''}`}>
    <div className="container media-b__grid">
      <Reveal className="media-b__text">
        <div className="media-b__label">
          {index && <span className="index-number" aria-hidden="true">{index}</span>}
          <Eyebrow rule={false}>{eyebrow}</Eyebrow>
        </div>
        <Display size="m" text={heading} />
        <div className="prose">{paragraphs.map((p, i) => <p key={i}>{p}</p>)}</div>
      </Reveal>
      <div className="media-b__img">
        <Reveal><Img src={image} sizes="40vw" /></Reveal>
      </div>
    </div>
  </section>
);

export const MEDIA: Record<InnerVariant, FC<MediaData>> = { A: MediaA, B: MediaB };

/* Wide supporting photograph between sections. */
export const ImageBand: FC<{ image: string; variant: InnerVariant }> = ({ image, variant }) => (
  <div className={`band band--${variant}`} aria-hidden="true">
    <div className={variant === 'B' ? 'container' : ''}>
      <Reveal className="band__frame"><Img src={image} /></Reveal>
    </div>
  </div>
);

/* ==================================================================
   BADGES — supplied certification / membership logos.
   ================================================================== */

const BadgesA: FC<BadgesData> = ({ eyebrow, heading, paragraphs, badges }) => (
  <section className="badges-a tone-dark">
    <div className="container badges-a__grid">
      <Reveal className="badges-a__text">
        <Eyebrow className="on-dark">{eyebrow}</Eyebrow>
        <Display size="m" text={heading} />
        <div className="prose">{paragraphs.map((p, i) => <p key={i}>{p}</p>)}</div>
      </Reveal>
      <ul className="badges-a__logos" aria-label="Certifications and memberships">
        {badges.map((b, i) => (
          <Reveal as="li" key={b.src} ><img src={b.src} alt={b.alt} loading="lazy" /></Reveal>
        ))}
      </ul>
    </div>
  </section>
);

const BadgesB: FC<BadgesData> = ({ index, eyebrow, heading, paragraphs, badges }) => (
  <section className="badges-b">
    <div className="container">
      <Reveal className="ed-b__grid">
        <div className="ed-b__margin">
          {index && <span className="index-number" aria-hidden="true">{index}</span>}
          <Eyebrow rule={false}>{eyebrow}</Eyebrow>
        </div>
        <Display size="m" text={heading} className="ed-b__heading" />
        <div className="ed-b__body prose">{paragraphs.map((p, i) => <p key={i}>{p}</p>)}</div>
      </Reveal>
      <ul className="badges-b__logos" aria-label="Certifications and memberships">
        {badges.map(b => (
          <li key={b.src}><img src={b.src} alt={b.alt} loading="lazy" /></li>
        ))}
      </ul>
    </div>
  </section>
);

export const BADGES_SECTION: Record<InnerVariant, FC<BadgesData>> = { A: BadgesA, B: BadgesB };

/* ==================================================================
   CAPABILITIES
   ================================================================== */

const CapabilitiesA: FC<CapabilitiesData> = ({ eyebrow, heading, items }) => (
  <section className="cap-a">
    <div className="container">
      <Reveal className="cap-a__plate tone-dark">
        <div className="cap-a__head">
          <Eyebrow className="on-dark">{eyebrow}</Eyebrow>
          <Display size="s" text={heading} />
        </div>
        <ul className="cap-a__list">
          {items.map(i => <li key={i}><span className="cap-a__mark" aria-hidden="true" />{i}</li>)}
        </ul>
      </Reveal>
    </div>
  </section>
);

const CapabilitiesB: FC<CapabilitiesData> = ({ eyebrow, heading, items }) => (
  <section className="cap-b">
    <div className="container">
      <Reveal className="cap-b__head">
        <Eyebrow rule={false}>{eyebrow}</Eyebrow>
        <Display size="s" text={heading} />
      </Reveal>
      <ol className="cap-b__list">
        {items.map((it, n) => (
          <Reveal as="li" key={it}>
            <span className="cap-b__num" aria-hidden="true">{String(n + 1).padStart(2, '0')}</span>
            <span>{it}</span>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export const CAPABILITIES: Record<InnerVariant, FC<CapabilitiesData>> = { A: CapabilitiesA, B: CapabilitiesB };

/* ==================================================================
   OTHER SERVICES
   ================================================================== */

const OtherServicesA: FC<{ services: Service[] }> = ({ services }) => (
  <section className="other-a" aria-labelledby="other-title">
    <div className="container">
      <Reveal className="other-a__head">
        <Eyebrow>Explore more</Eyebrow>
        <Display id="other-title" size="m" text="Other services" />
      </Reveal>
      <div className="other-a__grid" data-count={services.length}>
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={Math.min(i, 3) * 0.03}><ServiceCard service={s} index={i} compact /></Reveal>
        ))}
      </div>
    </div>
  </section>
);

const OtherServicesB: FC<{ services: Service[] }> = ({ services }) => (
  <section className="other-b" aria-labelledby="other-title">
    <div className="container">
      <Reveal className="other-b__head">
        <Eyebrow rule={false}>Explore more</Eyebrow>
        <Display id="other-title" size="m" text="Other services" />
      </Reveal>
      <ServiceIndex services={services} />
    </div>
  </section>
);

export const OTHER_SERVICES: Record<InnerVariant, FC<{ services: Service[] }>> = { A: OtherServicesA, B: OtherServicesB };

/* ==================================================================
   CTA — three distinct compositions.
   ================================================================== */

/* A — Photographic band, heading left, action right. */
const CtaA: FC<CtaData> = ({ eyebrow, heading, body, action, image }) => (
  <section className="cta-a">
    <div className="cta-a__media" aria-hidden="true"><Img src={image} /></div>
    <div className="cta-a__shade" aria-hidden="true" />
    <div className="container cta-a__grid">
      <Reveal className="cta-a__head">
        <Eyebrow className="on-dark">{eyebrow}</Eyebrow>
        <Display size="l" text={heading} />
      </Reveal>
      <Reveal className="cta-a__aside" delay={0.12}>
        <p className="lead">{body}</p>
        <Button action={action} tone="accent" />
      </Reveal>
    </div>
  </section>
);

/* B — Split field: brand-colour statement / light action column. */
const CtaB: FC<CtaData> = ({ eyebrow, heading, body, action }) => (
  <section className="cta-b">
    <div className="cta-b__field">
      <Reveal className="cta-b__inner">
        <Eyebrow className="on-field" rule={false} index="→">{eyebrow}</Eyebrow>
        <Display size="l" text={heading} />
      </Reveal>
    </div>
    <div className="cta-b__side">
      <Reveal className="cta-b__inner" delay={0.1}>
        <p className="lead">{body}</p>
        <Button action={action} tone="dark" />
      </Reveal>
    </div>
  </section>
);

/* C — Typographic: the heading itself is the link. */
const CtaC: FC<CtaData> = ({ eyebrow, heading, body, action }) => {
  const inner = (
    <>
      <span className="cta-c__text">{heading}</span>
      <span className="cta-c__arrow" aria-hidden="true"><ArrowRight /></span>
    </>
  );
  return (
    <section className="cta-c">
      <div className="container">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="display display--xl cta-c__heading">
            {action.external ? (
              <a href={action.href} target="_blank" rel="noopener noreferrer" className="cta-c__link">{inner}</a>
            ) : (
              <Link href={action.href} className="cta-c__link">{inner}</Link>
            )}
          </h2>
          <div className="cta-c__foot">
            <p className="lead">{body}</p>
            <TextLink action={action} />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export const CTA: Record<Variant, FC<CtaData>> = { A: CtaA, B: CtaB, C: CtaC };

/* ==================================================================
   CONTACT — no form, by client requirement.
   ================================================================== */

const ICONS = { address: MapPin, phone: Phone, email: Mail, emergency: Siren };

function ContactValue({ item }: { item: ContactData['items'][number] }) {
  const lines = item.value.map((v, i) => <span key={i}>{v}</span>);
  return item.href ? <a href={item.href}>{lines}</a> : <span className={item.placeholder ? 'is-placeholder' : ''}>{lines}</span>;
}

/* A — Dark: statement left, ruled list with brand-colour icon tiles right. */
const ContactA: FC<ContactData> = ({ eyebrow, heading, body, items }) => (
  <section className="contact-a tone-dark">
    <div className="container contact-a__grid">
      <Reveal className="contact-a__intro">
        <Eyebrow className="on-dark">{eyebrow}</Eyebrow>
        <Display size="l" text={heading} />
        <p className="lead">{body}</p>
      </Reveal>
      <ul className="contact-a__list">
        {items.map((it, n) => {
          const Icon = ICONS[it.kind];
          return (
            <Reveal as="li" key={it.kind}>
              <span className="contact-a__icon" aria-hidden="true"><Icon size={22} strokeWidth={1.75} /></span>
              <span className="contact-a__label">{it.label}</span>
              <span className="contact-a__value"><ContactValue item={it} /></span>
            </Reveal>
          );
        })}
      </ul>
    </div>
  </section>
);

/* B — Light: intro column + hairline grid of large values. */
const ContactB: FC<ContactData> = ({ eyebrow, heading, body, items }) => (
  <section className="contact-b">
    <div className="container contact-b__grid">
      <Reveal className="contact-b__intro">
        <Eyebrow rule={false}>{eyebrow}</Eyebrow>
        <Display size="m" text={heading} />
        <p className="lead">{body}</p>
      </Reveal>
      <ul className="contact-b__cells" data-count={items.length}>
        {items.map(it => {
          const Icon = ICONS[it.kind];
          return (
            <li key={it.kind}>
              <Icon className="contact-b__icon" size={28} strokeWidth={1.5} aria-hidden="true" />
              <span className="contact-b__label">{it.label}</span>
              <span className="contact-b__value"><ContactValue item={it} /></span>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

export const CONTACT: Record<InnerVariant, FC<ContactData>> = { A: ContactA, B: ContactB };
