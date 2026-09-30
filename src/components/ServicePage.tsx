import {motion} from 'motion/react';
import {company,type Service} from '../data/company';

export function ServicePage({service}:{service:Service}){
 const others=company.services.filter(s=>s.id!==service.id);
 return <div className="service-page">
  <section className="service-hero">
   <img src={service.image} alt=""/>
   <div className="service-hero-shade"/>
   <motion.div className="service-hero-copy" initial={{opacity:0,y:34}} animate={{opacity:1,y:0}} transition={{duration:1.05,ease:[.22,1,.36,1]}}>
    <p className="service-kicker">SERVICES</p>
    <h1>{service.name}</h1>
   </motion.div>
  </section>

  <section className="service-body">
   <div className="service-body-grid">
    <motion.aside className="service-side" initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{duration:.65}}>
     <p className="eyebrow"><i/> WHAT WE DO</p>
     <h2>BUILT FOR RELIABLE PERFORMANCE.</h2>
    </motion.aside>
    <motion.article className="service-article" initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.72}}>
     <p className="service-lead">{service.description} Our teams bring practical field experience, disciplined planning and a strong focus on safety to every project.</p>
     <h3>Experienced support from planning through completion</h3>
     <p>From new construction to upgrades and ongoing maintenance, we work alongside utilities, contractors and project partners to deliver dependable infrastructure solutions. This placeholder content can be replaced with the client’s final service copy once it is available.</p>
     <p>Our approach is built around clear communication, experienced crews and careful execution. Every project is different, so our teams adapt to site conditions, schedules and operational requirements while keeping safety and quality at the center of the work.</p>
     <h3>Capabilities may include</h3>
     <ul>
      <li>New infrastructure construction and installation</li>
      <li>System upgrades, replacements and maintenance</li>
      <li>Emergency response and field support</li>
      <li>Project planning, coordination and execution</li>
      <li>Specialized solutions for complex site requirements</li>
     </ul>
     <h3>A partner built around the work</h3>
     <p>As part of the PowerGrid Services family, our teams can draw on broader operational experience and resources while maintaining the local knowledge and responsiveness clients expect.</p>
     <a className="text-link" href="/#contact">TALK TO OUR TEAM <span>→</span></a>
    </motion.article>
   </div>
  </section>

  <section className="service-cta">
   <div><p className="eyebrow"><i/> START A CONVERSATION</p><h2>HAVE A PROJECT<br/>IN MIND?</h2></div>
   <div><p>Tell us what you’re working on and we’ll connect you with the right team.</p><a className="button service-cta-button" href="/#contact">GET IN TOUCH <span>→</span></a></div>
  </section>

  <section className="other-services">
   <div className="other-services-head"><p className="eyebrow"><i/> EXPLORE MORE</p><h2>OTHER SERVICES</h2></div>
   <div className="other-services-grid">{others.map(s=><a className="other-service" href={`/services/${s.id}`} key={s.id}><img src={s.image} alt=""/><span className="other-service-shade"/><strong>{s.name}</strong><b aria-hidden="true">›</b></a>)}</div>
  </section>
 </div>
}
