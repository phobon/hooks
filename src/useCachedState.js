import { useState } from 'react';

const useCachedState = (key, initialValue = '') => {
  const [state, setState] = useState(null);

  // Wrapping this in a useEffect so that SSR instances can handle it.
  useEffect(() => {
    const result = window.localStorage.getItem(key) || initialValue;
    setState(JSON.parse(result));
  }, []);

  const setCachedState = value => {
    try {
      const newState = value instanceof Function ? value(storedValue) : value;
      setState(newState);
      
      window.localStorage.setItem(key, JSON.stringify(newState));
    } catch (e) {
      console.error(e);
    }
  };

  return [state, setCachedState];
};

export default useCachedState;