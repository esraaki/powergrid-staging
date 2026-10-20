import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { ReactNode, CSSProperties } from 'react';
import type { Action } from '../data/types';
import { Link } from '../system/router';
import { srcSet } from '../data/media';
import { useSite } from '../system/site';

export const EASE = [0.22, 1, 0.36, 1] as const;

/* ---------- Button ---------- */
type Tone = 'accent' | 'light' | 'dark' | 'outline-light' | 'outline-dark';
export function Button({ action, tone = 'accent', className = '' }: { action: Action; tone?: Tone; className?: string }) {
  const Icon = action.external ? ArrowUpRight : ArrowRight;
  const cls = `btn btn--${tone} ${className}`;
  const inner = (
    <>
      <span>{action.label}</span>
      <Icon className="btn__icon" aria-hidden="true" size={18} strokeWidth={2} />
    </>
  );
  if (action.external)
    return (
      <a className={cls} href={action.href} target="_blank" rel="noopener noreferrer">
        {inner}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  return <Link className={cls} href={action.href}>{inner}</Link>;
}

/** Underlined text link with arrow — the quieter CTA used by editorial variants. */
export function TextLink({ action, className = '' }: { action: Action; className?: string }) {
  const Icon = action.external ? ArrowUpRight : ArrowRight;
  const body = (
    <>
      <span className="textlink__label">{action.label}</span>
      <Icon aria-hidden="true" size={18} strokeWidth={2} className="textlink__icon" />
    </>
  );
  return action.external ? (
    <a className={`textlink ${className}`} href={action.href} target="_blank" rel="noopener noreferrer">{body}</a>
  ) : (
    <Link className={`textlink ${className}`} href={action.href}>{body}</Link>
  );
}

/* ---------- Eyebrow ---------- */
export function Eyebrow({ children, index, rule = true, className = '' }: { children: ReactNode; index?: string; rule?: boolean; className?: string }) {
  return (
    <p className={`eyebrow ${className}`}>
      {index ? <span className="eyebrow__index">{index}</span> : rule ? <span className="eyebrow__rule" aria-hidden="true" /> : null}
      <span>{children}</span>
    </p>
  );
}

/* ---------- Display heading ---------- */
type Size = 'xxl' | 'xl' | 'l' | 'm' | 's';
export function Display({
  as: Tag = 'h2', size = 'l', lines, text, accentLine, className = '', id,
}: { as?: 'h1' | 'h2' | 'h3'; size?: Size; lines?: string[]; text?: string; accentLine?: number; className?: string; id?: string }) {
  return (
    <Tag className={`display display--${size} ${className}`} id={id}>
      {lines
        ? lines.map((l, i) => (
            <span key={i} className={`display__line${i === accentLine ? ' is-accent' : ''}`}>
              {l}{i < lines.length - 1 ? ' ' : ''}
            </span>
          ))
        : text}
    </Tag>
  );
}

/* ---------- Image ---------- */
export function Img({ src, alt = '', className = '', eager = false, sizes = '100vw', style }: { src: string; alt?: string; className?: string; eager?: boolean; sizes?: string; style?: CSSProperties }) {
  return (
    <img
      className={className}
      src={src}
      srcSet={srcSet(src)}
      sizes={sizes}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      style={style}
    />
  );
}

/* ---------- Reveal ---------- */
export function Reveal({ children, delay = 0, y = 12, className = '', as = 'div' }: { children: ReactNode; delay?: number; y?: number; className?: string; as?: 'div' | 'li' }) {
  const M = as === 'li' ? motion.li : motion.div;
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, ease: EASE, delay }}
    >
      {children}
    </M>
  );
}

/* ---------- Slot: wraps a composed section; shows its variant tag in label mode ---------- */
export function Slot({ name, variant, children }: { name: string; variant: string; children: ReactNode }) {
  const { showLabels } = useSite();
  return (
    <div className="slot" data-section={name} data-variant={variant}>
      {showLabels && (
        <span className="slot__tag" aria-hidden="true">
          {name} <b>{variant}</b>
        </span>
      )}
      {children}
    </div>
  );
}

/* ---------- Social ---------- */
const NETWORK_LABEL = { facebook: 'Facebook', instagram: 'Instagram', linkedin: 'LinkedIn' } as const;
export function SocialLinks({ className = '' }: { className?: string }) {
  const { brand } = useSite();
  if (!brand.social.length) return null;
  return (
    <ul className={`social ${className}`} aria-label={`${brand.shortName} on social media`}>
      {brand.social.map(s => (
        <li key={s.network}>
          <a href={s.href} aria-label={`${brand.name} on ${NETWORK_LABEL[s.network]}`}>
            <span className={`social__icon social__icon--${s.network}`} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Logos ---------- */
export function BrandLogo({ tone, className = '' }: { tone: 'light' | 'dark'; className?: string }) {
  const { brand } = useSite();
  return <img className={`brand-logo brand-logo--${brand.key} ${className}`} src={tone === 'dark' ? brand.logo.onDark : brand.logo.onLight} alt={brand.logo.alt} />;
}
