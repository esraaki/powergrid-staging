import {useEffect,useState} from 'react';
import {SocialIcons} from './SocialIcons';
import type {BrandKey} from './BrandSwitcher';
import {brandServices} from '../data/company';

const logos={
  ampp:{light:'/assets/ampp-logo-light.svg',dark:'/assets/ampp-logo-dark.svg',name:'AMPP Construction'},
  csr:{light:'/assets/csr-logo-inverse.svg',dark:'/assets/csr-logo.svg',name:'Collective Strategic Resources'},
  james:{light:'/assets/james-logo-white.png',dark:'/assets/james-logo.svg',name:'James Powerline Construction'}
};

export function Navigation({brand}:{brand:BrandKey}){
  const [solid,setSolid]=useState(false);
  const [mobileOpen,setMobileOpen]=useState(false);
  const [mobileSection,setMobileSection]=useState<'about'|'services'|null>(null);

  useEffect(()=>{
    const f=()=>setSolid(window.scrollY>Math.max(80,window.innerHeight*.68));
    f(); addEventListener('scroll',f,{passive:true});
    return()=>removeEventListener('scroll',f);
  },[]);

  useEffect(()=>{
    const onKey=(e:KeyboardEvent)=>{if(e.key==='Escape')setMobileOpen(false)};
    addEventListener('keydown',onKey);
    document.body.style.overflow=mobileOpen?'hidden':'';
    return()=>{removeEventListener('keydown',onKey);document.body.style.overflow=''};
  },[mobileOpen]);

  const l=logos[brand], services=brandServices[brand];
  const isService=window.location.pathname.startsWith('/services/');
  const close=()=>{setMobileOpen(false);setMobileSection(null)};

  return <header className={`site-nav ${solid||isService?'solid':''} ${mobileOpen?'mobile-open':''}`}>
    <a href="/#top" className={`real-logo nav-logo brand-${brand}`} aria-label={`${l.name} home`} onClick={close}>
      <img className="logo-light" src={l.light} alt={l.name}/><img className="logo-dark" src={l.dark} alt="" aria-hidden="true"/>
    </a>
    <nav aria-label="Primary">
      <div className="nav-dropdown"><a className="nav-services-link" href="/about">About <span>⌄</span></a><div className="services-dropdown about-dropdown"><a href="/about">About Us</a><a href="/careers">Join Our Team</a></div></div>
      <div className="nav-dropdown"><button className="nav-services-link" type="button">Services <span>⌄</span></button><div className="services-dropdown">{services.map(s=><a key={s.id} href={`/services/${s.id}`}>{s.name}</a>)}</div></div>
      <a href="/safety">Safety</a><a href="/contact">Contact</a>
    </nav>
    <div className="nav-actions"><SocialIcons/></div>
    <button className="mobile-menu-toggle" type="button" aria-label={mobileOpen?'Close menu':'Open menu'} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={()=>setMobileOpen(v=>!v)}>
      <span/><span/><span/>
    </button>
    <div className="mobile-nav-panel" id="mobile-navigation" aria-hidden={!mobileOpen}>
      <div className="mobile-nav-links">
        <button type="button" className="mobile-nav-parent" aria-expanded={mobileSection==='about'} onClick={()=>setMobileSection(v=>v==='about'?null:'about')}>About <span>⌄</span></button>
        {mobileSection==='about'&&<div className="mobile-subnav"><a href="/about" onClick={close}>About Us</a><a href="/careers" onClick={close}>Join Our Team</a></div>}
        <button type="button" className="mobile-nav-parent" aria-expanded={mobileSection==='services'} onClick={()=>setMobileSection(v=>v==='services'?null:'services')}>Services <span>⌄</span></button>
        {mobileSection==='services'&&<div className="mobile-subnav">{services.map(s=><a key={s.id} href={`/services/${s.id}`} onClick={close}>{s.name}</a>)}</div>}
        <a href="/safety" onClick={close}>Safety</a><a href="/contact" onClick={close}>Contact</a>
      </div>
      <div className="mobile-nav-social"><SocialIcons/></div>
    </div>
  </header>;
}
