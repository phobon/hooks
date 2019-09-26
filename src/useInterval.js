import { useEffect, useRef } from 'react';

// A custom hook that makes setInterval declarative in a hooks world.
// Adapted from https://overreacted.io/making-setinterval-declarative-with-react-hooks/ by Dan Abramov
const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  });

  // Set up the interval.
  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    }

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }

    return null;
  }, [delay]);
};

export default useInterval;