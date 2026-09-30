import {useEffect,useState} from 'react';
import {Navigation} from './components/Navigation';
import {Hero} from './components/Hero';
import {WhoWeAre} from './components/WhoWeAre';
import {ServicesExperience} from './components/ServicesExperience';
import {Safety} from './components/Safety';
import {Footer} from './components/Footer';
import {BrandSwitcher,BrandKey} from './components/BrandSwitcher';
import {ServicePage} from './components/ServicePage';
import {company} from './data/company';

const themes={ampp:{accent:'#D4382C',hover:'#B92D24',heading:"'Barlow Condensed',Arial,sans-serif"},csr:{accent:'#0475AE',hover:'#035F8E',heading:"'DM Serif Display',Georgia,serif"},james:{accent:'#329840',hover:'#287A33',heading:"'Teko',Arial,sans-serif"}};

export default function App(){
 const [brand,setBrandState]=useState<BrandKey>(()=>{const saved=localStorage.getItem('powergrid-brand');return saved==='csr'||saved==='james'?saved:'ampp'});
 const setBrand=(b:BrandKey)=>{setBrandState(b);localStorage.setItem('powergrid-brand',b)};
 useEffect(()=>{const t=themes[brand];const r=document.documentElement;r.style.setProperty('--orange',t.accent);r.style.setProperty('--orange-hover',t.hover);r.style.setProperty('--heading',t.heading);r.dataset.brand=brand},[brand]);
 const match=window.location.pathname.match(/^\/services\/([^/]+)\/?$/);
 const service=match?company.services.find(s=>s.id===match[1]):undefined;
 return <><Navigation brand={brand}/><main>{service?<ServicePage service={service}/>:<><Hero/><WhoWeAre/><ServicesExperience/><Safety/></>}</main><Footer brand={brand}/><BrandSwitcher brand={brand} onChange={setBrand}/></>
}
