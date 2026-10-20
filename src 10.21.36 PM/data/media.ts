/** Prototype photography — Pexels (free licence). Replace with approved company photography. */
export const px = (id: number | string, file = `pexels-photo-${id}.jpeg`) =>
  `https://images.pexels.com/photos/${id}/${file}?auto=compress&cs=tinysrgb&w=1600`;

const WIDTHS = [640, 1024, 1600, 2400];

/** Build a responsive srcset for Pexels URLs; other URLs pass through untouched. */
export function srcSet(url: string) {
  if (!url.includes('images.pexels.com')) return undefined;
  return WIDTHS.map(w => `${url.replace(/w=\d+/, `w=${w}`)} ${w}w`).join(', ');
}

/** Shared certification / affiliation library (supplied client assets). */
export const BADGES: Record<string, { src: string; alt: string }> = {
  albat: { src: '/assets/albat-logo-f36ac431.webp', alt: 'ALBAT IBEW–NECA' },
  avetta: { src: '/assets/avetta-logo-cd8f64fe.webp', alt: 'Avetta Member' },
  ibew: { src: '/assets/brotherhood-logo-875f552d.webp', alt: 'International Brotherhood of Electrical Workers' },
  complyworks: { src: '/assets/complyworks-logo-f010365d.webp', alt: 'ComplyWorks' },
  firstaid: { src: '/assets/first-aid-logo-8cb858ca.webp', alt: 'CPR / First Aid / AED' },
  goldshovel: { src: '/assets/goldshovel-standard-bdada0b1.webp', alt: 'Gold Shovel Standard' },
  imea: { src: '/assets/imea-logo-9e4ca48b.webp', alt: 'Indiana Municipal Electric Association' },
  isnetworld: { src: '/assets/isnetworld-logo-ec537410.webp', alt: 'ISNetworld Member Contractor' },
  vero: { src: '/assets/vero-logo-02b68377.webp', alt: 'VERO' },
  woodmac: { src: '/assets/wood-mackenzie-logo-1aed03ae.webp', alt: 'Wood Mackenzie' },
};
export const ALL_BADGES = Object.keys(BADGES);

export const POWERGRID = {
  name: 'PowerGrid Services',
  statement: 'A PowerGrid Services company, supported by a broader family of infrastructure businesses and shared operational expertise.',
  logo: {
    onLight: '/assets/powergrid-logo.webp', // full colour
    onDark: '/assets/powergrid-footer.png', // colour + white type
    mono: '/assets/powergrid-identifier.png', // white
  },
  texture: '/assets/identifier-grain.png',
};
