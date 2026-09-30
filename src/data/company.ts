export type Service={id:string;name:string;description:string;image:string};
export type BrandKey='ampp'|'csr'|'james';

export const services:Service[]=[
 {id:'distribution',name:'Electric Power',description:'Building and maintaining the systems that keep communities powered.',image:'https://images.pexels.com/photos/34610698/pexels-photo-34610698.jpeg?auto=compress&cs=tinysrgb&w=1400'},
 {id:'underground',name:'Underground Utility',description:'Reliable infrastructure and field support below the surface.',image:'https://images.pexels.com/photos/16368435/pexels-photo-16368435.jpeg?auto=compress&cs=tinysrgb&w=1400'},
 {id:'renewables',name:'Renewables',description:'Supporting resilient energy infrastructure for what comes next.',image:'https://images.pexels.com/photos/8853470/pexels-photo-8853470.jpeg?auto=compress&cs=tinysrgb&w=1400'},
 {id:'data',name:'Data Centers',description:'Infrastructure support for critical facilities and growing demand.',image:'https://images.pexels.com/photos/5408005/pexels-photo-5408005.jpeg?auto=compress&cs=tinysrgb&w=1400'},
 {id:'specialty',name:'Engineering & Specialty Solutions',description:'Experienced field expertise for complex infrastructure projects.',image:'https://images.pexels.com/photos/8961623/pexels-photo-8961623.jpeg?auto=compress&cs=tinysrgb&w=1400'}
];

export const brandContent={
 ampp:{
  heroTitle:['POWERING','STRONGER','COMMUNITIES.'],
  heroBody:'Reliable utility infrastructure through skilled people, safe practices and a commitment to the communities we serve.',
  about:'We deliver dependable utility infrastructure support through experienced people, responsive field operations and a commitment to doing the work safely.',
  servicesIntro:'From power distribution to storm restoration and specialty support, experienced teams deliver the infrastructure that keeps communities running.',
  serviceDescriptions:['Building and maintaining dependable electric systems with safety at the center.','Coordinated underground construction for resilient utility networks.','Field expertise supporting the next generation of energy infrastructure.','Reliable infrastructure solutions for critical, always-on facilities.','Specialized engineering and field support for complex project demands.'],
  serviceLead:'Our crews combine practical field experience, disciplined planning and a safety-first approach to deliver dependable infrastructure work.',
  serviceBody:'From new construction to upgrades and maintenance, we coordinate closely with utilities, contractors and project partners to keep work moving safely and efficiently.',
  cta:'Have an infrastructure project ahead? Let’s connect you with the right AMPP team.',
  featureTitle:['WE SERVE THE','COMMUNITIES THAT','BUILD TOMORROW.'],featureBody:'From new infrastructure to vital upgrades, our work supports the people and places that depend on reliable service.'
 },
 csr:{
  heroTitle:['BUILT FOR','CRITICAL','INFRASTRUCTURE.'],
  heroBody:'Responsive teams and disciplined execution for infrastructure projects where reliability, coordination and performance matter.',
  about:'CSR brings experienced teams, practical problem-solving and consistent execution to demanding infrastructure environments.',
  servicesIntro:'Our capabilities support complex utility and infrastructure needs with responsive coordination, experienced crews and a focus on dependable delivery.',
  serviceDescriptions:['Coordinated electric infrastructure support for demanding project environments.','Underground utility work planned around safety, access and continuity.','Flexible support for renewable and evolving energy systems.','Infrastructure execution for facilities where uptime and coordination are critical.','Specialized capabilities tailored to unusual scopes and complex field conditions.'],
  serviceLead:'CSR approaches each project with disciplined coordination, experienced field leadership and a focus on dependable execution.',
  serviceBody:'We work across project teams to solve field challenges, manage changing conditions and support critical infrastructure from planning through completion.',
  cta:'Planning a complex project? Talk with CSR about the scope, schedule and field requirements.',
  featureTitle:['READY FOR','THE WORK THAT','CAN’T WAIT.'],featureBody:'Critical infrastructure depends on teams that can coordinate quickly, solve problems in the field and keep projects moving.'
 },
 james:{
  heroTitle:['POWERLINE','EXPERIENCE','THAT DELIVERS.'],
  heroBody:'Experienced crews, practical field knowledge and reliable execution for powerline and utility infrastructure projects.',
  about:'James Powerline Construction is built around field experience, responsive crews and the practical knowledge required to keep utility work moving.',
  servicesIntro:'From electric power construction to underground systems and specialty work, our teams bring hands-on experience to essential infrastructure projects.',
  serviceDescriptions:['Experienced powerline construction and maintenance for reliable electric service.','Practical underground utility construction backed by experienced field crews.','Construction support for renewable energy and modern grid infrastructure.','Utility infrastructure work supporting high-demand data center development.','Specialty field solutions shaped around site conditions and project needs.'],
  serviceLead:'James brings hands-on powerline experience, responsive field teams and practical execution to every project.',
  serviceBody:'Whether the work involves new construction, upgrades or maintenance, our crews focus on safe operations, clear coordination and dependable results in the field.',
  cta:'Need an experienced field partner? Let’s talk about where James can support the work.',
  featureTitle:['FIELD EXPERIENCE.','DEPENDABLE','RESULTS.'],featureBody:'From everyday utility work to demanding construction environments, experienced crews help keep essential systems moving forward.'
 }
} as const;

export const company={
 name:'AMPP Construction',shortName:'AMPP',parent:'PowerGrid Services',
 identifier:'A PowerGrid Services company, supported by a broader family of infrastructure businesses and shared operational expertise.',
 services,
 featureTitle:['WE SERVE THE','COMMUNITIES THAT','BUILD TOMORROW.'],
 featureBody:'From new infrastructure to vital upgrades, our work supports the people and places that depend on reliable service.',
 featureImage:'https://images.pexels.com/photos/16368435/pexels-photo-16368435.jpeg?auto=compress&cs=tinysrgb&w=2200',
 contact:{phone:'',address:''}
};
