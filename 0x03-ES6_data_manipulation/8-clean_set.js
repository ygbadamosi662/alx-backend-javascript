export default function cleanSet(set, startString) {
  const arr = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const elem of set.values()) {
    if (elem.startsWith(startString)) {
      arr.push(elem.substring(startString.length));
    }
  }
  return arr.join('-');
}
