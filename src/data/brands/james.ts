import type { Brand } from '../types';
import { px, ALL_BADGES } from '../media';

export const james: Brand = {
  key: 'james',
  name: 'James Powerline Construction',
  shortName: 'James',
  logo: { onLight: '/assets/james-logo.svg', onDark: '/assets/james-logo-white.png', alt: 'James Powerline Construction' },
  accent: '#329840',
  type: {
    heading: "'Teko', 'Arial Narrow', Arial, sans-serif",
    headingWeight: 600,
    headingCase: 'uppercase',
    headingScale: 1.1,
    headingLeading: 0.84,
    headingTracking: '0',
    body: "'Inter', Arial, sans-serif",
    googleFonts: ['Teko:wght@500;600', 'Inter:wght@400;500;600;700'],
  },
  images: {
    hero: [px(35571322), px(34610691), px(5328573)],
    who: px(13820148),
    feature: px(34610700),
    about: px(34610696),
    approach: px(17321815),
    safety: px(13820149),
    safetyProgram: px(34610690),
    safetyTraining: px(5328569),
    safetyWide: px(9720534),
    careers: px(34610697),
    careersWhy: px(35571322),
    contact: px(17321815),
    cta: px(34610704),
  },
  home: {
    hero: {
      eyebrow: 'Powerline & utility construction',
      title: ['Powerline', 'experience', 'that delivers.'],
      body: 'Experienced crews, practical field knowledge and reliable execution for powerline and utility infrastructure projects.',
    },
    who: {
      heading: 'Field knowledge you can count on.',
      body: 'James Powerline Construction is built around field experience, responsive crews and the practical knowledge required to keep utility work moving.',
    },
    services: {
      title: ['Hands-on', 'powerline', 'expertise.'],
      intro: 'From overhead line construction to restoration, substations and specialty maintenance, our crews bring hands-on experience to essential power infrastructure.',
    },
    feature: {
      eyebrow: 'In the field',
      title: ['Field experience.', 'Dependable', 'results.'],
      body: 'From everyday utility work to demanding construction environments, experienced crews help keep essential systems moving forward.',
    },
  },
  pages: {
    about: { heading: 'Powerline experience built in the field.', body: 'James Powerline Construction brings hands-on utility knowledge, responsive crews and dependable execution to essential electrical infrastructure.' },
    safety: { heading: 'The standard behind every crew.', body: 'Safe work depends on preparation, training and accountability. Our approach keeps those expectations visible from planning through closeout.' },
    careers: { heading: 'Build your future on the line.', body: 'Join experienced utility crews doing practical, essential work and building the skills that keep power infrastructure moving.' },
    serviceLead: 'James brings hands-on powerline experience, responsive field teams and practical execution to every project.',
    serviceBody: 'Whether the work involves new construction, upgrades, restoration or maintenance, our crews focus on safe operations, clear coordination and dependable results in the field.',
    ctaBody: 'Need an experienced field partner? Let’s talk about where James can support the work.',
  },
  services: [
    { slug: 'overhead-powerline', name: 'Overhead Powerline', summary: 'Experienced line crews supporting overhead construction, upgrades and system reliability.', image: px(34610705) },
    { slug: 'underground-distribution', name: 'Underground Distribution', summary: 'Practical underground distribution work backed by experienced utility crews.', image: px(5328573) },
    { slug: 'storm-response', name: 'Storm Response', summary: 'Responsive crews and field support when restoration work cannot wait.', image: px(34610709) },
    { slug: 'substation-support', name: 'Substation Support', summary: 'Hands-on construction and maintenance support for critical electrical facilities.', image: px(9720534) },
  ],
  contact: {},
  social: [
    { network: 'facebook', href: '#' },
    { network: 'linkedin', href: '#' },
  ],
  careersUrl: '#careers-platform',
  badges: ALL_BADGES,
};
