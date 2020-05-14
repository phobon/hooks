import { useEffect, useState } from 'react';

type SetCachedStateType = (value: any) => void;
type CachedStateType = object | string;

export const useCachedState = (key: string, initialValue: any = ''): Array<CachedStateType | SetCachedStateType> => {
  const [state, setState] = useState<CachedStateType>(null);

  // Wrapping this in a useEffect so that SSR instances can handle it.
  useEffect(() => {
    const result: string = window.localStorage.getItem(key);
    if (result) {
      setState(JSON.parse(result));
    } else {
      setState(initialValue);
    }
  }, []);

  const setCachedState = (value: any) => {
    try {
      const newState = value instanceof Function ? value(state) : value;
      setState(newState);
      
      window.localStorage.setItem(key, JSON.stringify(newState));
    } catch (e) {
      console.error(e);
    }
  };

  return [state, setCachedState];
};