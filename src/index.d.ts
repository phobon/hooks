/// <reference types="react" />

declare type SetCachedStateType = (value: any) => void;
declare type CachedStateType = object | string;
declare const useCachedState: (key: string, initialValue?: any) => Array<CachedStateType | SetCachedStateType>;
export default useCachedState;

declare const useInterval: (callback: () => void, delay?: number) => void;
export default useInterval;

declare const useOnKeyPress: (targetKey: string, onKeyDownHandler?: (e: KeyboardEvent) => void, onKeyUpHandler?: (e: KeyboardEvent) => void, targetModifier?: any, debug?: boolean) => void;
export default useOnKeyPress;

interface WindowSize {
  innerWidth?: number;
  innerHeight?: number;
  outerWidth?: number;
  outerHeight?: number;
}

declare const useWindowSize: () => WindowSize;
export default useWindowSize;
