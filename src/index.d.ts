declare type SetCachedStateType = (value: any) => void;
declare type CachedStateType = object | string;
declare const useCachedState: (key: string, initialValue?: any) => Array<CachedStateType | SetCachedStateType>;
declare const useInterval: (callback: () => void, delay?: number) => void;
declare const useOnKeyPress: (targetKey: string, onKeyDownHandler?: (e: KeyboardEvent) => void, onKeyUpHandler?: (e: KeyboardEvent) => void, targetModifier?: any, debug?: boolean) => void;

interface WindowSize {
  innerWidth?: number;
  innerHeight?: number;
  outerWidth?: number;
  outerHeight?: number;
}

declare const useWindowSize: () => WindowSize;

export {
  useCachedState,
  useInterval,
  useOnKeyPress,
  useWindowSize,
}
