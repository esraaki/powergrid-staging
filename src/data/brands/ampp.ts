import type { Brand } from '../types';
import { px, ALL_BADGES } from '../media';

export const ampp: Brand = {
  key: 'ampp',
  name: 'AMPP Construction',
  shortName: 'AMPP',
  logo: { onLight: '/assets/ampp-logo-dark.svg', onDark: '/assets/ampp-logo-light.svg', alt: 'AMPP Construction' },
  accent: '#D4382C',
  type: {
    heading: "'Barlow Condensed', 'Arial Narrow', Arial, sans-serif",
    headingWeight: 800,
    headingCase: 'uppercase',
    headingScale: 1,
    headingLeading: 0.86,
    headingTracking: '-0.01em',
    body: "'Inter', Arial, sans-serif",
    googleFonts: ['Barlow+Condensed:wght@600;700;800', 'Inter:wght@400;500;600;700'],
  },
  images: {
    hero: [px(34610698), px(34610690), px(13820148)],
    who: px(34610697),
    feature: px(16368436),
    about: px(34610696),
    approach: px(16368437),
    safety: px(13820151),
    safetyProgram: px(31460017),
    safetyTraining: px(1216589),
    safetyWide: px(25537595),
    careers: px(159358, 'construction-site-build-construction-work-159358.jpeg'),
    careersWhy: px(34610700),
    contact: px(34610709),
    cta: px(236089),
  },
  home: {
    hero: {
      eyebrow: 'Utility infrastructure construction',
      title: ['Powering', 'stronger', 'communities.'],
      body: 'Reliable utility infrastructure through skilled people, safe practices and a commitment to the communities we serve.',
    },
    who: {
      heading: 'Dependable work, done the right way.',
      body: 'We deliver dependable utility infrastructure support through experienced people, responsive field operations and a commitment to doing the work safely.',
    },
    services: {
      title: ['Essential', 'infrastructure', 'for everyday life.'],
      intro: 'From power distribution to storm restoration and specialty support, experienced teams deliver the infrastructure that keeps communities running.',
    },
    feature: {
      eyebrow: 'Community focused',
      title: ['We serve the', 'communities that', 'build tomorrow.'],
      body: 'From new infrastructure to vital upgrades, our work supports the people and places that depend on reliable service.',
    },
  },
  pages: {
    about: { heading: 'Built around the people who do the work.', body: 'AMPP supports utility infrastructure with experienced field teams, practical execution and a commitment to the communities our work serves.' },
    safety: { heading: 'Safety starts before the work does.', body: 'Our people come first. Training, accountability and consistent field practices help keep safety at the center of every project.' },
    careers: { heading: 'Build work that matters.', body: 'Join a team supporting essential infrastructure, learning in the field and helping communities stay connected.' },
    serviceLead: 'Our crews combine practical field experience, disciplined planning and a safety-first approach to deliver dependable infrastructure work.',
    serviceBody: 'From new construction to upgrades and maintenance, we coordinate closely with utilities, contractors and project partners to keep work moving safely and efficiently.',
    ctaBody: 'Have an infrastructure project ahead? Let’s connect you with the right AMPP team.',
  },
  services: [
    { slug: 'electric-power', name: 'Electric Power', summary: 'Building and maintaining the systems that keep communities powered.', image: px(34610704) },
    { slug: 'underground-utility', name: 'Underground Utility', summary: 'Reliable infrastructure and field support below the surface.', image: px(16368435) },
    { slug: 'renewables', name: 'Renewables', summary: 'Supporting resilient energy infrastructure for what comes next.', image: px(8853470) },
    { slug: 'data-centers', name: 'Data Centers', summary: 'Infrastructure support for critical facilities and growing demand.', image: px(5408005) },
    { slug: 'engineering-specialty-solutions', name: 'Engineering & Specialty Solutions', summary: 'Experienced field expertise for complex infrastructure projects.', image: px(8961623) },
  ],
  contact: {
    address: ['810 W. Washington St.', 'Winchester, IN 47394'],
    phone: '765-305-1988',
    emergency: '765-546-2451',
  },
  social: [
    { network: 'facebook', href: '#' },
    { network: 'instagram', href: '#' },
    { network: 'linkedin', href: '#' },
  ],
  careersUrl: '#careers-platform',
  badges: ALL_BADGES,
};
