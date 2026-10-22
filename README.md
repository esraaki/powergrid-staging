# PowerGrid Design System — v54

A multi-brand website kit for the PowerGrid Services family of companies.

**One content architecture + one brand system + a library of interchangeable section designs = ~16 distinct company sites.**

```bash
npm install
npm run dev        # local
npm run build      # type-check + production build → dist/
npm run preview    # serve dist/ (SPA fallback included)
```

Deploys to Vercel as-is (`vercel.json` rewrites every route to `index.html`, so `/about`, `/services/:slug`, etc. work on direct load and refresh).

---

## The model

| Layer | Controls | Lives in |
|---|---|---|
| **Brand** | name, logos, one accent colour, heading/body fonts, copy, services (any count), photography, contact, social, careers URL, certifications | `src/data/brands/*.ts` |
| **Section variants** | layout / composition only — `A`, `B`, `C` per section | `src/sections/*.tsx` + `src/styles/*.css` |
| **Composition** | which variant renders in each slot (`SiteLayout`) | `src/data/websites.ts` |

Brands never reference variants and variants never reference brands. AMPP is not "Design A".

### Design vocabularies

- **A — Cinematic field.** Full-bleed field photography, charcoal grounds, condensed display type anchored low, brand colour used as solid panels and rules. Inner heroes: full-bleed photo, title bottom-anchored at a fixed inset.
- **B — Structured editorial.** White ground on a visible 12-column grid, numbered margins (01, 02…), hairline rules, flat brand-colour fields set against framed photography. Inner heroes: brand panel + image, title vertically centred in the panel.
- **C — Monumental type.** Headlines as architecture (staggered, oversized), body copy set as statement paragraphs, a split service navigator, image sequences on a full brand-colour field. Homepage concept; inner pages fall back to the B inner system while keeping C's CTA and footer.

Test for distinctness: remove colour, logo and font — A, B and C are still recognisably different compositions.

### Section library

| Slot | A | B | C |
|---|---|---|---|
| Hero | full-bleed crossfade | split brand field + photo | monumental headline + wide photo |
| Who We Are | dark statement | indexed editorial + framed image | statement paragraph + staggered images |
| PowerGrid identifier | brand-colour band | ruled separator | inset dark plate |
| Services | count-aware photo mosaic | numbered index, hover image reveal | split navigator, sticky image stage |
| Feature | image + overlapping panel | wide plate + caption | colour field + image sequence |
| CTA | photographic band | split field | typographic link |
| Footer | charcoal columns | brand field, large nav | light, conversation-led |
| Page hero | full bleed, bottom-anchored | panel, vertically centred | — (uses B) |
| Editorial / Media / Badges / Capabilities / Other services / Contact | A | B | — |

Every variant of a section consumes the **same data contract** (`src/data/types.ts`), so swapping `services: 'A'` → `'C'` needs no content changes.

### Designs and Websites

- **Designs A / B / C** are the three pure design directions: every slot comes from one library, always shown in the default brand (AMPP). They're defined in `DESIGNS`.
- **Websites 1 / 2 / 3** are demonstration websites, each a real company art-directed from all three libraries. They're defined in `WEBSITES`.


| Slot | **Website 1 — AMPP** | **Website 2 — CSR** | **Website 3 — James** |
|---|---|---|---|
| Hero | A | B | C |
| Who We Are | B | C | A |
| PowerGrid | A | C | B |
| Services | C | B | A |
| Feature | A | A | C |
| Footer | C | B | A |
| Page hero (all inner pages) | A | B | A |
| Editorial / Media | B / A | A / B | A / B |
| Badges / Capabilities | A / A | B / B | A / B |
| Other services / Contact | B / A | A / B | A / B |
| CTA about · service · safety · careers | B·A·C·B | A·C·B·A | C·B·A·C |
| Nav social | solid | outline | solid |

```ts
// src/data/websites.ts
const website1: SiteLayout = {
  home: { hero: 'A', whoWeAre: 'B', powergrid: 'A', services: 'C', feature: 'A' },
  pageHero: 'A',            // one inner-hero system per site → consistent titles everywhere
  editorial: 'B', media: 'A', badges: 'A', capabilities: 'A', otherServices: 'B', contact: 'A',
  cta: { about: 'B', service: 'A', safety: 'C', careers: 'B' },
  footer: 'C',
  navSocial: 'solid',
};
```

`pageHero` is deliberately site-level: About, Services, Safety, Careers and Contact all render the same PageHero component, so title position cannot drift between pages.

### Brand theming

Each brand supplies **one** accent colour. `src/system/theme.ts` derives every tone the components need and enforces WCAG contrast automatically:

- `--accent-field`: colour fields with white text (≥ 4.5:1). For example, James green is deepened slightly for its panels.
- `--accent-light` / `--accent-dark`: accent text on light / charcoal grounds (≥ 4.5:1).
- `--accent-hover`, `--accent-tint`

Heading metrics (`headingScale`, leading, tracking, case) normalise very different faces (Barlow Condensed vs DM Serif Display vs Archivo) so the same components work for every brand. Only the active brand's Google Fonts are loaded.

---

## Adding a company

1. Copy `src/data/brands/ampp.ts` → `src/data/brands/<company>.ts` and fill it in. Services can be any count, because the mosaic, index, navigator, nav dropdown and footer all adapt.
2. Put logos in `public/assets/` (one for light grounds, one for dark).
3. Add an entry to `WEBSITES` in `src/data/websites.ts` with its brand and a curated `SiteLayout`.

There are no CSS edits and no component edits.

---

## Prototype controls (staging only)

A thin black toolbar is always fixed to the bottom of the viewport. The page reserves its height, so footer content is never hidden behind it.

| Left | Right |
|---|---|
| **DESIGN A / B / C**: show a pure design direction | **WEBSITES 1 / 2 / 3**: brand-colour squares; 1 = AMPP, 2 = CSR, 3 = James |
| | **Layers** (shown only while a website is active): tags every section, footer included, with the design it came from, e.g. `HERO · B` |

**Choosing any Design or Website** opens it fresh: it goes to that selection's **homepage**, at the very top, and the toolbar tucks away. Normal navigation afterwards (About, Safety, services…) stays within the selection. Keyboard users keep the toolbar open for further tabbing.

**State is in memory only.** Your selection survives in-app navigation and browser back/forward. A full page refresh always restarts the presentation at pure **Design A** (AMPP brand, Layers off). Nothing is stored in the URL, localStorage or sessionStorage.

These live in `src/prototype/` and `src/styles/prototype.css`; delete both (and the `<ProtoBar>` in `App.tsx`) for production sites.

---

## File map

```
src/
  data/        types.ts (contracts) · brands/ · websites.ts (DESIGNS A/B/C + WEBSITES 1/2/3) · copy.ts (neutral inner-page copy) · media.ts (badges, PowerGrid assets)
  system/      theme.ts (brand → tokens) · router.tsx (tiny history router) · site.tsx (context)
  sections/    Hero · WhoWeAre · PowerGrid · Services · Feature · Footer · Inner (page hero, editorial, media, badges, capabilities, other services, CTA, contact)
  pages/       Pages.tsx — page order + content mapping; variants come from the layout
  components/  Navigation (desktop dropdowns + full-screen mobile menu) · ui (Button, Eyebrow, Display, Img, Reveal, Slot…)
  prototype/   switchers
  styles/      tokens · base · nav · home · inner · footer · prototype
```

## Notes

- **No contact form** (client requirement). The Contact page presents details only. Missing details render as clearly marked placeholders.
- **Safety** carries substantial copy, the supplied certification logos (per-company list in brand data), program / training sections and a supporting image. It is not a document library.
- **Careers** is an internal page that links out to each company's own careers platform (`careersUrl`).
- Placeholder copy is neutral: no years, headcounts, statistics, awards or claims.
- Photography is Pexels placeholder imagery (see `public/assets/STOCK-SOURCES.txt`). Replace it with approved company photography.
- Motion is deliberately restrained: short travel (≤ 12px), single fades on hero entrances, no wipes, slides or long staggers.
- Accessibility: semantic landmarks, skip link, keyboard-operable dropdowns (Enter / Escape), a modal mobile menu with focus management and scroll lock, visible focus rings, `prefers-reduced-motion` respected (crossfades and reveals disabled), and decorative images given empty alt text.
