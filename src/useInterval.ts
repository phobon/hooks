import { useEffect, useRef } from 'react';

// A custom hook that makes setInterval declarative in a hooks world.
// Adapted from https://overreacted.io/making-setinterval-declarative-with-react-hooks/ by Dan Abramov
export const useInterval = (callback: () => void, delay?: number): void => {
  const savedCallback = useRef<() => void>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  });

  // Set up the interval.
  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }

    return null;
  }, [delay]);
};