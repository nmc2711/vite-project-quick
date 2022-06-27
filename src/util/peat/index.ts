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

export function rawType(value: any) {
  return Object.prototype.toString.call(value).slice(8, -1);
}

export default rawType;

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

export function isNotNull<T>(x: T): x is Exclude<T, null> {
  return x !== null;
}

export function isNotUndefined<T>(x: T): x is Exclude<T, undefined> {
  return x !== undefined;
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

export function diff(from: Date, to: Date): number {
  const timeDiff = Math.abs(to.getTime() - from.getTime());
  return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
}

export async function measureTimeMillis<T>(block: () => T | Promise<T>) {
  const start = Date.now()
  await block()
  return Date.now() - start
}

export async function measureAndGetResult<T>(
  block: () => T | Promise<T>,
  onTime: (millis: number) => any
) {
  const start = Date.now()
  const result = await block()
  onTime(Date.now() - start)
  return result
}

export function isScrollbarVisible(el: { scrollHeight: number, clientHeight: number }) {
  return el.scrollHeight > el.clientHeight
}

export function scrollDistanceToBottom(el: { scrollTop: number, clientHeight: number, scrollHeight: number }) {
  const { scrollTop, clientHeight, scrollHeight } = el

  return scrollHeight - scrollTop - clientHeight
}

export function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function isEmpty(val: any): boolean {
  if (val === null || val === undefined || val === "" || val === Number.NaN)
    return true;
  else return false;
}