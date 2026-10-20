import type { Brand } from '../types';
import { px } from '../media';

/** Variation Y — fictional demonstration company. */
export const summit: Brand = {
  key: 'summit',
  name: 'Summit Gridworks',
  shortName: 'Summit',
  logo: { onLight: '/assets/summit-logo.svg', onDark: '/assets/summit-logo-white.svg', alt: 'Summit Gridworks' },
  accent: '#B26A16',
  type: {
    heading: "'Big Shoulders Display', 'Arial Narrow', Arial, sans-serif",
    headingWeight: 800,
    headingCase: 'uppercase',
    headingScale: 1,
    headingLeading: 0.88,
    headingTracking: '0',
    body: "'IBM Plex Sans', Arial, sans-serif",
    googleFonts: ['Big+Shoulders+Display:wght@700;800', 'IBM+Plex+Sans:wght@400;500;600;700'],
  },
  images: {
    hero: [px(34610700), px(16368436), px(236089)],
    who: px(585419),
    feature: px(34610690),
    about: px(16368437),
    approach: px(34610697),
    safety: px(16368421),
    safetyProgram: px(13820151),
    safetyTraining: px(8961623),
    safetyWide: px(9720534),
    careers: px(34610696),
    careersWhy: px(585419),
    contact: px(17321815),
    cta: px(13820148),
  },
  home: {
    hero: {
      eyebrow: 'Power & civil infrastructure',
      title: ['Ready when', 'the grid', 'needs us.'],
      body: 'Summit Gridworks supports power and civil infrastructure with experienced crews, responsive coordination and practical field expertise.',
    },
    who: {
      heading: 'Field experience that keeps work moving.',
      body: 'Built around field experience, Summit helps utilities and project partners move essential work forward safely and efficiently.',
    },
    services: {
      title: ['What our', 'crews do.'],
      intro: 'Our teams support power delivery, civil infrastructure, restoration and specialty scopes across demanding project environments.',
    },
    feature: {
      eyebrow: 'Field ready',
      title: ['Field ready.', 'Project', 'focused.'],
      body: 'Experienced people, practical planning and responsive support for the infrastructure work that cannot stand still.',
    },
  },
  pages: {
    about: { heading: 'Field experience that keeps work moving.', body: 'Summit Gridworks brings responsive crews and practical infrastructure knowledge to power, civil and restoration projects.' },
    safety: { heading: 'Ready for the field.', body: 'Preparation, training and accountability support the teams doing demanding infrastructure work every day.' },
    careers: { heading: 'Take your experience further.', body: 'Work with Summit crews on essential projects where practical knowledge, coordination and dependable execution matter.' },
    serviceLead: 'Summit brings hands-on infrastructure experience and responsive field leadership to every scope.',
    serviceBody: 'From planned construction to urgent field needs, our crews focus on coordination, safe execution and dependable results.',
    ctaBody: 'Have a project ahead? Talk with Summit about the work and where our crews can help.',
  },
  services: [
    { slug: 'power-delivery', name: 'Power Delivery', summary: 'Experienced crews supporting essential power delivery infrastructure.', image: px(5328569) },
    { slug: 'civil-infrastructure', name: 'Civil Infrastructure', summary: 'Practical civil and underground support built around field conditions.', image: px(159306, 'construction-site-build-construction-work-159306.jpeg') },
    { slug: 'storm-restoration', name: 'Storm & Restoration', summary: 'Responsive field teams supporting restoration and urgent infrastructure needs.', image: px(34610704) },
    { slug: 'substation-systems', name: 'Substation & Systems', summary: 'Construction support for critical electrical systems and facilities.', image: px(236089) },
    { slug: 'specialty-field-services', name: 'Specialty Field Services', summary: 'Flexible expertise for demanding scopes and unusual project conditions.', image: px(585419) },
  ],
  contact: {},
  social: [
    { network: 'facebook', href: '#' },
    { network: 'instagram', href: '#' },
    { network: 'linkedin', href: '#' },
  ],
  careersUrl: '#careers-platform',
  badges: ['albat', 'ibew', 'firstaid', 'isnetworld', 'avetta', 'imea', 'woodmac'],
};
