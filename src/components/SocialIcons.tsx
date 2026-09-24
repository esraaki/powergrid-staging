const icons=[['Facebook','/assets/facebook.svg'],['Instagram','/assets/instagram.svg'],['LinkedIn','/assets/linkedin.svg']];
export function SocialIcons(){return <div className="social-icons" aria-label="Social media links">{icons.map(([label,src])=><a href="#contact" aria-label={label} key={label}><img src={src} alt="" aria-hidden="true"/></a>)}</div>}
