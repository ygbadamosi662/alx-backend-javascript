export default function updateUniqueItems(mappy) {
  if (!(mappy instanceof Map)) throw new Error('Cannot process');

  for (const [key, value] of mappy) {
    if (value === 1) mappy.set(key, 100);
  }
  return mappy;
}
