import {useState} from 'react';
export type BrandKey='ampp'|'csr'|'james';
const brands=[
 {key:'ampp' as const,name:'AMPP Construction',logo:'/assets/ampp-logo-dark.svg'},
 {key:'csr' as const,name:'Collective Strategic Resources',logo:'/assets/csr-logo.svg'},
 {key:'james' as const,name:'James Powerline Construction',logo:'/assets/james-logo.svg'}
];
export function BrandSwitcher({brand,onChange}:{brand:BrandKey,onChange:(b:BrandKey)=>void}){const [open,setOpen]=useState(false);return <div className={`brand-switcher ${open?'open':''}`}><div className="brand-options" aria-hidden={!open}>{brands.map(b=><button key={b.key} className={brand===b.key?'active':''} onClick={()=>{onChange(b.key);setOpen(false)}} aria-label={`Preview ${b.name}`} title={b.name}><img src={b.logo} alt=""/></button>)}</div><button className="brand-toggle" onClick={()=>setOpen(v=>!v)} aria-expanded={open} aria-label={open?'Close brand previews':'Open brand previews'}><span>⌃</span></button></div>}
