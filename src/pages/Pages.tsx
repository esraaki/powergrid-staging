/* ------------------------------------------------------------------
   Page compositions. Pages own ORDER and CONTENT MAPPING only —
   which variant renders each slot comes from the site's SiteLayout.
------------------------------------------------------------------- */
import type { Brand, ContactItem, Service } from '../data/types';
import { BADGES, POWERGRID } from '../data/media';
import { DEFAULT_CAPABILITIES, aboutCopy, careersCopy, safetyCopy, serviceCopy } from '../data/copy';
import { useSite } from '../system/site';
import type { Route } from '../system/router';
import { Slot } from '../components/ui';
import { HERO, HERO_NAV } from '../sections/Hero';
import { WHO } from '../sections/WhoWeAre';
import { POWERGRID_ID } from '../sections/PowerGrid';
import { SERVICES } from '../sections/Services';
import { FEATURE } from '../sections/Feature';
import {
  BADGES_SECTION, CAPABILITIES, CONTACT, CTA, EDITORIAL, ImageBand, MEDIA, OTHER_SERVICES, PAGE_HERO, PAGE_HERO_NAV,
} from '../sections/Inner';
import type { SiteLayout } from '../data/types';
import type { NavTone } from '../components/Navigation';
import { Link } from '../system/router';

export function navToneFor(route: Route, layout: SiteLayout): NavTone {
  if (route.page === 'home') return HERO_NAV[layout.home.hero];
  if (route.page === 'notfound') return 'solid';
  return PAGE_HERO_NAV[layout.pageHero];
}

const contactCta = (b: Brand, image: string) => ({
  eyebrow: 'Start a conversation',
  heading: 'Have a project in mind?',
  body: b.pages.ctaBody,
  action: { label: 'Get in touch', href: '/contact' },
  image,
});

/* ---------------- Home ---------------- */
export function HomePage() {
  const { brand: b, layout } = useSite();
  const L = layout.home;
  const Hero = HERO[L.hero], Who = WHO[L.whoWeAre], PG = POWERGRID_ID[L.powergrid], Svc = SERVICES[L.services], Feat = FEATURE[L.feature];
  return (
    <>
      <Slot name="Hero" variant={L.hero}>
        <Hero {...b.home.hero} images={b.images.hero} action={{ label: 'Explore services', href: '#services' }} />
      </Slot>
      <Slot name="Who We Are" variant={L.whoWeAre}>
        <Who eyebrow="Who we are" heading={b.home.who.heading} body={b.home.who.body} image={b.images.who} secondaryImage={b.images.about} action={{ label: 'About us', href: '/about' }} />
      </Slot>
      <Slot name="PowerGrid" variant={L.powergrid}>
        <PG statement={POWERGRID.statement} />
      </Slot>
      <Slot name="Services" variant={L.services}>
        <Svc eyebrow="Services" title={b.home.services.title} intro={b.home.services.intro} services={b.services} />
      </Slot>
      <Slot name="Feature" variant={L.feature}>
        <Feat {...b.home.feature} images={[b.images.feature, ...b.services.slice(0, 2).map(s => s.image)]} />
      </Slot>
    </>
  );
}

/* ---------------- About ---------------- */
export function AboutPage() {
  const { brand: b, layout } = useSite();
  const PH = PAGE_HERO[layout.pageHero], Ed = EDITORIAL[layout.editorial], Md = MEDIA[layout.media], Cta = CTA[layout.cta.about];
  const c = aboutCopy(b);
  return (
    <>
      <Slot name="Page Hero" variant={layout.pageHero}><PH eyebrow={b.name} title="About Us" image={b.images.about} /></Slot>
      <Slot name="Who We Are" variant={layout.editorial}>
        <Ed index="01" eyebrow="Who we are" heading={b.pages.about.heading} paragraphs={c.who} lead />
      </Slot>
      <Slot name="Our Approach" variant={layout.media}>
        <Md index="02" eyebrow="Our approach" heading={c.approach.heading} paragraphs={c.approach.paragraphs} image={b.images.approach} />
      </Slot>
      <Slot name="Careers CTA" variant={layout.cta.about}>
        <Cta
          eyebrow="Join our team"
          heading="Build your future with us."
          body="Explore opportunities to do meaningful infrastructure work alongside experienced teams in the field."
          action={{ label: 'Explore careers', href: '/careers' }}
          image={b.images.careers}
        />
      </Slot>
    </>
  );
}

/* ---------------- Service ---------------- */
export function ServicePage({ service }: { service: Service }) {
  const { brand: b, layout } = useSite();
  const PH = PAGE_HERO[layout.pageHero], Ed = EDITORIAL[layout.editorial], Cap = CAPABILITIES[layout.capabilities];
  const Cta = CTA[layout.cta.service], Other = OTHER_SERVICES[layout.otherServices];
  const c = serviceCopy(b, service.summary);
  const others = b.services.filter(s => s.slug !== service.slug);
  return (
    <>
      <Slot name="Page Hero" variant={layout.pageHero}><PH eyebrow="Services" title={service.name} image={service.image} /></Slot>
      <Slot name="Service Body" variant={layout.editorial}>
        <Ed index="01" eyebrow={service.name} heading={c.heading} paragraphs={c.paragraphs} lead />
      </Slot>
      <Slot name="Capabilities" variant={layout.capabilities}>
        <Cap eyebrow="Capabilities" heading="Capabilities may include" items={service.capabilities ?? DEFAULT_CAPABILITIES} />
      </Slot>
      <Slot name="Service CTA" variant={layout.cta.service}>
        <Cta {...contactCta(b, b.images.cta)} />
      </Slot>
      {others.length > 0 && (
        <Slot name="Other Services" variant={layout.otherServices}><Other services={others} /></Slot>
      )}
    </>
  );
}

/* ---------------- Safety ---------------- */
export function SafetyPage() {
  const { brand: b, layout } = useSite();
  const PH = PAGE_HERO[layout.pageHero], Ed = EDITORIAL[layout.editorial], Md = MEDIA[layout.media];
  const Bd = BADGES_SECTION[layout.badges], Cta = CTA[layout.cta.safety];
  const c = safetyCopy(b);
  const badges = b.badges.map(k => BADGES[k]).filter(Boolean);
  return (
    <>
      <Slot name="Page Hero" variant={layout.pageHero}><PH eyebrow={b.name} title="Safety" image={b.images.safety} /></Slot>
      <Slot name="Commitment" variant={layout.editorial}>
        <Ed index="01" eyebrow="Our commitment" heading={b.pages.safety.heading} paragraphs={c.intro} lead />
      </Slot>
      <Slot name="Safety Information + Badges" variant={layout.badges}>
        <Bd index="02" eyebrow="Safety information" heading={c.information.heading} paragraphs={c.information.paragraphs} badges={badges} />
      </Slot>
      <Slot name="Program" variant={layout.media}>
        <Md index="03" eyebrow="Program content" heading={c.program.heading} paragraphs={c.program.paragraphs} image={b.images.safetyProgram} />
      </Slot>
      <Slot name="Training" variant={layout.media}>
        <Md index="04" eyebrow="Training & accountability" heading={c.training.heading} paragraphs={c.training.paragraphs} image={b.images.safetyTraining} reverse />
      </Slot>
      <Slot name="Image" variant={layout.media}><ImageBand image={b.images.safetyWide} variant={layout.media} /></Slot>
      <Slot name="Consistent Approach" variant={layout.editorial}>
        <Ed index="05" eyebrow="A consistent approach" heading={c.closing.heading} paragraphs={c.closing.paragraphs} />
      </Slot>
      <Slot name="Safety CTA" variant={layout.cta.safety}>
        <Cta {...contactCta(b, b.images.cta)} body="Have a question about an upcoming project or need to connect with the right team? Get in touch and we’ll point you in the right direction." />
      </Slot>
    </>
  );
}

/* ---------------- Careers ---------------- */
export function CareersPage() {
  const { brand: b, layout } = useSite();
  const PH = PAGE_HERO[layout.pageHero], Ed = EDITORIAL[layout.editorial], Md = MEDIA[layout.media], Cta = CTA[layout.cta.careers];
  const c = careersCopy(b);
  return (
    <>
      <Slot name="Page Hero" variant={layout.pageHero}><PH eyebrow="Careers" title="Join Our Team" image={b.images.careers} /></Slot>
      <Slot name="Opportunities" variant={layout.editorial}>
        <Ed index="01" eyebrow="Opportunities" heading={b.pages.careers.heading} paragraphs={c.intro} lead />
      </Slot>
      <Slot name="Why Join Us" variant={layout.media}>
        <Md index="02" eyebrow="Why join us" heading={c.why.heading} paragraphs={c.why.paragraphs} image={b.images.careersWhy} />
      </Slot>
      <Slot name="Open Positions CTA" variant={layout.cta.careers}>
        <Cta
          eyebrow="Open positions"
          heading="View open positions."
          body={`Current openings for ${b.name} are listed on our careers platform, where you can review role details and apply.`}
          action={{ label: 'View open positions', href: b.careersUrl ?? '#', external: true }}
          image={b.images.cta}
        />
      </Slot>
    </>
  );
}

/* ---------------- Contact ---------------- */
function contactItems(b: Brand): ContactItem[] {
  const c = b.contact;
  const tel = (v: string) => `tel:${v.replace(/\D/g, '')}`;
  return [
    c.address
      ? { kind: 'address', label: 'Address', value: c.address }
      : { kind: 'address', label: 'Address', value: ['Address to be confirmed'], placeholder: true },
    c.phone
      ? { kind: 'phone', label: 'Phone', value: [c.phone], href: tel(c.phone) }
      : { kind: 'phone', label: 'Phone', value: ['Phone to be confirmed'], placeholder: true },
    c.email
      ? { kind: 'email', label: 'Email', value: [c.email], href: `mailto:${c.email}` }
      : { kind: 'email', label: 'Email', value: ['Email to be confirmed'], placeholder: true },
    c.emergency
      ? { kind: 'emergency', label: 'Immediate support', value: [c.emergency], href: tel(c.emergency) }
      : { kind: 'emergency', label: 'Immediate support', value: ['To be confirmed'], placeholder: true },
  ];
}

export function ContactPage() {
  const { brand: b, layout } = useSite();
  const PH = PAGE_HERO[layout.pageHero], Ct = CONTACT[layout.contact];
  return (
    <>
      <Slot name="Page Hero" variant={layout.pageHero}><PH eyebrow={b.name} title="Contact" image={b.images.contact} /></Slot>
      <Slot name="Contact Details" variant={layout.contact}>
        <Ct
          eyebrow={`Contact ${b.shortName}`}
          heading="Let’s start a conversation."
          body="Have a project, field need or general question? Reach out and we’ll connect you with the right person on our team."
          items={contactItems(b)}
        />
      </Slot>
    </>
  );
}

export function NotFoundPage() {
  return (
    <section className="notfound">
      <div className="container">
        <p className="eyebrow"><span>Page not found</span></p>
        <h1 className="display display--l">This page has moved or doesn’t exist.</h1>
        <p className="lead"><Link className="textlink" href="/">Return to the homepage</Link></p>
      </div>
    </section>
  );
}
