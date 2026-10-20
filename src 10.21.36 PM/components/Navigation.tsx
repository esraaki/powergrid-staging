import { useEffect, useRef, useState, useId } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { Link, useRouter } from '../system/router';
import { useSite } from '../system/site';
import { BrandLogo, SocialLinks, EASE } from './ui';

export type NavTone = 'overlay' | 'solid';

type MenuItem = { label: string; href: string };

function Dropdown({ label, items, active }: { label: string; items: MenuItem[]; active: boolean }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const btn = useRef<HTMLButtonElement>(null);
  const timer = useRef<number>();
  const { path } = useRouter();

  useEffect(() => setOpen(false), [path]);

  const show = () => { window.clearTimeout(timer.current); setOpen(true); };
  const hide = () => { window.clearTimeout(timer.current); timer.current = window.setTimeout(() => setOpen(false), 140); };

  return (
    <li
      className={`nav__item nav__item--menu${open ? ' is-open' : ''}`}
      onMouseEnter={show}
      onMouseLeave={hide}
      onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false); }}
      onKeyDown={e => { if (e.key === 'Escape' && open) { setOpen(false); btn.current?.focus(); } }}
    >
      <button
        ref={btn}
        type="button"
        className={`nav__link${active ? ' is-current' : ''}`}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(v => !v)}
      >
        {label}
        <ChevronDown className="nav__chev" size={16} strokeWidth={2.25} aria-hidden="true" />
      </button>
      <div className="nav__menu" id={id}>
        <ul>
          {items.map(i => (
            <li key={i.href}>
              <Link href={i.href} aria-current={path === i.href ? 'page' : undefined} onClick={() => setOpen(false)}>
                <span>{i.label}</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export function Navigation({ tone }: { tone: NavTone }) {
  const { brand, layout } = useSite();
  const { path } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [section, setSection] = useState<'about' | 'services' | null>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setSection(null); }, [path, brand.key]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMobileOpen(false); };
    const onResize = () => { if (window.innerWidth > 1080) setMobileOpen(false); };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      toggleRef.current?.focus();
    };
  }, [mobileOpen]);

  const about: MenuItem[] = [{ label: 'About Us', href: '/about' }, { label: 'Join Our Team', href: '/careers' }];
  const services: MenuItem[] = brand.services.map(s => ({ label: s.name, href: `/services/${s.slug}` }));
  const solid = tone === 'solid' || scrolled;

  return (
    <header className={`nav ${solid ? 'nav--solid' : 'nav--overlay'} nav--social-${layout.navSocial}`}>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="nav__bar">
        <Link href="/" className="nav__logo" aria-label={`${brand.name} — home`}>
          <BrandLogo tone={solid ? 'light' : 'dark'} />
        </Link>

        <nav className="nav__primary" aria-label="Primary">
          <ul>
            <Dropdown label="About" items={about} active={path === '/about' || path === '/careers'} />
            <Dropdown label="Services" items={services} active={path.startsWith('/services/')} />
            <li className="nav__item">
              <Link className={`nav__link${path === '/safety' ? ' is-current' : ''}`} href="/safety" aria-current={path === '/safety' ? 'page' : undefined}>Safety</Link>
            </li>
            <li className="nav__item">
              <Link className={`nav__link${path === '/contact' ? ' is-current' : ''}`} href="/contact" aria-current={path === '/contact' ? 'page' : undefined}>Contact</Link>
            </li>
          </ul>
        </nav>

        <SocialLinks className="nav__social" />

        <button
          ref={toggleRef}
          type="button"
          className="nav__toggle"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={24} aria-hidden="true" />
          <span className="sr-only">Open menu</span>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            className="mnav"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
          >
            <div className="mnav__head">
              <Link href="/" className="nav__logo" aria-label={`${brand.name} — home`}>
                <BrandLogo tone="dark" />
              </Link>
              <button ref={closeRef} type="button" className="nav__toggle mnav__close" onClick={() => setMobileOpen(false)}>
                <X size={26} aria-hidden="true" />
                <span className="sr-only">Close menu</span>
              </button>
            </div>
            <motion.nav
              className="mnav__body"
              aria-label="Mobile"
              onClick={e => { if ((e.target as HTMLElement).closest('a')) setMobileOpen(false); }}
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: EASE, delay: 0.05 }}
            >
              <ul className="mnav__list">
                {([['about', 'About', about], ['services', 'Services', services]] as const).map(([key, label, items]) => (
                  <li key={key}>
                    <button
                      type="button"
                      className="mnav__parent"
                      aria-expanded={section === key}
                      aria-controls={`mnav-${key}`}
                      onClick={() => setSection(s => (s === key ? null : key))}
                    >
                      {label}
                      <ChevronDown size={22} aria-hidden="true" className="mnav__chev" />
                    </button>
                    <ul id={`mnav-${key}`} className="mnav__sub" hidden={section !== key}>
                      {items.map(i => (
                        <li key={i.href}>
                          <Link href={i.href} aria-current={path === i.href ? 'page' : undefined}>{i.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
                <li><Link className="mnav__link" href="/safety">Safety</Link></li>
                <li><Link className="mnav__link" href="/contact">Contact</Link></li>
              </ul>
              <div className="mnav__foot">
                <SocialLinks />
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
