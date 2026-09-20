# PowerGrid Master Design — CSR Prototype

Production-oriented React + Vite + TypeScript prototype for a reusable PowerGrid operating-company website system.

## Stack
- React + TypeScript + Vite
- Motion for React for scroll-linked / state transitions
- Semantic CSS design tokens for brand swapping
- Lucide only for functional interface arrows/menu controls

## Architecture
Company-specific content, service count, imagery, and palette are separated from component structure. The current content example uses public CSR / PowerGrid Services wording as the prototype source.

## Local development
```bash
npm install
npm run dev
```

## Production
```bash
npm run build
npm run preview
```

## Master-brand adaptation
Change `src/data/company.ts` plus the semantic tokens at the top of `src/styles/global.css`. The Services component is data-driven and supports 3–7 items without hiding service names.

## Accessibility
Semantic landmarks, keyboard-focusable services, visible focus styles, mobile non-sticky fallback, reduced-motion handling via MotionConfig + CSS, and no hover-only essential content.

## Media
Prototype photography is loaded from LoremFlickr keyword endpoints so the source package remains lightweight. For client production, replace these URLs in `company.ts` with approved company-owned photography/CDN assets.
