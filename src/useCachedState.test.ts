import 'jest-localstorage-mock';
import { renderHook, cleanup, act } from '@testing-library/react-hooks';

import useCachedState from './useCachedState';

afterEach(() => cleanup);

test('localStorage should work', () => {
  const key = 'testKey';
  const output = 'test';
  window.localStorage.setItem(key, output);
  const returnedOutput = window.localStorage.getItem(key);

  expect(returnedOutput).toBe(output);
});

const storageObject = { key: 'value' };
const storageArray = [0, 1];

test('useCachedState with simple values', () => {
  const { result } = renderHook(() => useCachedState('cachedstate:string', 'test'));

  expect(result.current[0]).toBe('test');

  const setCachedState = result.current[1] as (value: any) => void;

  act(() => setCachedState('something else'));
  expect(result.current[0]).toBe('something else');

  act(() => setCachedState(115511));
  expect(result.current[0]).toBe(115511);
});

test('useCachedState with objects', () => {
  const { result } = renderHook(() => useCachedState('cachedstate:object', storageObject));

  expect(result.current[0]).toEqual(storageObject);

  const setCachedState = result.current[1] as (value: any) => void;

  const newObject = { key1: [1, 2, 3], key2: { subKey: 'test' } };
  act(() => setCachedState(newObject));
  expect(result.current[0]).toEqual(newObject);

  act(() => setCachedState(storageArray));
  expect(result.current[0]).toEqual(storageArray);
});