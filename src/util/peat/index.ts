import { produce } from 'immer';

export type Unpack<T> = T extends Promise<infer U> ? U : T;

export type PromiseReturnType<T extends (...args: any[]) => any> = Unpack<
  ReturnType<T>
>;

export type Nullable<T> = T | undefined | null;

export function isFunction(fn: any): fn is Function {
  return typeof fn === 'function';
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const delayRun = (fn: Function) => setTimeout(fn);

export function objectPick<O, T extends keyof O>(obj: O, keys: T[], omitUndefined = false) {
  return keys.reduce((n, k) => {
    if (k in obj) {
      if (!omitUndefined || obj[k] !== undefined)
        n[k] = obj[k]
    }
    return n
  }, {} as Pick<O, T>)
}

export function hasOwnProperty<T>(obj: T, v: PropertyKey) {
  if (obj == null)
    return false
  return Object.prototype.hasOwnProperty.call(obj, v)
}

export function isInstance<T extends new (...args: any[]) => any>(
  value: any,
  ctor: T
): value is InstanceType<T> {
  return value instanceof ctor;
}
// arr gliding
export const pushedArr = (initialArr, nextArr) => {
  const nextItem = produce(initialArr, draft => {
    draft.push(nextArr);
  });
  return nextItem;
}

export const splicedArr = (initialArr, selectedKey) => {
  const nextItem = produce(initialArr, draft => {
    draft.splice(selectedKey, 1);
  });
  return nextItem;
}