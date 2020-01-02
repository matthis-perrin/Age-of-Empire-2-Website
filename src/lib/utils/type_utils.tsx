export function notUndefined<T>(val: T | undefined): val is T {
  return val !== undefined;
}

export function removeUndefined<T>(arr: (T | undefined)[]): T[] {
  return arr.filter(notUndefined);
}

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type Brand<Type, Name> = Type & {__brand: Name};
