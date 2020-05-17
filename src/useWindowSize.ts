import { useState, useCallback, useEffect } from 'react';

export interface WindowSize {
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

export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  const handleResize = useCallback(() => setWindowSize(getWindowSize()), []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return (() => window.removeEventListener('resize', handleResize));
  }, []);

  return windowSize;
};