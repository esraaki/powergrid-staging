import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { Variant } from './data/types';
import { getSite, resolveLayout } from './data/sites';
import { brandVars, loadBrandFonts } from './system/theme';
import { parseRoute, useRouter } from './system/router';
import { SiteCtx, type SiteState } from './system/site';
import { Navigation } from './components/Navigation';
import { FOOTER } from './sections/Footer';
import { AboutPage, CareersPage, ContactPage, HomePage, NotFoundPage, SafetyPage, ServicePage, navToneFor } from './pages/Pages';
import { DesignSwitcher, SiteSwitcher } from './prototype/Switchers';

const store = {
  get: (k: string) => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k: string, v: string) => { try { localStorage.setItem(k, v); } catch { /* private mode */ } },
};

/* ?site=csr&design=b lets a presenter share a specific combination. */
function initial(key: 'site' | 'design', fallback: string) {
  const q = new URLSearchParams(window.location.search).get(key);
  return q ?? store.get(`pg-${key}`) ?? fallback;
}

export default function App() {
  const { path, navigate } = useRouter();
  const [siteKey, setSiteKey] = useState(() => getSite(initial('site', 'ampp')).key);
  const [design, setDesign] = useState<Variant>(() => {
    const d = initial('design', 'A').toUpperCase();
    return d === 'B' || d === 'C' ? d : 'A';
  });
  const [showLabels, setShowLabels] = useState(false);

  const site = getSite(siteKey);
  const layout = resolveLayout(site, design);
  const brand = site.brand;
  const state: SiteState = useMemo(() => ({ site, brand, layout, design, showLabels }), [site, brand, layout, design, showLabels]);

  useEffect(() => store.set('pg-site', siteKey), [siteKey]);
  useEffect(() => store.set('pg-design', design), [design]);

  // Brand tokens on :root so the whole document (incl. switchers) follows the brand.
  useLayoutEffect(() => {
    const root = document.documentElement;
    for (const [k, v] of Object.entries(brandVars(brand))) root.style.setProperty(k, v);
    root.dataset.brand = brand.key;
    loadBrandFonts(brand);
  }, [brand]);

  const route = parseRoute(path);
  const service = route.page === 'service' ? brand.services.find(s => s.slug === route.slug) : undefined;

  // Switching company keeps you on the equivalent page; services map by position.
  const prevBrand = useRef(brand);
  useEffect(() => {
    const prev = prevBrand.current;
    prevBrand.current = brand;
    if (prev === brand || route.page !== 'service') return;
    if (brand.services.some(s => s.slug === route.slug)) return;
    const idx = Math.max(0, prev.services.findIndex(s => s.slug === route.slug));
    const next = brand.services[Math.min(idx, brand.services.length - 1)];
    navigate(`/services/${next.slug}`, { replace: true });
  }, [brand]); // eslint-disable-line react-hooks/exhaustive-deps

  const title = route.page === 'home' ? brand.name
    : route.page === 'service' ? `${service?.name ?? 'Services'} — ${brand.name}`
    : `${{ about: 'About Us', safety: 'Safety', careers: 'Join Our Team', contact: 'Contact', notfound: 'Not found' }[route.page]} — ${brand.name}`;
  useEffect(() => { document.title = title; }, [title]);

  let page: JSX.Element;
  switch (route.page) {
    case 'home': page = <HomePage />; break;
    case 'about': page = <AboutPage />; break;
    case 'safety': page = <SafetyPage />; break;
    case 'careers': page = <CareersPage />; break;
    case 'contact': page = <ContactPage />; break;
    case 'service': page = service ? <ServicePage service={service} /> : <NotFoundPage />; break;
    default: page = <NotFoundPage />;
  }

  const Footer = FOOTER[layout.footer];
  const tone = route.page === 'service' && !service ? 'solid' : navToneFor(route, layout);
  // Remount the page when the composition changes so section state / reveals never go stale.
  const pageKey = `${site.key}|${JSON.stringify(layout)}|${path}`;

  return (
    <SiteCtx.Provider value={state}>
      <Navigation tone={tone} />
      <main id="main" key={pageKey} className={`page page--${route.page} nav-${tone}`}>
        {page}
      </main>
      <Footer key={`${site.key}-${layout.footer}`} home={route.page === 'home'} />
      <DesignSwitcher onDesign={setDesign} onLabels={() => setShowLabels(v => !v)} isHome={route.page === 'home'} />
      <SiteSwitcher onSite={setSiteKey} />
    </SiteCtx.Provider>
  );
}
