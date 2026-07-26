import { useEffect, type RefObject } from 'react';

type OutsideEvent = MouseEvent | TouchEvent;

type OutsideClickHandler = (
  event: OutsideEvent,
) => void;

const useOnClickOutside = <T extends HTMLElement>(
  ref: RefObject<T | null>,
  handler: OutsideClickHandler,
) => {
  useEffect(() => {
    const listener = (event: OutsideEvent) => {
      const target = event.target;

      if (
        !target ||
        !ref.current ||
        ref.current.contains(target as Node)
      ) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener(
        'mousedown',
        listener,
      );

      document.removeEventListener(
        'touchstart',
        listener,
      );
    };
  }, [ref, handler]);
};

export default useOnClickOutside;