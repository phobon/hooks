import { useState, useEffect, useCallback } from 'react';

export interface ICoordinates {
  accuracy?: number
  altitude?: number;
  altitudeAccuracy?: number;
  heading?: number;
  latitude?: number;
  longitude?: number;
  speed?: number;
}
export const useGeolocation = (): Array<ICoordinates | (() => void)> => {
  const [geolocation, setGeolocation] = useState<ICoordinates>(null);

  const getGeolocation = useCallback(() => {
    if (!navigator.geolocation) {
      console.error('Geolocation not available, or failed.');
      return;
    }

    navigator.geolocation.getCurrentPosition(({ coords }: { coords?: ICoordinates }) => setGeolocation(coords));
  }, []);

  useEffect(() => {
    getGeolocation();
  }, []);

  return [geolocation, getGeolocation];
};