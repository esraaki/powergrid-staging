import { createContext, useContext } from 'react';
import type { Brand, Site, SiteLayout, ViewMode } from '../data/types';

export type SiteState = {
  site: Site;
  brand: Brand;
  layout: SiteLayout;
  /** 'A' | 'B' | 'C' = reviewing a design preset; 'mixed' = the site's own composition */
  mode: ViewMode;
  /** Prototype only: overlay section/variant tags on the page */
  showLabels: boolean;
};

export const SiteCtx = createContext<SiteState | null>(null);

export function useSite() {
  const s = useContext(SiteCtx);
  if (!s) throw new Error('useSite must be used inside SiteCtx');
  return s;
}
