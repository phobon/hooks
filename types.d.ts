/// <reference types="react" />
export declare const useCachedState: <T>(key: string, initialValue: T) => (T | import("react").Dispatch<import("react").SetStateAction<T>>)[];

export interface ICoordinates {
  accuracy?: number;
  altitude?: number;
  altitudeAccuracy?: number;
  heading?: number;
  latitude?: number;
  longitude?: number;
  speed?: number;
}
export declare const useGeolocation: () => Array<ICoordinates | (() => void)>;

export declare const useInterval: (callback: () => void, delay?: number) => void;

export declare const useOnKeyPress: (targetKey: string, onKeyDownHandler?: (e: KeyboardEvent) => void, onKeyUpHandler?: (e: KeyboardEvent) => void, targetModifier?: any, debug?: boolean) => void;

export interface WindowSize {
  innerWidth?: number;
  innerHeight?: number;
  outerWidth?: number;
  outerHeight?: number;
}
export declare const useWindowSize: () => WindowSize;