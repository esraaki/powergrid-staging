import type { Brand } from '../data/types';

/* ------------------------------------------------------------------
   Brand → CSS custom properties.
   Each company supplies ONE accent colour. Every tone the components
   need is derived here so contrast holds for any future brand colour:
     --accent        raw brand colour (rules, markers, large graphics)
     --accent-field  colour field that passes 4.5:1 with white text
     --accent-hover  pressed / hover state of the field
     --accent-light  accent text on light grounds (≥ 4.5:1)
     --accent-dark   accent text on charcoal grounds (≥ 4.5:1)
------------------------------------------------------------------- */

const CHARCOAL = '#15191b';
const OFF = '#f3f1ec';

type RGB = [number, number, number];
const hexToRgb = (hex: string): RGB => {
  const h = hex.replace('#', '');
  return [0, 2, 4].map(i => parseInt(h.slice(i, i + 2), 16)) as RGB;
};
const rgbToHex = (c: RGB) => '#' + c.map(v => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, '0')).join('');
const lum = (hex: string) => {
  const [r, g, b] = hexToRgb(hex).map(v => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
export const contrast = (a: string, b: string) => {
  const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
};
const mix = (a: string, b: string, t: number) => {
  const A = hexToRgb(a), B = hexToRgb(b);
  return rgbToHex(A.map((v, i) => v + (B[i] - v) * t) as RGB);
};
/** Step a colour toward `toward` until it reaches `ratio` against `against`. */
const ensure = (color: string, against: string, toward: string, ratio = 4.6) => {
  let c = color;
  for (let i = 0; i < 40 && contrast(c, against) < ratio; i++) c = mix(c, toward, 0.05);
  return c;
};

/** Brand colour adjusted so white text on it passes 4.5:1. */
export const fieldColor = (accent: string) => ensure(accent, '#ffffff', '#000000');

export function brandVars(brand: Brand): Record<string, string> {
  const a = brand.accent;
  const field = fieldColor(a);
  const t = brand.type;
  return {
    '--accent': a,
    '--accent-field': field,
    '--accent-hover': mix(field, '#000000', 0.16),
    '--accent-light': ensure(a, OFF, '#000000'),
    '--accent-dark': ensure(a, CHARCOAL, '#ffffff'),
    '--accent-tint': mix(a, OFF, 0.9),
    '--font-heading': t.heading,
    '--font-body': t.body,
    '--heading-weight': String(t.headingWeight),
    '--heading-case': t.headingCase,
    '--heading-scale': String(t.headingScale),
    '--heading-leading': String(t.headingLeading),
    '--heading-tracking': t.headingTracking,
  };
}

/** Load only the active brand's web fonts. */
export function loadBrandFonts(brand: Brand) {
  const id = 'brand-fonts';
  const href = `https://fonts.googleapis.com/css2?${brand.type.googleFonts.map(f => `family=${f}`).join('&')}&display=swap`;
  let link = document.getElementById(id) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }
  if (link.href !== href) link.href = href;
}
