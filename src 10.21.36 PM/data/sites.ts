import type { Site, SiteLayout, Variant, ViewMode } from './types';
import { ampp } from './brands/ampp';
import { csr } from './brands/csr';
import { james } from './brands/james';

/* ------------------------------------------------------------------
   DESIGN PRESETS (A / B / C)
   Every slot uses the same vocabulary — for reviewing the library.
------------------------------------------------------------------- */

export const PRESETS: Record<Variant, SiteLayout> = {
  A: {
    home: { hero: 'A', whoWeAre: 'A', powergrid: 'A', services: 'A', feature: 'A' },
    pageHero: 'A', editorial: 'A', media: 'A', badges: 'A', capabilities: 'A', otherServices: 'A', contact: 'A',
    cta: { about: 'A', service: 'A', safety: 'A', careers: 'A' },
    footer: 'A',
    navSocial: 'solid',
  },
  B: {
    home: { hero: 'B', whoWeAre: 'B', powergrid: 'B', services: 'B', feature: 'B' },
    pageHero: 'B', editorial: 'B', media: 'B', badges: 'B', capabilities: 'B', otherServices: 'B', contact: 'B',
    cta: { about: 'B', service: 'B', safety: 'B', careers: 'B' },
    footer: 'B',
    navSocial: 'outline',
  },
  /** C is a homepage concept. Inner pages fall back to the B inner system,
      keeping C's CTA and footer so the site still reads as one design. */
  C: {
    home: { hero: 'C', whoWeAre: 'C', powergrid: 'C', services: 'C', feature: 'C' },
    pageHero: 'B', editorial: 'B', media: 'B', badges: 'B', capabilities: 'B', otherServices: 'B', contact: 'B',
    cta: { about: 'C', service: 'C', safety: 'C', careers: 'C' },
    footer: 'C',
    navSocial: 'outline',
  },
};

/* ------------------------------------------------------------------
   MIXED SITES (X / Y / Z)
   Finished company websites, each art-directed from all three
   libraries. Brand tokens (colour, type, imagery, copy) provide the
   cohesion; the slots provide the variety.
------------------------------------------------------------------- */

/** X — AMPP. Cinematic and industrial: A's full-bleed hero and photo-led inner
    pages, B's indexed editorial introduction, C's service navigator and
    conversation-led footer. */
const layoutX: SiteLayout = {
  home: { hero: 'A', whoWeAre: 'B', powergrid: 'A', services: 'C', feature: 'A' },
  pageHero: 'A', editorial: 'B', media: 'A', badges: 'A', capabilities: 'A', otherServices: 'B', contact: 'A',
  cta: { about: 'B', service: 'A', safety: 'C', careers: 'B' },
  footer: 'C',
  navSocial: 'solid',
};

/** Y — CSR. Composed and editorial: B's split colour-field hero and serif
    service index, C's statement introduction and dark identifier plate,
    A's photographic feature. */
const layoutY: SiteLayout = {
  home: { hero: 'B', whoWeAre: 'C', powergrid: 'C', services: 'B', feature: 'A' },
  pageHero: 'B', editorial: 'A', media: 'B', badges: 'B', capabilities: 'B', otherServices: 'A', contact: 'B',
  cta: { about: 'A', service: 'C', safety: 'B', careers: 'A' },
  footer: 'B',
  navSocial: 'outline',
};

/** Z — James. Field-first and graphic: C's monumental hero, A's dark
    introduction and photo mosaic, B's ruled identifier, C's green image field. */
const layoutZ: SiteLayout = {
  home: { hero: 'C', whoWeAre: 'A', powergrid: 'B', services: 'A', feature: 'C' },
  pageHero: 'A', editorial: 'A', media: 'B', badges: 'A', capabilities: 'B', otherServices: 'A', contact: 'B',
  cta: { about: 'C', service: 'B', safety: 'A', careers: 'C' },
  footer: 'A',
  navSocial: 'solid',
};

export const SITES: Site[] = [
  { key: 'x', label: 'Variation X', brand: ampp, layout: layoutX },
  { key: 'y', label: 'Variation Y', brand: csr, layout: layoutY },
  { key: 'z', label: 'Variation Z', brand: james, layout: layoutZ },
];

/** Accepts the site key or the brand key (older links used ?site=ampp). */
export const getSite = (key: string | null | undefined) =>
  SITES.find(s => s.key === key || s.brand.key === key) ?? SITES[0];

export function resolveLayout(site: Site, mode: ViewMode): SiteLayout {
  return mode === 'mixed' ? site.layout : PRESETS[mode];
}
