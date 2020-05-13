/// <reference types="react" />
import { useState, useCallback, useEffect } from 'react';

interface WindowSize {
  innerWidth?: number;
  innerHeight?: number;
  outerWidth?: number;
  outerHeight?: number;
}

const getWindowSize = (): WindowSize => ({
  innerWidth: window.innerWidth,
  innerHeight: window.innerHeight,
  outerWidth: window.outerWidth,
  outerHeight: window.outerHeight,
});

/**
 * Hook to query the current window size. Triggers on window resize.
 */
const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  const handleResize = useCallback(() => setWindowSize(getWindowSize()), []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return (() => window.removeEventListener('resize', handleResize));
  }, []);

  return windowSize;
};

export default useWindowSize;