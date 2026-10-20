/* ------------------------------------------------------------------
   Content contracts.
   Every section variant (A / B / C) of the same section consumes the
   same data shape, so a site can swap variants without touching copy.
------------------------------------------------------------------- */

export type Variant = 'A' | 'B' | 'C';
export type InnerVariant = 'A' | 'B';

export type Service = {
  slug: string;
  name: string;
  summary: string;
  image: string;
  /** Optional service-specific capability list; falls back to the shared list. */
  capabilities?: string[];
};

export type SocialLink = { network: 'facebook' | 'instagram' | 'linkedin'; href: string };

export type BrandType = {
  /** CSS font-family stack for display headings */
  heading: string;
  headingWeight: number;
  headingCase: 'uppercase' | 'none';
  /** Multiplier on the shared display scale; normalises narrow vs wide faces */
  headingScale: number;
  headingLeading: number;
  headingTracking: string;
  body: string;
  /** Google Fonts `family=` values for this brand only */
  googleFonts: string[];
};

export type Brand = {
  key: string;
  name: string;
  shortName: string;
  logo: { onLight: string; onDark: string; alt: string };
  /** One source colour. Field / text / hover tones are derived for contrast. */
  accent: string;
  type: BrandType;
  images: {
    hero: string[];
    who: string;
    feature: string;
    about: string;
    approach: string;
    safety: string;
    safetyProgram: string;
    safetyTraining: string;
    safetyWide: string;
    careers: string;
    careersWhy: string;
    contact: string;
    cta: string;
  };
  home: {
    hero: { eyebrow: string; title: string[]; body: string };
    who: { heading: string; body: string };
    services: { title: string[]; intro: string };
    feature: { eyebrow: string; title: string[]; body: string };
  };
  pages: {
    about: { heading: string; body: string };
    safety: { heading: string; body: string };
    careers: { heading: string; body: string };
    serviceLead: string;
    serviceBody: string;
    ctaBody: string;
  };
  services: Service[];
  contact: { address?: string[]; phone?: string; email?: string; emergency?: string };
  social: SocialLink[];
  /** External careers / ATS platform. Company-specific. */
  careersUrl?: string;
  /** Keys from shared badge library — certifications differ per company. */
  badges: string[];
};

/* ---------------- Section-level contracts ---------------- */

export type Action = { label: string; href: string; external?: boolean };

export type HeroData = { eyebrow: string; title: string[]; body: string; images: string[]; action: Action };
export type WhoData = { eyebrow: string; heading: string; body: string; image: string; secondaryImage?: string; action: Action };
export type PowerGridData = { statement: string };
export type ServicesData = { eyebrow: string; title: string[]; intro: string; services: Service[] };
export type FeatureData = { eyebrow: string; title: string[]; body: string; images: string[] };
export type PageHeroData = { eyebrow: string; title: string; image: string };
export type EditorialData = { index?: string; eyebrow: string; heading: string; paragraphs: string[]; lead?: boolean };
export type MediaData = EditorialData & { image: string; reverse?: boolean };
export type CtaData = { eyebrow: string; heading: string; body: string; action: Action; image: string };
export type BadgesData = EditorialData & { badges: { src: string; alt: string }[] };
export type CapabilitiesData = { eyebrow: string; heading: string; items: string[] };
export type ContactData = { eyebrow: string; heading: string; body: string; items: ContactItem[] };
export type ContactItem = { kind: 'address' | 'phone' | 'email' | 'emergency'; label: string; value: string[]; href?: string; placeholder?: boolean };

/* ---------------- Site configuration ---------------- */

/**
 * A complete site composition. Every key is independently selectable,
 * which is what lets ~16 companies share one content architecture
 * without sharing one look.
 */
export type SiteLayout = {
  home: { hero: Variant; whoWeAre: Variant; powergrid: Variant; services: Variant; feature: Variant };
  /** One internal hero system per site — guarantees every inner page title sits identically. */
  pageHero: InnerVariant;
  editorial: InnerVariant;
  media: InnerVariant;
  badges: InnerVariant;
  capabilities: InnerVariant;
  otherServices: InnerVariant;
  contact: InnerVariant;
  cta: { about: Variant; service: Variant; safety: Variant; careers: Variant };
  footer: Variant;
  /** Navigation social links: solid brand-colour squares, or quiet outlines. */
  navSocial: 'solid' | 'outline';
};

/**
 * A demonstration website: one company's brand + content, assembled from a
 * curated mix of Design A / B / C sections.
 */
export type Website = {
  /** '1' | '2' | '3' */
  key: string;
  /** "Website 1" */
  label: string;
  brand: Brand;
  layout: SiteLayout;
};

/** What the prototype is showing: a pure design direction, or one of the mixed websites. */
export type View = { kind: 'design'; design: Variant } | { kind: 'website'; website: Website };
