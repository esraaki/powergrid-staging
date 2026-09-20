import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { company } from '../data/company';
export function Hero(){
  const ref=useRef<HTMLElement>(null);
  const {scrollYProgress}=useScroll({target:ref,offset:['start start','end start']});
  const scale=useTransform(scrollYProgress,[0,1],[1,1.055]);
  const y=useTransform(scrollYProgress,[0,1],['0%','7%']);
  const copyY=useTransform(scrollYProgress,[0,1],['0%','-7%']);
  return <section id="top" ref={ref} className="hero">
    <motion.div className="hero-media" style={{scale,y}}/>
    <div className="hero-scrim"/>
    <motion.div className="hero-content" style={{y:copyY}}>
      <p className="hero-kicker">{company.eyebrow}</p>
      <h1>Ready when<br/>the grid needs us.</h1>
      <div className="hero-bottom"><p>{company.heroBody}</p><a href="#about"><span>Discover CSR</span><ArrowDown size={17}/></a></div>
    </motion.div>
  </section>
}
