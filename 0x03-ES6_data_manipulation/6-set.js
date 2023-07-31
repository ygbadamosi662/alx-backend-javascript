export default function setFromArray(arr) {
  if (!(Array.isArray(arr))) throw new TypeError('arr must be an array');

  return new Set(arr);
}
