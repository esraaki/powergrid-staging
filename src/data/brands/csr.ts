import type { Brand } from '../types';
import { px, ALL_BADGES } from '../media';

export const csr: Brand = {
  key: 'csr',
  name: 'Collective Strategic Resources',
  shortName: 'CSR',
  logo: { onLight: '/assets/csr-logo.svg', onDark: '/assets/csr-logo-inverse.svg', alt: 'Collective Strategic Resources' },
  accent: '#0475AE',
  type: {
    heading: "'DM Serif Display', Georgia, serif",
    headingWeight: 400,
    headingCase: 'none',
    headingScale: 0.86,
    headingLeading: 1,
    headingTracking: '-0.015em',
    body: "'Inter', Arial, sans-serif",
    googleFonts: ['DM+Serif+Display', 'Inter:wght@400;500;600;700'],
  },
  images: {
    hero: [px(13820151), px(25537595), px(159306, 'construction-site-build-construction-work-159306.jpeg')],
    who: px(1216589),
    feature: px(16368424),
    about: px(16368410),
    approach: px(1216589),
    safety: px(16368421),
    safetyProgram: px(16368437),
    safetyTraining: px(31460017),
    safetyWide: px(236089),
    careers: px(159358, 'construction-site-build-construction-work-159358.jpeg'),
    careersWhy: px(31460017),
    contact: px(13820149),
    cta: px(25537595),
  },
  home: {
    hero: {
      eyebrow: 'Critical infrastructure delivery',
      title: ['Built for', 'critical', 'infrastructure.'],
      body: 'Responsive teams and disciplined execution for infrastructure projects where reliability, coordination and performance matter.',
    },
    who: {
      heading: 'Complex work. Clear execution.',
      body: 'CSR brings experienced teams, practical problem-solving and consistent execution to demanding infrastructure environments.',
    },
    services: {
      title: ['Capabilities', 'for demanding', 'environments.'],
      intro: 'Our capabilities support complex utility and infrastructure needs with responsive coordination, experienced crews and a focus on dependable delivery.',
    },
    feature: {
      eyebrow: 'Responsive by design',
      title: ['Ready for', 'the work that', 'can’t wait.'],
      body: 'Critical infrastructure depends on teams that can coordinate quickly, solve problems in the field and keep projects moving.',
    },
  },
  pages: {
    about: { heading: 'Coordinated teams for demanding work.', body: 'CSR brings coordinated teams and practical problem-solving to demanding infrastructure environments where communication and reliability matter.' },
    safety: { heading: 'Prepared for demanding environments.', body: 'Safety is built into planning, coordination and field execution, with room for the certifications and program information each project requires.' },
    careers: { heading: 'Bring your experience to the field.', body: 'Work alongside teams solving complex infrastructure challenges with a focus on coordination, responsiveness and dependable delivery.' },
    serviceLead: 'CSR approaches each project with disciplined coordination, experienced field leadership and a focus on dependable execution.',
    serviceBody: 'We work across project teams to solve field challenges, manage changing conditions and support critical infrastructure from planning through completion.',
    ctaBody: 'Planning a complex project? Talk with CSR about the scope, schedule and field requirements.',
  },
  services: [
    { slug: 'electrical-infrastructure', name: 'Electrical Infrastructure', summary: 'Coordinated electrical construction for complex infrastructure environments.', image: px(236089) },
    { slug: 'civil-underground', name: 'Civil & Underground', summary: 'Field-ready civil and underground utility support from planning through installation.', image: px(31460017) },
    { slug: 'energy-systems', name: 'Energy Systems', summary: 'Flexible construction support for evolving generation and grid infrastructure.', image: px(13820149) },
    { slug: 'mission-critical-facilities', name: 'Mission-Critical Facilities', summary: 'Infrastructure execution for facilities where uptime and coordination are essential.', image: px(325229) },
    { slug: 'technical-field-services', name: 'Technical Field Services', summary: 'Specialized field capabilities for unusual scopes and demanding site conditions.', image: px(19879654) },
    { slug: 'project-construction-support', name: 'Project & Construction Support', summary: 'Coordinated project support that helps complex field programs stay organized, responsive and on schedule.', image: px(159358, 'construction-site-build-construction-work-159358.jpeg') },
  ],
  contact: {},
  social: [
    { network: 'facebook', href: '#' },
    { network: 'instagram', href: '#' },
    { network: 'linkedin', href: '#' },
  ],
  careersUrl: '#careers-platform',
  badges: ALL_BADGES,
};
