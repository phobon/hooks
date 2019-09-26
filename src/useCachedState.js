import { useState } from 'react';

const useCachedState = (key, initialValue = null) => {
  const [state, setState] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (e) {
      console.error(e);
      return null;
    }
  });

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