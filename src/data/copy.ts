/* ------------------------------------------------------------------
   Shared placeholder copy for inner pages.
   Neutral by design: no years, headcounts, statistics, awards or claims.
   Replace per company as final content arrives.
------------------------------------------------------------------- */
import type { Brand } from './types';

export const DEFAULT_CAPABILITIES = [
  'New infrastructure construction and installation',
  'System upgrades, replacements and maintenance',
  'Emergency response and field support',
  'Project planning, coordination and execution',
  'Specialized solutions for complex site requirements',
];

export const aboutCopy = (b: Brand) => ({
  who: [
    b.pages.about.body,
    `Our work is shaped by the realities of the field: changing site conditions, tight coordination with project partners and the responsibility of keeping essential systems running. ${b.shortName} teams bring practical experience to each of those moments.`,
  ],
  approach: {
    heading: 'Local knowledge. Broader support.',
    paragraphs: [
      'Our teams are built around the realities of field work: experienced people, clear communication and dependable execution from the first site walk through closeout.',
      `As part of the PowerGrid Services family, ${b.name} can draw on a broader network of infrastructure experience while maintaining its own operating identity, relationships and way of working.`,
      'That combination lets us stay close to the customers and communities we serve while bringing additional depth to projects that call for it.',
    ],
  },
});

export const serviceCopy = (b: Brand, summary: string) => ({
  heading: 'Experienced support from planning through completion.',
  paragraphs: [
    `${summary} ${b.pages.serviceLead}`,
    b.pages.serviceBody,
    'Every scope is different. Our teams review site conditions, schedule requirements and coordination needs early, so the work can move forward safely and with fewer surprises in the field.',
  ],
});

export const safetyCopy = (b: Brand) => ({
  intro: [
    b.pages.safety.body,
    `For ${b.shortName}, safety is not a separate program that sits beside the work. It shapes how projects are planned, how crews are prepared and how decisions are made when conditions change in the field.`,
  ],
  information: {
    heading: 'Standards that travel with every crew.',
    paragraphs: [
      'Our safety information reflects the expectations we hold across every project: preparation before work begins, clear communication on site and accountability at every level of the organization.',
      'Certifications, memberships and program requirements change over time. This page is maintained directly so current information stays visible to employees, customers and project partners without relying on separate downloadable documents.',
    ],
  },
  program: {
    heading: 'Clear information for the people doing the work.',
    paragraphs: [
      'Our safety program is built around practical guidance that crews can apply in the field. Expectations are communicated before work begins and reinforced through daily planning, job briefings and ongoing supervision.',
      'Program content covers the procedures, equipment requirements and site practices that apply to the work we perform. As scopes and conditions change, that guidance is reviewed so it stays relevant to the field.',
      'Employees and project partners should be able to understand our safety priorities quickly, and know where to turn when they have questions.',
    ],
  },
  training: {
    heading: 'Safety is part of the work.',
    paragraphs: [
      'Training gives crews the knowledge and confidence to work safely in demanding environments. It begins with onboarding and continues through role-specific instruction, refreshers and on-the-job mentoring.',
      'Accountability is shared. Leaders are responsible for setting clear expectations and providing the resources to meet them, and every team member is empowered to stop work when conditions are unsafe.',
      'Lessons learned in the field are reviewed and shared so improvements reach every crew, not just the team where they started.',
    ],
  },
  closing: {
    heading: 'Safety that supports the work.',
    paragraphs: [
      'Strong safety programs depend on information that stays useful in the field. Our expectations, training and day-to-day practices are designed to support crews throughout the life of a project.',
      'We continue to refine that approach with input from the people closest to the work, keeping our standards clear, current and easy to follow.',
    ],
  },
});

export const careersCopy = (b: Brand) => ({
  intro: [
    b.pages.careers.body,
    'Field roles, crew leadership and project support positions open throughout the year. Current openings are listed on our careers platform, where you can review role details and apply directly.',
  ],
  why: {
    heading: 'Work with purpose. Grow with the team.',
    paragraphs: [
      'Build experience on real infrastructure projects with teams that value safe work, practical knowledge and people who take pride in what they do.',
      'You will learn alongside experienced crews, take on responsibility as your skills grow and contribute to work that communities depend on every day.',
      'Specific roles, requirements and employment information are provided with each posting on our careers platform.',
    ],
  },
});
