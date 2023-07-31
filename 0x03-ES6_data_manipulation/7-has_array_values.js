export default function hasValuesFromArray(seti, arr) {
  const _intersection = [];
  for (const elem of arr) {
    if (seti.has(elem)) {
      _intersection.push(elem);
    }
  }
  return _intersection.length === arr.length;
}
