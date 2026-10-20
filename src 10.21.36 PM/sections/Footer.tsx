import type { FC } from 'react';
import { ArrowRight } from 'lucide-react';
import type { Variant } from '../data/types';
import { POWERGRID } from '../data/media';
import { Link } from '../system/router';
import { useSite } from '../system/site';
import { BrandLogo, SocialLinks } from '../components/ui';

const COMPANY_LINKS = [
  { label: 'About Us', href: '/about' },
  { label: 'Join Our Team', href: '/careers' },
  { label: 'Safety', href: '/safety' },
  { label: 'Contact', href: '/contact' },
];

function Legal() {
  const { brand } = useSite();
  return (
    <div className="footer__legal">
      <span>© {new Date().getFullYear()} {brand.name}. All rights reserved.</span>
      <span className="footer__legal-links">
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Use</a>
      </span>
    </div>
  );
}

function LinkList({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <nav className="footer__col" aria-label={`Footer — ${title}`}>
      <p className="footer__title">{title}</p>
      <ul>
        {links.map(l => (
          <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
        ))}
      </ul>
    </nav>
  );
}

/* A — Charcoal, four-column, quiet. */
type FooterProps = { home?: boolean };

const FooterA: FC<FooterProps> = () => {
  const { brand } = useSite();
  const services = brand.services.map(s => ({ label: s.name, href: `/services/${s.slug}` }));
  return (
    <footer className="footer footer-a tone-dark">
      <div className="container">
        <div className="footer-a__top">
          <div className="footer-a__brand">
            <Link href="/" aria-label={`${brand.name} — home`}><BrandLogo tone="dark" /></Link>
            <SocialLinks />
          </div>
          <LinkList title="Company" links={COMPANY_LINKS} />
          <LinkList title="Services" links={services} />
          <div className="footer__col footer-a__pg">
            <p className="footer__title">A PowerGrid Services company</p>
            <img src={POWERGRID.logo.onDark} alt={POWERGRID.name} />
          </div>
        </div>
        <Legal />
      </div>
    </footer>
  );
};

/* B — Full brand-colour field, large typographic navigation. */
const FooterB: FC<FooterProps> = () => {
  const { brand } = useSite();
  return (
    <footer className="footer footer-b">
      <div className="container">
        <div className="footer-b__top">
          <Link href="/" aria-label={`${brand.name} — home`}><BrandLogo tone="dark" /></Link>
          <SocialLinks />
        </div>
        <nav className="footer-b__nav" aria-label="Footer">
          <ul>
            {COMPANY_LINKS.map(l => (
              <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div className="footer-b__mid">
          <ul className="footer-b__services" aria-label="Services">
            {brand.services.map(s => (
              <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.name}</Link></li>
            ))}
          </ul>
          <div className="footer-b__pg">
            <img src={POWERGRID.logo.mono} alt={POWERGRID.name} />
            <p>A PowerGrid Services company</p>
          </div>
        </div>
        <Legal />
      </div>
    </footer>
  );
};

/* C — Light, closing call-to-conversation as the headline. */
const FooterC: FC<FooterProps> = ({ home }) => {
  const { brand } = useSite();
  const services = brand.services.map(s => ({ label: s.name, href: `/services/${s.slug}` }));
  return (
    <footer className="footer footer-c">
      <div className="container">
        {/* Inner pages already close on a CTA — the conversation line would repeat it. */}
        {home && <Link href="/contact" className="footer-c__cta">
          <span className="footer-c__kicker">Start a conversation</span>
          <span className="footer-c__big">Let’s talk about the work<ArrowRight aria-hidden="true" className="footer-c__arrow" /></span>
        </Link>}
        <div className="footer-c__grid">
          <div className="footer-c__brand">
            <Link href="/" aria-label={`${brand.name} — home`}><BrandLogo tone="light" /></Link>
            {brand.contact.phone && <p><a href={`tel:${brand.contact.phone.replace(/\D/g, '')}`}>{brand.contact.phone}</a></p>}
          </div>
          <LinkList title="Company" links={COMPANY_LINKS} />
          <LinkList title="Services" links={services} />
          <div className="footer__col footer-c__pg">
            <p className="footer__title">Follow</p>
            <SocialLinks />
            <img src={POWERGRID.logo.onLight} alt={POWERGRID.name} />
          </div>
        </div>
        <Legal />
      </div>
    </footer>
  );
};

export const FOOTER: Record<Variant, FC<FooterProps>> = { A: FooterA, B: FooterB, C: FooterC };
