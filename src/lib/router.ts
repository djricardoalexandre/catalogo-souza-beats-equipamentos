// Minimal hash-based router

import { useState, useEffect, useCallback } from 'react';

export interface Route {
  path: string;
  params: Record<string, string>;
}

function parseHash(): Route {
  const hash = window.location.hash.slice(1) || '/';
  const parts = hash.split('/').filter(Boolean);
  return {
    path: hash,
    params: {},
  };
}

export function useHashRoute(): [Route, (path: string) => void] {
  const [route, setRoute] = useState<Route>(parseHash);

  useEffect(() => {
    const handler = () => {
      setRoute(parseHash());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  const navigate = useCallback((path: string) => {
    window.location.hash = path;
  }, []);

  return [route, navigate];
}

// Parse the hash into structured segments
export function parseRoute(hash: string): { segments: string[]; query: URLSearchParams } {
  const clean = hash.replace(/^#\/?/, '');
  const [pathPart, queryPart] = clean.split('?');
  const segments = pathPart.split('/').filter(Boolean);
  const query = new URLSearchParams(queryPart || '');
  return { segments, query };
}
