export default function getStudentsByLocation(arr, city) {
  if (Array.isArray(arr)) {
    if (typeof city === 'string') {
      return arr.filter((obj) => obj.location === city);
    }
    throw TypeError('city must be a string');
  }
  return [];
}
