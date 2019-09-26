import { useState, useCallback, useEffect } from 'react';

const useCachedState = (key, initialValue = null) => {
  const [state, setState] = useState(window.localStorage.getItem(key));

  // We need to get creative about how we set the initial state here.
  // If there's no localStorage item and the initialValue is not null, set it.
  // Pass in the key as a dep so this doesn't get called again til the key changes.
  useEffect(() => {
    if (state == null && initialValue) {
      // Create a new state object and then stringify it here because we need to ensure
      // that localState can handle it
      const newState = {};
      newState[key] = initialValue;
      const storageState = JSON.stringify(newState);

      window.localStorage.setItem(key, storageState);
      setState(storageState);
    };
  }, [key]);

  const setCachedState = useCallback((value) => {
    const newState = JSON.parse(state);
    newState[key] = value;
    const storageState = JSON.stringify(newState);

    setState(storageState);
    window.localStorage.setItem(key, storageState);
  }, [key, state]);

  const newState = JSON.parse(state);

  return [newState && newState[key], setCachedState];
};

export default useCachedState;