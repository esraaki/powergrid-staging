export type DesignVariation='a'|'b'|'c';
export function DesignSwitcher({variation,onChange}:{variation:DesignVariation;onChange:(v:DesignVariation)=>void}){
 return <div className="design-switcher" aria-label="Design variation"><span>DESIGN</span><div><button className={variation==='a'?'active':''} onClick={()=>onChange('a')}>A</button><button className={variation==='b'?'active':''} onClick={()=>onChange('b')}>B</button><button className={variation==='c'?'active':''} onClick={()=>onChange('c')}>C</button></div></div>
}
