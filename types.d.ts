declare type SetCachedStateType = (value: any) => void;
declare type CachedStateType = object | string;
export declare const useCachedState: (key: string, initialValue?: any) => Array<CachedStateType | SetCachedStateType>;

export declare const useInterval: (callback: () => void, delay?: number) => void;

export declare const useOnKeyPress: (targetKey: string, onKeyDownHandler?: (e: KeyboardEvent) => void, onKeyUpHandler?: (e: KeyboardEvent) => void, targetModifier?: any, debug?: boolean) => void;

interface WindowSize {
  innerWidth?: number;
  innerHeight?: number;
  outerWidth?: number;
  outerHeight?: number;
}
export declare const useWindowSize: () => WindowSize;