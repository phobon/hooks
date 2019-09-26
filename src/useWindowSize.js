import { useState, useCallback, useEffect } from 'react';

const getWindowSize = () => ({
  innerWidth: window.innerWidth,
  innerHeight: window.innerHeight,
  outerWidth: window.outerWidth,
  outerHeight: window.outerHeight,
});

/**
 * Hook to query the current window size. Triggers on window resize.
 */
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  const handleResize = useCallback(() => setWindowSize(getWindowSize()));

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return (() => window.removeEventListener('resize', handleResize));
  }, []);

  return windowSize;
};

export default useWindowSize;