export const weakMap = new WeakMap();

const MAXIMUM_CALLS = 5;

export function queryAPI(endPoint) {
  if (!(weakMap.has(endPoint))) weakMap.set(endPoint, 0);

  weakMap.set(endPoint, weakMap.get(endPoint) + 1);
  if (weakMap.get(endPoint) >= MAXIMUM_CALLS) throw new Error('Endpoint load is high');
}
