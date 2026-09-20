export type Service = { id:string; name:string; kicker:string; description:string; image:string; position?:string };
export const company = {
  name:'Collective Strategic Resources', shortName:'CSR',
  eyebrow:'Utility response / workforce solutions',
  heroTitle:['READY WHEN','THE GRID','NEEDS US.'],
  heroBody:'Reliable, year-round solutions that help utility providers serve their customers in every season.',
  about:'Collective Strategic Resources is a division of PowerGrid Services, delivering field-ready support for utilities through restoration, vegetation, assessment, logistics, and supplemental workforce solutions.',
  services:[
    {id:'restoration',name:'Power Restoration',kicker:'01 / Response',description:'Field-ready crews and coordinated response support when utility systems need rapid restoration.',image:'https://loremflickr.com/1600/1200/lineman,powerline?lock=41',position:'center'},
    {id:'vegetation',name:'Vegetation Management',kicker:'02 / Clearance',description:'Utility-focused vegetation support built around safe access, continuity, and right-of-way needs.',image:'https://loremflickr.com/1600/1200/utility,trees,powerline?lock=42',position:'center'},
    {id:'assessment',name:'Damage Assessment',kicker:'03 / Intelligence',description:'On-the-ground assessment support that helps teams understand damage and organize the work ahead.',image:'https://loremflickr.com/1600/1200/storm,powerline,worker?lock=43',position:'center'},
    {id:'logistics',name:'Logistics & Management',kicker:'04 / Coordination',description:'Operational coordination that keeps people, equipment, and field activity moving with purpose.',image:'https://loremflickr.com/1600/1200/utility,truck,crew?lock=44',position:'center'},
    {id:'workforce',name:'Supplemental Workforce',kicker:'05 / Capacity',description:'Additional skilled field capacity to support utility operations through changing demand and project needs.',image:'https://loremflickr.com/1600/1200/linemen,utility,crew?lock=45',position:'center'}
  ] as Service[],
  safetyTitle:['SAFETY FOCUSED.','PEOPLE MINDED.'],
  safetyBody:'The safety of our team, customers, subcontractors, and the public is how we measure success. Every task and decision is made with safety at the forefront.',
  safetyImage:'https://loremflickr.com/1800/1300/lineman,safety,utility?lock=46',
  contact:{phone:'877-277-8623',address:'2350 US Highway 31 North, Hartselle, AL 35640'},
  parent:'PowerGrid Services'
};
