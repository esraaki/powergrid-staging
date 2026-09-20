import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { company } from '../data/company';
export function Hero(){const ref=useRef<HTMLElement>(null);const {scrollYProgress}=useScroll({target:ref,offset:['start start','end start']});const scale=useTransform(scrollYProgress,[0,1],[1,1.09]);const y=useTransform(scrollYProgress,[0,1],['0%','12%']);return <section id="top" ref={ref} className="hero"><motion.div className="hero-media" style={{scale,y}}/><div className="hero-scrim"/><div className="hero-grid"><p className="hero-kicker">{company.eyebrow}</p><h1>{company.heroTitle.map((line,i)=><span key={line} className={i===1?'outline-line':''}>{line}</span>)}</h1><div className="hero-bottom"><p>{company.heroBody}</p><a href="#about" className="scroll-cue"><span>Explore</span><ArrowDown size={18}/></a></div></div><div className="hero-index">CSR / 01</div></section>}
