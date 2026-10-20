import type { Brand } from '../types';
import { px } from '../media';

/** Variation X — fictional demonstration company. */
export const northline: Brand = {
  key: 'northline',
  name: 'Northline Infrastructure',
  shortName: 'Northline',
  logo: { onLight: '/assets/northline-logo.svg', onDark: '/assets/northline-logo-white.svg', alt: 'Northline Infrastructure' },
  accent: '#006D6F',
  type: {
    heading: "'Archivo', Arial, sans-serif",
    headingWeight: 800,
    headingCase: 'none',
    headingScale: 0.74,
    headingLeading: 0.96,
    headingTracking: '-0.035em',
    body: "'Inter', Arial, sans-serif",
    googleFonts: ['Archivo:wght@600;700;800', 'Inter:wght@400;500;600;700'],
  },
  images: {
    hero: [px(25537595), px(13820151), px(433308)],
    who: px(1216589),
    feature: px(13820149),
    about: px(16368410),
    approach: px(257736),
    safety: px(16368421),
    safetyProgram: px(16368424),
    safetyTraining: px(1216589),
    safetyWide: px(236089),
    careers: px(159358, 'construction-site-build-construction-work-159358.jpeg'),
    careersWhy: px(16368437),
    contact: px(5328569),
    cta: px(414837),
  },
  home: {
    hero: {
      eyebrow: 'Grid & facility infrastructure',
      title: ['Built for', 'the next', 'connection.'],
      body: 'Northline Infrastructure brings coordinated field teams and practical execution to the systems communities rely on.',
    },
    who: {
      heading: 'Infrastructure built to connect.',
      body: 'We connect experienced crews, clear planning and responsive field operations to deliver essential infrastructure with confidence.',
    },
    services: {
      title: ['Connected', 'capabilities.'],
      intro: 'From grid construction to critical facilities, Northline supports infrastructure programs with disciplined coordination and field-ready expertise.',
    },
    feature: {
      eyebrow: 'Planning to delivery',
      title: ['Infrastructure', 'that moves', 'with you.'],
      body: 'Flexible teams and dependable execution help critical projects keep moving from planning through field delivery.',
    },
  },
  pages: {
    about: { heading: 'Infrastructure built to connect.', body: 'Northline combines field experience, responsive coordination and practical execution across essential infrastructure projects.' },
    safety: { heading: 'Prepared work. Clear expectations.', body: 'Safety information, training and field practices stay visible throughout the work so teams can plan and execute with confidence.' },
    careers: { heading: 'Build what communities depend on.', body: 'Join Northline teams delivering practical infrastructure work and growing field experience across essential projects.' },
    serviceLead: 'Northline combines practical field knowledge with responsive coordination for dependable project delivery.',
    serviceBody: 'Our teams support construction, upgrades and complex field scopes with clear communication and a focus on reliable execution.',
    ctaBody: 'Planning your next infrastructure project? Connect with the Northline team.',
  },
  services: [
    { slug: 'grid-construction', name: 'Grid Construction', summary: 'Field construction for dependable electrical networks and growing communities.', image: px(34610709) },
    { slug: 'underground-systems', name: 'Underground Systems', summary: 'Coordinated underground infrastructure for complex sites and utility corridors.', image: px(31460017) },
    { slug: 'energy-infrastructure', name: 'Energy Infrastructure', summary: 'Construction support for modern generation, transmission and energy systems.', image: px(433308) },
    { slug: 'critical-facilities', name: 'Critical Facilities', summary: 'Infrastructure delivery for facilities where coordination and reliability matter.', image: px(325229) },
  ],
  contact: {},
  social: [
    { network: 'linkedin', href: '#' },
    { network: 'instagram', href: '#' },
  ],
  careersUrl: '#careers-platform',
  badges: ['avetta', 'isnetworld', 'complyworks', 'firstaid', 'goldshovel', 'vero'],
};
