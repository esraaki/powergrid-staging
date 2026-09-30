export type Service={id:string;name:string;description:string;image:string};
export type BrandKey='ampp'|'csr'|'james';

export const services:Service[]=[
 {id:'distribution',name:'Electric Power',description:'Building and maintaining the systems that keep communities powered.',image:'https://images.pexels.com/photos/34610698/pexels-photo-34610698.jpeg?auto=compress&cs=tinysrgb&w=1400'},
 {id:'underground',name:'Underground Utility',description:'Reliable infrastructure and field support below the surface.',image:'https://images.pexels.com/photos/16368435/pexels-photo-16368435.jpeg?auto=compress&cs=tinysrgb&w=1400'},
 {id:'renewables',name:'Renewables',description:'Supporting resilient energy infrastructure for what comes next.',image:'https://images.pexels.com/photos/8853470/pexels-photo-8853470.jpeg?auto=compress&cs=tinysrgb&w=1400'},
 {id:'data',name:'Data Centers',description:'Infrastructure support for critical facilities and growing demand.',image:'https://images.pexels.com/photos/5408005/pexels-photo-5408005.jpeg?auto=compress&cs=tinysrgb&w=1400'},
 {id:'specialty',name:'Engineering & Specialty Solutions',description:'Experienced field expertise for complex infrastructure projects.',image:'https://images.pexels.com/photos/8961623/pexels-photo-8961623.jpeg?auto=compress&cs=tinysrgb&w=1400'}
];

export const brandServices:Record<BrandKey,Service[]>={
 ampp:services,
 csr:[
  {id:'distribution',name:'Electrical Infrastructure',description:'Coordinated electrical construction for complex infrastructure environments.',image:'https://images.pexels.com/photos/25537595/pexels-photo-25537595.jpeg?auto=compress&cs=tinysrgb&w=1400'},
  {id:'underground',name:'Civil & Underground',description:'Field-ready civil and underground utility support from planning through installation.',image:'https://images.pexels.com/photos/31460017/pexels-photo-31460017.jpeg?auto=compress&cs=tinysrgb&w=1400'},
  {id:'renewables',name:'Energy Systems',description:'Flexible construction support for evolving generation and grid infrastructure.',image:'https://images.pexels.com/photos/13820149/pexels-photo-13820149.jpeg?auto=compress&cs=tinysrgb&w=1400'},
  {id:'data',name:'Mission-Critical Facilities',description:'Infrastructure execution for facilities where uptime and coordination are essential.',image:'https://images.pexels.com/photos/16368410/pexels-photo-16368410.jpeg?auto=compress&cs=tinysrgb&w=1400'},
  {id:'specialty',name:'Technical Field Services',description:'Specialized field capabilities for unusual scopes and demanding site conditions.',image:'https://images.pexels.com/photos/19879654/pexels-photo-19879654.jpeg?auto=compress&cs=tinysrgb&w=1400'}
 ],
 james:[
  {id:'distribution',name:'Overhead Powerline',description:'Experienced line crews supporting overhead construction, upgrades and system reliability.',image:'https://images.pexels.com/photos/35571322/pexels-photo-35571322.jpeg?auto=compress&cs=tinysrgb&w=1400'},
  {id:'underground',name:'Underground Distribution',description:'Practical underground distribution work backed by experienced utility crews.',image:'https://images.pexels.com/photos/5328573/pexels-photo-5328573.jpeg?auto=compress&cs=tinysrgb&w=1400'},
  {id:'renewables',name:'Storm Response',description:'Responsive crews and field support when restoration work cannot wait.',image:'https://images.pexels.com/photos/17321815/pexels-photo-17321815.jpeg?auto=compress&cs=tinysrgb&w=1400'},
  {id:'data',name:'Substation Support',description:'Hands-on construction and maintenance support for critical electrical facilities.',image:'https://images.pexels.com/photos/9720534/pexels-photo-9720534.jpeg?auto=compress&cs=tinysrgb&w=1400'},
  {id:'specialty',name:'Line Maintenance & Specialty Work',description:'Flexible field solutions for maintenance, repairs and specialized powerline scopes.',image:'https://images.pexels.com/photos/33689073/pexels-photo-33689073.jpeg?auto=compress&cs=tinysrgb&w=1400'}
 ]
};

export const brandContent={
 ampp:{
  heroTitle:['POWERING','STRONGER','COMMUNITIES.'],heroBody:'Reliable utility infrastructure through skilled people, safe practices and a commitment to the communities we serve.',about:'We deliver dependable utility infrastructure support through experienced people, responsive field operations and a commitment to doing the work safely.',servicesIntro:'From power distribution to storm restoration and specialty support, experienced teams deliver the infrastructure that keeps communities running.',serviceLead:'Our crews combine practical field experience, disciplined planning and a safety-first approach to deliver dependable infrastructure work.',serviceBody:'From new construction to upgrades and maintenance, we coordinate closely with utilities, contractors and project partners to keep work moving safely and efficiently.',cta:'Have an infrastructure project ahead? Let’s connect you with the right AMPP team.',featureTitle:['WE SERVE THE','COMMUNITIES THAT','BUILD TOMORROW.'],featureBody:'From new infrastructure to vital upgrades, our work supports the people and places that depend on reliable service.',featureImage:'https://images.pexels.com/photos/16368435/pexels-photo-16368435.jpeg?auto=compress&cs=tinysrgb&w=2200'
 },
 csr:{
  heroTitle:['BUILT FOR','CRITICAL','INFRASTRUCTURE.'],heroBody:'Responsive teams and disciplined execution for infrastructure projects where reliability, coordination and performance matter.',about:'CSR brings experienced teams, practical problem-solving and consistent execution to demanding infrastructure environments.',servicesIntro:'Our capabilities support complex utility and infrastructure needs with responsive coordination, experienced crews and a focus on dependable delivery.',serviceLead:'CSR approaches each project with disciplined coordination, experienced field leadership and a focus on dependable execution.',serviceBody:'We work across project teams to solve field challenges, manage changing conditions and support critical infrastructure from planning through completion.',cta:'Planning a complex project? Talk with CSR about the scope, schedule and field requirements.',featureTitle:['READY FOR','THE WORK THAT','CAN’T WAIT.'],featureBody:'Critical infrastructure depends on teams that can coordinate quickly, solve problems in the field and keep projects moving.',featureImage:'https://images.pexels.com/photos/25537595/pexels-photo-25537595.jpeg?auto=compress&cs=tinysrgb&w=2200'
 },
 james:{
  heroTitle:['POWERLINE','EXPERIENCE','THAT DELIVERS.'],heroBody:'Experienced crews, practical field knowledge and reliable execution for powerline and utility infrastructure projects.',about:'James Powerline Construction is built around field experience, responsive crews and the practical knowledge required to keep utility work moving.',servicesIntro:'From overhead line construction to restoration, substations and specialty maintenance, our crews bring hands-on experience to essential power infrastructure.',serviceLead:'James brings hands-on powerline experience, responsive field teams and practical execution to every project.',serviceBody:'Whether the work involves new construction, upgrades, restoration or maintenance, our crews focus on safe operations, clear coordination and dependable results in the field.',cta:'Need an experienced field partner? Let’s talk about where James can support the work.',featureTitle:['FIELD EXPERIENCE.','DEPENDABLE','RESULTS.'],featureBody:'From everyday utility work to demanding construction environments, experienced crews help keep essential systems moving forward.',featureImage:'https://images.pexels.com/photos/35571322/pexels-photo-35571322.jpeg?auto=compress&cs=tinysrgb&w=2200'
 }
} as const;

export const company={
 name:'AMPP Construction',shortName:'AMPP',parent:'PowerGrid Services',identifier:'A PowerGrid Services company, supported by a broader family of infrastructure businesses and shared operational expertise.',services,contact:{phone:'',address:''}
};
