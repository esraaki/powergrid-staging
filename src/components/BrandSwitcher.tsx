import {useState} from 'react';
export type BrandKey='ampp'|'csr'|'james'|'x'|'y';
const brands=[
 {key:'ampp' as const,name:'AMPP Construction',logo:'/assets/ampp-logo-dark.svg'},
 {key:'csr' as const,name:'Collective Strategic Resources',logo:'/assets/csr-logo.svg'},
 {key:'james' as const,name:'James Powerline Construction',logo:'/assets/james-logo.svg'}
];
const demos=[{key:'x' as const,name:'Variation X'},{key:'y' as const,name:'Variation Y'}];
export function BrandSwitcher({brand,onChange}:{brand:BrandKey;onChange:(b:BrandKey)=>void}){const [open,setOpen]=useState(false);return <div className={`brand-switcher ${open?'open':''}`}><div className="brand-options" aria-hidden={!open}>{brands.map(b=><button key={b.key} className={brand===b.key?'active':''} onClick={()=>{onChange(b.key);setOpen(false)}} title={b.name}><img src={b.logo} alt=""/></button>)}<div className="demo-options">{demos.map(d=><button key={d.key} className={`demo-card ${brand===d.key?'active':''}`} onClick={()=>{onChange(d.key);setOpen(false)}}>{d.name}</button>)}</div></div><button className="brand-toggle" onClick={()=>setOpen(v=>!v)} aria-expanded={open}><span>⌃</span></button></div>}
