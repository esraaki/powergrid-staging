import { useState } from 'react';
import { Menu, X } from 'lucide-react';
export function Navigation(){
  const [open,setOpen]=useState(false);
  return <header className="nav-shell">
    <a className="brand" href="#top" aria-label="CSR home"><span className="brand-mark">CSR</span><span className="brand-name">COLLECTIVE<br/>STRATEGIC RESOURCES</span></a>
    <nav className="desktop-nav" aria-label="Primary"><a href="#about">About</a><a href="#services">Services</a><a href="#safety">Safety</a><a href="#contact">Contact</a></nav>
    <a className="nav-cta" href="#contact">Get in touch <span>→</span></a>
    <button className="menu-button" aria-label="Toggle menu" aria-expanded={open} onClick={()=>setOpen(v=>!v)}>{open?<X/>:<Menu/>}</button>
    {open&&<nav className="mobile-nav" aria-label="Mobile"><a href="#about" onClick={()=>setOpen(false)}>About</a><a href="#services" onClick={()=>setOpen(false)}>Services</a><a href="#safety" onClick={()=>setOpen(false)}>Safety</a><a href="#contact" onClick={()=>setOpen(false)}>Contact</a></nav>}
  </header>
}
