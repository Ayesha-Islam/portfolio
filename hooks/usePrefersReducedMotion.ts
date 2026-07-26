import { useSyncExternalStore } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

const subscribe = (callback: () => void) => {
  const mediaQuery = window.matchMedia(QUERY);

  mediaQuery.addEventListener(
    'change',
    callback,
  );

  return () => {
    mediaQuery.removeEventListener(
      'change',
      callback,
    );
  };
};

const getSnapshot = () => {
  return window.matchMedia(QUERY).matches;
};

/**
 * Assume reduced motion during server rendering.
 * This prevents animated elements from being hidden
 * before React hydrates the page.
 */
const getServerSnapshot = () => true;

function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
}

export default usePrefersReducedMotion;