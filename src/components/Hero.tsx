import {AnimatePresence,motion} from 'motion/react';import {useEffect,useState} from 'react';import {company} from '../data/company';
const ease=[.22,1,.36,1] as const;
const heroImages=[
'https://images.pexels.com/photos/28907372/pexels-photo-28907372.jpeg?auto=compress&cs=tinysrgb&w=2200',
'https://images.pexels.com/photos/34610698/pexels-photo-34610698.jpeg?auto=compress&cs=tinysrgb&w=2200',
'https://images.pexels.com/photos/8961623/pexels-photo-8961623.jpeg?auto=compress&cs=tinysrgb&w=2200'
];
export function Hero(){const [active,setActive]=useState(0);useEffect(()=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const id=setInterval(()=>setActive(v=>(v+1)%heroImages.length),8000);return()=>clearInterval(id)},[]);return <section id="top" className="hero"><AnimatePresence initial={false}><motion.div key={active} className="hero-image" style={{backgroundImage:`url('${heroImages[active]}')`}} initial={{opacity:0,scale:1.025}} animate={{opacity:1,scale:1.01}} exit={{opacity:0}} transition={{opacity:{duration:1.85,ease},scale:{duration:9.2,ease:'linear'}}}/></AnimatePresence><div className="hero-shade"/><div className="hero-content"><motion.h1 initial={{opacity:0,y:34}} animate={{opacity:1,y:0}} transition={{duration:.9,ease,delay:.15}}>{company.heroTitle.map((x,i)=><span key={x} className={i===2?'orange':''}>{x}</span>)}</motion.h1><motion.p initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.75,ease,delay:.38}}>{company.heroBody}</motion.p></div><div className="hero-to-about" aria-hidden="true"/></section>}
