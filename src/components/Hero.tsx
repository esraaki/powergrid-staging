import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { company } from '../data/company';
export function Hero(){
 const ref=useRef<HTMLElement>(null); const {scrollYProgress}=useScroll({target:ref,offset:['start start','end start']});
 const y=useTransform(scrollYProgress,[0,1],['0%','10%']); const scale=useTransform(scrollYProgress,[0,1],[1,1.05]);
 return <section id="top" className="hero" ref={ref}>
   <motion.div className="hero-photo" style={{y,scale}}><img src={company.heroImage} alt="Utility crew working on electrical infrastructure"/></motion.div>
   <div className="hero-shade"/>
   <div className="hero-copy"><p className="eyebrow">UTILITY INFRASTRUCTURE. <b>REAL IMPACT.</b></p><h1>READY WHEN<br/>THE GRID<br/><em>NEEDS US.</em></h1><p>{company.heroBody}</p></div>
   <div className="hero-edge-word">FIELD READY / PEOPLE FIRST</div>
 </section>
}
