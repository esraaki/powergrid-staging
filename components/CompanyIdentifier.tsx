import { company } from '../data/company';
export function CompanyIdentifier(){return <div className="identifier-wrap"><div className="identifier"><span className="identifier-rule"/><span>A {company.parent} Company</span><strong>PGS</strong></div></div>}
