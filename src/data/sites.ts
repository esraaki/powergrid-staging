import type { Site, SiteLayout, Variant } from './types';
import { ampp } from './brands/ampp';
import { csr } from './brands/csr';
import { james } from './brands/james';
import { northline } from './brands/northline';
import { summit } from './brands/summit';

/* ------------------------------------------------------------------
   Design presets. A preset is just a SiteLayout where every slot uses
   the same vocabulary. Production sites are free to mix (see X / Y).
------------------------------------------------------------------- */

export const PRESETS: Record<Variant, SiteLayout> = {
  A: {
    home: { hero: 'A', whoWeAre: 'A', powergrid: 'A', services: 'A', feature: 'A' },
    pageHero: 'A', editorial: 'A', media: 'A', badges: 'A', capabilities: 'A', otherServices: 'A', contact: 'A',
    cta: { about: 'A', service: 'A', safety: 'A', careers: 'A' },
    footer: 'A',
  },
  B: {
    home: { hero: 'B', whoWeAre: 'B', powergrid: 'B', services: 'B', feature: 'B' },
    pageHero: 'B', editorial: 'B', media: 'B', badges: 'B', capabilities: 'B', otherServices: 'B', contact: 'B',
    cta: { about: 'B', service: 'B', safety: 'B', careers: 'B' },
    footer: 'B',
  },
  /** C is a homepage concept. Inner pages fall back to the B inner system,
      keeping C's CTA and footer so the site still reads as one design. */
  C: {
    home: { hero: 'C', whoWeAre: 'C', powergrid: 'C', services: 'C', feature: 'C' },
    pageHero: 'B', editorial: 'B', media: 'B', badges: 'B', capabilities: 'B', otherServices: 'B', contact: 'B',
    cta: { about: 'C', service: 'C', safety: 'C', careers: 'C' },
    footer: 'C',
  },
};

/** Variation X — Northline: typographic C hero, dark A intro, B index services. */
const layoutX: SiteLayout = {
  home: { hero: 'C', whoWeAre: 'A', powergrid: 'B', services: 'B', feature: 'A' },
  pageHero: 'A', editorial: 'B', media: 'A', badges: 'B', capabilities: 'A', otherServices: 'B', contact: 'A',
  cta: { about: 'C', service: 'B', safety: 'A', careers: 'B' },
  footer: 'B',
};

/** Variation Y — Summit: split B hero, editorial C intro, C service navigator. */
const layoutY: SiteLayout = {
  home: { hero: 'B', whoWeAre: 'C', powergrid: 'A', services: 'C', feature: 'B' },
  pageHero: 'B', editorial: 'A', media: 'B', badges: 'A', capabilities: 'B', otherServices: 'A', contact: 'B',
  cta: { about: 'A', service: 'C', safety: 'B', careers: 'A' },
  footer: 'C',
};

export const SITES: Site[] = [
  { key: 'ampp', label: 'AMPP', brand: ampp, layout: null },
  { key: 'csr', label: 'CSR', brand: csr, layout: null },
  { key: 'james', label: 'James', brand: james, layout: null },
  { key: 'x', label: 'Variation X', brand: northline, layout: layoutX, demo: true },
  { key: 'y', label: 'Variation Y', brand: summit, layout: layoutY, demo: true },
];

export const getSite = (key: string | null | undefined) => SITES.find(s => s.key === key) ?? SITES[0];

export function resolveLayout(site: Site, design: Variant): SiteLayout {
  return site.layout ?? PRESETS[design];
}
