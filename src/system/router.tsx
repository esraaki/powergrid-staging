import { createContext, useContext, useEffect, useState, type AnchorHTMLAttributes, type MouseEvent } from 'react';

/* Minimal history router — six route shapes do not justify a dependency.
   Direct loads / refreshes work because vercel.json rewrites to index.html. */

export type Route =
  | { page: 'home' }
  | { page: 'about' }
  | { page: 'safety' }
  | { page: 'careers' }
  | { page: 'contact' }
  | { page: 'service'; slug: string }
  | { page: 'notfound' };

export function parseRoute(pathname: string): Route {
  const p = pathname.replace(/\/+$/, '') || '/';
  if (p === '/') return { page: 'home' };
  const svc = p.match(/^\/services\/([^/]+)$/);
  if (svc) return { page: 'service', slug: decodeURIComponent(svc[1]) };
  const named = p.match(/^\/(about|safety|careers|contact)$/);
  if (named) return { page: named[1] } as Route;
  return { page: 'notfound' };
}

const RouterCtx = createContext<{ path: string; navigate: (to: string, opts?: { replace?: boolean }) => void }>({
  path: '/',
  navigate: () => {},
});

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = (to: string, opts?: { replace?: boolean }) => {
    const [pathname, hash] = to.split('#');
    const target = pathname || window.location.pathname;
    if (target !== window.location.pathname) {
      window.history[opts?.replace ? 'replaceState' : 'pushState'](null, '', target);
      setPath(target);
      if (!hash) window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
    if (hash) requestAnimationFrame(() => document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' }));
  };

  return <RouterCtx.Provider value={{ path, navigate }}>{children}</RouterCtx.Provider>;
}

export const useRouter = () => useContext(RouterCtx);

/** Internal link. External / hash-only hrefs fall through to the browser. */
export function Link({ href = '/', onClick, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const { navigate } = useRouter();
  const internal = href.startsWith('/');
  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || !internal || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    navigate(href);
  };
  return <a href={href} onClick={handle} {...rest} />;
}
