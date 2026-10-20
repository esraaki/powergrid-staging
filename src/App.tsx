import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { View } from './data/types';
import { INITIAL_VIEW, resolveView } from './data/websites';
import { brandVars, loadBrandFonts } from './system/theme';
import { parseRoute, useRouter } from './system/router';
import { SiteCtx, type SiteState } from './system/site';
import { Navigation } from './components/Navigation';
import { Slot } from './components/ui';
import { FOOTER } from './sections/Footer';
import { AboutPage, CareersPage, ContactPage, HomePage, NotFoundPage, SafetyPage, ServicePage, navToneFor } from './pages/Pages';
import { ProtoBar } from './prototype/Switchers';

export default function App() {
  const { path, navigate } = useRouter();
  /* Prototype state lives in memory only: it survives in-app navigation, and every
     full page refresh starts the presentation again from pure Design A. */
  const [view, setView] = useState<View>(INITIAL_VIEW);
  const [showLabels, setShowLabels] = useState(false);

  const { brand, layout } = resolveView(view);
  const state: SiteState = useMemo(() => ({ brand, layout, view, showLabels }), [brand, layout, view, showLabels]);

  /* Choosing any Design or Website opens it fresh: its HOME page, at the very top.
     Ordinary navigation afterwards stays within that selection. Only toolbar
     selections set this flag, so normal route changes keep their own behaviour. */
  const scrollOnSwitch = useRef(false);
  const selectView = (next: View) => {
    scrollOnSwitch.current = true;
    setView(next);
    navigate('/');
    // Layers explain how a mixed website was assembled — not meaningful for a pure design.
    if (next.kind === 'design') setShowLabels(false);
  };
  // After the new homepage has rendered, before paint: no flash of the old page or scroll position.
  useLayoutEffect(() => {
    if (!scrollOnSwitch.current) return;
    scrollOnSwitch.current = false;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [view, path]);

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
  const pageKey = `${brand.key}|${JSON.stringify(layout)}|${path}`;

  return (
    <SiteCtx.Provider value={state}>
      <Navigation tone={tone} />
      <main id="main" key={pageKey} className={`page page--${route.page} nav-${tone}`}>
        {page}
      </main>
      <Slot name="Footer" variant={layout.footer}>
        <Footer key={`${brand.key}-${layout.footer}`} home={route.page === 'home'} />
      </Slot>
      <ProtoBar onView={selectView} onLabels={() => setShowLabels(v => !v)} isHome={route.page === 'home'} />
    </SiteCtx.Provider>
  );
}
