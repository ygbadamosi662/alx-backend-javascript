export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  const arr = [];
  for (const elem of set.values()) {
    if (elem.startsWith(startString)) {
      const sub = elem.substring(startString.length);
      if (sub !== elem) arr.push(sub);
    }
  }
  return arr.join('-');
}
