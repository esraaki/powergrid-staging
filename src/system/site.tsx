import { createContext, useContext } from 'react';
import type { Brand, SiteLayout, View } from '../data/types';

export type SiteState = {
  brand: Brand;
  layout: SiteLayout;
  /** A pure design (A/B/C) or one of the mixed demonstration websites (1/2/3) */
  view: View;
  /** Prototype only: overlay section/variant tags on the page */
  showLabels: boolean;
};

export const SiteCtx = createContext<SiteState | null>(null);

export function useSite() {
  const s = useContext(SiteCtx);
  if (!s) throw new Error('useSite must be used inside SiteCtx');
  return s;
}
