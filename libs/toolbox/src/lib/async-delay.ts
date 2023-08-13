type Data<T> = { resolveWith: T } | { rejectWith: T };

/**
 * @param ms The amount of milliseconds before resolving.
 * @param result An optional value to return.
 * @returns A promise that will resolve after `ms` milliseconds with `result` if it was provided.
 */
export function asyncDelay(ms: number): Promise<void>;
export function asyncDelay<TResult>(
  ms: number,
  data: Data<TResult>
): Promise<TResult>;
export function asyncDelay<TResult>(
  ms: number,
  data?: Data<TResult>
): Promise<TResult> {
  return new Promise<TResult>((resolve, reject) =>
    globalThis.setTimeout(() => {
      if (data && 'rejectWith' in data) {
        reject(data.rejectWith);
      } else {
        // Can this be improved?
        resolve(data?.resolveWith as TResult);
      }
    }, ms)
  );
}
