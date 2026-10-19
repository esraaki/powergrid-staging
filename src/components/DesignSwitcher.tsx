export type DesignVariation='a'|'b';
export function DesignSwitcher({variation,onChange}:{variation:DesignVariation;onChange:(v:DesignVariation)=>void}){
 return <div className="design-switcher" aria-label="Design variation">
   <span>DESIGN</span>
   <div><button className={variation==='a'?'active':''} onClick={()=>onChange('a')} aria-pressed={variation==='a'}>A</button><button className={variation==='b'?'active':''} onClick={()=>onChange('b')} aria-pressed={variation==='b'}>B</button></div>
 </div>
}
